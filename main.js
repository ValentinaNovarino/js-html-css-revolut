// creare dropdown menu
$(document).ready(function () {
    // intercetto il mouseenter sugli elementi dropdown-item
    $('.menu').mouseenter(function () {
        // aggiungo la classe active al dropdown-menu in modo che compaia sul mouseenter
        $(this).children('.dropdown-menu').addClass('active');
    })

    // intercetto il mouseleave sugli elementi dropdown-item
    $('.menu').mouseleave(function () {
        // tolgo la classe active al dropdown-menu in modo che scompaia sul mouseleave
        console.log("uscito da span");
        $(this).children('.dropdown-menu').removeClass('active');
    })
});
