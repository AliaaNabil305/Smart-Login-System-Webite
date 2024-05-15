var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword");
var login = document.getElementById("login");
var textShown = document.getElementById("textShown");


var accounts;


if(localStorage.getItem('myaccounts') !==null){
    accounts = JSON.parse(localStorage.getItem('myaccounts'));
}
else{
    accounts = [];
}
var checkFound=false;
var globalIndex;
function userLogin(){
    for (let i = 0; i < accounts.length; i++) {
        if(accounts[i].useremail==userEmail.value && accounts[i].userpassword==userPassword.value){
            checkFound=true;
            globalIndex=i;
            break;
        }
    }
    if(!checkFound)
    {
        textShown.textContent = "incorrect email or password";
        textShown.style.color = "red";
    }
    else
    {
        checkFound = false;
        localStorage.setItem("name" , accounts[globalIndex].username);
        window.location.href = "/site/index.html";
    }
}