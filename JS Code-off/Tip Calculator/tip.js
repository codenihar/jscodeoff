let percentageTipEl = document.getElementById("percentageTip");
let billAmountEl = document.getElementById("billAmount");

function calculateButton() {
    let percentageTip = percentageTipEl.value;
    let billAmount = billAmountEl.value;

    let calculatedTip = (parseInt(percentageTip)/100) * parseInt(billAmount);
    document.getElementById("tipAmount").value = calculatedTip;

    let totalAmount = parseInt(billAmount) + calculatedTip;
    document.getElementById("totalAmount").value = totalAmount;

    document.getElementById("errorMessage").textContent="";

    if (billAmountEl.value==="") {
        document.getElementById("errorMessage").textContent = "Please enter valid input";
    } else if (percentageTipEl.value===""){
        document.getElementById("errorMessage").textContent = "Please enter valid input";
    } else if (billAmountEl.value==="" && percentageTipEl.value===""){
        document.getElementById("errorMessage").textContent = "Please enter valid input";
    }
}
