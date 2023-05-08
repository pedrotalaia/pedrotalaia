
// Declaring Variables

function densityCheck(arg){
    let wordCount = arg.split(/\s+/);
    let wordCountArray = [];
    console.log(arg)

    for (let i= 0; i < wordCount.length; i++) {
        const element = wordCount[i];
        
        if (element === wordCount[i]){
        console.log(true)
        wordCountArray.push(i);
        console.log(wordCountArray)
        }
        else {
        console.log(false)
        }
    }
};

function count(){
let wordSpliter = document.getElementById('seo-text').value;
let wordCounter = wordSpliter.split(/\s+/).length;
let showWordCount = document.querySelector(".word-count > p");
return showWordCount.textContent = "Word Count: " + wordCounter;
};

