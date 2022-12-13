let login_btn=document.querySelector(".center form")
login_btn.addEventListener("submit",(event)=>{
    event.preventDefault()
    let username=document.querySelector("#user").value
    let password=document.querySelector("#pass").value
    if(username==="admin" && password==="admin"){
        window.location.href="/Admin/dashboard.html"
    }
})