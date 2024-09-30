let userInput: unknown; // a type you shouldn't use all the time but it is better than any
let userName: string;

userInput = 5;
userInput = "test";
// userName = userInput; // error
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
