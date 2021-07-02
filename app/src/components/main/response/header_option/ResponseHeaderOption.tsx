import React, { FC, useContext } from 'react';
import { MainFunctionContext } from '../../MainFunctionContext';

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
  const context = useContext(MainFunctionContext);

  return (
    <div data-id="response-header" {...props}>
      {context && context.response && renderHeaders(context.response)}
    </div>
  );
};
