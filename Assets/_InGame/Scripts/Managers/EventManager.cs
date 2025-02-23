using System;
using _InGame.Scripts.Managers;
using UnityEngine;

public static class EventManager
{
    //GAME EVENTS
    public static Action OnGameResume;
    public static Action<GameStateType> OnGameStateChange;
    
    //DRAWING EVENTS
    public static Action OnCompleteDrawing;
    public static Action OnFailedToDraw;
    public static Action OnLoadDrawing;
    public static Action OnCheckFillSlider;

    //RESPONSIVE EVENTS
    public static Action<ScreenOrientation> OnScreenChange;
    public static Action<AspectRatio> OnAspectRatioChange;
    public static Action<CamStates> OnCamChange;
    public static Action<bool> OnEndCardOpen;

    //SOUND EVENTS
    public static Action<SoundTypes, float, float> OnPlaySound;
    
    //TUTORIAL EVENTS
    public static Action<TutorialType> OnShowTutorial;
    public static Action<TutorialType> OnCloseTutorial;
}