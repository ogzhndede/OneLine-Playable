using System.Collections.Generic;
using UnityEngine;

namespace PlayableAdsTool
{
    enum LanguageTest
    {
        English,
        German,
        French,
        Russian,
        Portuguese,
        Spanish,
    }

    public class LocalizationController : SingletonBehaviour<LocalizationController>
    {
        public List<Sheet> Sheets = new List<Sheet>();
        
        
        [LunaPlaygroundField("Localization test On/Off",0,"Localization Settings")]
        [SerializeField] private bool _languageTest;
        [LunaPlaygroundField("Test language",1,"Localization Settings")]
        [SerializeField] LanguageTest _language;
        
        private string lang;
        
        void Start()
        {
            //Default language
            lang = "English";

#if UNITY_LUNA
        lang = Luna.Unity.Playable.GetPreferredLanguage();
#endif
            lang = lang.ToLower();
            lang = lang.Substring(0, 2);
            //Buradaki dil kodları Lunaya göre, dil isimleri google sheete göre dolması gerekiyor.
            switch (lang)
            {
                case "en":
                    lang = "English";
                    break;
                case "de":
                    lang = "German";
                    break;
                case "fr":
                    lang = "French";
                    break;
                case "ru":
                    lang = "Russian";
                    break;
                case "pt":
                    lang = "Portuguese";
                    break;
                case "es":
                    lang = "Spanish";
                    break;
                default:
                    lang = "English";
                    break;
            }

            if (_languageTest)
                lang = _language.ToString();

            LocalizationManager.AutoLanguage(lang);
            LocalizationManager.Read();
        }

        protected override void OnAwake()
        {
        }
    }
}