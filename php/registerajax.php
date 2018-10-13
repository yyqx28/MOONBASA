<?php
	header("Content-type:text/html;charset=utf-8");
	// 1.获取数据
	$username = $_POST['username'];
	$password = $_POST['psw'];
	// 2.数据处理
	// 1)建立连接（搭桥）
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		echo "数据库连接失败！";
	}else{
		// 2)选择数据库（选择目的地）
		mysql_select_db("message",$con);
        // 3)执行SQL数据
		$sqlstr = "insert into users(username,password) values('$username','$password')";
		$result = mysql_query($sqlstr,$con);
		// 4)关闭数据库
		mysql_close($con);
		// 3.响应
		$rows = mysql_num_rows($result);
		if(rows==0){
			echo "登录成功";
		}else{
			echo "登录失败";
		}
	}
?>