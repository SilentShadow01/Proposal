document.addEventListener("DOMContentLoaded", function() {
    let dateVisit = document.getElementById("dateVisit");
    let today = new Date().toISOString().split("T")[0];
    dateVisit.setAttribute("min", today);
});

function validateForm(event) {
    event.preventDefault();
    let form = document.getElementById('clientForm');
    let inputs = form.querySelectorAll('input[required]');
    let isValid = true;

    for (let input of inputs) {
        if (!input.value.trim()) {
            isValid = false;
            break;
        }
    }

    if (!isValid) {
        alert("Please fill out the blanks!");
    } else {
        alert("Form has been sent!");
        form.reset();
        document.getElementById("completeName").focus();
    }
}


function validateAdmin(event) {
    event.preventDefault();
    let username = document.getElementById("adminUsername").value.trim();
    let password = document.getElementById("adminPassword").value.trim();
    
    if (username === "" || password === "") {
        alert("Please fill out all fields!");
        return;
    }
    
    if (username !== "Admin" || password !== "Admin") {
        alert("User not found!");
    } else {
        alert("Welcome Admin!");
        document.getElementById("adminUsername").value = "";
        document.getElementById("adminPassword").value = "";
        window.location.href = "admin.html";
    }
}
