using System;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;

namespace PlayableAdsTool
{
    public class EndCardController : SingletonBehaviour<EndCardController>
    {
        public enum GameResult
        {
            Default,
        }
        private enum EndCardAnimation
        {
            Show,
            Hide,
        }

        

        [LunaPlaygroundField("EndCard On/Off", 0, "Store/EndCard Settings")] [SerializeField]
        private bool SendStoreWithEndCard = true;

        [LunaPlaygroundField("Open (Store/EndCard) after __ seconds by the last input", 2, "Store/EndCard Settings")] [SerializeField]
        private float _openStoreAfterSeconds = 9999;

        [LunaPlaygroundField("Automatically open Store when EndCard is shown", 3, "Store/EndCard Settings")] [SerializeField]
        private bool _openStoreAfterEndCard = false;
        

        [SerializeField] private GameObject[] _endCards;
        
        private float _timer = 0f;

        //CONTROL BOOLS
        public bool _isStoreOpen = false;
        public bool IsEndCardOpened;
        public bool LastEndCard = false;
        private bool _firstInput = false;


        private void OnEnable()
        {
            Luna.Unity.LifeCycle.OnResume += GameResume;
        }

        private void OnDisable()
        {
            Luna.Unity.LifeCycle.OnResume -= GameResume;
        }



        private void Update()
        {
            if (_isStoreOpen) return;
            if (IsEndCardOpened) return;
            TapChecker();
            TimeChecker();
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
            _firstInput = false;
            EventManager.OnGameResume?.Invoke();
            if (LastEndCard) return;
            PlayEndCardAnimation(EndCardAnimation.Hide, GameResult.Default);
            EventManager.OnEndCardOpen?.Invoke(false);
        }
        
        private void TapChecker()
        {
            if (Input.GetMouseButtonDown(0))
            {
                _firstInput = true;
            }

            if (Input.GetMouseButton(0))
                _timer = 0f;
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

            PlayEndCardAnimation(EndCardAnimation.Show, gameResult);
            LastEndCard = lastEndCard;

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
                    endCard.gameObject.SetActive(true);
                    break;
                case EndCardAnimation.Hide:
                    endCard.DOFade(0, 0.45f).SetEase(Ease.Linear).OnComplete(() => { endCard.gameObject.SetActive(false); });
                    break;
            }
        }
    }
}