import React, { FC, useContext, useEffect, useState } from 'react';
import styles from '../../../scss/request.module.scss';
import { ArrowIcon, ArrowType } from '../../../svg/ArrowIcon';
import { MainFunctionContext } from '../MainFunctionContext';
import { RequestMethodDrawer } from './RequestMethodDrawer';
import type { RequestMethodType } from './type';
interface RequestMethodProps {}
export const RequestMethod: FC<RequestMethodProps> = () => {
  const context = useContext(MainFunctionContext);

  const [arrowType, setArrowType] = useState<ArrowType>(ArrowType.UP);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [methodValue, setMethodValue] = useState<RequestMethodType>('GET');
  useEffect(() => {
    if (context) {
      context.method = methodValue;
    }
  }, [methodValue]);
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
        methods={['GET', 'POST', 'PUT', 'DELETE']}
        show={showDrawer}
        onValueChange={(method) => {
          setMethodValue(method);
          switchRequestMethod();
        }}
      />
    </div>
  );
};
