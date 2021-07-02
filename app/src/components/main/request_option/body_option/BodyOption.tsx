import React, { FC } from 'react';

interface BodyOptionProps {}
function isEqual(prev: any, next: any) {
  console.log('Hello');
}
export const BodyOption: FC<BodyOptionProps & React.ComponentProps<'div'>> = (
  props,
) => {
  return (
    <div data-id="request-body" {...props}>
      <h1>Body</h1>
    </div>
  );
};
