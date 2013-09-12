/**
 * A simple JavaScript calculator.
 * 
 * It takes the two numbers entered in the
 * input fields and performs the calculation
 * decided by which operator button is clicked.
 *
 * Author: Jonas Nilsson
 */

function calculateTwoNumbers() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;

  //Number validation
  if(number1 != parseInt(number1) || number2 != parseInt(number2)) {
    document.getElementById("calculation_operator").innerHTML = "";
    document.getElementById("calculation_number1").innerHTML = "";
    document.getElementById("calculation_number2").innerHTML = "";
    document.getElementById("equals").innerHTML = "";
    document.getElementById("result").innerHTML = "Only digits allowed!";
    return;
  }

  //Highlight the result span when clicking on an operator (jQuery UI).
  $("#calculation").effect("highlight", {}, 1000);

  document.getElementById("calculation_number1").innerHTML = number1;
  document.getElementById("calculation_number2").innerHTML = number2;
  document.getElementById("equals").innerHTML = "=";
  document.getElementById("result").innerHTML = result;
}

/**
 * The operator functions 
 */

function add() {
  //Setup the operator
  var operator = "+";

  //Perform calculation
  result = parseInt(document.getElementById("number1").value) + parseInt(document.getElementById("number2").value);
  
  //Print out calculation
  document.getElementById("calculation_operator").innerHTML = operator;  
  calculateTwoNumbers();
}



function subtract() {
  //Setup the operator
  var operator = "-";

  //Perform calculation
  result = parseInt(document.getElementById("number1").value) - parseInt(document.getElementById("number2").value);
  
  //Print out calculation
  document.getElementById("calculation_operator").innerHTML = operator;  
  calculateTwoNumbers();
}



function multiply() {
  //Setup the operator
  var operator = "*";

  //Perform calculation
  result = parseInt(document.getElementById("number1").value) * parseInt(document.getElementById("number2").value);
  
  //Print out calculation
  document.getElementById("calculation_operator").innerHTML = operator;  
  calculateTwoNumbers();
}



function divide() {
  //Setup the operator
  var operator = "/";

  //Perform calculation
  result = parseInt(document.getElementById("number1").value) / parseInt(document.getElementById("number2").value);
  
  //Print out calculation
  document.getElementById("calculation_operator").innerHTML = operator;  
  calculateTwoNumbers();
}
