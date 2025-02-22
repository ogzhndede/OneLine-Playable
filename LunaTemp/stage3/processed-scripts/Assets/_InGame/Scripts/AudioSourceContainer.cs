using System.Collections;
using UnityEngine;

namespace PlayableAdsTool
{
    public class AudioSourceContainer : MonoBehaviour
    {
        private AudioSource _source;

        private void Awake()
        {
            _source = GetComponent<AudioSource>();
        }

        public void PlaySound(AudioClip clip, float volume = 1, float pitch = 1)
        {
            _source.volume = volume;
            _source.pitch = pitch;
            _source.clip = clip;
            _source.Play();

            StartCoroutine(CheckIfAudioFinished());
        }

        IEnumerator CheckIfAudioFinished()
        {
            while (_source.isPlaying)
            {
                yield return null;
            }

            OnAudioFinished();
        }

        void OnAudioFinished()
        {
            ObjectPoolManager.ReturnObjectToPool(this.gameObject);
        }
    }
}