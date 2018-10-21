// 点击全部按钮，商品全部选中 
	$(".all").find("input[type='checkbox']").click(function(){
		if($(".all").find("input[type='checkbox']").prop('checked')){
				$(".lis_good").each(function(){
				$(".lis_good").find("input[type='checkbox']")
				.prop("checked",true);
				getsum();
				getprice();
			});
		}else{
			$(".lis_good").each(function(){
				$(".lis_good").find("input[type='checkbox']")
				.prop("checked",false);
				// 数量归零
				$(this).parent().next(".accounts").find(".shuliang").html(0);
				// 总价归零
				$(this).parent().next(".accounts").find(".zhehou").html(0);
			});	
		}
	});
// 取消选中某个商品，全选按钮取消选中
	$(".lis_good").find("input[type='checkbox']").click(function(){
		if(!$(this).find("input[type='checkbox']")
			.prop("checked")){
			console.log($(this).find("input[type='checkbox']")
			.prop("checked"));
			$(this).parent().parent().parent()
			.prev(".cen_tit").find("input[type='checkbox']")
			.prop("checked",false);
		}
	});
	// 依次选中按钮，全选按钮也选中
	// $(".lis_good").find("input[type='checkbox']").click(function(){
	// 	$(".lis_good").find("input[type='checkbox']").each(function(){
	// 		if(!$(this).prop("checked")){
	// 			$(this).parent().parent().parent()
	// 			.$(".cen_tit").find("input[type='checkbox']")
	// 			.prop('checked',true);
	// 			console.log($(this));
	// 		}
	// 	});
	// });
// 加减所选商品数量
	// 减
	$(".jian").click(function(){
		var t = $(this).parent().find(".sums");
		if(t.html()<=1){
			t.html(1);
		}else{
			t.html(parseInt(t.html()) - 1);
		}
		var s = $(this).parent().prev(".cost").children(".cost1");
		// console.log(s.html());
		var h = $(this).parent().next(".cost_he").children(".cost_he1");
		// console.log(h.html());
		h.html((s.html()*t.html()).toFixed(2));
		var Checked = $(this).parent().parent().parent()
			.find("input[type='checkbox']").prop('checked');
		if(Checked){
			getsum();
			getprice();
		}else{
			return;
		}
	});
	// 加
	$(".jia").click(function(){
		var t = $(this).parent().find(".sums");
		t.html(parseInt(t.html()) + 1);
		var s = $(this).parent().prev(".cost").children(".cost1");
		// console.log(s.html());
		var h = $(this).parent().next(".cost_he").children(".cost_he1");
		// console.log(h.html());
		h.html((s.html()*t.html()).toFixed(2));
		var Checked = $(this).parent().parent().parent()
			.find("input[type='checkbox']").prop('checked');
		if(Checked){
			getsum();
			getprice();
		}else{
			return;
		}
	});
	// 所有商品总数量
	function getsum(){
		var num2 = 0;
		$(".cen_lis .lis_good").each(function(){
		var s =  $(this).find(".good_right .sums").html();
		// console.log(s.html());
		num2 += parseInt(s);
		var cons = $(this).parent().next(".accounts")
		.find(".shuliang");
		// console.log(cons.html());
		cons.html(num2);
		// console.log(cons.html(num2));
		});
	}
	// 所有商品价格综合
	function getprice(){
		var price = 0;
		$(".cen_lis .lis_good").each(function(){
		var p =  $(this).find(".good_right .cost_he1").html();
		// console.log(s.html());
		price += parseInt(p);
		var  priceAll= $(this).parent().next(".accounts")
		.find(".zhehou");
		// console.log(cons.html());
		priceAll.html(price);
		// console.log(cons.html(num2));
		});
	}
	// 点击单个按钮，总数量总价格变化
	$(".cen_lis .lis_good").each(function(){
		$(this).find("input[type='checkbox']").click(function(){
			if(!$(this).prop('checked')){
				// 数量减少
				var m = $(this).parent().parent()
				.find(".good_right .sums").html();
				var a = $(this).parent().parent().parent()
				.next(".accounts").find(".acc_yuan .shuliang").html();
				var ma = parseInt(a)-parseInt(m);
				$(this).parent().parent().parent()
				.next(".accounts").find(".shuliang").html(ma);
				// 总价减少
				var r = $(this).parent().parent()
				.find(".good_right .cost_he1").html();
				var e = $(this).parent().parent().parent()
				.next(".accounts").find(".acc_yuan .zhehou").html();
				var re = parseInt(e)-parseInt(r);
				$(this).parent().parent().parent()
				.next(".accounts").find(".zhehou").html(re);
			}else{
				// 数量增加
				var m = $(this).parent().parent()
				.find(".good_right .sums").html();
				var a = $(this).parent().parent().parent()
				.next(".accounts").find(".acc_yuan .shuliang").html();
				var ma = parseInt(a)+parseInt(m);
				$(this).parent().parent().parent()
				.next(".accounts").find(".shuliang").html(ma);
				// 总价增加
				var r = $(this).parent().parent()
				.find(".good_right .cost_he1").html();
				var e = $(this).parent().parent().parent()
				.next(".accounts").find(".acc_yuan .zhehou").html();
				var re = parseInt(e)+parseInt(r);
				$(this).parent().parent().parent()
				.next(".accounts").find(".zhehou").html(re);
			}
		});
	});
	// 删除商品
	$(".del").click(function(){
		if(confirm("您确定删除此商品吗？")){
			$(this).parent().parent().parent().remove();
		}
	});
