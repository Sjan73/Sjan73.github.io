    $(function(){
        if (/iPhone|iPod|iPad/.test(navigator.userAgent))
            $('iframe').wrap(function(){
                var $this = $(this);
                return $('<div />').css({
                    width: $this.attr('width'),
                    height: $this.attr('height'),
                    overflow: 'auto',
                    '-webkit-overflow-scrolling': 'touch'
                });
            });
    })