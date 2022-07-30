let playerTurn = 1;

let gameBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];








//start of logic to change array on click

let boxClickCol1  = document.getElementsByClassName("boxesCol1");
let boxClickCol2 = document.getElementsByClassName("boxesCol2");
let boxClickCol3 = document.getElementsByClassName("boxesCol3");

function isBoardFull(){
    let isBoardFull = true;
    for(let i = 0; i < gameBoard.length; i++){
        for(let j = 0; j <gameBoard[i].length; j++){
            if(gameBoard[i][j] == 0){
                isBoardFull = false;
            }
        }
    }
    return isBoardFull;
}
// logic for checking if the game is won
// need to replace the alert with reseting the game board most likely going to add a reset function that happens when button is clicked 

function checkWin(){
    if(gameBoard[0][0] == gameBoard[1][0] && gameBoard[1][0] == gameBoard[2][0] && gameBoard[0][0] != 0){
        alert("Game is over!");
    }else if(gameBoard[0][1] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][1] && gameBoard[0][1] != 0){
        alert("Game is over!");
    }else if(gameBoard[0][2] == gameBoard[1][2] && gameBoard[1][2] == gameBoard[2][2] && gameBoard[0][2] != 0){
        alert("Game is over!");
    }else if(gameBoard[0][0] == gameBoard[0][1] && gameBoard[0][1] == gameBoard[0][2] && gameBoard[0][0] != 0){
        alert("Game is over!");
    }else if(gameBoard[1][0] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[1][2] && gameBoard[1][0] != 0){
        alert("Game is over!");
    }else if(gameBoard[2][0] == gameBoard[2][1] && gameBoard[2][1] == gameBoard[2][2] && gameBoard[2][0] != 0){
        alert("Game is over!");
    }else if(gameBoard[0][0] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][2] && gameBoard[0][0] != 0){
        alert("Game is over!");
    }else if(gameBoard[0][2] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][2] && gameBoard[0][2] != 0){
        alert("Game is over!");
    }else if(isBoardFull()){
        alert("Game has resulted in a tie");

    }

}
//end of checking if game is won




function gameRun(){
    for (let i = 0; i < boxClickCol1.length; i++) {
        boxClickCol1[i].addEventListener("click", function () {
            if(gameBoard[i][0] == 0){
                if(playerTurn == 1){
                    gameBoard[i][0] = 1;
                    console.log(gameBoard);
                    playerTurn = 2;
                    checkWin();
                }else if(playerTurn == 2){
                    gameBoard[i][0] = 2;
                    console.log(gameBoard);
                    playerTurn = 1;
                    checkWin();
                }
            }else{
                console.log("There is already a value here");
            }
            
            
        });
    }
    
    for (let i = 0; i < boxClickCol2.length; i++) {
        boxClickCol2[i].addEventListener("click", function () {
            if(gameBoard[i][1] == 0){
                if(playerTurn == 1){
                    gameBoard[i][1] = 1;
                    console.log(gameBoard);
                    playerTurn = 2;
                    checkWin();
                }else if(playerTurn == 2){
                    gameBoard[i][1] = 2;
                    console.log(gameBoard);
                    playerTurn = 1;
                    checkWin();
                }
            }else{
                console.log("There is already a value here");
            }
            
            
        });
    }
    
    for (let i = 0; i < boxClickCol3.length; i++) {
        boxClickCol3[i].addEventListener("click", function () {
            if(gameBoard[i][2] == 0){
                if(playerTurn == 1){
                    gameBoard[i][2] = 1;
                    console.log(gameBoard);
                    playerTurn = 2;
                    checkWin();
                }else if(playerTurn == 2){
                    gameBoard[i][2] = 2; 
                    console.log(gameBoard);
                    playerTurn = 1;
                    checkWin();
                }
            }else{
                console.log("There is already a value here");
            }
            
            
        });
    }

}

gameRun();


// end of logic for changing array on click

