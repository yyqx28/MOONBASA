// 输入手机号或邮编
$(".user").onfocus = function(){
	$(".user").value = "";
	$(".user").style.cssText = "border-color:#e30165;";
}
$(".user").onblur = function(){
	if(check(this.value,"user")){
		return;
	}else{
		$(".userpoint").style.cssText = "visiblity:visible";
	}
}
function check(str,style){
	switch(style){
		case "user":
		var pattern1=/^1\d{10}/gi;
		var pattern2=/^\w+@\w+(\.\w+)+$/gi;
		break;
		case "pwd":
		var pattern=/^[a-z0-9]{8,20}$/gi;
		break;
	}
	return pattern.test(str);
}