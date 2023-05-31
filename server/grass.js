let LivingCreature = require("./leavingcreature")
module.exports = class Grass extends LivingCreature {    

    mul() { 
    
    this.multiply+=60; 
    let n = this.chooseCell(0)
    let newCell = n[Math.floor(Math.random() * n.length)]
    if(this.multiply >= 10 && newCell) { 
    let newGrass = new Grass(newCell[0],newCell[1], this.index);   
    grassArr.push(newGrass);   
    matrix[newCell[1]][newCell[0]] = 1;    
    this.multiply = 0;
 

      } 
    }   
}