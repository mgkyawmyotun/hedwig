import type { FC } from 'react';
import React from 'react';
import styles from './../../../scss/collection.module.scss';
import { CollectionItem } from './CollectionItem';
export const Collection: FC = () => {
  return (
    <div className={styles.collection}>
      <div className={styles.collection__header}>
        <h1>Collection</h1>
        <div>+</div>
      </div>
      <CollectionItem />
    </div>
  );
};
