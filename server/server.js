var express = require("express");

var app = express();

app.use(express.static("../client"));

app.get("/", function(req, res){

res.redirect("index.html");

});

app.listen(3000, function(){

console.log("Game is running on port 3000");

});
var Grass = require("./grass")
var GrassEater = require("./grassEater")
var Predator = require("./predator")
var PredatorBlue = require("./predatorBlue")
var PredatorEater = require("./predatorEater")


matrix = []
function getRandInt(min,max){
    var z = Math.floor(Math.random()*(max-min+1)) + min;

return z;
}
function generateMatrix(){
    for(let d = 0; d < 50; d++){
        matrix[d] = []
        for (let g = 0; g < 70; g++){
          matrix[d][g] = getRandInt(0,5)
        }
      }
    }
generateMatrix()
console.log(matrix);