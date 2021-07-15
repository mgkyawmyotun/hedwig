import React, { FC } from 'react';
import { Provider } from 'react-redux';
import type { RequestItemType } from '../../context/MainContext';
import { store } from '../../redux/store';
import { RequestForm } from './request';
import { RequestOptionMain } from './request_option';
import { Response } from './response';
interface RequestResponseType {
  requestItem?: RequestItemType;
}
export const RequestResponse: FC<RequestResponseType> = ({ requestItem }) => {
  return (
    <>
      <Provider store={store}>
        <RequestForm />
        <RequestOptionMain />
        <Response />
      </Provider>
    </>
  );
};
