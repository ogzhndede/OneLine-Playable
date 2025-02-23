using System;
using System.Collections.Generic;
using _InGame.Scripts.DrawContollers;
using PlayableAdsTool;
using UnityEngine;

namespace _InGame.Scripts.Managers
{
    public enum DrawingType
    {
        Invalid,
        PotionBottle,
        TableLamp,
        Ship
    }

    [Serializable]
    public class DrawingData
    {
        public DrawingType type;
        public GameObject Object;
        public DrawingController controller => Object?.GetComponent<DrawingController>();
    }

    public class DrawingManager : SingletonBehaviour<DrawingManager>
    {
        [SerializeField] private List<DrawingData> LevelDrawingList = new List<DrawingData>();
        public DrawingData CurrentDrawingData;


        private Camera _camera;

        private void Start()
        {
            _camera = Camera.main; // performans icin on bellege aliyoruz
        }

        private void Update()
        {
            if(!CanDraw()) return;
            
            ClickOnScreen();
            DragOnScreen();
            UnClickOnScreen();
        }

        #region EVENTS

        private void OnEnable()
        {
            EventManager.OnCompleteDrawing += OnCompleteDrawing;
            EventManager.OnLoadDrawing += OnLoadDrawing;
        }

        private void OnDisable()
        {
            EventManager.OnCompleteDrawing -= OnCompleteDrawing;
            EventManager.OnLoadDrawing -= OnLoadDrawing;
        }

        private void OnCompleteDrawing()
        {
            CurrentDrawingData.controller.UnClickAction(); //Clear current controller points
            CurrentDrawingData.Object.SetActive(false);
            CurrentDrawingData = null;
            LevelDrawingList.RemoveAt(0); //Remove current data from list

            if (LevelDrawingList.Count > 0) //daha yapilacak cizim varsa
            {
                CurrentDrawingData = LevelDrawingList[0];
                EventManager.OnLoadDrawing?.Invoke();
            }
            else
            {
                EventManager.OnGameStateChange?.Invoke(GameStateType.GameEnd);
            }
        }

        private void OnLoadDrawing()
        {
            //Close all drawing
            foreach (var drawingData in LevelDrawingList)
            {
                drawingData.Object.SetActive(false);
            }

            //activate current drawing
            CurrentDrawingData = LevelDrawingList[0];
            CurrentDrawingData.Object.SetActive(true);
        }

        #endregion

        #region CLICK ACTIONS

        private bool ClickStarted = false;
        private void ClickOnScreen()
        {
            if (!Input.GetMouseButtonDown(0)) return;
            ClickStarted = true;
            CurrentDrawingData?.controller.ClickAction(GetWorldPosition());
        }

        private void DragOnScreen()
        {
            if (!Input.GetMouseButton(0)) return;
            if (!ClickStarted) return;
            
            CurrentDrawingData?.controller.DragAction(GetWorldPosition());
        }

        private void UnClickOnScreen()
        {
            if (!Input.GetMouseButtonUp(0)) return;
            ClickStarted = false;
            CurrentDrawingData?.controller.UnClickAction();
            
        }

        #endregion

        #region GETTERS

        private bool CanDraw()
        {
            if(CurrentDrawingData is null) return false;
            if(GameStateManager.Instance.CurrentStateType == GameStateType.GameEnd) return false;
            if(EndCardController.Instance.IsEndCardOpened) return false;
            return true;
        }

        public DrawingData GetDrawingData()
        {
            return LevelDrawingList[0];
        }

        public float GetDrawingCompletePercent()
        {
            int AllPointCount = CurrentDrawingData.controller.AllDrawPoints.Count;
            int SelectedPointCount = 0;

            foreach (var point in CurrentDrawingData.controller.AllDrawPoints)
            {
                if (point.CanPointSelectable()) continue;
                SelectedPointCount++;
            }

            return SelectedPointCount / (float)AllPointCount;
        }

        private Vector3 GetWorldPosition()
        {
            var touchPosition = Input.mousePosition;
            Vector3 worldPos = _camera.ScreenToWorldPoint(new Vector3(touchPosition.x, touchPosition.y, _camera.nearClipPlane));
            return new Vector3(worldPos.x, worldPos.y, 0f);
        }

        #endregion
    }
}