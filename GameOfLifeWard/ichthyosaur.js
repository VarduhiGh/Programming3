let LivingCreature = require("./LivingCreature")
module.exports = class Ichthyosaur extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 27
        this.directions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char, char6) {
        this.getNewCoordinates()
        let found = []
        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i])
                }
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    if (matrix[y][x] == char6) {
                        found.push(this.directions[i])
                    }
                }
            }
        }

        return found

    }


    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length) ]


        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 8

            let ichth = new Ichthyosaur(newX, newY)

            ichthArr.push(ichth)


        }
    }

    eat() {
        let emptyCell = this.chooseCell(1, 7)
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length) ]


        if (newCell) {
            this.energy += 2
            let newX = newCell[0]
            let newY = newCell[1]

            for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                }
                for (let i in elepArr) {
                    if (newX == elepArr[i].x && newY == elepArr[i].y) {
                        elepArr.splice(i, 1)
                    }
                }
            }

            matrix[newY][newX] = 8
            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY

            if (this.energy > 35) {
                this.mul()
            }

        } else {
            this.move()
        }
    }

    move() {
        let emptyCell = this.chooseCell(0)
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length) ]

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 8
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        }
    }

    die() {
        matrix[this.y][this.x] = 0

        for (let i in ichthArr) {
            if (this.x == ichthArr[i].x && this.y == ichthArr[i].y) {
                ichthArr.splice(i, 1)
            }
        }
    }


} 