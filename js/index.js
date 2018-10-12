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

$("#search").keyup(function(){
	$("#result").css({display:"block"});
});
// 划过li
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

// 搜索后预结果中的点击关闭
$(".result_bottom a").click(function(){
	$("#result").css({display:"none"});
});
// 搜索提示信息
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
// 专栏分类（有问题）
$.each(
	$(".col_list div"),function(){
		$(this).hover(
			function(){
				$(this).css({
					background:" #000",
					color:"#fff"
				});
				$(".span_tra").css({display:"block"});
			},
			function(){
				$(this).css({
					background:" #fff",
					color:"#000"
				});
				$(".span_tra").css({display:"none"});
			}
		);
});

// 划过小人显示的登录注册
$("#ren").hover(
	function(){
		$(".reg").css({
			display:"block"
		});
		$(this).css({background:"#e50065"});
		$(".reg").mouseover(function(){
			$(".reg").css({
				display:"block"
			});
			$("#ren").css({background:"#e50065"});
		});
		$(".reg").mouseout(function(){
			$(".reg").css({
				display:"none"
			});
			$("#ren").css({background:"#000"});
		});
	},
	function(){
		$(".reg").css({
			display:"none"
		});
		$(this).css({background:"#000"});
	}
);
// 登录
$(".denglu").hover(
	function(){
		$(this).css({background:"#fff",color:"#c10055"});

	},
	function(){
		$(this).css({background:"#c10055",color:"#fff"});
	}
);
// 注册
$(".zuce").hover(
	function(){
		$(this).css({background:"#c10055",color:"#fff"});
		$(".denglu").css({background:"#fff",color:"#c10055"});

	},
	function(){
		$(this).css({background:"#fff",color:"#c10055"});
		$(".denglu").css({background:"#c10055",color:"#fff"});

	}
);
$(".zuce").click(function(){
	$(location).attr("href","login.html");
});

// 划过购物车
$(".sum").hover(
	function(){
		$(".shopping").css({display:"block"});
		$(".sum").css({background:"#e50065"});
		$(".shopping").mouseover(function(){
			$(".shopping").css({display:"block"});
			$(".sum").css({background:"#e50065"});
		});
		$(".shopping").mouseout(function(){
			$(".shopping").css({display:"none"});
			$(".sum").css({background:"#000"});
		});
	},
	function(){
		$(".shopping").css({display:"none"});
		$(".sum").css({background:"#000"});
	}
);
// 划过心
$("#xin").hover(
	function(){
		$(this).css({background:"#e50065"});
	},
	function(){
		$(this).css({background:"#000"});
	}
);
// 划过微信
$("#weixin").hover(
	function(){
		$(".wenxinCode").css({display:"block"});
		$(this).css({background:"#e50065"});
		$(".wenxinCode").mouseover(function(){
			$(".wenxinCode").css({display:"block"});
			$("#weixin").css({background:"#e50065"});

		});
		$(".wenxinCode").mouseout(function(){
			$(".wenxinCode").css({display:"none"});
			$("#weixin").css({background:"#000"});

		});
	},
	function(){
		$(".wenxinCode").css({display:"none"});
		$(this).css({background:"#000"});
	}
);
// 划过耳机
$("#erji").hover(
	function(){
		$(this).css({background:"#e50065"});
	},
	function(){
		$(this).css({background:"#262626"});

	}
);
// 划过返回顶部
$("#backTop").hover(
	function(){
		$(".back").css({display:"block"});
		$(this).css({background:"#e50065"});
	},
	function(){
		$(".back").css({display:"none"});
		$(this).css({background:"#000"});
	}
);
// 点击返回顶部
$("#backTop").click(
	function(){
		$('body,html').animate({scrollTop:0},0);
        return false;
	}
);
//划过顶部的微信
$("#weixin2").hover(
	function(){
		$(".wei2").css({display:"block"});
	},
	function(){
		$(".wei2").css({display:"none"});
	}
);
//划过顶部的微博
$("#weibo2").hover(
	function(){
		$(".weibo").css({display:"block"});
	},
	function(){
		$(".weibo").css({display:"none"});
	}
);
//划过顶部的手机版
$("#phone2").hover(
	function(){
		$(".shouji").css({display:"block"});
		$(".phone").attr({src:"img/redphone.jpg"});
	},
	function(){
		$(".shouji").css({display:"none"});
		$(".phone").attr({src:"img/phone.jpg"});
	}
);
//划过顶部的购物车
$("#car2").hover(
	function(){
		$(".shopCar").css({display:"block"});
	},
	function(){
		$(".shopCar").css({display:"none"});
	}
);