function $(id) {
	return document.getElementById(id);
}
$("popMenu").onclick = function() {
	var menu = $("menu");
	if (menu.style.display == "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}