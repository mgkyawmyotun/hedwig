export function copyToClipboard(text: string) {
  const elem = document.createElement('textarea');
  elem.value = text;
  document.body.appendChild(elem);
  elem.select();
  document.execCommand('copy');
  document.body.removeChild(elem);
}
export function toScale(
  oldmax: number,
  oldmin: number,
  oldvalue: number,
  newmin: number,
  newmax: number,
): number {
  let oldrange = oldmax - oldmin;
  let newrange = newmax - newmin;
  let newvalue = ((oldvalue - oldmin) * newrange) / oldrange + newmin;
  return newvalue;
}

export function formatParams(params: ParamsType) {
  let formParams = '';
  let result = '';
  if (params.length > 0) {
    formParams = params
      .map(([p, v]) => (p.length > 0 && v.length > 0 ? `${p}=${v}&` : ''))
      .join('');
    result = '?' + formParams.substring(0, formParams.length - 1);
  }
  return (url: string) => {
    if (params.length > 0) {
      url += result;
    }
    return url;
  };
}

export function IsObjectURL(data: string) {
  return data.startsWith('blob:http');
}
export function toFormData(body: BodyOptionsType) {
  let formData = new FormData();
  body.forEach(([p, v]) => formData.append(p, v));
  return formData;
}
export function isGetMethod(method: RequestMethodType) {
  return method === 'GET';
}
