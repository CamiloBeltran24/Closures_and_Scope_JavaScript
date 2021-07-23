// Es posible que algun momento creemos closures de forma involutaria  el siguiente es un ejemplo de un clusure mal implementado, este retornara el numero final de la ejecucion del ciclo for 10 veces
const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
};
anotherFunction();

// Pero es posible ejecutar el Closure de forma correcta en este caso cambiando var por let dentro del ciclo for
const anotherFunction = () => {
  for (let i = 0; i <= 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
};
anotherFunction();
