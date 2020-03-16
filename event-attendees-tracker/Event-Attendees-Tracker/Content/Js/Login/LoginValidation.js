function funValid() {
    var UserName = document.getElementById("username").value;
    var Password = document.getElementById("password").value;
    re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (UserName == "") {
        document.getElementById("UsernameSpan").innerHTML = "Enter User Name";
        return false;
    }
    else if (!re.test(document.getElementById("username").value)) {
        document.getElementById("UsernameSpan").innerHTML = "Enter valid Email ID";
        return false;
    }
    else {
        document.getElementById("UsernameSpan").innerHTML = "";
    }
    re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (Password == "") {
        document.getElementById("PassworddSpan").innerHTML = "Enter password ";
        return false;
    }
    else if (!re.test(Password)) {
        document.getElementById("PassworddSpan").innerHTML = "password must atleast contain a uppercase,lower case,special character,digit and should have min 6 to max 16 characters";
        return false;
    }
    else {
        document.getElementById("PassworddSpan").innerHTML = null;
    }
    return true;
}