using System;
using System.Collections.Generic;
using UnityEngine;
using Random = UnityEngine.Random;

public enum SoundTypes
{
    Correct,
    Wrong
}


namespace PlayableAdsTool
{
    [Serializable]
    public struct SoundTypeListPair
    {
        public SoundTypes type;
        public List<AudioClip> clips;
    }

    public class AudioManager : MonoBehaviour
    {
        public GameObject AudioSourceContainer;

        [SerializeField] private List<SoundTypeListPair> SoundTypeListPairs;

        public void PlaySound(SoundTypes soundType, float volume, float pitch)
        {
            AudioClip clip = GetCurrentAudioClip(soundType);

            if (clip == null) return;

            var container = ObjectPoolManager.SpawnObjects(AudioSourceContainer, transform);
            AudioSourceContainer audioSourceContainer = container.GetComponent<AudioSourceContainer>();
            audioSourceContainer.PlaySound(clip, volume, pitch);
        }

        AudioClip GetCurrentAudioClip(SoundTypes soundType)
        {
            List<AudioClip> soundList = null;
            foreach (var pair in SoundTypeListPairs)
            {
                if (pair.type == soundType)
                {
                    soundList = pair.clips;
                    break;
                }
            }

            return soundList == null ? null : soundList[Random.Range(0, soundList.Count)];
        }

        //##################################      EVENTS    ###########################

        private void OnEnable()
        {
            EventManager.OnPlaySound += OnPlaySound;
        }

        private void OnDisable()
        {
            EventManager.OnPlaySound -= OnPlaySound;
        }

        private void OnPlaySound(SoundTypes soundType, float volume, float pitch)
        {
            PlaySound(soundType, volume, pitch);
        }
    }
}