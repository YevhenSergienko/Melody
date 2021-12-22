$(document).ready(function () {
    var currentFloor = 2;
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var floorPath = $(".home-image path");
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");
    var flatPath = $(".flats path");
    var flatList = $(".flat-list");


    floorPath.on('mouseover', function() {
        floorPath.removeClass("current-floor")
        currentFloor = $(this).attr("data-floor");
        modalCurrentFloor = Number(currentFloor).toString();
        console.log(`[${modalCurrentFloor}]`)
        $(".counter").text(currentFloor);
        $(".counter-floor").text(modalCurrentFloor);
    });

    flatPath.on('mouseover', function() {
        currentFlat = $(this).attr("data-flat");
        // console.log(`[${currentFlat}]`);
        $(`[data-flat=${currentFlat}]`).toggleClass("current-flat");
    })

    function toggleModal () {
        modal.toggleClass('is-open');
    }

    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);

    counterUp.on("click", function() {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false})
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor")
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    counterDown.on("click", function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false})
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor")
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });
});