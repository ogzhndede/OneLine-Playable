using System;
using UnityEngine;

namespace _InGame.Scripts.DrawContollers
{
    public enum DrawPointType
    {
        NormalPoint,
        ElbowPoint,
    }
    public class ElbowPoint : MonoBehaviour
    {
        [SerializeField] private DrawPointType _drawPointType;

        private void OnDrawGizmos()
        {
            switch (_drawPointType)
            {
                case DrawPointType.NormalPoint:
                    Gizmos.color = Color.green;
                    break;
                case DrawPointType.ElbowPoint:
                    Gizmos.color = Color.blue;
                    break;
            }
            Gizmos.DrawSphere(transform.position, 0.2f);
        }
    }
}