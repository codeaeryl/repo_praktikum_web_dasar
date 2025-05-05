// 2472048 - Jayden Marvel Ethanael //
function startQuiz() {
    let answer = 0
    let correct = 0
    let total = 0
    let operators = ["+","-","*"]
    while (true) { // always loops
        a = Math.floor(Math.random()*20+1) // int 1
        b = Math.floor(Math.random()*20+1) // int 2
        c = Math.floor(Math.random()*3) // operator
        answer = prompt("What is "+a+" "+operators[c]+" "+b+"?")
        if (answer === null || answer === "exit") { //break when cancel or "exit"
            break
        }
        if (c == 0) { // addition
            if (answer == a+b) {
                alert("Correct!");
                correct+=1;
            } else {
                alert("Incorrect! The correct answer is "+(a+b));
            }
        } else if (c == 1) { // subtraction
            if (answer == a-b) {
                alert("Correct!")
                correct+=1
            } else {
                alert("Incorrect! The correct answer is "+(a-b))
            }
        } else if (c == 2) { // multiplication
            if (answer == a*b) {
                alert("Correct!")
                correct+=1
            } else {
                alert("Incorrect! The correct answer is "+(a*b))
            }
        }
        total+=1
    }
    result=confirm("You got "+correct+" out of "+total+" correct. Show results on page?")
    if (result) {
        document.getElementById("result").style.display="block";
        document.getElementById("result").innerHTML="Final Score: "+correct+"/"+total;
        document.getElementById("datetime").style.display="block";
        const d = new Date();
        document.getElementById("datetime").innerHTML="Finished at: "+ d.toLocaleString();
    }
}