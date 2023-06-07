const calculateDaysUntilNewYear = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const newYear = new Date(currentYear + 1, 0, 1);
    const timeDifference = newYear - today;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
};

document.getElementById("calculateBtn").addEventListener("click", () => {
    const daysUntilNewYear = calculateDaysUntilNewYear();
    const result = document.getElementById("result");
    result.innerHTML = `До нового года осталось <strong>${daysUntilNewYear}</strong> дней.`;
});