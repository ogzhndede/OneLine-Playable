using System.Collections.Generic;
using _InGame.Scripts.Managers;
using UnityEngine;

namespace _InGame.Scripts.DrawContollers
{
    public class DrawingController : MonoBehaviour
    {
        //DEPENDENCIES

        [SerializeField] private LineRenderer _lineRenderer;

        //CONTROL VARIABLES
        public List<DrawPointBase> AllDrawPoints = new List<DrawPointBase>();
        public List<DrawPointBase> SelectedDrawPoints = new List<DrawPointBase>();


        #region CLICK ACTIONS

        public void ClickAction([Bridge.Ref] Vector2 touchPoint)
        {
            var jointPoint = GetClosestDrawPointOnWorldSpace(touchPoint, DrawPointType.JointPoint);
            AddToDrawPoints(jointPoint);
        }

        public void DragAction([Bridge.Ref] Vector2 touchPoint)
        {
            var currentDrawPoint = GetCurrentDrawPoint();
            if(currentDrawPoint == null) return;
            var closestBorderPoint = currentDrawPoint?.GetClosestBorderPoint(touchPoint);

            float distanceToCurrentDrawPoint = Vector2.Distance(touchPoint, currentDrawPoint.transform.position);
            float distanceToClosestBorderPoint = Vector2.Distance(touchPoint, closestBorderPoint.transform.position);

            //CHECK AND ADD TO LIST
            if (distanceToCurrentDrawPoint > distanceToClosestBorderPoint &&
                closestBorderPoint.CanPointSelectable())
            {
                AddToDrawPoints(closestBorderPoint);
            }
        }

        public void UnClickAction()
        {
            CheckFailDrawing();
            ClearDrawPoints();
        }

        private void CheckFailDrawing()
        {
            if (DrawingManager.Instance.GetDrawingCompletePercent() < 1 && SelectedDrawPoints.Count > 4)
            {
                EventManager.OnFailedToDraw?.Invoke();
                EventManager.OnPlaySound?.Invoke(SoundTypes.Wrong, 1, 1);
            }
        }

        #endregion

        private void UpdateLineRenderer()
        {
            if (_lineRenderer == null || SelectedDrawPoints.Count < 2) return;

            _lineRenderer.positionCount = SelectedDrawPoints.Count;

            for (int i = 0; i < SelectedDrawPoints.Count; i++)
            {
                _lineRenderer.SetPosition(i, SelectedDrawPoints[i].transform.position);
            }
            
            EventManager.OnCheckFillSlider?.Invoke();
        }

        private void ClearDrawPoints()
        {
            _lineRenderer.positionCount = 0;

            foreach (var point in SelectedDrawPoints)
            {
                point.ResetPoint();
            }

            SelectedDrawPoints.Clear();
            EventManager.OnCheckFillSlider?.Invoke();
        }

        private void AddToDrawPoints(DrawPointBase drawPoint)
        {
            switch (drawPoint._drawPointType)
            {
                case DrawPointType.FlowPoint:
                    if (SelectedDrawPoints.Contains(drawPoint)) return;
                    break;
                case DrawPointType.JointPoint:
                    if(IsLastPointJoint()) return;
                    break;
            }

            drawPoint.SelectPoint();
            SelectedDrawPoints.Add(drawPoint);
            UpdateLineRenderer();

            //CHECK WIN STATE
            if (DrawingManager.Instance.GetDrawingCompletePercent() >= 1)
            {
                EventManager.OnCompleteDrawing?.Invoke();
                EventManager.OnPlaySound?.Invoke(SoundTypes.Correct, 1, 1);
            }
        }
        

        private bool IsLastPointJoint()
        {
            if(SelectedDrawPoints.Count < 2) return false;
            
            var pointBase = SelectedDrawPoints[SelectedDrawPoints.Count - 2];
            if(pointBase._drawPointType == DrawPointType.JointPoint) return true;
            return false;
        }


        #region GETTERS

        private DrawPointBase GetCurrentDrawPoint()
        {
            if (SelectedDrawPoints.Count == 0) return null;
            return SelectedDrawPoints[SelectedDrawPoints.Count - 1];
        }

        public DrawPointBase GetClosestDrawPointOnWorldSpace([Bridge.Ref] Vector2 touchPoint, DrawPointType pointType)
        {
            if (AllDrawPoints == null || AllDrawPoints.Count == 0) return null;

            DrawPointBase closestPoint = null;
            float minDistance = float.MaxValue;

            foreach (var point in AllDrawPoints)
            {
                if (point._drawPointType != pointType) continue;

                float distance = Vector2.Distance(touchPoint, point.transform.position);
                if (distance < minDistance)
                {
                    minDistance = distance;
                    closestPoint = point;
                }
            }

            return closestPoint;
        }

        #endregion
    }
}