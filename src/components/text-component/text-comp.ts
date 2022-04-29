export function initTextComp() {
  class TextComponent extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const variant = this.getAttribute("variant") || "body";
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      div.innerHTML = variant;
      const style = document.createElement("style");
      style.innerHTML = `
      .title{
        font-size: 42px;
        font-weight: bold;
      }
      .body{
        font-size: 18px;
      }
      .loco{
        font-size: 28px;
        color: red;
      }
      .what{
        color: blue;
        font-size: 20px;
        font-weight: bold;
      }
      `;
      div.className = variant;
      div.textContent = this.textContent;
      shadow.appendChild(div);
      shadow.appendChild(style);
    }

    /*
    Lo que hicimos acá es crear un custom element, que cuando está declarado en el html
    se le agrega un atributo inventado "variant" para determinar como se tiene que ver.
    Lo que hace Render() es guardarse el valor del atributo variant (o por defecto que sea body)
    Luego al componente se le agrega una hoja de estilos, y al último, lo que hago es asignarle al
    div que contiene el custom element en el html "real" (fuera del shadow), una clase que se llama
    igual que el atributo "variant" para que se apliquen esos estilos que creé sobre el componente
    final, basado en el variant.

    Por otro lado, cuando lo estábamos armando, habíamos puesto
    "div.innerHTML = variant" lo que hacía que el texto del componente final sea "title"
    Pero, queremos que se pueda escribir y tener contenido adentro, para que sea útil
    tenemos que mostrar el texto que le pasamos en el html:
    <text-custom variant="title">Texto</text-custom>
    para eso usamos 
    div.textContent = this.textContent;
    Que lo que hace es setear como parámetro del div (que es lo que va a salir visible),
    el textContent del html que yo le paso, sino ese texto no lo muestra.
    */
  }
  customElements.define("text-custom", TextComponent);
}
