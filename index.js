console.log('JavaScript - Cookies & LocalStorage');

console.log(document.cookie);

if (!document.cookie) {
  window.location = "/login.html";
}

if (document.cookie) {
  const cookiesElements = document.cookie.split("; ");
  console.log(cookiesElements);
  const cookieObj = {};
  for (const element of cookiesElements) {
    const [key, value] = element.split("=");
    cookieObj[key] = value;
    console.log(key, value);
  }
  console.log(cookieObj);

  if (!cookieObj.name || !cookieObj.password) {
    window.location = "/login.html";
  }
}

document.getElementById("logout").addEventListener("click", () => {
  document.cookie = "password=123; ; Expires=Thu, 31 Oct 1990 07:28:00 GMT;";
  document.cookie = "name=123; ; Expires=Thu, 31 Oct 1990 07:28:00 GMT;";
  window.location = "/";
});