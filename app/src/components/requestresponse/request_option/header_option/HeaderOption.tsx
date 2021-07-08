import React, { FC, useContext, useState } from 'react';
import { RequestResponseContext } from '../../RequestResponseContext';
import { RequestHeader } from '../RequestHeader';
import styles from './../../../../scss/requestoption.module.scss';
import { HeaderItem, HeaderItemProps } from './HeaderItem';

interface HeaderOptionProps {}
export const HeaderOption: FC<HeaderOptionProps> = (params) => {
  const context = useContext(RequestResponseContext);
  const [headerItems, setHeaderItems] = useState<
    Omit<HeaderItemProps, 'onChange'>[]
  >(
    () =>
      context &&
      (context.options.headers.current.map(([property, value]) => ({
        property,
        value,
      })) as any),
  );
  return (
    <div {...params} data-id="header">
      <RequestHeader
        headerText="Headers"
        onButtonClick={() => {
          setHeaderItems((prev) => [...prev, { property: '', value: '' }]);
        }}
      />
      <div className={styles.header__options__items}>
        {headerItems.map((headerItem, index) => (
          <HeaderItem
            property={headerItem.property}
            value={headerItem.value}
            key={index}
            onChange={(property, value) => {
              if (context) {
                context.setHeaderOption(property, value, index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};
