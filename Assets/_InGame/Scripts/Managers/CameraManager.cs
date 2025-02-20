using System;
using UnityEngine;

public enum CamStates
{
    MainCam,
    ChestCam,
    UpgradeCam
}

namespace PlayableAdsTool
{
    public class CameraManager : SingletonBehaviour<CameraManager>
    {
        [SerializeField] private GameObject[] _verticalCam_9_20;
        [SerializeField] private GameObject[] _verticalCam_9_16;
        [SerializeField] private GameObject[] _verticalCam_3_4;
        
        [SerializeField] private GameObject[] _horizontalCam_20_9;
        [SerializeField] private GameObject[] _horizontalCam_16_9;
        [SerializeField] private GameObject[] _horizontalCam_4_3;
        
        
        public CamStates CurrentCamState;
        public Camera MainCam;
        public Camera CanvasCam;
            

        private void OnEnable()
        {
            EventManager.OnAspectRatioChange += SetCamScreenOrientation;
            EventManager.OnCamChange += SetDesiredCam;
        }

        private void OnDisable()
        {
            EventManager.OnAspectRatioChange -= SetCamScreenOrientation;
            EventManager.OnCamChange -= SetDesiredCam;
        }

        private void Update()
        {
            // CanvasCam.transform.position=MainCam.transform.position;
            // CanvasCam.transform.rotation=MainCam.transform.rotation;
            // CanvasCam.transform.localScale=MainCam.transform.localScale;
            //
            // CanvasCam.orthographicSize = MainCam.orthographicSize;
        }

        private void Start()
        {
            SetDesiredCam(CamStates.ChestCam);
        }

        private void SetDesiredCam(CamStates camStates)
        {
            CurrentCamState = camStates;
            SetCamScreenOrientation(ResponsiveManager.Instance.CurrentAspectRatio);
        }
        
        public void SetCamScreenOrientation(AspectRatio aspectRatio)
        {
            SetAllCam(false);
            
            switch (aspectRatio)
            {
                case AspectRatio.Horizantal_20_9:
                    if (_horizontalCam_20_9.Length==0) return;
                    _horizontalCam_20_9[(int)CurrentCamState].SetActive(true);
                    break;
                case AspectRatio.Horizantal_16_9:
                    _horizontalCam_16_9[(int)CurrentCamState].SetActive(true);
                    break;
                case AspectRatio.Horizantal_4_3:
                    _horizontalCam_4_3[(int)CurrentCamState].SetActive(true);
                    break;
                case AspectRatio.Vertical_9_20:
                    _verticalCam_9_20[(int)CurrentCamState].SetActive(true);
                    break;
                case AspectRatio.Vertical_9_16:
                    _verticalCam_9_16[(int)CurrentCamState].SetActive(true);
                    break;
                case AspectRatio.Vertical_3_4:
                    _verticalCam_3_4[(int)CurrentCamState].SetActive(true);
                    break;
            }
        }
        
        private void SetAllCam(bool value)
        {
            foreach (var cam in _horizontalCam_20_9) { cam.SetActive(false); }
            foreach (var cam in _horizontalCam_16_9) { cam.SetActive(false); }
            foreach (var cam in _horizontalCam_4_3) { cam.SetActive(false); }
            foreach (var cam in _verticalCam_9_20) { cam.SetActive(false); }
            foreach (var cam in _verticalCam_9_16) { cam.SetActive(false); }
            foreach (var cam in _verticalCam_3_4) { cam.SetActive(false); }
        }

    }
}