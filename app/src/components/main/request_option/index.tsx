import type { FC } from 'react';
import React from 'react';
import { Tab } from '../../tab';
import styles from './../../../scss/requestoption.module.scss';
export const RequestOptionMain: FC = () => {
  return (
    <div className={styles.request_option_main}>
      <Tab
        tabItems={[
          {
            onetow: (props) => {
              return (
                <div {...props}>
                  <h1>Blah Blah</h1>
                </div>
              );
            },
          },
          {
            fourfive: (props) => {
              return (
                <div {...props}>
                  <h1>Hello World</h1>
                </div>
              );
            },
          },
        ]}
      />
    </div>
  );
};
