import {executeStatement} from "\sqlservice2.js";

var userNameInputSave;
var passwordInputSave;

function visitLogin()
{
    window.location = 'login.html';
    executeStatement();
}

function getLoginData()
{
    userNameInputSave = document.getElementById("userNameInput").value;
    passwordInputSave = document.getElementById("passwordInput").value;
}