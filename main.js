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
        currentTurn: () => gameController.isOTurn ? "O" : "X",
    };

    //this will initialize and update the UI board. No game logic should come in here.
    const displayController = {
        


    };

    let handleClick = (cell) => {
        // add the current players mark.
        placeMarker(gameController.currentTurn(), cell);
        //Check if the game is won

        console.log(checkForWin(gameBoard.winningCombos[0]));


        
        



        //Check if game is a draw
        //change turns
        changeTurns(gameBoard.winningCombos[0]);
        
    }
    
    
    cellsArray.forEach(cell => {
        cell.addEventListener("click", handleClick, {once: true});
    })


    
    //logic to check that after a move, if the game is won
    const checkForWin = (arr) => {
        return arr.every(isMarkerInCell);
    };

    //logic to check that after a move, if the game is won
    const checkForDraw = () => console.log("tie");

    //logic to check that after a move, if the game is won
    const changeTurns = () => gameController.isOTurn ? gameController.isOTurn = false : gameController.isOTurn = true;

    //place marker in cell
    const placeMarker = (currentTurn, cell) => {
        cell.target.innerHTML = currentTurn;
    }

    const isMarkerInCell = (currentValue) => cellsArray[currentValue].innerHTML === gameController.currentTurn() ? true : false ;

    

    
    


})();




// TODO: Figure out how to check board if the same marker is in the positions stated in winning array





