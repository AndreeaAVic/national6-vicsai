const inputName = document.getElementById("name");
const inputPassword = document.getElementById("password");

const PASSWORD_CHECK = "123";

document.getElementById("login").addEventListener("click", () => {
  const name = inputName.value;
  const password = inputPassword.value;

  if (name && password === PASSWORD_CHECK) {
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
    window.location = "/";
  }
});