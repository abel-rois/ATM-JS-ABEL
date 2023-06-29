const actions = document.querySelector("#actions");


// (this) en funciones de Javascript

// function renderMenu(nombre)  {
const renderMenu = (nombre) => {
  let menu = `
  <div>
    <h1 class="d-block p-2 text-bg-primary">Bienvenido (a) ${nombre}</h1>
    <div class="row">
      <div class="col">
        <a class="btn btn-success" href="#" role="button" onClick="consultar()">Consultar</a>
      </div>
      <div class="col">
        <a class="btn btn-warning" href="#" role="button" onClick="depositar()">Depositar</a>
      </div>
      <div class="col">
        <a class="btn btn-info" href="#" role="button" onClick="retirar()">Retirar</a>
      </div>
      <div class="col">
        <a class="btn btn-danger" href="#" role="button" onClick="salir()">Salir</a>
      </div>
    </div>
  </div>`;

  wrapper.innerHTML = menu;
};

const consultar = () => {
  actions.innerHTML = ""
  actions.innerHTML = `<h4 style = "color: white">Su saldo es $${selected[0].saldo}</h4>`;
};

const depositar = () => {
  let amount = prompt("Ingresa el monto a depositar", "");
  let balance = parseFloat(selected[0].saldo) + parseFloat(amount)
  if (balance > 990) {
    actions.innerHTML = `<h4 style = "color: white">No puedes depositar más del valor total de 990.</h4>`;
  } 
  else {
    selected[0].saldo = balance.toFixed(2);
    actions.innerHTML = `<h4 style = "color: white">Tu nuevo saldo es $${selected[0].saldo}</h4>`;
  }
};


const retirar = () => {
  let amount = prompt("Ingresa el monto a retirar", "");
  let balance = parseFloat(selected[0].saldo) - parseFloat(amount)
  if (balance < 10) {
    actions.innerHTML = `<h4 style = "color: white">Tu cuenta no puede quedar por debajo de $10</h4>`;
  } else {
    selected[0].saldo = balance.toFixed(2);
    actions.innerHTML = `<h4 style = "color: white">Tu nuevo saldo es $${selected[0].saldo}</h4>`;
  }
};


const salir = () => {
  location.reload();
};





