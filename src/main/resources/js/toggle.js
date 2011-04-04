(function($) {

    // In this extension we add a collapse control to each box

    // So, when a box has loaded we add a collapse/expand toggle button to the title bar of the box
    $(".example-box").live("example-box-loaded", function() {
        console.log("Adding collapse control to: ", this);
        $(".box-head > .box-controls", this).append('<span class="box-toggle"></span>');
        $(this).addClass("box-expanded");
    });

    // We'll listen for clicks on any box toggle button
    $(".box-toggle").live("click", function() {
        console.log("Box toggle clicked: ", this);

        var box = $(this).closest(".example-box");

        // Rather than actually performing the collapse/expand directly from the toggle click
        // we'll delegate the task to another handler by triggering an event.
        if (box.hasClass("box-collapsed")) {
            box.trigger("box-expand");
        } else if (box.hasClass("box-expanded")) {
            box.trigger("box-collapse");
        }
    });

    // Here we'll handle the actual collapse/expand events

    $(".example-box")
        .live("box-collapse", function() {
            console.log("Collapse box: ", this);
            $(this).addClass("box-collapsed").removeClass("box-expanded");
        })
        .live("box-expand", function() {
            console.log("Expand box: ", this);
            $(this).addClass("box-expanded").removeClass("box-collapsed");
        });

})(jQuery);
