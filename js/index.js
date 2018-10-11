// 搜索框
$("#search").val("秋冬新品，欲购从速！");
$("#search").css({
	fontSize:"12px",
	color:"#b9b9b9"
});
$("#search").focus(function(){
	$("#search").val("");
});
$("#search").blur(function(){
	$("#search").val("秋冬新品，欲购从速！");
});
// 搜索后预结果
$("#search").keydown(function(){
	$("#result").css({display:"block"});
});
$.each(
	$(".result_top ul li"),function(){
		$(this).hover(
			function(){
				$(this).css({background:"#c8c8b0",cursor:"pointer"});
			},
			function(){
				$(this).css({background:"#fff"});
			}
		);
});
// $("#result").mouseout(function(){
// 	$("#result").css({display:"none"});
// });
// 点击关闭
$(".result_bottom a").click(function(){
	$("#result").css({display:"none"});
});
// 搜索提示
$.each(
	$(".sapnlis a"),function(){
		$(this).hover(
			function(){
				$(this).css({color:"#fff"})
			},
			function(){
				$(this).css({color:"#9c9d9f"})	
			}
		);
});
// 菜单栏
$.each(
	$(".menu_list .list"),function(){
	$(this).hover(
		function(){
			$(".list_details").css({display:"block"});
		},
		function(){
			$(".list_details").css({display:"none"});
		}
	);
});
// 导航栏
$.each(
	$(".nav a"),function(){
		$(this).hover(
			function(){
				$(this).css({color:"#e60063"})
			},
			function(){
				$(this).css({color:"#727272"})	
			}
		);
});
// 专栏分类
$.each(
	$(".col_list div"),function(){
		$(this).hover(
			function(){
				$(this).css({
					background:" #000",
					color:"#fff"
				});
				$("span").css({
					width:"0px",
					height:"0px",
					border:"6px solid transparent",
					position: "absolute",
					top:"35px",
					left:"70px"
				});
			},
			function(){
				$(this).css({
					background:" #fff",
					color:"#000"
				});
				$("span").css({
					width:"0px",
					height:"0px"
					
				});	
			}
		);
});

