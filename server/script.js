let matrix = [];
let side = 30;
let grassArr = []
let grassEatArr = []
let predatorArr = []
let predatorEaterArr = []
let predatorBlueArr = []

function setup() {
    for (let i = 0; i < 30; i++) {
        matrix[i] = [];
        for (let j = 0; j < 30; j++) {
            matrix[i][j] = Math.round(random(0, 5));
        }
    }



    frameRate(1)
    createCanvas(matrix[0].length * side, matrix.length * side)
    background('#acacac')

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y, 1)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                let grassE= new GrassEater(x, y, 2)
                grassEatArr.push(grassE)
            }
            else if (matrix[y][x] == 3) {
                let predatorObj = new Predator(x, y, 3)
                predatorArr.push(predatorObj)
            }
            else if (matrix[y][x] == 4) {
                let predatorEaterObj = new Predator(x, y, 4)
                predatorEaterArr.push(predatorEaterObj)
            }
            else if (matrix[y][x] == 4) {
                let predatorBlueObj = new PredatorBlue(x, y, 5)
                predatorBlueArr.push(predatorBlueObj)
            }

        }
    }
 
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac")
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("red")
            }
            else if (matrix[y][x] == 4) {
                fill("blue")
            }

            rect(x * side, y * side, side, side)
        }
    }
    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEatArr) {
        grassEatArr[i].eat()
    }

    for (let i in predatorArr) {
        predatorArr[i].eat()
    }

    for (let i in predatorEaterArr) {
        predatorEaterArr[i].eat()
    }
    for (let i in predatorBlueArr) {
        predatorBlueArr[i].eat()
    }

}