$(document).ready(function(){
	var allAnimals = ["Perro", "Gallina", "Colibrí", "Vaca", "Gusano", "Caballo","Carro", "Hong Kong", "Camilo", "Bicicleta"];
	var allFruits = ["Banano","Mango", "Fresa", "Kiwi", "Pera", "Mandarina","Lulo","Papaya","Brócoli","Cilantro","Azúcar", "Leche","Arroz"];
	
	var myCorrectsF = ["Banano","Mango", "Fresa", "Kiwi", "Pera", "Mandarina","Lulo","Papaya"];
	var myMistakesF = ["Brócoli","Cilantro","Azúcar", "Leche","Arroz"];

	var myCorrectsA = ["Perro", "Gallina", "Colibrí", "Vaca", "Gusano", "Caballo"];
	var myMistakesA = ["Carro", "Hong King", "Camilo", "Bicicleta"];

	var myCount = 0;
	var goods = 0;
	var bads = 0;

	var flag = 0;
	var allStrings;
	var myCorrects;
	var myMistakes;

	//When user push on wrong button
	$(".bad").click(function(){
		valor = $("#items").text();
		random = allStrings.pop();
		document.getElementById("items").innerHTML=random;
		myCount += 1;
		if (myMistakes.contains(valor)){
			goods += 1;
			document.getElementById("goods-number").innerHTML=goods;
		}
		else{
			bads += 1;
			document.getElementById("bads-number").innerHTML=bads;
		}
		if (myCount == lim ) {
			$(".animal").css("display","none");
			$(".botones").css("display","none");
			$(".game-over").css("display", "block");
		}
	});

	//When user push on good button
	$(".good").click(function(){
		valor = $("#items").text();
		console.log(valor);
		random = allStrings.pop();
		document.getElementById("items").innerHTML=random;
		myCount += 1;
		if (myCorrects.contains(valor)){
			goods += 1;
			document.getElementById("goods-number").innerHTML=goods;
		}
		else{
			bads += 1;
			document.getElementById("bads-number").innerHTML=bads;
		}
		if (myCount == lim ) {
			$(".animal").css("display","none");
			$(".botones").css("display","none");
			$(".game-over").css("display", "block");
		}
	});

	//Function to show activity items again
	$(".reintentar").click(function(){
		$(".game-over").css("display", "none");
		$(".animal").css("display","block");
		$(".botones").css("display","block");
		startingGame();
	});
	
	//A function to set the default values
	function startingGame(){
		if (flag == 1) {
			allStrings = ["Perro", "Gallina", "Colibrí", "Vaca", "Gusano", "Caballo","Carro", "Hong King", "Camilo", "Bicicleta"];
		}else if(flag = 2){
			allStrings = ["Banano","Mango", "Fresa", "Kiwi", "Pera", "Mandarina","Lulo","Papaya","Brócoli","Cilantro","Azúcar", "Leche","Arroz"];
		}
		allStrings.sort(function(){return Math.round(Math.random());});
		random = allStrings.pop();
		document.getElementById("items").innerHTML=random;
		myCount = 0;
		goods = 0;
		document.getElementById("goods-number").innerHTML=goods;
		bads = 0;
		document.getElementById("bads-number").innerHTML=bads;
	}

	//Function to display activity for animals
	$("#btn-animales").click(function(){
		$(".descripcion-frutas").remove();
		$(".juego-frutas").remove();

		$(".descripcion-animales").css("display","block");
		$(".juego-animales").css("display","block");
		$(".seleccion").hide();
		allStrings = allAnimals;
		myCorrects = myCorrectsA;
		myMistakes = myMistakesA;
		lim = 10;
		allStrings.sort(function(){return Math.round(Math.random());});
		random = allStrings.pop();
		document.getElementById("items").innerHTML=random;
		myCount = 0;
		goods = 0;
		bads = 0;
		flag = 1;
	});

	//Function to display activity for fruits
	$("#btn-frutas").click(function(){
		$(".descripcion-animales").remove();
		$(".juego-animales").remove();

		$(".descripcion-frutas").css("display","block");
		$(".juego-frutas").css("display","block");
		$(".seleccion").hide();
		allStrings = allFruits;
		myCorrects = myCorrectsF;
		myMistakes = myMistakesF;
		lim = 13;
		allStrings.sort(function(){return Math.round(Math.random());});
		random = allStrings.pop();
		document.getElementById("items").innerHTML=random;
		myCount = 0;
		goods = 0;
		bads = 0;
		flag = 2;
	});

	Array.prototype.contains = function(element){
		return this.indexOf(element) > -1;
	};
	
});