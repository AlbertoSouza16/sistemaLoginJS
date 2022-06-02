let btn = document.querySelector('#seePass');

btn.addEventListener('click',()=>{
    let inputPass = document.querySelector('#pass')

    if(inputPass.getAttribute('type') == 'password'){
        inputPass.setAttribute('type', 'text')
    } else{
        inputPass.setAttribute('type', 'password')
    }
});

let btnConfirmPass = document.querySelector('#seeConfirmPass');

btnConfirmPass.addEventListener('click',()=>{
    let inputConfirmPass = document.querySelector('#confPass')

    if(inputConfirmPass.getAttribute('type') == 'password'){
        inputConfirmPass.setAttribute('type', 'text')
    } else{
        inputConfirmPass.setAttribute('type', 'password')
    }
});