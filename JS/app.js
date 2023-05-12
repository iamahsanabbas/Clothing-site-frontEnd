
let navbar = document.querySelector('.navbar')

window.addEventListener('scroll',()=>{
    if(window.scrollY > 10){
        navbar.style.backgroundColor='#42488c';
    }
    else{
        navbar.style.backgroundColor='#1f2641';

    }
})