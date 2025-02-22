using System;
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

    public class DrawingManager : SingletonBehaviour<DrawingManager>
    {
        public DrawingController CurrentDrawingController;

        private Camera _camera;

        private void Start()
        {
            _camera = Camera.main; // performans icin on bellege aliyoruz
        }

        private void Update()
        {
            if (!CanDraw()) return;
            
            ClickOnScreen();
            DragOnScreen();
            UnClickOnScreen();
        }

        private void ClickOnScreen()
        {
            if (!Input.GetMouseButtonDown(0)) return;
            CurrentDrawingController.ClickAction(GetWorldPosition());
        }

        private void DragOnScreen()
        {
            if (!Input.GetMouseButton(0)) return;
            
            CurrentDrawingController.DragAction(GetWorldPosition());
        }

        private void UnClickOnScreen()
        {
            
            if (!Input.GetMouseButtonUp(0)) return;
            CurrentDrawingController.UnClickAction();
        }

        private bool CanDraw()
        {
            return true;
        }


        private Vector3 GetWorldPosition()
        {
            var touchPosition = Input.mousePosition;
            Vector3 worldPos = _camera.ScreenToWorldPoint(new Vector3(touchPosition.x, touchPosition.y, _camera.nearClipPlane));
            return new Vector3(worldPos.x, worldPos.y, 0f);
        }
    }
}