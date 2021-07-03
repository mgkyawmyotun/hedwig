import type { FC } from 'react';
import React from 'react';
import { RequestHeader } from '../RequestHeader';

interface ParamOptionProps {}
export const ParamOption: FC<ParamOptionProps> = (params) => {
  return (
    <div {...params} data-id="param">
      <RequestHeader
        headerText="Params"
        onButtonClick={() => {
          console.log('Params');
        }}
      />
    </div>
  );
};
