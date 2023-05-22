var express = require("express");
var app = express();
app.use(express.static("../client"));
app.get("/", function (req, res) {
  res.redirect("index.html");
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
// var { generateMatrix } = require("./functions")
matrix = []
grassArr = []
grassEaterArr = []
predatorArr = []
predatorBlueArr = []
predatorEaterArr = []


io.on('connection', function (socket) {
  socket.emit("matrix", matrix)
});

generateMatrix()
createObject()
// generateMatrix()
console.log(matrix)
io.sockets.emit("matrix", matrix)

var gr = new Grass(1, 2, 1);
var emptyCells = gr.chooseCell(0);
console.log(emptyCells);

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


function game() {
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
  io.sockets.emit("matrix", matrix)
}




setInterval(game, 2000)