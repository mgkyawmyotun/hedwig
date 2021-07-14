import React, { FC } from 'react';
import { paramAdded } from '../../../../redux/features/requestresponse/requestresponseSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { RequestHeader } from '../RequestHeader';
import { addNew } from '../share';
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
        {params.map(([property, value], index) => (
          <ParamItem
            property={property}
            value={value}
            key={index}
            onChange={(property, value) => {
              dispatch(paramAdded([property, value], index));
            }}
          />
        ))}
      </div>
    </div>
  );
};
