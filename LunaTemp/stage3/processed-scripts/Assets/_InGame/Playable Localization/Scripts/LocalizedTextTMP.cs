using TMPro;
using UnityEngine;

namespace PlayableAdsTool
{
    [RequireComponent(typeof(TextMeshProUGUI))]
    public class LocalizedTextTMP : MonoBehaviour
    {
        public string LocalizationKey;
        public string BeforeText;
        public string AfterText;

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
            GetComponent<TextMeshProUGUI>().text = BeforeText+LocalizationManager.Localize(LocalizationKey)+AfterText;
        }
    }
}