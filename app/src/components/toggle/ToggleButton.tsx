import React, { FC, useEffect, useState } from 'react';
import styles from './../../scss/toggle.module.scss';

interface ToggleButtonProps {
  width?: string;
  height?: string;
  onOpen?: (value: boolean) => void;
  defaultStyle?: 'open' | 'close';
}
const useOpen = (onOpen?: (value: boolean) => void) => {
  const [open, setOpen] = useState<boolean | undefined>();

  useEffect(() => {
    if (onOpen && open !== undefined) {
      onOpen(open);
    }
  }, [open]);
  return [setOpen] as const;
};
export const ToggleButton: FC<ToggleButtonProps> = ({
  width = '2.5em',
  height = '1.5em',
  onOpen,
  defaultStyle,
}) => {
  const [setOpen] = useOpen(onOpen);
  if (defaultStyle === 'open') {
    return (
      <div>
        <input
          type="checkbox"
          id="toggle"
          className={[styles.toggle, styles.open, styles.toggle_light].join(
            ' ',
          )}
        />
        <label
          htmlFor="toggle"
          className={[styles.toggle_button].join(' ')}
          style={{ width, height }}
          onClick={() => {
            setOpen((v) => !v);
          }}
        ></label>
      </div>
    );
  }
  return (
    <div>
      <input
        type="checkbox"
        id="toggle"
        className={[styles.toggle, styles.close, styles.toggle_light].join(' ')}
      />
      <label
        htmlFor="toggle"
        className={[styles.toggle_button].join(' ')}
        style={{ width, height }}
        onClick={() => {
          setOpen((v) => !v);
        }}
      ></label>
    </div>
  );
};
