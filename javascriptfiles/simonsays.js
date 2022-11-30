var colorArray = [];
document.addEventListener('click', colorPicked)

function play (){
alert('Game Started!')
var randomNumberGenerator = Math.floor(Math.random()*4);
var colors = ['green', 'blue', 'red', 'yellow']
colorArray.push(colors[randomNumberGenerator]);
console.log(colorArray);

// ARRAY ITERATOR FOR THE FUTURE
// colorArray.forEach(el => {
//     el === 'green' ? console.log(el) : console.log('not green');
//     el === 'yellow' ? console.log(el) : console.log ('not yellow');
// });

};

function colorPicked () {
    var colorClicked = document.querySelector('btn');
    return colorClicked;
}

