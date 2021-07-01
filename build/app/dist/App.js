import React from "../_snowpack/pkg/react.js";
import {Main} from "./components/main/index.js";
import {NavBar} from "./components/NavBar.js";
import "./scss/index.css.proxy.js";
function App({}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement(NavBar, null), /* @__PURE__ */ React.createElement(Main, null));
}
export default App;
