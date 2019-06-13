$(document).ready(function() {
    $('input[type="checkbox"]').click(function() {
        if ($(this).prop("checked")) {
            $(document.body).css('overflow', 'hidden').css('height', '100vh')
        } else {
            $(document.body).removeAttr('style');
        }
    });
});

$('#nav-toggle').on('click', function() {
    $('#nav-toggle').toggleClass('active');
    $(document.body).toggleClass('no-scroll');
    $('nav').toggleClass('active');
});