import React, { FC, useContext } from 'react';
import { MainContext } from '../../../context/MainContext';
import styles from '../../../scss/request.module.scss';

export const SaveButton: FC = () => {
  const context = useContext(MainContext);
  return (
    <button
      className={styles.request__save_button}
      onClick={() => {
        console.log('Save');
      }}
    >
      Save
    </button>
  );
};
