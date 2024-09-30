let userInput: unknown; // a type you shouldn't use all the time but it is better than any
let userName: string;

userInput = 5;
userInput = "test";
// userName = userInput; // error
if (typeof userInput === "string") {
  userName = userInput;
}
