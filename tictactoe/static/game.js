function allThreeMatch(stringArray) {
	if (stringArray[0] === 'O' || stringArray[0] === 'X') {
		return stringArray[0] === stringArray[1] && stringArray[1] === stringArray[2];
	}
	else {
		return false;
	}
}

function win(y, x) {
	alert(board[y][x] + ' wins!');
	for (i = 0; i < cells.length; i++) {
		cells[i].innerHTML = ' ';
		counter = 0;
	}
}

function checkWin() {
	cells = document.getElementsByTagName('td');
	board = [[cells[0].innerHTML, cells[1].innerHTML, cells[2].innerHTML],
					 [cells[3].innerHTML, cells[4].innerHTML, cells[5].innerHTML],
					 [cells[6].innerHTML, cells[7].innerHTML, cells[8].innerHTML]];
	for (i = 0; i < 3; i++) {
		if (allThreeMatch(board[i])) {
			win(i, 0);
		}
		if (allThreeMatch([board[0][i], board[1][i], board[2][i]])) {
			win(0, i);
		}
	}
	if (allThreeMatch([board[0][0], board[1][1], board [2][2]])) {
		win(0, 0);
	}
	if (allThreeMatch([board[0][2], board[1][1], board [2][0]])) {
		win(0, 2);
	}
}

var counter = 0;
function play(elt) {
	if (elt.innerHTML === ' ') {
		var xo = 'X';
		counter = counter + 1;
		if (counter % 2 === 0) {
			xo = 'O';
		}
		elt.innerHTML = xo;
		checkWin();
	}
	if (counter === 9) {
		alert("Game over!");
	}
}