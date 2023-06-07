const isPalindrome = str => {
    const lowercasedStr = str.toLowerCase().replace(/\s+/g, '');
    const reversedStr = lowercasedStr.split("").reverse().join("");
    return lowercasedStr === reversedStr;
};

document.getElementById("palindromeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const surname = document.getElementById("surname").value;
    const result = document.getElementById("result");
    result.innerHTML = "";

    if (surname.length > 0) {
        if (isPalindrome(surname)) {
            result.innerHTML = `<strong>${surname}</strong> является полиндромом!`;
        } else {
            result.innerHTML = `<strong>${surname}</strong> не является полиндромом`;
        }
    } else {
        result.innerHTML = "Введите вашу фамилию";
    }
});
