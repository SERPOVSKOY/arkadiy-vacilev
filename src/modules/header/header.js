/* eslint-disable no-loop-func */
/* eslint-disable func-names */

const menuLink = document.getElementsByClassName('header__navLink');
let a = 0;

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function (e) {
        if (!menuLink) {
            throw new Error('no menu link elem!');
        }
        e.preventDefault();
        header.classList.remove('show');
        this.classList.remove('active');
        nav.classList.remove('show');
        navList.classList.remove('show');
        document.querySelector(this.hash).scrollIntoView({block: "center", behavior: "smooth"});
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            a = i;
            for (let n = 0; n < menuLink.length; n++) {
                if (n !== a) {
                    menuLink[n].classList.remove('active');
                }
            }
        }
    });
}

// show mobile menu
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const navList = document.querySelector('.header__navList');
const header = document.querySelector('.header');

burger.onclick = function () {
    header.classList.toggle('show');
    this.classList.toggle('active');
    nav.classList.toggle('show');
    navList.classList.toggle('show');
};

// scroll
const scrollWindow = function () {
    $(window).scroll(function () {
        const $w = $(this);
        const st = $w.scrollTop();
        const navbar = $('.header');
        const sd = $('.js-scroll-wrap');
        if (st > 150) {
            if (!navbar.hasClass('scrolled')) {
                navbar.addClass('scrolled');
            }
        }
        if (st < 150) {
            if (navbar.hasClass('scrolled')) {
                navbar.removeClass('scrolled sleep');
            }
        }
        if (st > 350) {
            if (!navbar.hasClass('awake')) {
                navbar.addClass('awake');
            }
            if (sd.length > 0) {
                sd.addClass('sleep');
            }
        }
        if (st < 350) {
            if (navbar.hasClass('awake')) {
                navbar.removeClass('awake');
                navbar.addClass('sleep');
            }
            if (sd.length > 0) {
                sd.removeClass('sleep');
            }
        }
    });
};
scrollWindow();
