const btn = document.querySelector(".roll-btn");
const diceElm = document.querySelector("#dice");
const rollHistoryElm = document.querySelector(".history");
let historyList =[];

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceElm.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory(){
    rollHistoryElm.innerHTML = "";
    for(let i = 0;  i < historyList.length; i++){
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`
        rollHistoryElm.appendChild(listItem);
    }
}

function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
    }
}

btn.addEventListener("click", () => {
    diceElm.classList.add("roll-animation");
    setTimeout(() => {
        diceElm.classList.remove("roll-animation");
    }, 1000);
    rollDice();
});
