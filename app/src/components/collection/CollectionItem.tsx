import React, { FC, useState } from 'react';
import { requestPicked } from '../../redux/features/requestresponse/requestresponseSlice';
import { useAppDispatch } from '../../redux/hooks';
import { ArrowIcon, ArrowType } from '../../svg/ArrowIcon';
import { ContentEdiable } from '../contentEditable/ContentEdiable';
import styles from './../../scss/collection.module.scss';
import { RequestItem } from './RequestItem';
interface CollectionItemProps {
  name: string;
  onItemChange: (name: string) => void;
  items: RequestItemType[];
  cIndex: number;
}

export const CollectionItem: FC<CollectionItemProps> = ({
  name,
  items,
  onItemChange,
  cIndex,
}) => {
  const [arrowType, setArrowType] = useState<ArrowType>(ArrowType.UP);
  const [showItem, setShowItem] = useState<boolean>(false);
  const dispatch = useAppDispatch();

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
          {items &&
            items.map((item, index) => (
              <RequestItem
                name={item.name}
                key={index + item.name}
                onClick={() => {
                  dispatch(requestPicked(item));
                }}
              />
            ))}
        </div>
      )}
    </div>
  );
};
