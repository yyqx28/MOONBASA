
// 获取cookie
getCookie("clothstyle");
// console.log(getCookie("clothstyle"));
// console.log(document.cookie);


// 发送ajax
$.ajax({
	type:"get",
	url:"php/getGoodsList.php",
	async:true,
	data:null,
	success:function(data){
		var glist = '';
		for(var i=0;i<data.length;i++){
			if(data[i].goodsType.indexOf(getCookie("clothstyle")) != -1){
				glist += "<div class='pngs_list'>\
						<span class='imgId'>"+data[i].goodsId+"</span>\
						<img src='"+data[i].goodsImg+"' alt='' class='tu' />\
						<div class='list_cen'>\
						<div class='xiatu'>\
							<img src='"+data[i].beiyong1+"' alt=''/>\
							<img src='"+data[i].beiyong2+"' alt=''/>\
							<img src='"+data[i].beiyong3+"' alt=''/>\
							<img src='"+data[i].beiyong4+"' alt=''/>\
							<img src='"+data[i].beiyong5+"' alt=''/>\
							</div>\
							<p class='jiage'><span class='nowjia'>￥"+data[i].goodsPrice+"</span>\
							<span class='jiujia'>￥"+data[i].beiyong10+"</span></p>\
							<p class='jieshao'>"+data[i].goodsName+"</p>\
							<p class='dian'>"+data[i].beiyong11+"</p>\
						</div>\
						<div class='pinlun'>\
							评论<span>"+data[i].beiyong12+"</span>\
						</div>\
					</div>";
				$(".pngs").html(glist);
			}
			
		}
	},
	dataType:"json"
});




