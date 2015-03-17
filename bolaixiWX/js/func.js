function $(id) {
	return document.getElementById(id);
}
$("popMenu").ontouchend = function() {
	var menu = $("menu");
	if (menu.style.display == "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}