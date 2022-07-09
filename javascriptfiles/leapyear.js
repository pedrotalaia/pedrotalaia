function isLeap(year) {

    let yearbyFour = year/4;
    let yearbyThousand = year/1000;
    let yearbyFourHundred = year/400;


    if (Number.isInteger(yearbyFour) === false) {
        console.log("Not Leap");        
    }   
    else if (Number.isInteger(yearbyThousand) === false){
        console.log("Leap");    
    }
    else if(Number.isInteger(yearbyFourHundred) === true){
        console.log("Leap")
    }
    else {
        console.log("Not Leap")
    };

    return year;       
    
    /**************Don't change the code below****************/    
    
    }

    console.log(isLeap(2000));