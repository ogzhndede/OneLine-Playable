using UnityEngine;

namespace _InGame.Scripts.StateMachines.GameState
{
    public class GameStateGameInitialize : GameBaseState
    {
        public GameStateGameInitialize(GameStateType _StateType)
        {
            _GameStateType = _StateType;
        }

        public override void EnterState(GameStateManager stateManager)
        {
            base.EnterState(stateManager);
            
            EventManager.OnGameStateChange?.Invoke(GameStateType.TutorialShow);
        }

        public override void ExitState(GameStateManager stateManager)
        {
            base.ExitState(stateManager);
        }

        public override void UpdateState(GameStateManager stateManager)
        {
        }
    }
}