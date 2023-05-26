let menu = document.querySelector('.fa-bars')
let nav__list = document.querySelector('.nav__list')

menu.onclick = () => {
    menu.classList.toggle('fa-xmark')
    nav__list.classList.toggle('open');
}






