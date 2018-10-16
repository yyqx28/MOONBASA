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
$(".denglu").click(function(){
	$(location).attr("href","register.html");
});
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
