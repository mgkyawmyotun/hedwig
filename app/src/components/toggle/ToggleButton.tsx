import React, { FC, useEffect, useState } from 'react';
import styles from './../../scss/toggle.module.scss';

interface ToggleButtonProps {
  width?: string;
  height?: string;
  onOpen?: (value: boolean) => void;
}
const useOpen = (onOpen?: (value: boolean) => void) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (onOpen) {
      onOpen(open);
    }
  }, [open]);
  return [setOpen] as const;
};
export const ToggleButton: FC<ToggleButtonProps> = ({
  width = '2.5em',
  height = '1.5em',
  onOpen,
}) => {
  const [setOpen] = useOpen(onOpen);
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
        onClick={() => {
          setOpen((v) => !v);
        }}
      ></label>
    </div>
  );
};
