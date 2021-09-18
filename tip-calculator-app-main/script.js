const billInput = document.querySelector('.inputBill');
const numberOfPeople = document.querySelector(".inputPeople");
const allTips = document.querySelectorAll(".tip-percent");
const tipPercent = document.querySelector(".tip-percent");
const btnReset = document.querySelector('button');

//CHECK FOR AMOUNT IN BILL


const amountOfBill = function(number){
  number = Number(billInput.value);
  billInput.value.length >= 0 ? btnReset.style.opacity = '1': btnReset.style.opacity = '0.5';
  return number;
}
billInput.addEventListener('keypress', amountOfBill);



//How this should work:
//1)When a button is clicked its value should be taken from it and returned
//2)When other button is clicked the previous button should be unselected

// const click = function(){
//   allTips.forEach()
// }



