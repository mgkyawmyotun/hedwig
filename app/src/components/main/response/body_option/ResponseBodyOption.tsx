import React, { FC, useContext, useEffect, useState } from 'react';
import { MainFunctionContext } from '../../MainFunctionContext';
type ResponseBodyOptionProps = {} & React.ComponentProps<'div'>;
const useBody = () => {
  const context = useContext(MainFunctionContext);
  const [body, setBody] = useState<string>();
  useEffect(() => {
    if (context && context.response && !body) {
      const response = context.response.clone();
      response.text().then((value) => setBody(value));
    }
  }, [context]);
  return body;
};
export const ResponseBodyOption: FC<ResponseBodyOptionProps> = ({
  ...props
}) => {
  const body = useBody();
  return (
    <div {...props} data-id="response-body">
      {body && body}
    </div>
  );
};
