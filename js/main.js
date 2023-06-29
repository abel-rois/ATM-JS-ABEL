//seleccion del body  
const body = document.querySelector("body");  
//seleccion del div principal
const wrapper = document.querySelector("#wrapper");  
//selección del formulario
const formulario = document.querySelector("#select-account"); 
//selección del menú de cuentas
const select = document.querySelector("select"); 


//arreglo con 3 objetos (cuentas) con sus respectivas propiedades (id,nombre,saldo,pin)
const cuentas = [
  { id: 10, nombre: "Abel", saldo: '500.00', pin: "0000" },
  { id: 24, nombre: "Marisol", saldo: '500.00', pin: "1234" },
  { id: 11, nombre: "Elena", saldo: '500.00', pin: "2022" },
];


// renderMenu()
const validatePIN = (id, pin) => {
  selected = cuentas.filter((cuenta) => {
    return cuenta.id === parseInt(id);       //parseInt convierte el valor del id en entero
  });
  if (selected[0].pin === pin) {
    wrapper.innerHTML = "";
    renderMenu(selected[0].nombre);
  } else {
    alert("Intenta nuevamente");
  }
};

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  let user_id = event.target["cuenta"].value;
  const pinFormulario = document.createElement('form');
  const pinInput = document.createElement('input');
  pinInput.type = 'password';
  pinInput.name = 'pin';
  pinInput.placeholder = 'Ingresa tu PIN';
  pinInput.classList.add("form-control", "form-control-sm");

  const botonSalir = document.createElement('button');
  botonSalir.type = 'button';
  botonSalir.innerText = 'Salir';
  botonSalir.classList.add("btn", "btn-danger", "mt-3");

  const botonEnvio = document.createElement('button');
  botonEnvio.type = 'submit';
  botonEnvio.innerText = 'Ingresar';
  botonEnvio.classList.add("btn", "btn-success", "mt-3", "mr-2");

  const nombreSeccion = document.createElement('span');
  nombreSeccion.textContent = 'Validación de PIN';
  nombreSeccion.classList.add('d-block', 'p-2', 'text-bg-primary', 'h2');


  pinFormulario.appendChild(nombreSeccion); 
  pinFormulario.appendChild(pinInput);
  pinFormulario.appendChild(botonEnvio);
  pinFormulario.appendChild(botonSalir);

  // Mostrar formulario 
  wrapper.innerHTML = "";
  wrapper.appendChild(pinFormulario);

  pinFormulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let pin = event.target["pin"].value;
    validatePIN(user_id, pin);
  });

  botonSalir.addEventListener('click', () => {
    location.reload();
  });


});

cuentas.forEach((cuenta) => {
  let option = document.createElement("option");
  option.value = cuenta.id;
  option.innerText = cuenta.nombre;
  select.appendChild(option);
});


// [] <- Array
// {} <- Object

// Pseudocódigo
/*
1. Seleccionar la cuenta 
2. Cuando se seleccione una cuenta se solicitará el pin 
3. Validar el pin ingresado y si el pin proporcionado es incorrecto intentar nuevamente y sí es correcto mostrar menú de opciones
4. Mostra menú de opciones (consultar, depositar, retirar, salir)
5. Dependiendo de la opción seleccionada mostrar la pantalla correspondiente
*/
