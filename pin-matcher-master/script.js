// random 4 digit number 
let number
 function generatePin (){
    number = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("displayPin").value = number ;
}

// the digits 

function clickedNumber(id) {
    let prevValue = document.getElementById("numPad").value;
    let num = document.getElementById(id).innerText;
    console.log(num)
    document.getElementById("numPad").value = prevValue + num ; 
}

//  clear all 

function clearInput (){
        document.getElementById("numPad").value = "";
}

//  remove last digit 

function clearLastDigit(){
    let numbers = document.getElementById("numPad").value;
    let newNumbers = numbers.slice(0, numbers.length - 1);
    document.getElementById("numPad").value = newNumbers;
}

//  submit 

function submitNums () {
  let num1 = document.getElementById("numpad").value;
  let num2 = document.getElementById("displayPin").value;

  let theNewNum1 = parseInt(num1);
  let theNewNum2 = parseInt(num2);

  if(theNewNum1 == theNewNum2 )
  {
    console.log("the pin has matched");
  }
}














