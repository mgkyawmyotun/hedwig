import React, { FC, useContext, useEffect, useState } from 'react';
import { DropDown } from '../../dropdown/DropDown';
import { MainFunctionContext } from '../MainFunctionContext';
import type { RequestMethodType } from './type';
interface RequestMethodProps {}
const methodItems: RequestMethodType[] = ['GET', 'POST', 'PUT', 'DELETE'];
export const RequestMethod: FC<RequestMethodProps> = () => {
  const context = useContext(MainFunctionContext);
  const [methodValue, setMethodValue] = useState<RequestMethodType>('GET');
  useEffect(() => {
    if (context) {
      context.method = methodValue;
    }
  }, [methodValue]);
  return (
    <DropDown
      items={methodItems}
      onChange={(item: RequestMethodType) => {
        setMethodValue(item);
      }}
    />
  );
};
