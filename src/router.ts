import { initWelcome } from "./pages/welcome/index";
import { initStep1 } from "./pages/step-1/index";
import { initThankyou } from "./pages/thankyou/index";

const routes = [
  { path: /\/welcome/, component: initWelcome },
  { path: /\/step-1/, component: initStep1 },
  { path: /\/thankyou/, component: initThankyou },
];

export function initRouter(divRoot: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(path) {
    for (const r of routes) {
      if (r.path.test(path)) {
        const el = r.component({ goTo: goTo });
        if (divRoot.firstChild) {
          divRoot.firstChild.remove();
        }

        divRoot.appendChild(el);
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function (event) {
    handleRoute(location.pathname);
  };
}
