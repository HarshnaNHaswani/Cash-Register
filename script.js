const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1]
checkButton.addEventListener("click", validateBillandCashAmount);

function validateBillandCashAmount(){
    hideMessage();
    var msg;
    let cash = Number(cashGiven.value);
    let bill = Number(billAmount.value);
    if(bill > 0){
        if(cash >= bill){
            hideMessage();
            const amountToBeReturned = cash - bill;
            calculateChange(amountToBeReturned);
        }else{
            noOfNotes.forEach(element => {
                element.innerText = "";
            });
            msg ="The cash provided should be greater than or equal to the bill amount";            
            showMessage(msg);            
        }
    }
    else{
        msg = "Invalid Bill Amount!"
        showMessage(msg);
    }
}

function calculateChange(amountToBeReturned){
    for(let i=0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;    
    }
}

function hideMessage(){
    message.style.display = "none";
    message.innerText = "";
}
function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}