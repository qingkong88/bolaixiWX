//function $(id) {
//	return document.getElementById(id);
//};
//
//function SlideAnimation(o, opt) {
//	this.opt = opt || {};
//	var os = o.style;
//	var _duration = opt.duration || " 0.3s";
//	var _timefunc = opt.timefunc || " ease";
//	os.overflow = "hidden";
//	os.transition = "height" + _duration + _timefunc;
//	this._min = opt.min || "0px";
//	this._max = os.height;
//	os.height = "0px";
//	this._f = true; //flag
//	this._o = o; //object
//};
//SlideAnimation.prototype.toggle = function(callback) {
//	if (this._f) {
//		this._o.style.height = this._max;
//	} else {
//		this._o.style.height = this._min;
//	}
//	this._f = !this._f;
//	if (callback) callback();
//};


(function() {
	function $(id) {
		return document.getElementById(id);
	};
	window.$ = $;
	
	function slidToggle(){
		
	};
	
})();


