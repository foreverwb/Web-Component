define(['jquery', 'jqueryUI'], function($, $UI) {
    function Window() {
        this.cfg = {
            width : 500,
            height : 300,
            content : "",
            handler : null,
            title : "系统消息",
            hasCloseBtn : true,
            skinClassName : null,
            textAlterBtn : "OK",
            hasMark : true,
            isDraggable : true,
            dragHandle : null
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
                        mask = null;
                        if (CFG.hasMark) {
                            mask = $('<div class="window_mask"></div>');
                            mask.appendTo("body");
                        }
                        boundingBox.appendTo("body");
                        btn.click(function() {
                            CFG.handler && CFG.handler();
                            boundingBox.remove();
                            mask && mask.remove();
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
                                mask && mask.remove();
                            });
                        }
                        if (CFG.skinClassName) {
                            boundingBox.addClass(CFG.skinClassName);
                        }
                        if (CFG.isDraggable) {
                            if (CFG.dragHandle) {
                                boundingBox.draggable({handle : CFG.dragHandle});
                            }
                            else {
                                boundingBox.draggable();
                            }
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
