const name = document.getElementById("name");
const email = document.getElementById("email");
const title = document.getElementById("title");
const message = document.getElementById("message");
const form = document.getElementById("form");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", submitForm);

function submitForm(e) {
  if (
    name.value.length > 15 &&
    email.value.includes("@") &&
    message.value.length >= 20
  ) {
    alert("Details added");
  } else {
    showError("please check details provided");
  }

  e.preventDefault();
}

function showError(error) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "error";

  errorDiv.appendChild(document.createTextNode(error));

  //  errorMessage.appendChild(errorDiv);
  const inputs = document.getElementById("inputs");

  form.insertBefore(errorDiv, inputs);

  setTimeout(clearError, 1000);

  //  console.log(errorDiv);
}
function clearError() {
  document.querySelector(".error").remove();
}
