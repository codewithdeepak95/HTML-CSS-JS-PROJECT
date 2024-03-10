const buttons = document.querySelectorAll("button");
const resultElm = document.querySelector("#result");
const myScoreElm = document.querySelector("#myScore");
const compScoreElm = document.querySelector("#compScore");

let userScore=0;
let compScore=0;

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const result = playRound(button.id , computerPlay());
        resultElm.textContent = result;
    });
});

function computerPlay(){
    const choices = ["rock","paper","scissors"];
        const randomChoice = Math.floor(Math.random()*choices.length);
        return choices[randomChoice];
}

function playRound(userSel, compSel){
    if(userSel === compSel){
        return "It is a tie";
    }else if(
        (userSel === "rock")&&(compSel === "scissors") ||
        (userSel === "scissors")&&(compSel === "paper") ||
        (userSel === "paper")&&(compSel === "rock") ){
        userScore++;
        myScoreElm.innerText = userScore;
        return "You win! " + userSel + " beats " + compSel;
    }else {
        compScore++;
        compScoreElm.innerText = compScore;
        return "You lose! " + userSel + " beats " + compSel;
    }
}
