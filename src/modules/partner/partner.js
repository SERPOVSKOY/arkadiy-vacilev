const item = document.querySelectorAll('.partner__wrapItem');

for(let i = 0; i <= item.length; i++) {
    item[i]?.addEventListener('click', () => {
        item[i].childNodes[0].classList.toggle('hidd');
        item[i].childNodes[1].classList.toggle('active');
    })
}

