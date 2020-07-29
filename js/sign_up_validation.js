function resetForm() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var confirmEmail = document.getElementById("confirmEmail");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    lastName.style.backgroundColor = "white";
    firstName.style.backgroundColor = "white";
    email.style.backgroundColor = "white";
    confirmEmail.style.backgroundColor = "white";
    password.style.backgroundColor = "white";
    confirmPassword.style.backgroundColor = "white";
}
function validate() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var confirmEmail = document.getElementById("confirmEmail");
    var title = document.getElementById("title");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    var check = document.getElementById("check1");

    if (validName(lastName.value))
        lastName.style.backgroundColor = "white";
    else
        lastName.style.backgroundColor = "red";

    if (validName(firstName.value))
        firstName.style.backgroundColor = "white";
    else
        firstName.style.backgroundColor = "red";


    if (validEmail(email.value))
        email.style.backgroundColor = "white";
    else
        email.style.backgroundColor = "red";

    if (confirmEmail.value == email.value && confirmEmail.value != "")
        confirmEmail.style.backgroundColor = "white";
    else
        confirmEmail.style.backgroundColor = "red";

    if (validPassword(password.value))
        password.style.backgroundColor = "white";
    else
        password.style.backgroundColor = "red";

    if (confirmPassword.value == password.value && confirmPassword.value != "")
        confirmPassword.style.backgroundColor = "white";
    else
        confirmPassword.style.backgroundColor = "red";

    if (validName(lastName.value) && validName(firstName.value) && validEmail(email.value) && confirmEmail.value == email.value && validPassword(password.value) && confirmPassword.value == password.value && check.checked) {
        document.getElementById("mainForm").submit();
        document.write("Form submitted");
    }
}

function validName(str) {
    return !str.match(/[^A-Z_a-z]/) && str != "";
}

function validEmail(str) {
    return str.match(/\S+@\S+\.\S+/g) && str != "";
}

function validPassword(str) {
    if (str.length >= 8)
        if (str.match(/[A-Z_a-z]/) != null)
            if (str.match(/[^A-Z_a-z]/) != null)
                return true;
}