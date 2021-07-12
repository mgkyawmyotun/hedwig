import React, { FC } from 'react';
import { Arrow } from '../../svg/Arrow';
import styles from './../../scss/collection.module.scss';

interface RequestItemProps {
  name: string;
  onClick: (e: any) => void;
}
export const RequestItem: FC<RequestItemProps> = ({ name, onClick }) => {
  return (
    <div className={styles.collection__item__request_item} onClick={onClick}>
      <Arrow />
      <h1>{name}</h1>
    </div>
  );
};
