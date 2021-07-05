import React, { FC, useContext } from 'react';
import { DropDown } from '../../dropdown/DropDown';
import { MainFunctionContext } from '../MainFunctionContext';
import type { RequestMethodType } from './type';
interface RequestMethodProps {}
const methodItems: RequestMethodType[] = ['GET', 'POST', 'PUT', 'DELETE'];
export const RequestMethod: FC<RequestMethodProps> = () => {
  const context = useContext(MainFunctionContext);
  return (
    <DropDown
      items={methodItems}
      onChange={(item: RequestMethodType) => {
        if (context) {
          context.setMethod(item);
        }
      }}
    />
  );
};
