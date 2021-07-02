import React, { FC } from 'react';
import type { TabItemsType } from '.';
import styles from './../../scss/tab.module.scss';

interface TabHeaderProps {
  tabItems: TabItemsType;
  onClick: (key: string) => void;
}
export const TabHeader: FC<TabHeaderProps> = React.memo(
  ({ tabItems, onClick }) => {
    return (
      <div className={styles.tab__header}>
        {tabItems.map((tabItem, index) =>
          Object.keys(tabItem).map((key) => (
            <div
              key={key + index}
              className={styles.tab__header__item}
              onClick={() => onClick(key)}
            >
              {key}
            </div>
          )),
        )}
      </div>
    );
  },
);
