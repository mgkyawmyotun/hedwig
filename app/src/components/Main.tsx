import React, { FC, useRef } from 'react';
import { CollectionsType, MainContext } from '../context/MainContext';
import styles from '../scss/main.module.scss';
import { Collection } from './collection';
import { RequestResponse } from './requestresponse';
// import {} from 'main'

function saveItem() {}
interface MainProps {}
export const Main: FC<MainProps> = () => {
  const collections = useRef<CollectionsType>([]);
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
