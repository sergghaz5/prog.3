var socket=io()

function setup() {

    frameRate(60);
    createCanvas(400,400);
    background('#acacac');
}
socket.on("matrix",function (data) {
    console.log(data)
    my_draw(data)
});
function m(a){
    console.log(a);
}

function my_draw(matrix) {


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
                fill("lime");
            }
            // else if (matrix[y][x] == 6) {
            //     fill("blue");
            // }
            rect(x * 50, y * 50, 50, 50);


            // fill("blue")
            // text(x + " " + y, x * side + side / 2, y * side + side / 2)

        }
    }

}