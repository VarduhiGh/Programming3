var express = require("express");
var app = express();
var server =require("http").Server(app);
var io = require("socket.io")(server);
var fs = require("fs");
const { kill } = require('process');


app.use(express.static("."));

app.get('/', function(req,res){
    res.redirect("index.html")
});

server.listen(3000,function(){
    console.log("server is run");
})
///matrix generator
function matrixGenerator(matrixSize, grass, grassEater, predator, grind, alligator, dinosaur, elephant, ichthyosaur)
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
        for (let i = 0; i < ichthyosaur; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 8
        }
        return matrix
}

matrix = matrixGenerator(40, 35, 20, 20, 20, 20, 20, 20,18)

io.sockets.emit("send matrix",matrix)

///Arrays
grassArr = []
grassEaterArr = []
predatorArr = []
grindArr = []
alligArr = []
dinoArr = []
elepArr = []
ichthArr = []

///modules
Grass =require("./grass")
GrassEater = require("./grassEater")
Predator = require("./predator")
Grind = require("./grind")
Elephant = require("./elephant")
Alligator = require("./alligator")
Dinosaur = require("./dinosaur")
Ichthyosaur = require("./ichthyosaur")


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
                } else if (matrix[y][x] == 8) {
                        let ichth = new Ichthyosaur(x, y)
                        ichthArr.push(ichth)
                }


        }
}

io.sockets.emit("send matrix",matrix)

}

function game(){
        
        for (let i in grassArr) {
                grassArr[i].mul()
        }

        for (let i in grassEaterArr) {
                grassEaterArr[i].eat()
        }

        for (let i in predatorArr) {
                predatorArr[i].eat()
        }

        for (let i in grindArr) {
                grindArr[i].eat()
        }
        for (let i in alligArr) {
                alligArr[i].eat()
        }
        for (let i in dinoArr) {
                dinoArr[i].eat()
        }
        for (let i in elepArr) {
                elepArr[i].eat()
        }
        for (let i in ichthArr) {
                ichthArr[i].eat()
        }

        io.sockets.emit("send matrix",matrix)

}

setInterval(game,750)


var weath;

function Winter() {
    weath = "winter";
    io.sockets.emit('Winter', weath);
}

function Summer() {
    weath = "summer";
    io.sockets.emit('Summer', weath);
}

function Spring() {
    weath = "spring";
    io.sockets.emit('Spring', weath);
}
function Autumn() {
    weath = "autumn";
    io.sockets.emit('Autumn', weath);
}

function Kill() {
        grassArr = [];
        grassEaterArr = [];
        predatorArr = [];
        grindArr = [];
        alligArr = [];
        dinoArr = [];
        elepArr = [];
        ichthArr = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                matrix[y][x] = 0;
            }
        }
        io.sockets.emit("send matrix", matrix);
    }
    function AddGrass() {
        for (var i = 0; i < 60; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 1;
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
        }
        io.sockets.emit("send matrix", matrix);
    }
    function AddGrassEater() {
        let count = 0;
        for (var i = 0; i < 50; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (count < 7) {
                if (i < 30) {
                    if (matrix[y][x] == 0) {
                        count++;
                        matrix[y][x] = 2;
                        var grEater = new GrassEater(x, y);
                        grassEaterArr.push(grEater);
                    }
    
                } else if (i >= 30) {
                    if (matrix[y][x] == 0 || matrix[y][x] == 1) {
                        count++;
                        matrix[y][x] = 2;
                        var grEater = new GrassEater(x, y);
                        grassEaterArr.push(grEater);
                    }
                }
            }
    
    
        }
    
        io.sockets.emit("send matrix", matrix);
    }
    function AddPredator() {
        for (var i = 0; i < 25; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 3;
                var predator = new Predator(x, y);
                predatorArr.push(predator);
            }
        }
        io.sockets.emit("send matrix", matrix);
    }
    function AddGrind() {
        for (var i = 0; i < 7; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 4;
                var grind = new Grind(x, y);
                grindArr.push(grind);
            }
        }
        io.sockets.emit("send matrix", matrix);
    }
    
    function AddAlligator() {
        for (var i = 0; i < 7; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 5;
                var allig = new Alligator(x, y);
                alligArr.push(allig);
            }
        }
        io.sockets.emit("send matrix", matrix);
    }
    
    function AddDinosaur() {
        for (var i = 0; i < 7; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 6;
                var dinosaur = new Dinosaur(x, y);
                dinoArr.push(dinosaur);
            }
        }
        io.sockets.emit("send matrix", matrix);
    }
    
    function AddElephant() {
        for (var i = 0; i < 7; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 7;
                var elephant = new Elephant(x, y);
                elepArr.push(elephant);
            }
        }
        io.sockets.emit("send matrix", matrix);
    }

    function AddIchthyosour() {
            for (var i = 0; i < 8; i++) {
                    var x = Math.floor(Math.random() * matrix[0].length)
                    var y = Math.floor(Math.random() * matrix.length)
                    if (matrix[y][x] == 0) {
                            matrix[y][x] = 8;
                            var ichthy = new Ichthyosaur(x, y);
                            ichthArr.push(ichthy);
                            console.log( ichthArr.length);
            }
        }
        io.sockets.emit("send matrix", matrix);
    }

io.on('connection', function (socket) {
        createObject();
        socket.on("spring", Spring);
        socket.on("summer", Summer);
        socket.on("autumn", Autumn);
        socket.on("winter", Winter);
        socket.on("addgrass", AddGrass);
        socket.on("addgrassEater", AddGrassEater);
        socket.on("addpredator", AddPredator);
        socket.on("addgrind", AddGrind);
        socket.on("addalligator", AddAlligator);
        socket.on("adddinosaur", AddDinosaur);
        socket.on("addelephant", AddElephant);
        socket.on("addichthyosaur", AddIchthyosour);
        socket.on("kill", Kill);


    })
    

// var statistic = {}

// setInterval(function(){
//         statistic.grass = grassArr.length
//         statistic.grassEater = grassEaterArr.length
//         statistic.grind = grindArr.length
//         statistic.Predator = predatorArr.length
//         statistic.alligator = alligArr.length
//         statistic.dinosaur = dinoArr.length
//         statistic.elephant = elepArr.length
//         statistic.ichthyosaur = ichthArr.length
// })