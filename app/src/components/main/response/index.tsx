import type { FC } from 'react';
import React from 'react';
import { Tab, TabItemsType } from '../../tab';
import styles from './../../../scss/response.module.scss';
import { ResponseBodyOption } from './body_option/ResponseBodyOption';

const tabItems: TabItemsType = [
  {
    body: (props) => (
      <ResponseBodyOption {...props} className={styles.response__item} />
    ),
  },
  {
    cookies: (props) => (
      <div {...props} className={styles.response__item}></div>
    ),
  },
  {
    header: (props) => <div {...props} className={styles.response__item}></div>,
  },
];
interface ResponseProps {}
export const Response: FC<ResponseProps> = () => {
  return (
    <div className={styles.response}>
      <h1>Response</h1>
      <div className={styles.response__items}>
        <Tab tabItems={tabItems} />
      </div>
    </div>
  );
};
