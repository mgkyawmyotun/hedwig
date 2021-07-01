import type { ParamsType, ReqeustOptions } from './../../types/request.d';
import type { RequestMethodType } from './../components/main/request/type';
export const makeRequest = async (
  url: string,
  method: RequestMethodType,
  options?: ReqeustOptions,
  params?: ParamsType,
) => {
  const response = await fetch(url, {
    method,
    headers: options && options.headers,
  });

  return response;
};
