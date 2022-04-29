import { initRouter } from "./router";
import { initTextComp } from "./components/text-component/text-comp";
import { initTextFieldComp } from "./components/text-field-component/textField-component";
import "./components/button-component/index";

(function () {
  initTextComp();
  initTextFieldComp();
  const root = document.querySelector(".root");
  initRouter(root);
})();
