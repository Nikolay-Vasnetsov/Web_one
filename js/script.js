menu.onclick = function myfunction() {
	var x = document.getElementById('myTopnaw');

	if (x.className === "topnaw") {
		x.className += " responsive";
	} else {
		x.className = "topnaw";
	}
}