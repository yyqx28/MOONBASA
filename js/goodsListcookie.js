window.onload = function(){
	// 设置cookie
	console.log($(".center .pngs .pngs_list"));
	$(".pngs .pngs_list").each(function(){

		$(this).click(function(){
			console.log($(this));
			var ids = $(this).find(".imgId").html();
			setCookie("clothesId",ids,1);
			location.href="goodsDetails.html";
		});
	});
}

