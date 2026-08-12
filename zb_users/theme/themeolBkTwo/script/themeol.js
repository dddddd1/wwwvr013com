jQuery(document).ready(function($){
    //nav
    $("#mnavh").click(function() {
        $("#starlist").toggle();
        $("#mnavh").toggleClass("open");
        $(".sub").hide();
        //$(".sub").first().show();
    });
    
    $(window).scroll(function() {
        var h = $("body").height() - window.getHeight();
        //console.log(h);
        if ($(window).scrollTop() > 28 && h > 120) {
            $(".topnav").addClass("is-fixed").find("").fadeOut(400);


        } else if ($(window).scrollTop() < 28) {
            $(".topnav").removeClass("is-fixed").find("").fadeIn(400);
        }
    });

    //nav menu
    $(".menu").click(function(event) {
        $(this).children('.sub').slideToggle();
        $(this).siblings('.menu').children('.sub').slideUp('');
        event.stopPropagation()
    });
    $(".menu a").click(function(event) {
        event.stopPropagation();
    });
    $(".sub li").click(function(event) {
        event.stopPropagation();
    });

    //toolbar
    $(".toolbar-open").click(function(){
        $(".toolbar-open").addClass("openviewd");
        $(".toolbar").addClass("closed");
    });
    $("#closed").click(function(){
        $(".toolbar-open").removeClass("openviewd");
        $(".toolbar").removeClass("closed");
        $("#toolbar-menu li").removeClass("current");
    });

    //tab切换	
    $("#tab li").click(function(){ //给li标签添加事件
        var index=$(this).index();  //获取当前li标签的个数
        $(this).parents().next().find(".tab-box").hide().eq(index).show();
        $(this).addClass("tab-current").siblings().removeClass("tab-current"); //li标签显示，同辈元素隐藏
    });

    //scroll to top
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.icon-top');
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration
        );
    });

//search
    $(".is-search").click(function() {
        $(".search-page").toggle();
    });
    $(".go-left").click(function() {
        $(".search-page").toggle();
    });

//toolbar-menu	
    $('#toolbar-menu li').click(function(){
        $(this).addClass('current').siblings().removeClass('current');
    });

//endmenu
    $(".endmenu li a").each(function(){
        $this = $(this);
        if($this[0].href==String(window.location)){
            $this.parent().addClass("act");
        }
    });
});
$(function () {
    window.getHeight = function() {
        if (window.innerHeight != undefined) {
            return window.innerHeight;
        } else {
            var B = document.body
                , D = document.documentElement;
            return Math.min(D.clientHeight, B.clientHeight);
        }
    };
});
$(function() {
    jQuery('aside.right-box').theiaStickySidebar({
        additionalMarginTop:0
    });
});
// 导航栏每个导航背景控制
$(function() {
    var b = $("#monavber").attr("data-type");
    $("ul.navbar>li ").each(function() {
        try {
            var T = $(this).attr("id");
            if ("index" == b)
                "nvabar-item-index" == T && $("#nvabar-item-index").addClass("current-menu-item");
            else if ("category" == b) {
                if (null != (bQ = $("#monavber").attr("data-infoid")))
                    for (var d = bQ.split(" "), S = 0; S < d.length; S++)
                        T == "navbar-category-" + d[S] && $("#navbar-category-" + d[S]).addClass("current-menu-item")
            } else if ("article" == b) {
                if (null != (bQ = $("#monavber").attr("data-infoid")))
                    for (d = bQ.split(" "),
                             S = 0; S < d.length; S++)
                        T == "navbar-category-" + d[S] && $("#navbar-category-" + d[S]).addClass("current-menu-item")
            } else if ("page" == b) {
                null != (bQ = $("#monavber").attr("data-infoid")) && T == "navbar-page-" + bQ && $("#navbar-page-" + bQ).addClass("current-menu-item")
            } else if ("tag" == b) {
                var bQ;
                null != (bQ = $("#monavber").attr("data-infoid")) && T == "navbar-tag-" + bQ && $("#navbar-tag-" + bQ).addClass("current-menu-item")
            }
        } catch (b) {}
    }),
        $("#monavber").delegate("a", "click", function() {
            $(".nav>li").each(function() {
                $(this).removeClass("current-menu-item")
            }),
            null != $(this).closest("ul") && 0 != $(this).closest("ul").length && ("munavber" == $(this).closest("ul").attr("id") ? $(this).addClass("current-menu-item") : $(this).closest("ul").closest("li").addClass("current-menu-item"))
        })
});



