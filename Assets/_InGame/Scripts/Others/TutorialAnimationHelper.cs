using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TutorialAnimationHelper : MonoBehaviour
{
    [SerializeField] private LineRenderer _lineRenderer;
    [SerializeField] private List<Transform> LineRendererPoints;

    public void AddToLineRenderer(int index)
    {
        if (index >= 0 && index < LineRendererPoints.Count)
        {
            _lineRenderer.positionCount++;  // Pozisyon sayısını artır

            // İlgili index'teki noktayı LineRenderer'a ekle
            _lineRenderer.SetPosition(_lineRenderer.positionCount - 1, LineRendererPoints[index].position);
        }
    }


    public void ClearLineRenderer()
    {
        _lineRenderer.positionCount = 0;
    }
}
