function check(){
    var username = $('.ele-username').val();
    var password = $('.ele-password').val();
    if(!varify(username,/^[a-zA-Z][a-zA-Z0-9]{3,15}$/)){
        $('.error-msg').html('用户名为3位以上数字和字母');
        return false;
    }
    if(!varify(password,/^[a-zA-Z0-9]{4,10}$/)){
        $('.error-msg-p').html('请输入4-10位密码');
        return false;
    }
    return true;
}

function varify(value,reg){
    $('.error-msg').html('');
    return reg.test(value)
}

//$(function(){
//    $('.regist-btn').click(function(){
//        if(check()){
//            register_post();
//        }
//    });
//});