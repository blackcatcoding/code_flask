$(function () {
    $('.blog-loading').css({'display':'none'});
    $('.game-container').css({'display':'block'});
    $('.game-list-item').mouseover(function () {
        $(this).find('.game-list-mask').show();
    });
    $('.game-list-item').mouseout(function () {
        $(this).find('.game-list-mask').hide();
    });
    $('.game-back').click(function(){
        window.open(BASE_PATH + '/microblog/index','_self');
    })
})