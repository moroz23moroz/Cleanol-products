ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [53.926045, 27.614913],
        zoom: 16.5,
        // controls: ['routePanelControl']
    });

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Cleanol, г. Минск, ул. Толбухина 2а, к. 320',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/map_icon.svg',
            iconImageSize: [42, 55],
            iconImageOffset: [-5, -38]
        });

        myMap.geoObjects.add(myPlacemark);
});