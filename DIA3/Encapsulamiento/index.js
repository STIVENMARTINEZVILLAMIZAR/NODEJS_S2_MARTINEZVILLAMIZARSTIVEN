

const Animal = require("./Models/Animal");
let animal1 = new Animal ("paco");
console.log(animal1.nombre);
animal1.verificarNombre("paco");
animal1.scrambleNombre();