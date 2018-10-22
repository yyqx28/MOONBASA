
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

