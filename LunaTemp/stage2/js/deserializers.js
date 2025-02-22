var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.JointSpring' )
  var i621 = data
  i620.spring = i621[0]
  i620.damper = i621[1]
  i620.targetPosition = i621[2]
  return i620
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.JointMotor' )
  var i623 = data
  i622.m_TargetVelocity = i623[0]
  i622.m_Force = i623[1]
  i622.m_FreeSpin = i623[2]
  return i622
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.JointLimits' )
  var i625 = data
  i624.m_Min = i625[0]
  i624.m_Max = i625[1]
  i624.m_Bounciness = i625[2]
  i624.m_BounceMinVelocity = i625[3]
  i624.m_ContactDistance = i625[4]
  i624.minBounce = i625[5]
  i624.maxBounce = i625[6]
  return i624
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.JointDrive' )
  var i627 = data
  i626.m_PositionSpring = i627[0]
  i626.m_PositionDamper = i627[1]
  i626.m_MaximumForce = i627[2]
  i626.m_UseAcceleration = i627[3]
  return i626
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i629 = data
  i628.m_Spring = i629[0]
  i628.m_Damper = i629[1]
  return i628
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i631 = data
  i630.m_Limit = i631[0]
  i630.m_Bounciness = i631[1]
  i630.m_ContactDistance = i631[2]
  return i630
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i633 = data
  i632.m_ExtremumSlip = i633[0]
  i632.m_ExtremumValue = i633[1]
  i632.m_AsymptoteSlip = i633[2]
  i632.m_AsymptoteValue = i633[3]
  i632.m_Stiffness = i633[4]
  return i632
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i635 = data
  i634.m_LowerAngle = i635[0]
  i634.m_UpperAngle = i635[1]
  return i634
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i637 = data
  i636.m_MotorSpeed = i637[0]
  i636.m_MaximumMotorTorque = i637[1]
  return i636
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i639 = data
  i638.m_DampingRatio = i639[0]
  i638.m_Frequency = i639[1]
  i638.m_Angle = i639[2]
  return i638
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i641 = data
  i640.m_LowerTranslation = i641[0]
  i640.m_UpperTranslation = i641[1]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i643 = data
  i642.position = new pc.Vec3( i643[0], i643[1], i643[2] )
  i642.scale = new pc.Vec3( i643[3], i643[4], i643[5] )
  i642.rotation = new pc.Quat(i643[6], i643[7], i643[8], i643[9])
  return i642
}

Deserializers["PlayableAdsTool.GameManager"] = function (request, data, root) {
  var i644 = root || request.c( 'PlayableAdsTool.GameManager' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'CoinText')
  i644.currentMoney = i645[2]
  return i644
}

Deserializers["GameStateManager"] = function (request, data, root) {
  var i646 = root || request.c( 'GameStateManager' )
  var i647 = data
  i646.currentStateType = i647[0]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i649 = data
  i648.name = i649[0]
  i648.tagId = i649[1]
  i648.enabled = !!i649[2]
  i648.isStatic = !!i649[3]
  i648.layer = i649[4]
  return i648
}

Deserializers["_InGame.Scripts.DrawContollers.DrawingController"] = function (request, data, root) {
  var i650 = root || request.c( '_InGame.Scripts.DrawContollers.DrawingController' )
  var i651 = data
  var i653 = i651[0]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('_InGame.Scripts.DrawContollers.DrawPointBase')))
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 1, i652, '')
  }
  i650.AllDrawPoints = i652
  var i655 = i651[1]
  var i654 = new (System.Collections.Generic.List$1(Bridge.ns('_InGame.Scripts.DrawContollers.DrawPointBase')))
  for(var i = 0; i < i655.length; i += 2) {
  request.r(i655[i + 0], i655[i + 1], 1, i654, '')
  }
  i650.SelectedDrawPoints = i654
  request.r(i651[2], i651[3], 0, i650, '_lineRenderer')
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i659 = data
  i658.textureMode = i659[0]
  i658.alignment = i659[1]
  i658.widthCurve = new pc.AnimationCurve( { keys_flow: i659[2] } )
  i658.colorGradient = i659[3] ? new pc.ColorGradient(i659[3][0], i659[3][1], i659[3][2]) : null
  var i661 = i659[4]
  var i660 = []
  for(var i = 0; i < i661.length; i += 3) {
    i660.push( new pc.Vec3( i661[i + 0], i661[i + 1], i661[i + 2] ) );
  }
  i658.positions = i660
  i658.positionCount = i659[5]
  i658.widthMultiplier = i659[6]
  i658.startWidth = i659[7]
  i658.endWidth = i659[8]
  i658.numCornerVertices = i659[9]
  i658.numCapVertices = i659[10]
  i658.useWorldSpace = !!i659[11]
  i658.loop = !!i659[12]
  i658.startColor = new pc.Color(i659[13], i659[14], i659[15], i659[16])
  i658.endColor = new pc.Color(i659[17], i659[18], i659[19], i659[20])
  i658.generateLightingData = !!i659[21]
  i658.enabled = !!i659[22]
  request.r(i659[23], i659[24], 0, i658, 'sharedMaterial')
  var i663 = i659[25]
  var i662 = []
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 2, i662, '')
  }
  i658.sharedMaterials = i662
  i658.receiveShadows = !!i659[26]
  i658.shadowCastingMode = i659[27]
  i658.sortingLayerID = i659[28]
  i658.sortingOrder = i659[29]
  i658.lightmapIndex = i659[30]
  i658.lightmapSceneIndex = i659[31]
  i658.lightmapScaleOffset = new pc.Vec4( i659[32], i659[33], i659[34], i659[35] )
  i658.lightProbeUsage = i659[36]
  i658.reflectionProbeUsage = i659[37]
  return i658
}

Deserializers["_InGame.Scripts.DrawContollers.DrawPointGenerator"] = function (request, data, root) {
  var i668 = root || request.c( '_InGame.Scripts.DrawContollers.DrawPointGenerator' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, '_drawingController')
  request.r(i669[2], i669[3], 0, i668, '_pathCreator')
  i668.HowManyPoints = i669[4]
  var i671 = i669[5]
  var i670 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i671.length; i += 3) {
    i670.add(new pc.Vec3( i671[i + 0], i671[i + 1], i671[i + 2] ));
  }
  i668.GizmoPoints = i670
  return i668
}

Deserializers["_InGame.Scripts.DrawContollers.DrawPointBase"] = function (request, data, root) {
  var i674 = root || request.c( '_InGame.Scripts.DrawContollers.DrawPointBase' )
  var i675 = data
  i674._drawPointType = i675[0]
  var i677 = i675[1]
  var i676 = new (System.Collections.Generic.List$1(Bridge.ns('_InGame.Scripts.DrawContollers.DrawPointBase')))
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 1, i676, '')
  }
  i674.BorderDrawPoints = i676
  i674.PointConnectionCount = i675[2]
  return i674
}

Deserializers["PathCreation.PathCreator"] = function (request, data, root) {
  var i678 = root || request.c( 'PathCreation.PathCreator' )
  var i679 = data
  i678.editorData = request.d('PathCreation.PathCreatorData', i679[0], i678.editorData)
  i678.initialized = !!i679[1]
  return i678
}

Deserializers["PathCreation.PathCreatorData"] = function (request, data, root) {
  var i680 = root || request.c( 'PathCreation.PathCreatorData' )
  var i681 = data
  i680.vertexPathMaxAngleError = i681[0]
  i680.vertexPathMinVertexSpacing = i681[1]
  i680.showTransformTool = !!i681[2]
  i680.showPathBounds = !!i681[3]
  i680.showPerSegmentBounds = !!i681[4]
  i680.displayAnchorPoints = !!i681[5]
  i680.displayControlPoints = !!i681[6]
  i680.bezierHandleScale = i681[7]
  i680.globalDisplaySettingsFoldout = !!i681[8]
  i680.keepConstantHandleSize = !!i681[9]
  i680.showNormalsInVertexMode = !!i681[10]
  i680.showBezierPathInVertexMode = !!i681[11]
  i680.showDisplayOptions = !!i681[12]
  i680.showPathOptions = !!i681[13]
  i680.showVertexPathDisplayOptions = !!i681[14]
  i680.showVertexPathOptions = !!i681[15]
  i680.showNormals = !!i681[16]
  i680.showNormalsHelpInfo = !!i681[17]
  i680.tabIndex = i681[18]
  i680._bezierPath = request.d('PathCreation.BezierPath', i681[19], i680._bezierPath)
  i680.vertexPathUpToDate = !!i681[20]
  return i680
}

Deserializers["PathCreation.BezierPath"] = function (request, data, root) {
  var i682 = root || request.c( 'PathCreation.BezierPath' )
  var i683 = data
  var i685 = i683[0]
  var i684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i685.length; i += 3) {
    i684.add(new pc.Vec3( i685[i + 0], i685[i + 1], i685[i + 2] ));
  }
  i682.points = i684
  i682.isClosed = !!i683[1]
  i682.space = i683[2]
  i682.controlMode = i683[3]
  i682.autoControlLength = i683[4]
  i682.boundsUpToDate = !!i683[5]
  var i687 = i683[6]
  var i686 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i687.length; i += 1) {
    i686.add(i687[i + 0]);
  }
  i682.perAnchorNormalsAngle = i686
  i682.globalNormalsAngle = i683[7]
  i682.flipNormals = !!i683[8]
  return i682
}

Deserializers["PathCreation.Examples.RoadMeshCreator"] = function (request, data, root) {
  var i690 = root || request.c( 'PathCreation.Examples.RoadMeshCreator' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'pathCreator')
  i690.autoUpdate = !!i691[2]
  i690.roadWidth = i691[3]
  i690.thickness = i691[4]
  i690.flattenSurface = !!i691[5]
  request.r(i691[6], i691[7], 0, i690, 'roadMaterial')
  request.r(i691[8], i691[9], 0, i690, 'undersideMaterial')
  i690.textureTiling = i691[10]
  request.r(i691[11], i691[12], 0, i690, 'meshHolder')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'sharedMesh')
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'additionalVertexStreams')
  i694.enabled = !!i695[2]
  request.r(i695[3], i695[4], 0, i694, 'sharedMaterial')
  var i697 = i695[5]
  var i696 = []
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 2, i696, '')
  }
  i694.sharedMaterials = i696
  i694.receiveShadows = !!i695[6]
  i694.shadowCastingMode = i695[7]
  i694.sortingLayerID = i695[8]
  i694.sortingOrder = i695[9]
  i694.lightmapIndex = i695[10]
  i694.lightmapSceneIndex = i695[11]
  i694.lightmapScaleOffset = new pc.Vec4( i695[12], i695[13], i695[14], i695[15] )
  i694.lightProbeUsage = i695[16]
  i694.reflectionProbeUsage = i695[17]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i699 = data
  i698.enabled = !!i699[0]
  request.r(i699[1], i699[2], 0, i698, 'sharedMaterial')
  var i701 = i699[3]
  var i700 = []
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 2, i700, '')
  }
  i698.sharedMaterials = i700
  i698.receiveShadows = !!i699[4]
  i698.shadowCastingMode = i699[5]
  i698.sortingLayerID = i699[6]
  i698.sortingOrder = i699[7]
  i698.lightmapIndex = i699[8]
  i698.lightmapSceneIndex = i699[9]
  i698.lightmapScaleOffset = new pc.Vec4( i699[10], i699[11], i699[12], i699[13] )
  i698.lightProbeUsage = i699[14]
  i698.reflectionProbeUsage = i699[15]
  i698.color = new pc.Color(i699[16], i699[17], i699[18], i699[19])
  request.r(i699[20], i699[21], 0, i698, 'sprite')
  i698.flipX = !!i699[22]
  i698.flipY = !!i699[23]
  i698.drawMode = i699[24]
  i698.size = new pc.Vec2( i699[25], i699[26] )
  i698.tileMode = i699[27]
  i698.adaptiveModeThreshold = i699[28]
  i698.maskInteraction = i699[29]
  i698.spriteSortPoint = i699[30]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i702 = root || new pc.UnityMaterial()
  var i703 = data
  i702.name = i703[0]
  request.r(i703[1], i703[2], 0, i702, 'shader')
  i702.renderQueue = i703[3]
  i702.enableInstancing = !!i703[4]
  var i705 = i703[5]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i705[i + 0]) );
  }
  i702.floatParameters = i704
  var i707 = i703[6]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i707[i + 0]) );
  }
  i702.colorParameters = i706
  var i709 = i703[7]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i709[i + 0]) );
  }
  i702.vectorParameters = i708
  var i711 = i703[8]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i711[i + 0]) );
  }
  i702.textureParameters = i710
  var i713 = i703[9]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i713[i + 0]) );
  }
  i702.materialFlags = i712
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i717 = data
  i716.name = i717[0]
  i716.value = i717[1]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i721 = data
  i720.name = i721[0]
  i720.value = new pc.Color(i721[1], i721[2], i721[3], i721[4])
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i725 = data
  i724.name = i725[0]
  i724.value = new pc.Vec4( i725[1], i725[2], i725[3], i725[4] )
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i729 = data
  i728.name = i729[0]
  request.r(i729[1], i729[2], 0, i728, 'value')
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i733 = data
  i732.name = i733[0]
  i732.enabled = !!i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i735 = data
  i734.name = i735[0]
  i734.halfPrecision = !!i735[1]
  i734.useUInt32IndexFormat = !!i735[2]
  i734.vertexCount = i735[3]
  i734.aabb = i735[4]
  var i737 = i735[5]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( !!i737[i + 0] );
  }
  i734.streams = i736
  i734.vertices = i735[6]
  var i739 = i735[7]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i739[i + 0]) );
  }
  i734.subMeshes = i738
  var i741 = i735[8]
  var i740 = []
  for(var i = 0; i < i741.length; i += 16) {
    i740.push( new pc.Mat4().setData(i741[i + 0], i741[i + 1], i741[i + 2], i741[i + 3],  i741[i + 4], i741[i + 5], i741[i + 6], i741[i + 7],  i741[i + 8], i741[i + 9], i741[i + 10], i741[i + 11],  i741[i + 12], i741[i + 13], i741[i + 14], i741[i + 15]) );
  }
  i734.bindposes = i740
  var i743 = i735[9]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i743[i + 0]) );
  }
  i734.blendShapes = i742
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i749 = data
  i748.triangles = i749[0]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i755 = data
  i754.name = i755[0]
  var i757 = i755[1]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i757[i + 0]) );
  }
  i754.frames = i756
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i759 = data
  i758.name = i759[0]
  i758.width = i759[1]
  i758.height = i759[2]
  i758.mipmapCount = i759[3]
  i758.anisoLevel = i759[4]
  i758.filterMode = i759[5]
  i758.hdr = !!i759[6]
  i758.format = i759[7]
  i758.wrapMode = i759[8]
  i758.alphaIsTransparency = !!i759[9]
  i758.alphaSource = i759[10]
  i758.graphicsFormat = i759[11]
  i758.sRGBTexture = !!i759[12]
  i758.desiredColorSpace = i759[13]
  i758.wrapU = i759[14]
  i758.wrapV = i759[15]
  return i758
}

Deserializers["PlayableAdsTool.ResponsiveManager"] = function (request, data, root) {
  var i760 = root || request.c( 'PlayableAdsTool.ResponsiveManager' )
  var i761 = data
  i760.CurrentScreenOrientation = i761[0]
  i760.CurrentAspectRatio = i761[1]
  var i763 = i761[2]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('UIElement', i763[i + 0]) );
  }
  i760.UiElements = i762
  var i765 = i761[3]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(request.d('UIData', i765[i + 0]));
  }
  i760.Horizantal_20_9 = i764
  var i767 = i761[4]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i767.length; i += 1) {
    i766.add(request.d('UIData', i767[i + 0]));
  }
  i760.Horizantal_16_9 = i766
  var i769 = i761[5]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(request.d('UIData', i769[i + 0]));
  }
  i760.Horizantal_4_3 = i768
  var i771 = i761[6]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i771.length; i += 1) {
    i770.add(request.d('UIData', i771[i + 0]));
  }
  i760.Vertical_9_20 = i770
  var i773 = i761[7]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i773.length; i += 1) {
    i772.add(request.d('UIData', i773[i + 0]));
  }
  i760.Vertical_9_16 = i772
  var i775 = i761[8]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('UIData', i775[i + 0]));
  }
  i760.Vertical_3_4 = i774
  request.r(i761[9], i761[10], 0, i760, 'BannerVertical')
  request.r(i761[11], i761[12], 0, i760, 'BannerHorizontal')
  i760.UseOptionalBanner = !!i761[13]
  i760.BannerOptions = i761[14]
  var i777 = i761[15]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i760.VerticalOptions = i776
  var i779 = i761[16]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i760.HorizontalOptions = i778
  return i760
}

Deserializers["UIElement"] = function (request, data, root) {
  var i782 = root || request.c( 'UIElement' )
  var i783 = data
  i782._rectTransformName = i783[0]
  request.r(i783[1], i783[2], 0, i782, '_rectTransform')
  return i782
}

Deserializers["UIData"] = function (request, data, root) {
  var i786 = root || request.c( 'UIData' )
  var i787 = data
  i786.AnchoredPosition = new pc.Vec2( i787[0], i787[1] )
  i786.SizeDelta = new pc.Vec2( i787[2], i787[3] )
  i786.Rotation = new pc.Quat(i787[4], i787[5], i787[6], i787[7])
  i786.LocalScale = new pc.Vec3( i787[8], i787[9], i787[10] )
  i786.AnchorMin = new pc.Vec2( i787[11], i787[12] )
  i786.AnchorMax = new pc.Vec2( i787[13], i787[14] )
  i786.Pivot = new pc.Vec2( i787[15], i787[16] )
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i791 = data
  i790.pivot = new pc.Vec2( i791[0], i791[1] )
  i790.anchorMin = new pc.Vec2( i791[2], i791[3] )
  i790.anchorMax = new pc.Vec2( i791[4], i791[5] )
  i790.sizeDelta = new pc.Vec2( i791[6], i791[7] )
  i790.anchoredPosition3D = new pc.Vec3( i791[8], i791[9], i791[10] )
  i790.rotation = new pc.Quat(i791[11], i791[12], i791[13], i791[14])
  i790.scale = new pc.Vec3( i791[15], i791[16], i791[17] )
  return i790
}

Deserializers["PlayableAdsTool.EndCardController"] = function (request, data, root) {
  var i792 = root || request.c( 'PlayableAdsTool.EndCardController' )
  var i793 = data
  i792.TowerCount = i793[0]
  i792.TowerUpgradedCount = i793[1]
  i792.ZombieKilledCount = i793[2]
  i792._isStoreOpen = !!i793[3]
  i792.IsEndCardOpened = !!i793[4]
  i792.LastEndCard = !!i793[5]
  i792.PlayTimeTimer = i793[6]
  i792.SendStoreWithEndCard = !!i793[7]
  i792._openStoreAfterTaps = i793[8]
  i792._openStoreAfterSeconds = i793[9]
  i792._openStoreAfterEndCard = !!i793[10]
  i792.EndCards = i793[11]
  var i795 = i793[12]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i792._endCards = i794
  request.r(i793[13], i793[14], 0, i792, '_endCardImage')
  var i797 = i793[15]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i792._endCardSprite = i796
  var i799 = i793[16]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i792.OtherUIElements = i798
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i803 = data
  i802.cullTransparentMesh = !!i803[0]
  return i802
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.UI.Image' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'm_Sprite')
  i804.m_Type = i805[2]
  i804.m_PreserveAspect = !!i805[3]
  i804.m_FillCenter = !!i805[4]
  i804.m_FillMethod = i805[5]
  i804.m_FillAmount = i805[6]
  i804.m_FillClockwise = !!i805[7]
  i804.m_FillOrigin = i805[8]
  i804.m_UseSpriteMesh = !!i805[9]
  i804.m_PixelsPerUnitMultiplier = i805[10]
  request.r(i805[11], i805[12], 0, i804, 'm_Material')
  i804.m_Maskable = !!i805[13]
  i804.m_Color = new pc.Color(i805[14], i805[15], i805[16], i805[17])
  i804.m_RaycastTarget = !!i805[18]
  i804.m_RaycastPadding = new pc.Vec4( i805[19], i805[20], i805[21], i805[22] )
  return i804
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.Button' )
  var i807 = data
  i806.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i807[0], i806.m_OnClick)
  i806.m_Navigation = request.d('UnityEngine.UI.Navigation', i807[1], i806.m_Navigation)
  i806.m_Transition = i807[2]
  i806.m_Colors = request.d('UnityEngine.UI.ColorBlock', i807[3], i806.m_Colors)
  i806.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i807[4], i806.m_SpriteState)
  i806.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i807[5], i806.m_AnimationTriggers)
  i806.m_Interactable = !!i807[6]
  request.r(i807[7], i807[8], 0, i806, 'm_TargetGraphic')
  return i806
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i809 = data
  i808.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i809[0], i808.m_PersistentCalls)
  return i808
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i811 = data
  var i813 = i811[0]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i813.length; i += 1) {
    i812.add(request.d('UnityEngine.Events.PersistentCall', i813[i + 0]));
  }
  i810.m_Calls = i812
  return i810
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'm_Target')
  i816.m_TargetAssemblyTypeName = i817[2]
  i816.m_MethodName = i817[3]
  i816.m_Mode = i817[4]
  i816.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i817[5], i816.m_Arguments)
  i816.m_CallState = i817[6]
  return i816
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'm_ObjectArgument')
  i818.m_ObjectArgumentAssemblyTypeName = i819[2]
  i818.m_IntArgument = i819[3]
  i818.m_FloatArgument = i819[4]
  i818.m_StringArgument = i819[5]
  i818.m_BoolArgument = !!i819[6]
  return i818
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i821 = data
  i820.m_Mode = i821[0]
  i820.m_WrapAround = !!i821[1]
  request.r(i821[2], i821[3], 0, i820, 'm_SelectOnUp')
  request.r(i821[4], i821[5], 0, i820, 'm_SelectOnDown')
  request.r(i821[6], i821[7], 0, i820, 'm_SelectOnLeft')
  request.r(i821[8], i821[9], 0, i820, 'm_SelectOnRight')
  return i820
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i823 = data
  i822.m_NormalColor = new pc.Color(i823[0], i823[1], i823[2], i823[3])
  i822.m_HighlightedColor = new pc.Color(i823[4], i823[5], i823[6], i823[7])
  i822.m_PressedColor = new pc.Color(i823[8], i823[9], i823[10], i823[11])
  i822.m_SelectedColor = new pc.Color(i823[12], i823[13], i823[14], i823[15])
  i822.m_DisabledColor = new pc.Color(i823[16], i823[17], i823[18], i823[19])
  i822.m_ColorMultiplier = i823[20]
  i822.m_FadeDuration = i823[21]
  return i822
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'm_HighlightedSprite')
  request.r(i825[2], i825[3], 0, i824, 'm_PressedSprite')
  request.r(i825[4], i825[5], 0, i824, 'm_SelectedSprite')
  request.r(i825[6], i825[7], 0, i824, 'm_DisabledSprite')
  return i824
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i827 = data
  i826.m_NormalTrigger = i827[0]
  i826.m_HighlightedTrigger = i827[1]
  i826.m_PressedTrigger = i827[2]
  i826.m_SelectedTrigger = i827[3]
  i826.m_DisabledTrigger = i827[4]
  return i826
}

Deserializers["PlayableAdsTool.AudioManager"] = function (request, data, root) {
  var i828 = root || request.c( 'PlayableAdsTool.AudioManager' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'AudioSourceContainer')
  var i831 = i829[2]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('PlayableAdsTool.SoundTypeListPair')))
  for(var i = 0; i < i831.length; i += 1) {
    i830.add(request.d('PlayableAdsTool.SoundTypeListPair', i831[i + 0]));
  }
  i828.SoundTypeListPairs = i830
  return i828
}

Deserializers["PlayableAdsTool.SoundTypeListPair"] = function (request, data, root) {
  var i834 = root || request.c( 'PlayableAdsTool.SoundTypeListPair' )
  var i835 = data
  i834.type = i835[0]
  var i837 = i835[1]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 1, i836, '')
  }
  i834.clips = i836
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'clip')
  request.r(i839[2], i839[3], 0, i838, 'outputAudioMixerGroup')
  i838.playOnAwake = !!i839[4]
  i838.loop = !!i839[5]
  i838.time = i839[6]
  i838.volume = i839[7]
  i838.pitch = i839[8]
  i838.enabled = !!i839[9]
  return i838
}

Deserializers["PlayableAdsTool.AudioSourceContainer"] = function (request, data, root) {
  var i840 = root || request.c( 'PlayableAdsTool.AudioSourceContainer' )
  var i841 = data
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i843 = data
  i842.name = i843[0]
  i842.atlasId = i843[1]
  i842.mipmapCount = i843[2]
  i842.hdr = !!i843[3]
  i842.size = i843[4]
  i842.anisoLevel = i843[5]
  i842.filterMode = i843[6]
  var i845 = i843[7]
  var i844 = []
  for(var i = 0; i < i845.length; i += 4) {
    i844.push( UnityEngine.Rect.MinMaxRect(i845[i + 0], i845[i + 1], i845[i + 2], i845[i + 3]) );
  }
  i842.rects = i844
  i842.wrapU = i843[8]
  i842.wrapV = i843[9]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i849 = data
  i848.name = i849[0]
  i848.index = i849[1]
  i848.startup = !!i849[2]
  return i848
}

Deserializers["_InGame.Scripts.Managers.DrawingManager"] = function (request, data, root) {
  var i850 = root || request.c( '_InGame.Scripts.Managers.DrawingManager' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'CurrentDrawingController')
  return i850
}

Deserializers["PlayableAdsTool.CameraManager"] = function (request, data, root) {
  var i852 = root || request.c( 'PlayableAdsTool.CameraManager' )
  var i853 = data
  i852.CurrentCamState = i853[0]
  request.r(i853[1], i853[2], 0, i852, 'MainCam')
  request.r(i853[3], i853[4], 0, i852, 'CanvasCam')
  var i855 = i853[5]
  var i854 = []
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 2, i854, '')
  }
  i852._verticalCam_9_20 = i854
  var i857 = i853[6]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i852._verticalCam_9_16 = i856
  var i859 = i853[7]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i852._verticalCam_3_4 = i858
  var i861 = i853[8]
  var i860 = []
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 2, i860, '')
  }
  i852._horizontalCam_20_9 = i860
  var i863 = i853[9]
  var i862 = []
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 2, i862, '')
  }
  i852._horizontalCam_16_9 = i862
  var i865 = i853[10]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i852._horizontalCam_4_3 = i864
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i867 = data
  i866.enabled = !!i867[0]
  i866.aspect = i867[1]
  i866.orthographic = !!i867[2]
  i866.orthographicSize = i867[3]
  i866.backgroundColor = new pc.Color(i867[4], i867[5], i867[6], i867[7])
  i866.nearClipPlane = i867[8]
  i866.farClipPlane = i867[9]
  i866.fieldOfView = i867[10]
  i866.depth = i867[11]
  i866.clearFlags = i867[12]
  i866.cullingMask = i867[13]
  i866.rect = i867[14]
  request.r(i867[15], i867[16], 0, i866, 'targetTexture')
  i866.usePhysicalProperties = !!i867[17]
  i866.focalLength = i867[18]
  i866.sensorSize = new pc.Vec2( i867[19], i867[20] )
  i866.lensShift = new pc.Vec2( i867[21], i867[22] )
  i866.gateFit = i867[23]
  i866.commandBufferCount = i867[24]
  i866.cameraType = i867[25]
  return i866
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i868 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i869 = data
  i868.m_ShowDebugText = !!i869[0]
  i868.m_ShowCameraFrustum = !!i869[1]
  i868.m_IgnoreTimeScale = !!i869[2]
  request.r(i869[3], i869[4], 0, i868, 'm_WorldUpOverride')
  i868.m_UpdateMethod = i869[5]
  i868.m_BlendUpdateMethod = i869[6]
  i868.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i869[7], i868.m_DefaultBlend)
  request.r(i869[8], i869[9], 0, i868, 'm_CustomBlends')
  i868.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i869[10], i868.m_CameraCutEvent)
  i868.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i869[11], i868.m_CameraActivatedEvent)
  return i868
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i870 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i871 = data
  i870.m_Style = i871[0]
  i870.m_Time = i871[1]
  i870.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i871[2] } )
  return i870
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i872 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i873 = data
  i872.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i873[0], i872.m_PersistentCalls)
  return i872
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i874 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i875 = data
  i874.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i875[0], i874.m_PersistentCalls)
  return i874
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i876 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'm_LookAt')
  request.r(i877[2], i877[3], 0, i876, 'm_Follow')
  i876.m_Lens = request.d('Cinemachine.LensSettings', i877[4], i876.m_Lens)
  i876.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i877[5], i876.m_Transitions)
  var i879 = i877[6]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( i879[i + 0] );
  }
  i876.m_ExcludedPropertiesInInspector = i878
  var i881 = i877[7]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( i881[i + 0] );
  }
  i876.m_LockStageInInspector = i880
  i876.m_Priority = i877[8]
  i876.m_StandbyUpdate = i877[9]
  i876.m_LegacyBlendHint = i877[10]
  request.r(i877[11], i877[12], 0, i876, 'm_ComponentOwner')
  i876.m_StreamingVersion = i877[13]
  return i876
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i882 = root || request.c( 'Cinemachine.LensSettings' )
  var i883 = data
  i882.FieldOfView = i883[0]
  i882.OrthographicSize = i883[1]
  i882.NearClipPlane = i883[2]
  i882.FarClipPlane = i883[3]
  i882.Dutch = i883[4]
  i882.ModeOverride = i883[5]
  i882.LensShift = new pc.Vec2( i883[6], i883[7] )
  i882.GateFit = i883[8]
  i882.FocusDistance = i883[9]
  i882.m_SensorSize = new pc.Vec2( i883[10], i883[11] )
  return i882
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i884 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i885 = data
  i884.m_BlendHint = i885[0]
  i884.m_InheritPosition = !!i885[1]
  i884.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i885[2], i884.m_OnCameraLive)
  return i884
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i890 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i891 = data
  return i890
}

Deserializers["_InGame.Scripts.Utilities.PrefabHolder"] = function (request, data, root) {
  var i892 = root || request.c( '_InGame.Scripts.Utilities.PrefabHolder' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'DrawPointPrefab')
  return i892
}

Deserializers["PlayableAdsTool.ObjectPoolManager"] = function (request, data, root) {
  var i896 = root || request.c( 'PlayableAdsTool.ObjectPoolManager' )
  var i897 = data
  var i899 = i897[0]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('PlayableAdsTool.PoolContainer')))
  for(var i = 0; i < i899.length; i += 1) {
    i898.add(request.d('PlayableAdsTool.PoolContainer', i899[i + 0]));
  }
  i896._poolContainers = i898
  return i896
}

Deserializers["PlayableAdsTool.PoolContainer"] = function (request, data, root) {
  var i902 = root || request.c( 'PlayableAdsTool.PoolContainer' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'Prefab')
  i902.Count = i903[2]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i905 = data
  i904.enabled = !!i905[0]
  i904.planeDistance = i905[1]
  i904.referencePixelsPerUnit = i905[2]
  i904.isFallbackOverlay = !!i905[3]
  i904.renderMode = i905[4]
  i904.renderOrder = i905[5]
  i904.sortingLayerName = i905[6]
  i904.sortingOrder = i905[7]
  i904.scaleFactor = i905[8]
  request.r(i905[9], i905[10], 0, i904, 'worldCamera')
  i904.overrideSorting = !!i905[11]
  i904.pixelPerfect = !!i905[12]
  i904.targetDisplay = i905[13]
  i904.overridePixelPerfect = !!i905[14]
  return i904
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i907 = data
  i906.m_UiScaleMode = i907[0]
  i906.m_ReferencePixelsPerUnit = i907[1]
  i906.m_ScaleFactor = i907[2]
  i906.m_ReferenceResolution = new pc.Vec2( i907[3], i907[4] )
  i906.m_ScreenMatchMode = i907[5]
  i906.m_MatchWidthOrHeight = i907[6]
  i906.m_PhysicalUnit = i907[7]
  i906.m_FallbackScreenDPI = i907[8]
  i906.m_DefaultSpriteDPI = i907[9]
  i906.m_DynamicPixelsPerUnit = i907[10]
  i906.m_PresetInfoIsWorld = !!i907[11]
  return i906
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i909 = data
  i908.m_IgnoreReversedGraphics = !!i909[0]
  i908.m_BlockingObjects = i909[1]
  i908.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i909[2] )
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'animatorController')
  request.r(i911[2], i911[3], 0, i910, 'avatar')
  i910.updateMode = i911[4]
  i910.hasTransformHierarchy = !!i911[5]
  i910.applyRootMotion = !!i911[6]
  var i913 = i911[7]
  var i912 = []
  for(var i = 0; i < i913.length; i += 2) {
  request.r(i913[i + 0], i913[i + 1], 2, i912, '')
  }
  i910.humanBones = i912
  i910.enabled = !!i911[8]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i917 = data
  i916.enabled = !!i917[0]
  i916.type = i917[1]
  i916.color = new pc.Color(i917[2], i917[3], i917[4], i917[5])
  i916.cullingMask = i917[6]
  i916.intensity = i917[7]
  i916.range = i917[8]
  i916.spotAngle = i917[9]
  i916.shadows = i917[10]
  i916.shadowNormalBias = i917[11]
  i916.shadowBias = i917[12]
  i916.shadowStrength = i917[13]
  i916.shadowResolution = i917[14]
  i916.lightmapBakeType = i917[15]
  i916.renderMode = i917[16]
  request.r(i917[17], i917[18], 0, i916, 'cookie')
  i916.cookieSize = i917[19]
  return i916
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'm_FirstSelected')
  i918.m_sendNavigationEvents = !!i919[2]
  i918.m_DragThreshold = i919[3]
  return i918
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i921 = data
  i920.m_HorizontalAxis = i921[0]
  i920.m_VerticalAxis = i921[1]
  i920.m_SubmitButton = i921[2]
  i920.m_CancelButton = i921[3]
  i920.m_InputActionsPerSecond = i921[4]
  i920.m_RepeatDelay = i921[5]
  i920.m_ForceModuleActive = !!i921[6]
  i920.m_SendPointerHoverToParent = !!i921[7]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i923 = data
  i922.ambientIntensity = i923[0]
  i922.reflectionIntensity = i923[1]
  i922.ambientMode = i923[2]
  i922.ambientLight = new pc.Color(i923[3], i923[4], i923[5], i923[6])
  i922.ambientSkyColor = new pc.Color(i923[7], i923[8], i923[9], i923[10])
  i922.ambientGroundColor = new pc.Color(i923[11], i923[12], i923[13], i923[14])
  i922.ambientEquatorColor = new pc.Color(i923[15], i923[16], i923[17], i923[18])
  i922.fogColor = new pc.Color(i923[19], i923[20], i923[21], i923[22])
  i922.fogEndDistance = i923[23]
  i922.fogStartDistance = i923[24]
  i922.fogDensity = i923[25]
  i922.fog = !!i923[26]
  request.r(i923[27], i923[28], 0, i922, 'skybox')
  i922.fogMode = i923[29]
  var i925 = i923[30]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i925[i + 0]) );
  }
  i922.lightmaps = i924
  i922.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i923[31], i922.lightProbes)
  i922.lightmapsMode = i923[32]
  i922.mixedBakeMode = i923[33]
  i922.environmentLightingMode = i923[34]
  i922.ambientProbe = new pc.SphericalHarmonicsL2(i923[35])
  i922.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i923[36])
  i922.useReferenceAmbientProbe = !!i923[37]
  request.r(i923[38], i923[39], 0, i922, 'customReflection')
  request.r(i923[40], i923[41], 0, i922, 'defaultReflection')
  i922.defaultReflectionMode = i923[42]
  i922.defaultReflectionResolution = i923[43]
  i922.sunLightObjectId = i923[44]
  i922.pixelLightCount = i923[45]
  i922.defaultReflectionHDR = !!i923[46]
  i922.hasLightDataAsset = !!i923[47]
  i922.hasManualGenerate = !!i923[48]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'lightmapColor')
  request.r(i929[2], i929[3], 0, i928, 'lightmapDirection')
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i930 = root || new UnityEngine.LightProbes()
  var i931 = data
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i937 = data
  var i939 = i937[0]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i939.length; i += 1) {
    i938.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i939[i + 0]));
  }
  i936.ShaderCompilationErrors = i938
  i936.name = i937[1]
  i936.guid = i937[2]
  var i941 = i937[3]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( i941[i + 0] );
  }
  i936.shaderDefinedKeywords = i940
  var i943 = i937[4]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i943[i + 0]) );
  }
  i936.passes = i942
  var i945 = i937[5]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i945[i + 0]) );
  }
  i936.usePasses = i944
  var i947 = i937[6]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i947[i + 0]) );
  }
  i936.defaultParameterValues = i946
  request.r(i937[7], i937[8], 0, i936, 'unityFallbackShader')
  i936.readDepth = !!i937[9]
  i936.isCreatedByShaderGraph = !!i937[10]
  i936.compiled = !!i937[11]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i951 = data
  i950.shaderName = i951[0]
  i950.errorMessage = i951[1]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i954 = root || new pc.UnityShaderPass()
  var i955 = data
  i954.id = i955[0]
  i954.subShaderIndex = i955[1]
  i954.name = i955[2]
  i954.passType = i955[3]
  i954.grabPassTextureName = i955[4]
  i954.usePass = !!i955[5]
  i954.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[6], i954.zTest)
  i954.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[7], i954.zWrite)
  i954.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[8], i954.culling)
  i954.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i955[9], i954.blending)
  i954.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i955[10], i954.alphaBlending)
  i954.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[11], i954.colorWriteMask)
  i954.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[12], i954.offsetUnits)
  i954.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[13], i954.offsetFactor)
  i954.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[14], i954.stencilRef)
  i954.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[15], i954.stencilReadMask)
  i954.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[16], i954.stencilWriteMask)
  i954.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i955[17], i954.stencilOp)
  i954.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i955[18], i954.stencilOpFront)
  i954.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i955[19], i954.stencilOpBack)
  var i957 = i955[20]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i957[i + 0]) );
  }
  i954.tags = i956
  var i959 = i955[21]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( i959[i + 0] );
  }
  i954.passDefinedKeywords = i958
  var i961 = i955[22]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i961[i + 0]) );
  }
  i954.passDefinedKeywordGroups = i960
  var i963 = i955[23]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i963[i + 0]) );
  }
  i954.variants = i962
  var i965 = i955[24]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i965[i + 0]) );
  }
  i954.excludedVariants = i964
  i954.hasDepthReader = !!i955[25]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i967 = data
  i966.val = i967[0]
  i966.name = i967[1]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i969 = data
  i968.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[0], i968.src)
  i968.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[1], i968.dst)
  i968.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[2], i968.op)
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i971 = data
  i970.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[0], i970.pass)
  i970.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[1], i970.fail)
  i970.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[2], i970.zFail)
  i970.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[3], i970.comp)
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i975 = data
  i974.name = i975[0]
  i974.value = i975[1]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i979 = data
  var i981 = i979[0]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( i981[i + 0] );
  }
  i978.keywords = i980
  i978.hasDiscard = !!i979[1]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i985 = data
  i984.passId = i985[0]
  i984.subShaderIndex = i985[1]
  var i987 = i985[2]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( i987[i + 0] );
  }
  i984.keywords = i986
  i984.vertexProgram = i985[3]
  i984.fragmentProgram = i985[4]
  i984.exportedForWebGl2 = !!i985[5]
  i984.readDepth = !!i985[6]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i991 = data
  request.r(i991[0], i991[1], 0, i990, 'shader')
  i990.pass = i991[2]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i995 = data
  i994.name = i995[0]
  i994.type = i995[1]
  i994.value = new pc.Vec4( i995[2], i995[3], i995[4], i995[5] )
  i994.textureValue = i995[6]
  i994.shaderPropertyFlag = i995[7]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i997 = data
  i996.name = i997[0]
  request.r(i997[1], i997[2], 0, i996, 'texture')
  i996.aabb = i997[3]
  i996.vertices = i997[4]
  i996.triangles = i997[5]
  i996.textureRect = UnityEngine.Rect.MinMaxRect(i997[6], i997[7], i997[8], i997[9])
  i996.packedRect = UnityEngine.Rect.MinMaxRect(i997[10], i997[11], i997[12], i997[13])
  i996.border = new pc.Vec4( i997[14], i997[15], i997[16], i997[17] )
  i996.transparency = i997[18]
  i996.bounds = i997[19]
  i996.pixelsPerUnit = i997[20]
  i996.textureWidth = i997[21]
  i996.textureHeight = i997[22]
  i996.nativeSize = new pc.Vec2( i997[23], i997[24] )
  i996.pivot = new pc.Vec2( i997[25], i997[26] )
  i996.textureRectOffset = new pc.Vec2( i997[27], i997[28] )
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i999 = data
  i998.name = i999[0]
  i998.ascent = i999[1]
  i998.originalLineHeight = i999[2]
  i998.fontSize = i999[3]
  var i1001 = i999[4]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1001[i + 0]) );
  }
  i998.characterInfo = i1000
  request.r(i999[5], i999[6], 0, i998, 'texture')
  i998.originalFontSize = i999[7]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1005 = data
  i1004.index = i1005[0]
  i1004.advance = i1005[1]
  i1004.bearing = i1005[2]
  i1004.glyphWidth = i1005[3]
  i1004.glyphHeight = i1005[4]
  i1004.minX = i1005[5]
  i1004.maxX = i1005[6]
  i1004.minY = i1005[7]
  i1004.maxY = i1005[8]
  i1004.uvBottomLeftX = i1005[9]
  i1004.uvBottomLeftY = i1005[10]
  i1004.uvBottomRightX = i1005[11]
  i1004.uvBottomRightY = i1005[12]
  i1004.uvTopLeftX = i1005[13]
  i1004.uvTopLeftY = i1005[14]
  i1004.uvTopRightX = i1005[15]
  i1004.uvTopRightY = i1005[16]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1007 = data
  i1006.name = i1007[0]
  var i1009 = i1007[1]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1009[i + 0]) );
  }
  i1006.layers = i1008
  var i1011 = i1007[2]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1011[i + 0]) );
  }
  i1006.parameters = i1010
  i1006.animationClips = i1007[3]
  i1006.avatarUnsupported = i1007[4]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1015 = data
  i1014.name = i1015[0]
  i1014.defaultWeight = i1015[1]
  i1014.blendingMode = i1015[2]
  i1014.avatarMask = i1015[3]
  i1014.syncedLayerIndex = i1015[4]
  i1014.syncedLayerAffectsTiming = !!i1015[5]
  i1014.syncedLayers = i1015[6]
  i1014.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1015[7], i1014.stateMachine)
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1017 = data
  i1016.id = i1017[0]
  i1016.name = i1017[1]
  i1016.path = i1017[2]
  var i1019 = i1017[3]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1019[i + 0]) );
  }
  i1016.states = i1018
  var i1021 = i1017[4]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1021[i + 0]) );
  }
  i1016.machines = i1020
  var i1023 = i1017[5]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1023[i + 0]) );
  }
  i1016.entryStateTransitions = i1022
  var i1025 = i1017[6]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1025[i + 0]) );
  }
  i1016.exitStateTransitions = i1024
  var i1027 = i1017[7]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1027[i + 0]) );
  }
  i1016.anyStateTransitions = i1026
  i1016.defaultStateId = i1017[8]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1031 = data
  i1030.id = i1031[0]
  i1030.name = i1031[1]
  i1030.cycleOffset = i1031[2]
  i1030.cycleOffsetParameter = i1031[3]
  i1030.cycleOffsetParameterActive = !!i1031[4]
  i1030.mirror = !!i1031[5]
  i1030.mirrorParameter = i1031[6]
  i1030.mirrorParameterActive = !!i1031[7]
  i1030.motionId = i1031[8]
  i1030.nameHash = i1031[9]
  i1030.fullPathHash = i1031[10]
  i1030.speed = i1031[11]
  i1030.speedParameter = i1031[12]
  i1030.speedParameterActive = !!i1031[13]
  i1030.tag = i1031[14]
  i1030.tagHash = i1031[15]
  i1030.writeDefaultValues = !!i1031[16]
  var i1033 = i1031[17]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 2) {
  request.r(i1033[i + 0], i1033[i + 1], 2, i1032, '')
  }
  i1030.behaviours = i1032
  var i1035 = i1031[18]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1035[i + 0]) );
  }
  i1030.transitions = i1034
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1041 = data
  i1040.fullPath = i1041[0]
  i1040.canTransitionToSelf = !!i1041[1]
  i1040.duration = i1041[2]
  i1040.exitTime = i1041[3]
  i1040.hasExitTime = !!i1041[4]
  i1040.hasFixedDuration = !!i1041[5]
  i1040.interruptionSource = i1041[6]
  i1040.offset = i1041[7]
  i1040.orderedInterruption = !!i1041[8]
  i1040.destinationStateId = i1041[9]
  i1040.isExit = !!i1041[10]
  i1040.mute = !!i1041[11]
  i1040.solo = !!i1041[12]
  var i1043 = i1041[13]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1043[i + 0]) );
  }
  i1040.conditions = i1042
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1047 = data
  i1046.mode = i1047[0]
  i1046.parameter = i1047[1]
  i1046.threshold = i1047[2]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1053 = data
  i1052.destinationStateId = i1053[0]
  i1052.isExit = !!i1053[1]
  i1052.mute = !!i1053[2]
  i1052.solo = !!i1053[3]
  var i1055 = i1053[4]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1055[i + 0]) );
  }
  i1052.conditions = i1054
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1059 = data
  i1058.defaultBool = !!i1059[0]
  i1058.defaultFloat = i1059[1]
  i1058.defaultInt = i1059[2]
  i1058.name = i1059[3]
  i1058.nameHash = i1059[4]
  i1058.type = i1059[5]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1061 = data
  i1060.name = i1061[0]
  i1060.bytes64 = i1061[1]
  i1060.data = i1061[2]
  return i1060
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1062 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1063 = data
  i1062.useSafeMode = !!i1063[0]
  i1062.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1063[1], i1062.safeModeOptions)
  i1062.timeScale = i1063[2]
  i1062.unscaledTimeScale = i1063[3]
  i1062.useSmoothDeltaTime = !!i1063[4]
  i1062.maxSmoothUnscaledTime = i1063[5]
  i1062.rewindCallbackMode = i1063[6]
  i1062.showUnityEditorReport = !!i1063[7]
  i1062.logBehaviour = i1063[8]
  i1062.drawGizmos = !!i1063[9]
  i1062.defaultRecyclable = !!i1063[10]
  i1062.defaultAutoPlay = i1063[11]
  i1062.defaultUpdateType = i1063[12]
  i1062.defaultTimeScaleIndependent = !!i1063[13]
  i1062.defaultEaseType = i1063[14]
  i1062.defaultEaseOvershootOrAmplitude = i1063[15]
  i1062.defaultEasePeriod = i1063[16]
  i1062.defaultAutoKill = !!i1063[17]
  i1062.defaultLoopType = i1063[18]
  i1062.debugMode = !!i1063[19]
  i1062.debugStoreTargetId = !!i1063[20]
  i1062.showPreviewPanel = !!i1063[21]
  i1062.storeSettingsLocation = i1063[22]
  i1062.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1063[23], i1062.modules)
  i1062.createASMDEF = !!i1063[24]
  i1062.showPlayingTweens = !!i1063[25]
  i1062.showPausedTweens = !!i1063[26]
  return i1062
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1064 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1065 = data
  i1064.logBehaviour = i1065[0]
  i1064.nestedTweenFailureBehaviour = i1065[1]
  return i1064
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1066 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1067 = data
  i1066.showPanel = !!i1067[0]
  i1066.audioEnabled = !!i1067[1]
  i1066.physicsEnabled = !!i1067[2]
  i1066.physics2DEnabled = !!i1067[3]
  i1066.spriteEnabled = !!i1067[4]
  i1066.uiEnabled = !!i1067[5]
  i1066.textMeshProEnabled = !!i1067[6]
  i1066.tk2DEnabled = !!i1067[7]
  i1066.deAudioEnabled = !!i1067[8]
  i1066.deUnityExtendedEnabled = !!i1067[9]
  i1066.epoOutlineEnabled = !!i1067[10]
  return i1066
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1068 = root || request.c( 'TMPro.TMP_Settings' )
  var i1069 = data
  i1068.m_enableWordWrapping = !!i1069[0]
  i1068.m_enableKerning = !!i1069[1]
  i1068.m_enableExtraPadding = !!i1069[2]
  i1068.m_enableTintAllSprites = !!i1069[3]
  i1068.m_enableParseEscapeCharacters = !!i1069[4]
  i1068.m_EnableRaycastTarget = !!i1069[5]
  i1068.m_GetFontFeaturesAtRuntime = !!i1069[6]
  i1068.m_missingGlyphCharacter = i1069[7]
  i1068.m_warningsDisabled = !!i1069[8]
  request.r(i1069[9], i1069[10], 0, i1068, 'm_defaultFontAsset')
  i1068.m_defaultFontAssetPath = i1069[11]
  i1068.m_defaultFontSize = i1069[12]
  i1068.m_defaultAutoSizeMinRatio = i1069[13]
  i1068.m_defaultAutoSizeMaxRatio = i1069[14]
  i1068.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1069[15], i1069[16] )
  i1068.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1069[17], i1069[18] )
  i1068.m_autoSizeTextContainer = !!i1069[19]
  i1068.m_IsTextObjectScaleStatic = !!i1069[20]
  var i1071 = i1069[21]
  var i1070 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1071.length; i += 2) {
  request.r(i1071[i + 0], i1071[i + 1], 1, i1070, '')
  }
  i1068.m_fallbackFontAssets = i1070
  i1068.m_matchMaterialPreset = !!i1069[22]
  request.r(i1069[23], i1069[24], 0, i1068, 'm_defaultSpriteAsset')
  i1068.m_defaultSpriteAssetPath = i1069[25]
  i1068.m_enableEmojiSupport = !!i1069[26]
  i1068.m_MissingCharacterSpriteUnicode = i1069[27]
  i1068.m_defaultColorGradientPresetsPath = i1069[28]
  request.r(i1069[29], i1069[30], 0, i1068, 'm_defaultStyleSheet')
  i1068.m_StyleSheetsResourcePath = i1069[31]
  request.r(i1069[32], i1069[33], 0, i1068, 'm_leadingCharacters')
  request.r(i1069[34], i1069[35], 0, i1068, 'm_followingCharacters')
  i1068.m_UseModernHangulLineBreakingRules = !!i1069[36]
  return i1068
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1074 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1075 = data
  i1074.hashCode = i1075[0]
  request.r(i1075[1], i1075[2], 0, i1074, 'material')
  i1074.materialHashCode = i1075[3]
  request.r(i1075[4], i1075[5], 0, i1074, 'atlas')
  i1074.normalStyle = i1075[6]
  i1074.normalSpacingOffset = i1075[7]
  i1074.boldStyle = i1075[8]
  i1074.boldSpacing = i1075[9]
  i1074.italicStyle = i1075[10]
  i1074.tabSize = i1075[11]
  i1074.m_Version = i1075[12]
  i1074.m_SourceFontFileGUID = i1075[13]
  request.r(i1075[14], i1075[15], 0, i1074, 'm_SourceFontFile_EditorRef')
  request.r(i1075[16], i1075[17], 0, i1074, 'm_SourceFontFile')
  i1074.m_AtlasPopulationMode = i1075[18]
  i1074.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1075[19], i1074.m_FaceInfo)
  var i1077 = i1075[20]
  var i1076 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.add(request.d('UnityEngine.TextCore.Glyph', i1077[i + 0]));
  }
  i1074.m_GlyphTable = i1076
  var i1079 = i1075[21]
  var i1078 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.add(request.d('TMPro.TMP_Character', i1079[i + 0]));
  }
  i1074.m_CharacterTable = i1078
  var i1081 = i1075[22]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 2, i1080, '')
  }
  i1074.m_AtlasTextures = i1080
  i1074.m_AtlasTextureIndex = i1075[23]
  i1074.m_IsMultiAtlasTexturesEnabled = !!i1075[24]
  i1074.m_ClearDynamicDataOnBuild = !!i1075[25]
  var i1083 = i1075[26]
  var i1082 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.add(request.d('UnityEngine.TextCore.GlyphRect', i1083[i + 0]));
  }
  i1074.m_UsedGlyphRects = i1082
  var i1085 = i1075[27]
  var i1084 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.add(request.d('UnityEngine.TextCore.GlyphRect', i1085[i + 0]));
  }
  i1074.m_FreeGlyphRects = i1084
  i1074.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1075[28], i1074.m_fontInfo)
  i1074.m_AtlasWidth = i1075[29]
  i1074.m_AtlasHeight = i1075[30]
  i1074.m_AtlasPadding = i1075[31]
  i1074.m_AtlasRenderMode = i1075[32]
  var i1087 = i1075[33]
  var i1086 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.add(request.d('TMPro.TMP_Glyph', i1087[i + 0]));
  }
  i1074.m_glyphInfoList = i1086
  i1074.m_KerningTable = request.d('TMPro.KerningTable', i1075[34], i1074.m_KerningTable)
  i1074.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1075[35], i1074.m_FontFeatureTable)
  var i1089 = i1075[36]
  var i1088 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1089.length; i += 2) {
  request.r(i1089[i + 0], i1089[i + 1], 1, i1088, '')
  }
  i1074.fallbackFontAssets = i1088
  var i1091 = i1075[37]
  var i1090 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1091.length; i += 2) {
  request.r(i1091[i + 0], i1091[i + 1], 1, i1090, '')
  }
  i1074.m_FallbackFontAssetTable = i1090
  i1074.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1075[38], i1074.m_CreationSettings)
  var i1093 = i1075[39]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('TMPro.TMP_FontWeightPair', i1093[i + 0]) );
  }
  i1074.m_FontWeightTable = i1092
  var i1095 = i1075[40]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('TMPro.TMP_FontWeightPair', i1095[i + 0]) );
  }
  i1074.fontWeights = i1094
  return i1074
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1097 = data
  i1096.m_FaceIndex = i1097[0]
  i1096.m_FamilyName = i1097[1]
  i1096.m_StyleName = i1097[2]
  i1096.m_PointSize = i1097[3]
  i1096.m_Scale = i1097[4]
  i1096.m_UnitsPerEM = i1097[5]
  i1096.m_LineHeight = i1097[6]
  i1096.m_AscentLine = i1097[7]
  i1096.m_CapLine = i1097[8]
  i1096.m_MeanLine = i1097[9]
  i1096.m_Baseline = i1097[10]
  i1096.m_DescentLine = i1097[11]
  i1096.m_SuperscriptOffset = i1097[12]
  i1096.m_SuperscriptSize = i1097[13]
  i1096.m_SubscriptOffset = i1097[14]
  i1096.m_SubscriptSize = i1097[15]
  i1096.m_UnderlineOffset = i1097[16]
  i1096.m_UnderlineThickness = i1097[17]
  i1096.m_StrikethroughOffset = i1097[18]
  i1096.m_StrikethroughThickness = i1097[19]
  i1096.m_TabWidth = i1097[20]
  return i1096
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1101 = data
  i1100.m_Index = i1101[0]
  i1100.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1101[1], i1100.m_Metrics)
  i1100.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1101[2], i1100.m_GlyphRect)
  i1100.m_Scale = i1101[3]
  i1100.m_AtlasIndex = i1101[4]
  i1100.m_ClassDefinitionType = i1101[5]
  return i1100
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1102 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1103 = data
  i1102.m_Width = i1103[0]
  i1102.m_Height = i1103[1]
  i1102.m_HorizontalBearingX = i1103[2]
  i1102.m_HorizontalBearingY = i1103[3]
  i1102.m_HorizontalAdvance = i1103[4]
  return i1102
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1105 = data
  i1104.m_X = i1105[0]
  i1104.m_Y = i1105[1]
  i1104.m_Width = i1105[2]
  i1104.m_Height = i1105[3]
  return i1104
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1108 = root || request.c( 'TMPro.TMP_Character' )
  var i1109 = data
  i1108.m_ElementType = i1109[0]
  i1108.m_Unicode = i1109[1]
  i1108.m_GlyphIndex = i1109[2]
  i1108.m_Scale = i1109[3]
  return i1108
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1114 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1115 = data
  i1114.Name = i1115[0]
  i1114.PointSize = i1115[1]
  i1114.Scale = i1115[2]
  i1114.CharacterCount = i1115[3]
  i1114.LineHeight = i1115[4]
  i1114.Baseline = i1115[5]
  i1114.Ascender = i1115[6]
  i1114.CapHeight = i1115[7]
  i1114.Descender = i1115[8]
  i1114.CenterLine = i1115[9]
  i1114.SuperscriptOffset = i1115[10]
  i1114.SubscriptOffset = i1115[11]
  i1114.SubSize = i1115[12]
  i1114.Underline = i1115[13]
  i1114.UnderlineThickness = i1115[14]
  i1114.strikethrough = i1115[15]
  i1114.strikethroughThickness = i1115[16]
  i1114.TabWidth = i1115[17]
  i1114.Padding = i1115[18]
  i1114.AtlasWidth = i1115[19]
  i1114.AtlasHeight = i1115[20]
  return i1114
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1119 = data
  i1118.id = i1119[0]
  i1118.x = i1119[1]
  i1118.y = i1119[2]
  i1118.width = i1119[3]
  i1118.height = i1119[4]
  i1118.xOffset = i1119[5]
  i1118.yOffset = i1119[6]
  i1118.xAdvance = i1119[7]
  i1118.scale = i1119[8]
  return i1118
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1120 = root || request.c( 'TMPro.KerningTable' )
  var i1121 = data
  var i1123 = i1121[0]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.add(request.d('TMPro.KerningPair', i1123[i + 0]));
  }
  i1120.kerningPairs = i1122
  return i1120
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1126 = root || request.c( 'TMPro.KerningPair' )
  var i1127 = data
  i1126.xOffset = i1127[0]
  i1126.m_FirstGlyph = i1127[1]
  i1126.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1127[2], i1126.m_FirstGlyphAdjustments)
  i1126.m_SecondGlyph = i1127[3]
  i1126.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1127[4], i1126.m_SecondGlyphAdjustments)
  i1126.m_IgnoreSpacingAdjustments = !!i1127[5]
  return i1126
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1128 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1129 = data
  var i1131 = i1129[0]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1131[i + 0]));
  }
  i1128.m_GlyphPairAdjustmentRecords = i1130
  return i1128
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1134 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1135 = data
  i1134.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1135[0], i1134.m_FirstAdjustmentRecord)
  i1134.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1135[1], i1134.m_SecondAdjustmentRecord)
  i1134.m_FeatureLookupFlags = i1135[2]
  return i1134
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1136 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1137 = data
  i1136.m_GlyphIndex = i1137[0]
  i1136.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1137[1], i1136.m_GlyphValueRecord)
  return i1136
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1138 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1139 = data
  i1138.m_XPlacement = i1139[0]
  i1138.m_YPlacement = i1139[1]
  i1138.m_XAdvance = i1139[2]
  i1138.m_YAdvance = i1139[3]
  return i1138
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1141 = data
  i1140.sourceFontFileName = i1141[0]
  i1140.sourceFontFileGUID = i1141[1]
  i1140.pointSizeSamplingMode = i1141[2]
  i1140.pointSize = i1141[3]
  i1140.padding = i1141[4]
  i1140.packingMode = i1141[5]
  i1140.atlasWidth = i1141[6]
  i1140.atlasHeight = i1141[7]
  i1140.characterSetSelectionMode = i1141[8]
  i1140.characterSequence = i1141[9]
  i1140.referencedFontAssetGUID = i1141[10]
  i1140.referencedTextAssetGUID = i1141[11]
  i1140.fontStyle = i1141[12]
  i1140.fontStyleModifier = i1141[13]
  i1140.renderMode = i1141[14]
  i1140.includeFontFeatures = !!i1141[15]
  return i1140
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1144 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1145 = data
  request.r(i1145[0], i1145[1], 0, i1144, 'regularTypeface')
  request.r(i1145[2], i1145[3], 0, i1144, 'italicTypeface')
  return i1144
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1146 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1147 = data
  i1146.hashCode = i1147[0]
  request.r(i1147[1], i1147[2], 0, i1146, 'material')
  i1146.materialHashCode = i1147[3]
  request.r(i1147[4], i1147[5], 0, i1146, 'spriteSheet')
  var i1149 = i1147[6]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(request.d('TMPro.TMP_Sprite', i1149[i + 0]));
  }
  i1146.spriteInfoList = i1148
  var i1151 = i1147[7]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1151.length; i += 2) {
  request.r(i1151[i + 0], i1151[i + 1], 1, i1150, '')
  }
  i1146.fallbackSpriteAssets = i1150
  i1146.m_Version = i1147[8]
  i1146.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1147[9], i1146.m_FaceInfo)
  var i1153 = i1147[10]
  var i1152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.add(request.d('TMPro.TMP_SpriteCharacter', i1153[i + 0]));
  }
  i1146.m_SpriteCharacterTable = i1152
  var i1155 = i1147[11]
  var i1154 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.add(request.d('TMPro.TMP_SpriteGlyph', i1155[i + 0]));
  }
  i1146.m_SpriteGlyphTable = i1154
  return i1146
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1158 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1159 = data
  i1158.name = i1159[0]
  i1158.hashCode = i1159[1]
  i1158.unicode = i1159[2]
  i1158.pivot = new pc.Vec2( i1159[3], i1159[4] )
  request.r(i1159[5], i1159[6], 0, i1158, 'sprite')
  i1158.id = i1159[7]
  i1158.x = i1159[8]
  i1158.y = i1159[9]
  i1158.width = i1159[10]
  i1158.height = i1159[11]
  i1158.xOffset = i1159[12]
  i1158.yOffset = i1159[13]
  i1158.xAdvance = i1159[14]
  i1158.scale = i1159[15]
  return i1158
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1164 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1165 = data
  i1164.m_Name = i1165[0]
  i1164.m_HashCode = i1165[1]
  i1164.m_ElementType = i1165[2]
  i1164.m_Unicode = i1165[3]
  i1164.m_GlyphIndex = i1165[4]
  i1164.m_Scale = i1165[5]
  return i1164
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1168 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1169 = data
  request.r(i1169[0], i1169[1], 0, i1168, 'sprite')
  i1168.m_Index = i1169[2]
  i1168.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1169[3], i1168.m_Metrics)
  i1168.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1169[4], i1168.m_GlyphRect)
  i1168.m_Scale = i1169[5]
  i1168.m_AtlasIndex = i1169[6]
  i1168.m_ClassDefinitionType = i1169[7]
  return i1168
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1170 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1171 = data
  var i1173 = i1171[0]
  var i1172 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.add(request.d('TMPro.TMP_Style', i1173[i + 0]));
  }
  i1170.m_StyleList = i1172
  return i1170
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1176 = root || request.c( 'TMPro.TMP_Style' )
  var i1177 = data
  i1176.m_Name = i1177[0]
  i1176.m_HashCode = i1177[1]
  i1176.m_OpeningDefinition = i1177[2]
  i1176.m_ClosingDefinition = i1177[3]
  i1176.m_OpeningTagArray = i1177[4]
  i1176.m_ClosingTagArray = i1177[5]
  i1176.m_OpeningTagUnicodeArray = i1177[6]
  i1176.m_ClosingTagUnicodeArray = i1177[7]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1179 = data
  var i1181 = i1179[0]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1181[i + 0]) );
  }
  i1178.files = i1180
  i1178.componentToPrefabIds = i1179[1]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1185 = data
  i1184.path = i1185[0]
  request.r(i1185[1], i1185[2], 0, i1184, 'unityObject')
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1187 = data
  var i1189 = i1187[0]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1189[i + 0]) );
  }
  i1186.scriptsExecutionOrder = i1188
  var i1191 = i1187[1]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1191[i + 0]) );
  }
  i1186.sortingLayers = i1190
  var i1193 = i1187[2]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1193[i + 0]) );
  }
  i1186.cullingLayers = i1192
  i1186.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1187[3], i1186.timeSettings)
  i1186.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1187[4], i1186.physicsSettings)
  i1186.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1187[5], i1186.physics2DSettings)
  i1186.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1187[6], i1186.qualitySettings)
  i1186.enableRealtimeShadows = !!i1187[7]
  i1186.enableAutoInstancing = !!i1187[8]
  i1186.enableDynamicBatching = !!i1187[9]
  i1186.lightmapEncodingQuality = i1187[10]
  i1186.desiredColorSpace = i1187[11]
  var i1195 = i1187[12]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( i1195[i + 0] );
  }
  i1186.allTags = i1194
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1199 = data
  i1198.name = i1199[0]
  i1198.value = i1199[1]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1203 = data
  i1202.id = i1203[0]
  i1202.name = i1203[1]
  i1202.value = i1203[2]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1207 = data
  i1206.id = i1207[0]
  i1206.name = i1207[1]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1209 = data
  i1208.fixedDeltaTime = i1209[0]
  i1208.maximumDeltaTime = i1209[1]
  i1208.timeScale = i1209[2]
  i1208.maximumParticleTimestep = i1209[3]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1211 = data
  i1210.gravity = new pc.Vec3( i1211[0], i1211[1], i1211[2] )
  i1210.defaultSolverIterations = i1211[3]
  i1210.bounceThreshold = i1211[4]
  i1210.autoSyncTransforms = !!i1211[5]
  i1210.autoSimulation = !!i1211[6]
  var i1213 = i1211[7]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1213[i + 0]) );
  }
  i1210.collisionMatrix = i1212
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1217 = data
  i1216.enabled = !!i1217[0]
  i1216.layerId = i1217[1]
  i1216.otherLayerId = i1217[2]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1219 = data
  request.r(i1219[0], i1219[1], 0, i1218, 'material')
  i1218.gravity = new pc.Vec2( i1219[2], i1219[3] )
  i1218.positionIterations = i1219[4]
  i1218.velocityIterations = i1219[5]
  i1218.velocityThreshold = i1219[6]
  i1218.maxLinearCorrection = i1219[7]
  i1218.maxAngularCorrection = i1219[8]
  i1218.maxTranslationSpeed = i1219[9]
  i1218.maxRotationSpeed = i1219[10]
  i1218.baumgarteScale = i1219[11]
  i1218.baumgarteTOIScale = i1219[12]
  i1218.timeToSleep = i1219[13]
  i1218.linearSleepTolerance = i1219[14]
  i1218.angularSleepTolerance = i1219[15]
  i1218.defaultContactOffset = i1219[16]
  i1218.autoSimulation = !!i1219[17]
  i1218.queriesHitTriggers = !!i1219[18]
  i1218.queriesStartInColliders = !!i1219[19]
  i1218.callbacksOnDisable = !!i1219[20]
  i1218.reuseCollisionCallbacks = !!i1219[21]
  i1218.autoSyncTransforms = !!i1219[22]
  var i1221 = i1219[23]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1221[i + 0]) );
  }
  i1218.collisionMatrix = i1220
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1225 = data
  i1224.enabled = !!i1225[0]
  i1224.layerId = i1225[1]
  i1224.otherLayerId = i1225[2]
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1227 = data
  var i1229 = i1227[0]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1229[i + 0]) );
  }
  i1226.qualityLevels = i1228
  var i1231 = i1227[1]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( i1231[i + 0] );
  }
  i1226.names = i1230
  i1226.shadows = i1227[2]
  i1226.anisotropicFiltering = i1227[3]
  i1226.antiAliasing = i1227[4]
  i1226.lodBias = i1227[5]
  i1226.shadowCascades = i1227[6]
  i1226.shadowDistance = i1227[7]
  i1226.shadowmaskMode = i1227[8]
  i1226.shadowProjection = i1227[9]
  i1226.shadowResolution = i1227[10]
  i1226.softParticles = !!i1227[11]
  i1226.softVegetation = !!i1227[12]
  i1226.activeColorSpace = i1227[13]
  i1226.desiredColorSpace = i1227[14]
  i1226.masterTextureLimit = i1227[15]
  i1226.maxQueuedFrames = i1227[16]
  i1226.particleRaycastBudget = i1227[17]
  i1226.pixelLightCount = i1227[18]
  i1226.realtimeReflectionProbes = !!i1227[19]
  i1226.shadowCascade2Split = i1227[20]
  i1226.shadowCascade4Split = new pc.Vec3( i1227[21], i1227[22], i1227[23] )
  i1226.streamingMipmapsActive = !!i1227[24]
  i1226.vSyncCount = i1227[25]
  i1226.asyncUploadBufferSize = i1227[26]
  i1226.asyncUploadTimeSlice = i1227[27]
  i1226.billboardsFaceCameraPosition = !!i1227[28]
  i1226.shadowNearPlaneOffset = i1227[29]
  i1226.streamingMipmapsMemoryBudget = i1227[30]
  i1226.maximumLODLevel = i1227[31]
  i1226.streamingMipmapsAddAllCameras = !!i1227[32]
  i1226.streamingMipmapsMaxLevelReduction = i1227[33]
  i1226.streamingMipmapsRenderersPerFrame = i1227[34]
  i1226.resolutionScalingFixedDPIFactor = i1227[35]
  i1226.streamingMipmapsMaxFileIORequests = i1227[36]
  i1226.currentQualityLevel = i1227[37]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1237 = data
  i1236.weight = i1237[0]
  i1236.vertices = i1237[1]
  i1236.normals = i1237[2]
  i1236.tangents = i1237[3]
  return i1236
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1238 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1239 = data
  i1238.xPlacement = i1239[0]
  i1238.yPlacement = i1239[1]
  i1238.xAdvance = i1239[2]
  i1238.yAdvance = i1239[3]
  return i1238
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[62],"63":[30],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[73],"81":[73],"82":[73],"83":[73],"84":[73],"85":[73],"86":[30],"87":[14],"88":[89],"90":[89],"37":[19],"91":[92],"93":[94],"95":[96],"97":[9],"98":[19],"99":[100],"92":[19],"101":[19],"39":[37],"23":[21,19],"102":[19],"38":[37],"103":[19],"104":[19],"105":[19],"106":[19],"107":[19],"108":[19],"109":[19],"110":[19],"111":[19],"112":[21,19],"113":[19],"114":[19],"115":[19],"116":[19],"94":[21,19],"117":[19],"118":[43],"119":[43],"44":[43],"120":[43],"121":[30],"122":[30],"123":[100],"124":[19],"125":[14,19],"96":[19,21],"126":[19],"127":[21,19],"128":[14],"129":[21,19],"130":[19],"131":[100],"132":[30],"133":[134]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","PlayableAdsTool.GameManager","GameStateManager","_InGame.Scripts.DrawContollers.DrawingController","_InGame.Scripts.DrawContollers.DrawPointBase","UnityEngine.LineRenderer","UnityEngine.Material","_InGame.Scripts.DrawContollers.DrawPointGenerator","PathCreation.PathCreator","PathCreation.Examples.RoadMeshCreator","UnityEngine.GameObject","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Shader","PlayableAdsTool.ResponsiveManager","UnityEngine.RectTransform","PlayableAdsTool.EndCardController","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.UI.Button","PlayableAdsTool.AudioManager","UnityEngine.AudioSource","PlayableAdsTool.AudioSourceContainer","_InGame.Scripts.Managers.DrawingManager","PlayableAdsTool.CameraManager","UnityEngine.Camera","UnityEngine.AudioListener","Cinemachine.CinemachineBrain","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","_InGame.Scripts.Utilities.PrefabHolder","PlayableAdsTool.ObjectPoolManager","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","PlayableAdsTool.LocalizedDropdown","UnityEngine.UI.Dropdown","PlayableAdsTool.LocalizedText","UnityEngine.UI.Text","PlayableAdsTool.LocalizedTextTMP","TMPro.TextMeshProUGUI","PathCreation.Examples.GeneratePathExample","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.48f1";

Deserializers.productName = "Matchingham-Playable-Case-Project";

Deserializers.lunaInitializationTime = "02/22/2025 14:51:50";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "19089";

Deserializers.projectId = "b99fa617aceb619408779569c24a6422";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.10.3\ncom.unity.nuget.newtonsoft-json: 3.2.1\ncom.unity.shadergraph: 14.0.11\ncom.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Matchingham-Playable-Case-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "5340b499-7d30-4209-a0a6-8f503ca2954e";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Sirenix","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","UnitySerializationInitializer","InitializeRuntime"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

