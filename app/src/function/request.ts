import type { ParamsType, ReqeustOptions } from './../../types/request.d';
import type { RequestMethodType } from './../components/main/request/type';
export const makeRequest = async (
  url: string,
  method: RequestMethodType,
  options?: ReqeustOptions,
  params?: ParamsType,
) => {
  const raw_response = await fetch(url, {
    method,
    credentials: 'include',
  });
  console.log(await raw_response.text());
  const response = await raw_response.json();

  return response;
};
