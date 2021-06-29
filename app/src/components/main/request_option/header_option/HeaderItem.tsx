import React, { FC } from 'react';
import { LongArrow } from '../../../../svg/LongArrow';
import styles from './../../../../scss/requestoption.module.scss';
import { ContentEdiable } from './../../../utils/ContentEdiable';

export interface HeaderItemProps {
  property: string;
  value: string;
}
export const HeaderItem: FC<HeaderItemProps> = ({ property, value }) => {
  return (
    <div className={styles.header__item}>
      <div>
        <ContentEdiable
          defaultValue={property.length > 0 ? property : 'Property'}
          maxSize={15}
        ></ContentEdiable>
      </div>
      <LongArrow />
      <div>
        <ContentEdiable
          defaultValue={value.length > 0 ? value : 'Value'}
          maxSize={25}
        ></ContentEdiable>
      </div>
    </div>
  );
};
