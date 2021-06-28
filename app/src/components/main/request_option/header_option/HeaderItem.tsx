import type { FC } from 'react';
import React from 'react';
import { LongArrow } from '../../../../svg/LongArrow';
import styles from './../../../../scss/requestoption.module.scss';
import { ContentEdiable } from './../../../utils/ContentEdiable';

interface HeaderItemProps {
  property: string;
  value: string;
}
export const HeaderItem: FC<HeaderItemProps> = ({ property, value }) => {
  return (
    <div className={styles.header__item}>
      <div>
        <ContentEdiable>User Agent</ContentEdiable>
      </div>
      <LongArrow />
      <div>
        <ContentEdiable>Post Man /Blah Blah !23</ContentEdiable>
      </div>
    </div>
  );
};
