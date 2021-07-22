const fruits = () => {
  var fruit = "Apple";
  console.log(fruit);
};

fruits();
console.log(fruit);

const anotherFunction = () => {
  var x = 1;
  var x = 2; // es posible sobre escribir las variables con var tambien dentro de una funcion.
  let y = 1;
  let y = 2; // let no permite sobre escribir las variables
  console.log(x);
  console.log(y);
};

anotherFunction();
