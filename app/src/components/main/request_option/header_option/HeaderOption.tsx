import React, { FC, useState } from 'react';
import styles from './../../../../scss/requestoption.module.scss';
import { HeaderItem, HeaderItemProps } from './HeaderItem';

interface HeaderOptionProps {}
export const HeaderOption: FC<HeaderOptionProps> = (params) => {
  const [headerItems, setHeaderItems] = useState<HeaderItemProps[]>([]);
  return (
    <div {...params} data-id="header">
      <div>
        <h1>Headers</h1>
        <button
          className={styles.header__button}
          onClick={() => {
            setHeaderItems((prev) => [...prev, { property: '', value: '' }]);
          }}
        >
          Add
        </button>
      </div>
      <div className={styles.header__options__items}>
        {headerItems.map((headerItem, index) => (
          <HeaderItem
            property={headerItem.property}
            value={headerItem.value}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
