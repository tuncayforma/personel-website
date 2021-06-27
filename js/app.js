$("#go-about").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top
    }, 500);
});
$("#go-portfolyo").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#portfolyo").offset().top
    }, 500);
});
$("#go-contact").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact").offset().top
    }, 500);
});
$("#go-home").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#banner").offset().top
    }, 500);
});