using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FeedbackPanelController : MonoBehaviour
{
    [SerializeField] private Animator WinAnimator, FailAnimator;
    [SerializeField] private List<ParticleSystem> Confetties;
    private void OnEnable()
    {
        EventManager.OnCompleteDrawing += OnCompleteDrawing;
        EventManager.OnFailedToDraw += OnFailedToDraw;
    }

    private void OnDisable()
    {
        EventManager.OnCompleteDrawing -= OnCompleteDrawing;
        EventManager.OnFailedToDraw -= OnFailedToDraw;
    }


    private void OnCompleteDrawing()
    {
        WinAnimator.SetTrigger("TriggerFeedback");
        foreach (var confetti in Confetties)
        {
            confetti.Play();
        }
    }
    
    private void OnFailedToDraw()
    {
        FailAnimator.SetTrigger("TriggerFeedback");
    }
}
