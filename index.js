const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

document.querySelector(".submit-btn").addEventListener("click", function() {
    if (firstName.value === "" && !firstName.classList.contains("error")) { 
        firstName.placeholder = "";
        firstName.classList.add("error");
        firstName.classList.add("firstName");
        const errorMessage = document.createElement("p");
        errorMessage.classList.add("errorMessage");
        errorMessage.textContent = "First Name cannot be empty";
        firstName.after(errorMessage);
    } 
    if (lastName.value === "" && !lastName.classList.contains("error")) { 
        lastName.placeholder = "";
        lastName.classList.add("error");
        const errorMessage = document.createElement("p");
        errorMessage.classList.add("errorMessage");
        errorMessage.textContent = "Last Name cannot be empty";
        lastName.after(errorMessage);
    } 
    if ( !(/^\w+([\.-]?\w+)*@\w+\.com+$/.test(email.value))  && !email.classList.contains("error")) { 
        email.placeholder = "email@example/com";
        email.style.setProperty("--c", "hsl(0, 100%, 74%)");
        email.classList.add("error");
        const errorMessage = document.createElement("p");
        errorMessage.classList.add("errorMessage");
        errorMessage.textContent = "Looks like this is not an email";
        email.after(errorMessage);
    } 
    if (password.value === "" && !password.classList.contains("error")) { 
        password.placeholder = "";
        password.classList.add("error");
        const errorMessage = document.createElement("p");
        errorMessage.classList.add("errorMessage");
        errorMessage.textContent = "Password cannot be empty";
        password.after(errorMessage);
    } 
});

firstName.addEventListener("click", function() {
    if (firstName.classList.contains("error")) {
        firstName.classList.remove("error");
        const errorMessage = firstName.nextElementSibling;
        errorMessage.remove();
        firstName.placeholder = "First Name";
    }
});

lastName.addEventListener("click", function() {
    if (lastName.classList.contains("error")) {
        lastName.classList.remove("error");
        const errorMessage = lastName.nextElementSibling;
        errorMessage.remove();
        lastName.placeholder = "Last Name";
    }
});

email.addEventListener("click", function() {
    if (email.classList.contains("error")) {
        email.classList.remove("error");
        const errorMessage = email.nextElementSibling;
        errorMessage.remove();
        email.placeholder = "Email address";
        email.style.setProperty("--c", "");
    }
});

password.addEventListener("click", function() {
    if (password.classList.contains("error")) {
        password.classList.remove("error");
        const errorMessage = password.nextElementSibling;
        errorMessage.remove();
        password.placeholder = "Password";
    }
});