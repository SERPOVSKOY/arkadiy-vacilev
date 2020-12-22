/* eslint-disable no-loop-func */
/* eslint-disable func-names */

// active list link
const link = document.getElementsByClassName('about__link');
const txt = document.getElementsByClassName('about__text-c');
let a = 0;

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function (e) {
        e.preventDefault();
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            txt[i].classList.add('show');
            a = i;
            for (let n = 0; n < link.length; n++) {
                if (n !== a) {
                    link[n].classList.remove('active');
                    txt[n].classList.remove('show');
                }
            }
        }
    });
}

$(document).ready(() => {
    $('.popup-youtube').magnificPopup({
        fixedContentPos: true,
        items: [
            {
                src: 'https://vimeo.com/45830194',
                type: 'iframe',
            },
        ],
    });
});
