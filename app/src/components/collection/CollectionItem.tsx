import React, { FC, useState } from 'react';
import { ArrowIcon, ArrowType } from '../../svg/ArrowIcon';
import { ContentEdiable } from '../utils/ContentEdiable';
import styles from './../../scss/collection.module.scss';
import { RequestItem } from './RequestItem';
interface CollectionItemProps {
  name: string;
  onItemChange: (name: string) => void;
}

export const CollectionItem: FC<CollectionItemProps> = ({
  name,
  onItemChange,
}) => {
  const [arrowType, setArrowType] = useState<ArrowType>(ArrowType.UP);
  const [showItem, setShowItem] = useState<boolean>(false);

  return (
    <div className={styles.collection__item}>
      <div>
        <ContentEdiable
          defaultValue={name}
          maxSize={10}
          onContentChange={(value) => {
            value && onItemChange(value);
          }}
        ></ContentEdiable>
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
          <RequestItem name={'reandomGet'} />
        </div>
      )}
    </div>
  );
};