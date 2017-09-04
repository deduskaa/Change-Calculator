//Change Return Program - The user enters a cost and then the amount of money given.
//The program will figure out the change and the number of quarters, dimes, nickels, pennies needed for the change.

var coins = [2, 1, 0.5, 0.2, 0.1, 0.05];
var bills = [500, 200, 100, 50, 20, 10, 5];


document.getElementById("count").onclick = function(){
	price = parseFloat(document.getElementById("productPrice").value);
	money = parseFloat(document.getElementById("givenMoney").value);
	
	var change = function(price, money){
		var moneyLeft = money - price;
		return moneyLeft;
	}
	//Lomakkeen tarkistus
	if(price <= 0){
		alert('Price can\'t be negative');
	}else{
	 	document.getElementById("change").innerHTML = "<h2>You get "
	 	+ change(price, money).toFixed(2) + " euros back.</h2>";
	 	checkingBills = checkingBills(change(price, money));
	 	checkingCoins(checkingBills.toFixed(2));
	}	
}

//Seteleiden lasku
var checkingBills = function(change) {	
	console.log('inBills');
	for(i = 0; i < bills.length; i++){
		//Jos vaihtoraha on yhtäsuuri tai isompi kuin seteli, jaa raha setelin arvolla
		if(change >= bills[i]){
			console.log('inBillsCount');
			//Kuinka monta kyseistä seteliä saadaan
			var countingBills = Math.floor(change/bills[i]);
			//Lasketaan paljon annetuista seteleistä tulee yhteensä
			var billSum = countingBills*bills[i];
			//Vähennetään saatujen seteleiden summa vaihtorahasta
			change -= billSum
			//Printtaa seteleiden määrä
			var p = document.createElement('h3');
			var text = document.createTextNode(countingBills + " " + bills[i] + "  euro bills");
			p.appendChild(text);
			document.getElementById('moneyBack').appendChild(p);
		}
	}
	return change;
},

//Kolikoiden lasku
checkingCoins = function(change) {
	console.log('inCoins');
	for(i = 0; i < coins.length; i++){
		if(change >= coins[i]){
			console.log('inCoinCount');
			var countingCoins = Math.floor(change/coins[i]);
			var coinSum = countingCoins*coins[i];
			change -= coinSum;

			var p = document.createElement('h3');
			var text = document.createTextNode(countingCoins + " " + coins[i] + "  euro coins");
			p.appendChild(text);
			document.getElementById('moneyBack').appendChild(p);
		}
	}
};
