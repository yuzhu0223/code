
//城市旅行，婚纱作品，客片展示
$('.showtop-r a').click(function () {
    $(this).addClass('a-active').siblings().removeClass('a-active');
})

//最美第几季
$('.kezhao .kezhao-left a').click(function () {
    $(this).addClass('a-active').siblings().removeClass('a-active');
})

//轮播图
var index = 0;
var furight = function () {
    index++;
    if (index > 2) {
        index = 0;
    }
    $('.photos .lunbox1').eq(index).fadeIn(1000).siblings().fadeOut();
}
$('.photos .btn').click(furight);
var dsq;
function fudsq() {
    dsq = window.setInterval(function () {
        furight();
    }, 2000)
}
fudsq();
$('.photos .lunbu,.btn').mouseenter(function (){
    window.clearInterval(dsq);
})
$('.photos .lunbu,.btn').mouseleave(function (){
    fudsq();
})