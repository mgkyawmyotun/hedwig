import { css_beautify, html_beautify, js_beautify } from 'js-beautify';
function isJSON(text: string) {
  try {
    JSON.parse(text);
    return true;
  } catch (error) {
    return false;
  }
}
export function beautify(text: string | undefined, contentType: string | null) {
  if (text) {
    if (contentType) {
      if (contentType === 'text/html') {
        return html_beautify(text);
      }
      if (contentType.split(';')[0] === 'application/json') {
        return JSON.stringify(JSON.parse(text), null, '\t');
      }
      if (contentType === 'application/javascript') {
        return js_beautify(text);
      }
      if (contentType.split(';')[0] === 'text/css') {
        return css_beautify(text);
      }
    }
    if (isJSON(text)) {
      return JSON.stringify(JSON.parse(text), null, '\t');
    }
    return html_beautify(text);
  }
}
