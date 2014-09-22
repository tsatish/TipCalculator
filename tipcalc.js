function calculateTip (form) {
	amount = form.amount.value;
	tip = getTip(form.servicetype.value);
	//console.log(amount);
	//console.log(tip);
	result = amount*=tip;
	result = result.toFixed(2);
	//console.log(result);

	document.getElementById("result").innerHTML = "Your total bill: " + result; 
}

function getTip (serviceLevel) {
	switch (serviceLevel) {
		case "excellent":
			return 1.20;
			break;
		case "good":
			return 1.15;
			break;
		case "bad":
			return 1.07;
			break;
		default:
			return 1.15;
	}
}