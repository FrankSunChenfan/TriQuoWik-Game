/* TriQuoWik
Generates random algebra problems to quiz
the user on. Will alert if the user answers
with the proper solution or not */

(function() {
	"use strict"
	window.onload = function() {
		$("button").onclick = quiz;	
	}

	// Called when the math button is clicked
	// Generates a random algebra problem for the user
	// to try and answer
	function quiz() {
		// Random number between 1 - 99999
		var first = Math.floor(Math.random() * 99999) + 1;
		var second = Math.floor(Math.random() * 99999) + 1;
		// Find random operator between addition and subtraction
		var operators = [{
			sign: "+",
			method: function(a,b){ return a + b; }
		},{
			sign: "-"
			method: function(a,b){ return a - b; }
		}]
		var selectedOp = Math.floor(Math.random() * operators.length);
		// Testing code
		alert(first + " " + operators[selectedOp].sign + " " + second + " = " + 
			operators[selectedOp].method(first, second));
	}

	// Returns elem by ID from the document
	function $(elem) {
		return document.getElementById(elem);
	}

})();