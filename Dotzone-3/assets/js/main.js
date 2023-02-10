const toggle = document.getElementById('toggleDark');
const root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
const primaryColor = root.style.getPropertyValue('--primary-color');
const secondaryColor = root.style.getPropertyValue('--secondary-color');
const tertiaryColor = root.style.getPropertyValue('--tertiary-color');
const quaternaryColor = root.style.getPropertyValue('--quaternary-color');
const th8Color = root.style.getPropertyValue('--8th-color');
const th9Color = root.style.getPropertyValue('--9th-color');
const th10Color = root.style.getPropertyValue('--10th-color');



toggle.addEventListener('click', function () {
    this.classList.toggle('bi-brightness-high-fill')
    if (this.classList.toggle('bi-moon')) {
        root.style.setProperty('--primary-color', '#ffffff')
        root.style.setProperty('--secondary-color', '#0C4A6E')
        root.style.setProperty('--tertiary-color', '#3B6C89')
        root.style.setProperty('--quaternary-color', '#000000')
        root.style.setProperty('--8th-color', '#ffffff')
        root.style.setProperty('--9th-color', '#E0F2FE')
        root.style.setProperty('--10th-color', '#000000')
        document.querySelectorAll('.DOTZONE3').forEach(function (element) {
            element.style.color = 'rgb(3 105 161)';
        })
    } else {
        root.style.setProperty('--primary-color', primaryColor)
        root.style.setProperty('--secondary-color', secondaryColor )
        root.style.setProperty('--tertiary-color', tertiaryColor)
        root.style.setProperty('--quaternary-color', quaternaryColor)
        root.style.setProperty('--8th-color', th8Color)
        root.style.setProperty('--9th-color', th9Color)
        root.style.setProperty('--10th-color', th10Color)
        document.querySelectorAll('.DOTZONE3').forEach(function (element) {
            element.style.color = 'white';
        })
    }
})

var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var passPattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

// login-form
var loginForm = document.getElementById("login-form");
var logintextEmail = document.getElementById("login-email-text");
var logintextPass = document.getElementById("login-pass-text");
var loginEmailinput = document.getElementsByClassName("login-email-input")
var loginPassinput = document.getElementsByClassName("login-password-input");
var loginbutton = document.getElementsByTagName("button")[2];


// email check
for (var i = 0; i < loginEmailinput.length; i++) {
    loginEmailinput[i].addEventListener('keyup', function () {
        var loginemail = document.getElementById("login-email-input").value;
        if (loginemail.match(emailPattern)) {
            loginForm.classList.add("valid");
            loginForm.classList.remove("invalid");
            logintextEmail.innerHTML = "Accepted";
            logintextEmail.style.color = "green";
        } else {
            loginForm.classList.remove("valid");
            loginForm.classList.add("invalid");
            logintextEmail.innerHTML = "Email is required";
            logintextEmail.style.color = "red";
        }
        if (loginemail == "") {
            loginForm.classList.remove("valid");
            loginForm.classList.add("invalid");
            logintextEmail.innerHTML = "Email is required";
            logintextEmail.style.color = "red";
        }
    })
}
loginbutton.addEventListener('click', function (event) {
    event.preventDefault();
    var loginemail = document.getElementById("login-email-input").value;
        if (loginemail.match(emailPattern)) {
            loginForm.classList.add("valid");
            loginForm.classList.remove("invalid");
            logintextEmail.innerHTML = "Accepted";
            logintextEmail.style.color = "green";
        } else {
            loginForm.classList.remove("valid");
            loginForm.classList.add("invalid");
            logintextEmail.innerHTML = "Email is required";
            logintextEmail.style.color = "red";
        }
        if (loginemail == "") {
            loginForm.classList.remove("valid");
            loginForm.classList.add("invalid");
            logintextEmail.innerHTML = "Email is required";
            logintextEmail.style.color = "red";
        }
})
// email check

// pass check
for (var i = 0; i < loginPassinput.length; i++) {
    loginPassinput[i].addEventListener('keyup', function () {
        var loginpass = document.getElementById("login-password-input").value;
        if (loginpass.match(passPattern)) {
            loginForm.classList.add("valid");
            loginForm.classList.remove("invalid");
            logintextPass.innerHTML = "Accepted";
            logintextPass.style.color = "green";
        } else {
            loginForm.classList.remove("valid");
            loginForm.classList.add("invalid");
            logintextPass.innerHTML = "Password is required (enter 1 character and 1 capital letter at least)";
            logintextPass.style.color = "red";
        }
        if (loginpass == "") {
            loginForm.classList.remove("valid");
            loginForm.classList.add("invalid");
            logintextPass.innerHTML = "Password is required (enter 1 character and 1 capital letter at least)";
            logintextPass.style.color = "red";
        }
    })
    }
loginbutton.addEventListener('click', function (event) {
    event.preventDefault();
    var loginpass = document.getElementById("login-password-input").value;
    if (loginpass.match(passPattern)) {
        loginForm.classList.add("valid");
        loginForm.classList.remove("invalid");
        logintextPass.innerHTML = "Accepted";
        logintextPass.style.color = "green";
    } else {
        loginForm.classList.remove("valid");
        loginForm.classList.add("invalid");
        logintextPass.innerHTML = "Password is required (enter 1 character and 1 capital letter at least)";
        logintextPass.style.color = "red";
    }
    if (loginpass == "") {
        loginForm.classList.remove("valid");
        loginForm.classList.add("invalid");
        logintextPass.innerHTML = "Password is required (enter 1 character and 1 capital letter at least)";
        logintextPass.style.color = "red";
    }
})
// pass check

//login-form



// register-form
var registerForm = document.getElementById("register-form");
var registertextEmail = document.getElementById("register-email-text");
var registertextPass = document.getElementById("register-pass-text");
var registertextConfPass = document.getElementById("register-confpass-text");
var registerEmailinput = document.getElementsByClassName("register-email-input");
var registerPassinput = document.getElementsByClassName("register-pass-input");
var registerConfPassinput = document.getElementsByClassName("register-confpass-input");
var registerbutton = document.getElementsByTagName("button")[2];

// Email

for (var i = 0; i < registerEmailinput.length; i++) {
    registerEmailinput[i].addEventListener('keyup', function () {
        var registeremail = document.getElementById("register-email-input").value;
        if (registeremail.match(emailPattern)) {
            registerForm.classList.add("valid");
            registerForm.classList.remove("invalid");
            registertextEmail.innerHTML = "Accepted";
            registertextEmail.style.color = "green";
        } else {
            registerForm.classList.remove("valid");
            registerForm.classList.add("invalid");
            registertextEmail.innerHTML = "Email is required";
            registertextEmail.style.color = "red";
        }
        if (registeremail == "") {
            registerForm.classList.remove("valid");
            registerForm.classList.add("invalid");
            registertextEmail.innerHTML = "Email is required";
            registertextEmail.style.color = "red";
        }
    })
}


registerbutton.addEventListener('click', function (event) {
    event.preventDefault();
    var registeremail = document.getElementById("register-email-input").value;
        if (registeremail.match(emailPattern)) {
            registerForm.classList.add("valid");
            registerForm.classList.remove("invalid");
            registertextEmail.innerHTML = "Accepted";
            registertextEmail.style.color = "green";
        } else {
            registerForm.classList.remove("valid");
            registerForm.classList.add("invalid");
            registertextEmail.innerHTML = "Email is required";
            registertextEmail.style.color = "red";
        }
        if (registeremail == "") {
            registerForm.classList.remove("valid");
            registerForm.classList.add("invalid");
            registertextEmail.innerHTML = "Email is required";
            registertextEmail.style.color = "red";
        }
})

// Password

for (var i = 0; i < registerPassinput.length; i++) {
    registerPassinput[i].addEventListener('keyup', function () {
        var registerpass = document.getElementById("register-pass-input").value;
        if (registerpass.match(passPattern)) {
            registerForm.classList.add("valid");
            registerForm.classList.remove("invalid");
            registertextPass.innerHTML = "Accepted";
            registertextPass.style.color = "green";
        } else {
            registerForm.classList.remove("valid");
            registerForm.classList.add("invalid");
            registertextPass.innerHTML = "Password is required (enter 1 character and 1 capital letter at least)";
            registertextPass.style.color = "red";
        }
        if (registerpass == "") {
            registerForm.classList.remove("valid");
            registerForm.classList.add("invalid");
            registertextPass.innerHTML = "Password is required (enter 1 character and 1 capital letter at least)";
            registertextPass.style.color = "red";
        }
    })
}
registerbutton.addEventListener('click', function (event) {
    event.preventDefault();
    var registerpass = document.getElementById("register-pass-input").value;
        if (registerpass.match(passPattern)) {
            registerForm.classList.add("valid");
            registerForm.classList.remove("invalid");
            registertextPass.innerHTML = "Accepted";
            registertextPass.style.color = "green";
        } else {
            registerForm.classList.remove("valid");
            registerForm.classList.add("invalid");
            registertextPass.innerHTML = "Password is required (enter 1 character and 1 capital letter at least)";
            registertextPass.style.color = "red";
        }
        if (registerpass == "") {
            registerForm.classList.remove("valid");
            registerForm.classList.add("invalid");
            registertextPass.innerHTML = "Password is required (enter 1 character and 1 capital letter at least)";
            registertextPass.style.color = "red";
        }
})
// Confirm-Password

for (var i = 0; i < registerConfPassinput.length; i++) {
    registerConfPassinput[i].addEventListener('keyup', function () {
        var registerpass = document.getElementById("register-pass-input").value
        var registerconfpass = document.getElementById("register-confpass-input").value;
        if (registerconfpass == registerpass) {
            registerForm.classList.add("valid");
            registerForm.classList.remove("invalid");
            registertextConfPass.innerHTML = "Accepted";
            registertextConfPass.style.color = "green";
        } else {
            registerForm.classList.remove("valid");
            registerForm.classList.add("invalid");
            registertextConfPass.innerHTML = "Please write the same password";
            registertextConfPass.style.color = "red";
        }
        if (registerconfpass == "") {
            registerForm.classList.remove("valid");
            registerForm.classList.add("invalid");
            registertextConfPass.innerHTML = "Password is required (enter 1 character and 1 capital letter at least)";
            registertextConfPass.style.color = "red";
        }
    })
}
registerbutton.addEventListener('click', function (event) {
    event.preventDefault();
    var registerpass = document.getElementById("register-pass-input").value
        var registerconfpass = document.getElementById("register-confpass-input").value;
        if (registerconfpass == registerpass) {
            registerForm.classList.add("valid");
            registerForm.classList.remove("invalid");
            registertextConfPass.innerHTML = "Accepted";
            registertextConfPass.style.color = "green";
        } else {
            registerForm.classList.remove("valid");
            registerForm.classList.add("invalid");
            registertextConfPass.innerHTML = "Please write the same password";
            registertextConfPass.style.color = "red";
        }
        if (registerconfpass == "") {
            registerForm.classList.remove("valid");
            registerForm.classList.add("invalid");
            registertextConfPass.innerHTML = "Password is required (enter 1 character and 1 capital letter at least)";
            registertextConfPass.style.color = "red";
        }
})
// register-form