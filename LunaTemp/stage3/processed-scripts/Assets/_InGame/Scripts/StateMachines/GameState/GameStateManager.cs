using System.Collections.Generic;
using PlayableAdsTool;
using UnityEngine;

public enum GameStateType
{
    GateOpen,
    Beginning,
    InGame,
    InPlaceTutorial,
    InUpgradeTutorial,
    GameEnd
}

public class GameStateManager : SingletonBehaviour<GameStateManager>
{
    public GameManager Base => GetComponent<GameManager>(); //General Controller 

    [SerializeField] private GameBaseState currentState; //Current State

    public GameBaseState CurrentState
    {
        get { return currentState; }
        set { currentState = value; }
    }

    [SerializeField] private GameStateType currentStateType; //Current Type

    public GameStateType CurrentStateType
    {
        get
        {
            currentStateType = CurrentState.GetStateType();
            return currentStateType;
        }
        set { currentStateType = value; }
    }

    // The dictionary that matches states with their types and holds them.
    Dictionary<GameStateType, GameBaseState> _states = new Dictionary<GameStateType, GameBaseState>();

    void Awake()
    {
        //Set Game State type and its state
        AddState(GameStateType.Beginning, new GameStateBeginning(GameStateType.Beginning));

        // ExitFromAllStates(); //Reset all states
        SwitchState(GameStateType.GateOpen, true);
    }

    //! REMOVE THIS COMMENT LINE IF ANY STATE WILL PERFORM AN UPDATE OPERATION WITHIN ITSELF.
    // void Update()
    // {
    //     CurrentState.UpdateState(this);
    // }

    private void SwitchState(GameStateType stateType, bool forceSwitch = false)
    {
        if (currentStateType == stateType && !forceSwitch) return; // Force switch state

        if (_states.ContainsKey(stateType))
        {
            CurrentState?.ExitState(this); //Make exit progress for previous state

            CurrentState = _states[stateType]; //Switch state
            CurrentState.EnterState(this); //Make enter progress for new state
            UpdateCurrentStateType(); //Update current state type
        }
        else
        {
            Debug.LogError("Invalid state: " + stateType);
        }
    }

    public void AddState(GameStateType stateName, GameBaseState state)
    {
        _states[stateName] = state;
    }

    //Run the exit method of specific state
    public void ExitSpecificState(GameStateType enemyStateType)
    {
        _states[enemyStateType].ExitState(this);
    }

    public void ExitFromAllStates()
    {
        for (int i = 0; i < _states.Count; i++)
        {
            ExitSpecificState((GameStateType)i);
        }
    }

    void UpdateCurrentStateType()
    {
        CurrentStateType = CurrentState.GetStateType();
    }


    //########################################    EVENTS    ###################################################################

    private void OnEnable()
    {
        EventManager.OnGameStateChange += OnGameStateChange;
    }

    private void OnDisable()
    {
        EventManager.OnGameStateChange -= OnGameStateChange;
    }

    private void OnGameStateChange(GameStateType newState)
    {
        SwitchState(newState, false);
    }
}