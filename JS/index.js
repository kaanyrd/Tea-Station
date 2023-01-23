const navBtn = document.getElementById("navBtn")
const navBar = document.getElementById("navBar")
const navCloseBtn = document.getElementById("navClose")

navBtn.addEventListener("click", ()=> {
    navBar.classList.add("openNav")
})
navCloseBtn.addEventListener("click", ()=>{
    navBar.classList.remove("openNav")
})