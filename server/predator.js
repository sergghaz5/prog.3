LivingCreature = require("./leavingcreature.js")
module.exports = class Predator extends LivingCreature {
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
           let grassesN = this.chooseCell(1)
        let grassEaterN = this.chooseCell(2)
         let all = grassesN.concat(grassEaterN)
        let oneP = random(all)
        if (oneP) {
            this.countEating++;
            matrix[this.y][this.x] = 0
            matrix[oneP[1][oneP[0]]] = 3
            this.x = oneP[1]
            this.x = oneP[0]

            for (let i in grassEatArr) {
                if (this.x == grassEatArr[i].x && this.y == grassEatArr[i].y) {
                    grassEatArr.splice(i, 1)
                    break;
                }
            }
            for (let i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break;
                }
            }
            if (this.countEating == 20) {
                this.mul()
            }
        }
        else {
            this.move()
            if (this.countEating > 50) {
                console.log("died")
                this.die()
            }
        }
    }

    die() {
        matrix[this.y][this.x] = 0
        for (var i in predatorArr) {
            if (this.x == predatorArr[i.x && this.y == predatorArr[i].y]) {
                predatorArr.splice(i, 1)
                break;
            }

        }

    }

    mul() {
        let newCell = random(this.chooseCell(0))
        if (newCell) {
            let newPredator = new Predator(newCell[0], newCell[1], 3)
            predatorArr.push(newPredator)
            matrix[newCell[1]][newCell[0]] = 3
        }
    }

    move() {
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
        }
    }


}