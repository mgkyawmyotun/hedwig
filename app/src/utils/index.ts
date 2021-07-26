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
export function setOption<V>(arrays: any, data: V, index: number) {
  if (arrays[index]) {
    arrays[index] = data;
    return;
  }
  arrays.push(data);
}

function saveModeToLocalStorage(mode: Mode) {
  localStorage.setItem('mode', mode);
}

export function switchToMode(mode: Mode) {
  if (mode === 'dark') {
    document.body.classList.toggle('dark', true);
    document.body.classList.toggle('light', false);
    saveModeToLocalStorage('dark');
    return;
  }
  document.body.classList.toggle('dark', false);
  document.body.classList.toggle('light', true);
  saveModeToLocalStorage('light');
}
export function setDefaultMode() {
  const mode = getMode();
  if (mode) {
    switchToMode(mode);
    return;
  }
}
export function getMode() {
  return localStorage.getItem('mode') as Mode | undefined;
}
