var friends = [];
var operate = 0; //操作标记 1代表增加 2代表修改 3表示查询
function Friend(sNum, sName, sAge, sTelephone) {
	this.num = sNum;
	this.name = sName;
	this.age = sAge;
	this.telephone = sTelephone;
}
$(function() {
	var friend1 = new Friend(1, "郭文浩", 20, 18811112222);
	var friend2 = new Friend(2, "张三", 21, 18822223333);
	var friend3 = new Friend(3, "李四", 22, 18844442222);
	var friend4 = new Friend(4, "王五", 19, 18811113333);
	var friend5 = new Friend(5, "赵六", 18, 18844441111);
	var friend6 = new Friend(6, "张三", 18, 18711111111);
	var friend7 = new Friend(7, "张三", 19, 18611111111);
	var friend8 = new Friend(8, "张三", 20, 18511111111);
	var friend9 = new Friend(9, "张三", 21, 18411111111);
	var friend10 = new Friend(10, "张三", 22, 18311111111);
	friends[friends.length] = friend1;
	friends[friends.length] = friend2;
	friends[friends.length] = friend3;
	friends[friends.length] = friend4;
	friends[friends.length] = friend5;
	friends[friends.length] = friend6;
	friends[friends.length] = friend7;
	friends[friends.length] = friend8;
	friends[friends.length] = friend9;
	friends[friends.length] = friend10;
	$('#model').tmpl(friends).appendTo($('#top+table'));
});

function deleteFriend(num) {
	for (var i = 0; i < friends.length; i++) {
		if (friends[i].num == num) {
			friends.splice(i, 1);
		}
	}
	$('table tr:not(:eq(0))').remove();
	$('#model').tmpl(friends).appendTo($('#top+table'));
}

function add() {
	var num;
	if (friends.length == 0) {
		num = 1;
	} else {
		num = friends[friends.length - 1].num + 1;
	}
	$('#frame>input:eq(0)').val(num);
	$('#frame>input:eq(1)').val("");
	$('#frame>input:eq(2)').val("");
	$('#frame>input:eq(3)').val("");
	$('#frame>input:eq(0)').attr("disabled", "disabled");
	$('#frame').css("display", "block");
	operate = 1;
}

function query() {
	$('#frame>input:eq(0)').val("");
	$('#frame>input:eq(1)').val("");
	$('#frame>input:eq(2)').val("");
	$('#frame>input:eq(3)').val("");
	$('#frame>input:eq(0)').removeAttr("disabled");
	$('#frame').css("display", "block");
	alert("温馨提示：以下四个字段填写任意一个即可查询！\n查询优先级为【编号】>【姓名】>【年龄】>【手机号】！");
	operate = 3;
}

function updateFriend(num) {
	var name;
	var age;
	var tel;
	for (var i = 0; i < friends.length; i++) {
		if (friends[i].num == num) {
			name = friends[i].name;
			age = friends[i].age;
			tel = friends[i].telephone;
		}
	}
	$('#frame>input:eq(0)').val(num);
	$('#frame>input:eq(1)').val(name);
	$('#frame>input:eq(2)').val(age);
	$('#frame>input:eq(3)').val(tel);
	$('#frame>input:eq(0)').attr("disabled", "disabled");
	$('#frame').css("display", "block");
	operate = 2;
}

function addToFriends() {
	var num = $('#frame>input:eq(0)').val();
	var name = $('#frame>input:eq(1)').val();
	var age = $('#frame>input:eq(2)').val();
	var tel = $('#frame>input:eq(3)').val();
	if (operate==3&&isNaN(num)) {
		alert("编号只能为数字！");
	} else if (operate!=3&&name=="") {
		alert("姓名不能为空！");
	} else if (operate!=3&&age=="") {
		alert("年龄不能为空！");
	} else if (operate!=3&&tel=="") {
		alert("电话号码不能为空！");
	} else {
		if (operate == 1) {
			var friend = new Friend(parseInt(num), name, age, tel);
			friends[friends.length] = friend;
			$('#model').tmpl(friend).appendTo($('#top+table'));
			$('#frame').css("display", "none");
		} else if (operate == 2) {
			for (var i = 0; i < friends.length; i++) {
				if (friends[i].num == num) {
					friends[i].name = name
					friends[i].age = age
					friends[i].telephone = tel;
				}
			}
			$('table tr:not(:eq(0))').remove();
			$('#model').tmpl(friends).appendTo($('#top+table'));
			$('#frame').css("display", "none");
		} else if (operate == 3) {
			var queryFriends = [];
			var num = $('#frame>input:eq(0)').val();
			var name = $('#frame>input:eq(1)').val();
			var age = $('#frame>input:eq(2)').val();
			var tel = $('#frame>input:eq(3)').val();
			var result = true;
			if (num != "") {
				for (var i = 0; i < friends.length; i++) {
					if (friends[i].num == num) {
						queryFriends[queryFriends.length] = friends[i];
					}
				}
			} else if (name != "") {
				for (var i = 0; i < friends.length; i++) {
					if (friends[i].name == name) {
						queryFriends[queryFriends.length] = friends[i];
					}
				}
			} else if (age != "") {
				for (var i = 0; i < friends.length; i++) {
					if (friends[i].age == age) {
						queryFriends[queryFriends.length] = friends[i];
					}
				}
			} else if (tel != "") {
				for (var i = 0; i < friends.length; i++) {
					if (friends[i].telephone == tel) {
						queryFriends[queryFriends.length] = friends[i];
					}
				}
			} else {
				alert("请输入至少一个查询条件！");
				result = false;
			}
			if (result) {
				$('#top+table').css("display", "none");
				$('#tableQuery tr:not(:eq(0))').remove();
				$('#modelQuery').tmpl(queryFriends).appendTo($('#tableQuery'));
				$('#content').css("display", "block");
			}
		}
	}
}

function notShow() {
	$('#frame').css("display", "none");
}

function back() {
	$('#content').css("display", "none");
	$('#top+table').css("display", "block");
}