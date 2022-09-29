var context = new (window.AudioContext || window.webkitAudioContext)();

var ques_arr;    // 当前等级的题库（10）
var level = 1;   // 初始化等级
var ajax_flag = false;    // AJAX请求flag
var score = 0;   //初始化分数
var correct_count = 0;   //回答正确的题目数量

$(function () {
    $('.blog-loading').css({'display':'none'});
    $('.kid-container').css({'display':'block'});
    //选关界面
    selectionInterface();

    //初始score隐藏
    $('.score').hide();

    //选项的点击事件
    oFrameClick();

    //左右拉动动画效果
    slideCheckPoints();

    //背景音乐
    // $('#bg-music')[0].play();

    $('.checkpoint-back,.quiz-back').click(function(){
        window.open(BASE_PATH + '/microblog/index','_self');
    });

});

//选题界面图形展示
function selectionInterface() {
    showCheckPoints();     //选择宝箱界面
    changeCheckBox();      //更改宝箱图标
}

//答题界面图形展示
function questionInterface() {
    get_questions();       //后台获取题目
    showQuestionTab();     //显示答题卡
}

function showCheckPoints() {
    $('.frame-quiz').removeClass('show').addClass('hide');
    setTimeout(function () {
        $('.frame-quiz').removeClass('hide').css({'display': 'none'});
        $('.frame-checkpoints').css({'display': 'block'}).addClass('show');
    }, 500)
}

function slideCheckPoints() {
    var index = 0;
    var list = $('.checkpoint-frame .points ul');
    var position = ['0%', '-34%', '-67%', '-100%'];
    $('.checkpoint-frame .pre').click(function () {
        if (index > 0) {
            index--;
            list.animate({left: position[index]});
        }
    });
    $('.checkpoint-frame .next').click(function () {
        if (index < 2) {
            index++;
            list.animate({left: position[index]});
        }
    });
}
function changeCheckBox() {
    for (var i = 1; i <= 6; i++) {
        if (i < level) {
            $('.points ul li:nth-child(' + i + ')').css(
                {'background-image': 'url(/static/images/quiz/box-le' + i + '-open.png)'}
            ).unbind('click');
        } else if (i > level) {
            $('.points ul li:nth-child(' + i + ')').css(
                {'background-image': 'url(/static/images/quiz/box-dull.png)'}
            ).unbind('click');
        } else {
            if (level < 6) {
                $('.points ul li:nth-child(' + i + ')').css(
                    {'background-image': 'url(/static/images/quiz/box-le' + i + '.png)'}
                ).click(function () {
                    questionInterface();
                    $('.score').css({'background-image': 'url(/static/images/quiz/score' + level + '.png)'}).show(500);
                });
            }
        }
    }
}

function showQuestionTab() {
    $('.frame-checkpoints').removeClass('show').addClass('hide');
    setTimeout(function () {
        $('.frame-checkpoints').removeClass('hide').css({'display': 'none'});
        $('.frame-quiz').css({'display': 'block'}).addClass('show');
    }, 500)
}

function oFrameClick() {
    $('.oframe').click(function () {
        //校验结果是否正确
        var id = $('.content').data('quesid');
        var option = $(this).data('ans');
        check_question(id, option, $(this));
    })
}






