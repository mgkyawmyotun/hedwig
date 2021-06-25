import type { FC } from 'react';
import React from 'react';
import styles from '../scss/nav.module.scss';
import { Logo } from '../svg/Logo';
import { Setting } from '../svg/Setting';

interface NavBarProps {}
export const NavBar: FC<NavBarProps> = () => {
  return (
    <div className={styles.nav_bar}>
      <div className={styles.nav_bar__logo}>
        <Logo />
        <h1>Hedwig</h1>
      </div>
      <div>
        <Setting />
      </div>
    </div>
  );
};
