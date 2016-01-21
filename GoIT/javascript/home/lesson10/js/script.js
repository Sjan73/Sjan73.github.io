 $(document).ready(function() {
        $( '.dropdown' ).hover(
            function(){
                $(this).children('.submenu').slideDown(200);
            },
            function(){
                $(this).children('.submenu').slideUp(200);
            }
        );

$("a").mouseenter(
  function () {
	$(this).animate({
		color: "#000"
    }, 500 );
});


$("a").mouseleave(function() {
	$(this).animate({
		color: "#fff"
    }, 500 );
});

});