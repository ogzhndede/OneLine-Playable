var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.JointSpring' )
  var i2269 = data
  i2268.spring = i2269[0]
  i2268.damper = i2269[1]
  i2268.targetPosition = i2269[2]
  return i2268
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.JointMotor' )
  var i2271 = data
  i2270.m_TargetVelocity = i2271[0]
  i2270.m_Force = i2271[1]
  i2270.m_FreeSpin = i2271[2]
  return i2270
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2272 = root || request.c( 'UnityEngine.JointLimits' )
  var i2273 = data
  i2272.m_Min = i2273[0]
  i2272.m_Max = i2273[1]
  i2272.m_Bounciness = i2273[2]
  i2272.m_BounceMinVelocity = i2273[3]
  i2272.m_ContactDistance = i2273[4]
  i2272.minBounce = i2273[5]
  i2272.maxBounce = i2273[6]
  return i2272
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2274 = root || request.c( 'UnityEngine.JointDrive' )
  var i2275 = data
  i2274.m_PositionSpring = i2275[0]
  i2274.m_PositionDamper = i2275[1]
  i2274.m_MaximumForce = i2275[2]
  i2274.m_UseAcceleration = i2275[3]
  return i2274
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2276 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2277 = data
  i2276.m_Spring = i2277[0]
  i2276.m_Damper = i2277[1]
  return i2276
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2278 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2279 = data
  i2278.m_Limit = i2279[0]
  i2278.m_Bounciness = i2279[1]
  i2278.m_ContactDistance = i2279[2]
  return i2278
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2281 = data
  i2280.m_ExtremumSlip = i2281[0]
  i2280.m_ExtremumValue = i2281[1]
  i2280.m_AsymptoteSlip = i2281[2]
  i2280.m_AsymptoteValue = i2281[3]
  i2280.m_Stiffness = i2281[4]
  return i2280
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2283 = data
  i2282.m_LowerAngle = i2283[0]
  i2282.m_UpperAngle = i2283[1]
  return i2282
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2285 = data
  i2284.m_MotorSpeed = i2285[0]
  i2284.m_MaximumMotorTorque = i2285[1]
  return i2284
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2287 = data
  i2286.m_DampingRatio = i2287[0]
  i2286.m_Frequency = i2287[1]
  i2286.m_Angle = i2287[2]
  return i2286
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2289 = data
  i2288.m_LowerTranslation = i2289[0]
  i2288.m_UpperTranslation = i2289[1]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2291 = data
  i2290.position = new pc.Vec3( i2291[0], i2291[1], i2291[2] )
  i2290.scale = new pc.Vec3( i2291[3], i2291[4], i2291[5] )
  i2290.rotation = new pc.Quat(i2291[6], i2291[7], i2291[8], i2291[9])
  return i2290
}

Deserializers["_InGame.Scripts.Managers.GameManager"] = function (request, data, root) {
  var i2292 = root || request.c( '_InGame.Scripts.Managers.GameManager' )
  var i2293 = data
  return i2292
}

Deserializers["GameStateManager"] = function (request, data, root) {
  var i2294 = root || request.c( 'GameStateManager' )
  var i2295 = data
  i2294.currentStateType = i2295[0]
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2297 = data
  i2296.name = i2297[0]
  i2296.tagId = i2297[1]
  i2296.enabled = !!i2297[2]
  i2296.isStatic = !!i2297[3]
  i2296.layer = i2297[4]
  return i2296
}

Deserializers["_InGame.Scripts.Managers.DrawingManager"] = function (request, data, root) {
  var i2298 = root || request.c( '_InGame.Scripts.Managers.DrawingManager' )
  var i2299 = data
  i2298.CurrentDrawingData = request.d('_InGame.Scripts.Managers.DrawingData', i2299[0], i2298.CurrentDrawingData)
  var i2301 = i2299[1]
  var i2300 = new (System.Collections.Generic.List$1(Bridge.ns('_InGame.Scripts.Managers.DrawingData')))
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.add(request.d('_InGame.Scripts.Managers.DrawingData', i2301[i + 0]));
  }
  i2298.LevelDrawingList = i2300
  return i2298
}

Deserializers["_InGame.Scripts.Managers.DrawingData"] = function (request, data, root) {
  var i2302 = root || request.c( '_InGame.Scripts.Managers.DrawingData' )
  var i2303 = data
  i2302.type = i2303[0]
  request.r(i2303[1], i2303[2], 0, i2302, 'Object')
  return i2302
}

Deserializers["_InGame.Scripts.DrawContollers.DrawingController"] = function (request, data, root) {
  var i2306 = root || request.c( '_InGame.Scripts.DrawContollers.DrawingController' )
  var i2307 = data
  var i2309 = i2307[0]
  var i2308 = new (System.Collections.Generic.List$1(Bridge.ns('_InGame.Scripts.DrawContollers.DrawPointBase')))
  for(var i = 0; i < i2309.length; i += 2) {
  request.r(i2309[i + 0], i2309[i + 1], 1, i2308, '')
  }
  i2306.AllDrawPoints = i2308
  var i2311 = i2307[1]
  var i2310 = new (System.Collections.Generic.List$1(Bridge.ns('_InGame.Scripts.DrawContollers.DrawPointBase')))
  for(var i = 0; i < i2311.length; i += 2) {
  request.r(i2311[i + 0], i2311[i + 1], 1, i2310, '')
  }
  i2306.SelectedDrawPoints = i2310
  request.r(i2307[2], i2307[3], 0, i2306, '_lineRenderer')
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2315 = data
  i2314.textureMode = i2315[0]
  i2314.alignment = i2315[1]
  i2314.widthCurve = new pc.AnimationCurve( { keys_flow: i2315[2] } )
  i2314.colorGradient = i2315[3] ? new pc.ColorGradient(i2315[3][0], i2315[3][1], i2315[3][2]) : null
  var i2317 = i2315[4]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 3) {
    i2316.push( new pc.Vec3( i2317[i + 0], i2317[i + 1], i2317[i + 2] ) );
  }
  i2314.positions = i2316
  i2314.positionCount = i2315[5]
  i2314.widthMultiplier = i2315[6]
  i2314.startWidth = i2315[7]
  i2314.endWidth = i2315[8]
  i2314.numCornerVertices = i2315[9]
  i2314.numCapVertices = i2315[10]
  i2314.useWorldSpace = !!i2315[11]
  i2314.loop = !!i2315[12]
  i2314.startColor = new pc.Color(i2315[13], i2315[14], i2315[15], i2315[16])
  i2314.endColor = new pc.Color(i2315[17], i2315[18], i2315[19], i2315[20])
  i2314.generateLightingData = !!i2315[21]
  i2314.enabled = !!i2315[22]
  request.r(i2315[23], i2315[24], 0, i2314, 'sharedMaterial')
  var i2319 = i2315[25]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 2) {
  request.r(i2319[i + 0], i2319[i + 1], 2, i2318, '')
  }
  i2314.sharedMaterials = i2318
  i2314.receiveShadows = !!i2315[26]
  i2314.shadowCastingMode = i2315[27]
  i2314.sortingLayerID = i2315[28]
  i2314.sortingOrder = i2315[29]
  i2314.lightmapIndex = i2315[30]
  i2314.lightmapSceneIndex = i2315[31]
  i2314.lightmapScaleOffset = new pc.Vec4( i2315[32], i2315[33], i2315[34], i2315[35] )
  i2314.lightProbeUsage = i2315[36]
  i2314.reflectionProbeUsage = i2315[37]
  return i2314
}

Deserializers["_InGame.Scripts.DrawContollers.DrawPointGenerator"] = function (request, data, root) {
  var i2324 = root || request.c( '_InGame.Scripts.DrawContollers.DrawPointGenerator' )
  var i2325 = data
  request.r(i2325[0], i2325[1], 0, i2324, '_drawingController')
  request.r(i2325[2], i2325[3], 0, i2324, '_pathCreator')
  i2324.HowManyPoints = i2325[4]
  var i2327 = i2325[5]
  var i2326 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2327.length; i += 3) {
    i2326.add(new pc.Vec3( i2327[i + 0], i2327[i + 1], i2327[i + 2] ));
  }
  i2324.GizmoPoints = i2326
  return i2324
}

Deserializers["_InGame.Scripts.DrawContollers.DrawPointBase"] = function (request, data, root) {
  var i2330 = root || request.c( '_InGame.Scripts.DrawContollers.DrawPointBase' )
  var i2331 = data
  i2330._drawPointType = i2331[0]
  i2330.MaxConnectionCount = i2331[1]
  i2330.PointConnectionCount = i2331[2]
  var i2333 = i2331[3]
  var i2332 = new (System.Collections.Generic.List$1(Bridge.ns('_InGame.Scripts.DrawContollers.DrawPointBase')))
  for(var i = 0; i < i2333.length; i += 2) {
  request.r(i2333[i + 0], i2333[i + 1], 1, i2332, '')
  }
  i2330.BorderDrawPoints = i2332
  return i2330
}

Deserializers["PathCreation.PathCreator"] = function (request, data, root) {
  var i2334 = root || request.c( 'PathCreation.PathCreator' )
  var i2335 = data
  i2334.editorData = request.d('PathCreation.PathCreatorData', i2335[0], i2334.editorData)
  i2334.initialized = !!i2335[1]
  return i2334
}

Deserializers["PathCreation.PathCreatorData"] = function (request, data, root) {
  var i2336 = root || request.c( 'PathCreation.PathCreatorData' )
  var i2337 = data
  i2336.vertexPathMaxAngleError = i2337[0]
  i2336.vertexPathMinVertexSpacing = i2337[1]
  i2336.showTransformTool = !!i2337[2]
  i2336.showPathBounds = !!i2337[3]
  i2336.showPerSegmentBounds = !!i2337[4]
  i2336.displayAnchorPoints = !!i2337[5]
  i2336.displayControlPoints = !!i2337[6]
  i2336.bezierHandleScale = i2337[7]
  i2336.globalDisplaySettingsFoldout = !!i2337[8]
  i2336.keepConstantHandleSize = !!i2337[9]
  i2336.showNormalsInVertexMode = !!i2337[10]
  i2336.showBezierPathInVertexMode = !!i2337[11]
  i2336.showDisplayOptions = !!i2337[12]
  i2336.showPathOptions = !!i2337[13]
  i2336.showVertexPathDisplayOptions = !!i2337[14]
  i2336.showVertexPathOptions = !!i2337[15]
  i2336.showNormals = !!i2337[16]
  i2336.showNormalsHelpInfo = !!i2337[17]
  i2336.tabIndex = i2337[18]
  i2336._bezierPath = request.d('PathCreation.BezierPath', i2337[19], i2336._bezierPath)
  i2336.vertexPathUpToDate = !!i2337[20]
  return i2336
}

Deserializers["PathCreation.BezierPath"] = function (request, data, root) {
  var i2338 = root || request.c( 'PathCreation.BezierPath' )
  var i2339 = data
  var i2341 = i2339[0]
  var i2340 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2341.length; i += 3) {
    i2340.add(new pc.Vec3( i2341[i + 0], i2341[i + 1], i2341[i + 2] ));
  }
  i2338.points = i2340
  i2338.isClosed = !!i2339[1]
  i2338.space = i2339[2]
  i2338.controlMode = i2339[3]
  i2338.autoControlLength = i2339[4]
  i2338.boundsUpToDate = !!i2339[5]
  var i2343 = i2339[6]
  var i2342 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.add(i2343[i + 0]);
  }
  i2338.perAnchorNormalsAngle = i2342
  i2338.globalNormalsAngle = i2339[7]
  i2338.flipNormals = !!i2339[8]
  return i2338
}

Deserializers["PathCreation.Examples.RoadMeshCreator"] = function (request, data, root) {
  var i2346 = root || request.c( 'PathCreation.Examples.RoadMeshCreator' )
  var i2347 = data
  request.r(i2347[0], i2347[1], 0, i2346, 'pathCreator')
  i2346.autoUpdate = !!i2347[2]
  i2346.roadWidth = i2347[3]
  i2346.thickness = i2347[4]
  i2346.flattenSurface = !!i2347[5]
  request.r(i2347[6], i2347[7], 0, i2346, 'roadMaterial')
  request.r(i2347[8], i2347[9], 0, i2346, 'undersideMaterial')
  i2346.textureTiling = i2347[10]
  request.r(i2347[11], i2347[12], 0, i2346, 'meshHolder')
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2349 = data
  request.r(i2349[0], i2349[1], 0, i2348, 'sharedMesh')
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2351 = data
  request.r(i2351[0], i2351[1], 0, i2350, 'additionalVertexStreams')
  i2350.enabled = !!i2351[2]
  request.r(i2351[3], i2351[4], 0, i2350, 'sharedMaterial')
  var i2353 = i2351[5]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 2) {
  request.r(i2353[i + 0], i2353[i + 1], 2, i2352, '')
  }
  i2350.sharedMaterials = i2352
  i2350.receiveShadows = !!i2351[6]
  i2350.shadowCastingMode = i2351[7]
  i2350.sortingLayerID = i2351[8]
  i2350.sortingOrder = i2351[9]
  i2350.lightmapIndex = i2351[10]
  i2350.lightmapSceneIndex = i2351[11]
  i2350.lightmapScaleOffset = new pc.Vec4( i2351[12], i2351[13], i2351[14], i2351[15] )
  i2350.lightProbeUsage = i2351[16]
  i2350.reflectionProbeUsage = i2351[17]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2355 = data
  i2354.enabled = !!i2355[0]
  request.r(i2355[1], i2355[2], 0, i2354, 'sharedMaterial')
  var i2357 = i2355[3]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 2) {
  request.r(i2357[i + 0], i2357[i + 1], 2, i2356, '')
  }
  i2354.sharedMaterials = i2356
  i2354.receiveShadows = !!i2355[4]
  i2354.shadowCastingMode = i2355[5]
  i2354.sortingLayerID = i2355[6]
  i2354.sortingOrder = i2355[7]
  i2354.lightmapIndex = i2355[8]
  i2354.lightmapSceneIndex = i2355[9]
  i2354.lightmapScaleOffset = new pc.Vec4( i2355[10], i2355[11], i2355[12], i2355[13] )
  i2354.lightProbeUsage = i2355[14]
  i2354.reflectionProbeUsage = i2355[15]
  i2354.color = new pc.Color(i2355[16], i2355[17], i2355[18], i2355[19])
  request.r(i2355[20], i2355[21], 0, i2354, 'sprite')
  i2354.flipX = !!i2355[22]
  i2354.flipY = !!i2355[23]
  i2354.drawMode = i2355[24]
  i2354.size = new pc.Vec2( i2355[25], i2355[26] )
  i2354.tileMode = i2355[27]
  i2354.adaptiveModeThreshold = i2355[28]
  i2354.maskInteraction = i2355[29]
  i2354.spriteSortPoint = i2355[30]
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2358 = root || new pc.UnityMaterial()
  var i2359 = data
  i2358.name = i2359[0]
  request.r(i2359[1], i2359[2], 0, i2358, 'shader')
  i2358.renderQueue = i2359[3]
  i2358.enableInstancing = !!i2359[4]
  var i2361 = i2359[5]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2361[i + 0]) );
  }
  i2358.floatParameters = i2360
  var i2363 = i2359[6]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2363[i + 0]) );
  }
  i2358.colorParameters = i2362
  var i2365 = i2359[7]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2365[i + 0]) );
  }
  i2358.vectorParameters = i2364
  var i2367 = i2359[8]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2367[i + 0]) );
  }
  i2358.textureParameters = i2366
  var i2369 = i2359[9]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2369[i + 0]) );
  }
  i2358.materialFlags = i2368
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2373 = data
  i2372.name = i2373[0]
  i2372.value = i2373[1]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2377 = data
  i2376.name = i2377[0]
  i2376.value = new pc.Color(i2377[1], i2377[2], i2377[3], i2377[4])
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2381 = data
  i2380.name = i2381[0]
  i2380.value = new pc.Vec4( i2381[1], i2381[2], i2381[3], i2381[4] )
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2385 = data
  i2384.name = i2385[0]
  request.r(i2385[1], i2385[2], 0, i2384, 'value')
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2389 = data
  i2388.name = i2389[0]
  i2388.enabled = !!i2389[1]
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2391 = data
  i2390.name = i2391[0]
  i2390.width = i2391[1]
  i2390.height = i2391[2]
  i2390.mipmapCount = i2391[3]
  i2390.anisoLevel = i2391[4]
  i2390.filterMode = i2391[5]
  i2390.hdr = !!i2391[6]
  i2390.format = i2391[7]
  i2390.wrapMode = i2391[8]
  i2390.alphaIsTransparency = !!i2391[9]
  i2390.alphaSource = i2391[10]
  i2390.graphicsFormat = i2391[11]
  i2390.sRGBTexture = !!i2391[12]
  i2390.desiredColorSpace = i2391[13]
  i2390.wrapU = i2391[14]
  i2390.wrapV = i2391[15]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2393 = data
  i2392.name = i2393[0]
  i2392.halfPrecision = !!i2393[1]
  i2392.useUInt32IndexFormat = !!i2393[2]
  i2392.vertexCount = i2393[3]
  i2392.aabb = i2393[4]
  var i2395 = i2393[5]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.push( !!i2395[i + 0] );
  }
  i2392.streams = i2394
  i2392.vertices = i2393[6]
  var i2397 = i2393[7]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2397[i + 0]) );
  }
  i2392.subMeshes = i2396
  var i2399 = i2393[8]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 16) {
    i2398.push( new pc.Mat4().setData(i2399[i + 0], i2399[i + 1], i2399[i + 2], i2399[i + 3],  i2399[i + 4], i2399[i + 5], i2399[i + 6], i2399[i + 7],  i2399[i + 8], i2399[i + 9], i2399[i + 10], i2399[i + 11],  i2399[i + 12], i2399[i + 13], i2399[i + 14], i2399[i + 15]) );
  }
  i2392.bindposes = i2398
  var i2401 = i2393[9]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2401[i + 0]) );
  }
  i2392.blendShapes = i2400
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2407 = data
  i2406.triangles = i2407[0]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2413 = data
  i2412.name = i2413[0]
  var i2415 = i2413[1]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2415[i + 0]) );
  }
  i2412.frames = i2414
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2417 = data
  i2416.pivot = new pc.Vec2( i2417[0], i2417[1] )
  i2416.anchorMin = new pc.Vec2( i2417[2], i2417[3] )
  i2416.anchorMax = new pc.Vec2( i2417[4], i2417[5] )
  i2416.sizeDelta = new pc.Vec2( i2417[6], i2417[7] )
  i2416.anchoredPosition3D = new pc.Vec3( i2417[8], i2417[9], i2417[10] )
  i2416.rotation = new pc.Quat(i2417[11], i2417[12], i2417[13], i2417[14])
  i2416.scale = new pc.Vec3( i2417[15], i2417[16], i2417[17] )
  return i2416
}

Deserializers["_InGame.Scripts.Managers.TutorialManager"] = function (request, data, root) {
  var i2418 = root || request.c( '_InGame.Scripts.Managers.TutorialManager' )
  var i2419 = data
  var i2421 = i2419[0]
  var i2420 = new (System.Collections.Generic.List$1(Bridge.ns('_InGame.Scripts.Managers.TutorialVariables')))
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.add(request.d('_InGame.Scripts.Managers.TutorialVariables', i2421[i + 0]));
  }
  i2418.Tutorials = i2420
  return i2418
}

Deserializers["_InGame.Scripts.Managers.TutorialVariables"] = function (request, data, root) {
  var i2424 = root || request.c( '_InGame.Scripts.Managers.TutorialVariables' )
  var i2425 = data
  i2424._Type = i2425[0]
  request.r(i2425[1], i2425[2], 0, i2424, 'Object')
  return i2424
}

Deserializers["PlayableAdsTool.LocalizationController"] = function (request, data, root) {
  var i2426 = root || request.c( 'PlayableAdsTool.LocalizationController' )
  var i2427 = data
  var i2429 = i2427[0]
  var i2428 = new (System.Collections.Generic.List$1(Bridge.ns('PlayableAdsTool.Sheet')))
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.add(request.d('PlayableAdsTool.Sheet', i2429[i + 0]));
  }
  i2426.Sheets = i2428
  request.r(i2427[1], i2427[2], 0, i2426, 'CurrentFont')
  request.r(i2427[3], i2427[4], 0, i2426, 'DefaultFont')
  request.r(i2427[5], i2427[6], 0, i2426, 'HindiFont')
  request.r(i2427[7], i2427[8], 0, i2426, 'JapaneseFont')
  request.r(i2427[9], i2427[10], 0, i2426, 'KoreanFont')
  request.r(i2427[11], i2427[12], 0, i2426, 'ThaiFont')
  i2426._languageTest = !!i2427[13]
  i2426._language = i2427[14]
  return i2426
}

Deserializers["PlayableAdsTool.Sheet"] = function (request, data, root) {
  var i2432 = root || request.c( 'PlayableAdsTool.Sheet' )
  var i2433 = data
  i2432.Name = i2433[0]
  i2432.Id = System.Int64(i2433[1])
  request.r(i2433[2], i2433[3], 0, i2432, 'TextAsset')
  return i2432
}

Deserializers["_InGame.Scripts.Utilities.PrefabHolder"] = function (request, data, root) {
  var i2434 = root || request.c( '_InGame.Scripts.Utilities.PrefabHolder' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'DrawPointPrefab')
  return i2434
}

Deserializers["PlayableAdsTool.ResponsiveManager"] = function (request, data, root) {
  var i2436 = root || request.c( 'PlayableAdsTool.ResponsiveManager' )
  var i2437 = data
  i2436.CurrentScreenOrientation = i2437[0]
  i2436.CurrentAspectRatio = i2437[1]
  var i2439 = i2437[2]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( request.d('UIElement', i2439[i + 0]) );
  }
  i2436.UiElements = i2438
  var i2441 = i2437[3]
  var i2440 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.add(request.d('UIData', i2441[i + 0]));
  }
  i2436.Horizantal_20_9 = i2440
  var i2443 = i2437[4]
  var i2442 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.add(request.d('UIData', i2443[i + 0]));
  }
  i2436.Horizantal_16_9 = i2442
  var i2445 = i2437[5]
  var i2444 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.add(request.d('UIData', i2445[i + 0]));
  }
  i2436.Horizantal_4_3 = i2444
  var i2447 = i2437[6]
  var i2446 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.add(request.d('UIData', i2447[i + 0]));
  }
  i2436.Vertical_9_20 = i2446
  var i2449 = i2437[7]
  var i2448 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.add(request.d('UIData', i2449[i + 0]));
  }
  i2436.Vertical_9_16 = i2448
  var i2451 = i2437[8]
  var i2450 = new (System.Collections.Generic.List$1(Bridge.ns('UIData')))
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.add(request.d('UIData', i2451[i + 0]));
  }
  i2436.Vertical_3_4 = i2450
  request.r(i2437[9], i2437[10], 0, i2436, 'Banner')
  return i2436
}

Deserializers["UIElement"] = function (request, data, root) {
  var i2454 = root || request.c( 'UIElement' )
  var i2455 = data
  i2454._rectTransformName = i2455[0]
  request.r(i2455[1], i2455[2], 0, i2454, '_rectTransform')
  return i2454
}

Deserializers["UIData"] = function (request, data, root) {
  var i2458 = root || request.c( 'UIData' )
  var i2459 = data
  i2458.AnchoredPosition = new pc.Vec2( i2459[0], i2459[1] )
  i2458.SizeDelta = new pc.Vec2( i2459[2], i2459[3] )
  i2458.Rotation = new pc.Quat(i2459[4], i2459[5], i2459[6], i2459[7])
  i2458.LocalScale = new pc.Vec3( i2459[8], i2459[9], i2459[10] )
  i2458.AnchorMin = new pc.Vec2( i2459[11], i2459[12] )
  i2458.AnchorMax = new pc.Vec2( i2459[13], i2459[14] )
  i2458.Pivot = new pc.Vec2( i2459[15], i2459[16] )
  return i2458
}

Deserializers["PlayableAdsTool.EndCardController"] = function (request, data, root) {
  var i2460 = root || request.c( 'PlayableAdsTool.EndCardController' )
  var i2461 = data
  i2460._isStoreOpen = !!i2461[0]
  i2460.IsEndCardOpened = !!i2461[1]
  i2460.LastEndCard = !!i2461[2]
  i2460.SendStoreWithEndCard = !!i2461[3]
  i2460._openStoreAfterSeconds = i2461[4]
  i2460._openStoreAfterEndCard = !!i2461[5]
  var i2463 = i2461[6]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 2) {
  request.r(i2463[i + 0], i2463[i + 1], 2, i2462, '')
  }
  i2460._endCards = i2462
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2467 = data
  i2466.cullTransparentMesh = !!i2467[0]
  return i2466
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2468 = root || request.c( 'UnityEngine.UI.Image' )
  var i2469 = data
  request.r(i2469[0], i2469[1], 0, i2468, 'm_Sprite')
  i2468.m_Type = i2469[2]
  i2468.m_PreserveAspect = !!i2469[3]
  i2468.m_FillCenter = !!i2469[4]
  i2468.m_FillMethod = i2469[5]
  i2468.m_FillAmount = i2469[6]
  i2468.m_FillClockwise = !!i2469[7]
  i2468.m_FillOrigin = i2469[8]
  i2468.m_UseSpriteMesh = !!i2469[9]
  i2468.m_PixelsPerUnitMultiplier = i2469[10]
  request.r(i2469[11], i2469[12], 0, i2468, 'm_Material')
  i2468.m_Maskable = !!i2469[13]
  i2468.m_Color = new pc.Color(i2469[14], i2469[15], i2469[16], i2469[17])
  i2468.m_RaycastTarget = !!i2469[18]
  i2468.m_RaycastPadding = new pc.Vec4( i2469[19], i2469[20], i2469[21], i2469[22] )
  return i2468
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2470 = root || request.c( 'UnityEngine.UI.Button' )
  var i2471 = data
  i2470.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2471[0], i2470.m_OnClick)
  i2470.m_Navigation = request.d('UnityEngine.UI.Navigation', i2471[1], i2470.m_Navigation)
  i2470.m_Transition = i2471[2]
  i2470.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2471[3], i2470.m_Colors)
  i2470.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2471[4], i2470.m_SpriteState)
  i2470.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2471[5], i2470.m_AnimationTriggers)
  i2470.m_Interactable = !!i2471[6]
  request.r(i2471[7], i2471[8], 0, i2470, 'm_TargetGraphic')
  return i2470
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2472 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2473 = data
  i2472.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2473[0], i2472.m_PersistentCalls)
  return i2472
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2474 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2475 = data
  var i2477 = i2475[0]
  var i2476 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.add(request.d('UnityEngine.Events.PersistentCall', i2477[i + 0]));
  }
  i2474.m_Calls = i2476
  return i2474
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2480 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2481 = data
  request.r(i2481[0], i2481[1], 0, i2480, 'm_Target')
  i2480.m_TargetAssemblyTypeName = i2481[2]
  i2480.m_MethodName = i2481[3]
  i2480.m_Mode = i2481[4]
  i2480.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2481[5], i2480.m_Arguments)
  i2480.m_CallState = i2481[6]
  return i2480
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2482 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2483 = data
  request.r(i2483[0], i2483[1], 0, i2482, 'm_ObjectArgument')
  i2482.m_ObjectArgumentAssemblyTypeName = i2483[2]
  i2482.m_IntArgument = i2483[3]
  i2482.m_FloatArgument = i2483[4]
  i2482.m_StringArgument = i2483[5]
  i2482.m_BoolArgument = !!i2483[6]
  return i2482
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2484 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2485 = data
  i2484.m_Mode = i2485[0]
  i2484.m_WrapAround = !!i2485[1]
  request.r(i2485[2], i2485[3], 0, i2484, 'm_SelectOnUp')
  request.r(i2485[4], i2485[5], 0, i2484, 'm_SelectOnDown')
  request.r(i2485[6], i2485[7], 0, i2484, 'm_SelectOnLeft')
  request.r(i2485[8], i2485[9], 0, i2484, 'm_SelectOnRight')
  return i2484
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2486 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2487 = data
  i2486.m_NormalColor = new pc.Color(i2487[0], i2487[1], i2487[2], i2487[3])
  i2486.m_HighlightedColor = new pc.Color(i2487[4], i2487[5], i2487[6], i2487[7])
  i2486.m_PressedColor = new pc.Color(i2487[8], i2487[9], i2487[10], i2487[11])
  i2486.m_SelectedColor = new pc.Color(i2487[12], i2487[13], i2487[14], i2487[15])
  i2486.m_DisabledColor = new pc.Color(i2487[16], i2487[17], i2487[18], i2487[19])
  i2486.m_ColorMultiplier = i2487[20]
  i2486.m_FadeDuration = i2487[21]
  return i2486
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2488 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2489 = data
  request.r(i2489[0], i2489[1], 0, i2488, 'm_HighlightedSprite')
  request.r(i2489[2], i2489[3], 0, i2488, 'm_PressedSprite')
  request.r(i2489[4], i2489[5], 0, i2488, 'm_SelectedSprite')
  request.r(i2489[6], i2489[7], 0, i2488, 'm_DisabledSprite')
  return i2488
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2490 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2491 = data
  i2490.m_NormalTrigger = i2491[0]
  i2490.m_HighlightedTrigger = i2491[1]
  i2490.m_PressedTrigger = i2491[2]
  i2490.m_SelectedTrigger = i2491[3]
  i2490.m_DisabledTrigger = i2491[4]
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2493 = data
  i2492.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2493[0], i2492.main)
  i2492.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2493[1], i2492.colorBySpeed)
  i2492.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2493[2], i2492.colorOverLifetime)
  i2492.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2493[3], i2492.emission)
  i2492.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2493[4], i2492.rotationBySpeed)
  i2492.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2493[5], i2492.rotationOverLifetime)
  i2492.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2493[6], i2492.shape)
  i2492.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2493[7], i2492.sizeBySpeed)
  i2492.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2493[8], i2492.sizeOverLifetime)
  i2492.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2493[9], i2492.textureSheetAnimation)
  i2492.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2493[10], i2492.velocityOverLifetime)
  i2492.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2493[11], i2492.noise)
  i2492.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2493[12], i2492.inheritVelocity)
  i2492.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2493[13], i2492.forceOverLifetime)
  i2492.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2493[14], i2492.limitVelocityOverLifetime)
  i2492.useAutoRandomSeed = !!i2493[15]
  i2492.randomSeed = i2493[16]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2494 = root || new pc.ParticleSystemMain()
  var i2495 = data
  i2494.duration = i2495[0]
  i2494.loop = !!i2495[1]
  i2494.prewarm = !!i2495[2]
  i2494.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2495[3], i2494.startDelay)
  i2494.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2495[4], i2494.startLifetime)
  i2494.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2495[5], i2494.startSpeed)
  i2494.startSize3D = !!i2495[6]
  i2494.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2495[7], i2494.startSizeX)
  i2494.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2495[8], i2494.startSizeY)
  i2494.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2495[9], i2494.startSizeZ)
  i2494.startRotation3D = !!i2495[10]
  i2494.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2495[11], i2494.startRotationX)
  i2494.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2495[12], i2494.startRotationY)
  i2494.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2495[13], i2494.startRotationZ)
  i2494.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2495[14], i2494.startColor)
  i2494.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2495[15], i2494.gravityModifier)
  i2494.simulationSpace = i2495[16]
  request.r(i2495[17], i2495[18], 0, i2494, 'customSimulationSpace')
  i2494.simulationSpeed = i2495[19]
  i2494.useUnscaledTime = !!i2495[20]
  i2494.scalingMode = i2495[21]
  i2494.playOnAwake = !!i2495[22]
  i2494.maxParticles = i2495[23]
  i2494.emitterVelocityMode = i2495[24]
  i2494.stopAction = i2495[25]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2496 = root || new pc.MinMaxCurve()
  var i2497 = data
  i2496.mode = i2497[0]
  i2496.curveMin = new pc.AnimationCurve( { keys_flow: i2497[1] } )
  i2496.curveMax = new pc.AnimationCurve( { keys_flow: i2497[2] } )
  i2496.curveMultiplier = i2497[3]
  i2496.constantMin = i2497[4]
  i2496.constantMax = i2497[5]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2498 = root || new pc.MinMaxGradient()
  var i2499 = data
  i2498.mode = i2499[0]
  i2498.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2499[1], i2498.gradientMin)
  i2498.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2499[2], i2498.gradientMax)
  i2498.colorMin = new pc.Color(i2499[3], i2499[4], i2499[5], i2499[6])
  i2498.colorMax = new pc.Color(i2499[7], i2499[8], i2499[9], i2499[10])
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2501 = data
  i2500.mode = i2501[0]
  var i2503 = i2501[1]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2503[i + 0]) );
  }
  i2500.colorKeys = i2502
  var i2505 = i2501[2]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2505[i + 0]) );
  }
  i2500.alphaKeys = i2504
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2509 = data
  i2508.color = new pc.Color(i2509[0], i2509[1], i2509[2], i2509[3])
  i2508.time = i2509[4]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2513 = data
  i2512.alpha = i2513[0]
  i2512.time = i2513[1]
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2514 = root || new pc.ParticleSystemColorBySpeed()
  var i2515 = data
  i2514.enabled = !!i2515[0]
  i2514.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2515[1], i2514.color)
  i2514.range = new pc.Vec2( i2515[2], i2515[3] )
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2516 = root || new pc.ParticleSystemColorOverLifetime()
  var i2517 = data
  i2516.enabled = !!i2517[0]
  i2516.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2517[1], i2516.color)
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2518 = root || new pc.ParticleSystemEmitter()
  var i2519 = data
  i2518.enabled = !!i2519[0]
  i2518.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2519[1], i2518.rateOverTime)
  i2518.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2519[2], i2518.rateOverDistance)
  var i2521 = i2519[3]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2521[i + 0]) );
  }
  i2518.bursts = i2520
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2524 = root || new pc.ParticleSystemBurst()
  var i2525 = data
  i2524.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2525[0], i2524.count)
  i2524.cycleCount = i2525[1]
  i2524.minCount = i2525[2]
  i2524.maxCount = i2525[3]
  i2524.repeatInterval = i2525[4]
  i2524.time = i2525[5]
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2526 = root || new pc.ParticleSystemRotationBySpeed()
  var i2527 = data
  i2526.enabled = !!i2527[0]
  i2526.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2527[1], i2526.x)
  i2526.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2527[2], i2526.y)
  i2526.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2527[3], i2526.z)
  i2526.separateAxes = !!i2527[4]
  i2526.range = new pc.Vec2( i2527[5], i2527[6] )
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2528 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2529 = data
  i2528.enabled = !!i2529[0]
  i2528.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2529[1], i2528.x)
  i2528.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2529[2], i2528.y)
  i2528.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2529[3], i2528.z)
  i2528.separateAxes = !!i2529[4]
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2530 = root || new pc.ParticleSystemShape()
  var i2531 = data
  i2530.enabled = !!i2531[0]
  i2530.shapeType = i2531[1]
  i2530.randomDirectionAmount = i2531[2]
  i2530.sphericalDirectionAmount = i2531[3]
  i2530.randomPositionAmount = i2531[4]
  i2530.alignToDirection = !!i2531[5]
  i2530.radius = i2531[6]
  i2530.radiusMode = i2531[7]
  i2530.radiusSpread = i2531[8]
  i2530.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2531[9], i2530.radiusSpeed)
  i2530.radiusThickness = i2531[10]
  i2530.angle = i2531[11]
  i2530.length = i2531[12]
  i2530.boxThickness = new pc.Vec3( i2531[13], i2531[14], i2531[15] )
  i2530.meshShapeType = i2531[16]
  request.r(i2531[17], i2531[18], 0, i2530, 'mesh')
  request.r(i2531[19], i2531[20], 0, i2530, 'meshRenderer')
  request.r(i2531[21], i2531[22], 0, i2530, 'skinnedMeshRenderer')
  i2530.useMeshMaterialIndex = !!i2531[23]
  i2530.meshMaterialIndex = i2531[24]
  i2530.useMeshColors = !!i2531[25]
  i2530.normalOffset = i2531[26]
  i2530.arc = i2531[27]
  i2530.arcMode = i2531[28]
  i2530.arcSpread = i2531[29]
  i2530.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2531[30], i2530.arcSpeed)
  i2530.donutRadius = i2531[31]
  i2530.position = new pc.Vec3( i2531[32], i2531[33], i2531[34] )
  i2530.rotation = new pc.Vec3( i2531[35], i2531[36], i2531[37] )
  i2530.scale = new pc.Vec3( i2531[38], i2531[39], i2531[40] )
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2532 = root || new pc.ParticleSystemSizeBySpeed()
  var i2533 = data
  i2532.enabled = !!i2533[0]
  i2532.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2533[1], i2532.x)
  i2532.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2533[2], i2532.y)
  i2532.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2533[3], i2532.z)
  i2532.separateAxes = !!i2533[4]
  i2532.range = new pc.Vec2( i2533[5], i2533[6] )
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2534 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2535 = data
  i2534.enabled = !!i2535[0]
  i2534.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[1], i2534.x)
  i2534.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[2], i2534.y)
  i2534.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[3], i2534.z)
  i2534.separateAxes = !!i2535[4]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2536 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2537 = data
  i2536.enabled = !!i2537[0]
  i2536.mode = i2537[1]
  i2536.animation = i2537[2]
  i2536.numTilesX = i2537[3]
  i2536.numTilesY = i2537[4]
  i2536.useRandomRow = !!i2537[5]
  i2536.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2537[6], i2536.frameOverTime)
  i2536.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2537[7], i2536.startFrame)
  i2536.cycleCount = i2537[8]
  i2536.rowIndex = i2537[9]
  i2536.flipU = i2537[10]
  i2536.flipV = i2537[11]
  i2536.spriteCount = i2537[12]
  var i2539 = i2537[13]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 2) {
  request.r(i2539[i + 0], i2539[i + 1], 2, i2538, '')
  }
  i2536.sprites = i2538
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2542 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2543 = data
  i2542.enabled = !!i2543[0]
  i2542.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[1], i2542.x)
  i2542.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[2], i2542.y)
  i2542.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[3], i2542.z)
  i2542.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[4], i2542.radial)
  i2542.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[5], i2542.speedModifier)
  i2542.space = i2543[6]
  i2542.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[7], i2542.orbitalX)
  i2542.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[8], i2542.orbitalY)
  i2542.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[9], i2542.orbitalZ)
  i2542.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[10], i2542.orbitalOffsetX)
  i2542.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[11], i2542.orbitalOffsetY)
  i2542.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[12], i2542.orbitalOffsetZ)
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2544 = root || new pc.ParticleSystemNoise()
  var i2545 = data
  i2544.enabled = !!i2545[0]
  i2544.separateAxes = !!i2545[1]
  i2544.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[2], i2544.strengthX)
  i2544.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[3], i2544.strengthY)
  i2544.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[4], i2544.strengthZ)
  i2544.frequency = i2545[5]
  i2544.damping = !!i2545[6]
  i2544.octaveCount = i2545[7]
  i2544.octaveMultiplier = i2545[8]
  i2544.octaveScale = i2545[9]
  i2544.quality = i2545[10]
  i2544.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[11], i2544.scrollSpeed)
  i2544.scrollSpeedMultiplier = i2545[12]
  i2544.remapEnabled = !!i2545[13]
  i2544.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[14], i2544.remapX)
  i2544.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[15], i2544.remapY)
  i2544.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[16], i2544.remapZ)
  i2544.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[17], i2544.positionAmount)
  i2544.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[18], i2544.rotationAmount)
  i2544.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[19], i2544.sizeAmount)
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2546 = root || new pc.ParticleSystemInheritVelocity()
  var i2547 = data
  i2546.enabled = !!i2547[0]
  i2546.mode = i2547[1]
  i2546.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2547[2], i2546.curve)
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2548 = root || new pc.ParticleSystemForceOverLifetime()
  var i2549 = data
  i2548.enabled = !!i2549[0]
  i2548.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2549[1], i2548.x)
  i2548.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2549[2], i2548.y)
  i2548.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2549[3], i2548.z)
  i2548.space = i2549[4]
  i2548.randomized = !!i2549[5]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2550 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2551 = data
  i2550.enabled = !!i2551[0]
  i2550.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[1], i2550.limit)
  i2550.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[2], i2550.limitX)
  i2550.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[3], i2550.limitY)
  i2550.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[4], i2550.limitZ)
  i2550.dampen = i2551[5]
  i2550.separateAxes = !!i2551[6]
  i2550.space = i2551[7]
  i2550.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[8], i2550.drag)
  i2550.multiplyDragByParticleSize = !!i2551[9]
  i2550.multiplyDragByParticleVelocity = !!i2551[10]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2553 = data
  i2552.enabled = !!i2553[0]
  request.r(i2553[1], i2553[2], 0, i2552, 'sharedMaterial')
  var i2555 = i2553[3]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 2) {
  request.r(i2555[i + 0], i2555[i + 1], 2, i2554, '')
  }
  i2552.sharedMaterials = i2554
  i2552.receiveShadows = !!i2553[4]
  i2552.shadowCastingMode = i2553[5]
  i2552.sortingLayerID = i2553[6]
  i2552.sortingOrder = i2553[7]
  i2552.lightmapIndex = i2553[8]
  i2552.lightmapSceneIndex = i2553[9]
  i2552.lightmapScaleOffset = new pc.Vec4( i2553[10], i2553[11], i2553[12], i2553[13] )
  i2552.lightProbeUsage = i2553[14]
  i2552.reflectionProbeUsage = i2553[15]
  request.r(i2553[16], i2553[17], 0, i2552, 'mesh')
  i2552.meshCount = i2553[18]
  i2552.activeVertexStreamsCount = i2553[19]
  i2552.alignment = i2553[20]
  i2552.renderMode = i2553[21]
  i2552.sortMode = i2553[22]
  i2552.lengthScale = i2553[23]
  i2552.velocityScale = i2553[24]
  i2552.cameraVelocityScale = i2553[25]
  i2552.normalDirection = i2553[26]
  i2552.sortingFudge = i2553[27]
  i2552.minParticleSize = i2553[28]
  i2552.maxParticleSize = i2553[29]
  i2552.pivot = new pc.Vec3( i2553[30], i2553[31], i2553[32] )
  request.r(i2553[33], i2553[34], 0, i2552, 'trailMaterial')
  return i2552
}

Deserializers["PlayableAdsTool.AudioManager"] = function (request, data, root) {
  var i2556 = root || request.c( 'PlayableAdsTool.AudioManager' )
  var i2557 = data
  request.r(i2557[0], i2557[1], 0, i2556, 'AudioSourceContainer')
  var i2559 = i2557[2]
  var i2558 = new (System.Collections.Generic.List$1(Bridge.ns('PlayableAdsTool.SoundTypeListPair')))
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.add(request.d('PlayableAdsTool.SoundTypeListPair', i2559[i + 0]));
  }
  i2556.SoundTypeListPairs = i2558
  return i2556
}

Deserializers["PlayableAdsTool.SoundTypeListPair"] = function (request, data, root) {
  var i2562 = root || request.c( 'PlayableAdsTool.SoundTypeListPair' )
  var i2563 = data
  i2562.type = i2563[0]
  var i2565 = i2563[1]
  var i2564 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i2565.length; i += 2) {
  request.r(i2565[i + 0], i2565[i + 1], 1, i2564, '')
  }
  i2562.clips = i2564
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2569 = data
  request.r(i2569[0], i2569[1], 0, i2568, 'clip')
  request.r(i2569[2], i2569[3], 0, i2568, 'outputAudioMixerGroup')
  i2568.playOnAwake = !!i2569[4]
  i2568.loop = !!i2569[5]
  i2568.time = i2569[6]
  i2568.volume = i2569[7]
  i2568.pitch = i2569[8]
  i2568.enabled = !!i2569[9]
  return i2568
}

Deserializers["PlayableAdsTool.AudioSourceContainer"] = function (request, data, root) {
  var i2570 = root || request.c( 'PlayableAdsTool.AudioSourceContainer' )
  var i2571 = data
  return i2570
}

Deserializers["PlayableAdsTool.ObjectPoolManager"] = function (request, data, root) {
  var i2572 = root || request.c( 'PlayableAdsTool.ObjectPoolManager' )
  var i2573 = data
  var i2575 = i2573[0]
  var i2574 = new (System.Collections.Generic.List$1(Bridge.ns('PlayableAdsTool.PoolContainer')))
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.add(request.d('PlayableAdsTool.PoolContainer', i2575[i + 0]));
  }
  i2572._poolContainers = i2574
  return i2572
}

Deserializers["PlayableAdsTool.PoolContainer"] = function (request, data, root) {
  var i2578 = root || request.c( 'PlayableAdsTool.PoolContainer' )
  var i2579 = data
  request.r(i2579[0], i2579[1], 0, i2578, 'Prefab')
  i2578.Count = i2579[2]
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2581 = data
  i2580.name = i2581[0]
  i2580.atlasId = i2581[1]
  i2580.mipmapCount = i2581[2]
  i2580.hdr = !!i2581[3]
  i2580.size = i2581[4]
  i2580.anisoLevel = i2581[5]
  i2580.filterMode = i2581[6]
  var i2583 = i2581[7]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 4) {
    i2582.push( UnityEngine.Rect.MinMaxRect(i2583[i + 0], i2583[i + 1], i2583[i + 2], i2583[i + 3]) );
  }
  i2580.rects = i2582
  i2580.wrapU = i2581[8]
  i2580.wrapV = i2581[9]
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2587 = data
  i2586.name = i2587[0]
  i2586.index = i2587[1]
  i2586.startup = !!i2587[2]
  return i2586
}

Deserializers["PlayableAdsTool.CameraManager"] = function (request, data, root) {
  var i2588 = root || request.c( 'PlayableAdsTool.CameraManager' )
  var i2589 = data
  i2588.CurrentCamState = i2589[0]
  var i2591 = i2589[1]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 2) {
  request.r(i2591[i + 0], i2591[i + 1], 2, i2590, '')
  }
  i2588._verticalCam_9_20 = i2590
  var i2593 = i2589[2]
  var i2592 = []
  for(var i = 0; i < i2593.length; i += 2) {
  request.r(i2593[i + 0], i2593[i + 1], 2, i2592, '')
  }
  i2588._verticalCam_9_16 = i2592
  var i2595 = i2589[3]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 2) {
  request.r(i2595[i + 0], i2595[i + 1], 2, i2594, '')
  }
  i2588._verticalCam_3_4 = i2594
  var i2597 = i2589[4]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 2) {
  request.r(i2597[i + 0], i2597[i + 1], 2, i2596, '')
  }
  i2588._horizontalCam_20_9 = i2596
  var i2599 = i2589[5]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 2) {
  request.r(i2599[i + 0], i2599[i + 1], 2, i2598, '')
  }
  i2588._horizontalCam_16_9 = i2598
  var i2601 = i2589[6]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 2) {
  request.r(i2601[i + 0], i2601[i + 1], 2, i2600, '')
  }
  i2588._horizontalCam_4_3 = i2600
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2603 = data
  i2602.enabled = !!i2603[0]
  i2602.aspect = i2603[1]
  i2602.orthographic = !!i2603[2]
  i2602.orthographicSize = i2603[3]
  i2602.backgroundColor = new pc.Color(i2603[4], i2603[5], i2603[6], i2603[7])
  i2602.nearClipPlane = i2603[8]
  i2602.farClipPlane = i2603[9]
  i2602.fieldOfView = i2603[10]
  i2602.depth = i2603[11]
  i2602.clearFlags = i2603[12]
  i2602.cullingMask = i2603[13]
  i2602.rect = i2603[14]
  request.r(i2603[15], i2603[16], 0, i2602, 'targetTexture')
  i2602.usePhysicalProperties = !!i2603[17]
  i2602.focalLength = i2603[18]
  i2602.sensorSize = new pc.Vec2( i2603[19], i2603[20] )
  i2602.lensShift = new pc.Vec2( i2603[21], i2603[22] )
  i2602.gateFit = i2603[23]
  i2602.commandBufferCount = i2603[24]
  i2602.cameraType = i2603[25]
  return i2602
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i2604 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i2605 = data
  i2604.m_ShowDebugText = !!i2605[0]
  i2604.m_ShowCameraFrustum = !!i2605[1]
  i2604.m_IgnoreTimeScale = !!i2605[2]
  request.r(i2605[3], i2605[4], 0, i2604, 'm_WorldUpOverride')
  i2604.m_UpdateMethod = i2605[5]
  i2604.m_BlendUpdateMethod = i2605[6]
  i2604.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i2605[7], i2604.m_DefaultBlend)
  request.r(i2605[8], i2605[9], 0, i2604, 'm_CustomBlends')
  i2604.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i2605[10], i2604.m_CameraCutEvent)
  i2604.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i2605[11], i2604.m_CameraActivatedEvent)
  return i2604
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i2606 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i2607 = data
  i2606.m_Style = i2607[0]
  i2606.m_Time = i2607[1]
  i2606.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i2607[2] } )
  return i2606
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i2608 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i2609 = data
  i2608.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2609[0], i2608.m_PersistentCalls)
  return i2608
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i2610 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i2611 = data
  i2610.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2611[0], i2610.m_PersistentCalls)
  return i2610
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i2612 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i2613 = data
  request.r(i2613[0], i2613[1], 0, i2612, 'm_LookAt')
  request.r(i2613[2], i2613[3], 0, i2612, 'm_Follow')
  i2612.m_Lens = request.d('Cinemachine.LensSettings', i2613[4], i2612.m_Lens)
  i2612.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i2613[5], i2612.m_Transitions)
  var i2615 = i2613[6]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.push( i2615[i + 0] );
  }
  i2612.m_ExcludedPropertiesInInspector = i2614
  var i2617 = i2613[7]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( i2617[i + 0] );
  }
  i2612.m_LockStageInInspector = i2616
  i2612.m_Priority = i2613[8]
  i2612.m_StandbyUpdate = i2613[9]
  i2612.m_LegacyBlendHint = i2613[10]
  request.r(i2613[11], i2613[12], 0, i2612, 'm_ComponentOwner')
  i2612.m_StreamingVersion = i2613[13]
  return i2612
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i2618 = root || request.c( 'Cinemachine.LensSettings' )
  var i2619 = data
  i2618.FieldOfView = i2619[0]
  i2618.OrthographicSize = i2619[1]
  i2618.NearClipPlane = i2619[2]
  i2618.FarClipPlane = i2619[3]
  i2618.Dutch = i2619[4]
  i2618.ModeOverride = i2619[5]
  i2618.LensShift = new pc.Vec2( i2619[6], i2619[7] )
  i2618.GateFit = i2619[8]
  i2618.FocusDistance = i2619[9]
  i2618.m_SensorSize = new pc.Vec2( i2619[10], i2619[11] )
  return i2618
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i2620 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i2621 = data
  i2620.m_BlendHint = i2621[0]
  i2620.m_InheritPosition = !!i2621[1]
  i2620.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i2621[2], i2620.m_OnCameraLive)
  return i2620
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i2626 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i2627 = data
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2629 = data
  i2628.enabled = !!i2629[0]
  i2628.planeDistance = i2629[1]
  i2628.referencePixelsPerUnit = i2629[2]
  i2628.isFallbackOverlay = !!i2629[3]
  i2628.renderMode = i2629[4]
  i2628.renderOrder = i2629[5]
  i2628.sortingLayerName = i2629[6]
  i2628.sortingOrder = i2629[7]
  i2628.scaleFactor = i2629[8]
  request.r(i2629[9], i2629[10], 0, i2628, 'worldCamera')
  i2628.overrideSorting = !!i2629[11]
  i2628.pixelPerfect = !!i2629[12]
  i2628.targetDisplay = i2629[13]
  i2628.overridePixelPerfect = !!i2629[14]
  return i2628
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2630 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2631 = data
  i2630.m_UiScaleMode = i2631[0]
  i2630.m_ReferencePixelsPerUnit = i2631[1]
  i2630.m_ScaleFactor = i2631[2]
  i2630.m_ReferenceResolution = new pc.Vec2( i2631[3], i2631[4] )
  i2630.m_ScreenMatchMode = i2631[5]
  i2630.m_MatchWidthOrHeight = i2631[6]
  i2630.m_PhysicalUnit = i2631[7]
  i2630.m_FallbackScreenDPI = i2631[8]
  i2630.m_DefaultSpriteDPI = i2631[9]
  i2630.m_DynamicPixelsPerUnit = i2631[10]
  i2630.m_PresetInfoIsWorld = !!i2631[11]
  return i2630
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2632 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2633 = data
  i2632.m_IgnoreReversedGraphics = !!i2633[0]
  i2632.m_BlockingObjects = i2633[1]
  i2632.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2633[2] )
  return i2632
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2634 = root || request.c( 'UIManager' )
  var i2635 = data
  return i2634
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2636 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2637 = data
  i2636.m_hasFontAssetChanged = !!i2637[0]
  request.r(i2637[1], i2637[2], 0, i2636, 'm_baseMaterial')
  i2636.m_maskOffset = new pc.Vec4( i2637[3], i2637[4], i2637[5], i2637[6] )
  i2636.m_text = i2637[7]
  i2636.m_isRightToLeft = !!i2637[8]
  request.r(i2637[9], i2637[10], 0, i2636, 'm_fontAsset')
  request.r(i2637[11], i2637[12], 0, i2636, 'm_sharedMaterial')
  var i2639 = i2637[13]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 2) {
  request.r(i2639[i + 0], i2639[i + 1], 2, i2638, '')
  }
  i2636.m_fontSharedMaterials = i2638
  request.r(i2637[14], i2637[15], 0, i2636, 'm_fontMaterial')
  var i2641 = i2637[16]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 2) {
  request.r(i2641[i + 0], i2641[i + 1], 2, i2640, '')
  }
  i2636.m_fontMaterials = i2640
  i2636.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2637[17], i2637[18], i2637[19], i2637[20])
  i2636.m_fontColor = new pc.Color(i2637[21], i2637[22], i2637[23], i2637[24])
  i2636.m_enableVertexGradient = !!i2637[25]
  i2636.m_colorMode = i2637[26]
  i2636.m_fontColorGradient = request.d('TMPro.VertexGradient', i2637[27], i2636.m_fontColorGradient)
  request.r(i2637[28], i2637[29], 0, i2636, 'm_fontColorGradientPreset')
  request.r(i2637[30], i2637[31], 0, i2636, 'm_spriteAsset')
  i2636.m_tintAllSprites = !!i2637[32]
  request.r(i2637[33], i2637[34], 0, i2636, 'm_StyleSheet')
  i2636.m_TextStyleHashCode = i2637[35]
  i2636.m_overrideHtmlColors = !!i2637[36]
  i2636.m_faceColor = UnityEngine.Color32.ConstructColor(i2637[37], i2637[38], i2637[39], i2637[40])
  i2636.m_fontSize = i2637[41]
  i2636.m_fontSizeBase = i2637[42]
  i2636.m_fontWeight = i2637[43]
  i2636.m_enableAutoSizing = !!i2637[44]
  i2636.m_fontSizeMin = i2637[45]
  i2636.m_fontSizeMax = i2637[46]
  i2636.m_fontStyle = i2637[47]
  i2636.m_HorizontalAlignment = i2637[48]
  i2636.m_VerticalAlignment = i2637[49]
  i2636.m_textAlignment = i2637[50]
  i2636.m_characterSpacing = i2637[51]
  i2636.m_wordSpacing = i2637[52]
  i2636.m_lineSpacing = i2637[53]
  i2636.m_lineSpacingMax = i2637[54]
  i2636.m_paragraphSpacing = i2637[55]
  i2636.m_charWidthMaxAdj = i2637[56]
  i2636.m_enableWordWrapping = !!i2637[57]
  i2636.m_wordWrappingRatios = i2637[58]
  i2636.m_overflowMode = i2637[59]
  request.r(i2637[60], i2637[61], 0, i2636, 'm_linkedTextComponent')
  request.r(i2637[62], i2637[63], 0, i2636, 'parentLinkedComponent')
  i2636.m_enableKerning = !!i2637[64]
  i2636.m_enableExtraPadding = !!i2637[65]
  i2636.checkPaddingRequired = !!i2637[66]
  i2636.m_isRichText = !!i2637[67]
  i2636.m_parseCtrlCharacters = !!i2637[68]
  i2636.m_isOrthographic = !!i2637[69]
  i2636.m_isCullingEnabled = !!i2637[70]
  i2636.m_horizontalMapping = i2637[71]
  i2636.m_verticalMapping = i2637[72]
  i2636.m_uvLineOffset = i2637[73]
  i2636.m_geometrySortingOrder = i2637[74]
  i2636.m_IsTextObjectScaleStatic = !!i2637[75]
  i2636.m_VertexBufferAutoSizeReduction = !!i2637[76]
  i2636.m_useMaxVisibleDescender = !!i2637[77]
  i2636.m_pageToDisplay = i2637[78]
  i2636.m_margin = new pc.Vec4( i2637[79], i2637[80], i2637[81], i2637[82] )
  i2636.m_isUsingLegacyAnimationComponent = !!i2637[83]
  i2636.m_isVolumetricText = !!i2637[84]
  request.r(i2637[85], i2637[86], 0, i2636, 'm_Material')
  i2636.m_Maskable = !!i2637[87]
  i2636.m_Color = new pc.Color(i2637[88], i2637[89], i2637[90], i2637[91])
  i2636.m_RaycastTarget = !!i2637[92]
  i2636.m_RaycastPadding = new pc.Vec4( i2637[93], i2637[94], i2637[95], i2637[96] )
  return i2636
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2642 = root || request.c( 'TMPro.VertexGradient' )
  var i2643 = data
  i2642.topLeft = new pc.Color(i2643[0], i2643[1], i2643[2], i2643[3])
  i2642.topRight = new pc.Color(i2643[4], i2643[5], i2643[6], i2643[7])
  i2642.bottomLeft = new pc.Color(i2643[8], i2643[9], i2643[10], i2643[11])
  i2642.bottomRight = new pc.Color(i2643[12], i2643[13], i2643[14], i2643[15])
  return i2642
}

Deserializers["PlayableAdsTool.LocalizedTextTMP"] = function (request, data, root) {
  var i2644 = root || request.c( 'PlayableAdsTool.LocalizedTextTMP' )
  var i2645 = data
  i2644.LocalizationKey = i2645[0]
  return i2644
}

Deserializers["_InGame.Scripts.Others.FillSliderController"] = function (request, data, root) {
  var i2646 = root || request.c( '_InGame.Scripts.Others.FillSliderController' )
  var i2647 = data
  request.r(i2647[0], i2647[1], 0, i2646, '_FillImage')
  request.r(i2647[2], i2647[3], 0, i2646, '_BrainObject')
  i2646.BrainLocationMinMax = new pc.Vec2( i2647[4], i2647[5] )
  return i2646
}

Deserializers["FeedbackPanelController"] = function (request, data, root) {
  var i2648 = root || request.c( 'FeedbackPanelController' )
  var i2649 = data
  request.r(i2649[0], i2649[1], 0, i2648, 'WinAnimator')
  request.r(i2649[2], i2649[3], 0, i2648, 'FailAnimator')
  var i2651 = i2649[4]
  var i2650 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i2651.length; i += 2) {
  request.r(i2651[i + 0], i2651[i + 1], 1, i2650, '')
  }
  i2648.Confetties = i2650
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2655 = data
  request.r(i2655[0], i2655[1], 0, i2654, 'animatorController')
  request.r(i2655[2], i2655[3], 0, i2654, 'avatar')
  i2654.updateMode = i2655[4]
  i2654.hasTransformHierarchy = !!i2655[5]
  i2654.applyRootMotion = !!i2655[6]
  var i2657 = i2655[7]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 2) {
  request.r(i2657[i + 0], i2657[i + 1], 2, i2656, '')
  }
  i2654.humanBones = i2656
  i2654.enabled = !!i2655[8]
  return i2654
}

Deserializers["TutorialAnimationHelper"] = function (request, data, root) {
  var i2660 = root || request.c( 'TutorialAnimationHelper' )
  var i2661 = data
  request.r(i2661[0], i2661[1], 0, i2660, '_lineRenderer')
  var i2663 = i2661[2]
  var i2662 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2663.length; i += 2) {
  request.r(i2663[i + 0], i2663[i + 1], 1, i2662, '')
  }
  i2660.LineRendererPoints = i2662
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2667 = data
  i2666.enabled = !!i2667[0]
  i2666.type = i2667[1]
  i2666.color = new pc.Color(i2667[2], i2667[3], i2667[4], i2667[5])
  i2666.cullingMask = i2667[6]
  i2666.intensity = i2667[7]
  i2666.range = i2667[8]
  i2666.spotAngle = i2667[9]
  i2666.shadows = i2667[10]
  i2666.shadowNormalBias = i2667[11]
  i2666.shadowBias = i2667[12]
  i2666.shadowStrength = i2667[13]
  i2666.shadowResolution = i2667[14]
  i2666.lightmapBakeType = i2667[15]
  i2666.renderMode = i2667[16]
  request.r(i2667[17], i2667[18], 0, i2666, 'cookie')
  i2666.cookieSize = i2667[19]
  return i2666
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2668 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2669 = data
  request.r(i2669[0], i2669[1], 0, i2668, 'm_FirstSelected')
  i2668.m_sendNavigationEvents = !!i2669[2]
  i2668.m_DragThreshold = i2669[3]
  return i2668
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2670 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2671 = data
  i2670.m_HorizontalAxis = i2671[0]
  i2670.m_VerticalAxis = i2671[1]
  i2670.m_SubmitButton = i2671[2]
  i2670.m_CancelButton = i2671[3]
  i2670.m_InputActionsPerSecond = i2671[4]
  i2670.m_RepeatDelay = i2671[5]
  i2670.m_ForceModuleActive = !!i2671[6]
  i2670.m_SendPointerHoverToParent = !!i2671[7]
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2673 = data
  i2672.ambientIntensity = i2673[0]
  i2672.reflectionIntensity = i2673[1]
  i2672.ambientMode = i2673[2]
  i2672.ambientLight = new pc.Color(i2673[3], i2673[4], i2673[5], i2673[6])
  i2672.ambientSkyColor = new pc.Color(i2673[7], i2673[8], i2673[9], i2673[10])
  i2672.ambientGroundColor = new pc.Color(i2673[11], i2673[12], i2673[13], i2673[14])
  i2672.ambientEquatorColor = new pc.Color(i2673[15], i2673[16], i2673[17], i2673[18])
  i2672.fogColor = new pc.Color(i2673[19], i2673[20], i2673[21], i2673[22])
  i2672.fogEndDistance = i2673[23]
  i2672.fogStartDistance = i2673[24]
  i2672.fogDensity = i2673[25]
  i2672.fog = !!i2673[26]
  request.r(i2673[27], i2673[28], 0, i2672, 'skybox')
  i2672.fogMode = i2673[29]
  var i2675 = i2673[30]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2675[i + 0]) );
  }
  i2672.lightmaps = i2674
  i2672.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2673[31], i2672.lightProbes)
  i2672.lightmapsMode = i2673[32]
  i2672.mixedBakeMode = i2673[33]
  i2672.environmentLightingMode = i2673[34]
  i2672.ambientProbe = new pc.SphericalHarmonicsL2(i2673[35])
  i2672.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2673[36])
  i2672.useReferenceAmbientProbe = !!i2673[37]
  request.r(i2673[38], i2673[39], 0, i2672, 'customReflection')
  request.r(i2673[40], i2673[41], 0, i2672, 'defaultReflection')
  i2672.defaultReflectionMode = i2673[42]
  i2672.defaultReflectionResolution = i2673[43]
  i2672.sunLightObjectId = i2673[44]
  i2672.pixelLightCount = i2673[45]
  i2672.defaultReflectionHDR = !!i2673[46]
  i2672.hasLightDataAsset = !!i2673[47]
  i2672.hasManualGenerate = !!i2673[48]
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2679 = data
  request.r(i2679[0], i2679[1], 0, i2678, 'lightmapColor')
  request.r(i2679[2], i2679[3], 0, i2678, 'lightmapDirection')
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2680 = root || new UnityEngine.LightProbes()
  var i2681 = data
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2687 = data
  var i2689 = i2687[0]
  var i2688 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2689[i + 0]));
  }
  i2686.ShaderCompilationErrors = i2688
  i2686.name = i2687[1]
  i2686.guid = i2687[2]
  var i2691 = i2687[3]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.push( i2691[i + 0] );
  }
  i2686.shaderDefinedKeywords = i2690
  var i2693 = i2687[4]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2693[i + 0]) );
  }
  i2686.passes = i2692
  var i2695 = i2687[5]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2695[i + 0]) );
  }
  i2686.usePasses = i2694
  var i2697 = i2687[6]
  var i2696 = []
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2697[i + 0]) );
  }
  i2686.defaultParameterValues = i2696
  request.r(i2687[7], i2687[8], 0, i2686, 'unityFallbackShader')
  i2686.readDepth = !!i2687[9]
  i2686.isCreatedByShaderGraph = !!i2687[10]
  i2686.compiled = !!i2687[11]
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2701 = data
  i2700.shaderName = i2701[0]
  i2700.errorMessage = i2701[1]
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2704 = root || new pc.UnityShaderPass()
  var i2705 = data
  i2704.id = i2705[0]
  i2704.subShaderIndex = i2705[1]
  i2704.name = i2705[2]
  i2704.passType = i2705[3]
  i2704.grabPassTextureName = i2705[4]
  i2704.usePass = !!i2705[5]
  i2704.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2705[6], i2704.zTest)
  i2704.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2705[7], i2704.zWrite)
  i2704.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2705[8], i2704.culling)
  i2704.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2705[9], i2704.blending)
  i2704.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2705[10], i2704.alphaBlending)
  i2704.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2705[11], i2704.colorWriteMask)
  i2704.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2705[12], i2704.offsetUnits)
  i2704.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2705[13], i2704.offsetFactor)
  i2704.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2705[14], i2704.stencilRef)
  i2704.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2705[15], i2704.stencilReadMask)
  i2704.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2705[16], i2704.stencilWriteMask)
  i2704.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2705[17], i2704.stencilOp)
  i2704.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2705[18], i2704.stencilOpFront)
  i2704.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2705[19], i2704.stencilOpBack)
  var i2707 = i2705[20]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2707[i + 0]) );
  }
  i2704.tags = i2706
  var i2709 = i2705[21]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( i2709[i + 0] );
  }
  i2704.passDefinedKeywords = i2708
  var i2711 = i2705[22]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2711[i + 0]) );
  }
  i2704.passDefinedKeywordGroups = i2710
  var i2713 = i2705[23]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2713[i + 0]) );
  }
  i2704.variants = i2712
  var i2715 = i2705[24]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2715[i + 0]) );
  }
  i2704.excludedVariants = i2714
  i2704.hasDepthReader = !!i2705[25]
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2717 = data
  i2716.val = i2717[0]
  i2716.name = i2717[1]
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2719 = data
  i2718.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[0], i2718.src)
  i2718.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[1], i2718.dst)
  i2718.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[2], i2718.op)
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2721 = data
  i2720.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2721[0], i2720.pass)
  i2720.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2721[1], i2720.fail)
  i2720.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2721[2], i2720.zFail)
  i2720.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2721[3], i2720.comp)
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2725 = data
  i2724.name = i2725[0]
  i2724.value = i2725[1]
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2729 = data
  var i2731 = i2729[0]
  var i2730 = []
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.push( i2731[i + 0] );
  }
  i2728.keywords = i2730
  i2728.hasDiscard = !!i2729[1]
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2735 = data
  i2734.passId = i2735[0]
  i2734.subShaderIndex = i2735[1]
  var i2737 = i2735[2]
  var i2736 = []
  for(var i = 0; i < i2737.length; i += 1) {
    i2736.push( i2737[i + 0] );
  }
  i2734.keywords = i2736
  i2734.vertexProgram = i2735[3]
  i2734.fragmentProgram = i2735[4]
  i2734.exportedForWebGl2 = !!i2735[5]
  i2734.readDepth = !!i2735[6]
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2741 = data
  request.r(i2741[0], i2741[1], 0, i2740, 'shader')
  i2740.pass = i2741[2]
  return i2740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2745 = data
  i2744.name = i2745[0]
  i2744.type = i2745[1]
  i2744.value = new pc.Vec4( i2745[2], i2745[3], i2745[4], i2745[5] )
  i2744.textureValue = i2745[6]
  i2744.shaderPropertyFlag = i2745[7]
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2747 = data
  i2746.name = i2747[0]
  request.r(i2747[1], i2747[2], 0, i2746, 'texture')
  i2746.aabb = i2747[3]
  i2746.vertices = i2747[4]
  i2746.triangles = i2747[5]
  i2746.textureRect = UnityEngine.Rect.MinMaxRect(i2747[6], i2747[7], i2747[8], i2747[9])
  i2746.packedRect = UnityEngine.Rect.MinMaxRect(i2747[10], i2747[11], i2747[12], i2747[13])
  i2746.border = new pc.Vec4( i2747[14], i2747[15], i2747[16], i2747[17] )
  i2746.transparency = i2747[18]
  i2746.bounds = i2747[19]
  i2746.pixelsPerUnit = i2747[20]
  i2746.textureWidth = i2747[21]
  i2746.textureHeight = i2747[22]
  i2746.nativeSize = new pc.Vec2( i2747[23], i2747[24] )
  i2746.pivot = new pc.Vec2( i2747[25], i2747[26] )
  i2746.textureRectOffset = new pc.Vec2( i2747[27], i2747[28] )
  return i2746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2749 = data
  i2748.name = i2749[0]
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2751 = data
  i2750.name = i2751[0]
  i2750.wrapMode = i2751[1]
  i2750.isLooping = !!i2751[2]
  i2750.length = i2751[3]
  var i2753 = i2751[4]
  var i2752 = []
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2753[i + 0]) );
  }
  i2750.curves = i2752
  var i2755 = i2751[5]
  var i2754 = []
  for(var i = 0; i < i2755.length; i += 1) {
    i2754.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2755[i + 0]) );
  }
  i2750.events = i2754
  i2750.halfPrecision = !!i2751[6]
  i2750._frameRate = i2751[7]
  i2750.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2751[8], i2750.localBounds)
  i2750.hasMuscleCurves = !!i2751[9]
  var i2757 = i2751[10]
  var i2756 = []
  for(var i = 0; i < i2757.length; i += 1) {
    i2756.push( i2757[i + 0] );
  }
  i2750.clipMuscleConstant = i2756
  i2750.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2751[11], i2750.clipBindingConstant)
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2761 = data
  i2760.path = i2761[0]
  i2760.hash = i2761[1]
  i2760.componentType = i2761[2]
  i2760.property = i2761[3]
  i2760.keys = i2761[4]
  var i2763 = i2761[5]
  var i2762 = []
  for(var i = 0; i < i2763.length; i += 1) {
    i2762.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2763[i + 0]) );
  }
  i2760.objectReferenceKeys = i2762
  return i2760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2767 = data
  i2766.time = i2767[0]
  request.r(i2767[1], i2767[2], 0, i2766, 'value')
  return i2766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2771 = data
  i2770.functionName = i2771[0]
  i2770.floatParameter = i2771[1]
  i2770.intParameter = i2771[2]
  i2770.stringParameter = i2771[3]
  request.r(i2771[4], i2771[5], 0, i2770, 'objectReferenceParameter')
  i2770.time = i2771[6]
  return i2770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2773 = data
  i2772.center = new pc.Vec3( i2773[0], i2773[1], i2773[2] )
  i2772.extends = new pc.Vec3( i2773[3], i2773[4], i2773[5] )
  return i2772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2777 = data
  var i2779 = i2777[0]
  var i2778 = []
  for(var i = 0; i < i2779.length; i += 1) {
    i2778.push( i2779[i + 0] );
  }
  i2776.genericBindings = i2778
  var i2781 = i2777[1]
  var i2780 = []
  for(var i = 0; i < i2781.length; i += 1) {
    i2780.push( i2781[i + 0] );
  }
  i2776.pptrCurveMapping = i2780
  return i2776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2783 = data
  i2782.name = i2783[0]
  i2782.ascent = i2783[1]
  i2782.originalLineHeight = i2783[2]
  i2782.fontSize = i2783[3]
  var i2785 = i2783[4]
  var i2784 = []
  for(var i = 0; i < i2785.length; i += 1) {
    i2784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2785[i + 0]) );
  }
  i2782.characterInfo = i2784
  request.r(i2783[5], i2783[6], 0, i2782, 'texture')
  i2782.originalFontSize = i2783[7]
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2789 = data
  i2788.index = i2789[0]
  i2788.advance = i2789[1]
  i2788.bearing = i2789[2]
  i2788.glyphWidth = i2789[3]
  i2788.glyphHeight = i2789[4]
  i2788.minX = i2789[5]
  i2788.maxX = i2789[6]
  i2788.minY = i2789[7]
  i2788.maxY = i2789[8]
  i2788.uvBottomLeftX = i2789[9]
  i2788.uvBottomLeftY = i2789[10]
  i2788.uvBottomRightX = i2789[11]
  i2788.uvBottomRightY = i2789[12]
  i2788.uvTopLeftX = i2789[13]
  i2788.uvTopLeftY = i2789[14]
  i2788.uvTopRightX = i2789[15]
  i2788.uvTopRightY = i2789[16]
  return i2788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2791 = data
  i2790.name = i2791[0]
  var i2793 = i2791[1]
  var i2792 = []
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2793[i + 0]) );
  }
  i2790.layers = i2792
  var i2795 = i2791[2]
  var i2794 = []
  for(var i = 0; i < i2795.length; i += 1) {
    i2794.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2795[i + 0]) );
  }
  i2790.parameters = i2794
  i2790.animationClips = i2791[3]
  i2790.avatarUnsupported = i2791[4]
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2799 = data
  i2798.name = i2799[0]
  i2798.defaultWeight = i2799[1]
  i2798.blendingMode = i2799[2]
  i2798.avatarMask = i2799[3]
  i2798.syncedLayerIndex = i2799[4]
  i2798.syncedLayerAffectsTiming = !!i2799[5]
  i2798.syncedLayers = i2799[6]
  i2798.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2799[7], i2798.stateMachine)
  return i2798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2801 = data
  i2800.id = i2801[0]
  i2800.name = i2801[1]
  i2800.path = i2801[2]
  var i2803 = i2801[3]
  var i2802 = []
  for(var i = 0; i < i2803.length; i += 1) {
    i2802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2803[i + 0]) );
  }
  i2800.states = i2802
  var i2805 = i2801[4]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2805[i + 0]) );
  }
  i2800.machines = i2804
  var i2807 = i2801[5]
  var i2806 = []
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2807[i + 0]) );
  }
  i2800.entryStateTransitions = i2806
  var i2809 = i2801[6]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2809[i + 0]) );
  }
  i2800.exitStateTransitions = i2808
  var i2811 = i2801[7]
  var i2810 = []
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2811[i + 0]) );
  }
  i2800.anyStateTransitions = i2810
  i2800.defaultStateId = i2801[8]
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2815 = data
  i2814.id = i2815[0]
  i2814.name = i2815[1]
  i2814.cycleOffset = i2815[2]
  i2814.cycleOffsetParameter = i2815[3]
  i2814.cycleOffsetParameterActive = !!i2815[4]
  i2814.mirror = !!i2815[5]
  i2814.mirrorParameter = i2815[6]
  i2814.mirrorParameterActive = !!i2815[7]
  i2814.motionId = i2815[8]
  i2814.nameHash = i2815[9]
  i2814.fullPathHash = i2815[10]
  i2814.speed = i2815[11]
  i2814.speedParameter = i2815[12]
  i2814.speedParameterActive = !!i2815[13]
  i2814.tag = i2815[14]
  i2814.tagHash = i2815[15]
  i2814.writeDefaultValues = !!i2815[16]
  var i2817 = i2815[17]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 2) {
  request.r(i2817[i + 0], i2817[i + 1], 2, i2816, '')
  }
  i2814.behaviours = i2816
  var i2819 = i2815[18]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2819[i + 0]) );
  }
  i2814.transitions = i2818
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2825 = data
  i2824.fullPath = i2825[0]
  i2824.canTransitionToSelf = !!i2825[1]
  i2824.duration = i2825[2]
  i2824.exitTime = i2825[3]
  i2824.hasExitTime = !!i2825[4]
  i2824.hasFixedDuration = !!i2825[5]
  i2824.interruptionSource = i2825[6]
  i2824.offset = i2825[7]
  i2824.orderedInterruption = !!i2825[8]
  i2824.destinationStateId = i2825[9]
  i2824.isExit = !!i2825[10]
  i2824.mute = !!i2825[11]
  i2824.solo = !!i2825[12]
  var i2827 = i2825[13]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2827[i + 0]) );
  }
  i2824.conditions = i2826
  return i2824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2833 = data
  i2832.destinationStateId = i2833[0]
  i2832.isExit = !!i2833[1]
  i2832.mute = !!i2833[2]
  i2832.solo = !!i2833[3]
  var i2835 = i2833[4]
  var i2834 = []
  for(var i = 0; i < i2835.length; i += 1) {
    i2834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2835[i + 0]) );
  }
  i2832.conditions = i2834
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2839 = data
  i2838.defaultBool = !!i2839[0]
  i2838.defaultFloat = i2839[1]
  i2838.defaultInt = i2839[2]
  i2838.name = i2839[3]
  i2838.nameHash = i2839[4]
  i2838.type = i2839[5]
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2843 = data
  i2842.mode = i2843[0]
  i2842.parameter = i2843[1]
  i2842.threshold = i2843[2]
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2845 = data
  i2844.name = i2845[0]
  i2844.bytes64 = i2845[1]
  i2844.data = i2845[2]
  return i2844
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2846 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2847 = data
  i2846.hashCode = i2847[0]
  request.r(i2847[1], i2847[2], 0, i2846, 'material')
  i2846.materialHashCode = i2847[3]
  request.r(i2847[4], i2847[5], 0, i2846, 'atlas')
  i2846.normalStyle = i2847[6]
  i2846.normalSpacingOffset = i2847[7]
  i2846.boldStyle = i2847[8]
  i2846.boldSpacing = i2847[9]
  i2846.italicStyle = i2847[10]
  i2846.tabSize = i2847[11]
  i2846.m_Version = i2847[12]
  i2846.m_SourceFontFileGUID = i2847[13]
  request.r(i2847[14], i2847[15], 0, i2846, 'm_SourceFontFile_EditorRef')
  request.r(i2847[16], i2847[17], 0, i2846, 'm_SourceFontFile')
  i2846.m_AtlasPopulationMode = i2847[18]
  i2846.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2847[19], i2846.m_FaceInfo)
  var i2849 = i2847[20]
  var i2848 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.add(request.d('UnityEngine.TextCore.Glyph', i2849[i + 0]));
  }
  i2846.m_GlyphTable = i2848
  var i2851 = i2847[21]
  var i2850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.add(request.d('TMPro.TMP_Character', i2851[i + 0]));
  }
  i2846.m_CharacterTable = i2850
  var i2853 = i2847[22]
  var i2852 = []
  for(var i = 0; i < i2853.length; i += 2) {
  request.r(i2853[i + 0], i2853[i + 1], 2, i2852, '')
  }
  i2846.m_AtlasTextures = i2852
  i2846.m_AtlasTextureIndex = i2847[23]
  i2846.m_IsMultiAtlasTexturesEnabled = !!i2847[24]
  i2846.m_ClearDynamicDataOnBuild = !!i2847[25]
  var i2855 = i2847[26]
  var i2854 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2855.length; i += 1) {
    i2854.add(request.d('UnityEngine.TextCore.GlyphRect', i2855[i + 0]));
  }
  i2846.m_UsedGlyphRects = i2854
  var i2857 = i2847[27]
  var i2856 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.add(request.d('UnityEngine.TextCore.GlyphRect', i2857[i + 0]));
  }
  i2846.m_FreeGlyphRects = i2856
  i2846.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2847[28], i2846.m_fontInfo)
  i2846.m_AtlasWidth = i2847[29]
  i2846.m_AtlasHeight = i2847[30]
  i2846.m_AtlasPadding = i2847[31]
  i2846.m_AtlasRenderMode = i2847[32]
  var i2859 = i2847[33]
  var i2858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.add(request.d('TMPro.TMP_Glyph', i2859[i + 0]));
  }
  i2846.m_glyphInfoList = i2858
  i2846.m_KerningTable = request.d('TMPro.KerningTable', i2847[34], i2846.m_KerningTable)
  i2846.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2847[35], i2846.m_FontFeatureTable)
  var i2861 = i2847[36]
  var i2860 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2861.length; i += 2) {
  request.r(i2861[i + 0], i2861[i + 1], 1, i2860, '')
  }
  i2846.fallbackFontAssets = i2860
  var i2863 = i2847[37]
  var i2862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2863.length; i += 2) {
  request.r(i2863[i + 0], i2863[i + 1], 1, i2862, '')
  }
  i2846.m_FallbackFontAssetTable = i2862
  i2846.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2847[38], i2846.m_CreationSettings)
  var i2865 = i2847[39]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 1) {
    i2864.push( request.d('TMPro.TMP_FontWeightPair', i2865[i + 0]) );
  }
  i2846.m_FontWeightTable = i2864
  var i2867 = i2847[40]
  var i2866 = []
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.push( request.d('TMPro.TMP_FontWeightPair', i2867[i + 0]) );
  }
  i2846.fontWeights = i2866
  return i2846
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2868 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2869 = data
  i2868.m_FaceIndex = i2869[0]
  i2868.m_FamilyName = i2869[1]
  i2868.m_StyleName = i2869[2]
  i2868.m_PointSize = i2869[3]
  i2868.m_Scale = i2869[4]
  i2868.m_UnitsPerEM = i2869[5]
  i2868.m_LineHeight = i2869[6]
  i2868.m_AscentLine = i2869[7]
  i2868.m_CapLine = i2869[8]
  i2868.m_MeanLine = i2869[9]
  i2868.m_Baseline = i2869[10]
  i2868.m_DescentLine = i2869[11]
  i2868.m_SuperscriptOffset = i2869[12]
  i2868.m_SuperscriptSize = i2869[13]
  i2868.m_SubscriptOffset = i2869[14]
  i2868.m_SubscriptSize = i2869[15]
  i2868.m_UnderlineOffset = i2869[16]
  i2868.m_UnderlineThickness = i2869[17]
  i2868.m_StrikethroughOffset = i2869[18]
  i2868.m_StrikethroughThickness = i2869[19]
  i2868.m_TabWidth = i2869[20]
  return i2868
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2872 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2873 = data
  i2872.m_Index = i2873[0]
  i2872.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2873[1], i2872.m_Metrics)
  i2872.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2873[2], i2872.m_GlyphRect)
  i2872.m_Scale = i2873[3]
  i2872.m_AtlasIndex = i2873[4]
  i2872.m_ClassDefinitionType = i2873[5]
  return i2872
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2874 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2875 = data
  i2874.m_Width = i2875[0]
  i2874.m_Height = i2875[1]
  i2874.m_HorizontalBearingX = i2875[2]
  i2874.m_HorizontalBearingY = i2875[3]
  i2874.m_HorizontalAdvance = i2875[4]
  return i2874
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2876 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2877 = data
  i2876.m_X = i2877[0]
  i2876.m_Y = i2877[1]
  i2876.m_Width = i2877[2]
  i2876.m_Height = i2877[3]
  return i2876
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2880 = root || request.c( 'TMPro.TMP_Character' )
  var i2881 = data
  i2880.m_ElementType = i2881[0]
  i2880.m_Unicode = i2881[1]
  i2880.m_GlyphIndex = i2881[2]
  i2880.m_Scale = i2881[3]
  return i2880
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2886 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2887 = data
  i2886.Name = i2887[0]
  i2886.PointSize = i2887[1]
  i2886.Scale = i2887[2]
  i2886.CharacterCount = i2887[3]
  i2886.LineHeight = i2887[4]
  i2886.Baseline = i2887[5]
  i2886.Ascender = i2887[6]
  i2886.CapHeight = i2887[7]
  i2886.Descender = i2887[8]
  i2886.CenterLine = i2887[9]
  i2886.SuperscriptOffset = i2887[10]
  i2886.SubscriptOffset = i2887[11]
  i2886.SubSize = i2887[12]
  i2886.Underline = i2887[13]
  i2886.UnderlineThickness = i2887[14]
  i2886.strikethrough = i2887[15]
  i2886.strikethroughThickness = i2887[16]
  i2886.TabWidth = i2887[17]
  i2886.Padding = i2887[18]
  i2886.AtlasWidth = i2887[19]
  i2886.AtlasHeight = i2887[20]
  return i2886
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2890 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2891 = data
  i2890.id = i2891[0]
  i2890.x = i2891[1]
  i2890.y = i2891[2]
  i2890.width = i2891[3]
  i2890.height = i2891[4]
  i2890.xOffset = i2891[5]
  i2890.yOffset = i2891[6]
  i2890.xAdvance = i2891[7]
  i2890.scale = i2891[8]
  return i2890
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2892 = root || request.c( 'TMPro.KerningTable' )
  var i2893 = data
  var i2895 = i2893[0]
  var i2894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2895.length; i += 1) {
    i2894.add(request.d('TMPro.KerningPair', i2895[i + 0]));
  }
  i2892.kerningPairs = i2894
  return i2892
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2898 = root || request.c( 'TMPro.KerningPair' )
  var i2899 = data
  i2898.xOffset = i2899[0]
  i2898.m_FirstGlyph = i2899[1]
  i2898.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2899[2], i2898.m_FirstGlyphAdjustments)
  i2898.m_SecondGlyph = i2899[3]
  i2898.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2899[4], i2898.m_SecondGlyphAdjustments)
  i2898.m_IgnoreSpacingAdjustments = !!i2899[5]
  return i2898
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2900 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2901 = data
  var i2903 = i2901[0]
  var i2902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2903.length; i += 1) {
    i2902.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2903[i + 0]));
  }
  i2900.m_GlyphPairAdjustmentRecords = i2902
  return i2900
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2906 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2907 = data
  i2906.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2907[0], i2906.m_FirstAdjustmentRecord)
  i2906.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2907[1], i2906.m_SecondAdjustmentRecord)
  i2906.m_FeatureLookupFlags = i2907[2]
  return i2906
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2908 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2909 = data
  i2908.m_GlyphIndex = i2909[0]
  i2908.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2909[1], i2908.m_GlyphValueRecord)
  return i2908
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2910 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2911 = data
  i2910.m_XPlacement = i2911[0]
  i2910.m_YPlacement = i2911[1]
  i2910.m_XAdvance = i2911[2]
  i2910.m_YAdvance = i2911[3]
  return i2910
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2914 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2915 = data
  i2914.sourceFontFileName = i2915[0]
  i2914.sourceFontFileGUID = i2915[1]
  i2914.pointSizeSamplingMode = i2915[2]
  i2914.pointSize = i2915[3]
  i2914.padding = i2915[4]
  i2914.packingMode = i2915[5]
  i2914.atlasWidth = i2915[6]
  i2914.atlasHeight = i2915[7]
  i2914.characterSetSelectionMode = i2915[8]
  i2914.characterSequence = i2915[9]
  i2914.referencedFontAssetGUID = i2915[10]
  i2914.referencedTextAssetGUID = i2915[11]
  i2914.fontStyle = i2915[12]
  i2914.fontStyleModifier = i2915[13]
  i2914.renderMode = i2915[14]
  i2914.includeFontFeatures = !!i2915[15]
  return i2914
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2918 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2919 = data
  request.r(i2919[0], i2919[1], 0, i2918, 'regularTypeface')
  request.r(i2919[2], i2919[3], 0, i2918, 'italicTypeface')
  return i2918
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2920 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2921 = data
  i2920.useSafeMode = !!i2921[0]
  i2920.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2921[1], i2920.safeModeOptions)
  i2920.timeScale = i2921[2]
  i2920.unscaledTimeScale = i2921[3]
  i2920.useSmoothDeltaTime = !!i2921[4]
  i2920.maxSmoothUnscaledTime = i2921[5]
  i2920.rewindCallbackMode = i2921[6]
  i2920.showUnityEditorReport = !!i2921[7]
  i2920.logBehaviour = i2921[8]
  i2920.drawGizmos = !!i2921[9]
  i2920.defaultRecyclable = !!i2921[10]
  i2920.defaultAutoPlay = i2921[11]
  i2920.defaultUpdateType = i2921[12]
  i2920.defaultTimeScaleIndependent = !!i2921[13]
  i2920.defaultEaseType = i2921[14]
  i2920.defaultEaseOvershootOrAmplitude = i2921[15]
  i2920.defaultEasePeriod = i2921[16]
  i2920.defaultAutoKill = !!i2921[17]
  i2920.defaultLoopType = i2921[18]
  i2920.debugMode = !!i2921[19]
  i2920.debugStoreTargetId = !!i2921[20]
  i2920.showPreviewPanel = !!i2921[21]
  i2920.storeSettingsLocation = i2921[22]
  i2920.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2921[23], i2920.modules)
  i2920.createASMDEF = !!i2921[24]
  i2920.showPlayingTweens = !!i2921[25]
  i2920.showPausedTweens = !!i2921[26]
  return i2920
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2922 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2923 = data
  i2922.logBehaviour = i2923[0]
  i2922.nestedTweenFailureBehaviour = i2923[1]
  return i2922
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2924 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2925 = data
  i2924.showPanel = !!i2925[0]
  i2924.audioEnabled = !!i2925[1]
  i2924.physicsEnabled = !!i2925[2]
  i2924.physics2DEnabled = !!i2925[3]
  i2924.spriteEnabled = !!i2925[4]
  i2924.uiEnabled = !!i2925[5]
  i2924.textMeshProEnabled = !!i2925[6]
  i2924.tk2DEnabled = !!i2925[7]
  i2924.deAudioEnabled = !!i2925[8]
  i2924.deUnityExtendedEnabled = !!i2925[9]
  i2924.epoOutlineEnabled = !!i2925[10]
  return i2924
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2926 = root || request.c( 'TMPro.TMP_Settings' )
  var i2927 = data
  i2926.m_enableWordWrapping = !!i2927[0]
  i2926.m_enableKerning = !!i2927[1]
  i2926.m_enableExtraPadding = !!i2927[2]
  i2926.m_enableTintAllSprites = !!i2927[3]
  i2926.m_enableParseEscapeCharacters = !!i2927[4]
  i2926.m_EnableRaycastTarget = !!i2927[5]
  i2926.m_GetFontFeaturesAtRuntime = !!i2927[6]
  i2926.m_missingGlyphCharacter = i2927[7]
  i2926.m_warningsDisabled = !!i2927[8]
  request.r(i2927[9], i2927[10], 0, i2926, 'm_defaultFontAsset')
  i2926.m_defaultFontAssetPath = i2927[11]
  i2926.m_defaultFontSize = i2927[12]
  i2926.m_defaultAutoSizeMinRatio = i2927[13]
  i2926.m_defaultAutoSizeMaxRatio = i2927[14]
  i2926.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2927[15], i2927[16] )
  i2926.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2927[17], i2927[18] )
  i2926.m_autoSizeTextContainer = !!i2927[19]
  i2926.m_IsTextObjectScaleStatic = !!i2927[20]
  var i2929 = i2927[21]
  var i2928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2929.length; i += 2) {
  request.r(i2929[i + 0], i2929[i + 1], 1, i2928, '')
  }
  i2926.m_fallbackFontAssets = i2928
  i2926.m_matchMaterialPreset = !!i2927[22]
  request.r(i2927[23], i2927[24], 0, i2926, 'm_defaultSpriteAsset')
  i2926.m_defaultSpriteAssetPath = i2927[25]
  i2926.m_enableEmojiSupport = !!i2927[26]
  i2926.m_MissingCharacterSpriteUnicode = i2927[27]
  i2926.m_defaultColorGradientPresetsPath = i2927[28]
  request.r(i2927[29], i2927[30], 0, i2926, 'm_defaultStyleSheet')
  i2926.m_StyleSheetsResourcePath = i2927[31]
  request.r(i2927[32], i2927[33], 0, i2926, 'm_leadingCharacters')
  request.r(i2927[34], i2927[35], 0, i2926, 'm_followingCharacters')
  i2926.m_UseModernHangulLineBreakingRules = !!i2927[36]
  return i2926
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2930 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2931 = data
  i2930.hashCode = i2931[0]
  request.r(i2931[1], i2931[2], 0, i2930, 'material')
  i2930.materialHashCode = i2931[3]
  request.r(i2931[4], i2931[5], 0, i2930, 'spriteSheet')
  var i2933 = i2931[6]
  var i2932 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2933.length; i += 1) {
    i2932.add(request.d('TMPro.TMP_Sprite', i2933[i + 0]));
  }
  i2930.spriteInfoList = i2932
  var i2935 = i2931[7]
  var i2934 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2935.length; i += 2) {
  request.r(i2935[i + 0], i2935[i + 1], 1, i2934, '')
  }
  i2930.fallbackSpriteAssets = i2934
  i2930.m_Version = i2931[8]
  i2930.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2931[9], i2930.m_FaceInfo)
  var i2937 = i2931[10]
  var i2936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2937.length; i += 1) {
    i2936.add(request.d('TMPro.TMP_SpriteCharacter', i2937[i + 0]));
  }
  i2930.m_SpriteCharacterTable = i2936
  var i2939 = i2931[11]
  var i2938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2939.length; i += 1) {
    i2938.add(request.d('TMPro.TMP_SpriteGlyph', i2939[i + 0]));
  }
  i2930.m_SpriteGlyphTable = i2938
  return i2930
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2942 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2943 = data
  i2942.name = i2943[0]
  i2942.hashCode = i2943[1]
  i2942.unicode = i2943[2]
  i2942.pivot = new pc.Vec2( i2943[3], i2943[4] )
  request.r(i2943[5], i2943[6], 0, i2942, 'sprite')
  i2942.id = i2943[7]
  i2942.x = i2943[8]
  i2942.y = i2943[9]
  i2942.width = i2943[10]
  i2942.height = i2943[11]
  i2942.xOffset = i2943[12]
  i2942.yOffset = i2943[13]
  i2942.xAdvance = i2943[14]
  i2942.scale = i2943[15]
  return i2942
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2948 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2949 = data
  i2948.m_Name = i2949[0]
  i2948.m_HashCode = i2949[1]
  i2948.m_ElementType = i2949[2]
  i2948.m_Unicode = i2949[3]
  i2948.m_GlyphIndex = i2949[4]
  i2948.m_Scale = i2949[5]
  return i2948
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2952 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2953 = data
  request.r(i2953[0], i2953[1], 0, i2952, 'sprite')
  i2952.m_Index = i2953[2]
  i2952.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2953[3], i2952.m_Metrics)
  i2952.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2953[4], i2952.m_GlyphRect)
  i2952.m_Scale = i2953[5]
  i2952.m_AtlasIndex = i2953[6]
  i2952.m_ClassDefinitionType = i2953[7]
  return i2952
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2954 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2955 = data
  var i2957 = i2955[0]
  var i2956 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2957.length; i += 1) {
    i2956.add(request.d('TMPro.TMP_Style', i2957[i + 0]));
  }
  i2954.m_StyleList = i2956
  return i2954
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2960 = root || request.c( 'TMPro.TMP_Style' )
  var i2961 = data
  i2960.m_Name = i2961[0]
  i2960.m_HashCode = i2961[1]
  i2960.m_OpeningDefinition = i2961[2]
  i2960.m_ClosingDefinition = i2961[3]
  i2960.m_OpeningTagArray = i2961[4]
  i2960.m_ClosingTagArray = i2961[5]
  i2960.m_OpeningTagUnicodeArray = i2961[6]
  i2960.m_ClosingTagUnicodeArray = i2961[7]
  return i2960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2963 = data
  var i2965 = i2963[0]
  var i2964 = []
  for(var i = 0; i < i2965.length; i += 1) {
    i2964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2965[i + 0]) );
  }
  i2962.files = i2964
  i2962.componentToPrefabIds = i2963[1]
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2969 = data
  i2968.path = i2969[0]
  request.r(i2969[1], i2969[2], 0, i2968, 'unityObject')
  return i2968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2971 = data
  var i2973 = i2971[0]
  var i2972 = []
  for(var i = 0; i < i2973.length; i += 1) {
    i2972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2973[i + 0]) );
  }
  i2970.scriptsExecutionOrder = i2972
  var i2975 = i2971[1]
  var i2974 = []
  for(var i = 0; i < i2975.length; i += 1) {
    i2974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2975[i + 0]) );
  }
  i2970.sortingLayers = i2974
  var i2977 = i2971[2]
  var i2976 = []
  for(var i = 0; i < i2977.length; i += 1) {
    i2976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2977[i + 0]) );
  }
  i2970.cullingLayers = i2976
  i2970.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2971[3], i2970.timeSettings)
  i2970.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2971[4], i2970.physicsSettings)
  i2970.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2971[5], i2970.physics2DSettings)
  i2970.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2971[6], i2970.qualitySettings)
  i2970.enableRealtimeShadows = !!i2971[7]
  i2970.enableAutoInstancing = !!i2971[8]
  i2970.enableDynamicBatching = !!i2971[9]
  i2970.lightmapEncodingQuality = i2971[10]
  i2970.desiredColorSpace = i2971[11]
  var i2979 = i2971[12]
  var i2978 = []
  for(var i = 0; i < i2979.length; i += 1) {
    i2978.push( i2979[i + 0] );
  }
  i2970.allTags = i2978
  return i2970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2983 = data
  i2982.name = i2983[0]
  i2982.value = i2983[1]
  return i2982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2987 = data
  i2986.id = i2987[0]
  i2986.name = i2987[1]
  i2986.value = i2987[2]
  return i2986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2991 = data
  i2990.id = i2991[0]
  i2990.name = i2991[1]
  return i2990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2993 = data
  i2992.fixedDeltaTime = i2993[0]
  i2992.maximumDeltaTime = i2993[1]
  i2992.timeScale = i2993[2]
  i2992.maximumParticleTimestep = i2993[3]
  return i2992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2995 = data
  i2994.gravity = new pc.Vec3( i2995[0], i2995[1], i2995[2] )
  i2994.defaultSolverIterations = i2995[3]
  i2994.bounceThreshold = i2995[4]
  i2994.autoSyncTransforms = !!i2995[5]
  i2994.autoSimulation = !!i2995[6]
  var i2997 = i2995[7]
  var i2996 = []
  for(var i = 0; i < i2997.length; i += 1) {
    i2996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2997[i + 0]) );
  }
  i2994.collisionMatrix = i2996
  return i2994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3001 = data
  i3000.enabled = !!i3001[0]
  i3000.layerId = i3001[1]
  i3000.otherLayerId = i3001[2]
  return i3000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3003 = data
  request.r(i3003[0], i3003[1], 0, i3002, 'material')
  i3002.gravity = new pc.Vec2( i3003[2], i3003[3] )
  i3002.positionIterations = i3003[4]
  i3002.velocityIterations = i3003[5]
  i3002.velocityThreshold = i3003[6]
  i3002.maxLinearCorrection = i3003[7]
  i3002.maxAngularCorrection = i3003[8]
  i3002.maxTranslationSpeed = i3003[9]
  i3002.maxRotationSpeed = i3003[10]
  i3002.baumgarteScale = i3003[11]
  i3002.baumgarteTOIScale = i3003[12]
  i3002.timeToSleep = i3003[13]
  i3002.linearSleepTolerance = i3003[14]
  i3002.angularSleepTolerance = i3003[15]
  i3002.defaultContactOffset = i3003[16]
  i3002.autoSimulation = !!i3003[17]
  i3002.queriesHitTriggers = !!i3003[18]
  i3002.queriesStartInColliders = !!i3003[19]
  i3002.callbacksOnDisable = !!i3003[20]
  i3002.reuseCollisionCallbacks = !!i3003[21]
  i3002.autoSyncTransforms = !!i3003[22]
  var i3005 = i3003[23]
  var i3004 = []
  for(var i = 0; i < i3005.length; i += 1) {
    i3004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3005[i + 0]) );
  }
  i3002.collisionMatrix = i3004
  return i3002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3009 = data
  i3008.enabled = !!i3009[0]
  i3008.layerId = i3009[1]
  i3008.otherLayerId = i3009[2]
  return i3008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3011 = data
  var i3013 = i3011[0]
  var i3012 = []
  for(var i = 0; i < i3013.length; i += 1) {
    i3012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3013[i + 0]) );
  }
  i3010.qualityLevels = i3012
  var i3015 = i3011[1]
  var i3014 = []
  for(var i = 0; i < i3015.length; i += 1) {
    i3014.push( i3015[i + 0] );
  }
  i3010.names = i3014
  i3010.shadows = i3011[2]
  i3010.anisotropicFiltering = i3011[3]
  i3010.antiAliasing = i3011[4]
  i3010.lodBias = i3011[5]
  i3010.shadowCascades = i3011[6]
  i3010.shadowDistance = i3011[7]
  i3010.shadowmaskMode = i3011[8]
  i3010.shadowProjection = i3011[9]
  i3010.shadowResolution = i3011[10]
  i3010.softParticles = !!i3011[11]
  i3010.softVegetation = !!i3011[12]
  i3010.activeColorSpace = i3011[13]
  i3010.desiredColorSpace = i3011[14]
  i3010.masterTextureLimit = i3011[15]
  i3010.maxQueuedFrames = i3011[16]
  i3010.particleRaycastBudget = i3011[17]
  i3010.pixelLightCount = i3011[18]
  i3010.realtimeReflectionProbes = !!i3011[19]
  i3010.shadowCascade2Split = i3011[20]
  i3010.shadowCascade4Split = new pc.Vec3( i3011[21], i3011[22], i3011[23] )
  i3010.streamingMipmapsActive = !!i3011[24]
  i3010.vSyncCount = i3011[25]
  i3010.asyncUploadBufferSize = i3011[26]
  i3010.asyncUploadTimeSlice = i3011[27]
  i3010.billboardsFaceCameraPosition = !!i3011[28]
  i3010.shadowNearPlaneOffset = i3011[29]
  i3010.streamingMipmapsMemoryBudget = i3011[30]
  i3010.maximumLODLevel = i3011[31]
  i3010.streamingMipmapsAddAllCameras = !!i3011[32]
  i3010.streamingMipmapsMaxLevelReduction = i3011[33]
  i3010.streamingMipmapsRenderersPerFrame = i3011[34]
  i3010.resolutionScalingFixedDPIFactor = i3011[35]
  i3010.streamingMipmapsMaxFileIORequests = i3011[36]
  i3010.currentQualityLevel = i3011[37]
  return i3010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3021 = data
  i3020.weight = i3021[0]
  i3020.vertices = i3021[1]
  i3020.normals = i3021[2]
  i3020.tangents = i3021[3]
  return i3020
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3022 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3023 = data
  i3022.xPlacement = i3023[0]
  i3022.yPlacement = i3023[1]
  i3022.xAdvance = i3023[2]
  i3022.yAdvance = i3023[3]
  return i3022
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

Deserializers.buildID = "8f7d7d8b-45d5-470e-86ee-5490bc6fc4f8";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Sirenix","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","UnitySerializationInitializer","InitializeRuntime"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

