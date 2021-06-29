import type { FC } from 'react';
import React from 'react';
import styles from '../../../scss/request.module.scss';

export const SaveButton: FC = () => {
  return <button className={styles.request__save_button}>Save</button>;
};
