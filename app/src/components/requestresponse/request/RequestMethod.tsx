import React, { FC } from 'react';
import { methodSwitched } from '../../../redux/features/requestresponse/requestresponseSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { DropDown } from '../../dropdown/DropDown';
interface RequestMethodProps {}
const methodItems: RequestMethodType[] = ['GET', 'POST', 'PUT', 'DELETE'];
export const RequestMethod: FC<RequestMethodProps> = () => {
  const method = useAppSelector((state) => state.requestresponse.method);
  const dispatch = useAppDispatch();
  return (
    <DropDown
      items={methodItems}
      defaultItem={method}
      onChange={(item: RequestMethodType) => {
        dispatch(methodSwitched(item));
      }}
    />
  );
};
