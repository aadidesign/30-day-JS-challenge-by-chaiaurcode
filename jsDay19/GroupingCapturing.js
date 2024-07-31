
// Task 5: Capture area code, central office code, and line number from a phone number
const phoneCapture = (str) => str.match(/\((\d{3})\) (\d{3})-(\d{4})/);

// Task 6: Capture username and domain from an email address
const emailCapture = (str) => str.match(/(\w+)@(\w+\.\w+)/);
