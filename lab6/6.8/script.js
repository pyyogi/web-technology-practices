const emails = [
    "john.doe@example.com",
    "jane.doe@example.com",
    "michael.smith@example.com",
    "susan.green@example.com",
    "peter.zhang@example.com"
];

const createListItem = (email) => {
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = email;
    return li;
}

const updateEmailList = (filter) => {
    let emailList = document.getElementById("emailList");
    emailList.innerHTML = "";

    for (const email of emails) {
        if (email.toLowerCase().includes(filter.toLowerCase())) {
            emailList.appendChild(createListItem(email))
        }
    }
}

document.getElementById("emailFilter").addEventListener("input", function(event) {
    updateEmailList(event.target.value);
});

updateEmailList("");