import React, { FC } from 'react';
import { useAppSelector } from '../../../../redux/hooks';

interface ResponseHeaderOptionProps {}
const renderHeaders = (response: Response) => {
  const responseHeaderItemList = [];
  for (let [key, value] of response.headers.entries()) {
    responseHeaderItemList.push(
      <div key={key}>
        <div>{key}</div>
        <div>{value}</div>
      </div>,
    );
  }
  return responseHeaderItemList;
};
export const ResponseHeaderOption: FC<
  ResponseHeaderOptionProps & React.ComponentProps<'div'>
> = ({ ...props }) => {
  const response = useAppSelector((state) => state.requestresponse.response);
  return (
    <div data-id="response-header" {...props}>
      {response && renderHeaders(response)}
    </div>
  );
};
