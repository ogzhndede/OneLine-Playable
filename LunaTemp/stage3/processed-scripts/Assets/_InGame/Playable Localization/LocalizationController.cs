using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.Serialization;

namespace PlayableAdsTool
{
    enum LanguageTest
    {
        English, //NotoArabic
        Arabic, //NotoArabic
        Dutch, //NotoArabic
        Filipino, //NotoArabic
        French, //NotoArabic
        German, //NotoArabic
        Greek, //NotoArabic
        Hebrew, //NotoArabic
        Hindi, //NotoHindi
        Hungarian, //NotoArabic
        Indonesian, //NotoArabic
        Italian, //NotoArabic
        Japanese, //NotoJapanese
        Korean, //NotoKorean
        Malay, //NotoArabic
        Polish, //NotoArabic
        Portuguese, //NotoArabic
        Romanian, //NotoArabic
        Russian, //NotoJapanese
        Serbian, //NotoJapanese
        Spanish, //NotoArabic
        Thai, //NotoThai
        TraditionalChinese, //NotoJapanese
        Turkish, //NotoArabic
        Ukrainian, //NotoJapanese
        Urdu, //NotoArabic
        Vietnamese, //NotoArabic
    }

    public class LocalizationController : SingletonBehaviour<LocalizationController>
    {
        public List<Sheet> Sheets = new List<Sheet>();
        public TMP_FontAsset CurrentFont;
        [FormerlySerializedAs("ArabicFont")] [SerializeField] private TMP_FontAsset DefaultFont;
        [SerializeField] private TMP_FontAsset HindiFont;
        [SerializeField] private TMP_FontAsset JapaneseFont;
        [SerializeField] private TMP_FontAsset KoreanFont;
        [SerializeField] private TMP_FontAsset ThaiFont;

        [LunaPlaygroundField("Localization test On/Off", 0, "Localization Settings")] [SerializeField]
        private bool _languageTest;

        [LunaPlaygroundField("Test language", 1, "Localization Settings")] [SerializeField]
        LanguageTest _language;

        private string lang;

        void Awake()
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
                case "en": lang = "English"; break;
                case "ar": lang = "Arabic"; break;
                case "nl": lang = "Dutch"; break;
                case "fil": lang = "Filipino"; break;
                case "fr": lang = "French"; break;
                case "de": lang = "German"; break;
                case "el": lang = "Greek"; break;
                case "he": lang = "Hebrew"; break;
                case "hi": lang = "Hindi"; break;
                case "hu": lang = "Hungarian"; break;
                case "id": lang = "Indonesian"; break;
                case "it": lang = "Italian"; break;
                case "ja": lang = "Japanese"; break;
                case "ko": lang = "Korean"; break;
                case "ms": lang = "Malay"; break;
                case "pl": lang = "Polish"; break;
                case "pt": lang = "Portuguese"; break;
                case "ro": lang = "Romanian"; break;
                case "ru": lang = "Russian"; break;
                case "sr": lang = "Serbian"; break;
                case "es": lang = "Spanish"; break;
                case "th": lang = "Thai"; break;
                case "zh": lang = "Traditional Chinese"; break;
                case "tr": lang = "Turkish"; break;
                case "uk": lang = "Ukrainian"; break;
                case "ur": lang = "Urdu"; break;
                case "vi": lang = "Vietnamese"; break;
                default: lang = "English"; break;
            }

            if (_languageTest)
                lang = _language.ToString();

            // FONT LISTS
            var tempList_NotoDefault = new List<LanguageTest>
            {
                LanguageTest.English,
                LanguageTest.Arabic,
                LanguageTest.Dutch,
                LanguageTest.Filipino,
                LanguageTest.French,
                LanguageTest.German,
                LanguageTest.Greek,
                LanguageTest.Hebrew,
                LanguageTest.Hungarian,
                LanguageTest.Indonesian,
                LanguageTest.Italian,
                LanguageTest.Malay,
                LanguageTest.Polish,
                LanguageTest.Portuguese,
                LanguageTest.Romanian,
                LanguageTest.Spanish,
                LanguageTest.Turkish,
                LanguageTest.Urdu,
                LanguageTest.Vietnamese
            };

            var tempList_NotoHindi = new List<LanguageTest>
            {
                LanguageTest.Hindi
            };

            var tempList_NotoJapanese = new List<LanguageTest>
            {
                LanguageTest.Japanese,
                LanguageTest.Russian,
                LanguageTest.Serbian,
                LanguageTest.TraditionalChinese,
                LanguageTest.Ukrainian
            };

            var tempList_NotoKorean = new List<LanguageTest>
            {
                LanguageTest.Korean
            };

            var tempList_NotoThai = new List<LanguageTest>
            {
                LanguageTest.Thai
            };

            CurrentFont = DefaultFont;
            if (tempList_NotoHindi.Contains(_language)) CurrentFont = HindiFont;
            if (tempList_NotoJapanese.Contains(_language)) CurrentFont = JapaneseFont;
            if (tempList_NotoKorean.Contains(_language)) CurrentFont = KoreanFont;
            if (tempList_NotoThai.Contains(_language)) CurrentFont = ThaiFont;


            LocalizationManager.AutoLanguage(lang);
            LocalizationManager.Read();
        }
    }
}