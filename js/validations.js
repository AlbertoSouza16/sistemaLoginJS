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


function register(){
    
}