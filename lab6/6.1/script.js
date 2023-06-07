const display = document.querySelector(".display");

const inputDigit = digit => {
    display.value += digit;
};

const inputOperator = operator => {
    const currentValue = display.value;
    if (currentValue.length > 0 && !"+-*/".includes(currentValue[currentValue.length - 1])) {
        display.value += operator;
    }
};

const calculate = () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Ошибка в выражении!");
    }
};

const clearDisplay = () => {
    display.value = "";
};

document.querySelector(".buttons").addEventListener("click", event => {
    const target = event.target;

    if (!target.matches("button")) {
        return;
    }

    if (target.textContent >= "0" && target.textContent <= "9") {
        inputDigit(target.textContent);
    } else if (target.textContent === ".") {
        inputDigit(target.textContent);
    } else if ("+-*/".includes(target.textContent)) {
        inputOperator(target.textContent);
    } else if (target.textContent === "=") {
        calculate();
    }
});