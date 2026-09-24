const spaces = document.getElementsByClassName("space");
let turn = 0
console.log(spaces);
for(space of spaces) {
    space.addEventListener("click", handleSpaceClick);
};
function handleSpaceClick() {
    if (turn == 0){
        this.innerHTML = "X";
        turn++;
    }else if (turn == 1, this==this) {
        this.innerHTML = "O"
        turn--;
    }else {

    }
};
//Based on this starter code, write Tic Tac Toe
//Use at least 5 functions (check for win, tie, show win screen, show tie screen, reset, update turn (show whose turn it is))
//Do not allow clicking an element that has already been taken
//Style it all to look nice

//extension:
//use setTimeout() to simulate a 1 player vs computer game.
// set timeout for the cpu would be to simulate a pause before the computer goes.