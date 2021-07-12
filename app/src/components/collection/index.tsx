import React, { FC, useContext, useState } from 'react';
import { MainContext } from '../../context/MainContext';
import styles from './../../scss/collection.module.scss';
import { CollectionItem } from './CollectionItem';
export const Collection: FC = () => {
  const [collectionItems, setCollectionItems] = useState<{ name: string }[]>(
    [],
  );
  const context = useContext(MainContext);
  const addNewCollection = () => {
    if (context) {
      context.createCollection('collection name', -1);
    }
    setCollectionItems((prev) => [...prev, { name: 'collection item' }]);
  };
  return (
    <div className={styles.collection}>
      <div className={styles.collection__header}>
        <h1>Collection</h1>
        <div onClick={addNewCollection}>+</div>
      </div>
      {context &&
        collectionItems &&
        collectionItems.map(({ name }, index) => (
          <CollectionItem
            name={name}
            key={index}
            items={context.collections.current[index].items}
            cIndex={index}
            onItemChange={(value) => {
              if (context) {
                context.createCollection(value, index);
              }
            }}
          />
        ))}
    </div>
  );
};
