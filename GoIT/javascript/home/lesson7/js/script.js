$(document).ready(function() {
    $('.tabs .tabs_links li a').on('click', function(e)  {
        var attrValue = $(this).attr('href');

        $('.tabs ' + attrValue).slideDown("normal").siblings().slideUp("normal");

        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});

