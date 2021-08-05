// "use strict";

var input = document.getElementById("input");
var button = document.getElementsByTagName("button");
var operand1 = null;
var operand2 = null;
var operator = null;

for (var i = 0; i < button.length; i++) {
	button[i].addEventListener("click", function () {
		var cls = this.getAttribute("class");
		var value = this.getAttribute("data-value");
		if (cls == "operator") {
			if (value == "=") {
				operand2 = parseFloat(input.value);
				if (operator == "/" && operand2 == 0) input.value = "Error";
				else input.value = eval(operand1 + operator + operand2);
			} else {
				operand1 = parseFloat(input.value);
				operator = value;
				input.value = "";
			}
		} else {
			if (value == "c") {
				operand1 = null;
				operand2 = null;
				input.value = "";
			} else if (value == "m") {
				var temp = input.value;
				if (temp.startsWith("-")) input.value = temp.substr(1);
				else input.value = "-" + temp;
			} else if (value == ".") {
				var temp = input.value;
				if (temp.endsWith(".")) input.value = temp;
				else input.value += ".";
			} else if (value == "%") {
				if (operator == null) input.value /= 100;
			} else {
				input.value += value;
			}
		}
	});
}

input.addEventListener("keydown", function (event) {
	var code = event.key;
	switch(code){
		case '+':
			operator = '+';break;
		case '-':
			operator = '-'; break;
		case '*':
			operator = '*'; break;
		case '/':
			operator = '/'; break;
	}
});
