import React, { FC, useCallback, useMemo, useState } from 'react';
import styles from './../../scss/tab.module.scss';
import { TabHeader } from './TabHeader';

export type TabItemsType = Array<{
  [key: string]: <T extends React.ComponentProps<'div'>>(
    props: T,
  ) => JSX.Element;
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
  const tabItemsMemo = useMemo(() => tabItems, []);
  const changeTab = useCallback((key) => setCurrentTab(key), [setCurrentTab]);

  return (
    <div className={styles.tab}>
      <TabHeader tabItems={tabItemsMemo} onClick={changeTab} />
      {tabItems.map((tabItem, index) => {
        return Object.entries(tabItem).map(([key, value]) =>
          value({
            key: index,
            style: { display: key === currentTab ? '' : 'none' },
          }),
        );
      })}
    </div>
  );
};
