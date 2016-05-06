$(document).ready(function() {

	$(document).on("click", "#top-left", function() {
		$(this)
		.html("X");
	});

	$(document).on("click", "#top-middle", function() {
		$(this)
		.html("O");
	});

});

//var turn = "X";

//if (turn === "X") {
	//click("X");
//} else {
//	click("O");
//}