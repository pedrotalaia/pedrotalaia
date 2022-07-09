//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

var bmiWeight = prompt("Whats your weight?");
var bmiHeight = prompt("Whats your height?");

function bmiCalculator (bmiWeight, bmiHeight) {
    let heightSquared = Math.pow(bmiHeight,2)
    let bmiResults = Math.round(bmiWeight/heightSquared);


    if (bmiResults < 18.5){
        console.log("Your BMI is " + bmiResults + " so you are underweight.")
    }
    else if (bmiResults >= 18.5 && bmiResults <= 24.9 ) {
        console.log("Your BMI is " + bmiResults + " so you are normal weight.")
    }
    else if (bmiResults > 24.9) {
        console.log("Your BMI is " + bmiResults + " so you are overweight.")
    };

    return bmiResults; 
};


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

    weight / (heigth2) 

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/