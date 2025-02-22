using System;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;

namespace PlayableAdsTool
{
    public class EndCardController : SingletonBehaviour<EndCardController>
    {
        private enum EndCardsOptions
        {
            Splash,
        }

        private enum EndCardAnimation
        {
            Show,
            Hide,
        }

        public enum GameResult
        {
            Default,
            Win,
            Lose,
        }

        [LunaPlaygroundField("EndCard On/Off", 0, "Store/EndCard Settings")] [SerializeField]
        private bool SendStoreWithEndCard = true;

        [LunaPlaygroundField("Open (Store/EndCard) after __ clicks.", 1, "Store/EndCard Settings")] [SerializeField]
        private int _openStoreAfterTaps = 9999;

        [LunaPlaygroundField("Open (Store/EndCard) after __ seconds by the last input", 2, "Store/EndCard Settings")] [SerializeField]
        private float _openStoreAfterSeconds = 9999;

        [LunaPlaygroundField("Automatically open Store when EndCard is shown", 3, "Store/EndCard Settings")] [SerializeField]
        private bool _openStoreAfterEndCard = false;

        [LunaPlaygroundField("EndCard Type", 4, "Store/EndCard Settings")] [SerializeField]
        private EndCardsOptions EndCards;


        [LunaPlaygroundField("Open (Store/EndCard) after __ tower place.", 5, "Store/EndCard Settings")] [SerializeField] [Range(0, 8)]
        public int TowerCount;
        
        [LunaPlaygroundField("Open (Store/EndCard) after __ tower upgrade.", 6, "Store/EndCard Settings")] [SerializeField] [Range(0, 16)]
        public int TowerUpgradedCount;
        
        [LunaPlaygroundField("Open (Store/EndCard) after __ zombie killed.", 6, "Store/EndCard Settings")] [SerializeField]
        public int ZombieKilledCount;
        

        [SerializeField] private GameObject[] _endCards;
        [SerializeField] private Image _endCardImage;
        [SerializeField] private Sprite[] _endCardSprite;

        [SerializeField] private GameObject[] OtherUIElements;


        private int _tapCounter;
        private float _timer = 0f;
        public bool _isStoreOpen = false;

        public bool IsEndCardOpened;
        public bool LastEndCard = false;

        private bool _firstInput = false;

        private void OnEnable()
        {
            Luna.Unity.LifeCycle.OnResume += GameResume;
            EventManager.OnScreenChange += ScreenChange;
        }

        private void OnDisable()
        {
            Luna.Unity.LifeCycle.OnResume -= GameResume;
            EventManager.OnScreenChange -= ScreenChange;
            
            int roundedTime = Mathf.CeilToInt(PlayTimeTimer / 5f) * 5;
            Luna.Unity.Analytics.LogEvent("Play Time: ", roundedTime);
        }

        private void ScreenChange(ScreenOrientation orientation)
        {
            /*switch (orientation)
            {
                case ScreenOrientation.Vertical:
                    _endCardImage.sprite = _endCardSprite[0];
                    break;
                case ScreenOrientation.Horizontal:
                    _endCardImage.sprite = _endCardSprite[1];
                    break;
            }*/
        }

        private void Update()
        {
            PlayTimeCounter();
            if (_isStoreOpen) return;
            if (IsEndCardOpened) return;
            TapChecker();
            TimeChecker();
        }

        public float PlayTimeTimer = 0f;
        public void PlayTimeCounter()
        {
            PlayTimeTimer += Time.deltaTime;
        }

        public void SendStore(bool lastEndCard, string logEvent, float sendStoreDelay, GameResult gameResult = GameResult.Default)
        {
            if (SendStoreWithEndCard)
            {
                OpenEndCard(lastEndCard, GameResult.Default);
            }
            else
            {
                if (lastEndCard)
                {
                    OpenEndCard(lastEndCard, GameResult.Default);
                }
                else
                {
                    OpenStore(logEvent, sendStoreDelay);
                }
            }
        }
        
        public void DirectSendStore(string logEvent, float sendStoreDelay)
        {
            OpenStore(logEvent, sendStoreDelay);
        }

        private void GameResume()
        {
            _isStoreOpen = false;
            IsEndCardOpened = false;
            _timer = 0;
            _tapCounter = 0;
            _firstInput = false;
            EventManager.OnGameResume?.Invoke();
            EventManager.OnResumeMove?.Invoke();
            if (LastEndCard) return;
            PlayEndCardAnimation(EndCardAnimation.Hide, GameResult.Default);
            EventManager.OnEndCardOpen?.Invoke(false);
            foreach (var element in OtherUIElements)
            {
                element.SetActive(true);
            }
        }

        private void TapChecker()
        {
            if (Input.GetMouseButtonDown(0))
            {
                _tapCounter++;
                _firstInput = true;
            }

            if (Input.GetMouseButton(0))
                _timer = 0f;


            if (_tapCounter >= _openStoreAfterTaps)
            {
                Luna.Unity.LifeCycle.GameEnded();
                SendStore(false, "", 0, GameResult.Default);
            }
        }

        private void TimeChecker()
        {
            if (_firstInput)
            {
                _timer += Time.deltaTime;

                if (_timer >= _openStoreAfterSeconds)
                {
                    SendStore(false, "", 0, GameResult.Default);
                }
            }
        }

        private void OpenEndCard(bool lastEndCard, GameResult gameResult)
        {
            if (IsEndCardOpened) return;
            IsEndCardOpened = true;
            EventManager.OnEndCardOpen?.Invoke(true);
            foreach (var element in OtherUIElements)
            {
                element.SetActive(false);
            }

            PlayEndCardAnimation(EndCardAnimation.Show, gameResult);
            Luna.Unity.Analytics.LogEvent(EndCards.ToString(), 0);
            LastEndCard = lastEndCard;
            if (lastEndCard)
                EventManager.OnGameFinish?.Invoke();


            if (_openStoreAfterEndCard)
            {
                DOVirtual.DelayedCall(1, () =>
                {
                    Luna.Unity.LifeCycle.GameEnded();
                    OpenStore("", 0);
                });
            }
        }

        public void OpenStore(string logEventName)
        {
            _isStoreOpen = true;
            Luna.Unity.Playable.InstallFullGame();
            if (logEventName != "")
            {
                Luna.Unity.Analytics.LogEvent(logEventName, 0);
            }
        }

        private void OpenStore(string logEventName, float delay)
        {
            _isStoreOpen = true;
            DOVirtual.DelayedCall(delay, () =>
            {
                Luna.Unity.Playable.InstallFullGame();
                if (logEventName != "")
                {
                    Luna.Unity.Analytics.LogEvent(logEventName, 0);
                }
            });
        }

        private void PlayEndCardAnimation(EndCardAnimation _animationStatus, GameResult gameResult)
        {
            Image endCard = _endCards[(int)gameResult].GetComponent<Image>();


            switch (_animationStatus)
            {
                case EndCardAnimation.Show:
                    //endCard.DOFade(0, 0);
                    endCard.gameObject.SetActive(true);
                    //endCard.DOFade(0.75f, 0.45f).SetEase(Ease.Linear);
                    break;
                case EndCardAnimation.Hide:
                    endCard.DOFade(0, 0.45f).SetEase(Ease.Linear).OnComplete(() => { endCard.gameObject.SetActive(false); });
                    break;
            }
        }
    }
}