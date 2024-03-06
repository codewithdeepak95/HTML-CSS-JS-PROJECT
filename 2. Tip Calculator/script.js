const button = document.querySelector("#btn");
const billAmount = document.querySelector("#bill_amount");
const tipPercentage = document.querySelector("#tip");
const total = document.querySelector("#total");

function tipCalculator() {

    let amount = billAmount.value;
    let tip = tipPercentage.value;
    
    if (amount == 0) {
        alert("Please enter Bill amount");
    }else if (tip == 0) {
        alert("Please enter tip percentage");
    }else{
        let calAmount = amount * (1+tip/100);
        total.innerText = `$${calAmount}`;
    }
}

button.addEventListener('click', tipCalculator);
