import React, { FC, useContext, useEffect, useState } from 'react';
import { makeRequest } from '../../../../function/request';
import {
  RequestResponseContext,
  RequestResponseContextType,
} from '../../RequestResponseContext';

interface ResponseCookieOptionProps {}

const renderCookies = async ({
  url,
  method,
  options,
  params,
}: RequestResponseContextType) => {
  try {
    const response = await makeRequest(
      url,
      method.current,
      options,
      params,
      true,
    );
    const cookies = response.headers.get('Set-Cookie');
    return cookies ? <div>{cookies}</div> : <div>No Cookies</div>;
  } catch (error) {
    return <div>No Cookie</div>;
  }
};
export const ResponseCookieOption: FC<
  ResponseCookieOptionProps & React.ComponentProps<'div'>
> = ({ ...props }) => {
  const context = useContext(RequestResponseContext);
  const [cookie, setCookie] = useState<JSX.Element>(<div></div>);
  useEffect(() => {
    if (context) {
      renderCookies(context).then((x) => setCookie(x));
    }
  }, [context]);
  return (
    <div {...props} data-id="response-cookie">
      {context && cookie}
    </div>
  );
};
