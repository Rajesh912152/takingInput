let inputElement = document.getElementById("inputValue");
let paraText = document.getElementById("signInText");

function signIn() {
    let inputValue = inputElement.value;
    let updatedValue = "Hi " + inputValue + ", your account is verified...";
    paraText.textContent = updatedValue;
}