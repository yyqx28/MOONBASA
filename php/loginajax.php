<?php
	header("Content-style:text/html;charset=utf-8");
	$username = $_POST["username"];
	$password = $_POST["password"];
	// 1.建立连接
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		echo "链接失败";
	}else{
		// 2.连接数据库
		mysql_select_db("moonbasa",$con);
		// 1)查询
		$sqlstr = "select * from users where username='$username'";
		$result = mysql_query($sqlstr,$con);
		$rows = mysql_num_rows($result);
		if($rows<=0){
			// 2)添加
			$sqlstr = "insert into users (username,pwd) values ('$username','$password')";
			$result=mysql_query($sqlstr,$con);
			// 4.关闭数据库
			mysql_close($con);
			// 3.响应
			if($result==1){
				echo "1";//注册成功；
			}else{
				echo "0";//注册失败
			}
		}else{
			echo "-1";//注册失败，用户名已存在！
		}
	}	