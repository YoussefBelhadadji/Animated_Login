const container=document.querySelector(".container");
const register=document.getElementById("register");
const loginBtn=document.getElementById("login");


register.addEventListener("click",()=>{
    container.classList.add("active");
});
loginBtn.addEventListener("click",()=>{
    container.classList.remove("active");
});