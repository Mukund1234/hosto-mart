function User_Name() {
    alert("welcome!!!");
    document.write(name);
}

function come() {

    var storedUser = localStorage.getItem('name');
    document.getElementById("user").innerHTML = storedUser;

}