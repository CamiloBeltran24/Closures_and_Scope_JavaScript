// Gracias al hoisting el siguiente codigopuede funcionar.
a = 2;
var a;

console.log(a); // 2
// El hoisting eleva las declaraciones, es decir que en el caso anterior tenemos:
// a = 2;
// var a;
// Pero gracias al hoistin es como si tibieramos lo siguiente:
// var a
// a = 2
// elevando la declaracion una linea antes de la asignacion
// Todo esto sucede al momento de la compilacion del codigo.

// ======== SEgundo Ejemplo
console.log(a);
var a = 2;
// El hoistin solo funciona en las declaraciones y no en las inicializaciones
// Para este caso estamos imprimiendo una varaible que no ha sido definida, el hoisting no asciende las inicializaciones.

// ======== Ejemplo 3
// Con las funciones tambien se aplica el hoisting permitiendo que se asciendan primero la definicion de la funcion antes que su llamado.
nameOfDog("Cooper");

function nameOfDog(name) {
  console.log(name);
}
