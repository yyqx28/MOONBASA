function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}


//ajax
function ajax(method,url,param,isAsync,func){
	//1、创建对象
	let xhr = new XMLHttpRequest();
	
	//2、设置请求参数
	if(method.toLowerCase()=="get"){
		xhr.open(method,url+"?"+param,isAsync);		
	}else{
		xhr.open(method,url,isAsync);		
	}
	
	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			func && func(xhr.responseText);
		}
	}
	
	if(method.toLowerCase()=="get"){
		//4、发送请求
		xhr.send();
	}else if(method.toLowerCase()=="post"){
		//4、发送请求
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(param);
	}
}