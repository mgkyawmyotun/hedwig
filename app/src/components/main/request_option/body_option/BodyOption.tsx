import React, { FC } from 'react';
import { RequestHeader } from '../RequestHeader';
import { BodyItem } from './BodyItem';

interface BodyOptionProps {}
function isEqual(prev: any, next: any) {
  console.log('Hello');
}
export const BodyOption: FC<BodyOptionProps & React.ComponentProps<'div'>> = (
  props,
) => {
  return (
    <div data-id="request-body" {...props}>
      <RequestHeader
        headerText="Body"
        onButtonClick={() => {
          console.log('body ');
        }}
      />
      <BodyItem />
    </div>
  );
};
