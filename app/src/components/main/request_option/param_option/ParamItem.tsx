import type { FC } from 'react';
import React from 'react';
import { HeaderItem, HeaderItemProps } from '../header_option/HeaderItem';

//Yeah non-senese but add  just to make sure structure
interface ParamItemProps {}
export const ParamItem: FC<ParamItemProps & HeaderItemProps> = ({
  onChange,
  property,
  value,
}) => {
  return (
    <>
      <HeaderItem onChange={onChange} property={property} value={value} />
    </>
  );
};
