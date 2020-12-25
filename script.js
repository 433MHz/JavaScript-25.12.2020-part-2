function show()
	{
	var value = document.getElementById("textField").value;
	var result
	if(value>0) result = "positive";
	else if(value<0) result = "negative";
	else if(value==0) result = "zero";
	else result = "not a number"

	document.getElementById("result").innerHTML = result; 
	}