import React, { FC } from 'react';
import styles from '../../../scss/request.module.scss';
type SendButtonProps = {
  onSend: () => void;
};
export const SendButton: FC<SendButtonProps> = ({ onSend }) => {
  return (
    <button className={styles.request__send_button} onClick={onSend}>
      Send
    </button>
  );
};
