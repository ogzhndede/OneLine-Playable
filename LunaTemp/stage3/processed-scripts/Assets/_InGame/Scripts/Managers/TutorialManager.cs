using System;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public enum TutorialType
{
    Empty,
    Tap,
    MultiTap,
    Swipe,
    Swerve,
    DragAndDrop,
    InfiniteSwing,
    Mask,
    Joystick,
}

#region TutorialStep

[Serializable]
public class TutorialStep
{
    public TutorialType TutorialType;

    // Tap

    public Transform TapReference;
    public float TapHandScaleVertical;
    public float TapHandScaleHorizontal;

    public bool TapMask;
    public Transform TapMaskReference;
    public float TapMaskScale;

    // MultiTap

    public Transform[] MultiTapReferences;
    public float MultiTapSpeedBetweenTaps;
    public float MultiTapHandScaleVertical;
    public float MultiTapHandScaleHorizontal;
    public int MultiTapPositionsIndex;

    public bool MultiTapMask;
    public Transform MultiTapMaskReference;
    public float MultiTapMaskScale;

    // Swipe
    public Transform SwipeStartReference;
    public Transform SwipeEndReference;
    public float SwipeSpeed;
    public float SwipeHandScaleVertical;
    public float SwipeHandScaleHorizontal;

    public bool SwipeMask;
    public Transform SwipeMaskReference;
    public float SwipeMaskScale;

    // Swerve

    public Transform SwerveStartReference;
    public Transform SwerveEndReference;
    public float SwerveSpeed;
    public float SwerveHandScaleVertical;
    public float SwerveHandScaleHorizontal;

    public bool SwerveMask;
    public Transform SwerveMaskReference;
    public float SwerveMaskScale;

    // DragAndDrop
    public Transform DragAndDropStartReference;
    public Transform DragAndDropEndReference;
    public float DragAndDropSpeed;
    public float DragAndDropHandScaleVertical;
    public float DragAndDropHandScaleHorizontal;

    public bool DragAndDropMask;
    public Transform DragAndDropMaskReference;
    public float DragAndDropMaskScale;

    // InfiniteSwing

    public Transform InfiniteSwingReference;
    public float InfiniteSwingSpeed;
    public float InfiniteSwingRadius;
    public float InfiniteSwingHandScaleVertical;
    public float InfiniteSwingHandScaleHorizontal;

    public bool InfiniteSwingMask;
    public Transform InfiniteSwingMaskReference;
    public float InfiniteSwingMaskScale;

    // Mask
    public Transform MaskReference;
    public float MaskScale;

    // Joystick
    public Transform JoystickReference;
    public float JoystickScale;
}

#endregion

namespace PlayableAdsTool
{
    public class TutorialManager : SingletonBehaviour<TutorialManager>
    {
        [Header("Tutorial Steps")] [SerializeField]
        TutorialStep[] TutorialSteps;

        [Header("General Settings"), Space(10f)] [SerializeField]
        private float _tutorialLoopDuration;

        [Header("Components"), Space(10f)] [SerializeField]
        private Animator _handAnimator;

        [SerializeField] private RectTransform _hand;
        [SerializeField] private Image _maskImage;
        [SerializeField] private Image _maskBgImage;
        [SerializeField] private RectTransform _maskRectTransform;
        [SerializeField] private RectTransform _joystickRectTransform;


        [HideInInspector] public int CurrentTutorialStep = 0;
        private RectTransform _tutorialManagerRectTransform;

        private Tween _activeTween;
        private Image _handImage;

        private ScreenOrientation _currentOriantitaon = ScreenOrientation.Vertical;
        private float _timer;
        private bool _firstInput;
        private bool _isGameFinish;

        private void OnEnable()
        {
            EventManager.OnScreenChange += ScreenChange;
            EventManager.OnSetTutorialStep += SetTutorialStep;
            EventManager.OnGameFinish += GameFinish;
        }

        private void OnDisable()
        {
            EventManager.OnScreenChange -= ScreenChange;
            EventManager.OnSetTutorialStep -= SetTutorialStep;
            EventManager.OnGameFinish -= GameFinish;
        }

        private void Start()
        {
            _tutorialManagerRectTransform = GetComponent<RectTransform>();
            _hand.gameObject.SetActive(false);
            _handImage = _hand.GetComponent<Image>();
            SetTutorialElements(TutorialType.Empty, false);
            EventManager.OnSetTutorialStep?.Invoke(0);
        }

        private void Update()
        {
            TimeChecker();
            TapChecker();
        }

        #region Tutorials

        private void Tap()
        {
            var step = TutorialSteps[CurrentTutorialStep];
            _tutorialManagerRectTransform.position = CalculatePosition(step.TapReference);

            if (step.TapMask) SetMask(CalculatePosition(step.TapMaskReference), step.TapMaskScale);

            _hand.gameObject.SetActive(true);
            _handAnimator.SetTrigger("TapDown");

            _activeTween = DOVirtual.DelayedCall(0.25f, () => { _handAnimator.SetTrigger("TapUp"); }).OnComplete(() =>
            {
                _activeTween = DOVirtual.DelayedCall(0.35f, () => { Tap(); });
            });
        }

        private void MultiTap()
        {
            _activeTween.Kill();
            var step = TutorialSteps[CurrentTutorialStep];
            var duration = 0f;

            if (step.MultiTapPositionsIndex >= step.MultiTapReferences.Length) step.MultiTapPositionsIndex = 0;
            duration = step.MultiTapSpeedBetweenTaps;

            if (step.MultiTapMask) SetMask(CalculatePosition(step.MultiTapMaskReference), step.MultiTapMaskScale);

            _handAnimator.SetTrigger("TapIdle");
            _hand.gameObject.SetActive(true);

            _activeTween = _tutorialManagerRectTransform
                .DOMove(CalculatePosition(step.MultiTapReferences[step.MultiTapPositionsIndex]), duration)
                .SetSpeedBased().SetEase(Ease.Linear).OnComplete(
                    () =>
                    {
                        _handAnimator.SetTrigger("TapDown");
                        _activeTween = DOVirtual.DelayedCall(0.25f, () => { _handAnimator.SetTrigger("TapUp"); })
                            .OnComplete(() =>
                            {
                                _activeTween = DOVirtual.DelayedCall(0.25f, () =>
                                {
                                    step.MultiTapPositionsIndex++;
                                    MultiTap();
                                });
                            });
                    });
        }

        private void Swipe()
        {
            _activeTween.Kill();
            var step = TutorialSteps[CurrentTutorialStep];

            _tutorialManagerRectTransform.position = CalculatePosition(step.SwipeStartReference);

            if (step.SwipeMask) SetMask(CalculatePosition(step.SwipeMaskReference), step.SwipeMaskScale);

            _handAnimator.SetTrigger("TapIdle");
            _hand.gameObject.SetActive(true);

            _activeTween = _tutorialManagerRectTransform
                .DOMove(CalculatePosition(step.SwipeEndReference), step.SwipeSpeed).SetSpeedBased().SetEase(Ease.Linear)
                .OnComplete(() =>
                {
                    _activeTween = DOVirtual.DelayedCall(0.3f, () =>
                    {
                        _hand.gameObject.SetActive(false);
                        _activeTween = DOVirtual.DelayedCall(0.15f, Swipe);
                    });
                });
        }

        private void DragAndDrop()
        {
            _activeTween.Kill();
            var step = TutorialSteps[CurrentTutorialStep];

            var start = CalculatePosition(step.DragAndDropStartReference);
            var end = CalculatePosition(step.DragAndDropEndReference);
            var duration = step.DragAndDropSpeed;

            if (step.DragAndDropMask)
                SetMask(CalculatePosition(step.DragAndDropMaskReference), step.DragAndDropMaskScale);

            _tutorialManagerRectTransform.position = start;
            _hand.gameObject.SetActive(true);
            _handAnimator.SetTrigger("TapDown");
            _activeTween = DOVirtual.DelayedCall(0.3f, () =>
            {
                _activeTween = _tutorialManagerRectTransform.DOMove(end, duration)
                    .SetEase(Ease.Linear)
                    .SetSpeedBased()
                    .OnComplete(() =>
                    {
                        _handAnimator.SetTrigger("TapUp");
                        _activeTween = DOVirtual.DelayedCall(0.3f, () =>
                        {
                            _hand.gameObject.SetActive(false);
                            DragAndDrop();
                        });
                    });
            });
        }

        private void Swerve()
        {
            _activeTween.Kill();
            var step = TutorialSteps[CurrentTutorialStep];

            var start = CalculatePosition(step.SwerveStartReference);
            var end = CalculatePosition(step.SwerveEndReference);
            var speed = step.SwerveSpeed;

            Vector3 midPos = Vector2.Lerp(start, end, 0.5f);
            _tutorialManagerRectTransform.position = midPos;

            if (step.SwipeMask) SetMask(CalculatePosition(step.SwerveMaskReference), step.SwerveMaskScale);

            _hand.gameObject.SetActive(true);

            _handAnimator.SetTrigger("TapDown");
            _activeTween = DOVirtual.DelayedCall(0.3f, () =>
            {
                _activeTween = _tutorialManagerRectTransform.DOMove(end, speed).SetSpeedBased().SetEase(Ease.Linear)
                    .OnComplete(() =>
                    {
                        _activeTween = _tutorialManagerRectTransform.DOMove(start, speed).SetSpeedBased()
                            .SetEase(Ease.Linear).OnComplete(
                                () =>
                                {
                                    _activeTween = _tutorialManagerRectTransform.DOMove(midPos, speed).SetSpeedBased()
                                        .SetEase(Ease.Linear).OnComplete(
                                            () =>
                                            {
                                                _handAnimator.SetTrigger("TapUp");
                                                _activeTween = DOVirtual.DelayedCall(0.4f, () =>
                                                {
                                                    _hand.gameObject.SetActive(false);
                                                    Swerve();
                                                });
                                            });
                                });
                    });
            });
        }

        private void InfiniteSwing()
        {
            _activeTween.Kill();

            var step = TutorialSteps[CurrentTutorialStep];
            var start = CalculatePosition(step.InfiniteSwingReference);
            var infiniteSwingRadius = step.InfiniteSwingRadius;
            var speed = step.InfiniteSwingSpeed;

            _tutorialManagerRectTransform.position = start;

            if (step.InfiniteSwingMask)
                SetMask(CalculatePosition(step.InfiniteSwingReference), step.InfiniteSwingMaskScale);

            _hand.gameObject.SetActive(true);

            float t = 0f;
            float angle = 0f;


            _activeTween = DOTween.To(() => t, x => t = x, 1f, speed)
                .SetEase(Ease.Linear)
                .SetLoops(-1, LoopType.Restart)
                .OnUpdate(() =>
                {
                    angle = Mathf.Lerp(0f, Mathf.PI * 2f, t);
                    Vector2 position = new Vector2(
                        start.x + infiniteSwingRadius * Mathf.Cos(angle),
                        start.y + infiniteSwingRadius * Mathf.Sin(2f * angle) / 2f
                    );
                    _tutorialManagerRectTransform.position = position;
                });
        }

        private void Mask()
        {
            var step = TutorialSteps[CurrentTutorialStep];
            SetMask(CalculatePosition(step.MaskReference), step.MaskScale);
        }

        private void Joystick()
        {
            var step = TutorialSteps[CurrentTutorialStep];
            _joystickRectTransform.position = CalculatePosition(step.JoystickReference);
            _joystickRectTransform.localScale = new Vector3(step.JoystickScale, step.JoystickScale, step.JoystickScale);
        }

        #endregion

        private void SetTutorialElements(TutorialType tutorialType, bool visibility)
        {
            if (!visibility)
            {
                _handImage.enabled = false;
                _maskImage.enabled = false;
                _maskBgImage.enabled = false;
                _joystickRectTransform.gameObject.SetActive(false);
                return;
            }

            switch (tutorialType)
            {
                case TutorialType.Tap:
                case TutorialType.MultiTap:
                case TutorialType.Swipe:
                case TutorialType.Swerve:
                case TutorialType.DragAndDrop:
                case TutorialType.InfiniteSwing:
                    _hand.localScale = new Vector3(
                        GetCurrentTutorialStepHandScale(CurrentTutorialStep,
                            ResponsiveManager.Instance.CurrentScreenOrientation),
                        GetCurrentTutorialStepHandScale(CurrentTutorialStep,
                            ResponsiveManager.Instance.CurrentScreenOrientation),
                        GetCurrentTutorialStepHandScale(CurrentTutorialStep,
                            ResponsiveManager.Instance.CurrentScreenOrientation));

                    _handImage.enabled = true;
                    _maskImage.enabled = false;
                    _maskBgImage.enabled = false;
                    _joystickRectTransform.gameObject.SetActive(false);

                    if (MaskValidate())
                    {
                        _maskImage.enabled = true;
                        _maskBgImage.enabled = true;
                    }
                    else
                    {
                        _maskImage.enabled = false;
                        _maskBgImage.enabled = false;
                    }

                    break;
                case TutorialType.Mask:
                    _handImage.enabled = false;
                    _maskImage.enabled = true;
                    _maskBgImage.enabled = true;
                    _joystickRectTransform.gameObject.SetActive(false);
                    break;
                case TutorialType.Joystick:
                    _handImage.enabled = false;
                    _maskImage.enabled = false;
                    _maskBgImage.enabled = false;
                    _joystickRectTransform.gameObject.SetActive(true);
                    break;
            }
        }

        private void SetTutorialStep(int currentTutorialStep)
        {
            if (_isGameFinish) return;
            CurrentTutorialStep = currentTutorialStep;
            _activeTween.Kill();

            if (CurrentTutorialStep == -1)
            {
                SetTutorialElements(TutorialType.Empty, false);
                return;
            }

            SetTutorialElements(TutorialSteps[currentTutorialStep].TutorialType, true);

            switch (TutorialSteps[currentTutorialStep].TutorialType)
            {
                case TutorialType.Tap:
                    Tap();
                    break;
                case TutorialType.MultiTap:
                    MultiTap();
                    break;
                case TutorialType.Swipe:
                    Swipe();
                    break;
                case TutorialType.DragAndDrop:
                    DragAndDrop();
                    break;
                case TutorialType.Swerve:
                    Swerve();
                    break;
                case TutorialType.InfiniteSwing:
                    InfiniteSwing();
                    break;
                case TutorialType.Mask:
                    Mask();
                    break;
                case TutorialType.Joystick:
                    Joystick();
                    break;
            }
        }

        private void GameFinish()
        {
            SetTutorialStep(-1);
            _isGameFinish = true;
            SetTutorialElements(TutorialType.Empty, false);
        }

        private void TapChecker()
        {
            if (Input.GetMouseButton(0))
                _timer = 0f;

            if (!Input.GetMouseButtonDown(0)) return;

            SetTutorialElements(TutorialType.Empty, false);
            _firstInput = true;
        }

        private void TimeChecker()
        {
            if (!_firstInput) return;

            _timer += Time.deltaTime;
            if (_timer >= _tutorialLoopDuration && CurrentTutorialStep != -1)
            {
                SetTutorialElements(TutorialSteps[CurrentTutorialStep].TutorialType, true);
            }
        }

        private bool MaskValidate()
        {
            bool maskVisibility = false;
            switch (TutorialSteps[CurrentTutorialStep].TutorialType)
            {
                case TutorialType.Tap:
                    maskVisibility = TutorialSteps[CurrentTutorialStep].TapMask;
                    break;
                case TutorialType.MultiTap:
                    maskVisibility = TutorialSteps[CurrentTutorialStep].MultiTapMask;
                    break;
                case TutorialType.Swipe:
                    maskVisibility = TutorialSteps[CurrentTutorialStep].SwipeMask;
                    break;
                case TutorialType.Swerve:
                    maskVisibility = TutorialSteps[CurrentTutorialStep].SwerveMask;
                    break;
                case TutorialType.DragAndDrop:
                    maskVisibility = TutorialSteps[CurrentTutorialStep].DragAndDropMask;
                    break;
                case TutorialType.InfiniteSwing:
                    maskVisibility = TutorialSteps[CurrentTutorialStep].InfiniteSwingMask;
                    break;
                case TutorialType.Mask:
                    maskVisibility = true;
                    break;
            }

            return maskVisibility;
        }

        private void ScreenChange(ScreenOrientation orientation)
        {
            switch (orientation)
            {
                case ScreenOrientation.Vertical:
                    _currentOriantitaon = ScreenOrientation.Vertical;
                    _hand.localScale = new Vector3(
                        GetCurrentTutorialStepHandScale(CurrentTutorialStep, ScreenOrientation.Vertical),
                        GetCurrentTutorialStepHandScale(CurrentTutorialStep, ScreenOrientation.Vertical),
                        GetCurrentTutorialStepHandScale(CurrentTutorialStep, ScreenOrientation.Vertical));
                    break;
                case ScreenOrientation.Horizontal:
                    _currentOriantitaon = ScreenOrientation.Horizontal;
                    _hand.localScale = new Vector3(
                        GetCurrentTutorialStepHandScale(CurrentTutorialStep, ScreenOrientation.Horizontal),
                        GetCurrentTutorialStepHandScale(CurrentTutorialStep, ScreenOrientation.Horizontal),
                        GetCurrentTutorialStepHandScale(CurrentTutorialStep, ScreenOrientation.Horizontal));
                    break;
            }
        }

        private Vector3 CalculatePosition(Transform transform)
        {
            return transform.TryGetComponent(out RectTransform rectTransform)
                ? transform.position
                : Camera.main.WorldToScreenPoint(transform.position);
        }

        private void SetMask([Bridge.Ref] Vector3 maskPosition, float maskScale)
        {
            _maskRectTransform.position = maskPosition;
            _maskRectTransform.localScale = new Vector3(maskScale, maskScale, maskScale);
        }

        private float GetCurrentTutorialStepHandScale(int currentTutorialStep, ScreenOrientation screenOrientation)
        {
            if (TutorialSteps.Length <= 0) return 0;
            if (currentTutorialStep == -1) return 0;
            switch (TutorialSteps[currentTutorialStep].TutorialType)
            {
                case TutorialType.Tap:
                    return screenOrientation == ScreenOrientation.Horizontal
                        ? TutorialSteps[currentTutorialStep].TapHandScaleHorizontal
                        : TutorialSteps[currentTutorialStep].TapHandScaleVertical;
                case TutorialType.MultiTap:
                    return screenOrientation == ScreenOrientation.Horizontal
                        ? TutorialSteps[currentTutorialStep].MultiTapHandScaleHorizontal
                        : TutorialSteps[currentTutorialStep].MultiTapHandScaleVertical;
                case TutorialType.Swipe:
                    return screenOrientation == ScreenOrientation.Horizontal
                        ? TutorialSteps[currentTutorialStep].SwipeHandScaleHorizontal
                        : TutorialSteps[currentTutorialStep].SwipeHandScaleVertical;
                case TutorialType.DragAndDrop:
                    return screenOrientation == ScreenOrientation.Horizontal
                        ? TutorialSteps[currentTutorialStep].DragAndDropHandScaleHorizontal
                        : TutorialSteps[currentTutorialStep].DragAndDropHandScaleVertical;
                case TutorialType.Swerve:
                    return screenOrientation == ScreenOrientation.Horizontal
                        ? TutorialSteps[currentTutorialStep].SwerveHandScaleHorizontal
                        : TutorialSteps[currentTutorialStep].SwerveHandScaleVertical;
                case TutorialType.InfiniteSwing:
                    return screenOrientation == ScreenOrientation.Horizontal
                        ? TutorialSteps[currentTutorialStep].InfiniteSwingHandScaleHorizontal
                        : TutorialSteps[currentTutorialStep].InfiniteSwingHandScaleVertical;
                case TutorialType.Mask:

                    break;
            }

            return 0;
        }
    }
}