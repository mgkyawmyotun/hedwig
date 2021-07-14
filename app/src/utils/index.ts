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
  const formParams = params.map(([p, v]) => `${p}=${v}&`).join('');
  return '?' + formParams.substring(0, formParams.length - 1);
}
