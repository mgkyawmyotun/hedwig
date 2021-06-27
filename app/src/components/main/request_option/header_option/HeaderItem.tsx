import type { FC } from 'react';
import React from 'react';
import { LongArrow } from '../../../../svg/LongArrow';
import styles from './../../../../scss/requestoption.module.scss';

interface HeaderItemProps {
  property: string;
  value: string;
}
export const HeaderItem: FC<HeaderItemProps> = ({ property, value }) => {
  return (
    <div className={styles.header__item}>
      <div>
        <h1 contentEditable={true}>{property}</h1>
      </div>
      <LongArrow />
      <div>
        <h1 contentEditable={true}>{value}</h1>
      </div>
    </div>
  );
};
