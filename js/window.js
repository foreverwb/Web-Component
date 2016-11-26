define(['jquery'], function($) {
    function Window() {
        this.cfg = {
            width : 500,
            height : 300,
            content : "",
            handler : null,
            title : "系统消息",
            hasCloseBtn : true,
            skinClassName : null,
            textAlterBtn : "OK"
        };
    }

    Window.prototype = {
        alert : function(cfg) {
                        var CFG =  $.extend(this.cfg, cfg);
                        var boundingBox = $(
                            '<div class="window_boundingBox">' +
                                '<div class="window_header"> '+ CFG.title +' </div>' +
                                '<div class="window_content"> '+ CFG.content + '</div>' +
                                '<div class="window_footer"><input type="button" value=" '+ CFG.textAlterBtn +'"></div>' +
                            '</div>'
                        ),
                        btn = boundingBox.find(".window_footer input");
                        boundingBox.appendTo("body");
                        btn.click(function() {
                            CFG.handler && CFG.handler();
                            boundingBox.remove();
                        });
                        boundingBox.css({
                            width : CFG.width + "px",
                            height : CFG.height + "px",
                            left : (CFG.x || (window.innerWidth - CFG.width) / 2) + "px",
                            top : (CFG.y || (window.innerHeight - CFG.height) / 2) + "px"
                        });
                        if (CFG.hasCloseBtn) {
                            var closeBtn = $('<span class="window_closeBtn">x</span>');
                            closeBtn.appendTo(boundingBox);
                            closeBtn.click(function() {
                                boundingBox.remove();
                            });
                        }
                        if (CFG.skinClassName) {
                            boundingBox.addClass(CFG.skinClassName);
                        }
        },
        confirm : function() {

        },
        prompt : function() {

        }
    }

    return {
        Window : Window
    }
});
