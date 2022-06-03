//variables
let name = document.querySelector('#name');
let labelName = document.querySelector('#labelName');

let login = document.querySelector('#login');
let labelLogin = document.querySelector('#labelLogin');

let pass = document.querySelector('#pass');
let labelPass = document.querySelector('#labelPass');

let confPass = document.querySelector('#confPass');
let labelConfPass = document.querySelector('#labelConfPass');


name.addEventListener('keyup', ()=>{
    if(name.value.length <= 3){
        labelName.setAttribute('style', 'color: red');
        labelName.innerHTML = '<strong>FULL NAME * enter at least 3 characters </strong>'
        name.setAttribute('style', 'border-color: red');
    }else{
        labelName.setAttribute('style', 'color: green');
        labelName.innerHTML = 'FULL NAME'
        name.setAttribute('style', 'border-color: green');
    }
})

login.addEventListener('keyup', ()=>{
    if(login.value.length <= 4){
        labelLogin.setAttribute('style', 'color: red');
        labelLogin.innerHTML = '<strong>LOGIN * enter at least 5 characters </strong>'
        login.setAttribute('style', 'border-color: red');
    }else{
        labelLogin.setAttribute('style', 'color: green');
        labelLogin.innerHTML = 'LOGIN'
        login.setAttribute('style', 'border-color: green');
    }
})

pass.addEventListener('keyup', ()=>{
    if(pass.value.length <= 7){
        labelPass.setAttribute('style', 'color: red');
        labelPass.innerHTML = '<strong>PASSWORD * enter at least 8 characters </strong>'
        pass.setAttribute('style', 'border-color: red');
    }else{
        labelPass.setAttribute('style', 'color: green');
        labelPass.innerHTML = 'PASSWORD'
        pass.setAttribute('style', 'border-color: green');
    }
})

confPass.addEventListener('keyup', ()=>{
    if(pass.value != confPass.value){
        labelConfPass.setAttribute('style', 'color: red');
        labelConfPass.innerHTML = '<strong>CONFIRM PASSWORD * passwords do not match </strong>'
        confPass.setAttribute('style', 'border-color: red');
    }else{
        labelConfPass.setAttribute('style', 'color: green');
        labelConfPass.innerHTML = 'CONFIRM PASSWORD'
        confPass.setAttribute('style', 'border-color: green');
    }
})


function register(){
    
}