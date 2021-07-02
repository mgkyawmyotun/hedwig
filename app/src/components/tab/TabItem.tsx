import React, { FC } from 'react';
import styles from './../../scss/tab.module.scss';

interface TabItemProps {
  tabItem: JSX.Element;
}
export const TabItem: FC<TabItemProps> = ({ tabItem }) => {
  return <div className={styles.tab__items}>{tabItem}</div>;
};
