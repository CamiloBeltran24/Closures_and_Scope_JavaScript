const fruits = () => {
  if (true) {
    var fruits1 = "Apple"; // al usar var es posible acceder a la varaible fruits dentro de cualquier parte de la funcion sin importar que sea fuera del bloque de codigo en que la variable a sido definida
    let fruits2 = "Banana";
    const fruits3 = "Kiwi";
    console.log(fruits2);
    console.log(fruits3);
  }
  console.log(fruits1);
  console.log(fruits2); // retornara error por que fruits2 fue definida con let y solo sera accesible dentro del scope del bloque de codigo
  console.log(fruits3); // retornara error por que fruits3 fue definida con const y solo puede ser accedida desde el scope del bloque.
};

fruits();

// Example 2
// Let no sobre escruibe y respeta el scope para que las varaibles puedan ser accedidas solo dentro del bloque
let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);

// Con var podemos sobre escribir variables incluso fuera del scope en que fuers definidas.
var x = 1;
{
  var x = 2;
  console.log(x);
}
console.log(x);

// Para el siguiente ejemplo dentro del ciclo for se ha utilizado la palabra reservada let para definir la varable i. let permite que el interval acceda a let e imprima cada una de las iteraciones
// En cambio si lo hiciecemos con var se imprimiria 10 veces el numero 10 pues var no permitira que el interval muestr cada una de las iteraciones.
const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
};
anotherFunction();
