window.onload = ()=>{
    let form = document.querySelector("form");
    let inputEmail = document.querySelector(".emailInput");
    let errorEmail = document.querySelector(".error-msg");

    let regexEmail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    form.onsubmit = (event) =>{
        let errors = [];

        if(inputEmail.value == ""){
            errors.push("Email should not be empty");
            errorEmail.classList.add("error-msg-invalid");
            errorEmail.innerText = "Email should not be empty";
            inputEmail.removeAttribute("placeholder");
            inputEmail.style.border = "1px solid hsl(354, 100%, 66%)";
        }
        else if (!(regexEmail.test(inputEmail.value))){
            errors.push("This is not an email");
            errorEmail.classList.add("error-msg-invalid");
            errorEmail.innerText = "Please provide a valid email address";
            inputEmail.removeAttribute("placeholder");
            inputEmail.style.border = "1px solid hsl(354, 100%, 66%)";
        }
        else{
            inputEmail.style.color = "hsl(248, 32%, 49%)";
            errorEmail.innerText = "";
            inputEmail.style.border = "1px solid hsl(246, 25%, 77%)";
        };

    if(errors.length > 0){
        event.preventDefault();
        console.log(errors);
    }else{
        form.submit();
    }

    }
}