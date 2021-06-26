import type { FC } from 'react';
import React from 'react';
import styles from '../../../scss/request.module.scss';
import { Button } from './Button';
import { RequestInput } from './RequestInput';
import { RequestMethod } from './RequestMethod';
export const RequestForm: FC = () => {
  return (
    <div className={styles.request}>
      <RequestMethod />
      <RequestInput />
      <Button />
    </div>
  );
};
