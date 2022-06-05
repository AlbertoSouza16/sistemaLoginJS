function exit(){
    localStorage.removeItem('token')
    window.location.href = "index.html"
}

if(localStorage.getItem('token') == null){
    alert("You must be logged in to continue")
    window.location.href = "index.html"
}