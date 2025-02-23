using _InGame.Scripts.Managers;
using PlayableAdsTool;

public class GameStateGameEnd : GameBaseState
{
    public GameStateGameEnd(GameStateType _StateType)
    {
        _GameStateType = _StateType;
    }

    public override void EnterState(GameStateManager stateManager)
    {
        base.EnterState(stateManager);
        
        EndCardController.Instance.SendStore(true, "", 1f);
        EventManager.OnShowTutorial?.Invoke(TutorialType.Topuklu);
    }

    public override void ExitState(GameStateManager stateManager)
    {
        base.ExitState(stateManager);
    }

    public override void UpdateState(GameStateManager stateManager)
    {
    }
}