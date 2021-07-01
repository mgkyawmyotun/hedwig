import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { beautify } from '../../../../function/beautify';
import { MainFunctionContext } from '../../MainFunctionContext';
type ResponseBodyOptionProps = {} & React.ComponentProps<'div'>;
const useBody = () => {
  const context = useContext(MainFunctionContext);
  const [body, setBody] = useState<string>();
  const contentType = useRef<string | null>(null);
  useEffect(() => {
    if (context && context.response) {
      const response = context.response.clone();
      contentType.current = response.headers.get('Content-Type');
      response.text().then((value) => {
        setBody(value);
      });
    }
  }, [context]);
  return [body, setBody, contentType.current] as const;
};
export const ResponseBodyOption: FC<ResponseBodyOptionProps> = ({
  ...props
}) => {
  const [body, setBody, contentType] = useBody();

  return (
    <div {...props} data-id="response-body">
      <div>
        <button onClick={() => setBody(beautify(body, contentType))}>
          {'{}'}
        </button>
      </div>
      <pre>
        <code>{body}</code>
      </pre>
    </div>
  );
};
