require.config({
    paths : {
        jquery : 'jquery'
    }
});

require(['jquery', 'window'], function($, w) {
    $("#a").click(function() {
         new w.Window().alert({
            textAlterBtn : "确定",
            skinClassName : null,
            hasCloseBtn : false,
            title : "提示",
            content : "Hello",
            handler : function() {
                alert("you click the button");
            },
            width : 300,
            height : 150,
            y : 50
         });
    });
});
