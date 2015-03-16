function Box3D(opt) {
	this.elm = document.getElementById(opt.id);
	
	this.arr = [
//		{scale:0.3,left:-70,className:"blur_level_3"},
//		{scale:0.5,left:1,className:"blur_level_2"},
//		{scale:1,left:72,className:"blur_level_1"},
//		{scale:0.5,left:143,className:"blur_level_2"},
//		{scale:0.3,left:214,className:"blur_level_3"}
		{scale:0.3,left:-32,top:50,className:"blur_level_3"},
		{scale:0.5,left:39,top:25,className:"blur_level_2"},
		{scale:1,left:110,top:0,className:"blur_level_1"},
		{scale:0.5,left:181,top:25,className:"blur_level_2"},
		{scale:0.3,left:252,top:50,className:"blur_level_3"}
	];
	
	this.lis = this.elm.getElementsByTagName("li");
}
Box3D.prototype = {
	init: function() {
		for (var i = 0; i < this.lis.length; i++) {
			var li = this.lis[i];
			var img = li.getElementsByTagName("img")[0];
//			li.style.left = this.arr[i].left +"px";
			li.style.transform = "translate3d(0,0,0) scale(1,1)";
			li.style.webkitTransform = "translate3d(0,0,0) scale(1,1)";
			li.style.top = "90px";
			li.style.position = "absolute";
//			li.style.border = "solid 1px black";
			li.style.width = "100px";
			li.style.transition = "transform 0.3s ease";
			li.style.webkitTransition = "-webkit-transform 0.3s ease";
//			li.className = this.arr[i].className;
			img.style.width = "100%";
		}
		return this;
	},
	doPrev: function() {
		this.arr.push(this.arr.shift());
		return this.doMove();
	},
	doNext: function() {
		this.arr.unshift(this.arr.pop());
		return this.doMove();
	},
	doMove: function() {
		for (var i = 0; i < this.lis.length; i++) {
			var li = this.lis[i];
			var img = li.getElementsByTagName("img")[0];
			
//			li.style.transform = "scale("+this.arr[i].scale+","+this.arr[i].scale+")";
			li.style.webkitTransform = "translate3d("+this.arr[i].left+"px,"+this.arr[i].top+"px,0) scale("+this.arr[i].scale+","+this.arr[i].scale+")";
			li.style.transform = "translate3d("+this.arr[i].left+"px,"+this.arr[i].top+"px,0) scale("+this.arr[i].scale+","+this.arr[i].scale+")";
			
			
//			li.style.left = this.arr[i].left+"px";
//			li.style.transition = "transform 0.5s ease, left 0.5s ease";
//			li.style.transition = "left 0.5s ease";
			li.className = this.arr[i].className;
			//img.style.filter = "blur(add=true,strength=50,direction=0)";
//			img.className = "blur_level_" + this.arr[i].level;
//			if (this.arr[i].level == 0) img.className = "";
		}
		return this;
	}
}