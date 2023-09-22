

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform validation (you can add more checks)
    if (username === "" || password === "") {
        document.getElementById("errorMessage").textContent = "Please fill in all fields.";
        return;
    }

    try {
        // Here, you can add code to authenticate the user.
        // For the sake of this example, let's assume successful login and redirection.
        alert("Login Successful!"); // Replace this with actual login logic
        window.location.href = "blank.html"; // Redirect to another page
    } catch (error) {
        document.getElementById("errorMessage").textContent = "An error occurred: " + error.message;
    } finally {
        // You can add cleanup or other code here if needed.
    }
});
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const showPasswordCheckbox = document.getElementById("showPassword");

const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");

// Add input event listeners for real-time validation
usernameInput.addEventListener("input", validateUsername);
passwordInput.addEventListener("input", validatePassword);

// Add change event listener for password visibility toggle
showPasswordCheckbox.addEventListener("change", togglePasswordVisibility);

function validateUsername() {
    const username = usernameInput.value;

    if (username.length < 8) {
        usernameError.textContent = "Username must have at least 8 characters.";
    } else if (!/[a-z]/.test(username) || !/[A-Z]/.test(username)) {
        usernameError.textContent = "Username must contain both uppercase and lowercase letters.";
    } else {
        usernameError.textContent = "";
    }
}

function validatePassword() {
    const password = passwordInput.value;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);

    if (!hasUppercase || !hasLowercase) {
        passwordError.textContent = "Password must contain both uppercase and lowercase letters.";
    }
    else if (!/\d/.test(password)) {
        passwordError.textContent = "Password must contain at least one number.";
    } else if (!/[!@#$%^&*]/.test(password)) {
        passwordError.textContent = "Password must contain at least one symbol.";
    }  else {
        passwordError.textContent = "";
    }
}

function togglePasswordVisibility() {
    if (showPasswordCheckbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}