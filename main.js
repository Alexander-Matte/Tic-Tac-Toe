//factory function to create players
const playerFactory = (name,id,mark) => {
    return {name, id, mark}
};

const gameModule = (function(){
    const selectors = {
        boardDiv: () => document.querySelector("#board"),

    }

    //logic to check that after a move, if the game is over
    const checkGameOver = () => console.log("game over");
    //gameboard logic
    const gameBoard = {
        gameBoard: [],
        player1: playerFactory("Alex", 1, "X"),
        player2: playerFactory("Madi", 2, "O"),

    }
    
    //controlls flow of game and keeps track of game data such as whos turn it is.
    const gameController = {};

    //this will initialize and update the UI board. No logic should come in here.
    const displayController = {};

    return {selectors}

})();








