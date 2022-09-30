var heights = [280, 320];

$(function () {
    $('.blog-loading').css({'display': 'none'});
    $('.kid-container').css({'display': 'block'});

    avaluable();

    $(window).resize(function () {
        avaluable();
    });
    $('.am-gotop-fixed').mouseover(function () {
        $('.am-gotop-icon-custom').attr('src', '/static/images/rocket-r.png');
    }).mouseout(function () {
        $('.am-gotop-icon-custom').attr('src', '/static/images/rocket-b.png');
    });

    $('.kid-userphoto').click(function () {
        $('.kid-headlist').toggle({'display': 'block'});
    });
});

function show_detail(blog) {
    var id = blog.dataset.id;
    var photo = $(blog).find('.kid-piece-photo').css('background-image');
    photo = photo.split('"')[1].split('"')[0].split('/');
    photo = photo[photo.length - 1]
    var name = $(blog).find('.kid-piece-name').html();
    window.open(BASE_PATH + '/moments/detail?id=' + id + '&name=' + name + '&photo=' + photo);
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

var ajax_flag = false;

function page_next() {
    $('#kid-more').hide()
    $('.am-icon-spinner').css({'display': 'block'});
    if (ajax_flag) return;
    ajax_flag = true;
    loading_more(function (result) {
        $('#kid-more').show();
        $('.am-icon-spinner').css({'display': 'none'});
        if (result.data.length == 0) {
            //没有内容了
            $('.kid-loading a').html('没有更多内容了');
            $('#kid-more').hide();
        } else {
            //还有内容
            blogs = result.data;
            for (var i = 0; i < blogs.length; i++) {
                var blog_template =
                    '<div class="kid-piece" data-id="' + blogs[i].id + '" onclick="show_detail(this)">' +
                    '<div class="kid-piece-content" style="background-image: url(/static/images/photo/' + blogs[i].photo + ');"></div>' +
                    '<div class="kid-piece-footer">' +
                    '<div class="kid-piece-photo" style="background-image: url(/static/images/photo/' + blogs[i].head + ');"></div>' +
                    '<div class="kid-piece-name">' + blogs[i].username + '</div>' +
                    '<div class="kid-piece-date">' + blogs[i].create_time + '</div>' +
                    '</div>' +
                    '</div>';
                $(blog_template).appendTo($('.kid-content'));
                avaluable(); //重新排列
            }
        }
        ajax_flag = false;
    });
}