var gameCell = document.querySelectorAll(".game-cell");
var resetButton = document.querySelector(".reset");
var statusMessage = document.querySelector("#status");
var track = 1;
var myArr = [];

init();

//adding a marker
function init(){
	for(var i=0; i<gameCell.length; i++){
		gameCell[i].addEventListener("click",addMarker,{once : true});
	}
}


function addMarker(){
	if(track%2 === 1){
		this.classList.add("x");

		statusMessage.textContent = "o is next";
	}
	else{
		this.classList.add("o");
		statusMessage.textContent = "x is next";
	}
	track++;
	createArray();
	if(checkWinner("x")){
		for(var i=0; i<gameCell.length; i++){
			gameCell[i].removeEventListener("click",addMarker);
		}
	}
	else if(checkWinner("o")){
		for(var i=0; i<gameCell.length; i++){
			gameCell[i].removeEventListener("click",addMarker);
		}
	}
	else{
		checkTie();
	}
}


//reset button
resetButton.addEventListener("click",function(){
	for(var i=0; i<gameCell.length; i++){
		gameCell[i].classList.remove("x");
		gameCell[i].classList.remove("o");
		gameCell[i].classList.remove("won");
		gameCell[i].classList.remove("won");
	}
	track = 1;
	statusMessage.textContent = "x is next";
	init();
});


function createArray(){
	for(var i=0; i<gameCell.length;i++){
		if(gameCell[i].classList.contains("x")){
			myArr[i] = "x";
		}
		else if(gameCell[i].classList.contains("o")){
			myArr[i] = "o";
		}
		else{
			myArr[i] = null;
		}
		
	}
	console.log(myArr);
}

function checkWinner(marker){
	if(myArr[0] === marker && myArr[1] === marker && myArr[2] === marker ){
		gameCell[0].classList.add("won");
		gameCell[1].classList.add("won");
		gameCell[2].classList.add("won");
		statusMessage.textContent = marker + " has won!";
		return true;

	}
	else if(myArr[3] === marker && myArr[4] === marker && myArr[5] === marker){
		gameCell[3].classList.add("won");
		gameCell[4].classList.add("won");
		gameCell[5].classList.add("won");
		statusMessage.textContent = marker + " has won!";
		return true;

	}
	else if(myArr[6] === marker && myArr[7] === marker && myArr[8] === marker){
		gameCell[6].classList.add("won");
		gameCell[7].classList.add("won");
		gameCell[8].classList.add("won");
		statusMessage.textContent = marker + " has won!";
		return true;

	}
	else if(myArr[0] === marker && myArr[3] === marker && myArr[6] === marker){
		gameCell[0].classList.add("won");
		gameCell[3].classList.add("won");
		gameCell[6].classList.add("won");
		statusMessage.textContent = marker + " has won!";
		return true;

	}
	else if(myArr[1] === marker && myArr[4] === marker && myArr[7] === marker){
		gameCell[1].classList.add("won");
		gameCell[4].classList.add("won");
		gameCell[7].classList.add("won");
		statusMessage.textContent = marker + " has won!";
		return true;

	}
	else if(myArr[2] === marker && myArr[5] === marker && myArr[8] === marker){
		gameCell[2].classList.add("won");
		gameCell[5].classList.add("won");
		gameCell[8].classList.add("won");
		statusMessage.textContent = marker + " has won!";
		return true;

	}
	else if(myArr[0] === marker && myArr[4] === marker && myArr[8] === marker){
		gameCell[0].classList.add("won");
		gameCell[4].classList.add("won");
		gameCell[8].classList.add("won");
		statusMessage.textContent = marker + " has won!";
		return true;

	}
	else if(myArr[2] === marker && myArr[4] === marker && myArr[6] === marker){
		gameCell[2].classList.add("won");
		gameCell[4].classList.add("won");
		gameCell[6].classList.add("won");
		statusMessage.textContent = marker + " has won!";
		return true;

	}
	return false;
	
}

function checkTie(){
	var count = 0;
	for(var i=0; i<gameCell.length; i++){
		if(gameCell[i].classList.contains("x") || gameCell[i].classList.contains("o")){
			if(count===8){
				statusMessage.textContent = "game tied!";
			}
		}
		else{
			break;
		}
		count++;
	}
}







