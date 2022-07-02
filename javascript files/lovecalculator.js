
var name1 = prompt("whats the name of person 1?");
var name2 = prompt("whats the name of person 2?");


function generateRandomNumber () {
    var randomNumber = Math.random();
    var n = Math.floor(randomNumber * 100);
    return " Love score " + n; 
}

console.log(name1 + name2 + generateRandomNumber())