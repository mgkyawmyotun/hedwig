import type { FC } from 'react';
import React from 'react';
import styles from '../../scss/main.module.scss';
import { Collection } from './collection';
import { RequestForm } from './request';
import { RequestOptionMain } from './request_option';
export const Main: FC = () => {
  return (
    <div className={styles.main}>
      <Collection />
      <div className={styles.main__function}>
        <RequestForm />
        <RequestOptionMain />
      </div>
    </div>
  );
};
