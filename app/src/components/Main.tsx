import React, { FC, useRef, useState } from 'react';
import {
  CollectionsType,
  MainContext,
  RequestItemType,
} from '../context/MainContext';
import styles from '../scss/main.module.scss';
import { Collection } from './collection';
import { RequestResponse } from './requestresponse';
// import {} from 'main'

interface MainProps {}
export const Main: FC<MainProps> = () => {
  const collections = useRef<CollectionsType>([]);
  const [requestItem, setRequestItem] = useState<RequestItemType>();
  function createCollection(name: string, index: number) {
    if (collections.current[index]) {
      const current = collections.current[index];
      collections.current[index] = {
        name,
        items: current.items,
      };
      return;
    }
    collections.current.push({ name, items: [] });
  }
  function saveItem(item: RequestItemType, collectionIndex: number) {
    isCollectionExits(collectionIndex);
    collections.current[collectionIndex].items.push(item);
  }
  function isCollectionExits(index: number) {
    if (!collections.current[index]) {
      return;
    }
  }
  function onClickRequestItem(itemIndex: number, collectionIndex: number) {
    isCollectionExits(collectionIndex);
    const item = collections.current[collectionIndex].items[itemIndex];
    console.log('Click');
    console.log(item);
    setRequestItem(item);
  }
  return (
    <div className={styles.main}>
      <MainContext.Provider
        value={{
          collections,
          saveItem,
          createCollection,
          onClickRequestItem,
        }}
      >
        <Collection />
        <div className={styles.main__function}>
          <RequestResponse requestItem={requestItem} />
        </div>
      </MainContext.Provider>
    </div>
  );
};
