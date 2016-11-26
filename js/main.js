require.config({
    paths : {
        jquery : 'jquery'
    }
});

require(['jquery', 'window'], function($, w) {
    $("#a").click(function() {
         new w.Window().alert("Hello", function() {
            console.log("you click the button");
         },
         {
            width : 300,
            height : 150,
            y : 50
         });
    });
});