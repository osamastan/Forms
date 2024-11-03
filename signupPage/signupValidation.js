function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    const usernamePattern = /^[a-zA-Z0-9_-]{3,20}$/;
    if (!usernamePattern.test(username)) {
        alert("Username must be 3-20 characters, alphanumeric, and can contain underscores or hyphens.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be 8-20 characters, include uppercase, lowercase, number, and special character.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    const usedUsernames = ["exampleUser", "sample123"];
    const usedEmails = ["test@example.com", "sample@domain.com"];
    if (usedUsernames.includes(username)) {
        alert("Username is already taken. Please choose another.");
        return false;
    }
    if (usedEmails.includes(email)) {
        alert("Email is already in use. Please choose another.");
        return false;
    }

    return true;
}

document.getElementById("username").addEventListener("input", function() {
    const usernamePattern = /^[a-zA-Z0-9_-]{3,20}$/;
    this.setCustomValidity(usernamePattern.test(this.value) ? "" : "Username must be 3-20 characters, alphanumeric, and can contain underscores or hyphens.");
});

document.getElementById("email").addEventListener("input", function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.setCustomValidity(emailPattern.test(this.value) ? "" : "Please enter a valid email address.");
});

document.getElementById("password").addEventListener("input", function() {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    this.setCustomValidity(passwordPattern.test(this.value) ? "" : "Password must be 8-20 characters, include uppercase, lowercase, number, and special character.");
});

document.getElementById("confirm_password").addEventListener("input", function() {
    this.setCustomValidity(this.value === document.getElementById("password").value ? "" : "Passwords do not match.");
});
