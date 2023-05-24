var express = require("express");
var app = express();
app.use(express.static("../client"));
app.get("/", function (req, res) {
  res.redirect("../client/index.html");
});

var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(3000, function () {
  console.log("Game is running on port 3000");
});
var Grass = require("./grass")
var GrassEater = require("./grassEater")
var predatorBlue = require("./predatorBlue")
var Predator = require("./Predator")
var predatorEater = require("./predatorEater")

let sideX = 30
let sideY =  30
matrix = []
grassArr = []
grassEaterArr = []
predatorArr = []
predatorBlueArr = []
predatorEaterArr = []

function random(min, max) {
  if (min === undefined && max === undefined) {
    return Math.random();
  } else if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.random() * (max - min) + min;
}

function generateMatrix() {
  function character(quantity, char) {
    let initialNumber = 0;
    while (initialNumber < quantity) {
      let x = Math.floor(random(0, sideX));
      let y = Math.floor(random(0, sideY));
      console.log(x,y)
      if (matrix[y][x] == 0) {
        matrix[y][x] = char;
      }
      initialNumber++;
    }
  }
  for (let i = 0; i < sideX; i++) {
    matrix.push([]);
    for (let j = 0; j < sideY; j++) {
      matrix[i].push(0);
    }
  }
  character(1, 1);
  character(1, 2);
  character(1, 3);
  character(1, 4);
}

generateMatrix()

 io.on('connection', function (socket) {
    socket.emit("matrix", matrix)
  });
// var gr = new Grass(1, 2, 1);
// var emptyCells = gr.chooseCell(0);
// console.log(emptyCells);

function createObject() {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        let gr = new Grass(x, y, 1)
        grassArr.push(gr)
      }
      else if (matrix[y][x] == 2) {
        let grassE = new GrassEater(x, y, 2)
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
        let predatorBlueObj = new predatorBlue(x, y, 5)
        predatorBlueArr.push(predatorBlueObj)
      }

    }
  }
}
createObject()

function game() {
  for (let i in grassArr) {
    grassArr[i].mul()
  }
  for (let i in grassEaterArr) {
    grassEaterArr[i].eat()
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
  io.emit("matrix", matrix)
  return matrix
}

setInterval(game, 2000)