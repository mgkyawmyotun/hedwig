import React, { FC } from 'react';
import styles from '../../../scss/request.module.scss';
type SendButtonProps = {
  onSend: () => void;
} & React.ComponentPropsWithoutRef<'button'>;
export const SendButton: FC<SendButtonProps> = ({ onSend, ...props }) => {
  return (
    <button className={styles.request__send_button} onClick={onSend} {...props}>
      Send
    </button>
  );
};
