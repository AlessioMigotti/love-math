//This fumction does all the house keeping for the app.
function gameSetup() {
    document.getElementById("btn-plus").addEventListener("click",additionQuestion);
    document.getElementById("btn-minus").addEventListener("click", subtracionQuestion);
    document.getElementById("btn-submit").addEventListener("click", submitAnswer);
}

function gameLoop() {

}

function additionQuestion() {
    
    let a = Math.floor(Math.random()*20);
    let b = Math.floor(Math.random()*20);
    let question = `Calculate: ${a} + ${b}`;
    

    document.getElementById("question-holder").innerHTML = question;

}

function subtracionQuestion() {
    alert("You clicked the minus button");
}

function submitAnswer() {
    alert("You clicked the submit button");
}

// Main program.    
gameSetup();
gameLoop();