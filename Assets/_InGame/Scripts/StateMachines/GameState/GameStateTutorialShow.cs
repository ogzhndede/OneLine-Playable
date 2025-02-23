using _InGame.Scripts.Managers;
using UnityEngine;

namespace _InGame.Scripts.StateMachines.GameState
{
    public class GameStateTutorialShow : GameBaseState
    {
        public GameStateTutorialShow(GameStateType _StateType)
        {
            _GameStateType = _StateType;
        }

        public override void EnterState(GameStateManager stateManager)
        {
            base.EnterState(stateManager);
            EventManager.OnShowTutorial?.Invoke(TutorialType.PotionBottle);
        }

        public override void ExitState(GameStateManager stateManager)
        {
            base.ExitState(stateManager);
            EventManager.OnCloseTutorial?.Invoke(TutorialType.PotionBottle);
            EventManager.OnLoadDrawing?.Invoke();
        }

        public override void UpdateState(GameStateManager stateManager)
        {
            if (Input.GetMouseButtonDown(0))
            {
                EventManager.OnGameStateChange?.Invoke(GameStateType.InGame);
            }
        }
    }
}