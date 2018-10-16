var itemCusCode = "";
$(function () {
    function F() {
        $.post("item/islogin", function (A) {
            A.Code == 2 && $(".orderList").html(cartnologin) && $(".accounts").remove()
        })
    }
    $('.app-icon').prev('.lit-left-tab').append('<div class="closeT"></div>')
    $('.app-icon').hover(function () {
        $(this).prev('.lit-left-tab').show();
    }, function () {
        $(this).prev('.lit-left-tab').hide();
    });
    $('.app-icon').prev('.lit-left-tab').hover(function () {
        $(this).show();
    }, function () {
        $(this).hide();
    });
    $('.app-icon').prev('.lit-left-tab').find('.closeT').click(function () {
        $('.app-icon').prev('.lit-left-tab').hide();
    });



    $(".menu-ad,.lit-tab,.menu-cart").mouseover(function () {
        $(this).css({
            "background-color": "#c10055"
        });
        $(this).children(":first").show()
    });
    $(".menu-ad,.lit-tab,.menu-cart").mouseout(function () {
        $(this).css({
            "background": ""
        });
        $(this).children(":first").hide()
    });

    $(".menu-app").trigger("mouseover");

    $(".menu-collect").click(function () {
        window.location.href = MemberDomain + "/fav/list#cn=15165&type=1&adsiteid=10000007"
    });
    $(".menu-myinfo").mouseover(function () {
        $(".myinfo-icon-off").addClass("myinfo-icon-on")
    });
    $(".menu-myinfo").mouseout(function () {
        $(".myinfo-icon-off").removeClass("myinfo-icon-on")
    });
    $(".c-close").mouseover(function () {
        $(this).children(":first").addClass("c-close-log-on")
    });
    $(".c-close").mouseout(function () {
        $(this).children(":first").removeClass("c-close-log-on")
    });
    $(".menu-cart").mouseout(function () {
        $(".menu-cart-case").hide()
    });
    $(".c-close").click(function () {
        $(this).parent().animate({
            left: "250px"
        }).fadeOut("fast")
    });
    $(".menu-service").mouseover(function () {
        $(this).children(":first").next().addClass("service-icon-on")
    });
    $(".menu-service").mouseout(function () {
        $(this).children(":first").next().removeClass("service-icon-on")
    });
    $(".clo-btn").click(function () {
        window.location.href = ShoppingCartDomain + "/order/ordershopcart.aspx"
    });
    $(window).delegate(".classify-item", "mouseover", function () {
        $(this).find(".itemDes-del").show()
    });
    $(window).delegate(".classify-item", "mouseout", function () {
        $(this).find(".itemDes-del").hide()
    });
    var H = $(window).height();
    $(".J_right_menu,.menu-cart-case").css("height", H);
    var G = document.getElementById("scroll");
    G.onclick = function () {
        var A = setInterval(function () {
            window.scrollBy(0, -500);
            if ($(window).scrollTop() == 0) {
                clearInterval(A)
            }
        }, 1)
    }
    ;
    setTopQrIcon();

    $(window).resize(function () {
        $(".right-fix-menu,.menu-cart-case").css({
            "height": $(window).height()
        });
        setTopQrIcon();
    });

    function setTopQrIcon() {
        $(".menu-app").css({ "top": $(window).height() - 125 });
        if ($(".menu-app").css("top") < "520") {
            $(".menu-app").css({
                "top": 520
            })
        }
        $(".menu-top").css({ "top": $(window).height() - 80 });
        if ($(".menu-top").css("top") < "570") {
            $(".menu-top").css({
                "top": 570
            })
        }
    }

    $(".J_right_menu").show();
    $(".menu-cart").mouseover(function () {
        if ($(".menu-cart-case").css("left") == "250px") {
            $(".menu-cart-case").css("left", "auto")
        }
        if ($("#refreshJudge").data("needrefresh") == 1) {
            E();
            $("#refreshJudge").data("needrefresh", "0")
        }
        $(".menu-cart-case").show();
        $(".menu-cart-case").mouseover(function () {
            $(".menu-cart-case").show()
        });
        $(".menu-cart-case").mouseout(function () {
            $(".menu-cart-case").hide()
        })
    });
    function E() {
        var A = '<div class="myinfo-tab hide"><div id="userinfo-main" class="myinfo-tab-main"></div><div class="myinfo-tab-min"><ul><li id="orders"><a href="http://member.moonbasa.com/order/default">我的订单</a></li><li style="width:1px; background:#e5e5e5"></li> <li id="H-collect" style="width:136px;"><a href="http://member.moonbasa.com/fav/list">我的收藏</a></li></ul></div><div class="myinfo-tab-po"></div><div class="myinfo-close-out" onclick="removeMyinfo(this);"> × </div></div>';
        var B = '<div class="myinfo-tab-nolog" style="display: none;"><div class="myinfo-tab-main-nolog"><img src="http://i0.mbscss.com/img/moonbasa2/member/default-head.jpg"/><p>请先登录哦！</p> <div style="overflow:hidden;margin:0 auto;width:194px;"><a class="mylogin" href="http://login.moonbasa.com">登录</a><a class="myreg" href="http://login.moonbasa.com/Home/register">注册</a></div> </div><div class="myinfo-tab-min"><ul><li id="orders"><a href="http://member.moonbasa.com/order/default">我的订单</a></li><li style="width: 1px; background: #e5e5e5"></li><li id="H-collect" style="width: 136px;"><a href="http://member.moonbasa.com/fav/list">我的收藏</a></li></ul></div><div class="myinfo-tab-po"></div><div class="myinfo-close-out" onclick="removeMyinfo(this);">×</div></div>';
        $.ajax({
            url: ShoppingCartDomain + "/ShoppingHandler/GetCartGroupInfo",
            dataType: "jsonp",
            success: function (D) {
                if (D.action != null) {
                    window.itemCusCode = D.action.CusCode;
                    function C(I) {
                        var K = $("#J_userinfo_tpl").html();
                        var J = easyTemplate(K, I).toString();
                        $("#userinfo-main").html(J);
                        if (I.HeadUrl) {
                            $(".myinfo-header").find("img").attr("src", I.HeadUrl)
                        }
                    }
                    getUserinfoData(window.itemCusCode, C);
                    $(".menu-myinfo").prepend(A)
                } else {
                    $(".menu-myinfo").prepend(B)
                }
                $("p.number").html(D.GroupCartCount || 0);
                if (D.cartInfoGroup.length != 0) {
                    $(".orderList").show();
                    $(".accounts").show();
                    $("#cartNothings").hide();
                    var O = $("#J_goods_list_tpl").html();
                    var N = easyTemplate(O, D.cartInfoGroup).toString();
                    $("#order-List").html(N);
                    $("span.cartSum-h").html(D.GroupCartCount || 0);
                    $("#carpricesums").html(D.GroupTotalAmount || 0);
                    var M = $("span:[mola=remove]");
                    M.click(function () {
                        var J = $(this).attr("warecode")
                          , I = $(this).attr("kitorder")
                          , K = $(this).attr("procode");
                        if (confirm("你确定要删除此商品么？")) {
                            var tmpprocode = $(this).attr("procode");

                            if (tmpprocode == undefined || tmpprocode == "0") {
                                $.ajax({
                                    dataType: "jsonp",
                                    url: ShoppingCartDomain + "/shoppinghandler/removecartitem",
                                    data: {
                                        warecode: J,
                                        kitorder: I
                                    },
                                    success: function (L) {
                                        E()
                                    }
                                })
                            } else {
                                $.ajax({
                                    dataType: "jsonp",
                                    url: ShoppingCartDomain + "/ProductPromote/RemovePromote",
                                    data: {
                                        prmcode: K,
                                        warecode: J
                                    },
                                    success: function (L) {
                                        E()
                                    }
                                })
                            }
                        }
                        return false
                    })
                } else {
                    $(".orderList").hide();
                    $(".accounts").hide();
                    $("#cartNothings").show()
                }
            }
        })
    }
    E();
    $("#Imrobot").click(function () {
        if (!$("#dlgsvr")[0]) {
            $('<div id="dlgsvr" style="width:705px;height:510px"><iframe src="http://help.moonbasa.com/robot2/robot#cn=18580&type=1&adsiteid=10000007" style="width:700px;height:505px;border:0" frameborder="0"></iframe></div>').hide().appendTo($("body"))
        }
        $("#dlgsvr").dialog({
            autoOpen: true,
            title: "梦芭莎在线客服",
            width: 720,
            modal: true,
            resizable: false
        });
        $(window).scrollTop($(window).scrollTop() - 1);
        return false
    })
});
function getUserinfoData(C, D) {
    $.ajax({
        url: MemberDomain + "/customer/get?cuscode=" + C,
        dataType: "jsonp",
        success: D
    })
}
function removeMyinfo(A) {
    $(A).parent().hide()
}

//获取用户头像
function getUserHead(cusCode, successCallback) {
    $.ajax({
        dataType: "jsonp",
        url: "http://zone.moonbasa.com/home/getUserHead",
        data: { uid: cusCode },
        success: successCallback
    });
}
;