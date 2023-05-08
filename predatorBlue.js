class PredatorBlue extends LivingCreature {
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
        let food = random(foods)
        if (food) {
            this.energy++
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 4
            this.x = newX
            this.y = newY
            for (var i in predatorEaterArr) {
                if (newX == predatorEaterArr[i].x && newY == predatorEaterArr[i].y) {
                    predatorEaterArr.splice(i, 1)
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
        for (var i in predatorBlueArr) {
            if (this.x == predatorBlueArr[i.x && this.y == predatorBlueArr[i].y]) {
                predatorBlueArr.splice(i, 1)
                break;
            }

        }

    }

    mul() {
        let newCell = random(this.chooseCell(0))
        if (newCell) {
            let newPredatorBlue = new PredatorBlue(newCell[0], newCell[1], 4)
            predatorBlueArr.push(newPredatorBlue)
            matrix[newCell[1]][newCell[0]] = 4
        }
    }

    move() {
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)

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