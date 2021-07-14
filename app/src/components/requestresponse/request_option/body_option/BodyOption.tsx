import React, { FC } from 'react';
import { bodyAdded } from '../../../../redux/features/requestresponse/requestresponseSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { RequestHeader } from '../RequestHeader';
import { addNew, MapOptions } from '../share';
import styles from './../../../../scss/requestoption.module.scss';
import { BodyItem } from './BodyItem';

interface BodyOptionProps {}
export const BodyOption: FC<BodyOptionProps & React.ComponentProps<'div'>> = (
  props,
) => {
  const body = useAppSelector((state) => state.requestresponse.body);
  const dispatch = useAppDispatch();
  return (
    <div data-id="body" {...props}>
      <RequestHeader
        headerText="Body"
        onButtonClick={() => {
          dispatch(addNew(bodyAdded));
        }}
      />
      <div className={styles.request__body__items}>
        {MapOptions(BodyItem, body, (p: string, v: string, i) => {
          dispatch(bodyAdded([p, v], i));
        })}
      </div>
    </div>
  );
};
