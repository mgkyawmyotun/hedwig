import type { ParamsType, ReqeustOptions } from './../../types/request.d';
import type { RequestMethodType } from './../components/main/request/type';
function formatParams(params: ParamsType) {
  const formParams = params.current.map(([p, v]) => `${p}=${v}&`).join('');
  return '?' + formParams.substring(0, formParams.length - 1);
}
export const makeRequest = async (
  url: string,
  method: RequestMethodType,
  options: ReqeustOptions,
  params: ParamsType,
  cred?: boolean,
) => {
  // console.log(method);
  console.log(params);
  if (params) {
    url = url + formatParams(params);
  }
  if (method === 'GET') {
    const response = await fetch(url, {
      method,
      headers: options.headers.current,
      credentials: cred ? 'include' : 'omit',
    });

    return response;
  }
  let formData = new FormData();
  options.body.current.forEach(([p, v]) => formData.append(p, v));

  const response = await fetch(url, {
    method,
    headers: options.headers.current,
    credentials: cred ? 'include' : 'omit',
    body: formData,
  });

  return response;
};
