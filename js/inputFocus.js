/**
 * This javascript file formats
 * all the input fields using jQuery.
 *
 * Author: Jonas Nilsson
 */

//Changes the value of #number1 on focus.
$(document).ready(function() {
	$("#number1").attr("value", "Here...");

	var text = "Here...";

	$("#number1").focus(function() {
		$(this).addClass("active");
		if($(this).attr("value") == text) $(this).attr("value", "");
	});

	$("#number1").blur(function() {
		$(this).removeClass("active");
		if($(this).attr("value") == "") $(this).attr("value", text);
	});
});



//Changes the value of #number2 on focus.
$(document).ready(function() {
	$("#number2").attr("value", "and here...");

	var text = "and here...";

	$("#number2").focus(function() {
		$(this).addClass("active");
		if($(this).attr("value") == text) $(this).attr("value", "");
	});

	$("#number2").blur(function() {
		$(this).removeClass("active");
		if($(this).attr("value") == "") $(this).attr("value", text);
	});
});
