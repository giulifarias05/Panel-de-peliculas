
let maze = [
    [ "S", "#", "#", "."],
    [ ".", ".", "#", "#"],
    [ "#", ".", ".", "."],
    [ "#", ".", "#", "G"],
];


//Funcion donde se muestra si se resolvio o no el laberinto
function resultadolaberinto(){
if (resolvermaze(maze, 0, 0) == true) {
    console.log("Llegaste al final del laberinto!");
    
} else if (resolvermaze(maze, 0, 0) == false) {
    console.log("No pudiste llegar al final del laberinto..");
}
}


// resolver laberinto
function resolvermaze(maze, x, y) {
    if (x == -1 ||x >= maze.length ||  y == -1 || y >= maze.length) {
        return false;
    }
    if (maze[y][x] == "G") {
        return true;
    }
    if (maze[y][x] == "#") {
        return false;
    }
    if (maze[y][x] == "X") {
        return false;
    }
    if (maze[y][x] == "+") {
        return false;
    }
    if (maze[y][x] !== "S") {
        maze[y][x] = "+";
        console.log(maze);
    }
    //E
    if (resolvermaze(maze, x + 1, y) == true) {
        maze[y][x] = "+";
        console.log(maze);

        return true;
       
    }
      //O
      if (resolvermaze(maze, x - 1, y) == true) {
        maze[y][x] = "+";
        console.log(maze);

        return true;
    }
    //N
    if (resolvermaze(maze, x, y + 1) == true) {
        maze[y][x] = "+";
        console.log(maze);

        return true;
    }
  
    //S
    if (resolvermaze(maze, x, y - 1) == true) {
        maze[y][x] = "+";
        console.log(maze);

        return true;
    }

    return false;
}
console.log("Las + te marcaran el camino que recorriste ");
//resultadolaberinto();
console.log(maze);


document.querySelectorAll('.printbutton').forEach(function(element) {
    element.addEventListener('click', function() {
        resultadolaberinto();
    });
});