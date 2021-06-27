import type { FC } from 'react';
import React from 'react';
import styles from './../../../../scss/requestoption.module.scss';
import { HeaderItem } from './HeaderItem';

interface HeaderOptionProps {}
export const HeaderOption: FC<HeaderOptionProps> = (params) => {
  return (
    <div {...params} data-id="header">
      <h1>Headers</h1>
      <div className={styles.header__options__items}>
        <HeaderItem property="UserAgent" value="GoogleChrome/ 1.23" />
      </div>
    </div>
  );
};
