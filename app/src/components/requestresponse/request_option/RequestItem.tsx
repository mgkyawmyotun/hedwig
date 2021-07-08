import type { FC } from 'react';
import React from 'react';
import { LongArrow } from '../../../svg/LongArrow';
import styles from './../../../scss/requestoption.module.scss';

interface RequestItemProps {
  firstSlot: React.Component | JSX.Element;
  secondSlot: React.Component | JSX.Element;
}
export const RequestItem: FC<RequestItemProps> = ({
  firstSlot,
  secondSlot,
}) => {
  return (
    <div className={styles.request__item}>
      <div>{firstSlot}</div>
      <LongArrow />
      <div>{secondSlot}</div>
    </div>
  );
};
