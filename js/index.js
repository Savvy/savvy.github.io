$(document).ready(function() {
    $('input[type="checkbox"]').click(function() {
        if ($(this).prop("checked")) {
            $(document.body).css('overflow', 'hidden').css('height', '100vh')
        } else {
            $(document.body).removeAttr('style');
        }
    });
});