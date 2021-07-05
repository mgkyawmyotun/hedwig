import React, { FC, useContext, useState } from 'react';
import { MainFunctionContext } from '../../MainFunctionContext';
import type { HeaderItemProps } from '../header_option/HeaderItem';
import { RequestHeader } from '../RequestHeader';
import styles from './../../../../scss/requestoption.module.scss';
import { ParamItem } from './ParamItem';

interface ParamOptionProps {}
export const ParamOption: FC<ParamOptionProps> = (params) => {
  const context = useContext(MainFunctionContext);
  const [paramItems, setParamItems] = useState<
    Omit<HeaderItemProps, 'onChange'>[]
  >(
    () =>
      context &&
      (context.params.current.map(([property, value]) => ({
        property,
        value,
      })) as any),
  );
  return (
    <div {...params} data-id="param">
      <RequestHeader
        headerText="Params"
        onButtonClick={() => {
          setParamItems((prev) => [...prev, { property: '', value: '' }]);
        }}
      />
      <div className={styles.param__options__items}>
        {paramItems.map((paramItem, index) => (
          <ParamItem
            property={paramItem.property}
            value={paramItem.value}
            key={index}
            onChange={(property, value) => {
              if (context) {
                context.setParamOption(property, value, index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};
