const randomNumberButton = document.getElementById("randomNumberButton");
const maxNumberButton = document.getElementById("maxNumberButton");
const numberInput = document.getElementById("numberInput");
const avgOutput = document.getElementById("avgOutput");
const last = document.getElementById("last");

var currentAvg = 0
var numberOfNumbers = 0

function addToAverage(number) {
    last.innerHTML = number;

    if (numberOfNumbers <= 0) {
        currentAvg = number;
        numberOfNumbers = 1;
    } else {
        let newFrac = 1 / (numberOfNumbers + 1);
        let diffFrac = numberOfNumbers / (numberOfNumbers + 1)

        currentAvg = currentAvg * diffFrac + number * newFrac
        numberOfNumbers = numberOfNumbers + 1;
    }

    avgOutput.innerHTML = currentAvg
}

randomNumberButton.onclick = function(e) {
    let number = Math.round(Math.random() * 10000)
    addToAverage(number)
}

maxNumberButton.onclick = function(e) {
    addToAverage(Number.MAX_VALUE)
}

numberInput.onkeypress = function(e) {
    if (e.keyCode == 13) {

        let number = parseInt(numberInput.value.trim(), 10)

        if (number != null && !Number.isNaN(number) && Number.isFinite(number)) {
            addToAverage(number);
        } else {
            console.log("warning: Could not use value ${number} cause it was null, NaN or Infinite")
        }

        numberInput.value = '';
        return false;
    }
    return true;
}
