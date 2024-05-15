var userName=document.getElementById("username")
var userEmail=document.getElementById("userEmail")
var userPassword=document.getElementById("userPassword")

var accounts;


if(localStorage.getItem('myaccounts') !==null){
    accounts = JSON.parse(localStorage.getItem('myaccounts'));
}
else{
    accounts = [];
}
var checkExists=false;

function addAccount(){
    if ( userName.value === "" || userEmail.value === "" || userPassword.value === "" ) {
        textShown.textContent="All inputs are required"
        textShown.style.color="red"
    } 
    else{
        for (let i = 0; i < accounts.length; i++) {
            if(accounts[i].useremail==userEmail.value){
                checkExists=true;
                break;
            }
        }
        if(checkExists) {
            textShown.textContent="Email already exists"
            textShown.style.color="red"
            checkExists=false;
        }
        else{
            var account={
                username:userName.value,
                useremail:userEmail.value,
                userpassword:userPassword.value
            }
            accounts.push(account)
            localStorage.setItem('myaccounts',JSON.stringify(accounts));
            textShown.textContent="success"
            textShown.style.color="green"
            clearForm()
        }

    }
    
}

function clearForm(){
    userName.value="",
    userEmail.value= "",
    userPassword.value=""
}

