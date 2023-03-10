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