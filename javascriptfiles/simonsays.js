var colorArray = [];

document.addEventListener('click', (event) => {
    return colorPicked(event.target.id);
});
var randomNumberGenerator = Math.floor(Math.random() * 4);

function play() {
    alert('Game Started!')
    var colors = ['green', 'blue', 'red', 'yellow']
    colorArray.push(colors[randomNumberGenerator]);
    console.log(colorArray);

    // ARRAY ITERATOR FOR THE FUTURE
    // colorArray.forEach(el => {
    //     el === 'green' ? console.log(el) : console.log('not green');
    //     el === 'yellow' ? console.log(el) : console.log ('not yellow');
    // });

};

function colorPicked(event) {
    var buttonClicked = document.querySelectorAll('.btn');
    
    if (event === 'green_btn') {
        try {
            setTimeout(function changeStatus() {
                buttonClicked[0].classList.add('changeColor');
            }, 100)
            setTimeout(function returnStatus() {
                buttonClicked[0].classList.remove('changeColor');
            }, 100)
        } catch (msg) {
            console.log(msg)
        };
    }
    else {
    console.log('other button ' + event)
    }

}

