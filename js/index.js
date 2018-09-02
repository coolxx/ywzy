$(function () {
    $('.tab-show-btn span').each(function (index) {
        $(this).click(function () {
            $('.tab-show-btn span').removeClass('act').eq(index).addClass('act');
            $('.tab-show-show').hide().eq(index).show()
        })
    })
    $('.m3-btn p').each(function (index) {
        $(this).click(function () {
            $('.m3-btn p').removeClass('act02').eq(index).addClass('act02');
            $('.m3-show').css('display','none').eq(index).css('display','table')
        })
    })
    var $n=0;
    setInterval(function () {
        $n++;
        if($n == $('.swiper-show').length){
            $n =0
        }
        $('.swiper-show').hide().eq($n).show();
        $('.swiper-btn span').removeClass('act03').eq($n).addClass('act03')
    },2000)
})