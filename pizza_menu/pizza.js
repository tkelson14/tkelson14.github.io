function getReceipt() {
	text1 = ""; 
	text2 = ""; 
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}

	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
		text2 = text2+sizeTotal+"<br>";
	}
	runningTotal = sizeTotal;
	getMeat(text1,text2,runningTotal);
};	

function getMeat(text1,text2,runningTotal) {
	var runningTotal = runningTotal;
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meat");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
		}
	}

	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}

	runningTotal = (runningTotal + meatTotal);
	for (var j = 0; j < selectedMeat.length; j++) {
			text1 = text1+selectedMeat[j]+"<br>";
			if (meatCount <= 1) {
				text2 = text2 + 0 + "<br>";
				meatCount = meatCount - 1;
			} else if (meatCount == 2) {
				text2 = text2 + 1 + "<br>";
				meatCount = meatCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				meatCount = meatCount - 1;
			}
	}

	getVeggies(text1,text2,runningTotal);
};

function getVeggies(text1,text2,runningTotal) {
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggiesArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggiesArray.length; j++) {
		if (veggiesArray[j].checked) {
			selectedVeggies.push(veggiesArray[j].value);
		}
	}

	var veggiesCount = selectedVeggies.length;
	if (veggiesCount >= 2) {
		veggiesTotal = (veggiesCount - 1);
	} else {
		veggiesTotal = 0;
	}

	runningTotal = (runningTotal + veggiesTotal);
	for (var j = 0; j < selectedVeggies.length; j++) {
			text1 = text1+selectedVeggies[j]+"<br>";
			if (veggiesCount <= 1) {
				text2 = text2 + 0 + "<br>";
				veggiesCount = veggiesCount - 1;
			} else if (veggiesCount == 2) {
				text2 = text2 + 1 + "<br>";
				veggiesCount = veggiesCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				veggiesCount = veggiesCount - 1;
			}
	}

	getCheese(text1,text2,runningTotal);
};

function getCheese(text1,text2,runningTotal) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese = cheeseArray[j].value;
		}
		if (selectedCheese === "Extra cheese") {
			cheeseTotal = 3;
		}
	}

	text2 = text2+cheeseTotal+"<br>";
	text1 = text1+selectedCheese+"<br>";
	runningTotal = (runningTotal + cheeseTotal);
	getSauce(text1,text2,runningTotal);
};

function getSauce(text1,text2,runningTotal) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce = sauceArray[j].value;
			text1 = text1 + selectedSauce +"<br>";
		}
	}

	text2 = text2 + 0 + "<br>";
	getCrust(text1,text2,runningTotal)
};

function getCrust(text1,text2,runningTotal) {
	var crustTotal = 0;
	var selectedCrust;
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
			text1 = text1 + selectedCrust + "<br>";
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
		}
	}
	
	runningTotal = (runningTotal + crustTotal);
	text2 = text2 + crustTotal + "<br>";
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice2").innerHTML = "</h3>$"+runningTotal+".00"+"</h3>";
};

function clearAll() {
	document.getElementById("formMenu").reset();
	document.getElementById("cart").style.opacity=0;
};