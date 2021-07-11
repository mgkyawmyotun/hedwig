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

function useForceUpdate() {
  const [count, setCount] = useState(0);
  return () => {
    setCount((prev) => prev + 1);
  };
}
interface MainProps {}
export const Main: FC<MainProps> = () => {
  const collections = useRef<CollectionsType>([]);
  const forceUpdate = useForceUpdate();
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
    if (collections.current[collectionIndex]) {
      collections.current[collectionIndex].items.push(item);
    }
    // forceUpdate();
  }
  return (
    <div className={styles.main}>
      <MainContext.Provider
        value={{
          collections,
          saveItem,
          createCollection,
        }}
      >
        <Collection />
        <div className={styles.main__function}>
          <RequestResponse />
        </div>
      </MainContext.Provider>
    </div>
  );
};
