var socket=io()
let side = 20
function setup() {


    createCanvas(30 * side,30*side );
    background('#acacac');
}
socket.on("matrix",function (data) {
    // console.log(data)
    my_draw(data)
});
function m(a){
    // console.log(a);
}

function my_draw(matrix) {

// console.log(matrix);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");

            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {   
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
            }
          
            rect(x *side , y * side, 50, 50);


        }
    }

}