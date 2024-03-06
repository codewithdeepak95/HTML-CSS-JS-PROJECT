let button = document.querySelector("button");
let birthday = document.querySelector("#birthday");
let result = document.querySelector("#result");

function ageCalculator(){
    const birthdayValue = birthday.value;
    if(birthdayValue === ""){
        alert("Please enter your birth date");
    }else{
        const age = getAge(birthdayValue);
        result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
   
    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate()) ){
        age--;
    }

    return age;
}

button.addEventListener('click', ageCalculator);