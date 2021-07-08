import React, { FC, useState } from 'react';
import styles from './../../scss/collection.module.scss';
import { CollectionItem } from './CollectionItem';
export const Collection: FC = () => {
  const [collectionItems, setCollectionItems] = useState<{ name: string }[]>(
    [],
  );
  const addNewCollection = () => {
    setCollectionItems((prev) => [...prev, { name: 'collection item' }]);
  };
  return (
    <div className={styles.collection}>
      <div className={styles.collection__header}>
        <h1>Collection</h1>
        <div onClick={addNewCollection}>+</div>
      </div>
      {collectionItems &&
        collectionItems.map(({ name }, index) => (
          <CollectionItem
            name={name}
            key={index}
            onItemChange={(value) => {}}
          />
        ))}
    </div>
  );
};
