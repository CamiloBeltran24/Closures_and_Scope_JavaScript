var hello = "Hello";
var hello = "Hello +"; // con var es posible re asignar una varaible las veces que sea pero esto es una mala practica de desarrollo, se debe tener mucho cuidado al momento de trabajar con variables globales

let world = "Hello world";
const helloWorld = "Hello world";
// let world = "Another string";
// Con let y const aunque estemos definiendo varaibles globales no es posible re escribirlas al igual que con var
// Las anteriores variables estan definidas dentro del scope global y es posible que sean accedidas desde cualquier parte del codigo.

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
};
anotherFunction();

// ==== NO SE DEDE HACER

const sayHello = () => {
  globalVar = "Im global";
};
sayHello();
console.log(globalVar);
// Es posible definir varaibles globales tambien desde una funcion y acceder a ellas desde fuera de la funcion si primero llamamos a la funcion. Esto es considerado una muy mala practica de dasarrollo

const lastFunction = () => {
  var localVar = (globalVar = "Im the last example"); // doble asignacion de variable
};

lastFunction();
console.log(globalVar);
