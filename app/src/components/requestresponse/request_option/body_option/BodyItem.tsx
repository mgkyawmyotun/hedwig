import React, { FC, useState } from 'react';
import { ContentEdiable } from '../../../contentEditable/ContentEdiable';
import { DropDown } from '../../../dropdown/DropDown';
import { RequestItem } from '../RequestItem';
import styles from './../../../../scss/requestoption.module.scss';

export interface BodyItemProps {
  property: string;
  value: string;
  onChange: (property: string, value: string | File) => void;
}
export const BodyItem: FC<BodyItemProps> = ({ property, value, onChange }) => {
  const [type, setType] = useState('Text');
  const [state, setState] = useState<{
    property: string;
    value: string | File;
  }>({
    property: '',
    value: '',
  });

  return (
    <>
      <RequestItem
        firstSlot={
          <div className={styles.body__item__first}>
            <ContentEdiable
              defaultValue={property}
              maxSize={15}
              onContentChange={(property) => {
                if (property) {
                  onChange(property, state.value);
                  setState((prev) => ({ ...prev, property }));
                }
              }}
            ></ContentEdiable>
            <DropDown
              items={['Text', 'File']}
              onChange={(item) => setType(item)}
            />
          </div>
        }
        secondSlot={
          <div className={styles.body__item__second}>
            {type === 'Text' ? (
              <ContentEdiable
                defaultValue={value}
                maxSize={15}
                onContentChange={(value) => {
                  if (value) {
                    setState((prev) => ({ ...prev, value }));
                    onChange(state.property, value);
                  }
                }}
              />
            ) : (
              <>
                <label htmlFor="file-upload">Upload</label>
                <input
                  id="file-upload"
                  type="file"
                  onInput={(event) => {
                    if (event.currentTarget.files) {
                      const file = event.currentTarget.files[0];
                      if (file) {
                        setState((prev) => ({ ...prev, value: file }));
                        onChange(state.property, file);
                      }
                    }
                  }}
                />
              </>
            )}
          </div>
        }
      />
    </>
  );
};
