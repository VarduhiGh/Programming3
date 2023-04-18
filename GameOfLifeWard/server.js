var express = require("express");
var app = express();
var server =require("http").Server(app);
var io = require("socket.io")(server);
var fs = require("fs");
const Dinosaur = require("./dinosaur");
const GrassEater = require("./grassEater");

app.use(express.static("."));

app.get('/', function(req,res){
    res.redirect("index.html")
});

server.listen(3000,function(){
    console.log("server is run");
})
///matrix generator
function matrixGenerator(matrixSize, grass, grassEater, predator, grind, alligator, dinosaur, elephant)
 {
        var matrix = []

        for (let i = 0; i < matrixSize; i++) {
                matrix.push([])
                for (let j = 0; j < matrixSize; j++) {
                        matrix[i].push(0)
                }
        }


        for (let i = 0; i < grass; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 1
        }


        for (let i = 0; i < grassEater; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 2
        }

        for (let i = 0; i < predator; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 3
        }


        for (let i = 0; i < grind; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 4
        }


        for (let i = 0; i < alligator; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 5
        }

        for (let i = 0; i < dinosaur; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 6
        }
        for (let i = 0; i < elephant; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 7
        }
        return matrix
}

matrix = matrixGenerator(20, 20, 20, 20, 20, 20, 20, 20)


///Arrays
grassArr = []
grassEaterArr = []
predatorArr = []
grindArr = []
alligArr = []
dinoArr = []
elepArr = []

///modules
Grass =require("./grass")
GrassEater = require("./grassEater")
Predator = require("./predator")
Grind = require("./grind")
Elephant = require("./elephant")
Alligator = require("./alligator")
Dinosaur = require("./dinosaur")


///object generation

function createObject(){
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                        let grass = new Grass(x, y)

                        grassArr.push(grass)


                } else if (matrix[y][x] == 2) {
                        let grEat = new GrassEater(x, y)
                        grassEaterArr.push(grEat)
                } else if (matrix[y][x] == 3) {
                        let pre = new Predator(x, y)
                        predatorArr.push(pre)
                } else if (matrix[y][x] == 4) {
                        let gri = new Grind(x, y)
                        grindArr.push(gri)
                } else if (matrix[y][x] == 5) {
                        let allig = new Alligator(x, y)
                        alligArr.push(allig)
                } else if (matrix[y][x] == 6) {
                        let dino = new Dinosaur(x, y)
                        dinoArr.push(dino)
                } else if (matrix[y][x] == 7) {
                        let elep = new Elephant(x, y)
                        elepArr.push(elep)
                }


        }
}

}

io.sockets.emit("send matrix",matrix)
