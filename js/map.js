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
        console.log(MyIconContentLayout);
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки',
        // balloonContent: 'Это красивая метка'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'images/map_icon.svg',
        // Размеры метки.
        iconImageSize: [42, 55],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    });

    //     var control = myMap.controls.get('routePanelControl');

    // control.routePanel.state.set({
    //     type: 'masstransit',
    //     fromEnabled: true,
    //     toEnabled: false,
    //     to: 'Москва, Погорельский переулок 6',
    // });

    // control.routePanel.options.set({
    //     allowSwitch: false,
    //     reverseGeocoding: true,
    //     types: {
    //         masstransit: true,
    //         pedestrian: true,
    //         taxi: true
    //     }
    // });

    // var switchPointsButton = new ymaps.control.Button({
    //     data: {
    //         content: "Поменять местами",
    //         title: "Поменять точки местами"
    //     },
    //     options: {
    //         selectOnClick: false,
    //         maxWidth: 160
    //     }
    // });

    // switchPointsButton.events.add('click', function () {
    //     control.routePanel.switchPoints();
    // });
    // myMap.controls.add(switchPointsButton);

});