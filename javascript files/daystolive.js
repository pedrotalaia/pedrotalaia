function lifeInWeeks(age) {

    var ageLeft = (90-age);
    var daysToLive = ageLeft * 365;
    var weeksToLive = (daysToLive *52) /365;
    var monthsToLive = ageLeft * 12;
        
    console.log("You have " + daysToLive + " days " + weeksToLive + " weeks and " + monthsToLive + " months left.");
        
    }
    