function validateForm() {

    // Fetch inputs
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
    var error = document.getElementById("error");

    error.innerHTML = "";

    // Name validation
    if (name === "") {
        error.innerHTML = "Name is required";
        return false;
    }

    // Email validation
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
        error.innerHTML = "Invalid email format";
        return false;
    }

    // Password validation
    if (password.length < 6) {
        error.innerHTML = "Password must be at least 6 characters";
        return false;
    }

    // Age validation
    if (age < 18 || age === "") {
        error.innerHTML = "Age must be 18 or above";
        return false;
    }

    // Success
    alert("Registration successful!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);

    return true;
}