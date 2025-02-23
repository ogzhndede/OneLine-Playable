using System.Collections.Generic;
using UnityEngine;
using System.Linq;
using System;
using DG.Tweening;

/// <summary>
/// Object Pool class. 
/// It adds the generated objects to a pool and then pulls the destroyed objects back into that pool. 
/// If it needs to be recreated from this object later, it opens and uses the closed object in the pool.
/// </summary>

namespace PlayableAdsTool
{
    public class PooledObjectInfo
    {
        public string LookupString;
        public List<GameObject> InactiveObjects = new List<GameObject>();
    }

    [Serializable]
    public struct PoolContainer
    {
        public GameObject Prefab;
        public int Count;
    }

    public class ObjectPoolManager : MonoBehaviour
    {
        public static List<PooledObjectInfo> ObjectPools = new List<PooledObjectInfo>();

        private GameObject _objectPoolEmptyHolder;

        private static GameObject _gameobjectsEmpty;
        private static GameObject _particleSystemEmpty;

        [SerializeField] private List<PoolContainer> _poolContainers = new List<PoolContainer>();

        void CreateBeginningPool()
        {
            List<GameObject> tempPoolList = new List<GameObject>();
            foreach (var container in _poolContainers)
            {
                for (int i = 0; i < container.Count; i++)
                {
                    var obj = SpawnObjects(container.Prefab, Vector3.zero, Quaternion.identity);
                    tempPoolList.Add(obj);
                }
            }

            foreach (var item in tempPoolList)
            {
                ReturnObjectToPool(item);
            }
        }

        void Awake()
        {
            CreateBeginningPool();
        }

        public static GameObject SpawnObjects(GameObject objectToSpawn, [Bridge.Ref] Vector3 spawnPosition, [Bridge.Ref] Quaternion spawnRotation)
        {
            //Check if there is a pool of spawned object
            PooledObjectInfo pool = ObjectPools.Find(p => p.LookupString == objectToSpawn.name);

            if (pool == null)
            {
                //If there is no pool, create one
                pool = new PooledObjectInfo() { LookupString = objectToSpawn.name };
                ObjectPools.Add(pool);
            }

            GameObject spawnableObj = pool.InactiveObjects.FirstOrDefault();

            if (spawnableObj == null)
            {
                //If there is no inactive objects, spawn new one
                spawnableObj = Instantiate(objectToSpawn, spawnPosition, spawnRotation);
            }
            else
            {
                //If there is an inactive object, reactive it
                spawnableObj.transform.position = spawnPosition;
                spawnableObj.transform.rotation = spawnRotation;
                pool.InactiveObjects.Remove(spawnableObj);
                spawnableObj.SetActive(true);
            }

            return spawnableObj;
        }

        //Overload of SpawnObjects
        public static GameObject SpawnObjects(GameObject objectToSpawn, Transform parentTransform)
        {
            //Check if there is a pool of spawned object
            PooledObjectInfo pool = ObjectPools.Find(p => p.LookupString == objectToSpawn.name);

            if (pool == null)
            {
                //If there is no pool, create one
                pool = new PooledObjectInfo() { LookupString = objectToSpawn.name };
                ObjectPools.Add(pool);
            }

            GameObject spawnableObj = pool.InactiveObjects.FirstOrDefault();

            if (spawnableObj == null)
            {
                //If there is no inactive objects, spawn new one
                spawnableObj = Instantiate(objectToSpawn, parentTransform);
                spawnableObj.transform.SetParent(parentTransform);
            }
            else
            {
                //If there is an inactive object, reactive it
                pool.InactiveObjects.Remove(spawnableObj);
                spawnableObj.SetActive(true);
            }

            return spawnableObj;
        }

        //When an objects destroy, return it to the pool
        public static void ReturnObjectToPool(GameObject obj)
        {
            string goName = obj.name.Substring(0, obj.name.Length - 7); //Cut the (Clone) part from name

            PooledObjectInfo pool = ObjectPools.Find(p => p.LookupString == goName);

            if (pool == null)
            {
                //Debug.LogWarning("There is something wrong about pool! " + obj.name);
            }
            else
            {
                obj.SetActive(false);
                obj.transform.parent = null;
                pool.InactiveObjects.Add(obj);
            }
        }

        public static void ReturnObjectToPool(GameObject obj, float delay)
        {
            DOVirtual.DelayedCall(delay, () =>
            {
                ReturnObjectToPool(obj);
            }).SetLink(obj, LinkBehaviour.KillOnDisable);
        }
    }
}