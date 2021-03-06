import React, { FC, useState } from 'react';
import { ContentEdiable } from '../../../contentEditable/ContentEdiable';
import { RequestItem } from '../RequestItem';
import styles from './../../../../scss/requestoption.module.scss';

export interface HeaderItemProps {
  property: string;
  value: string;
  onChange: (property: string, value: string) => void;
}
export const HeaderItem: FC<HeaderItemProps> = ({
  property,
  value,
  onChange,
}) => {
  const [state, setState] = useState<{ [key: string]: string }>({
    property,
    value,
  });
  return (
    <RequestItem
      firstSlot={
        <div className={styles.header__item__first}>
          <ContentEdiable
            defaultValue={property.length > 0 ? property : 'Property'}
            maxSize={15}
            onContentChange={(p) => {
              if (p) {
                setState((prev) => ({ ...prev, property: p }));
                onChange(p, state.value);
              }
            }}
          ></ContentEdiable>
        </div>
      }
      secondSlot={
        <div className={styles.header__item__first}>
          <ContentEdiable
            defaultValue={value.length > 0 ? value : 'Value'}
            maxSize={25}
            onContentChange={(value) => {
              if (value) {
                setState((prev) => ({ ...prev, value }));
                onChange(state.property, value);
              }
            }}
          ></ContentEdiable>
        </div>
      }
    />
  );
};
