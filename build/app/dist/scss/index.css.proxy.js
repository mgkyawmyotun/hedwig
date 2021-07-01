// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body{--cultured: #f8f9faff;--cultured-2: #e9ecefff;--gainsboro: #dee2e6ff;--light-gray: #ced4daff;--cadet-blue-crayola: #adb5bdff;--slate-gray: #6c757dff;--davys-grey: #495057ff;--gunmetal: #343a40ff;--charleston-green: #212529ff}*,::after,::before{box-sizing:border-box}body{margin:0;background-color:var(--cultured)}h1{margin:0}p{margin:0}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}