/*增加传入style的长宽*/
function add(divSty) {
	var wid = divSty.width;
	var hei = divSty.height;
	if (parseInt(wid) < 200) {
		divSty.width = parseInt(wid) + 10 + "px";
		divSty.height = parseInt(hei) + 10 + "px";
	}
}

/*减少传入style的长宽*/
function small(divSty) {
	var wid = divSty.width;
	var hei = divSty.height;
	if (parseInt(wid) > 100) {
		divSty.width = parseInt(wid) - 10 + "px";
		divSty.height = parseInt(hei) - 10 + "px";
	}
}

/*增加内嵌样式的长宽*/
function changeNQAdd() {
	var divSty = document.getElementById("div1").style;
	add(divSty);
}

/*减少内嵌样式的长宽*/
function changeNQSmall() {
	var divSty = document.getElementById("div1").style;
	small(divSty);
}

/*增加外部样式的长宽*/
function changeWBAdd() {
	var cssRules = document.styleSheets[0].cssRules || document.styleSheets[0].rules;
	var cssRule = cssRules[0];
	var divSty = cssRule.style;
	add(divSty);
}

/*减少外部样式的长宽*/
function changeWBSmall() {
	var cssRules = document.styleSheets[0].cssRules || document.styleSheets[0].rules;
	var cssRule = cssRules[0];
	var divSty = cssRule.style;
	small(divSty);
}