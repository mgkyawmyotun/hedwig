import React, { FC, useState } from 'react';
import styles from '../scss/nav.module.scss';
import { Logo } from '../svg/Logo';
import { Setting } from '../svg/Setting';
import { Modal } from './modal';

interface NavBarProps {}
export const NavBar: FC<NavBarProps> = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className={styles.nav_bar}>
      <div className={styles.nav_bar__logo}>
        <Logo />
        <h1>Hedwig</h1>
      </div>
      <div>
        <Setting
          onClick={() => {
            setModal((prev) => !prev);
          }}
        />
        <Modal
          show={modal}
          size={{ width: 80, height: 80 }}
          onModalClose={() => setModal(false)}
          closeOnOutsideClick={false}
        >
          <div>Hello World</div>
        </Modal>
      </div>
    </div>
  );
};
