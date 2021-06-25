import type { FC } from 'react';
import React from 'react';
import styles from '../../scss/input.module.scss';
export const RequestInput: FC = () => {
  return (
    <input
      className={styles.request__input}
      placeholder="Enter request url"
    ></input>
  );
};
