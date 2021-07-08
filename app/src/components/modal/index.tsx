import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import styles from '../../scss/modal.module.scss';

interface ModalProps {
  children: React.ReactNode;
  size?: { width: number; height: number };
  show: boolean;
  onModalClose: () => void;
  closeOnOutsideClick?: boolean;
}
export const Modal: FC<ModalProps> = ({
  children,
  size = { width: 40, height: 20 },
  show,
  onModalClose,
  closeOnOutsideClick,
}) => {
  return createPortal(
    <div
      className={`${styles.modal} ${show ? '' : styles.closed}`}
      style={{ width: `${size.width}vw`, height: `${size.height}vh` }}
    >
      <div className={styles.modal__close_button} onClick={onModalClose}>
        X
      </div>
      <div className={styles.modal__main}>{children}</div>
      {createPortal(
        <div
          className={`${styles.modal__overlay} ${show ? '' : styles.closed}`}
          onClick={() => {
            if (closeOnOutsideClick) onModalClose();
          }}
        ></div>,
        document.body,
      )}
    </div>,
    document.body,
  );
};
