/* Tipo de error */
const tiposError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError",
  ];

/* Mensajes customizados */
const mensajes = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un nombre válido.",
      tooShort: "El nombre es muy corto.",
    },
    email: {
      valueMissing: "El campo email no puede estar vacío.",
      typeMismatch: "Por favor, ingrese un email válido.",
      tooShort: "Por favor, ingrese un e-mail válido.",
    },
    asunto: {
      valueMissing: "El campo asunto no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un asunto válido.",
      tooShort: "El campo no tiene caracteres suficientes.",
    },
    mensaje: {
      valueMissing: "El mensaje no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un mensaje.",
      tooShort: "El campo mensaje no tiene caracteres suficientes.",
    },
 
  };
  


/* cargo todos los campos que tienen required */
const camposDeFormulario = document.querySelectorAll("[required]");

/*
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const listaRespuestas = {
    nombre: e.target.elements["nombre"].value,
    email: e.target.elements["email"].value,
    identificacion: e.target.elements["identificacion"].value,
    cuil: e.target.elements["cuil"].value,
    fecha_nacimiento: e.target.elements["fecha_nacimiento"].value,
  };
  localStorage.setItem("registro", JSON.stringify(listaRespuestas));
  window.location.href = "./abrir-cuenta-form-2.html";
});
*/

/* recorro los campos, y ejecuto funcion verificarCampo al salir de foco*/
camposDeFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));

  /* desactiva el mensaje de error del navegador */
  campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function verificarCampo(campo) {
  //console.log("cambio",campo.name); /* me dice el nombre del campo que cambio */
  let mensaje = "";

  if (campo.name =="nombre" && campo.value.length < 3) {
    console.log("nombre muy corto");
  }

  if (campo.name =="mensaje" && campo.value =="") {
    console.log("mensaje vacio");
  }

  tiposError.forEach((error) => {
    if (campo.validity[error]) {
      mensaje = mensajes[campo.name][error];
    }
  });

  console.log(mensaje);

   /*  console.log(campo.validity); */

   const mensajeError = campo.parentNode.querySelector(".mensaje-error");
   const validarInputCheck = campo.checkValidity();

   
  if (!validarInputCheck) {
    mensajeError.textContent = mensaje;
    campo.style.border = "2px solid red"

  } else {
    mensajeError.textContent = "";
    campo.style.border = "2px solid green";

  }
  /*
  campo.setCustomValidity("");





  */
}

