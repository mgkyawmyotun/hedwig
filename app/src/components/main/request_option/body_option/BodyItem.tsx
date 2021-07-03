import type { FC } from 'react';
import React from 'react';
import { DropDown } from '../../../dropdown/DropDown';
import { ContentEdiable } from '../../../utils/ContentEdiable';
import { RequestItem } from '../RequestItem';
import styles from './../../../../scss/requestoption.module.scss';

interface BodyItemProps {}
export const BodyItem: FC<BodyItemProps> = () => {
  return (
    <>
      <RequestItem
        firstSlot={
          <div className={styles.body__item__first}>
            <ContentEdiable
              //     defaultValue={property.length > 0 ? property : 'Property'}
              defaultValue="BodyText"
              maxSize={15}
              onContentChange={(value) => {
                //       if (value) {
                //         setState((prev) => ({ ...prev, property: value }));
                //       }
                //       onChange(state.property, state.value);
              }}
            ></ContentEdiable>
            <DropDown items={['File', 'Text']} />
          </div>
        }
        secondSlot={<div>Hello World</div>}
      />
    </>
  );
};
