const headerFixed = document.getElementById('header-fixed');
const headerFixed2 = document.getElementById('header-fixed2');


document.addEventListener('scroll', () => {
    if(headerFixed.getBoundingClientRect().bottom <= 0) {
        headerFixed2.classList.add('header-fixed');
    }else{
        headerFixed2.classList.remove('header-fixed');
    }
});


// menu mobile

const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');
const navClose = document.getElementById('nav-close');
const overlay = document.getElementById('overlay');
document.addEventListener('click', (e) => {
    if(btnMobile.contains(e.target)){
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
    }else if(navClose.contains(e.target)){
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
    }else if(overlay.contains(e.target)){
        nav.classList.remove('active');
        overlay.classList.remove('active');
    }
});




// test

const slider = document.getElementById('test1');
let isDragging = false;
let startPosition = 0;
let startScrollLeft = 0;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosition = e.clientX;
  startScrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const distance = e.clientX - startPosition;
  slider.scrollLeft = startScrollLeft - distance;
});