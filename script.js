function validEmail(str) {
    // Regular expression for validating an Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the string against the regular expression
    return emailRegex.test(str);
}
 
// Example usage:
const str = prompt("Enter an email address.");
alert(validEmail(str));
