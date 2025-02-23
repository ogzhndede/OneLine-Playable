if ( TRACE ) { TRACE( JSON.parse( '["_InGame.Scripts.DrawContollers.DrawingController#init","_InGame.Scripts.DrawContollers.DrawingController#ClickAction","_InGame.Scripts.DrawContollers.DrawingController#DragAction","_InGame.Scripts.DrawContollers.DrawingController#UnClickAction","_InGame.Scripts.DrawContollers.DrawingController#CheckFailDrawing","_InGame.Scripts.DrawContollers.DrawingController#UpdateLineRenderer","_InGame.Scripts.DrawContollers.DrawingController#ClearDrawPoints","_InGame.Scripts.DrawContollers.DrawingController#AddToDrawPoints","_InGame.Scripts.DrawContollers.DrawingController#IsLastPointJoint","_InGame.Scripts.DrawContollers.DrawingController#GetCurrentDrawPoint","_InGame.Scripts.DrawContollers.DrawingController#GetClosestDrawPointOnWorldSpace","_InGame.Scripts.DrawContollers.DrawPointBase#init","_InGame.Scripts.DrawContollers.DrawPointBase#Awake","_InGame.Scripts.DrawContollers.DrawPointBase#SetBorderDrawPoints","_InGame.Scripts.DrawContollers.DrawPointBase#SelectPoint","_InGame.Scripts.DrawContollers.DrawPointBase#ResetPoint","_InGame.Scripts.DrawContollers.DrawPointBase#GetClosestBorderPoint","_InGame.Scripts.DrawContollers.DrawPointBase#CanPointSelectable","_InGame.Scripts.DrawContollers.DrawPointBase#OnDrawGizmos","_InGame.Scripts.DrawContollers.DrawPointBase#OnDrawGizmosSelected","_InGame.Scripts.DrawContollers.DrawPointGenerator#init","_InGame.Scripts.DrawContollers.DrawPointGenerator#OnValidate","_InGame.Scripts.DrawContollers.DrawPointGenerator#UpdatePointList","_InGame.Scripts.DrawContollers.DrawPointGenerator#GenerateDrawPoint","_InGame.Scripts.DrawContollers.DrawPointGenerator#SetBorderDrawPoints","_InGame.Scripts.DrawContollers.DrawPointGenerator#UpdateDrawPointList","_InGame.Scripts.DrawContollers.DrawPointGenerator#ClearDrawPoints","_InGame.Scripts.DrawContollers.DrawPointGenerator#OnDrawGizmos","_InGame.Scripts.Managers.DrawingData#controller#get","PlayableAdsTool.SingletonBehaviour$1#Instance#get","PlayableAdsTool.SingletonBehaviour$1#Instance#set","PlayableAdsTool.SingletonBehaviour$1#init","PlayableAdsTool.SingletonBehaviour$1#Awake","PlayableAdsTool.SingletonBehaviour$1#OnAwake","_InGame.Scripts.Managers.TutorialVariables#getDefaultValue","_InGame.Scripts.Managers.TutorialVariables#ctor","_InGame.Scripts.Managers.TutorialVariables#getHashCode","_InGame.Scripts.Managers.TutorialVariables#equals","_InGame.Scripts.Managers.TutorialVariables#$clone","_InGame.Scripts.Others.FillSliderController#init","_InGame.Scripts.Others.FillSliderController#CheckFillSlider","_InGame.Scripts.Others.FillSliderController#ResetFillSlider","_InGame.Scripts.Others.FillSliderController#OnEnable","_InGame.Scripts.Others.FillSliderController#OnDisable","_InGame.Scripts.Others.FillSliderController#OnCheckFillSlider","GameBaseState#GetStateType","GameBaseState#EnterState","GameBaseState#UpdateState","GameBaseState#ExitState","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","FeedbackPanelController#OnEnable","FeedbackPanelController#OnDisable","FeedbackPanelController#OnCompleteDrawing","FeedbackPanelController#OnFailedToDraw","PathCreation.BezierPath#NumPoints#get","PathCreation.BezierPath#NumAnchorPoints#get","PathCreation.BezierPath#NumSegments#get","PathCreation.BezierPath#Space#get","PathCreation.BezierPath#Space#set","PathCreation.BezierPath#IsClosed#get","PathCreation.BezierPath#IsClosed#set","PathCreation.BezierPath#ControlPointMode#get","PathCreation.BezierPath#ControlPointMode#set","PathCreation.BezierPath#AutoControlLength#get","PathCreation.BezierPath#AutoControlLength#set","PathCreation.BezierPath#FlipNormals#get","PathCreation.BezierPath#FlipNormals#set","PathCreation.BezierPath#GlobalNormalsAngle#get","PathCreation.BezierPath#GlobalNormalsAngle#set","PathCreation.BezierPath#PathBounds#get","PathCreation.BezierPath#init","PathCreation.BezierPath#$ctor4","PathCreation.BezierPath#$ctor3","PathCreation.BezierPath#$ctor2","PathCreation.BezierPath#ctor","PathCreation.BezierPath#$ctor1","PathCreation.BezierPath#getItem","PathCreation.BezierPath#GetPoint","PathCreation.BezierPath#SetPoint","PathCreation.BezierPath#AddSegmentToEnd","PathCreation.BezierPath#AddSegmentToStart","PathCreation.BezierPath#SplitSegment","PathCreation.BezierPath#DeleteSegment","PathCreation.BezierPath#GetPointsInSegment","PathCreation.BezierPath#MovePoint","PathCreation.BezierPath#CalculateBoundsWithTransform","PathCreation.BezierPath#GetAnchorNormalAngle","PathCreation.BezierPath#SetAnchorNormalAngle","PathCreation.BezierPath#ResetNormalAngles","PathCreation.BezierPath#UpdateBounds","PathCreation.BezierPath#AutoSetAllAffectedControlPoints","PathCreation.BezierPath#AutoSetAllControlPoints","PathCreation.BezierPath#AutoSetAnchorControlPoints","PathCreation.BezierPath#AutoSetStartAndEndControls","PathCreation.BezierPath#UpdateToNewPathSpace","PathCreation.BezierPath#UpdateClosedState","PathCreation.BezierPath#LoopIndex","PathCreation.BezierPath#NotifyPathModified","PathCreation.Examples.GeneratePathExample#init","PathCreation.Examples.GeneratePathExample#Start","PathCreation.Examples.PathFollower#init","PathCreation.Examples.PathFollower#Start","PathCreation.Examples.PathFollower#Update","PathCreation.Examples.PathFollower#OnPathChanged","PathCreation.Examples.PathSceneTool#path#get","PathCreation.Examples.PathSceneTool#init","PathCreation.Examples.PathSceneTool#TriggerUpdate","PathCreation.Examples.PathSceneTool#OnDestroy","PathCreation.Examples.PathSpawner#Start","PathCreation.GlobalDisplaySettings#init","PathCreation.MinMax3D#init","PathCreation.MinMax3D#ctor","PathCreation.MinMax3D#AddValue","PathCreation.PathCreator#path#get","PathCreation.PathCreator#bezierPath#get","PathCreation.PathCreator#bezierPath#set","PathCreation.PathCreator#EditorData#get","PathCreation.PathCreator#InitializeEditorData","PathCreation.PathCreator#TriggerPathUpdate","PathCreation.PathCreatorData#bezierPath#get","PathCreation.PathCreatorData#bezierPath#set","PathCreation.PathCreatorData#init","PathCreation.PathCreatorData#Initialize","PathCreation.PathCreatorData#ResetBezierPath","PathCreation.PathCreatorData#CreateBezier","PathCreation.PathCreatorData#GetVertexPath","PathCreation.PathCreatorData#PathTransformed","PathCreation.PathCreatorData#VertexPathSettingsChanged","PathCreation.PathCreatorData#PathModifiedByUndo","PathCreation.PathCreatorData#BezierPathEdited","PathCreation.Utility.CubicBezierUtility#EvaluateCurve$1","PathCreation.Utility.CubicBezierUtility#EvaluateCurve","PathCreation.Utility.CubicBezierUtility#EvaluateCurveDerivative$1","PathCreation.Utility.CubicBezierUtility#EvaluateCurveDerivative","PathCreation.Utility.CubicBezierUtility#EvaluateCurveSecondDerivative$1","PathCreation.Utility.CubicBezierUtility#EvaluateCurveSecondDerivative","PathCreation.Utility.CubicBezierUtility#Normal$1","PathCreation.Utility.CubicBezierUtility#Normal","PathCreation.Utility.CubicBezierUtility#CalculateSegmentBounds","PathCreation.Utility.CubicBezierUtility#SplitCurve","PathCreation.Utility.CubicBezierUtility#EstimateCurveLength","PathCreation.Utility.CubicBezierUtility#ExtremePointTimes","PathCreation.Utility.CubicBezierUtility#StationaryPointTimes","PathCreation.Utility.MathUtility#LockTransformToSpace","PathCreation.Utility.MathUtility#TransformPoint","PathCreation.Utility.MathUtility#InverseTransformPoint","PathCreation.Utility.MathUtility#TransformVector","PathCreation.Utility.MathUtility#InverseTransformVector","PathCreation.Utility.MathUtility#TransformDirection","PathCreation.Utility.MathUtility#InverseTransformDirection","PathCreation.Utility.MathUtility#LineSegmentsIntersect","PathCreation.Utility.MathUtility#LinesIntersect","PathCreation.Utility.MathUtility#PointOfLineLineIntersection","PathCreation.Utility.MathUtility#ClosestPointOnLineSegment","PathCreation.Utility.MathUtility#ClosestPointOnLineSegment$1","PathCreation.Utility.MathUtility#SideOfLine","PathCreation.Utility.MathUtility#MinAngle","PathCreation.Utility.MathUtility#PointInTriangle","PathCreation.Utility.MathUtility#PointsAreClockwise","PathCreation.Utility.MathUtility.PosRotScale#init","PathCreation.Utility.MathUtility.PosRotScale#ctor","PathCreation.Utility.MathUtility.PosRotScale#SetTransform","PathCreation.Utility.VertexPathUtility#SplitBezierPathByAngleError","PathCreation.Utility.VertexPathUtility#SplitBezierPathEvenly","PathCreation.Utility.VertexPathUtility.PathSplitData#init","PathCreation.VertexPath#init","PathCreation.VertexPath#NumPoints#get","PathCreation.VertexPath#init","PathCreation.VertexPath#$ctor2","PathCreation.VertexPath#$ctor1","PathCreation.VertexPath#ctor","PathCreation.VertexPath#UpdateTransform","PathCreation.VertexPath#GetTangent","PathCreation.VertexPath#GetNormal","PathCreation.VertexPath#GetNormal$1","PathCreation.VertexPath#GetPoint","PathCreation.VertexPath#GetPointAtDistance","PathCreation.VertexPath#GetDirectionAtDistance","PathCreation.VertexPath#GetNormalAtDistance","PathCreation.VertexPath#GetRotationAtDistance","PathCreation.VertexPath#GetPointAtTime","PathCreation.VertexPath#GetDirection","PathCreation.VertexPath#GetRotation","PathCreation.VertexPath#GetClosestPointOnPath","PathCreation.VertexPath#GetClosestTimeOnPath","PathCreation.VertexPath#GetClosestDistanceAlongPath","PathCreation.VertexPath#CalculatePercentOnPathData","PathCreation.VertexPath#CalculateClosestPointOnPathData","PathCreation.VertexPath.TimeOnPathData#getDefaultValue","PathCreation.VertexPath.TimeOnPathData#$ctor1","PathCreation.VertexPath.TimeOnPathData#ctor","PathCreation.VertexPath.TimeOnPathData#getHashCode","PathCreation.VertexPath.TimeOnPathData#equals","PathCreation.VertexPath.TimeOnPathData#$clone","PlayableAdsTool.AudioManager#PlaySound","PlayableAdsTool.AudioManager#GetCurrentAudioClip","PlayableAdsTool.AudioManager#OnEnable","PlayableAdsTool.AudioManager#OnDisable","PlayableAdsTool.AudioManager#OnPlaySound","PlayableAdsTool.AudioSourceContainer#Awake","PlayableAdsTool.AudioSourceContainer#PlaySound","PlayableAdsTool.AudioSourceContainer#CheckIfAudioFinished","PlayableAdsTool.AudioSourceContainer#OnAudioFinished","PlayableAdsTool.LocalizationManager#Language#get","PlayableAdsTool.LocalizationManager#Language#set","PlayableAdsTool.LocalizationManager#init","PlayableAdsTool.LocalizationManager#AutoLanguage","PlayableAdsTool.LocalizationManager#Read","PlayableAdsTool.LocalizationManager#HasKey","PlayableAdsTool.LocalizationManager#Localize","PlayableAdsTool.LocalizationManager#Localize$1","PlayableAdsTool.LocalizationManager#GetLines","PlayableAdsTool.LocalizationManager#GetColumns","PlayableAdsTool.LocalizationSettings#Instance#get","PlayableAdsTool.LocalizationSettings#init","PlayableAdsTool.LocalizationSettings#LoadSettings","PlayableAdsTool.LocalizationSettings#init","PlayableAdsTool.LocalizationSync#init","PlayableAdsTool.LocalizedDropdown#Start","PlayableAdsTool.LocalizedDropdown#OnDestroy","PlayableAdsTool.LocalizedDropdown#Localize","PlayableAdsTool.LocalizedText#Start","PlayableAdsTool.LocalizedText#OnDestroy","PlayableAdsTool.LocalizedText#Localize","PlayableAdsTool.LocalizedTextTMP#Start","PlayableAdsTool.LocalizedTextTMP#OnDestroy","PlayableAdsTool.LocalizedTextTMP#Localize","PlayableAdsTool.ObjectPoolManager#init","PlayableAdsTool.ObjectPoolManager#SpawnObjects$1","PlayableAdsTool.ObjectPoolManager#SpawnObjects","PlayableAdsTool.ObjectPoolManager#ReturnObjectToPool","PlayableAdsTool.ObjectPoolManager#ReturnObjectToPool$1","PlayableAdsTool.ObjectPoolManager#init","PlayableAdsTool.ObjectPoolManager#CreateBeginningPool","PlayableAdsTool.ObjectPoolManager#Awake","PlayableAdsTool.PoolContainer#getDefaultValue","PlayableAdsTool.PoolContainer#ctor","PlayableAdsTool.PoolContainer#getHashCode","PlayableAdsTool.PoolContainer#equals","PlayableAdsTool.PoolContainer#$clone","PlayableAdsTool.PooledObjectInfo#init","PlayableAdsTool.SoundTypeListPair#getDefaultValue","PlayableAdsTool.SoundTypeListPair#ctor","PlayableAdsTool.SoundTypeListPair#getHashCode","PlayableAdsTool.SoundTypeListPair#equals","PlayableAdsTool.SoundTypeListPair#$clone","TutorialAnimationHelper#AddToLineRenderer","TutorialAnimationHelper#ClearLineRenderer","UIData#init","UIManager#Start","UIManager#Update","_InGame.Scripts.Managers.DrawingManager#inherits","_InGame.Scripts.Managers.DrawingManager#init","_InGame.Scripts.Managers.DrawingManager#Start","_InGame.Scripts.Managers.DrawingManager#Update","_InGame.Scripts.Managers.DrawingManager#OnEnable","_InGame.Scripts.Managers.DrawingManager#OnDisable","_InGame.Scripts.Managers.DrawingManager#OnCompleteDrawing","_InGame.Scripts.Managers.DrawingManager#OnLoadDrawing","_InGame.Scripts.Managers.DrawingManager#ClickOnScreen","_InGame.Scripts.Managers.DrawingManager#DragOnScreen","_InGame.Scripts.Managers.DrawingManager#UnClickOnScreen","_InGame.Scripts.Managers.DrawingManager#CanDraw","_InGame.Scripts.Managers.DrawingManager#GetDrawingData","_InGame.Scripts.Managers.DrawingManager#GetDrawingCompletePercent","_InGame.Scripts.Managers.DrawingManager#GetWorldPosition","_InGame.Scripts.Managers.GameManager#inherits","_InGame.Scripts.Managers.GameManager#GameStateManager#get","_InGame.Scripts.Managers.GameManager#Start","_InGame.Scripts.Managers.TutorialManager#inherits","_InGame.Scripts.Managers.TutorialManager#init","_InGame.Scripts.Managers.TutorialManager#GetSelectedTutorial","_InGame.Scripts.Managers.TutorialManager#OnEnable","_InGame.Scripts.Managers.TutorialManager#OnDisable","_InGame.Scripts.Managers.TutorialManager#OnShowTutorial","_InGame.Scripts.Managers.TutorialManager#OnCloseTutorial","_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize#ctor","_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize#EnterState","_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize#ExitState","_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize#UpdateState","_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow#ctor","_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow#EnterState","_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow#ExitState","_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow#UpdateState","_InGame.Scripts.Utilities.PrefabHolder#inherits","GameStateGameEnd#ctor","GameStateGameEnd#EnterState","GameStateGameEnd#ExitState","GameStateGameEnd#UpdateState","GameStateInGame#ctor","GameStateInGame#EnterState","GameStateInGame#ExitState","GameStateInGame#UpdateState","GameStateManager#inherits","GameStateManager#Base#get","GameStateManager#CurrentState#get","GameStateManager#CurrentState#set","GameStateManager#CurrentStateType#get","GameStateManager#CurrentStateType#set","GameStateManager#init","GameStateManager#Awake$1","GameStateManager#Start","GameStateManager#Update","GameStateManager#SwitchState","GameStateManager#AddState","GameStateManager#ExitSpecificState","GameStateManager#ExitFromAllStates","GameStateManager#UpdateCurrentStateType","GameStateManager#OnEnable","GameStateManager#OnDisable","GameStateManager#OnGameStateChange","PathCreation.Examples.PathPlacer#init","PathCreation.Examples.PathPlacer#init","PathCreation.Examples.PathPlacer#Generate","PathCreation.Examples.PathPlacer#DestroyObjects","PathCreation.Examples.PathPlacer#PathUpdated","PathCreation.Examples.RoadMeshCreator#init","PathCreation.Examples.RoadMeshCreator#PathUpdated","PathCreation.Examples.RoadMeshCreator#CreateRoadMesh","PathCreation.Examples.RoadMeshCreator#AssignMeshComponents","PathCreation.Examples.RoadMeshCreator#AssignMaterials","PlayableAdsTool.CameraManager#inherits","PlayableAdsTool.CameraManager#OnEnable","PlayableAdsTool.CameraManager#OnDisable","PlayableAdsTool.CameraManager#SetDesiredCam","PlayableAdsTool.CameraManager#SetCamScreenOrientation","PlayableAdsTool.CameraManager#SetAllCam","PlayableAdsTool.EndCardController#inherits","PlayableAdsTool.EndCardController#init","PlayableAdsTool.EndCardController#OnEnable","PlayableAdsTool.EndCardController#OnDisable","PlayableAdsTool.EndCardController#Update","PlayableAdsTool.EndCardController#SendStore","PlayableAdsTool.EndCardController#DirectSendStore","PlayableAdsTool.EndCardController#GameResume","PlayableAdsTool.EndCardController#TapChecker","PlayableAdsTool.EndCardController#TimeChecker","PlayableAdsTool.EndCardController#OpenEndCard","PlayableAdsTool.EndCardController#OpenStore","PlayableAdsTool.EndCardController#OpenStore$1","PlayableAdsTool.EndCardController#PlayEndCardAnimation","PlayableAdsTool.LocalizationController#inherits","PlayableAdsTool.LocalizationController#init","PlayableAdsTool.LocalizationController#Awake$1","PlayableAdsTool.ResponsiveManager#inherits","PlayableAdsTool.ResponsiveManager#OnEnable","PlayableAdsTool.ResponsiveManager#OnDisable","PlayableAdsTool.ResponsiveManager#Start","PlayableAdsTool.ResponsiveManager#Update","PlayableAdsTool.ResponsiveManager#CheckScreenOrientation","PlayableAdsTool.ResponsiveManager#SetScreen","PlayableAdsTool.ResponsiveManager#SaveUIDataList","PlayableAdsTool.ResponsiveManager#LoadUIDataList","PlayableAdsTool.ResponsiveManager#ShowSelectedResponsive","PlayableAdsTool.ResponsiveManager#SaveResponsive","PlayableAdsTool.ResponsiveManager#LoadResponsive","PlayableAdsTool.ResponsiveManager#SetBannerVisibilty"]' ) ); }
/**
 * @version 1.0.9186.14
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*_InGame.Scripts.DrawContollers.DrawingController start.*/
    Bridge.define("_InGame.Scripts.DrawContollers.DrawingController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _lineRenderer: null,
            AllDrawPoints: null,
            SelectedDrawPoints: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawingController#init", this ); }

                this.AllDrawPoints = new (System.Collections.Generic.List$1(_InGame.Scripts.DrawContollers.DrawPointBase)).ctor();
                this.SelectedDrawPoints = new (System.Collections.Generic.List$1(_InGame.Scripts.DrawContollers.DrawPointBase)).ctor();
            }
        },
        methods: {
            /*_InGame.Scripts.DrawContollers.DrawingController.ClickAction start.*/
            ClickAction: function (touchPoint) {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawingController#ClickAction", this ); }

                var jointPoint = this.GetClosestDrawPointOnWorldSpace(touchPoint, _InGame.Scripts.DrawContollers.DrawPointType.JointPoint);
                this.AddToDrawPoints(jointPoint);
            },
            /*_InGame.Scripts.DrawContollers.DrawingController.ClickAction end.*/

            /*_InGame.Scripts.DrawContollers.DrawingController.DragAction start.*/
            DragAction: function (touchPoint) {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawingController#DragAction", this ); }

                var currentDrawPoint = this.GetCurrentDrawPoint();
                if (UnityEngine.MonoBehaviour.op_Equality(currentDrawPoint, null)) {
                    return;
                }
                var closestBorderPoint = UnityEngine.MonoBehaviour.op_Inequality(currentDrawPoint, null) ? currentDrawPoint.GetClosestBorderPoint(touchPoint) : null;

                var distanceToCurrentDrawPoint = touchPoint.$clone().sub( UnityEngine.Vector2.FromVector3(currentDrawPoint.transform.position) ).length();
                var distanceToClosestBorderPoint = touchPoint.$clone().sub( UnityEngine.Vector2.FromVector3(closestBorderPoint.transform.position) ).length();

                //CHECK AND ADD TO LIST
                if (distanceToCurrentDrawPoint > distanceToClosestBorderPoint && closestBorderPoint.CanPointSelectable()) {
                    this.AddToDrawPoints(closestBorderPoint);
                }
            },
            /*_InGame.Scripts.DrawContollers.DrawingController.DragAction end.*/

            /*_InGame.Scripts.DrawContollers.DrawingController.UnClickAction start.*/
            UnClickAction: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawingController#UnClickAction", this ); }

                this.CheckFailDrawing();
                this.ClearDrawPoints();
            },
            /*_InGame.Scripts.DrawContollers.DrawingController.UnClickAction end.*/

            /*_InGame.Scripts.DrawContollers.DrawingController.CheckFailDrawing start.*/
            CheckFailDrawing: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawingController#CheckFailDrawing", this ); }

                if (PlayableAdsTool.SingletonBehaviour$1(_InGame.Scripts.Managers.DrawingManager).Instance.GetDrawingCompletePercent() < 1 && this.SelectedDrawPoints.Count > 4) {
                    !Bridge.staticEquals(EventManager.OnFailedToDraw, null) ? EventManager.OnFailedToDraw() : null;
                    !Bridge.staticEquals(EventManager.OnPlaySound, null) ? EventManager.OnPlaySound(SoundTypes.Wrong, 1, 1) : null;
                }
            },
            /*_InGame.Scripts.DrawContollers.DrawingController.CheckFailDrawing end.*/

            /*_InGame.Scripts.DrawContollers.DrawingController.UpdateLineRenderer start.*/
            UpdateLineRenderer: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawingController#UpdateLineRenderer", this ); }

                if (UnityEngine.Component.op_Equality(this._lineRenderer, null) || this.SelectedDrawPoints.Count < 2) {
                    return;
                }

                this._lineRenderer.positionCount = this.SelectedDrawPoints.Count;

                for (var i = 0; i < this.SelectedDrawPoints.Count; i = (i + 1) | 0) {
                    this._lineRenderer.SetPosition(i, this.SelectedDrawPoints.getItem(i).transform.position);
                }

                !Bridge.staticEquals(EventManager.OnCheckFillSlider, null) ? EventManager.OnCheckFillSlider() : null;
            },
            /*_InGame.Scripts.DrawContollers.DrawingController.UpdateLineRenderer end.*/

            /*_InGame.Scripts.DrawContollers.DrawingController.ClearDrawPoints start.*/
            ClearDrawPoints: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawingController#ClearDrawPoints", this ); }

                var $t;
                this._lineRenderer.positionCount = 0;

                $t = Bridge.getEnumerator(this.SelectedDrawPoints);
                try {
                    while ($t.moveNext()) {
                        var point = $t.Current;
                        point.ResetPoint();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.SelectedDrawPoints.clear();
                !Bridge.staticEquals(EventManager.OnCheckFillSlider, null) ? EventManager.OnCheckFillSlider() : null;
            },
            /*_InGame.Scripts.DrawContollers.DrawingController.ClearDrawPoints end.*/

            /*_InGame.Scripts.DrawContollers.DrawingController.AddToDrawPoints start.*/
            AddToDrawPoints: function (drawPoint) {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawingController#AddToDrawPoints", this ); }

                switch (drawPoint._drawPointType) {
                    case _InGame.Scripts.DrawContollers.DrawPointType.FlowPoint: 
                        if (this.SelectedDrawPoints.contains(drawPoint)) {
                            return;
                        }
                        break;
                    case _InGame.Scripts.DrawContollers.DrawPointType.JointPoint: 
                        if (this.IsLastPointJoint()) {
                            return;
                        }
                        break;
                }

                drawPoint.SelectPoint();
                this.SelectedDrawPoints.add(drawPoint);
                this.UpdateLineRenderer();

                //CHECK WIN STATE
                if (PlayableAdsTool.SingletonBehaviour$1(_InGame.Scripts.Managers.DrawingManager).Instance.GetDrawingCompletePercent() >= 1) {
                    !Bridge.staticEquals(EventManager.OnCompleteDrawing, null) ? EventManager.OnCompleteDrawing() : null;
                    !Bridge.staticEquals(EventManager.OnPlaySound, null) ? EventManager.OnPlaySound(SoundTypes.Correct, 1, 1) : null;
                }
            },
            /*_InGame.Scripts.DrawContollers.DrawingController.AddToDrawPoints end.*/

            /*_InGame.Scripts.DrawContollers.DrawingController.IsLastPointJoint start.*/
            IsLastPointJoint: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawingController#IsLastPointJoint", this ); }

                if (this.SelectedDrawPoints.Count < 2) {
                    return false;
                }

                var pointBase = this.SelectedDrawPoints.getItem(((this.SelectedDrawPoints.Count - 2) | 0));
                if (pointBase._drawPointType === _InGame.Scripts.DrawContollers.DrawPointType.JointPoint) {
                    return true;
                }
                return false;
            },
            /*_InGame.Scripts.DrawContollers.DrawingController.IsLastPointJoint end.*/

            /*_InGame.Scripts.DrawContollers.DrawingController.GetCurrentDrawPoint start.*/
            GetCurrentDrawPoint: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawingController#GetCurrentDrawPoint", this ); }

                if (this.SelectedDrawPoints.Count === 0) {
                    return null;
                }
                return this.SelectedDrawPoints.getItem(((this.SelectedDrawPoints.Count - 1) | 0));
            },
            /*_InGame.Scripts.DrawContollers.DrawingController.GetCurrentDrawPoint end.*/

            /*_InGame.Scripts.DrawContollers.DrawingController.GetClosestDrawPointOnWorldSpace start.*/
            GetClosestDrawPointOnWorldSpace: function (touchPoint, pointType) {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawingController#GetClosestDrawPointOnWorldSpace", this ); }

                var $t;
                if (this.AllDrawPoints == null || this.AllDrawPoints.Count === 0) {
                    return null;
                }

                var closestPoint = null;
                var minDistance = 3.40282347E+38;

                $t = Bridge.getEnumerator(this.AllDrawPoints);
                try {
                    while ($t.moveNext()) {
                        var point = $t.Current;
                        if (point._drawPointType !== pointType) {
                            continue;
                        }

                        var distance = touchPoint.$clone().sub( UnityEngine.Vector2.FromVector3(point.transform.position) ).length();
                        if (distance < minDistance) {
                            minDistance = distance;
                            closestPoint = point;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return closestPoint;
            },
            /*_InGame.Scripts.DrawContollers.DrawingController.GetClosestDrawPointOnWorldSpace end.*/


        }
    });
    /*_InGame.Scripts.DrawContollers.DrawingController end.*/

    /*_InGame.Scripts.DrawContollers.DrawPointBase start.*/
    Bridge.define("_InGame.Scripts.DrawContollers.DrawPointBase", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _drawPointType: 0,
            BorderDrawPoints: null,
            MaxConnectionCount: 0,
            PointConnectionCount: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawPointBase#init", this ); }

                this.BorderDrawPoints = new (System.Collections.Generic.List$1(_InGame.Scripts.DrawContollers.DrawPointBase)).ctor();
            }
        },
        methods: {
            /*_InGame.Scripts.DrawContollers.DrawPointBase.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawPointBase#Awake", this ); }

                this.MaxConnectionCount = this.BorderDrawPoints.Count < 4 ? this.BorderDrawPoints.Count : 3; //Tek 
            },
            /*_InGame.Scripts.DrawContollers.DrawPointBase.Awake end.*/

            /*_InGame.Scripts.DrawContollers.DrawPointBase.SetBorderDrawPoints start.*/
            SetBorderDrawPoints: function (drawPoints) {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawPointBase#SetBorderDrawPoints", this ); }

                this.BorderDrawPoints = drawPoints;
            },
            /*_InGame.Scripts.DrawContollers.DrawPointBase.SetBorderDrawPoints end.*/

            /*_InGame.Scripts.DrawContollers.DrawPointBase.SelectPoint start.*/
            SelectPoint: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawPointBase#SelectPoint", this ); }

                this.PointConnectionCount = (this.PointConnectionCount + 1) | 0;
            },
            /*_InGame.Scripts.DrawContollers.DrawPointBase.SelectPoint end.*/

            /*_InGame.Scripts.DrawContollers.DrawPointBase.ResetPoint start.*/
            ResetPoint: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawPointBase#ResetPoint", this ); }

                this.PointConnectionCount = 0;
            },
            /*_InGame.Scripts.DrawContollers.DrawPointBase.ResetPoint end.*/

            /*_InGame.Scripts.DrawContollers.DrawPointBase.GetClosestBorderPoint start.*/
            GetClosestBorderPoint: function (point) {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawPointBase#GetClosestBorderPoint", this ); }

                var $t;
                if (this.BorderDrawPoints == null || this.BorderDrawPoints.Count === 0) {
                    return null;
                }

                var closestPoint = null;
                var minDistance = 3.40282347E+38; // Başlangıçta maksimum mesafe

                // Tüm border noktalarını tara
                $t = Bridge.getEnumerator(this.BorderDrawPoints);
                try {
                    while ($t.moveNext()) {
                        var borderPoint = $t.Current;
                        var distance = point.$clone().sub( UnityEngine.Vector2.FromVector3(borderPoint.transform.position) ).length();
                        if (distance < minDistance) {
                            minDistance = distance;
                            closestPoint = borderPoint;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return closestPoint;
            },
            /*_InGame.Scripts.DrawContollers.DrawPointBase.GetClosestBorderPoint end.*/

            /*_InGame.Scripts.DrawContollers.DrawPointBase.CanPointSelectable start.*/
            CanPointSelectable: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawPointBase#CanPointSelectable", this ); }

                if (this.PointConnectionCount >= ((this.MaxConnectionCount - 1) | 0)) {
                    return false;
                }
                return true;
            },
            /*_InGame.Scripts.DrawContollers.DrawPointBase.CanPointSelectable end.*/

            /*_InGame.Scripts.DrawContollers.DrawPointBase.OnDrawGizmos start.*/
            OnDrawGizmos: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawPointBase#OnDrawGizmos", this ); }

                switch (this._drawPointType) {
                    case _InGame.Scripts.DrawContollers.DrawPointType.FlowPoint: 
                        pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = new pc.Color( 0, 1, 0, 1 );
                        break;
                    case _InGame.Scripts.DrawContollers.DrawPointType.JointPoint: 
                        pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = new pc.Color( 0, 0, 1, 1 );
                        break;
                }

                pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawSphere', null );
            },
            /*_InGame.Scripts.DrawContollers.DrawPointBase.OnDrawGizmos end.*/

            /*_InGame.Scripts.DrawContollers.DrawPointBase.OnDrawGizmosSelected start.*/
            OnDrawGizmosSelected: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawPointBase#OnDrawGizmosSelected", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.BorderDrawPoints);
                try {
                    while ($t.moveNext()) {
                        var border = $t.Current;
                        pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = new pc.Color( 1, 0, 0, 1 );
                        pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawSphere', null );
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*_InGame.Scripts.DrawContollers.DrawPointBase.OnDrawGizmosSelected end.*/


        }
    });
    /*_InGame.Scripts.DrawContollers.DrawPointBase end.*/

    /*_InGame.Scripts.DrawContollers.DrawPointGenerator start.*/
    Bridge.define("_InGame.Scripts.DrawContollers.DrawPointGenerator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _drawingController: null,
            _pathCreator: null,
            HowManyPoints: 0,
            GizmoPoints: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawPointGenerator#init", this ); }

                this.HowManyPoints = 10;
                this.GizmoPoints = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor();
            }
        },
        methods: {
            /*_InGame.Scripts.DrawContollers.DrawPointGenerator.OnValidate start.*/
            OnValidate: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawPointGenerator#OnValidate", this ); }

                this.UpdatePointList();
            },
            /*_InGame.Scripts.DrawContollers.DrawPointGenerator.OnValidate end.*/

            /*_InGame.Scripts.DrawContollers.DrawPointGenerator.UpdatePointList start.*/
            UpdatePointList: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawPointGenerator#UpdatePointList", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._pathCreator, null)) {
                    return;
                }

                this.GizmoPoints.clear();
                var pathLength = this._pathCreator.path.length;
                var segmentLength = pathLength / this.HowManyPoints;

                for (var i = 0; i <= this.HowManyPoints; i = (i + 1) | 0) {
                    var distance = i * segmentLength;
                    var point = this._pathCreator.path.GetPointAtDistance(distance, PathCreation.EndOfPathInstruction.Stop);
                    this.GizmoPoints.add(point.$clone());
                }
            },
            /*_InGame.Scripts.DrawContollers.DrawPointGenerator.UpdatePointList end.*/

            /*_InGame.Scripts.DrawContollers.DrawPointGenerator.GenerateDrawPoint start.*/
            GenerateDrawPoint: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawPointGenerator#GenerateDrawPoint", this ); }

                var $t;
                this.ClearDrawPoints();

                //Draw Pointleri ciz
                $t = Bridge.getEnumerator(this.GizmoPoints);
                try {
                    while ($t.moveNext()) {
                        var point = $t.Current.$clone();
                        var newPoint = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, PlayableAdsTool.SingletonBehaviour$1(_InGame.Scripts.Utilities.PrefabHolder).Instance.DrawPointPrefab, point, pc.Quat.IDENTITY.clone(), this.transform);
                        var drawPointBase = newPoint.GetComponent(_InGame.Scripts.DrawContollers.DrawPointBase);
                        this._drawingController.AllDrawPoints.add(drawPointBase);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*_InGame.Scripts.DrawContollers.DrawPointGenerator.GenerateDrawPoint end.*/

            /*_InGame.Scripts.DrawContollers.DrawPointGenerator.SetBorderDrawPoints start.*/
            SetBorderDrawPoints: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawPointGenerator#SetBorderDrawPoints", this ); }

                // Tüm DrawPoints'lerin border noktalarını ata
                for (var i = 0; i < this._drawingController.AllDrawPoints.Count; i = (i + 1) | 0) {
                    var selectedPoint = { v : this._drawingController.AllDrawPoints.getItem(i) };

                    // Diğer tüm noktalarla mesafeyi hesaplayarak en yakın 2 tanesini bul
                    var nearestPoints = System.Linq.Enumerable.from(this._drawingController.AllDrawPoints, _InGame.Scripts.DrawContollers.DrawPointBase).where((function ($me, selectedPoint) {
                            return function (p) {
                                return UnityEngine.MonoBehaviour.op_Inequality(p, selectedPoint.v);
                            };
                        })(this, selectedPoint)).orderBy((function ($me, selectedPoint) {
                        return function (p) {
                            return UnityEngine.Vector2.FromVector3(selectedPoint.v.transform.position.$clone()).sub( UnityEngine.Vector2.FromVector3(p.transform.position) ).length();
                        };
                    })(this, selectedPoint)).take(2).toList(_InGame.Scripts.DrawContollers.DrawPointBase);

                    // SetBorderDrawPoints metodunu çağır
                    selectedPoint.v.SetBorderDrawPoints(nearestPoints);
                }
            },
            /*_InGame.Scripts.DrawContollers.DrawPointGenerator.SetBorderDrawPoints end.*/

            /*_InGame.Scripts.DrawContollers.DrawPointGenerator.UpdateDrawPointList start.*/
            UpdateDrawPointList: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawPointGenerator#UpdateDrawPointList", this ); }

                var $t;
                this._drawingController.AllDrawPoints.clear();
                $t = Bridge.getEnumerator(this.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        var drawPointBase = child.GetComponent(_InGame.Scripts.DrawContollers.DrawPointBase);
                        this._drawingController.AllDrawPoints.add(drawPointBase);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*_InGame.Scripts.DrawContollers.DrawPointGenerator.UpdateDrawPointList end.*/

            /*_InGame.Scripts.DrawContollers.DrawPointGenerator.ClearDrawPoints start.*/
            ClearDrawPoints: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawPointGenerator#ClearDrawPoints", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._drawingController.AllDrawPoints);
                try {
                    while ($t.moveNext()) {
                        var point = $t.Current;
                        UnityEngine.Object.DestroyImmediate(point.gameObject);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this._drawingController.AllDrawPoints.clear();
            },
            /*_InGame.Scripts.DrawContollers.DrawPointGenerator.ClearDrawPoints end.*/

            /*_InGame.Scripts.DrawContollers.DrawPointGenerator.OnDrawGizmos start.*/
            OnDrawGizmos: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.DrawContollers.DrawPointGenerator#OnDrawGizmos", this ); }

                var $t;
                if (this._drawingController.AllDrawPoints.Count !== 0) {
                    return;
                }

                pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = new pc.Color( 1, 1, 0, 1 );
                $t = Bridge.getEnumerator(this.GizmoPoints);
                try {
                    while ($t.moveNext()) {
                        var point = $t.Current.$clone();
                        pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawSphere', null );
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*_InGame.Scripts.DrawContollers.DrawPointGenerator.OnDrawGizmos end.*/


        }
    });
    /*_InGame.Scripts.DrawContollers.DrawPointGenerator end.*/

    /*_InGame.Scripts.DrawContollers.DrawPointType start.*/
    Bridge.define("_InGame.Scripts.DrawContollers.DrawPointType", {
        $kind: 6,
        statics: {
            fields: {
                FlowPoint: 0,
                JointPoint: 1
            }
        }
    });
    /*_InGame.Scripts.DrawContollers.DrawPointType end.*/

    /*_InGame.Scripts.Managers.DrawingData start.*/
    Bridge.define("_InGame.Scripts.Managers.DrawingData", {
        fields: {
            type: 0,
            Object: null
        },
        props: {
            controller: {
                get: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.DrawingData#controller#get", this ); }

                    return UnityEngine.GameObject.op_Inequality(this.Object, null) ? this.Object.GetComponent(_InGame.Scripts.DrawContollers.DrawingController) : null;
                }
            }
        }
    });
    /*_InGame.Scripts.Managers.DrawingData end.*/

    /*PlayableAdsTool.SingletonBehaviour$1 start.*/
    Bridge.define("PlayableAdsTool.SingletonBehaviour$1", function (T) { return {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                _instance: Bridge.getDefaultValue(T)
            },
            props: {
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.SingletonBehaviour$1#Instance#get", this ); }

                        if (!Bridge.rValue(PlayableAdsTool.SingletonBehaviour$1(T)._instance)) {
                            PlayableAdsTool.SingletonBehaviour$1(T)._instance = Bridge.as(UnityEngine.Object.FindObjectOfType$1(T), T);
                            if (!Bridge.rValue(PlayableAdsTool.SingletonBehaviour$1(T)._instance)) {
                                UnityEngine.Debug.LogError$2(System.String.concat("An instance of ", Bridge.getTypeName(T)) + " is needed in the scene, but there is none.");
                            }
                        } else {
                            var instance = Bridge.as(Bridge.rValue(PlayableAdsTool.SingletonBehaviour$1(T)._instance), PlayableAdsTool.SingletonBehaviour$1(T));
                            instance.OnAwake();
                        }

                        return Bridge.rValue(PlayableAdsTool.SingletonBehaviour$1(T)._instance);
                    },
                    set: function (value) {
if ( TRACE ) { TRACE( "PlayableAdsTool.SingletonBehaviour$1#Instance#set", this ); }

                        PlayableAdsTool.SingletonBehaviour$1(T)._instance = Bridge.rValue(value);
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.SingletonBehaviour$1#init", this ); }

                    this._instance = Bridge.getDefaultValue(T);
                }
            }
        },
        methods: {
            /*PlayableAdsTool.SingletonBehaviour$1.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.SingletonBehaviour$1#Awake", this ); }

                if (Bridge.rValue(PlayableAdsTool.SingletonBehaviour$1(T).Instance) == null) {
                    PlayableAdsTool.SingletonBehaviour$1(T).Instance = Bridge.as(UnityEngine.Object.FindObjectOfType$1(T), T); // same as (T)FindObjectOfType(typeof(T));
                    if (Bridge.rValue(PlayableAdsTool.SingletonBehaviour$1(T).Instance) == null) {
                        UnityEngine.Debug.LogError$2(System.String.concat("An instance of ", Bridge.getTypeName(T)) + " is needed in the scene, but there is none.");
                    } else {
                        this.OnAwake();
                    }
                } else if (UnityEngine.MonoBehaviour.op_Inequality(Bridge.rValue(PlayableAdsTool.SingletonBehaviour$1(T).Instance), this)) {
                    // On reload, singleton already set, so destroy duplicate.
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject); // prevent duplicates
                }
            },
            /*PlayableAdsTool.SingletonBehaviour$1.Awake end.*/

            /*PlayableAdsTool.SingletonBehaviour$1.OnAwake start.*/
            OnAwake: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.SingletonBehaviour$1#OnAwake", this ); }
 },
            /*PlayableAdsTool.SingletonBehaviour$1.OnAwake end.*/


        }
    }; });
    /*PlayableAdsTool.SingletonBehaviour$1 end.*/

    /*_InGame.Scripts.Managers.DrawingType start.*/
    Bridge.define("_InGame.Scripts.Managers.DrawingType", {
        $kind: 6,
        statics: {
            fields: {
                Invalid: 0,
                PotionBottle: 1,
                TableLamp: 2,
                Ship: 3
            }
        }
    });
    /*_InGame.Scripts.Managers.DrawingType end.*/

    /*_InGame.Scripts.Managers.TutorialType start.*/
    Bridge.define("_InGame.Scripts.Managers.TutorialType", {
        $kind: 6,
        statics: {
            fields: {
                PotionBottle: 0,
                Topuklu: 1
            }
        }
    });
    /*_InGame.Scripts.Managers.TutorialType end.*/

    /*_InGame.Scripts.Managers.TutorialVariables start.*/
    Bridge.define("_InGame.Scripts.Managers.TutorialVariables", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.TutorialVariables#getDefaultValue", this ); }
 return new _InGame.Scripts.Managers.TutorialVariables(); }
            }
        },
        fields: {
            _Type: 0,
            Object: null
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.TutorialVariables#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.TutorialVariables#getHashCode", this ); }

                var h = Bridge.addHash([7158932208, this._Type, this.Object]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.TutorialVariables#equals", this ); }

                if (!Bridge.is(o, _InGame.Scripts.Managers.TutorialVariables)) {
                    return false;
                }
                return Bridge.equals(this._Type, o._Type) && Bridge.equals(this.Object, o.Object);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.TutorialVariables#$clone", this ); }

                var s = to || new _InGame.Scripts.Managers.TutorialVariables();
                s._Type = this._Type;
                s.Object = this.Object;
                return s;
            }
        }
    });
    /*_InGame.Scripts.Managers.TutorialVariables end.*/

    /*_InGame.Scripts.Others.FillSliderController start.*/
    Bridge.define("_InGame.Scripts.Others.FillSliderController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _FillImage: null,
            _BrainObject: null,
            BrainLocationMinMax: null,
            fillTween: null,
            moveTween: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Others.FillSliderController#init", this ); }

                this.BrainLocationMinMax = new UnityEngine.Vector2();
            }
        },
        methods: {
            /*_InGame.Scripts.Others.FillSliderController.CheckFillSlider start.*/
            CheckFillSlider: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Others.FillSliderController#CheckFillSlider", this ); }

                this.fillTween != null ? DG.Tweening.TweenExtensions.Kill(this.fillTween) : null;
                this.moveTween != null ? DG.Tweening.TweenExtensions.Kill(this.moveTween) : null;

                var targetFill = PlayableAdsTool.SingletonBehaviour$1(_InGame.Scripts.Managers.DrawingManager).Instance.GetDrawingCompletePercent();

                // Fill Process
                this.fillTween = DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFillAmount(this._FillImage, targetFill, 0.1), DG.Tweening.Ease.Linear);

                // Move Process
                var targetX = pc.math.lerp(this.BrainLocationMinMax.x, this.BrainLocationMinMax.y, targetFill);
                this.moveTween = DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMoveX(this._BrainObject.transform, targetX, 0.1), DG.Tweening.Ease.Linear);
            },
            /*_InGame.Scripts.Others.FillSliderController.CheckFillSlider end.*/

            /*_InGame.Scripts.Others.FillSliderController.ResetFillSlider start.*/
            ResetFillSlider: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Others.FillSliderController#ResetFillSlider", this ); }

                this.fillTween != null ? DG.Tweening.TweenExtensions.Kill(this.fillTween) : null;
                this.moveTween != null ? DG.Tweening.TweenExtensions.Kill(this.moveTween) : null;

                this._FillImage.fillAmount = 0;
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMoveX(this._BrainObject.transform, this.BrainLocationMinMax.x, 0.0), DG.Tweening.Ease.Linear);
            },
            /*_InGame.Scripts.Others.FillSliderController.ResetFillSlider end.*/

            /*_InGame.Scripts.Others.FillSliderController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Others.FillSliderController#OnEnable", this ); }

                this.ResetFillSlider();
                EventManager.OnCheckFillSlider = Bridge.fn.combine(EventManager.OnCheckFillSlider, Bridge.fn.cacheBind(this, this.OnCheckFillSlider));
            },
            /*_InGame.Scripts.Others.FillSliderController.OnEnable end.*/

            /*_InGame.Scripts.Others.FillSliderController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Others.FillSliderController#OnDisable", this ); }

                EventManager.OnCheckFillSlider = Bridge.fn.remove(EventManager.OnCheckFillSlider, Bridge.fn.cacheBind(this, this.OnCheckFillSlider));
            },
            /*_InGame.Scripts.Others.FillSliderController.OnDisable end.*/

            /*_InGame.Scripts.Others.FillSliderController.OnCheckFillSlider start.*/
            OnCheckFillSlider: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Others.FillSliderController#OnCheckFillSlider", this ); }

                this.CheckFillSlider();
            },
            /*_InGame.Scripts.Others.FillSliderController.OnCheckFillSlider end.*/


        }
    });
    /*_InGame.Scripts.Others.FillSliderController end.*/

    /*GameBaseState start.*/
    Bridge.define("GameBaseState", {
        fields: {
            _GameStateType: 0
        },
        methods: {
            /*GameBaseState.GetStateType start.*/
            GetStateType: function () {
if ( TRACE ) { TRACE( "GameBaseState#GetStateType", this ); }

                return this._GameStateType;
            },
            /*GameBaseState.GetStateType end.*/

            /*GameBaseState.EnterState start.*/
            EnterState: function (stateManager) {
if ( TRACE ) { TRACE( "GameBaseState#EnterState", this ); }
 },
            /*GameBaseState.EnterState end.*/

            /*GameBaseState.UpdateState start.*/
            UpdateState: function (stateManager) {
if ( TRACE ) { TRACE( "GameBaseState#UpdateState", this ); }
 },
            /*GameBaseState.UpdateState end.*/

            /*GameBaseState.ExitState start.*/
            ExitState: function (stateManager) {
if ( TRACE ) { TRACE( "GameBaseState#ExitState", this ); }
 },
            /*GameBaseState.ExitState end.*/


        }
    });
    /*GameBaseState end.*/

    /*AspectRatio start.*/
    Bridge.define("AspectRatio", {
        $kind: 6,
        statics: {
            fields: {
                Horizantal_20_9: 0,
                Horizantal_16_9: 1,
                Horizantal_4_3: 2,
                Vertical_9_20: 3,
                Vertical_9_16: 4,
                Vertical_3_4: 5
            }
        }
    });
    /*AspectRatio end.*/

    /*CamStates start.*/
    Bridge.define("CamStates", {
        $kind: 6,
        statics: {
            fields: {
                MainCam: 0
            }
        }
    });
    /*CamStates end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var currVal = { };
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {pc.ColorGradient}              gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {number}                             strength          The shake strength
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {UnityEngine.Vector2}                strength          The shake strength on each axis
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /** @namespace DG.Tweening */

    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*EventManager start.*/
    Bridge.define("EventManager", {
        statics: {
            fields: {
                OnGameResume: null,
                OnGameStateChange: null,
                OnCompleteDrawing: null,
                OnFailedToDraw: null,
                OnLoadDrawing: null,
                OnCheckFillSlider: null,
                OnScreenChange: null,
                OnAspectRatioChange: null,
                OnCamChange: null,
                OnEndCardOpen: null,
                OnPlaySound: null,
                OnShowTutorial: null,
                OnCloseTutorial: null
            }
        }
    });
    /*EventManager end.*/

    /*FeedbackPanelController start.*/
    Bridge.define("FeedbackPanelController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            WinAnimator: null,
            FailAnimator: null,
            Confetties: null
        },
        methods: {
            /*FeedbackPanelController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "FeedbackPanelController#OnEnable", this ); }

                EventManager.OnCompleteDrawing = Bridge.fn.combine(EventManager.OnCompleteDrawing, Bridge.fn.cacheBind(this, this.OnCompleteDrawing));
                EventManager.OnFailedToDraw = Bridge.fn.combine(EventManager.OnFailedToDraw, Bridge.fn.cacheBind(this, this.OnFailedToDraw));
            },
            /*FeedbackPanelController.OnEnable end.*/

            /*FeedbackPanelController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "FeedbackPanelController#OnDisable", this ); }

                EventManager.OnCompleteDrawing = Bridge.fn.remove(EventManager.OnCompleteDrawing, Bridge.fn.cacheBind(this, this.OnCompleteDrawing));
                EventManager.OnFailedToDraw = Bridge.fn.remove(EventManager.OnFailedToDraw, Bridge.fn.cacheBind(this, this.OnFailedToDraw));
            },
            /*FeedbackPanelController.OnDisable end.*/

            /*FeedbackPanelController.OnCompleteDrawing start.*/
            OnCompleteDrawing: function () {
if ( TRACE ) { TRACE( "FeedbackPanelController#OnCompleteDrawing", this ); }

                var $t;
                this.WinAnimator.SetTrigger$1("TriggerFeedback");
                $t = Bridge.getEnumerator(this.Confetties);
                try {
                    while ($t.moveNext()) {
                        var confetti = $t.Current;
                        confetti.Play();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*FeedbackPanelController.OnCompleteDrawing end.*/

            /*FeedbackPanelController.OnFailedToDraw start.*/
            OnFailedToDraw: function () {
if ( TRACE ) { TRACE( "FeedbackPanelController#OnFailedToDraw", this ); }

                this.FailAnimator.SetTrigger$1("TriggerFeedback");
            },
            /*FeedbackPanelController.OnFailedToDraw end.*/


        }
    });
    /*FeedbackPanelController end.*/

    /*GameStateType start.*/
    Bridge.define("GameStateType", {
        $kind: 6,
        statics: {
            fields: {
                GameInitialize: 0,
                TutorialShow: 1,
                InGame: 2,
                GameEnd: 3
            }
        }
    });
    /*GameStateType end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*PathCreation.BezierPath start.*/
    /** @namespace PathCreation */

    /**
     * @public
     * @class PathCreation.BezierPath
     */
    Bridge.define("PathCreation.BezierPath", {
        fields: {
            points: null,
            isClosed: false,
            space: 0,
            controlMode: 0,
            autoControlLength: 0,
            boundsUpToDate: false,
            bounds: null,
            perAnchorNormalsAngle: null,
            globalNormalsAngle: 0,
            flipNormals: false
        },
        events: {
            OnModified: null
        },
        props: {
            /**
             * @instance
             * @public
             * @readonly
             * @memberof PathCreation.BezierPath
             * @function NumPoints
             * @type number
             */
            NumPoints: {
                get: function () {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#NumPoints#get", this ); }

                    return this.points.Count;
                }
            },
            /**
             * @instance
             * @public
             * @readonly
             * @memberof PathCreation.BezierPath
             * @function NumAnchorPoints
             * @type number
             */
            NumAnchorPoints: {
                get: function () {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#NumAnchorPoints#get", this ); }

                    return (this.IsClosed) ? ((Bridge.Int.div(this.points.Count, 3)) | 0) : ((Bridge.Int.div((((this.points.Count + 2) | 0)), 3)) | 0);
                }
            },
            /**
             * @instance
             * @public
             * @readonly
             * @memberof PathCreation.BezierPath
             * @function NumSegments
             * @type number
             */
            NumSegments: {
                get: function () {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#NumSegments#get", this ); }

                    return ((Bridge.Int.div(this.points.Count, 3)) | 0);
                }
            },
            /**
             * @instance
             * @public
             * @memberof PathCreation.BezierPath
             * @function Space
             * @type PathCreation.PathSpace
             */
            Space: {
                get: function () {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#Space#get", this ); }

                    return this.space;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#Space#set", this ); }

                    if (value !== this.space) {
                        var previousSpace = this.space;
                        this.space = value;
                        this.UpdateToNewPathSpace(previousSpace);
                    }
                }
            },
            /**
             * @instance
             * @public
             * @memberof PathCreation.BezierPath
             * @function IsClosed
             * @type boolean
             */
            IsClosed: {
                get: function () {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#IsClosed#get", this ); }

                    return this.isClosed;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#IsClosed#set", this ); }

                    if (this.isClosed !== value) {
                        this.isClosed = value;
                        this.UpdateClosedState();
                    }
                }
            },
            /**
             * @instance
             * @public
             * @memberof PathCreation.BezierPath
             * @function ControlPointMode
             * @type number
             */
            ControlPointMode: {
                get: function () {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#ControlPointMode#get", this ); }

                    return this.controlMode;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#ControlPointMode#set", this ); }

                    if (this.controlMode !== value) {
                        this.controlMode = value;
                        if (this.controlMode === PathCreation.BezierPath.ControlMode.Automatic) {
                            this.AutoSetAllControlPoints();
                            this.NotifyPathModified();
                        }
                    }
                }
            },
            /**
             * @instance
             * @public
             * @memberof PathCreation.BezierPath
             * @function AutoControlLength
             * @type number
             */
            AutoControlLength: {
                get: function () {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#AutoControlLength#get", this ); }

                    return this.autoControlLength;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#AutoControlLength#set", this ); }

                    value = UnityEngine.Mathf.Max(value, 0.01);
                    if (this.autoControlLength !== value) {
                        this.autoControlLength = value;
                        this.AutoSetAllControlPoints();
                        this.NotifyPathModified();
                    }
                }
            },
            /**
             * @instance
             * @public
             * @memberof PathCreation.BezierPath
             * @function FlipNormals
             * @type boolean
             */
            FlipNormals: {
                get: function () {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#FlipNormals#get", this ); }

                    return this.flipNormals;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#FlipNormals#set", this ); }

                    if (this.flipNormals !== value) {
                        this.flipNormals = value;
                        this.NotifyPathModified();
                    }
                }
            },
            /**
             * @instance
             * @public
             * @memberof PathCreation.BezierPath
             * @function GlobalNormalsAngle
             * @type number
             */
            GlobalNormalsAngle: {
                get: function () {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#GlobalNormalsAngle#get", this ); }

                    return this.globalNormalsAngle;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#GlobalNormalsAngle#set", this ); }

                    if (value !== this.globalNormalsAngle) {
                        this.globalNormalsAngle = value;
                        this.NotifyPathModified();
                    }
                }
            },
            /**
             * @instance
             * @public
             * @readonly
             * @memberof PathCreation.BezierPath
             * @function PathBounds
             * @type UnityEngine.Bounds
             */
            PathBounds: {
                get: function () {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#PathBounds#get", this ); }

                    if (!this.boundsUpToDate) {
                        this.UpdateBounds();
                    }
                    return this.bounds;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#init", this ); }

                this.bounds = new UnityEngine.Bounds();
                this.autoControlLength = 0.3;
            },
            /**
             * Creates a two-anchor path centred around the given centre point
             *
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {UnityEngine.Vector3}       centre      
             * @param   {boolean}                   isClosed    Should the end point connect back to the start point?
             * @param   {PathCreation.PathSpace}    space       Determines if the path is in 3d space, or clamped to the xy/xz plane
             * @return  {void}
             */
            $ctor4: function (centre, isClosed, space) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#$ctor4", this ); }

                if (isClosed === void 0) { isClosed = false; }
                if (space === void 0) { space = 0; }

                this.$initialize();

                var dir = (space === PathCreation.PathSpace.xz) ? new pc.Vec3( 0, 0, 1 ) : pc.Vec3.UP.clone();
                var width = 2;
                var controlHeight = 0.5;
                var controlWidth = 1.0;
                this.points = function (_o1) {
                        _o1.add(centre.$clone().add( pc.Vec3.LEFT.clone().clone().scale( width ) ));
                        _o1.add(centre.$clone().add( pc.Vec3.LEFT.clone().clone().scale( controlWidth ) ).add( dir.$clone().clone().scale( controlHeight ) ));
                        _o1.add(centre.$clone().add( pc.Vec3.RIGHT.clone().clone().scale( controlWidth ) ).sub( dir.$clone().clone().scale( controlHeight ) ));
                        _o1.add(centre.$clone().add( pc.Vec3.RIGHT.clone().clone().scale( width ) ));
                        return _o1;
                    }(new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor());

                this.perAnchorNormalsAngle = function (_o2) {
                        _o2.add(0);
                        _o2.add(0);
                        return _o2;
                    }(new (System.Collections.Generic.List$1(System.Single)).ctor());

                this.Space = space;
                this.IsClosed = isClosed;
            },
            /**
             * Creates a path from the supplied 3D points
             *
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {System.Collections.Generic.IEnumerable$1}    points      List or array of points to create the path from.
             * @param   {boolean}                                     isClosed    Should the end point connect back to the start point?
             * @param   {PathCreation.PathSpace}                      space       Determines if the path is in 3d space, or clamped to the xy/xz plane
             * @return  {void}
             */
            $ctor3: function (points, isClosed, space) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#$ctor3", this ); }

                if (isClosed === void 0) { isClosed = false; }
                if (space === void 0) { space = 0; }
                var $t;

                this.$initialize();
                var pointsArray = ($t = UnityEngine.Vector3, System.Linq.Enumerable.from(points, $t).ToArray($t));

                if (pointsArray.length < 2) {
                    UnityEngine.Debug.LogError$2("Path requires at least 2 anchor points.");
                } else {
                    this.controlMode = PathCreation.BezierPath.ControlMode.Automatic;
                    this.points = function (_o3) {
                            _o3.add(pointsArray[0].$clone());
                            _o3.add(pc.Vec3.ZERO.clone());
                            _o3.add(pc.Vec3.ZERO.clone());
                            _o3.add(pointsArray[1].$clone());
                            return _o3;
                        }(new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor());
                    this.perAnchorNormalsAngle = new (System.Collections.Generic.List$1(System.Single)).$ctor1(System.Array.init([0, 0], System.Single));

                    for (var i = 2; i < pointsArray.length; i = (i + 1) | 0) {
                        this.AddSegmentToEnd(pointsArray[i]);
                        this.perAnchorNormalsAngle.add(0);
                    }
                }

                this.Space = space;
                this.IsClosed = isClosed;
            },
            /**
             * Creates a path from the positions of the supplied 2D points
             *
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {System.Collections.Generic.IEnumerable$1}    transforms    List or array of transforms to create the path from.
             * @param   {boolean}                                     isClosed      Should the end point connect back to the start point?
             * @param   {PathCreation.PathSpace}                      space         Determines if the path is in 3d space, or clamped to the xy/xz plane
             * @return  {void}
             */
            $ctor2: function (transforms, isClosed, space) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#$ctor2", this ); }

                if (isClosed === void 0) { isClosed = false; }
                if (space === void 0) { space = 1; }

                PathCreation.BezierPath.$ctor3.call(this, System.Linq.Enumerable.from(transforms, UnityEngine.Vector2).select(function (p) {
                        return new pc.Vec3( p.x, p.y, 0 );
                    }), isClosed, space);
            },
            /**
             * Creates a path from the positions of the supplied transforms
             *
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {System.Collections.Generic.IEnumerable$1}    transforms    List or array of transforms to create the path from.
             * @param   {boolean}                                     isClosed      Should the end point connect back to the start point?
             * @param   {PathCreation.PathSpace}                      space         Determines if the path is in 3d space, or clamped to the xy/xz plane
             * @return  {void}
             */
            ctor: function (transforms, isClosed, space) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#ctor", this ); }

                if (isClosed === void 0) { isClosed = false; }
                if (space === void 0) { space = 1; }

                PathCreation.BezierPath.$ctor3.call(this, System.Linq.Enumerable.from(transforms, UnityEngine.Transform).select(function (t) {
                        return t.position;
                    }), isClosed, space);
            },
            /**
             * Creates a path from the supplied 2D points
             *
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {System.Collections.Generic.IEnumerable$1}    points      List or array of 2d points to create the path from.
             * @param   {PathCreation.PathSpace}                      space       
             * @param   {boolean}                                     isClosed    Should the end point connect back to the start point?
             * @return  {void}
             */
            $ctor1: function (points, space, isClosed) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#$ctor1", this ); }

                if (space === void 0) { space = 0; }
                if (isClosed === void 0) { isClosed = false; }

                PathCreation.BezierPath.$ctor3.call(this, System.Linq.Enumerable.from(points, UnityEngine.Vector2).select(function (p) {
                        return new pc.Vec3( p.x, p.y, 0 );
                    }), isClosed, space);
            }
        },
        methods: {
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}                 i
             * @return  {UnityEngine.Vector3}
             */
            getItem: function (i) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#getItem", this ); }

                return this.GetPoint(i);
            },
            /*PathCreation.BezierPath.GetPoint start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}                 i
             * @return  {UnityEngine.Vector3}
             */
            GetPoint: function (i) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#GetPoint", this ); }

                return this.points.getItem(i).$clone();
            },
            /*PathCreation.BezierPath.GetPoint end.*/

            /*PathCreation.BezierPath.SetPoint start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}                 i                            
             * @param   {UnityEngine.Vector3}    localPosition                
             * @param   {boolean}                suppressPathModifiedEvent
             * @return  {void}
             */
            SetPoint: function (i, localPosition, suppressPathModifiedEvent) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#SetPoint", this ); }

                if (suppressPathModifiedEvent === void 0) { suppressPathModifiedEvent = false; }
                this.points.setItem(i, localPosition.$clone());
                if (!suppressPathModifiedEvent) {
                    this.NotifyPathModified();
                }
            },
            /*PathCreation.BezierPath.SetPoint end.*/

            /*PathCreation.BezierPath.AddSegmentToEnd start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {UnityEngine.Vector3}    anchorPos
             * @return  {void}
             */
            AddSegmentToEnd: function (anchorPos) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#AddSegmentToEnd", this ); }

                if (this.isClosed) {
                    return;
                }

                var lastAnchorIndex = (this.points.Count - 1) | 0;
                // Set position for new control to be mirror of its counterpart
                var secondControlForOldLastAnchorOffset = (this.points.getItem(lastAnchorIndex).$clone().sub( this.points.getItem(((lastAnchorIndex - 1) | 0)) ));
                if (this.controlMode !== PathCreation.BezierPath.ControlMode.Mirrored && this.controlMode !== PathCreation.BezierPath.ControlMode.Automatic) {
                    // Set position for new control to be aligned with its counterpart, but with a length of half the distance from prev to new anchor
                    var dstPrevToNewAnchor = (this.points.getItem(lastAnchorIndex).$clone().sub( anchorPos )).length();
                    secondControlForOldLastAnchorOffset = (this.points.getItem(lastAnchorIndex).$clone().sub( this.points.getItem(((lastAnchorIndex - 1) | 0)) )).clone().normalize().$clone().clone().scale( dstPrevToNewAnchor ).clone().scale( 0.5 );
                }
                var secondControlForOldLastAnchor = this.points.getItem(lastAnchorIndex).$clone().add( secondControlForOldLastAnchorOffset );
                var controlForNewAnchor = (anchorPos.$clone().add( secondControlForOldLastAnchor )).clone().scale( 0.5 );

                this.points.add(secondControlForOldLastAnchor.$clone());
                this.points.add(controlForNewAnchor.$clone());
                this.points.add(anchorPos.$clone());
                this.perAnchorNormalsAngle.add(this.perAnchorNormalsAngle.getItem(((this.perAnchorNormalsAngle.Count - 1) | 0)));

                if (this.controlMode === PathCreation.BezierPath.ControlMode.Automatic) {
                    this.AutoSetAllAffectedControlPoints(((this.points.Count - 1) | 0));
                }

                this.NotifyPathModified();
            },
            /*PathCreation.BezierPath.AddSegmentToEnd end.*/

            /*PathCreation.BezierPath.AddSegmentToStart start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {UnityEngine.Vector3}    anchorPos
             * @return  {void}
             */
            AddSegmentToStart: function (anchorPos) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#AddSegmentToStart", this ); }

                if (this.isClosed) {
                    return;
                }

                // Set position for new control to be mirror of its counterpart
                var secondControlForOldFirstAnchorOffset = (this.points.getItem(0).$clone().sub( this.points.getItem(1) ));
                if (this.controlMode !== PathCreation.BezierPath.ControlMode.Mirrored && this.controlMode !== PathCreation.BezierPath.ControlMode.Automatic) {
                    // Set position for new control to be aligned with its counterpart, but with a length of half the distance from prev to new anchor
                    var dstPrevToNewAnchor = (this.points.getItem(0).$clone().sub( anchorPos )).length();
                    secondControlForOldFirstAnchorOffset = secondControlForOldFirstAnchorOffset.clone().normalize().$clone().clone().scale( dstPrevToNewAnchor ).clone().scale( 0.5 );
                }

                var secondControlForOldFirstAnchor = this.points.getItem(0).$clone().add( secondControlForOldFirstAnchorOffset );
                var controlForNewAnchor = (anchorPos.$clone().add( secondControlForOldFirstAnchor )).clone().scale( 0.5 );
                this.points.insert(0, anchorPos.$clone());
                this.points.insert(1, controlForNewAnchor.$clone());
                this.points.insert(2, secondControlForOldFirstAnchor.$clone());
                this.perAnchorNormalsAngle.insert(0, this.perAnchorNormalsAngle.getItem(0));

                if (this.controlMode === PathCreation.BezierPath.ControlMode.Automatic) {
                    this.AutoSetAllAffectedControlPoints(0);
                }
                this.NotifyPathModified();
            },
            /*PathCreation.BezierPath.AddSegmentToStart end.*/

            /*PathCreation.BezierPath.SplitSegment start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {UnityEngine.Vector3}    anchorPos       
             * @param   {number}                 segmentIndex    
             * @param   {number}                 splitTime
             * @return  {void}
             */
            SplitSegment: function (anchorPos, segmentIndex, splitTime) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#SplitSegment", this ); }

                var $t, $t1, $t2, $t3, $t4, $t5, $t6, $t7;
                splitTime = Math.max(0, Math.min(1, splitTime));

                if (this.controlMode === PathCreation.BezierPath.ControlMode.Automatic) {
                    this.points.InsertRange(((Bridge.Int.mul(segmentIndex, 3) + 2) | 0), System.Array.init([pc.Vec3.ZERO.clone(), anchorPos.$clone(), pc.Vec3.ZERO.clone()], UnityEngine.Vector3));
                    this.AutoSetAllAffectedControlPoints(((Bridge.Int.mul(segmentIndex, 3) + 3) | 0));
                } else {
                    // Split the curve to find where control points can be inserted to least affect shape of curve
                    // Curve will probably be deformed slightly since splitTime is only an estimate (for performance reasons, and so doesn't correspond exactly with anchorPos)
                    var splitSegment = PathCreation.Utility.CubicBezierUtility.SplitCurve(this.GetPointsInSegment(segmentIndex), splitTime);
                    this.points.InsertRange(((Bridge.Int.mul(segmentIndex, 3) + 2) | 0), System.Array.init([($t = splitSegment[0])[2].$clone(), ($t1 = splitSegment[1])[0].$clone(), ($t2 = splitSegment[1])[1].$clone()], UnityEngine.Vector3));
                    var newAnchorIndex = (Bridge.Int.mul(segmentIndex, 3) + 3) | 0;
                    this.MovePoint(((newAnchorIndex - 2) | 0), ($t3 = splitSegment[0])[1].$clone(), true);
                    this.MovePoint(((newAnchorIndex + 2) | 0), ($t4 = splitSegment[1])[2].$clone(), true);
                    this.MovePoint(newAnchorIndex, anchorPos.$clone(), true);

                    if (this.controlMode === PathCreation.BezierPath.ControlMode.Mirrored) {
                        var avgDst = ((($t5 = splitSegment[0])[2].$clone().sub( anchorPos )).length() + (($t6 = splitSegment[1])[1].$clone().sub( anchorPos )).length()) / 2;
                        this.MovePoint(((newAnchorIndex + 1) | 0), anchorPos.$clone().add( (($t7 = splitSegment[1])[1].$clone().sub( anchorPos )).clone().normalize().$clone().clone().scale( avgDst ) ), true);
                    }
                }

                // Insert angle for new anchor (value should be set inbetween neighbour anchor angles)
                var newAnchorAngleIndex = (((segmentIndex + 1) | 0)) % this.perAnchorNormalsAngle.Count;
                var numAngles = this.perAnchorNormalsAngle.Count;
                var anglePrev = this.perAnchorNormalsAngle.getItem(segmentIndex);
                var angleNext = this.perAnchorNormalsAngle.getItem(newAnchorAngleIndex);
                var splitAngle = UnityEngine.Mathf.LerpAngle(anglePrev, angleNext, splitTime);
                this.perAnchorNormalsAngle.insert(newAnchorAngleIndex, splitAngle);

                this.NotifyPathModified();
            },
            /*PathCreation.BezierPath.SplitSegment end.*/

            /*PathCreation.BezierPath.DeleteSegment start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}    anchorIndex
             * @return  {void}
             */
            DeleteSegment: function (anchorIndex) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#DeleteSegment", this ); }

                // Don't delete segment if its the last one remaining (or if only two segments in a closed path)
                if (this.NumSegments > 2 || !this.isClosed && this.NumSegments > 1) {
                    if (anchorIndex === 0) {
                        if (this.isClosed) {
                            this.points.setItem(((this.points.Count - 1) | 0), this.points.getItem(2).$clone());
                        }
                        this.points.RemoveRange(0, 3);
                    } else if (anchorIndex === ((this.points.Count - 1) | 0) && !this.isClosed) {
                        this.points.RemoveRange(((anchorIndex - 2) | 0), 3);
                    } else {
                        this.points.RemoveRange(((anchorIndex - 1) | 0), 3);
                    }

                    this.perAnchorNormalsAngle.removeAt(((Bridge.Int.div(anchorIndex, 3)) | 0));

                    if (this.controlMode === PathCreation.BezierPath.ControlMode.Automatic) {
                        this.AutoSetAllControlPoints();
                    }

                    this.NotifyPathModified();
                }
            },
            /*PathCreation.BezierPath.DeleteSegment end.*/

            /*PathCreation.BezierPath.GetPointsInSegment start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}                         segmentIndex
             * @return  {Array.<UnityEngine.Vector3>}
             */
            GetPointsInSegment: function (segmentIndex) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#GetPointsInSegment", this ); }

                segmentIndex = Math.max(0, Math.min(segmentIndex, ((this.NumSegments - 1) | 0)));
                return System.Array.init([this.getItem(Bridge.Int.mul(segmentIndex, 3)).$clone(), this.getItem(((Bridge.Int.mul(segmentIndex, 3) + 1) | 0)).$clone(), this.getItem(((Bridge.Int.mul(segmentIndex, 3) + 2) | 0)).$clone(), this.getItem(this.LoopIndex(((Bridge.Int.mul(segmentIndex, 3) + 3) | 0))).$clone()], UnityEngine.Vector3);
            },
            /*PathCreation.BezierPath.GetPointsInSegment end.*/

            /*PathCreation.BezierPath.MovePoint start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}                 i                            
             * @param   {UnityEngine.Vector3}    pointPos                     
             * @param   {boolean}                suppressPathModifiedEvent
             * @return  {void}
             */
            MovePoint: function (i, pointPos, suppressPathModifiedEvent) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#MovePoint", this ); }

                if (suppressPathModifiedEvent === void 0) { suppressPathModifiedEvent = false; }

                if (this.space === PathCreation.PathSpace.xy) {
                    pointPos.z = 0;
                } else if (this.space === PathCreation.PathSpace.xz) {
                    pointPos.y = 0;
                }
                var deltaMove = pointPos.$clone().sub( this.points.getItem(i) );
                var isAnchorPoint = i % 3 === 0;

                // Don't process control point if control mode is set to automatic
                if (isAnchorPoint || this.controlMode !== PathCreation.BezierPath.ControlMode.Automatic) {
                    this.points.setItem(i, pointPos.$clone());

                    if (this.controlMode === PathCreation.BezierPath.ControlMode.Automatic) {
                        this.AutoSetAllAffectedControlPoints(i);
                    } else {
                        // Move control points with anchor point
                        if (isAnchorPoint) {
                            if (((i + 1) | 0) < this.points.Count || this.isClosed) {
                                this.points.setItem(this.LoopIndex(((i + 1) | 0)), this.points.getItem(this.LoopIndex(((i + 1) | 0))).$clone().add( deltaMove.$clone() ));
                            }
                            if (((i - 1) | 0) >= 0 || this.isClosed) {
                                this.points.setItem(this.LoopIndex(((i - 1) | 0)), this.points.getItem(this.LoopIndex(((i - 1) | 0))).$clone().add( deltaMove.$clone() ));
                            }
                        } else if (this.controlMode !== PathCreation.BezierPath.ControlMode.Free) {
                            var nextPointIsAnchor = (((i + 1) | 0)) % 3 === 0;
                            var attachedControlIndex = (nextPointIsAnchor) ? ((i + 2) | 0) : ((i - 2) | 0);
                            var anchorIndex = (nextPointIsAnchor) ? ((i + 1) | 0) : ((i - 1) | 0);

                            if (attachedControlIndex >= 0 && attachedControlIndex < this.points.Count || this.isClosed) {
                                var distanceFromAnchor = 0;
                                // If in aligned mode, then attached control's current distance from anchor point should be maintained
                                if (this.controlMode === PathCreation.BezierPath.ControlMode.Aligned) {
                                    distanceFromAnchor = (this.points.getItem(this.LoopIndex(anchorIndex)).$clone().sub( this.points.getItem(this.LoopIndex(attachedControlIndex)) )).length();
                                } else if (this.controlMode === PathCreation.BezierPath.ControlMode.Mirrored) {
                                    distanceFromAnchor = (this.points.getItem(this.LoopIndex(anchorIndex)).$clone().sub( this.points.getItem(i) )).length();

                                }
                                var dir = (this.points.getItem(this.LoopIndex(anchorIndex)).$clone().sub( pointPos )).clone().normalize().$clone();
                                this.points.setItem(this.LoopIndex(attachedControlIndex), this.points.getItem(this.LoopIndex(anchorIndex)).$clone().add( dir.$clone().clone().scale( distanceFromAnchor ) ));
                            }
                        }
                    }

                    if (!suppressPathModifiedEvent) {
                        this.NotifyPathModified();
                    }
                }
            },
            /*PathCreation.BezierPath.MovePoint end.*/

            /*PathCreation.BezierPath.CalculateBoundsWithTransform start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {UnityEngine.Transform}    transform
             * @return  {UnityEngine.Bounds}
             */
            CalculateBoundsWithTransform: function (transform) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#CalculateBoundsWithTransform", this ); }

                var $t;
                // Loop through all segments and keep track of the minmax points of all their bounding boxes
                var minMax = new PathCreation.MinMax3D();

                for (var i = 0; i < this.NumSegments; i = (i + 1) | 0) {
                    var p = this.GetPointsInSegment(i);
                    for (var j = 0; j < p.length; j = (j + 1) | 0) {
                        p[j] = PathCreation.Utility.MathUtility.TransformPoint(p[j], transform, this.space);
                    }

                    minMax.AddValue(p[0]);
                    minMax.AddValue(p[3]);

                    var extremePointTimes = PathCreation.Utility.CubicBezierUtility.ExtremePointTimes(p[0], p[1], p[2], p[3]);
                    $t = Bridge.getEnumerator(extremePointTimes);
                    try {
                        while ($t.moveNext()) {
                            var t = $t.Current;
                            minMax.AddValue(PathCreation.Utility.CubicBezierUtility.EvaluateCurve$1(p, t));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }

                return new pc.BoundingBox( (minMax.Min.$clone().add( minMax.Max )).scale( 1.0 / ( 2 ) ), minMax.Max.$clone().sub( minMax.Min ).scale( 0.5 ) );
            },
            /*PathCreation.BezierPath.CalculateBoundsWithTransform end.*/

            /*PathCreation.BezierPath.GetAnchorNormalAngle start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}    anchorIndex
             * @return  {number}
             */
            GetAnchorNormalAngle: function (anchorIndex) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#GetAnchorNormalAngle", this ); }

                return this.perAnchorNormalsAngle.getItem(anchorIndex) % 360;
            },
            /*PathCreation.BezierPath.GetAnchorNormalAngle end.*/

            /*PathCreation.BezierPath.SetAnchorNormalAngle start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}    anchorIndex    
             * @param   {number}    angle
             * @return  {void}
             */
            SetAnchorNormalAngle: function (anchorIndex, angle) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#SetAnchorNormalAngle", this ); }

                angle = (angle + 360) % 360;
                if (this.perAnchorNormalsAngle.getItem(anchorIndex) !== angle) {
                    this.perAnchorNormalsAngle.setItem(anchorIndex, angle);
                    this.NotifyPathModified();
                }
            },
            /*PathCreation.BezierPath.SetAnchorNormalAngle end.*/

            /*PathCreation.BezierPath.ResetNormalAngles start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @return  {void}
             */
            ResetNormalAngles: function () {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#ResetNormalAngles", this ); }

                for (var i = 0; i < this.perAnchorNormalsAngle.Count; i = (i + 1) | 0) {
                    this.perAnchorNormalsAngle.setItem(i, 0);
                }
                this.globalNormalsAngle = 0;
                this.NotifyPathModified();
            },
            /*PathCreation.BezierPath.ResetNormalAngles end.*/

            /*PathCreation.BezierPath.UpdateBounds start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @return  {void}
             */
            UpdateBounds: function () {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#UpdateBounds", this ); }

                var $t;
                if (this.boundsUpToDate) {
                    return;
                }

                // Loop through all segments and keep track of the minmax points of all their bounding boxes
                var minMax = new PathCreation.MinMax3D();

                for (var i = 0; i < this.NumSegments; i = (i + 1) | 0) {
                    var p = this.GetPointsInSegment(i);
                    minMax.AddValue(p[0]);
                    minMax.AddValue(p[3]);

                    var extremePointTimes = PathCreation.Utility.CubicBezierUtility.ExtremePointTimes(p[0], p[1], p[2], p[3]);
                    $t = Bridge.getEnumerator(extremePointTimes);
                    try {
                        while ($t.moveNext()) {
                            var t = $t.Current;
                            minMax.AddValue(PathCreation.Utility.CubicBezierUtility.EvaluateCurve$1(p, t));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }

                this.boundsUpToDate = true;
                this.bounds = new pc.BoundingBox( (minMax.Min.$clone().add( minMax.Max )).scale( 1.0 / ( 2 ) ), minMax.Max.$clone().sub( minMax.Min ).scale( 0.5 ) );
            },
            /*PathCreation.BezierPath.UpdateBounds end.*/

            /*PathCreation.BezierPath.AutoSetAllAffectedControlPoints start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}    updatedAnchorIndex
             * @return  {void}
             */
            AutoSetAllAffectedControlPoints: function (updatedAnchorIndex) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#AutoSetAllAffectedControlPoints", this ); }

                for (var i = (updatedAnchorIndex - 3) | 0; i <= ((updatedAnchorIndex + 3) | 0); i = (i + 3) | 0) {
                    if (i >= 0 && i < this.points.Count || this.isClosed) {
                        this.AutoSetAnchorControlPoints(this.LoopIndex(i));
                    }
                }

                this.AutoSetStartAndEndControls();
            },
            /*PathCreation.BezierPath.AutoSetAllAffectedControlPoints end.*/

            /*PathCreation.BezierPath.AutoSetAllControlPoints start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @return  {void}
             */
            AutoSetAllControlPoints: function () {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#AutoSetAllControlPoints", this ); }

                if (this.NumAnchorPoints > 2) {
                    for (var i = 0; i < this.points.Count; i = (i + 3) | 0) {
                        this.AutoSetAnchorControlPoints(i);
                    }
                }

                this.AutoSetStartAndEndControls();
            },
            /*PathCreation.BezierPath.AutoSetAllControlPoints end.*/

            /*PathCreation.BezierPath.AutoSetAnchorControlPoints start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}    anchorIndex
             * @return  {void}
             */
            AutoSetAnchorControlPoints: function (anchorIndex) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#AutoSetAnchorControlPoints", this ); }

                // Calculate a vector that is perpendicular to the vector bisecting the angle between this anchor and its two immediate neighbours
                // The control points will be placed along that vector
                var anchorPos = this.points.getItem(anchorIndex).$clone();
                var dir = pc.Vec3.ZERO.clone();
                var neighbourDistances = System.Array.init(2, 0, System.Single);

                if (((anchorIndex - 3) | 0) >= 0 || this.isClosed) {
                    var offset = this.points.getItem(this.LoopIndex(((anchorIndex - 3) | 0))).$clone().sub( anchorPos );
                    dir = dir.$clone().add( offset.clone().normalize().$clone() );
                    neighbourDistances[0] = offset.length();
                }
                if (((anchorIndex + 3) | 0) >= 0 || this.isClosed) {
                    var offset1 = this.points.getItem(this.LoopIndex(((anchorIndex + 3) | 0))).$clone().sub( anchorPos );
                    dir = dir.$clone().sub( offset1.clone().normalize().$clone() );
                    neighbourDistances[1] = -offset1.length();
                }

                dir.normalize();

                // Set the control points along the calculated direction, with a distance proportional to the distance to the neighbouring control point
                for (var i = 0; i < 2; i = (i + 1) | 0) {
                    var controlIndex = (((anchorIndex + Bridge.Int.mul(i, 2)) | 0) - 1) | 0;
                    if (controlIndex >= 0 && controlIndex < this.points.Count || this.isClosed) {
                        this.points.setItem(this.LoopIndex(controlIndex), anchorPos.$clone().add( dir.$clone().clone().scale( neighbourDistances[i] ).clone().scale( this.autoControlLength ) ));
                    }
                }
            },
            /*PathCreation.BezierPath.AutoSetAnchorControlPoints end.*/

            /*PathCreation.BezierPath.AutoSetStartAndEndControls start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @return  {void}
             */
            AutoSetStartAndEndControls: function () {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#AutoSetStartAndEndControls", this ); }

                if (this.isClosed) {
                    // Handle case with only 2 anchor points separately, as will otherwise result in straight line ()
                    if (this.NumAnchorPoints === 2) {
                        var dirAnchorAToB = (this.points.getItem(3).$clone().sub( this.points.getItem(0) )).clone().normalize().$clone();
                        var dstBetweenAnchors = (this.points.getItem(0).$clone().sub( this.points.getItem(3) )).length();
                        var perp = new pc.Vec3().cross( dirAnchorAToB, (this.space === PathCreation.PathSpace.xy) ? new pc.Vec3( 0, 0, 1 ) : pc.Vec3.UP.clone() );
                        this.points.setItem(1, this.points.getItem(0).$clone().add( perp.$clone().clone().scale( dstBetweenAnchors ).scale( 1.0 / ( 2.0 ) ) ));
                        this.points.setItem(5, this.points.getItem(0).$clone().sub( perp.$clone().clone().scale( dstBetweenAnchors ).scale( 1.0 / ( 2.0 ) ) ));
                        this.points.setItem(2, this.points.getItem(3).$clone().add( perp.$clone().clone().scale( dstBetweenAnchors ).scale( 1.0 / ( 2.0 ) ) ));
                        this.points.setItem(4, this.points.getItem(3).$clone().sub( perp.$clone().clone().scale( dstBetweenAnchors ).scale( 1.0 / ( 2.0 ) ) ));

                    } else {
                        this.AutoSetAnchorControlPoints(0);
                        this.AutoSetAnchorControlPoints(((this.points.Count - 3) | 0));
                    }
                } else {
                    // Handle case with 2 anchor points separately, as otherwise minor adjustments cause path to constantly flip
                    if (this.NumAnchorPoints === 2) {
                        this.points.setItem(1, this.points.getItem(0).$clone().add( (this.points.getItem(3).$clone().sub( this.points.getItem(0) )).clone().scale( 0.25 ) ));
                        this.points.setItem(2, this.points.getItem(3).$clone().add( (this.points.getItem(0).$clone().sub( this.points.getItem(3) )).clone().scale( 0.25 ) ));
                    } else {
                        this.points.setItem(1, (this.points.getItem(0).$clone().add( this.points.getItem(2) )).clone().scale( 0.5 ));
                        this.points.setItem(((this.points.Count - 2) | 0), (this.points.getItem(((this.points.Count - 1) | 0)).$clone().add( this.points.getItem(((this.points.Count - 3) | 0)) )).clone().scale( 0.5 ));
                    }
                }
            },
            /*PathCreation.BezierPath.AutoSetStartAndEndControls end.*/

            /*PathCreation.BezierPath.UpdateToNewPathSpace start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {PathCreation.PathSpace}    previousSpace
             * @return  {void}
             */
            UpdateToNewPathSpace: function (previousSpace) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#UpdateToNewPathSpace", this ); }

                // If changing from 3d to 2d space, first find the bounds of the 3d path.
                // The axis with the smallest bounds will be discarded.
                if (previousSpace === PathCreation.PathSpace.xyz) {
                    var boundsSize = this.PathBounds.halfExtents.$clone().scale( 2 ).$clone();
                    var minBoundsSize = UnityEngine.Mathf.Min(boundsSize.x, boundsSize.y, boundsSize.z);

                    for (var i = 0; i < this.NumPoints; i = (i + 1) | 0) {
                        if (this.space === PathCreation.PathSpace.xy) {
                            var x = (minBoundsSize === boundsSize.x) ? this.points.getItem(i).$clone().z : this.points.getItem(i).$clone().x;
                            var y = (minBoundsSize === boundsSize.y) ? this.points.getItem(i).$clone().z : this.points.getItem(i).$clone().y;
                            this.points.setItem(i, new pc.Vec3( x, y, 0 ));
                        } else if (this.space === PathCreation.PathSpace.xz) {
                            var x1 = (minBoundsSize === boundsSize.x) ? this.points.getItem(i).$clone().y : this.points.getItem(i).$clone().x;
                            var z = (minBoundsSize === boundsSize.z) ? this.points.getItem(i).$clone().y : this.points.getItem(i).$clone().z;
                            this.points.setItem(i, new pc.Vec3( x1, 0, z ));
                        }
                    }
                } else {
                    // Nothing needs to change when going to 3d space
                    if (this.space !== PathCreation.PathSpace.xyz) {
                        for (var i1 = 0; i1 < this.NumPoints; i1 = (i1 + 1) | 0) {
                            // from xz to xy
                            if (this.space === PathCreation.PathSpace.xy) {
                                this.points.setItem(i1, new pc.Vec3( this.points.getItem(i1).$clone().x, this.points.getItem(i1).$clone().z, 0 ));
                            } else if (this.space === PathCreation.PathSpace.xz) {
                                this.points.setItem(i1, new pc.Vec3( this.points.getItem(i1).$clone().x, 0, this.points.getItem(i1).$clone().y ));
                            }
                        }
                    }
                }

                this.NotifyPathModified();
            },
            /*PathCreation.BezierPath.UpdateToNewPathSpace end.*/

            /*PathCreation.BezierPath.UpdateClosedState start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @return  {void}
             */
            UpdateClosedState: function () {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#UpdateClosedState", this ); }

                if (this.isClosed) {
                    // Set positions for new controls to mirror their counterparts
                    var lastAnchorSecondControl = this.points.getItem(((this.points.Count - 1) | 0)).$clone().clone().scale( 2 ).sub( this.points.getItem(((this.points.Count - 2) | 0)) );
                    var firstAnchorSecondControl = this.points.getItem(0).$clone().clone().scale( 2 ).sub( this.points.getItem(1) );
                    if (this.controlMode !== PathCreation.BezierPath.ControlMode.Mirrored && this.controlMode !== PathCreation.BezierPath.ControlMode.Automatic) {
                        // Set positions for new controls to be aligned with their counterparts, but with a length of half the distance between start/end anchor
                        var dstBetweenStartAndEndAnchors = (this.points.getItem(((this.points.Count - 1) | 0)).$clone().sub( this.points.getItem(0) )).length();
                        lastAnchorSecondControl = this.points.getItem(((this.points.Count - 1) | 0)).$clone().add( (this.points.getItem(((this.points.Count - 1) | 0)).$clone().sub( this.points.getItem(((this.points.Count - 2) | 0)) )).clone().normalize().$clone().clone().scale( dstBetweenStartAndEndAnchors ).clone().scale( 0.5 ) );
                        firstAnchorSecondControl = this.points.getItem(0).$clone().add( (this.points.getItem(0).$clone().sub( this.points.getItem(1) )).clone().normalize().$clone().clone().scale( dstBetweenStartAndEndAnchors ).clone().scale( 0.5 ) );
                    }
                    this.points.add(lastAnchorSecondControl.$clone());
                    this.points.add(firstAnchorSecondControl.$clone());
                } else {
                    this.points.RemoveRange(((this.points.Count - 2) | 0), 2);

                }

                if (this.controlMode === PathCreation.BezierPath.ControlMode.Automatic) {
                    this.AutoSetStartAndEndControls();
                }

                if (!Bridge.staticEquals(this.OnModified, null)) {
                    this.OnModified();
                }
            },
            /*PathCreation.BezierPath.UpdateClosedState end.*/

            /*PathCreation.BezierPath.LoopIndex start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}    i
             * @return  {number}
             */
            LoopIndex: function (i) {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#LoopIndex", this ); }

                return (((i + this.points.Count) | 0)) % this.points.Count;
            },
            /*PathCreation.BezierPath.LoopIndex end.*/

            /*PathCreation.BezierPath.NotifyPathModified start.*/
            NotifyPathModified: function () {
if ( TRACE ) { TRACE( "PathCreation.BezierPath#NotifyPathModified", this ); }

                this.boundsUpToDate = false;
                if (!Bridge.staticEquals(this.OnModified, null)) {
                    this.OnModified();
                }
            },
            /*PathCreation.BezierPath.NotifyPathModified end.*/


        }
    });
    /*PathCreation.BezierPath end.*/

    /*PathCreation.BezierPath+ControlMode start.*/
    Bridge.define("PathCreation.BezierPath.ControlMode", {
        $kind: 1006,
        statics: {
            fields: {
                Aligned: 0,
                Mirrored: 1,
                Free: 2,
                Automatic: 3
            }
        }
    });
    /*PathCreation.BezierPath+ControlMode end.*/

    /*PathCreation.EndOfPathInstruction start.*/
    Bridge.define("PathCreation.EndOfPathInstruction", {
        $kind: 6,
        statics: {
            fields: {
                Loop: 0,
                Reverse: 1,
                Stop: 2
            }
        }
    });
    /*PathCreation.EndOfPathInstruction end.*/

    /*PathCreation.Examples.GeneratePathExample start.*/
    Bridge.define("PathCreation.Examples.GeneratePathExample", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            closedLoop: false,
            waypoints: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.GeneratePathExample#init", this ); }

                this.closedLoop = true;
            }
        },
        methods: {
            /*PathCreation.Examples.GeneratePathExample.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.GeneratePathExample#Start", this ); }

                if (this.waypoints.length > 0) {
                    // Create a new bezier path from the waypoints.
                    var bezierPath = new PathCreation.BezierPath.ctor(this.waypoints, this.closedLoop, PathCreation.PathSpace.xyz);
                    this.GetComponent(PathCreation.PathCreator).bezierPath = bezierPath;
                }
            },
            /*PathCreation.Examples.GeneratePathExample.Start end.*/


        }
    });
    /*PathCreation.Examples.GeneratePathExample end.*/

    /*PathCreation.Examples.PathFollower start.*/
    Bridge.define("PathCreation.Examples.PathFollower", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            pathCreator: null,
            endOfPathInstruction: 0,
            speed: 0,
            distanceTravelled: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.PathFollower#init", this ); }

                this.speed = 5;
            }
        },
        methods: {
            /*PathCreation.Examples.PathFollower.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.PathFollower#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.pathCreator, null)) {
                    // Subscribed to the pathUpdated event so that we're notified if the path changes during the game
                    this.pathCreator.addpathUpdated(Bridge.fn.cacheBind(this, this.OnPathChanged));
                }
            },
            /*PathCreation.Examples.PathFollower.Start end.*/

            /*PathCreation.Examples.PathFollower.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.PathFollower#Update", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.pathCreator, null)) {
                    this.distanceTravelled += this.speed * UnityEngine.Time.deltaTime;
                    this.transform.position = this.pathCreator.path.GetPointAtDistance(this.distanceTravelled, this.endOfPathInstruction);
                    this.transform.rotation = this.pathCreator.path.GetRotationAtDistance(this.distanceTravelled, this.endOfPathInstruction);
                }
            },
            /*PathCreation.Examples.PathFollower.Update end.*/

            /*PathCreation.Examples.PathFollower.OnPathChanged start.*/
            OnPathChanged: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.PathFollower#OnPathChanged", this ); }

                this.distanceTravelled = this.pathCreator.path.GetClosestDistanceAlongPath(this.transform.position);
            },
            /*PathCreation.Examples.PathFollower.OnPathChanged end.*/


        }
    });
    /*PathCreation.Examples.PathFollower end.*/

    /*PathCreation.Examples.PathSceneTool start.*/
    Bridge.define("PathCreation.Examples.PathSceneTool", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            pathCreator: null,
            autoUpdate: false
        },
        events: {
            onDestroyed: null
        },
        props: {
            path: {
                get: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.PathSceneTool#path#get", this ); }

                    return this.pathCreator.path;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.PathSceneTool#init", this ); }

                this.autoUpdate = true;
            }
        },
        methods: {
            /*PathCreation.Examples.PathSceneTool.TriggerUpdate start.*/
            TriggerUpdate: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.PathSceneTool#TriggerUpdate", this ); }

                this.PathUpdated();
            },
            /*PathCreation.Examples.PathSceneTool.TriggerUpdate end.*/

            /*PathCreation.Examples.PathSceneTool.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.PathSceneTool#OnDestroy", this ); }

                if (!Bridge.staticEquals(this.onDestroyed, null)) {
                    this.onDestroyed();
                }
            },
            /*PathCreation.Examples.PathSceneTool.OnDestroy end.*/


        }
    });
    /*PathCreation.Examples.PathSceneTool end.*/

    /*PathCreation.Examples.PathSpawner start.*/
    Bridge.define("PathCreation.Examples.PathSpawner", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            pathPrefab: null,
            followerPrefab: null,
            spawnPoints: null
        },
        methods: {
            /*PathCreation.Examples.PathSpawner.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.PathSpawner#Start", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.spawnPoints);
                try {
                    while ($t.moveNext()) {
                        var t = $t.Current;
                        var path = UnityEngine.Object.Instantiate$2(PathCreation.PathCreator, this.pathPrefab, t.position, t.rotation);
                        var follower = UnityEngine.Object.Instantiate(PathCreation.Examples.PathFollower, this.followerPrefab);
                        follower.pathCreator = path;
                        path.transform.parent = t;

                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*PathCreation.Examples.PathSpawner.Start end.*/


        }
    });
    /*PathCreation.Examples.PathSpawner end.*/

    /*PathCreation.GlobalDisplaySettings start.*/
    Bridge.define("PathCreation.GlobalDisplaySettings", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            anchorSize: 0,
            controlSize: 0,
            visibleBehindObjects: false,
            visibleWhenNotSelected: false,
            hideAutoControls: false,
            anchorShape: 0,
            controlShape: 0,
            anchor: null,
            anchorHighlighted: null,
            anchorSelected: null,
            control: null,
            controlHighlighted: null,
            controlSelected: null,
            handleDisabled: null,
            controlLine: null,
            bezierPath: null,
            highlightedPath: null,
            bounds: null,
            segmentBounds: null,
            vertexPath: null,
            normals: null,
            normalsLength: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PathCreation.GlobalDisplaySettings#init", this ); }

                this.anchor = new UnityEngine.Color();
                this.anchorHighlighted = new UnityEngine.Color();
                this.anchorSelected = new UnityEngine.Color();
                this.control = new UnityEngine.Color();
                this.controlHighlighted = new UnityEngine.Color();
                this.controlSelected = new UnityEngine.Color();
                this.handleDisabled = new UnityEngine.Color();
                this.controlLine = new UnityEngine.Color();
                this.bezierPath = new UnityEngine.Color();
                this.highlightedPath = new UnityEngine.Color();
                this.bounds = new UnityEngine.Color();
                this.segmentBounds = new UnityEngine.Color();
                this.vertexPath = new UnityEngine.Color();
                this.normals = new UnityEngine.Color();
                this.anchorSize = 10;
                this.controlSize = 7.0;
                this.visibleBehindObjects = true;
                this.visibleWhenNotSelected = true;
                this.hideAutoControls = true;
                this.anchor = new pc.Color( 0.95, 0.25, 0.25, 0.85 );
                this.anchorHighlighted = new pc.Color( 1, 0.57, 0.4, 1 );
                this.anchorSelected = new pc.Color( 1, 1, 1, 1 );
                this.control = new pc.Color( 0.35, 0.6, 1, 0.85 );
                this.controlHighlighted = new pc.Color( 0.8, 0.67, 0.97, 1 );
                this.controlSelected = new pc.Color( 1, 1, 1, 1 );
                this.handleDisabled = new pc.Color( 1, 1, 1, 0.2 );
                this.controlLine = new pc.Color( 0, 0, 0, 0.35 );
                this.bezierPath = new pc.Color( 0, 1, 0, 1 );
                this.highlightedPath = new pc.Color( 1, 0.6, 0, 1 );
                this.bounds = new pc.Color( 1, 1, 1, 0.4 );
                this.segmentBounds = new pc.Color( 1, 1, 1, 0.4 );
                this.vertexPath = new pc.Color( 1, 1, 1, 1 );
                this.normals = new pc.Color( 1, 1, 0, 1 );
                this.normalsLength = 0.1;
            }
        }
    });
    /*PathCreation.GlobalDisplaySettings end.*/

    /*PathCreation.GlobalDisplaySettings+HandleType start.*/
    Bridge.define("PathCreation.GlobalDisplaySettings.HandleType", {
        $kind: 1006,
        statics: {
            fields: {
                Sphere: 0,
                Circle: 1,
                Square: 2
            }
        }
    });
    /*PathCreation.GlobalDisplaySettings+HandleType end.*/

    /*PathCreation.MinMax3D start.*/
    Bridge.define("PathCreation.MinMax3D", {
        fields: {
            Min: null,
            Max: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PathCreation.MinMax3D#init", this ); }

                this.Min = new UnityEngine.Vector3();
                this.Max = new UnityEngine.Vector3();
            },
            ctor: function () {
if ( TRACE ) { TRACE( "PathCreation.MinMax3D#ctor", this ); }

                this.$initialize();
                this.Min = new pc.Vec3( 1, 1, 1 ).clone().scale( 3.40282347E+38 );
                this.Max = new pc.Vec3( 1, 1, 1 ).clone().scale( -3.40282347E+38 );
            }
        },
        methods: {
            /*PathCreation.MinMax3D.AddValue start.*/
            AddValue: function (v) {
if ( TRACE ) { TRACE( "PathCreation.MinMax3D#AddValue", this ); }

                this.Min = new pc.Vec3( UnityEngine.Mathf.Min(this.Min.x, v.x), UnityEngine.Mathf.Min(this.Min.y, v.y), UnityEngine.Mathf.Min(this.Min.z, v.z) );
                this.Max = new pc.Vec3( UnityEngine.Mathf.Max(this.Max.x, v.x), UnityEngine.Mathf.Max(this.Max.y, v.y), UnityEngine.Mathf.Max(this.Max.z, v.z) );
            },
            /*PathCreation.MinMax3D.AddValue end.*/


        }
    });
    /*PathCreation.MinMax3D end.*/
    /** @namespace System */

    /**
     * @memberof System
     * @callback System.Action
     * @return  {void}
     */


    /*PathCreation.PathCreator start.*/
    Bridge.define("PathCreation.PathCreator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            editorData: null,
            initialized: false,
            globalEditorDisplaySettings: null
        },
        events: {
            /**
             * @instance
             * @public
             * @this PathCreation.PathCreator
             * @memberof PathCreation.PathCreator
             * @function addpathUpdated
             * @param   {System.Action}    value
             * @return  {void}
             */
            /**
             * @instance
             * @public
             * @this PathCreation.PathCreator
             * @memberof PathCreation.PathCreator
             * @function removepathUpdated
             * @param   {System.Action}    value
             * @return  {void}
             */
            pathUpdated: null
        },
        props: {
            path: {
                get: function () {
if ( TRACE ) { TRACE( "PathCreation.PathCreator#path#get", this ); }

                    if (!this.initialized) {
                        this.InitializeEditorData(false);
                    }
                    return this.editorData.GetVertexPath(this.transform);
                }
            },
            bezierPath: {
                get: function () {
if ( TRACE ) { TRACE( "PathCreation.PathCreator#bezierPath#get", this ); }

                    if (!this.initialized) {
                        this.InitializeEditorData(false);
                    }
                    return this.editorData.bezierPath;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "PathCreation.PathCreator#bezierPath#set", this ); }

                    if (!this.initialized) {
                        this.InitializeEditorData(false);
                    }
                    this.editorData.bezierPath = value;
                }
            },
            EditorData: {
                get: function () {
if ( TRACE ) { TRACE( "PathCreation.PathCreator#EditorData#get", this ); }

                    return this.editorData;
                }
            }
        },
        methods: {
            /*PathCreation.PathCreator.InitializeEditorData start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.PathCreator
             * @memberof PathCreation.PathCreator
             * @param   {boolean}    in2DMode
             * @return  {void}
             */
            InitializeEditorData: function (in2DMode) {
if ( TRACE ) { TRACE( "PathCreation.PathCreator#InitializeEditorData", this ); }

                if (this.editorData == null) {
                    this.editorData = new PathCreation.PathCreatorData();
                }
                this.editorData.removebezierOrVertexPathModified(Bridge.fn.cacheBind(this, this.TriggerPathUpdate));
                this.editorData.addbezierOrVertexPathModified(Bridge.fn.cacheBind(this, this.TriggerPathUpdate));

                this.editorData.Initialize(in2DMode);
                this.initialized = true;
            },
            /*PathCreation.PathCreator.InitializeEditorData end.*/

            /*PathCreation.PathCreator.TriggerPathUpdate start.*/
            TriggerPathUpdate: function () {
if ( TRACE ) { TRACE( "PathCreation.PathCreator#TriggerPathUpdate", this ); }

                if (!Bridge.staticEquals(this.pathUpdated, null)) {
                    this.pathUpdated();
                }
            },
            /*PathCreation.PathCreator.TriggerPathUpdate end.*/


        }
    });
    /*PathCreation.PathCreator end.*/

    /*PathCreation.PathCreatorData start.*/
    /**
     * @public
     * @class PathCreation.PathCreatorData
     */
    Bridge.define("PathCreation.PathCreatorData", {
        fields: {
            _bezierPath: null,
            _vertexPath: null,
            vertexPathUpToDate: false,
            vertexPathMaxAngleError: 0,
            vertexPathMinVertexSpacing: 0,
            showTransformTool: false,
            showPathBounds: false,
            showPerSegmentBounds: false,
            displayAnchorPoints: false,
            displayControlPoints: false,
            bezierHandleScale: 0,
            globalDisplaySettingsFoldout: false,
            keepConstantHandleSize: false,
            showNormalsInVertexMode: false,
            showBezierPathInVertexMode: false,
            showDisplayOptions: false,
            showPathOptions: false,
            showVertexPathDisplayOptions: false,
            showVertexPathOptions: false,
            showNormals: false,
            showNormalsHelpInfo: false,
            tabIndex: 0
        },
        events: {
            bezierOrVertexPathModified: null,
            bezierCreated: null
        },
        props: {
            bezierPath: {
                get: function () {
if ( TRACE ) { TRACE( "PathCreation.PathCreatorData#bezierPath#get", this ); }

                    return this._bezierPath;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "PathCreation.PathCreatorData#bezierPath#set", this ); }

                    this._bezierPath.removeOnModified(Bridge.fn.cacheBind(this, this.BezierPathEdited));
                    this.vertexPathUpToDate = false;
                    this._bezierPath = value;
                    this._bezierPath.addOnModified(Bridge.fn.cacheBind(this, this.BezierPathEdited));

                    if (!Bridge.staticEquals(this.bezierOrVertexPathModified, null)) {
                        this.bezierOrVertexPathModified();
                    }
                    if (!Bridge.staticEquals(this.bezierCreated, null)) {
                        this.bezierCreated();
                    }

                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PathCreation.PathCreatorData#init", this ); }

                this.vertexPathMaxAngleError = 0.3;
                this.vertexPathMinVertexSpacing = 0.01;
                this.showTransformTool = true;
                this.displayAnchorPoints = true;
                this.displayControlPoints = true;
                this.bezierHandleScale = 1;
                this.showPathOptions = true;
                this.showVertexPathOptions = true;
            }
        },
        methods: {
            /*PathCreation.PathCreatorData.Initialize start.*/
            Initialize: function (defaultIs2D) {
if ( TRACE ) { TRACE( "PathCreation.PathCreatorData#Initialize", this ); }

                if (this._bezierPath == null) {
                    this.CreateBezier(pc.Vec3.ZERO.clone(), defaultIs2D);
                }
                this.vertexPathUpToDate = false;
                this._bezierPath.removeOnModified(Bridge.fn.cacheBind(this, this.BezierPathEdited));
                this._bezierPath.addOnModified(Bridge.fn.cacheBind(this, this.BezierPathEdited));
            },
            /*PathCreation.PathCreatorData.Initialize end.*/

            /*PathCreation.PathCreatorData.ResetBezierPath start.*/
            ResetBezierPath: function (centre, defaultIs2D) {
if ( TRACE ) { TRACE( "PathCreation.PathCreatorData#ResetBezierPath", this ); }

                if (defaultIs2D === void 0) { defaultIs2D = false; }
                this.CreateBezier(centre, defaultIs2D);
            },
            /*PathCreation.PathCreatorData.ResetBezierPath end.*/

            /*PathCreation.PathCreatorData.CreateBezier start.*/
            CreateBezier: function (centre, defaultIs2D) {
if ( TRACE ) { TRACE( "PathCreation.PathCreatorData#CreateBezier", this ); }

                if (defaultIs2D === void 0) { defaultIs2D = false; }
                if (this._bezierPath != null) {
                    this._bezierPath.removeOnModified(Bridge.fn.cacheBind(this, this.BezierPathEdited));
                }

                var space = (defaultIs2D) ? PathCreation.PathSpace.xy : PathCreation.PathSpace.xyz;
                this._bezierPath = new PathCreation.BezierPath.$ctor4(centre.$clone(), false, space);

                this._bezierPath.addOnModified(Bridge.fn.cacheBind(this, this.BezierPathEdited));
                this.vertexPathUpToDate = false;

                if (!Bridge.staticEquals(this.bezierOrVertexPathModified, null)) {
                    this.bezierOrVertexPathModified();
                }
                if (!Bridge.staticEquals(this.bezierCreated, null)) {
                    this.bezierCreated();
                }
            },
            /*PathCreation.PathCreatorData.CreateBezier end.*/

            /*PathCreation.PathCreatorData.GetVertexPath start.*/
            GetVertexPath: function (transform) {
if ( TRACE ) { TRACE( "PathCreation.PathCreatorData#GetVertexPath", this ); }

                // create new vertex path if path was modified since this vertex path was created
                if (!this.vertexPathUpToDate || this._vertexPath == null) {
                    this.vertexPathUpToDate = true;
                    this._vertexPath = new PathCreation.VertexPath.$ctor2(this.bezierPath, transform, this.vertexPathMaxAngleError, this.vertexPathMinVertexSpacing);
                }
                return this._vertexPath;
            },
            /*PathCreation.PathCreatorData.GetVertexPath end.*/

            /*PathCreation.PathCreatorData.PathTransformed start.*/
            PathTransformed: function () {
if ( TRACE ) { TRACE( "PathCreation.PathCreatorData#PathTransformed", this ); }

                if (!Bridge.staticEquals(this.bezierOrVertexPathModified, null)) {
                    this.bezierOrVertexPathModified();
                }
            },
            /*PathCreation.PathCreatorData.PathTransformed end.*/

            /*PathCreation.PathCreatorData.VertexPathSettingsChanged start.*/
            VertexPathSettingsChanged: function () {
if ( TRACE ) { TRACE( "PathCreation.PathCreatorData#VertexPathSettingsChanged", this ); }

                this.vertexPathUpToDate = false;
                if (!Bridge.staticEquals(this.bezierOrVertexPathModified, null)) {
                    this.bezierOrVertexPathModified();
                }
            },
            /*PathCreation.PathCreatorData.VertexPathSettingsChanged end.*/

            /*PathCreation.PathCreatorData.PathModifiedByUndo start.*/
            PathModifiedByUndo: function () {
if ( TRACE ) { TRACE( "PathCreation.PathCreatorData#PathModifiedByUndo", this ); }

                this.vertexPathUpToDate = false;
                if (!Bridge.staticEquals(this.bezierOrVertexPathModified, null)) {
                    this.bezierOrVertexPathModified();
                }
            },
            /*PathCreation.PathCreatorData.PathModifiedByUndo end.*/

            /*PathCreation.PathCreatorData.BezierPathEdited start.*/
            BezierPathEdited: function () {
if ( TRACE ) { TRACE( "PathCreation.PathCreatorData#BezierPathEdited", this ); }

                this.vertexPathUpToDate = false;
                if (!Bridge.staticEquals(this.bezierOrVertexPathModified, null)) {
                    this.bezierOrVertexPathModified();
                }
            },
            /*PathCreation.PathCreatorData.BezierPathEdited end.*/


        }
    });
    /*PathCreation.PathCreatorData end.*/

    /*PathCreation.PathSpace start.*/
    Bridge.define("PathCreation.PathSpace", {
        $kind: 6,
        statics: {
            fields: {
                xyz: 0,
                xy: 1,
                xz: 2
            }
        }
    });
    /*PathCreation.PathSpace end.*/

    /*PathCreation.Utility.CubicBezierUtility start.*/
    /** @namespace PathCreation.Utility */

    /**
     * @static
     * @abstract
     * @public
     * @class PathCreation.Utility.CubicBezierUtility
     */
    Bridge.define("PathCreation.Utility.CubicBezierUtility", {
        statics: {
            methods: {
                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurve$1:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {Array.<UnityEngine.Vector3>}    points    
                 * @param   {number}                         t
                 * @return  {UnityEngine.Vector3}
                 */
                EvaluateCurve$1: function (points, t) {
if ( TRACE ) { TRACE( "PathCreation.Utility.CubicBezierUtility#EvaluateCurve$1", this ); }

                    return PathCreation.Utility.CubicBezierUtility.EvaluateCurve(points[0], points[1], points[2], points[3], t);
                },
                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurve$1:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurve:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {UnityEngine.Vector3}    a1    
                 * @param   {UnityEngine.Vector3}    c1    
                 * @param   {UnityEngine.Vector3}    c2    
                 * @param   {UnityEngine.Vector3}    a2    
                 * @param   {number}                 t
                 * @return  {UnityEngine.Vector3}
                 */
                EvaluateCurve: function (a1, c1, c2, a2, t) {
if ( TRACE ) { TRACE( "PathCreation.Utility.CubicBezierUtility#EvaluateCurve", this ); }

                    t = Math.max(0, Math.min(1, t));
                    return a1.clone().scale( (1 - t) * (1 - t) * (1 - t) ).add( c1.clone().scale( 3 * (1 - t) * (1 - t) * t ) ).add( c2.clone().scale( 3 * (1 - t) * t * t ) ).add( a2.clone().scale( t * t * t ) );
                },
                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurve:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative$1:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {Array.<UnityEngine.Vector3>}    points    
                 * @param   {number}                         t
                 * @return  {UnityEngine.Vector3}
                 */
                EvaluateCurveDerivative$1: function (points, t) {
if ( TRACE ) { TRACE( "PathCreation.Utility.CubicBezierUtility#EvaluateCurveDerivative$1", this ); }

                    return PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative(points[0], points[1], points[2], points[3], t);
                },
                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative$1:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {UnityEngine.Vector3}    a1    
                 * @param   {UnityEngine.Vector3}    c1    
                 * @param   {UnityEngine.Vector3}    c2    
                 * @param   {UnityEngine.Vector3}    a2    
                 * @param   {number}                 t
                 * @return  {UnityEngine.Vector3}
                 */
                EvaluateCurveDerivative: function (a1, c1, c2, a2, t) {
if ( TRACE ) { TRACE( "PathCreation.Utility.CubicBezierUtility#EvaluateCurveDerivative", this ); }

                    t = Math.max(0, Math.min(1, t));
                    return (c1.$clone().sub( a1 )).clone().scale( 3 * (1 - t) * (1 - t) ).add( (c2.$clone().sub( c1 )).clone().scale( 6 * (1 - t) * t ) ).add( (a2.$clone().sub( c2 )).clone().scale( 3 * t * t ) );
                },
                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurveSecondDerivative$1:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {Array.<UnityEngine.Vector3>}    points    
                 * @param   {number}                         t
                 * @return  {UnityEngine.Vector3}
                 */
                EvaluateCurveSecondDerivative$1: function (points, t) {
if ( TRACE ) { TRACE( "PathCreation.Utility.CubicBezierUtility#EvaluateCurveSecondDerivative$1", this ); }

                    return PathCreation.Utility.CubicBezierUtility.EvaluateCurveSecondDerivative(points[0], points[1], points[2], points[3], t);
                },
                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurveSecondDerivative$1:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurveSecondDerivative:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {UnityEngine.Vector3}    a1    
                 * @param   {UnityEngine.Vector3}    c1    
                 * @param   {UnityEngine.Vector3}    c2    
                 * @param   {UnityEngine.Vector3}    a2    
                 * @param   {number}                 t
                 * @return  {UnityEngine.Vector3}
                 */
                EvaluateCurveSecondDerivative: function (a1, c1, c2, a2, t) {
if ( TRACE ) { TRACE( "PathCreation.Utility.CubicBezierUtility#EvaluateCurveSecondDerivative", this ); }

                    t = Math.max(0, Math.min(1, t));
                    return (c2.$clone().sub( c1.clone().scale( 2 ) ).add( a1 )).clone().scale( 6 * (1 - t) ).add( (a2.$clone().sub( c2.clone().scale( 2 ) ).add( c1 )).clone().scale( 6 * t ) );
                },
                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurveSecondDerivative:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.Normal$1:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {Array.<UnityEngine.Vector3>}    points    
                 * @param   {number}                         t
                 * @return  {UnityEngine.Vector3}
                 */
                Normal$1: function (points, t) {
if ( TRACE ) { TRACE( "PathCreation.Utility.CubicBezierUtility#Normal$1", this ); }

                    return PathCreation.Utility.CubicBezierUtility.Normal(points[0], points[1], points[2], points[3], t);
                },
                /*PathCreation.Utility.CubicBezierUtility.Normal$1:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.Normal:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {UnityEngine.Vector3}    a1    
                 * @param   {UnityEngine.Vector3}    c1    
                 * @param   {UnityEngine.Vector3}    c2    
                 * @param   {UnityEngine.Vector3}    a2    
                 * @param   {number}                 t
                 * @return  {UnityEngine.Vector3}
                 */
                Normal: function (a1, c1, c2, a2, t) {
if ( TRACE ) { TRACE( "PathCreation.Utility.CubicBezierUtility#Normal", this ); }

                    var tangent = PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative(a1, c1, c2, a2, t);
                    var nextTangent = PathCreation.Utility.CubicBezierUtility.EvaluateCurveSecondDerivative(a1, c1, c2, a2, t);
                    var c = new pc.Vec3().cross( nextTangent, tangent );
                    return new pc.Vec3().cross( c, tangent ).clone().normalize().$clone();
                },
                /*PathCreation.Utility.CubicBezierUtility.Normal:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.CalculateSegmentBounds:static start.*/
                CalculateSegmentBounds: function (p0, p1, p2, p3) {
if ( TRACE ) { TRACE( "PathCreation.Utility.CubicBezierUtility#CalculateSegmentBounds", this ); }

                    var $t;
                    var minMax = new PathCreation.MinMax3D();
                    minMax.AddValue(p0);
                    minMax.AddValue(p3);

                    var extremePointTimes = PathCreation.Utility.CubicBezierUtility.ExtremePointTimes(p0, p1, p2, p3);
                    $t = Bridge.getEnumerator(extremePointTimes);
                    try {
                        while ($t.moveNext()) {
                            var t = $t.Current;
                            minMax.AddValue(PathCreation.Utility.CubicBezierUtility.EvaluateCurve(p0, p1, p2, p3, t));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    return new pc.BoundingBox( (minMax.Min.$clone().add( minMax.Max )).scale( 1.0 / ( 2 ) ), minMax.Max.$clone().sub( minMax.Min ).scale( 0.5 ) );
                },
                /*PathCreation.Utility.CubicBezierUtility.CalculateSegmentBounds:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.SplitCurve:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {Array.<UnityEngine.Vector3>}            points    
                 * @param   {number}                                 t
                 * @return  {Array.<Array.<UnityEngine.Vector3>>}
                 */
                SplitCurve: function (points, t) {
if ( TRACE ) { TRACE( "PathCreation.Utility.CubicBezierUtility#SplitCurve", this ); }

                    var a1 = new pc.Vec3().lerp( points[0], points[1], t );
                    var a2 = new pc.Vec3().lerp( points[1], points[2], t );
                    var a3 = new pc.Vec3().lerp( points[2], points[3], t );
                    var b1 = new pc.Vec3().lerp( a1, a2, t );
                    var b2 = new pc.Vec3().lerp( a2, a3, t );
                    var pointOnCurve = new pc.Vec3().lerp( b1, b2, t );

                    return System.Array.init([System.Array.init([points[0].$clone(), a1.$clone(), b1.$clone(), pointOnCurve.$clone()], UnityEngine.Vector3), System.Array.init([pointOnCurve.$clone(), b2.$clone(), a3.$clone(), points[3].$clone()], UnityEngine.Vector3)], System.Array.type(UnityEngine.Vector3));
                },
                /*PathCreation.Utility.CubicBezierUtility.SplitCurve:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.EstimateCurveLength:static start.*/
                EstimateCurveLength: function (p0, p1, p2, p3) {
if ( TRACE ) { TRACE( "PathCreation.Utility.CubicBezierUtility#EstimateCurveLength", this ); }

                    var controlNetLength = (p0.$clone().sub( p1 )).length() + (p1.$clone().sub( p2 )).length() + (p2.$clone().sub( p3 )).length();
                    var estimatedCurveLength = (p0.$clone().sub( p3 )).length() + controlNetLength / 2.0;
                    return estimatedCurveLength;
                },
                /*PathCreation.Utility.CubicBezierUtility.EstimateCurveLength:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.ExtremePointTimes:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {UnityEngine.Vector3}                  p0    
                 * @param   {UnityEngine.Vector3}                  p1    
                 * @param   {UnityEngine.Vector3}                  p2    
                 * @param   {UnityEngine.Vector3}                  p3
                 * @return  {System.Collections.Generic.List$1}
                 */
                ExtremePointTimes: function (p0, p1, p2, p3) {
if ( TRACE ) { TRACE( "PathCreation.Utility.CubicBezierUtility#ExtremePointTimes", this ); }

                    // coefficients of derivative function
                    var a = (p0.$clone().scale( -1 ).add( p1.clone().scale( 3 ) ).sub( p2.clone().scale( 3 ) ).add( p3 )).clone().scale( 3 );
                    var b = (p0.$clone().sub( p1.clone().scale( 2 ) ).add( p2 )).clone().scale( 6 );
                    var c = (p1.$clone().sub( p0 )).clone().scale( 3 );

                    var times = new (System.Collections.Generic.List$1(System.Single)).ctor();
                    times.AddRange(PathCreation.Utility.CubicBezierUtility.StationaryPointTimes(a.x, b.x, c.x));
                    times.AddRange(PathCreation.Utility.CubicBezierUtility.StationaryPointTimes(a.y, b.y, c.y));
                    times.AddRange(PathCreation.Utility.CubicBezierUtility.StationaryPointTimes(a.z, b.z, c.z));
                    return times;
                },
                /*PathCreation.Utility.CubicBezierUtility.ExtremePointTimes:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.StationaryPointTimes:static start.*/
                StationaryPointTimes: function (a, b, c) {
if ( TRACE ) { TRACE( "PathCreation.Utility.CubicBezierUtility#StationaryPointTimes", this ); }

                    var times = new (System.Collections.Generic.List$1(System.Single)).ctor();

                    // from quadratic equation: y = [-b +- sqrt(b^2 - 4ac)]/2a
                    if (a !== 0) {
                        var discriminant = b * b - 4 * a * c;
                        if (discriminant >= 0) {
                            var s = Math.sqrt(discriminant);
                            var t1 = (-b + s) / (2 * a);
                            if (t1 >= 0 && t1 <= 1) {
                                times.add(t1);
                            }

                            if (discriminant !== 0) {
                                var t2 = (-b - s) / (2 * a);

                                if (t2 >= 0 && t2 <= 1) {
                                    times.add(t2);
                                }
                            }
                        }
                    }
                    return times;
                },
                /*PathCreation.Utility.CubicBezierUtility.StationaryPointTimes:static end.*/


            }
        }
    });
    /*PathCreation.Utility.CubicBezierUtility end.*/

    /*PathCreation.Utility.MathUtility start.*/
    Bridge.define("PathCreation.Utility.MathUtility", {
        statics: {
            methods: {
                /*PathCreation.Utility.MathUtility.LockTransformToSpace:static start.*/
                LockTransformToSpace: function (t, space) {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility#LockTransformToSpace", this ); }

                    var original = new PathCreation.Utility.MathUtility.PosRotScale(t);
                    if (space === PathCreation.PathSpace.xy) {
                        t.eulerAngles = new pc.Vec3( 0, 0, t.eulerAngles.z );
                        t.position = new pc.Vec3( t.position.x, t.position.y, 0 );
                    } else if (space === PathCreation.PathSpace.xz) {
                        t.eulerAngles = new pc.Vec3( 0, t.eulerAngles.y, 0 );
                        t.position = new pc.Vec3( t.position.x, 0, t.position.z );
                    }

                    //float maxScale = Mathf.Max (t.localScale.x * t.parent.localScale.x, t.localScale.y * t.parent.localScale.y, t.localScale.z * t.parent.localScale.z);
                    var maxScale = UnityEngine.Mathf.Max(t.lossyScale.x, t.lossyScale.y, t.lossyScale.z);

                    t.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( maxScale );

                    return original;
                },
                /*PathCreation.Utility.MathUtility.LockTransformToSpace:static end.*/

                /*PathCreation.Utility.MathUtility.TransformPoint:static start.*/
                TransformPoint: function (p, t, space) {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility#TransformPoint", this ); }

                    var original = PathCreation.Utility.MathUtility.LockTransformToSpace(t, space);
                    var transformedPoint = t.TransformPoint$1(p);
                    original.SetTransform(t);
                    return transformedPoint.$clone();
                },
                /*PathCreation.Utility.MathUtility.TransformPoint:static end.*/

                /*PathCreation.Utility.MathUtility.InverseTransformPoint:static start.*/
                InverseTransformPoint: function (p, t, space) {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility#InverseTransformPoint", this ); }

                    var original = PathCreation.Utility.MathUtility.LockTransformToSpace(t, space);
                    var transformedPoint = t.InverseTransformPoint(p);
                    original.SetTransform(t);
                    return transformedPoint.$clone();
                },
                /*PathCreation.Utility.MathUtility.InverseTransformPoint:static end.*/

                /*PathCreation.Utility.MathUtility.TransformVector:static start.*/
                TransformVector: function (p, t, space) {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility#TransformVector", this ); }

                    var original = PathCreation.Utility.MathUtility.LockTransformToSpace(t, space);
                    var transformedPoint = t.TransformVector(p);
                    original.SetTransform(t);
                    return transformedPoint.$clone();
                },
                /*PathCreation.Utility.MathUtility.TransformVector:static end.*/

                /*PathCreation.Utility.MathUtility.InverseTransformVector:static start.*/
                InverseTransformVector: function (p, t, space) {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility#InverseTransformVector", this ); }

                    var original = PathCreation.Utility.MathUtility.LockTransformToSpace(t, space);
                    var transformedPoint = t.InverseTransformVector(p);
                    original.SetTransform(t);
                    return transformedPoint.$clone();
                },
                /*PathCreation.Utility.MathUtility.InverseTransformVector:static end.*/

                /*PathCreation.Utility.MathUtility.TransformDirection:static start.*/
                TransformDirection: function (p, t, space) {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility#TransformDirection", this ); }

                    var original = PathCreation.Utility.MathUtility.LockTransformToSpace(t, space);
                    var transformedPoint = t.TransformDirection$1(p.$clone());
                    original.SetTransform(t);
                    return transformedPoint.$clone();
                },
                /*PathCreation.Utility.MathUtility.TransformDirection:static end.*/

                /*PathCreation.Utility.MathUtility.InverseTransformDirection:static start.*/
                InverseTransformDirection: function (p, t, space) {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility#InverseTransformDirection", this ); }

                    var original = PathCreation.Utility.MathUtility.LockTransformToSpace(t, space);
                    var transformedPoint = t.InverseTransformDirection(p);
                    original.SetTransform(t);
                    return transformedPoint.$clone();
                },
                /*PathCreation.Utility.MathUtility.InverseTransformDirection:static end.*/

                /*PathCreation.Utility.MathUtility.LineSegmentsIntersect:static start.*/
                LineSegmentsIntersect: function (a1, a2, b1, b2) {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility#LineSegmentsIntersect", this ); }

                    var d = (b2.x - b1.x) * (a1.y - a2.y) - (a1.x - a2.x) * (b2.y - b1.y);
                    if (d === 0) {
                        return false;
                    }
                    var t = ((b1.y - b2.y) * (a1.x - b1.x) + (b2.x - b1.x) * (a1.y - b1.y)) / d;
                    var u = ((a1.y - a2.y) * (a1.x - b1.x) + (a2.x - a1.x) * (a1.y - b1.y)) / d;

                    return t >= 0 && t <= 1 && u >= 0 && u <= 1;
                },
                /*PathCreation.Utility.MathUtility.LineSegmentsIntersect:static end.*/

                /*PathCreation.Utility.MathUtility.LinesIntersect:static start.*/
                LinesIntersect: function (a1, a2, a3, a4) {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility#LinesIntersect", this ); }

                    return (a1.x - a2.x) * (a3.y - a4.y) - (a1.y - a2.y) * (a3.x - a4.x) !== 0;
                },
                /*PathCreation.Utility.MathUtility.LinesIntersect:static end.*/

                /*PathCreation.Utility.MathUtility.PointOfLineLineIntersection:static start.*/
                PointOfLineLineIntersection: function (a1, a2, a3, a4) {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility#PointOfLineLineIntersection", this ); }

                    var d = (a1.x - a2.x) * (a3.y - a4.y) - (a1.y - a2.y) * (a3.x - a4.x);
                    if (d === 0) {
                        UnityEngine.Debug.LogError$2("Lines are parallel, please check that this is not the case before calling line intersection method");
                        return pc.Vec2.ZERO.clone();
                    } else {
                        var n = (a1.x - a3.x) * (a3.y - a4.y) - (a1.y - a3.y) * (a3.x - a4.x);
                        var t = n / d;
                        return a1.$clone().add( (a2.$clone().sub( a1 )).scale( t ) );
                    }
                },
                /*PathCreation.Utility.MathUtility.PointOfLineLineIntersection:static end.*/

                /*PathCreation.Utility.MathUtility.ClosestPointOnLineSegment:static start.*/
                ClosestPointOnLineSegment: function (p, a, b) {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility#ClosestPointOnLineSegment", this ); }

                    var aB = b.$clone().sub( a );
                    var aP = p.$clone().sub( a );
                    var sqrLenAB = aB.lengthSq();

                    if (sqrLenAB === 0) {
                        return a.$clone();
                    }

                    var t = Math.max(0, Math.min(1, aP.dot( aB ) / sqrLenAB));
                    return a.$clone().add( aB.$clone().scale( t ) );
                },
                /*PathCreation.Utility.MathUtility.ClosestPointOnLineSegment:static end.*/

                /*PathCreation.Utility.MathUtility.ClosestPointOnLineSegment$1:static start.*/
                ClosestPointOnLineSegment$1: function (p, a, b) {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility#ClosestPointOnLineSegment$1", this ); }

                    var aB = b.$clone().sub( a );
                    var aP = p.$clone().sub( a );
                    var sqrLenAB = aB.lengthSq();

                    if (sqrLenAB === 0) {
                        return a.$clone();
                    }

                    var t = Math.max(0, Math.min(1, aP.dot( aB ) / sqrLenAB));
                    return a.$clone().add( aB.$clone().clone().scale( t ) );
                },
                /*PathCreation.Utility.MathUtility.ClosestPointOnLineSegment$1:static end.*/

                /*PathCreation.Utility.MathUtility.SideOfLine:static start.*/
                SideOfLine: function (a, b, c) {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility#SideOfLine", this ); }

                    var $t;
                    return Bridge.Int.clip32(($t = (c.x - a.x) * (-b.y + a.y) + (c.y - a.y) * (b.x - a.x), ($t === 0 ? 1 : Math.sign($t))));
                },
                /*PathCreation.Utility.MathUtility.SideOfLine:static end.*/

                /*PathCreation.Utility.MathUtility.MinAngle:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.MathUtility
                 * @memberof PathCreation.Utility.MathUtility
                 * @param   {UnityEngine.Vector3}    a    
                 * @param   {UnityEngine.Vector3}    b    
                 * @param   {UnityEngine.Vector3}    c
                 * @return  {number}
                 */
                MinAngle: function (a, b, c) {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility#MinAngle", this ); }

                    return Math.acos( pc.math.clamp( (a.$clone().sub( b )).clone().normalize().dot( (c.$clone().sub( b )).clone().normalize() ), -1, 1 ) ) * pc.math.RAD_TO_DEG;
                },
                /*PathCreation.Utility.MathUtility.MinAngle:static end.*/

                /*PathCreation.Utility.MathUtility.PointInTriangle:static start.*/
                PointInTriangle: function (a, b, c, p) {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility#PointInTriangle", this ); }

                    var area = 0.5 * (-b.y * c.x + a.y * (-b.x + c.x) + a.x * (b.y - c.y) + b.x * c.y);
                    var s = 1 / (2 * area) * (a.y * c.x - a.x * c.y + (c.y - a.y) * p.x + (a.x - c.x) * p.y);
                    var t = 1 / (2 * area) * (a.x * b.y - a.y * b.x + (a.y - b.y) * p.x + (b.x - a.x) * p.y);
                    return s >= 0 && t >= 0 && (s + t) <= 1;
                },
                /*PathCreation.Utility.MathUtility.PointInTriangle:static end.*/

                /*PathCreation.Utility.MathUtility.PointsAreClockwise:static start.*/
                PointsAreClockwise: function (points) {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility#PointsAreClockwise", this ); }

                    var signedArea = 0;
                    for (var i = 0; i < points.length; i = (i + 1) | 0) {
                        var nextIndex = (((i + 1) | 0)) % points.length;
                        signedArea += (points[nextIndex].x - points[i].x) * (points[nextIndex].y + points[i].y);
                    }

                    return signedArea >= 0;
                },
                /*PathCreation.Utility.MathUtility.PointsAreClockwise:static end.*/


            }
        }
    });
    /*PathCreation.Utility.MathUtility end.*/

    /*PathCreation.Utility.MathUtility+PosRotScale start.*/
    Bridge.define("PathCreation.Utility.MathUtility.PosRotScale", {
        $kind: 1002,
        fields: {
            position: null,
            rotation: null,
            scale: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility.PosRotScale#init", this ); }

                this.position = new UnityEngine.Vector3();
                this.rotation = new UnityEngine.Quaternion();
                this.scale = new UnityEngine.Vector3();
            },
            ctor: function (t) {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility.PosRotScale#ctor", this ); }

                this.$initialize();
                this.position = t.position.$clone();
                this.rotation = t.rotation.$clone();
                this.scale = t.localScale.$clone();
            }
        },
        methods: {
            /*PathCreation.Utility.MathUtility+PosRotScale.SetTransform start.*/
            SetTransform: function (t) {
if ( TRACE ) { TRACE( "PathCreation.Utility.MathUtility.PosRotScale#SetTransform", this ); }

                t.position = this.position.$clone();
                t.rotation = this.rotation.$clone();
                t.localScale = this.scale.$clone();

            },
            /*PathCreation.Utility.MathUtility+PosRotScale.SetTransform end.*/


        }
    });
    /*PathCreation.Utility.MathUtility+PosRotScale end.*/

    /*PathCreation.Utility.VertexPathUtility start.*/
    Bridge.define("PathCreation.Utility.VertexPathUtility", {
        statics: {
            methods: {
                /*PathCreation.Utility.VertexPathUtility.SplitBezierPathByAngleError:static start.*/
                SplitBezierPathByAngleError: function (bezierPath, maxAngleError, minVertexDst, accuracy) {
if ( TRACE ) { TRACE( "PathCreation.Utility.VertexPathUtility#SplitBezierPathByAngleError", this ); }

                    var splitData = new PathCreation.Utility.VertexPathUtility.PathSplitData();

                    splitData.vertices.add(bezierPath.getItem(0).$clone());
                    splitData.tangents.add(PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative$1(bezierPath.GetPointsInSegment(0), 0).clone().normalize().$clone());
                    splitData.cumulativeLength.add(0);
                    splitData.anchorVertexMap.add(0);
                    splitData.minMax.AddValue(bezierPath.getItem(0));

                    var prevPointOnPath = bezierPath.getItem(0).$clone();
                    var lastAddedPoint = bezierPath.getItem(0).$clone();

                    var currentPathLength = 0;
                    var dstSinceLastVertex = 0;

                    // Go through all segments and split up into vertices
                    for (var segmentIndex = 0; segmentIndex < bezierPath.NumSegments; segmentIndex = (segmentIndex + 1) | 0) {
                        var segmentPoints = bezierPath.GetPointsInSegment(segmentIndex);
                        var estimatedSegmentLength = PathCreation.Utility.CubicBezierUtility.EstimateCurveLength(segmentPoints[0], segmentPoints[1], segmentPoints[2], segmentPoints[3]);
                        var divisions = Math.ceil(estimatedSegmentLength * accuracy);
                        var increment = 1.0 / divisions;

                        for (var t = increment; t <= 1; t += increment) {
                            var isLastPointOnPath = (t + increment > 1 && segmentIndex === ((bezierPath.NumSegments - 1) | 0));
                            if (isLastPointOnPath) {
                                t = 1;
                            }
                            var pointOnPath = PathCreation.Utility.CubicBezierUtility.EvaluateCurve$1(segmentPoints, t);
                            var nextPointOnPath = PathCreation.Utility.CubicBezierUtility.EvaluateCurve$1(segmentPoints, t + increment);

                            // angle at current point on path
                            var localAngle = 180 - PathCreation.Utility.MathUtility.MinAngle(prevPointOnPath, pointOnPath, nextPointOnPath);
                            // angle between the last added vertex, the current point on the path, and the next point on the path
                            var angleFromPrevVertex = 180 - PathCreation.Utility.MathUtility.MinAngle(lastAddedPoint, pointOnPath, nextPointOnPath);
                            var angleError = UnityEngine.Mathf.Max(localAngle, angleFromPrevVertex);


                            if ((angleError > maxAngleError && dstSinceLastVertex >= minVertexDst) || isLastPointOnPath) {

                                currentPathLength += (lastAddedPoint.$clone().sub( pointOnPath )).length();
                                splitData.cumulativeLength.add(currentPathLength);
                                splitData.vertices.add(pointOnPath.$clone());
                                splitData.tangents.add(PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative$1(segmentPoints, t).clone().normalize().$clone());
                                splitData.minMax.AddValue(pointOnPath);
                                dstSinceLastVertex = 0;
                                lastAddedPoint = pointOnPath.$clone();
                            } else {
                                dstSinceLastVertex += (pointOnPath.$clone().sub( prevPointOnPath )).length();
                            }
                            prevPointOnPath = pointOnPath.$clone();
                        }
                        splitData.anchorVertexMap.add(((splitData.vertices.Count - 1) | 0));
                    }
                    return splitData;
                },
                /*PathCreation.Utility.VertexPathUtility.SplitBezierPathByAngleError:static end.*/

                /*PathCreation.Utility.VertexPathUtility.SplitBezierPathEvenly:static start.*/
                SplitBezierPathEvenly: function (bezierPath, spacing, accuracy) {
if ( TRACE ) { TRACE( "PathCreation.Utility.VertexPathUtility#SplitBezierPathEvenly", this ); }

                    var splitData = new PathCreation.Utility.VertexPathUtility.PathSplitData();

                    splitData.vertices.add(bezierPath.getItem(0).$clone());
                    splitData.tangents.add(PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative$1(bezierPath.GetPointsInSegment(0), 0).clone().normalize().$clone());
                    splitData.cumulativeLength.add(0);
                    splitData.anchorVertexMap.add(0);
                    splitData.minMax.AddValue(bezierPath.getItem(0));

                    var prevPointOnPath = bezierPath.getItem(0).$clone();
                    var lastAddedPoint = bezierPath.getItem(0).$clone();

                    var currentPathLength = 0;
                    var dstSinceLastVertex = 0;

                    // Go through all segments and split up into vertices
                    for (var segmentIndex = 0; segmentIndex < bezierPath.NumSegments; segmentIndex = (segmentIndex + 1) | 0) {
                        var segmentPoints = bezierPath.GetPointsInSegment(segmentIndex);
                        var estimatedSegmentLength = PathCreation.Utility.CubicBezierUtility.EstimateCurveLength(segmentPoints[0], segmentPoints[1], segmentPoints[2], segmentPoints[3]);
                        var divisions = Math.ceil(estimatedSegmentLength * accuracy);
                        var increment = 1.0 / divisions;

                        for (var t = increment; t <= 1; t += increment) {
                            var isLastPointOnPath = (t + increment > 1 && segmentIndex === ((bezierPath.NumSegments - 1) | 0));
                            if (isLastPointOnPath) {
                                t = 1;
                            }
                            var pointOnPath = PathCreation.Utility.CubicBezierUtility.EvaluateCurve$1(segmentPoints, t);
                            dstSinceLastVertex += (pointOnPath.$clone().sub( prevPointOnPath )).length();

                            // If vertices are now too far apart, go back by amount we overshot by
                            if (dstSinceLastVertex > spacing) {
                                var overshootDst = dstSinceLastVertex - spacing;
                                pointOnPath = pointOnPath.$clone().add( (prevPointOnPath.$clone().sub( pointOnPath )).clone().normalize().$clone().clone().scale( overshootDst ) );
                                t -= increment;
                            }

                            if (dstSinceLastVertex >= spacing || isLastPointOnPath) {
                                currentPathLength += (lastAddedPoint.$clone().sub( pointOnPath )).length();
                                splitData.cumulativeLength.add(currentPathLength);
                                splitData.vertices.add(pointOnPath.$clone());
                                splitData.tangents.add(PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative$1(segmentPoints, t).clone().normalize().$clone());
                                splitData.minMax.AddValue(pointOnPath);
                                dstSinceLastVertex = 0;
                                lastAddedPoint = pointOnPath.$clone();
                            }
                            prevPointOnPath = pointOnPath.$clone();
                        }
                        splitData.anchorVertexMap.add(((splitData.vertices.Count - 1) | 0));
                    }
                    return splitData;
                },
                /*PathCreation.Utility.VertexPathUtility.SplitBezierPathEvenly:static end.*/


            }
        }
    });
    /*PathCreation.Utility.VertexPathUtility end.*/

    /*PathCreation.Utility.VertexPathUtility+PathSplitData start.*/
    Bridge.define("PathCreation.Utility.VertexPathUtility.PathSplitData", {
        $kind: 1002,
        fields: {
            vertices: null,
            tangents: null,
            cumulativeLength: null,
            anchorVertexMap: null,
            minMax: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PathCreation.Utility.VertexPathUtility.PathSplitData#init", this ); }

                this.vertices = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor();
                this.tangents = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor();
                this.cumulativeLength = new (System.Collections.Generic.List$1(System.Single)).ctor();
                this.anchorVertexMap = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                this.minMax = new PathCreation.MinMax3D();
            }
        }
    });
    /*PathCreation.Utility.VertexPathUtility+PathSplitData end.*/

    /*PathCreation.VertexPath start.*/
    /**
     * @public
     * @class PathCreation.VertexPath
     */
    Bridge.define("PathCreation.VertexPath", {
        statics: {
            fields: {
                accuracy: 0,
                minVertexSpacing: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#init", this ); }

                    this.accuracy = 10;
                    this.minVertexSpacing = 0.01;
                }
            }
        },
        fields: {
            space: 0,
            isClosedLoop: false,
            localPoints: null,
            localTangents: null,
            localNormals: null,
            /**
             * @instance
             * @public
             * @readonly
             * @memberof PathCreation.VertexPath
             * @type Array.<number>
             */
            times: null,
            /**
             * @instance
             * @public
             * @readonly
             * @memberof PathCreation.VertexPath
             * @type number
             */
            length: 0,
            /**
             * @instance
             * @public
             * @readonly
             * @memberof PathCreation.VertexPath
             * @type Array.<number>
             */
            cumulativeLengthAtEachVertex: null,
            /**
             * @instance
             * @public
             * @readonly
             * @memberof PathCreation.VertexPath
             * @type UnityEngine.Bounds
             */
            bounds: null,
            /**
             * @instance
             * @public
             * @readonly
             * @memberof PathCreation.VertexPath
             * @type UnityEngine.Vector3
             */
            up: null,
            transform: null
        },
        props: {
            NumPoints: {
                get: function () {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#NumPoints#get", this ); }

                    return this.localPoints.length;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#init", this ); }

                this.bounds = new UnityEngine.Bounds();
                this.up = new UnityEngine.Vector3();
            },
            /**
             * Splits bezier path into array of vertices along the path.
             *
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {PathCreation.BezierPath}    bezierPath       
             * @param   {UnityEngine.Transform}      transform        
             * @param   {number}                     maxAngleError    How much can the angle of the path change before a vertex is added. This allows fewer vertices to be generated in straighter sections.
             * @param   {number}                     minVertexDst     Vertices won't be added closer together than this distance, regardless of angle error.
             * @return  {void}
             */
            $ctor2: function (bezierPath, transform, maxAngleError, minVertexDst) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#$ctor2", this ); }

                if (maxAngleError === void 0) { maxAngleError = 0.3; }
                if (minVertexDst === void 0) { minVertexDst = 0.0; }

                PathCreation.VertexPath.ctor.call(this, bezierPath, PathCreation.Utility.VertexPathUtility.SplitBezierPathByAngleError(bezierPath, maxAngleError, minVertexDst, PathCreation.VertexPath.accuracy), transform);
            },
            /**
             * Splits bezier path into array of vertices along the path.
             *
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {PathCreation.BezierPath}    bezierPath       
             * @param   {UnityEngine.Transform}      transform        
             * @param   {number}                     vertexSpacing
             * @return  {void}
             */
            $ctor1: function (bezierPath, transform, vertexSpacing) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#$ctor1", this ); }

                PathCreation.VertexPath.ctor.call(this, bezierPath, PathCreation.Utility.VertexPathUtility.SplitBezierPathEvenly(bezierPath, UnityEngine.Mathf.Max(vertexSpacing, PathCreation.VertexPath.minVertexSpacing), PathCreation.VertexPath.accuracy), transform);
            },
            /**
             * @instance
             * @private
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {PathCreation.BezierPath}                                 bezierPath       
             * @param   {PathCreation.Utility.VertexPathUtility.PathSplitData}    pathSplitData    
             * @param   {UnityEngine.Transform}                                   transform
             * @return  {void}
             */
            ctor: function (bezierPath, pathSplitData, transform) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#ctor", this ); }

                this.$initialize();
                this.transform = transform;
                this.space = bezierPath.Space;
                this.isClosedLoop = bezierPath.IsClosed;
                var numVerts = pathSplitData.vertices.Count;
                this.length = pathSplitData.cumulativeLength.getItem(((numVerts - 1) | 0));

                this.localPoints = System.Array.init(numVerts, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                this.localNormals = System.Array.init(numVerts, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                this.localTangents = System.Array.init(numVerts, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                this.cumulativeLengthAtEachVertex = System.Array.init(numVerts, 0, System.Single);
                this.times = System.Array.init(numVerts, 0, System.Single);
                this.bounds = new pc.BoundingBox( (pathSplitData.minMax.Min.$clone().add( pathSplitData.minMax.Max )).scale( 1.0 / ( 2 ) ), pathSplitData.minMax.Max.$clone().sub( pathSplitData.minMax.Min ).scale( 0.5 ) );

                // Figure out up direction for path
                this.up = (this.bounds.halfExtents.$clone().scale( 2 ).z > this.bounds.halfExtents.$clone().scale( 2 ).y) ? pc.Vec3.UP.clone() : new pc.Vec3( 0, 0, 1 ).scale( -1 );
                var lastRotationAxis = this.up.$clone();

                // Loop through the data and assign to arrays.
                for (var i = 0; i < this.localPoints.length; i = (i + 1) | 0) {
                    this.localPoints[i] = pathSplitData.vertices.getItem(i).$clone();
                    this.localTangents[i] = pathSplitData.tangents.getItem(i).$clone();
                    this.cumulativeLengthAtEachVertex[i] = pathSplitData.cumulativeLength.getItem(i);
                    this.times[i] = this.cumulativeLengthAtEachVertex[i] / this.length;

                    // Calculate normals
                    if (this.space === PathCreation.PathSpace.xyz) {
                        if (i === 0) {
                            this.localNormals[0] = new pc.Vec3().cross( lastRotationAxis, pathSplitData.tangents.getItem(0) ).clone().normalize().$clone();
                        } else {
                            // First reflection
                            var offset = (this.localPoints[i].$clone().sub( this.localPoints[((i - 1) | 0)] ));
                            var sqrDst = offset.lengthSq();
                            var r = lastRotationAxis.$clone().sub( offset.$clone().clone().scale( 2 ).scale( 1.0 / ( sqrDst ) ).clone().scale( offset.dot( lastRotationAxis ) ) );
                            var t = this.localTangents[((i - 1) | 0)].$clone().sub( offset.$clone().clone().scale( 2 ).scale( 1.0 / ( sqrDst ) ).clone().scale( offset.dot( this.localTangents[((i - 1) | 0)] ) ) );

                            // Second reflection
                            var v2 = this.localTangents[i].$clone().sub( t );
                            var c2 = v2.dot( v2 );

                            var finalRot = r.$clone().sub( v2.$clone().clone().scale( 2 ).scale( 1.0 / ( c2 ) ).clone().scale( v2.dot( r ) ) );
                            var n = new pc.Vec3().cross( finalRot, this.localTangents[i] ).clone().normalize().$clone();
                            this.localNormals[i] = n.$clone();
                            lastRotationAxis = finalRot.$clone();
                        }
                    } else {
                        this.localNormals[i] = new pc.Vec3().cross( this.localTangents[i], this.up ).clone().scale( ((bezierPath.FlipNormals) ? 1 : -1) );
                    }
                }

                // Apply correction for 3d normals along a closed path
                if (this.space === PathCreation.PathSpace.xyz && this.isClosedLoop) {
                    // Get angle between first and last normal (if zero, they're already lined up, otherwise we need to correct)
                    var normalsAngleErrorAcrossJoin = pc.Vec3.signedAngle( this.localNormals[((this.localNormals.length - 1) | 0)], this.localNormals[0], this.localTangents[0] );
                    // Gradually rotate the normals along the path to ensure start and end normals line up correctly
                    if (Math.abs(normalsAngleErrorAcrossJoin) > 0.1) {
                        for (var i1 = 1; i1 < this.localNormals.length; i1 = (i1 + 1) | 0) {
                            var t1 = (i1 / (this.localNormals.length - 1.0));
                            var angle = normalsAngleErrorAcrossJoin * t1;
                            var rot = new pc.Quat().setFromAxisAngle( this.localTangents[i1], angle );
                            this.localNormals[i1] = rot.transformVector( this.localNormals[i1] ).clone().scale( ((bezierPath.FlipNormals) ? -1 : 1) );
                        }
                    }
                }

                // Rotate normals to match up with user-defined anchor angles
                if (this.space === PathCreation.PathSpace.xyz) {
                    for (var anchorIndex = 0; anchorIndex < ((pathSplitData.anchorVertexMap.Count - 1) | 0); anchorIndex = (anchorIndex + 1) | 0) {
                        var nextAnchorIndex = (this.isClosedLoop) ? (((anchorIndex + 1) | 0)) % bezierPath.NumSegments : ((anchorIndex + 1) | 0);

                        var startAngle = bezierPath.GetAnchorNormalAngle(anchorIndex) + bezierPath.GlobalNormalsAngle;
                        var endAngle = bezierPath.GetAnchorNormalAngle(nextAnchorIndex) + bezierPath.GlobalNormalsAngle;
                        var deltaAngle = UnityEngine.Mathf.DeltaAngle(startAngle, endAngle);

                        var startVertIndex = pathSplitData.anchorVertexMap.getItem(anchorIndex);
                        var endVertIndex = pathSplitData.anchorVertexMap.getItem(((anchorIndex + 1) | 0));

                        var num = (endVertIndex - startVertIndex) | 0;
                        if (anchorIndex === ((pathSplitData.anchorVertexMap.Count - 2) | 0)) {
                            num = (num + 1) | 0;
                        }
                        for (var i2 = 0; i2 < num; i2 = (i2 + 1) | 0) {
                            var vertIndex = (startVertIndex + i2) | 0;
                            var t2 = i2 / (num - 1.0);
                            var angle1 = startAngle + deltaAngle * t2;
                            var rot1 = new pc.Quat().setFromAxisAngle( this.localTangents[vertIndex], angle1 );
                            this.localNormals[vertIndex] = (rot1.transformVector( this.localNormals[vertIndex] )).clone().scale( ((bezierPath.FlipNormals) ? -1 : 1) );
                        }
                    }
                }
            }
        },
        methods: {
            /*PathCreation.VertexPath.UpdateTransform start.*/
            UpdateTransform: function (transform) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#UpdateTransform", this ); }

                this.transform = transform;
            },
            /*PathCreation.VertexPath.UpdateTransform end.*/

            /*PathCreation.VertexPath.GetTangent start.*/
            GetTangent: function (index) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#GetTangent", this ); }

                return PathCreation.Utility.MathUtility.TransformDirection(this.localTangents[index], this.transform, this.space);
            },
            /*PathCreation.VertexPath.GetTangent end.*/

            /*PathCreation.VertexPath.GetNormal start.*/
            GetNormal: function (index) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#GetNormal", this ); }

                return PathCreation.Utility.MathUtility.TransformDirection(this.localNormals[index], this.transform, this.space);
            },
            /*PathCreation.VertexPath.GetNormal end.*/

            /*PathCreation.VertexPath.GetNormal$1 start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {number}                               t                       
             * @param   {PathCreation.EndOfPathInstruction}    endOfPathInstruction
             * @return  {UnityEngine.Vector3}
             */
            GetNormal$1: function (t, endOfPathInstruction) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#GetNormal$1", this ); }

                if (endOfPathInstruction === void 0) { endOfPathInstruction = 0; }
                var data = this.CalculatePercentOnPathData(t, endOfPathInstruction);
                var normal = new pc.Vec3().lerp( this.localNormals[data.previousIndex], this.localNormals[data.nextIndex], data.percentBetweenIndices );
                return PathCreation.Utility.MathUtility.TransformDirection(normal, this.transform, this.space);
            },
            /*PathCreation.VertexPath.GetNormal$1 end.*/

            /*PathCreation.VertexPath.GetPoint start.*/
            GetPoint: function (index) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#GetPoint", this ); }

                return PathCreation.Utility.MathUtility.TransformPoint(this.localPoints[index], this.transform, this.space);
            },
            /*PathCreation.VertexPath.GetPoint end.*/

            /*PathCreation.VertexPath.GetPointAtDistance start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {number}                               dst                     
             * @param   {PathCreation.EndOfPathInstruction}    endOfPathInstruction
             * @return  {UnityEngine.Vector3}
             */
            GetPointAtDistance: function (dst, endOfPathInstruction) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#GetPointAtDistance", this ); }

                if (endOfPathInstruction === void 0) { endOfPathInstruction = 0; }
                var t = dst / this.length;
                return this.GetPointAtTime(t, endOfPathInstruction);
            },
            /*PathCreation.VertexPath.GetPointAtDistance end.*/

            /*PathCreation.VertexPath.GetDirectionAtDistance start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {number}                               dst                     
             * @param   {PathCreation.EndOfPathInstruction}    endOfPathInstruction
             * @return  {UnityEngine.Vector3}
             */
            GetDirectionAtDistance: function (dst, endOfPathInstruction) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#GetDirectionAtDistance", this ); }

                if (endOfPathInstruction === void 0) { endOfPathInstruction = 0; }
                var t = dst / this.length;
                return this.GetDirection(t, endOfPathInstruction);
            },
            /*PathCreation.VertexPath.GetDirectionAtDistance end.*/

            /*PathCreation.VertexPath.GetNormalAtDistance start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {number}                               dst                     
             * @param   {PathCreation.EndOfPathInstruction}    endOfPathInstruction
             * @return  {UnityEngine.Vector3}
             */
            GetNormalAtDistance: function (dst, endOfPathInstruction) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#GetNormalAtDistance", this ); }

                if (endOfPathInstruction === void 0) { endOfPathInstruction = 0; }
                var t = dst / this.length;
                return this.GetNormal$1(t, endOfPathInstruction);
            },
            /*PathCreation.VertexPath.GetNormalAtDistance end.*/

            /*PathCreation.VertexPath.GetRotationAtDistance start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {number}                               dst                     
             * @param   {PathCreation.EndOfPathInstruction}    endOfPathInstruction
             * @return  {UnityEngine.Quaternion}
             */
            GetRotationAtDistance: function (dst, endOfPathInstruction) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#GetRotationAtDistance", this ); }

                if (endOfPathInstruction === void 0) { endOfPathInstruction = 0; }
                var t = dst / this.length;
                return this.GetRotation(t, endOfPathInstruction);
            },
            /*PathCreation.VertexPath.GetRotationAtDistance end.*/

            /*PathCreation.VertexPath.GetPointAtTime start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {number}                               t                       
             * @param   {PathCreation.EndOfPathInstruction}    endOfPathInstruction
             * @return  {UnityEngine.Vector3}
             */
            GetPointAtTime: function (t, endOfPathInstruction) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#GetPointAtTime", this ); }

                if (endOfPathInstruction === void 0) { endOfPathInstruction = 0; }
                var data = this.CalculatePercentOnPathData(t, endOfPathInstruction);
                return new pc.Vec3().lerp( this.GetPoint(data.previousIndex), this.GetPoint(data.nextIndex), data.percentBetweenIndices );
            },
            /*PathCreation.VertexPath.GetPointAtTime end.*/

            /*PathCreation.VertexPath.GetDirection start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {number}                               t                       
             * @param   {PathCreation.EndOfPathInstruction}    endOfPathInstruction
             * @return  {UnityEngine.Vector3}
             */
            GetDirection: function (t, endOfPathInstruction) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#GetDirection", this ); }

                if (endOfPathInstruction === void 0) { endOfPathInstruction = 0; }
                var data = this.CalculatePercentOnPathData(t, endOfPathInstruction);
                var dir = new pc.Vec3().lerp( this.localTangents[data.previousIndex], this.localTangents[data.nextIndex], data.percentBetweenIndices );
                return PathCreation.Utility.MathUtility.TransformDirection(dir, this.transform, this.space);
            },
            /*PathCreation.VertexPath.GetDirection end.*/

            /*PathCreation.VertexPath.GetRotation start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {number}                               t                       
             * @param   {PathCreation.EndOfPathInstruction}    endOfPathInstruction
             * @return  {UnityEngine.Quaternion}
             */
            GetRotation: function (t, endOfPathInstruction) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#GetRotation", this ); }

                if (endOfPathInstruction === void 0) { endOfPathInstruction = 0; }
                var data = this.CalculatePercentOnPathData(t, endOfPathInstruction);
                var direction = new pc.Vec3().lerp( this.localTangents[data.previousIndex], this.localTangents[data.nextIndex], data.percentBetweenIndices );
                var normal = new pc.Vec3().lerp( this.localNormals[data.previousIndex], this.localNormals[data.nextIndex], data.percentBetweenIndices );
                return new pc.Quat().setLookAt( PathCreation.Utility.MathUtility.TransformDirection(direction, this.transform, this.space), PathCreation.Utility.MathUtility.TransformDirection(normal, this.transform, this.space) );
            },
            /*PathCreation.VertexPath.GetRotation end.*/

            /*PathCreation.VertexPath.GetClosestPointOnPath start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {UnityEngine.Vector3}    worldPoint
             * @return  {UnityEngine.Vector3}
             */
            GetClosestPointOnPath: function (worldPoint) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#GetClosestPointOnPath", this ); }

                var data = this.CalculateClosestPointOnPathData(worldPoint);
                return new pc.Vec3().lerp( this.GetPoint(data.previousIndex), this.GetPoint(data.nextIndex), data.percentBetweenIndices );
            },
            /*PathCreation.VertexPath.GetClosestPointOnPath end.*/

            /*PathCreation.VertexPath.GetClosestTimeOnPath start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {UnityEngine.Vector3}    worldPoint
             * @return  {number}
             */
            GetClosestTimeOnPath: function (worldPoint) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#GetClosestTimeOnPath", this ); }

                var data = this.CalculateClosestPointOnPathData(worldPoint);
                return pc.math.lerp(this.times[data.previousIndex], this.times[data.nextIndex], data.percentBetweenIndices);
            },
            /*PathCreation.VertexPath.GetClosestTimeOnPath end.*/

            /*PathCreation.VertexPath.GetClosestDistanceAlongPath start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {UnityEngine.Vector3}    worldPoint
             * @return  {number}
             */
            GetClosestDistanceAlongPath: function (worldPoint) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#GetClosestDistanceAlongPath", this ); }

                var data = this.CalculateClosestPointOnPathData(worldPoint);
                return pc.math.lerp(this.cumulativeLengthAtEachVertex[data.previousIndex], this.cumulativeLengthAtEachVertex[data.nextIndex], data.percentBetweenIndices);
            },
            /*PathCreation.VertexPath.GetClosestDistanceAlongPath end.*/

            /*PathCreation.VertexPath.CalculatePercentOnPathData start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {number}                                    t                       
             * @param   {PathCreation.EndOfPathInstruction}         endOfPathInstruction
             * @return  {PathCreation.VertexPath.TimeOnPathData}
             */
            CalculatePercentOnPathData: function (t, endOfPathInstruction) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#CalculatePercentOnPathData", this ); }

                // Constrain t based on the end of path instruction
                switch (endOfPathInstruction) {
                    case PathCreation.EndOfPathInstruction.Loop: 
                        // If t is negative, make it the equivalent value between 0 and 1
                        if (t < 0) {
                            t += Math.ceil(Math.abs(t));
                        }
                        t %= 1;
                        break;
                    case PathCreation.EndOfPathInstruction.Reverse: 
                        t = UnityEngine.Mathf.PingPong(t, 1);
                        break;
                    case PathCreation.EndOfPathInstruction.Stop: 
                        t = Math.max(0, Math.min(1, t));
                        break;
                }

                var prevIndex = 0;
                var nextIndex = (this.NumPoints - 1) | 0;
                var i = Math.round(t * (((this.NumPoints - 1) | 0))); // starting guess

                // Starts by looking at middle vertex and determines if t lies to the left or to the right of that vertex.
                // Continues dividing in half until closest surrounding vertices have been found.
                while (true) {
                    // t lies to left
                    if (t <= this.times[i]) {
                        nextIndex = i;
                    } else {
                        prevIndex = i;
                    }
                    i = (Bridge.Int.div((((nextIndex + prevIndex) | 0)), 2)) | 0;

                    if (((nextIndex - prevIndex) | 0) <= 1) {
                        break;
                    }
                }

                var abPercent = pc.math.inverseLerp(this.times[prevIndex], this.times[nextIndex], t);
                return new PathCreation.VertexPath.TimeOnPathData.$ctor1(prevIndex, nextIndex, abPercent);
            },
            /*PathCreation.VertexPath.CalculatePercentOnPathData end.*/

            /*PathCreation.VertexPath.CalculateClosestPointOnPathData start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {UnityEngine.Vector3}                       worldPoint
             * @return  {PathCreation.VertexPath.TimeOnPathData}
             */
            CalculateClosestPointOnPathData: function (worldPoint) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath#CalculateClosestPointOnPathData", this ); }

                var minSqrDst = 3.40282347E+38;
                var closestPoint = pc.Vec3.ZERO.clone();
                var closestSegmentIndexA = 0;
                var closestSegmentIndexB = 0;

                for (var i = 0; i < this.localPoints.length; i = (i + 1) | 0) {
                    var nextI = (i + 1) | 0;
                    if (nextI >= this.localPoints.length) {
                        if (this.isClosedLoop) {
                            nextI = nextI % this.localPoints.length;
                        } else {
                            break;
                        }
                    }

                    var closestPointOnSegment = PathCreation.Utility.MathUtility.ClosestPointOnLineSegment$1(worldPoint, this.GetPoint(i), this.GetPoint(nextI));
                    var sqrDst = (worldPoint.$clone().sub( closestPointOnSegment )).lengthSq();
                    if (sqrDst < minSqrDst) {
                        minSqrDst = sqrDst;
                        closestPoint = closestPointOnSegment.$clone();
                        closestSegmentIndexA = i;
                        closestSegmentIndexB = nextI;
                    }

                }
                var closestSegmentLength = (this.GetPoint(closestSegmentIndexA).sub( this.GetPoint(closestSegmentIndexB) )).length();
                var t = (closestPoint.$clone().sub( this.GetPoint(closestSegmentIndexA) )).length() / closestSegmentLength;
                return new PathCreation.VertexPath.TimeOnPathData.$ctor1(closestSegmentIndexA, closestSegmentIndexB, t);
            },
            /*PathCreation.VertexPath.CalculateClosestPointOnPathData end.*/


        },
        overloads: {
            "GetNormal(float, EndOfPathInstruction)": "GetNormal$1"
        }
    });
    /*PathCreation.VertexPath end.*/

    /*PathCreation.VertexPath+TimeOnPathData start.*/
    Bridge.define("PathCreation.VertexPath.TimeOnPathData", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "PathCreation.VertexPath.TimeOnPathData#getDefaultValue", this ); }
 return new PathCreation.VertexPath.TimeOnPathData(); }
            }
        },
        fields: {
            previousIndex: 0,
            nextIndex: 0,
            percentBetweenIndices: 0
        },
        ctors: {
            $ctor1: function (prev, next, percentBetweenIndices) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath.TimeOnPathData#$ctor1", this ); }

                this.$initialize();
                this.previousIndex = prev;
                this.nextIndex = next;
                this.percentBetweenIndices = percentBetweenIndices;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "PathCreation.VertexPath.TimeOnPathData#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "PathCreation.VertexPath.TimeOnPathData#getHashCode", this ); }

                var h = Bridge.addHash([4966228363, this.previousIndex, this.nextIndex, this.percentBetweenIndices]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath.TimeOnPathData#equals", this ); }

                if (!Bridge.is(o, PathCreation.VertexPath.TimeOnPathData)) {
                    return false;
                }
                return Bridge.equals(this.previousIndex, o.previousIndex) && Bridge.equals(this.nextIndex, o.nextIndex) && Bridge.equals(this.percentBetweenIndices, o.percentBetweenIndices);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "PathCreation.VertexPath.TimeOnPathData#$clone", this ); }

                var s = to || new PathCreation.VertexPath.TimeOnPathData();
                s.previousIndex = this.previousIndex;
                s.nextIndex = this.nextIndex;
                s.percentBetweenIndices = this.percentBetweenIndices;
                return s;
            }
        }
    });
    /*PathCreation.VertexPath+TimeOnPathData end.*/

    /*PlayableAdsTool.AudioManager start.*/
    Bridge.define("PlayableAdsTool.AudioManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            AudioSourceContainer: null,
            SoundTypeListPairs: null
        },
        methods: {
            /*PlayableAdsTool.AudioManager.PlaySound start.*/
            PlaySound: function (soundType, volume, pitch) {
if ( TRACE ) { TRACE( "PlayableAdsTool.AudioManager#PlaySound", this ); }

                var clip = this.GetCurrentAudioClip(soundType);

                if (clip == null) {
                    return;
                }

                var container = PlayableAdsTool.ObjectPoolManager.SpawnObjects(this.AudioSourceContainer, this.transform);
                var audioSourceContainer = container.GetComponent(PlayableAdsTool.AudioSourceContainer);
                audioSourceContainer.PlaySound(clip, volume, pitch);
            },
            /*PlayableAdsTool.AudioManager.PlaySound end.*/

            /*PlayableAdsTool.AudioManager.GetCurrentAudioClip start.*/
            GetCurrentAudioClip: function (soundType) {
if ( TRACE ) { TRACE( "PlayableAdsTool.AudioManager#GetCurrentAudioClip", this ); }

                var $t;
                var soundList = null;
                $t = Bridge.getEnumerator(this.SoundTypeListPairs);
                try {
                    while ($t.moveNext()) {
                        var pair = $t.Current.$clone();
                        if (pair.type === soundType) {
                            soundList = pair.clips;
                            break;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return soundList == null ? null : soundList.getItem(UnityEngine.Random.Range(0, soundList.Count));
            },
            /*PlayableAdsTool.AudioManager.GetCurrentAudioClip end.*/

            /*PlayableAdsTool.AudioManager.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.AudioManager#OnEnable", this ); }

                EventManager.OnPlaySound = Bridge.fn.combine(EventManager.OnPlaySound, Bridge.fn.cacheBind(this, this.OnPlaySound));
            },
            /*PlayableAdsTool.AudioManager.OnEnable end.*/

            /*PlayableAdsTool.AudioManager.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.AudioManager#OnDisable", this ); }

                EventManager.OnPlaySound = Bridge.fn.remove(EventManager.OnPlaySound, Bridge.fn.cacheBind(this, this.OnPlaySound));
            },
            /*PlayableAdsTool.AudioManager.OnDisable end.*/

            /*PlayableAdsTool.AudioManager.OnPlaySound start.*/
            OnPlaySound: function (soundType, volume, pitch) {
if ( TRACE ) { TRACE( "PlayableAdsTool.AudioManager#OnPlaySound", this ); }

                this.PlaySound(soundType, volume, pitch);
            },
            /*PlayableAdsTool.AudioManager.OnPlaySound end.*/


        }
    });
    /*PlayableAdsTool.AudioManager end.*/

    /*PlayableAdsTool.AudioSourceContainer start.*/
    Bridge.define("PlayableAdsTool.AudioSourceContainer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _source: null
        },
        methods: {
            /*PlayableAdsTool.AudioSourceContainer.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.AudioSourceContainer#Awake", this ); }

                this._source = this.GetComponent(UnityEngine.AudioSource);
            },
            /*PlayableAdsTool.AudioSourceContainer.Awake end.*/

            /*PlayableAdsTool.AudioSourceContainer.PlaySound start.*/
            PlaySound: function (clip, volume, pitch) {
if ( TRACE ) { TRACE( "PlayableAdsTool.AudioSourceContainer#PlaySound", this ); }

                if (volume === void 0) { volume = 1.0; }
                if (pitch === void 0) { pitch = 1.0; }
                this._source.volume = volume;
                this._source.pitch = pitch;
                this._source.clip = clip;
                this._source.Play();

                this.StartCoroutine$1(this.CheckIfAudioFinished());
            },
            /*PlayableAdsTool.AudioSourceContainer.PlaySound end.*/

            /*PlayableAdsTool.AudioSourceContainer.CheckIfAudioFinished start.*/
            CheckIfAudioFinished: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.AudioSourceContainer#CheckIfAudioFinished", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( this._source.isPlaying ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 3: {
                                    this.OnAudioFinished();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PlayableAdsTool.AudioSourceContainer.CheckIfAudioFinished end.*/

            /*PlayableAdsTool.AudioSourceContainer.OnAudioFinished start.*/
            OnAudioFinished: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.AudioSourceContainer#OnAudioFinished", this ); }

                PlayableAdsTool.ObjectPoolManager.ReturnObjectToPool(this.gameObject);
            },
            /*PlayableAdsTool.AudioSourceContainer.OnAudioFinished end.*/


        }
    });
    /*PlayableAdsTool.AudioSourceContainer end.*/

    /*PlayableAdsTool.EndCardController+EndCardAnimation start.*/
    Bridge.define("PlayableAdsTool.EndCardController.EndCardAnimation", {
        $kind: 1006,
        statics: {
            fields: {
                Show: 0,
                Hide: 1
            }
        }
    });
    /*PlayableAdsTool.EndCardController+EndCardAnimation end.*/

    /*PlayableAdsTool.EndCardController+GameResult start.*/
    Bridge.define("PlayableAdsTool.EndCardController.GameResult", {
        $kind: 1006,
        statics: {
            fields: {
                Default: 0
            }
        }
    });
    /*PlayableAdsTool.EndCardController+GameResult end.*/

    /*PlayableAdsTool.LanguageTest start.*/
    Bridge.define("PlayableAdsTool.LanguageTest", {
        $kind: 6,
        statics: {
            fields: {
                English: 0,
                Arabic: 1,
                Dutch: 2,
                Filipino: 3,
                French: 4,
                German: 5,
                Greek: 6,
                Hebrew: 7,
                Hindi: 8,
                Hungarian: 9,
                Indonesian: 10,
                Italian: 11,
                Japanese: 12,
                Korean: 13,
                Malay: 14,
                Polish: 15,
                Portuguese: 16,
                Romanian: 17,
                Russian: 18,
                Serbian: 19,
                Spanish: 20,
                Thai: 21,
                TraditionalChinese: 22,
                Turkish: 23,
                Ukrainian: 24,
                Urdu: 25,
                Vietnamese: 26
            }
        }
    });
    /*PlayableAdsTool.LanguageTest end.*/

    /*PlayableAdsTool.LocalizationManager start.*/
    /** @namespace PlayableAdsTool */

    /**
     * Localization manager.
     *
     * @static
     * @abstract
     * @public
     * @class PlayableAdsTool.LocalizationManager
     */
    Bridge.define("PlayableAdsTool.LocalizationManager", {
        statics: {
            fields: {
                Dictionary: null,
                _language: null
            },
            events: {
                /**
                 * Fired when localization changed.
                 *
                 * @static
                 * @public
                 * @this PlayableAdsTool.LocalizationManager
                 * @memberof PlayableAdsTool.LocalizationManager
                 * @function addOnLocalizationChanged
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * Fired when localization changed.
                 *
                 * @static
                 * @public
                 * @this PlayableAdsTool.LocalizationManager
                 * @memberof PlayableAdsTool.LocalizationManager
                 * @function removeOnLocalizationChanged
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                OnLocalizationChanged: null
            },
            props: {
                /**
                 * Get or set language.
                 *
                 * @static
                 * @public
                 * @memberof PlayableAdsTool.LocalizationManager
                 * @function Language
                 * @type string
                 */
                Language: {
                    get: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizationManager#Language#get", this ); }

                        return PlayableAdsTool.LocalizationManager._language;
                    },
                    set: function (value) {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizationManager#Language#set", this ); }

                        PlayableAdsTool.LocalizationManager._language = value;
                        PlayableAdsTool.LocalizationManager.OnLocalizationChanged();
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizationManager#init", this ); }

                    this.Dictionary = new (System.Collections.Generic.Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.String,System.String))).ctor();
                    this._language = "English";
                    Bridge.event(this, "OnLocalizationChanged", function () { });
                }
            },
            methods: {
                /*PlayableAdsTool.LocalizationManager.AutoLanguage:static start.*/
                /**
                 * Set default language.
                 *
                 * @static
                 * @public
                 * @this PlayableAdsTool.LocalizationManager
                 * @memberof PlayableAdsTool.LocalizationManager
                 * @param   {string}    lang
                 * @return  {void}
                 */
                AutoLanguage: function (lang) {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizationManager#AutoLanguage", this ); }

                    PlayableAdsTool.LocalizationManager.Language = lang;
                },
                /*PlayableAdsTool.LocalizationManager.AutoLanguage:static end.*/

                /*PlayableAdsTool.LocalizationManager.Read:static start.*/
                /**
                 * Read localization spreadsheets.
                 *
                 * @static
                 * @public
                 * @this PlayableAdsTool.LocalizationManager
                 * @memberof PlayableAdsTool.LocalizationManager
                 * @return  {void}
                 */
                Read: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizationManager#Read", this ); }

                    var $t;
                    if (PlayableAdsTool.LocalizationManager.Dictionary.Count > 0) {
                        return;
                    }

                    var keys = new (System.Collections.Generic.List$1(System.String)).ctor();

                    $t = Bridge.getEnumerator(PlayableAdsTool.SingletonBehaviour$1(PlayableAdsTool.LocalizationController).Instance.Sheets);
                    try {
                        while ($t.moveNext()) {
                            var sheet = $t.Current;
                            var textAsset = sheet.TextAsset;
                            var lines = PlayableAdsTool.LocalizationManager.GetLines(textAsset.text);
                            var languages = System.Linq.Enumerable.from(System.String.split(lines.getItem(0), [44].map(function (i) {{ return String.fromCharCode(i); }})), System.String).select(function (i) {
                                    return i.trim();
                                }).toList(System.String);

                            if (languages.Count !== System.Linq.Enumerable.from(languages, System.String).distinct().count()) {
                                UnityEngine.Debug.LogError$2(System.String.format("Duplicated languages found in `{0}`. This sheet is not loaded.", [sheet.Name]));
                                continue;
                            }

                            for (var i = 1; i < languages.Count; i = (i + 1) | 0) {
                                if (!PlayableAdsTool.LocalizationManager.Dictionary.containsKey(languages.getItem(i))) {
                                    PlayableAdsTool.LocalizationManager.Dictionary.add(languages.getItem(i), new (System.Collections.Generic.Dictionary$2(System.String,System.String)).ctor());
                                }
                            }

                            for (var i1 = 1; i1 < lines.Count; i1 = (i1 + 1) | 0) {
                                var columns = PlayableAdsTool.LocalizationManager.GetColumns(lines.getItem(i1));
                                var key = columns.getItem(0);

                                if (Bridge.referenceEquals(key, "")) {
                                    continue;
                                }

                                if (keys.contains(key)) {
                                    UnityEngine.Debug.LogError$2(System.String.format("Duplicated key `{0}` found in `{1}`. This key is not loaded.", key, sheet.Name));
                                    continue;
                                }

                                keys.add(key);

                                for (var j = 1; j < languages.Count; j = (j + 1) | 0) {
                                    if (PlayableAdsTool.LocalizationManager.Dictionary.getItem(languages.getItem(j)).containsKey(key)) {
                                        UnityEngine.Debug.LogError$2(System.String.format("Duplicated key `{0}` in `{1}`.", key, sheet.Name));
                                    } else {
                                        PlayableAdsTool.LocalizationManager.Dictionary.getItem(languages.getItem(j)).add(key, columns.getItem(j));
                                    }
                                }
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    //AutoLanguage();
                },
                /*PlayableAdsTool.LocalizationManager.Read:static end.*/

                /*PlayableAdsTool.LocalizationManager.HasKey:static start.*/
                /**
                 * Check if a key exists in localization.
                 *
                 * @static
                 * @public
                 * @this PlayableAdsTool.LocalizationManager
                 * @memberof PlayableAdsTool.LocalizationManager
                 * @param   {string}     localizationKey
                 * @return  {boolean}
                 */
                HasKey: function (localizationKey) {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizationManager#HasKey", this ); }

                    return PlayableAdsTool.LocalizationManager.Dictionary.containsKey(PlayableAdsTool.LocalizationManager.Language) && PlayableAdsTool.LocalizationManager.Dictionary.getItem(PlayableAdsTool.LocalizationManager.Language).containsKey(localizationKey);
                },
                /*PlayableAdsTool.LocalizationManager.HasKey:static end.*/

                /*PlayableAdsTool.LocalizationManager.Localize:static start.*/
                /**
                 * Get localized value by localization key.
                 *
                 * @static
                 * @public
                 * @this PlayableAdsTool.LocalizationManager
                 * @memberof PlayableAdsTool.LocalizationManager
                 * @param   {string}    localizationKey
                 * @return  {string}
                 */
                Localize: function (localizationKey) {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizationManager#Localize", this ); }

                    if (PlayableAdsTool.LocalizationManager.Dictionary.Count === 0) {
                        PlayableAdsTool.LocalizationManager.Read();
                    }

                    if (!PlayableAdsTool.LocalizationManager.Dictionary.containsKey(PlayableAdsTool.LocalizationManager.Language)) {
                        throw new System.Collections.Generic.KeyNotFoundException.$ctor1("Language not found: " + (PlayableAdsTool.LocalizationManager.Language || ""));
                    }

                    var missed = !PlayableAdsTool.LocalizationManager.Dictionary.getItem(PlayableAdsTool.LocalizationManager.Language).containsKey(localizationKey) || Bridge.referenceEquals(PlayableAdsTool.LocalizationManager.Dictionary.getItem(PlayableAdsTool.LocalizationManager.Language).getItem(localizationKey), "");

                    if (missed) {
                        UnityEngine.Debug.LogWarning$1(System.String.format("Translation not found: {0} ({1}).", localizationKey, PlayableAdsTool.LocalizationManager.Language));

                        return PlayableAdsTool.LocalizationManager.Dictionary.getItem("English").containsKey(localizationKey) ? PlayableAdsTool.LocalizationManager.Dictionary.getItem("English").getItem(localizationKey) : localizationKey;
                    }

                    return PlayableAdsTool.LocalizationManager.Dictionary.getItem(PlayableAdsTool.LocalizationManager.Language).getItem(localizationKey);
                },
                /*PlayableAdsTool.LocalizationManager.Localize:static end.*/

                /*PlayableAdsTool.LocalizationManager.Localize$1:static start.*/
                /**
                 * Get localized value by localization key.
                 *
                 * @static
                 * @public
                 * @this PlayableAdsTool.LocalizationManager
                 * @memberof PlayableAdsTool.LocalizationManager
                 * @param   {string}                   localizationKey    
                 * @param   {Array.<System.Object>}    args
                 * @return  {string}
                 */
                Localize$1: function (localizationKey, args) {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizationManager#Localize$1", this ); }

                    if (args === void 0) { args = []; }
                    var pattern = PlayableAdsTool.LocalizationManager.Localize(localizationKey);

                    return System.String.format.apply(System.String, [pattern].concat(args));
                },
                /*PlayableAdsTool.LocalizationManager.Localize$1:static end.*/

                /*PlayableAdsTool.LocalizationManager.GetLines:static start.*/
                GetLines: function (text) {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizationManager#GetLines", this ); }

                    var $t;
                    text = System.String.replaceAll(System.String.replaceAll(text, "\r\n", "\n"), "\"\"", "[_quote_]");

                    var matches = System.Text.RegularExpressions.Regex.matches(text, "\"[\\s\\S]+?\"");

                    $t = Bridge.getEnumerator(matches);
                    try {
                        while ($t.moveNext()) {
                            var match = Bridge.cast($t.Current, System.Text.RegularExpressions.Match);
                            text = System.String.replaceAll(text, match.getValue(), System.String.replaceAll(System.String.replaceAll(System.String.replaceAll(match.getValue(), "\"", null), ",", "[_comma_]"), "\n", "[_newline_]"));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    // Making uGUI line breaks to work in asian texts.
                    text = System.String.replaceAll(System.String.replaceAll(System.String.replaceAll(System.String.replaceAll(System.String.replaceAll(System.String.replaceAll(text, "\u3002", "\u3002 "), "\u3001", "\u3001 "), "\uff1a", "\uff1a "), "\uff01", "\uff01 "), "\uff08", " \uff08"), "\uff09", "\uff09 ").trim();

                    return System.Linq.Enumerable.from(System.String.split(text, [10].map(function (i) {{ return String.fromCharCode(i); }})), System.String).where(function (i) {
                            return !Bridge.referenceEquals(i, "");
                        }).toList(System.String);
                },
                /*PlayableAdsTool.LocalizationManager.GetLines:static end.*/

                /*PlayableAdsTool.LocalizationManager.GetColumns:static start.*/
                GetColumns: function (line) {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizationManager#GetColumns", this ); }

                    return System.Linq.Enumerable.from(System.String.split(line, [44].map(function (i) {{ return String.fromCharCode(i); }})), System.String).select(function (j) {
                            return j.trim();
                        }).select(function (j) {
                        return System.String.replaceAll(System.String.replaceAll(System.String.replaceAll(j, "[_quote_]", "\""), "[_comma_]", ","), "[_newline_]", "\n");
                    }).toList(System.String);
                },
                /*PlayableAdsTool.LocalizationManager.GetColumns:static end.*/


            }
        }
    });
    /*PlayableAdsTool.LocalizationManager end.*/

    /*PlayableAdsTool.LocalizationSettings start.*/
    Bridge.define("PlayableAdsTool.LocalizationSettings", {
        inherits: [UnityEngine.ScriptableObject],
        statics: {
            fields: {
                UrlPattern: null,
                Timestamp: null,
                _instance: null
            },
            events: {
                OnRunEditor: null
            },
            props: {
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizationSettings#Instance#get", this ); }

                        if (PlayableAdsTool.LocalizationSettings._instance == null) {
                            PlayableAdsTool.LocalizationSettings._instance = PlayableAdsTool.LocalizationSettings.LoadSettings();
                        }

                        return PlayableAdsTool.LocalizationSettings._instance;
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizationSettings#init", this ); }

                    this.Timestamp = System.DateTime.getDefaultValue();
                    this.UrlPattern = "https://docs.google.com/spreadsheets/d/{0}/export?format=csv&gid={1}";
                    Bridge.event(this, "OnRunEditor", function () { });
                }
            },
            methods: {
                /*PlayableAdsTool.LocalizationSettings.LoadSettings:static start.*/
                LoadSettings: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizationSettings#LoadSettings", this ); }

                    var path = "Assets/SimpleLocalization/Resources/LocalizationSettings.asset";

                    var settings = UnityEngine.Resources.Load(PlayableAdsTool.LocalizationSettings, System.IO.Path.GetFileNameWithoutExtension(path));

                    if (settings != null) {
                        return settings;
                    }


                    throw new System.Exception(System.String.format("Localization settings not found: {0}", [path]));


                },
                /*PlayableAdsTool.LocalizationSettings.LoadSettings:static end.*/


            }
        },
        fields: {
            /**
             * Table Id on Google Sheets.
             Let's say your table has the following URL https://docs.google.com/spreadsheets/d/1RvKY3VE_y5FPhEECCa5dv4F7REJ7rBtGzQg9Z_B_DE4/edit#gid=331980525
             In this case, Table Id is "1RvKY3VE_y5FPhEECCa5dv4F7REJ7rBtGzQg9Z_B_DE4" and Sheet Id is "331980525" (the gid parameter).
             *
             * @instance
             * @public
             * @memberof PlayableAdsTool.LocalizationSettings
             * @type string
             */
            TableId: null,
            Sheets: null,
            SaveFolder: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizationSettings#init", this ); }

                this.Sheets = new (System.Collections.Generic.List$1(PlayableAdsTool.Sheet)).ctor();
            }
        }
    });
    /*PlayableAdsTool.LocalizationSettings end.*/

    /*PlayableAdsTool.LocalizationSync start.*/
    /**
     * Downloads sheets from Google Sheet and saves them to Resources.
     *
     * @public
     * @class PlayableAdsTool.LocalizationSync
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("PlayableAdsTool.LocalizationSync", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                UrlPattern: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizationSync#init", this ); }

                    this.UrlPattern = "https://docs.google.com/spreadsheets/d/{0}/export?format=csv&gid={1}";
                }
            }
        },
        fields: {
            /**
             * Table Id on Google Sheets.
             Let's say your table has the following URL https://docs.google.com/spreadsheets/d/1RvKY3VE_y5FPhEECCa5dv4F7REJ7rBtGzQg9Z_B_DE4/edit#gid=331980525
             In this case, Table Id is "1RvKY3VE_y5FPhEECCa5dv4F7REJ7rBtGzQg9Z_B_DE4" and Sheet Id is "331980525" (the gid parameter).
             *
             * @instance
             * @public
             * @memberof PlayableAdsTool.LocalizationSync
             * @type string
             */
            TableId: null,
            /**
             * Table sheet contains sheet name and id. First sheet has always zero id. Sheet name is used when saving.
             *
             * @instance
             * @public
             * @memberof PlayableAdsTool.LocalizationSync
             * @type Array.<PlayableAdsTool.Sheet>
             */
            Sheets: null,
            /**
             * Folder to save spreadsheets. Must be inside Resources folder.
             *
             * @instance
             * @public
             * @memberof PlayableAdsTool.LocalizationSync
             * @type UnityEngine.Object
             */
            SaveFolder: null
        }
    });
    /*PlayableAdsTool.LocalizationSync end.*/

    /*PlayableAdsTool.LocalizedDropdown start.*/
    /**
     * Localize dropdown component.
     *
     * @public
     * @class PlayableAdsTool.LocalizedDropdown
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("PlayableAdsTool.LocalizedDropdown", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            LocalizationKeys: null
        },
        methods: {
            /*PlayableAdsTool.LocalizedDropdown.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizedDropdown#Start", this ); }

                this.Localize();
                PlayableAdsTool.LocalizationManager.addOnLocalizationChanged(Bridge.fn.cacheBind(this, this.Localize));
            },
            /*PlayableAdsTool.LocalizedDropdown.Start end.*/

            /*PlayableAdsTool.LocalizedDropdown.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizedDropdown#OnDestroy", this ); }

                PlayableAdsTool.LocalizationManager.removeOnLocalizationChanged(Bridge.fn.cacheBind(this, this.Localize));
            },
            /*PlayableAdsTool.LocalizedDropdown.OnDestroy end.*/

            /*PlayableAdsTool.LocalizedDropdown.Localize start.*/
            Localize: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizedDropdown#Localize", this ); }

                var dropdown = this.GetComponent(UnityEngine.UI.Dropdown);

                for (var i = 0; i < this.LocalizationKeys.length; i = (i + 1) | 0) {
                    dropdown.options.getItem(i).text = PlayableAdsTool.LocalizationManager.Localize(this.LocalizationKeys[i]);
                }

                if (dropdown.value < this.LocalizationKeys.length) {
                    dropdown.captionText.text = PlayableAdsTool.LocalizationManager.Localize(this.LocalizationKeys[dropdown.value]);
                }
            },
            /*PlayableAdsTool.LocalizedDropdown.Localize end.*/


        }
    });
    /*PlayableAdsTool.LocalizedDropdown end.*/

    /*PlayableAdsTool.LocalizedText start.*/
    Bridge.define("PlayableAdsTool.LocalizedText", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            LocalizationKey: null,
            BeforeText: null,
            AfterText: null
        },
        methods: {
            /*PlayableAdsTool.LocalizedText.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizedText#Start", this ); }

                this.Localize();
                PlayableAdsTool.LocalizationManager.addOnLocalizationChanged(Bridge.fn.cacheBind(this, this.Localize));
            },
            /*PlayableAdsTool.LocalizedText.Start end.*/

            /*PlayableAdsTool.LocalizedText.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizedText#OnDestroy", this ); }

                PlayableAdsTool.LocalizationManager.removeOnLocalizationChanged(Bridge.fn.cacheBind(this, this.Localize));
            },
            /*PlayableAdsTool.LocalizedText.OnDestroy end.*/

            /*PlayableAdsTool.LocalizedText.Localize start.*/
            Localize: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizedText#Localize", this ); }

                this.GetComponent(UnityEngine.UI.Text).text = (this.BeforeText || "") + (PlayableAdsTool.LocalizationManager.Localize(this.LocalizationKey) || "") + (this.AfterText || "");
            },
            /*PlayableAdsTool.LocalizedText.Localize end.*/


        }
    });
    /*PlayableAdsTool.LocalizedText end.*/

    /*PlayableAdsTool.LocalizedTextTMP start.*/
    Bridge.define("PlayableAdsTool.LocalizedTextTMP", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            LocalizationKey: null
        },
        methods: {
            /*PlayableAdsTool.LocalizedTextTMP.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizedTextTMP#Start", this ); }

                this.Localize();
                PlayableAdsTool.LocalizationManager.addOnLocalizationChanged(Bridge.fn.cacheBind(this, this.Localize));
            },
            /*PlayableAdsTool.LocalizedTextTMP.Start end.*/

            /*PlayableAdsTool.LocalizedTextTMP.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizedTextTMP#OnDestroy", this ); }

                PlayableAdsTool.LocalizationManager.removeOnLocalizationChanged(Bridge.fn.cacheBind(this, this.Localize));
            },
            /*PlayableAdsTool.LocalizedTextTMP.OnDestroy end.*/

            /*PlayableAdsTool.LocalizedTextTMP.Localize start.*/
            Localize: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizedTextTMP#Localize", this ); }

                this.GetComponent(TMPro.TextMeshProUGUI).font = PlayableAdsTool.SingletonBehaviour$1(PlayableAdsTool.LocalizationController).Instance.CurrentFont;
                this.GetComponent(TMPro.TextMeshProUGUI).text = PlayableAdsTool.LocalizationManager.Localize(this.LocalizationKey);
            },
            /*PlayableAdsTool.LocalizedTextTMP.Localize end.*/


        }
    });
    /*PlayableAdsTool.LocalizedTextTMP end.*/

    /*PlayableAdsTool.ObjectPoolManager start.*/
    Bridge.define("PlayableAdsTool.ObjectPoolManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                ObjectPools: null,
                _gameobjectsEmpty: null,
                _particleSystemEmpty: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.ObjectPoolManager#init", this ); }

                    this.ObjectPools = new (System.Collections.Generic.List$1(PlayableAdsTool.PooledObjectInfo)).ctor();
                }
            },
            methods: {
                /*PlayableAdsTool.ObjectPoolManager.SpawnObjects$1:static start.*/
                SpawnObjects$1: function (objectToSpawn, spawnPosition, spawnRotation) {
if ( TRACE ) { TRACE( "PlayableAdsTool.ObjectPoolManager#SpawnObjects$1", this ); }

                    var $t;
                    //Check if there is a pool of spawned object
                    var pool = PlayableAdsTool.ObjectPoolManager.ObjectPools.Find(function (p) {
                        return Bridge.referenceEquals(p.LookupString, objectToSpawn.name);
                    });

                    if (pool == null) {
                        //If there is no pool, create one
                        pool = ($t = new PlayableAdsTool.PooledObjectInfo(), $t.LookupString = objectToSpawn.name, $t);
                        PlayableAdsTool.ObjectPoolManager.ObjectPools.add(pool);
                    }

                    var spawnableObj = System.Linq.Enumerable.from(pool.InactiveObjects, UnityEngine.GameObject).firstOrDefault(null, null);

                    if (UnityEngine.GameObject.op_Equality(spawnableObj, null)) {
                        //If there is no inactive objects, spawn new one
                        spawnableObj = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, objectToSpawn, spawnPosition, spawnRotation);
                    } else {
                        //If there is an inactive object, reactive it
                        spawnableObj.transform.position = spawnPosition.$clone();
                        spawnableObj.transform.rotation = spawnRotation.$clone();
                        pool.InactiveObjects.remove(spawnableObj);
                        spawnableObj.SetActive(true);
                    }

                    return spawnableObj;
                },
                /*PlayableAdsTool.ObjectPoolManager.SpawnObjects$1:static end.*/

                /*PlayableAdsTool.ObjectPoolManager.SpawnObjects:static start.*/
                SpawnObjects: function (objectToSpawn, parentTransform) {
if ( TRACE ) { TRACE( "PlayableAdsTool.ObjectPoolManager#SpawnObjects", this ); }

                    var $t;
                    //Check if there is a pool of spawned object
                    var pool = PlayableAdsTool.ObjectPoolManager.ObjectPools.Find(function (p) {
                        return Bridge.referenceEquals(p.LookupString, objectToSpawn.name);
                    });

                    if (pool == null) {
                        //If there is no pool, create one
                        pool = ($t = new PlayableAdsTool.PooledObjectInfo(), $t.LookupString = objectToSpawn.name, $t);
                        PlayableAdsTool.ObjectPoolManager.ObjectPools.add(pool);
                    }

                    var spawnableObj = System.Linq.Enumerable.from(pool.InactiveObjects, UnityEngine.GameObject).firstOrDefault(null, null);

                    if (UnityEngine.GameObject.op_Equality(spawnableObj, null)) {
                        //If there is no inactive objects, spawn new one
                        spawnableObj = UnityEngine.Object.Instantiate(UnityEngine.GameObject, objectToSpawn, parentTransform);
                        spawnableObj.transform.SetParent(parentTransform);
                    } else {
                        //If there is an inactive object, reactive it
                        pool.InactiveObjects.remove(spawnableObj);
                        spawnableObj.SetActive(true);
                    }

                    return spawnableObj;
                },
                /*PlayableAdsTool.ObjectPoolManager.SpawnObjects:static end.*/

                /*PlayableAdsTool.ObjectPoolManager.ReturnObjectToPool:static start.*/
                ReturnObjectToPool: function (obj) {
if ( TRACE ) { TRACE( "PlayableAdsTool.ObjectPoolManager#ReturnObjectToPool", this ); }

                    var goName = obj.name.substr(0, ((obj.name.length - 7) | 0)); //Cut the (Clone) part from name

                    var pool = PlayableAdsTool.ObjectPoolManager.ObjectPools.Find(function (p) {
                        return Bridge.referenceEquals(p.LookupString, goName);
                    });

                    if (pool == null) {
                        //Debug.LogWarning("There is something wrong about pool! " + obj.name);
                    } else {
                        obj.SetActive(false);
                        obj.transform.parent = null;
                        pool.InactiveObjects.add(obj);
                    }
                },
                /*PlayableAdsTool.ObjectPoolManager.ReturnObjectToPool:static end.*/

                /*PlayableAdsTool.ObjectPoolManager.ReturnObjectToPool$1:static start.*/
                ReturnObjectToPool$1: function (obj, delay) {
if ( TRACE ) { TRACE( "PlayableAdsTool.ObjectPoolManager#ReturnObjectToPool$1", this ); }

                    DG.Tweening.TweenSettingsExtensions.SetLink$1(DG.Tweening.Tween, DG.Tweening.DOVirtual.DelayedCall(delay, function () {
                        PlayableAdsTool.ObjectPoolManager.ReturnObjectToPool(obj);
                    }), obj, DG.Tweening.LinkBehaviour.KillOnDisable);
                },
                /*PlayableAdsTool.ObjectPoolManager.ReturnObjectToPool$1:static end.*/


            }
        },
        fields: {
            _objectPoolEmptyHolder: null,
            _poolContainers: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.ObjectPoolManager#init", this ); }

                this._poolContainers = new (System.Collections.Generic.List$1(PlayableAdsTool.PoolContainer)).ctor();
            }
        },
        methods: {
            /*PlayableAdsTool.ObjectPoolManager.CreateBeginningPool start.*/
            CreateBeginningPool: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.ObjectPoolManager#CreateBeginningPool", this ); }

                var $t, $t1;
                var tempPoolList = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                $t = Bridge.getEnumerator(this._poolContainers);
                try {
                    while ($t.moveNext()) {
                        var container = $t.Current.$clone();
                        for (var i = 0; i < container.Count; i = (i + 1) | 0) {
                            var obj = PlayableAdsTool.ObjectPoolManager.SpawnObjects$1(container.Prefab, pc.Vec3.ZERO.clone(), pc.Quat.IDENTITY.clone());
                            tempPoolList.add(obj);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                $t1 = Bridge.getEnumerator(tempPoolList);
                try {
                    while ($t1.moveNext()) {
                        var item = $t1.Current;
                        PlayableAdsTool.ObjectPoolManager.ReturnObjectToPool(item);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
            },
            /*PlayableAdsTool.ObjectPoolManager.CreateBeginningPool end.*/

            /*PlayableAdsTool.ObjectPoolManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.ObjectPoolManager#Awake", this ); }

                this.CreateBeginningPool();
            },
            /*PlayableAdsTool.ObjectPoolManager.Awake end.*/


        }
    });
    /*PlayableAdsTool.ObjectPoolManager end.*/

    /*PlayableAdsTool.PoolContainer start.*/
    Bridge.define("PlayableAdsTool.PoolContainer", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.PoolContainer#getDefaultValue", this ); }
 return new PlayableAdsTool.PoolContainer(); }
            }
        },
        fields: {
            Prefab: null,
            Count: 0
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.PoolContainer#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.PoolContainer#getHashCode", this ); }

                var h = Bridge.addHash([5474371686, this.Prefab, this.Count]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "PlayableAdsTool.PoolContainer#equals", this ); }

                if (!Bridge.is(o, PlayableAdsTool.PoolContainer)) {
                    return false;
                }
                return Bridge.equals(this.Prefab, o.Prefab) && Bridge.equals(this.Count, o.Count);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "PlayableAdsTool.PoolContainer#$clone", this ); }

                var s = to || new PlayableAdsTool.PoolContainer();
                s.Prefab = this.Prefab;
                s.Count = this.Count;
                return s;
            }
        }
    });
    /*PlayableAdsTool.PoolContainer end.*/

    /*PlayableAdsTool.PooledObjectInfo start.*/
    Bridge.define("PlayableAdsTool.PooledObjectInfo", {
        fields: {
            LookupString: null,
            InactiveObjects: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.PooledObjectInfo#init", this ); }

                this.InactiveObjects = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
            }
        }
    });
    /*PlayableAdsTool.PooledObjectInfo end.*/

    /*PlayableAdsTool.Sheet start.*/
    Bridge.define("PlayableAdsTool.Sheet", {
        fields: {
            Name: null,
            Id: System.Int64(0),
            TextAsset: null
        }
    });
    /*PlayableAdsTool.Sheet end.*/

    /*PlayableAdsTool.SoundTypeListPair start.*/
    Bridge.define("PlayableAdsTool.SoundTypeListPair", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.SoundTypeListPair#getDefaultValue", this ); }
 return new PlayableAdsTool.SoundTypeListPair(); }
            }
        },
        fields: {
            type: 0,
            clips: null
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.SoundTypeListPair#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.SoundTypeListPair#getHashCode", this ); }

                var h = Bridge.addHash([7444455682, this.type, this.clips]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "PlayableAdsTool.SoundTypeListPair#equals", this ); }

                if (!Bridge.is(o, PlayableAdsTool.SoundTypeListPair)) {
                    return false;
                }
                return Bridge.equals(this.type, o.type) && Bridge.equals(this.clips, o.clips);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "PlayableAdsTool.SoundTypeListPair#$clone", this ); }

                var s = to || new PlayableAdsTool.SoundTypeListPair();
                s.type = this.type;
                s.clips = this.clips;
                return s;
            }
        }
    });
    /*PlayableAdsTool.SoundTypeListPair end.*/

    /*ScreenOrientation start.*/
    Bridge.define("ScreenOrientation", {
        $kind: 6,
        statics: {
            fields: {
                Vertical: 0,
                Horizontal: 1
            }
        }
    });
    /*ScreenOrientation end.*/

    /*SoundTypes start.*/
    Bridge.define("SoundTypes", {
        $kind: 6,
        statics: {
            fields: {
                Correct: 0,
                Wrong: 1
            }
        }
    });
    /*SoundTypes end.*/

    /*TutorialAnimationHelper start.*/
    Bridge.define("TutorialAnimationHelper", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _lineRenderer: null,
            LineRendererPoints: null
        },
        methods: {
            /*TutorialAnimationHelper.AddToLineRenderer start.*/
            AddToLineRenderer: function (index) {
if ( TRACE ) { TRACE( "TutorialAnimationHelper#AddToLineRenderer", this ); }

                var $t;
                if (index >= 0 && index < this.LineRendererPoints.Count) {
                    ($t = this._lineRenderer).positionCount = ($t.positionCount + 1) | 0; // Pozisyon sayısını artır

                    // İlgili index'teki noktayı LineRenderer'a ekle
                    this._lineRenderer.SetPosition(((this._lineRenderer.positionCount - 1) | 0), this.LineRendererPoints.getItem(index).position);
                }
            },
            /*TutorialAnimationHelper.AddToLineRenderer end.*/

            /*TutorialAnimationHelper.ClearLineRenderer start.*/
            ClearLineRenderer: function () {
if ( TRACE ) { TRACE( "TutorialAnimationHelper#ClearLineRenderer", this ); }

                this._lineRenderer.positionCount = 0;
            },
            /*TutorialAnimationHelper.ClearLineRenderer end.*/


        }
    });
    /*TutorialAnimationHelper end.*/

    /*UIData start.*/
    Bridge.define("UIData", {
        fields: {
            AnchoredPosition: null,
            SizeDelta: null,
            Rotation: null,
            LocalScale: null,
            AnchorMin: null,
            AnchorMax: null,
            Pivot: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UIData#init", this ); }

                this.AnchoredPosition = new UnityEngine.Vector2();
                this.SizeDelta = new UnityEngine.Vector2();
                this.Rotation = new UnityEngine.Quaternion();
                this.LocalScale = new UnityEngine.Vector3();
                this.AnchorMin = new UnityEngine.Vector2();
                this.AnchorMax = new UnityEngine.Vector2();
                this.Pivot = new UnityEngine.Vector2();
            }
        }
    });
    /*UIData end.*/

    /*UIElement start.*/
    Bridge.define("UIElement", {
        fields: {
            _rectTransformName: null,
            _rectTransform: null
        }
    });
    /*UIElement end.*/

    /*UIManager start.*/
    Bridge.define("UIManager", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*UIManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "UIManager#Start", this ); }


            },
            /*UIManager.Start end.*/

            /*UIManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "UIManager#Update", this ); }


            },
            /*UIManager.Update end.*/


        }
    });
    /*UIManager end.*/

    /*_InGame.Scripts.Managers.DrawingManager start.*/
    Bridge.define("_InGame.Scripts.Managers.DrawingManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.DrawingManager#inherits", this ); }
 return [PlayableAdsTool.SingletonBehaviour$1(_InGame.Scripts.Managers.DrawingManager)]; },
        fields: {
            LevelDrawingList: null,
            CurrentDrawingData: null,
            _camera: null,
            ClickStarted: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.DrawingManager#init", this ); }

                this.LevelDrawingList = new (System.Collections.Generic.List$1(_InGame.Scripts.Managers.DrawingData)).ctor();
                this.ClickStarted = false;
            }
        },
        methods: {
            /*_InGame.Scripts.Managers.DrawingManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.DrawingManager#Start", this ); }

                this._camera = UnityEngine.Camera.main; // performans icin on bellege aliyoruz
            },
            /*_InGame.Scripts.Managers.DrawingManager.Start end.*/

            /*_InGame.Scripts.Managers.DrawingManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.DrawingManager#Update", this ); }

                if (!this.CanDraw()) {
                    return;
                }

                this.ClickOnScreen();
                this.DragOnScreen();
                this.UnClickOnScreen();
            },
            /*_InGame.Scripts.Managers.DrawingManager.Update end.*/

            /*_InGame.Scripts.Managers.DrawingManager.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.DrawingManager#OnEnable", this ); }

                EventManager.OnCompleteDrawing = Bridge.fn.combine(EventManager.OnCompleteDrawing, Bridge.fn.cacheBind(this, this.OnCompleteDrawing));
                EventManager.OnLoadDrawing = Bridge.fn.combine(EventManager.OnLoadDrawing, Bridge.fn.cacheBind(this, this.OnLoadDrawing));
            },
            /*_InGame.Scripts.Managers.DrawingManager.OnEnable end.*/

            /*_InGame.Scripts.Managers.DrawingManager.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.DrawingManager#OnDisable", this ); }

                EventManager.OnCompleteDrawing = Bridge.fn.remove(EventManager.OnCompleteDrawing, Bridge.fn.cacheBind(this, this.OnCompleteDrawing));
                EventManager.OnLoadDrawing = Bridge.fn.remove(EventManager.OnLoadDrawing, Bridge.fn.cacheBind(this, this.OnLoadDrawing));
            },
            /*_InGame.Scripts.Managers.DrawingManager.OnDisable end.*/

            /*_InGame.Scripts.Managers.DrawingManager.OnCompleteDrawing start.*/
            OnCompleteDrawing: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.DrawingManager#OnCompleteDrawing", this ); }

                this.CurrentDrawingData.controller.UnClickAction(); //Clear current controller points
                this.CurrentDrawingData.Object.SetActive(false);
                this.CurrentDrawingData = null;
                this.LevelDrawingList.removeAt(0); //Remove current data from list

                if (this.LevelDrawingList.Count > 0) {
                    this.CurrentDrawingData = this.LevelDrawingList.getItem(0);
                    !Bridge.staticEquals(EventManager.OnLoadDrawing, null) ? EventManager.OnLoadDrawing() : null;
                } else {
                    !Bridge.staticEquals(EventManager.OnGameStateChange, null) ? EventManager.OnGameStateChange(GameStateType.GameEnd) : null;
                }
            },
            /*_InGame.Scripts.Managers.DrawingManager.OnCompleteDrawing end.*/

            /*_InGame.Scripts.Managers.DrawingManager.OnLoadDrawing start.*/
            OnLoadDrawing: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.DrawingManager#OnLoadDrawing", this ); }

                var $t;
                //Close all drawing
                $t = Bridge.getEnumerator(this.LevelDrawingList);
                try {
                    while ($t.moveNext()) {
                        var drawingData = $t.Current;
                        drawingData.Object.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                //activate current drawing
                this.CurrentDrawingData = this.LevelDrawingList.getItem(0);
                this.CurrentDrawingData.Object.SetActive(true);
            },
            /*_InGame.Scripts.Managers.DrawingManager.OnLoadDrawing end.*/

            /*_InGame.Scripts.Managers.DrawingManager.ClickOnScreen start.*/
            ClickOnScreen: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.DrawingManager#ClickOnScreen", this ); }

                if (!UnityEngine.Input.GetMouseButtonDown(0)) {
                    return;
                }
                this.ClickStarted = true;
                this.CurrentDrawingData != null ? this.CurrentDrawingData.controller.ClickAction(UnityEngine.Vector2.FromVector3(this.GetWorldPosition())) : null;
            },
            /*_InGame.Scripts.Managers.DrawingManager.ClickOnScreen end.*/

            /*_InGame.Scripts.Managers.DrawingManager.DragOnScreen start.*/
            DragOnScreen: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.DrawingManager#DragOnScreen", this ); }

                if (!UnityEngine.Input.GetMouseButton(0)) {
                    return;
                }
                if (!this.ClickStarted) {
                    return;
                }

                this.CurrentDrawingData != null ? this.CurrentDrawingData.controller.DragAction(UnityEngine.Vector2.FromVector3(this.GetWorldPosition())) : null;
            },
            /*_InGame.Scripts.Managers.DrawingManager.DragOnScreen end.*/

            /*_InGame.Scripts.Managers.DrawingManager.UnClickOnScreen start.*/
            UnClickOnScreen: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.DrawingManager#UnClickOnScreen", this ); }

                if (!UnityEngine.Input.GetMouseButtonUp(0)) {
                    return;
                }
                this.ClickStarted = false;
                this.CurrentDrawingData != null ? this.CurrentDrawingData.controller.UnClickAction() : null;

            },
            /*_InGame.Scripts.Managers.DrawingManager.UnClickOnScreen end.*/

            /*_InGame.Scripts.Managers.DrawingManager.CanDraw start.*/
            CanDraw: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.DrawingManager#CanDraw", this ); }

                if (this.CurrentDrawingData == null) {
                    return false;
                }
                if (PlayableAdsTool.SingletonBehaviour$1(GameStateManager).Instance.CurrentStateType === GameStateType.GameEnd) {
                    return false;
                }
                if (PlayableAdsTool.SingletonBehaviour$1(PlayableAdsTool.EndCardController).Instance.IsEndCardOpened) {
                    return false;
                }
                return true;
            },
            /*_InGame.Scripts.Managers.DrawingManager.CanDraw end.*/

            /*_InGame.Scripts.Managers.DrawingManager.GetDrawingData start.*/
            GetDrawingData: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.DrawingManager#GetDrawingData", this ); }

                return this.LevelDrawingList.getItem(0);
            },
            /*_InGame.Scripts.Managers.DrawingManager.GetDrawingData end.*/

            /*_InGame.Scripts.Managers.DrawingManager.GetDrawingCompletePercent start.*/
            GetDrawingCompletePercent: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.DrawingManager#GetDrawingCompletePercent", this ); }

                var $t;
                var AllPointCount = this.CurrentDrawingData.controller.AllDrawPoints.Count;
                var SelectedPointCount = 0;

                $t = Bridge.getEnumerator(this.CurrentDrawingData.controller.AllDrawPoints);
                try {
                    while ($t.moveNext()) {
                        var point = $t.Current;
                        if (point.CanPointSelectable()) {
                            continue;
                        }
                        SelectedPointCount = (SelectedPointCount + 1) | 0;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return SelectedPointCount / AllPointCount;
            },
            /*_InGame.Scripts.Managers.DrawingManager.GetDrawingCompletePercent end.*/

            /*_InGame.Scripts.Managers.DrawingManager.GetWorldPosition start.*/
            GetWorldPosition: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.DrawingManager#GetWorldPosition", this ); }

                var touchPosition = UnityEngine.Input.mousePosition.$clone();
                var worldPos = this._camera.ScreenToWorldPoint(new pc.Vec3( touchPosition.x, touchPosition.y, this._camera.nearClipPlane ));
                return new pc.Vec3( worldPos.x, worldPos.y, 0.0 );
            },
            /*_InGame.Scripts.Managers.DrawingManager.GetWorldPosition end.*/


        }
    });
    /*_InGame.Scripts.Managers.DrawingManager end.*/

    /*_InGame.Scripts.Managers.GameManager start.*/
    Bridge.define("_InGame.Scripts.Managers.GameManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.GameManager#inherits", this ); }
 return [PlayableAdsTool.SingletonBehaviour$1(_InGame.Scripts.Managers.GameManager)]; },
        props: {
            GameStateManager: {
                get: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.GameManager#GameStateManager#get", this ); }

                    return this.GetComponent(GameStateManager);
                }
            }
        },
        methods: {
            /*_InGame.Scripts.Managers.GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.GameManager#Start", this ); }

                UnityEngine.Application.targetFrameRate = 60;
            },
            /*_InGame.Scripts.Managers.GameManager.Start end.*/


        }
    });
    /*_InGame.Scripts.Managers.GameManager end.*/

    /*_InGame.Scripts.Managers.TutorialManager start.*/
    Bridge.define("_InGame.Scripts.Managers.TutorialManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.TutorialManager#inherits", this ); }
 return [PlayableAdsTool.SingletonBehaviour$1(_InGame.Scripts.Managers.TutorialManager)]; },
        fields: {
            Tutorials: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.TutorialManager#init", this ); }

                this.Tutorials = new (System.Collections.Generic.List$1(_InGame.Scripts.Managers.TutorialVariables)).ctor();
            }
        },
        methods: {
            /*_InGame.Scripts.Managers.TutorialManager.GetSelectedTutorial start.*/
            GetSelectedTutorial: function (tutorialType) {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.TutorialManager#GetSelectedTutorial", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.Tutorials);
                try {
                    while ($t.moveNext()) {
                        var tutorial = $t.Current.$clone();
                        if (tutorial._Type === tutorialType) {
                            return tutorial.$clone();
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return new _InGame.Scripts.Managers.TutorialVariables();
            },
            /*_InGame.Scripts.Managers.TutorialManager.GetSelectedTutorial end.*/

            /*_InGame.Scripts.Managers.TutorialManager.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.TutorialManager#OnEnable", this ); }

                EventManager.OnShowTutorial = Bridge.fn.combine(EventManager.OnShowTutorial, Bridge.fn.cacheBind(this, this.OnShowTutorial));
                EventManager.OnCloseTutorial = Bridge.fn.combine(EventManager.OnCloseTutorial, Bridge.fn.cacheBind(this, this.OnCloseTutorial));
            },
            /*_InGame.Scripts.Managers.TutorialManager.OnEnable end.*/

            /*_InGame.Scripts.Managers.TutorialManager.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.TutorialManager#OnDisable", this ); }

                EventManager.OnShowTutorial = Bridge.fn.remove(EventManager.OnShowTutorial, Bridge.fn.cacheBind(this, this.OnShowTutorial));
                EventManager.OnCloseTutorial = Bridge.fn.remove(EventManager.OnCloseTutorial, Bridge.fn.cacheBind(this, this.OnCloseTutorial));
            },
            /*_InGame.Scripts.Managers.TutorialManager.OnDisable end.*/

            /*_InGame.Scripts.Managers.TutorialManager.OnShowTutorial start.*/
            OnShowTutorial: function (type) {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.TutorialManager#OnShowTutorial", this ); }

                this.GetSelectedTutorial(type).Object.SetActive(true);
            },
            /*_InGame.Scripts.Managers.TutorialManager.OnShowTutorial end.*/

            /*_InGame.Scripts.Managers.TutorialManager.OnCloseTutorial start.*/
            OnCloseTutorial: function (type) {
if ( TRACE ) { TRACE( "_InGame.Scripts.Managers.TutorialManager#OnCloseTutorial", this ); }

                this.GetSelectedTutorial(type).Object.SetActive(false);
            },
            /*_InGame.Scripts.Managers.TutorialManager.OnCloseTutorial end.*/


        }
    });
    /*_InGame.Scripts.Managers.TutorialManager end.*/

    /*_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize start.*/
    Bridge.define("_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize", {
        inherits: [GameBaseState],
        ctors: {
            ctor: function (_StateType) {
if ( TRACE ) { TRACE( "_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize#ctor", this ); }

                this.$initialize();
                GameBaseState.ctor.call(this);
                this._GameStateType = _StateType;
            }
        },
        methods: {
            /*_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize.EnterState start.*/
            EnterState: function (stateManager) {
if ( TRACE ) { TRACE( "_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize#EnterState", this ); }

                GameBaseState.prototype.EnterState.call(this, stateManager);

                !Bridge.staticEquals(EventManager.OnGameStateChange, null) ? EventManager.OnGameStateChange(GameStateType.TutorialShow) : null;
            },
            /*_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize.EnterState end.*/

            /*_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize.ExitState start.*/
            ExitState: function (stateManager) {
if ( TRACE ) { TRACE( "_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize#ExitState", this ); }

                GameBaseState.prototype.ExitState.call(this, stateManager);
            },
            /*_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize.ExitState end.*/

            /*_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize.UpdateState start.*/
            UpdateState: function (stateManager) {
if ( TRACE ) { TRACE( "_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize#UpdateState", this ); }
 },
            /*_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize.UpdateState end.*/


        }
    });
    /*_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize end.*/

    /*_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow start.*/
    Bridge.define("_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow", {
        inherits: [GameBaseState],
        ctors: {
            ctor: function (_StateType) {
if ( TRACE ) { TRACE( "_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow#ctor", this ); }

                this.$initialize();
                GameBaseState.ctor.call(this);
                this._GameStateType = _StateType;
            }
        },
        methods: {
            /*_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow.EnterState start.*/
            EnterState: function (stateManager) {
if ( TRACE ) { TRACE( "_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow#EnterState", this ); }

                GameBaseState.prototype.EnterState.call(this, stateManager);
                !Bridge.staticEquals(EventManager.OnShowTutorial, null) ? EventManager.OnShowTutorial(_InGame.Scripts.Managers.TutorialType.PotionBottle) : null;
            },
            /*_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow.EnterState end.*/

            /*_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow.ExitState start.*/
            ExitState: function (stateManager) {
if ( TRACE ) { TRACE( "_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow#ExitState", this ); }

                GameBaseState.prototype.ExitState.call(this, stateManager);
                !Bridge.staticEquals(EventManager.OnCloseTutorial, null) ? EventManager.OnCloseTutorial(_InGame.Scripts.Managers.TutorialType.PotionBottle) : null;
                !Bridge.staticEquals(EventManager.OnLoadDrawing, null) ? EventManager.OnLoadDrawing() : null;
            },
            /*_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow.ExitState end.*/

            /*_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow.UpdateState start.*/
            UpdateState: function (stateManager) {
if ( TRACE ) { TRACE( "_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow#UpdateState", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    !Bridge.staticEquals(EventManager.OnGameStateChange, null) ? EventManager.OnGameStateChange(GameStateType.InGame) : null;
                }
            },
            /*_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow.UpdateState end.*/


        }
    });
    /*_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow end.*/

    /*_InGame.Scripts.Utilities.PrefabHolder start.*/
    Bridge.define("_InGame.Scripts.Utilities.PrefabHolder", {
        inherits: function () {
if ( TRACE ) { TRACE( "_InGame.Scripts.Utilities.PrefabHolder#inherits", this ); }
 return [PlayableAdsTool.SingletonBehaviour$1(_InGame.Scripts.Utilities.PrefabHolder)]; },
        fields: {
            DrawPointPrefab: null
        }
    });
    /*_InGame.Scripts.Utilities.PrefabHolder end.*/

    /*GameStateGameEnd start.*/
    Bridge.define("GameStateGameEnd", {
        inherits: [GameBaseState],
        ctors: {
            ctor: function (_StateType) {
if ( TRACE ) { TRACE( "GameStateGameEnd#ctor", this ); }

                this.$initialize();
                GameBaseState.ctor.call(this);
                this._GameStateType = _StateType;
            }
        },
        methods: {
            /*GameStateGameEnd.EnterState start.*/
            EnterState: function (stateManager) {
if ( TRACE ) { TRACE( "GameStateGameEnd#EnterState", this ); }

                GameBaseState.prototype.EnterState.call(this, stateManager);

                PlayableAdsTool.SingletonBehaviour$1(PlayableAdsTool.EndCardController).Instance.SendStore(true, "", 1.0);
                !Bridge.staticEquals(EventManager.OnShowTutorial, null) ? EventManager.OnShowTutorial(_InGame.Scripts.Managers.TutorialType.Topuklu) : null;
            },
            /*GameStateGameEnd.EnterState end.*/

            /*GameStateGameEnd.ExitState start.*/
            ExitState: function (stateManager) {
if ( TRACE ) { TRACE( "GameStateGameEnd#ExitState", this ); }

                GameBaseState.prototype.ExitState.call(this, stateManager);
            },
            /*GameStateGameEnd.ExitState end.*/

            /*GameStateGameEnd.UpdateState start.*/
            UpdateState: function (stateManager) {
if ( TRACE ) { TRACE( "GameStateGameEnd#UpdateState", this ); }
 },
            /*GameStateGameEnd.UpdateState end.*/


        }
    });
    /*GameStateGameEnd end.*/

    /*GameStateInGame start.*/
    Bridge.define("GameStateInGame", {
        inherits: [GameBaseState],
        ctors: {
            ctor: function (_StateType) {
if ( TRACE ) { TRACE( "GameStateInGame#ctor", this ); }

                this.$initialize();
                GameBaseState.ctor.call(this);
                this._GameStateType = _StateType;
            }
        },
        methods: {
            /*GameStateInGame.EnterState start.*/
            EnterState: function (stateManager) {
if ( TRACE ) { TRACE( "GameStateInGame#EnterState", this ); }

                GameBaseState.prototype.EnterState.call(this, stateManager);
            },
            /*GameStateInGame.EnterState end.*/

            /*GameStateInGame.ExitState start.*/
            ExitState: function (stateManager) {
if ( TRACE ) { TRACE( "GameStateInGame#ExitState", this ); }

                GameBaseState.prototype.ExitState.call(this, stateManager);
            },
            /*GameStateInGame.ExitState end.*/

            /*GameStateInGame.UpdateState start.*/
            UpdateState: function (stateManager) {
if ( TRACE ) { TRACE( "GameStateInGame#UpdateState", this ); }
 },
            /*GameStateInGame.UpdateState end.*/


        }
    });
    /*GameStateInGame end.*/

    /*GameStateManager start.*/
    Bridge.define("GameStateManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "GameStateManager#inherits", this ); }
 return [PlayableAdsTool.SingletonBehaviour$1(GameStateManager)]; },
        fields: {
            currentState: null,
            currentStateType: 0,
            _states: null
        },
        props: {
            Base: {
                get: function () {
if ( TRACE ) { TRACE( "GameStateManager#Base#get", this ); }

                    return this.GetComponent(_InGame.Scripts.Managers.GameManager);
                }
            },
            CurrentState: {
                get: function () {
if ( TRACE ) { TRACE( "GameStateManager#CurrentState#get", this ); }

                    return this.currentState;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "GameStateManager#CurrentState#set", this ); }

                    this.currentState = value;
                }
            },
            CurrentStateType: {
                get: function () {
if ( TRACE ) { TRACE( "GameStateManager#CurrentStateType#get", this ); }

                    this.currentStateType = this.CurrentState.GetStateType();
                    return this.currentStateType;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "GameStateManager#CurrentStateType#set", this ); }

                    this.currentStateType = value;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameStateManager#init", this ); }

                this._states = new (System.Collections.Generic.Dictionary$2(GameStateType,GameBaseState)).ctor();
            }
        },
        methods: {
            /*GameStateManager.Awake$1 start.*/
            Awake$1: function () {
if ( TRACE ) { TRACE( "GameStateManager#Awake$1", this ); }

                //Set Game State type and its state
                this.AddState(GameStateType.GameInitialize, new _InGame.Scripts.StateMachines.GameState.GameStateGameInitialize(GameStateType.GameInitialize));
                this.AddState(GameStateType.TutorialShow, new _InGame.Scripts.StateMachines.GameState.GameStateTutorialShow(GameStateType.TutorialShow));
                this.AddState(GameStateType.InGame, new GameStateInGame(GameStateType.InGame));
                this.AddState(GameStateType.GameEnd, new GameStateGameEnd(GameStateType.GameEnd));
            },
            /*GameStateManager.Awake$1 end.*/

            /*GameStateManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameStateManager#Start", this ); }

                this.SwitchState(GameStateType.GameInitialize, true);
            },
            /*GameStateManager.Start end.*/

            /*GameStateManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameStateManager#Update", this ); }

                this.CurrentState.UpdateState(this);
            },
            /*GameStateManager.Update end.*/

            /*GameStateManager.SwitchState start.*/
            SwitchState: function (stateType, forceSwitch) {
if ( TRACE ) { TRACE( "GameStateManager#SwitchState", this ); }

                var $t;
                if (forceSwitch === void 0) { forceSwitch = false; }
                if (this.currentStateType === stateType && !forceSwitch) {
                    return;
                } // Force switch state

                if (this._states.containsKey(stateType)) {
                    ($t = this.CurrentState) != null ? $t.ExitState(this) : null; //Make exit progress for previous state

                    this.CurrentState = this._states.getItem(stateType); //Switch state
                    this.CurrentState.EnterState(this); //Make enter progress for new state
                    this.UpdateCurrentStateType(); //Update current state type
                } else {
                    UnityEngine.Debug.LogError$2("Invalid state: " + System.Enum.toString(GameStateType, stateType));
                }
            },
            /*GameStateManager.SwitchState end.*/

            /*GameStateManager.AddState start.*/
            AddState: function (stateName, state) {
if ( TRACE ) { TRACE( "GameStateManager#AddState", this ); }

                this._states.setItem(stateName, state);
            },
            /*GameStateManager.AddState end.*/

            /*GameStateManager.ExitSpecificState start.*/
            ExitSpecificState: function (enemyStateType) {
if ( TRACE ) { TRACE( "GameStateManager#ExitSpecificState", this ); }

                this._states.getItem(enemyStateType).ExitState(this);
            },
            /*GameStateManager.ExitSpecificState end.*/

            /*GameStateManager.ExitFromAllStates start.*/
            ExitFromAllStates: function () {
if ( TRACE ) { TRACE( "GameStateManager#ExitFromAllStates", this ); }

                for (var i = 0; i < this._states.Count; i = (i + 1) | 0) {
                    this.ExitSpecificState(i);
                }
            },
            /*GameStateManager.ExitFromAllStates end.*/

            /*GameStateManager.UpdateCurrentStateType start.*/
            UpdateCurrentStateType: function () {
if ( TRACE ) { TRACE( "GameStateManager#UpdateCurrentStateType", this ); }

                this.CurrentStateType = this.CurrentState.GetStateType();
            },
            /*GameStateManager.UpdateCurrentStateType end.*/

            /*GameStateManager.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "GameStateManager#OnEnable", this ); }

                EventManager.OnGameStateChange = Bridge.fn.combine(EventManager.OnGameStateChange, Bridge.fn.cacheBind(this, this.OnGameStateChange));
            },
            /*GameStateManager.OnEnable end.*/

            /*GameStateManager.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "GameStateManager#OnDisable", this ); }

                EventManager.OnGameStateChange = Bridge.fn.remove(EventManager.OnGameStateChange, Bridge.fn.cacheBind(this, this.OnGameStateChange));
            },
            /*GameStateManager.OnDisable end.*/

            /*GameStateManager.OnGameStateChange start.*/
            OnGameStateChange: function (newState) {
if ( TRACE ) { TRACE( "GameStateManager#OnGameStateChange", this ); }

                this.SwitchState(newState, false);
            },
            /*GameStateManager.OnGameStateChange end.*/


        },
        overloads: {
            "Awake()": "Awake$1"
        }
    });
    /*GameStateManager end.*/

    /*PathCreation.Examples.PathPlacer start.*/
    Bridge.define("PathCreation.Examples.PathPlacer", {
        inherits: [PathCreation.Examples.PathSceneTool],
        statics: {
            fields: {
                minSpacing: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.PathPlacer#init", this ); }

                    this.minSpacing = 0.1;
                }
            }
        },
        fields: {
            prefab: null,
            holder: null,
            spacing: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.PathPlacer#init", this ); }

                this.spacing = 3;
            }
        },
        methods: {
            /*PathCreation.Examples.PathPlacer.Generate start.*/
            Generate: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.PathPlacer#Generate", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.pathCreator, null) && UnityEngine.GameObject.op_Inequality(this.prefab, null) && UnityEngine.GameObject.op_Inequality(this.holder, null)) {
                    this.DestroyObjects();

                    var path = this.pathCreator.path;

                    this.spacing = UnityEngine.Mathf.Max(PathCreation.Examples.PathPlacer.minSpacing, this.spacing);
                    var dst = 0;

                    while (dst < path.length) {
                        var point = path.GetPointAtDistance(dst);
                        var rot = path.GetRotationAtDistance(dst);
                        UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.prefab, point, rot, this.holder.transform);
                        dst += this.spacing;
                    }
                }
            },
            /*PathCreation.Examples.PathPlacer.Generate end.*/

            /*PathCreation.Examples.PathPlacer.DestroyObjects start.*/
            DestroyObjects: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.PathPlacer#DestroyObjects", this ); }

                var numChildren = this.holder.transform.childCount;
                for (var i = (numChildren - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    UnityEngine.Object.DestroyImmediate$1(this.holder.transform.GetChild(i).gameObject, false);
                }
            },
            /*PathCreation.Examples.PathPlacer.DestroyObjects end.*/

            /*PathCreation.Examples.PathPlacer.PathUpdated start.*/
            PathUpdated: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.PathPlacer#PathUpdated", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.pathCreator, null)) {
                    this.Generate();
                }
            },
            /*PathCreation.Examples.PathPlacer.PathUpdated end.*/


        }
    });
    /*PathCreation.Examples.PathPlacer end.*/

    /*PathCreation.Examples.RoadMeshCreator start.*/
    Bridge.define("PathCreation.Examples.RoadMeshCreator", {
        inherits: [PathCreation.Examples.PathSceneTool],
        fields: {
            roadWidth: 0,
            thickness: 0,
            flattenSurface: false,
            roadMaterial: null,
            undersideMaterial: null,
            textureTiling: 0,
            meshHolder: null,
            meshFilter: null,
            meshRenderer: null,
            mesh: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.RoadMeshCreator#init", this ); }

                this.roadWidth = 0.4;
                this.thickness = 0.15;
                this.textureTiling = 1;
            }
        },
        methods: {
            /*PathCreation.Examples.RoadMeshCreator.PathUpdated start.*/
            PathUpdated: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.RoadMeshCreator#PathUpdated", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.pathCreator, null)) {
                    this.AssignMeshComponents();
                    this.AssignMaterials();
                    this.CreateRoadMesh();
                }
            },
            /*PathCreation.Examples.RoadMeshCreator.PathUpdated end.*/

            /*PathCreation.Examples.RoadMeshCreator.CreateRoadMesh start.*/
            CreateRoadMesh: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.RoadMeshCreator#CreateRoadMesh", this ); }

                var $t, $t1;
                var verts = System.Array.init(Bridge.Int.mul(this.path.NumPoints, 8), function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                var uvs = System.Array.init(verts.length, function (){
                    return new UnityEngine.Vector2();
                }, UnityEngine.Vector2);
                var normals = System.Array.init(verts.length, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);

                var numTris = (Bridge.Int.mul(2, (((this.path.NumPoints - 1) | 0))) + ((this.path.isClosedLoop) ? 2 : 0)) | 0;
                var roadTriangles = System.Array.init(Bridge.Int.mul(numTris, 3), 0, System.Int32);
                var underRoadTriangles = System.Array.init(Bridge.Int.mul(numTris, 3), 0, System.Int32);
                var sideOfRoadTriangles = System.Array.init(Bridge.Int.mul(Bridge.Int.mul(numTris, 2), 3), 0, System.Int32);

                var vertIndex = 0;
                var triIndex = 0;

                // Vertices for the top of the road are layed out:
                // 0  1
                // 8  9
                // and so on... So the triangle map 0,8,1 for example, defines a triangle from top left to bottom left to bottom right.
                var triangleMap = System.Array.init([
                    0, 
                    8, 
                    1, 
                    1, 
                    8, 
                    9
                ], System.Int32);
                var sidesTriangleMap = System.Array.init([
                    4, 
                    6, 
                    14, 
                    12, 
                    4, 
                    14, 
                    5, 
                    15, 
                    7, 
                    13, 
                    15, 
                    5
                ], System.Int32);

                var usePathNormals = !(this.path.space === PathCreation.PathSpace.xyz && this.flattenSurface);

                for (var i = 0; i < this.path.NumPoints; i = (i + 1) | 0) {
                    var localUp = (usePathNormals) ? new pc.Vec3().cross( this.path.GetTangent(i), this.path.GetNormal(i) ) : this.path.up.$clone();
                    var localRight = (usePathNormals) ? this.path.GetNormal(i) : new pc.Vec3().cross( localUp, this.path.GetTangent(i) );

                    // Find position to left and right of current path vertex
                    var vertSideA = this.path.GetPoint(i).sub( localRight.$clone().clone().scale( Math.abs(this.roadWidth) ) );
                    var vertSideB = this.path.GetPoint(i).add( localRight.$clone().clone().scale( Math.abs(this.roadWidth) ) );

                    // Add top of road vertices
                    verts[((vertIndex + 0) | 0)] = vertSideA.$clone();
                    verts[((vertIndex + 1) | 0)] = vertSideB.$clone();
                    // Add bottom of road vertices
                    verts[((vertIndex + 2) | 0)] = vertSideA.$clone().sub( localUp.$clone().clone().scale( this.thickness ) );
                    verts[((vertIndex + 3) | 0)] = vertSideB.$clone().sub( localUp.$clone().clone().scale( this.thickness ) );

                    // Duplicate vertices to get flat shading for sides of road
                    verts[((vertIndex + 4) | 0)] = verts[((vertIndex + 0) | 0)].$clone();
                    verts[((vertIndex + 5) | 0)] = verts[((vertIndex + 1) | 0)].$clone();
                    verts[((vertIndex + 6) | 0)] = verts[((vertIndex + 2) | 0)].$clone();
                    verts[((vertIndex + 7) | 0)] = verts[((vertIndex + 3) | 0)].$clone();

                    // Set uv on y axis to path time (0 at start of path, up to 1 at end of path)
                    uvs[((vertIndex + 0) | 0)] = new pc.Vec2( 0, ($t = this.path.times)[i] );
                    uvs[((vertIndex + 1) | 0)] = new pc.Vec2( 1, ($t1 = this.path.times)[i] );

                    // Top of road normals
                    normals[((vertIndex + 0) | 0)] = localUp.$clone();
                    normals[((vertIndex + 1) | 0)] = localUp.$clone();
                    // Bottom of road normals
                    normals[((vertIndex + 2) | 0)] = localUp.$clone().scale( -1 );
                    normals[((vertIndex + 3) | 0)] = localUp.$clone().scale( -1 );
                    // Sides of road normals
                    normals[((vertIndex + 4) | 0)] = localRight.$clone().scale( -1 );
                    normals[((vertIndex + 5) | 0)] = localRight.$clone();
                    normals[((vertIndex + 6) | 0)] = localRight.$clone().scale( -1 );
                    normals[((vertIndex + 7) | 0)] = localRight.$clone();

                    // Set triangle indices
                    if (i < ((this.path.NumPoints - 1) | 0) || this.path.isClosedLoop) {
                        for (var j = 0; j < triangleMap.length; j = (j + 1) | 0) {
                            roadTriangles[((triIndex + j) | 0)] = (((vertIndex + triangleMap[j]) | 0)) % verts.length;
                            // reverse triangle map for under road so that triangles wind the other way and are visible from underneath
                            underRoadTriangles[((triIndex + j) | 0)] = (((((vertIndex + triangleMap[((((triangleMap.length - 1) | 0) - j) | 0)]) | 0) + 2) | 0)) % verts.length;
                        }
                        for (var j1 = 0; j1 < sidesTriangleMap.length; j1 = (j1 + 1) | 0) {
                            sideOfRoadTriangles[((Bridge.Int.mul(triIndex, 2) + j1) | 0)] = (((vertIndex + sidesTriangleMap[j1]) | 0)) % verts.length;
                        }

                    }

                    vertIndex = (vertIndex + 8) | 0;
                    triIndex = (triIndex + 6) | 0;
                }

                this.mesh.Clear();
                this.mesh.vertices = verts;
                this.mesh.uv = uvs;
                this.mesh.normals = normals;
                this.mesh.subMeshCount = 3;
                this.mesh.SetTriangles$2(roadTriangles, 0);
                this.mesh.SetTriangles$2(underRoadTriangles, 1);
                this.mesh.SetTriangles$2(sideOfRoadTriangles, 2);
                this.mesh.RecalculateBounds();
            },
            /*PathCreation.Examples.RoadMeshCreator.CreateRoadMesh end.*/

            /*PathCreation.Examples.RoadMeshCreator.AssignMeshComponents start.*/
            AssignMeshComponents: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.RoadMeshCreator#AssignMeshComponents", this ); }


                if (UnityEngine.GameObject.op_Equality(this.meshHolder, null)) {
                    this.meshHolder = new UnityEngine.GameObject.$ctor2("Road Mesh Holder");
                }

                this.meshHolder.transform.rotation = pc.Quat.IDENTITY.clone();
                this.meshHolder.transform.position = pc.Vec3.ZERO.clone();
                this.meshHolder.transform.localScale = new pc.Vec3( 1, 1, 1 );

                // Ensure mesh renderer and filter components are assigned
                if (!UnityEngine.Object.op_Implicit(this.meshHolder.gameObject.GetComponent(UnityEngine.MeshFilter))) {
                    this.meshHolder.gameObject.AddComponent(UnityEngine.MeshFilter);
                }
                if (!UnityEngine.Object.op_Implicit(this.meshHolder.GetComponent(UnityEngine.MeshRenderer))) {
                    this.meshHolder.gameObject.AddComponent(UnityEngine.MeshRenderer);
                }

                this.meshRenderer = this.meshHolder.GetComponent(UnityEngine.MeshRenderer);
                this.meshFilter = this.meshHolder.GetComponent(UnityEngine.MeshFilter);
                if (this.mesh == null) {
                    this.mesh = new UnityEngine.Mesh.ctor();
                }
                this.meshFilter.sharedMesh = this.mesh;
            },
            /*PathCreation.Examples.RoadMeshCreator.AssignMeshComponents end.*/

            /*PathCreation.Examples.RoadMeshCreator.AssignMaterials start.*/
            AssignMaterials: function () {
if ( TRACE ) { TRACE( "PathCreation.Examples.RoadMeshCreator#AssignMaterials", this ); }

                var $t;
                if (this.roadMaterial != null && this.undersideMaterial != null) {
                    this.meshRenderer.sharedMaterials = System.Array.init([this.roadMaterial, this.undersideMaterial, this.undersideMaterial], UnityEngine.Material);
                    ($t = this.meshRenderer.sharedMaterials)[0].mainTextureScale = UnityEngine.Vector2.FromVector3(new pc.Vec3( 1, this.textureTiling, 0 ));
                }
            },
            /*PathCreation.Examples.RoadMeshCreator.AssignMaterials end.*/


        }
    });
    /*PathCreation.Examples.RoadMeshCreator end.*/

    /*PlayableAdsTool.CameraManager start.*/
    Bridge.define("PlayableAdsTool.CameraManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.CameraManager#inherits", this ); }
 return [PlayableAdsTool.SingletonBehaviour$1(PlayableAdsTool.CameraManager)]; },
        fields: {
            _verticalCam_9_20: null,
            _verticalCam_9_16: null,
            _verticalCam_3_4: null,
            _horizontalCam_20_9: null,
            _horizontalCam_16_9: null,
            _horizontalCam_4_3: null,
            CurrentCamState: 0
        },
        methods: {
            /*PlayableAdsTool.CameraManager.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.CameraManager#OnEnable", this ); }

                EventManager.OnAspectRatioChange = Bridge.fn.combine(EventManager.OnAspectRatioChange, Bridge.fn.cacheBind(this, this.SetCamScreenOrientation));
                EventManager.OnCamChange = Bridge.fn.combine(EventManager.OnCamChange, Bridge.fn.cacheBind(this, this.SetDesiredCam));
            },
            /*PlayableAdsTool.CameraManager.OnEnable end.*/

            /*PlayableAdsTool.CameraManager.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.CameraManager#OnDisable", this ); }

                EventManager.OnAspectRatioChange = Bridge.fn.remove(EventManager.OnAspectRatioChange, Bridge.fn.cacheBind(this, this.SetCamScreenOrientation));
                EventManager.OnCamChange = Bridge.fn.remove(EventManager.OnCamChange, Bridge.fn.cacheBind(this, this.SetDesiredCam));
            },
            /*PlayableAdsTool.CameraManager.OnDisable end.*/

            /*PlayableAdsTool.CameraManager.SetDesiredCam start.*/
            SetDesiredCam: function (camStates) {
if ( TRACE ) { TRACE( "PlayableAdsTool.CameraManager#SetDesiredCam", this ); }

                this.CurrentCamState = camStates;
                this.SetCamScreenOrientation(PlayableAdsTool.SingletonBehaviour$1(PlayableAdsTool.ResponsiveManager).Instance.CurrentAspectRatio);
            },
            /*PlayableAdsTool.CameraManager.SetDesiredCam end.*/

            /*PlayableAdsTool.CameraManager.SetCamScreenOrientation start.*/
            SetCamScreenOrientation: function (aspectRatio) {
if ( TRACE ) { TRACE( "PlayableAdsTool.CameraManager#SetCamScreenOrientation", this ); }

                this.SetAllCam(false);

                switch (aspectRatio) {
                    case AspectRatio.Horizantal_20_9: 
                        if (this._horizontalCam_20_9.length === 0) {
                            return;
                        }
                        this._horizontalCam_20_9[this.CurrentCamState].SetActive(true);
                        break;
                    case AspectRatio.Horizantal_16_9: 
                        this._horizontalCam_16_9[this.CurrentCamState].SetActive(true);
                        break;
                    case AspectRatio.Horizantal_4_3: 
                        this._horizontalCam_4_3[this.CurrentCamState].SetActive(true);
                        break;
                    case AspectRatio.Vertical_9_20: 
                        this._verticalCam_9_20[this.CurrentCamState].SetActive(true);
                        break;
                    case AspectRatio.Vertical_9_16: 
                        this._verticalCam_9_16[this.CurrentCamState].SetActive(true);
                        break;
                    case AspectRatio.Vertical_3_4: 
                        this._verticalCam_3_4[this.CurrentCamState].SetActive(true);
                        break;
                }
            },
            /*PlayableAdsTool.CameraManager.SetCamScreenOrientation end.*/

            /*PlayableAdsTool.CameraManager.SetAllCam start.*/
            SetAllCam: function (value) {
if ( TRACE ) { TRACE( "PlayableAdsTool.CameraManager#SetAllCam", this ); }

                var $t, $t1, $t2, $t3, $t4, $t5;
                $t = Bridge.getEnumerator(this._horizontalCam_20_9);
                try {
                    while ($t.moveNext()) {
                        var cam = $t.Current;
                        cam.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                $t1 = Bridge.getEnumerator(this._horizontalCam_16_9);
                try {
                    while ($t1.moveNext()) {
                        var cam1 = $t1.Current;
                        cam1.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                $t2 = Bridge.getEnumerator(this._horizontalCam_4_3);
                try {
                    while ($t2.moveNext()) {
                        var cam2 = $t2.Current;
                        cam2.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t2, System.IDisposable)) {
                        $t2.System$IDisposable$Dispose();
                    }
                }
                $t3 = Bridge.getEnumerator(this._verticalCam_9_20);
                try {
                    while ($t3.moveNext()) {
                        var cam3 = $t3.Current;
                        cam3.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t3, System.IDisposable)) {
                        $t3.System$IDisposable$Dispose();
                    }
                }
                $t4 = Bridge.getEnumerator(this._verticalCam_9_16);
                try {
                    while ($t4.moveNext()) {
                        var cam4 = $t4.Current;
                        cam4.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t4, System.IDisposable)) {
                        $t4.System$IDisposable$Dispose();
                    }
                }
                $t5 = Bridge.getEnumerator(this._verticalCam_3_4);
                try {
                    while ($t5.moveNext()) {
                        var cam5 = $t5.Current;
                        cam5.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t5, System.IDisposable)) {
                        $t5.System$IDisposable$Dispose();
                    }
                }
            },
            /*PlayableAdsTool.CameraManager.SetAllCam end.*/


        }
    });
    /*PlayableAdsTool.CameraManager end.*/

    /*PlayableAdsTool.EndCardController start.*/
    Bridge.define("PlayableAdsTool.EndCardController", {
        inherits: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.EndCardController#inherits", this ); }
 return [PlayableAdsTool.SingletonBehaviour$1(PlayableAdsTool.EndCardController)]; },
        fields: {
            SendStoreWithEndCard: false,
            _openStoreAfterSeconds: 0,
            _openStoreAfterEndCard: false,
            _endCards: null,
            _timer: 0,
            _isStoreOpen: false,
            IsEndCardOpened: false,
            LastEndCard: false,
            _firstInput: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.EndCardController#init", this ); }

                this.SendStoreWithEndCard = true;
                this._openStoreAfterSeconds = 9999;
                this._openStoreAfterEndCard = false;
                this._timer = 0.0;
                this._isStoreOpen = false;
                this.LastEndCard = false;
                this._firstInput = false;
            }
        },
        methods: {
            /*PlayableAdsTool.EndCardController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.EndCardController#OnEnable", this ); }

                Luna.Unity.LifeCycle.addOnResume(Bridge.fn.cacheBind(this, this.GameResume));
            },
            /*PlayableAdsTool.EndCardController.OnEnable end.*/

            /*PlayableAdsTool.EndCardController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.EndCardController#OnDisable", this ); }

                Luna.Unity.LifeCycle.removeOnResume(Bridge.fn.cacheBind(this, this.GameResume));
            },
            /*PlayableAdsTool.EndCardController.OnDisable end.*/

            /*PlayableAdsTool.EndCardController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.EndCardController#Update", this ); }

                if (this._isStoreOpen) {
                    return;
                }
                if (this.IsEndCardOpened) {
                    return;
                }
                this.TapChecker();
                this.TimeChecker();
            },
            /*PlayableAdsTool.EndCardController.Update end.*/

            /*PlayableAdsTool.EndCardController.SendStore start.*/
            SendStore: function (lastEndCard, logEvent, sendStoreDelay, gameResult) {
if ( TRACE ) { TRACE( "PlayableAdsTool.EndCardController#SendStore", this ); }

                if (gameResult === void 0) { gameResult = 0; }
                if (this.SendStoreWithEndCard) {
                    this.OpenEndCard(lastEndCard, PlayableAdsTool.EndCardController.GameResult.Default);
                } else {
                    if (lastEndCard) {
                        this.OpenEndCard(lastEndCard, PlayableAdsTool.EndCardController.GameResult.Default);
                    } else {
                        this.OpenStore$1(logEvent, sendStoreDelay);
                    }
                }
            },
            /*PlayableAdsTool.EndCardController.SendStore end.*/

            /*PlayableAdsTool.EndCardController.DirectSendStore start.*/
            DirectSendStore: function (logEvent, sendStoreDelay) {
if ( TRACE ) { TRACE( "PlayableAdsTool.EndCardController#DirectSendStore", this ); }

                this.OpenStore$1(logEvent, sendStoreDelay);
            },
            /*PlayableAdsTool.EndCardController.DirectSendStore end.*/

            /*PlayableAdsTool.EndCardController.GameResume start.*/
            GameResume: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.EndCardController#GameResume", this ); }

                this._isStoreOpen = false;
                this.IsEndCardOpened = false;
                this._timer = 0;
                this._firstInput = false;
                !Bridge.staticEquals(EventManager.OnGameResume, null) ? EventManager.OnGameResume() : null;
                if (this.LastEndCard) {
                    return;
                }
                this.PlayEndCardAnimation(PlayableAdsTool.EndCardController.EndCardAnimation.Hide, PlayableAdsTool.EndCardController.GameResult.Default);
                !Bridge.staticEquals(EventManager.OnEndCardOpen, null) ? EventManager.OnEndCardOpen(false) : null;
            },
            /*PlayableAdsTool.EndCardController.GameResume end.*/

            /*PlayableAdsTool.EndCardController.TapChecker start.*/
            TapChecker: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.EndCardController#TapChecker", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this._firstInput = true;
                }

                if (UnityEngine.Input.GetMouseButton(0)) {
                    this._timer = 0.0;
                }
            },
            /*PlayableAdsTool.EndCardController.TapChecker end.*/

            /*PlayableAdsTool.EndCardController.TimeChecker start.*/
            TimeChecker: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.EndCardController#TimeChecker", this ); }

                if (this._firstInput) {
                    this._timer += UnityEngine.Time.deltaTime;

                    if (this._timer >= this._openStoreAfterSeconds) {
                        this.SendStore(false, "", 0, PlayableAdsTool.EndCardController.GameResult.Default);
                    }
                }
            },
            /*PlayableAdsTool.EndCardController.TimeChecker end.*/

            /*PlayableAdsTool.EndCardController.OpenEndCard start.*/
            OpenEndCard: function (lastEndCard, gameResult) {
if ( TRACE ) { TRACE( "PlayableAdsTool.EndCardController#OpenEndCard", this ); }

                if (this.IsEndCardOpened) {
                    return;
                }
                this.IsEndCardOpened = true;
                !Bridge.staticEquals(EventManager.OnEndCardOpen, null) ? EventManager.OnEndCardOpen(true) : null;

                this.PlayEndCardAnimation(PlayableAdsTool.EndCardController.EndCardAnimation.Show, gameResult);
                this.LastEndCard = lastEndCard;

                if (this._openStoreAfterEndCard) {
                    DG.Tweening.DOVirtual.DelayedCall(1, Bridge.fn.bind(this, function () {
                        Luna.Unity.LifeCycle.GameEnded();
                        this.OpenStore$1("", 0);
                    }));
                }
            },
            /*PlayableAdsTool.EndCardController.OpenEndCard end.*/

            /*PlayableAdsTool.EndCardController.OpenStore start.*/
            OpenStore: function (logEventName) {
if ( TRACE ) { TRACE( "PlayableAdsTool.EndCardController#OpenStore", this ); }

                this._isStoreOpen = true;
                Luna.Unity.Playable.InstallFullGame();
                if (!Bridge.referenceEquals(logEventName, "")) {
                    Luna.Unity.Analytics.LogEvent$1(logEventName, 0);
                }
            },
            /*PlayableAdsTool.EndCardController.OpenStore end.*/

            /*PlayableAdsTool.EndCardController.OpenStore$1 start.*/
            OpenStore$1: function (logEventName, delay) {
if ( TRACE ) { TRACE( "PlayableAdsTool.EndCardController#OpenStore$1", this ); }

                this._isStoreOpen = true;
                DG.Tweening.DOVirtual.DelayedCall(delay, function () {
                    Luna.Unity.Playable.InstallFullGame();
                    if (!Bridge.referenceEquals(logEventName, "")) {
                        Luna.Unity.Analytics.LogEvent$1(logEventName, 0);
                    }
                });
            },
            /*PlayableAdsTool.EndCardController.OpenStore$1 end.*/

            /*PlayableAdsTool.EndCardController.PlayEndCardAnimation start.*/
            PlayEndCardAnimation: function (_animationStatus, gameResult) {
if ( TRACE ) { TRACE( "PlayableAdsTool.EndCardController#PlayEndCardAnimation", this ); }

                var endCard = this._endCards[gameResult].GetComponent(UnityEngine.UI.Image);

                switch (_animationStatus) {
                    case PlayableAdsTool.EndCardController.EndCardAnimation.Show: 
                        endCard.gameObject.SetActive(true);
                        break;
                    case PlayableAdsTool.EndCardController.EndCardAnimation.Hide: 
                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOFade$2(endCard, 0, 0.45), DG.Tweening.Ease.Linear), function () {
                            endCard.gameObject.SetActive(false);
                        });
                        break;
                }
            },
            /*PlayableAdsTool.EndCardController.PlayEndCardAnimation end.*/


        },
        overloads: {
            "OpenStore(string, float)": "OpenStore$1"
        }
    });
    /*PlayableAdsTool.EndCardController end.*/

    /*PlayableAdsTool.LocalizationController start.*/
    Bridge.define("PlayableAdsTool.LocalizationController", {
        inherits: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizationController#inherits", this ); }
 return [PlayableAdsTool.SingletonBehaviour$1(PlayableAdsTool.LocalizationController)]; },
        fields: {
            Sheets: null,
            CurrentFont: null,
            DefaultFont: null,
            HindiFont: null,
            JapaneseFont: null,
            KoreanFont: null,
            ThaiFont: null,
            _languageTest: false,
            _language: 0,
            lang: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizationController#init", this ); }

                this.Sheets = new (System.Collections.Generic.List$1(PlayableAdsTool.Sheet)).ctor();
            }
        },
        methods: {
            /*PlayableAdsTool.LocalizationController.Awake$1 start.*/
            Awake$1: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.LocalizationController#Awake$1", this ); }

                //Default language
                this.lang = "English";

                this.lang = Luna.Unity.Playable.GetPreferredLanguage();
                this.lang = this.lang.toLowerCase();
                this.lang = this.lang.substr(0, 2);
                //Buradaki dil kodları Lunaya göre, dil isimleri google sheete göre dolması gerekiyor.
                switch (this.lang) {
                    case "en": 
                        this.lang = "English";
                        break;
                    case "ar": 
                        this.lang = "Arabic";
                        break;
                    case "nl": 
                        this.lang = "Dutch";
                        break;
                    case "fil": 
                        this.lang = "Filipino";
                        break;
                    case "fr": 
                        this.lang = "French";
                        break;
                    case "de": 
                        this.lang = "German";
                        break;
                    case "el": 
                        this.lang = "Greek";
                        break;
                    case "he": 
                        this.lang = "Hebrew";
                        break;
                    case "hi": 
                        this.lang = "Hindi";
                        break;
                    case "hu": 
                        this.lang = "Hungarian";
                        break;
                    case "id": 
                        this.lang = "Indonesian";
                        break;
                    case "it": 
                        this.lang = "Italian";
                        break;
                    case "ja": 
                        this.lang = "Japanese";
                        break;
                    case "ko": 
                        this.lang = "Korean";
                        break;
                    case "ms": 
                        this.lang = "Malay";
                        break;
                    case "pl": 
                        this.lang = "Polish";
                        break;
                    case "pt": 
                        this.lang = "Portuguese";
                        break;
                    case "ro": 
                        this.lang = "Romanian";
                        break;
                    case "ru": 
                        this.lang = "Russian";
                        break;
                    case "sr": 
                        this.lang = "Serbian";
                        break;
                    case "es": 
                        this.lang = "Spanish";
                        break;
                    case "th": 
                        this.lang = "Thai";
                        break;
                    case "zh": 
                        this.lang = "Traditional Chinese";
                        break;
                    case "tr": 
                        this.lang = "Turkish";
                        break;
                    case "uk": 
                        this.lang = "Ukrainian";
                        break;
                    case "ur": 
                        this.lang = "Urdu";
                        break;
                    case "vi": 
                        this.lang = "Vietnamese";
                        break;
                    default: 
                        this.lang = "English";
                        break;
                }

                if (this._languageTest) {
                    this.lang = System.Enum.toString(PlayableAdsTool.LanguageTest, this._language);
                }

                // FONT LISTS
                var tempList_NotoDefault = function (_o1) {
                        _o1.add(PlayableAdsTool.LanguageTest.English);
                        _o1.add(PlayableAdsTool.LanguageTest.Arabic);
                        _o1.add(PlayableAdsTool.LanguageTest.Dutch);
                        _o1.add(PlayableAdsTool.LanguageTest.Filipino);
                        _o1.add(PlayableAdsTool.LanguageTest.French);
                        _o1.add(PlayableAdsTool.LanguageTest.German);
                        _o1.add(PlayableAdsTool.LanguageTest.Greek);
                        _o1.add(PlayableAdsTool.LanguageTest.Hebrew);
                        _o1.add(PlayableAdsTool.LanguageTest.Hungarian);
                        _o1.add(PlayableAdsTool.LanguageTest.Indonesian);
                        _o1.add(PlayableAdsTool.LanguageTest.Italian);
                        _o1.add(PlayableAdsTool.LanguageTest.Malay);
                        _o1.add(PlayableAdsTool.LanguageTest.Polish);
                        _o1.add(PlayableAdsTool.LanguageTest.Portuguese);
                        _o1.add(PlayableAdsTool.LanguageTest.Romanian);
                        _o1.add(PlayableAdsTool.LanguageTest.Spanish);
                        _o1.add(PlayableAdsTool.LanguageTest.Turkish);
                        _o1.add(PlayableAdsTool.LanguageTest.Urdu);
                        _o1.add(PlayableAdsTool.LanguageTest.Vietnamese);
                        return _o1;
                    }(new (System.Collections.Generic.List$1(PlayableAdsTool.LanguageTest)).ctor());

                var tempList_NotoHindi = function (_o2) {
                        _o2.add(PlayableAdsTool.LanguageTest.Hindi);
                        return _o2;
                    }(new (System.Collections.Generic.List$1(PlayableAdsTool.LanguageTest)).ctor());

                var tempList_NotoJapanese = function (_o3) {
                        _o3.add(PlayableAdsTool.LanguageTest.Japanese);
                        _o3.add(PlayableAdsTool.LanguageTest.Russian);
                        _o3.add(PlayableAdsTool.LanguageTest.Serbian);
                        _o3.add(PlayableAdsTool.LanguageTest.TraditionalChinese);
                        _o3.add(PlayableAdsTool.LanguageTest.Ukrainian);
                        return _o3;
                    }(new (System.Collections.Generic.List$1(PlayableAdsTool.LanguageTest)).ctor());

                var tempList_NotoKorean = function (_o4) {
                        _o4.add(PlayableAdsTool.LanguageTest.Korean);
                        return _o4;
                    }(new (System.Collections.Generic.List$1(PlayableAdsTool.LanguageTest)).ctor());

                var tempList_NotoThai = function (_o5) {
                        _o5.add(PlayableAdsTool.LanguageTest.Thai);
                        return _o5;
                    }(new (System.Collections.Generic.List$1(PlayableAdsTool.LanguageTest)).ctor());

                this.CurrentFont = this.DefaultFont;
                if (tempList_NotoHindi.contains(this._language)) {
                    this.CurrentFont = this.HindiFont;
                }
                if (tempList_NotoJapanese.contains(this._language)) {
                    this.CurrentFont = this.JapaneseFont;
                }
                if (tempList_NotoKorean.contains(this._language)) {
                    this.CurrentFont = this.KoreanFont;
                }
                if (tempList_NotoThai.contains(this._language)) {
                    this.CurrentFont = this.ThaiFont;
                }


                PlayableAdsTool.LocalizationManager.AutoLanguage(this.lang);
                PlayableAdsTool.LocalizationManager.Read();
            },
            /*PlayableAdsTool.LocalizationController.Awake$1 end.*/


        },
        overloads: {
            "Awake()": "Awake$1"
        }
    });
    /*PlayableAdsTool.LocalizationController end.*/

    /*PlayableAdsTool.ResponsiveManager start.*/
    Bridge.define("PlayableAdsTool.ResponsiveManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.ResponsiveManager#inherits", this ); }
 return [PlayableAdsTool.SingletonBehaviour$1(PlayableAdsTool.ResponsiveManager)]; },
        fields: {
            CurrentScreenOrientation: 0,
            CurrentAspectRatio: 0,
            UiElements: null,
            Horizantal_20_9: null,
            Horizantal_16_9: null,
            Horizantal_4_3: null,
            Vertical_9_20: null,
            Vertical_9_16: null,
            Vertical_3_4: null,
            Banner: null
        },
        methods: {
            /*PlayableAdsTool.ResponsiveManager.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.ResponsiveManager#OnEnable", this ); }

                EventManager.OnEndCardOpen = Bridge.fn.combine(EventManager.OnEndCardOpen, Bridge.fn.cacheBind(this, this.SetBannerVisibilty));
            },
            /*PlayableAdsTool.ResponsiveManager.OnEnable end.*/

            /*PlayableAdsTool.ResponsiveManager.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.ResponsiveManager#OnDisable", this ); }

                EventManager.OnEndCardOpen = Bridge.fn.remove(EventManager.OnEndCardOpen, Bridge.fn.cacheBind(this, this.SetBannerVisibilty));
            },
            /*PlayableAdsTool.ResponsiveManager.OnDisable end.*/

            /*PlayableAdsTool.ResponsiveManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.ResponsiveManager#Start", this ); }

                this.CheckScreenOrientation();
            },
            /*PlayableAdsTool.ResponsiveManager.Start end.*/

            /*PlayableAdsTool.ResponsiveManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.ResponsiveManager#Update", this ); }

                this.CheckScreenOrientation();
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.S)) {
                    this.SaveResponsive();
                }
            },
            /*PlayableAdsTool.ResponsiveManager.Update end.*/

            /*PlayableAdsTool.ResponsiveManager.CheckScreenOrientation start.*/
            CheckScreenOrientation: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.ResponsiveManager#CheckScreenOrientation", this ); }

                var width = UnityEngine.Screen.width;
                var height = UnityEngine.Screen.height;
                var aspectRatio = width / height;

                if (aspectRatio >= 2 && this.CurrentAspectRatio !== AspectRatio.Horizantal_20_9) {
                    this.SetScreen(AspectRatio.Horizantal_20_9, ScreenOrientation.Horizontal);
                } else if (aspectRatio >= 1.5 && aspectRatio < 2 && this.CurrentAspectRatio !== AspectRatio.Horizantal_16_9) {
                    this.SetScreen(AspectRatio.Horizantal_16_9, ScreenOrientation.Horizontal);
                } else if (aspectRatio >= 1 && aspectRatio < 1.5 && this.CurrentAspectRatio !== AspectRatio.Horizantal_4_3) {
                    this.SetScreen(AspectRatio.Horizantal_4_3, ScreenOrientation.Horizontal);
                } else if (aspectRatio >= 0.6 && aspectRatio < 1.0 && this.CurrentAspectRatio !== AspectRatio.Vertical_3_4) {
                    this.SetScreen(AspectRatio.Vertical_3_4, ScreenOrientation.Vertical);
                } else if (aspectRatio >= 0.5 && aspectRatio < 0.6 && this.CurrentAspectRatio !== AspectRatio.Vertical_9_16) {
                    this.SetScreen(AspectRatio.Vertical_9_16, ScreenOrientation.Vertical);
                } else if (aspectRatio < 0.5 && this.CurrentAspectRatio !== AspectRatio.Vertical_9_20) {
                    this.SetScreen(AspectRatio.Vertical_9_20, ScreenOrientation.Vertical);
                }
            },
            /*PlayableAdsTool.ResponsiveManager.CheckScreenOrientation end.*/

            /*PlayableAdsTool.ResponsiveManager.SetScreen start.*/
            SetScreen: function (aspectRatio, screenOrientation) {
if ( TRACE ) { TRACE( "PlayableAdsTool.ResponsiveManager#SetScreen", this ); }

                this.CurrentScreenOrientation = screenOrientation;
                this.CurrentAspectRatio = aspectRatio;
                this.LoadResponsive(this.CurrentAspectRatio);
                !Bridge.staticEquals(EventManager.OnScreenChange, null) ? EventManager.OnScreenChange(this.CurrentScreenOrientation) : null;
                !Bridge.staticEquals(EventManager.OnAspectRatioChange, null) ? EventManager.OnAspectRatioChange(this.CurrentAspectRatio) : null;
            },
            /*PlayableAdsTool.ResponsiveManager.SetScreen end.*/

            /*PlayableAdsTool.ResponsiveManager.SaveUIDataList start.*/
            SaveUIDataList: function (uiDataList) {
if ( TRACE ) { TRACE( "PlayableAdsTool.ResponsiveManager#SaveUIDataList", this ); }

                var $t;
                uiDataList.clear();
                for (var i = 0; i < this.UiElements.length; i = (i + 1) | 0) {
                    var tempData = ($t = new UIData(), $t.AnchoredPosition = this.UiElements[i]._rectTransform.anchoredPosition.$clone(), $t.SizeDelta = this.UiElements[i]._rectTransform.sizeDelta.$clone(), $t.Rotation = this.UiElements[i]._rectTransform.rotation.$clone(), $t.LocalScale = this.UiElements[i]._rectTransform.localScale.$clone(), $t.AnchorMin = this.UiElements[i]._rectTransform.anchorMin.$clone(), $t.AnchorMax = this.UiElements[i]._rectTransform.anchorMax.$clone(), $t.Pivot = this.UiElements[i]._rectTransform.pivot.$clone(), $t);

                    uiDataList.add(tempData);
                }


                UnityEngine.Debug.Log$1(System.Enum.toString(AspectRatio, this.CurrentAspectRatio) + " list saved.");
            },
            /*PlayableAdsTool.ResponsiveManager.SaveUIDataList end.*/

            /*PlayableAdsTool.ResponsiveManager.LoadUIDataList start.*/
            LoadUIDataList: function (uiDataList) {
if ( TRACE ) { TRACE( "PlayableAdsTool.ResponsiveManager#LoadUIDataList", this ); }

                if (uiDataList == null) {
                    UnityEngine.Debug.Log$1("UI data list is null.");
                    return;
                }

                if (uiDataList.Count === 0) {
                    UnityEngine.Debug.Log$1("UI data list is empty.");
                    return;
                }

                for (var i = 0; i < this.UiElements.length; i = (i + 1) | 0) {
                    if (this.UiElements[i] == null || UnityEngine.Component.op_Equality(this.UiElements[i]._rectTransform, null)) {
                        UnityEngine.Debug.Log$1("UI element or its RectTransform is null at index: " + i);
                        continue;
                    }

                    if (i >= uiDataList.Count) {
                        UnityEngine.Debug.Log$1("Not enough UI data for all elements.");
                        break;
                    }

                    this.UiElements[i]._rectTransform.anchoredPosition = uiDataList.getItem(i).AnchoredPosition.$clone();
                    this.UiElements[i]._rectTransform.sizeDelta = uiDataList.getItem(i).SizeDelta.$clone();
                    this.UiElements[i]._rectTransform.rotation = uiDataList.getItem(i).Rotation.$clone();
                    this.UiElements[i]._rectTransform.localScale = uiDataList.getItem(i).LocalScale.$clone();
                    this.UiElements[i]._rectTransform.anchorMax = uiDataList.getItem(i).AnchorMax.$clone();
                    this.UiElements[i]._rectTransform.anchorMin = uiDataList.getItem(i).AnchorMin.$clone();
                    this.UiElements[i]._rectTransform.pivot = uiDataList.getItem(i).Pivot.$clone();
                }
            },
            /*PlayableAdsTool.ResponsiveManager.LoadUIDataList end.*/

            /*PlayableAdsTool.ResponsiveManager.ShowSelectedResponsive start.*/
            ShowSelectedResponsive: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.ResponsiveManager#ShowSelectedResponsive", this ); }

                PlayableAdsTool.SingletonBehaviour$1(PlayableAdsTool.CameraManager).Instance.SetCamScreenOrientation(this.CurrentAspectRatio);
                this.LoadResponsive(this.CurrentAspectRatio);
            },
            /*PlayableAdsTool.ResponsiveManager.ShowSelectedResponsive end.*/

            /*PlayableAdsTool.ResponsiveManager.SaveResponsive start.*/
            SaveResponsive: function () {
if ( TRACE ) { TRACE( "PlayableAdsTool.ResponsiveManager#SaveResponsive", this ); }

                switch (this.CurrentAspectRatio) {
                    case AspectRatio.Horizantal_20_9: 
                        this.SaveUIDataList(this.Horizantal_20_9);
                        break;
                    case AspectRatio.Horizantal_16_9: 
                        this.SaveUIDataList(this.Horizantal_16_9);
                        break;
                    case AspectRatio.Horizantal_4_3: 
                        this.SaveUIDataList(this.Horizantal_4_3);
                        break;
                    case AspectRatio.Vertical_9_20: 
                        this.SaveUIDataList(this.Vertical_9_20);
                        break;
                    case AspectRatio.Vertical_9_16: 
                        this.SaveUIDataList(this.Vertical_9_16);
                        break;
                    case AspectRatio.Vertical_3_4: 
                        this.SaveUIDataList(this.Vertical_3_4);
                        break;
                }
            },
            /*PlayableAdsTool.ResponsiveManager.SaveResponsive end.*/

            /*PlayableAdsTool.ResponsiveManager.LoadResponsive start.*/
            LoadResponsive: function (aspectRatio) {
if ( TRACE ) { TRACE( "PlayableAdsTool.ResponsiveManager#LoadResponsive", this ); }

                switch (aspectRatio) {
                    case AspectRatio.Horizantal_20_9: 
                        this.LoadUIDataList(this.Horizantal_20_9);
                        this.CurrentScreenOrientation = ScreenOrientation.Horizontal;
                        break;
                    case AspectRatio.Horizantal_16_9: 
                        this.LoadUIDataList(this.Horizantal_16_9);
                        this.CurrentScreenOrientation = ScreenOrientation.Horizontal;
                        break;
                    case AspectRatio.Horizantal_4_3: 
                        this.LoadUIDataList(this.Horizantal_4_3);
                        this.CurrentScreenOrientation = ScreenOrientation.Horizontal;
                        break;
                    case AspectRatio.Vertical_9_20: 
                        this.LoadUIDataList(this.Vertical_9_20);
                        this.CurrentScreenOrientation = ScreenOrientation.Vertical;
                        break;
                    case AspectRatio.Vertical_9_16: 
                        this.LoadUIDataList(this.Vertical_9_16);
                        this.CurrentScreenOrientation = ScreenOrientation.Vertical;
                        break;
                    case AspectRatio.Vertical_3_4: 
                        this.LoadUIDataList(this.Vertical_3_4);
                        this.CurrentScreenOrientation = ScreenOrientation.Vertical;
                        break;
                }
            },
            /*PlayableAdsTool.ResponsiveManager.LoadResponsive end.*/

            /*PlayableAdsTool.ResponsiveManager.SetBannerVisibilty start.*/
            SetBannerVisibilty: function (value) {
if ( TRACE ) { TRACE( "PlayableAdsTool.ResponsiveManager#SetBannerVisibilty", this ); }

                if (UnityEngine.GameObject.op_Equality(this.Banner, null)) {
                    return;
                }

                this.Banner.gameObject.SetActive(!value);
            },
            /*PlayableAdsTool.ResponsiveManager.SetBannerVisibilty end.*/


        }
    });
    /*PlayableAdsTool.ResponsiveManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["UnityEngine","System","System.Collections.Generic","_InGame.Scripts.Managers","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening","DG.Tweening.Plugins.Core.PathCore","UnityEngine.UI","System.Globalization","DG.Tweening.Plugins.Options","PathCreation","PathCreation.Utility","PathCreation.Examples","_InGame.Scripts.DrawContollers","PlayableAdsTool","TMPro","System.Collections"];

    /*SoundTypes start.*/
    $m("SoundTypes", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Correct","is":true,"t":4,"rt":SoundTypes,"sn":"Correct","box":function ($v) { return Bridge.box($v, SoundTypes, System.Enum.toStringFn(SoundTypes));}},{"a":2,"n":"Wrong","is":true,"t":4,"rt":SoundTypes,"sn":"Wrong","box":function ($v) { return Bridge.box($v, SoundTypes, System.Enum.toStringFn(SoundTypes));}}]}; }, $n);
    /*SoundTypes end.*/

    /*CamStates start.*/
    $m("CamStates", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"MainCam","is":true,"t":4,"rt":CamStates,"sn":"MainCam","box":function ($v) { return Bridge.box($v, CamStates, System.Enum.toStringFn(CamStates));}}]}; }, $n);
    /*CamStates end.*/

    /*EventManager start.*/
    $m("EventManager", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"OnAspectRatioChange","is":true,"t":4,"rt":Function,"sn":"OnAspectRatioChange"},{"a":2,"n":"OnCamChange","is":true,"t":4,"rt":Function,"sn":"OnCamChange"},{"a":2,"n":"OnCheckFillSlider","is":true,"t":4,"rt":Function,"sn":"OnCheckFillSlider"},{"a":2,"n":"OnCloseTutorial","is":true,"t":4,"rt":Function,"sn":"OnCloseTutorial"},{"a":2,"n":"OnCompleteDrawing","is":true,"t":4,"rt":Function,"sn":"OnCompleteDrawing"},{"a":2,"n":"OnEndCardOpen","is":true,"t":4,"rt":Function,"sn":"OnEndCardOpen"},{"a":2,"n":"OnFailedToDraw","is":true,"t":4,"rt":Function,"sn":"OnFailedToDraw"},{"a":2,"n":"OnGameResume","is":true,"t":4,"rt":Function,"sn":"OnGameResume"},{"a":2,"n":"OnGameStateChange","is":true,"t":4,"rt":Function,"sn":"OnGameStateChange"},{"a":2,"n":"OnLoadDrawing","is":true,"t":4,"rt":Function,"sn":"OnLoadDrawing"},{"a":2,"n":"OnPlaySound","is":true,"t":4,"rt":Function,"sn":"OnPlaySound"},{"a":2,"n":"OnScreenChange","is":true,"t":4,"rt":Function,"sn":"OnScreenChange"},{"a":2,"n":"OnShowTutorial","is":true,"t":4,"rt":Function,"sn":"OnShowTutorial"}]}; }, $n);
    /*EventManager end.*/

    /*ScreenOrientation start.*/
    $m("ScreenOrientation", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Horizontal","is":true,"t":4,"rt":ScreenOrientation,"sn":"Horizontal","box":function ($v) { return Bridge.box($v, ScreenOrientation, System.Enum.toStringFn(ScreenOrientation));}},{"a":2,"n":"Vertical","is":true,"t":4,"rt":ScreenOrientation,"sn":"Vertical","box":function ($v) { return Bridge.box($v, ScreenOrientation, System.Enum.toStringFn(ScreenOrientation));}}]}; }, $n);
    /*ScreenOrientation end.*/

    /*AspectRatio start.*/
    $m("AspectRatio", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Horizantal_16_9","is":true,"t":4,"rt":AspectRatio,"sn":"Horizantal_16_9","box":function ($v) { return Bridge.box($v, AspectRatio, System.Enum.toStringFn(AspectRatio));}},{"a":2,"n":"Horizantal_20_9","is":true,"t":4,"rt":AspectRatio,"sn":"Horizantal_20_9","box":function ($v) { return Bridge.box($v, AspectRatio, System.Enum.toStringFn(AspectRatio));}},{"a":2,"n":"Horizantal_4_3","is":true,"t":4,"rt":AspectRatio,"sn":"Horizantal_4_3","box":function ($v) { return Bridge.box($v, AspectRatio, System.Enum.toStringFn(AspectRatio));}},{"a":2,"n":"Vertical_3_4","is":true,"t":4,"rt":AspectRatio,"sn":"Vertical_3_4","box":function ($v) { return Bridge.box($v, AspectRatio, System.Enum.toStringFn(AspectRatio));}},{"a":2,"n":"Vertical_9_16","is":true,"t":4,"rt":AspectRatio,"sn":"Vertical_9_16","box":function ($v) { return Bridge.box($v, AspectRatio, System.Enum.toStringFn(AspectRatio));}},{"a":2,"n":"Vertical_9_20","is":true,"t":4,"rt":AspectRatio,"sn":"Vertical_9_20","box":function ($v) { return Bridge.box($v, AspectRatio, System.Enum.toStringFn(AspectRatio));}}]}; }, $n);
    /*AspectRatio end.*/

    /*UIData start.*/
    $m("UIData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AnchorMax","t":4,"rt":$n[0].Vector2,"sn":"AnchorMax"},{"a":2,"n":"AnchorMin","t":4,"rt":$n[0].Vector2,"sn":"AnchorMin"},{"a":2,"n":"AnchoredPosition","t":4,"rt":$n[0].Vector2,"sn":"AnchoredPosition"},{"a":2,"n":"LocalScale","t":4,"rt":$n[0].Vector3,"sn":"LocalScale"},{"a":2,"n":"Pivot","t":4,"rt":$n[0].Vector2,"sn":"Pivot"},{"a":2,"n":"Rotation","t":4,"rt":$n[0].Quaternion,"sn":"Rotation"},{"a":2,"n":"SizeDelta","t":4,"rt":$n[0].Vector2,"sn":"SizeDelta"}]}; }, $n);
    /*UIData end.*/

    /*UIElement start.*/
    $m("UIElement", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_rectTransform","t":4,"rt":$n[0].RectTransform,"sn":"_rectTransform"},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"_rectTransformName","t":4,"rt":$n[1].String,"sn":"_rectTransformName"}]}; }, $n);
    /*UIElement end.*/

    /*UIManager start.*/
    $m("UIManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void}]}; }, $n);
    /*UIManager end.*/

    /*FeedbackPanelController start.*/
    $m("FeedbackPanelController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCompleteDrawing","t":8,"sn":"OnCompleteDrawing","rt":$n[1].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"OnFailedToDraw","t":8,"sn":"OnFailedToDraw","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"Confetties","t":4,"rt":$n[2].List$1(UnityEngine.ParticleSystem),"sn":"Confetties"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"FailAnimator","t":4,"rt":$n[0].Animator,"sn":"FailAnimator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"WinAnimator","t":4,"rt":$n[0].Animator,"sn":"WinAnimator"}]}; }, $n);
    /*FeedbackPanelController end.*/

    /*TutorialAnimationHelper start.*/
    $m("TutorialAnimationHelper", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddToLineRenderer","t":8,"pi":[{"n":"index","pt":$n[1].Int32,"ps":0}],"sn":"AddToLineRenderer","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"ClearLineRenderer","t":8,"sn":"ClearLineRenderer","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"LineRendererPoints","t":4,"rt":$n[2].List$1(UnityEngine.Transform),"sn":"LineRendererPoints"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_lineRenderer","t":4,"rt":$n[0].LineRenderer,"sn":"_lineRenderer"}]}; }, $n);
    /*TutorialAnimationHelper end.*/

    /*GameBaseState start.*/
    $m("GameBaseState", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":2,"n":"EnterState","t":8,"pi":[{"n":"stateManager","pt":GameStateManager,"ps":0}],"sn":"EnterState","rt":$n[1].Void,"p":[GameStateManager]},{"v":true,"a":2,"n":"ExitState","t":8,"pi":[{"n":"stateManager","pt":GameStateManager,"ps":0}],"sn":"ExitState","rt":$n[1].Void,"p":[GameStateManager]},{"v":true,"a":2,"n":"GetStateType","t":8,"sn":"GetStateType","rt":GameStateType,"box":function ($v) { return Bridge.box($v, GameStateType, System.Enum.toStringFn(GameStateType));}},{"v":true,"a":2,"n":"UpdateState","t":8,"pi":[{"n":"stateManager","pt":GameStateManager,"ps":0}],"sn":"UpdateState","rt":$n[1].Void,"p":[GameStateManager]},{"a":2,"n":"_GameStateType","t":16,"rt":GameStateType,"g":{"a":2,"n":"get__GameStateType","t":8,"rt":GameStateType,"fg":"_GameStateType","box":function ($v) { return Bridge.box($v, GameStateType, System.Enum.toStringFn(GameStateType));}},"s":{"a":2,"n":"set__GameStateType","t":8,"p":[GameStateType],"rt":$n[1].Void,"fs":"_GameStateType"},"fn":"_GameStateType"},{"a":1,"backing":true,"n":"<_GameStateType>k__BackingField","t":4,"rt":GameStateType,"sn":"_GameStateType","box":function ($v) { return Bridge.box($v, GameStateType, System.Enum.toStringFn(GameStateType));}}]}; }, $n);
    /*GameBaseState end.*/

    /*GameStateGameEnd start.*/
    $m("GameStateGameEnd", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[GameStateType],"pi":[{"n":"_StateType","pt":GameStateType,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"EnterState","t":8,"pi":[{"n":"stateManager","pt":GameStateManager,"ps":0}],"sn":"EnterState","rt":$n[1].Void,"p":[GameStateManager]},{"ov":true,"a":2,"n":"ExitState","t":8,"pi":[{"n":"stateManager","pt":GameStateManager,"ps":0}],"sn":"ExitState","rt":$n[1].Void,"p":[GameStateManager]},{"ov":true,"a":2,"n":"UpdateState","t":8,"pi":[{"n":"stateManager","pt":GameStateManager,"ps":0}],"sn":"UpdateState","rt":$n[1].Void,"p":[GameStateManager]}]}; }, $n);
    /*GameStateGameEnd end.*/

    /*GameStateInGame start.*/
    $m("GameStateInGame", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[GameStateType],"pi":[{"n":"_StateType","pt":GameStateType,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"EnterState","t":8,"pi":[{"n":"stateManager","pt":GameStateManager,"ps":0}],"sn":"EnterState","rt":$n[1].Void,"p":[GameStateManager]},{"ov":true,"a":2,"n":"ExitState","t":8,"pi":[{"n":"stateManager","pt":GameStateManager,"ps":0}],"sn":"ExitState","rt":$n[1].Void,"p":[GameStateManager]},{"ov":true,"a":2,"n":"UpdateState","t":8,"pi":[{"n":"stateManager","pt":GameStateManager,"ps":0}],"sn":"UpdateState","rt":$n[1].Void,"p":[GameStateManager]}]}; }, $n);
    /*GameStateInGame end.*/

    /*GameStateType start.*/
    $m("GameStateType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GameEnd","is":true,"t":4,"rt":GameStateType,"sn":"GameEnd","box":function ($v) { return Bridge.box($v, GameStateType, System.Enum.toStringFn(GameStateType));}},{"a":2,"n":"GameInitialize","is":true,"t":4,"rt":GameStateType,"sn":"GameInitialize","box":function ($v) { return Bridge.box($v, GameStateType, System.Enum.toStringFn(GameStateType));}},{"a":2,"n":"InGame","is":true,"t":4,"rt":GameStateType,"sn":"InGame","box":function ($v) { return Bridge.box($v, GameStateType, System.Enum.toStringFn(GameStateType));}},{"a":2,"n":"TutorialShow","is":true,"t":4,"rt":GameStateType,"sn":"TutorialShow","box":function ($v) { return Bridge.box($v, GameStateType, System.Enum.toStringFn(GameStateType));}}]}; }, $n);
    /*GameStateType end.*/

    /*GameStateManager start.*/
    $m("GameStateManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddState","t":8,"pi":[{"n":"stateName","pt":GameStateType,"ps":0},{"n":"state","pt":GameBaseState,"ps":1}],"sn":"AddState","rt":$n[1].Void,"p":[GameStateType,GameBaseState]},{"a":1,"n":"Awake","t":8,"sn":"Awake$1","rt":$n[1].Void},{"a":2,"n":"ExitFromAllStates","t":8,"sn":"ExitFromAllStates","rt":$n[1].Void},{"a":2,"n":"ExitSpecificState","t":8,"pi":[{"n":"enemyStateType","pt":GameStateType,"ps":0}],"sn":"ExitSpecificState","rt":$n[1].Void,"p":[GameStateType]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"OnGameStateChange","t":8,"pi":[{"n":"newState","pt":GameStateType,"ps":0}],"sn":"OnGameStateChange","rt":$n[1].Void,"p":[GameStateType]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"SwitchState","t":8,"pi":[{"n":"stateType","pt":GameStateType,"ps":0},{"n":"forceSwitch","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1}],"sn":"SwitchState","rt":$n[1].Void,"p":[GameStateType,$n[1].Boolean]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"UpdateCurrentStateType","t":8,"sn":"UpdateCurrentStateType","rt":$n[1].Void},{"a":2,"n":"Base","t":16,"rt":$n[3].GameManager,"g":{"a":2,"n":"get_Base","t":8,"rt":$n[3].GameManager,"fg":"Base"},"fn":"Base"},{"a":2,"n":"CurrentState","t":16,"rt":GameBaseState,"g":{"a":2,"n":"get_CurrentState","t":8,"rt":GameBaseState,"fg":"CurrentState"},"s":{"a":2,"n":"set_CurrentState","t":8,"p":[GameBaseState],"rt":$n[1].Void,"fs":"CurrentState"},"fn":"CurrentState"},{"a":2,"n":"CurrentStateType","t":16,"rt":GameStateType,"g":{"a":2,"n":"get_CurrentStateType","t":8,"rt":GameStateType,"fg":"CurrentStateType","box":function ($v) { return Bridge.box($v, GameStateType, System.Enum.toStringFn(GameStateType));}},"s":{"a":2,"n":"set_CurrentStateType","t":8,"p":[GameStateType],"rt":$n[1].Void,"fs":"CurrentStateType"},"fn":"CurrentStateType"},{"a":1,"n":"_states","t":4,"rt":$n[2].Dictionary$2(GameStateType,GameBaseState),"sn":"_states"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentState","t":4,"rt":GameBaseState,"sn":"currentState"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentStateType","t":4,"rt":GameStateType,"sn":"currentStateType","box":function ($v) { return Bridge.box($v, GameStateType, System.Enum.toStringFn(GameStateType));}}]}; }, $n);
    /*GameStateManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[1].Int32,"p":[$n[4].AudioMixer,$n[1].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].AudioSource,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade","rt":$n[5].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[0].AudioSource,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[1].Int32,"p":[$n[4].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].AudioMixer,"ps":0},{"n":"to","pt":$n[1].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[1].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[1].Int32,"p":[$n[4].AudioMixer,$n[1].Single,$n[1].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1}],"sn":"DOKill","rt":$n[1].Int32,"p":[$n[4].AudioMixer,$n[1].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[1].Int32,"p":[$n[4].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].AudioSource,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPitch","rt":$n[5].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[0].AudioSource,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[1].Int32,"p":[$n[4].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[1].Int32,"p":[$n[4].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[1].Int32,"p":[$n[4].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[1].Int32,"p":[$n[4].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[1].Int32,"p":[$n[4].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].AudioMixer,"ps":0},{"n":"floatName","pt":$n[1].String,"ps":1},{"n":"endValue","pt":$n[1].Single,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[5].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].AudioMixer,$n[1].String,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[1].Int32,"p":[$n[4].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[1].Int32,"p":[$n[4].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Vector3,"ps":1},{"n":"jumpPower","pt":$n[1].Single,"ps":2},{"n":"numJumps","pt":$n[1].Int32,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOJump","rt":$n[6].Sequence,"p":[$n[0].Rigidbody,$n[0].Vector3,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"path","pt":$n[7].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[5].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody,$n[7].Path,$n[1].Single,$n[6].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[5].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[1].Single,$n[6].PathType,$n[6].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"towards","pt":$n[0].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[6].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[5].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[0].Rigidbody,$n[0].Vector3,$n[1].Single,$n[6].AxisConstraint,$n[1].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMove","rt":$n[5].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody,$n[0].Vector3,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[5].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[5].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[5].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"path","pt":$n[7].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[5].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody,$n[7].Path,$n[1].Single,$n[6].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[5].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[1].Single,$n[6].PathType,$n[6].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[6].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[5].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[0].Rigidbody,$n[0].Vector3,$n[1].Single,$n[6].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"jumpPower","pt":$n[1].Single,"ps":2},{"n":"numJumps","pt":$n[1].Int32,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOJump","rt":$n[6].Sequence,"p":[$n[0].Rigidbody2D,$n[0].Vector2,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"path","pt":$n[7].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[5].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody2D,$n[7].Path,$n[1].Single,$n[6].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[5].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[1].Single,$n[6].PathType,$n[6].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMove","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody2D,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody2D,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody2D,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"path","pt":$n[7].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[5].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody2D,$n[7].Path,$n[1].Single,$n[6].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[5].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[1].Single,$n[6].PathType,$n[6].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DORotate","rt":$n[5].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[0].Rigidbody2D,$n[1].Single,$n[1].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[6].Tweener,"p":[$n[0].SpriteRenderer,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor","rt":$n[5].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[0].SpriteRenderer,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade","rt":$n[5].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[0].SpriteRenderer,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[6].Sequence,"p":[$n[0].SpriteRenderer,pc.ColorGradient,$n[1].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[6].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[5].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector3,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[5].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[5].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[5].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[6].Tweener,"p":[$n[8].Graphic,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Image,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[6].Tweener,"p":[$n[8].Image,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Text,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[6].Tweener,"p":[$n[8].Text,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor","rt":$n[5].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Graphic,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Image,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor$1","rt":$n[5].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Image,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Outline,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor$2","rt":$n[5].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Outline,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Text,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor$3","rt":$n[5].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Text,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Text,"ps":0},{"n":"fromValue","pt":$n[1].Int32,"ps":1},{"n":"endValue","pt":$n[1].Int32,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[1].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[9].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[5].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[8].Text,$n[1].Int32,$n[1].Int32,$n[1].Single,$n[1].Boolean,$n[9].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade","rt":$n[5].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[0].CanvasGroup,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$1","rt":$n[5].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Graphic,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Image,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$2","rt":$n[5].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Image,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Outline,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$3","rt":$n[5].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Outline,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Text,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$4","rt":$n[5].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Text,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Image,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[5].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[8].Image,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].LayoutElement,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[8].LayoutElement,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[6].Sequence,"p":[$n[8].Image,pc.ColorGradient,$n[1].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[6].Tweener,"p":[$n[8].ScrollRect,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"jumpPower","pt":$n[1].Single,"ps":2},{"n":"numJumps","pt":$n[1].Int32,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[6].Sequence,"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].LayoutElement,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[8].LayoutElement,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[6].Tweener,"p":[$n[8].ScrollRect,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPivot","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPivotX","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPivotY","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].LayoutElement,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[8].LayoutElement,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"punch","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[1].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[6].Tweener,"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Outline,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOScale","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[8].Outline,$n[0].Vector2,$n[1].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[1].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[1].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[1].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[6].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[6].Tweener,"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean,$n[1].Boolean,$n[6].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1},{"n":"strength","pt":$n[0].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[1].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[1].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[6].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[6].Tweener,"p":[$n[0].RectTransform,$n[1].Single,$n[0].Vector2,$n[1].Int32,$n[1].Single,$n[1].Boolean,$n[1].Boolean,$n[6].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"center","pt":$n[0].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[1].Single,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[1].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Single,$n[1].Boolean,$n[1].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Text,"ps":0},{"n":"endValue","pt":$n[1].String,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[1].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[6].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[1].String,"ps":5}],"sn":"DOText","rt":$n[5].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[8].Text,$n[1].String,$n[1].Single,$n[1].Boolean,$n[6].ScrambleMode,$n[1].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Slider,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOValue","rt":$n[5].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[8].Slider,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[6].Tweener,"p":[$n[8].ScrollRect,$n[1].Single,$n[1].Single,$n[1].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[6].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[0].RectTransform,"ps":0},{"n":"to","pt":$n[0].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[0].Vector2,"p":[$n[0].RectTransform,$n[0].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[6].Sequence,"p":[$n[0].Material,pc.ColorGradient,$n[1].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[1].String,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[6].Sequence,"p":[$n[0].Material,pc.ColorGradient,$n[1].String,$n[1].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Material,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"propertyID","pt":$n[1].Int32,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOOffset","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Material,$n[0].Vector2,$n[1].Int32,$n[1].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Material,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"propertyID","pt":$n[1].Int32,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOTiling","rt":$n[5].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Material,$n[0].Vector2,$n[1].Int32,$n[1].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[0].CustomYieldInstruction,"p":[$n[6].Tween,$n[1].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[1].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[0].CustomYieldInstruction,"p":[$n[6].Tween,$n[1].Int32,$n[1].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[0].CustomYieldInstruction,"p":[$n[6].Tween,$n[1].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"position","pt":$n[1].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[0].CustomYieldInstruction,"p":[$n[6].Tween,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[0].CustomYieldInstruction,"p":[$n[6].Tween,$n[1].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[0].CustomYieldInstruction,"p":[$n[6].Tween,$n[1].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[6].DOTweenCYInstruction.WaitForCompletion,$n[6].DOTweenCYInstruction.WaitForRewind,$n[6].DOTweenCYInstruction.WaitForKill,$n[6].DOTweenCYInstruction.WaitForElapsedLoops,$n[6].DOTweenCYInstruction.WaitForPosition,$n[6].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween,$n[1].Int32],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[1].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[1].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween,$n[1].Single],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0},{"n":"position","pt":$n[1].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[1].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[6].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[1].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[1].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[1].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[6].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[1].Boolean,"ps":1},{"n":"isLocal","pt":$n[1].Boolean,"ps":2},{"n":"path","pt":$n[7].Path,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"pathMode","pt":$n[6].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[5].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].MonoBehaviour,$n[1].Boolean,$n[1].Boolean,$n[7].Path,$n[1].Single,$n[6].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[1].Boolean,"p":[$n[0].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[1].Boolean,"p":[$n[0].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[10].PathOptions,"ps":0},{"n":"t","pt":$n[6].Tween,"ps":1},{"n":"newRot","pt":$n[0].Quaternion,"ps":2},{"n":"trans","pt":$n[0].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[1].Void,"p":[$n[10].PathOptions,$n[6].Tween,$n[0].Quaternion,$n[0].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*PathCreation.BezierPath start.*/
    $m("PathCreation.BezierPath", function () { return {"nested":[$n[11].BezierPath.ControlMode],"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"n":".ctor","t":1,"p":[$n[2].IEnumerable$1(UnityEngine.Vector2),$n[11].PathSpace,$n[1].Boolean],"pi":[{"n":"points","pt":$n[2].IEnumerable$1(UnityEngine.Vector2),"ps":0},{"n":"space","dv":0,"o":true,"pt":$n[11].PathSpace,"ps":1},{"n":"isClosed","dv":false,"o":true,"pt":$n[1].Boolean,"ps":2}],"sn":"$ctor1"},{"a":2,"n":".ctor","t":1,"p":[$n[2].IEnumerable$1(UnityEngine.Vector3),$n[1].Boolean,$n[11].PathSpace],"pi":[{"n":"points","pt":$n[2].IEnumerable$1(UnityEngine.Vector3),"ps":0},{"n":"isClosed","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1},{"n":"space","dv":0,"o":true,"pt":$n[11].PathSpace,"ps":2}],"sn":"$ctor3"},{"a":2,"n":".ctor","t":1,"p":[$n[2].IEnumerable$1(UnityEngine.Vector2),$n[1].Boolean,$n[11].PathSpace],"pi":[{"n":"transforms","pt":$n[2].IEnumerable$1(UnityEngine.Vector2),"ps":0},{"n":"isClosed","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1},{"n":"space","dv":1,"o":true,"pt":$n[11].PathSpace,"ps":2}],"sn":"$ctor2"},{"a":2,"n":".ctor","t":1,"p":[$n[2].IEnumerable$1(UnityEngine.Transform),$n[1].Boolean,$n[11].PathSpace],"pi":[{"n":"transforms","pt":$n[2].IEnumerable$1(UnityEngine.Transform),"ps":0},{"n":"isClosed","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1},{"n":"space","dv":1,"o":true,"pt":$n[11].PathSpace,"ps":2}],"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Vector3,$n[1].Boolean,$n[11].PathSpace],"pi":[{"n":"centre","pt":$n[0].Vector3,"ps":0},{"n":"isClosed","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1},{"n":"space","dv":0,"o":true,"pt":$n[11].PathSpace,"ps":2}],"sn":"$ctor4"},{"a":2,"n":"AddSegmentToEnd","t":8,"pi":[{"n":"anchorPos","pt":$n[0].Vector3,"ps":0}],"sn":"AddSegmentToEnd","rt":$n[1].Void,"p":[$n[0].Vector3]},{"a":2,"n":"AddSegmentToStart","t":8,"pi":[{"n":"anchorPos","pt":$n[0].Vector3,"ps":0}],"sn":"AddSegmentToStart","rt":$n[1].Void,"p":[$n[0].Vector3]},{"a":1,"n":"AutoSetAllAffectedControlPoints","t":8,"pi":[{"n":"updatedAnchorIndex","pt":$n[1].Int32,"ps":0}],"sn":"AutoSetAllAffectedControlPoints","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":1,"n":"AutoSetAllControlPoints","t":8,"sn":"AutoSetAllControlPoints","rt":$n[1].Void},{"a":1,"n":"AutoSetAnchorControlPoints","t":8,"pi":[{"n":"anchorIndex","pt":$n[1].Int32,"ps":0}],"sn":"AutoSetAnchorControlPoints","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":1,"n":"AutoSetStartAndEndControls","t":8,"sn":"AutoSetStartAndEndControls","rt":$n[1].Void},{"a":2,"n":"CalculateBoundsWithTransform","t":8,"pi":[{"n":"transform","pt":$n[0].Transform,"ps":0}],"sn":"CalculateBoundsWithTransform","rt":$n[0].Bounds,"p":[$n[0].Transform]},{"a":2,"n":"DeleteSegment","t":8,"pi":[{"n":"anchorIndex","pt":$n[1].Int32,"ps":0}],"sn":"DeleteSegment","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"GetAnchorNormalAngle","t":8,"pi":[{"n":"anchorIndex","pt":$n[1].Int32,"ps":0}],"sn":"GetAnchorNormalAngle","rt":$n[1].Single,"p":[$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetPoint","t":8,"pi":[{"n":"i","pt":$n[1].Int32,"ps":0}],"sn":"GetPoint","rt":$n[0].Vector3,"p":[$n[1].Int32]},{"a":2,"n":"GetPointsInSegment","t":8,"pi":[{"n":"segmentIndex","pt":$n[1].Int32,"ps":0}],"sn":"GetPointsInSegment","rt":System.Array.type(UnityEngine.Vector3),"p":[$n[1].Int32]},{"a":1,"n":"LoopIndex","t":8,"pi":[{"n":"i","pt":$n[1].Int32,"ps":0}],"sn":"LoopIndex","rt":$n[1].Int32,"p":[$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"MovePoint","t":8,"pi":[{"n":"i","pt":$n[1].Int32,"ps":0},{"n":"pointPos","pt":$n[0].Vector3,"ps":1},{"n":"suppressPathModifiedEvent","dv":false,"o":true,"pt":$n[1].Boolean,"ps":2}],"sn":"MovePoint","rt":$n[1].Void,"p":[$n[1].Int32,$n[0].Vector3,$n[1].Boolean]},{"a":2,"n":"NotifyPathModified","t":8,"sn":"NotifyPathModified","rt":$n[1].Void},{"a":2,"n":"ResetNormalAngles","t":8,"sn":"ResetNormalAngles","rt":$n[1].Void},{"a":2,"n":"SetAnchorNormalAngle","t":8,"pi":[{"n":"anchorIndex","pt":$n[1].Int32,"ps":0},{"n":"angle","pt":$n[1].Single,"ps":1}],"sn":"SetAnchorNormalAngle","rt":$n[1].Void,"p":[$n[1].Int32,$n[1].Single]},{"a":2,"n":"SetPoint","t":8,"pi":[{"n":"i","pt":$n[1].Int32,"ps":0},{"n":"localPosition","pt":$n[0].Vector3,"ps":1},{"n":"suppressPathModifiedEvent","dv":false,"o":true,"pt":$n[1].Boolean,"ps":2}],"sn":"SetPoint","rt":$n[1].Void,"p":[$n[1].Int32,$n[0].Vector3,$n[1].Boolean]},{"a":2,"n":"SplitSegment","t":8,"pi":[{"n":"anchorPos","pt":$n[0].Vector3,"ps":0},{"n":"segmentIndex","pt":$n[1].Int32,"ps":1},{"n":"splitTime","pt":$n[1].Single,"ps":2}],"sn":"SplitSegment","rt":$n[1].Void,"p":[$n[0].Vector3,$n[1].Int32,$n[1].Single]},{"a":1,"n":"UpdateBounds","t":8,"sn":"UpdateBounds","rt":$n[1].Void},{"a":1,"n":"UpdateClosedState","t":8,"sn":"UpdateClosedState","rt":$n[1].Void},{"a":1,"n":"UpdateToNewPathSpace","t":8,"pi":[{"n":"previousSpace","pt":$n[11].PathSpace,"ps":0}],"sn":"UpdateToNewPathSpace","rt":$n[1].Void,"p":[$n[11].PathSpace]},{"a":2,"n":"AutoControlLength","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_AutoControlLength","t":8,"rt":$n[1].Single,"fg":"AutoControlLength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_AutoControlLength","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"AutoControlLength"},"fn":"AutoControlLength"},{"a":2,"n":"ControlPointMode","t":16,"rt":$n[11].BezierPath.ControlMode,"g":{"a":2,"n":"get_ControlPointMode","t":8,"rt":$n[11].BezierPath.ControlMode,"fg":"ControlPointMode","box":function ($v) { return Bridge.box($v, PathCreation.BezierPath.ControlMode, System.Enum.toStringFn(PathCreation.BezierPath.ControlMode));}},"s":{"a":2,"n":"set_ControlPointMode","t":8,"p":[$n[11].BezierPath.ControlMode],"rt":$n[1].Void,"fs":"ControlPointMode"},"fn":"ControlPointMode"},{"a":2,"n":"FlipNormals","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_FlipNormals","t":8,"rt":$n[1].Boolean,"fg":"FlipNormals","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_FlipNormals","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"FlipNormals"},"fn":"FlipNormals"},{"a":2,"n":"GlobalNormalsAngle","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_GlobalNormalsAngle","t":8,"rt":$n[1].Single,"fg":"GlobalNormalsAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_GlobalNormalsAngle","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"GlobalNormalsAngle"},"fn":"GlobalNormalsAngle"},{"a":2,"n":"IsClosed","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsClosed","t":8,"rt":$n[1].Boolean,"fg":"IsClosed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_IsClosed","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"IsClosed"},"fn":"IsClosed"},{"a":2,"n":"Item","t":16,"rt":$n[0].Vector3,"p":[$n[1].Int32],"i":true,"ipi":[{"n":"i","pt":$n[1].Int32,"ps":0}],"g":{"a":2,"n":"get_Item","t":8,"pi":[{"n":"i","pt":$n[1].Int32,"ps":0}],"sn":"getItem","rt":$n[0].Vector3,"p":[$n[1].Int32]}},{"a":2,"n":"NumAnchorPoints","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_NumAnchorPoints","t":8,"rt":$n[1].Int32,"fg":"NumAnchorPoints","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"NumAnchorPoints"},{"a":2,"n":"NumPoints","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_NumPoints","t":8,"rt":$n[1].Int32,"fg":"NumPoints","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"NumPoints"},{"a":2,"n":"NumSegments","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_NumSegments","t":8,"rt":$n[1].Int32,"fg":"NumSegments","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"NumSegments"},{"a":2,"n":"PathBounds","t":16,"rt":$n[0].Bounds,"g":{"a":2,"n":"get_PathBounds","t":8,"rt":$n[0].Bounds,"fg":"PathBounds"},"fn":"PathBounds"},{"a":2,"n":"Space","t":16,"rt":$n[11].PathSpace,"g":{"a":2,"n":"get_Space","t":8,"rt":$n[11].PathSpace,"fg":"Space","box":function ($v) { return Bridge.box($v, PathCreation.PathSpace, System.Enum.toStringFn(PathCreation.PathSpace));}},"s":{"a":2,"n":"set_Space","t":8,"p":[$n[11].PathSpace],"rt":$n[1].Void,"fs":"Space"},"fn":"Space"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"autoControlLength","t":4,"rt":$n[1].Single,"sn":"autoControlLength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"bounds","t":4,"rt":$n[0].Bounds,"sn":"bounds"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"boundsUpToDate","t":4,"rt":$n[1].Boolean,"sn":"boundsUpToDate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"controlMode","t":4,"rt":$n[11].BezierPath.ControlMode,"sn":"controlMode","box":function ($v) { return Bridge.box($v, PathCreation.BezierPath.ControlMode, System.Enum.toStringFn(PathCreation.BezierPath.ControlMode));}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"flipNormals","t":4,"rt":$n[1].Boolean,"sn":"flipNormals","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"globalNormalsAngle","t":4,"rt":$n[1].Single,"sn":"globalNormalsAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"isClosed","t":4,"rt":$n[1].Boolean,"sn":"isClosed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"perAnchorNormalsAngle","t":4,"rt":$n[2].List$1(System.Single),"sn":"perAnchorNormalsAngle"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"points","t":4,"rt":$n[2].List$1(UnityEngine.Vector3),"sn":"points"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"space","t":4,"rt":$n[11].PathSpace,"sn":"space","box":function ($v) { return Bridge.box($v, PathCreation.PathSpace, System.Enum.toStringFn(PathCreation.PathSpace));}},{"a":2,"n":"OnModified","t":2,"ad":{"a":2,"n":"add_OnModified","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnModified","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnModified","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnModified","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*PathCreation.BezierPath end.*/

    /*PathCreation.BezierPath+ControlMode start.*/
    $m("PathCreation.BezierPath.ControlMode", function () { return {"td":$n[11].BezierPath,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Aligned","is":true,"t":4,"rt":$n[11].BezierPath.ControlMode,"sn":"Aligned","box":function ($v) { return Bridge.box($v, PathCreation.BezierPath.ControlMode, System.Enum.toStringFn(PathCreation.BezierPath.ControlMode));}},{"a":2,"n":"Automatic","is":true,"t":4,"rt":$n[11].BezierPath.ControlMode,"sn":"Automatic","box":function ($v) { return Bridge.box($v, PathCreation.BezierPath.ControlMode, System.Enum.toStringFn(PathCreation.BezierPath.ControlMode));}},{"a":2,"n":"Free","is":true,"t":4,"rt":$n[11].BezierPath.ControlMode,"sn":"Free","box":function ($v) { return Bridge.box($v, PathCreation.BezierPath.ControlMode, System.Enum.toStringFn(PathCreation.BezierPath.ControlMode));}},{"a":2,"n":"Mirrored","is":true,"t":4,"rt":$n[11].BezierPath.ControlMode,"sn":"Mirrored","box":function ($v) { return Bridge.box($v, PathCreation.BezierPath.ControlMode, System.Enum.toStringFn(PathCreation.BezierPath.ControlMode));}}]}; }, $n);
    /*PathCreation.BezierPath+ControlMode end.*/

    /*PathCreation.EndOfPathInstruction start.*/
    $m("PathCreation.EndOfPathInstruction", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Loop","is":true,"t":4,"rt":$n[11].EndOfPathInstruction,"sn":"Loop","box":function ($v) { return Bridge.box($v, PathCreation.EndOfPathInstruction, System.Enum.toStringFn(PathCreation.EndOfPathInstruction));}},{"a":2,"n":"Reverse","is":true,"t":4,"rt":$n[11].EndOfPathInstruction,"sn":"Reverse","box":function ($v) { return Bridge.box($v, PathCreation.EndOfPathInstruction, System.Enum.toStringFn(PathCreation.EndOfPathInstruction));}},{"a":2,"n":"Stop","is":true,"t":4,"rt":$n[11].EndOfPathInstruction,"sn":"Stop","box":function ($v) { return Bridge.box($v, PathCreation.EndOfPathInstruction, System.Enum.toStringFn(PathCreation.EndOfPathInstruction));}}]}; }, $n);
    /*PathCreation.EndOfPathInstruction end.*/

    /*PathCreation.GlobalDisplaySettings start.*/
    $m("PathCreation.GlobalDisplaySettings", function () { return {"nested":[$n[11].GlobalDisplaySettings.HandleType],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.HeaderAttribute("Anchor Colours")],"a":2,"n":"anchor","t":4,"rt":$n[0].Color,"sn":"anchor"},{"a":2,"n":"anchorHighlighted","t":4,"rt":$n[0].Color,"sn":"anchorHighlighted"},{"a":2,"n":"anchorSelected","t":4,"rt":$n[0].Color,"sn":"anchorSelected"},{"a":2,"n":"anchorShape","t":4,"rt":$n[11].GlobalDisplaySettings.HandleType,"sn":"anchorShape","box":function ($v) { return Bridge.box($v, PathCreation.GlobalDisplaySettings.HandleType, System.Enum.toStringFn(PathCreation.GlobalDisplaySettings.HandleType));}},{"at":[new UnityEngine.HeaderAttribute("Appearance")],"a":2,"n":"anchorSize","t":4,"rt":$n[1].Single,"sn":"anchorSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Bezier Path Colours")],"a":2,"n":"bezierPath","t":4,"rt":$n[0].Color,"sn":"bezierPath"},{"a":2,"n":"bounds","t":4,"rt":$n[0].Color,"sn":"bounds"},{"at":[new UnityEngine.HeaderAttribute("Control Colours")],"a":2,"n":"control","t":4,"rt":$n[0].Color,"sn":"control"},{"a":2,"n":"controlHighlighted","t":4,"rt":$n[0].Color,"sn":"controlHighlighted"},{"a":2,"n":"controlLine","t":4,"rt":$n[0].Color,"sn":"controlLine"},{"a":2,"n":"controlSelected","t":4,"rt":$n[0].Color,"sn":"controlSelected"},{"a":2,"n":"controlShape","t":4,"rt":$n[11].GlobalDisplaySettings.HandleType,"sn":"controlShape","box":function ($v) { return Bridge.box($v, PathCreation.GlobalDisplaySettings.HandleType, System.Enum.toStringFn(PathCreation.GlobalDisplaySettings.HandleType));}},{"a":2,"n":"controlSize","t":4,"rt":$n[1].Single,"sn":"controlSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"handleDisabled","t":4,"rt":$n[0].Color,"sn":"handleDisabled"},{"at":[new UnityEngine.TooltipAttribute("If true, control points will be hidden when the control point mode is set to automatic. Otherwise they will inactive, but still visible.")],"a":2,"n":"hideAutoControls","t":4,"rt":$n[1].Boolean,"sn":"hideAutoControls","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"highlightedPath","t":4,"rt":$n[0].Color,"sn":"highlightedPath"},{"at":[new UnityEngine.HeaderAttribute("Normals")],"a":2,"n":"normals","t":4,"rt":$n[0].Color,"sn":"normals"},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"normalsLength","t":4,"rt":$n[1].Single,"sn":"normalsLength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"segmentBounds","t":4,"rt":$n[0].Color,"sn":"segmentBounds"},{"at":[new UnityEngine.HeaderAttribute("Vertex Path Colours")],"a":2,"n":"vertexPath","t":4,"rt":$n[0].Color,"sn":"vertexPath"},{"at":[new UnityEngine.TooltipAttribute("Should the path still be drawn when behind objects in the scene?")],"a":2,"n":"visibleBehindObjects","t":4,"rt":$n[1].Boolean,"sn":"visibleBehindObjects","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Should the path be drawn even when the path object is not selected?")],"a":2,"n":"visibleWhenNotSelected","t":4,"rt":$n[1].Boolean,"sn":"visibleWhenNotSelected","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*PathCreation.GlobalDisplaySettings end.*/

    /*PathCreation.GlobalDisplaySettings+HandleType start.*/
    $m("PathCreation.GlobalDisplaySettings.HandleType", function () { return {"td":$n[11].GlobalDisplaySettings,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Circle","is":true,"t":4,"rt":$n[11].GlobalDisplaySettings.HandleType,"sn":"Circle","box":function ($v) { return Bridge.box($v, PathCreation.GlobalDisplaySettings.HandleType, System.Enum.toStringFn(PathCreation.GlobalDisplaySettings.HandleType));}},{"a":2,"n":"Sphere","is":true,"t":4,"rt":$n[11].GlobalDisplaySettings.HandleType,"sn":"Sphere","box":function ($v) { return Bridge.box($v, PathCreation.GlobalDisplaySettings.HandleType, System.Enum.toStringFn(PathCreation.GlobalDisplaySettings.HandleType));}},{"a":2,"n":"Square","is":true,"t":4,"rt":$n[11].GlobalDisplaySettings.HandleType,"sn":"Square","box":function ($v) { return Bridge.box($v, PathCreation.GlobalDisplaySettings.HandleType, System.Enum.toStringFn(PathCreation.GlobalDisplaySettings.HandleType));}}]}; }, $n);
    /*PathCreation.GlobalDisplaySettings+HandleType end.*/

    /*PathCreation.MinMax3D start.*/
    $m("PathCreation.MinMax3D", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddValue","t":8,"pi":[{"n":"v","pt":$n[0].Vector3,"ps":0}],"sn":"AddValue","rt":$n[1].Void,"p":[$n[0].Vector3]},{"a":2,"n":"Max","t":16,"rt":$n[0].Vector3,"g":{"a":2,"n":"get_Max","t":8,"rt":$n[0].Vector3,"fg":"Max"},"s":{"a":1,"n":"set_Max","t":8,"p":[$n[0].Vector3],"rt":$n[1].Void,"fs":"Max"},"fn":"Max"},{"a":2,"n":"Min","t":16,"rt":$n[0].Vector3,"g":{"a":2,"n":"get_Min","t":8,"rt":$n[0].Vector3,"fg":"Min"},"s":{"a":1,"n":"set_Min","t":8,"p":[$n[0].Vector3],"rt":$n[1].Void,"fs":"Min"},"fn":"Min"},{"a":1,"backing":true,"n":"<Max>k__BackingField","t":4,"rt":$n[0].Vector3,"sn":"Max"},{"a":1,"backing":true,"n":"<Min>k__BackingField","t":4,"rt":$n[0].Vector3,"sn":"Min"}]}; }, $n);
    /*PathCreation.MinMax3D end.*/

    /*PathCreation.PathCreator start.*/
    $m("PathCreation.PathCreator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"InitializeEditorData","t":8,"pi":[{"n":"in2DMode","pt":$n[1].Boolean,"ps":0}],"sn":"InitializeEditorData","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"TriggerPathUpdate","t":8,"sn":"TriggerPathUpdate","rt":$n[1].Void},{"a":2,"n":"EditorData","t":16,"rt":$n[11].PathCreatorData,"g":{"a":2,"n":"get_EditorData","t":8,"rt":$n[11].PathCreatorData,"fg":"EditorData"},"fn":"EditorData"},{"a":2,"n":"bezierPath","t":16,"rt":$n[11].BezierPath,"g":{"a":2,"n":"get_bezierPath","t":8,"rt":$n[11].BezierPath,"fg":"bezierPath"},"s":{"a":2,"n":"set_bezierPath","t":8,"p":[$n[11].BezierPath],"rt":$n[1].Void,"fs":"bezierPath"},"fn":"bezierPath"},{"a":2,"n":"path","t":16,"rt":$n[11].VertexPath,"g":{"a":2,"n":"get_path","t":8,"rt":$n[11].VertexPath,"fg":"path"},"fn":"path"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"editorData","t":4,"rt":$n[11].PathCreatorData,"sn":"editorData"},{"a":1,"n":"globalEditorDisplaySettings","t":4,"rt":$n[11].GlobalDisplaySettings,"sn":"globalEditorDisplaySettings"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"initialized","t":4,"rt":$n[1].Boolean,"sn":"initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"pathUpdated","t":2,"ad":{"a":2,"n":"add_pathUpdated","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addpathUpdated","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_pathUpdated","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removepathUpdated","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*PathCreation.PathCreator end.*/

    /*PathCreation.PathCreatorData start.*/
    $m("PathCreation.PathCreatorData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"BezierPathEdited","t":8,"sn":"BezierPathEdited","rt":$n[1].Void},{"a":1,"n":"CreateBezier","t":8,"pi":[{"n":"centre","pt":$n[0].Vector3,"ps":0},{"n":"defaultIs2D","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1}],"sn":"CreateBezier","rt":$n[1].Void,"p":[$n[0].Vector3,$n[1].Boolean]},{"a":2,"n":"GetVertexPath","t":8,"pi":[{"n":"transform","pt":$n[0].Transform,"ps":0}],"sn":"GetVertexPath","rt":$n[11].VertexPath,"p":[$n[0].Transform]},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"defaultIs2D","pt":$n[1].Boolean,"ps":0}],"sn":"Initialize","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"PathModifiedByUndo","t":8,"sn":"PathModifiedByUndo","rt":$n[1].Void},{"a":2,"n":"PathTransformed","t":8,"sn":"PathTransformed","rt":$n[1].Void},{"a":2,"n":"ResetBezierPath","t":8,"pi":[{"n":"centre","pt":$n[0].Vector3,"ps":0},{"n":"defaultIs2D","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1}],"sn":"ResetBezierPath","rt":$n[1].Void,"p":[$n[0].Vector3,$n[1].Boolean]},{"a":2,"n":"VertexPathSettingsChanged","t":8,"sn":"VertexPathSettingsChanged","rt":$n[1].Void},{"a":2,"n":"bezierPath","t":16,"rt":$n[11].BezierPath,"g":{"a":2,"n":"get_bezierPath","t":8,"rt":$n[11].BezierPath,"fg":"bezierPath"},"s":{"a":2,"n":"set_bezierPath","t":8,"p":[$n[11].BezierPath],"rt":$n[1].Void,"fs":"bezierPath"},"fn":"bezierPath"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_bezierPath","t":4,"rt":$n[11].BezierPath,"sn":"_bezierPath"},{"a":1,"n":"_vertexPath","t":4,"rt":$n[11].VertexPath,"sn":"_vertexPath"},{"a":2,"n":"bezierHandleScale","t":4,"rt":$n[1].Single,"sn":"bezierHandleScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"displayAnchorPoints","t":4,"rt":$n[1].Boolean,"sn":"displayAnchorPoints","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"displayControlPoints","t":4,"rt":$n[1].Boolean,"sn":"displayControlPoints","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"globalDisplaySettingsFoldout","t":4,"rt":$n[1].Boolean,"sn":"globalDisplaySettingsFoldout","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"keepConstantHandleSize","t":4,"rt":$n[1].Boolean,"sn":"keepConstantHandleSize","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showBezierPathInVertexMode","t":4,"rt":$n[1].Boolean,"sn":"showBezierPathInVertexMode","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showDisplayOptions","t":4,"rt":$n[1].Boolean,"sn":"showDisplayOptions","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showNormals","t":4,"rt":$n[1].Boolean,"sn":"showNormals","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showNormalsHelpInfo","t":4,"rt":$n[1].Boolean,"sn":"showNormalsHelpInfo","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showNormalsInVertexMode","t":4,"rt":$n[1].Boolean,"sn":"showNormalsInVertexMode","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showPathBounds","t":4,"rt":$n[1].Boolean,"sn":"showPathBounds","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showPathOptions","t":4,"rt":$n[1].Boolean,"sn":"showPathOptions","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showPerSegmentBounds","t":4,"rt":$n[1].Boolean,"sn":"showPerSegmentBounds","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showTransformTool","t":4,"rt":$n[1].Boolean,"sn":"showTransformTool","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showVertexPathDisplayOptions","t":4,"rt":$n[1].Boolean,"sn":"showVertexPathDisplayOptions","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showVertexPathOptions","t":4,"rt":$n[1].Boolean,"sn":"showVertexPathOptions","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"tabIndex","t":4,"rt":$n[1].Int32,"sn":"tabIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"vertexPathMaxAngleError","t":4,"rt":$n[1].Single,"sn":"vertexPathMaxAngleError","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"vertexPathMinVertexSpacing","t":4,"rt":$n[1].Single,"sn":"vertexPathMinVertexSpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"vertexPathUpToDate","t":4,"rt":$n[1].Boolean,"sn":"vertexPathUpToDate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"bezierCreated","t":2,"ad":{"a":2,"n":"add_bezierCreated","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addbezierCreated","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_bezierCreated","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removebezierCreated","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"bezierOrVertexPathModified","t":2,"ad":{"a":2,"n":"add_bezierOrVertexPathModified","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addbezierOrVertexPathModified","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_bezierOrVertexPathModified","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removebezierOrVertexPathModified","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*PathCreation.PathCreatorData end.*/

    /*PathCreation.PathSpace start.*/
    $m("PathCreation.PathSpace", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"xy","is":true,"t":4,"rt":$n[11].PathSpace,"sn":"xy","box":function ($v) { return Bridge.box($v, PathCreation.PathSpace, System.Enum.toStringFn(PathCreation.PathSpace));}},{"a":2,"n":"xyz","is":true,"t":4,"rt":$n[11].PathSpace,"sn":"xyz","box":function ($v) { return Bridge.box($v, PathCreation.PathSpace, System.Enum.toStringFn(PathCreation.PathSpace));}},{"a":2,"n":"xz","is":true,"t":4,"rt":$n[11].PathSpace,"sn":"xz","box":function ($v) { return Bridge.box($v, PathCreation.PathSpace, System.Enum.toStringFn(PathCreation.PathSpace));}}]}; }, $n);
    /*PathCreation.PathSpace end.*/

    /*PathCreation.VertexPath start.*/
    $m("PathCreation.VertexPath", function () { return {"nested":[$n[11].VertexPath.TimeOnPathData],"att":1048577,"a":2,"m":[{"a":1,"n":".ctor","t":1,"p":[$n[11].BezierPath,$n[12].VertexPathUtility.PathSplitData,$n[0].Transform],"pi":[{"n":"bezierPath","pt":$n[11].BezierPath,"ps":0},{"n":"pathSplitData","pt":$n[12].VertexPathUtility.PathSplitData,"ps":1},{"n":"transform","pt":$n[0].Transform,"ps":2}],"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[11].BezierPath,$n[0].Transform,$n[1].Single],"pi":[{"n":"bezierPath","pt":$n[11].BezierPath,"ps":0},{"n":"transform","pt":$n[0].Transform,"ps":1},{"n":"vertexSpacing","pt":$n[1].Single,"ps":2}],"sn":"$ctor1"},{"a":2,"n":".ctor","t":1,"p":[$n[11].BezierPath,$n[0].Transform,$n[1].Single,$n[1].Single],"pi":[{"n":"bezierPath","pt":$n[11].BezierPath,"ps":0},{"n":"transform","pt":$n[0].Transform,"ps":1},{"n":"maxAngleError","dv":0.3,"o":true,"pt":$n[1].Single,"ps":2},{"n":"minVertexDst","dv":0.0,"o":true,"pt":$n[1].Single,"ps":3}],"sn":"$ctor2"},{"a":1,"n":"CalculateClosestPointOnPathData","t":8,"pi":[{"n":"worldPoint","pt":$n[0].Vector3,"ps":0}],"sn":"CalculateClosestPointOnPathData","rt":$n[11].VertexPath.TimeOnPathData,"p":[$n[0].Vector3]},{"a":1,"n":"CalculatePercentOnPathData","t":8,"pi":[{"n":"t","pt":$n[1].Single,"ps":0},{"n":"endOfPathInstruction","pt":$n[11].EndOfPathInstruction,"ps":1}],"sn":"CalculatePercentOnPathData","rt":$n[11].VertexPath.TimeOnPathData,"p":[$n[1].Single,$n[11].EndOfPathInstruction]},{"a":2,"n":"GetClosestDistanceAlongPath","t":8,"pi":[{"n":"worldPoint","pt":$n[0].Vector3,"ps":0}],"sn":"GetClosestDistanceAlongPath","rt":$n[1].Single,"p":[$n[0].Vector3],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetClosestPointOnPath","t":8,"pi":[{"n":"worldPoint","pt":$n[0].Vector3,"ps":0}],"sn":"GetClosestPointOnPath","rt":$n[0].Vector3,"p":[$n[0].Vector3]},{"a":2,"n":"GetClosestTimeOnPath","t":8,"pi":[{"n":"worldPoint","pt":$n[0].Vector3,"ps":0}],"sn":"GetClosestTimeOnPath","rt":$n[1].Single,"p":[$n[0].Vector3],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetDirection","t":8,"pi":[{"n":"t","pt":$n[1].Single,"ps":0},{"n":"endOfPathInstruction","dv":0,"o":true,"pt":$n[11].EndOfPathInstruction,"ps":1}],"sn":"GetDirection","rt":$n[0].Vector3,"p":[$n[1].Single,$n[11].EndOfPathInstruction]},{"a":2,"n":"GetDirectionAtDistance","t":8,"pi":[{"n":"dst","pt":$n[1].Single,"ps":0},{"n":"endOfPathInstruction","dv":0,"o":true,"pt":$n[11].EndOfPathInstruction,"ps":1}],"sn":"GetDirectionAtDistance","rt":$n[0].Vector3,"p":[$n[1].Single,$n[11].EndOfPathInstruction]},{"a":2,"n":"GetNormal","t":8,"pi":[{"n":"index","pt":$n[1].Int32,"ps":0}],"sn":"GetNormal","rt":$n[0].Vector3,"p":[$n[1].Int32]},{"a":2,"n":"GetNormal","t":8,"pi":[{"n":"t","pt":$n[1].Single,"ps":0},{"n":"endOfPathInstruction","dv":0,"o":true,"pt":$n[11].EndOfPathInstruction,"ps":1}],"sn":"GetNormal$1","rt":$n[0].Vector3,"p":[$n[1].Single,$n[11].EndOfPathInstruction]},{"a":2,"n":"GetNormalAtDistance","t":8,"pi":[{"n":"dst","pt":$n[1].Single,"ps":0},{"n":"endOfPathInstruction","dv":0,"o":true,"pt":$n[11].EndOfPathInstruction,"ps":1}],"sn":"GetNormalAtDistance","rt":$n[0].Vector3,"p":[$n[1].Single,$n[11].EndOfPathInstruction]},{"a":2,"n":"GetPoint","t":8,"pi":[{"n":"index","pt":$n[1].Int32,"ps":0}],"sn":"GetPoint","rt":$n[0].Vector3,"p":[$n[1].Int32]},{"a":2,"n":"GetPointAtDistance","t":8,"pi":[{"n":"dst","pt":$n[1].Single,"ps":0},{"n":"endOfPathInstruction","dv":0,"o":true,"pt":$n[11].EndOfPathInstruction,"ps":1}],"sn":"GetPointAtDistance","rt":$n[0].Vector3,"p":[$n[1].Single,$n[11].EndOfPathInstruction]},{"a":2,"n":"GetPointAtTime","t":8,"pi":[{"n":"t","pt":$n[1].Single,"ps":0},{"n":"endOfPathInstruction","dv":0,"o":true,"pt":$n[11].EndOfPathInstruction,"ps":1}],"sn":"GetPointAtTime","rt":$n[0].Vector3,"p":[$n[1].Single,$n[11].EndOfPathInstruction]},{"a":2,"n":"GetRotation","t":8,"pi":[{"n":"t","pt":$n[1].Single,"ps":0},{"n":"endOfPathInstruction","dv":0,"o":true,"pt":$n[11].EndOfPathInstruction,"ps":1}],"sn":"GetRotation","rt":$n[0].Quaternion,"p":[$n[1].Single,$n[11].EndOfPathInstruction]},{"a":2,"n":"GetRotationAtDistance","t":8,"pi":[{"n":"dst","pt":$n[1].Single,"ps":0},{"n":"endOfPathInstruction","dv":0,"o":true,"pt":$n[11].EndOfPathInstruction,"ps":1}],"sn":"GetRotationAtDistance","rt":$n[0].Quaternion,"p":[$n[1].Single,$n[11].EndOfPathInstruction]},{"a":2,"n":"GetTangent","t":8,"pi":[{"n":"index","pt":$n[1].Int32,"ps":0}],"sn":"GetTangent","rt":$n[0].Vector3,"p":[$n[1].Int32]},{"a":2,"n":"UpdateTransform","t":8,"pi":[{"n":"transform","pt":$n[0].Transform,"ps":0}],"sn":"UpdateTransform","rt":$n[1].Void,"p":[$n[0].Transform]},{"a":2,"n":"NumPoints","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_NumPoints","t":8,"rt":$n[1].Int32,"fg":"NumPoints","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"NumPoints"},{"a":1,"n":"accuracy","is":true,"t":4,"rt":$n[1].Int32,"sn":"accuracy","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"bounds","t":4,"rt":$n[0].Bounds,"sn":"bounds","ro":true},{"a":2,"n":"cumulativeLengthAtEachVertex","t":4,"rt":$n[1].Array.type(System.Single),"sn":"cumulativeLengthAtEachVertex","ro":true},{"a":2,"n":"isClosedLoop","t":4,"rt":$n[1].Boolean,"sn":"isClosedLoop","ro":true,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"length","t":4,"rt":$n[1].Single,"sn":"length","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"localNormals","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"localNormals","ro":true},{"a":2,"n":"localPoints","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"localPoints","ro":true},{"a":2,"n":"localTangents","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"localTangents","ro":true},{"a":1,"n":"minVertexSpacing","is":true,"t":4,"rt":$n[1].Single,"sn":"minVertexSpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"space","t":4,"rt":$n[11].PathSpace,"sn":"space","ro":true,"box":function ($v) { return Bridge.box($v, PathCreation.PathSpace, System.Enum.toStringFn(PathCreation.PathSpace));}},{"a":2,"n":"times","t":4,"rt":$n[1].Array.type(System.Single),"sn":"times","ro":true},{"a":1,"n":"transform","t":4,"rt":$n[0].Transform,"sn":"transform"},{"a":2,"n":"up","t":4,"rt":$n[0].Vector3,"sn":"up","ro":true}]}; }, $n);
    /*PathCreation.VertexPath end.*/

    /*PathCreation.VertexPath+TimeOnPathData start.*/
    $m("PathCreation.VertexPath.TimeOnPathData", function () { return {"td":$n[11].VertexPath,"att":1048842,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[1].Int32,$n[1].Int32,$n[1].Single],"pi":[{"n":"prev","pt":$n[1].Int32,"ps":0},{"n":"next","pt":$n[1].Int32,"ps":1},{"n":"percentBetweenIndices","pt":$n[1].Single,"ps":2}],"sn":"$ctor1"},{"a":2,"n":"nextIndex","t":4,"rt":$n[1].Int32,"sn":"nextIndex","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"percentBetweenIndices","t":4,"rt":$n[1].Single,"sn":"percentBetweenIndices","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"previousIndex","t":4,"rt":$n[1].Int32,"sn":"previousIndex","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*PathCreation.VertexPath+TimeOnPathData end.*/

    /*PathCreation.Examples.GeneratePathExample start.*/
    $m("PathCreation.Examples.GeneratePathExample", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(PathCreation.PathCreator)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"closedLoop","t":4,"rt":$n[1].Boolean,"sn":"closedLoop","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"waypoints","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"waypoints"}]}; }, $n);
    /*PathCreation.Examples.GeneratePathExample end.*/

    /*PathCreation.Examples.PathFollower start.*/
    $m("PathCreation.Examples.PathFollower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnPathChanged","t":8,"sn":"OnPathChanged","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"distanceTravelled","t":4,"rt":$n[1].Single,"sn":"distanceTravelled","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"endOfPathInstruction","t":4,"rt":$n[11].EndOfPathInstruction,"sn":"endOfPathInstruction","box":function ($v) { return Bridge.box($v, PathCreation.EndOfPathInstruction, System.Enum.toStringFn(PathCreation.EndOfPathInstruction));}},{"a":2,"n":"pathCreator","t":4,"rt":$n[11].PathCreator,"sn":"pathCreator"},{"a":2,"n":"speed","t":4,"rt":$n[1].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PathCreation.Examples.PathFollower end.*/

    /*PathCreation.Examples.PathPlacer start.*/
    $m("PathCreation.Examples.PathPlacer", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.ExecuteInEditModeAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DestroyObjects","t":8,"sn":"DestroyObjects","rt":$n[1].Void},{"a":1,"n":"Generate","t":8,"sn":"Generate","rt":$n[1].Void},{"ov":true,"a":3,"n":"PathUpdated","t":8,"sn":"PathUpdated","rt":$n[1].Void},{"a":2,"n":"holder","t":4,"rt":$n[0].GameObject,"sn":"holder"},{"a":1,"n":"minSpacing","is":true,"t":4,"rt":$n[1].Single,"sn":"minSpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"prefab","t":4,"rt":$n[0].GameObject,"sn":"prefab"},{"a":2,"n":"spacing","t":4,"rt":$n[1].Single,"sn":"spacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PathCreation.Examples.PathPlacer end.*/

    /*PathCreation.Examples.PathSceneTool start.*/
    $m("PathCreation.Examples.PathSceneTool", function () { return {"att":1048705,"a":2,"at":[new UnityEngine.ExecuteInEditModeAttribute()],"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":3,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[1].Void},{"ab":true,"a":3,"n":"PathUpdated","t":8,"sn":"PathUpdated","rt":$n[1].Void},{"a":2,"n":"TriggerUpdate","t":8,"sn":"TriggerUpdate","rt":$n[1].Void},{"a":3,"n":"path","t":16,"rt":$n[11].VertexPath,"g":{"a":3,"n":"get_path","t":8,"rt":$n[11].VertexPath,"fg":"path"},"fn":"path"},{"a":2,"n":"autoUpdate","t":4,"rt":$n[1].Boolean,"sn":"autoUpdate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"pathCreator","t":4,"rt":$n[11].PathCreator,"sn":"pathCreator"},{"a":2,"n":"onDestroyed","t":2,"ad":{"a":2,"n":"add_onDestroyed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addonDestroyed","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_onDestroyed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeonDestroyed","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*PathCreation.Examples.PathSceneTool end.*/

    /*PathCreation.Examples.PathSpawner start.*/
    $m("PathCreation.Examples.PathSpawner", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"followerPrefab","t":4,"rt":$n[13].PathFollower,"sn":"followerPrefab"},{"a":2,"n":"pathPrefab","t":4,"rt":$n[11].PathCreator,"sn":"pathPrefab"},{"a":2,"n":"spawnPoints","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"spawnPoints"}]}; }, $n);
    /*PathCreation.Examples.PathSpawner end.*/

    /*PathCreation.Examples.RoadMeshCreator start.*/
    $m("PathCreation.Examples.RoadMeshCreator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AssignMaterials","t":8,"sn":"AssignMaterials","rt":$n[1].Void},{"a":1,"n":"AssignMeshComponents","t":8,"sn":"AssignMeshComponents","rt":$n[1].Void},{"a":1,"n":"CreateRoadMesh","t":8,"sn":"CreateRoadMesh","rt":$n[1].Void},{"ov":true,"a":3,"n":"PathUpdated","t":8,"sn":"PathUpdated","rt":$n[1].Void},{"a":2,"n":"flattenSurface","t":4,"rt":$n[1].Boolean,"sn":"flattenSurface","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"mesh","t":4,"rt":$n[0].Mesh,"sn":"mesh"},{"a":1,"n":"meshFilter","t":4,"rt":$n[0].MeshFilter,"sn":"meshFilter"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"meshHolder","t":4,"rt":$n[0].GameObject,"sn":"meshHolder"},{"a":1,"n":"meshRenderer","t":4,"rt":$n[0].MeshRenderer,"sn":"meshRenderer"},{"at":[new UnityEngine.HeaderAttribute("Material settings")],"a":2,"n":"roadMaterial","t":4,"rt":$n[0].Material,"sn":"roadMaterial"},{"at":[new UnityEngine.HeaderAttribute("Road settings")],"a":2,"n":"roadWidth","t":4,"rt":$n[1].Single,"sn":"roadWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"textureTiling","t":4,"rt":$n[1].Single,"sn":"textureTiling","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.RangeAttribute(0.0, 0.5)],"a":2,"n":"thickness","t":4,"rt":$n[1].Single,"sn":"thickness","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"undersideMaterial","t":4,"rt":$n[0].Material,"sn":"undersideMaterial"}]}; }, $n);
    /*PathCreation.Examples.RoadMeshCreator end.*/

    /*PathCreation.Utility.CubicBezierUtility start.*/
    $m("PathCreation.Utility.CubicBezierUtility", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"CalculateSegmentBounds","is":true,"t":8,"pi":[{"n":"p0","pt":$n[0].Vector3,"ps":0},{"n":"p1","pt":$n[0].Vector3,"ps":1},{"n":"p2","pt":$n[0].Vector3,"ps":2},{"n":"p3","pt":$n[0].Vector3,"ps":3}],"sn":"CalculateSegmentBounds","rt":$n[0].Bounds,"p":[$n[0].Vector3,$n[0].Vector3,$n[0].Vector3,$n[0].Vector3]},{"a":2,"n":"EstimateCurveLength","is":true,"t":8,"pi":[{"n":"p0","pt":$n[0].Vector3,"ps":0},{"n":"p1","pt":$n[0].Vector3,"ps":1},{"n":"p2","pt":$n[0].Vector3,"ps":2},{"n":"p3","pt":$n[0].Vector3,"ps":3}],"sn":"EstimateCurveLength","rt":$n[1].Single,"p":[$n[0].Vector3,$n[0].Vector3,$n[0].Vector3,$n[0].Vector3],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"EvaluateCurve","is":true,"t":8,"pi":[{"n":"points","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"t","pt":$n[1].Single,"ps":1}],"sn":"EvaluateCurve$1","rt":$n[0].Vector3,"p":[System.Array.type(UnityEngine.Vector3),$n[1].Single]},{"a":2,"n":"EvaluateCurve","is":true,"t":8,"pi":[{"n":"a1","pt":$n[0].Vector3,"ps":0},{"n":"c1","pt":$n[0].Vector3,"ps":1},{"n":"c2","pt":$n[0].Vector3,"ps":2},{"n":"a2","pt":$n[0].Vector3,"ps":3},{"n":"t","pt":$n[1].Single,"ps":4}],"sn":"EvaluateCurve","rt":$n[0].Vector3,"p":[$n[0].Vector3,$n[0].Vector3,$n[0].Vector3,$n[0].Vector3,$n[1].Single]},{"a":2,"n":"EvaluateCurveDerivative","is":true,"t":8,"pi":[{"n":"points","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"t","pt":$n[1].Single,"ps":1}],"sn":"EvaluateCurveDerivative$1","rt":$n[0].Vector3,"p":[System.Array.type(UnityEngine.Vector3),$n[1].Single]},{"a":2,"n":"EvaluateCurveDerivative","is":true,"t":8,"pi":[{"n":"a1","pt":$n[0].Vector3,"ps":0},{"n":"c1","pt":$n[0].Vector3,"ps":1},{"n":"c2","pt":$n[0].Vector3,"ps":2},{"n":"a2","pt":$n[0].Vector3,"ps":3},{"n":"t","pt":$n[1].Single,"ps":4}],"sn":"EvaluateCurveDerivative","rt":$n[0].Vector3,"p":[$n[0].Vector3,$n[0].Vector3,$n[0].Vector3,$n[0].Vector3,$n[1].Single]},{"a":2,"n":"EvaluateCurveSecondDerivative","is":true,"t":8,"pi":[{"n":"points","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"t","pt":$n[1].Single,"ps":1}],"sn":"EvaluateCurveSecondDerivative$1","rt":$n[0].Vector3,"p":[System.Array.type(UnityEngine.Vector3),$n[1].Single]},{"a":2,"n":"EvaluateCurveSecondDerivative","is":true,"t":8,"pi":[{"n":"a1","pt":$n[0].Vector3,"ps":0},{"n":"c1","pt":$n[0].Vector3,"ps":1},{"n":"c2","pt":$n[0].Vector3,"ps":2},{"n":"a2","pt":$n[0].Vector3,"ps":3},{"n":"t","pt":$n[1].Single,"ps":4}],"sn":"EvaluateCurveSecondDerivative","rt":$n[0].Vector3,"p":[$n[0].Vector3,$n[0].Vector3,$n[0].Vector3,$n[0].Vector3,$n[1].Single]},{"a":2,"n":"ExtremePointTimes","is":true,"t":8,"pi":[{"n":"p0","pt":$n[0].Vector3,"ps":0},{"n":"p1","pt":$n[0].Vector3,"ps":1},{"n":"p2","pt":$n[0].Vector3,"ps":2},{"n":"p3","pt":$n[0].Vector3,"ps":3}],"sn":"ExtremePointTimes","rt":$n[2].List$1(System.Single),"p":[$n[0].Vector3,$n[0].Vector3,$n[0].Vector3,$n[0].Vector3]},{"a":2,"n":"Normal","is":true,"t":8,"pi":[{"n":"points","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"t","pt":$n[1].Single,"ps":1}],"sn":"Normal$1","rt":$n[0].Vector3,"p":[System.Array.type(UnityEngine.Vector3),$n[1].Single]},{"a":2,"n":"Normal","is":true,"t":8,"pi":[{"n":"a1","pt":$n[0].Vector3,"ps":0},{"n":"c1","pt":$n[0].Vector3,"ps":1},{"n":"c2","pt":$n[0].Vector3,"ps":2},{"n":"a2","pt":$n[0].Vector3,"ps":3},{"n":"t","pt":$n[1].Single,"ps":4}],"sn":"Normal","rt":$n[0].Vector3,"p":[$n[0].Vector3,$n[0].Vector3,$n[0].Vector3,$n[0].Vector3,$n[1].Single]},{"a":2,"n":"SplitCurve","is":true,"t":8,"pi":[{"n":"points","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"t","pt":$n[1].Single,"ps":1}],"sn":"SplitCurve","rt":System.Array.type(System.Array.type(UnityEngine.Vector3)),"p":[System.Array.type(UnityEngine.Vector3),$n[1].Single]},{"a":1,"n":"StationaryPointTimes","is":true,"t":8,"pi":[{"n":"a","pt":$n[1].Single,"ps":0},{"n":"b","pt":$n[1].Single,"ps":1},{"n":"c","pt":$n[1].Single,"ps":2}],"sn":"StationaryPointTimes","rt":$n[2].IEnumerable$1(System.Single),"p":[$n[1].Single,$n[1].Single,$n[1].Single]}]}; }, $n);
    /*PathCreation.Utility.CubicBezierUtility end.*/

    /*PathCreation.Utility.MathUtility start.*/
    $m("PathCreation.Utility.MathUtility", function () { return {"nested":[$n[12].MathUtility.PosRotScale],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"ClosestPointOnLineSegment","is":true,"t":8,"pi":[{"n":"p","pt":$n[0].Vector2,"ps":0},{"n":"a","pt":$n[0].Vector2,"ps":1},{"n":"b","pt":$n[0].Vector2,"ps":2}],"sn":"ClosestPointOnLineSegment","rt":$n[0].Vector2,"p":[$n[0].Vector2,$n[0].Vector2,$n[0].Vector2]},{"a":2,"n":"ClosestPointOnLineSegment","is":true,"t":8,"pi":[{"n":"p","pt":$n[0].Vector3,"ps":0},{"n":"a","pt":$n[0].Vector3,"ps":1},{"n":"b","pt":$n[0].Vector3,"ps":2}],"sn":"ClosestPointOnLineSegment$1","rt":$n[0].Vector3,"p":[$n[0].Vector3,$n[0].Vector3,$n[0].Vector3]},{"a":2,"n":"InverseTransformDirection","is":true,"t":8,"pi":[{"n":"p","pt":$n[0].Vector3,"ps":0},{"n":"t","pt":$n[0].Transform,"ps":1},{"n":"space","pt":$n[11].PathSpace,"ps":2}],"sn":"InverseTransformDirection","rt":$n[0].Vector3,"p":[$n[0].Vector3,$n[0].Transform,$n[11].PathSpace]},{"a":2,"n":"InverseTransformPoint","is":true,"t":8,"pi":[{"n":"p","pt":$n[0].Vector3,"ps":0},{"n":"t","pt":$n[0].Transform,"ps":1},{"n":"space","pt":$n[11].PathSpace,"ps":2}],"sn":"InverseTransformPoint","rt":$n[0].Vector3,"p":[$n[0].Vector3,$n[0].Transform,$n[11].PathSpace]},{"a":2,"n":"InverseTransformVector","is":true,"t":8,"pi":[{"n":"p","pt":$n[0].Vector3,"ps":0},{"n":"t","pt":$n[0].Transform,"ps":1},{"n":"space","pt":$n[11].PathSpace,"ps":2}],"sn":"InverseTransformVector","rt":$n[0].Vector3,"p":[$n[0].Vector3,$n[0].Transform,$n[11].PathSpace]},{"a":2,"n":"LineSegmentsIntersect","is":true,"t":8,"pi":[{"n":"a1","pt":$n[0].Vector2,"ps":0},{"n":"a2","pt":$n[0].Vector2,"ps":1},{"n":"b1","pt":$n[0].Vector2,"ps":2},{"n":"b2","pt":$n[0].Vector2,"ps":3}],"sn":"LineSegmentsIntersect","rt":$n[1].Boolean,"p":[$n[0].Vector2,$n[0].Vector2,$n[0].Vector2,$n[0].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"LinesIntersect","is":true,"t":8,"pi":[{"n":"a1","pt":$n[0].Vector2,"ps":0},{"n":"a2","pt":$n[0].Vector2,"ps":1},{"n":"a3","pt":$n[0].Vector2,"ps":2},{"n":"a4","pt":$n[0].Vector2,"ps":3}],"sn":"LinesIntersect","rt":$n[1].Boolean,"p":[$n[0].Vector2,$n[0].Vector2,$n[0].Vector2,$n[0].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"LockTransformToSpace","is":true,"t":8,"pi":[{"n":"t","pt":$n[0].Transform,"ps":0},{"n":"space","pt":$n[11].PathSpace,"ps":1}],"sn":"LockTransformToSpace","rt":$n[12].MathUtility.PosRotScale,"p":[$n[0].Transform,$n[11].PathSpace]},{"a":2,"n":"MinAngle","is":true,"t":8,"pi":[{"n":"a","pt":$n[0].Vector3,"ps":0},{"n":"b","pt":$n[0].Vector3,"ps":1},{"n":"c","pt":$n[0].Vector3,"ps":2}],"sn":"MinAngle","rt":$n[1].Single,"p":[$n[0].Vector3,$n[0].Vector3,$n[0].Vector3],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PointInTriangle","is":true,"t":8,"pi":[{"n":"a","pt":$n[0].Vector2,"ps":0},{"n":"b","pt":$n[0].Vector2,"ps":1},{"n":"c","pt":$n[0].Vector2,"ps":2},{"n":"p","pt":$n[0].Vector2,"ps":3}],"sn":"PointInTriangle","rt":$n[1].Boolean,"p":[$n[0].Vector2,$n[0].Vector2,$n[0].Vector2,$n[0].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"PointOfLineLineIntersection","is":true,"t":8,"pi":[{"n":"a1","pt":$n[0].Vector2,"ps":0},{"n":"a2","pt":$n[0].Vector2,"ps":1},{"n":"a3","pt":$n[0].Vector2,"ps":2},{"n":"a4","pt":$n[0].Vector2,"ps":3}],"sn":"PointOfLineLineIntersection","rt":$n[0].Vector2,"p":[$n[0].Vector2,$n[0].Vector2,$n[0].Vector2,$n[0].Vector2]},{"a":2,"n":"PointsAreClockwise","is":true,"t":8,"pi":[{"n":"points","pt":System.Array.type(UnityEngine.Vector2),"ps":0}],"sn":"PointsAreClockwise","rt":$n[1].Boolean,"p":[System.Array.type(UnityEngine.Vector2)],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SideOfLine","is":true,"t":8,"pi":[{"n":"a","pt":$n[0].Vector2,"ps":0},{"n":"b","pt":$n[0].Vector2,"ps":1},{"n":"c","pt":$n[0].Vector2,"ps":2}],"sn":"SideOfLine","rt":$n[1].Int32,"p":[$n[0].Vector2,$n[0].Vector2,$n[0].Vector2],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"TransformDirection","is":true,"t":8,"pi":[{"n":"p","pt":$n[0].Vector3,"ps":0},{"n":"t","pt":$n[0].Transform,"ps":1},{"n":"space","pt":$n[11].PathSpace,"ps":2}],"sn":"TransformDirection","rt":$n[0].Vector3,"p":[$n[0].Vector3,$n[0].Transform,$n[11].PathSpace]},{"a":2,"n":"TransformPoint","is":true,"t":8,"pi":[{"n":"p","pt":$n[0].Vector3,"ps":0},{"n":"t","pt":$n[0].Transform,"ps":1},{"n":"space","pt":$n[11].PathSpace,"ps":2}],"sn":"TransformPoint","rt":$n[0].Vector3,"p":[$n[0].Vector3,$n[0].Transform,$n[11].PathSpace]},{"a":2,"n":"TransformVector","is":true,"t":8,"pi":[{"n":"p","pt":$n[0].Vector3,"ps":0},{"n":"t","pt":$n[0].Transform,"ps":1},{"n":"space","pt":$n[11].PathSpace,"ps":2}],"sn":"TransformVector","rt":$n[0].Vector3,"p":[$n[0].Vector3,$n[0].Transform,$n[11].PathSpace]}]}; }, $n);
    /*PathCreation.Utility.MathUtility end.*/

    /*PathCreation.Utility.MathUtility+PosRotScale start.*/
    $m("PathCreation.Utility.MathUtility.PosRotScale", function () { return {"td":$n[12].MathUtility,"att":1048579,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Transform],"pi":[{"n":"t","pt":$n[0].Transform,"ps":0}],"sn":"ctor"},{"a":2,"n":"SetTransform","t":8,"pi":[{"n":"t","pt":$n[0].Transform,"ps":0}],"sn":"SetTransform","rt":$n[1].Void,"p":[$n[0].Transform]},{"a":2,"n":"position","t":4,"rt":$n[0].Vector3,"sn":"position","ro":true},{"a":2,"n":"rotation","t":4,"rt":$n[0].Quaternion,"sn":"rotation","ro":true},{"a":2,"n":"scale","t":4,"rt":$n[0].Vector3,"sn":"scale","ro":true}]}; }, $n);
    /*PathCreation.Utility.MathUtility+PosRotScale end.*/

    /*PathCreation.Utility.VertexPathUtility start.*/
    $m("PathCreation.Utility.VertexPathUtility", function () { return {"nested":[$n[12].VertexPathUtility.PathSplitData],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"SplitBezierPathByAngleError","is":true,"t":8,"pi":[{"n":"bezierPath","pt":$n[11].BezierPath,"ps":0},{"n":"maxAngleError","pt":$n[1].Single,"ps":1},{"n":"minVertexDst","pt":$n[1].Single,"ps":2},{"n":"accuracy","pt":$n[1].Single,"ps":3}],"sn":"SplitBezierPathByAngleError","rt":$n[12].VertexPathUtility.PathSplitData,"p":[$n[11].BezierPath,$n[1].Single,$n[1].Single,$n[1].Single]},{"a":2,"n":"SplitBezierPathEvenly","is":true,"t":8,"pi":[{"n":"bezierPath","pt":$n[11].BezierPath,"ps":0},{"n":"spacing","pt":$n[1].Single,"ps":1},{"n":"accuracy","pt":$n[1].Single,"ps":2}],"sn":"SplitBezierPathEvenly","rt":$n[12].VertexPathUtility.PathSplitData,"p":[$n[11].BezierPath,$n[1].Single,$n[1].Single]}]}; }, $n);
    /*PathCreation.Utility.VertexPathUtility end.*/

    /*PathCreation.Utility.VertexPathUtility+PathSplitData start.*/
    $m("PathCreation.Utility.VertexPathUtility.PathSplitData", function () { return {"td":$n[12].VertexPathUtility,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"anchorVertexMap","t":4,"rt":$n[2].List$1(System.Int32),"sn":"anchorVertexMap"},{"a":2,"n":"cumulativeLength","t":4,"rt":$n[2].List$1(System.Single),"sn":"cumulativeLength"},{"a":2,"n":"minMax","t":4,"rt":$n[11].MinMax3D,"sn":"minMax"},{"a":2,"n":"tangents","t":4,"rt":$n[2].List$1(UnityEngine.Vector3),"sn":"tangents"},{"a":2,"n":"vertices","t":4,"rt":$n[2].List$1(UnityEngine.Vector3),"sn":"vertices"}]}; }, $n);
    /*PathCreation.Utility.VertexPathUtility+PathSplitData end.*/

    /*_InGame.Scripts.Utilities.PrefabHolder start.*/
    $m("_InGame.Scripts.Utilities.PrefabHolder", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DrawPointPrefab","t":4,"rt":$n[0].GameObject,"sn":"DrawPointPrefab"}]}; }, $n);
    /*_InGame.Scripts.Utilities.PrefabHolder end.*/

    /*_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize start.*/
    $m("_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[GameStateType],"pi":[{"n":"_StateType","pt":GameStateType,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"EnterState","t":8,"pi":[{"n":"stateManager","pt":GameStateManager,"ps":0}],"sn":"EnterState","rt":$n[1].Void,"p":[GameStateManager]},{"ov":true,"a":2,"n":"ExitState","t":8,"pi":[{"n":"stateManager","pt":GameStateManager,"ps":0}],"sn":"ExitState","rt":$n[1].Void,"p":[GameStateManager]},{"ov":true,"a":2,"n":"UpdateState","t":8,"pi":[{"n":"stateManager","pt":GameStateManager,"ps":0}],"sn":"UpdateState","rt":$n[1].Void,"p":[GameStateManager]}]}; }, $n);
    /*_InGame.Scripts.StateMachines.GameState.GameStateGameInitialize end.*/

    /*_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow start.*/
    $m("_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[GameStateType],"pi":[{"n":"_StateType","pt":GameStateType,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"EnterState","t":8,"pi":[{"n":"stateManager","pt":GameStateManager,"ps":0}],"sn":"EnterState","rt":$n[1].Void,"p":[GameStateManager]},{"ov":true,"a":2,"n":"ExitState","t":8,"pi":[{"n":"stateManager","pt":GameStateManager,"ps":0}],"sn":"ExitState","rt":$n[1].Void,"p":[GameStateManager]},{"ov":true,"a":2,"n":"UpdateState","t":8,"pi":[{"n":"stateManager","pt":GameStateManager,"ps":0}],"sn":"UpdateState","rt":$n[1].Void,"p":[GameStateManager]}]}; }, $n);
    /*_InGame.Scripts.StateMachines.GameState.GameStateTutorialShow end.*/

    /*_InGame.Scripts.Others.FillSliderController start.*/
    $m("_InGame.Scripts.Others.FillSliderController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckFillSlider","t":8,"sn":"CheckFillSlider","rt":$n[1].Void},{"a":1,"n":"OnCheckFillSlider","t":8,"sn":"OnCheckFillSlider","rt":$n[1].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"ResetFillSlider","t":8,"sn":"ResetFillSlider","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"BrainLocationMinMax","t":4,"rt":$n[0].Vector2,"sn":"BrainLocationMinMax"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_BrainObject","t":4,"rt":$n[0].GameObject,"sn":"_BrainObject"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_FillImage","t":4,"rt":$n[8].Image,"sn":"_FillImage"},{"a":1,"n":"fillTween","t":4,"rt":$n[6].Tween,"sn":"fillTween"},{"a":1,"n":"moveTween","t":4,"rt":$n[6].Tween,"sn":"moveTween"}]}; }, $n);
    /*_InGame.Scripts.Others.FillSliderController end.*/

    /*_InGame.Scripts.Managers.DrawingType start.*/
    $m("_InGame.Scripts.Managers.DrawingType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Invalid","is":true,"t":4,"rt":$n[3].DrawingType,"sn":"Invalid","box":function ($v) { return Bridge.box($v, _InGame.Scripts.Managers.DrawingType, System.Enum.toStringFn(_InGame.Scripts.Managers.DrawingType));}},{"a":2,"n":"PotionBottle","is":true,"t":4,"rt":$n[3].DrawingType,"sn":"PotionBottle","box":function ($v) { return Bridge.box($v, _InGame.Scripts.Managers.DrawingType, System.Enum.toStringFn(_InGame.Scripts.Managers.DrawingType));}},{"a":2,"n":"Ship","is":true,"t":4,"rt":$n[3].DrawingType,"sn":"Ship","box":function ($v) { return Bridge.box($v, _InGame.Scripts.Managers.DrawingType, System.Enum.toStringFn(_InGame.Scripts.Managers.DrawingType));}},{"a":2,"n":"TableLamp","is":true,"t":4,"rt":$n[3].DrawingType,"sn":"TableLamp","box":function ($v) { return Bridge.box($v, _InGame.Scripts.Managers.DrawingType, System.Enum.toStringFn(_InGame.Scripts.Managers.DrawingType));}}]}; }, $n);
    /*_InGame.Scripts.Managers.DrawingType end.*/

    /*_InGame.Scripts.Managers.DrawingData start.*/
    $m("_InGame.Scripts.Managers.DrawingData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"controller","t":16,"rt":$n[14].DrawingController,"g":{"a":2,"n":"get_controller","t":8,"rt":$n[14].DrawingController,"fg":"controller"},"fn":"controller"},{"a":2,"n":"Object","t":4,"rt":$n[0].GameObject,"sn":"Object"},{"a":2,"n":"type","t":4,"rt":$n[3].DrawingType,"sn":"type","box":function ($v) { return Bridge.box($v, _InGame.Scripts.Managers.DrawingType, System.Enum.toStringFn(_InGame.Scripts.Managers.DrawingType));}}]}; }, $n);
    /*_InGame.Scripts.Managers.DrawingData end.*/

    /*_InGame.Scripts.Managers.DrawingManager start.*/
    $m("_InGame.Scripts.Managers.DrawingManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CanDraw","t":8,"sn":"CanDraw","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"ClickOnScreen","t":8,"sn":"ClickOnScreen","rt":$n[1].Void},{"a":1,"n":"DragOnScreen","t":8,"sn":"DragOnScreen","rt":$n[1].Void},{"a":2,"n":"GetDrawingCompletePercent","t":8,"sn":"GetDrawingCompletePercent","rt":$n[1].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetDrawingData","t":8,"sn":"GetDrawingData","rt":$n[3].DrawingData},{"a":1,"n":"GetWorldPosition","t":8,"sn":"GetWorldPosition","rt":$n[0].Vector3},{"a":1,"n":"OnCompleteDrawing","t":8,"sn":"OnCompleteDrawing","rt":$n[1].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"OnLoadDrawing","t":8,"sn":"OnLoadDrawing","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"UnClickOnScreen","t":8,"sn":"UnClickOnScreen","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"ClickStarted","t":4,"rt":$n[1].Boolean,"sn":"ClickStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CurrentDrawingData","t":4,"rt":$n[3].DrawingData,"sn":"CurrentDrawingData"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"LevelDrawingList","t":4,"rt":$n[2].List$1(_InGame.Scripts.Managers.DrawingData),"sn":"LevelDrawingList"},{"a":1,"n":"_camera","t":4,"rt":$n[0].Camera,"sn":"_camera"}]}; }, $n);
    /*_InGame.Scripts.Managers.DrawingManager end.*/

    /*_InGame.Scripts.Managers.GameManager start.*/
    $m("_InGame.Scripts.Managers.GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"GameStateManager","t":16,"rt":GameStateManager,"g":{"a":2,"n":"get_GameStateManager","t":8,"rt":GameStateManager,"fg":"GameStateManager"},"fn":"GameStateManager"}]}; }, $n);
    /*_InGame.Scripts.Managers.GameManager end.*/

    /*_InGame.Scripts.Managers.TutorialVariables start.*/
    $m("_InGame.Scripts.Managers.TutorialVariables", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Object","t":4,"rt":$n[0].GameObject,"sn":"Object"},{"a":2,"n":"_Type","t":4,"rt":$n[3].TutorialType,"sn":"_Type","box":function ($v) { return Bridge.box($v, _InGame.Scripts.Managers.TutorialType, System.Enum.toStringFn(_InGame.Scripts.Managers.TutorialType));}}]}; }, $n);
    /*_InGame.Scripts.Managers.TutorialVariables end.*/

    /*_InGame.Scripts.Managers.TutorialType start.*/
    $m("_InGame.Scripts.Managers.TutorialType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"PotionBottle","is":true,"t":4,"rt":$n[3].TutorialType,"sn":"PotionBottle","box":function ($v) { return Bridge.box($v, _InGame.Scripts.Managers.TutorialType, System.Enum.toStringFn(_InGame.Scripts.Managers.TutorialType));}},{"a":2,"n":"Topuklu","is":true,"t":4,"rt":$n[3].TutorialType,"sn":"Topuklu","box":function ($v) { return Bridge.box($v, _InGame.Scripts.Managers.TutorialType, System.Enum.toStringFn(_InGame.Scripts.Managers.TutorialType));}}]}; }, $n);
    /*_InGame.Scripts.Managers.TutorialType end.*/

    /*_InGame.Scripts.Managers.TutorialManager start.*/
    $m("_InGame.Scripts.Managers.TutorialManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetSelectedTutorial","t":8,"pi":[{"n":"tutorialType","pt":$n[3].TutorialType,"ps":0}],"sn":"GetSelectedTutorial","rt":$n[3].TutorialVariables,"p":[$n[3].TutorialType]},{"a":1,"n":"OnCloseTutorial","t":8,"pi":[{"n":"type","pt":$n[3].TutorialType,"ps":0}],"sn":"OnCloseTutorial","rt":$n[1].Void,"p":[$n[3].TutorialType]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"OnShowTutorial","t":8,"pi":[{"n":"type","pt":$n[3].TutorialType,"ps":0}],"sn":"OnShowTutorial","rt":$n[1].Void,"p":[$n[3].TutorialType]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"Tutorials","t":4,"rt":$n[2].List$1(_InGame.Scripts.Managers.TutorialVariables),"sn":"Tutorials"}]}; }, $n);
    /*_InGame.Scripts.Managers.TutorialManager end.*/

    /*_InGame.Scripts.DrawContollers.DrawingController start.*/
    $m("_InGame.Scripts.DrawContollers.DrawingController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AddToDrawPoints","t":8,"pi":[{"n":"drawPoint","pt":$n[14].DrawPointBase,"ps":0}],"sn":"AddToDrawPoints","rt":$n[1].Void,"p":[$n[14].DrawPointBase]},{"a":1,"n":"CheckFailDrawing","t":8,"sn":"CheckFailDrawing","rt":$n[1].Void},{"a":1,"n":"ClearDrawPoints","t":8,"sn":"ClearDrawPoints","rt":$n[1].Void},{"a":2,"n":"ClickAction","t":8,"pi":[{"n":"touchPoint","pt":$n[0].Vector2,"ps":0}],"sn":"ClickAction","rt":$n[1].Void,"p":[$n[0].Vector2]},{"a":2,"n":"DragAction","t":8,"pi":[{"n":"touchPoint","pt":$n[0].Vector2,"ps":0}],"sn":"DragAction","rt":$n[1].Void,"p":[$n[0].Vector2]},{"a":2,"n":"GetClosestDrawPointOnWorldSpace","t":8,"pi":[{"n":"touchPoint","pt":$n[0].Vector2,"ps":0},{"n":"pointType","pt":$n[14].DrawPointType,"ps":1}],"sn":"GetClosestDrawPointOnWorldSpace","rt":$n[14].DrawPointBase,"p":[$n[0].Vector2,$n[14].DrawPointType]},{"a":1,"n":"GetCurrentDrawPoint","t":8,"sn":"GetCurrentDrawPoint","rt":$n[14].DrawPointBase},{"a":1,"n":"IsLastPointJoint","t":8,"sn":"IsLastPointJoint","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"UnClickAction","t":8,"sn":"UnClickAction","rt":$n[1].Void},{"a":1,"n":"UpdateLineRenderer","t":8,"sn":"UpdateLineRenderer","rt":$n[1].Void},{"a":2,"n":"AllDrawPoints","t":4,"rt":$n[2].List$1(_InGame.Scripts.DrawContollers.DrawPointBase),"sn":"AllDrawPoints"},{"a":2,"n":"SelectedDrawPoints","t":4,"rt":$n[2].List$1(_InGame.Scripts.DrawContollers.DrawPointBase),"sn":"SelectedDrawPoints"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_lineRenderer","t":4,"rt":$n[0].LineRenderer,"sn":"_lineRenderer"}]}; }, $n);
    /*_InGame.Scripts.DrawContollers.DrawingController end.*/

    /*_InGame.Scripts.DrawContollers.DrawPointType start.*/
    $m("_InGame.Scripts.DrawContollers.DrawPointType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FlowPoint","is":true,"t":4,"rt":$n[14].DrawPointType,"sn":"FlowPoint","box":function ($v) { return Bridge.box($v, _InGame.Scripts.DrawContollers.DrawPointType, System.Enum.toStringFn(_InGame.Scripts.DrawContollers.DrawPointType));}},{"a":2,"n":"JointPoint","is":true,"t":4,"rt":$n[14].DrawPointType,"sn":"JointPoint","box":function ($v) { return Bridge.box($v, _InGame.Scripts.DrawContollers.DrawPointType, System.Enum.toStringFn(_InGame.Scripts.DrawContollers.DrawPointType));}}]}; }, $n);
    /*_InGame.Scripts.DrawContollers.DrawPointType end.*/

    /*_InGame.Scripts.DrawContollers.DrawPointBase start.*/
    $m("_InGame.Scripts.DrawContollers.DrawPointBase", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"CanPointSelectable","t":8,"sn":"CanPointSelectable","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetClosestBorderPoint","t":8,"pi":[{"n":"point","pt":$n[0].Vector2,"ps":0}],"sn":"GetClosestBorderPoint","rt":$n[14].DrawPointBase,"p":[$n[0].Vector2]},{"a":1,"n":"OnDrawGizmos","t":8,"sn":"OnDrawGizmos","rt":$n[1].Void},{"a":1,"n":"OnDrawGizmosSelected","t":8,"sn":"OnDrawGizmosSelected","rt":$n[1].Void},{"a":2,"n":"ResetPoint","t":8,"sn":"ResetPoint","rt":$n[1].Void},{"a":2,"n":"SelectPoint","t":8,"sn":"SelectPoint","rt":$n[1].Void},{"a":2,"n":"SetBorderDrawPoints","t":8,"pi":[{"n":"drawPoints","pt":$n[2].List$1(_InGame.Scripts.DrawContollers.DrawPointBase),"ps":0}],"sn":"SetBorderDrawPoints","rt":$n[1].Void,"p":[$n[2].List$1(_InGame.Scripts.DrawContollers.DrawPointBase)]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"BorderDrawPoints","t":4,"rt":$n[2].List$1(_InGame.Scripts.DrawContollers.DrawPointBase),"sn":"BorderDrawPoints"},{"a":2,"n":"MaxConnectionCount","t":4,"rt":$n[1].Int32,"sn":"MaxConnectionCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"PointConnectionCount","t":4,"rt":$n[1].Int32,"sn":"PointConnectionCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"_drawPointType","t":4,"rt":$n[14].DrawPointType,"sn":"_drawPointType","box":function ($v) { return Bridge.box($v, _InGame.Scripts.DrawContollers.DrawPointType, System.Enum.toStringFn(_InGame.Scripts.DrawContollers.DrawPointType));}}]}; }, $n);
    /*_InGame.Scripts.DrawContollers.DrawPointBase end.*/

    /*_InGame.Scripts.DrawContollers.DrawPointGenerator start.*/
    $m("_InGame.Scripts.DrawContollers.DrawPointGenerator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ClearDrawPoints","t":8,"sn":"ClearDrawPoints","rt":$n[1].Void},{"a":1,"n":"GenerateDrawPoint","t":8,"sn":"GenerateDrawPoint","rt":$n[1].Void},{"a":1,"n":"OnDrawGizmos","t":8,"sn":"OnDrawGizmos","rt":$n[1].Void},{"a":1,"n":"OnValidate","t":8,"sn":"OnValidate","rt":$n[1].Void},{"a":1,"n":"SetBorderDrawPoints","t":8,"sn":"SetBorderDrawPoints","rt":$n[1].Void},{"a":2,"n":"UpdateDrawPointList","t":8,"sn":"UpdateDrawPointList","rt":$n[1].Void},{"a":1,"n":"UpdatePointList","t":8,"sn":"UpdatePointList","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"GizmoPoints","t":4,"rt":$n[2].List$1(UnityEngine.Vector3),"sn":"GizmoPoints"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"HowManyPoints","t":4,"rt":$n[1].Int32,"sn":"HowManyPoints","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_drawingController","t":4,"rt":$n[14].DrawingController,"sn":"_drawingController"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pathCreator","t":4,"rt":$n[11].PathCreator,"sn":"_pathCreator"}]}; }, $n);
    /*_InGame.Scripts.DrawContollers.DrawPointGenerator end.*/

    /*PlayableAdsTool.LanguageTest start.*/
    $m("PlayableAdsTool.LanguageTest", function () { return {"att":256,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Arabic","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Arabic","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Dutch","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Dutch","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"English","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"English","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Filipino","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Filipino","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"French","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"French","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"German","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"German","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Greek","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Greek","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Hebrew","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Hebrew","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Hindi","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Hindi","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Hungarian","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Hungarian","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Indonesian","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Indonesian","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Italian","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Italian","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Japanese","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Japanese","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Korean","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Korean","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Malay","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Malay","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Polish","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Polish","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Portuguese","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Portuguese","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Romanian","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Romanian","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Russian","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Russian","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Serbian","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Serbian","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Spanish","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Spanish","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Thai","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Thai","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"TraditionalChinese","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"TraditionalChinese","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Turkish","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Turkish","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Ukrainian","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Ukrainian","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Urdu","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Urdu","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"a":2,"n":"Vietnamese","is":true,"t":4,"rt":$n[15].LanguageTest,"sn":"Vietnamese","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}}]}; }, $n);
    /*PlayableAdsTool.LanguageTest end.*/

    /*PlayableAdsTool.LocalizationController start.*/
    $m("PlayableAdsTool.LocalizationController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake$1","rt":$n[1].Void},{"a":2,"n":"CurrentFont","t":4,"rt":$n[16].TMP_FontAsset,"sn":"CurrentFont"},{"at":[new UnityEngine.Serialization.FormerlySerializedAsAttribute("ArabicFont"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"DefaultFont","t":4,"rt":$n[16].TMP_FontAsset,"sn":"DefaultFont"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"HindiFont","t":4,"rt":$n[16].TMP_FontAsset,"sn":"HindiFont"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"JapaneseFont","t":4,"rt":$n[16].TMP_FontAsset,"sn":"JapaneseFont"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"KoreanFont","t":4,"rt":$n[16].TMP_FontAsset,"sn":"KoreanFont"},{"a":2,"n":"Sheets","t":4,"rt":$n[2].List$1(PlayableAdsTool.Sheet),"sn":"Sheets"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ThaiFont","t":4,"rt":$n[16].TMP_FontAsset,"sn":"ThaiFont"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Test language", 1, "Localization Settings", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_language","t":4,"rt":$n[15].LanguageTest,"sn":"_language","box":function ($v) { return Bridge.box($v, PlayableAdsTool.LanguageTest, System.Enum.toStringFn(PlayableAdsTool.LanguageTest));}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Localization test On/Off", 0, "Localization Settings", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_languageTest","t":4,"rt":$n[1].Boolean,"sn":"_languageTest","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lang","t":4,"rt":$n[1].String,"sn":"lang"}]}; }, $n);
    /*PlayableAdsTool.LocalizationController end.*/

    /*PlayableAdsTool.LocalizationManager start.*/
    $m("PlayableAdsTool.LocalizationManager", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"AutoLanguage","is":true,"t":8,"pi":[{"n":"lang","pt":$n[1].String,"ps":0}],"sn":"AutoLanguage","rt":$n[1].Void,"p":[$n[1].String]},{"a":2,"n":"GetColumns","is":true,"t":8,"pi":[{"n":"line","pt":$n[1].String,"ps":0}],"sn":"GetColumns","rt":$n[2].List$1(System.String),"p":[$n[1].String]},{"a":2,"n":"GetLines","is":true,"t":8,"pi":[{"n":"text","pt":$n[1].String,"ps":0}],"sn":"GetLines","rt":$n[2].List$1(System.String),"p":[$n[1].String]},{"a":2,"n":"HasKey","is":true,"t":8,"pi":[{"n":"localizationKey","pt":$n[1].String,"ps":0}],"sn":"HasKey","rt":$n[1].Boolean,"p":[$n[1].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Localize","is":true,"t":8,"pi":[{"n":"localizationKey","pt":$n[1].String,"ps":0}],"sn":"Localize","rt":$n[1].String,"p":[$n[1].String]},{"a":2,"n":"Localize","is":true,"t":8,"pi":[{"n":"localizationKey","pt":$n[1].String,"ps":0},{"n":"args","ip":true,"pt":$n[1].Array.type(System.Object),"ps":1}],"sn":"Localize$1","rt":$n[1].String,"p":[$n[1].String,$n[1].Array.type(System.Object)]},{"a":2,"n":"Read","is":true,"t":8,"sn":"Read","rt":$n[1].Void},{"a":2,"n":"Language","is":true,"t":16,"rt":$n[1].String,"g":{"a":2,"n":"get_Language","t":8,"rt":$n[1].String,"fg":"Language","is":true},"s":{"a":2,"n":"set_Language","t":8,"p":[$n[1].String],"rt":$n[1].Void,"fs":"Language","is":true},"fn":"Language"},{"a":2,"n":"Dictionary","is":true,"t":4,"rt":$n[2].Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.String,System.String)),"sn":"Dictionary"},{"a":1,"n":"_language","is":true,"t":4,"rt":$n[1].String,"sn":"_language"},{"a":2,"n":"OnLocalizationChanged","is":true,"t":2,"ad":{"a":2,"n":"add_OnLocalizationChanged","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnLocalizationChanged","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnLocalizationChanged","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnLocalizationChanged","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*PlayableAdsTool.LocalizationManager end.*/

    /*PlayableAdsTool.LocalizationSettings start.*/
    $m("PlayableAdsTool.LocalizationSettings", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "LocalizationSettings", menuName: "\u25c6 Simple Localization/Settings"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LoadSettings","is":true,"t":8,"sn":"LoadSettings","rt":$n[15].LocalizationSettings},{"a":2,"n":"Instance","is":true,"t":16,"rt":$n[15].LocalizationSettings,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[15].LocalizationSettings,"fg":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"SaveFolder","t":4,"rt":$n[0].Object,"sn":"SaveFolder"},{"a":2,"n":"Sheets","t":4,"rt":$n[2].List$1(PlayableAdsTool.Sheet),"sn":"Sheets"},{"a":2,"n":"TableId","t":4,"rt":$n[1].String,"sn":"TableId"},{"a":2,"n":"Timestamp","is":true,"t":4,"rt":$n[1].DateTime,"sn":"Timestamp","box":function ($v) { return Bridge.box($v, System.DateTime, System.DateTime.format);}},{"a":2,"n":"UrlPattern","is":true,"t":4,"rt":$n[1].String,"sn":"UrlPattern"},{"a":1,"n":"_instance","is":true,"t":4,"rt":$n[15].LocalizationSettings,"sn":"_instance"},{"a":2,"n":"OnRunEditor","is":true,"t":2,"ad":{"a":2,"n":"add_OnRunEditor","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnRunEditor","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnRunEditor","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnRunEditor","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*PlayableAdsTool.LocalizationSettings end.*/

    /*PlayableAdsTool.LocalizationSync start.*/
    $m("PlayableAdsTool.LocalizationSync", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.ExecuteInEditModeAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SaveFolder","t":4,"rt":$n[0].Object,"sn":"SaveFolder"},{"a":2,"n":"Sheets","t":4,"rt":System.Array.type(PlayableAdsTool.Sheet),"sn":"Sheets"},{"a":2,"n":"TableId","t":4,"rt":$n[1].String,"sn":"TableId"},{"a":1,"n":"UrlPattern","is":true,"t":4,"rt":$n[1].String,"sn":"UrlPattern"}]}; }, $n);
    /*PlayableAdsTool.LocalizationSync end.*/

    /*PlayableAdsTool.LocalizedDropdown start.*/
    $m("PlayableAdsTool.LocalizedDropdown", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.UI.Dropdown)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Localize","t":8,"sn":"Localize","rt":$n[1].Void},{"a":2,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[1].Void},{"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"LocalizationKeys","t":4,"rt":$n[1].Array.type(System.String),"sn":"LocalizationKeys"}]}; }, $n);
    /*PlayableAdsTool.LocalizedDropdown end.*/

    /*PlayableAdsTool.LocalizedText start.*/
    $m("PlayableAdsTool.LocalizedText", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.UI.Text)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Localize","t":8,"sn":"Localize","rt":$n[1].Void},{"a":2,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[1].Void},{"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"AfterText","t":4,"rt":$n[1].String,"sn":"AfterText"},{"a":2,"n":"BeforeText","t":4,"rt":$n[1].String,"sn":"BeforeText"},{"a":2,"n":"LocalizationKey","t":4,"rt":$n[1].String,"sn":"LocalizationKey"}]}; }, $n);
    /*PlayableAdsTool.LocalizedText end.*/

    /*PlayableAdsTool.LocalizedTextTMP start.*/
    $m("PlayableAdsTool.LocalizedTextTMP", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(TMPro.TextMeshProUGUI)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Localize","t":8,"sn":"Localize","rt":$n[1].Void},{"a":2,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[1].Void},{"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"LocalizationKey","t":4,"rt":$n[1].String,"sn":"LocalizationKey"}]}; }, $n);
    /*PlayableAdsTool.LocalizedTextTMP end.*/

    /*PlayableAdsTool.Sheet start.*/
    $m("PlayableAdsTool.Sheet", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Id","t":4,"rt":$n[1].Int64,"sn":"Id"},{"a":2,"n":"Name","t":4,"rt":$n[1].String,"sn":"Name"},{"a":2,"n":"TextAsset","t":4,"rt":$n[0].TextAsset,"sn":"TextAsset"}]}; }, $n);
    /*PlayableAdsTool.Sheet end.*/

    /*PlayableAdsTool.SoundTypeListPair start.*/
    $m("PlayableAdsTool.SoundTypeListPair", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"clips","t":4,"rt":$n[2].List$1(UnityEngine.AudioClip),"sn":"clips"},{"a":2,"n":"type","t":4,"rt":SoundTypes,"sn":"type","box":function ($v) { return Bridge.box($v, SoundTypes, System.Enum.toStringFn(SoundTypes));}}]}; }, $n);
    /*PlayableAdsTool.SoundTypeListPair end.*/

    /*PlayableAdsTool.AudioManager start.*/
    $m("PlayableAdsTool.AudioManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetCurrentAudioClip","t":8,"pi":[{"n":"soundType","pt":SoundTypes,"ps":0}],"sn":"GetCurrentAudioClip","rt":$n[0].AudioClip,"p":[SoundTypes]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"OnPlaySound","t":8,"pi":[{"n":"soundType","pt":SoundTypes,"ps":0},{"n":"volume","pt":$n[1].Single,"ps":1},{"n":"pitch","pt":$n[1].Single,"ps":2}],"sn":"OnPlaySound","rt":$n[1].Void,"p":[SoundTypes,$n[1].Single,$n[1].Single]},{"a":2,"n":"PlaySound","t":8,"pi":[{"n":"soundType","pt":SoundTypes,"ps":0},{"n":"volume","pt":$n[1].Single,"ps":1},{"n":"pitch","pt":$n[1].Single,"ps":2}],"sn":"PlaySound","rt":$n[1].Void,"p":[SoundTypes,$n[1].Single,$n[1].Single]},{"a":2,"n":"AudioSourceContainer","t":4,"rt":$n[0].GameObject,"sn":"AudioSourceContainer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"SoundTypeListPairs","t":4,"rt":$n[2].List$1(PlayableAdsTool.SoundTypeListPair),"sn":"SoundTypeListPairs"}]}; }, $n);
    /*PlayableAdsTool.AudioManager end.*/

    /*PlayableAdsTool.CameraManager start.*/
    $m("PlayableAdsTool.CameraManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"SetAllCam","t":8,"pi":[{"n":"value","pt":$n[1].Boolean,"ps":0}],"sn":"SetAllCam","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"SetCamScreenOrientation","t":8,"pi":[{"n":"aspectRatio","pt":AspectRatio,"ps":0}],"sn":"SetCamScreenOrientation","rt":$n[1].Void,"p":[AspectRatio]},{"a":1,"n":"SetDesiredCam","t":8,"pi":[{"n":"camStates","pt":CamStates,"ps":0}],"sn":"SetDesiredCam","rt":$n[1].Void,"p":[CamStates]},{"a":2,"n":"CurrentCamState","t":4,"rt":CamStates,"sn":"CurrentCamState","box":function ($v) { return Bridge.box($v, CamStates, System.Enum.toStringFn(CamStates));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_horizontalCam_16_9","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"_horizontalCam_16_9"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_horizontalCam_20_9","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"_horizontalCam_20_9"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_horizontalCam_4_3","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"_horizontalCam_4_3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_verticalCam_3_4","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"_verticalCam_3_4"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_verticalCam_9_16","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"_verticalCam_9_16"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_verticalCam_9_20","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"_verticalCam_9_20"}]}; }, $n);
    /*PlayableAdsTool.CameraManager end.*/

    /*PlayableAdsTool.EndCardController start.*/
    $m("PlayableAdsTool.EndCardController", function () { return {"nested":[$n[15].EndCardController.GameResult,$n[15].EndCardController.EndCardAnimation],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DirectSendStore","t":8,"pi":[{"n":"logEvent","pt":$n[1].String,"ps":0},{"n":"sendStoreDelay","pt":$n[1].Single,"ps":1}],"sn":"DirectSendStore","rt":$n[1].Void,"p":[$n[1].String,$n[1].Single]},{"a":1,"n":"GameResume","t":8,"sn":"GameResume","rt":$n[1].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"OpenEndCard","t":8,"pi":[{"n":"lastEndCard","pt":$n[1].Boolean,"ps":0},{"n":"gameResult","pt":$n[15].EndCardController.GameResult,"ps":1}],"sn":"OpenEndCard","rt":$n[1].Void,"p":[$n[1].Boolean,$n[15].EndCardController.GameResult]},{"a":2,"n":"OpenStore","t":8,"pi":[{"n":"logEventName","pt":$n[1].String,"ps":0}],"sn":"OpenStore","rt":$n[1].Void,"p":[$n[1].String]},{"a":1,"n":"OpenStore","t":8,"pi":[{"n":"logEventName","pt":$n[1].String,"ps":0},{"n":"delay","pt":$n[1].Single,"ps":1}],"sn":"OpenStore$1","rt":$n[1].Void,"p":[$n[1].String,$n[1].Single]},{"a":1,"n":"PlayEndCardAnimation","t":8,"pi":[{"n":"_animationStatus","pt":$n[15].EndCardController.EndCardAnimation,"ps":0},{"n":"gameResult","pt":$n[15].EndCardController.GameResult,"ps":1}],"sn":"PlayEndCardAnimation","rt":$n[1].Void,"p":[$n[15].EndCardController.EndCardAnimation,$n[15].EndCardController.GameResult]},{"a":2,"n":"SendStore","t":8,"pi":[{"n":"lastEndCard","pt":$n[1].Boolean,"ps":0},{"n":"logEvent","pt":$n[1].String,"ps":1},{"n":"sendStoreDelay","pt":$n[1].Single,"ps":2},{"n":"gameResult","dv":0,"o":true,"pt":$n[15].EndCardController.GameResult,"ps":3}],"sn":"SendStore","rt":$n[1].Void,"p":[$n[1].Boolean,$n[1].String,$n[1].Single,$n[15].EndCardController.GameResult]},{"a":1,"n":"TapChecker","t":8,"sn":"TapChecker","rt":$n[1].Void},{"a":1,"n":"TimeChecker","t":8,"sn":"TimeChecker","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"IsEndCardOpened","t":4,"rt":$n[1].Boolean,"sn":"IsEndCardOpened","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"LastEndCard","t":4,"rt":$n[1].Boolean,"sn":"LastEndCard","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("EndCard On/Off", 0, "Store/EndCard Settings", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"SendStoreWithEndCard","t":4,"rt":$n[1].Boolean,"sn":"SendStoreWithEndCard","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_endCards","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"_endCards"},{"a":1,"n":"_firstInput","t":4,"rt":$n[1].Boolean,"sn":"_firstInput","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"_isStoreOpen","t":4,"rt":$n[1].Boolean,"sn":"_isStoreOpen","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Automatically open Store when EndCard is shown", 3, "Store/EndCard Settings", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_openStoreAfterEndCard","t":4,"rt":$n[1].Boolean,"sn":"_openStoreAfterEndCard","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Open (Store/EndCard) after __ seconds by the last input", 2, "Store/EndCard Settings", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_openStoreAfterSeconds","t":4,"rt":$n[1].Single,"sn":"_openStoreAfterSeconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_timer","t":4,"rt":$n[1].Single,"sn":"_timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PlayableAdsTool.EndCardController end.*/

    /*PlayableAdsTool.EndCardController+GameResult start.*/
    $m("PlayableAdsTool.EndCardController.GameResult", function () { return {"td":$n[15].EndCardController,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Default","is":true,"t":4,"rt":$n[15].EndCardController.GameResult,"sn":"Default","box":function ($v) { return Bridge.box($v, PlayableAdsTool.EndCardController.GameResult, System.Enum.toStringFn(PlayableAdsTool.EndCardController.GameResult));}}]}; }, $n);
    /*PlayableAdsTool.EndCardController+GameResult end.*/

    /*PlayableAdsTool.EndCardController+EndCardAnimation start.*/
    $m("PlayableAdsTool.EndCardController.EndCardAnimation", function () { return {"td":$n[15].EndCardController,"att":259,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Hide","is":true,"t":4,"rt":$n[15].EndCardController.EndCardAnimation,"sn":"Hide","box":function ($v) { return Bridge.box($v, PlayableAdsTool.EndCardController.EndCardAnimation, System.Enum.toStringFn(PlayableAdsTool.EndCardController.EndCardAnimation));}},{"a":2,"n":"Show","is":true,"t":4,"rt":$n[15].EndCardController.EndCardAnimation,"sn":"Show","box":function ($v) { return Bridge.box($v, PlayableAdsTool.EndCardController.EndCardAnimation, System.Enum.toStringFn(PlayableAdsTool.EndCardController.EndCardAnimation));}}]}; }, $n);
    /*PlayableAdsTool.EndCardController+EndCardAnimation end.*/

    /*PlayableAdsTool.PooledObjectInfo start.*/
    $m("PlayableAdsTool.PooledObjectInfo", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"InactiveObjects","t":4,"rt":$n[2].List$1(UnityEngine.GameObject),"sn":"InactiveObjects"},{"a":2,"n":"LookupString","t":4,"rt":$n[1].String,"sn":"LookupString"}]}; }, $n);
    /*PlayableAdsTool.PooledObjectInfo end.*/

    /*PlayableAdsTool.PoolContainer start.*/
    $m("PlayableAdsTool.PoolContainer", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Count","t":4,"rt":$n[1].Int32,"sn":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Prefab","t":4,"rt":$n[0].GameObject,"sn":"Prefab"}]}; }, $n);
    /*PlayableAdsTool.PoolContainer end.*/

    /*PlayableAdsTool.ObjectPoolManager start.*/
    $m("PlayableAdsTool.ObjectPoolManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"CreateBeginningPool","t":8,"sn":"CreateBeginningPool","rt":$n[1].Void},{"a":2,"n":"ReturnObjectToPool","is":true,"t":8,"pi":[{"n":"obj","pt":$n[0].GameObject,"ps":0}],"sn":"ReturnObjectToPool","rt":$n[1].Void,"p":[$n[0].GameObject]},{"a":2,"n":"ReturnObjectToPool","is":true,"t":8,"pi":[{"n":"obj","pt":$n[0].GameObject,"ps":0},{"n":"delay","pt":$n[1].Single,"ps":1}],"sn":"ReturnObjectToPool$1","rt":$n[1].Void,"p":[$n[0].GameObject,$n[1].Single]},{"a":2,"n":"SpawnObjects","is":true,"t":8,"pi":[{"n":"objectToSpawn","pt":$n[0].GameObject,"ps":0},{"n":"parentTransform","pt":$n[0].Transform,"ps":1}],"sn":"SpawnObjects","rt":$n[0].GameObject,"p":[$n[0].GameObject,$n[0].Transform]},{"a":2,"n":"SpawnObjects","is":true,"t":8,"pi":[{"n":"objectToSpawn","pt":$n[0].GameObject,"ps":0},{"n":"spawnPosition","pt":$n[0].Vector3,"ps":1},{"n":"spawnRotation","pt":$n[0].Quaternion,"ps":2}],"sn":"SpawnObjects$1","rt":$n[0].GameObject,"p":[$n[0].GameObject,$n[0].Vector3,$n[0].Quaternion]},{"a":2,"n":"ObjectPools","is":true,"t":4,"rt":$n[2].List$1(PlayableAdsTool.PooledObjectInfo),"sn":"ObjectPools"},{"a":1,"n":"_gameobjectsEmpty","is":true,"t":4,"rt":$n[0].GameObject,"sn":"_gameobjectsEmpty"},{"a":1,"n":"_objectPoolEmptyHolder","t":4,"rt":$n[0].GameObject,"sn":"_objectPoolEmptyHolder"},{"a":1,"n":"_particleSystemEmpty","is":true,"t":4,"rt":$n[0].GameObject,"sn":"_particleSystemEmpty"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_poolContainers","t":4,"rt":$n[2].List$1(PlayableAdsTool.PoolContainer),"sn":"_poolContainers"}]}; }, $n);
    /*PlayableAdsTool.ObjectPoolManager end.*/

    /*PlayableAdsTool.ResponsiveManager start.*/
    $m("PlayableAdsTool.ResponsiveManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckScreenOrientation","t":8,"sn":"CheckScreenOrientation","rt":$n[1].Void},{"a":1,"n":"LoadResponsive","t":8,"pi":[{"n":"aspectRatio","pt":AspectRatio,"ps":0}],"sn":"LoadResponsive","rt":$n[1].Void,"p":[AspectRatio]},{"a":1,"n":"LoadUIDataList","t":8,"pi":[{"n":"uiDataList","pt":$n[2].List$1(UIData),"ps":0}],"sn":"LoadUIDataList","rt":$n[1].Void,"p":[$n[2].List$1(UIData)]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"at":[new UnityEngine.ContextMenu.ctor(" -> Save responsive ")],"a":2,"n":"SaveResponsive","t":8,"sn":"SaveResponsive","rt":$n[1].Void},{"a":1,"n":"SaveUIDataList","t":8,"pi":[{"n":"uiDataList","pt":$n[2].List$1(UIData),"ps":0}],"sn":"SaveUIDataList","rt":$n[1].Void,"p":[$n[2].List$1(UIData)]},{"a":1,"n":"SetBannerVisibilty","t":8,"pi":[{"n":"value","pt":$n[1].Boolean,"ps":0}],"sn":"SetBannerVisibilty","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"SetScreen","t":8,"pi":[{"n":"aspectRatio","pt":AspectRatio,"ps":0},{"n":"screenOrientation","pt":ScreenOrientation,"ps":1}],"sn":"SetScreen","rt":$n[1].Void,"p":[AspectRatio,ScreenOrientation]},{"a":1,"n":"ShowSelectedResponsive","t":8,"sn":"ShowSelectedResponsive","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"Banner","t":4,"rt":$n[0].GameObject,"sn":"Banner"},{"a":2,"n":"CurrentAspectRatio","t":4,"rt":AspectRatio,"sn":"CurrentAspectRatio","box":function ($v) { return Bridge.box($v, AspectRatio, System.Enum.toStringFn(AspectRatio));}},{"a":2,"n":"CurrentScreenOrientation","t":4,"rt":ScreenOrientation,"sn":"CurrentScreenOrientation","box":function ($v) { return Bridge.box($v, ScreenOrientation, System.Enum.toStringFn(ScreenOrientation));}},{"a":2,"n":"Horizantal_16_9","t":4,"rt":$n[2].List$1(UIData),"sn":"Horizantal_16_9"},{"a":2,"n":"Horizantal_20_9","t":4,"rt":$n[2].List$1(UIData),"sn":"Horizantal_20_9"},{"a":2,"n":"Horizantal_4_3","t":4,"rt":$n[2].List$1(UIData),"sn":"Horizantal_4_3"},{"a":2,"n":"UiElements","t":4,"rt":System.Array.type(UIElement),"sn":"UiElements"},{"a":2,"n":"Vertical_3_4","t":4,"rt":$n[2].List$1(UIData),"sn":"Vertical_3_4"},{"a":2,"n":"Vertical_9_16","t":4,"rt":$n[2].List$1(UIData),"sn":"Vertical_9_16"},{"a":2,"n":"Vertical_9_20","t":4,"rt":$n[2].List$1(UIData),"sn":"Vertical_9_20"}]}; }, $n);
    /*PlayableAdsTool.ResponsiveManager end.*/

    /*PlayableAdsTool.SingletonBehaviour$1 start.*/
    $m("PlayableAdsTool.SingletonBehaviour$1", function (T) { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"v":true,"a":3,"n":"OnAwake","t":8,"sn":"OnAwake","rt":$n[1].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":T,"g":{"a":2,"n":"get_Instance","t":8,"rt":T,"fg":"Instance","is":true},"s":{"a":2,"n":"set_Instance","t":8,"p":[T],"rt":$n[1].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"_instance","is":true,"t":4,"rt":T,"sn":"_instance"}]}; }, $n);
    /*PlayableAdsTool.SingletonBehaviour$1 end.*/

    /*PlayableAdsTool.AudioSourceContainer start.*/
    $m("PlayableAdsTool.AudioSourceContainer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"CheckIfAudioFinished","t":8,"sn":"CheckIfAudioFinished","rt":$n[17].IEnumerator},{"a":1,"n":"OnAudioFinished","t":8,"sn":"OnAudioFinished","rt":$n[1].Void},{"a":2,"n":"PlaySound","t":8,"pi":[{"n":"clip","pt":$n[0].AudioClip,"ps":0},{"n":"volume","dv":1.0,"o":true,"pt":$n[1].Single,"ps":1},{"n":"pitch","dv":1.0,"o":true,"pt":$n[1].Single,"ps":2}],"sn":"PlaySound","rt":$n[1].Void,"p":[$n[0].AudioClip,$n[1].Single,$n[1].Single]},{"a":1,"n":"_source","t":4,"rt":$n[0].AudioSource,"sn":"_source"}]}; }, $n);
    /*PlayableAdsTool.AudioSourceContainer end.*/

    }});
