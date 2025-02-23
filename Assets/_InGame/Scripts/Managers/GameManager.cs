using PlayableAdsTool;
using UnityEngine;

namespace _InGame.Scripts.Managers
{
    
    public class GameManager : SingletonBehaviour<GameManager>
    {
        public GameStateManager GameStateManager => GetComponent<GameStateManager>();
        
        private void Start()
        {
            Application.targetFrameRate = 60;
        }
    }
}