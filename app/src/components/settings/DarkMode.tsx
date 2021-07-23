import React, { FC } from 'react';
import { LongArrow } from '../../svg/LongArrow';
import { ToggleButton } from '../toggle/ToggleButton';
import styles from './../../scss/setting.module.scss';
export const DarkMode: FC = () => {
  return (
    <div className={styles.setting__main__dark_mode}>
      <LongArrow />
      <div>Dark Mode</div>
      <LongArrow />
      <ToggleButton
        onOpen={(value) => {
          if (value) {
            document.body.classList.toggle('dark', true);
            document.body.classList.toggle('light', false);
            return;
          }
          document.body.classList.toggle('dark', false);
          document.body.classList.toggle('light', true);
        }}
      />
    </div>
  );
};
