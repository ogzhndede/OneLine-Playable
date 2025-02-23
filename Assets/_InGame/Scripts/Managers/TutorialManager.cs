using System;
using System.Collections.Generic;
using PlayableAdsTool;
using UnityEngine;

namespace _InGame.Scripts.Managers
{
    [Serializable]
    public struct TutorialVariables
    {
        public TutorialType _Type;
        public GameObject Object;
    }

    public enum TutorialType
    {
        PotionBottle,
        Topuklu
    }
    public class TutorialManager : SingletonBehaviour<TutorialManager>
    {
        [SerializeField] private List<TutorialVariables> Tutorials = new List<TutorialVariables>();


        private TutorialVariables GetSelectedTutorial(TutorialType tutorialType)
        {
            foreach (var tutorial in Tutorials)
            {
                if(tutorial._Type == tutorialType)
                    return tutorial;
            }
            return new TutorialVariables();
        }
        private void OnEnable()
        {
            EventManager.OnShowTutorial += OnShowTutorial;
            EventManager.OnCloseTutorial += OnCloseTutorial;
        }

        private void OnDisable()
        {
            EventManager.OnShowTutorial -= OnShowTutorial;
            EventManager.OnCloseTutorial -= OnCloseTutorial;
        }

        private void OnShowTutorial(TutorialType type)
        {
            GetSelectedTutorial(type).Object.SetActive(true);
        }

        private void OnCloseTutorial(TutorialType type)
        {
            GetSelectedTutorial(type).Object.SetActive(false);
        }
    }
}