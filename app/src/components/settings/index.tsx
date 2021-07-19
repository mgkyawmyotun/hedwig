import type { FC } from 'react';
import React from 'react';
import { Modal } from '../modal';
import styles from './../../scss/setting.module.scss';
import { DarkMode } from './DarkMode';

interface SettingModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SettingModal: FC<SettingModalProps> = ({ modal, setModal }) => {
  return (
    <Modal
      show={modal}
      size={{ width: 80, height: 80 }}
      onModalClose={() => setModal(false)}
      closeOnOutsideClick={false}
      title="Setting"
    >
      <div className={styles.setting__main}>
        <DarkMode />
      </div>
    </Modal>
  );
};
