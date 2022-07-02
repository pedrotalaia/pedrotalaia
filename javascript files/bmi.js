//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

var bmiWeight = prompt("Whats your weight?");
var bmiHeight = prompt("Whats your height?");

function bmiCalculator (bmiWeight, bmiHeight) {
    var heightSquared = Math.pow(bmiHeight,2)
    return Math.round(bmiWeight/heightSquared); 
};

alert("Your bmi is " + bmiCalculator(bmiWeight, bmiHeight));


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

    weight / (heigth2) 

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/