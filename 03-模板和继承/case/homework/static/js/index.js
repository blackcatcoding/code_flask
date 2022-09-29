var heights = [280, 320];

$(function () {
    $('.blog-loading').css({'display':'none'});
    $('.kid-container').css({'display':'block'});

    avaluable();

    $(window).resize(function () {
        avaluable();
    });
    $('.am-gotop-fixed').mouseover(function () {
        $('.am-gotop-icon-custom').attr('src', '/static/images/rocket-r.png');
    }).mouseout(function () {
        $('.am-gotop-icon-custom').attr('src', '/static/images/rocket-b.png');
    });

    $('.kid-userphoto').click(function(){
        $('.kid-headlist').toggle({'display':'block'});
    });
});
function show_detail(blog) {
    var id = blog.dataset.id;
    var photo = $(blog).find('.kid-piece-photo').css('background-image');
    photo = photo.split('"')[1].split('"')[0].split('/');
    photo = photo[photo.length-1]
    var name = $(blog).find('.kid-piece-name').html();
    window.open(BASE_PATH + '/moments/detail?id='+id+'&name='+name+'&photo='+photo);
}

function avaluable() {
    var $pieces = $('.kid-piece');
    var width = document.getElementsByClassName('kid-content')[0].clientWidth;
    var count = parseInt(width / 200); // 一行能放几个
    $('.kid-content').css({'height': '20px'});   //高度重置
    for (var i = 0; i < $pieces.length; i++) {
        var line = parseInt(i / count);    //行数
        var colume = i % count;   //列数
        if (line % 2 == 0) {
            var x = 205 * colume;
            var y = 660 * line / 2;
            $pieces.eq(i).css({
                'height': heights[colume % 2] + 'px',
                'transform': 'translate(' + x + 'px,' + y + 'px)'
            })
            $('.kid-content').css({'height': y + 400 + 'px'});
        } else {
            var x = 205 * colume;
            var y = (600 + 60) * parseInt(line / 2) + (heights[colume % 2] + 30) * (line % 2);
            $pieces.eq(i).css({
                'height': heights[(colume + 1) % 2] + 'px',
                'transform': 'translate(' + x + 'px,' + y + 'px)'
            })
            $('.kid-content').css({'height': y + 400 + 'px'});
        }
    }
}