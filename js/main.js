require.config({
    paths : {
        jquery : 'jquery',
        jqueryUI : 'http://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui'
    }
});

require(['jquery', 'window'], function($, w) {
    $("#a").click(function() {
         new w.Window().alert({
            dragHandle : ".window_header",
            textAlterBtn : "确定",
            skinClassName : null,
            hasCloseBtn : true,
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
