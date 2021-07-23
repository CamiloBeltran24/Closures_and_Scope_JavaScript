// Es posible acceder a una variable local dentro del mismo scope o bloque de codigo, en este caso dentro de la misma funcion se hace la impresion en consola de la variable
const helloWorld = () => {
  const hello = "Hello World";
  console.log(hello);
};
helloWorld();

console.log(hello); // es imposible acceder a la varaible hello porque esta esta dentro del scope local de la funcion helloWorld().

// Ambito lexico

var scope = "I am global";

const functionScope = () => {
  var scope = "I am just a local";
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope(); // retorna la varaible scope que esta dentro de la funcion, aunque esa varaible tenga el mismo nombre de la global, la funcion hace alucion a la varaible dentro de su scope.
console.log(scope); // accede a la varaible global scope

const functionScope2 = () => {
  var scope = "Soy otro ambito lexico";
  const func = () => {
    return func;
  };
  console.log(scope);
};

functionScope2();
