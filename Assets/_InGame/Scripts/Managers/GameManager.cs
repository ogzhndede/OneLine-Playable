using System;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

namespace PlayableAdsTool
{
    public class GameManager : SingletonBehaviour<GameManager>
    {
        public GameStateManager GameStateManager => GetComponent<GameStateManager>();
        // public GameStateType CurrentState => GameStateManager.CurrentStateType;

        [Space(10)] [Header("UI")] 
        public TextMeshProUGUI CoinText;
        
        [SerializeField] private int currentMoney;
        public int CurrentMoney
        {
            get => currentMoney;
            set
            {
                //if below 0, set to 0
                if (value < 0) currentMoney = 0;
                else currentMoney = value;
            }
        }
        



        private void Start()
        {
            Application.targetFrameRate = 30;
            EventManager.OnMoneyChange?.Invoke(0);
        }

        //##################################      EVENTS    ###########################

        private void OnEnable()
        {
            EventManager.OnGameStart += OnGameStart;
            EventManager.OnGameFinish += OnGameFinished;
            EventManager.OnMoneyChange += OnMoneyChange;
        }

        private void OnDisable()
        {
            EventManager.OnGameStart -= OnGameStart;
            EventManager.OnGameFinish -= OnGameFinished;
            EventManager.OnMoneyChange -= OnMoneyChange;
        }

        private void OnGameStart()
        {
           
        }

        private void OnGameFinished()
        {
            
        }

        private void OnMoneyChange(int amount)
        {
            CurrentMoney += amount;
            CoinText.text = CurrentMoney.ToString();
            EventManager.OnCheckButtonsActivation?.Invoke(false);
        }
    }
}