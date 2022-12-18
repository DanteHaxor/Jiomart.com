let sidemenu=document.querySelector("aside");
let menubtn=document.querySelector("#menu-btn");
let closebtn=document.querySelector("#close-btn");
let themetoggler=document.querySelector(".theme-toggler")

menubtn.addEventListener("click",()=>{
    sidemenu.style.display="block";
})
closebtn.addEventListener("click",()=>{
    sidemenu.style.display="none";
})
themetoggler.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme-variables");
    themetoggler.querySelector("span").classList.toggle("active");
})