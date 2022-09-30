function check(){
    var username = $('.ele-username').val();
    var password = $('.ele-password').val();
    var repass = $('.ele-repass').val();
    if(!varify(username,/^[a-zA-Z][a-zA-Z0-9]{3,15}$/)){
        $('.regist-username .error-msg').html('用户名为3位以上数字和字母');
        return false;
    }
    if(!varify(password,/^[a-zA-Z0-9]{4,10}$/)){
        $('.regist-password .error-msg').html('请输入4-10位密码');
        return false;
    }
    if(repass != password){
        $('.regist-repass .error-msg').html('两次密码不一致');
        return false;
    }
    return true;
}

function varify(value,reg){
    $('.error-msg').html('');
    return reg.test(value)
}

$(function(){
    $('.regist-btn').click(function(){
        if(check()){
            register_post();
        }
    });
});