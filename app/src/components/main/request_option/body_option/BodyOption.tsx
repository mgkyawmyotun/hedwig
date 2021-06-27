import type { FC } from 'react';
import React from 'react';

interface BodyOptionProps {}
export const BodyOption: FC<BodyOptionProps> = (props) => {
  return <div {...props} data-id="body"></div>;
};
