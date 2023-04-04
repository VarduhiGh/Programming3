function matrixGenerator(matrixSize, grass, grassEater, predator, grind, alligator, dinosaur, elephant) {
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

let matrix = matrixGenerator(20, 20, 20, 20, 20, 20, 20, 20)
let side = 35

var grassArr = []
var grassEaterArr = []
var predatorArr = []
var grindArr = []
var alligArr = []
var dinoArr = []
var elepArr = []

function run() {
        location.reload();
}
function setup() {
        frameRate(15)
        createCanvas(matrix[0].length * side, matrix.length * side)
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

function draw() {
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
                                fill("black")
                        }
                        else {
                                fill("gray")
                        }
                        rect(x * side, y * side, side, side)

                }
        }



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
}