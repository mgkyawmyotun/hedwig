import type { FC } from 'react';
import React from 'react';
import styles from './../../../scss/collection.module.scss';
import { Arrow } from './../../../svg/Arrow';

interface RequestItemProps {}
export const RequestItem: FC<RequestItemProps> = () => {
  return (
    <div className={styles.collection__item__request_item}>
      <Arrow />
      <h1>getItem</h1>
    </div>
  );
};
