import React, { FC, useState } from 'react';
import styles from '../../../scss/request.module.scss';
import { ArrowIcon, ArrowType } from '../../../svg/ArrowIcon';
import { RequestMethodDrawer } from './RequestMethodDrawer';

interface RequestMethodProps {}
export const RequestMethod: FC<RequestMethodProps> = () => {
  const [arrowType, setArrowType] = useState<ArrowType>(ArrowType.UP);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [methodValue, setMethodValue] = useState<string>('GET');
  const switchRequestMethod = (
    e?: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setArrowType((prev) =>
      prev === ArrowType.DOWN ? ArrowType.UP : ArrowType.DOWN,
    );
    setShowDrawer((prevValue) => !prevValue);
  };
  return (
    <div className={styles.request__method}>
      <div onClick={switchRequestMethod}>
        <span>{methodValue}</span>
        <ArrowIcon type={arrowType} />
      </div>
      <RequestMethodDrawer
        methods={['GET', 'POST', 'PUT', 'DELETE', 'HEAD']}
        show={showDrawer}
        onValueChange={(method) => {
          setMethodValue(method);
          switchRequestMethod();
        }}
      />
    </div>
  );
};
