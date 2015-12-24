$(document).ready(function() {
    $('input').hover(function(e) {
      var toolTip = $(this).attr('data-title');
      var toolTipValue = '<span class="tooltip">' + toolTip +'</span>';

      $(this).after(toolTipValue)
            .css('top', (e.pageY - 10) + 'px')
            .css('left', (e.pageX + 20) + 'px')
            .fadeIn('slow');

    }, function() {
        $('.tooltip').remove();
    }).mousemove(function(e) {
        $('.tooltip')
        .css('top', (e.pageY - 10) + 'px')
        .css('left', (e.pageX + 20) + 'px');
    });
});
