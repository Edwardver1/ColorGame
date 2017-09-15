
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var displayColor = document.getElementById('displayColor');
var message = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){

  setUpModeButtons();
  setUpSquares();
  reset();
}


function setUpModeButtons(){
	for (var i = 0; i < modeBtns.length; i++){
	modeBtns[i].addEventListener("click", function(){
		modeBtns[0].classList.remove('selected');
		modeBtns[1].classList.remove('selected');
		this.classList.add('selected');
		this.textContent === "Easy" ? numSquares=3: numSquares=6 
		reset();
	});
  }
};

function setUpSquares(){
  for(var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		if(pickedColor === clickedColor){
			message.textContent = 'Correct!';
			changeColor(pickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play again?"
		}else{
			this.style.backgroundColor = "#232323";
			message.textContent = 'Try again!';
		};
	});
  }
};


function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	resetButton.textContent="New Colors"; 
	message.textContent='';
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	};
	h1.style.backgroundColor = "steelblue"; 

}

resetButton.addEventListener('click', function(){
	reset();
});




function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	};
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num){
	var arr = [];

	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}

	return arr;
};

function randomColor(){
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}