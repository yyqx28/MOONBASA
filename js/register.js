// 表单验证
// 输入手机号或邮编
$("#user").onfocus = function(){
		$("#user").value = "";
		$("#user").style.cssText = "border-color:#e30165;";
}
$("#user").onblur = function(){
		if($("#user").value){
			$("#user").style.cssText = "border-color:#c9c9c9;background-color:#bcb769";
		}else{
			$("#user").style.cssText = "border-color:#c9c9c9;";
			$("#user").value = "手机号/邮箱/会员卡号";
		}
		if(check($("#user").value,"user")==true){
			$("#userpoint").style.visibility = "hidden";
			$("#tick1").style.display = "block";
			return;
		}else{
			$("#userpoint").style.visibility = "visible";
		}
}
// 输入密码
$("#pwd").onfocus = function(){
		$("#pwd").placeholder = "";
		$("#pwd").style.cssText = "border-color:#e30165;";
}
$("#pwd").onblur = function(){
		if($("#pwd").value){
			$("#pwd").style.cssText = "border-color:#c9c9c9;";
		}else{
			$("#pwd").style.cssText = "border-color:#c9c9c9;";
			$("#pwd").placeholder = "密码";
		}
		
		if(check($("#pwd").value,"pwd")==true){
			$("#pwdpoint").style.visibility = "hidden";
			$("#tick2").style.display = "block";
			return;
		}else{
			$("#pwdpoint").style.visibility = "visible";
		}
}
function check(str,style){
		switch(style){
			case "user":
			var pattern1=/^1\d{10}/gi;
			var pattern2=/^\w+@\w+(\.\w+)+$/gi;
			if(pattern1.test(str) || pattern2.test(str)){
				return true;
			}else{
				return false;
			}
			break;
			case "pwd":
			var pattern=/^[a-z0-9][a-z0-9]{7,19}$/gi;
			if(pattern.test(str)){
				return true;
			}else{
				return false;
			}
			break;
		}
}

// 立即登录
$("#sub").onclick = function(){
	// if($("#check").style.checked==checked){
		// 1.创建对象
		let xhr = new XMLHttpRequest();
		// 2.设置参数
		xhr.open("post","php/registerajax.php",true);
		// 3.设置回调函数
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4&&xhr.status==200){
				// 5.接收响应
				let str = xhr.responseText;
				if(str=="1"){
					location.href="index.html";
				}else if(str=="0"){
					alert("登录失败");
				}
			}
		}
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		// 4.发送请求
		let str = "username="+$("#user").value+"&password="+$("#pwd").value;
		xhr.send(str);
		// 设置cookie
		var names = $("#user").value;
		setCookie("username",names,7);
	// }
}

