import type { FC } from 'react';
import React from 'react';
import type { TabItemsType } from '.';
import styles from './../../scss/tab.module.scss';

interface TabHeaderProps {
  tabItems: TabItemsType;
  onClick: (key: string) => void;
}
export const TabHeader: FC<TabHeaderProps> = ({ tabItems, onClick }) => {
  return (
    <div className={styles.tab__header}>
      {tabItems.map((tabItem) =>
        Object.keys(tabItem).map((key) => (
          <div
            key={key}
            className={styles.tab__header__item}
            onClick={() => onClick(key)}
          >
            {key}
          </div>
        )),
      )}
    </div>
  );
};
