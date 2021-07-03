import React from 'react';
import styles from '../../scss/dropdown.module.scss';

interface DropDownDrawerProps<T> {
  items: T[];
  show: boolean;
  onValueChange: (item: T) => void;
}
export const DropDownDrawer = <T,>({
  items,
  show,
  onValueChange,
}: DropDownDrawerProps<T>) => {
  return (
    <>
      <div className={`${styles.dropdown__drawer} ${show ? styles.show : ''}`}>
        {items.map((item, index) => (
          <li key={index} onClick={(e) => onValueChange(item)}>
            {item}
          </li>
        ))}
      </div>
    </>
  );
};
