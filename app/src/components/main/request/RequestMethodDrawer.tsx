import type { FC } from 'react';
import React from 'react';
import styles from '../../../scss/request.module.scss';
interface RequestMethodDrawerProps {
  methods: string[];
  show: boolean;
  onValueChange: (method: string) => void;
}
export const RequestMethodDrawer: FC<RequestMethodDrawerProps> = ({
  methods,
  show,
  onValueChange,
}) => {
  return (
    <div
      className={`${styles.request__method__drawer} ${show ? styles.show : ''}`}
    >
      {methods.map((method, index) => (
        <li key={index} onClick={(e) => onValueChange(method)}>
          {method}
        </li>
      ))}
    </div>
  );
};
