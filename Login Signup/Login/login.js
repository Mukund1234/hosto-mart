function myFunction() {
    const loginForm = document.getElementById("login");

    const username = loginForm.uid.value;
    const password = loginForm.pwd.value;

    var storedId = localStorage.getItem('email');
    var storedPwd = localStorage.getItem('pwd');

    if (username === storedId && password === storedPwd) {
        alert("You have successfully logged in.");

        window.open("https://www.google.com");
    } else {
        alert("User Id or Passward is Invalid");
    }


}