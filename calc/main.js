let num1 = 0;
let num2 = 0;
let ope = "";
let result = 0;
let opePressedFlag = false;
let display = document.getElementById("display_area");

function reset() {
    display.innerText = "";
    num1 = 0;
    num2 = 0;
    result = 0;
    ope = "";
    opePressedFlag = false;
}

function pressButton(buttonName) {
    if (buttonName == "c") {
        reset();
    } else if (buttonName == "+") {
        num1 = parseInt(display.innerText);
        ope = "plus";
        opePressedFlag = true;
    } else if (buttonName == "-") {
        num1 = parseInt(display.innerText);
        ope = "minuse";
        opePressedFlag = true;
    } else if (buttonName == "x") {
        num1 = parseInt(display.innerText);
        ope = "multiple";
        opePressedFlag = true;
    } else if (buttonName == "/") {
        num1 = parseInt(display.innerText);
        ope = "divide";
        opePressedFlag = true;
    } else if (buttonName == "=") {
        num2 = parseInt(display.innerText);
        console.log("num1 = " + num1);
        console.log("num2 = " + num2);
        console.log("ope = " + ope);
        if (isNaN(num1) || isNaN(num2)) {
            display.innerText = "SYNTAX ERROR!";
        } else {
            switch (ope) {
                case "plus":
                    result = num1 + num2;
                    console.log("result = " + result);
                    break;
                case "minuse":
                    result = num1 - num2;
                    break;
                case "multiple":
                    result = num1 * num2;
                    break;
                case "divide":
                    if (num2 == 0) {
                        result = "ERROR!";
                    } else {
                        result = num1 / num2;
                    }
                    break;
            }
            display.innerText = result;
        }
        opePressedFlag = true;
    } else if (display.innerText.length < 10) {
        if (opePressedFlag) {
            display.innerText = buttonName;
            opePressedFlag = false;
        } else {
            display.innerText += buttonName;
        }
    } else {
        display.innerText = "STACK FULL!";
    }
    console.log(buttonName);
}
