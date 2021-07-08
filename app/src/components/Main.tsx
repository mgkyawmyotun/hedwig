import type { FC } from 'react';
import React from 'react';
import styles from '../scss/main.module.scss';
import { Collection } from './collection';
import { RequestResponse } from './requestresponse';
// import {} from 'main'

interface MainProps {}
export const Main: FC<MainProps> = () => {
  return (
    <div className={styles.main}>
      <Collection />
      <div className={styles.main__function}>
        <RequestResponse />
      </div>
    </div>
  );
};
