alert('js file is running');
var counter = 0;
function play (elt) {
	var xo = 'x';
	counter = counter + 1;
	if (counter % 2 === 0) {
			xo = 'O';
	}
	return elt.innerHTML = xo;
}
