using TMPro;
using UnityEngine;

namespace PlayableAdsTool
{
    [RequireComponent(typeof(TextMeshProUGUI))]
    public class LocalizedTextTMP : MonoBehaviour
    {
        public string LocalizationKey;

        public void Start()
        {
            Localize();
            LocalizationManager.OnLocalizationChanged += Localize;
        }

        public void OnDestroy()
        {
            LocalizationManager.OnLocalizationChanged -= Localize;
        }

        private void Localize()
        {
            GetComponent<TextMeshProUGUI>().font = LocalizationController.Instance.CurrentFont;
            GetComponent<TextMeshProUGUI>().text = LocalizationManager.Localize(LocalizationKey);
        }
    }
}