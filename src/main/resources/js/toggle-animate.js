(function($) {

    // This is an extension to the toggle extension, in which we'll nicely animate the toggling of the box content

    // We'll remove the default collapse/expand handlers
    $(".example-box").die("box-collapse box-expand");

    // And add new ones...
    $(".example-box")
        .live("box-collapse", function() {
            console.log("Collapse box (animated): ", this);

            var box = $(this);

            box.removeClass("box-expanded");

            box.find(".box-body").slideUp("slow", function() {
                box.addClass("box-collapsed");
            });
        })
        .live("box-expand", function() {
            console.log("Expand box (animated): ", this);

            var box = $(this);

            box.removeClass("box-collapsed");

            box.find(".box-body").slideDown("slow", function() {
                box.addClass("box-expanded");
            });
        });

})(jQuery);
