$(function () {

    $("#TOP_MENU").on("click", togMENU);
    function togMENU() {
        $("#MENULIST").slideToggle(200);
        $(this).toggleClass("on");
    }

    $(window).on("resize", CLEARSTYLE);
    function CLEARSTYLE() {
        if ($(window).innerWidth() > 767) {
            $("#MENULIST").removeAttr("style");
        }
    }

    $("#topNews li").eq(0).find("a").addClass("a_style");
    $("#topNews li").click(function () {
        var BRO = $(this).index();
        $("#topNews").find("a").removeClass("a_style");
        $(this).find("a").addClass("a_style");
        $(".BOXS").css("display", "none");
        $(".BOXS").eq(BRO).fadeIn(200);
        return false;
    })


    $(".BOXS li").hover(function () {
        var BRO = $(this).index();
        $(".BOXS li").eq(BRO).find("p").css("text-decoration", "underline");
        $(this).css("cursor", "pointer")
    }, function () {
        $(".BOXS li").find("p").css("text-decoration", "none");
        $(this).css("cursor", "initial")
    })


    $("#PIC_BOTTOM").hover(function () {
        $(this).find("div").stop(true, false).animate({ height: "120px" }, 200);
    }, function () {
        $(this).find("div").stop(true, false).animate({ height: "100px" }, 200);
    })


    $(".box").hover(function () {
        var BRO = $(this).index();
        $(".box").eq(BRO).find("p").css("text-decoration", "underline");
    }, function () {
        $(".box").find("p").css("text-decoration", "none");
    })


    $(".box_q").on("click", OPENTAB);
    function OPENTAB() {
        $(this).siblings().slideToggle(400);
        $(this).on("click", CLOSETAB);
    }
    function CLOSETAB() {
        $(this).off("click", CLOSETAB);
    }

    $("#TOPTOP").on("click", TOPTOP);
    function TOPTOP() {
        $("html,body").animate({ scrollTop: 0 }, 1000, "easeOutExpo");
        return false;
    }

    $(window).scroll(function () {
        var MOVE = $(window).scrollTop();
        if (MOVE < 200) {
            $("#TOPTOP").fadeOut(400);
            $("nav").fadeIn(400)
        } else {
            $("#TOPTOP").fadeIn(400);
            $("nav").fadeOut(400);
        }
    })

    $("#toJoin").click(function () {
        var CONDITION = $("#join_intro").position().top;
        $("html,body").stop(true, false).animate({ scrollTop: CONDITION }, 500);
        return false;
    });

    $("#toMeeting").click(function () {
        var MEETING = $("#join_cont4-1").position().top;
        $("html,body").stop(true, false).animate({ scrollTop: MEETING }, 500);
        return false;
    });
})


