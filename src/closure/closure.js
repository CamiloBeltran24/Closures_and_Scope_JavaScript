const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
};

moneyBox(5);
moneyBox(10);

// CLOSURE
// Un Closure es la combinacion entre una funcion y el ambito lexico en la cual ha sido declarada dicha funcion. "Un Closure recuerda el ambito en el cual ha sido creado "

// los closure recuerdan los datos en memoria y recuerdan el ambito en que son declarados.
const moneyBox2 = () => {
  var saveCoins = 0;
  console.log(`Dentro de la funcion pero fuera del closure: $${saveCoins}`); // esta linea esta fuera del closure
  const countCoins = (coins) => {
    console.log(saveCoins);
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  };
  return countCoins;
};

let myMoneyBox = moneyBox2(); // Es necesario crear el ambito de esta manera.

myMoneyBox(4); // retorna 4
myMoneyBox(6); // retorna 10 dado que el closure recuerda el valor anterior de la varaible
myMoneyBox(10);
