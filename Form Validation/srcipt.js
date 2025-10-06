const fname = document.getElementById("fname");
const email = document.getElementById("email");
const lname = document.getElementById("lname");
const password = document.getElementById("password");
const cnfpwd = document.getElementById("cnfpwd");
const phone = document.getElementById("phone");


// error
const fnameErr = document.getElementById("fnameErr");
const emailErr = document.getElementById("emailErr");
const lnameErr = document.getElementById("lnameErr");
const passwordErr = document.getElementById("errpassword");
const cnfpwdErr = document.getElementById("errorcnfpwd");
const phonerr = document.getElementById("phonerr");





const firstName = new RegExp("[A-Z][a-zA-Z]*");
const regEmail = RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
const regPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@.#$!%*?&])[A-Za-z\\d@.#$!%*?&]{8,15}$");
const regPhone = new RegExp("^[0-9]{10}$");

phone.addEventListener("keyup",function(){
    let data = phone.value;
    console.log("Data in phone field",data);
    if(data.length<1){
        phonerr.innerText = " * Required Field";
    }
    else if(!regPhone.test(data)){
        phonerr.innerText = " * Invalid Phone Number";
    }
    else{
        phonerr.innerHTML = "<p style='color:green'>All Correct</p>";
    }    
})


fname.addEventListener("keyup",function(){
    let data = fname.value;
    console.log("Data in fname field",data);
    if (data.length<1){
        console.log("Required Field");
        fnameErr.innerText = " * Required Field";
    }
    else if(!firstName.test(data)){
        fnameErr.innerText = " * Invalid First Name";
    }
    else{
        fnameErr.innerHTML = "<p style='color:green'>All Correct</p>";
    }
})

email.addEventListener("keyup",function(){
    let data = email.value;
    console.log("Data in email field",data);

    if(data.length<1){
        emailErr.innerText = " * Required Field";
    }
    else if(!regEmail.test(data)){
        emailErr.innerText = " * Invalid Email";
    }
    else{
        emailErr.innerHTML = "<p style='color:green'>All Correct</p>";
    }
    
})

lname.addEventListener("keyup",function(){
    let data = lname.value;
    console.log("Data in lname field",data);
})

password.addEventListener("keyup",function(){
    // At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
    let passworddata = password.value;
    console.log("Data in password field",passworddata);
    if(passworddata.length<1){
        passwordErr.innerText = " * Required Field";
    }
    else if(!regPassword.test(passworddata)){
        passwordErr.innerText = " * Invalid Password";
    }
    else{
        passwordErr.innerHTML = "<p style='color:green'>All Correct</p>";
    }
})

cnfpwd.addEventListener("keyup",function(){
    let password = document.getElementById("password").value;
    let cnfpwddata = cnfpwd.value;
    console.log("Data in cnfpwd field",cnfpwddata);

    if(password === cnfpwddata){
        cnfpwdErr.innerHTML= "<p style='color:green'>Password Matched</p>";
    }else{
        cnfpwdErr.innerText = "Password Not Matched";
    }
})