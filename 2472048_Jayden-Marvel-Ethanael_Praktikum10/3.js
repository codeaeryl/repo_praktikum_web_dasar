// 2472048 - Jayden Marvel Ethanael //
var answer = "";
var answer_ = "";
var lives = 10;
document.getElementById("lives").innerHTML="Lives : "+lives
let answers = ["PYTHON", "JAVASCRIPT", "TAILWIND", "REACT", "LARAVEL"];
let clues = [
  "A versatile programming language named after a snake, loved for its simplicity.",
  "The language that brings interactivity to websites, often abbreviated as JS.",
  "A utility-first CSS framework for rapidly building custom designs.",
  "A JavaScript library for building dynamic user interfaces, created by Facebook.",
  "A PHP framework known for elegant syntax and robust web development tools.",
];
var len=0;
let i;
var ans;
function generate() {
    i=Math.floor(Math.random()*answers.length);
    answer_='_'.repeat(answers[i].length)
    document.getElementById("ans").innerHTML=answer_
    document.getElementById("clues").innerHTML=clues[i];
    ans=answers[i]
    len=answers[i].length
}
function checkAnswer() {
    answer=document.getElementById("answer").value;
    answer=answer.toUpperCase()
    var before = answer_;
    var after = answer_;
    for (let j = 0; j < len; j++) {
        var k = ans.indexOf(answer)
        if (k > -1) {
            ans=ans.replace(answer," ")
            after=replaceChar(after,answer,k)
        }
    }
    if (before == after) {
        lives--
    } else {
        answer_=after
        document.getElementById("ans").innerHTML=answer_
    }
    document.getElementById("img").src="img/"+lives+".jpg"
    document.getElementById("lives").innerHTML="Lives : "+lives
    checkWin()
}
function checkWin() {
    if (answer_.search("_")==-1){
        document.getElementById("input").style.display="none"
        document.getElementById("result").innerHTML="Kamu Menang!"
        document.getElementById("result").style.color="green"
    }
    if (lives==0) {
        document.getElementById("input").style.display="none"
        document.getElementById("result").innerHTML="Kamu Kalah!"
        document.getElementById("result").style.color="red"
    }
}
function replaceChar(origString, replaceChar, index) {
    let newStringArray = origString.split("");

    newStringArray[index] = replaceChar;

    let newString = newStringArray.join("");

    return newString;
}

window.onload=generate()