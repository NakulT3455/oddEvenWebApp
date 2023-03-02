let message ;

function CheckNumber()
{
	let num=document.getElementById("fname").value;
	let num1=parseInt(num);
	
    if(num1%2===0)
	{
		message= num1+ " is even";
		return message;
	}
	else if (num1%2===1){
		message= num1+ " is odd";
		return message;
	}
	else 
	{
		message= "Please Enter a number";
		return message;
	}
}

function MessageFunction()
{
	CheckNumber();
	document.getElementById("demo").innerHTML = message;
}
