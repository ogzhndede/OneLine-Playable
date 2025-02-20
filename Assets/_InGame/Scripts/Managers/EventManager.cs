using System;
using UnityEngine;

public static class EventManager
{
    public static Action OnGameStart;
    public static Action OnGameResume;
    public static Action OnGameFinish;
    public static Action<GameStateType> OnGameStateChange;

    public static Action<ScreenOrientation> OnScreenChange;
    public static Action<AspectRatio> OnAspectRatioChange;
    public static Action<CamStates> OnCamChange;

    public static Action<bool> OnEndCardOpen;

    public static Action<SoundTypes, bool> OnSetSound;
    public static Action<SoundTypes, float, float> OnPlaySound;

    public static Action<int> OnSetTutorialStep;

    public static Action<int> OnMoneyChange;
    public static Action<bool> OnCheckButtonsActivation;

    public static Action<GameObject> OnSpawnCoin;

    public static Action<GameObject, bool> OnEmojiControl;
    public static Action<bool, GameObject> OnTutorialHandControl;

    public static Action<GameObject> OnSpawnUnit;

    public static Action OnStopMove;
    public static Action OnResumeMove;

    public static Action OnSpawnTower;
    public static Action<GameObject> OnTowerUpgrade;
    public static Action OnExplodeTowers;

    public static Action<GameObject> OnEnemyDie;

    public static Action<bool> OnCheckUIFillAmount;

    public static Action OnSpriteDirectionCheck;
    public static Action OnTriggerExplodeWalls;
}