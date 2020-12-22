/* eslint-disable func-names */
import '../css/styles.styl';
import 'magnific-popup';
import 'waypoints/lib/noframework.waypoints.min.js';
import 'slick-carousel';
import '../../modules/header/header';
import '../../modules/main/main';
import '../../modules/about/about';
import '../../modules/partner/partner';

const traced = document.querySelectorAll('.traced');
const links = document.getElementsByClassName('header__navLink');


for(let p = traced.length - 1; p >= 0 ; p--) {
    const tracedoW = new Waypoint({
        element: traced[p],
        handler: function(direction) {
            traced[p].classList.add('fadeInUp', 'ftco-animated');
            for(let i = 0; i <= links.length; i++) {
                if (traced[p].id === links[i]?.getAttribute('href').substring(1)) {
                    links[i]?.classList.add('active');
                } else {
                    links[i]?.classList.remove('active');
                }
            }
        },
        offset: 500
    });
}

$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
        {
        breakpoint: 1140,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 590,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
});