LivingCreature = require("./leavingcreature.js")
module.exports = class GrassEater extends LivingCreature {

  constructor(x, y) {
    super()
    this.energy = 10;
    this.x = x
    this.y = y
  }

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
    let cells = this.chooseCell(1)
    let cell = cells[Math.floor(Math.random() * cells.length)]
    // var newCell = random123(this.chooseCell(1))
    // console.log(cell);
    
    if (cell) {
      var newGrassEater = new GrassEater(cell[0], cell[1], 2)
      grassEaterArr.push(newGrassEater)
      matrix[cell[1]][cell[0]] = 2
      for (var i in grassArr) {
        if (cell[0] == grassArr[i].x && cell[1] == grassArr[i].y) {
          grassArr.splice(i, 1)
          break;
        }
      }
    }
  }

  move() {
    // console.log(this.energy);

    this.energy--
    let e = this.chooseCell(0)
    let newCell = e[Math.floor(Math.random() * e.length)]
    if (this.energy > 0) {

      if (newCell) {
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

  eat() {
    let f = this.chooseCell(1)
    let food = f[Math.floor(Math.random() * f.length)]
    
    if (food) {
  

      this.energy += 0.1
      matrix[this.y][this.x] = 0
      let newX = food[0]
      let newY = food[1]
      matrix[food[1]][food[0]] = 2
      this.x = newX
      this.y = newY
      for (var i in grassArr) {
        if (newX == grassArr[i].x && newY == grassArr[i].y) {
          grassArr.splice(i, 1)
          break;
        }
      }
      if (this.energy >= 10) {
        

        this.mul()
      }
    }
    else {
      this.move()
    }
  }

  die() {
    // console.log("A");
  
    
    
    matrix[this.y][this.x] = 0
    for (var i in grassEaterArr) {
      if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
        grassEaterArr.splice(i, 1)
        break
      }
    }
  }
}