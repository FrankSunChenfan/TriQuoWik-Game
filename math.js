/* TriQuoWik
Generates random algebra problems to quiz
the user on. Will alert if the user answers
with the proper solution or not */

(function() {
	"use strict"
	window.onload = function() {
		$("generate").onclick = quiz;
		$("submit").onclick = answer;
	}

	// Called when the math button is clicked
	// Generates a random algebra problem for the user
	// to try and answer
	function quiz() {
		// Random number between 1 - 100
		var first = Math.floor(Math.random() * 100) + 1;
		var second = Math.floor(Math.random() * 100) + 1;
		// Find random operator between +, -, *
		var operators = [{
			sign: "+",
			method: function(a,b){ return a + b; }
		},{
			sign: "-",
			method: function(a,b){ return a - b; }
		},{
			sign: "*",
			method: function(a,b){ return a * b; }
		}]
		var selectedOp = Math.floor(Math.random() * operators.length);
		$("problem").innerHTML = first + " " + operators[selectedOp].sign + " " + second;
		// Answer becomes a global variable here
		answer = operators[selectedOp].method(first, second);
	}

	function answer() {
		if (answer != null) {
			if ($("answer").value == answer) {
				alert("You got it right!")
			} else {
				alert("Try again :(")
			}
		}
	}

	// Returns elem by ID from the document
	function $(elem) {
		return document.getElementById(elem);
	}

})();