const Animal = require("./Animal");
class Gato extends Animal{
    hablar(){
        console.log(`El gato 🐈 ${this.nombre} dice Miau!`);
    }
}
module.exports = Gato;