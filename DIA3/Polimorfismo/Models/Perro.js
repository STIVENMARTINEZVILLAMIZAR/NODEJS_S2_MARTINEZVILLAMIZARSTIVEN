const Animal = require("./Animal");
class Perro extends Animal{
    hablar(){
        console.log(`El perro 🐶 ${this.nombre} dice Roff!`);
    }
}
module.exports = Perro;