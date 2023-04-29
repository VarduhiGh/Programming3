var socket = io()
let side = 40


function run() {
        location.reload();
}
function setup() {
        createCanvas(20 * side, 20 * side)
}
socket.on("Winter", function (data) {
        weath = data;
    })
    socket.on("Summer", function (data) {
        weath = data;
    })
    socket.on("Spring", function (data) {
        weath = data;
    })
    socket.on("Autumn", function (data) {
        weath = data;
    })
     var weath = "spring";

function changeColor(matrix) {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++){
                        if (matrix[y][x] == 1) {
                            if (weath == "spring") {
                                fill("green");
                            }
                            else if (weath == "summer") {
                                fill("#3B7A57");
                            }
                            else if (weath == "autumn") {
                                fill("#708238");
                            }
                            if (weath == "winter") {
                                fill("#004B49");
                            }
                        } else if (matrix[y][x] == 2) {
                                if (weath == "spring") {
                                        fill("yellow");
                                    }
                                    else if (weath == "summer") {
                                        fill("#DFFE00");
                                    }
                                    else if (weath == "autumn") {
                                        fill("#F6A600");
                                    }
                                    if (weath == "winter") {
                                        fill("#CC7722");
                                    }
                                
                        } else if (matrix[y][x] == 3) {
                                if (weath == "spring") {
                                        fill("red");
                                    }
                                    else if (weath == "summer") {
                                        fill("#FE5F43");
                                    }
                                    else if (weath == "autumn") {
                                        fill("#F6A600");
                                    }
                                    if (weath == "winter") {
                                        fill("#800000");
                                    }
                        } else if (matrix[y][x] == 4) {
                                if (weath == "spring") {
                                        fill("blue");
                                    }
                                    else if (weath == "summer") {
                                        fill("#BCD4E6");
                                    }
                                    else if (weath == "autumn") {
                                        fill("#6CA0DC");
                                    }
                                    if (weath == "winter") {
                                        fill("#6495ED");
                                    }
                        }else if (matrix[y][x] == 5) {
                                if (weath == "spring") {
                                        fill("purple");
                                    }
                                    else if (weath == "summer") {
                                        fill("#A50B5E");
                                    }
                                    else if (weath == "autumn") {
                                        fill("#9000FF");
                                    }
                                    if (weath == "winter") {
                                        fill("#5C0064");
                        }
                }else if (matrix[y][x] == 6) {
                                fill("white")
                        }else if (matrix[y][x] == 7) {
                                if (weath == "spring") {
                                        fill("brown");
                                    }
                                    else if (weath == "summer") {
                                        fill("#EFDECD ");
                                    }
                                    else if (weath == "autumn") {
                                        fill("#4B3621");
                                    }
                                    if (weath == "winter") {
                                        fill("#4A2C2A");
                        }
                }
                        else if (matrix[y][x] == 8) {
                                fill("black");
                        }
                        else {
                                fill("gray");
                        }
                        rect(x * side, y * side, side, side)

                }
        }
}


socket.on("send matrix",changeColor)

function Winter() {
        socket.emit("winter");
    }
    function Summer() {
        socket.emit("summer");
    }
    function Spring() {
        socket.emit("spring");
    }
    function Autumn() {
        socket.emit("autumn");
    }
    function AddGrass(){
        socket.emit("addgrass");
    }
    function AddGrassEater(){
        socket.emit("addgrassEater");
    }
    function AddPredator(){
        socket.emit("addpredator");
    }
    function AddGrind(){
        socket.emit("addgrind");
    }
    function AddAlligator(){
        socket.emit("addalligator");
    }
    function AddDinosaur(){
        socket.emit("adddinosaur");

    }
    function AddElephant(){
        socket.emit("addelephant");

    }
    function AddIchthyosour(){
        socket.emit("addichthyosaur");

    }
    function Kill(){
        socket.emit("kill");
    }