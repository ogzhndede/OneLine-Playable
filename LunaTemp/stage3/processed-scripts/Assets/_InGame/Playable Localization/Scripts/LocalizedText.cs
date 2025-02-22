using UnityEngine;
using UnityEngine.UI;

namespace PlayableAdsTool
{
    [RequireComponent(typeof(Text))]
    public class LocalizedText : MonoBehaviour
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
            GetComponent<Text>().text = BeforeText+LocalizationManager.Localize(LocalizationKey)+AfterText;
        }
    }
}