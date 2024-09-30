var userInput; // a type you shouldn't use all the time but it is better than any
var userName;
userInput = 5;
userInput = "test";
// userName = userInput; // error
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
