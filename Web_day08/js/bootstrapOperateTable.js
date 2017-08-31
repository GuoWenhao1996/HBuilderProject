var friends = [];
var queryFriends = friends;
var pageFriends = [];
var friendID;
var pageIndex = 1;
var count = 10;
var maxPage;

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
	var friend10 = new Friend(10, "张三一", 22, 18311111111);
	var friend11 = new Friend(11, "张三二", 22, 18322222222);
	var friend12 = new Friend(12, "张三三", 22, 18333333333);
	var friend13 = new Friend(13, "张三四", 22, 18344444444);
	var friend14 = new Friend(14, "张三五", 22, 18355555555);
	var friend15 = new Friend(15, "张三六", 22, 18366666666);
	var friend16 = new Friend(16, "张三七", 22, 18377777777);
	var friend17 = new Friend(17, "张三八", 22, 18388888888);
	var friend18 = new Friend(18, "张三九", 22, 18399999999);
	var friend19 = new Friend(19, "张三十", 22, 18400000000);
	var friend20 = new Friend(20, "张三十一", 22, 18411111111);
	var friend21 = new Friend(21, "张三十二", 22, 18422222222);
	var friend22 = new Friend(22, "张三十三", 22, 18433333333);
	var friend23 = new Friend(23, "张三十四", 22, 18444444444);

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
	friends[friends.length] = friend11;
	friends[friends.length] = friend12;
	friends[friends.length] = friend13;
	friends[friends.length] = friend14;
	friends[friends.length] = friend15;
	friends[friends.length] = friend16;
	friends[friends.length] = friend17;
	friends[friends.length] = friend18;
	friends[friends.length] = friend19;
	friends[friends.length] = friend20;
	friends[friends.length] = friend21;
	friends[friends.length] = friend22;
	friends[friends.length] = friend23;
	if (friends.length % count == 0) {
		maxPage = parseInt(friends.length / count);
	} else {
		maxPage = parseInt(friends.length / count) + 1;
	}
	showPageFriendByPageIndex(pageIndex);
});

function addFriend(obj) {
	var num;
	if (friends.length == 0) {
		num = 1;
	} else {
		num = friends[friends.length - 1].num + 1;
	}
	if (checkName(1) & checkAge(1) & checkTel(1)) {
		var name = $('#addModal input:eq(0)').val();
		var age = $('#addModal input:eq(1)').val();
		var tel = $('#addModal input:eq(2)').val();
		var friend = new Friend(parseInt(num), name, age, tel);
		friends[friends.length] = friend;
		queryFriends = friends;
		if (friends.length % count == 0) {
			maxPage = parseInt(friends.length / count);
		} else {
			maxPage = parseInt(friends.length / count) + 1;
		}
		pageIndex = maxPage;
		showPageFriendByPageIndex(pageIndex);
		$('#addModal input:eq(0)').val("");
		$('#addModal input:eq(1)').val("");
		$('#addModal input:eq(2)').val("");
		$('#addNameErr').html("");
		$('#addAgeErr').html("");
		$('#addTelErr').html("");
		$('#addModal').modal('hide');
	}
}

function deleteFriend(num) {
	for (var i = 0; i < friends.length; i++) {
		if (friends[i].num == num) {
			friends.splice(i, 1);
		}
	}
	queryFriends = friends;
	if (friends.length % count == 0) {
		maxPage = parseInt(friends.length / count);
	} else {
		maxPage = parseInt(friends.length / count) + 1;
	}
	pageIndex=1;
	showPageFriendByPageIndex(pageIndex);
	$('#queryInput').val("")
}

function showInfo(num) {
	friendID = num;
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
	$('#updateNameErr').html("");
	$('#updateAgeErr').html("");
	$('#updateTelErr').html("");
	$('#updateModal input:eq(0)').val(name);
	$('#updateModal input:eq(1)').val(age);
	$('#updateModal input:eq(2)').val(tel);
}

function updateFriend() {
	if (checkName(2) & checkAge(2) & checkTel(2)) {
		var name = $('#updateModal input:eq(0)').val();
		var age = $('#updateModal input:eq(1)').val();
		var tel = $('#updateModal input:eq(2)').val();
		for (var i = 0; i < friends.length; i++) {
			if (friends[i].num == friendID) {
				friends[i].name = name
				friends[i].age = age
				friends[i].telephone = tel;
			}
		}
		queryFriends = friends;
		showPageFriendByPageIndex(pageIndex);
		$('#updateModal').modal('hide');
	}
}

function queryFriend() {
	pageIndex = 1;
	queryFriends = [];
	var name = $('#queryInput').val();
	if (name != "") {
		for (var i = 0; i < friends.length; i++) {
			if (friends[i].name.indexOf(name) >= 0) {
				queryFriends[queryFriends.length] = friends[i];
			}
		}
	} else {
		queryFriends = friends;
	}
	if (friends.length % count == 0) {
		maxPage = parseInt(queryFriends.length / count);
	} else {
		maxPage = parseInt(queryFriends.length / count) + 1;
	}
	showPageFriendByPageIndex(pageIndex);
}

function checkName(num) {
	var name;
	if (num == 1) {
		name = $('#addModal input:eq(0)').val();
	} else if (num == 2) {
		name = $('#updateModal input:eq(0)').val();
	}
	var reg = /^[\u4e00-\u9fa5]{1,10}$/;
	if (num == 1) {
		if (reg.test(name)) {
			$('#addNameErr').html("√ 输入正确");
			$('#addNameErr').removeClass();
			$('#addNameErr').addClass("text-success");
			return true;
		} else {
			$('#addNameErr').text("× 姓名长度为1-10位的中文！11111");
			$('#addNameErr').removeClass();
			$('#addNameErr').addClass("text-danger");
			return false;
		}
	} else if (num == 2) {
		if (reg.test(name)) {
			$('#updateNameErr').html("√ 输入正确");
			$('#updateNameErr').removeClass();
			$('#updateNameErr').addClass("text-success");
			return true;
		} else {
			$('#updateNameErr').html("× 姓名长度为1-10位的中文！");
			$('#updateNameErr').removeClass();
			$('#updateNameErr').addClass("text-danger");
			return false;
		}
	}
}

function checkAge(num) {
	var age;
	if (num == 1) {
		age = $('#addModal input:eq(1)').val();
	} else if (num == 2) {
		age = $('#updateModal input:eq(1)').val();
	}
	if (num == 1) {
		if (age != "" && age >= 0 && age <= 100) {
			$('#addAgeErr').html("√ 输入正确");
			$('#addAgeErr').removeClass();
			$('#addAgeErr').addClass("text-success");
			return true;
		} else {
			$('#addAgeErr').html("× 年龄为0~100之间的数字！");
			$('#addAgeErr').removeClass();
			$('#addAgeErr').addClass("text-danger");
			return false;
		}
	} else if (num == 2) {
		if (age != "" && age >= 0 && age <= 100) {
			$('#updateAgeErr').html("√ 输入正确");
			$('#updateAgeErr').removeClass();
			$('#updateAgeErr').addClass("text-success");
			return true;
		} else {
			$('#updateAgeErr').html("× 年龄为0~100之间的数字！");
			$('#updateAgeErr').removeClass();
			$('#updateAgeErr').addClass("text-danger");
			return false;
		}
	}
}

function checkTel(num) {
	var tel;
	if (num == 1) {
		tel = $('#addModal input:eq(2)').val();
	} else if (num == 2) {
		tel = $('#updateModal input:eq(2)').val();
	}
	var reg = /^[1][3|5|8|7]\d{9}$/;
	if (num == 1) {
		if (reg.test(tel)) {
			$('#addTelErr').html("√ 输入正确");
			$('#addTelErr').removeClass();
			$('#addTelErr').addClass("text-success");
			return true;
		} else {
			$('#addTelErr').html("× 电话为11位的手机号码！");
			$('#addTelErr').removeClass();
			$('#addTelErr').addClass("text-danger");
			return false;
		}
	} else if (num == 2) {
		if (reg.test(tel)) {
			$('#updateTelErr').html("√ 输入正确");
			$('#updateTelErr').removeClass();
			$('#updateTelErr').addClass("text-success");
			return true;
		} else {
			$('#updateTelErr').html("× 电话为11位的手机号码！");
			$('#updateTelErr').removeClass();
			$('#updateTelErr').addClass("text-danger");
			return false;
		}
	}
}

function pageUp() {
	if (pageIndex != 1) {
		pageIndex--;
		showPageFriendByPageIndex(pageIndex);
	}
}

function pageDown() {
	if (pageIndex != maxPage) {
		pageIndex++;
		showPageFriendByPageIndex(pageIndex);
	}
}

function pageTop() {
	pageIndex = 1;
	showPageFriendByPageIndex(pageIndex);
}

function pageBottom() {
	pageIndex = maxPage;
	showPageFriendByPageIndex(pageIndex);
}

function showPageFriendByPageIndex(pageIndex) {
	pageFriends = [];
	for (var i = 0; i < count; i++) {
		var index = (pageIndex - 1) * count + i;
		if (index >= queryFriends.length) {
			break;
		}
		pageFriends[i] = queryFriends[index];
	}
	$('table tr:not(:eq(0))').remove();
	$('#model').tmpl(pageFriends).appendTo($('table'));
	$('#page').html("<strong><" + pageIndex + "/" + maxPage + "></strong>");
}