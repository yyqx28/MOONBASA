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
// 验证码
$("#testCode").onfocus = function(){
		$("#testCode").value = "";
		$("#testCode").style.cssText = "border-color:#e30165;";
}
let _s="close";
// window.onunload = function(){
// 	   if(_s=="fresh")
// 	      alert('页面刷新了');   
// 	}
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
// 动态口令
$("#wirtekoulin").onfocus = function(){
		$("#wirtekoulin").value = "";
		$("#wirtekoulin").style.cssText = "border-color:#e30165;";
}
$("#wirtekoulin").onblur = function(){
		if($("#wirtekoulin").value){
			$("#wirtekoulin").style.cssText = "border-color:#c9c9c9;background-color:#bcb769";
		}else{
			$("#wirtekoulin").style.cssText = "border-color:#c9c9c9;";
			$("#wirtekoulin").value = "动态口令";
		}
		if(check($("#wirtekoulin").value,"user")==true){
			$("#userpoint").style.visibility = "hidden";
			$("#tick1").style.display = "block";
			return;
		}else{
			$("#actKoulin").style.visibility = "visible";
		}
}
// 获取动态口令蒙版消失
$("#getkoulin").onclick = function(){
	$("#mask").style.opacity = 1;
}
// 立即登录
$("#sub").onclick = function(){
	if($("#check").style.checked==checked){
		// 1.创建对象
		let xhr = new XMLHttpRequest();
		// 2.设置参数
		xhr.open("post","php/registerajax.php",true);
		// 3.设置回调函数
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4&&xhr.status==200){
				// 5.接收响应
				let str = xhr.responseText;
				if(str=="登录成功"){
					location.href="index.html";
				}else if(str=="登录失败"){
					alert("登录失败！");
				}
			}
		}
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		// 4.发送请求
		let str = "username="+$("#user").value+"&password="+$("#pwd").value;
		xhr.send(str);
	}
}
