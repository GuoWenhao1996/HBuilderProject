var str_yzm;
$(function() {
	str_yzm = getYzm();
});
/*纯中文用户名*/
jQuery.validator.addMethod("userName", function(value, element, params) {
	var reg = /^[\u4e00-\u9fa5]{1,10}$/;
	return this.optional(element) || reg.test(value);
}, "请在messages中重写错误信息");
/*12位订单编号*/
jQuery.validator.addMethod("orderId", function(value, element, params) {
	var reg = /^\d{12}$/;
	return this.optional(element) || reg.test(value);
}, "请在messages中重写错误信息");
/*18位身份证号*/
jQuery.validator.addMethod("idCard", function(value, element, params) {
	var reg = /^\d{17}(\d|x|X)$/;
	return this.optional(element) || reg.test(value);
}, "请在messages中重写错误信息");
/*11位手机号*/
jQuery.validator.addMethod("telephone", function(value, element, params) {
	var reg = /^[1][3|5|7|8]\d{9}$/;
	return this.optional(element) || reg.test(value);
}, "请在messages中重写错误信息");
/*验证码判定*/
jQuery.validator.addMethod("yzm", function(value, element, params) {
	return this.optional(element) || str_yzm == value;
}, "请在messages中重写错误信息");
$('#form').validate({
	rules: {
		orderid: {
			required: true,
			orderId: true
		},
		username: {
			required: true,
			userName: true
		},
		idcard: {
			idCard: true
		},
		address: {
			required: true
		},
		telphone: {
			required: true,
			telephone: true
		},
		email: {
			required: true,
			email: true
		},
		yzm: {
			required: true,
			yzm: true
		}
	},
	messages: {
		orderid: {
			required: "× 订单编号不能为空！",
			orderId: "× 订单编号为长度12位的纯数字！"
		},
		username: {
			required: "× 客户姓名不能为空！",
			userName: "× 客户姓名长度为1-10位的中文！"
		},
		idcard: {
			idCard: "× 身份证号格式有误！"
		},
		address: {
			required: "× 送货地址不能为空！"
		},
		telphone: {
			required: "× 手机号码不能为空！",
			telephone: "× 手机号码格式有误！"
		},
		email: {
			required: "× 电子邮箱不能为空！",
			email: "× 电子邮箱格式有误！"
		},
		yzm: {
			required: "× 验证码不能为空！",
			yzm: "× 验证码输入有误！"
		}
	},
	success: function(label) {
		label.addClass("valid").text("√");
	},
	errorPlacement: function(error, element) {
		error.appendTo(element.next('label'));
		error.appendTo(element.next('canvas').next('label'));
	}
});