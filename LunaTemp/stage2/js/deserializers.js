var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5292 = root || request.c( 'UnityEngine.JointSpring' )
  var i5293 = data
  i5292.spring = i5293[0]
  i5292.damper = i5293[1]
  i5292.targetPosition = i5293[2]
  return i5292
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5294 = root || request.c( 'UnityEngine.JointMotor' )
  var i5295 = data
  i5294.m_TargetVelocity = i5295[0]
  i5294.m_Force = i5295[1]
  i5294.m_FreeSpin = i5295[2]
  return i5294
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5296 = root || request.c( 'UnityEngine.JointLimits' )
  var i5297 = data
  i5296.m_Min = i5297[0]
  i5296.m_Max = i5297[1]
  i5296.m_Bounciness = i5297[2]
  i5296.m_BounceMinVelocity = i5297[3]
  i5296.m_ContactDistance = i5297[4]
  i5296.minBounce = i5297[5]
  i5296.maxBounce = i5297[6]
  return i5296
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5298 = root || request.c( 'UnityEngine.JointDrive' )
  var i5299 = data
  i5298.m_PositionSpring = i5299[0]
  i5298.m_PositionDamper = i5299[1]
  i5298.m_MaximumForce = i5299[2]
  i5298.m_UseAcceleration = i5299[3]
  return i5298
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5300 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5301 = data
  i5300.m_Spring = i5301[0]
  i5300.m_Damper = i5301[1]
  return i5300
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5302 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5303 = data
  i5302.m_Limit = i5303[0]
  i5302.m_Bounciness = i5303[1]
  i5302.m_ContactDistance = i5303[2]
  return i5302
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5304 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5305 = data
  i5304.m_ExtremumSlip = i5305[0]
  i5304.m_ExtremumValue = i5305[1]
  i5304.m_AsymptoteSlip = i5305[2]
  i5304.m_AsymptoteValue = i5305[3]
  i5304.m_Stiffness = i5305[4]
  return i5304
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5306 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5307 = data
  i5306.m_LowerAngle = i5307[0]
  i5306.m_UpperAngle = i5307[1]
  return i5306
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5308 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5309 = data
  i5308.m_MotorSpeed = i5309[0]
  i5308.m_MaximumMotorTorque = i5309[1]
  return i5308
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5310 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5311 = data
  i5310.m_DampingRatio = i5311[0]
  i5310.m_Frequency = i5311[1]
  i5310.m_Angle = i5311[2]
  return i5310
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5312 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5313 = data
  i5312.m_LowerTranslation = i5313[0]
  i5312.m_UpperTranslation = i5313[1]
  return i5312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5315 = data
  i5314.position = new pc.Vec3( i5315[0], i5315[1], i5315[2] )
  i5314.scale = new pc.Vec3( i5315[3], i5315[4], i5315[5] )
  i5314.rotation = new pc.Quat(i5315[6], i5315[7], i5315[8], i5315[9])
  return i5314
}

Deserializers["_InGame.Scripts.Managers.GameManager"] = function (request, data, root) {
  var i5316 = root || request.c( '_InGame.Scripts.Managers.GameManager' )
  var i5317 = data
  return i5316
}

Deserializers["GameStateManager"] = function (request, data, root) {
  var i5318 = root || request.c( 'GameStateManager' )
  var i5319 = data
  i5318.currentStateType = i5319[0]
  return i5318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5321 = data
  i5320.name = i5321[0]
  i5320.tagId = i5321[1]
  i5320.enabled = !!i5321[2]
  i5320.isStatic = !!i5321[3]
  i5320.layer = i5321[4]
  return i5320
}

Deserializers["_InGame.Scripts.Managers.DrawingManager"] = function (request, data, root) {
  var i5322 = root || request.c( '_InGame.Scripts.Managers.DrawingManager' )
  var i5323 = data
  i5322.CurrentDrawingData = request.d('_InGame.Scripts.Managers.DrawingData', i5323[0], i5322.CurrentDrawingData)
  var i5325 = i5323[1]
  var i5324 = new (System.Collections.Generic.List$1(Bridge.ns('_InGame.Scripts.Managers.DrawingData')))
  for(var i = 0; i < i5325.length; i += 1) {
    i5324.add(request.d('_InGame.Scripts.Managers.DrawingData', i5325[i + 0]));
  }
  i5322.LevelDrawingList = i5324
  return i5322
}

Deserializers["_InGame.Scripts.Managers.DrawingData"] = function (request, data, root) {
  var i5326 = root || request.c( '_InGame.Scripts.Managers.DrawingData' )
  var i5327 = data
  i5326.type = i5327[0]
  request.r(i5327[1], i5327[2], 0, i5326, 'Object')
  return i5326
}

Deserializers["_InGame.Scripts.DrawContollers.DrawingController"] = function (request, data, root) {
  var i5330 = root || request.c( '_InGame.Scripts.DrawContollers.DrawingController' )
  var i5331 = data
  var i5333 = i5331[0]
  var i5332 = new (System.Collections.Generic.List$1(Bridge.ns('_InGame.Scripts.DrawContollers.DrawPointBase')))
  for(var i = 0; i < i5333.length; i += 2) {
  request.r(i5333[i + 0], i5333[i + 1], 1, i5332, '')
  }
  i5330.AllDrawPoints = i5332
  var i5335 = i5331[1]
  var i5334 = new (System.Collections.Generic.List$1(Bridge.ns('_InGame.Scripts.DrawContollers.DrawPointBase')))
  for(var i = 0; i < i5335.length; i += 2) {
  request.r(i5335[i + 0], i5335[i + 1], 1, i5334, '')
  }
  i5330.SelectedDrawPoints = i5334
  request.r(i5331[2], i5331[3], 0, i5330, '_lineRenderer')
  return i5330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i5338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i5339 = data
  i5338.textureMode = i5339[0]
  i5338.alignment = i5339[1]
  i5338.widthCurve = new pc.AnimationCurve( { keys_flow: i5339[2] } )
  i5338.colorGradient = i5339[3] ? new pc.ColorGradient(i5339[3][0], i5339[3][1], i5339[3][2]) : null
  var i5341 = i5339[4]
  var i5340 = []
  for(var i = 0; i < i5341.length; i += 3) {
    i5340.push( new pc.Vec3( i5341[i + 0], i5341[i + 1], i5341[i + 2] ) );
  }
  i5338.positions = i5340
  i5338.positionCount = i5339[5]
  i5338.widthMultiplier = i5339[6]
  i5338.startWidth = i5339[7]
  i5338.endWidth = i5339[8]
  i5338.numCornerVertices = i5339[9]
  i5338.numCapVertices = i5339[10]
  i5338.useWorldSpace = !!i5339[11]
  i5338.loop = !!i5339[12]
  i5338.startColor = new pc.Color(i5339[13], i5339[14], i5339[15], i5339[16])
  i5338.endColor = new pc.Color(i5339[17], i5339[18], i5339[19], i5339[20])
  i5338.generateLightingData = !!i5339[21]
  i5338.enabled = !!i5339[22]
  request.r(i5339[23], i5339[24], 0, i5338, 'sharedMaterial')
  var i5343 = i5339[25]
  var i5342 = []
  for(var i = 0; i < i5343.length; i += 2) {
  request.r(i5343[i + 0], i5343[i + 1], 2, i5342, '')
  }
  i5338.sharedMaterials = i5342
  i5338.receiveShadows = !!i5339[26]
  i5338.shadowCastingMode = i5339[27]
  i5338.sortingLayerID = i5339[28]
  i5338.sortingOrder = i5339[29]
  i5338.lightmapIndex = i5339[30]
  i5338.lightmapSceneIndex = i5339[31]
  i5338.lightmapScaleOffset = new pc.Vec4( i5339[32], i5339[33], i5339[34], i5339[35] )
  i5338.lightProbeUsage = i5339[36]
  i5338.reflectionProbeUsage = i5339[37]
  return i5338
}

Deserializers["_InGame.Scripts.DrawContollers.DrawPointGenerator"] = function (request, data, root) {
  var i5348 = root || request.c( '_InGame.Scripts.DrawContollers.DrawPointGenerator' )
  var i5349 = data
  request.r(i5349[0], i5349[1], 0, i5348, '_drawingController')
  request.r(i5349[2], i5349[3], 0, i5348, '_pathCreator')
  i5348.HowManyPoints = i5349[4]
  var i5351 = i5349[5]
  var i5350 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i5351.length; i += 3) {
    i5350.add(new pc.Vec3( i5351[i + 0], i5351[i + 1], i5351[i + 2] ));
  }
  i5348.GizmoPoints = i5350
  return i5348
}

Deserializers["_InGame.Scripts.DrawContollers.DrawPointBase"] = function (request, data, root) {
  var i5354 = root || request.c( '_InGame.Scripts.DrawContollers.DrawPointBase' )
  var i5355 = data
  i5354._drawPointType = i5355[0]
  i5354.MaxConnectionCount = i5355[1]
  i5354.PointConnectionCount = i5355[2]
  var i5357 = i5355[3]
  var i5356 = new (System.Collections.Generic.List$1(Bridge.ns('_InGame.Scripts.DrawContollers.DrawPointBase')))
  for(var i = 0; i < i5357.length; i += 2) {
  request.r(i5357[i + 0], i5357[i + 1], 1, i5356, '')
  }
  i5354.BorderDrawPoints = i5356
  return i5354
}

Deserializers["PathCreation.PathCreator"] = function (request, data, root) {
  var i5358 = root || request.c( 'PathCreation.PathCreator' )
  var i5359 = data
  i5358.editorData = request.d('PathCreation.PathCreatorData', i5359[0], i5358.editorData)
  i5358.initialized = !!i5359[1]
  return i5358
}

Deserializers["PathCreation.PathCreatorData"] = function (request, data, root) {
  var i5360 = root || request.c( 'PathCreation.PathCreatorData' )
  var i5361 = data
  i5360.vertexPathMaxAngleError = i5361[0]
  i5360.vertexPathMinVertexSpacing = i5361[1]
  i5360.showTransformTool = !!i5361[2]
  i5360.showPathBounds = !!i5361[3]
  i5360.showPerSegmentBounds = !!i5361[4]
  i5360.displayAnchorPoints = !!i5361[5]
  i5360.displayControlPoints = !!i5361[6]
  i5360.bezierHandleScale = i5361[7]
  i5360.globalDisplaySettingsFoldout = !!i5361[8]
  i5360.keepConstantHandleSize = !!i5361[9]
  i5360.showNormalsInVertexMode = !!i5361[10]
  i5360.showBezierPathInVertexMode = !!i5361[11]
  i5360.showDisplayOptions = !!i5361[12]
  i5360.showPathOptions = !!i5361[13]
  i5360.showVertexPathDisplayOptions = !!i5361[14]
  i5360.showVertexPathOptions = !!i5361[15]
  i5360.showNormals = !!i5361[16]
  i5360.showNormalsHelpInfo = !!i5361[17]
  i5360.tabIndex = i5361[18]
  i5360._bezierPath = request.d('PathCreation.BezierPath', i5361[19], i5360._bezierPath)
  i5360.vertexPathUpToDate = !!i5361[20]
  return i5360
}

Deserializers["PathCreation.BezierPath"] = function (request, data, root) {
  var i5362 = root || request.c( 'PathCreation.BezierPath' )
  var i5363 = data
  var i5365 = i5363[0]
  var i5364 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i5365.length; i += 3) {
    i5364.add(new pc.Vec3( i5365[i + 0], i5365[i + 1], i5365[i + 2] ));
  }
  i5362.points = i5364
  i5362.isClosed = !!i5363[1]
  i5362.space = i5363[2]
  i5362.controlMode = i5363[3]
  i5362.autoControlLength = i5363[4]
  i5362.boundsUpToDate = !!i5363[5]
  var i5367 = i5363[6]
  var i5366 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i5367.length; i += 1) {
    i5366.add(i5367[i + 0]);
  }
  i5362.perAnchorNormalsAngle = i5366
  i5362.globalNormalsAngle = i5363[7]
  i5362.flipNormals = !!i5363[8]
  return i5362
}

Deserializers["PathCreation.Examples.RoadMeshCreator"] = function (request, data, root) {
  var i5370 = root || request.c( 'PathCreation.Examples.RoadMeshCreator' )
  var i5371 = data
  request.r(i5371[0], i5371[1], 0, i5370, 'pathCreator')
  i5370.autoUpdate = !!i5371[2]
  i5370.roadWidth = i5371[3]
  i5370.thickness = i5371[4]
  i5370.flattenSurface = !!i5371[5]
  request.r(i5371[6], i5371[7], 0, i5370, 'roadMaterial')
  request.r(i5371[8], i5371[9], 0, i5370, 'undersideMaterial')
  i5370.textureTiling = i5371[10]
  request.r(i5371[11], i5371[12], 0, i5370, 'meshHolder')
  return i5370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5373 = data
  request.r(i5373[0], i5373[1], 0, i5372, 'sharedMesh')
  return i5372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5375 = data
  request.r(i5375[0], i5375[1], 0, i5374, 'additionalVertexStreams')
  i5374.enabled = !!i5375[2]
  request.r(i5375[3], i5375[4], 0, i5374, 'sharedMaterial')
  var i5377 = i5375[5]
  var i5376 = []
  for(var i = 0; i < i5377.length; i += 2) {
  request.r(i5377[i + 0], i5377[i + 1], 2, i5376, '')
  }
  i5374.sharedMaterials = i5376
  i5374.receiveShadows = !!i5375[6]
  i5374.shadowCastingMode = i5375[7]
  i5374.sortingLayerID = i5375[8]
  i5374.sortingOrder = i5375[9]
  i5374.lightmapIndex = i5375[10]
  i5374.lightmapSceneIndex = i5375[11]
  i5374.lightmapScaleOffset = new pc.Vec4( i5375[12], i5375[13], i5375[14], i5375[15] )
  i5374.lightProbeUsage = i5375[16]
  i5374.reflectionProbeUsage = i5375[17]
  return i5374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5379 = data
  i5378.enabled = !!i5379[0]
  request.r(i5379[1], i5379[2], 0, i5378, 'sharedMaterial')
  var i5381 = i5379[3]
  var i5380 = []
  for(var i = 0; i < i5381.length; i += 2) {
  request.r(i5381[i + 0], i5381[i + 1], 2, i5380, '')
  }
  i5378.sharedMaterials = i5380
  i5378.receiveShadows = !!i5379[4]
  i5378.shadowCastingMode = i5379[5]
  i5378.sortingLayerID = i5379[6]
  i5378.sortingOrder = i5379[7]
  i5378.lightmapIndex = i5379[8]
  i5378.lightmapSceneIndex = i5379[9]
  i5378.lightmapScaleOffset = new pc.Vec4( i5379[10], i5379[11], i5379[12], i5379[13] )
  i5378.lightProbeUsage = i5379[14]
  i5378.reflectionProbeUsage = i5379[15]
  i5378.color = new pc.Color(i5379[16], i5379[17], i5379[18], i5379[19])
  request.r(i5379[20], i5379[21], 0, i5378, 'sprite')
  i5378.flipX = !!i5379[22]
  i5378.flipY = !!i5379[23]
  i5378.drawMode = i5379[24]
  i5378.size = new pc.Vec2( i5379[25], i5379[26] )
  i5378.tileMode = i5379[27]
  i5378.adaptiveModeThreshold = i5379[28]
  i5378.maskInteraction = i5379[29]
  i5378.spriteSortPoint = i5379[30]
  return i5378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5382 = root || new pc.UnityMaterial()
  var i5383 = data
  i5382.name = i5383[0]
  request.r(i5383[1], i5383[2], 0, i5382, 'shader')
  i5382.renderQueue = i5383[3]
  i5382.enableInstancing = !!i5383[4]
  var i5385 = i5383[5]
  var i5384 = []
  for(var i = 0; i < i5385.length; i += 1) {
    i5384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5385[i + 0]) );
  }
  i5382.floatParameters = i5384
  var i5387 = i5383[6]
  var i5386 = []
  for(var i = 0; i < i5387.length; i += 1) {
    i5386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5387[i + 0]) );
  }
  i5382.colorParameters = i5386
  var i5389 = i5383[7]
  var i5388 = []
  for(var i = 0; i < i5389.length; i += 1) {
    i5388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5389[i + 0]) );
  }
  i5382.vectorParameters = i5388
  var i5391 = i5383[8]
  var i5390 = []
  for(var i = 0; i < i5391.length; i += 1) {
    i5390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5391[i + 0]) );
  }
  i5382.textureParameters = i5390
  var i5393 = i5383[9]
  var i5392 = []
  for(var i = 0; i < i5393.length; i += 1) {
    i5392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5393[i + 0]) );
  }
  i5382.materialFlags = i5392
  return i5382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5397 = data
  i5396.name = i5397[0]
  i5396.value = i5397[1]
  return i5396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5401 = data
  i5400.name = i5401[0]
  i5400.value = new pc.Color(i5401[1], i5401[2], i5401[3], i5401[4])
  return i5400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5405 = data
  i5404.name = i5405[0]
  i5404.value = new pc.Vec4( i5405[1], i5405[2], i5405[3], i5405[4] )
  return i5404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5409 = data
  i5408.name = i5409[0]
  request.r(i5409[1], i5409[2], 0, i5408, 'value')
  return i5408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5413 = data
  i5412.name = i5413[0]
  i5412.enabled = !!i5413[1]
  return i5412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5415 = data
  i5414.name = i5415[0]
  i5414.width = i5415[1]
  i5414.height = i5415[2]
  i5414.mipmapCount = i5415[3]
  i5414.anisoLevel = i5415[4]
  i5414.filterMode = i5415[5]
  i5414.hdr = !!i5415[6]
  i5414.format = i5415[7]
  i5414.wrapMode = i5415[8]
  i5414.alphaIsTransparency = !!i5415[9]
  i5414.alphaSource = i5415[10]
  i5414.graphicsFormat = i5415[11]
  i5414.sRGBTexture = !!i5415[12]
  i5414.desiredColorSpace = i5415[13]
  i5414.wrapU = i5415[14]
  i5414.wrapV = i5415[15]
  return i5414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5417 = data
  i5416.name = i5417[0]
  i5416.halfPrecision = !!i5417[1]
  i5416.useUInt32IndexFormat = !!i5417[2]
  i5416.vertexCount = i5417[3]
  i5416.aabb = i5417[4]
  var i5419 = i5417[5]
  var i5418 = []
  for(var i = 0; i < i5419.length; i += 1) {
    i5418.push( !!i5419[i + 0] );
  }
  i5416.streams = i5418
  i5416.vertices = i5417[6]
  var i5421 = i5417[7]
  var i5420 = []
  for(var i = 0; i < i5421.length; i += 1) {
    i5420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5421[i + 0]) );
  }
  i5416.subMeshes = i5420
  var i5423 = i5417[8]
  var i5422 = []
  for(var i = 0; i < i5423.length; i += 16) {
    i5422.push( new pc.Mat4().setData(i5423[i + 0], i5423[i + 1], i5423[i + 2], i5423[i + 3],  i5423[i + 4], i5423[i + 5], i5423[i + 6], i5423[i + 7],  i5423[i + 8], i5423[i + 9], i5423[i + 10], i5423[i + 11],  i5423[i + 12], i5423[i + 13], i5423[i + 14], i5423[i + 15]) );
  }
  i5416.bindposes = i5422
  var i5425 = i5417[9]
  var i5424 = []
  for(var i = 0; i < i5425.length; i += 1) {
    i5424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5425[i + 0]) );
  }
  i5416.blendShapes = i5424
  return i5416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5431 = data
  i5430.triangles = i5431[0]
  return i5430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5437 = data
  i5436.name = i5437[0]
  var i5439 = i5437[1]
  var i5438 = []
  for(var i = 0; i < i5439.length; i += 1) {
    i5438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5439[i + 0]) );
  }
  i5436.frames = i5438
  return i5436
}

Deserializers["PlayableAdsTool.CameraManager"] = function (request, data, root) {
  var i5440 = root || request.c( 'PlayableAdsTool.CameraManager' )
  var i5441 = data
  i5440.CurrentCamState = i5441[0]
  var i5443 = i5441[1]
  var i5442 = []
  for(var i = 0; i < i5443.length; i += 2) {
  request.r(i5443[i + 0], i5443[i + 1], 2, i5442, '')
  }
  i5440._verticalCam_9_20 = i5442
  var i5445 = i5441[2]
  var i5444 = []
  for(var i = 0; i < i5445.length; i += 2) {
  request.r(i5445[i + 0], i5445[i + 1], 2, i5444, '')
  }
  i5440._verticalCam_9_16 = i5444
  var i5447 = i5441[3]
  var i5446 = []
  for(var i = 0; i < i5447.length; i += 2) {
  request.r(i5447[i + 0], i5447[i + 1], 2, i5446, '')
  }
  i5440._verticalCam_3_4 = i5446
  var i5449 = i5441[4]
  var i5448 = []
  for(var i = 0; i < i5449.length; i += 2) {
  request.r(i5449[i + 0], i5449[i + 1], 2, i5448, '')
  }
  i5440._horizontalCam_20_9 = i5448
  var i5451 = i5441[5]
  var i5450 = []
  for(var i = 0; i < i5451.length; i += 2) {
  request.r(i5451[i + 0], i5451[i + 1], 2, i5450, '')
  }
  i5440._horizontalCam_16_9 = i5450
  var i5453 = i5441[6]
  var i5452 = []
  for(var i = 0; i < i5453.length; i += 2) {
  request.r(i5453[i + 0], i5453[i + 1], 2, i5452, '')
  }
  i5440._horizontalCam_4_3 = i5452
  return i5440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5457 = data
  i5456.enabled = !!i5457[0]
  i5456.aspect = i5457[1]
  i5456.orthographic = !!i5457[2]
  i5456.orthographicSize = i5457[3]
  i5456.backgroundColor = new pc.Color(i5457[4], i5457[5], i5457[6], i5457[7])
  i5456.nearClipPlane = i5457[8]
  i5456.farClipPlane = i5457[9]
  i5456.fieldOfView = i5457[10]
  i5456.depth = i5457[11]
  i5456.clearFlags = i5457[12]
  i5456.cullingMask = i5457[13]
  i5456.rect = i5457[14]
  request.r(i5457[15], i5457[16], 0, i5456, 'targetTexture')
  i5456.usePhysicalProperties = !!i5457[17]
  i5456.focalLength = i5457[18]
  i5456.sensorSize = new pc.Vec2( i5457[19], i5457[20] )
  i5456.lensShift = new pc.Vec2( i5457[21], i5457[22] )
  i5456.gateFit = i5457[23]
  i5456.commandBufferCount = i5457[24]
  i5456.cameraType = i5457[25]
  return i5456
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i5458 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i5459 = data
  i5458.m_ShowDebugText = !!i5459[0]
  i5458.m_ShowCameraFrustum = !!i5459[1]
  i5458.m_IgnoreTimeScale = !!i5459[2]
  request.r(i5459[3], i5459[4], 0, i5458, 'm_WorldUpOverride')
  i5458.m_UpdateMethod = i5459[5]
  i5458.m_BlendUpdateMethod = i5459[6]
  i5458.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i5459[7], i5458.m_DefaultBlend)
  request.r(i5459[8], i5459[9], 0, i5458, 'm_CustomBlends')
  i5458.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i5459[10], i5458.m_CameraCutEvent)
  i5458.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i5459[11], i5458.m_CameraActivatedEvent)
  return i5458
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i5460 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i5461 = data
  i5460.m_Style = i5461[0]
  i5460.m_Time = i5461[1]
  i5460.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i5461[2] } )
  return i5460
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i5462 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i5463 = data
  i5462.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5463[0], i5462.m_PersistentCalls)
  return i5462
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5464 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5465 = data
  var i5467 = i5465[0]
  var i5466 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5467.length; i += 1) {
    i5466.add(request.d('UnityEngine.Events.PersistentCall', i5467[i + 0]));
  }
  i5464.m_Calls = i5466
  return i5464
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5470 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5471 = data
  request.r(i5471[0], i5471[1], 0, i5470, 'm_Target')
  i5470.m_TargetAssemblyTypeName = i5471[2]
  i5470.m_MethodName = i5471[3]
  i5470.m_Mode = i5471[4]
  i5470.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5471[5], i5470.m_Arguments)
  i5470.m_CallState = i5471[6]
  return i5470
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i5472 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i5473 = data
  i5472.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5473[0], i5472.m_PersistentCalls)
  return i5472
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i5474 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i5475 = data
  request.r(i5475[0], i5475[1], 0, i5474, 'm_LookAt')
  request.r(i5475[2], i5475[3], 0, i5474, 'm_Follow')
  i5474.m_Lens = request.d('Cinemachine.LensSettings', i5475[4], i5474.m_Lens)
  i5474.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i5475[5], i5474.m_Transitions)
  var i5477 = i5475[6]
  var i5476 = []
  for(var i = 0; i < i5477.length; i += 1) {
    i5476.push( i5477[i + 0] );
  }
  i5474.m_ExcludedPropertiesInInspector = i5476
  var i5479 = i5475[7]
  var i5478 = []
  for(var i = 0; i < i5479.length; i += 1) {
    i5478.push( i5479[i + 0] );
  }
  i5474.m_LockStageInInspector = i5478
  i5474.m_Priority = i5475[8]
  i5474.m_StandbyUpdate = i5475[9]
  i5474.m_LegacyBlendHint = i5475[10]
  request.r(i5475[11], i5475[12], 0, i5474, 'm_ComponentOwner')
  i5474.m_StreamingVersion = i5475[13]
  return i5474
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i5480 = root || request.c( 'Cinemachine.LensSettings' )
  var i5481 = data
  i5480.FieldOfView = i5481[0]
  i5480.OrthographicSize = i5481[1]
  i5480.NearClipPlane = i5481[2]
  i5480.FarClipPlane = i5481[3]
  i5480.Dutch = i5481[4]
  i5480.ModeOverride = i5481[5]
  i5480.LensShift = new pc.Vec2( i5481[6], i5481[7] )
  i5480.GateFit = i5481[8]
  i5480.FocusDistance = i5481[9]
  i5480.m_SensorSize = new pc.Vec2( i5481[10], i5481[11] )
  return i5480
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i5482 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i5483 = data
  i5482.m_BlendHint = i5483[0]
  i5482.m_InheritPosition = !!i5483[1]
  i5482.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i5483[2], i5482.m_OnCameraLive)
  return i5482
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i5488 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i5489 = data
  return i5488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5491 = data
  i5490.pivot = new pc.Vec2( i5491[0], i5491[1] )
  i5490.anchorMin = new pc.Vec2( i5491[2], i5491[3] )
  i5490.anchorMax = new pc.Vec2( i5491[4], i5491[5] )
  i5490.sizeDelta = new pc.Vec2( i5491[6], i5491[7] )
  i5490.anchoredPosition3D = new pc.Vec3( i5491[8], i5491[9], i5491[10] )
  i5490.rotation = new pc.Quat(i5491[11], i5491[12], i5491[13], i5491[14])
  i5490.scale = new pc.Vec3( i5491[15], i5491[16], i5491[17] )
  return i5490
}

Deserializers["_InGame.Scripts.Managers.TutorialManager"] = function (request, data, root) {
  var i5492 = root || request.c( '_InGame.Scripts.Managers.TutorialManager' )
  var i5493 = data
  var i5495 = i5493[0]
  var i5494 = new (System.Collections.Generic.List$1(Bridge.ns('_InGame.Scripts.Managers.TutorialVariables')))
  for(var i = 0; i < i5495.length; i += 1) {
    i5494.add(request.d('_InGame.Scripts.Managers.TutorialVariables', i5495[i + 0]));
  }
  i5492.Tutorials = i5494
  return i5492
}

Deserializers["_InGame.Scripts.Managers.TutorialVariables"] = function (request, data, root) {
  var i5498 = root || request.c( '_InGame.Scripts.Managers.TutorialVariables' )
  var i5499 = data
  i5498._Type = i5499[0]
  request.r(i5499[1], i5499[2], 0, i5498, 'Object')
  return i5498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5501 = data
  request.r(i5501[0], i5501[1], 0, i5500, 'animatorController')
  request.r(i5501[2], i5501[3], 0, i5500, 'avatar')
  i5500.updateMode = i5501[4]
  i5500.hasTransformHierarchy = !!i5501[5]
  i5500.applyRootMotion = !!i5501[6]
  var i5503 = i5501[7]
  var i5502 = []
  for(var i = 0; i < i5503.length; i += 2) {
  request.r(i5503[i + 0], i5503[i + 1], 2, i5502, '')
  }
  i5500.humanBones = i5502
  i5500.enabled = !!i5501[8]
  return i5500
}

Deserializers["TutorialAnimationHelper"] = function (request, data, root) {
  var i5506 = root || request.c( 'TutorialAnimationHelper' )
  var i5507 = data
  request.r(i5507[0], i5507[1], 0, i5506, '_lineRenderer')
  var i5509 = i5507[2]
  var i5508 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5509.length; i += 2) {
  request.r(i5509[i + 0], i5509[i + 1], 1, i5508, '')
  }
  i5506.LineRendererPoints = i5508
  return i5506
}

Deserializers["PlayableAdsTool.LocalizationController"] = function (request, data, root) {
  var i5512 = root || request.c( 'PlayableAdsTool.LocalizationController' )
  var i5513 = data
  var i5515 = i5513[0]
  var i5514 = new (System.Collections.Generic.List$1(Bridge.ns('PlayableAdsTool.Sheet')))
  for(var i = 0; i < i5515.length; i += 1) {
    i5514.add(request.d('PlayableAdsTool.Sheet', i5515[i + 0]));
  }
  i5512.Sheets = i5514
  request.r(i5513[1], i5513[2], 0, i5512, 'CurrentFont')
  request.r(i5513[3], i5513[4], 0, i5512, 'DefaultFont')
  request.r(i5513[5], i5513[6], 0, i5512, 'HindiFont')
  request.r(i5513[7], i5513[8], 0, i5512, 'JapaneseFont')
  request.r(i5513[9], i5513[10], 0, i5512, 'KoreanFont')
  request.r(i5513[11], i5513[12], 0, i5512, 'ThaiFont')
  i5512._languageTest = !!i5513[13]
  i5512._language = i5513[14]
  return i5512
}

Deserializers["PlayableAdsTool.Sheet"] = function (request, data, root) {
  var i5518 = root || request.c( 'PlayableAdsTool.Sheet' )
  var i5519 = data
  i5518.Name = i5519[0]
  i5518.Id = System.Int64(i5519[1])
  request.r(i5519[2], i5519[3], 0, i5518, 'TextAsset')
  return i5518
}

Deserializers["_InGame.Scripts.Utilities.PrefabHolder"] = function (request, data, root) {
  var i5520 = root || request.c( '_InGame.Scripts.Utilities.PrefabHolder' )
  var i5521 = data
  request.r(i5521[0], i5521[1], 0, i5520, 'DrawPointPrefab')
  return i5520
}

Deserializers["PlayableAdsTool.ResponsiveManager"] = function (request, data, root) {
  var i5522 = root || request.c( 'PlayableAdsTool.ResponsiveManager' )
  var i5523 = data
  i5522.CurrentScreenOrientation = i5523[0]
  i5522.CurrentAspectRatio = i5523[1]
  var i5525 = i5523[2]
  var i5524 = []
  for(var i = 0; i < i5525.length; i += 1) {
    i5524.push( request.d('UIElement', i5525[i + 0]) );
  }
  i5522.UiElements = i5524
  var i5527 = i5523[3]
  var i5526 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i5527.length; i += 1) {
    i5526.add(request.d('UIData', i5527[i + 0]));
  }
  i5522.Horizantal_20_9 = i5526
  var i5529 = i5523[4]
  var i5528 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i5529.length; i += 1) {
    i5528.add(request.d('UIData', i5529[i + 0]));
  }
  i5522.Horizantal_16_9 = i5528
  var i5531 = i5523[5]
  var i5530 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i5531.length; i += 1) {
    i5530.add(request.d('UIData', i5531[i + 0]));
  }
  i5522.Horizantal_4_3 = i5530
  var i5533 = i5523[6]
  var i5532 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i5533.length; i += 1) {
    i5532.add(request.d('UIData', i5533[i + 0]));
  }
  i5522.Vertical_9_20 = i5532
  var i5535 = i5523[7]
  var i5534 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i5535.length; i += 1) {
    i5534.add(request.d('UIData', i5535[i + 0]));
  }
  i5522.Vertical_9_16 = i5534
  var i5537 = i5523[8]
  var i5536 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i5537.length; i += 1) {
    i5536.add(request.d('UIData', i5537[i + 0]));
  }
  i5522.Vertical_3_4 = i5536
  request.r(i5523[9], i5523[10], 0, i5522, 'Banner')
  return i5522
}

Deserializers["UIElement"] = function (request, data, root) {
  var i5540 = root || request.c( 'UIElement' )
  var i5541 = data
  i5540._rectTransformName = i5541[0]
  request.r(i5541[1], i5541[2], 0, i5540, '_rectTransform')
  return i5540
}

Deserializers["UIData"] = function (request, data, root) {
  var i5544 = root || request.c( 'UIData' )
  var i5545 = data
  i5544.AnchoredPosition = new pc.Vec2( i5545[0], i5545[1] )
  i5544.SizeDelta = new pc.Vec2( i5545[2], i5545[3] )
  i5544.Rotation = new pc.Quat(i5545[4], i5545[5], i5545[6], i5545[7])
  i5544.LocalScale = new pc.Vec3( i5545[8], i5545[9], i5545[10] )
  i5544.AnchorMin = new pc.Vec2( i5545[11], i5545[12] )
  i5544.AnchorMax = new pc.Vec2( i5545[13], i5545[14] )
  i5544.Pivot = new pc.Vec2( i5545[15], i5545[16] )
  return i5544
}

Deserializers["PlayableAdsTool.EndCardController"] = function (request, data, root) {
  var i5546 = root || request.c( 'PlayableAdsTool.EndCardController' )
  var i5547 = data
  i5546._isStoreOpen = !!i5547[0]
  i5546.IsEndCardOpened = !!i5547[1]
  i5546.LastEndCard = !!i5547[2]
  i5546.SendStoreWithEndCard = !!i5547[3]
  i5546._openStoreAfterSeconds = i5547[4]
  i5546._openStoreAfterEndCard = !!i5547[5]
  var i5549 = i5547[6]
  var i5548 = []
  for(var i = 0; i < i5549.length; i += 2) {
  request.r(i5549[i + 0], i5549[i + 1], 2, i5548, '')
  }
  i5546._endCards = i5548
  return i5546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5551 = data
  i5550.cullTransparentMesh = !!i5551[0]
  return i5550
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5552 = root || request.c( 'UnityEngine.UI.Image' )
  var i5553 = data
  request.r(i5553[0], i5553[1], 0, i5552, 'm_Sprite')
  i5552.m_Type = i5553[2]
  i5552.m_PreserveAspect = !!i5553[3]
  i5552.m_FillCenter = !!i5553[4]
  i5552.m_FillMethod = i5553[5]
  i5552.m_FillAmount = i5553[6]
  i5552.m_FillClockwise = !!i5553[7]
  i5552.m_FillOrigin = i5553[8]
  i5552.m_UseSpriteMesh = !!i5553[9]
  i5552.m_PixelsPerUnitMultiplier = i5553[10]
  request.r(i5553[11], i5553[12], 0, i5552, 'm_Material')
  i5552.m_Maskable = !!i5553[13]
  i5552.m_Color = new pc.Color(i5553[14], i5553[15], i5553[16], i5553[17])
  i5552.m_RaycastTarget = !!i5553[18]
  i5552.m_RaycastPadding = new pc.Vec4( i5553[19], i5553[20], i5553[21], i5553[22] )
  return i5552
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5554 = root || request.c( 'UnityEngine.UI.Button' )
  var i5555 = data
  i5554.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5555[0], i5554.m_OnClick)
  i5554.m_Navigation = request.d('UnityEngine.UI.Navigation', i5555[1], i5554.m_Navigation)
  i5554.m_Transition = i5555[2]
  i5554.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5555[3], i5554.m_Colors)
  i5554.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5555[4], i5554.m_SpriteState)
  i5554.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5555[5], i5554.m_AnimationTriggers)
  i5554.m_Interactable = !!i5555[6]
  request.r(i5555[7], i5555[8], 0, i5554, 'm_TargetGraphic')
  return i5554
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5556 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5557 = data
  i5556.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5557[0], i5556.m_PersistentCalls)
  return i5556
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5558 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5559 = data
  request.r(i5559[0], i5559[1], 0, i5558, 'm_ObjectArgument')
  i5558.m_ObjectArgumentAssemblyTypeName = i5559[2]
  i5558.m_IntArgument = i5559[3]
  i5558.m_FloatArgument = i5559[4]
  i5558.m_StringArgument = i5559[5]
  i5558.m_BoolArgument = !!i5559[6]
  return i5558
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5560 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5561 = data
  i5560.m_Mode = i5561[0]
  i5560.m_WrapAround = !!i5561[1]
  request.r(i5561[2], i5561[3], 0, i5560, 'm_SelectOnUp')
  request.r(i5561[4], i5561[5], 0, i5560, 'm_SelectOnDown')
  request.r(i5561[6], i5561[7], 0, i5560, 'm_SelectOnLeft')
  request.r(i5561[8], i5561[9], 0, i5560, 'm_SelectOnRight')
  return i5560
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5562 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5563 = data
  i5562.m_NormalColor = new pc.Color(i5563[0], i5563[1], i5563[2], i5563[3])
  i5562.m_HighlightedColor = new pc.Color(i5563[4], i5563[5], i5563[6], i5563[7])
  i5562.m_PressedColor = new pc.Color(i5563[8], i5563[9], i5563[10], i5563[11])
  i5562.m_SelectedColor = new pc.Color(i5563[12], i5563[13], i5563[14], i5563[15])
  i5562.m_DisabledColor = new pc.Color(i5563[16], i5563[17], i5563[18], i5563[19])
  i5562.m_ColorMultiplier = i5563[20]
  i5562.m_FadeDuration = i5563[21]
  return i5562
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5564 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5565 = data
  request.r(i5565[0], i5565[1], 0, i5564, 'm_HighlightedSprite')
  request.r(i5565[2], i5565[3], 0, i5564, 'm_PressedSprite')
  request.r(i5565[4], i5565[5], 0, i5564, 'm_SelectedSprite')
  request.r(i5565[6], i5565[7], 0, i5564, 'm_DisabledSprite')
  return i5564
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5566 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5567 = data
  i5566.m_NormalTrigger = i5567[0]
  i5566.m_HighlightedTrigger = i5567[1]
  i5566.m_PressedTrigger = i5567[2]
  i5566.m_SelectedTrigger = i5567[3]
  i5566.m_DisabledTrigger = i5567[4]
  return i5566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5569 = data
  i5568.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5569[0], i5568.main)
  i5568.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5569[1], i5568.colorBySpeed)
  i5568.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5569[2], i5568.colorOverLifetime)
  i5568.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5569[3], i5568.emission)
  i5568.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5569[4], i5568.rotationBySpeed)
  i5568.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5569[5], i5568.rotationOverLifetime)
  i5568.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5569[6], i5568.shape)
  i5568.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5569[7], i5568.sizeBySpeed)
  i5568.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5569[8], i5568.sizeOverLifetime)
  i5568.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5569[9], i5568.textureSheetAnimation)
  i5568.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5569[10], i5568.velocityOverLifetime)
  i5568.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5569[11], i5568.noise)
  i5568.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5569[12], i5568.inheritVelocity)
  i5568.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5569[13], i5568.forceOverLifetime)
  i5568.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5569[14], i5568.limitVelocityOverLifetime)
  i5568.useAutoRandomSeed = !!i5569[15]
  i5568.randomSeed = i5569[16]
  return i5568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5570 = root || new pc.ParticleSystemMain()
  var i5571 = data
  i5570.duration = i5571[0]
  i5570.loop = !!i5571[1]
  i5570.prewarm = !!i5571[2]
  i5570.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5571[3], i5570.startDelay)
  i5570.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5571[4], i5570.startLifetime)
  i5570.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5571[5], i5570.startSpeed)
  i5570.startSize3D = !!i5571[6]
  i5570.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5571[7], i5570.startSizeX)
  i5570.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5571[8], i5570.startSizeY)
  i5570.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5571[9], i5570.startSizeZ)
  i5570.startRotation3D = !!i5571[10]
  i5570.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5571[11], i5570.startRotationX)
  i5570.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5571[12], i5570.startRotationY)
  i5570.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5571[13], i5570.startRotationZ)
  i5570.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5571[14], i5570.startColor)
  i5570.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5571[15], i5570.gravityModifier)
  i5570.simulationSpace = i5571[16]
  request.r(i5571[17], i5571[18], 0, i5570, 'customSimulationSpace')
  i5570.simulationSpeed = i5571[19]
  i5570.useUnscaledTime = !!i5571[20]
  i5570.scalingMode = i5571[21]
  i5570.playOnAwake = !!i5571[22]
  i5570.maxParticles = i5571[23]
  i5570.emitterVelocityMode = i5571[24]
  i5570.stopAction = i5571[25]
  return i5570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5572 = root || new pc.MinMaxCurve()
  var i5573 = data
  i5572.mode = i5573[0]
  i5572.curveMin = new pc.AnimationCurve( { keys_flow: i5573[1] } )
  i5572.curveMax = new pc.AnimationCurve( { keys_flow: i5573[2] } )
  i5572.curveMultiplier = i5573[3]
  i5572.constantMin = i5573[4]
  i5572.constantMax = i5573[5]
  return i5572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5574 = root || new pc.MinMaxGradient()
  var i5575 = data
  i5574.mode = i5575[0]
  i5574.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5575[1], i5574.gradientMin)
  i5574.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5575[2], i5574.gradientMax)
  i5574.colorMin = new pc.Color(i5575[3], i5575[4], i5575[5], i5575[6])
  i5574.colorMax = new pc.Color(i5575[7], i5575[8], i5575[9], i5575[10])
  return i5574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5577 = data
  i5576.mode = i5577[0]
  var i5579 = i5577[1]
  var i5578 = []
  for(var i = 0; i < i5579.length; i += 1) {
    i5578.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5579[i + 0]) );
  }
  i5576.colorKeys = i5578
  var i5581 = i5577[2]
  var i5580 = []
  for(var i = 0; i < i5581.length; i += 1) {
    i5580.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5581[i + 0]) );
  }
  i5576.alphaKeys = i5580
  return i5576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5585 = data
  i5584.color = new pc.Color(i5585[0], i5585[1], i5585[2], i5585[3])
  i5584.time = i5585[4]
  return i5584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5589 = data
  i5588.alpha = i5589[0]
  i5588.time = i5589[1]
  return i5588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5590 = root || new pc.ParticleSystemColorBySpeed()
  var i5591 = data
  i5590.enabled = !!i5591[0]
  i5590.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5591[1], i5590.color)
  i5590.range = new pc.Vec2( i5591[2], i5591[3] )
  return i5590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5592 = root || new pc.ParticleSystemColorOverLifetime()
  var i5593 = data
  i5592.enabled = !!i5593[0]
  i5592.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5593[1], i5592.color)
  return i5592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5594 = root || new pc.ParticleSystemEmitter()
  var i5595 = data
  i5594.enabled = !!i5595[0]
  i5594.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5595[1], i5594.rateOverTime)
  i5594.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5595[2], i5594.rateOverDistance)
  var i5597 = i5595[3]
  var i5596 = []
  for(var i = 0; i < i5597.length; i += 1) {
    i5596.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5597[i + 0]) );
  }
  i5594.bursts = i5596
  return i5594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5600 = root || new pc.ParticleSystemBurst()
  var i5601 = data
  i5600.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5601[0], i5600.count)
  i5600.cycleCount = i5601[1]
  i5600.minCount = i5601[2]
  i5600.maxCount = i5601[3]
  i5600.repeatInterval = i5601[4]
  i5600.time = i5601[5]
  return i5600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5602 = root || new pc.ParticleSystemRotationBySpeed()
  var i5603 = data
  i5602.enabled = !!i5603[0]
  i5602.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5603[1], i5602.x)
  i5602.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5603[2], i5602.y)
  i5602.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5603[3], i5602.z)
  i5602.separateAxes = !!i5603[4]
  i5602.range = new pc.Vec2( i5603[5], i5603[6] )
  return i5602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5604 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5605 = data
  i5604.enabled = !!i5605[0]
  i5604.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5605[1], i5604.x)
  i5604.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5605[2], i5604.y)
  i5604.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5605[3], i5604.z)
  i5604.separateAxes = !!i5605[4]
  return i5604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5606 = root || new pc.ParticleSystemShape()
  var i5607 = data
  i5606.enabled = !!i5607[0]
  i5606.shapeType = i5607[1]
  i5606.randomDirectionAmount = i5607[2]
  i5606.sphericalDirectionAmount = i5607[3]
  i5606.randomPositionAmount = i5607[4]
  i5606.alignToDirection = !!i5607[5]
  i5606.radius = i5607[6]
  i5606.radiusMode = i5607[7]
  i5606.radiusSpread = i5607[8]
  i5606.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5607[9], i5606.radiusSpeed)
  i5606.radiusThickness = i5607[10]
  i5606.angle = i5607[11]
  i5606.length = i5607[12]
  i5606.boxThickness = new pc.Vec3( i5607[13], i5607[14], i5607[15] )
  i5606.meshShapeType = i5607[16]
  request.r(i5607[17], i5607[18], 0, i5606, 'mesh')
  request.r(i5607[19], i5607[20], 0, i5606, 'meshRenderer')
  request.r(i5607[21], i5607[22], 0, i5606, 'skinnedMeshRenderer')
  i5606.useMeshMaterialIndex = !!i5607[23]
  i5606.meshMaterialIndex = i5607[24]
  i5606.useMeshColors = !!i5607[25]
  i5606.normalOffset = i5607[26]
  i5606.arc = i5607[27]
  i5606.arcMode = i5607[28]
  i5606.arcSpread = i5607[29]
  i5606.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5607[30], i5606.arcSpeed)
  i5606.donutRadius = i5607[31]
  i5606.position = new pc.Vec3( i5607[32], i5607[33], i5607[34] )
  i5606.rotation = new pc.Vec3( i5607[35], i5607[36], i5607[37] )
  i5606.scale = new pc.Vec3( i5607[38], i5607[39], i5607[40] )
  return i5606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5608 = root || new pc.ParticleSystemSizeBySpeed()
  var i5609 = data
  i5608.enabled = !!i5609[0]
  i5608.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5609[1], i5608.x)
  i5608.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5609[2], i5608.y)
  i5608.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5609[3], i5608.z)
  i5608.separateAxes = !!i5609[4]
  i5608.range = new pc.Vec2( i5609[5], i5609[6] )
  return i5608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5610 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5611 = data
  i5610.enabled = !!i5611[0]
  i5610.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5611[1], i5610.x)
  i5610.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5611[2], i5610.y)
  i5610.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5611[3], i5610.z)
  i5610.separateAxes = !!i5611[4]
  return i5610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5612 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5613 = data
  i5612.enabled = !!i5613[0]
  i5612.mode = i5613[1]
  i5612.animation = i5613[2]
  i5612.numTilesX = i5613[3]
  i5612.numTilesY = i5613[4]
  i5612.useRandomRow = !!i5613[5]
  i5612.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5613[6], i5612.frameOverTime)
  i5612.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5613[7], i5612.startFrame)
  i5612.cycleCount = i5613[8]
  i5612.rowIndex = i5613[9]
  i5612.flipU = i5613[10]
  i5612.flipV = i5613[11]
  i5612.spriteCount = i5613[12]
  var i5615 = i5613[13]
  var i5614 = []
  for(var i = 0; i < i5615.length; i += 2) {
  request.r(i5615[i + 0], i5615[i + 1], 2, i5614, '')
  }
  i5612.sprites = i5614
  return i5612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5618 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5619 = data
  i5618.enabled = !!i5619[0]
  i5618.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5619[1], i5618.x)
  i5618.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5619[2], i5618.y)
  i5618.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5619[3], i5618.z)
  i5618.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5619[4], i5618.radial)
  i5618.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5619[5], i5618.speedModifier)
  i5618.space = i5619[6]
  i5618.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5619[7], i5618.orbitalX)
  i5618.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5619[8], i5618.orbitalY)
  i5618.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5619[9], i5618.orbitalZ)
  i5618.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5619[10], i5618.orbitalOffsetX)
  i5618.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5619[11], i5618.orbitalOffsetY)
  i5618.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5619[12], i5618.orbitalOffsetZ)
  return i5618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5620 = root || new pc.ParticleSystemNoise()
  var i5621 = data
  i5620.enabled = !!i5621[0]
  i5620.separateAxes = !!i5621[1]
  i5620.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5621[2], i5620.strengthX)
  i5620.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5621[3], i5620.strengthY)
  i5620.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5621[4], i5620.strengthZ)
  i5620.frequency = i5621[5]
  i5620.damping = !!i5621[6]
  i5620.octaveCount = i5621[7]
  i5620.octaveMultiplier = i5621[8]
  i5620.octaveScale = i5621[9]
  i5620.quality = i5621[10]
  i5620.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5621[11], i5620.scrollSpeed)
  i5620.scrollSpeedMultiplier = i5621[12]
  i5620.remapEnabled = !!i5621[13]
  i5620.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5621[14], i5620.remapX)
  i5620.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5621[15], i5620.remapY)
  i5620.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5621[16], i5620.remapZ)
  i5620.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5621[17], i5620.positionAmount)
  i5620.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5621[18], i5620.rotationAmount)
  i5620.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5621[19], i5620.sizeAmount)
  return i5620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5622 = root || new pc.ParticleSystemInheritVelocity()
  var i5623 = data
  i5622.enabled = !!i5623[0]
  i5622.mode = i5623[1]
  i5622.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5623[2], i5622.curve)
  return i5622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5624 = root || new pc.ParticleSystemForceOverLifetime()
  var i5625 = data
  i5624.enabled = !!i5625[0]
  i5624.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5625[1], i5624.x)
  i5624.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5625[2], i5624.y)
  i5624.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5625[3], i5624.z)
  i5624.space = i5625[4]
  i5624.randomized = !!i5625[5]
  return i5624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5626 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5627 = data
  i5626.enabled = !!i5627[0]
  i5626.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5627[1], i5626.limit)
  i5626.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5627[2], i5626.limitX)
  i5626.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5627[3], i5626.limitY)
  i5626.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5627[4], i5626.limitZ)
  i5626.dampen = i5627[5]
  i5626.separateAxes = !!i5627[6]
  i5626.space = i5627[7]
  i5626.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5627[8], i5626.drag)
  i5626.multiplyDragByParticleSize = !!i5627[9]
  i5626.multiplyDragByParticleVelocity = !!i5627[10]
  return i5626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5629 = data
  i5628.enabled = !!i5629[0]
  request.r(i5629[1], i5629[2], 0, i5628, 'sharedMaterial')
  var i5631 = i5629[3]
  var i5630 = []
  for(var i = 0; i < i5631.length; i += 2) {
  request.r(i5631[i + 0], i5631[i + 1], 2, i5630, '')
  }
  i5628.sharedMaterials = i5630
  i5628.receiveShadows = !!i5629[4]
  i5628.shadowCastingMode = i5629[5]
  i5628.sortingLayerID = i5629[6]
  i5628.sortingOrder = i5629[7]
  i5628.lightmapIndex = i5629[8]
  i5628.lightmapSceneIndex = i5629[9]
  i5628.lightmapScaleOffset = new pc.Vec4( i5629[10], i5629[11], i5629[12], i5629[13] )
  i5628.lightProbeUsage = i5629[14]
  i5628.reflectionProbeUsage = i5629[15]
  request.r(i5629[16], i5629[17], 0, i5628, 'mesh')
  i5628.meshCount = i5629[18]
  i5628.activeVertexStreamsCount = i5629[19]
  i5628.alignment = i5629[20]
  i5628.renderMode = i5629[21]
  i5628.sortMode = i5629[22]
  i5628.lengthScale = i5629[23]
  i5628.velocityScale = i5629[24]
  i5628.cameraVelocityScale = i5629[25]
  i5628.normalDirection = i5629[26]
  i5628.sortingFudge = i5629[27]
  i5628.minParticleSize = i5629[28]
  i5628.maxParticleSize = i5629[29]
  i5628.pivot = new pc.Vec3( i5629[30], i5629[31], i5629[32] )
  request.r(i5629[33], i5629[34], 0, i5628, 'trailMaterial')
  return i5628
}

Deserializers["PlayableAdsTool.AudioManager"] = function (request, data, root) {
  var i5632 = root || request.c( 'PlayableAdsTool.AudioManager' )
  var i5633 = data
  request.r(i5633[0], i5633[1], 0, i5632, 'AudioSourceContainer')
  var i5635 = i5633[2]
  var i5634 = new (System.Collections.Generic.List$1(Bridge.ns('PlayableAdsTool.SoundTypeListPair')))
  for(var i = 0; i < i5635.length; i += 1) {
    i5634.add(request.d('PlayableAdsTool.SoundTypeListPair', i5635[i + 0]));
  }
  i5632.SoundTypeListPairs = i5634
  return i5632
}

Deserializers["PlayableAdsTool.SoundTypeListPair"] = function (request, data, root) {
  var i5638 = root || request.c( 'PlayableAdsTool.SoundTypeListPair' )
  var i5639 = data
  i5638.type = i5639[0]
  var i5641 = i5639[1]
  var i5640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i5641.length; i += 2) {
  request.r(i5641[i + 0], i5641[i + 1], 1, i5640, '')
  }
  i5638.clips = i5640
  return i5638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5645 = data
  request.r(i5645[0], i5645[1], 0, i5644, 'clip')
  request.r(i5645[2], i5645[3], 0, i5644, 'outputAudioMixerGroup')
  i5644.playOnAwake = !!i5645[4]
  i5644.loop = !!i5645[5]
  i5644.time = i5645[6]
  i5644.volume = i5645[7]
  i5644.pitch = i5645[8]
  i5644.enabled = !!i5645[9]
  return i5644
}

Deserializers["PlayableAdsTool.AudioSourceContainer"] = function (request, data, root) {
  var i5646 = root || request.c( 'PlayableAdsTool.AudioSourceContainer' )
  var i5647 = data
  return i5646
}

Deserializers["PlayableAdsTool.ObjectPoolManager"] = function (request, data, root) {
  var i5648 = root || request.c( 'PlayableAdsTool.ObjectPoolManager' )
  var i5649 = data
  var i5651 = i5649[0]
  var i5650 = new (System.Collections.Generic.List$1(Bridge.ns('PlayableAdsTool.PoolContainer')))
  for(var i = 0; i < i5651.length; i += 1) {
    i5650.add(request.d('PlayableAdsTool.PoolContainer', i5651[i + 0]));
  }
  i5648._poolContainers = i5650
  return i5648
}

Deserializers["PlayableAdsTool.PoolContainer"] = function (request, data, root) {
  var i5654 = root || request.c( 'PlayableAdsTool.PoolContainer' )
  var i5655 = data
  request.r(i5655[0], i5655[1], 0, i5654, 'Prefab')
  i5654.Count = i5655[2]
  return i5654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i5656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i5657 = data
  i5656.name = i5657[0]
  i5656.atlasId = i5657[1]
  i5656.mipmapCount = i5657[2]
  i5656.hdr = !!i5657[3]
  i5656.size = i5657[4]
  i5656.anisoLevel = i5657[5]
  i5656.filterMode = i5657[6]
  var i5659 = i5657[7]
  var i5658 = []
  for(var i = 0; i < i5659.length; i += 4) {
    i5658.push( UnityEngine.Rect.MinMaxRect(i5659[i + 0], i5659[i + 1], i5659[i + 2], i5659[i + 3]) );
  }
  i5656.rects = i5658
  i5656.wrapU = i5657[8]
  i5656.wrapV = i5657[9]
  return i5656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5663 = data
  i5662.name = i5663[0]
  i5662.index = i5663[1]
  i5662.startup = !!i5663[2]
  return i5662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5665 = data
  i5664.enabled = !!i5665[0]
  i5664.planeDistance = i5665[1]
  i5664.referencePixelsPerUnit = i5665[2]
  i5664.isFallbackOverlay = !!i5665[3]
  i5664.renderMode = i5665[4]
  i5664.renderOrder = i5665[5]
  i5664.sortingLayerName = i5665[6]
  i5664.sortingOrder = i5665[7]
  i5664.scaleFactor = i5665[8]
  request.r(i5665[9], i5665[10], 0, i5664, 'worldCamera')
  i5664.overrideSorting = !!i5665[11]
  i5664.pixelPerfect = !!i5665[12]
  i5664.targetDisplay = i5665[13]
  i5664.overridePixelPerfect = !!i5665[14]
  return i5664
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5666 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5667 = data
  i5666.m_UiScaleMode = i5667[0]
  i5666.m_ReferencePixelsPerUnit = i5667[1]
  i5666.m_ScaleFactor = i5667[2]
  i5666.m_ReferenceResolution = new pc.Vec2( i5667[3], i5667[4] )
  i5666.m_ScreenMatchMode = i5667[5]
  i5666.m_MatchWidthOrHeight = i5667[6]
  i5666.m_PhysicalUnit = i5667[7]
  i5666.m_FallbackScreenDPI = i5667[8]
  i5666.m_DefaultSpriteDPI = i5667[9]
  i5666.m_DynamicPixelsPerUnit = i5667[10]
  i5666.m_PresetInfoIsWorld = !!i5667[11]
  return i5666
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5668 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5669 = data
  i5668.m_IgnoreReversedGraphics = !!i5669[0]
  i5668.m_BlockingObjects = i5669[1]
  i5668.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5669[2] )
  return i5668
}

Deserializers["UIManager"] = function (request, data, root) {
  var i5670 = root || request.c( 'UIManager' )
  var i5671 = data
  return i5670
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5672 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5673 = data
  i5672.m_hasFontAssetChanged = !!i5673[0]
  request.r(i5673[1], i5673[2], 0, i5672, 'm_baseMaterial')
  i5672.m_maskOffset = new pc.Vec4( i5673[3], i5673[4], i5673[5], i5673[6] )
  i5672.m_text = i5673[7]
  i5672.m_isRightToLeft = !!i5673[8]
  request.r(i5673[9], i5673[10], 0, i5672, 'm_fontAsset')
  request.r(i5673[11], i5673[12], 0, i5672, 'm_sharedMaterial')
  var i5675 = i5673[13]
  var i5674 = []
  for(var i = 0; i < i5675.length; i += 2) {
  request.r(i5675[i + 0], i5675[i + 1], 2, i5674, '')
  }
  i5672.m_fontSharedMaterials = i5674
  request.r(i5673[14], i5673[15], 0, i5672, 'm_fontMaterial')
  var i5677 = i5673[16]
  var i5676 = []
  for(var i = 0; i < i5677.length; i += 2) {
  request.r(i5677[i + 0], i5677[i + 1], 2, i5676, '')
  }
  i5672.m_fontMaterials = i5676
  i5672.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5673[17], i5673[18], i5673[19], i5673[20])
  i5672.m_fontColor = new pc.Color(i5673[21], i5673[22], i5673[23], i5673[24])
  i5672.m_enableVertexGradient = !!i5673[25]
  i5672.m_colorMode = i5673[26]
  i5672.m_fontColorGradient = request.d('TMPro.VertexGradient', i5673[27], i5672.m_fontColorGradient)
  request.r(i5673[28], i5673[29], 0, i5672, 'm_fontColorGradientPreset')
  request.r(i5673[30], i5673[31], 0, i5672, 'm_spriteAsset')
  i5672.m_tintAllSprites = !!i5673[32]
  request.r(i5673[33], i5673[34], 0, i5672, 'm_StyleSheet')
  i5672.m_TextStyleHashCode = i5673[35]
  i5672.m_overrideHtmlColors = !!i5673[36]
  i5672.m_faceColor = UnityEngine.Color32.ConstructColor(i5673[37], i5673[38], i5673[39], i5673[40])
  i5672.m_fontSize = i5673[41]
  i5672.m_fontSizeBase = i5673[42]
  i5672.m_fontWeight = i5673[43]
  i5672.m_enableAutoSizing = !!i5673[44]
  i5672.m_fontSizeMin = i5673[45]
  i5672.m_fontSizeMax = i5673[46]
  i5672.m_fontStyle = i5673[47]
  i5672.m_HorizontalAlignment = i5673[48]
  i5672.m_VerticalAlignment = i5673[49]
  i5672.m_textAlignment = i5673[50]
  i5672.m_characterSpacing = i5673[51]
  i5672.m_wordSpacing = i5673[52]
  i5672.m_lineSpacing = i5673[53]
  i5672.m_lineSpacingMax = i5673[54]
  i5672.m_paragraphSpacing = i5673[55]
  i5672.m_charWidthMaxAdj = i5673[56]
  i5672.m_enableWordWrapping = !!i5673[57]
  i5672.m_wordWrappingRatios = i5673[58]
  i5672.m_overflowMode = i5673[59]
  request.r(i5673[60], i5673[61], 0, i5672, 'm_linkedTextComponent')
  request.r(i5673[62], i5673[63], 0, i5672, 'parentLinkedComponent')
  i5672.m_enableKerning = !!i5673[64]
  i5672.m_enableExtraPadding = !!i5673[65]
  i5672.checkPaddingRequired = !!i5673[66]
  i5672.m_isRichText = !!i5673[67]
  i5672.m_parseCtrlCharacters = !!i5673[68]
  i5672.m_isOrthographic = !!i5673[69]
  i5672.m_isCullingEnabled = !!i5673[70]
  i5672.m_horizontalMapping = i5673[71]
  i5672.m_verticalMapping = i5673[72]
  i5672.m_uvLineOffset = i5673[73]
  i5672.m_geometrySortingOrder = i5673[74]
  i5672.m_IsTextObjectScaleStatic = !!i5673[75]
  i5672.m_VertexBufferAutoSizeReduction = !!i5673[76]
  i5672.m_useMaxVisibleDescender = !!i5673[77]
  i5672.m_pageToDisplay = i5673[78]
  i5672.m_margin = new pc.Vec4( i5673[79], i5673[80], i5673[81], i5673[82] )
  i5672.m_isUsingLegacyAnimationComponent = !!i5673[83]
  i5672.m_isVolumetricText = !!i5673[84]
  request.r(i5673[85], i5673[86], 0, i5672, 'm_Material')
  i5672.m_Maskable = !!i5673[87]
  i5672.m_Color = new pc.Color(i5673[88], i5673[89], i5673[90], i5673[91])
  i5672.m_RaycastTarget = !!i5673[92]
  i5672.m_RaycastPadding = new pc.Vec4( i5673[93], i5673[94], i5673[95], i5673[96] )
  return i5672
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5678 = root || request.c( 'TMPro.VertexGradient' )
  var i5679 = data
  i5678.topLeft = new pc.Color(i5679[0], i5679[1], i5679[2], i5679[3])
  i5678.topRight = new pc.Color(i5679[4], i5679[5], i5679[6], i5679[7])
  i5678.bottomLeft = new pc.Color(i5679[8], i5679[9], i5679[10], i5679[11])
  i5678.bottomRight = new pc.Color(i5679[12], i5679[13], i5679[14], i5679[15])
  return i5678
}

Deserializers["PlayableAdsTool.LocalizedTextTMP"] = function (request, data, root) {
  var i5680 = root || request.c( 'PlayableAdsTool.LocalizedTextTMP' )
  var i5681 = data
  i5680.LocalizationKey = i5681[0]
  return i5680
}

Deserializers["_InGame.Scripts.Others.FillSliderController"] = function (request, data, root) {
  var i5682 = root || request.c( '_InGame.Scripts.Others.FillSliderController' )
  var i5683 = data
  request.r(i5683[0], i5683[1], 0, i5682, '_FillImage')
  request.r(i5683[2], i5683[3], 0, i5682, '_BrainObject')
  i5682.BrainLocationMinMax = new pc.Vec2( i5683[4], i5683[5] )
  return i5682
}

Deserializers["FeedbackPanelController"] = function (request, data, root) {
  var i5684 = root || request.c( 'FeedbackPanelController' )
  var i5685 = data
  request.r(i5685[0], i5685[1], 0, i5684, 'WinAnimator')
  request.r(i5685[2], i5685[3], 0, i5684, 'FailAnimator')
  var i5687 = i5685[4]
  var i5686 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i5687.length; i += 2) {
  request.r(i5687[i + 0], i5687[i + 1], 1, i5686, '')
  }
  i5684.Confetties = i5686
  return i5684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i5690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i5691 = data
  i5690.enabled = !!i5691[0]
  i5690.type = i5691[1]
  i5690.color = new pc.Color(i5691[2], i5691[3], i5691[4], i5691[5])
  i5690.cullingMask = i5691[6]
  i5690.intensity = i5691[7]
  i5690.range = i5691[8]
  i5690.spotAngle = i5691[9]
  i5690.shadows = i5691[10]
  i5690.shadowNormalBias = i5691[11]
  i5690.shadowBias = i5691[12]
  i5690.shadowStrength = i5691[13]
  i5690.shadowResolution = i5691[14]
  i5690.lightmapBakeType = i5691[15]
  i5690.renderMode = i5691[16]
  request.r(i5691[17], i5691[18], 0, i5690, 'cookie')
  i5690.cookieSize = i5691[19]
  return i5690
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5692 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5693 = data
  request.r(i5693[0], i5693[1], 0, i5692, 'm_FirstSelected')
  i5692.m_sendNavigationEvents = !!i5693[2]
  i5692.m_DragThreshold = i5693[3]
  return i5692
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5694 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5695 = data
  i5694.m_HorizontalAxis = i5695[0]
  i5694.m_VerticalAxis = i5695[1]
  i5694.m_SubmitButton = i5695[2]
  i5694.m_CancelButton = i5695[3]
  i5694.m_InputActionsPerSecond = i5695[4]
  i5694.m_RepeatDelay = i5695[5]
  i5694.m_ForceModuleActive = !!i5695[6]
  i5694.m_SendPointerHoverToParent = !!i5695[7]
  return i5694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5697 = data
  i5696.ambientIntensity = i5697[0]
  i5696.reflectionIntensity = i5697[1]
  i5696.ambientMode = i5697[2]
  i5696.ambientLight = new pc.Color(i5697[3], i5697[4], i5697[5], i5697[6])
  i5696.ambientSkyColor = new pc.Color(i5697[7], i5697[8], i5697[9], i5697[10])
  i5696.ambientGroundColor = new pc.Color(i5697[11], i5697[12], i5697[13], i5697[14])
  i5696.ambientEquatorColor = new pc.Color(i5697[15], i5697[16], i5697[17], i5697[18])
  i5696.fogColor = new pc.Color(i5697[19], i5697[20], i5697[21], i5697[22])
  i5696.fogEndDistance = i5697[23]
  i5696.fogStartDistance = i5697[24]
  i5696.fogDensity = i5697[25]
  i5696.fog = !!i5697[26]
  request.r(i5697[27], i5697[28], 0, i5696, 'skybox')
  i5696.fogMode = i5697[29]
  var i5699 = i5697[30]
  var i5698 = []
  for(var i = 0; i < i5699.length; i += 1) {
    i5698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5699[i + 0]) );
  }
  i5696.lightmaps = i5698
  i5696.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5697[31], i5696.lightProbes)
  i5696.lightmapsMode = i5697[32]
  i5696.mixedBakeMode = i5697[33]
  i5696.environmentLightingMode = i5697[34]
  i5696.ambientProbe = new pc.SphericalHarmonicsL2(i5697[35])
  i5696.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5697[36])
  i5696.useReferenceAmbientProbe = !!i5697[37]
  request.r(i5697[38], i5697[39], 0, i5696, 'customReflection')
  request.r(i5697[40], i5697[41], 0, i5696, 'defaultReflection')
  i5696.defaultReflectionMode = i5697[42]
  i5696.defaultReflectionResolution = i5697[43]
  i5696.sunLightObjectId = i5697[44]
  i5696.pixelLightCount = i5697[45]
  i5696.defaultReflectionHDR = !!i5697[46]
  i5696.hasLightDataAsset = !!i5697[47]
  i5696.hasManualGenerate = !!i5697[48]
  return i5696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5703 = data
  request.r(i5703[0], i5703[1], 0, i5702, 'lightmapColor')
  request.r(i5703[2], i5703[3], 0, i5702, 'lightmapDirection')
  return i5702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5704 = root || new UnityEngine.LightProbes()
  var i5705 = data
  return i5704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5711 = data
  var i5713 = i5711[0]
  var i5712 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5713.length; i += 1) {
    i5712.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5713[i + 0]));
  }
  i5710.ShaderCompilationErrors = i5712
  i5710.name = i5711[1]
  i5710.guid = i5711[2]
  var i5715 = i5711[3]
  var i5714 = []
  for(var i = 0; i < i5715.length; i += 1) {
    i5714.push( i5715[i + 0] );
  }
  i5710.shaderDefinedKeywords = i5714
  var i5717 = i5711[4]
  var i5716 = []
  for(var i = 0; i < i5717.length; i += 1) {
    i5716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5717[i + 0]) );
  }
  i5710.passes = i5716
  var i5719 = i5711[5]
  var i5718 = []
  for(var i = 0; i < i5719.length; i += 1) {
    i5718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5719[i + 0]) );
  }
  i5710.usePasses = i5718
  var i5721 = i5711[6]
  var i5720 = []
  for(var i = 0; i < i5721.length; i += 1) {
    i5720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5721[i + 0]) );
  }
  i5710.defaultParameterValues = i5720
  request.r(i5711[7], i5711[8], 0, i5710, 'unityFallbackShader')
  i5710.readDepth = !!i5711[9]
  i5710.isCreatedByShaderGraph = !!i5711[10]
  i5710.compiled = !!i5711[11]
  return i5710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5725 = data
  i5724.shaderName = i5725[0]
  i5724.errorMessage = i5725[1]
  return i5724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5728 = root || new pc.UnityShaderPass()
  var i5729 = data
  i5728.id = i5729[0]
  i5728.subShaderIndex = i5729[1]
  i5728.name = i5729[2]
  i5728.passType = i5729[3]
  i5728.grabPassTextureName = i5729[4]
  i5728.usePass = !!i5729[5]
  i5728.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5729[6], i5728.zTest)
  i5728.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5729[7], i5728.zWrite)
  i5728.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5729[8], i5728.culling)
  i5728.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5729[9], i5728.blending)
  i5728.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5729[10], i5728.alphaBlending)
  i5728.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5729[11], i5728.colorWriteMask)
  i5728.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5729[12], i5728.offsetUnits)
  i5728.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5729[13], i5728.offsetFactor)
  i5728.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5729[14], i5728.stencilRef)
  i5728.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5729[15], i5728.stencilReadMask)
  i5728.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5729[16], i5728.stencilWriteMask)
  i5728.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5729[17], i5728.stencilOp)
  i5728.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5729[18], i5728.stencilOpFront)
  i5728.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5729[19], i5728.stencilOpBack)
  var i5731 = i5729[20]
  var i5730 = []
  for(var i = 0; i < i5731.length; i += 1) {
    i5730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5731[i + 0]) );
  }
  i5728.tags = i5730
  var i5733 = i5729[21]
  var i5732 = []
  for(var i = 0; i < i5733.length; i += 1) {
    i5732.push( i5733[i + 0] );
  }
  i5728.passDefinedKeywords = i5732
  var i5735 = i5729[22]
  var i5734 = []
  for(var i = 0; i < i5735.length; i += 1) {
    i5734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5735[i + 0]) );
  }
  i5728.passDefinedKeywordGroups = i5734
  var i5737 = i5729[23]
  var i5736 = []
  for(var i = 0; i < i5737.length; i += 1) {
    i5736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5737[i + 0]) );
  }
  i5728.variants = i5736
  var i5739 = i5729[24]
  var i5738 = []
  for(var i = 0; i < i5739.length; i += 1) {
    i5738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5739[i + 0]) );
  }
  i5728.excludedVariants = i5738
  i5728.hasDepthReader = !!i5729[25]
  return i5728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5741 = data
  i5740.val = i5741[0]
  i5740.name = i5741[1]
  return i5740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5743 = data
  i5742.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5743[0], i5742.src)
  i5742.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5743[1], i5742.dst)
  i5742.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5743[2], i5742.op)
  return i5742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5745 = data
  i5744.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5745[0], i5744.pass)
  i5744.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5745[1], i5744.fail)
  i5744.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5745[2], i5744.zFail)
  i5744.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5745[3], i5744.comp)
  return i5744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5749 = data
  i5748.name = i5749[0]
  i5748.value = i5749[1]
  return i5748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5753 = data
  var i5755 = i5753[0]
  var i5754 = []
  for(var i = 0; i < i5755.length; i += 1) {
    i5754.push( i5755[i + 0] );
  }
  i5752.keywords = i5754
  i5752.hasDiscard = !!i5753[1]
  return i5752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5759 = data
  i5758.passId = i5759[0]
  i5758.subShaderIndex = i5759[1]
  var i5761 = i5759[2]
  var i5760 = []
  for(var i = 0; i < i5761.length; i += 1) {
    i5760.push( i5761[i + 0] );
  }
  i5758.keywords = i5760
  i5758.vertexProgram = i5759[3]
  i5758.fragmentProgram = i5759[4]
  i5758.exportedForWebGl2 = !!i5759[5]
  i5758.readDepth = !!i5759[6]
  return i5758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5765 = data
  request.r(i5765[0], i5765[1], 0, i5764, 'shader')
  i5764.pass = i5765[2]
  return i5764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5769 = data
  i5768.name = i5769[0]
  i5768.type = i5769[1]
  i5768.value = new pc.Vec4( i5769[2], i5769[3], i5769[4], i5769[5] )
  i5768.textureValue = i5769[6]
  i5768.shaderPropertyFlag = i5769[7]
  return i5768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5771 = data
  i5770.name = i5771[0]
  request.r(i5771[1], i5771[2], 0, i5770, 'texture')
  i5770.aabb = i5771[3]
  i5770.vertices = i5771[4]
  i5770.triangles = i5771[5]
  i5770.textureRect = UnityEngine.Rect.MinMaxRect(i5771[6], i5771[7], i5771[8], i5771[9])
  i5770.packedRect = UnityEngine.Rect.MinMaxRect(i5771[10], i5771[11], i5771[12], i5771[13])
  i5770.border = new pc.Vec4( i5771[14], i5771[15], i5771[16], i5771[17] )
  i5770.transparency = i5771[18]
  i5770.bounds = i5771[19]
  i5770.pixelsPerUnit = i5771[20]
  i5770.textureWidth = i5771[21]
  i5770.textureHeight = i5771[22]
  i5770.nativeSize = new pc.Vec2( i5771[23], i5771[24] )
  i5770.pivot = new pc.Vec2( i5771[25], i5771[26] )
  i5770.textureRectOffset = new pc.Vec2( i5771[27], i5771[28] )
  return i5770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5773 = data
  i5772.name = i5773[0]
  return i5772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5775 = data
  i5774.name = i5775[0]
  i5774.wrapMode = i5775[1]
  i5774.isLooping = !!i5775[2]
  i5774.length = i5775[3]
  var i5777 = i5775[4]
  var i5776 = []
  for(var i = 0; i < i5777.length; i += 1) {
    i5776.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5777[i + 0]) );
  }
  i5774.curves = i5776
  var i5779 = i5775[5]
  var i5778 = []
  for(var i = 0; i < i5779.length; i += 1) {
    i5778.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5779[i + 0]) );
  }
  i5774.events = i5778
  i5774.halfPrecision = !!i5775[6]
  i5774._frameRate = i5775[7]
  i5774.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5775[8], i5774.localBounds)
  i5774.hasMuscleCurves = !!i5775[9]
  var i5781 = i5775[10]
  var i5780 = []
  for(var i = 0; i < i5781.length; i += 1) {
    i5780.push( i5781[i + 0] );
  }
  i5774.clipMuscleConstant = i5780
  i5774.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5775[11], i5774.clipBindingConstant)
  return i5774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5785 = data
  i5784.path = i5785[0]
  i5784.hash = i5785[1]
  i5784.componentType = i5785[2]
  i5784.property = i5785[3]
  i5784.keys = i5785[4]
  var i5787 = i5785[5]
  var i5786 = []
  for(var i = 0; i < i5787.length; i += 1) {
    i5786.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5787[i + 0]) );
  }
  i5784.objectReferenceKeys = i5786
  return i5784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5791 = data
  i5790.time = i5791[0]
  request.r(i5791[1], i5791[2], 0, i5790, 'value')
  return i5790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5795 = data
  i5794.functionName = i5795[0]
  i5794.floatParameter = i5795[1]
  i5794.intParameter = i5795[2]
  i5794.stringParameter = i5795[3]
  request.r(i5795[4], i5795[5], 0, i5794, 'objectReferenceParameter')
  i5794.time = i5795[6]
  return i5794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5797 = data
  i5796.center = new pc.Vec3( i5797[0], i5797[1], i5797[2] )
  i5796.extends = new pc.Vec3( i5797[3], i5797[4], i5797[5] )
  return i5796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5801 = data
  var i5803 = i5801[0]
  var i5802 = []
  for(var i = 0; i < i5803.length; i += 1) {
    i5802.push( i5803[i + 0] );
  }
  i5800.genericBindings = i5802
  var i5805 = i5801[1]
  var i5804 = []
  for(var i = 0; i < i5805.length; i += 1) {
    i5804.push( i5805[i + 0] );
  }
  i5800.pptrCurveMapping = i5804
  return i5800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5807 = data
  i5806.name = i5807[0]
  i5806.ascent = i5807[1]
  i5806.originalLineHeight = i5807[2]
  i5806.fontSize = i5807[3]
  var i5809 = i5807[4]
  var i5808 = []
  for(var i = 0; i < i5809.length; i += 1) {
    i5808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5809[i + 0]) );
  }
  i5806.characterInfo = i5808
  request.r(i5807[5], i5807[6], 0, i5806, 'texture')
  i5806.originalFontSize = i5807[7]
  return i5806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5813 = data
  i5812.index = i5813[0]
  i5812.advance = i5813[1]
  i5812.bearing = i5813[2]
  i5812.glyphWidth = i5813[3]
  i5812.glyphHeight = i5813[4]
  i5812.minX = i5813[5]
  i5812.maxX = i5813[6]
  i5812.minY = i5813[7]
  i5812.maxY = i5813[8]
  i5812.uvBottomLeftX = i5813[9]
  i5812.uvBottomLeftY = i5813[10]
  i5812.uvBottomRightX = i5813[11]
  i5812.uvBottomRightY = i5813[12]
  i5812.uvTopLeftX = i5813[13]
  i5812.uvTopLeftY = i5813[14]
  i5812.uvTopRightX = i5813[15]
  i5812.uvTopRightY = i5813[16]
  return i5812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5815 = data
  i5814.name = i5815[0]
  var i5817 = i5815[1]
  var i5816 = []
  for(var i = 0; i < i5817.length; i += 1) {
    i5816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5817[i + 0]) );
  }
  i5814.layers = i5816
  var i5819 = i5815[2]
  var i5818 = []
  for(var i = 0; i < i5819.length; i += 1) {
    i5818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5819[i + 0]) );
  }
  i5814.parameters = i5818
  i5814.animationClips = i5815[3]
  i5814.avatarUnsupported = i5815[4]
  return i5814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5823 = data
  i5822.name = i5823[0]
  i5822.defaultWeight = i5823[1]
  i5822.blendingMode = i5823[2]
  i5822.avatarMask = i5823[3]
  i5822.syncedLayerIndex = i5823[4]
  i5822.syncedLayerAffectsTiming = !!i5823[5]
  i5822.syncedLayers = i5823[6]
  i5822.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5823[7], i5822.stateMachine)
  return i5822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5825 = data
  i5824.id = i5825[0]
  i5824.name = i5825[1]
  i5824.path = i5825[2]
  var i5827 = i5825[3]
  var i5826 = []
  for(var i = 0; i < i5827.length; i += 1) {
    i5826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5827[i + 0]) );
  }
  i5824.states = i5826
  var i5829 = i5825[4]
  var i5828 = []
  for(var i = 0; i < i5829.length; i += 1) {
    i5828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5829[i + 0]) );
  }
  i5824.machines = i5828
  var i5831 = i5825[5]
  var i5830 = []
  for(var i = 0; i < i5831.length; i += 1) {
    i5830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5831[i + 0]) );
  }
  i5824.entryStateTransitions = i5830
  var i5833 = i5825[6]
  var i5832 = []
  for(var i = 0; i < i5833.length; i += 1) {
    i5832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5833[i + 0]) );
  }
  i5824.exitStateTransitions = i5832
  var i5835 = i5825[7]
  var i5834 = []
  for(var i = 0; i < i5835.length; i += 1) {
    i5834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5835[i + 0]) );
  }
  i5824.anyStateTransitions = i5834
  i5824.defaultStateId = i5825[8]
  return i5824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5839 = data
  i5838.id = i5839[0]
  i5838.name = i5839[1]
  i5838.cycleOffset = i5839[2]
  i5838.cycleOffsetParameter = i5839[3]
  i5838.cycleOffsetParameterActive = !!i5839[4]
  i5838.mirror = !!i5839[5]
  i5838.mirrorParameter = i5839[6]
  i5838.mirrorParameterActive = !!i5839[7]
  i5838.motionId = i5839[8]
  i5838.nameHash = i5839[9]
  i5838.fullPathHash = i5839[10]
  i5838.speed = i5839[11]
  i5838.speedParameter = i5839[12]
  i5838.speedParameterActive = !!i5839[13]
  i5838.tag = i5839[14]
  i5838.tagHash = i5839[15]
  i5838.writeDefaultValues = !!i5839[16]
  var i5841 = i5839[17]
  var i5840 = []
  for(var i = 0; i < i5841.length; i += 2) {
  request.r(i5841[i + 0], i5841[i + 1], 2, i5840, '')
  }
  i5838.behaviours = i5840
  var i5843 = i5839[18]
  var i5842 = []
  for(var i = 0; i < i5843.length; i += 1) {
    i5842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5843[i + 0]) );
  }
  i5838.transitions = i5842
  return i5838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5849 = data
  i5848.fullPath = i5849[0]
  i5848.canTransitionToSelf = !!i5849[1]
  i5848.duration = i5849[2]
  i5848.exitTime = i5849[3]
  i5848.hasExitTime = !!i5849[4]
  i5848.hasFixedDuration = !!i5849[5]
  i5848.interruptionSource = i5849[6]
  i5848.offset = i5849[7]
  i5848.orderedInterruption = !!i5849[8]
  i5848.destinationStateId = i5849[9]
  i5848.isExit = !!i5849[10]
  i5848.mute = !!i5849[11]
  i5848.solo = !!i5849[12]
  var i5851 = i5849[13]
  var i5850 = []
  for(var i = 0; i < i5851.length; i += 1) {
    i5850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5851[i + 0]) );
  }
  i5848.conditions = i5850
  return i5848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5857 = data
  i5856.destinationStateId = i5857[0]
  i5856.isExit = !!i5857[1]
  i5856.mute = !!i5857[2]
  i5856.solo = !!i5857[3]
  var i5859 = i5857[4]
  var i5858 = []
  for(var i = 0; i < i5859.length; i += 1) {
    i5858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5859[i + 0]) );
  }
  i5856.conditions = i5858
  return i5856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5863 = data
  i5862.defaultBool = !!i5863[0]
  i5862.defaultFloat = i5863[1]
  i5862.defaultInt = i5863[2]
  i5862.name = i5863[3]
  i5862.nameHash = i5863[4]
  i5862.type = i5863[5]
  return i5862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5867 = data
  i5866.mode = i5867[0]
  i5866.parameter = i5867[1]
  i5866.threshold = i5867[2]
  return i5866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5869 = data
  i5868.name = i5869[0]
  i5868.bytes64 = i5869[1]
  i5868.data = i5869[2]
  return i5868
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5870 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5871 = data
  i5870.hashCode = i5871[0]
  request.r(i5871[1], i5871[2], 0, i5870, 'material')
  i5870.materialHashCode = i5871[3]
  request.r(i5871[4], i5871[5], 0, i5870, 'atlas')
  i5870.normalStyle = i5871[6]
  i5870.normalSpacingOffset = i5871[7]
  i5870.boldStyle = i5871[8]
  i5870.boldSpacing = i5871[9]
  i5870.italicStyle = i5871[10]
  i5870.tabSize = i5871[11]
  i5870.m_Version = i5871[12]
  i5870.m_SourceFontFileGUID = i5871[13]
  request.r(i5871[14], i5871[15], 0, i5870, 'm_SourceFontFile_EditorRef')
  request.r(i5871[16], i5871[17], 0, i5870, 'm_SourceFontFile')
  i5870.m_AtlasPopulationMode = i5871[18]
  i5870.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5871[19], i5870.m_FaceInfo)
  var i5873 = i5871[20]
  var i5872 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5873.length; i += 1) {
    i5872.add(request.d('UnityEngine.TextCore.Glyph', i5873[i + 0]));
  }
  i5870.m_GlyphTable = i5872
  var i5875 = i5871[21]
  var i5874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5875.length; i += 1) {
    i5874.add(request.d('TMPro.TMP_Character', i5875[i + 0]));
  }
  i5870.m_CharacterTable = i5874
  var i5877 = i5871[22]
  var i5876 = []
  for(var i = 0; i < i5877.length; i += 2) {
  request.r(i5877[i + 0], i5877[i + 1], 2, i5876, '')
  }
  i5870.m_AtlasTextures = i5876
  i5870.m_AtlasTextureIndex = i5871[23]
  i5870.m_IsMultiAtlasTexturesEnabled = !!i5871[24]
  i5870.m_ClearDynamicDataOnBuild = !!i5871[25]
  var i5879 = i5871[26]
  var i5878 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5879.length; i += 1) {
    i5878.add(request.d('UnityEngine.TextCore.GlyphRect', i5879[i + 0]));
  }
  i5870.m_UsedGlyphRects = i5878
  var i5881 = i5871[27]
  var i5880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5881.length; i += 1) {
    i5880.add(request.d('UnityEngine.TextCore.GlyphRect', i5881[i + 0]));
  }
  i5870.m_FreeGlyphRects = i5880
  i5870.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5871[28], i5870.m_fontInfo)
  i5870.m_AtlasWidth = i5871[29]
  i5870.m_AtlasHeight = i5871[30]
  i5870.m_AtlasPadding = i5871[31]
  i5870.m_AtlasRenderMode = i5871[32]
  var i5883 = i5871[33]
  var i5882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5883.length; i += 1) {
    i5882.add(request.d('TMPro.TMP_Glyph', i5883[i + 0]));
  }
  i5870.m_glyphInfoList = i5882
  i5870.m_KerningTable = request.d('TMPro.KerningTable', i5871[34], i5870.m_KerningTable)
  i5870.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5871[35], i5870.m_FontFeatureTable)
  var i5885 = i5871[36]
  var i5884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5885.length; i += 2) {
  request.r(i5885[i + 0], i5885[i + 1], 1, i5884, '')
  }
  i5870.fallbackFontAssets = i5884
  var i5887 = i5871[37]
  var i5886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5887.length; i += 2) {
  request.r(i5887[i + 0], i5887[i + 1], 1, i5886, '')
  }
  i5870.m_FallbackFontAssetTable = i5886
  i5870.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5871[38], i5870.m_CreationSettings)
  var i5889 = i5871[39]
  var i5888 = []
  for(var i = 0; i < i5889.length; i += 1) {
    i5888.push( request.d('TMPro.TMP_FontWeightPair', i5889[i + 0]) );
  }
  i5870.m_FontWeightTable = i5888
  var i5891 = i5871[40]
  var i5890 = []
  for(var i = 0; i < i5891.length; i += 1) {
    i5890.push( request.d('TMPro.TMP_FontWeightPair', i5891[i + 0]) );
  }
  i5870.fontWeights = i5890
  return i5870
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5892 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5893 = data
  i5892.m_FaceIndex = i5893[0]
  i5892.m_FamilyName = i5893[1]
  i5892.m_StyleName = i5893[2]
  i5892.m_PointSize = i5893[3]
  i5892.m_Scale = i5893[4]
  i5892.m_UnitsPerEM = i5893[5]
  i5892.m_LineHeight = i5893[6]
  i5892.m_AscentLine = i5893[7]
  i5892.m_CapLine = i5893[8]
  i5892.m_MeanLine = i5893[9]
  i5892.m_Baseline = i5893[10]
  i5892.m_DescentLine = i5893[11]
  i5892.m_SuperscriptOffset = i5893[12]
  i5892.m_SuperscriptSize = i5893[13]
  i5892.m_SubscriptOffset = i5893[14]
  i5892.m_SubscriptSize = i5893[15]
  i5892.m_UnderlineOffset = i5893[16]
  i5892.m_UnderlineThickness = i5893[17]
  i5892.m_StrikethroughOffset = i5893[18]
  i5892.m_StrikethroughThickness = i5893[19]
  i5892.m_TabWidth = i5893[20]
  return i5892
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5896 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5897 = data
  i5896.m_Index = i5897[0]
  i5896.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5897[1], i5896.m_Metrics)
  i5896.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5897[2], i5896.m_GlyphRect)
  i5896.m_Scale = i5897[3]
  i5896.m_AtlasIndex = i5897[4]
  i5896.m_ClassDefinitionType = i5897[5]
  return i5896
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5898 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5899 = data
  i5898.m_Width = i5899[0]
  i5898.m_Height = i5899[1]
  i5898.m_HorizontalBearingX = i5899[2]
  i5898.m_HorizontalBearingY = i5899[3]
  i5898.m_HorizontalAdvance = i5899[4]
  return i5898
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5900 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5901 = data
  i5900.m_X = i5901[0]
  i5900.m_Y = i5901[1]
  i5900.m_Width = i5901[2]
  i5900.m_Height = i5901[3]
  return i5900
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5904 = root || request.c( 'TMPro.TMP_Character' )
  var i5905 = data
  i5904.m_ElementType = i5905[0]
  i5904.m_Unicode = i5905[1]
  i5904.m_GlyphIndex = i5905[2]
  i5904.m_Scale = i5905[3]
  return i5904
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5910 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5911 = data
  i5910.Name = i5911[0]
  i5910.PointSize = i5911[1]
  i5910.Scale = i5911[2]
  i5910.CharacterCount = i5911[3]
  i5910.LineHeight = i5911[4]
  i5910.Baseline = i5911[5]
  i5910.Ascender = i5911[6]
  i5910.CapHeight = i5911[7]
  i5910.Descender = i5911[8]
  i5910.CenterLine = i5911[9]
  i5910.SuperscriptOffset = i5911[10]
  i5910.SubscriptOffset = i5911[11]
  i5910.SubSize = i5911[12]
  i5910.Underline = i5911[13]
  i5910.UnderlineThickness = i5911[14]
  i5910.strikethrough = i5911[15]
  i5910.strikethroughThickness = i5911[16]
  i5910.TabWidth = i5911[17]
  i5910.Padding = i5911[18]
  i5910.AtlasWidth = i5911[19]
  i5910.AtlasHeight = i5911[20]
  return i5910
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5914 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5915 = data
  i5914.id = i5915[0]
  i5914.x = i5915[1]
  i5914.y = i5915[2]
  i5914.width = i5915[3]
  i5914.height = i5915[4]
  i5914.xOffset = i5915[5]
  i5914.yOffset = i5915[6]
  i5914.xAdvance = i5915[7]
  i5914.scale = i5915[8]
  return i5914
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5916 = root || request.c( 'TMPro.KerningTable' )
  var i5917 = data
  var i5919 = i5917[0]
  var i5918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5919.length; i += 1) {
    i5918.add(request.d('TMPro.KerningPair', i5919[i + 0]));
  }
  i5916.kerningPairs = i5918
  return i5916
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5922 = root || request.c( 'TMPro.KerningPair' )
  var i5923 = data
  i5922.xOffset = i5923[0]
  i5922.m_FirstGlyph = i5923[1]
  i5922.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5923[2], i5922.m_FirstGlyphAdjustments)
  i5922.m_SecondGlyph = i5923[3]
  i5922.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5923[4], i5922.m_SecondGlyphAdjustments)
  i5922.m_IgnoreSpacingAdjustments = !!i5923[5]
  return i5922
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5924 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5925 = data
  var i5927 = i5925[0]
  var i5926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5927.length; i += 1) {
    i5926.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i5927[i + 0]));
  }
  i5924.m_GlyphPairAdjustmentRecords = i5926
  return i5924
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5930 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i5931 = data
  i5930.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5931[0], i5930.m_FirstAdjustmentRecord)
  i5930.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5931[1], i5930.m_SecondAdjustmentRecord)
  i5930.m_FeatureLookupFlags = i5931[2]
  return i5930
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5932 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i5933 = data
  i5932.m_GlyphIndex = i5933[0]
  i5932.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i5933[1], i5932.m_GlyphValueRecord)
  return i5932
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i5934 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i5935 = data
  i5934.m_XPlacement = i5935[0]
  i5934.m_YPlacement = i5935[1]
  i5934.m_XAdvance = i5935[2]
  i5934.m_YAdvance = i5935[3]
  return i5934
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5938 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5939 = data
  i5938.sourceFontFileName = i5939[0]
  i5938.sourceFontFileGUID = i5939[1]
  i5938.pointSizeSamplingMode = i5939[2]
  i5938.pointSize = i5939[3]
  i5938.padding = i5939[4]
  i5938.packingMode = i5939[5]
  i5938.atlasWidth = i5939[6]
  i5938.atlasHeight = i5939[7]
  i5938.characterSetSelectionMode = i5939[8]
  i5938.characterSequence = i5939[9]
  i5938.referencedFontAssetGUID = i5939[10]
  i5938.referencedTextAssetGUID = i5939[11]
  i5938.fontStyle = i5939[12]
  i5938.fontStyleModifier = i5939[13]
  i5938.renderMode = i5939[14]
  i5938.includeFontFeatures = !!i5939[15]
  return i5938
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5942 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5943 = data
  request.r(i5943[0], i5943[1], 0, i5942, 'regularTypeface')
  request.r(i5943[2], i5943[3], 0, i5942, 'italicTypeface')
  return i5942
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5944 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5945 = data
  i5944.useSafeMode = !!i5945[0]
  i5944.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5945[1], i5944.safeModeOptions)
  i5944.timeScale = i5945[2]
  i5944.unscaledTimeScale = i5945[3]
  i5944.useSmoothDeltaTime = !!i5945[4]
  i5944.maxSmoothUnscaledTime = i5945[5]
  i5944.rewindCallbackMode = i5945[6]
  i5944.showUnityEditorReport = !!i5945[7]
  i5944.logBehaviour = i5945[8]
  i5944.drawGizmos = !!i5945[9]
  i5944.defaultRecyclable = !!i5945[10]
  i5944.defaultAutoPlay = i5945[11]
  i5944.defaultUpdateType = i5945[12]
  i5944.defaultTimeScaleIndependent = !!i5945[13]
  i5944.defaultEaseType = i5945[14]
  i5944.defaultEaseOvershootOrAmplitude = i5945[15]
  i5944.defaultEasePeriod = i5945[16]
  i5944.defaultAutoKill = !!i5945[17]
  i5944.defaultLoopType = i5945[18]
  i5944.debugMode = !!i5945[19]
  i5944.debugStoreTargetId = !!i5945[20]
  i5944.showPreviewPanel = !!i5945[21]
  i5944.storeSettingsLocation = i5945[22]
  i5944.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5945[23], i5944.modules)
  i5944.createASMDEF = !!i5945[24]
  i5944.showPlayingTweens = !!i5945[25]
  i5944.showPausedTweens = !!i5945[26]
  return i5944
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5946 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5947 = data
  i5946.logBehaviour = i5947[0]
  i5946.nestedTweenFailureBehaviour = i5947[1]
  return i5946
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5948 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5949 = data
  i5948.showPanel = !!i5949[0]
  i5948.audioEnabled = !!i5949[1]
  i5948.physicsEnabled = !!i5949[2]
  i5948.physics2DEnabled = !!i5949[3]
  i5948.spriteEnabled = !!i5949[4]
  i5948.uiEnabled = !!i5949[5]
  i5948.textMeshProEnabled = !!i5949[6]
  i5948.tk2DEnabled = !!i5949[7]
  i5948.deAudioEnabled = !!i5949[8]
  i5948.deUnityExtendedEnabled = !!i5949[9]
  i5948.epoOutlineEnabled = !!i5949[10]
  return i5948
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5950 = root || request.c( 'TMPro.TMP_Settings' )
  var i5951 = data
  i5950.m_enableWordWrapping = !!i5951[0]
  i5950.m_enableKerning = !!i5951[1]
  i5950.m_enableExtraPadding = !!i5951[2]
  i5950.m_enableTintAllSprites = !!i5951[3]
  i5950.m_enableParseEscapeCharacters = !!i5951[4]
  i5950.m_EnableRaycastTarget = !!i5951[5]
  i5950.m_GetFontFeaturesAtRuntime = !!i5951[6]
  i5950.m_missingGlyphCharacter = i5951[7]
  i5950.m_warningsDisabled = !!i5951[8]
  request.r(i5951[9], i5951[10], 0, i5950, 'm_defaultFontAsset')
  i5950.m_defaultFontAssetPath = i5951[11]
  i5950.m_defaultFontSize = i5951[12]
  i5950.m_defaultAutoSizeMinRatio = i5951[13]
  i5950.m_defaultAutoSizeMaxRatio = i5951[14]
  i5950.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5951[15], i5951[16] )
  i5950.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5951[17], i5951[18] )
  i5950.m_autoSizeTextContainer = !!i5951[19]
  i5950.m_IsTextObjectScaleStatic = !!i5951[20]
  var i5953 = i5951[21]
  var i5952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5953.length; i += 2) {
  request.r(i5953[i + 0], i5953[i + 1], 1, i5952, '')
  }
  i5950.m_fallbackFontAssets = i5952
  i5950.m_matchMaterialPreset = !!i5951[22]
  request.r(i5951[23], i5951[24], 0, i5950, 'm_defaultSpriteAsset')
  i5950.m_defaultSpriteAssetPath = i5951[25]
  i5950.m_enableEmojiSupport = !!i5951[26]
  i5950.m_MissingCharacterSpriteUnicode = i5951[27]
  i5950.m_defaultColorGradientPresetsPath = i5951[28]
  request.r(i5951[29], i5951[30], 0, i5950, 'm_defaultStyleSheet')
  i5950.m_StyleSheetsResourcePath = i5951[31]
  request.r(i5951[32], i5951[33], 0, i5950, 'm_leadingCharacters')
  request.r(i5951[34], i5951[35], 0, i5950, 'm_followingCharacters')
  i5950.m_UseModernHangulLineBreakingRules = !!i5951[36]
  return i5950
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5954 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5955 = data
  i5954.hashCode = i5955[0]
  request.r(i5955[1], i5955[2], 0, i5954, 'material')
  i5954.materialHashCode = i5955[3]
  request.r(i5955[4], i5955[5], 0, i5954, 'spriteSheet')
  var i5957 = i5955[6]
  var i5956 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5957.length; i += 1) {
    i5956.add(request.d('TMPro.TMP_Sprite', i5957[i + 0]));
  }
  i5954.spriteInfoList = i5956
  var i5959 = i5955[7]
  var i5958 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5959.length; i += 2) {
  request.r(i5959[i + 0], i5959[i + 1], 1, i5958, '')
  }
  i5954.fallbackSpriteAssets = i5958
  i5954.m_Version = i5955[8]
  i5954.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5955[9], i5954.m_FaceInfo)
  var i5961 = i5955[10]
  var i5960 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5961.length; i += 1) {
    i5960.add(request.d('TMPro.TMP_SpriteCharacter', i5961[i + 0]));
  }
  i5954.m_SpriteCharacterTable = i5960
  var i5963 = i5955[11]
  var i5962 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5963.length; i += 1) {
    i5962.add(request.d('TMPro.TMP_SpriteGlyph', i5963[i + 0]));
  }
  i5954.m_SpriteGlyphTable = i5962
  return i5954
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5966 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5967 = data
  i5966.name = i5967[0]
  i5966.hashCode = i5967[1]
  i5966.unicode = i5967[2]
  i5966.pivot = new pc.Vec2( i5967[3], i5967[4] )
  request.r(i5967[5], i5967[6], 0, i5966, 'sprite')
  i5966.id = i5967[7]
  i5966.x = i5967[8]
  i5966.y = i5967[9]
  i5966.width = i5967[10]
  i5966.height = i5967[11]
  i5966.xOffset = i5967[12]
  i5966.yOffset = i5967[13]
  i5966.xAdvance = i5967[14]
  i5966.scale = i5967[15]
  return i5966
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5972 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5973 = data
  i5972.m_Name = i5973[0]
  i5972.m_HashCode = i5973[1]
  i5972.m_ElementType = i5973[2]
  i5972.m_Unicode = i5973[3]
  i5972.m_GlyphIndex = i5973[4]
  i5972.m_Scale = i5973[5]
  return i5972
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5976 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5977 = data
  request.r(i5977[0], i5977[1], 0, i5976, 'sprite')
  i5976.m_Index = i5977[2]
  i5976.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5977[3], i5976.m_Metrics)
  i5976.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5977[4], i5976.m_GlyphRect)
  i5976.m_Scale = i5977[5]
  i5976.m_AtlasIndex = i5977[6]
  i5976.m_ClassDefinitionType = i5977[7]
  return i5976
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5978 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5979 = data
  var i5981 = i5979[0]
  var i5980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5981.length; i += 1) {
    i5980.add(request.d('TMPro.TMP_Style', i5981[i + 0]));
  }
  i5978.m_StyleList = i5980
  return i5978
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5984 = root || request.c( 'TMPro.TMP_Style' )
  var i5985 = data
  i5984.m_Name = i5985[0]
  i5984.m_HashCode = i5985[1]
  i5984.m_OpeningDefinition = i5985[2]
  i5984.m_ClosingDefinition = i5985[3]
  i5984.m_OpeningTagArray = i5985[4]
  i5984.m_ClosingTagArray = i5985[5]
  i5984.m_OpeningTagUnicodeArray = i5985[6]
  i5984.m_ClosingTagUnicodeArray = i5985[7]
  return i5984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5987 = data
  var i5989 = i5987[0]
  var i5988 = []
  for(var i = 0; i < i5989.length; i += 1) {
    i5988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5989[i + 0]) );
  }
  i5986.files = i5988
  i5986.componentToPrefabIds = i5987[1]
  return i5986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5993 = data
  i5992.path = i5993[0]
  request.r(i5993[1], i5993[2], 0, i5992, 'unityObject')
  return i5992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5995 = data
  var i5997 = i5995[0]
  var i5996 = []
  for(var i = 0; i < i5997.length; i += 1) {
    i5996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5997[i + 0]) );
  }
  i5994.scriptsExecutionOrder = i5996
  var i5999 = i5995[1]
  var i5998 = []
  for(var i = 0; i < i5999.length; i += 1) {
    i5998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5999[i + 0]) );
  }
  i5994.sortingLayers = i5998
  var i6001 = i5995[2]
  var i6000 = []
  for(var i = 0; i < i6001.length; i += 1) {
    i6000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6001[i + 0]) );
  }
  i5994.cullingLayers = i6000
  i5994.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5995[3], i5994.timeSettings)
  i5994.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5995[4], i5994.physicsSettings)
  i5994.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5995[5], i5994.physics2DSettings)
  i5994.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5995[6], i5994.qualitySettings)
  i5994.enableRealtimeShadows = !!i5995[7]
  i5994.enableAutoInstancing = !!i5995[8]
  i5994.enableDynamicBatching = !!i5995[9]
  i5994.lightmapEncodingQuality = i5995[10]
  i5994.desiredColorSpace = i5995[11]
  var i6003 = i5995[12]
  var i6002 = []
  for(var i = 0; i < i6003.length; i += 1) {
    i6002.push( i6003[i + 0] );
  }
  i5994.allTags = i6002
  return i5994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6007 = data
  i6006.name = i6007[0]
  i6006.value = i6007[1]
  return i6006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6011 = data
  i6010.id = i6011[0]
  i6010.name = i6011[1]
  i6010.value = i6011[2]
  return i6010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6015 = data
  i6014.id = i6015[0]
  i6014.name = i6015[1]
  return i6014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6017 = data
  i6016.fixedDeltaTime = i6017[0]
  i6016.maximumDeltaTime = i6017[1]
  i6016.timeScale = i6017[2]
  i6016.maximumParticleTimestep = i6017[3]
  return i6016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6019 = data
  i6018.gravity = new pc.Vec3( i6019[0], i6019[1], i6019[2] )
  i6018.defaultSolverIterations = i6019[3]
  i6018.bounceThreshold = i6019[4]
  i6018.autoSyncTransforms = !!i6019[5]
  i6018.autoSimulation = !!i6019[6]
  var i6021 = i6019[7]
  var i6020 = []
  for(var i = 0; i < i6021.length; i += 1) {
    i6020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6021[i + 0]) );
  }
  i6018.collisionMatrix = i6020
  return i6018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6025 = data
  i6024.enabled = !!i6025[0]
  i6024.layerId = i6025[1]
  i6024.otherLayerId = i6025[2]
  return i6024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6027 = data
  request.r(i6027[0], i6027[1], 0, i6026, 'material')
  i6026.gravity = new pc.Vec2( i6027[2], i6027[3] )
  i6026.positionIterations = i6027[4]
  i6026.velocityIterations = i6027[5]
  i6026.velocityThreshold = i6027[6]
  i6026.maxLinearCorrection = i6027[7]
  i6026.maxAngularCorrection = i6027[8]
  i6026.maxTranslationSpeed = i6027[9]
  i6026.maxRotationSpeed = i6027[10]
  i6026.baumgarteScale = i6027[11]
  i6026.baumgarteTOIScale = i6027[12]
  i6026.timeToSleep = i6027[13]
  i6026.linearSleepTolerance = i6027[14]
  i6026.angularSleepTolerance = i6027[15]
  i6026.defaultContactOffset = i6027[16]
  i6026.autoSimulation = !!i6027[17]
  i6026.queriesHitTriggers = !!i6027[18]
  i6026.queriesStartInColliders = !!i6027[19]
  i6026.callbacksOnDisable = !!i6027[20]
  i6026.reuseCollisionCallbacks = !!i6027[21]
  i6026.autoSyncTransforms = !!i6027[22]
  var i6029 = i6027[23]
  var i6028 = []
  for(var i = 0; i < i6029.length; i += 1) {
    i6028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6029[i + 0]) );
  }
  i6026.collisionMatrix = i6028
  return i6026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6033 = data
  i6032.enabled = !!i6033[0]
  i6032.layerId = i6033[1]
  i6032.otherLayerId = i6033[2]
  return i6032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6035 = data
  var i6037 = i6035[0]
  var i6036 = []
  for(var i = 0; i < i6037.length; i += 1) {
    i6036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6037[i + 0]) );
  }
  i6034.qualityLevels = i6036
  var i6039 = i6035[1]
  var i6038 = []
  for(var i = 0; i < i6039.length; i += 1) {
    i6038.push( i6039[i + 0] );
  }
  i6034.names = i6038
  i6034.shadows = i6035[2]
  i6034.anisotropicFiltering = i6035[3]
  i6034.antiAliasing = i6035[4]
  i6034.lodBias = i6035[5]
  i6034.shadowCascades = i6035[6]
  i6034.shadowDistance = i6035[7]
  i6034.shadowmaskMode = i6035[8]
  i6034.shadowProjection = i6035[9]
  i6034.shadowResolution = i6035[10]
  i6034.softParticles = !!i6035[11]
  i6034.softVegetation = !!i6035[12]
  i6034.activeColorSpace = i6035[13]
  i6034.desiredColorSpace = i6035[14]
  i6034.masterTextureLimit = i6035[15]
  i6034.maxQueuedFrames = i6035[16]
  i6034.particleRaycastBudget = i6035[17]
  i6034.pixelLightCount = i6035[18]
  i6034.realtimeReflectionProbes = !!i6035[19]
  i6034.shadowCascade2Split = i6035[20]
  i6034.shadowCascade4Split = new pc.Vec3( i6035[21], i6035[22], i6035[23] )
  i6034.streamingMipmapsActive = !!i6035[24]
  i6034.vSyncCount = i6035[25]
  i6034.asyncUploadBufferSize = i6035[26]
  i6034.asyncUploadTimeSlice = i6035[27]
  i6034.billboardsFaceCameraPosition = !!i6035[28]
  i6034.shadowNearPlaneOffset = i6035[29]
  i6034.streamingMipmapsMemoryBudget = i6035[30]
  i6034.maximumLODLevel = i6035[31]
  i6034.streamingMipmapsAddAllCameras = !!i6035[32]
  i6034.streamingMipmapsMaxLevelReduction = i6035[33]
  i6034.streamingMipmapsRenderersPerFrame = i6035[34]
  i6034.resolutionScalingFixedDPIFactor = i6035[35]
  i6034.streamingMipmapsMaxFileIORequests = i6035[36]
  i6034.currentQualityLevel = i6035[37]
  return i6034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6045 = data
  i6044.weight = i6045[0]
  i6044.vertices = i6045[1]
  i6044.normals = i6045[2]
  i6044.tangents = i6045[3]
  return i6044
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i6046 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i6047 = data
  i6046.xPlacement = i6047[0]
  i6046.yPlacement = i6047[1]
  i6046.xAdvance = i6047[2]
  i6046.yAdvance = i6047[3]
  return i6046
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[73],"74":[20],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[76],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[20],"98":[15],"99":[100],"101":[100],"48":[25],"102":[103],"104":[105],"53":[52],"106":[10],"107":[25],"108":[109],"103":[25],"110":[25],"50":[48],"39":[37,25],"111":[25],"49":[48],"112":[25],"113":[25],"114":[25],"115":[25],"116":[25],"117":[25],"118":[25],"119":[25],"120":[25],"121":[37,25],"122":[25],"123":[25],"124":[25],"125":[25],"105":[37,25],"126":[25],"127":[57],"128":[57],"58":[57],"129":[57],"130":[20],"131":[20],"132":[109],"133":[25],"134":[15,25],"52":[25,37],"135":[25],"136":[37,25],"137":[15],"138":[37,25],"139":[25],"140":[109],"141":[20],"142":[143]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","_InGame.Scripts.Managers.GameManager","GameStateManager","_InGame.Scripts.Managers.DrawingManager","_InGame.Scripts.DrawContollers.DrawingController","_InGame.Scripts.DrawContollers.DrawPointBase","UnityEngine.LineRenderer","UnityEngine.Material","_InGame.Scripts.DrawContollers.DrawPointGenerator","PathCreation.PathCreator","PathCreation.Examples.RoadMeshCreator","UnityEngine.GameObject","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Shader","PlayableAdsTool.CameraManager","UnityEngine.Camera","UnityEngine.AudioListener","Cinemachine.CinemachineBrain","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","UnityEngine.RectTransform","_InGame.Scripts.Managers.TutorialManager","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","TutorialAnimationHelper","PlayableAdsTool.LocalizationController","UnityEngine.TextAsset","TMPro.TMP_FontAsset","UnityEngine.Texture2D","_InGame.Scripts.Utilities.PrefabHolder","PlayableAdsTool.ResponsiveManager","PlayableAdsTool.EndCardController","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","PlayableAdsTool.AudioManager","UnityEngine.AudioClip","UnityEngine.AudioSource","PlayableAdsTool.AudioSourceContainer","PlayableAdsTool.ObjectPoolManager","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","TMPro.TextMeshProUGUI","PlayableAdsTool.LocalizedTextTMP","_InGame.Scripts.Others.FillSliderController","FeedbackPanelController","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","PlayableAdsTool.LocalizedDropdown","UnityEngine.UI.Dropdown","PlayableAdsTool.LocalizedText","UnityEngine.UI.Text","PathCreation.Examples.GeneratePathExample","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.48f1";

Deserializers.productName = "Matchingham-Playable-Case-Project";

Deserializers.lunaInitializationTime = "02/22/2025 14:51:50";

Deserializers.lunaDaysRunning = "1.3";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "Logicus-PF-potionbottle-15sn";

Deserializers.lunaAppID = "27771";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1846";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4759";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d";

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

Deserializers.buildID = "1bd48f11-35bf-4f80-998d-5074bead8c53";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Sirenix","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","UnitySerializationInitializer","InitializeRuntime"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

