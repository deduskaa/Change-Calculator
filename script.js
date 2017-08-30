//Change Return Program - The user enters a cost and then the amount of money given.
//The program will figure out the change and the number of quarters, dimes, nickels, pennies needed for the change.

var coins = [2, 1, 0.5, 0.2, 0.1, 0.05];
var bills = [500, 200, 100, 50, 20, 10, 5];

function changeBack(price, money){
	moneyLeft = money - price;
	return moneyLeft;
}

var moneyLeft = document.getElementById("count").onclick = function(){
	document.getElementById('moneyBack').innerHTML = "";
	price = parseInt(document.getElementById("productPrice").value);
	money = parseInt(document.getElementById("givenMoney").value);

	//Lomakkeen tarkistus
	function validateForm() {
		if (money == "" || price >= money) {
      alert("You have to have money to pay for the product!");
      return false;
    }else if(price == ""){
    	alert("Insert the price!");
    }else if(price <= 0){
			alert('Price can\'t be negative');
		}else{
    	document.getElementById("change").innerHTML = "<h2>You get " + changeBack(price, money) + " euros back.</h2>";
    }
	}validateForm();	

	//Seteleiden lasku
	function checkingBills() {	
		for(i = 0; i < bills.length; i++){
			//Jos vaihtoraha on yhtäsuuri tai isompi kuin seteli, jaa raha setelin arvolla
			if(moneyLeft >= bills[i]){
				//Kuinka monta kyseistä seteliä saadaan
				var countingBills = Math.floor(moneyLeft/bills[i]);
				//Lasketaan paljon annetuista seteleistä tulee yhteensä
				var billSum = countingBills*bills[i];
				//Vähennetään saatujen seteleiden summa vaihtorahasta
				moneyLeft -= billSum
				//Printtaa seteleiden määrä
				var p = document.createElement('h3');
				var text = document.createTextNode(countingBills + " " + bills[i] + "  euro bills");
				p.appendChild(text);
				document.getElementById('moneyBack').appendChild(p);
			}
		}
	}checkingBills();
	
	//Kolikoiden lasku
	function checkingCoins() {
		for(i = 0; i < coins.length; i++){
			if(moneyLeft >= coins[i]){
				var countingCoins = Math.floor(moneyLeft/coins[i]);
				var coinSum = countingCoins*coins[i];
				moneyLeft -= coinSum;

				var p = document.createElement('h3');
				var text = document.createTextNode(countingCoins + " " + coins[i] + "  euro coins");
				p.appendChild(text);
				document.getElementById('moneyBack').appendChild(p);
			}
		}
	}checkingCoins();
}

