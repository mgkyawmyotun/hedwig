import type { ParamsType, ReqeustOptions } from './../../types/request.d';
import type { RequestMethodType } from './../components/main/request/type';
export const makeRequest = async (
  url: string,
  method: RequestMethodType,
  options: ReqeustOptions,
  params: ParamsType,
  cred?: boolean,
) => {
  // console.log(method);
  if (method === 'GET') {
    const response = await fetch(url, {
      method,
      headers: options.headers,
      credentials: cred ? 'include' : 'omit',
    });

    return response;
  }
  let formData = new FormData();
  options.body.current.forEach(([p, v]) => formData.append(p, v));
  console.log(formData);
  const response = await fetch(url, {
    method,
    headers: options.headers,
    credentials: cred ? 'include' : 'omit',
    body: formData,
  });

  return response;
};
