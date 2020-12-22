/* eslint-disable func-names */
/* eslint-disable no-alert */

const TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = `<span class="main__textAnim"> ${this.txt} </span>`;

    const that = this;
    let delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum += 1;
        delta = 500;
    }

    setTimeout(() => {
        that.tick();
    }, delta);
};

window.onload = () => {
    const elements = document.getElementsByClassName('main__textSlider');
    for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-rotate');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
            // eslint-disable-next-line no-new
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('main__form');
    const formBlock = document.getElementById('popup-form');

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        // eslint-disable-next-line no-useless-escape
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
            input.value,
        );
    }

    function formValidate() {
        let error = 0;
        const formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error += 1;
                }
            } else if (input.value === '') {
                formAddError(input);
                error += 1;
            }
        }

        return error;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const error = formValidate(form);


        if (error === 0) {
            formBlock.classList.add('_sending');

            $.ajax({
                type: "POST",
                url: "./telegram.php",
                data: $('#main__form').serialize(),
                success: function(){
                    alert('Данные успешно отправленны');
                    form.reset();
                    formBlock.classList.remove('_sending');
                    $('.main__linkPopup').magnificPopup('close');
                },
                error: function() {
                    formBlock.classList.remove('_sending');
                    alert('Ошибка');
                }
            })
        } else {
            alert('Заполните обязательные поля');
        }
    });
});

$('.main__linkPopup').magnificPopup({ 
    type: 'inline', 
    showCloseBtn : true, 
    closeOnBgClick : true,
});

$('.service__link').magnificPopup({ 
    type: 'inline', 
    showCloseBtn : true, 
    closeOnBgClick : true,
});
