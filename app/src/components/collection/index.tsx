import React, { FC } from 'react';
import { collectionAdded } from '../../redux/features/collection/collectionSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './../../scss/collection.module.scss';
import { CollectionItem } from './CollectionItem';
export const Collection: FC = () => {
  const collections = useAppSelector((state) => state.collections);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.collection}>
      <div className={styles.collection__header}>
        <h1>Collection</h1>
        <div
          onClick={() => {
            dispatch(collectionAdded('Collection Name', -1));
          }}
        >
          +
        </div>
      </div>
      {collections.map(({ name }, index) => (
        <CollectionItem
          name={name}
          key={index}
          items={collections[index].items}
          cIndex={index}
          onItemChange={(value) => {
            dispatch(collectionAdded(value, index));
          }}
        />
      ))}
    </div>
  );
};
52;
