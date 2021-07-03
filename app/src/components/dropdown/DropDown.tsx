import React, { useState } from 'react';
import styles from '../../scss/dropdown.module.scss';
import { ArrowIcon, ArrowType } from '../../svg/ArrowIcon';
import { DropDownDrawer } from './DropDownDrawer';

interface DropDownProps<T> {
  items: T[];
  onChange?: (item: T) => void;
}
export const DropDown = <T,>({ items, onChange }: DropDownProps<T>) => {
  const [arrowType, setArrowType] = useState<ArrowType>(ArrowType.UP);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [item, setItem] = useState<T>(items[0]);
  const switchItem = (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setArrowType((prev) =>
      prev === ArrowType.DOWN ? ArrowType.UP : ArrowType.DOWN,
    );
    setShowDrawer((prevValue) => !prevValue);
  };
  return (
    <div className={styles.dropdown}>
      <div onClick={switchItem}>
        <span>{item}</span>
        <ArrowIcon type={arrowType} />
      </div>
      <DropDownDrawer
        items={items}
        show={showDrawer}
        onValueChange={(item) => {
          setItem(item);
          if (onChange) onChange(item);
          switchItem();
        }}
      />
    </div>
  );
};
