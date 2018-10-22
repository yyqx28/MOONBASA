// 表单验证
// 输入手机号或邮编
$("#user").onfocus = function(){
		$("#user").value = "";
		$("#user").style.cssText = "border-color:#e30165;";
}
$("#user").onblur = function(){
		if($("#user").value){
			$("#user").style.cssText = "border-color:#c9c9c9;";
		}else{
			$("#user").style.cssText = "border-color:#c9c9c9;";
			$("#user").value = "手机号或邮编";
		}
		
		if(check($("#user").value,"user")==true){
			$("#userpoint").style.visibility = "hidden";
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
			return;
		}else{
			$("#pwdpoint").style.visibility = "visible";
		}
}
// 确认密码
$("#pwdOk").onfocus = function(){
		$("#pwdOk").placeholder = "";
		$("#pwdOk").style.cssText = "border-color:#e30165;";
}
$("#pwdOk").onblur = function(){
		if($("#pwdOk").value){
			$("#pwdOk").style.cssText = "border-color:#c9c9c9;";
		}else{
			$("#pwdOk").style.cssText = "border-color:#c9c9c9;";
			$("#pwdOk").placeholder = "确认密码";
		}
		if($("#pwdOk").value==$("#pwd").value){
			$("#pwdpointOk").style.visibility = "hidden";
			return;
		}else{
			$("#pwdpointOk").style.visibility = "visible";
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
// 随机获取验证码
getCode();//页面加载即执行
$("#randomMa_top").onclick = getCrrCode;
function  getCrrCode(){
	getCode();
}
function getCode(){
		$("#randomMa_top").style.backgroundColor = "#fff";
		let strCode = getNumber();
		let arrCode = strCode.split("");
		$("#randomMa_bottom").innerHTML = '';
		for(var i in arrCode){
			let span = document.createElement("span");
			span.innerHTML = arrCode[i];
			span.style.color = getColor();
			span.style.fontSize = "30px";
			span.style.marginLeft = "10px";
			span.style.marginRight = "10px";
			$("#randomMa_bottom").appendChild(span);
		}
}
function getNumber(){
		let num=[];
		let stringCode = '';
		for(var i=0;i<4;i++){
			var ranNum = Math.ceil(Math.random() * 25);
			num.push(String.fromCharCode(65+ranNum));
			stringCode = num.join('')
		}
		return stringCode;
}
function getColor(){
		let str="#";
		for(var i=0;i<6;i++){
			str+=(parseInt(Math.random()*16)).toString(16);
		}
		return str;
}
// 验证码(错误)
$("#testCode").onfocus = function(){
	$("#testCode").value = "";
	$("#testCode").style.cssText = "border-color:#e30165;";
}
let _s="close";

window.onbeforeunload = function(){
	 _s="fresh";
}
let currCodes = '';
function toFreshen(){
	if( _s="fresh"){
		currCodes = getCode();
	}else{
		currCodes = getCrrCode();
	}
	return currCodes;
	console.log(currCodes);
}
toFreshen();
$("#testCode").onblur = function(){
	if($("#testCode").value){
		$("#testCode").style.cssText = "border-color:#c9c9c9;";
	}else{
		$("#testCode").style.cssText = "border-color:#c9c9c9;";
		$("#testCode").value = "验证码";
		$("#codepoint").style.visibility = "visible";
	}
	
	if($("#testCode").value==currCodes){
		$("#codepoint").style.visibility = "hidden";
		return;
	}else{
		$("#codepoint").style.visibility = "visible";
	}
}


// 注册提交
$("#sub").onclick = function(){
	// 条款是否同意
	if($("#check").checked==true){
		$("#sub").disabled==true;
	}else{
		$("#sub").disabled==false;
		alert("请选中注册条款！");
		return;
	}
	// 1.创建对象
	let xhr = new XMLHttpRequest();
	// 2.设置参数
	xhr.open("post","php/loginajax.php",true);
	// 3.设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			// 5.接收响应
			let str = xhr.responseText;
			if(str=="1"){
				location.href="register.html";
				// alert("注册成功！");
			}else if(str=="-1"){
				alert("注册失败！");
			}else{
				alert("注册失败！服务器出错~");
			}
		}
	}
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	// 4.发送请求
	let str = "username="+$("#user").value+"&password="+$("#pwd").value;
	xhr.send(str);	
}


