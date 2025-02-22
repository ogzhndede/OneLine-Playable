using System;
using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.UI;

public enum ScreenOrientation
{
    Vertical,
    Horizontal
}

public enum AspectRatio
{
    Horizantal_20_9,
    Horizantal_16_9,
    Horizantal_4_3,
    Vertical_9_20,
    Vertical_9_16,
    Vertical_3_4
}

public enum BannerOptions
{
    Option1,
    Option2,
}

[Serializable]
public class UIData
{
    public Vector2 AnchoredPosition;
    public Vector2 SizeDelta;
    public Quaternion Rotation;
    public Vector3 LocalScale;
    public Vector2 AnchorMin;
    public Vector2 AnchorMax;
    public Vector2 Pivot;
}

[Serializable]
public class UIElement
{
    [HideInInspector] public string _rectTransformName;
    public RectTransform _rectTransform;
}

namespace PlayableAdsTool
{
    public class ResponsiveManager : SingletonBehaviour<ResponsiveManager>
    {
        public ScreenOrientation CurrentScreenOrientation;
        public AspectRatio CurrentAspectRatio;

        public UIElement[] UiElements;

        public List<UIData> Horizantal_20_9;
        public List<UIData> Horizantal_16_9;
        public List<UIData> Horizantal_4_3;
        public List<UIData> Vertical_9_20;
        public List<UIData> Vertical_9_16;
        public List<UIData> Vertical_3_4;
        
        [Header("Banner Settings -------------------------------------------"), Space(10)]
        public Image BannerVertical;
        public Image BannerHorizontal;

        public bool UseOptionalBanner;
        public BannerOptions BannerOptions;
        public Sprite[] VerticalOptions;
        public Sprite[] HorizontalOptions;

        private void OnEnable()
        {
            EventManager.OnEndCardOpen += SetBannerVisibilty;
        }

        private void OnDisable()
        {
            EventManager.OnEndCardOpen -= SetBannerVisibilty;
        }

        private void Start()
        {
            CheckScreenOrientation();
        }

        private void Update()
        {
            // foreach (var element in UiElements) { element._rectTransform.localRotation = Quaternion.Euler(Vector3.zero); }
            CheckScreenOrientation();
            if (Input.GetKeyDown(KeyCode.S))
                SaveResponsive();
        }

        private void CheckScreenOrientation()
        {
            float width = Screen.width;
            float height = Screen.height;
            float aspectRatio = width / height;

            if (aspectRatio >= 2 && CurrentAspectRatio != AspectRatio.Horizantal_20_9) //20:9 Yatay
            {
                SetScreen(AspectRatio.Horizantal_20_9, ScreenOrientation.Horizontal);
            }
            else if (aspectRatio >= 1.5 && aspectRatio < 2 && CurrentAspectRatio != AspectRatio.Horizantal_16_9) //16:9 Yatay
            {
                SetScreen(AspectRatio.Horizantal_16_9, ScreenOrientation.Horizontal);
            }
            else if (aspectRatio >= 1 && aspectRatio < 1.5f && CurrentAspectRatio != AspectRatio.Horizantal_4_3) //4:3 Yatay
            {
                SetScreen(AspectRatio.Horizantal_4_3, ScreenOrientation.Horizontal);
              
            }
            else if (aspectRatio >= 0.6f && aspectRatio < 1f && CurrentAspectRatio != AspectRatio.Vertical_3_4) //3:4 Dikey
            {
                SetScreen(AspectRatio.Vertical_3_4, ScreenOrientation.Vertical);
            }
            else if (aspectRatio >= 0.5f && aspectRatio < 0.6f && CurrentAspectRatio != AspectRatio.Vertical_9_16) //9:16 Dikey
            {
                SetScreen(AspectRatio.Vertical_9_16, ScreenOrientation.Vertical);
            }
            else if (aspectRatio < 0.5f && CurrentAspectRatio != AspectRatio.Vertical_9_20) //9:20 Dikey
            {
                SetScreen(AspectRatio.Vertical_9_20, ScreenOrientation.Vertical);
            }
        }

        private void SetScreen(AspectRatio aspectRatio, ScreenOrientation screenOrientation)
        {
            CurrentScreenOrientation = screenOrientation;
            CurrentAspectRatio = aspectRatio;
            LoadResponsive(CurrentAspectRatio);
            SetBanner(CurrentScreenOrientation);
            EventManager.OnScreenChange?.Invoke(CurrentScreenOrientation);
            EventManager.OnAspectRatioChange?.Invoke(CurrentAspectRatio);
            
            EventManager.OnSpriteDirectionCheck?.Invoke();
        }

        private void SaveUIDataList(List<UIData> uiDataList)
        {
            uiDataList.Clear();
            for (int i = 0; i < UiElements.Length; i++)
            {
                var tempData = new UIData()
                {
                    AnchoredPosition = UiElements[i]._rectTransform.anchoredPosition,
                    SizeDelta = UiElements[i]._rectTransform.sizeDelta,
                    Rotation = UiElements[i]._rectTransform.rotation,
                    LocalScale = UiElements[i]._rectTransform.localScale,
                    AnchorMin = UiElements[i]._rectTransform.anchorMin,
                    AnchorMax = UiElements[i]._rectTransform.anchorMax,
                    Pivot = UiElements[i]._rectTransform.pivot,
                };

                uiDataList.Add(tempData);
            }
            

            Debug.Log(CurrentAspectRatio + " list saved.");
        }

        private void LoadUIDataList(List<UIData> uiDataList)
        {
            if (uiDataList == null) { Debug.Log("UI data list is null."); return; }
            if (uiDataList.Count == 0) { Debug.Log("UI data list is empty."); return; }

            for (int i = 0; i < UiElements.Length; i++)
            {
                if (UiElements[i] == null || UiElements[i]._rectTransform == null)
                {
                    Debug.Log("UI element or its RectTransform is null at index: " + i);
                    continue;
                }

                if (i >= uiDataList.Count)
                {
                    Debug.Log("Not enough UI data for all elements.");
                    break;
                }

                UiElements[i]._rectTransform.anchoredPosition = uiDataList[i].AnchoredPosition;
                UiElements[i]._rectTransform.sizeDelta = uiDataList[i].SizeDelta;
                UiElements[i]._rectTransform.rotation = uiDataList[i].Rotation;
                UiElements[i]._rectTransform.localScale = uiDataList[i].LocalScale;
                UiElements[i]._rectTransform.anchorMax = uiDataList[i].AnchorMax;
                UiElements[i]._rectTransform.anchorMin = uiDataList[i].AnchorMin;
                UiElements[i]._rectTransform.pivot = uiDataList[i].Pivot;
            }
        }

        private void ShowSelectedResponsive()
        {
            CameraManager.Instance.SetCamScreenOrientation(CurrentAspectRatio);
            LoadResponsive(CurrentAspectRatio);
        }


        [ContextMenu(" -> Save responsive ")]
        public void SaveResponsive()
        {
            switch (CurrentAspectRatio)
            {
                case AspectRatio.Horizantal_20_9:
                    SaveUIDataList(Horizantal_20_9);
                    break;
                case AspectRatio.Horizantal_16_9:
                    SaveUIDataList(Horizantal_16_9);
                    break;
                case AspectRatio.Horizantal_4_3:
                    SaveUIDataList(Horizantal_4_3);
                    break;
                case AspectRatio.Vertical_9_20:
                    SaveUIDataList(Vertical_9_20);
                    break;
                case AspectRatio.Vertical_9_16:
                    SaveUIDataList(Vertical_9_16);
                    break;
                case AspectRatio.Vertical_3_4:
                    SaveUIDataList(Vertical_3_4);
                    break;
            }
        }

        private void LoadResponsive(AspectRatio aspectRatio)
        {
            switch (aspectRatio)
            {
                case AspectRatio.Horizantal_20_9:
                    LoadUIDataList(Horizantal_20_9);
                    CurrentScreenOrientation = ScreenOrientation.Horizontal;
                    break;
                case AspectRatio.Horizantal_16_9:
                    LoadUIDataList(Horizantal_16_9);
                    CurrentScreenOrientation = ScreenOrientation.Horizontal;
                    break;
                case AspectRatio.Horizantal_4_3:
                    LoadUIDataList(Horizantal_4_3);
                    CurrentScreenOrientation = ScreenOrientation.Horizontal;
                    break;
                case AspectRatio.Vertical_9_20:
                    LoadUIDataList(Vertical_9_20);
                    CurrentScreenOrientation = ScreenOrientation.Vertical;
                    break;
                case AspectRatio.Vertical_9_16:
                    LoadUIDataList(Vertical_9_16);
                    CurrentScreenOrientation = ScreenOrientation.Vertical;
                    break;
                case AspectRatio.Vertical_3_4:
                    LoadUIDataList(Vertical_3_4);
                    CurrentScreenOrientation = ScreenOrientation.Vertical;
                    break;
            }
        }

        private void SetBanner(ScreenOrientation orientation)
        {
            if (BannerVertical == null || BannerVertical == null) return;
            if (UseOptionalBanner)
            {
                switch (BannerOptions)
                {
                    case BannerOptions.Option1:
                        BannerVertical.sprite = VerticalOptions[0];
                        BannerHorizontal.sprite = HorizontalOptions[0];
                        break;
                    case BannerOptions.Option2:
                        BannerVertical.sprite = VerticalOptions[1];
                        BannerHorizontal.sprite = HorizontalOptions[1];
                        break;
                    default:
                        BannerVertical.sprite = VerticalOptions[0];
                        BannerHorizontal.sprite = HorizontalOptions[0];
                        break;
                }
            }

            if (orientation == ScreenOrientation.Vertical)
            {
                BannerVertical.gameObject.SetActive(true);
                BannerHorizontal.gameObject.SetActive(false);
            }
            else
            {
                BannerVertical.gameObject.SetActive(false);
                BannerHorizontal.gameObject.SetActive(true);
            }
        }

        private void SetBannerVisibilty(bool value)
        {
            if (BannerVertical == null || BannerVertical == null) return;
            if (CurrentScreenOrientation == ScreenOrientation.Vertical)
            {
                BannerVertical.gameObject.SetActive(!value);
            }
            else
            {
                BannerHorizontal.gameObject.SetActive(!value);
            }
        }

#if UNITY_EDITOR
        private static void ChangeResolution(int sizeIndex)
        {
            if (!Application.isPlaying) return;
            var assembly = typeof(Editor).Assembly;
            var gameViewType = assembly.GetType("UnityEditor.GameView");

            EditorApplication.delayCall += () =>
            {
                EditorWindow[] windows = Resources.FindObjectsOfTypeAll<EditorWindow>();
                foreach (EditorWindow window in windows)
                {
                    if (window.GetType() == gameViewType)
                    {
                        gameViewType.GetMethod("SizeSelectionCallback")?.Invoke(window, new object[] { sizeIndex + 7, null });
                        break;
                    }
                }
            };
        }

        private void OnValidate()
        {
            if (Application.isPlaying)
                ChangeResolution((int)CurrentAspectRatio);

            // ShowSelectedResponsive();
            SetUIElementNames();
        }

        private void SetUIElementNames()
        {
            if (UiElements.Length <= 0) return;
            for (int i = 0; i < UiElements.Length; i++)
            {
                if (UiElements[i]._rectTransform == null)
                {
                    UiElements[i]._rectTransformName = "Empty " + i;
                    continue;
                }

                UiElements[i]._rectTransformName = UiElements[i]._rectTransform.name;
            }
        }
#endif
    }
}