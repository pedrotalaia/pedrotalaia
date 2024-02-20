
// Declaring Variables

function count(){
let wordSpliter = document.getElementById('seo-text').value;
let wordCounter = wordSpliter.split(/\s+/).length;
let showWordCount = document.querySelector(".word-count > p");
return showWordCount.textContent = "Word Count: " + wordCounter;
};

