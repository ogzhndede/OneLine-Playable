using System;
using System.Collections.Generic;
using Sirenix.OdinInspector;
using UnityEngine;

namespace _InGame.Scripts.DrawContollers
{
    public enum DrawPointType
    {
        FlowPoint,
        JointPoint,
    }

    public class DrawPointBase : MonoBehaviour
    {
        public DrawPointType _drawPointType;

        [SerializeField] private List<DrawPointBase> BorderDrawPoints = new List<DrawPointBase>();

        [SerializeField] private int PointConnectionCount;

        public void SetBorderDrawPoints(List<DrawPointBase> drawPoints)
        {
            BorderDrawPoints = drawPoints;
        }

        public void SelectPoint()
        {
            PointConnectionCount++;
        }

        public void ResetPoint()
        {
            PointConnectionCount = 0;
        }

        #region GETTERs

        public DrawPointBase GetClosestBorderPoint(Vector2 point)
        {
            if (BorderDrawPoints == null || BorderDrawPoints.Count == 0) return null;

            DrawPointBase closestPoint = null;
            float minDistance = float.MaxValue; // Başlangıçta maksimum mesafe

            // Tüm border noktalarını tara
            foreach (var borderPoint in BorderDrawPoints)
            {
                float distance = Vector2.Distance(point, borderPoint.transform.position);
                if (distance < minDistance)
                {
                    minDistance = distance;
                    closestPoint = borderPoint;
                }
            }

            return closestPoint;
        }

        public bool CanPointSelectable()
        {
            if (PointConnectionCount >= BorderDrawPoints.Count) return false;
            return true;
        }

        #endregion


        private void OnDrawGizmos()
        {
            switch (_drawPointType)
            {
                case DrawPointType.FlowPoint:
                    Gizmos.color = Color.green;
                    break;
                case DrawPointType.JointPoint:
                    Gizmos.color = Color.blue;
                    break;
            }

            Gizmos.DrawSphere(transform.position, 0.075f);
        }

        private void OnDrawGizmosSelected()
        {
            foreach (var border in BorderDrawPoints)
            {
                Gizmos.color = Color.red;
                Gizmos.DrawSphere(border.transform.position, 0.1f);
            }
        }
    }
}