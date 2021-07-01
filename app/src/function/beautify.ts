import { html_beautify } from 'js-beautify';
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
    if (isJSON(text)) {
      return JSON.stringify(JSON.parse(text), null, '\t');
    }

    console.log(html_beautify(text));
    return html_beautify(text);
  }
}
