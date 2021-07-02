import type { FC } from 'react';
import React from 'react';

interface ParamOptionProps {}
export const ParamOption: FC<ParamOptionProps> = (params) => {
  return (
    <div {...params} data-id="param">
      <h1>Params</h1>
    </div>
  );
};
