function $(id) {
	return document.getElementById(id);
};

function SlideAnimation(o, opt) {
	this.opt = opt || {};
	var os = o.style;
	var _duration = opt.duration || " 0.3s";
	var _timefunc = opt.timefunc || " ease";
	os.overflow = "hidden";
	os.transition = "height" + _duration + _timefunc;
	this._min = opt.min || "0px";
	this._max = os.height;
	os.height = "0px";
	this._f = true; //flag
	this._o = o; //object
};
SlideAnimation.prototype.toggle = function(callback) {
	if (this._f) {
		this._o.style.height = this._max;
		this._o.style.width = this.w_max
	} else {
		this._o.style.height = this._min;
	}
	this._f = !this._f;
	if (callback) callback();
};


//(function() {
//	function $(id) {
//		return document.getElementById(id);
//	};
//	window.$ = $;
//	
//	function slidToggle(){
//		
//	};
//	
//})();



function XQuery(vArg){

　　this.elements = [];//用来保存选中的数组。

　　switch(typeof vArg){
　　　case "function":
　　　　　　bindEvent(window,"load",vArg);
　　　　break;
　　case "string":
　　　　switch(vArg.charAt(0)){
　　　　case "#"://id选择器
　　　　　　var obj = document.getElementById(vArg.substring(1));
　　　　　　this.elements.push(obj);
　　　　break;
　　　　case"."://类选择器
　　　　　　this.elements = getElementsByClassName(document,vArg.substring(1));
　　　　break;
　　　　default://标签选择器
　　　　　　this.elements = document.getElementsByTagName(vArg);
　　　　break;
　　}
　　break;
　　case "object":
　　　　this.elements.push(vArg);
　　break;
　　}

}

