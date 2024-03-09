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
    // rollHistoryElm.innerHTML = "";
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







// let dice = document.querySelector("#dice");
//     let ul = document.querySelector(".history");
//     let num = Math.floor(Math.random() * 6) + 1;
//     switch (num) {
//         case 1:
//             dice.innerHTML = "&#9856;";
//             roll(dice.innerHTML);
//             break;
//         case 2:
//             dice.innerHTML = "&#9857;";
//             break;
//         case 3:
//             dice.innerHTML = "&#9858;";
//             break;
//         case 4:
//             dice.innerHTML = "&#9859;";
//             break;
//         case 5:
//             dice.innerHTML = "&#9860;";
//             break;
//         case 6:
//             dice.innerHTML = "&#9861;";
//             break;
//     }
