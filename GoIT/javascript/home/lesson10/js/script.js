 $(document).ready(function() {
        $( '.li_dropdown' ).hover(
            function(){
                $(this).children('.ul_submenu').slideDown(200);
            },
            function(){
                $(this).children('.ul_submenu').slideUp(200);
            }
        );
 });