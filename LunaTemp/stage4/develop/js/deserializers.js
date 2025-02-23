var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5340 = root || request.c( 'UnityEngine.JointSpring' )
  var i5341 = data
  i5340.spring = i5341[0]
  i5340.damper = i5341[1]
  i5340.targetPosition = i5341[2]
  return i5340
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5342 = root || request.c( 'UnityEngine.JointMotor' )
  var i5343 = data
  i5342.m_TargetVelocity = i5343[0]
  i5342.m_Force = i5343[1]
  i5342.m_FreeSpin = i5343[2]
  return i5342
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5344 = root || request.c( 'UnityEngine.JointLimits' )
  var i5345 = data
  i5344.m_Min = i5345[0]
  i5344.m_Max = i5345[1]
  i5344.m_Bounciness = i5345[2]
  i5344.m_BounceMinVelocity = i5345[3]
  i5344.m_ContactDistance = i5345[4]
  i5344.minBounce = i5345[5]
  i5344.maxBounce = i5345[6]
  return i5344
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5346 = root || request.c( 'UnityEngine.JointDrive' )
  var i5347 = data
  i5346.m_PositionSpring = i5347[0]
  i5346.m_PositionDamper = i5347[1]
  i5346.m_MaximumForce = i5347[2]
  i5346.m_UseAcceleration = i5347[3]
  return i5346
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5348 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5349 = data
  i5348.m_Spring = i5349[0]
  i5348.m_Damper = i5349[1]
  return i5348
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5350 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5351 = data
  i5350.m_Limit = i5351[0]
  i5350.m_Bounciness = i5351[1]
  i5350.m_ContactDistance = i5351[2]
  return i5350
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5352 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5353 = data
  i5352.m_ExtremumSlip = i5353[0]
  i5352.m_ExtremumValue = i5353[1]
  i5352.m_AsymptoteSlip = i5353[2]
  i5352.m_AsymptoteValue = i5353[3]
  i5352.m_Stiffness = i5353[4]
  return i5352
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5354 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5355 = data
  i5354.m_LowerAngle = i5355[0]
  i5354.m_UpperAngle = i5355[1]
  return i5354
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5356 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5357 = data
  i5356.m_MotorSpeed = i5357[0]
  i5356.m_MaximumMotorTorque = i5357[1]
  return i5356
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5358 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5359 = data
  i5358.m_DampingRatio = i5359[0]
  i5358.m_Frequency = i5359[1]
  i5358.m_Angle = i5359[2]
  return i5358
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5360 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5361 = data
  i5360.m_LowerTranslation = i5361[0]
  i5360.m_UpperTranslation = i5361[1]
  return i5360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5363 = data
  i5362.position = new pc.Vec3( i5363[0], i5363[1], i5363[2] )
  i5362.scale = new pc.Vec3( i5363[3], i5363[4], i5363[5] )
  i5362.rotation = new pc.Quat(i5363[6], i5363[7], i5363[8], i5363[9])
  return i5362
}

Deserializers["_InGame.Scripts.Managers.GameManager"] = function (request, data, root) {
  var i5364 = root || request.c( '_InGame.Scripts.Managers.GameManager' )
  var i5365 = data
  return i5364
}

Deserializers["GameStateManager"] = function (request, data, root) {
  var i5366 = root || request.c( 'GameStateManager' )
  var i5367 = data
  i5366.currentStateType = i5367[0]
  return i5366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5369 = data
  i5368.name = i5369[0]
  i5368.tagId = i5369[1]
  i5368.enabled = !!i5369[2]
  i5368.isStatic = !!i5369[3]
  i5368.layer = i5369[4]
  return i5368
}

Deserializers["_InGame.Scripts.Managers.DrawingManager"] = function (request, data, root) {
  var i5370 = root || request.c( '_InGame.Scripts.Managers.DrawingManager' )
  var i5371 = data
  i5370.CurrentDrawingData = request.d('_InGame.Scripts.Managers.DrawingData', i5371[0], i5370.CurrentDrawingData)
  var i5373 = i5371[1]
  var i5372 = new (System.Collections.Generic.List$1(Bridge.ns('_InGame.Scripts.Managers.DrawingData')))
  for(var i = 0; i < i5373.length; i += 1) {
    i5372.add(request.d('_InGame.Scripts.Managers.DrawingData', i5373[i + 0]));
  }
  i5370.LevelDrawingList = i5372
  return i5370
}

Deserializers["_InGame.Scripts.Managers.DrawingData"] = function (request, data, root) {
  var i5374 = root || request.c( '_InGame.Scripts.Managers.DrawingData' )
  var i5375 = data
  i5374.type = i5375[0]
  request.r(i5375[1], i5375[2], 0, i5374, 'Object')
  return i5374
}

Deserializers["_InGame.Scripts.DrawContollers.DrawingController"] = function (request, data, root) {
  var i5378 = root || request.c( '_InGame.Scripts.DrawContollers.DrawingController' )
  var i5379 = data
  var i5381 = i5379[0]
  var i5380 = new (System.Collections.Generic.List$1(Bridge.ns('_InGame.Scripts.DrawContollers.DrawPointBase')))
  for(var i = 0; i < i5381.length; i += 2) {
  request.r(i5381[i + 0], i5381[i + 1], 1, i5380, '')
  }
  i5378.AllDrawPoints = i5380
  var i5383 = i5379[1]
  var i5382 = new (System.Collections.Generic.List$1(Bridge.ns('_InGame.Scripts.DrawContollers.DrawPointBase')))
  for(var i = 0; i < i5383.length; i += 2) {
  request.r(i5383[i + 0], i5383[i + 1], 1, i5382, '')
  }
  i5378.SelectedDrawPoints = i5382
  request.r(i5379[2], i5379[3], 0, i5378, '_lineRenderer')
  return i5378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i5386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i5387 = data
  i5386.textureMode = i5387[0]
  i5386.alignment = i5387[1]
  i5386.widthCurve = new pc.AnimationCurve( { keys_flow: i5387[2] } )
  i5386.colorGradient = i5387[3] ? new pc.ColorGradient(i5387[3][0], i5387[3][1], i5387[3][2]) : null
  var i5389 = i5387[4]
  var i5388 = []
  for(var i = 0; i < i5389.length; i += 3) {
    i5388.push( new pc.Vec3( i5389[i + 0], i5389[i + 1], i5389[i + 2] ) );
  }
  i5386.positions = i5388
  i5386.positionCount = i5387[5]
  i5386.widthMultiplier = i5387[6]
  i5386.startWidth = i5387[7]
  i5386.endWidth = i5387[8]
  i5386.numCornerVertices = i5387[9]
  i5386.numCapVertices = i5387[10]
  i5386.useWorldSpace = !!i5387[11]
  i5386.loop = !!i5387[12]
  i5386.startColor = new pc.Color(i5387[13], i5387[14], i5387[15], i5387[16])
  i5386.endColor = new pc.Color(i5387[17], i5387[18], i5387[19], i5387[20])
  i5386.generateLightingData = !!i5387[21]
  i5386.enabled = !!i5387[22]
  request.r(i5387[23], i5387[24], 0, i5386, 'sharedMaterial')
  var i5391 = i5387[25]
  var i5390 = []
  for(var i = 0; i < i5391.length; i += 2) {
  request.r(i5391[i + 0], i5391[i + 1], 2, i5390, '')
  }
  i5386.sharedMaterials = i5390
  i5386.receiveShadows = !!i5387[26]
  i5386.shadowCastingMode = i5387[27]
  i5386.sortingLayerID = i5387[28]
  i5386.sortingOrder = i5387[29]
  i5386.lightmapIndex = i5387[30]
  i5386.lightmapSceneIndex = i5387[31]
  i5386.lightmapScaleOffset = new pc.Vec4( i5387[32], i5387[33], i5387[34], i5387[35] )
  i5386.lightProbeUsage = i5387[36]
  i5386.reflectionProbeUsage = i5387[37]
  return i5386
}

Deserializers["_InGame.Scripts.DrawContollers.DrawPointGenerator"] = function (request, data, root) {
  var i5396 = root || request.c( '_InGame.Scripts.DrawContollers.DrawPointGenerator' )
  var i5397 = data
  request.r(i5397[0], i5397[1], 0, i5396, '_drawingController')
  request.r(i5397[2], i5397[3], 0, i5396, '_pathCreator')
  i5396.HowManyPoints = i5397[4]
  var i5399 = i5397[5]
  var i5398 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i5399.length; i += 3) {
    i5398.add(new pc.Vec3( i5399[i + 0], i5399[i + 1], i5399[i + 2] ));
  }
  i5396.GizmoPoints = i5398
  return i5396
}

Deserializers["_InGame.Scripts.DrawContollers.DrawPointBase"] = function (request, data, root) {
  var i5402 = root || request.c( '_InGame.Scripts.DrawContollers.DrawPointBase' )
  var i5403 = data
  i5402._drawPointType = i5403[0]
  i5402.MaxConnectionCount = i5403[1]
  i5402.PointConnectionCount = i5403[2]
  var i5405 = i5403[3]
  var i5404 = new (System.Collections.Generic.List$1(Bridge.ns('_InGame.Scripts.DrawContollers.DrawPointBase')))
  for(var i = 0; i < i5405.length; i += 2) {
  request.r(i5405[i + 0], i5405[i + 1], 1, i5404, '')
  }
  i5402.BorderDrawPoints = i5404
  return i5402
}

Deserializers["PathCreation.PathCreator"] = function (request, data, root) {
  var i5406 = root || request.c( 'PathCreation.PathCreator' )
  var i5407 = data
  i5406.editorData = request.d('PathCreation.PathCreatorData', i5407[0], i5406.editorData)
  i5406.initialized = !!i5407[1]
  return i5406
}

Deserializers["PathCreation.PathCreatorData"] = function (request, data, root) {
  var i5408 = root || request.c( 'PathCreation.PathCreatorData' )
  var i5409 = data
  i5408.vertexPathMaxAngleError = i5409[0]
  i5408.vertexPathMinVertexSpacing = i5409[1]
  i5408.showTransformTool = !!i5409[2]
  i5408.showPathBounds = !!i5409[3]
  i5408.showPerSegmentBounds = !!i5409[4]
  i5408.displayAnchorPoints = !!i5409[5]
  i5408.displayControlPoints = !!i5409[6]
  i5408.bezierHandleScale = i5409[7]
  i5408.globalDisplaySettingsFoldout = !!i5409[8]
  i5408.keepConstantHandleSize = !!i5409[9]
  i5408.showNormalsInVertexMode = !!i5409[10]
  i5408.showBezierPathInVertexMode = !!i5409[11]
  i5408.showDisplayOptions = !!i5409[12]
  i5408.showPathOptions = !!i5409[13]
  i5408.showVertexPathDisplayOptions = !!i5409[14]
  i5408.showVertexPathOptions = !!i5409[15]
  i5408.showNormals = !!i5409[16]
  i5408.showNormalsHelpInfo = !!i5409[17]
  i5408.tabIndex = i5409[18]
  i5408._bezierPath = request.d('PathCreation.BezierPath', i5409[19], i5408._bezierPath)
  i5408.vertexPathUpToDate = !!i5409[20]
  return i5408
}

Deserializers["PathCreation.BezierPath"] = function (request, data, root) {
  var i5410 = root || request.c( 'PathCreation.BezierPath' )
  var i5411 = data
  var i5413 = i5411[0]
  var i5412 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i5413.length; i += 3) {
    i5412.add(new pc.Vec3( i5413[i + 0], i5413[i + 1], i5413[i + 2] ));
  }
  i5410.points = i5412
  i5410.isClosed = !!i5411[1]
  i5410.space = i5411[2]
  i5410.controlMode = i5411[3]
  i5410.autoControlLength = i5411[4]
  i5410.boundsUpToDate = !!i5411[5]
  var i5415 = i5411[6]
  var i5414 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i5415.length; i += 1) {
    i5414.add(i5415[i + 0]);
  }
  i5410.perAnchorNormalsAngle = i5414
  i5410.globalNormalsAngle = i5411[7]
  i5410.flipNormals = !!i5411[8]
  return i5410
}

Deserializers["PathCreation.Examples.RoadMeshCreator"] = function (request, data, root) {
  var i5418 = root || request.c( 'PathCreation.Examples.RoadMeshCreator' )
  var i5419 = data
  request.r(i5419[0], i5419[1], 0, i5418, 'pathCreator')
  i5418.autoUpdate = !!i5419[2]
  i5418.roadWidth = i5419[3]
  i5418.thickness = i5419[4]
  i5418.flattenSurface = !!i5419[5]
  request.r(i5419[6], i5419[7], 0, i5418, 'roadMaterial')
  request.r(i5419[8], i5419[9], 0, i5418, 'undersideMaterial')
  i5418.textureTiling = i5419[10]
  request.r(i5419[11], i5419[12], 0, i5418, 'meshHolder')
  return i5418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5421 = data
  request.r(i5421[0], i5421[1], 0, i5420, 'sharedMesh')
  return i5420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5423 = data
  request.r(i5423[0], i5423[1], 0, i5422, 'additionalVertexStreams')
  i5422.enabled = !!i5423[2]
  request.r(i5423[3], i5423[4], 0, i5422, 'sharedMaterial')
  var i5425 = i5423[5]
  var i5424 = []
  for(var i = 0; i < i5425.length; i += 2) {
  request.r(i5425[i + 0], i5425[i + 1], 2, i5424, '')
  }
  i5422.sharedMaterials = i5424
  i5422.receiveShadows = !!i5423[6]
  i5422.shadowCastingMode = i5423[7]
  i5422.sortingLayerID = i5423[8]
  i5422.sortingOrder = i5423[9]
  i5422.lightmapIndex = i5423[10]
  i5422.lightmapSceneIndex = i5423[11]
  i5422.lightmapScaleOffset = new pc.Vec4( i5423[12], i5423[13], i5423[14], i5423[15] )
  i5422.lightProbeUsage = i5423[16]
  i5422.reflectionProbeUsage = i5423[17]
  return i5422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5427 = data
  i5426.enabled = !!i5427[0]
  request.r(i5427[1], i5427[2], 0, i5426, 'sharedMaterial')
  var i5429 = i5427[3]
  var i5428 = []
  for(var i = 0; i < i5429.length; i += 2) {
  request.r(i5429[i + 0], i5429[i + 1], 2, i5428, '')
  }
  i5426.sharedMaterials = i5428
  i5426.receiveShadows = !!i5427[4]
  i5426.shadowCastingMode = i5427[5]
  i5426.sortingLayerID = i5427[6]
  i5426.sortingOrder = i5427[7]
  i5426.lightmapIndex = i5427[8]
  i5426.lightmapSceneIndex = i5427[9]
  i5426.lightmapScaleOffset = new pc.Vec4( i5427[10], i5427[11], i5427[12], i5427[13] )
  i5426.lightProbeUsage = i5427[14]
  i5426.reflectionProbeUsage = i5427[15]
  i5426.color = new pc.Color(i5427[16], i5427[17], i5427[18], i5427[19])
  request.r(i5427[20], i5427[21], 0, i5426, 'sprite')
  i5426.flipX = !!i5427[22]
  i5426.flipY = !!i5427[23]
  i5426.drawMode = i5427[24]
  i5426.size = new pc.Vec2( i5427[25], i5427[26] )
  i5426.tileMode = i5427[27]
  i5426.adaptiveModeThreshold = i5427[28]
  i5426.maskInteraction = i5427[29]
  i5426.spriteSortPoint = i5427[30]
  return i5426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5430 = root || new pc.UnityMaterial()
  var i5431 = data
  i5430.name = i5431[0]
  request.r(i5431[1], i5431[2], 0, i5430, 'shader')
  i5430.renderQueue = i5431[3]
  i5430.enableInstancing = !!i5431[4]
  var i5433 = i5431[5]
  var i5432 = []
  for(var i = 0; i < i5433.length; i += 1) {
    i5432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5433[i + 0]) );
  }
  i5430.floatParameters = i5432
  var i5435 = i5431[6]
  var i5434 = []
  for(var i = 0; i < i5435.length; i += 1) {
    i5434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5435[i + 0]) );
  }
  i5430.colorParameters = i5434
  var i5437 = i5431[7]
  var i5436 = []
  for(var i = 0; i < i5437.length; i += 1) {
    i5436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5437[i + 0]) );
  }
  i5430.vectorParameters = i5436
  var i5439 = i5431[8]
  var i5438 = []
  for(var i = 0; i < i5439.length; i += 1) {
    i5438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5439[i + 0]) );
  }
  i5430.textureParameters = i5438
  var i5441 = i5431[9]
  var i5440 = []
  for(var i = 0; i < i5441.length; i += 1) {
    i5440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5441[i + 0]) );
  }
  i5430.materialFlags = i5440
  return i5430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5445 = data
  i5444.name = i5445[0]
  i5444.value = i5445[1]
  return i5444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5449 = data
  i5448.name = i5449[0]
  i5448.value = new pc.Color(i5449[1], i5449[2], i5449[3], i5449[4])
  return i5448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5453 = data
  i5452.name = i5453[0]
  i5452.value = new pc.Vec4( i5453[1], i5453[2], i5453[3], i5453[4] )
  return i5452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5457 = data
  i5456.name = i5457[0]
  request.r(i5457[1], i5457[2], 0, i5456, 'value')
  return i5456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5461 = data
  i5460.name = i5461[0]
  i5460.enabled = !!i5461[1]
  return i5460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5463 = data
  i5462.name = i5463[0]
  i5462.width = i5463[1]
  i5462.height = i5463[2]
  i5462.mipmapCount = i5463[3]
  i5462.anisoLevel = i5463[4]
  i5462.filterMode = i5463[5]
  i5462.hdr = !!i5463[6]
  i5462.format = i5463[7]
  i5462.wrapMode = i5463[8]
  i5462.alphaIsTransparency = !!i5463[9]
  i5462.alphaSource = i5463[10]
  i5462.graphicsFormat = i5463[11]
  i5462.sRGBTexture = !!i5463[12]
  i5462.desiredColorSpace = i5463[13]
  i5462.wrapU = i5463[14]
  i5462.wrapV = i5463[15]
  return i5462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5465 = data
  i5464.name = i5465[0]
  i5464.halfPrecision = !!i5465[1]
  i5464.useUInt32IndexFormat = !!i5465[2]
  i5464.vertexCount = i5465[3]
  i5464.aabb = i5465[4]
  var i5467 = i5465[5]
  var i5466 = []
  for(var i = 0; i < i5467.length; i += 1) {
    i5466.push( !!i5467[i + 0] );
  }
  i5464.streams = i5466
  i5464.vertices = i5465[6]
  var i5469 = i5465[7]
  var i5468 = []
  for(var i = 0; i < i5469.length; i += 1) {
    i5468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5469[i + 0]) );
  }
  i5464.subMeshes = i5468
  var i5471 = i5465[8]
  var i5470 = []
  for(var i = 0; i < i5471.length; i += 16) {
    i5470.push( new pc.Mat4().setData(i5471[i + 0], i5471[i + 1], i5471[i + 2], i5471[i + 3],  i5471[i + 4], i5471[i + 5], i5471[i + 6], i5471[i + 7],  i5471[i + 8], i5471[i + 9], i5471[i + 10], i5471[i + 11],  i5471[i + 12], i5471[i + 13], i5471[i + 14], i5471[i + 15]) );
  }
  i5464.bindposes = i5470
  var i5473 = i5465[9]
  var i5472 = []
  for(var i = 0; i < i5473.length; i += 1) {
    i5472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5473[i + 0]) );
  }
  i5464.blendShapes = i5472
  return i5464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5479 = data
  i5478.triangles = i5479[0]
  return i5478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5485 = data
  i5484.name = i5485[0]
  var i5487 = i5485[1]
  var i5486 = []
  for(var i = 0; i < i5487.length; i += 1) {
    i5486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5487[i + 0]) );
  }
  i5484.frames = i5486
  return i5484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5489 = data
  i5488.pivot = new pc.Vec2( i5489[0], i5489[1] )
  i5488.anchorMin = new pc.Vec2( i5489[2], i5489[3] )
  i5488.anchorMax = new pc.Vec2( i5489[4], i5489[5] )
  i5488.sizeDelta = new pc.Vec2( i5489[6], i5489[7] )
  i5488.anchoredPosition3D = new pc.Vec3( i5489[8], i5489[9], i5489[10] )
  i5488.rotation = new pc.Quat(i5489[11], i5489[12], i5489[13], i5489[14])
  i5488.scale = new pc.Vec3( i5489[15], i5489[16], i5489[17] )
  return i5488
}

Deserializers["_InGame.Scripts.Managers.TutorialManager"] = function (request, data, root) {
  var i5490 = root || request.c( '_InGame.Scripts.Managers.TutorialManager' )
  var i5491 = data
  var i5493 = i5491[0]
  var i5492 = new (System.Collections.Generic.List$1(Bridge.ns('_InGame.Scripts.Managers.TutorialVariables')))
  for(var i = 0; i < i5493.length; i += 1) {
    i5492.add(request.d('_InGame.Scripts.Managers.TutorialVariables', i5493[i + 0]));
  }
  i5490.Tutorials = i5492
  return i5490
}

Deserializers["_InGame.Scripts.Managers.TutorialVariables"] = function (request, data, root) {
  var i5496 = root || request.c( '_InGame.Scripts.Managers.TutorialVariables' )
  var i5497 = data
  i5496._Type = i5497[0]
  request.r(i5497[1], i5497[2], 0, i5496, 'Object')
  return i5496
}

Deserializers["PlayableAdsTool.LocalizationController"] = function (request, data, root) {
  var i5498 = root || request.c( 'PlayableAdsTool.LocalizationController' )
  var i5499 = data
  var i5501 = i5499[0]
  var i5500 = new (System.Collections.Generic.List$1(Bridge.ns('PlayableAdsTool.Sheet')))
  for(var i = 0; i < i5501.length; i += 1) {
    i5500.add(request.d('PlayableAdsTool.Sheet', i5501[i + 0]));
  }
  i5498.Sheets = i5500
  request.r(i5499[1], i5499[2], 0, i5498, 'CurrentFont')
  request.r(i5499[3], i5499[4], 0, i5498, 'DefaultFont')
  request.r(i5499[5], i5499[6], 0, i5498, 'HindiFont')
  request.r(i5499[7], i5499[8], 0, i5498, 'JapaneseFont')
  request.r(i5499[9], i5499[10], 0, i5498, 'KoreanFont')
  request.r(i5499[11], i5499[12], 0, i5498, 'ThaiFont')
  i5498._languageTest = !!i5499[13]
  i5498._language = i5499[14]
  return i5498
}

Deserializers["PlayableAdsTool.Sheet"] = function (request, data, root) {
  var i5504 = root || request.c( 'PlayableAdsTool.Sheet' )
  var i5505 = data
  i5504.Name = i5505[0]
  i5504.Id = System.Int64(i5505[1])
  request.r(i5505[2], i5505[3], 0, i5504, 'TextAsset')
  return i5504
}

Deserializers["_InGame.Scripts.Utilities.PrefabHolder"] = function (request, data, root) {
  var i5506 = root || request.c( '_InGame.Scripts.Utilities.PrefabHolder' )
  var i5507 = data
  request.r(i5507[0], i5507[1], 0, i5506, 'DrawPointPrefab')
  return i5506
}

Deserializers["PlayableAdsTool.ResponsiveManager"] = function (request, data, root) {
  var i5508 = root || request.c( 'PlayableAdsTool.ResponsiveManager' )
  var i5509 = data
  i5508.CurrentScreenOrientation = i5509[0]
  i5508.CurrentAspectRatio = i5509[1]
  var i5511 = i5509[2]
  var i5510 = []
  for(var i = 0; i < i5511.length; i += 1) {
    i5510.push( request.d('UIElement', i5511[i + 0]) );
  }
  i5508.UiElements = i5510
  var i5513 = i5509[3]
  var i5512 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i5513.length; i += 1) {
    i5512.add(request.d('UIData', i5513[i + 0]));
  }
  i5508.Horizantal_20_9 = i5512
  var i5515 = i5509[4]
  var i5514 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i5515.length; i += 1) {
    i5514.add(request.d('UIData', i5515[i + 0]));
  }
  i5508.Horizantal_16_9 = i5514
  var i5517 = i5509[5]
  var i5516 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i5517.length; i += 1) {
    i5516.add(request.d('UIData', i5517[i + 0]));
  }
  i5508.Horizantal_4_3 = i5516
  var i5519 = i5509[6]
  var i5518 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i5519.length; i += 1) {
    i5518.add(request.d('UIData', i5519[i + 0]));
  }
  i5508.Vertical_9_20 = i5518
  var i5521 = i5509[7]
  var i5520 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i5521.length; i += 1) {
    i5520.add(request.d('UIData', i5521[i + 0]));
  }
  i5508.Vertical_9_16 = i5520
  var i5523 = i5509[8]
  var i5522 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i5523.length; i += 1) {
    i5522.add(request.d('UIData', i5523[i + 0]));
  }
  i5508.Vertical_3_4 = i5522
  request.r(i5509[9], i5509[10], 0, i5508, 'Banner')
  return i5508
}

Deserializers["UIElement"] = function (request, data, root) {
  var i5526 = root || request.c( 'UIElement' )
  var i5527 = data
  i5526._rectTransformName = i5527[0]
  request.r(i5527[1], i5527[2], 0, i5526, '_rectTransform')
  return i5526
}

Deserializers["UIData"] = function (request, data, root) {
  var i5530 = root || request.c( 'UIData' )
  var i5531 = data
  i5530.AnchoredPosition = new pc.Vec2( i5531[0], i5531[1] )
  i5530.SizeDelta = new pc.Vec2( i5531[2], i5531[3] )
  i5530.Rotation = new pc.Quat(i5531[4], i5531[5], i5531[6], i5531[7])
  i5530.LocalScale = new pc.Vec3( i5531[8], i5531[9], i5531[10] )
  i5530.AnchorMin = new pc.Vec2( i5531[11], i5531[12] )
  i5530.AnchorMax = new pc.Vec2( i5531[13], i5531[14] )
  i5530.Pivot = new pc.Vec2( i5531[15], i5531[16] )
  return i5530
}

Deserializers["PlayableAdsTool.EndCardController"] = function (request, data, root) {
  var i5532 = root || request.c( 'PlayableAdsTool.EndCardController' )
  var i5533 = data
  i5532._isStoreOpen = !!i5533[0]
  i5532.IsEndCardOpened = !!i5533[1]
  i5532.LastEndCard = !!i5533[2]
  i5532.SendStoreWithEndCard = !!i5533[3]
  i5532._openStoreAfterSeconds = i5533[4]
  i5532._openStoreAfterEndCard = !!i5533[5]
  var i5535 = i5533[6]
  var i5534 = []
  for(var i = 0; i < i5535.length; i += 2) {
  request.r(i5535[i + 0], i5535[i + 1], 2, i5534, '')
  }
  i5532._endCards = i5534
  return i5532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5539 = data
  i5538.cullTransparentMesh = !!i5539[0]
  return i5538
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5540 = root || request.c( 'UnityEngine.UI.Image' )
  var i5541 = data
  request.r(i5541[0], i5541[1], 0, i5540, 'm_Sprite')
  i5540.m_Type = i5541[2]
  i5540.m_PreserveAspect = !!i5541[3]
  i5540.m_FillCenter = !!i5541[4]
  i5540.m_FillMethod = i5541[5]
  i5540.m_FillAmount = i5541[6]
  i5540.m_FillClockwise = !!i5541[7]
  i5540.m_FillOrigin = i5541[8]
  i5540.m_UseSpriteMesh = !!i5541[9]
  i5540.m_PixelsPerUnitMultiplier = i5541[10]
  request.r(i5541[11], i5541[12], 0, i5540, 'm_Material')
  i5540.m_Maskable = !!i5541[13]
  i5540.m_Color = new pc.Color(i5541[14], i5541[15], i5541[16], i5541[17])
  i5540.m_RaycastTarget = !!i5541[18]
  i5540.m_RaycastPadding = new pc.Vec4( i5541[19], i5541[20], i5541[21], i5541[22] )
  return i5540
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5542 = root || request.c( 'UnityEngine.UI.Button' )
  var i5543 = data
  i5542.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5543[0], i5542.m_OnClick)
  i5542.m_Navigation = request.d('UnityEngine.UI.Navigation', i5543[1], i5542.m_Navigation)
  i5542.m_Transition = i5543[2]
  i5542.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5543[3], i5542.m_Colors)
  i5542.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5543[4], i5542.m_SpriteState)
  i5542.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5543[5], i5542.m_AnimationTriggers)
  i5542.m_Interactable = !!i5543[6]
  request.r(i5543[7], i5543[8], 0, i5542, 'm_TargetGraphic')
  return i5542
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5544 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5545 = data
  i5544.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5545[0], i5544.m_PersistentCalls)
  return i5544
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5546 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5547 = data
  var i5549 = i5547[0]
  var i5548 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5549.length; i += 1) {
    i5548.add(request.d('UnityEngine.Events.PersistentCall', i5549[i + 0]));
  }
  i5546.m_Calls = i5548
  return i5546
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5552 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5553 = data
  request.r(i5553[0], i5553[1], 0, i5552, 'm_Target')
  i5552.m_TargetAssemblyTypeName = i5553[2]
  i5552.m_MethodName = i5553[3]
  i5552.m_Mode = i5553[4]
  i5552.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5553[5], i5552.m_Arguments)
  i5552.m_CallState = i5553[6]
  return i5552
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5554 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5555 = data
  request.r(i5555[0], i5555[1], 0, i5554, 'm_ObjectArgument')
  i5554.m_ObjectArgumentAssemblyTypeName = i5555[2]
  i5554.m_IntArgument = i5555[3]
  i5554.m_FloatArgument = i5555[4]
  i5554.m_StringArgument = i5555[5]
  i5554.m_BoolArgument = !!i5555[6]
  return i5554
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5556 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5557 = data
  i5556.m_Mode = i5557[0]
  i5556.m_WrapAround = !!i5557[1]
  request.r(i5557[2], i5557[3], 0, i5556, 'm_SelectOnUp')
  request.r(i5557[4], i5557[5], 0, i5556, 'm_SelectOnDown')
  request.r(i5557[6], i5557[7], 0, i5556, 'm_SelectOnLeft')
  request.r(i5557[8], i5557[9], 0, i5556, 'm_SelectOnRight')
  return i5556
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5558 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5559 = data
  i5558.m_NormalColor = new pc.Color(i5559[0], i5559[1], i5559[2], i5559[3])
  i5558.m_HighlightedColor = new pc.Color(i5559[4], i5559[5], i5559[6], i5559[7])
  i5558.m_PressedColor = new pc.Color(i5559[8], i5559[9], i5559[10], i5559[11])
  i5558.m_SelectedColor = new pc.Color(i5559[12], i5559[13], i5559[14], i5559[15])
  i5558.m_DisabledColor = new pc.Color(i5559[16], i5559[17], i5559[18], i5559[19])
  i5558.m_ColorMultiplier = i5559[20]
  i5558.m_FadeDuration = i5559[21]
  return i5558
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5560 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5561 = data
  request.r(i5561[0], i5561[1], 0, i5560, 'm_HighlightedSprite')
  request.r(i5561[2], i5561[3], 0, i5560, 'm_PressedSprite')
  request.r(i5561[4], i5561[5], 0, i5560, 'm_SelectedSprite')
  request.r(i5561[6], i5561[7], 0, i5560, 'm_DisabledSprite')
  return i5560
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5562 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5563 = data
  i5562.m_NormalTrigger = i5563[0]
  i5562.m_HighlightedTrigger = i5563[1]
  i5562.m_PressedTrigger = i5563[2]
  i5562.m_SelectedTrigger = i5563[3]
  i5562.m_DisabledTrigger = i5563[4]
  return i5562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5565 = data
  i5564.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5565[0], i5564.main)
  i5564.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5565[1], i5564.colorBySpeed)
  i5564.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5565[2], i5564.colorOverLifetime)
  i5564.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5565[3], i5564.emission)
  i5564.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5565[4], i5564.rotationBySpeed)
  i5564.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5565[5], i5564.rotationOverLifetime)
  i5564.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5565[6], i5564.shape)
  i5564.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5565[7], i5564.sizeBySpeed)
  i5564.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5565[8], i5564.sizeOverLifetime)
  i5564.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5565[9], i5564.textureSheetAnimation)
  i5564.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5565[10], i5564.velocityOverLifetime)
  i5564.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5565[11], i5564.noise)
  i5564.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5565[12], i5564.inheritVelocity)
  i5564.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5565[13], i5564.forceOverLifetime)
  i5564.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5565[14], i5564.limitVelocityOverLifetime)
  i5564.useAutoRandomSeed = !!i5565[15]
  i5564.randomSeed = i5565[16]
  return i5564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5566 = root || new pc.ParticleSystemMain()
  var i5567 = data
  i5566.duration = i5567[0]
  i5566.loop = !!i5567[1]
  i5566.prewarm = !!i5567[2]
  i5566.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5567[3], i5566.startDelay)
  i5566.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5567[4], i5566.startLifetime)
  i5566.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5567[5], i5566.startSpeed)
  i5566.startSize3D = !!i5567[6]
  i5566.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5567[7], i5566.startSizeX)
  i5566.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5567[8], i5566.startSizeY)
  i5566.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5567[9], i5566.startSizeZ)
  i5566.startRotation3D = !!i5567[10]
  i5566.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5567[11], i5566.startRotationX)
  i5566.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5567[12], i5566.startRotationY)
  i5566.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5567[13], i5566.startRotationZ)
  i5566.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5567[14], i5566.startColor)
  i5566.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5567[15], i5566.gravityModifier)
  i5566.simulationSpace = i5567[16]
  request.r(i5567[17], i5567[18], 0, i5566, 'customSimulationSpace')
  i5566.simulationSpeed = i5567[19]
  i5566.useUnscaledTime = !!i5567[20]
  i5566.scalingMode = i5567[21]
  i5566.playOnAwake = !!i5567[22]
  i5566.maxParticles = i5567[23]
  i5566.emitterVelocityMode = i5567[24]
  i5566.stopAction = i5567[25]
  return i5566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5568 = root || new pc.MinMaxCurve()
  var i5569 = data
  i5568.mode = i5569[0]
  i5568.curveMin = new pc.AnimationCurve( { keys_flow: i5569[1] } )
  i5568.curveMax = new pc.AnimationCurve( { keys_flow: i5569[2] } )
  i5568.curveMultiplier = i5569[3]
  i5568.constantMin = i5569[4]
  i5568.constantMax = i5569[5]
  return i5568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5570 = root || new pc.MinMaxGradient()
  var i5571 = data
  i5570.mode = i5571[0]
  i5570.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5571[1], i5570.gradientMin)
  i5570.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5571[2], i5570.gradientMax)
  i5570.colorMin = new pc.Color(i5571[3], i5571[4], i5571[5], i5571[6])
  i5570.colorMax = new pc.Color(i5571[7], i5571[8], i5571[9], i5571[10])
  return i5570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5573 = data
  i5572.mode = i5573[0]
  var i5575 = i5573[1]
  var i5574 = []
  for(var i = 0; i < i5575.length; i += 1) {
    i5574.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5575[i + 0]) );
  }
  i5572.colorKeys = i5574
  var i5577 = i5573[2]
  var i5576 = []
  for(var i = 0; i < i5577.length; i += 1) {
    i5576.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5577[i + 0]) );
  }
  i5572.alphaKeys = i5576
  return i5572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5581 = data
  i5580.color = new pc.Color(i5581[0], i5581[1], i5581[2], i5581[3])
  i5580.time = i5581[4]
  return i5580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5585 = data
  i5584.alpha = i5585[0]
  i5584.time = i5585[1]
  return i5584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5586 = root || new pc.ParticleSystemColorBySpeed()
  var i5587 = data
  i5586.enabled = !!i5587[0]
  i5586.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5587[1], i5586.color)
  i5586.range = new pc.Vec2( i5587[2], i5587[3] )
  return i5586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5588 = root || new pc.ParticleSystemColorOverLifetime()
  var i5589 = data
  i5588.enabled = !!i5589[0]
  i5588.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5589[1], i5588.color)
  return i5588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5590 = root || new pc.ParticleSystemEmitter()
  var i5591 = data
  i5590.enabled = !!i5591[0]
  i5590.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5591[1], i5590.rateOverTime)
  i5590.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5591[2], i5590.rateOverDistance)
  var i5593 = i5591[3]
  var i5592 = []
  for(var i = 0; i < i5593.length; i += 1) {
    i5592.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5593[i + 0]) );
  }
  i5590.bursts = i5592
  return i5590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5596 = root || new pc.ParticleSystemBurst()
  var i5597 = data
  i5596.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5597[0], i5596.count)
  i5596.cycleCount = i5597[1]
  i5596.minCount = i5597[2]
  i5596.maxCount = i5597[3]
  i5596.repeatInterval = i5597[4]
  i5596.time = i5597[5]
  return i5596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5598 = root || new pc.ParticleSystemRotationBySpeed()
  var i5599 = data
  i5598.enabled = !!i5599[0]
  i5598.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5599[1], i5598.x)
  i5598.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5599[2], i5598.y)
  i5598.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5599[3], i5598.z)
  i5598.separateAxes = !!i5599[4]
  i5598.range = new pc.Vec2( i5599[5], i5599[6] )
  return i5598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5600 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5601 = data
  i5600.enabled = !!i5601[0]
  i5600.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5601[1], i5600.x)
  i5600.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5601[2], i5600.y)
  i5600.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5601[3], i5600.z)
  i5600.separateAxes = !!i5601[4]
  return i5600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5602 = root || new pc.ParticleSystemShape()
  var i5603 = data
  i5602.enabled = !!i5603[0]
  i5602.shapeType = i5603[1]
  i5602.randomDirectionAmount = i5603[2]
  i5602.sphericalDirectionAmount = i5603[3]
  i5602.randomPositionAmount = i5603[4]
  i5602.alignToDirection = !!i5603[5]
  i5602.radius = i5603[6]
  i5602.radiusMode = i5603[7]
  i5602.radiusSpread = i5603[8]
  i5602.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5603[9], i5602.radiusSpeed)
  i5602.radiusThickness = i5603[10]
  i5602.angle = i5603[11]
  i5602.length = i5603[12]
  i5602.boxThickness = new pc.Vec3( i5603[13], i5603[14], i5603[15] )
  i5602.meshShapeType = i5603[16]
  request.r(i5603[17], i5603[18], 0, i5602, 'mesh')
  request.r(i5603[19], i5603[20], 0, i5602, 'meshRenderer')
  request.r(i5603[21], i5603[22], 0, i5602, 'skinnedMeshRenderer')
  i5602.useMeshMaterialIndex = !!i5603[23]
  i5602.meshMaterialIndex = i5603[24]
  i5602.useMeshColors = !!i5603[25]
  i5602.normalOffset = i5603[26]
  i5602.arc = i5603[27]
  i5602.arcMode = i5603[28]
  i5602.arcSpread = i5603[29]
  i5602.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5603[30], i5602.arcSpeed)
  i5602.donutRadius = i5603[31]
  i5602.position = new pc.Vec3( i5603[32], i5603[33], i5603[34] )
  i5602.rotation = new pc.Vec3( i5603[35], i5603[36], i5603[37] )
  i5602.scale = new pc.Vec3( i5603[38], i5603[39], i5603[40] )
  return i5602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5604 = root || new pc.ParticleSystemSizeBySpeed()
  var i5605 = data
  i5604.enabled = !!i5605[0]
  i5604.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5605[1], i5604.x)
  i5604.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5605[2], i5604.y)
  i5604.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5605[3], i5604.z)
  i5604.separateAxes = !!i5605[4]
  i5604.range = new pc.Vec2( i5605[5], i5605[6] )
  return i5604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5606 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5607 = data
  i5606.enabled = !!i5607[0]
  i5606.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5607[1], i5606.x)
  i5606.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5607[2], i5606.y)
  i5606.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5607[3], i5606.z)
  i5606.separateAxes = !!i5607[4]
  return i5606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5608 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5609 = data
  i5608.enabled = !!i5609[0]
  i5608.mode = i5609[1]
  i5608.animation = i5609[2]
  i5608.numTilesX = i5609[3]
  i5608.numTilesY = i5609[4]
  i5608.useRandomRow = !!i5609[5]
  i5608.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5609[6], i5608.frameOverTime)
  i5608.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5609[7], i5608.startFrame)
  i5608.cycleCount = i5609[8]
  i5608.rowIndex = i5609[9]
  i5608.flipU = i5609[10]
  i5608.flipV = i5609[11]
  i5608.spriteCount = i5609[12]
  var i5611 = i5609[13]
  var i5610 = []
  for(var i = 0; i < i5611.length; i += 2) {
  request.r(i5611[i + 0], i5611[i + 1], 2, i5610, '')
  }
  i5608.sprites = i5610
  return i5608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5614 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5615 = data
  i5614.enabled = !!i5615[0]
  i5614.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5615[1], i5614.x)
  i5614.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5615[2], i5614.y)
  i5614.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5615[3], i5614.z)
  i5614.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5615[4], i5614.radial)
  i5614.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5615[5], i5614.speedModifier)
  i5614.space = i5615[6]
  i5614.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5615[7], i5614.orbitalX)
  i5614.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5615[8], i5614.orbitalY)
  i5614.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5615[9], i5614.orbitalZ)
  i5614.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5615[10], i5614.orbitalOffsetX)
  i5614.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5615[11], i5614.orbitalOffsetY)
  i5614.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5615[12], i5614.orbitalOffsetZ)
  return i5614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5616 = root || new pc.ParticleSystemNoise()
  var i5617 = data
  i5616.enabled = !!i5617[0]
  i5616.separateAxes = !!i5617[1]
  i5616.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5617[2], i5616.strengthX)
  i5616.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5617[3], i5616.strengthY)
  i5616.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5617[4], i5616.strengthZ)
  i5616.frequency = i5617[5]
  i5616.damping = !!i5617[6]
  i5616.octaveCount = i5617[7]
  i5616.octaveMultiplier = i5617[8]
  i5616.octaveScale = i5617[9]
  i5616.quality = i5617[10]
  i5616.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5617[11], i5616.scrollSpeed)
  i5616.scrollSpeedMultiplier = i5617[12]
  i5616.remapEnabled = !!i5617[13]
  i5616.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5617[14], i5616.remapX)
  i5616.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5617[15], i5616.remapY)
  i5616.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5617[16], i5616.remapZ)
  i5616.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5617[17], i5616.positionAmount)
  i5616.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5617[18], i5616.rotationAmount)
  i5616.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5617[19], i5616.sizeAmount)
  return i5616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5618 = root || new pc.ParticleSystemInheritVelocity()
  var i5619 = data
  i5618.enabled = !!i5619[0]
  i5618.mode = i5619[1]
  i5618.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5619[2], i5618.curve)
  return i5618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5620 = root || new pc.ParticleSystemForceOverLifetime()
  var i5621 = data
  i5620.enabled = !!i5621[0]
  i5620.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5621[1], i5620.x)
  i5620.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5621[2], i5620.y)
  i5620.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5621[3], i5620.z)
  i5620.space = i5621[4]
  i5620.randomized = !!i5621[5]
  return i5620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5622 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5623 = data
  i5622.enabled = !!i5623[0]
  i5622.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5623[1], i5622.limit)
  i5622.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5623[2], i5622.limitX)
  i5622.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5623[3], i5622.limitY)
  i5622.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5623[4], i5622.limitZ)
  i5622.dampen = i5623[5]
  i5622.separateAxes = !!i5623[6]
  i5622.space = i5623[7]
  i5622.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5623[8], i5622.drag)
  i5622.multiplyDragByParticleSize = !!i5623[9]
  i5622.multiplyDragByParticleVelocity = !!i5623[10]
  return i5622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5625 = data
  i5624.enabled = !!i5625[0]
  request.r(i5625[1], i5625[2], 0, i5624, 'sharedMaterial')
  var i5627 = i5625[3]
  var i5626 = []
  for(var i = 0; i < i5627.length; i += 2) {
  request.r(i5627[i + 0], i5627[i + 1], 2, i5626, '')
  }
  i5624.sharedMaterials = i5626
  i5624.receiveShadows = !!i5625[4]
  i5624.shadowCastingMode = i5625[5]
  i5624.sortingLayerID = i5625[6]
  i5624.sortingOrder = i5625[7]
  i5624.lightmapIndex = i5625[8]
  i5624.lightmapSceneIndex = i5625[9]
  i5624.lightmapScaleOffset = new pc.Vec4( i5625[10], i5625[11], i5625[12], i5625[13] )
  i5624.lightProbeUsage = i5625[14]
  i5624.reflectionProbeUsage = i5625[15]
  request.r(i5625[16], i5625[17], 0, i5624, 'mesh')
  i5624.meshCount = i5625[18]
  i5624.activeVertexStreamsCount = i5625[19]
  i5624.alignment = i5625[20]
  i5624.renderMode = i5625[21]
  i5624.sortMode = i5625[22]
  i5624.lengthScale = i5625[23]
  i5624.velocityScale = i5625[24]
  i5624.cameraVelocityScale = i5625[25]
  i5624.normalDirection = i5625[26]
  i5624.sortingFudge = i5625[27]
  i5624.minParticleSize = i5625[28]
  i5624.maxParticleSize = i5625[29]
  i5624.pivot = new pc.Vec3( i5625[30], i5625[31], i5625[32] )
  request.r(i5625[33], i5625[34], 0, i5624, 'trailMaterial')
  return i5624
}

Deserializers["PlayableAdsTool.AudioManager"] = function (request, data, root) {
  var i5628 = root || request.c( 'PlayableAdsTool.AudioManager' )
  var i5629 = data
  request.r(i5629[0], i5629[1], 0, i5628, 'AudioSourceContainer')
  var i5631 = i5629[2]
  var i5630 = new (System.Collections.Generic.List$1(Bridge.ns('PlayableAdsTool.SoundTypeListPair')))
  for(var i = 0; i < i5631.length; i += 1) {
    i5630.add(request.d('PlayableAdsTool.SoundTypeListPair', i5631[i + 0]));
  }
  i5628.SoundTypeListPairs = i5630
  return i5628
}

Deserializers["PlayableAdsTool.SoundTypeListPair"] = function (request, data, root) {
  var i5634 = root || request.c( 'PlayableAdsTool.SoundTypeListPair' )
  var i5635 = data
  i5634.type = i5635[0]
  var i5637 = i5635[1]
  var i5636 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i5637.length; i += 2) {
  request.r(i5637[i + 0], i5637[i + 1], 1, i5636, '')
  }
  i5634.clips = i5636
  return i5634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5641 = data
  request.r(i5641[0], i5641[1], 0, i5640, 'clip')
  request.r(i5641[2], i5641[3], 0, i5640, 'outputAudioMixerGroup')
  i5640.playOnAwake = !!i5641[4]
  i5640.loop = !!i5641[5]
  i5640.time = i5641[6]
  i5640.volume = i5641[7]
  i5640.pitch = i5641[8]
  i5640.enabled = !!i5641[9]
  return i5640
}

Deserializers["PlayableAdsTool.AudioSourceContainer"] = function (request, data, root) {
  var i5642 = root || request.c( 'PlayableAdsTool.AudioSourceContainer' )
  var i5643 = data
  return i5642
}

Deserializers["PlayableAdsTool.ObjectPoolManager"] = function (request, data, root) {
  var i5644 = root || request.c( 'PlayableAdsTool.ObjectPoolManager' )
  var i5645 = data
  var i5647 = i5645[0]
  var i5646 = new (System.Collections.Generic.List$1(Bridge.ns('PlayableAdsTool.PoolContainer')))
  for(var i = 0; i < i5647.length; i += 1) {
    i5646.add(request.d('PlayableAdsTool.PoolContainer', i5647[i + 0]));
  }
  i5644._poolContainers = i5646
  return i5644
}

Deserializers["PlayableAdsTool.PoolContainer"] = function (request, data, root) {
  var i5650 = root || request.c( 'PlayableAdsTool.PoolContainer' )
  var i5651 = data
  request.r(i5651[0], i5651[1], 0, i5650, 'Prefab')
  i5650.Count = i5651[2]
  return i5650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i5652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i5653 = data
  i5652.name = i5653[0]
  i5652.atlasId = i5653[1]
  i5652.mipmapCount = i5653[2]
  i5652.hdr = !!i5653[3]
  i5652.size = i5653[4]
  i5652.anisoLevel = i5653[5]
  i5652.filterMode = i5653[6]
  var i5655 = i5653[7]
  var i5654 = []
  for(var i = 0; i < i5655.length; i += 4) {
    i5654.push( UnityEngine.Rect.MinMaxRect(i5655[i + 0], i5655[i + 1], i5655[i + 2], i5655[i + 3]) );
  }
  i5652.rects = i5654
  i5652.wrapU = i5653[8]
  i5652.wrapV = i5653[9]
  return i5652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5659 = data
  i5658.name = i5659[0]
  i5658.index = i5659[1]
  i5658.startup = !!i5659[2]
  return i5658
}

Deserializers["PlayableAdsTool.CameraManager"] = function (request, data, root) {
  var i5660 = root || request.c( 'PlayableAdsTool.CameraManager' )
  var i5661 = data
  i5660.CurrentCamState = i5661[0]
  var i5663 = i5661[1]
  var i5662 = []
  for(var i = 0; i < i5663.length; i += 2) {
  request.r(i5663[i + 0], i5663[i + 1], 2, i5662, '')
  }
  i5660._verticalCam_9_20 = i5662
  var i5665 = i5661[2]
  var i5664 = []
  for(var i = 0; i < i5665.length; i += 2) {
  request.r(i5665[i + 0], i5665[i + 1], 2, i5664, '')
  }
  i5660._verticalCam_9_16 = i5664
  var i5667 = i5661[3]
  var i5666 = []
  for(var i = 0; i < i5667.length; i += 2) {
  request.r(i5667[i + 0], i5667[i + 1], 2, i5666, '')
  }
  i5660._verticalCam_3_4 = i5666
  var i5669 = i5661[4]
  var i5668 = []
  for(var i = 0; i < i5669.length; i += 2) {
  request.r(i5669[i + 0], i5669[i + 1], 2, i5668, '')
  }
  i5660._horizontalCam_20_9 = i5668
  var i5671 = i5661[5]
  var i5670 = []
  for(var i = 0; i < i5671.length; i += 2) {
  request.r(i5671[i + 0], i5671[i + 1], 2, i5670, '')
  }
  i5660._horizontalCam_16_9 = i5670
  var i5673 = i5661[6]
  var i5672 = []
  for(var i = 0; i < i5673.length; i += 2) {
  request.r(i5673[i + 0], i5673[i + 1], 2, i5672, '')
  }
  i5660._horizontalCam_4_3 = i5672
  return i5660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5675 = data
  i5674.enabled = !!i5675[0]
  i5674.aspect = i5675[1]
  i5674.orthographic = !!i5675[2]
  i5674.orthographicSize = i5675[3]
  i5674.backgroundColor = new pc.Color(i5675[4], i5675[5], i5675[6], i5675[7])
  i5674.nearClipPlane = i5675[8]
  i5674.farClipPlane = i5675[9]
  i5674.fieldOfView = i5675[10]
  i5674.depth = i5675[11]
  i5674.clearFlags = i5675[12]
  i5674.cullingMask = i5675[13]
  i5674.rect = i5675[14]
  request.r(i5675[15], i5675[16], 0, i5674, 'targetTexture')
  i5674.usePhysicalProperties = !!i5675[17]
  i5674.focalLength = i5675[18]
  i5674.sensorSize = new pc.Vec2( i5675[19], i5675[20] )
  i5674.lensShift = new pc.Vec2( i5675[21], i5675[22] )
  i5674.gateFit = i5675[23]
  i5674.commandBufferCount = i5675[24]
  i5674.cameraType = i5675[25]
  return i5674
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i5676 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i5677 = data
  i5676.m_ShowDebugText = !!i5677[0]
  i5676.m_ShowCameraFrustum = !!i5677[1]
  i5676.m_IgnoreTimeScale = !!i5677[2]
  request.r(i5677[3], i5677[4], 0, i5676, 'm_WorldUpOverride')
  i5676.m_UpdateMethod = i5677[5]
  i5676.m_BlendUpdateMethod = i5677[6]
  i5676.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i5677[7], i5676.m_DefaultBlend)
  request.r(i5677[8], i5677[9], 0, i5676, 'm_CustomBlends')
  i5676.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i5677[10], i5676.m_CameraCutEvent)
  i5676.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i5677[11], i5676.m_CameraActivatedEvent)
  return i5676
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i5678 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i5679 = data
  i5678.m_Style = i5679[0]
  i5678.m_Time = i5679[1]
  i5678.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i5679[2] } )
  return i5678
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i5680 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i5681 = data
  i5680.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5681[0], i5680.m_PersistentCalls)
  return i5680
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i5682 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i5683 = data
  i5682.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5683[0], i5682.m_PersistentCalls)
  return i5682
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i5684 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i5685 = data
  request.r(i5685[0], i5685[1], 0, i5684, 'm_LookAt')
  request.r(i5685[2], i5685[3], 0, i5684, 'm_Follow')
  i5684.m_Lens = request.d('Cinemachine.LensSettings', i5685[4], i5684.m_Lens)
  i5684.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i5685[5], i5684.m_Transitions)
  var i5687 = i5685[6]
  var i5686 = []
  for(var i = 0; i < i5687.length; i += 1) {
    i5686.push( i5687[i + 0] );
  }
  i5684.m_ExcludedPropertiesInInspector = i5686
  var i5689 = i5685[7]
  var i5688 = []
  for(var i = 0; i < i5689.length; i += 1) {
    i5688.push( i5689[i + 0] );
  }
  i5684.m_LockStageInInspector = i5688
  i5684.m_Priority = i5685[8]
  i5684.m_StandbyUpdate = i5685[9]
  i5684.m_LegacyBlendHint = i5685[10]
  request.r(i5685[11], i5685[12], 0, i5684, 'm_ComponentOwner')
  i5684.m_StreamingVersion = i5685[13]
  return i5684
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i5690 = root || request.c( 'Cinemachine.LensSettings' )
  var i5691 = data
  i5690.FieldOfView = i5691[0]
  i5690.OrthographicSize = i5691[1]
  i5690.NearClipPlane = i5691[2]
  i5690.FarClipPlane = i5691[3]
  i5690.Dutch = i5691[4]
  i5690.ModeOverride = i5691[5]
  i5690.LensShift = new pc.Vec2( i5691[6], i5691[7] )
  i5690.GateFit = i5691[8]
  i5690.FocusDistance = i5691[9]
  i5690.m_SensorSize = new pc.Vec2( i5691[10], i5691[11] )
  return i5690
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i5692 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i5693 = data
  i5692.m_BlendHint = i5693[0]
  i5692.m_InheritPosition = !!i5693[1]
  i5692.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i5693[2], i5692.m_OnCameraLive)
  return i5692
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i5698 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i5699 = data
  return i5698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5701 = data
  i5700.enabled = !!i5701[0]
  i5700.planeDistance = i5701[1]
  i5700.referencePixelsPerUnit = i5701[2]
  i5700.isFallbackOverlay = !!i5701[3]
  i5700.renderMode = i5701[4]
  i5700.renderOrder = i5701[5]
  i5700.sortingLayerName = i5701[6]
  i5700.sortingOrder = i5701[7]
  i5700.scaleFactor = i5701[8]
  request.r(i5701[9], i5701[10], 0, i5700, 'worldCamera')
  i5700.overrideSorting = !!i5701[11]
  i5700.pixelPerfect = !!i5701[12]
  i5700.targetDisplay = i5701[13]
  i5700.overridePixelPerfect = !!i5701[14]
  return i5700
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5702 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5703 = data
  i5702.m_UiScaleMode = i5703[0]
  i5702.m_ReferencePixelsPerUnit = i5703[1]
  i5702.m_ScaleFactor = i5703[2]
  i5702.m_ReferenceResolution = new pc.Vec2( i5703[3], i5703[4] )
  i5702.m_ScreenMatchMode = i5703[5]
  i5702.m_MatchWidthOrHeight = i5703[6]
  i5702.m_PhysicalUnit = i5703[7]
  i5702.m_FallbackScreenDPI = i5703[8]
  i5702.m_DefaultSpriteDPI = i5703[9]
  i5702.m_DynamicPixelsPerUnit = i5703[10]
  i5702.m_PresetInfoIsWorld = !!i5703[11]
  return i5702
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5704 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5705 = data
  i5704.m_IgnoreReversedGraphics = !!i5705[0]
  i5704.m_BlockingObjects = i5705[1]
  i5704.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5705[2] )
  return i5704
}

Deserializers["UIManager"] = function (request, data, root) {
  var i5706 = root || request.c( 'UIManager' )
  var i5707 = data
  return i5706
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5708 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5709 = data
  i5708.m_hasFontAssetChanged = !!i5709[0]
  request.r(i5709[1], i5709[2], 0, i5708, 'm_baseMaterial')
  i5708.m_maskOffset = new pc.Vec4( i5709[3], i5709[4], i5709[5], i5709[6] )
  i5708.m_text = i5709[7]
  i5708.m_isRightToLeft = !!i5709[8]
  request.r(i5709[9], i5709[10], 0, i5708, 'm_fontAsset')
  request.r(i5709[11], i5709[12], 0, i5708, 'm_sharedMaterial')
  var i5711 = i5709[13]
  var i5710 = []
  for(var i = 0; i < i5711.length; i += 2) {
  request.r(i5711[i + 0], i5711[i + 1], 2, i5710, '')
  }
  i5708.m_fontSharedMaterials = i5710
  request.r(i5709[14], i5709[15], 0, i5708, 'm_fontMaterial')
  var i5713 = i5709[16]
  var i5712 = []
  for(var i = 0; i < i5713.length; i += 2) {
  request.r(i5713[i + 0], i5713[i + 1], 2, i5712, '')
  }
  i5708.m_fontMaterials = i5712
  i5708.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5709[17], i5709[18], i5709[19], i5709[20])
  i5708.m_fontColor = new pc.Color(i5709[21], i5709[22], i5709[23], i5709[24])
  i5708.m_enableVertexGradient = !!i5709[25]
  i5708.m_colorMode = i5709[26]
  i5708.m_fontColorGradient = request.d('TMPro.VertexGradient', i5709[27], i5708.m_fontColorGradient)
  request.r(i5709[28], i5709[29], 0, i5708, 'm_fontColorGradientPreset')
  request.r(i5709[30], i5709[31], 0, i5708, 'm_spriteAsset')
  i5708.m_tintAllSprites = !!i5709[32]
  request.r(i5709[33], i5709[34], 0, i5708, 'm_StyleSheet')
  i5708.m_TextStyleHashCode = i5709[35]
  i5708.m_overrideHtmlColors = !!i5709[36]
  i5708.m_faceColor = UnityEngine.Color32.ConstructColor(i5709[37], i5709[38], i5709[39], i5709[40])
  i5708.m_fontSize = i5709[41]
  i5708.m_fontSizeBase = i5709[42]
  i5708.m_fontWeight = i5709[43]
  i5708.m_enableAutoSizing = !!i5709[44]
  i5708.m_fontSizeMin = i5709[45]
  i5708.m_fontSizeMax = i5709[46]
  i5708.m_fontStyle = i5709[47]
  i5708.m_HorizontalAlignment = i5709[48]
  i5708.m_VerticalAlignment = i5709[49]
  i5708.m_textAlignment = i5709[50]
  i5708.m_characterSpacing = i5709[51]
  i5708.m_wordSpacing = i5709[52]
  i5708.m_lineSpacing = i5709[53]
  i5708.m_lineSpacingMax = i5709[54]
  i5708.m_paragraphSpacing = i5709[55]
  i5708.m_charWidthMaxAdj = i5709[56]
  i5708.m_enableWordWrapping = !!i5709[57]
  i5708.m_wordWrappingRatios = i5709[58]
  i5708.m_overflowMode = i5709[59]
  request.r(i5709[60], i5709[61], 0, i5708, 'm_linkedTextComponent')
  request.r(i5709[62], i5709[63], 0, i5708, 'parentLinkedComponent')
  i5708.m_enableKerning = !!i5709[64]
  i5708.m_enableExtraPadding = !!i5709[65]
  i5708.checkPaddingRequired = !!i5709[66]
  i5708.m_isRichText = !!i5709[67]
  i5708.m_parseCtrlCharacters = !!i5709[68]
  i5708.m_isOrthographic = !!i5709[69]
  i5708.m_isCullingEnabled = !!i5709[70]
  i5708.m_horizontalMapping = i5709[71]
  i5708.m_verticalMapping = i5709[72]
  i5708.m_uvLineOffset = i5709[73]
  i5708.m_geometrySortingOrder = i5709[74]
  i5708.m_IsTextObjectScaleStatic = !!i5709[75]
  i5708.m_VertexBufferAutoSizeReduction = !!i5709[76]
  i5708.m_useMaxVisibleDescender = !!i5709[77]
  i5708.m_pageToDisplay = i5709[78]
  i5708.m_margin = new pc.Vec4( i5709[79], i5709[80], i5709[81], i5709[82] )
  i5708.m_isUsingLegacyAnimationComponent = !!i5709[83]
  i5708.m_isVolumetricText = !!i5709[84]
  request.r(i5709[85], i5709[86], 0, i5708, 'm_Material')
  i5708.m_Maskable = !!i5709[87]
  i5708.m_Color = new pc.Color(i5709[88], i5709[89], i5709[90], i5709[91])
  i5708.m_RaycastTarget = !!i5709[92]
  i5708.m_RaycastPadding = new pc.Vec4( i5709[93], i5709[94], i5709[95], i5709[96] )
  return i5708
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5714 = root || request.c( 'TMPro.VertexGradient' )
  var i5715 = data
  i5714.topLeft = new pc.Color(i5715[0], i5715[1], i5715[2], i5715[3])
  i5714.topRight = new pc.Color(i5715[4], i5715[5], i5715[6], i5715[7])
  i5714.bottomLeft = new pc.Color(i5715[8], i5715[9], i5715[10], i5715[11])
  i5714.bottomRight = new pc.Color(i5715[12], i5715[13], i5715[14], i5715[15])
  return i5714
}

Deserializers["PlayableAdsTool.LocalizedTextTMP"] = function (request, data, root) {
  var i5716 = root || request.c( 'PlayableAdsTool.LocalizedTextTMP' )
  var i5717 = data
  i5716.LocalizationKey = i5717[0]
  return i5716
}

Deserializers["_InGame.Scripts.Others.FillSliderController"] = function (request, data, root) {
  var i5718 = root || request.c( '_InGame.Scripts.Others.FillSliderController' )
  var i5719 = data
  request.r(i5719[0], i5719[1], 0, i5718, '_FillImage')
  request.r(i5719[2], i5719[3], 0, i5718, '_BrainObject')
  i5718.BrainLocationMinMax = new pc.Vec2( i5719[4], i5719[5] )
  return i5718
}

Deserializers["FeedbackPanelController"] = function (request, data, root) {
  var i5720 = root || request.c( 'FeedbackPanelController' )
  var i5721 = data
  request.r(i5721[0], i5721[1], 0, i5720, 'WinAnimator')
  request.r(i5721[2], i5721[3], 0, i5720, 'FailAnimator')
  var i5723 = i5721[4]
  var i5722 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i5723.length; i += 2) {
  request.r(i5723[i + 0], i5723[i + 1], 1, i5722, '')
  }
  i5720.Confetties = i5722
  return i5720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5727 = data
  request.r(i5727[0], i5727[1], 0, i5726, 'animatorController')
  request.r(i5727[2], i5727[3], 0, i5726, 'avatar')
  i5726.updateMode = i5727[4]
  i5726.hasTransformHierarchy = !!i5727[5]
  i5726.applyRootMotion = !!i5727[6]
  var i5729 = i5727[7]
  var i5728 = []
  for(var i = 0; i < i5729.length; i += 2) {
  request.r(i5729[i + 0], i5729[i + 1], 2, i5728, '')
  }
  i5726.humanBones = i5728
  i5726.enabled = !!i5727[8]
  return i5726
}

Deserializers["TutorialAnimationHelper"] = function (request, data, root) {
  var i5732 = root || request.c( 'TutorialAnimationHelper' )
  var i5733 = data
  request.r(i5733[0], i5733[1], 0, i5732, '_lineRenderer')
  var i5735 = i5733[2]
  var i5734 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5735.length; i += 2) {
  request.r(i5735[i + 0], i5735[i + 1], 1, i5734, '')
  }
  i5732.LineRendererPoints = i5734
  return i5732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i5738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i5739 = data
  i5738.enabled = !!i5739[0]
  i5738.type = i5739[1]
  i5738.color = new pc.Color(i5739[2], i5739[3], i5739[4], i5739[5])
  i5738.cullingMask = i5739[6]
  i5738.intensity = i5739[7]
  i5738.range = i5739[8]
  i5738.spotAngle = i5739[9]
  i5738.shadows = i5739[10]
  i5738.shadowNormalBias = i5739[11]
  i5738.shadowBias = i5739[12]
  i5738.shadowStrength = i5739[13]
  i5738.shadowResolution = i5739[14]
  i5738.lightmapBakeType = i5739[15]
  i5738.renderMode = i5739[16]
  request.r(i5739[17], i5739[18], 0, i5738, 'cookie')
  i5738.cookieSize = i5739[19]
  return i5738
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5740 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5741 = data
  request.r(i5741[0], i5741[1], 0, i5740, 'm_FirstSelected')
  i5740.m_sendNavigationEvents = !!i5741[2]
  i5740.m_DragThreshold = i5741[3]
  return i5740
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5742 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5743 = data
  i5742.m_HorizontalAxis = i5743[0]
  i5742.m_VerticalAxis = i5743[1]
  i5742.m_SubmitButton = i5743[2]
  i5742.m_CancelButton = i5743[3]
  i5742.m_InputActionsPerSecond = i5743[4]
  i5742.m_RepeatDelay = i5743[5]
  i5742.m_ForceModuleActive = !!i5743[6]
  i5742.m_SendPointerHoverToParent = !!i5743[7]
  return i5742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5745 = data
  i5744.ambientIntensity = i5745[0]
  i5744.reflectionIntensity = i5745[1]
  i5744.ambientMode = i5745[2]
  i5744.ambientLight = new pc.Color(i5745[3], i5745[4], i5745[5], i5745[6])
  i5744.ambientSkyColor = new pc.Color(i5745[7], i5745[8], i5745[9], i5745[10])
  i5744.ambientGroundColor = new pc.Color(i5745[11], i5745[12], i5745[13], i5745[14])
  i5744.ambientEquatorColor = new pc.Color(i5745[15], i5745[16], i5745[17], i5745[18])
  i5744.fogColor = new pc.Color(i5745[19], i5745[20], i5745[21], i5745[22])
  i5744.fogEndDistance = i5745[23]
  i5744.fogStartDistance = i5745[24]
  i5744.fogDensity = i5745[25]
  i5744.fog = !!i5745[26]
  request.r(i5745[27], i5745[28], 0, i5744, 'skybox')
  i5744.fogMode = i5745[29]
  var i5747 = i5745[30]
  var i5746 = []
  for(var i = 0; i < i5747.length; i += 1) {
    i5746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5747[i + 0]) );
  }
  i5744.lightmaps = i5746
  i5744.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5745[31], i5744.lightProbes)
  i5744.lightmapsMode = i5745[32]
  i5744.mixedBakeMode = i5745[33]
  i5744.environmentLightingMode = i5745[34]
  i5744.ambientProbe = new pc.SphericalHarmonicsL2(i5745[35])
  i5744.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5745[36])
  i5744.useReferenceAmbientProbe = !!i5745[37]
  request.r(i5745[38], i5745[39], 0, i5744, 'customReflection')
  request.r(i5745[40], i5745[41], 0, i5744, 'defaultReflection')
  i5744.defaultReflectionMode = i5745[42]
  i5744.defaultReflectionResolution = i5745[43]
  i5744.sunLightObjectId = i5745[44]
  i5744.pixelLightCount = i5745[45]
  i5744.defaultReflectionHDR = !!i5745[46]
  i5744.hasLightDataAsset = !!i5745[47]
  i5744.hasManualGenerate = !!i5745[48]
  return i5744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5751 = data
  request.r(i5751[0], i5751[1], 0, i5750, 'lightmapColor')
  request.r(i5751[2], i5751[3], 0, i5750, 'lightmapDirection')
  return i5750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5752 = root || new UnityEngine.LightProbes()
  var i5753 = data
  return i5752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5759 = data
  var i5761 = i5759[0]
  var i5760 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5761.length; i += 1) {
    i5760.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5761[i + 0]));
  }
  i5758.ShaderCompilationErrors = i5760
  i5758.name = i5759[1]
  i5758.guid = i5759[2]
  var i5763 = i5759[3]
  var i5762 = []
  for(var i = 0; i < i5763.length; i += 1) {
    i5762.push( i5763[i + 0] );
  }
  i5758.shaderDefinedKeywords = i5762
  var i5765 = i5759[4]
  var i5764 = []
  for(var i = 0; i < i5765.length; i += 1) {
    i5764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5765[i + 0]) );
  }
  i5758.passes = i5764
  var i5767 = i5759[5]
  var i5766 = []
  for(var i = 0; i < i5767.length; i += 1) {
    i5766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5767[i + 0]) );
  }
  i5758.usePasses = i5766
  var i5769 = i5759[6]
  var i5768 = []
  for(var i = 0; i < i5769.length; i += 1) {
    i5768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5769[i + 0]) );
  }
  i5758.defaultParameterValues = i5768
  request.r(i5759[7], i5759[8], 0, i5758, 'unityFallbackShader')
  i5758.readDepth = !!i5759[9]
  i5758.isCreatedByShaderGraph = !!i5759[10]
  i5758.compiled = !!i5759[11]
  return i5758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5773 = data
  i5772.shaderName = i5773[0]
  i5772.errorMessage = i5773[1]
  return i5772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5776 = root || new pc.UnityShaderPass()
  var i5777 = data
  i5776.id = i5777[0]
  i5776.subShaderIndex = i5777[1]
  i5776.name = i5777[2]
  i5776.passType = i5777[3]
  i5776.grabPassTextureName = i5777[4]
  i5776.usePass = !!i5777[5]
  i5776.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5777[6], i5776.zTest)
  i5776.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5777[7], i5776.zWrite)
  i5776.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5777[8], i5776.culling)
  i5776.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5777[9], i5776.blending)
  i5776.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5777[10], i5776.alphaBlending)
  i5776.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5777[11], i5776.colorWriteMask)
  i5776.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5777[12], i5776.offsetUnits)
  i5776.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5777[13], i5776.offsetFactor)
  i5776.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5777[14], i5776.stencilRef)
  i5776.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5777[15], i5776.stencilReadMask)
  i5776.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5777[16], i5776.stencilWriteMask)
  i5776.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5777[17], i5776.stencilOp)
  i5776.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5777[18], i5776.stencilOpFront)
  i5776.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5777[19], i5776.stencilOpBack)
  var i5779 = i5777[20]
  var i5778 = []
  for(var i = 0; i < i5779.length; i += 1) {
    i5778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5779[i + 0]) );
  }
  i5776.tags = i5778
  var i5781 = i5777[21]
  var i5780 = []
  for(var i = 0; i < i5781.length; i += 1) {
    i5780.push( i5781[i + 0] );
  }
  i5776.passDefinedKeywords = i5780
  var i5783 = i5777[22]
  var i5782 = []
  for(var i = 0; i < i5783.length; i += 1) {
    i5782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5783[i + 0]) );
  }
  i5776.passDefinedKeywordGroups = i5782
  var i5785 = i5777[23]
  var i5784 = []
  for(var i = 0; i < i5785.length; i += 1) {
    i5784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5785[i + 0]) );
  }
  i5776.variants = i5784
  var i5787 = i5777[24]
  var i5786 = []
  for(var i = 0; i < i5787.length; i += 1) {
    i5786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5787[i + 0]) );
  }
  i5776.excludedVariants = i5786
  i5776.hasDepthReader = !!i5777[25]
  return i5776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5789 = data
  i5788.val = i5789[0]
  i5788.name = i5789[1]
  return i5788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5791 = data
  i5790.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5791[0], i5790.src)
  i5790.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5791[1], i5790.dst)
  i5790.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5791[2], i5790.op)
  return i5790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5793 = data
  i5792.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5793[0], i5792.pass)
  i5792.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5793[1], i5792.fail)
  i5792.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5793[2], i5792.zFail)
  i5792.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5793[3], i5792.comp)
  return i5792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5797 = data
  i5796.name = i5797[0]
  i5796.value = i5797[1]
  return i5796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5801 = data
  var i5803 = i5801[0]
  var i5802 = []
  for(var i = 0; i < i5803.length; i += 1) {
    i5802.push( i5803[i + 0] );
  }
  i5800.keywords = i5802
  i5800.hasDiscard = !!i5801[1]
  return i5800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5807 = data
  i5806.passId = i5807[0]
  i5806.subShaderIndex = i5807[1]
  var i5809 = i5807[2]
  var i5808 = []
  for(var i = 0; i < i5809.length; i += 1) {
    i5808.push( i5809[i + 0] );
  }
  i5806.keywords = i5808
  i5806.vertexProgram = i5807[3]
  i5806.fragmentProgram = i5807[4]
  i5806.exportedForWebGl2 = !!i5807[5]
  i5806.readDepth = !!i5807[6]
  return i5806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5813 = data
  request.r(i5813[0], i5813[1], 0, i5812, 'shader')
  i5812.pass = i5813[2]
  return i5812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5817 = data
  i5816.name = i5817[0]
  i5816.type = i5817[1]
  i5816.value = new pc.Vec4( i5817[2], i5817[3], i5817[4], i5817[5] )
  i5816.textureValue = i5817[6]
  i5816.shaderPropertyFlag = i5817[7]
  return i5816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5819 = data
  i5818.name = i5819[0]
  request.r(i5819[1], i5819[2], 0, i5818, 'texture')
  i5818.aabb = i5819[3]
  i5818.vertices = i5819[4]
  i5818.triangles = i5819[5]
  i5818.textureRect = UnityEngine.Rect.MinMaxRect(i5819[6], i5819[7], i5819[8], i5819[9])
  i5818.packedRect = UnityEngine.Rect.MinMaxRect(i5819[10], i5819[11], i5819[12], i5819[13])
  i5818.border = new pc.Vec4( i5819[14], i5819[15], i5819[16], i5819[17] )
  i5818.transparency = i5819[18]
  i5818.bounds = i5819[19]
  i5818.pixelsPerUnit = i5819[20]
  i5818.textureWidth = i5819[21]
  i5818.textureHeight = i5819[22]
  i5818.nativeSize = new pc.Vec2( i5819[23], i5819[24] )
  i5818.pivot = new pc.Vec2( i5819[25], i5819[26] )
  i5818.textureRectOffset = new pc.Vec2( i5819[27], i5819[28] )
  return i5818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5821 = data
  i5820.name = i5821[0]
  return i5820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5823 = data
  i5822.name = i5823[0]
  i5822.wrapMode = i5823[1]
  i5822.isLooping = !!i5823[2]
  i5822.length = i5823[3]
  var i5825 = i5823[4]
  var i5824 = []
  for(var i = 0; i < i5825.length; i += 1) {
    i5824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5825[i + 0]) );
  }
  i5822.curves = i5824
  var i5827 = i5823[5]
  var i5826 = []
  for(var i = 0; i < i5827.length; i += 1) {
    i5826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5827[i + 0]) );
  }
  i5822.events = i5826
  i5822.halfPrecision = !!i5823[6]
  i5822._frameRate = i5823[7]
  i5822.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5823[8], i5822.localBounds)
  i5822.hasMuscleCurves = !!i5823[9]
  var i5829 = i5823[10]
  var i5828 = []
  for(var i = 0; i < i5829.length; i += 1) {
    i5828.push( i5829[i + 0] );
  }
  i5822.clipMuscleConstant = i5828
  i5822.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5823[11], i5822.clipBindingConstant)
  return i5822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5833 = data
  i5832.path = i5833[0]
  i5832.hash = i5833[1]
  i5832.componentType = i5833[2]
  i5832.property = i5833[3]
  i5832.keys = i5833[4]
  var i5835 = i5833[5]
  var i5834 = []
  for(var i = 0; i < i5835.length; i += 1) {
    i5834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5835[i + 0]) );
  }
  i5832.objectReferenceKeys = i5834
  return i5832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5839 = data
  i5838.time = i5839[0]
  request.r(i5839[1], i5839[2], 0, i5838, 'value')
  return i5838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5843 = data
  i5842.functionName = i5843[0]
  i5842.floatParameter = i5843[1]
  i5842.intParameter = i5843[2]
  i5842.stringParameter = i5843[3]
  request.r(i5843[4], i5843[5], 0, i5842, 'objectReferenceParameter')
  i5842.time = i5843[6]
  return i5842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5845 = data
  i5844.center = new pc.Vec3( i5845[0], i5845[1], i5845[2] )
  i5844.extends = new pc.Vec3( i5845[3], i5845[4], i5845[5] )
  return i5844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5849 = data
  var i5851 = i5849[0]
  var i5850 = []
  for(var i = 0; i < i5851.length; i += 1) {
    i5850.push( i5851[i + 0] );
  }
  i5848.genericBindings = i5850
  var i5853 = i5849[1]
  var i5852 = []
  for(var i = 0; i < i5853.length; i += 1) {
    i5852.push( i5853[i + 0] );
  }
  i5848.pptrCurveMapping = i5852
  return i5848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5855 = data
  i5854.name = i5855[0]
  i5854.ascent = i5855[1]
  i5854.originalLineHeight = i5855[2]
  i5854.fontSize = i5855[3]
  var i5857 = i5855[4]
  var i5856 = []
  for(var i = 0; i < i5857.length; i += 1) {
    i5856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5857[i + 0]) );
  }
  i5854.characterInfo = i5856
  request.r(i5855[5], i5855[6], 0, i5854, 'texture')
  i5854.originalFontSize = i5855[7]
  return i5854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5861 = data
  i5860.index = i5861[0]
  i5860.advance = i5861[1]
  i5860.bearing = i5861[2]
  i5860.glyphWidth = i5861[3]
  i5860.glyphHeight = i5861[4]
  i5860.minX = i5861[5]
  i5860.maxX = i5861[6]
  i5860.minY = i5861[7]
  i5860.maxY = i5861[8]
  i5860.uvBottomLeftX = i5861[9]
  i5860.uvBottomLeftY = i5861[10]
  i5860.uvBottomRightX = i5861[11]
  i5860.uvBottomRightY = i5861[12]
  i5860.uvTopLeftX = i5861[13]
  i5860.uvTopLeftY = i5861[14]
  i5860.uvTopRightX = i5861[15]
  i5860.uvTopRightY = i5861[16]
  return i5860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5863 = data
  i5862.name = i5863[0]
  var i5865 = i5863[1]
  var i5864 = []
  for(var i = 0; i < i5865.length; i += 1) {
    i5864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5865[i + 0]) );
  }
  i5862.layers = i5864
  var i5867 = i5863[2]
  var i5866 = []
  for(var i = 0; i < i5867.length; i += 1) {
    i5866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5867[i + 0]) );
  }
  i5862.parameters = i5866
  i5862.animationClips = i5863[3]
  i5862.avatarUnsupported = i5863[4]
  return i5862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5871 = data
  i5870.name = i5871[0]
  i5870.defaultWeight = i5871[1]
  i5870.blendingMode = i5871[2]
  i5870.avatarMask = i5871[3]
  i5870.syncedLayerIndex = i5871[4]
  i5870.syncedLayerAffectsTiming = !!i5871[5]
  i5870.syncedLayers = i5871[6]
  i5870.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5871[7], i5870.stateMachine)
  return i5870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5873 = data
  i5872.id = i5873[0]
  i5872.name = i5873[1]
  i5872.path = i5873[2]
  var i5875 = i5873[3]
  var i5874 = []
  for(var i = 0; i < i5875.length; i += 1) {
    i5874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5875[i + 0]) );
  }
  i5872.states = i5874
  var i5877 = i5873[4]
  var i5876 = []
  for(var i = 0; i < i5877.length; i += 1) {
    i5876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5877[i + 0]) );
  }
  i5872.machines = i5876
  var i5879 = i5873[5]
  var i5878 = []
  for(var i = 0; i < i5879.length; i += 1) {
    i5878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5879[i + 0]) );
  }
  i5872.entryStateTransitions = i5878
  var i5881 = i5873[6]
  var i5880 = []
  for(var i = 0; i < i5881.length; i += 1) {
    i5880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5881[i + 0]) );
  }
  i5872.exitStateTransitions = i5880
  var i5883 = i5873[7]
  var i5882 = []
  for(var i = 0; i < i5883.length; i += 1) {
    i5882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5883[i + 0]) );
  }
  i5872.anyStateTransitions = i5882
  i5872.defaultStateId = i5873[8]
  return i5872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5887 = data
  i5886.id = i5887[0]
  i5886.name = i5887[1]
  i5886.cycleOffset = i5887[2]
  i5886.cycleOffsetParameter = i5887[3]
  i5886.cycleOffsetParameterActive = !!i5887[4]
  i5886.mirror = !!i5887[5]
  i5886.mirrorParameter = i5887[6]
  i5886.mirrorParameterActive = !!i5887[7]
  i5886.motionId = i5887[8]
  i5886.nameHash = i5887[9]
  i5886.fullPathHash = i5887[10]
  i5886.speed = i5887[11]
  i5886.speedParameter = i5887[12]
  i5886.speedParameterActive = !!i5887[13]
  i5886.tag = i5887[14]
  i5886.tagHash = i5887[15]
  i5886.writeDefaultValues = !!i5887[16]
  var i5889 = i5887[17]
  var i5888 = []
  for(var i = 0; i < i5889.length; i += 2) {
  request.r(i5889[i + 0], i5889[i + 1], 2, i5888, '')
  }
  i5886.behaviours = i5888
  var i5891 = i5887[18]
  var i5890 = []
  for(var i = 0; i < i5891.length; i += 1) {
    i5890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5891[i + 0]) );
  }
  i5886.transitions = i5890
  return i5886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5897 = data
  i5896.fullPath = i5897[0]
  i5896.canTransitionToSelf = !!i5897[1]
  i5896.duration = i5897[2]
  i5896.exitTime = i5897[3]
  i5896.hasExitTime = !!i5897[4]
  i5896.hasFixedDuration = !!i5897[5]
  i5896.interruptionSource = i5897[6]
  i5896.offset = i5897[7]
  i5896.orderedInterruption = !!i5897[8]
  i5896.destinationStateId = i5897[9]
  i5896.isExit = !!i5897[10]
  i5896.mute = !!i5897[11]
  i5896.solo = !!i5897[12]
  var i5899 = i5897[13]
  var i5898 = []
  for(var i = 0; i < i5899.length; i += 1) {
    i5898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5899[i + 0]) );
  }
  i5896.conditions = i5898
  return i5896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5905 = data
  i5904.destinationStateId = i5905[0]
  i5904.isExit = !!i5905[1]
  i5904.mute = !!i5905[2]
  i5904.solo = !!i5905[3]
  var i5907 = i5905[4]
  var i5906 = []
  for(var i = 0; i < i5907.length; i += 1) {
    i5906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5907[i + 0]) );
  }
  i5904.conditions = i5906
  return i5904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5911 = data
  i5910.defaultBool = !!i5911[0]
  i5910.defaultFloat = i5911[1]
  i5910.defaultInt = i5911[2]
  i5910.name = i5911[3]
  i5910.nameHash = i5911[4]
  i5910.type = i5911[5]
  return i5910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5915 = data
  i5914.mode = i5915[0]
  i5914.parameter = i5915[1]
  i5914.threshold = i5915[2]
  return i5914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5917 = data
  i5916.name = i5917[0]
  i5916.bytes64 = i5917[1]
  i5916.data = i5917[2]
  return i5916
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5918 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5919 = data
  i5918.hashCode = i5919[0]
  request.r(i5919[1], i5919[2], 0, i5918, 'material')
  i5918.materialHashCode = i5919[3]
  request.r(i5919[4], i5919[5], 0, i5918, 'atlas')
  i5918.normalStyle = i5919[6]
  i5918.normalSpacingOffset = i5919[7]
  i5918.boldStyle = i5919[8]
  i5918.boldSpacing = i5919[9]
  i5918.italicStyle = i5919[10]
  i5918.tabSize = i5919[11]
  i5918.m_Version = i5919[12]
  i5918.m_SourceFontFileGUID = i5919[13]
  request.r(i5919[14], i5919[15], 0, i5918, 'm_SourceFontFile_EditorRef')
  request.r(i5919[16], i5919[17], 0, i5918, 'm_SourceFontFile')
  i5918.m_AtlasPopulationMode = i5919[18]
  i5918.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5919[19], i5918.m_FaceInfo)
  var i5921 = i5919[20]
  var i5920 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5921.length; i += 1) {
    i5920.add(request.d('UnityEngine.TextCore.Glyph', i5921[i + 0]));
  }
  i5918.m_GlyphTable = i5920
  var i5923 = i5919[21]
  var i5922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5923.length; i += 1) {
    i5922.add(request.d('TMPro.TMP_Character', i5923[i + 0]));
  }
  i5918.m_CharacterTable = i5922
  var i5925 = i5919[22]
  var i5924 = []
  for(var i = 0; i < i5925.length; i += 2) {
  request.r(i5925[i + 0], i5925[i + 1], 2, i5924, '')
  }
  i5918.m_AtlasTextures = i5924
  i5918.m_AtlasTextureIndex = i5919[23]
  i5918.m_IsMultiAtlasTexturesEnabled = !!i5919[24]
  i5918.m_ClearDynamicDataOnBuild = !!i5919[25]
  var i5927 = i5919[26]
  var i5926 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5927.length; i += 1) {
    i5926.add(request.d('UnityEngine.TextCore.GlyphRect', i5927[i + 0]));
  }
  i5918.m_UsedGlyphRects = i5926
  var i5929 = i5919[27]
  var i5928 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5929.length; i += 1) {
    i5928.add(request.d('UnityEngine.TextCore.GlyphRect', i5929[i + 0]));
  }
  i5918.m_FreeGlyphRects = i5928
  i5918.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5919[28], i5918.m_fontInfo)
  i5918.m_AtlasWidth = i5919[29]
  i5918.m_AtlasHeight = i5919[30]
  i5918.m_AtlasPadding = i5919[31]
  i5918.m_AtlasRenderMode = i5919[32]
  var i5931 = i5919[33]
  var i5930 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5931.length; i += 1) {
    i5930.add(request.d('TMPro.TMP_Glyph', i5931[i + 0]));
  }
  i5918.m_glyphInfoList = i5930
  i5918.m_KerningTable = request.d('TMPro.KerningTable', i5919[34], i5918.m_KerningTable)
  i5918.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5919[35], i5918.m_FontFeatureTable)
  var i5933 = i5919[36]
  var i5932 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5933.length; i += 2) {
  request.r(i5933[i + 0], i5933[i + 1], 1, i5932, '')
  }
  i5918.fallbackFontAssets = i5932
  var i5935 = i5919[37]
  var i5934 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5935.length; i += 2) {
  request.r(i5935[i + 0], i5935[i + 1], 1, i5934, '')
  }
  i5918.m_FallbackFontAssetTable = i5934
  i5918.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5919[38], i5918.m_CreationSettings)
  var i5937 = i5919[39]
  var i5936 = []
  for(var i = 0; i < i5937.length; i += 1) {
    i5936.push( request.d('TMPro.TMP_FontWeightPair', i5937[i + 0]) );
  }
  i5918.m_FontWeightTable = i5936
  var i5939 = i5919[40]
  var i5938 = []
  for(var i = 0; i < i5939.length; i += 1) {
    i5938.push( request.d('TMPro.TMP_FontWeightPair', i5939[i + 0]) );
  }
  i5918.fontWeights = i5938
  return i5918
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5940 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5941 = data
  i5940.m_FaceIndex = i5941[0]
  i5940.m_FamilyName = i5941[1]
  i5940.m_StyleName = i5941[2]
  i5940.m_PointSize = i5941[3]
  i5940.m_Scale = i5941[4]
  i5940.m_UnitsPerEM = i5941[5]
  i5940.m_LineHeight = i5941[6]
  i5940.m_AscentLine = i5941[7]
  i5940.m_CapLine = i5941[8]
  i5940.m_MeanLine = i5941[9]
  i5940.m_Baseline = i5941[10]
  i5940.m_DescentLine = i5941[11]
  i5940.m_SuperscriptOffset = i5941[12]
  i5940.m_SuperscriptSize = i5941[13]
  i5940.m_SubscriptOffset = i5941[14]
  i5940.m_SubscriptSize = i5941[15]
  i5940.m_UnderlineOffset = i5941[16]
  i5940.m_UnderlineThickness = i5941[17]
  i5940.m_StrikethroughOffset = i5941[18]
  i5940.m_StrikethroughThickness = i5941[19]
  i5940.m_TabWidth = i5941[20]
  return i5940
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5944 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5945 = data
  i5944.m_Index = i5945[0]
  i5944.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5945[1], i5944.m_Metrics)
  i5944.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5945[2], i5944.m_GlyphRect)
  i5944.m_Scale = i5945[3]
  i5944.m_AtlasIndex = i5945[4]
  i5944.m_ClassDefinitionType = i5945[5]
  return i5944
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5946 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5947 = data
  i5946.m_Width = i5947[0]
  i5946.m_Height = i5947[1]
  i5946.m_HorizontalBearingX = i5947[2]
  i5946.m_HorizontalBearingY = i5947[3]
  i5946.m_HorizontalAdvance = i5947[4]
  return i5946
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5948 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5949 = data
  i5948.m_X = i5949[0]
  i5948.m_Y = i5949[1]
  i5948.m_Width = i5949[2]
  i5948.m_Height = i5949[3]
  return i5948
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5952 = root || request.c( 'TMPro.TMP_Character' )
  var i5953 = data
  i5952.m_ElementType = i5953[0]
  i5952.m_Unicode = i5953[1]
  i5952.m_GlyphIndex = i5953[2]
  i5952.m_Scale = i5953[3]
  return i5952
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5958 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5959 = data
  i5958.Name = i5959[0]
  i5958.PointSize = i5959[1]
  i5958.Scale = i5959[2]
  i5958.CharacterCount = i5959[3]
  i5958.LineHeight = i5959[4]
  i5958.Baseline = i5959[5]
  i5958.Ascender = i5959[6]
  i5958.CapHeight = i5959[7]
  i5958.Descender = i5959[8]
  i5958.CenterLine = i5959[9]
  i5958.SuperscriptOffset = i5959[10]
  i5958.SubscriptOffset = i5959[11]
  i5958.SubSize = i5959[12]
  i5958.Underline = i5959[13]
  i5958.UnderlineThickness = i5959[14]
  i5958.strikethrough = i5959[15]
  i5958.strikethroughThickness = i5959[16]
  i5958.TabWidth = i5959[17]
  i5958.Padding = i5959[18]
  i5958.AtlasWidth = i5959[19]
  i5958.AtlasHeight = i5959[20]
  return i5958
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5962 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5963 = data
  i5962.id = i5963[0]
  i5962.x = i5963[1]
  i5962.y = i5963[2]
  i5962.width = i5963[3]
  i5962.height = i5963[4]
  i5962.xOffset = i5963[5]
  i5962.yOffset = i5963[6]
  i5962.xAdvance = i5963[7]
  i5962.scale = i5963[8]
  return i5962
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5964 = root || request.c( 'TMPro.KerningTable' )
  var i5965 = data
  var i5967 = i5965[0]
  var i5966 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5967.length; i += 1) {
    i5966.add(request.d('TMPro.KerningPair', i5967[i + 0]));
  }
  i5964.kerningPairs = i5966
  return i5964
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5970 = root || request.c( 'TMPro.KerningPair' )
  var i5971 = data
  i5970.xOffset = i5971[0]
  i5970.m_FirstGlyph = i5971[1]
  i5970.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5971[2], i5970.m_FirstGlyphAdjustments)
  i5970.m_SecondGlyph = i5971[3]
  i5970.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5971[4], i5970.m_SecondGlyphAdjustments)
  i5970.m_IgnoreSpacingAdjustments = !!i5971[5]
  return i5970
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5972 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5973 = data
  var i5975 = i5973[0]
  var i5974 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5975.length; i += 1) {
    i5974.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i5975[i + 0]));
  }
  i5972.m_GlyphPairAdjustmentRecords = i5974
  return i5972
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5978 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i5979 = data
  i5978.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5979[0], i5978.m_FirstAdjustmentRecord)
  i5978.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5979[1], i5978.m_SecondAdjustmentRecord)
  i5978.m_FeatureLookupFlags = i5979[2]
  return i5978
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5980 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i5981 = data
  i5980.m_GlyphIndex = i5981[0]
  i5980.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i5981[1], i5980.m_GlyphValueRecord)
  return i5980
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i5982 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i5983 = data
  i5982.m_XPlacement = i5983[0]
  i5982.m_YPlacement = i5983[1]
  i5982.m_XAdvance = i5983[2]
  i5982.m_YAdvance = i5983[3]
  return i5982
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5986 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5987 = data
  i5986.sourceFontFileName = i5987[0]
  i5986.sourceFontFileGUID = i5987[1]
  i5986.pointSizeSamplingMode = i5987[2]
  i5986.pointSize = i5987[3]
  i5986.padding = i5987[4]
  i5986.packingMode = i5987[5]
  i5986.atlasWidth = i5987[6]
  i5986.atlasHeight = i5987[7]
  i5986.characterSetSelectionMode = i5987[8]
  i5986.characterSequence = i5987[9]
  i5986.referencedFontAssetGUID = i5987[10]
  i5986.referencedTextAssetGUID = i5987[11]
  i5986.fontStyle = i5987[12]
  i5986.fontStyleModifier = i5987[13]
  i5986.renderMode = i5987[14]
  i5986.includeFontFeatures = !!i5987[15]
  return i5986
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5990 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5991 = data
  request.r(i5991[0], i5991[1], 0, i5990, 'regularTypeface')
  request.r(i5991[2], i5991[3], 0, i5990, 'italicTypeface')
  return i5990
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5992 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5993 = data
  i5992.useSafeMode = !!i5993[0]
  i5992.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5993[1], i5992.safeModeOptions)
  i5992.timeScale = i5993[2]
  i5992.unscaledTimeScale = i5993[3]
  i5992.useSmoothDeltaTime = !!i5993[4]
  i5992.maxSmoothUnscaledTime = i5993[5]
  i5992.rewindCallbackMode = i5993[6]
  i5992.showUnityEditorReport = !!i5993[7]
  i5992.logBehaviour = i5993[8]
  i5992.drawGizmos = !!i5993[9]
  i5992.defaultRecyclable = !!i5993[10]
  i5992.defaultAutoPlay = i5993[11]
  i5992.defaultUpdateType = i5993[12]
  i5992.defaultTimeScaleIndependent = !!i5993[13]
  i5992.defaultEaseType = i5993[14]
  i5992.defaultEaseOvershootOrAmplitude = i5993[15]
  i5992.defaultEasePeriod = i5993[16]
  i5992.defaultAutoKill = !!i5993[17]
  i5992.defaultLoopType = i5993[18]
  i5992.debugMode = !!i5993[19]
  i5992.debugStoreTargetId = !!i5993[20]
  i5992.showPreviewPanel = !!i5993[21]
  i5992.storeSettingsLocation = i5993[22]
  i5992.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5993[23], i5992.modules)
  i5992.createASMDEF = !!i5993[24]
  i5992.showPlayingTweens = !!i5993[25]
  i5992.showPausedTweens = !!i5993[26]
  return i5992
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5994 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5995 = data
  i5994.logBehaviour = i5995[0]
  i5994.nestedTweenFailureBehaviour = i5995[1]
  return i5994
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5996 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5997 = data
  i5996.showPanel = !!i5997[0]
  i5996.audioEnabled = !!i5997[1]
  i5996.physicsEnabled = !!i5997[2]
  i5996.physics2DEnabled = !!i5997[3]
  i5996.spriteEnabled = !!i5997[4]
  i5996.uiEnabled = !!i5997[5]
  i5996.textMeshProEnabled = !!i5997[6]
  i5996.tk2DEnabled = !!i5997[7]
  i5996.deAudioEnabled = !!i5997[8]
  i5996.deUnityExtendedEnabled = !!i5997[9]
  i5996.epoOutlineEnabled = !!i5997[10]
  return i5996
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5998 = root || request.c( 'TMPro.TMP_Settings' )
  var i5999 = data
  i5998.m_enableWordWrapping = !!i5999[0]
  i5998.m_enableKerning = !!i5999[1]
  i5998.m_enableExtraPadding = !!i5999[2]
  i5998.m_enableTintAllSprites = !!i5999[3]
  i5998.m_enableParseEscapeCharacters = !!i5999[4]
  i5998.m_EnableRaycastTarget = !!i5999[5]
  i5998.m_GetFontFeaturesAtRuntime = !!i5999[6]
  i5998.m_missingGlyphCharacter = i5999[7]
  i5998.m_warningsDisabled = !!i5999[8]
  request.r(i5999[9], i5999[10], 0, i5998, 'm_defaultFontAsset')
  i5998.m_defaultFontAssetPath = i5999[11]
  i5998.m_defaultFontSize = i5999[12]
  i5998.m_defaultAutoSizeMinRatio = i5999[13]
  i5998.m_defaultAutoSizeMaxRatio = i5999[14]
  i5998.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5999[15], i5999[16] )
  i5998.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5999[17], i5999[18] )
  i5998.m_autoSizeTextContainer = !!i5999[19]
  i5998.m_IsTextObjectScaleStatic = !!i5999[20]
  var i6001 = i5999[21]
  var i6000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6001.length; i += 2) {
  request.r(i6001[i + 0], i6001[i + 1], 1, i6000, '')
  }
  i5998.m_fallbackFontAssets = i6000
  i5998.m_matchMaterialPreset = !!i5999[22]
  request.r(i5999[23], i5999[24], 0, i5998, 'm_defaultSpriteAsset')
  i5998.m_defaultSpriteAssetPath = i5999[25]
  i5998.m_enableEmojiSupport = !!i5999[26]
  i5998.m_MissingCharacterSpriteUnicode = i5999[27]
  i5998.m_defaultColorGradientPresetsPath = i5999[28]
  request.r(i5999[29], i5999[30], 0, i5998, 'm_defaultStyleSheet')
  i5998.m_StyleSheetsResourcePath = i5999[31]
  request.r(i5999[32], i5999[33], 0, i5998, 'm_leadingCharacters')
  request.r(i5999[34], i5999[35], 0, i5998, 'm_followingCharacters')
  i5998.m_UseModernHangulLineBreakingRules = !!i5999[36]
  return i5998
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i6002 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i6003 = data
  i6002.hashCode = i6003[0]
  request.r(i6003[1], i6003[2], 0, i6002, 'material')
  i6002.materialHashCode = i6003[3]
  request.r(i6003[4], i6003[5], 0, i6002, 'spriteSheet')
  var i6005 = i6003[6]
  var i6004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i6005.length; i += 1) {
    i6004.add(request.d('TMPro.TMP_Sprite', i6005[i + 0]));
  }
  i6002.spriteInfoList = i6004
  var i6007 = i6003[7]
  var i6006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i6007.length; i += 2) {
  request.r(i6007[i + 0], i6007[i + 1], 1, i6006, '')
  }
  i6002.fallbackSpriteAssets = i6006
  i6002.m_Version = i6003[8]
  i6002.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6003[9], i6002.m_FaceInfo)
  var i6009 = i6003[10]
  var i6008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i6009.length; i += 1) {
    i6008.add(request.d('TMPro.TMP_SpriteCharacter', i6009[i + 0]));
  }
  i6002.m_SpriteCharacterTable = i6008
  var i6011 = i6003[11]
  var i6010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i6011.length; i += 1) {
    i6010.add(request.d('TMPro.TMP_SpriteGlyph', i6011[i + 0]));
  }
  i6002.m_SpriteGlyphTable = i6010
  return i6002
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i6014 = root || request.c( 'TMPro.TMP_Sprite' )
  var i6015 = data
  i6014.name = i6015[0]
  i6014.hashCode = i6015[1]
  i6014.unicode = i6015[2]
  i6014.pivot = new pc.Vec2( i6015[3], i6015[4] )
  request.r(i6015[5], i6015[6], 0, i6014, 'sprite')
  i6014.id = i6015[7]
  i6014.x = i6015[8]
  i6014.y = i6015[9]
  i6014.width = i6015[10]
  i6014.height = i6015[11]
  i6014.xOffset = i6015[12]
  i6014.yOffset = i6015[13]
  i6014.xAdvance = i6015[14]
  i6014.scale = i6015[15]
  return i6014
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i6020 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i6021 = data
  i6020.m_Name = i6021[0]
  i6020.m_HashCode = i6021[1]
  i6020.m_ElementType = i6021[2]
  i6020.m_Unicode = i6021[3]
  i6020.m_GlyphIndex = i6021[4]
  i6020.m_Scale = i6021[5]
  return i6020
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i6024 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i6025 = data
  request.r(i6025[0], i6025[1], 0, i6024, 'sprite')
  i6024.m_Index = i6025[2]
  i6024.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6025[3], i6024.m_Metrics)
  i6024.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6025[4], i6024.m_GlyphRect)
  i6024.m_Scale = i6025[5]
  i6024.m_AtlasIndex = i6025[6]
  i6024.m_ClassDefinitionType = i6025[7]
  return i6024
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i6026 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i6027 = data
  var i6029 = i6027[0]
  var i6028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i6029.length; i += 1) {
    i6028.add(request.d('TMPro.TMP_Style', i6029[i + 0]));
  }
  i6026.m_StyleList = i6028
  return i6026
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i6032 = root || request.c( 'TMPro.TMP_Style' )
  var i6033 = data
  i6032.m_Name = i6033[0]
  i6032.m_HashCode = i6033[1]
  i6032.m_OpeningDefinition = i6033[2]
  i6032.m_ClosingDefinition = i6033[3]
  i6032.m_OpeningTagArray = i6033[4]
  i6032.m_ClosingTagArray = i6033[5]
  i6032.m_OpeningTagUnicodeArray = i6033[6]
  i6032.m_ClosingTagUnicodeArray = i6033[7]
  return i6032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6035 = data
  var i6037 = i6035[0]
  var i6036 = []
  for(var i = 0; i < i6037.length; i += 1) {
    i6036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6037[i + 0]) );
  }
  i6034.files = i6036
  i6034.componentToPrefabIds = i6035[1]
  return i6034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6041 = data
  i6040.path = i6041[0]
  request.r(i6041[1], i6041[2], 0, i6040, 'unityObject')
  return i6040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6043 = data
  var i6045 = i6043[0]
  var i6044 = []
  for(var i = 0; i < i6045.length; i += 1) {
    i6044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6045[i + 0]) );
  }
  i6042.scriptsExecutionOrder = i6044
  var i6047 = i6043[1]
  var i6046 = []
  for(var i = 0; i < i6047.length; i += 1) {
    i6046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6047[i + 0]) );
  }
  i6042.sortingLayers = i6046
  var i6049 = i6043[2]
  var i6048 = []
  for(var i = 0; i < i6049.length; i += 1) {
    i6048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6049[i + 0]) );
  }
  i6042.cullingLayers = i6048
  i6042.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6043[3], i6042.timeSettings)
  i6042.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6043[4], i6042.physicsSettings)
  i6042.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6043[5], i6042.physics2DSettings)
  i6042.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6043[6], i6042.qualitySettings)
  i6042.enableRealtimeShadows = !!i6043[7]
  i6042.enableAutoInstancing = !!i6043[8]
  i6042.enableDynamicBatching = !!i6043[9]
  i6042.lightmapEncodingQuality = i6043[10]
  i6042.desiredColorSpace = i6043[11]
  var i6051 = i6043[12]
  var i6050 = []
  for(var i = 0; i < i6051.length; i += 1) {
    i6050.push( i6051[i + 0] );
  }
  i6042.allTags = i6050
  return i6042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6055 = data
  i6054.name = i6055[0]
  i6054.value = i6055[1]
  return i6054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6059 = data
  i6058.id = i6059[0]
  i6058.name = i6059[1]
  i6058.value = i6059[2]
  return i6058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6063 = data
  i6062.id = i6063[0]
  i6062.name = i6063[1]
  return i6062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6065 = data
  i6064.fixedDeltaTime = i6065[0]
  i6064.maximumDeltaTime = i6065[1]
  i6064.timeScale = i6065[2]
  i6064.maximumParticleTimestep = i6065[3]
  return i6064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6067 = data
  i6066.gravity = new pc.Vec3( i6067[0], i6067[1], i6067[2] )
  i6066.defaultSolverIterations = i6067[3]
  i6066.bounceThreshold = i6067[4]
  i6066.autoSyncTransforms = !!i6067[5]
  i6066.autoSimulation = !!i6067[6]
  var i6069 = i6067[7]
  var i6068 = []
  for(var i = 0; i < i6069.length; i += 1) {
    i6068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6069[i + 0]) );
  }
  i6066.collisionMatrix = i6068
  return i6066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6073 = data
  i6072.enabled = !!i6073[0]
  i6072.layerId = i6073[1]
  i6072.otherLayerId = i6073[2]
  return i6072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6075 = data
  request.r(i6075[0], i6075[1], 0, i6074, 'material')
  i6074.gravity = new pc.Vec2( i6075[2], i6075[3] )
  i6074.positionIterations = i6075[4]
  i6074.velocityIterations = i6075[5]
  i6074.velocityThreshold = i6075[6]
  i6074.maxLinearCorrection = i6075[7]
  i6074.maxAngularCorrection = i6075[8]
  i6074.maxTranslationSpeed = i6075[9]
  i6074.maxRotationSpeed = i6075[10]
  i6074.baumgarteScale = i6075[11]
  i6074.baumgarteTOIScale = i6075[12]
  i6074.timeToSleep = i6075[13]
  i6074.linearSleepTolerance = i6075[14]
  i6074.angularSleepTolerance = i6075[15]
  i6074.defaultContactOffset = i6075[16]
  i6074.autoSimulation = !!i6075[17]
  i6074.queriesHitTriggers = !!i6075[18]
  i6074.queriesStartInColliders = !!i6075[19]
  i6074.callbacksOnDisable = !!i6075[20]
  i6074.reuseCollisionCallbacks = !!i6075[21]
  i6074.autoSyncTransforms = !!i6075[22]
  var i6077 = i6075[23]
  var i6076 = []
  for(var i = 0; i < i6077.length; i += 1) {
    i6076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6077[i + 0]) );
  }
  i6074.collisionMatrix = i6076
  return i6074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6081 = data
  i6080.enabled = !!i6081[0]
  i6080.layerId = i6081[1]
  i6080.otherLayerId = i6081[2]
  return i6080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6083 = data
  var i6085 = i6083[0]
  var i6084 = []
  for(var i = 0; i < i6085.length; i += 1) {
    i6084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6085[i + 0]) );
  }
  i6082.qualityLevels = i6084
  var i6087 = i6083[1]
  var i6086 = []
  for(var i = 0; i < i6087.length; i += 1) {
    i6086.push( i6087[i + 0] );
  }
  i6082.names = i6086
  i6082.shadows = i6083[2]
  i6082.anisotropicFiltering = i6083[3]
  i6082.antiAliasing = i6083[4]
  i6082.lodBias = i6083[5]
  i6082.shadowCascades = i6083[6]
  i6082.shadowDistance = i6083[7]
  i6082.shadowmaskMode = i6083[8]
  i6082.shadowProjection = i6083[9]
  i6082.shadowResolution = i6083[10]
  i6082.softParticles = !!i6083[11]
  i6082.softVegetation = !!i6083[12]
  i6082.activeColorSpace = i6083[13]
  i6082.desiredColorSpace = i6083[14]
  i6082.masterTextureLimit = i6083[15]
  i6082.maxQueuedFrames = i6083[16]
  i6082.particleRaycastBudget = i6083[17]
  i6082.pixelLightCount = i6083[18]
  i6082.realtimeReflectionProbes = !!i6083[19]
  i6082.shadowCascade2Split = i6083[20]
  i6082.shadowCascade4Split = new pc.Vec3( i6083[21], i6083[22], i6083[23] )
  i6082.streamingMipmapsActive = !!i6083[24]
  i6082.vSyncCount = i6083[25]
  i6082.asyncUploadBufferSize = i6083[26]
  i6082.asyncUploadTimeSlice = i6083[27]
  i6082.billboardsFaceCameraPosition = !!i6083[28]
  i6082.shadowNearPlaneOffset = i6083[29]
  i6082.streamingMipmapsMemoryBudget = i6083[30]
  i6082.maximumLODLevel = i6083[31]
  i6082.streamingMipmapsAddAllCameras = !!i6083[32]
  i6082.streamingMipmapsMaxLevelReduction = i6083[33]
  i6082.streamingMipmapsRenderersPerFrame = i6083[34]
  i6082.resolutionScalingFixedDPIFactor = i6083[35]
  i6082.streamingMipmapsMaxFileIORequests = i6083[36]
  i6082.currentQualityLevel = i6083[37]
  return i6082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6093 = data
  i6092.weight = i6093[0]
  i6092.vertices = i6093[1]
  i6092.normals = i6093[2]
  i6092.tangents = i6093[3]
  return i6092
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i6094 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i6095 = data
  i6094.xPlacement = i6095[0]
  i6094.yPlacement = i6095[1]
  i6094.xAdvance = i6095[2]
  i6094.yAdvance = i6095[3]
  return i6094
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[73],"74":[40],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[76],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[40],"98":[15],"99":[100],"101":[100],"45":[19],"102":[103],"104":[105],"50":[49],"106":[10],"107":[19],"108":[109],"103":[19],"110":[19],"47":[45],"30":[28,19],"111":[19],"46":[45],"112":[19],"113":[19],"114":[19],"115":[19],"116":[19],"117":[19],"118":[19],"119":[19],"120":[19],"121":[28,19],"122":[19],"123":[19],"124":[19],"125":[19],"105":[28,19],"126":[19],"127":[57],"128":[57],"58":[57],"129":[57],"130":[40],"131":[40],"132":[109],"133":[19],"134":[15,19],"49":[19,28],"135":[19],"136":[28,19],"137":[15],"138":[28,19],"139":[19],"140":[109],"141":[40],"142":[143]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","_InGame.Scripts.Managers.GameManager","GameStateManager","_InGame.Scripts.Managers.DrawingManager","_InGame.Scripts.DrawContollers.DrawingController","_InGame.Scripts.DrawContollers.DrawPointBase","UnityEngine.LineRenderer","UnityEngine.Material","_InGame.Scripts.DrawContollers.DrawPointGenerator","PathCreation.PathCreator","PathCreation.Examples.RoadMeshCreator","UnityEngine.GameObject","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Shader","UnityEngine.RectTransform","_InGame.Scripts.Managers.TutorialManager","PlayableAdsTool.LocalizationController","UnityEngine.TextAsset","TMPro.TMP_FontAsset","UnityEngine.Texture2D","_InGame.Scripts.Utilities.PrefabHolder","PlayableAdsTool.ResponsiveManager","PlayableAdsTool.EndCardController","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","PlayableAdsTool.AudioManager","UnityEngine.AudioClip","UnityEngine.AudioSource","PlayableAdsTool.AudioSourceContainer","PlayableAdsTool.ObjectPoolManager","PlayableAdsTool.CameraManager","UnityEngine.Camera","UnityEngine.AudioListener","Cinemachine.CinemachineBrain","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","TMPro.TextMeshProUGUI","PlayableAdsTool.LocalizedTextTMP","_InGame.Scripts.Others.FillSliderController","FeedbackPanelController","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","TutorialAnimationHelper","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","PlayableAdsTool.LocalizedDropdown","UnityEngine.UI.Dropdown","PlayableAdsTool.LocalizedText","UnityEngine.UI.Text","PathCreation.Examples.GeneratePathExample","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.48f1";

Deserializers.productName = "Matchingham-Playable-Case-Project";

Deserializers.lunaInitializationTime = "02/22/2025 14:51:50";

Deserializers.lunaDaysRunning = "1.3";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "OneLinePlayable";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1854";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4798";

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

Deserializers.buildID = "2f265ac6-0412-42e5-99b1-e58f9df8ed64";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Sirenix","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","UnitySerializationInitializer","InitializeRuntime"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

