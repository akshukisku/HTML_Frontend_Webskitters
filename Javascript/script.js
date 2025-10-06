// function calculation() {
//     let num1 = Number(prompt("Enter first number"));
//     let num2 = Number(prompt("Enter second number"));

//     let sum = num1 + num2;
//     // console.log(sum);
//     let sub = num1 - num2;
//     let mul = num1 * num2;
//     let divResult = Math.floor(num1 / num2);
//     let rem = num1 % num2;
//     let power = num1 ** num2;

//     // console.log(document.getElementById('para'))
//     // document.getElementById('para').innerText=`${num1} + ${num2} = ${result}`;
//     document.getElementById('para').innerHTML =
//         `<p> ${num1} + ${num2} = ${sum} </p>
//          <p> ${num1} - ${num2} = ${sub} </p>
//          <p> ${num1} * ${num2} = ${mul} </p>
//          <p> ${num1} / ${num2} = ${divResult} </p>
//          <p> ${num1} % ${num2} = ${rem} </p>
//          <p> ${num1} <sup> ${num2}</sup> = ${power} </p>`;
// }

// function grade() {
   
//     let name = prompt("Enter your name");
// let marks = Number(prompt("Enter your marks"));

//  let display = document.getElementById('para');
//  let create = document.createElement("span");
// if (marks >= 90 && marks <= 100) {
//     display.innerHTML = `Your Name is  ${name}! You have scored A+ grade.`;
// }
// else if (marks >= 80 && marks < 90) {
//     display.innerHTML = `Your Name is  ${name}! You have scored A grade.`;
// }
// else if (marks >= 70 && marks < 80) {
//     display.innerHTML = `Your Name is  ${name}! You have scored B grade.`;
// }
// else if (marks >= 60 && marks < 70) {
//     display.innerHTML = `Your Name is  ${name}! You have scored C grade.`;
// }
// else if (marks >= 50 && marks < 60) {
//     display.innerHTML = `Your Name is  ${name}! You have scored D grade.`;
// }
// else {
//     display.innerHTML = `Your Name is ${name}! You have Failed.`;
// }
// }

function electricbill(){
    let units = Number(prompt("Enter the number of units consumed"));
    let billAmount = 0;
    
    if (units <= 50) {
        billAmount = units * 0.50;
    }
    else if (units <= 150) {
        billAmount = (50 * 0.50) + ((units - 50) * 0.75);
    }
    else if (units <= 250) {
        billAmount = (50 * 0.50) + (100 * 0.75) + ((units - 150) * 1.20);
    }
    else {
        billAmount = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + ((units - 250) * 1.50);
    }

    let surcharge = billAmount * 0.20;
    let totalAmount = billAmount + surcharge;

    let display = document.getElementById('para');
    let entry = document.createElement("p");

    entry.textContent = `Total bill amount is ${totalAmount} for ${units} units `;
    display.appendChild(entry);
}