using System;
using _InGame.Scripts.Managers;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

namespace _InGame.Scripts.Others
{
    public class FillSliderController : MonoBehaviour
    {
        [SerializeField] private Image _FillImage;
    
        [SerializeField] private GameObject _BrainObject;
        [SerializeField] private Vector2 BrainLocationMinMax;

        Tween fillTween, moveTween;
        private void CheckFillSlider()
        {
            fillTween?.Kill();
            moveTween?.Kill();
    
            float targetFill = DrawingManager.Instance.GetDrawingCompletePercent();
    
            // Fill Process
            fillTween = _FillImage.DOFillAmount(targetFill, 0.1f).SetEase(Ease.Linear);

            // Move Process
            float targetX = Mathf.Lerp(BrainLocationMinMax.x, BrainLocationMinMax.y, targetFill);
            moveTween = _BrainObject.transform.DOLocalMoveX(targetX, 0.1f).SetEase(Ease.Linear);
        }

        private void ResetFillSlider()
        {
            fillTween?.Kill();
            moveTween?.Kill();
            
            _FillImage.fillAmount = 0;
            _BrainObject.transform.DOLocalMoveX(BrainLocationMinMax.x, 0f).SetEase(Ease.Linear);
        }
    
        //####################  EVENTS  ##########################
        private void OnEnable()
        {
            ResetFillSlider();
            EventManager.OnCheckFillSlider += OnCheckFillSlider;
        }

        private void OnDisable()
        {
            EventManager.OnCheckFillSlider -= OnCheckFillSlider;
        }

        private void OnCheckFillSlider()
        {
            CheckFillSlider();
        }
    }
}
