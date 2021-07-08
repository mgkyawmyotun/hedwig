import React, { FC, useContext } from 'react';
import { DropDown } from '../../dropdown/DropDown';
import { RequestResponseContext } from '../RequestResponseContext';
import type { RequestMethodType } from './type';
interface RequestMethodProps {}
const methodItems: RequestMethodType[] = ['GET', 'POST', 'PUT', 'DELETE'];
export const RequestMethod: FC<RequestMethodProps> = () => {
  const context = useContext(RequestResponseContext);
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
