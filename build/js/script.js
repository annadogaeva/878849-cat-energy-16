ymaps.ready(init);

function init() {

    if (screen.width > 1440) {
        var mapDesktop = new ymaps.Map('map', {
            center: [59.938884, 30.319360],
            zoom: 17,
            controls: [],
            behaviors: ['drag']
        });

        var placemarkDesktop = new ymaps.Placemark([59.93901867, 30.32236785], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-pin.png',
            iconImageSize: [124, 106],
            iconImageOffset: [-40, -57]
        });

        mapDesktop.geoObjects.add(placemarkDesktop);

    } else if (screen.width >= 768 && screen.width < 1440) {

        var mapTablet = new ymaps.Map('map', {
            center: [59.938670, 30.323231],
            zoom: 19,
            controls: [],
            behaviors: ['drag']
        });

        var placemarkTablet = new ymaps.Placemark([59.938670, 30.32323], {

        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-pin.png',
            iconImageSize: [103, 90],
            iconImageOffset: [-50, -50]
        });

        mapTablet.geoObjects.add(placemarkTablet);
    } else if (screen.width < 768) {

        var mapMobile = new ymaps.Map('map', {
            center: [59.938670, 30.323231],
            zoom: 17,
            controls: [],
            behaviors: ['drag']
        });

        var placemarkMobile = new ymaps.Placemark([59.938670, 30.323231], {

        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-pin.png',
            iconImageSize: [50, 45],
            iconImageOffset: [-25, -40]
        });

        mapMobile.geoObjects.add(placemarkMobile);
    }

}


var closeBtn = document.querySelector(".header__close-btn");
var menuBtn = document.querySelector(".header__menu-btn");
var menu = document.querySelector(".nav");

closeBtn.addEventListener("click", function() {
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="block";
});

menuBtn.addEventListener("click", function() {
    menu.style.display="block";
    closeBtn.style.display="block";
    menuBtn.style.display="none";
});

var before = document.querySelector(".cat-slider__toggle-state--before");
var after = document.querySelector(".cat-slider__toggle-state--after");
var fatcat = document.querySelector(".cat-slider__slider-item--fat-cat");
var thincat = document.querySelector(".cat-slider__slider-item--thin-cat");
var sliderSwitch = document.querySelector(".cat-slider__toggle-switch");

before.addEventListener("click", function() {
    thincat.classList.add("visually-hidden");
    fatcat.classList.remove("visually-hidden");
    sliderSwitch.classList.add("cat-slider__toggle-switch--left")
    sliderSwitch.classList.remove("cat-slider__toggle-switch--right")
});

after.addEventListener("click", function() {
    fatcat.classList.add("visually-hidden");
    thincat.classList.remove("visually-hidden");
    sliderSwitch.classList.add("cat-slider__toggle-switch--right")
    sliderSwitch.classList.remove("cat-slider__toggle-switch--left")
});
