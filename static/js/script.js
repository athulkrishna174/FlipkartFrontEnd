let loginBox = document.querySelector("#box")
let bgBlur = document.querySelector("#blur")

document.querySelector("#loginBtn").addEventListener("click", () => {
    
    loginBox.style.display = 'block'
    bgBlur.style.display = 'block'

    document.login_form.phone.focus()
})

document.querySelector("#closeBtn").addEventListener("click", () => {
    loginBox.style.display = 'none'
    bgBlur.style.display = 'none'
    document.login_form.reset()
})


document.querySelector("#loginSubmit").addEventListener("click", (e) => {
    e.preventDefault()

    let phone = document.login_form.phone
    let password = document.login_form.password

    removeErrorMsg(".phone_error", phone)
    removeErrorMsg(".psw_error", password)

    if(phone.value.length <= 0){
        setErrorMsg("* Mobile number required!", ".phone_error", phone)
    }

    else if(!phoneNumValidate(phone.value)){
        setErrorMsg("* Enter Valid Mobile Number!", ".phone_error", phone)
    }

    else if(password.value.length <= 0){
        setErrorMsg("* Password required!", ".psw_error", password)

    }

    else if(!passwordValidate(password.value)){
        setErrorMsg("* Password length must be 6 or more!", ".psw_error", password)
    }
    else{
        loginBox.style.display = 'none'
        bgBlur.style.display = 'none'
        document.login_form.reset()
    } 
})

function setErrorMsg(msg, tag, input){
    let displayError = document.querySelector(tag)
    displayError.innerHTML = msg
    displayError.style.display = "block"
    input.setAttribute("id", "redBorder")
}

function removeErrorMsg(tag, input){
    document.querySelector(tag).style.display = "none"
    input.removeAttribute("id")
}


function phoneNumValidate(num){
    let phoneRegex = /^\d{10}$/
    return phoneRegex.test(num)
}

function passwordValidate(password){
    if(password.length >= 6) return true
    return false
}