public abstract class GameBaseState
{
    public GameStateType _GameStateType { get; set; }

    public virtual GameStateType GetStateType()
    {
        return _GameStateType;
    }

    // Operations to be performed when entering the state
    public virtual void EnterState(GameStateManager stateManager)
    {
    }

    // Update operations to be performed while the state is EnemyStateManager
    public virtual void UpdateState(GameStateManager stateManager)
    {
    }

    // Operations to be performed when exiting the state
    public virtual void ExitState(GameStateManager stateManager)
    {
    }

}