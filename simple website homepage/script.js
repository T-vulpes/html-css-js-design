$(document).ready(function() {
    $('#menu ul li a').hover(function() {
        $(this).animate({
            paddingLeft: '+=15px'
        }, 200);
    }, function() {
        $(this).animate({
            paddingLeft: '-=15px'
        }, 200);
    });

    $('h3').click(function() {
        $(this).next('p').slideToggle('slow');
    });
});
