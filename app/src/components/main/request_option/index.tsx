import type { FC } from 'react';
import React from 'react';
import { Tab, TabItemsType } from '../../tab';
import styles from './../../../scss/requestoption.module.scss';
import { BodyOption } from './body_option/BodyOption';
import { HeaderOption } from './header_option/HeaderOption';
import { ParamOption } from './param_option/ParamOption';
const optionTabItems: TabItemsType = [
  {
    header: (props) => (
      <HeaderOption {...props} className={styles.request_option_item} />
    ),
  },
  {
    body: (props) => (
      <BodyOption {...props} className={styles.request_option_item} />
    ),
  },
  {
    param: (props) => (
      <ParamOption {...props} className={styles.request_option_item} />
    ),
  },
];
export const RequestOptionMain: FC = () => {
  return (
    <div className={styles.request_option_main}>
      <Tab tabItems={optionTabItems} />
    </div>
  );
};
