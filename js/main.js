$(document).ready(function () {
    let currentFloor = 2;
    let counterUp = $('.counter-up');
    const counterDown = $('.counter-down');
    const floorPath = $('.home-image path');
    const modal = $('.modal');
    const modalClose = $('.modal-close-button');
    const viewFlatsButton = $('.view-flats')

    // функция при наведении мышкой на этаж
    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
    });

    floorPath.on('click', toggleModal);

    modalClose.on('click', toggleModal);

    viewFlatsButton.on('click', toggleModal);

    counterUp.on('click', function () {  // отслеживаем клик по кнопке вверх
        if (currentFloor < 18) {    
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {
            minimumIntegerDigits: 2, useGrouping: false // форматируем переменную с 1 на 01
        });
        $('.counter').text(usCurrentFloor);
        floorPath.removeClass('current-floor')  // удаляем активный класс у этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
        }
    });

    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {
            minimumIntegerDigits: 2, useGrouping: false // форматируем переменную с 1 на 01
        });
        $('.counter').text(usCurrentFloor);
        floorPath.removeClass('current-floor')  // удаляем активный класс у этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
        }   
    }); 
    function toggleModal() {
        modal.toggleClass('is-open');
    }
});
