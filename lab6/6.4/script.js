const calculateAverage = () => {
    const dataInput = document.getElementById("dataInput");
    const resultElement = document.getElementById("result");

    const data = dataInput.value.split(",").map(Number);
    const sum = data.reduce((acc, num) => acc + num, 0);
    const average = sum / data.length;

    resultElement.innerHTML = `Среднее значение: ${average.toFixed(2)}`;
};
