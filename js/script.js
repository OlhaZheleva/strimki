'use strict';

console.log('hello');


document.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector('.header__mobile');
    let close = document.querySelector('.menu__close');
    let open = document.querySelector('.menu__open');
    let navLinks = document.querySelectorAll('.nav__link')

    open.addEventListener('click', function (event) {
        event.preventDefault();
        menu.classList.add('header__mobile-show');
        close.classList.add('menu__close-open');
        open.classList.add('menu__open-close');
        document.body.classList.add('__lock')
    });

    close.addEventListener('click', function (event) {
        event.preventDefault();
        menu.classList.remove('header__mobile-show');
        close.classList.remove('menu__close-open');
        open.classList.remove('menu__open-close');
        document.body.classList.remove('__lock')
    });

    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', function (event) {
            menu.classList.remove('header__mobile-show');
            close.classList.remove('menu__close-open');
            open.classList.remove('menu__open-close');
            document.body.classList.remove('__lock')
        })
    })
        
});



document.querySelectorAll('.accordion').forEach((el) => { // получаем все элементы "аккардион"
    el.addEventListener('click', () => { // при клике на любой элемент "аккардион"
        let content = el.nextElementSibling;
        let itemIcon = el.nextElementSibling; // определяем 
        console.log(content);
        console.log(itemIcon)

        if (content.style.maxHeight) {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null);
            
        } else {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null);
            content.style.maxHeight = content.scrollHeight + 'px';
            itemIcon.querySelectorAll('.item__icon').forEach((element) => element.classList.remove("item__icon-grey"))
        }
    })
})

