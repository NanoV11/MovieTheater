const openMenu = document.querySelector(".openMenu")
const header = document.querySelector("header");
const show = document.querySelector("#list");
const main = document.querySelector("main");


openMenu.addEventListener('click',function(){
    show.classList.toggle("responsive-nav-items")
    header.classList.toggle("header-background");
});

main.addEventListener("click",function(){
    if(show.classList.contains("responsive-nav-items"))
    {
        show.classList.remove("responsive-nav-items")
        header.classList.remove("header-background");
    }
});


