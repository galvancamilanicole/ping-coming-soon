window.onload = function(){
    let form = document.querySelector("form");
    let inputFirstName = document.querySelector(".first-name");
    let inputLastName = document.querySelector(".last-name");
    let inputEmail = document.querySelector(".email");
    let inputPassword = document.querySelector(".password");

    let errorIconName = document.querySelector(".error-icon-name");
    let errorIconLastName = document.querySelector(".error-icon-last-name");
    let errorIconEmail = document.querySelector(".error-icon-email");
    let errorIconPassword = document.querySelector(".error-icon-password");

    let regexEmail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

form.onsubmit = (event) =>{
    let errors = [];
    
    let errorName = document.querySelector(".error-msg-first-name");
    let errorLastName = document.querySelector(".error-msg-last-name");
    let errorEmail = document.querySelector(".error-msg-email");
    let errorPassword = document.querySelector(".error-msg-password");

    function setError (errorMsg, message, icon, input){
        errorMsg.innerText = message;
        input.removeAttribute("placeholder");
        icon.style.display = "inline";
        input.style.border = "2px solid hsl(0, 100%, 74%)"
    }

    function setOk (errorMsg, icon, input){
        errorMsg.innerText = "";
        icon.style.display = "none";
        input.style.border = "1px solid hsl(246, 25%, 77%)";
    }

    // First Name
    if(inputFirstName.value == ""){
        errors.push("First Name should not be empty")
        setError(errorName, "First Name should not be empty", errorIconName, inputFirstName);
    }
    inputFirstName.addEventListener("change",()=>{
        if(this.value != ""){
            setOk(errorName, errorIconName, inputFirstName);
        }
    });

    // Last Name
    if(inputLastName.value == ""){
        errors.push("Last Name should not be empty");
        setError(errorLastName, "Last Name should not be empty", errorIconLastName, inputLastName);
    }
    inputLastName.addEventListener("change",()=>{
        if(this.value != ""){
            setOk(errorLastName, errorIconLastName, inputLastName);
        }
    });

    // Email
    if(inputEmail.value == ""){
        errors.push("Email should not be empty");
        setError(errorEmail, "Email should not be empty", errorIconEmail, inputEmail);
    }
    else if (!(regexEmail.test(inputEmail.value))){
        errors.push("This is not an email");
        setError(errorEmail, "Looks like this is not an email", errorIconEmail, inputEmail);
        inputEmail.style.color = "hsl(0, 100%, 74%)";
    }
    else{
        inputEmail.style.color = "hsl(248, 32%, 49%)"
        setOk(errorEmail, errorIconEmail, inputEmail);
    };

    inputEmail.addEventListener("change",()=>{
        if(regexEmail.test(inputEmail.value)){
            inputEmail.style.color = "hsl(248, 32%, 49%)"
            setOk(errorEmail, errorIconEmail, inputEmail);
        }else{
            errors.push("This is not an email");
            setError(errorEmail, "Looks like this is not an email", errorIconEmail, inputEmail);
            inputEmail.style.color = "hsl(0, 100%, 74%)";
        }
    });

    // Password
    if(inputPassword.value == ""){
        errors.push("Password should not be empty");
        setError(errorPassword, "Password should not be empty", errorIconPassword, inputPassword);
    }
    inputPassword.addEventListener("change",()=>{
        if(this.value != ""){
            setOk(errorPassword, errorIconPassword, inputPassword);
        }
    });


    if(errors.length > 0){
        event.preventDefault();
        console.log(errors);
    }else{
        form.submit();
    }


}
}

