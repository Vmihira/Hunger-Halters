function validateForm(formType) {
    var username = document.getElementById(formType + '_username').value;
    var password = document.getElementById(formType + '_password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Additional validation logic can be added here

    return true;
}
