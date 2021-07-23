// Closure
const buildCount = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++);
  };
  return displayCount;
};
// Fin del closure

// Primera instancia del closure
//con cada iteracion del closure este recuerda el valor anterior de la varaible por ende esta aumentara en 1 con cada llamado
const myCount = buildCount(1);
myCount();
myCount();
myCount();
myCount();

// Segunda instancia del closure
const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
