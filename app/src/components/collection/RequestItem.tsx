import type { FC } from 'react';
import React from 'react';
import { Arrow } from '../../svg/Arrow';
import styles from './../../scss/collection.module.scss';

interface RequestItemProps {
  name: string;
}
export const RequestItem: FC<RequestItemProps> = ({ name }) => {
  return (
    <div className={styles.collection__item__request_item}>
      <Arrow />
      <h1>{name}</h1>
    </div>
  );
};
