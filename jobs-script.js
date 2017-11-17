function verifyForm() {
    var firstName = document.getElementById("firstname").value.length;
    var lastName = document.getElementById("lastname").value.length;
    var emailVerify = document.getElementById("verifyemail").value;
    if (firstName === 0 || lastName === 0) {
        alert("Please enter your full name!");
        return false;
    } else if (emailVerify.indexOf(" ") !== -1 || emailVerify.indexOf("@") === -1) {
        alert("Please enter a valid email address");
        return false;
    } 

}