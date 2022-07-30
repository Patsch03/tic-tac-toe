let playerTurn = 1;


let gameBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function addXorO(boardPosition){ // 2d arrray position input
    if(playerTurn == 1){
        //add X
    }else if(playerTurn == 2){
        //add O
    }
}

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


function resetGame(){
    gameBoard = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]

    playerTurn = 1;
}


function whoWon(position){
    if(position == 1){
        alert("X's won");

    }else if(position == 2){
        alert("O's won");
    }

}

// logic for checking if the game is won
// need to replace the alert with reseting the game board most likely going to add a reset function that happens when button is clicked 

function checkWin(){
    if(gameBoard[0][0] == gameBoard[1][0] && gameBoard[1][0] == gameBoard[2][0] && gameBoard[0][0] != 0){
        alert("Game is over!");
        whoWon(gameBoard[0][0]);
    }else if(gameBoard[0][1] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][1] && gameBoard[0][1] != 0){
        alert("Game is over!");
        whoWon(gameBoard[0][1]);
    }else if(gameBoard[0][2] == gameBoard[1][2] && gameBoard[1][2] == gameBoard[2][2] && gameBoard[0][2] != 0){
        alert("Game is over!");
        whoWon(gameBoard[0][2]);
    }else if(gameBoard[0][0] == gameBoard[0][1] && gameBoard[0][1] == gameBoard[0][2] && gameBoard[0][0] != 0){
        alert("Game is over!");
        whoWon(gameBoard[0][0]);
    }else if(gameBoard[1][0] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[1][2] && gameBoard[1][0] != 0){
        alert("Game is over!");
        whoWon(gameBoard[1][0]);
    }else if(gameBoard[2][0] == gameBoard[2][1] && gameBoard[2][1] == gameBoard[2][2] && gameBoard[2][0] != 0){
        alert("Game is over!");
        whoWon(gameBoard[2][0]);
    }else if(gameBoard[0][0] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][2] && gameBoard[0][0] != 0){
        alert("Game is over!");
        whoWon(gameBoard[0][0]);
    }else if(gameBoard[0][2] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][2] && gameBoard[0][2] != 0){
        alert("Game is over!");
        whoWon(gameBoard[0][2]);
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


   

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", function(){
        resetGame();
        alert("Game has been reset");
    });




gameRun();







