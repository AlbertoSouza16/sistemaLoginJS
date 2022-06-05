function login(){
    //variables
    
    let login = document.querySelector("#login");
    let loginLabel = document.querySelector("#loginLabel");

    let pass = document.querySelector("#pass");
    let passLabel = document.querySelector("#passLabel");

    let msgError = document.querySelector("#msgError");

    let listUser = [];

    let userValid = {
        name: '',
        login: '',
        pass: ''
    }

    //end of variable declarations

    listUser = JSON.parse(localStorage.getItem('listUser'))

    listUser.forEach((item) =>{
        if(login.value == item.cadLogin && pass.value == item.cadPass){
            userValid = {
                name: item.cadName,
                login: item.cadLogin,
                pass: item.cadPass
            }
        }
    })
        
    if(login.value == userValid.login && pass.value == userValid.pass){
        window.location = "openingScreen.html"
    } else{
        loginLabel.setAttribute('style', 'color: red')
        login.setAttribute('style', 'border-color: red')
        passLabel.setAttribute('style', 'color: red')
        pass.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block' )
        msgError.innerHTML = "Login or password are incorrect."
        login.focus()
       
    }

    };
    

