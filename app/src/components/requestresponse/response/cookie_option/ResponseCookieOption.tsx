import React, { FC } from 'react';
import { useAppSelector } from '../../../../redux/hooks';

interface ResponseCookieOptionProps {}

// const renderCookies = ({
// }: RequestResponseContextType) => {
//   try {
//     const response = await makeRequest(url, method, options, params, true);
//     const cookies = response.headers.get('Set-Cookie');
//     return cookies ? <div>{cookies}</div> : <div>No Cookies</div>;
//   } catch (error) {
//     return <div>No Cookie</div>;
//   }
// };const renderHeaders = (response: Response) => {
const renderCookies = (response: Response) => {
  const cookies = response.headers.get('Set-Cookie');
  console.log(cookies);
  if (cookies) {
    return <div>{cookies}</div>;
  }
  return <div>No Cookie</div>;
};
export const ResponseCookieOption: FC<
  ResponseCookieOptionProps & React.ComponentProps<'div'>
> = ({ ...props }) => {
  const response = useAppSelector((state) => state.requestresponse.response);
  return (
    <div {...props} data-id="response-cookie">
      {response && renderCookies(response)}
    </div>
  );
};
