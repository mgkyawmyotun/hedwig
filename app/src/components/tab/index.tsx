import React, { FC, useState } from 'react';
import styles from './../../scss/tab.module.scss';
import { TabHeader } from './TabHeader';

export type TabItemsType = Array<{
  [key: string]: (props: any) => JSX.Element;
}>;
interface TabProps {
  tabItems: TabItemsType;
}

export const Tab: FC<TabProps> = ({ tabItems }) => {
  // find the selected by matching with object key
  const getSelelectedTab = (key: string) => {
    const index = tabItems.findIndex((tabItem) =>
      tabItem[key] ? true : false,
    );
    const tabComponent = tabItems[index][key]({ key });
    return tabComponent;
  };

  const [currentTab, setCurrentTab] = useState<string>(
    () => Object.keys(tabItems[0])[0],
  );
  return (
    <div className={styles.tab}>
      <TabHeader
        tabItems={tabItems}
        onClick={(key) => {
          setCurrentTab(key);
        }}
      />
      <div className={styles.tab__items}>{getSelelectedTab(currentTab)}</div>
    </div>
  );
};
