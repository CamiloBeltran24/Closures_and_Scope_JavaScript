// Chrome Devtools permite realizar debuggin de nuestro codigo escribiendo la palabra reservada debugger. debugger detendra la ejecucion del algoritmo y gracias a las devtools nos permitira evaluar el estado de las variables, los datos que almacena y el scope en que estan definidas.

// Debugger dentro de ChromeDevtools se ubica en la pestaña Source
var a = "Hello";

function hello() {
  let b = "Hello World";
  const c = "Hello World!";
  if (true) {
    let d = "Hello world!!";
    debugger;
  }
}

hello();

const moneyBox2 = () => {
  debugger;
  var saveCoins = 0;
  console.log(`Dentro de la funcion pero fuera del closure: $${saveCoins}`);
  const countCoins = (coins) => {
    debugger;
    console.log(saveCoins);
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  };
  return countCoins;
};

let myMoneyBox = moneyBox2();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
