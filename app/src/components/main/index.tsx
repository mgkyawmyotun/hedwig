import type { FC } from 'react';
import React from 'react';
import styles from '../../scss/main.module.scss';
import { Collection } from './collection';
import { MainFunctionContext } from './MainFunctionContext';
import { RequestForm } from './request';
import { RequestOptionMain } from './request_option';
import { Response } from './response';

export const Main: FC = () => {
  return (
    <div className={styles.main}>
      <Collection />
      <div className={styles.main__function}>
        <MainFunctionContext.Provider value={{ method: 'GET', url: '' }}>
          <RequestForm />
          <RequestOptionMain />
          <Response />
        </MainFunctionContext.Provider>
      </div>
    </div>
  );
};
