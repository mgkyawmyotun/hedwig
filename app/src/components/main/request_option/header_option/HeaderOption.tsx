import React, { FC, useContext, useState } from 'react';
import { MainFunctionContext } from '../../MainFunctionContext';
import styles from './../../../../scss/requestoption.module.scss';
import { HeaderItem, HeaderItemProps } from './HeaderItem';

interface HeaderOptionProps {}
export const HeaderOption: FC<HeaderOptionProps> = (params) => {
  const context = useContext(MainFunctionContext);
  const [headerItems, setHeaderItems] = useState<
    Omit<HeaderItemProps, 'onChange'>[]
  >(
    () =>
      context &&
      context.options &&
      (context.options.headers.map(([property, value]) => ({
        property,
        value,
      })) as any),
  );
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
            onChange={(property, value) => {
              if (context && context.options) {
                if (context.options.headers[index]) {
                  const new_headeroptions = [...context.options.headers];
                  new_headeroptions[index] = [property, value];
                  context.setHeaderOption(new_headeroptions);
                  return;
                }
                context.options.headers.push([property, value]);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};
