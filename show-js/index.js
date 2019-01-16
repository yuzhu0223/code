// 导航部分
$(".top_center li").mouseenter(function(){
    $(this).addClass("active").siblings($(".lis>a")).removeClass("active");
}).mouseleave(function(){
    $(this).removeClass('active');
})

// 作品展示切换
$(".show_logo li").click(function(){
    var num = $(this).index();
    $(".show_logo .show_no").eq(num).css('display','block').siblings().css('display','none');
})


// 最美客照遮挡
$('.most_pic').mouseenter(function(){
    $(this).children('.most_most').animate({"top":0,"opacity":1},500)
})
$(".most_pic").mouseleave(function(){
    $(this).children(".most_most").animate({"top":-450,"opacity":0},500);
});