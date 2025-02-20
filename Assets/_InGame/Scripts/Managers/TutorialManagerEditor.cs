using UnityEditor;
using UnityEngine;

#if UNITY_EDITOR

namespace PlayableAdsTool
{
    [CustomPropertyDrawer(typeof(TutorialStep))]
    public class TutorialStepDrawer : PropertyDrawer
    {
        private float _multiTapHeight;
        private float[] _heightsFloats = new float[8];

        public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)
        {
            EditorGUI.BeginProperty(position, label, property);
            EditorGUI.indentLevel++;

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;

            SerializedProperty tutorialTypeProp = property.FindPropertyRelative("TutorialType");
            float enumHeight = EditorGUI.GetPropertyHeight(tutorialTypeProp, true);
            position.height = enumHeight;

            EditorGUI.PropertyField(position, tutorialTypeProp);
            position.y += enumHeight;

            switch ((TutorialType)tutorialTypeProp.enumValueIndex)
            {
                case TutorialType.Tap:
                    DrawTapFields(position, property);
                    break;
                case TutorialType.MultiTap:
                    DrawMultiTapFields(position, property);
                    break;
                case TutorialType.Swipe:
                    DrawSwipeFields(position, property);
                    break;
                case TutorialType.Swerve:
                    DrawSwerveFields(position, property);
                    break;
                case TutorialType.DragAndDrop:
                    DragAndDropFields(position, property);
                    break;
                case TutorialType.InfiniteSwing:
                    DrawInfiniteSwingFields(position, property);
                    break;
                case TutorialType.Mask:
                    DrawMaskFields(position, property);
                    break;
                case TutorialType.Joystick:
                    DrawJoystickFields(position, property);
                    break;
            }

            EditorGUI.indentLevel--;
            EditorGUI.EndProperty();
        }

        private void DrawTapFields(Rect position, SerializedProperty property)
        {
            _heightsFloats[0] = 6;
            position.y += EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty TapReference = property.FindPropertyRelative("TapReference");
            EditorGUI.PropertyField(position, TapReference, new GUIContent("Tap Reference"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty TapHandScaleVertical = property.FindPropertyRelative("TapHandScaleVertical");
            EditorGUI.PropertyField(position, TapHandScaleVertical, new GUIContent("Tap Hand Scale Vertical"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty TapHandScaleHorizontal = property.FindPropertyRelative("TapHandScaleHorizontal");
            EditorGUI.PropertyField(position, TapHandScaleHorizontal, new GUIContent("Tap Hand Scale Horizontal"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty Mask = property.FindPropertyRelative("TapMask");
            EditorGUI.PropertyField(position, Mask, new GUIContent("Mask"));

            if (Mask.boolValue)
            {
                _heightsFloats[0] = 8;
                position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                SerializedProperty MaskReferance = property.FindPropertyRelative("TapMaskReference");
                EditorGUI.PropertyField(position, MaskReferance, new GUIContent("Mask Reference"));

                position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                SerializedProperty MaskScale = property.FindPropertyRelative("TapMaskScale");
                EditorGUI.PropertyField(position, MaskScale, new GUIContent("Mask Scale"));
            }
        }

        private void DrawMultiTapFields(Rect position, SerializedProperty property)
        {
            _heightsFloats[1] = 2;
            var _multiTapPositionsHeight = 0;

            position.y += EditorGUIUtility.standardVerticalSpacing;

            SerializedProperty MultiTapReferences = property.FindPropertyRelative("MultiTapReferences");
            EditorGUI.PropertyField(position, MultiTapReferences, new GUIContent("Multi Tap References"));
            MultiTapReferences.isExpanded = EditorGUI.Foldout(position, MultiTapReferences.isExpanded, new GUIContent(""));
            if (MultiTapReferences.isExpanded)
            {
                _multiTapPositionsHeight = MultiTapReferences.arraySize + 4;
            }
            else
            {
                _multiTapPositionsHeight = 1;
            }

            position.y += _multiTapPositionsHeight * EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty MultiTapSpeedBetweenTaps = property.FindPropertyRelative("MultiTapSpeedBetweenTaps");
            EditorGUI.PropertyField(position, MultiTapSpeedBetweenTaps, new GUIContent("Multi Tap Speed Between Taps"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty MultiTapHandScaleVertical = property.FindPropertyRelative("MultiTapHandScaleVertical");
            EditorGUI.PropertyField(position, MultiTapHandScaleVertical, new GUIContent("Multi Tap Hand Scale Vertical"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty MultiTapHandScaleHorizontal = property.FindPropertyRelative("MultiTapHandScaleHorizontal");
            EditorGUI.PropertyField(position, MultiTapHandScaleHorizontal, new GUIContent("Multi Tap Hand Scale Horizontal"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty Mask = property.FindPropertyRelative("MultiTapMask");
            EditorGUI.PropertyField(position, Mask, new GUIContent("Mask"));

            if (Mask.boolValue)
            {
                _heightsFloats[1] = 4;
                position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                SerializedProperty MaskReferance = property.FindPropertyRelative("MultiTapMaskReference");
                EditorGUI.PropertyField(position, MaskReferance, new GUIContent("Mask Reference"));

                position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                SerializedProperty MaskScale = property.FindPropertyRelative("MultiTapMaskScale");
                EditorGUI.PropertyField(position, MaskScale, new GUIContent("Mask Scale"));
            }

            if (MultiTapReferences.isExpanded)
            {
                _multiTapHeight = MultiTapReferences.arraySize + 6.5f;
            }
            else
            {
                _multiTapHeight = 4.5f;
            }
        }

        private void DrawSwipeFields(Rect position, SerializedProperty property)
        {
            _heightsFloats[2] = 8;
            position.y += EditorGUIUtility.standardVerticalSpacing;

            SerializedProperty SwipeStartReference = property.FindPropertyRelative("SwipeStartReference");
            EditorGUI.PropertyField(position, SwipeStartReference, new GUIContent("Swipe Start Reference"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;

            SerializedProperty SwipeEndReference = property.FindPropertyRelative("SwipeEndReference");
            EditorGUI.PropertyField(position, SwipeEndReference, new GUIContent("Swipe End Reference"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;

            SerializedProperty SwipeSpeed = property.FindPropertyRelative("SwipeSpeed");
            EditorGUI.PropertyField(position, SwipeSpeed, new GUIContent("Swipe Speed"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty SwipeHandScaleVertical = property.FindPropertyRelative("SwipeHandScaleVertical");
            EditorGUI.PropertyField(position, SwipeHandScaleVertical, new GUIContent("Swipe Hand Scale Vertical"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty SwipeHandScaleHorizontal = property.FindPropertyRelative("SwipeHandScaleHorizontal");
            EditorGUI.PropertyField(position, SwipeHandScaleHorizontal, new GUIContent("Swipe Hand Scale Horizontal"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty Mask = property.FindPropertyRelative("SwipeMask");
            EditorGUI.PropertyField(position, Mask, new GUIContent("Mask"));

            if (Mask.boolValue)
            {
                _heightsFloats[2] = 10;
                position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                SerializedProperty MaskReferance = property.FindPropertyRelative("SwipeMaskReference");
                EditorGUI.PropertyField(position, MaskReferance, new GUIContent("Mask Reference"));

                position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                SerializedProperty MaskScale = property.FindPropertyRelative("SwipeMaskScale");
                EditorGUI.PropertyField(position, MaskScale, new GUIContent("Mask Scale"));
            }
        }

        private void DragAndDropFields(Rect position, SerializedProperty property)
        {
            _heightsFloats[3] = 8;
            position.y += EditorGUIUtility.standardVerticalSpacing;

            SerializedProperty DragAndDropStartReference = property.FindPropertyRelative("DragAndDropStartReference");
            EditorGUI.PropertyField(position, DragAndDropStartReference, new GUIContent("DragAndDrop Start Reference"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;

            SerializedProperty DragAndDropEndReference = property.FindPropertyRelative("DragAndDropEndReference");
            EditorGUI.PropertyField(position, DragAndDropEndReference, new GUIContent("DragAndDrop End Reference"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;

            SerializedProperty DragAndDropSpeed = property.FindPropertyRelative("DragAndDropSpeed");
            EditorGUI.PropertyField(position, DragAndDropSpeed, new GUIContent("DragAndDrop Speed"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty DragAndDropHandScaleVertical = property.FindPropertyRelative("DragAndDropHandScaleVertical");
            EditorGUI.PropertyField(position, DragAndDropHandScaleVertical, new GUIContent("DragAndDrop Hand Scale Vertical"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty DragAndDropHandScaleHorizontal = property.FindPropertyRelative("DragAndDropHandScaleHorizontal");
            EditorGUI.PropertyField(position, DragAndDropHandScaleHorizontal, new GUIContent("DragAndDrop Hand Scale Horizontal"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty Mask = property.FindPropertyRelative("DragAndDropMask");
            EditorGUI.PropertyField(position, Mask, new GUIContent("Mask"));

            if (Mask.boolValue)
            {
                _heightsFloats[3] = 10;
                position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                SerializedProperty MaskReferance = property.FindPropertyRelative("DragAndDropMaskReference");
                EditorGUI.PropertyField(position, MaskReferance, new GUIContent("Mask Reference"));

                position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                SerializedProperty MaskScale = property.FindPropertyRelative("DragAndDropMaskScale");
                EditorGUI.PropertyField(position, MaskScale, new GUIContent("Mask Scale"));
            }
        }

        private void DrawSwerveFields(Rect position, SerializedProperty property)
        {
            _heightsFloats[4] = 8;
            position.y += EditorGUIUtility.standardVerticalSpacing;

            SerializedProperty SwerveStartReference = property.FindPropertyRelative("SwerveStartReference");
            EditorGUI.PropertyField(position, SwerveStartReference, new GUIContent("Swerve Start Reference"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;

            SerializedProperty SwerveEndReference = property.FindPropertyRelative("SwerveEndReference");
            EditorGUI.PropertyField(position, SwerveEndReference, new GUIContent("Swerve End Reference"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;

            SerializedProperty SwerveSpeed = property.FindPropertyRelative("SwerveSpeed");
            EditorGUI.PropertyField(position, SwerveSpeed, new GUIContent("Swerve Speed"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty SwerveHandScaleVertical = property.FindPropertyRelative("SwerveHandScaleVertical");
            EditorGUI.PropertyField(position, SwerveHandScaleVertical, new GUIContent("Swerve Hand Scale Vertical"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty SwerveHandScaleHorizontal = property.FindPropertyRelative("SwerveHandScaleHorizontal");
            EditorGUI.PropertyField(position, SwerveHandScaleHorizontal, new GUIContent("Swerve Hand Scale Horizontal"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty Mask = property.FindPropertyRelative("SwerveMask");
            EditorGUI.PropertyField(position, Mask, new GUIContent("Mask"));

            if (Mask.boolValue)
            {
                _heightsFloats[4] = 10;
                position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                SerializedProperty MaskReferance = property.FindPropertyRelative("SwerveMaskReference");
                EditorGUI.PropertyField(position, MaskReferance, new GUIContent("Mask Reference"));

                position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                SerializedProperty MaskScale = property.FindPropertyRelative("SwerveMaskScale");
                EditorGUI.PropertyField(position, MaskScale, new GUIContent("Mask Scale"));
            }
        }

        private void DrawInfiniteSwingFields(Rect position, SerializedProperty property)
        {
            _heightsFloats[5] = 8;
            position.y += EditorGUIUtility.standardVerticalSpacing;

            SerializedProperty InfiniteSwingReference = property.FindPropertyRelative("InfiniteSwingReference");
            EditorGUI.PropertyField(position, InfiniteSwingReference, new GUIContent("Infinite Swing Reference"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;

            SerializedProperty InfiniteSwingSpeed = property.FindPropertyRelative("InfiniteSwingSpeed");
            EditorGUI.PropertyField(position, InfiniteSwingSpeed, new GUIContent("Infinite Swing Speed"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;

            SerializedProperty InfiniteSwingRadius = property.FindPropertyRelative("InfiniteSwingRadius");
            EditorGUI.PropertyField(position, InfiniteSwingRadius, new GUIContent("Infinite Swing Radius"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty InfiniteSwingHandScaleVertical = property.FindPropertyRelative("InfiniteSwingHandScaleVertical");
            EditorGUI.PropertyField(position, InfiniteSwingHandScaleVertical, new GUIContent("Infinite Swing Hand Scale Vertical"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty InfiniteSwingHandScaleHorizontal = property.FindPropertyRelative("InfiniteSwingHandScaleHorizontal");
            EditorGUI.PropertyField(position, InfiniteSwingHandScaleHorizontal, new GUIContent("Infinite Swing Hand Scale Horizontal"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty Mask = property.FindPropertyRelative("InfiniteSwingMask");
            EditorGUI.PropertyField(position, Mask, new GUIContent("Mask"));

            if (Mask.boolValue)
            {
                _heightsFloats[5] = 10;
                position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                SerializedProperty MaskReferance = property.FindPropertyRelative("InfiniteSwingMaskReference");
                EditorGUI.PropertyField(position, MaskReferance, new GUIContent("Mask Reference"));

                position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                SerializedProperty MaskScale = property.FindPropertyRelative("InfiniteSwingMaskScale");
                EditorGUI.PropertyField(position, MaskScale, new GUIContent("Mask Scale"));
            }
        }

        private void DrawMaskFields(Rect position, SerializedProperty property)
        {
            _heightsFloats[6] = 4;
            position.y += EditorGUIUtility.standardVerticalSpacing;
            
            SerializedProperty MaskReference = property.FindPropertyRelative("MaskReference");
            EditorGUI.PropertyField(position, MaskReference, new GUIContent("Mask Reference"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty MaskScale = property.FindPropertyRelative("MaskScale");
            EditorGUI.PropertyField(position, MaskScale, new GUIContent("Mask Scale"));
        }
        
        private void DrawJoystickFields(Rect position, SerializedProperty property)
        {
            _heightsFloats[7] = 4;
            position.y += EditorGUIUtility.standardVerticalSpacing;
            
            SerializedProperty JoystickReference = property.FindPropertyRelative("JoystickReference");
            EditorGUI.PropertyField(position, JoystickReference, new GUIContent("Joystick Reference"));

            position.y += EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            SerializedProperty JoystickScale = property.FindPropertyRelative("JoystickScale");
            EditorGUI.PropertyField(position, JoystickScale, new GUIContent("Joystick Scale"));
        }

        public override float GetPropertyHeight(SerializedProperty property, GUIContent label)
        {
            float height = EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
            switch ((TutorialType)property.FindPropertyRelative("TutorialType").enumValueIndex)
            {
                case TutorialType.Empty:
                    height +=  EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                    break;
                case TutorialType.Tap:
                    height += _heightsFloats[0] * EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                    break;
                case TutorialType.MultiTap:
                    height += (_multiTapHeight + _heightsFloats[1]) * EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                    break;
                case TutorialType.Swipe:
                    height += _heightsFloats[2] * EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                    break;
                case TutorialType.DragAndDrop:
                    height += _heightsFloats[3] * EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                    break;
                case TutorialType.Swerve:
                    height += _heightsFloats[4] * EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                    break;
                case TutorialType.InfiniteSwing:
                    height += _heightsFloats[5] * EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                    break;
                case TutorialType.Mask:
                    height += _heightsFloats[6] * EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                    break;
                case TutorialType.Joystick:
                    height += _heightsFloats[7] * EditorGUIUtility.singleLineHeight + EditorGUIUtility.standardVerticalSpacing;
                    break;
            }

            return height;
        }
    }
}
#endif