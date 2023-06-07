const emptyArrowFunction = () => {};

document.getElementById("executeBtn").addEventListener("click", () => {
    const result = emptyArrowFunction();
    const resultDiv = document.getElementById("result");

    if (result === undefined) {
        resultDiv.innerHTML = "Результат выполнения пустой стрелочной функции: <strong>undefined</strong>";
    } else {
        resultDiv.innerHTML = "Результат выполнения пустой стрелочной функции: <strong>" + result + "</strong>";
    }
});