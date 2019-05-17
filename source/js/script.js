ymaps.ready(init);

function init() {

  if (screen.width > 1300) {
    var mapDesktop = new ymaps.Map('map', {
      center: [59.938884, 30.319360],
      zoom: 17,
      controls: [],
      behaviors: ['drag']
    });

    var placemarkDesktop = new ymaps.Placemark([59.93901867, 30.32236785], {
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: [124, 106],
      iconImageOffset: [-23, -57]
    });

    mapDesktop.geoObjects.add(placemarkDesktop);

  } 

  else if (screen.width >= 768 && screen.width < 1300) {

    var mapTablet = new ymaps.Map('map', {
      center: [59.93863106, 30.32305450],
      zoom: 16,
      controls: [],
      behaviors: ['drag']
    });

    var placemarkTablet = new ymaps.Placemark([59.93901867, 30.32236785], {

    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: [103, 90],
      iconImageOffset: []
    });

    mapTablet.geoObjects.add(placemarkTablet);
  } 

  else if (screen.width < 768) {

    var mapMobile = new ymaps.Map('map', {
      center: [59.93863106, 30.32305450],
      zoom: 16,
      controls: [],
      behaviors: ['drag']
    });

    var placemarkMobile = new ymaps.Placemark([59.93901867, 30.32236785], {

    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: [50, 45],
      iconImageOffset: [15, 15]
    });

    mapMobile.geoObjects.add(placemarkMobile);
  }

}
