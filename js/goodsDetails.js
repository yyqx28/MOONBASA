// 服装小图左右点击
var left = 0;
$(".pho_bot_left").click(function(){
	left = $(".imgs").position().left;
	console.log(left);
	if(left>=0){
		left = 0;
	}else{
		left = left+60+"px";
		$(".imgs").css({"left":left});
	}
});

$(".pho_bot_right").click(function(){
	if(left<=-60){
		left = -60;
	}else{
		left = left-60;
		$(".imgs").css({"left":left});
		// $(".imgs").position().left = left;不能赋值
	}
});
// 点击小图片切换大图
$.each(
	$(".imgs li"),function(){
		$(this).click(function(){
			$(this).css({border:'1px solid #000'})
			.siblings().css({border:'0'});
			// var url = $(this).css("backgroundImage").
			// replace('url(','').replace(')','');	
			// console.log(url);	
			// // $(".pho_top").attr("backgroundImage","url("+url+")");(错误)
			// $(".pho_top").css({"backgroundImage":"url("+url+")"});
			// console.log($(".pho_top").attr("backgroundImage"));
			var srcs = $(this).find(".jpgs").attr("src");
			console.log(srcs);
			$(".pho_top img").attr("src",srcs);
			// 放大镜效果
			$(".pho_top").mouseenter(function(){
				singlton.getInstance({
					//要放大的图片对应的dom元素
					bigBoxDom:this,
					//大图的src；要放大的效果的dom元素的背景图片
					bigImg:"url("+srcs+")",			
					//要放大图片的宽和高
					bigBoxWidth:385,
					bigBoxHeight:520,
					//放大镜的宽和高
					width:100,
					height:130
				});
			});
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
});
// 商品详情导航效果
$.each(
	$(".cen_nav a"),function(){
		$(this).click(function(){
			$(this).css({background:"#fff",
			"border-top":"1px solid #e60060"})
			.siblings().css({background:"#e8e8e8",border:"0"});
		});
	}
);



// 获取cookie
getCookie("ids");
console.log(getCookie("ids"));
// console.log(document.cookie);
发送ajax
$.ajax({
	type:"get",
	url:"getGoodsInfo.php",
	async:true,
	data:{
		"goodId":goodsid
	},
	success:function(data){
		$("#goodsname").html(data.goodsname);
		$("#goodsprice").html(data.goodsprice);
		$("#goodscount").html(data.goodscount);
		$("#goodsimg").attr("src",data.goodsImg);
	},
	dataType:"json"
});