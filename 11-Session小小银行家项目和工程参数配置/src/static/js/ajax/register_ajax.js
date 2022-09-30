//注册功能的ajax方法
function register_post(){
	var username = $("#register-name").val();
	var password = $("#register-password").val();

	var data = {
		'username' : username,
		'password' : password
	};

	$.post('/user/register',data,function(result){
        console.log(result);
        //解析JSON数据
        if(result['status'] == 'success'){
            window.location.href = "/user/login";
        }else if(result['status'] == 'failure'){
            $(".regist-username .error-msg").html(result['msg'])
        }

	});
}
