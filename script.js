const allCalculatorButtons = document.getElementsByTagName("button");
const textField = document.getElementById("text-para")
for (var i = 0; i < allCalculatorButtons.length; i++) {
    allCalculatorButtons[i].addEventListener("click", calculatorButtonTriggered);
}

function calculatorButtonTriggered(button) {
    button = button.target;
    console.log(button);

    if (button.innerHTML == "AC") {
        textField.innerHTML = "";
    }

    else if (button.innerHTML == "C") {
        textField.innerHTML = textField.innerHTML.split("").splice(0, textField.innerHTML.length - 1).join("");
    }

    else if (button.innerHTML == " = ") {
        resolveQuestion();
    }

    else {
        textField.innerHTML += button.innerHTML;
    }
}

function resolveQuestion() {
    textArray = textField.innerHTML.split('');
    for (var i = 0; i < textArray.length; i++) {
        if (textArray[i] == "x") {
            textArray[i] = " * ";
        }

        if (textArray[i] == "÷") {
            textArray[i] = " / ";
        }
    }


    textField.innerHTML = eval(textArray.join(''));
}