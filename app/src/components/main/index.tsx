import type { FC } from 'react';
import React from 'react';
import styles from '../../scss/main.module.scss';
import { Button } from './Button';
import { Collection } from './collection';
import { RequestInput } from './RequestInput';
export const Main: FC = () => {
  return (
    <div className={styles.main}>
      <Collection />
      <div>
        <RequestInput />
      </div>
      <Button />
    </div>
  );
};
