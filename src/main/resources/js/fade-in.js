(function($) {

    // In this extension we'll fade in the box once loaded

    $(".example-box").live("example-box-loaded", function() {
        $(this)
            .hide()  // force the box to remain hidden
            .fadeIn("slow"); // slowly fade into view
    });

})(jQuery);
