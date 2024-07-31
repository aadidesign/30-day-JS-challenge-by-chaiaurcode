
// Task 9: Validate a simple password
const validatePassword = (password) => {
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password);
}

// Task 10: Validate a URL
const validateURL = (url) => {
    return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(url);
}
