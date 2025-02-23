using System;
using System.Collections.Generic;
using System.Linq;
using _InGame.Scripts.Utilities;
using PathCreation;
using Sirenix.OdinInspector;
using UnityEngine;

namespace _InGame.Scripts.DrawContollers
{
    public class DrawPointGenerator : MonoBehaviour
    {
        #region Dependencies

        [SerializeField] private DrawingController _drawingController;
        [SerializeField] private PathCreator _pathCreator;

        #endregion

        [SerializeField] private int HowManyPoints = 10;
        [SerializeField] private List<Vector3> GizmoPoints = new List<Vector3>();


        private void OnValidate()
        {
            UpdatePointList();
        }

        private void UpdatePointList()
        {
            if (_pathCreator == null) return;

            GizmoPoints.Clear();
            float pathLength = _pathCreator.path.length;
            float segmentLength = pathLength / HowManyPoints;

            for (int i = 0; i <= HowManyPoints; i++)
            {
                float distance = i * segmentLength;
                Vector3 point = _pathCreator.path.GetPointAtDistance(distance, EndOfPathInstruction.Stop);
                GizmoPoints.Add(point);
            }
        }

        [Button]
        private void GenerateDrawPoint()
        {
            ClearDrawPoints();

            //Draw Pointleri ciz
            foreach (Vector3 point in GizmoPoints)
            {
                GameObject newPoint = Instantiate(PrefabHolder.Instance.DrawPointPrefab, point, Quaternion.identity, transform);
                var drawPointBase = newPoint.GetComponent<DrawPointBase>();
                _drawingController.AllDrawPoints.Add(drawPointBase);
            }
        }

        [Button]
        private void SetBorderDrawPoints()
        {
            // Tüm DrawPoints'lerin border noktalarını ata
            for (int i = 0; i < _drawingController.AllDrawPoints.Count; i++)
            {
                var selectedPoint = _drawingController.AllDrawPoints[i];

                // Diğer tüm noktalarla mesafeyi hesaplayarak en yakın 2 tanesini bul
                List<DrawPointBase> nearestPoints = _drawingController.AllDrawPoints
                    .Where(p => p != selectedPoint) // Kendisi hariç
                    .OrderBy(p => Vector2.Distance(selectedPoint.transform.position, p.transform.position)) // Mesafeye göre sırala
                    .Take(2) // En yakın 4 noktayı al
                    .ToList();

                // SetBorderDrawPoints metodunu çağır
                selectedPoint.SetBorderDrawPoints(nearestPoints);
            }
        }

        [Button]
        public void UpdateDrawPointList()
        {
            _drawingController.AllDrawPoints.Clear();
            foreach (Transform child in transform)
            {
                var drawPointBase = child.GetComponent<DrawPointBase>();
                _drawingController.AllDrawPoints.Add(drawPointBase);
            }
        }

        private void ClearDrawPoints()
        {
            foreach (DrawPointBase point in _drawingController.AllDrawPoints)
            {
                DestroyImmediate(point.gameObject);
            }

            _drawingController.AllDrawPoints.Clear();
        }


        private void OnDrawGizmos()
        {
            if (_drawingController.AllDrawPoints.Count != 0) return;

            Gizmos.color = Color.yellow;
            foreach (Vector3 point in GizmoPoints)
            {
                Gizmos.DrawSphere(point, 0.05f);
            }
        }
    }
}