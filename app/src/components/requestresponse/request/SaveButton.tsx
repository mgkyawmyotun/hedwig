import React, { FC, useState } from 'react';
import { Modal } from '../../../components/modal';
import styles from '../../../scss/request.module.scss';
import { SaveRequestItem } from './SaveRequestItem';

export const SaveButton: FC<React.ComponentPropsWithoutRef<'button'>> = (
  props,
) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className={styles.request__save_button}
        onClick={() => {
          setShow((prev) => !prev);
        }}
        {...props}
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
        <SaveRequestItem onClose={() => setShow(false)} />
      </Modal>
    </>
  );
};
