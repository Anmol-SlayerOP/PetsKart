burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navLeft  = document.querySelector('.navLeft');
navRight = document.querySelector('.navRight');
burger.addEventListener('click',function(){
    navRight.classList.toggle('v-class');
    navLeft.classList.toggle('v-class');
    navbar.classList.toggle('h-nav')


})
const change=()=>{
    let btn=document.querySelector('.readmore').textContent;
    let para4=document.querySelector('.para4').style.display;
    if(btn=="Read More"){
        document.querySelector('.readmore').textContent="Read Less";
    }
    else{
        document.querySelector('.readmore').textContent="Read More";
    }
    if((para4=="")||(para4=="none")){
        document.querySelector('.para4').style.display= "block";
    }
    else{
        document.querySelector('.para4').style.display="none";
    }
    


}