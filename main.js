
var userNameInputSave;
var passwordInputSave;

function visitLogin()
{
    window.location = 'login.html';
}

function getLoginData()
{
    userNameInputSave = document.getElementById("userNameInput").value;
    passwordInputSave = document.getElementById("passwordInput").value;
}