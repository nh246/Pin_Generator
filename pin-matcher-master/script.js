// random 4 digit number 
let number
 function generatePin (){
    number = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("displayPin").value = number ;
}

// the digits 

function clickedNumber(id) {
    let num = document.getElementById(id).innerText.value;
    console.log(num)
}
















