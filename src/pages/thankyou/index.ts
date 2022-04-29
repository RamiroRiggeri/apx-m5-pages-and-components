export function initThankyou(goToFunc) {
  const div = document.createElement("div");
  div.className = "welcome-page";
  div.innerHTML = `
  <text-custom variant="title">Gracias totales</text-custom>
  <div class="main">
  <text-custom variant="what">Así hacemos componentes reutilizables</text-custom>
  <text-custom variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</text-custom>
  <div>
  <text-field-comp label="Nombre"></text-field-comp>
  </div>
  <div>
  <text-field-comp label="Apellido"></text-field-comp>
  </div>
  <custom-button class="boton-start">Finalizar</custom-button>
  <custom-button class="boton-back" label="back">Mandame atrás</custom-button>
  `;

  div.querySelector(".boton-start").addEventListener("click", () => {
    window.alert("ya está capo");
  });

  div.querySelector(".boton-back").addEventListener("click", () => {
    goToFunc.goTo("/step-1");
  });

  return div;
}
