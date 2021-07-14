import React, { FC, useMemo } from 'react';
import { createPortal } from 'react-dom';
import styles from '../../scss/modal.module.scss';
import { CloseIcon } from '../../svg/Close';
import { toScale } from '../../utils';

interface ModalProps {
  children: React.ReactNode;
  size?: { width: number; height: number };
  show: boolean;
  onModalClose: () => void;
  title?: string;
  closeOnOutsideClick?: boolean;
}
export const Modal: FC<ModalProps> = ({
  children,
  size = { width: 40, height: 20 },
  show,
  onModalClose,
  closeOnOutsideClick,
  title,
}) => {
  const toBetweenOneandTwo = useMemo(() => {
    const value = toScale(100, 0, size.width, 1, 2);
    return value;
  }, [size.width]);
  const fontSize = useMemo(() => {
    const value = toScale(100, 0, size.width, 0.5, 2.5);
    return value;
  }, [size.width]);

  return createPortal(
    <div
      className={`${styles.modal} ${show ? '' : styles.closed}`}
      style={{
        width: `max(${size.width * 10}px,${size.width}vw)`,
        height: `max(${size.height * 10}px,${size.height}vw)`,
      }}
    >
      <div>
        <div
          className={styles.modal__title}
          style={{ fontSize: fontSize + 'rem' }}
        >
          {title}
        </div>
        <CloseIcon
          onClick={onModalClose}
          className={styles.modal__close_button}
          style={{
            width: toBetweenOneandTwo + 'em',
            height: toBetweenOneandTwo + 'em',
          }}
        />
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
