function getLastValueInText(lastValue){
	
	lastValue = Math.round(lastValue * 100) / 100;
	lastValue = lastValue.toString();
	var splitOnDot = lastValue.split(".");
	console.log(splitOnDot);
	if(splitOnDot[0] < 10)splitOnDot[0] = "0" + splitOnDot[0];	
	if(splitOnDot[1]==undefined || splitOnDot[1].length == 0)splitOnDot[1] = "00";
	if(splitOnDot[1].length == 1)splitOnDot[1] = splitOnDot[1] + "0";
	lastValue = splitOnDot[0] + "." + splitOnDot[1];				
	return lastValue;
};

var tes = getLastValueInText(90.00111324342);
console.log(tes);

tes = getLastValueInText(0.00111324342);
console.log(tes);


tes = getLastValueInText(9.01111324342);
console.log(tes);