const password=document.getElementById("pass")
const confirmPass=document.getElementById("confirmpass")


password.addEventListener("input",function(e){
    if(password.value !== confirmPass.value){
        password.setCustomValidity("* Passwords do not match")
        password.classList.add("error")
        confirmPass.classList.add("error")
    }else{
        password.classList.remove("error")
        confirmPass.classList.remove("error")
        password.setCustomValidity("")
    }
})
confirmPass.addEventListener("input",function(e){
    if(confirmPass.value !== password.value){
        password.setCustomValidity("* Passwords do not match")
        password.classList.add("error")
        confirmPass.classList.add("error")
    }else{
        password.classList.remove("error")
        confirmPass.classList.remove("error")
        password.setCustomValidity("")
    }
})