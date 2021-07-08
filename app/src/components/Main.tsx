import type { FC } from 'react';
import React from 'react';
import { MainContext } from '../context/MainContext';
import styles from '../scss/main.module.scss';
import { Collection } from './collection';
import { RequestResponse } from './requestresponse';
// import {} from 'main'

function saveItem() {}
interface MainProps {}
export const Main: FC<MainProps> = () => {
  return (
    <div className={styles.main}>
      <MainContext.Provider
        value={{ collection: [{ items: [], name: '' }], saveItem: saveItem }}
      >
        <Collection />
        <div className={styles.main__function}>
          <RequestResponse />
        </div>
      </MainContext.Provider>
    </div>
  );
};
