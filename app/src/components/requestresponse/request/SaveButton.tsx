import React, { FC, useContext, useState } from 'react';
import { Modal } from '../../../components/modal';
import { MainContext } from '../../../context/MainContext';
import styles from '../../../scss/request.module.scss';
import { SaveRequestItem } from './SaveRequestItem';

export const SaveButton: FC = () => {
  const context = useContext(MainContext);
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className={styles.request__save_button}
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        Save
      </button>
      <Modal
        show={show}
        onModalClose={() => setShow(false)}
        size={{ width: 25, height: 20 }}
        closeOnOutsideClick={true}
        title="SaveRequest"
      >
        <SaveRequestItem />
      </Modal>
    </>
  );
};
