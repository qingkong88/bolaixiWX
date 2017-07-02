function $(id) {
	return document.getElementById(id);
}

$("popMenu").onclick = function() {
	console.log(1);
	var menu = $("menu");
	if (menu.style.display == "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}

function getQueryValue(key) {
	var match = location.search.match(new RegExp(key + '=([^&]*)'));
	
	return match && match[1] || '';
}

var _hmt = _hmt || [];
(function() {
	var hm = document.createElement("script");
	hm.src = "https://hm.baidu.com/hm.js?7a81508de565a60607c355daf93a9f23";
	var s = document.getElementsByTagName("script")[0]; 
	s.parentNode.insertBefore(hm, s);
})();