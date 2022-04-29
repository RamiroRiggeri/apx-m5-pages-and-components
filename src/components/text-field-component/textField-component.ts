export function initTextFieldComp() {
  customElements.define(
    "text-field-comp",
    //es otra manera de crear un custom element
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }

      render() {
        const label = this.getAttribute("label");
        const shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const style = document.createElement("style");

        style.innerHTML = `
        .label{
          margin-top: 30px;
          display:block;
          height: 40px;
        }
        .input{
          height: 40px;
          font-size: 18px;
          border: solid 3px magenta;
          border-radius: 38px;
          color: green;
        }
      `;

        /*
        div.innerHTML = `
        ${
          label
            ? `
        <label class="label">
        <text-custom variant="what">
        ${label}
        </text-custom>
        </label>
        `
            : `<text-custom variant="loco">Nombre</text-custom>`
        }
          <input type="text" class="input" />
        `;
         */
        // ----------------------------------------------------------
        /*
        Lo que pasó acá es que si yo declaro algo dentro de los literales ( ${ algo } ) todo lo que
        esté adentro se ejecuta como código. Entonces, puedo hacer un if (en este caso ternario)
        Y ponerle, si tengo label, poné todo este código (hecho con string literal ` algo `) y es false
        todo esto otro.
        una opción más simple para visualizarlo mejor sería:

        div.innerHTML = `
        ${
          if(label == "nombre"){
            `<text-custom variant="loco">Nombre</text-custom>`
          } else {
            `<text-custom variant="what">Apellido</text-custom>`
          }
        }
        `;

        Esto anterior checkea si el valor de label es "nombre" y si es true le pone una variant y el texto "Nombre"
        Y si no, Apellido en otra variant. Todo está envuelto en las llaves del ${} y cada resultado, cada cosa a 
        imprimir, en string literal (`)

        */

        div.innerHTML = `
          <label class="label">
            <text-custom variant="what">
                  ${label}
            </text-custom>
          </label>
          <input type="text" class="input" />
        `;

        shadow.appendChild(div);
        shadow.appendChild(style);
      }
    }
  );
}
