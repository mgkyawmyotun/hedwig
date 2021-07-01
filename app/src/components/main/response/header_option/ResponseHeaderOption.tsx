import React, { FC, useContext, useEffect } from 'react';
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
export const ResponseHeaderOption: FC<ResponseHeaderOptionProps> = ({
  ...props
}) => {
  const context = useContext(MainFunctionContext);
  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <div {...props} data-id="response-header">
      {context && context.response && renderHeaders(context.response)}
    </div>
  );
};
