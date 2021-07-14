import React, { FC } from 'react';
import { headerAdded } from '../../../../redux/features/requestresponse/requestresponseSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { RequestHeader } from '../RequestHeader';
import { addNew, MapOptions } from '../share';
import styles from './../../../../scss/requestoption.module.scss';
import { HeaderItem } from './HeaderItem';

interface HeaderOptionProps {}
export const HeaderOption: FC<HeaderOptionProps> = (props) => {
  const headers = useAppSelector((state) => state.requestresponse.headers);
  const dispatch = useAppDispatch();
  return (
    <div {...props} data-id="header">
      <RequestHeader
        headerText="Headers"
        onButtonClick={() => {
          dispatch(addNew(headerAdded));
        }}
      />
      <div className={styles.header__options__items}>
        {MapOptions<HeaderOptionsType, HeaderType, string, string>(
          HeaderItem,
          headers,
          (p, v, i) => {
            dispatch(headerAdded([p, v], i));
          },
        )}
      </div>
    </div>
  );
};
