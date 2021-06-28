import React, { FC, useState } from 'react';
import { ArrowIcon, ArrowType } from '../../../svg/ArrowIcon';
import styles from './../../../scss/collection.module.scss';
import { ContentEdiable } from './../../utils/ContentEdiable';
import { RequestItem } from './RequestItem';
interface CollectionItemProps {}
export const CollectionItem: FC<CollectionItemProps> = () => {
  const [arrowType, setArrowType] = useState<ArrowType>(ArrowType.UP);
  const [showItem, setShowItem] = useState<boolean>(false);

  return (
    <div className={styles.collection__item}>
      <div>
        <ContentEdiable>Collection Name</ContentEdiable>
        <ArrowIcon
          type={arrowType}
          onChange={() => {
            setArrowType((prev) =>
              prev === ArrowType.DOWN ? ArrowType.UP : ArrowType.DOWN,
            );
            setShowItem((prev) => !prev);
          }}
        />
      </div>
      {showItem && (
        <div className={[styles.collection__item__request_items].join('')}>
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
        </div>
      )}
    </div>
  );
};
