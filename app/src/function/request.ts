import type { ParamsType, ReqeustOptions } from './../../types/request.d';
import type { RequestMethodType } from './../components/main/request/type';
export const makeRequest = async (
  url: string,
  method: RequestMethodType,
  options?: ReqeustOptions,
  params?: ParamsType,
) => {
  console.log(options);
  const response = await fetch(url, {
    method,
    credentials: 'include',
    headers: options && options.headers,
  });

  return response;
};
