import type { FC } from 'react';
import React from 'react';
import styles from '../../../scss/request.module.scss';
import type { RequestMethodType } from './type';
interface RequestMethodDrawerProps {
  methods: RequestMethodType[];
  show: boolean;
  onValueChange: (method: RequestMethodType) => void;
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
