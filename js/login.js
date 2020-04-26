function password() {
    var testV = 1;
    var pass1 = prompt('Please input the password!','');
    while (testV < 3) {
        if (!pass1)
            history.go(-1);
        if (pass1 == "jhua0037") {
            break;
        }
        testV+=1;
        var pass1 =
            prompt('Password error!');
    }
    if (pass1!="password" & testV ==3)
        history.go(-1);
    return " ";
}
document.write(password());