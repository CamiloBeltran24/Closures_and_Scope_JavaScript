// Es posible utilizar varaibles privadas, esto mediante la implementacion de los closures y la creacion de los meotodos getName y setName
// Para este caso solo es posible modificar la varaible saveName accediendo a los metodos que se crearon setName y getName

const person = () => {
  var saveName = "Name";
  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    },
  };
};

newPerson = person(); //se crea la instancia de la persona
console.log(newPerson.getName());
newPerson.setName("Camilo"); // uso del metodo setName para enviar el nuevo string a la variable saveName
console.log(newPerson.getName());
