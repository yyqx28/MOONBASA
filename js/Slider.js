function Slider(
	$box,
	width,
	height,
	imgs,
	doudouSize,
	doudouColor,
	doudouHeighColor,
	isCircle,
	direction,
	timeSpace
){
	this.$box = $box;
	this.$imgs = null;//图片数组
	this.$lis = null;//豆豆数组
	this.width = width;
	this.height = height;
	this.imgs = imgs;
	this.doudouSize = doudouSize;
	this.doudouColor = doudouColor;
	this.doudouHeighColor = doudouHeighColor;
	this.isCircle = isCircle;

	this.direction = direction;
	this.timeSpace = timeSpace;
	this.currOrd = 0;
	this.myTimer = null;

	this.createUI();
	this.changeImg();
	this.addEvent();
}
Slider.prototype.createUI = function(){
	this.$box.css({
		position:"relative",
		overflow:"hidden"
	});
	// 1.创建所有图片
	for(let i=0;i<this.imgs.length;i++){
		let $img = $("<img/>");
		$img.attr("src",this.imgs[i]);
		$img.css({
			"position":"absolute",
			"top":"0px",
			width:this.width+"px",
			height:this.height+"px",
			left:i==0?"0px":this.width+"px"
		});
		this.$box.append($img);
		if(this.$imgs==null){
			this.$imgs = $img;
		}else{
			this.$imgs = this.$imgs.add($img);
		}
	}
	// 2.创建所有豆豆
		// 1)豆豆容器
	let $ul = $("<ul></ul>");
	$ul.css({
		position:"absolute",
		right:"50px",
		bottom:"10px",
		"z-index":2
	});
	this.$box.append($ul);

		// 2)豆豆
		for(let i=0;i<this.imgs.length;i++){
			let $li = $("<li></li>");
			$li.css({
				float:"left",
				"margin-left":"20px",
				width:this.doudouSize+"px",
				height:this.doudouSize+"px",
				backgroundColor:i==0?this.doudouHeighColor:this.doudouColor,
				borderRadius:this.isCircle?"50%":0
			});

			$ul.append($li);
			this.$lis==null
			?this.$lis=$li
			:this.$lis=this.$lis.add($li);
		}

}
Slider.prototype.showImg = function(inOrd,outOrd){
	if(inOrd==outOrd){
		return;
	}
	// 1)滑入滑出前的准备工作
	this.$imgs.eq(inOrd).css({
		"left":this.width+"px"
	});
	//2）、滑入滑出效果
	this.$imgs.eq(inOrd).animate({
		"left":"0px"
	},0);
	this.$imgs.eq(outOrd).animate({
		left:-1*this.width
	},0);

}
Slider.prototype.showLi = function(){
	// 豆豆颜色改变
	this.$lis.eq(this.currOrd)
	.css({"backgroundColor":this.doudouHeighColor})
	.siblings()
	.css({"backgroundColor":this.doudouColor});
}
Slider.prototype.changeImg = function(){
	this.myTimer = setInterval(()=>{
		// 1)数据
		let outOrd = this.currOrd;
		this.currOrd++;
		if(this.currOrd>this.imgs.length-1){
			this.currOrd = 0;
		}
		// 2)外观
		// 1.1)改图片
		this.showImg(this.currOrd,outOrd);
		// 1.2)改豆豆
		this.showLi();
	},this.timeSpace);
}
Slider.prototype.stopChange = function(){
	window.clearInterval(this.myTimer);
}
Slider.prototype.goImg = function(transOrd){
	// 1)数据
	let outOrd = this.currOrd;
	this.currOrd = transOrd;
	// 2)外观
	// 1.1)改图片
	this.showImg(this.currOrd,outOrd);
	// 1.2)改豆豆
	this.showLi();

}
Slider.prototype.addEvent = function(){
	let obj = this;
	this.$box.mouseover(function(){
		obj.stopChange();
	});
	this.$box.mouseout(function(){
		obj.changeImg();
	});
	this.$lis.click(function(){
		obj.goImg($(this).index());
	});
}