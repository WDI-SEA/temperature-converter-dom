var debug = true;

var buttonClick = document.getElementById("submit_button");

var convert = function(tempFrom, scaleFrom, scaleTo)
{
	if(scaleFrom === scaleTo)
	{
		if (debug){console.log("scaleFrom === scaleTo");}
		return tempFrom;
	}
	else if (scaleFrom === "C")
	{
		if (scaleTo === "F")
		{
			if (debug){console.log("C to F");}
			return ((tempFrom * 9) / 5) + 32;
		}
		else //scaleTo === K
		{
			if (debug){console.log("C to K");}
			return tempFrom + 273;
		}
	}
	else if (scaleFrom === "F")
	{
		if (scaleTo === "C")
		{
			if (debug){console.log("F to C");}
			return ((tempFrom - 32) * 5) / 9;
		}
		else //scateTo === K
		{
			if (debug){console.log("F to K");}
			return (((tempFrom - 32) * 5) / 9) + 273;
		}
	}
	else //scaleFrom === K
	{
		if (scaleTo === "C")
		{
			if (debug){console.log("K to C");}
			return tempFrom - 273;
		}
		else //scaleTo === F
		{
			if (debug){console.log("K to F");}
			return (((tempFrom - 273) * 9) / 5) + 32;
		}
	}
}

buttonClick.addEventListener("click",function(){
	var tempTo = convert(document.getElementById("input_temp"),
		document.getElementsByName("convert_from")[0].value,
		document.getElementsByName("convert_to")[0].value);

	console.log("Got tempTo!");

	document.getElementById("div_output").innerHTML = " " + tempTo + " degrees " + document.getElementsByName("convert_to")[0].value;
})

