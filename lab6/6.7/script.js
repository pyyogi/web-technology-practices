
const getNumbersArray = () => {
    const numbersInput = document.getElementById("inputNumbers").value;
    const numbersArray = numbersInput
        .split(",")
        .map(num => parseInt(num.trim()));
    return numbersArray;
};

const sumNumbers = numbersArray =>
    numbersArray.reduce((accumulator, num) => accumulator + num, 0);

const filterEvenNumbers = numbersArray =>
    numbersArray.filter(num => num % 2 === 0);

const multiplyBy2 = numbersArray =>
    numbersArray.map(num => num * 2);

const showResult = result => {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Результат: <strong>${result.join(", ")}</strong>`;
};

document.getElementById("sumBtn").addEventListener("click", () => {
    const numbersArray = getNumbersArray();
    const sum = sumNumbers(numbersArray);
    showResult([sum]);
});

document.getElementById("filterEvenBtn").addEventListener("click", () => {
    const numbersArray = getNumbersArray();
    const evenNumbers = filterEvenNumbers(numbersArray);
    showResult(evenNumbers);
});

document.getElementById("multiplyBy2Btn").addEventListener("click", () => {
    const numbersArray = getNumbersArray();
    const multipliedBy2Numbers = multiplyBy2(numbersArray);
    showResult(multipliedBy2Numbers);
});