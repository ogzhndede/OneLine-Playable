using UnityEditor;
using UnityEngine;
using UnityEngine.UI;

namespace PlayableAdsTool
{
    /// <summary>
    /// Adds "Sync" button to LocalizationSync script.
    /// </summary>
    [CustomEditor(typeof(Text))]
    public class TextEditor : UnityEditor.Editor
    {
        public override void OnInspectorGUI()
        {
            DrawDefaultInspector();

            var component = (Text) target;

            if (component.GetComponent<LocalizedText>()) return;

            if (GUILayout.Button("Localize"))
            {
                component.gameObject.AddComponent<LocalizedText>();
            }
        }
    }
}