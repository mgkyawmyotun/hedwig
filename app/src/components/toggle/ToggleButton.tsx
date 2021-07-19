import type { FC } from 'react';
import React from 'react';
import styles from './../../scss/toggle.module.scss';

interface ToggleButtonProps {
  width?: string;
  height?: string;
}
export const ToggleButton: FC<ToggleButtonProps> = ({
  width = '2.5em',
  height = '1.5em',
}) => {
  return (
    <div>
      <input
        type="checkbox"
        name=""
        id="toggle"
        className={[styles.toggle, styles.toggle_light].join(' ')}
      />
      <label
        htmlFor="toggle"
        className={styles.toggle_button}
        style={{ width, height }}
      ></label>
    </div>
  );
};
