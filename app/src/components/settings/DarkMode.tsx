import type { FC } from 'react';
import React from 'react';
import { LongArrow } from '../../svg/LongArrow';
import { ToggleButton } from '../toggle/ToggleButton';
import styles from './../../scss/setting.module.scss';
export const DarkMode: FC = () => {
  return (
    <div className={styles.setting__main__dark_mode}>
      <LongArrow />
      <div>Dark Mode</div>
      <LongArrow />
      <ToggleButton />
    </div>
  );
};
