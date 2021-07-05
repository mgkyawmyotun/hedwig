import React, { FC, useContext, useState } from 'react';
import { MainFunctionContext } from '../../MainFunctionContext';
import { RequestHeader } from '../RequestHeader';
import styles from './../../../../scss/requestoption.module.scss';
import { BodyItem, BodyItemProps } from './BodyItem';

interface BodyOptionProps {}
export const BodyOption: FC<BodyOptionProps & React.ComponentProps<'div'>> = (
  props,
) => {
  const context = useContext(MainFunctionContext);
  const [bodyItems, setBodyItems] = useState<Omit<BodyItemProps, 'onChange'>[]>(
    () =>
      context &&
      (context.options.body.current.map(([property, value]) => {
        return { property, value };
      }) as any),
  );
  return (
    <div data-id="body" {...props}>
      <RequestHeader
        headerText="Body"
        onButtonClick={() => {
          setBodyItems((prev) => [...prev, { property: '', value: '' }]);
        }}
      />
      <div className={styles.request__body__items}>
        {bodyItems.map(({ property, value }, index) => (
          <BodyItem
            property={property}
            value={value}
            key={index + property + value}
            onChange={(property, value) => {
              if (context) {
                context.setBodyOption(property, value, index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};
