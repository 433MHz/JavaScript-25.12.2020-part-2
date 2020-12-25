function show()
	{
	var value = document.getElementById("textField").value;
	var result
	if(value>0) result = "positive";
	else if(value<0) result = "negative";
	else result = "zero";

	document.getElementById("result").innerHTML = result; 
	}