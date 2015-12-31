//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yyuap.demo.WeiXinShareResultController');
	com.yyuap.demo.WeiXinShareResultController = function() {
		com.yyuap.demo.WeiXinShareResultController.initializeBase(this);
		this.initialize();
	}
	function com$yyuap$demo$WeiXinShareResultController$initialize() {
		//you can programing by $ctx API
		//get the context data through $ctx.get()
		//set the context data through $ctx.push(json)
		//set the field of the context through $ctx.put(fieldName, fieldValue)
		//get the parameter of the context through $ctx.param(parameterName)
		//Demo Code:
		//    var str = $ctx.getString();      //获取当前Context对应的字符串
		//    alert($ctx.getString())          //alert当前Context对应的字符串
		//    var json = $ctx.getJSONObject(); //获取当前Context，返回值为json
		//    json["x"] = "a";        //为当前json增加字段
		//    json["y"] = [];           //为当前json增加数组
		//    $ctx.push(json);            //设置context，并自动调用数据绑定
		//
		//    put方法需手动调用databind()
		//    var x = $ctx.get("x");    //获取x字段值
		//    $ctx.put("x", "b");     //设置x字段值
		//    $ctx.put("x", "b");     //设置x字段值
		//    $ctx.databind();            //调用数据绑定才能将修改的字段绑定到控件上
		//    var p1 = $param.getString("p1");   //获取参数p2的值，返回一个字符串
		//    var p2 = $param.getJSONObject("p2");   //获取参数p3的值，返回一个JSON对象
		//    var p3 = $param.getJSONArray("p3");   //获取参数p1的值，返回一个数组

		//your initialize code below...

	}

	function com$yyuap$demo$WeiXinShareResultController$evaljs(js) {
		eval(js)
	}

	function openShare(sender, args) {
		$window.showModalDialog({
			"dialogId" : "com.yyuap.demo.WeiXinDlg", //Dialog的唯一标识（包名+ID），ID要求首字母大写
			"arguments" : {
				"parameter1" : "xxx",
				"parameter2" : "yyy"
			}, //arguments为传递至Dialog的自定义JSON参数
			"features" : {
				//"dialogLeft" : "100",//Dialog距离屏幕左侧的位置
				//"dialogTop" : "150",//Dialog距离屏幕顶端的位置
				"dialogWidth" : "fill",
				"dialogHeight" : "160"
			},
			"callback" : " myDialogCallBack()",
			"animation-type" : "center"//弹出Dialog的起始位置，取值范围为top|bottom|left|right|center
		})
	}

	function com$yyuap$demo$WeiXinShareResultController$button0_onclick(sender, args) {
		$view.close();
	}

	function com$yyuap$demo$WeiXinShareResultController$button1_onclick(sender, args) {
		var type = $param.getString("sharetype");
		var sharedes = $id("textarea0").get("value");
		var shareimage = $id("image1").get("src");
		if ("friend" == type) {
			if (CurrentEnvironment.DeviceType == CurrentEnvironment.DeviceIOS) {
				$wxshare.init({
					"appid" : "wx9a0d87487fd9bfa0"
				})//IOS -- android wxaf6d93ddc1c3baff
			}
			if (CurrentEnvironment.DeviceType == CurrentEnvironment.DeviceAndroid) {
				$wxshare.init({
					"appid" : "wxaf6d93ddc1c3baff"
				})//android
			}
			
			/*$wxshare.sendTextandImage({
				"type":"friendsCircle",
				"url":"http://mobile.yyuap.com/",
				"title":"图文测试",
				"des":sharedes,
				"image":shareimage
			})*/
			
			$wxshare.sendImage({
				"type" : "friendsCircle",
				"image" : shareimage
			})/*
			$wxshare.sendText({
				"type" : "friendsCircle",
				"text" : sharedes
			})*/
			
			
		} else if ("chat" == type) {
			if (CurrentEnvironment.DeviceType == CurrentEnvironment.DeviceIOS) {
				$wxshare.init({
					"appid" : "wx9a0d87487fd9bfa0"
				})//IOS -- android wxaf6d93ddc1c3baff
			}
			if (CurrentEnvironment.DeviceType == CurrentEnvironment.DeviceAndroid) {
				$wxshare.init({
					"appid" : "wxaf6d93ddc1c3baff"
				})//android
			}
		   /* $wxshare.sendTextandImage({
				"type":"friend",
				"url":"http://mobile.yyuap.com/",
				"title":"图文测试",
				"des":sharedes,
				"image":shareimage
			});*/
			$wxshare.sendImage({
				"type" : "friend",
				"image" : shareimage
			})/*
			$wxshare.sendText({
				"type" : "friend",
				"text" : sharedes
			})*/
			
		}
	}


	com.yyuap.demo.WeiXinShareResultController.prototype = {
		button1_onclick : com$yyuap$demo$WeiXinShareResultController$button1_onclick,
		button0_onclick : com$yyuap$demo$WeiXinShareResultController$button0_onclick,
		initialize : com$yyuap$demo$WeiXinShareResultController$initialize,
		evaljs : com$yyuap$demo$WeiXinShareResultController$evaljs
	};
	com.yyuap.demo.WeiXinShareResultController.registerClass('com.yyuap.demo.WeiXinShareResultController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
