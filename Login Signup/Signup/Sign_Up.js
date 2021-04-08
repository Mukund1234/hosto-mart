function Signup() {
    // alert("welcome!!!");

    const Form = document.getElementById("SignUp");
    const fname = Form.fname.value;
    const mname = Form.mname.value;
    const lname = Form.lname.value;
    const dob = Form.dob.value;

    const Mobile = Form.Mobile.value;
    const email = Form.email.value;
    const pwd = Form.pwd.value;
    const cpwd = Form.cpwd.value;



    if (pwd === cpwd) {
        alert("Registration Sucessful");
        localStorage.setItem('name', fname);
        localStorage.setItem('mname', mname);
        localStorage.setItem('lname', lname);
        localStorage.setItem('dob', dob);

        localStorage.setItem('Mobile', Mobile);
        localStorage.setItem('email', email);
        localStorage.setItem('pwd', pwd);
        window.open("http://127.0.0.1:5501/Login%20Signup/Login/Login.html");

    } else {
        alert("User Id or Passward is Invalid");
    }
}