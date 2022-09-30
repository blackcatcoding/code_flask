//注册功能的ajax方法
function register_post(){
	var username = $("#register-name").val()
	var password = $("#register-password").val()

	var data = {
		'username' : username,
		'password' : password
	}

	$.post('/user/register',data,function(result){
//	    //一般解决方法
//	    //如果返回的响应页面是登录页，则让浏览器显示该页面
//	    console.log(typeof(result))
//	    if(result.indexOf("static/js/login.js") != -1){
//	        window.location.href = "/user/login/";
//	    }else{
//	    //否则正常显示提示信息
//	        $(".regist-username .error-msg").html(result)
//	    }
        console.log(result);
        //解析JSON数据
        if(result['status'] == 'success'){
            window.location.href = "/user/login";
        }else if(result['status'] == 'failure'){
            $(".regist-username .error-msg").html(result['msg'])
        }

	});
}
