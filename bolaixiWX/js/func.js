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
