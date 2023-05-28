LivingCreature = require("./leavingcreature.js")
module.exports = class PredatorEater extends LivingCreature {

    getNewCoordinates() {
        [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]

    }
    chooseCell(ch) {

        this.getNewCoordinates();
        
        return super.chooseCell(ch);
        
        }
    eat() {
        let foods = this.chooseCell(1)
        let food = foods[Math.floor(Math.random() * foods.length)]
        if (food) {
            this.energy++
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 2
            this.x = newX
            this.y = newY
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)
                    break;
                }
            }
            if (this.energy >= 12) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in predatorEaterArr) {
            if (this.x == predatorEaterArr[i.x && this.y == predatorEaterArr[i].y]) {
                predatorEaterArr.splice(i, 1)
                break;
            }

        }

    }

    mul() {
        let newCell = random(this.chooseCell(0))
        if (newCell) {
            let newPredatorEater = new PredatorEater(newCell[0], newCell[1], 4)
            predatorEaterArr.push(newPredatorEater)
            matrix[newCell[1]][newCell[0]] = 4
        }
    }

    move() {
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
        }
    }


}