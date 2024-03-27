;(function(a, e, b, d) {
    function c(f, g) {
        this.element = f;
        this.options = {
            pageNum: g.pageNum || 1,
            totalNum: g.totalNum,
            totalList: g.totalList,
            callback: g.callback
        };
        this.init()
    }
    c.prototype = {
        constructor: c,
        init: function() {
            this.createHtml();
            this.bindEvent()
        },
        createHtml: function() {
            var h = this;
            var f = [];
            var j = h.options.pageNum;
            var l = h.options.totalNum;
            var k = h.options.totalList;
            f.push("<button type='button' id='prePage'>&lt;</button>");
            // f.push("<button type='button' id='firstPage'>首页</button><button type='button' id='prePage'>上一页</button>");
            if (l > 6) {
                if (j < 5) {
                    for (var g = 1; g < 6; g++) {
                        if (j !== g) {
                            f.push("<button type='button'>" + g + "</button>")
                        } else {
                            f.push("<button type='button' class='current'>" + g + "</button>")
                        }
                    }
                    f.push(". . .");
                    f.push("<button type='button'>" + l + "</button>")
                } else {
                    if (j < l - 3) {
                        for (var g = j - 2; g < j + 3; g++) {
                            if (j !== g) {
                                f.push("<button type='button'>" + g + "</button>")
                            } else {
                                f.push("<button type='button' class='current'>" + g + "</button>")
                            }
                        }
                        f.push(". . .");
                        f.push("<button type='button'>" + l + "</button>")
                    } else {
                        f.push("<button type='button'>" + 1 + "</button>");
                        f.push(". . .");
                        for (var g = l - 4; g < l + 1; g++) {
                            if (j !== g) {
                                f.push("<button type='button'>" + g + "</button>")
                            } else {
                                f.push("<button type='button' class='current'>" + g + "</button>")
                            }
                        }
                    }
                }
            } else {
                for (var g = 1; g < l + 1; g++) {
                    if (j !== g) {
                        f.push("<button type='button'>" + g + "</button>")
                    } else {
                        f.push("<button type='button' class='current'>" + g + "</button>")
                    }
                }
            }
            f.push("<button type='button' id='nextPage'>&gt;</button>");
            // f.push("<button type='button' id='lastPage'>尾页</button><button type='button' id='nextPage'>下一页</button>");
            // f.push("<span class='totalNum'> 共 " + l + " 页 </span>");
            // f.push("<span class='totalList'> 共 " + k + " 条记录 </span>");
            h.element.html(f.join(""));
            setTimeout(function() {
                h.dis()
            }, 20)
        },
        bindEvent: function() {
            var f = this;
            f.element.off("click", "button");
            f.element.on("click", "button", function() {
                var g = a(this).attr("id");
                var h = parseInt(a(this).html());
                var i = f.options.pageNum;
                if (g === "prePage") {
                    if (i !== 1) {
                        f.options.pageNum -= 1
                    }
                } else {
                    if (g === "nextPage") {
                        if (i !== f.options.totalNum) {
                            f.options.pageNum += 1
                        }
                    } else {
                        if (g === "firstPage") {
                            if (i !== 1) {
                                f.options.pageNum = 1
                            }
                        } else {
                            if (g === "lastPage") {
                                if (i !== f.options.totalNum) {
                                    f.options.pageNum = f.options.totalNum
                                }
                            } else {
                                f.options.pageNum = h
                            }
                        }
                    }
                }
                f.createHtml();
                if (f.options.callback) {
                    f.options.callback(f.options.pageNum)
                }
            })
        },
        dis: function() {
            var f = this;
            var g = f.options.pageNum;
            var h = f.options.totalNum;
            if (g === 1) {
                f.element.children("#firstPage, #prePage").prop("disabled", true)
            } else {
                if (g === h) {
                    f.element.children("#lastPage, #nextPage").prop("disabled", true)
                }
            }
        }
    };
    a.fn.paging = function(f) {
        return new c(a(this),f)
    }
}
)(jQuery, window, document);

// $("#page").paging({pageNum:5,totalNum:14,totalList:300,callback:function (num) {console.log(num);} });