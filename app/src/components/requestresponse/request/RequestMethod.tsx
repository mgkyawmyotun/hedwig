import React, { FC, useContext } from 'react';
import { RequestResponseContext } from '../../../context/RequestResponseContext';
import { DropDown } from '../../dropdown/DropDown';
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
