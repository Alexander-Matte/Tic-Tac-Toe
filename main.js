//factory function to create players
const playerFactory = (name,id,mark) => {
    return {name, id, mark}
};

const gameModule = (function(){
        const boardDiv = document.querySelector("#board");
        const cellsArray = Array.from(document.querySelectorAll(".cell"));



    //gameboard logic
    const gameBoard = {
        player1: playerFactory("Alex", 1, "x"),
        player2: playerFactory("Madi", 2, "o"),
        winningCombos: [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]

    }
    
    //controlls flow of game and keeps track of game data such as whos turn it is.
    const gameController = {
        isOTurn: false,
        currentTurn: this.isOTurn ? "o" : "x",

    };

    //this will initialize and update the UI board. No game logic should come in here.
    const displayController = {
        


    };

    let handleClick = (e) => {
        // add the current players mark.
        //Check if the game is won
        //Check if game is a draw
        //change turns
        
    }
    
    
    cellsArray.forEach(cell => {
        cell.addEventListener("click", handleClick, {once: true});
    })

    


    //logic to check that after a move, if the game is won
    const checkForWin = () => console.log("game over");

    //logic to check that after a move, if the game is won
    const checkForDraw = () => console.log("tie");

    //logic to check that after a move, if the game is won
    const changeTurns = () => console.log("Changing player");

 

})();








