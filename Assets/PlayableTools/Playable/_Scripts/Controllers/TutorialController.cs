using System;
using DG.Tweening;
using PlayableAdsTool;
using TMPro;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;

namespace CpiTemplate.Playable.Scripts.Controllers
{
    
    public class TutorialController : SingletonBehaviour<TutorialController>
    {
        public static event Action OnGameStart;

        //public int CurrentMoney=0;
        public int UpgradeIndex=0;
        public int AddPrice;
        public int UpgradePrice;
        public int RoadPrice;
        public float SpawnTime = 1.25f;
        public bool _isFirstInput=true;
        
        [SerializeField] private int[] _addPrices;
        [SerializeField] private int[] _upgradePrices;
        [SerializeField] private int[] _roadPrices;
        
        
        [SerializeField] private TextMeshProUGUI _coinText;
        [SerializeField] private TextMeshProUGUI _addText;
        [SerializeField] private TextMeshProUGUI _upgradeText;
        [SerializeField] private TextMeshProUGUI _roadText;
        [SerializeField] private Image _addImage;
        [SerializeField] private Image _upgradeImage;
        [SerializeField] private Image _expandImage;
        
        [SerializeField] private GameObject _tutorialHand;
        
        
        
        [LunaPlaygroundField("Endcard after * number of upgrade",0,"Game Settings")]
        [Range(1,8)]
        [SerializeField] private int _upgradeCount;
        
        [LunaPlaygroundField("Tower Type",1,"Game Settings")]
        
        private float offset;
        private Animator _handAnimator;
        private bool _isTutorialActive;
        private int _addIndex=0;
        private int _upgradeIndex=0;
        private int _roadIndex=0;
        private bool add = false;

        protected override void OnAwake() { }
        
        private void OnEnable()
        {
            AddPrice = _addPrices[0];
            UpgradePrice = _upgradePrices[0];
            RoadPrice = _roadPrices[0];
            
            
        }

        private void OnDisable()
        {
         
            
        }

        private void Update()
        {
            if (UpgradeIndex == _upgradeCount)
            {
                // DOVirtual.DelayedCall(0.5f,(() => EndCardController.Instance.OpenEndCard()));
            }
            //ButtonControl(CurrentMoney >= AddPrice,_addImage,_addText);
            //ButtonControl(CurrentMoney >= UpgradePrice,_upgradeImage,_upgradeText);
            //ButtonControl(CurrentMoney >= RoadPrice,_expandImage,_roadText);
        }
        
        
        private void AddButtonUpgrade()
        {
            if (_isFirstInput)
            {
                _isFirstInput = false;
                OnGameStart?.Invoke();
                _tutorialHand.SetActive(false);
            }
            if (_addIndex >= 3) return;
            //CurrentMoney -= _addPrices[_addIndex];
            //_coinText.text = CurrentMoney.ToString();
            _addIndex++;
            AddPrice = _addPrices[_addIndex];
            _addText.text = AddPrice.ToString();
            SpawnTime -= 0.07f;
            UpgradeIndex++;
        }
        private void UpgradeButtonUpgrade()
        {
            if (_upgradeIndex >= 3) return;
            //CurrentMoney -= _upgradePrices[_upgradeIndex];
            //_coinText.text = CurrentMoney.ToString();
            _upgradeIndex++;
            UpgradePrice = _upgradePrices[_upgradeIndex];
            _upgradeText.text = UpgradePrice.ToString();
            SpawnTime -= 0.07f;
            UpgradeIndex++;
        }
        private void RoadButtonUpgrade()
        {
            if (_roadIndex >= 3) return;
            //CurrentMoney -= _roadPrices[_roadIndex];
            //_coinText.text = CurrentMoney.ToString();
            _roadIndex++;
            RoadPrice = _roadPrices[_roadIndex];
            _roadText.text = RoadPrice.ToString();
            SpawnTime -= 0.07f;
            UpgradeIndex++;
        }

        private void ButtonControl(bool status, Image img, TextMeshProUGUI text)
        {
            if (status)
            {
                img.color=new Color(1f, 1f, 1f, 1f);
                text.color=new Color(1f, 1f, 1f, 1f);
            }else {
                img.color=new Color(0.9f, 0.9f, 0.9f, 0.8f);
                text.color=new Color(0.9f, 0.9f, 0.9f, 0.8f);
            }
        }
        
       

     
    }
}