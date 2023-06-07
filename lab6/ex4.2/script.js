
const customer = {
    name: "Иван Иванов",
    email: "ivan@example.com",
    phone: "+7 (900) 123-45-67",
    address: "г. Москва, ул. Примерная, д.1",
    age: 30,
};

document.getElementById("name").innerHTML = `Имя: ${customer.name}`;
document.getElementById("email").innerHTML = `Email: ${customer.email}`;
document.getElementById("phone").innerHTML = `Телефон: ${customer.phone}`;