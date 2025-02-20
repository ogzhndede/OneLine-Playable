using System;
using System.Collections.Generic;
using _InGame.Scripts.Utilities;
using PathCreation;
using Sirenix.OdinInspector;
using UnityEngine;

namespace _InGame.Scripts.DrawContollers
{
    public class DrawPointGenerator : MonoBehaviour
    {
        [SerializeField] private PathCreator _pathCreator;

        [SerializeField] private int HowManyPoints = 10;

        [SerializeField] private List<Vector3> points = new List<Vector3>();

        private void OnValidate()
        {
            UpdatePointList();
        }

        private void UpdatePointList()
        {
            if (_pathCreator == null) return;

            points.Clear();
            float pathLength = _pathCreator.path.length;
            float segmentLength = pathLength / HowManyPoints;

            for (int i = 0; i <= HowManyPoints; i++)
            {
                float distance = i * segmentLength;
                Vector3 point = _pathCreator.path.GetPointAtDistance(distance, EndOfPathInstruction.Stop);
                points.Add(point);
            }
        }

        [Button]
        private void GenerateDrawPoint()
        {
            foreach (Transform child in transform)
            {
                DestroyImmediate(child.gameObject);
            }

            foreach (Vector3 point in points)
            {
                GameObject newPoint = Instantiate(PrefabHolder.Instance.DrawPointPrefab, point, Quaternion.identity, transform);
            }
        }


        private void OnDrawGizmos()
        {
            Gizmos.color = Color.yellow;
            foreach (Vector3 point in points)
            {
                Gizmos.DrawSphere(point, 0.1f);
            }
        }
    }
}