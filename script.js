const myHam = document.querySelector('#ham');
const myNav = document.querySelector('#nav');
const myList = document.querySelector('#list');
const myDrop = document.querySelector('#drop');
const myDroplist = document.querySelector('#droplist');
const header = document.querySelector('#header');
const myDropResponsive = document.querySelector('#dropResponsive');
const myDroplistResponsive = document.querySelector('#droplistResponsive');

myDrop.addEventListener('click', function (event) {
    if (myDroplist.style.display == 'none') {
        myDroplist.style.display = 'block';
    }
    else {
        myDroplist.style.display = 'none';
    }
});


myDropResponsive.addEventListener('click', function (event) {
    let displayStatus = window.getComputedStyle(myDroplistResponsive).display;
    if (displayStatus === 'none') {
        myDroplistResponsive.style.display = 'block';
    } else {
        myDroplistResponsive.style.display = 'none';
    }
});


myHam.addEventListener('click', function (event) {
    if (myNav.style.display == 'block') {
        myList.style.animation = 'moveInTop 1s forwards';
        setTimeout(() => {
            myNav.style.display = 'none';
        }, 1500);
    }
    else {
        myList.style.animation = 'moveInBottom 1s forwards';
        myNav.style.display = 'block';
    }

});
let index = 1;
function SliderHeader() {
    header.style.backgroundImage = 'url("img/slider' + index + '.jpg")';
    index++;
    if (index === 4) {
        index = 1;
    }
    setTimeout(SliderHeader, 5000);
}



function myFunction(x) {
    if (x.matches) {
        myList.style.display = "flex";
        myNav.style.display = 'block';
    } else {
        myList.style.display = "none";
    }
}

var x = window.matchMedia("(max-width: 1000px)")
myFunction(x);

x.addEventListener("change", function () {
    myFunction(x);
});

SliderHeader();

document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.swiper', {
      spaceBetween: 50,
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed : 500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });