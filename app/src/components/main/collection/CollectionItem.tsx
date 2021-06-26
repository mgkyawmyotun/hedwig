import type { FC } from 'react';
import React from 'react';
import { ArrowIcon, ArrowType } from '../../../svg/ArrowIcon';
import styles from './../../../scss/collection.module.scss';
import { RequestItem } from './RequestItem';
interface CollectionItemProps {}
export const CollectionItem: FC<CollectionItemProps> = () => {
  return (
    <div className={styles.collection__item}>
      <div>
        <p>Collection Name</p>
        <ArrowIcon type={ArrowType.DOWN} />
      </div>

      <RequestItem />
      <RequestItem />
      <RequestItem />
      <RequestItem />
      <RequestItem />
      <RequestItem />
    </div>
  );
};
