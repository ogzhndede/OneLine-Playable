public class GameStateInGame : GameBaseState
{
    public GameStateInGame(GameStateType _StateType)
    {
        _GameStateType = _StateType;
    }

    public override void EnterState(GameStateManager stateManager)
    {
        base.EnterState(stateManager);
    }

    public override void ExitState(GameStateManager stateManager)
    {
        base.ExitState(stateManager);
    }

    public override void UpdateState(GameStateManager stateManager)
    {
    }
}