LivingCreature = require("./leavingcreature.js")
module.exports = class Predator extends LivingCreature {

    constructor(x, y) {
        super()
        this.energy = 30;
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

    chooseCellBarev(ch) {

        this.getNewCoordinates();

        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (ch.includes(matrix[y][x])) {// if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

        // return super.chooseCell(ch);

    }

    eat() {
        let grassesN = this.chooseCell(1)
        let grassEaterN = this.chooseCell(2)
        let all = grassesN.concat(grassEaterN)
        // console.log("all " ,all);
        
        let oneP = all[Math.floor(Math.random) * all.length]
        // console.log("onep " , oneP);
        
        if (oneP) {
            this.countEating+30;
            matrix[this.y][this.x] = 0
            matrix[oneP[1]][oneP[0]] = 3
            this.y = oneP[1]
            this.x = oneP[0]

            for (let i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }
            for (let i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break;
                }
            }
            if (this.countEating == 30) {
                this.mul()
            }
        }
        else {      
            this.move()
            if (this.countEating > 100) {
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
        let e = this.chooseCellBarev([0, 1])
        // console.log(this.x, this.y);
        
        let newCell = e[Math.floor(Math.random() * e.length)]

        // console.log("asdasdasd ", e, newCell) ;

        if (newCell) {
            console.log("jhgjh");
            
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break;
                }
            }
        }
    }


}