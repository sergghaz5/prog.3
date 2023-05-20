LivingCreature = require("./leavingcreature.js")
module.exports = class GrassEater extends LivingCreature {
  
    getNewCoordinates() {
      this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],  
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
      ]
    }
    
    chooseCell(ch) {

        this.getNewCoordinates();
        
        return super.chooseCell(ch);
        
        }
        
    mul() {
      var newCell = random(this.chooseCell(1))
      if (newCell) {
        var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index)
        grassEatArr.push(newGrassEater)
        matrix[newCell[1]][newCell[0]] = 2
      }
    }
  
    move(){
      this.energy --
      let emptyCells = this.chooseCell(0)
      let newCell = random(emptyCells)
      if(this.energy>0){

          if(newCell){
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 2
            this.x = newX
            this.y = newY
          }
      } else {
          this.die()
      }
    }
  
    eat(){
      let foods = this.chooseCell(1)
      let food = random(foods)
      if(food){
        this.energy++
        matrix[this.y][this.x] = 0
        let newX = food[0]
        let newY = food[1]
        matrix[food[1]][food[0]] = 2
        this.x = newX
        this.y = newY
        for (var i in grassArr) {
          if (newX == grassArr[i].x && newY == grassArr[i].y) {
            grassArr.splice(i,1)
            break;
          }
        }
        if(this.energy >= 12){
          this.mul()
        }
      }
      else{
        this.move()
      }
    }
  
    die(){
      matrix[this.y][this.x] = 0
      for (var i in grassEatArr) {
        if (this.x == grassEatArr[i].x && this.y == grassEatArr[i].y) {
          grassEatArr.splice(i,1)
          break
        }
      }
    }
  }