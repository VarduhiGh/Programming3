var socket = io()
let side = 40


function run() {
        location.reload();
}
function setup() {
        createCanvas(20 * side, 20 * side)
}

function changeColor(matrix) {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("green")
                        } else if (matrix[y][x] == 2) {
                                fill("yellow")
                        } else if (matrix[y][x] == 3) {
                                fill("red")
                        } else if (matrix[y][x] == 4) {
                                fill("blue")
                        } else if (matrix[y][x] == 5) {
                                fill("purple")
                        } else if (matrix[y][x] == 6) {
                                fill("white")
                        } else if (matrix[y][x] == 7) {
                                fill("brown")
                        }else if (matrix[y][x] == 8) {
                                fill("black")
                        }
                        else {
                                fill("gray")
                        }
                        rect(x * side, y * side, side, side)

                }
        }
}


socket.on("send matrix",changeColor)

