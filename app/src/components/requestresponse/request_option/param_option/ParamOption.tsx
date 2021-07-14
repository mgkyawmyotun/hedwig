import React, { FC } from 'react';
import { paramAdded } from '../../../../redux/features/requestresponse/requestresponseSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { RequestHeader } from '../RequestHeader';
import { addNew, MapOptions } from '../share';
import styles from './../../../../scss/requestoption.module.scss';
import { ParamItem } from './ParamItem';

interface ParamOptionProps {}
export const ParamOption: FC<ParamOptionProps> = (props) => {
  const params = useAppSelector((state) => state.requestresponse.params);
  const dispatch = useAppDispatch();
  return (
    <div {...props} data-id="param">
      <RequestHeader
        headerText="Params"
        onButtonClick={() => {
          dispatch(addNew(paramAdded));
        }}
      />
      <div className={styles.param__options__items}>
        {MapOptions<typeof params, ParamType, string, string>(
          ParamItem,
          params,
          (p, v, i) => {
            dispatch(paramAdded([p, v], i));
          },
        )}
      </div>
    </div>
  );
};
