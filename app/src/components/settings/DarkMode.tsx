import React, { FC } from 'react';
import { LongArrow } from '../../svg/LongArrow';
import { getMode, switchToMode } from '../../utils';
import { ToggleButton } from '../toggle/ToggleButton';
import styles from './../../scss/setting.module.scss';
export const DarkMode: FC = () => {
  return (
    <div className={styles.setting__main__dark_mode}>
      <LongArrow />
      <div>Dark Mode</div>
      <LongArrow />
      <ToggleButton
        defaultStyle={getMode() == 'dark' ? 'open' : 'close'}
        onOpen={(value) => {
          if (value) {
            switchToMode('dark');
            return;
          }
          switchToMode('light');
        }}
      />
    </div>
  );
};
