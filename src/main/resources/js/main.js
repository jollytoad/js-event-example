(function($) {

    // For this example we'll pretend that the box does some dynamic loading,
    // so it's hidden by default and once loaded it'll get displayed.

    $(document).ready(function() {

        $(".example-box").each(function() {

            var box = $(this);

            // First we'll trigger an event on the box that it is about to be loaded
            box.trigger("example-box-loading");

            // Imagine that this is really an AJAX request
            window.setTimeout(function() {

                // We'll trigger an event on the box once loading is complete
                box.trigger("example-box-loaded");

            }, 2000);

        });
    });

    // So by default, when a box is loaded we'll just display it...
    $(".example-box").live("example-box-loaded", function() {
        $(this).removeClass("hidden");
    });

})(jQuery);
