const spaces = document.getElementsByClassName("space");
const endText = document.getElementById("text")
const whichPlayer = document.getElementById("which-player")
let turn = 0;
let amountOfTurns = 0;


for(space of spaces) {
    space.addEventListener("click", handleSpaceClick);
};

function handleSpaceClick() {
    if  (turn == 0){
        whichPlayer.textContent = ("Player2's turn")
        if (this.innerHTML == ""){
            this.innerHTML = "X";
            turn++;
            amountOfTurns++;
            checkBoardStatas();
        };
    }else if (turn == 1) {
        whichPlayer.textContent = ("Player1's turn")
        if (this.innerHTML == "") {
            this.innerHTML = "O";
            turn--;
            amountOfTurns++;
            checkBoardStatas();
        };
    }else {};
};

function checkBoardStatas() {
   if (checkForWin() == true) {
        showWinScreen()
   };
   if (checkForLoss() == true) {
        showLossScreen()
   };
   if (checkForTie() == true) {
        showTieScreen()
   };
};

function checkForWin() {
    if((spaces[0].innerHTML) == "X" && (spaces[4].innerHTML) == "X" && (spaces[8].innerHTML) == "X") {
        console.log("You Win");
        return true;
    }if((spaces[2].innerHTML) == "X" && (spaces[4].innerHTML) == "X" && (spaces[6].innerHTML) == "X") {
        console.log("You Win");
        return true;
    }if((spaces[0].innerHTML) === "X" && (spaces[1].innerHTML) === "X" && (spaces[2].innerHTML) === "X") {
        console.log("You Win");
        return true;
    }if((spaces[3].innerHTML) == "X" && (spaces[4].innerHTML) == "X" && (spaces[5].innerHTML) == "X") {
        console.log("You Win");
        return true;
    }if((spaces[6].innerHTML) == "X" && (spaces[7].innerHTML) == "X" && (spaces[8].innerHTML) == "X") {
        console.log("You Win");
        return true;
    }if((spaces[0].innerHTML) === "X" && (spaces[3].innerHTML) === "X" && (spaces[6].innerHTML) === "X") {
        console.log("You Win");
        return true;
    }if((spaces[1].innerHTML) == "X" && (spaces[4].innerHTML) == "X" && (spaces[7].innerHTML) == "X") {
        console.log("You Win");
        return true;
    }if((spaces[2].innerHTML) == "X" && (spaces[5].innerHTML) == "X" && (spaces[8].innerHTML) == "X") {
        console.log("You Win");
        return true;
    };
};

function showWinScreen() {
    endText.textContent = ("Player One Wins!")
};

function checkForLoss() {
    if((spaces[0].innerHTML) == "O" && (spaces[4].innerHTML) == "O" && (spaces[8].innerHTML) == "O") {
        console.log("You Lost");
        return true;
    }if((spaces[2].innerHTML) == "O" && (spaces[4].innerHTML) == "O" && (spaces[6].innerHTML) == "O") {
        console.log("You Lost");
        return true;
    }if((spaces[0].innerHTML) === "O" && (spaces[1].innerHTML) === "O" && (spaces[2].innerHTML) === "O") {
        console.log("You Lost");
        return true;
    }if((spaces[3].innerHTML) == "O" && (spaces[4].innerHTML) == "O" && (spaces[5].innerHTML) == "O") {
        console.log("You Lost");
        return true;
    }if((spaces[6].innerHTML) == "O" && (spaces[7].innerHTML) == "O" && (spaces[8].innerHTML) == "O") {
        console.log("You Lost");
        return true;
    }if((spaces[0].innerHTML) === "O" && (spaces[3].innerHTML) === "O" && (spaces[6].innerHTML) === "O") {
        console.log("You Lost");
        return true;
    }if((spaces[1].innerHTML) == "O" && (spaces[4].innerHTML) == "O" && (spaces[7].innerHTML) == "O") {
        console.log("You Lost");
        return true;
    }if((spaces[2].innerHTML) == "O" && (spaces[5].innerHTML) == "O" && (spaces[8].innerHTML) == "O") {
        console.log("You Lost");
        return true;
    };
};

function showLossScreen() {
    endText.textContent = ("Player Two Wins!")
};

function checkForTie() {
    if (amountOfTurns == 9) {
        console.log("Tie");
        return true;
    };
};

function showTieScreen() {
    console.log("You got a tie. Get good.")
    endText.textContent = ("Tie.")
};

//Based on this starter code, write Tic Tac Toe
//Use at least 5 functions (check for win, tie, show win screen, show tie screen, reset, update turn (show whose turn it is))
//Do not allow clicking an element that has already been taken
//Style it all to look nice

//extension:
//use setTimeout() to simulate a 1 player vs computer game.
// set timeout for the cpu would be to simulate a pause before the computer goes.