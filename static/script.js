function hide_message(event) {
    e = window.event
    e.target.parentNode.style.display = 'none'
}

function email_typing() {
    var input_email = document.getElementById('email_register')
    var input_email_confirmation = document.getElementById('email_register_confirmation')
    var warning = document.getElementById('warning_email_confirmation')

    if (input_email_confirmation.value !== "") {
        if (input_email_confirmation.value !== input_email.value) {
            warning.style.display= 'block'
            input_email.className= 'form-control  border-2 border-danger'
            input_email_confirmation.className= 'form-control  border-2 border-danger'
        }
        else {
            warning.style.display= 'none'
            input_email.className= 'form-control border-2 border-success'
            input_email_confirmation.className= 'form-control border-2 border-success'
        }
    }
    else if (input_email_confirmation.value == "" && input_email.value == "") {
        warning.style.display= 'none'
        input_email.className= 'form-control'
        input_email_confirmation.className= 'form-control'
    }
}

function email_confirmation_typing(){
    var input_email = document.getElementById('email_register')
    var input_email_confirmation = document.getElementById('email_register_confirmation')
    var warning = document.getElementById('warning_email_confirmation')
    warning.style.display= 'block'
    input_email.className= 'form-control  border-2 border-danger'
    input_email_confirmation.className= 'form-control  border-2 border-danger'

    if (input_email.value === input_email_confirmation.value && input_email.value !== ""){
        warning.style.display= 'none'
        input_email.className= 'form-control border-2 border-success'
        input_email_confirmation.className= 'form-control border-2 border-success'

    }
    else if (input_email_confirmation.value == "" && input_email.value == "") {
        warning.style.display= 'none'
        input_email.className= 'form-control'
        input_email_confirmation.className= 'form-control'
    }
}

function username_typing() {
    var input_username = document.getElementById('username_register')
    var warning = document.getElementById('warning_username')
    if(input_username.value.length < 6) {
        input_username.className= 'form-control border-2 border-danger'
        warning.style.display= 'block'
    }
    else {
        input_username.className= 'form-control border-2 border-success'
        warning.style.display= 'none'
    }
}

function password_typing() {
    var input_password = document.getElementById('password_register')
    var input_password_confirmation = document.getElementById('password_register_confirmation')
    var warning = document.getElementById('warning_password_confirmation')

    if (input_password_confirmation.value !== "") {
        if (input_password.value !== input_password_confirmation.value) {
            warning.style.display= 'block'
            input_password.className= 'form-control  border-2 border-danger'
            input_password_confirmation.className= 'form-control  border-2 border-danger'
        }
        else {
            warning.style.display= 'none'
            input_password.className= 'form-control border-2 border-success'
            input_password_confirmation.className= 'form-control border-2 border-success'
        }
    }
    else if (input_password_confirmation.value == "" && input_password.value == "") {
        warning.style.display= 'none'
        input_password.className= 'form-control'
        input_password_confirmation.className= 'form-control'
    }
}

function password_confirmation_typing() {
    var input_password = document.getElementById('password_register')
    var input_password_confirmation = document.getElementById('password_register_confirmation')
    var warning = document.getElementById('warning_password_confirmation')
    warning.style.display= 'block'
    input_password.className= 'form-control  border-2 border-danger'
    input_password_confirmation.className= 'form-control  border-2 border-danger'

    if (input_password.value === input_password_confirmation.value && input_password.value !== "") {
        warning.style.display= 'none'
        input_password.className= 'form-control  border-2 border-success'
        input_password_confirmation.className= 'form-control  border-2 border-success'
    }
    else if (input_password_confirmation.value == "" && input_password.value == "") {
        warning.style.display= 'none'
        input_password.className= 'form-control'
        input_password_confirmation.className= 'form-control'
    }
}