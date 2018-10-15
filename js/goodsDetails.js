// 服装小图左右点击
var left = 0;
$(".pho_bot_left").click(function(){
	left = $(".imgs").position().left;
	if(left>=0){
		left = 0;
	}else{
		left = left+60;
		$(".imgs").position().left = left;
	}
});

$(".pho_bot_right").click(function(){
	if(left<=-60){
		left = -60;
	}else{
		left = left-60;
		$(".imgs").position().left = left;
	}
});
$.each(
	$(".imgs li"),function(){
		$(this).click(function(){
			$(this).css({border:'1px solid #000'})
			.siblings().css({border:'0'});
			var url = $(this).css("backgroundImage").
			replace('url(','').replace(')','');		
			$(".pho_top img").attr("src","url");
		});
	}
); 
// 放大镜效果
$(".pho_top").mouseenter(function(){
	singlton.getInstance({
		//要放大的图片对应的dom元素
		bigBoxDom:this,
		//大图的src；要放大的效果的dom元素的背景图片
		bigImg:"img/d_yuan1.jpg",			
		//要放大图片的宽和高
		bigBoxWidth:385,
		bigBoxHeight:520,
		//放大镜的宽和高
		width:100,
		height:130
	});
});
//选择尺码
$(".sml").click(function(){
	$(this).css({border:"1px solid #e50065"})
	.siblings().css({border:"1px solid #cccccc"});
	$(".rgb").css({border:"0"});
});
var num = 1;
// 增减数量
$(".add").click(function(){
	num++;
	$(".sums_left").html(num);
});
$(".jian").click(function(){
	if(num<=0){
		num = 0;
	}else{
		num--;
	    $(".sums_left").html(num);
	}
	
// });点击商品详情下的导航
$.each(
	$(".cen_nav .navv"),
	function(){
		$(".navv").click(function(){
			$(".navv").css({background:"#fff",
			"border-top":"1px solid #e60060"});
			// .siblings().css({background: "#e8e8e8",border:"0"});
		});
	}
);
