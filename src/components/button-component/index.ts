/*
Esta es otra forma de importar componentes, que es básicamente sin el "export"
Directamente definimos el elemento en el módulo de typescript, y en el index.ts principal
sólo hacemos:

import "./components/button-component/index";

Y directamente se inicializa sólo, no hace falta tampoco llamar a la función initButton (que ya no existe)
*/

customElements.define(
  "custom-button",
  class extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const label = this.getAttribute("label");
      const shadow = this.attachShadow({ mode: "open" });
      const button = document.createElement("button");
      const style = document.createElement("style");
      button.className = "root";
      style.innerHTML = `
      .root{
        font-size: 25px;
        color: slateblue;
        background-color: yellow;
        padding: 5px 5px;
        margin-top: 20px;
        width: 100%;
      }
      .otro{
        font-size: 25px;
        color: slateblue;
        background-color: coral;
        padding: 5px 5px;
        margin-top: 20px;
        width: 100%;
        }
        .atras{
          font-size: 25px;
          color: slateblue;
          background-color: springgreen;
          padding: 5px 5px;
          margin-top: 20px;
          width: 100%;
        }
        `;
      if (label == "step") {
        button.className = "otro";
      }
      if (label == "back") {
        button.className = "atras";
      }
      button.textContent = this.textContent;
      shadow.appendChild(button);
      shadow.appendChild(style);
    }
  }
);
