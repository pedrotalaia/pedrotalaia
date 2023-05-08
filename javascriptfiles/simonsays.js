// Var Declarations
var colorArray = [];
var simonSaysHeading = document.querySelector('h1');
var colors = ['green_btn', 'blue_btn', 'red_btn', 'yellow_btn']
var buttonClicked = document.querySelectorAll('.btn');
var userPattern = [];

// Click Listener
document.addEventListener('click', (event) => {
    if (event.target.id === 'green_btn' || event.target.id === 'yellow_btn' || event.target.id === 'blue_btn' || event.target.id === 'red_btn'){
        console.log(true)
        colorPicked(event.target.id)
        return nextSequence();
    }
    else {
        return false
    }
});

// Functions Definition

function randomNumber (){
    var randomNumberGenerator = Math.floor(Math.random() * 4);
    return randomNumberGenerator
}

function nextSequence(){
return colorArray.push(colors[randomNumber()]);
}


function play() {
    nextSequence();
    if (colorArray.length > 1){
    return simonSaysHeading.innerHTML = 'Restart Game';
    }
    else {
    console.log(colorArray)
    }
};



function colorPicked(event) {
    userPattern.push(event);

    if (userPattern !== colorArray){
        console.log('true')
    }
    else {
        console.log('false')
    }
}


function restartGame(){
    colorArray = [];
    userPattern = [];
    return simonSaysHeading.innerHTML = 'New Game Started';
}


//  Change Color Status
//     if(color === colorArray[0]){
//         setTimeout(function changeStatus() {
//             colorArray[0].classList.add('changeColor');
//         }, 500)
//         setTimeout(function returnStatus() {
//             colorArray[0].classList.remove('changeColor');
//         }, 1000)
//     }
//     else {
//         return null
//     }