//variables
let name = document.querySelector('#name');
let labelName = document.querySelector('#labelName');
let validName = false

let login = document.querySelector('#login');
let labelLogin = document.querySelector('#labelLogin');
let validLogin = false

let pass = document.querySelector('#pass');
let labelPass = document.querySelector('#labelPass');
let validPass = false

let confPass = document.querySelector('#confPass');
let labelConfPass = document.querySelector('#labelConfPass');
let validConfPass = false

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

//end variables

name.addEventListener('keyup', ()=>{
    if(name.value.length <= 3){
        labelName.setAttribute('style', 'color: red');
        labelName.innerHTML = '<strong>FULL NAME * enter at least 3 characters </strong>'
        name.setAttribute('style', 'border-color: red');
        validName = false
    }else {
        labelName.setAttribute('style', 'color: green');
        labelName.innerHTML = 'FULL NAME'
        name.setAttribute('style', 'border-color: green');
        validName = true
    }
})

login.addEventListener('keyup', ()=>{
    if(login.value.length <= 4){
        labelLogin.setAttribute('style', 'color: red');
        labelLogin.innerHTML = '<strong>LOGIN * enter at least 5 characters </strong>'
        login.setAttribute('style', 'border-color: red');
        let validLogin = false
    }else {
        labelLogin.setAttribute('style', 'color: green');
        labelLogin.innerHTML = 'LOGIN'
        login.setAttribute('style', 'border-color: green');
        validLogin = true
    }
})

pass.addEventListener('keyup', ()=>{
    if(pass.value.length <= 7){
        labelPass.setAttribute('style', 'color: red');
        labelPass.innerHTML = '<strong>PASSWORD * enter at least 8 characters </strong>'
        pass.setAttribute('style', 'border-color: red');
        validPass = false
    }else {
        labelPass.setAttribute('style', 'color: green');
        labelPass.innerHTML = 'PASSWORD'
        pass.setAttribute('style', 'border-color: green');
        validPass = true
    }
})

confPass.addEventListener('keyup', ()=>{
    if(pass.value != confPass.value){
        labelConfPass.setAttribute('style', 'color: red');
        labelConfPass.innerHTML = '<strong>CONFIRM PASSWORD * passwords do not match </strong>'
        confPass.setAttribute('style', 'border-color: red');
        validConfPass = false
    }else {
        labelConfPass.setAttribute('style', 'color: green');
        labelConfPass.innerHTML = 'CONFIRM PASSWORD'
        confPass.setAttribute('style', 'border-color: green');
        validConfPass = true
    }
})


function register(){
    if(validName && validLogin && validPass &&  validConfPass){

        // local storage 

        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')

        listUser.push(
            {
                cadName: name.value,
                cadLogin: login.value,
                cadPass: pass.value
            }
        )

        localStorage.setItem('listUser', JSON.stringify(listUser))

        setTimeout(() => {
            window.location.href = 'index.html'
        }, 3000)    
        
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Sign up.</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
    }else {
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = '<strong>Fill in the fields correctly.</strong>'
        msgSuccess.setAttribute('style', 'display: none')
        msgSuccess.innerHTML = ''
    }

    
}



