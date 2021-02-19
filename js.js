
const mobMenuIcon = document.querySelector(".fa-bars");
const mobMenuButton = document.querySelector(".header__menu--btn ");
const navHeader =  document.querySelector(".header__nav");


document.addEventListener('click', function (evt) {
    if(evt.target === mobMenuIcon || evt.target === mobMenuButton){
        navHeader.classList.toggle('active');
        mobMenuIcon.classList.toggle('rotate');
    }
    else if(!navHeader.contains(evt.target)){
        navHeader.classList.remove('active')
        
    }
    else{
        navHeader.classList.remove('active')
        
    }
    
}); 