var debug = true;

var changeNumber = document.getElementById("input_temp");
var changeSelectionFrom = document.getElementsByName("convert_from")[0];
var changeSelectionTo = document.getElementsByName("convert_to")[0];

var convert = function(tempFrom, scaleFrom, scaleTo)
{
	if (debug) {console.log("convert arguments are " + tempFrom + " " + scaleFrom + " " + scaleTo);}

	if(scaleFrom === scaleTo)
	{
		if (debug) {console.log("scaleFrom === scaleTo");}
		return tempFrom;
	}
	else if (scaleFrom === "C")
	{
		if (scaleTo === "F")
		{
			if (debug) {console.log("C to F");}
			return ((tempFrom * 9) / 5) + 32;
		}
		else //scaleTo === K
		{
			if (debug) {console.log("C to K");}
			return tempFrom * 1 + 273;
		}
	}
	else if (scaleFrom === "F")
	{
		if (scaleTo === "C")
		{
			if (debug) {console.log("F to C");}
			return ((tempFrom - 32) * 5) / 9;
		}
		else //scateTo === K
		{
			if (debug) {console.log("F to K");}
			return (((tempFrom - 32) * 5) / 9) + 273;
		}
	}
	else //scaleFrom === K
	{
		if (scaleTo === "C")
		{
			if (debug) {console.log("K to C");}
			return tempFrom - 273;
		}
		else //scaleTo === F
		{
			if (debug) {console.log("K to F");}
			return (((tempFrom - 273) * 9) / 5) + 32;
		}
	}
}

var determineColor = function(tempFrom, scaleFrom)
{
	var warm;
	var cool;
	var warm_color;
	var cool_color;
	var mid_color;

	if (debug) {console.log("determineColor arguments are " + tempFrom + " " + scaleFrom);}

	warm = convert(tempFrom, scaleFrom, "C");
	cool = 100 - warm;
	if (debug) {console.log("warm = " + warm + " and cool = " + cool);}

	if(warm >= 100)
	{
		warm_color = 255;
		cool_color = 0;

		if(debug) {console.log("case: hot");}

		return "rgba(" + warm_color + ", 0, " + cool_color + ", 1)";
		
	}
	else if(warm <= 0)
	{
		warm_color = 0;
		cool_color = 255;

		if (debug) {console.log("case: cold");}

		return "rgba(" + warm_color + ", 0, " + cool_color + ", 1)";
	}
	else
	{
		warm_color = Math.floor((255 * warm) / 100);
		cool_color = Math.floor((255 * cool) / 100);
		if (warm_color >= cool_color)
		{
			mid_color = Math.floor(cool_color * 1.2);
		}
		else
		{
			mid_color = Math.floor(warm_color * 1.2);
		}

		if (debug) {console.log("case: mid " + warm_color + " " + mid_color + " " + warm_color);}

		return "rgba(" + warm_color + ", " + mid_color + ", " + cool_color + ", 1)";
	}
}

var runIt = function()
{
	var tempTo = convert(document.getElementById("input_temp").value,
		document.getElementsByName("convert_from")[0].value,
		document.getElementsByName("convert_to")[0].value);
	var colorString = determineColor(document.getElementById("input_temp").value,
		document.getElementsByName("convert_from")[0].value);

	if (debug) {console.log("tempTo = " + tempTo + " and colorString " + colorString);}

	document.getElementById("div_output").innerHTML = " " + tempTo + " degrees " + document.getElementsByName("convert_to")[0].value;
	document.getElementById("div_left").style.backgroundColor = colorString;
}

changeNumber.addEventListener("keyup", function(){
	if (debug) {console.log("Used keyup");}
	runIt();
});

changeSelectionFrom.addEventListener("change", function(){
	runIt();
	if (debug) {console.log("Used convert_from");}
});

changeSelectionTo.addEventListener("change", function(){
	runIt();
	if (debug) {console.log("Used convert_to");}
});

