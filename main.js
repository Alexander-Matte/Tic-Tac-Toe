//factory function to create players
const playerFactory = (name,id,mark) => {
    return {name, id, mark}
};

const gameModule = (function(){
        const boardDiv = document.querySelector("#board");
        const cellsArray = Array.from(document.querySelectorAll(".cell"));
        const resetButton = document.querySelector("#reset");



    //gameboard logic
    const gameBoard = {
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
        player1: playerFactory("Alex", 1, "X"),
        player2: playerFactory("Madi", 2, "O"),
        isOTurn: false,
        currentTurn: () => gameController.isOTurn ? "O" : "X",
    };

    //this will initialize and update the UI board. No game logic should come in here.
    const displayController = {
        resetBoard: () => cellsArray.forEach(cell => {
            cell.innerHTML = ""
            cell.removeEventListener("click", handleClick, {once: true});
            cell.addEventListener("click", handleClick, {once: true});
            console.clear()
        }),
        init: () => {
            cellsArray.forEach(cell => {
                cell.addEventListener("click", handleClick, {once: true});
            })
            resetButton.addEventListener("click", () => displayController.resetBoard());
        }
    };

    // Logic functions begin here


    // handles what happens on every click of a cell
    let handleClick = (cell) => {
        // add the current players mark.
        placeMarker(gameController.currentTurn(), cell);
        //Check if the game is won
        gameBoard.winningCombos.forEach(arr => {
            if (checkForWin(arr)) {
                console.log("GAME WON!")
                cellsArray.forEach (cell => {
                    cell.removeEventListener("click", handleClick, {once: true});
                })
                return
            }
        })
        //Check if game is a draw
        checkForDraw(cellsArray);
        // loop through whole cells array and if every cell has a mark, but checkForWin is not true, then console.log DRAW
        //change turns
        changeTurns();
        
    }
    
    // checks for full row of "X's" or "O's" depending on whose turn it is
    const checkForWin = (arr) => {
        return arr.every(isCurrentMarkInCell);
    };

    //logic to check that after a move, if the game tied
    const checkForDraw = (arr) => {
        cellsArray.every(isOccupied) ? console.log("DRAW"): false;
    }

    //changes turn
    const changeTurns = () => gameController.isOTurn ? gameController.isOTurn = false : gameController.isOTurn = true;

    //place marker in cell
    const placeMarker = (currentTurn, cell) => {
        cell.target.innerHTML = currentTurn;
    }
    //checks if specific cell has the current players marker 
    const isCurrentMarkInCell = (currentValue) => cellsArray[currentValue].innerHTML === gameController.currentTurn() ? true : false ;
    
    // Checks if every space on board has a mark and returns true if board is full and false if not every space is occupied
    const isOccupied = (currentValue) => currentValue.innerHTML === "" ? false : true;
    


    

    
    
    displayController.init();

})();






