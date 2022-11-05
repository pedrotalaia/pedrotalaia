
let remainingDaysToLive = document.querySelector('h1');


function lifeInWeeks(age) {
    var age = prompt("What's your age?");
    var ageLeft = (90-age);
    var daysToLive = ageLeft * 365;
    var weeksToLive = (daysToLive *52) /365;
    var monthsToLive = ageLeft * 12;

    // Previous Version with Alert
    // alert("You have " + daysToLive + " days " + weeksToLive + " weeks and " + monthsToLive + " months left.");
    
    return remainingDaysToLive.innerHTML = "You have " + daysToLive + " days " + weeksToLive + " weeks and " + monthsToLive + " months left.";
    
    }

    