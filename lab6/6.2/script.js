document.getElementById("testForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let result = document.getElementById("result");
    result.innerHTML = "";

    const isQuestion1Correct = () => {
        const question1Value = document.getElementById("question1").value;
        return question1Value === "2";
    };

    const isQuestion2Correct = () => {
        const question2Value = document.getElementById("question2").value.trim().toLowerCase();
        return question2Value === "правильный ответ";
    };

    const isTestPassed = () => {
        return isQuestion1Correct() && isQuestion2Correct();
    };

    if (isTestPassed()) {
        result.classList.add("alert", "alert-success");
        result.innerHTML = "Тест пройден!";
    } else {
        result.classList.add("alert", "alert-danger");
        result.innerHTML = "Тест не пройден. Попробуйте еще раз!";
    }
});