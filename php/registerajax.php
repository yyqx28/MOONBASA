<?php
	header("Content-style:text/html;charset=utf-8");
	
	//1接收数据
	$username = $_POST["username"];
	$password = $_POST["password"];
	
	//2、在数据库中查询
   //1)、建立连接，并选择数据库
   $con = mysql_connect("localhost","root","root");
   mysql_select_db("moonbasa",$con);
 $sqlstr = "select * from users where username='$username' and pwd='$password'";
   $result=mysql_query($sqlstr,$con);
   //3)、关闭连接
   mysql_close($con);
	//3、响应结果
	//获得$result的行数
	$rows=mysql_num_rows($result);
	if($rows>0){//登录成功
		echo "1";	
	}else {//登录失败，返回0.
		echo "0";
	}	
?>