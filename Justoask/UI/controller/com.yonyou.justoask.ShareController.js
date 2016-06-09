//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.justoask.ShareController');
	com.yonyou.justoask.ShareController = function() {
		com.yonyou.justoask.ShareController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$justoask$ShareController$initialize() {
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

	function com$yonyou$justoask$ShareController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$justoask$ShareController$loadShare(sender, args) {
		/*if (CurrentEnvironment.DeviceType == CurrentEnvironment.DeviceIOS) {
			$wxshare.init({
				"appid" : "wx853ca6a405d3947d"
			})//IOS
		} else if (CurrentEnvironment.DeviceType == CurrentEnvironment.DeviceAndroid) {
			$wxshare.init({
				"appid" : "wx853ca6a405d3947d"
			})//android
		}*/
		//初始化分享
		$wxshare.init({
			"appid" : "wx853ca6a405d3947d"
		});
		//签名a74ab91cf78a537e8a0266875b1d340d
	}

	function com$yonyou$justoask$ShareController$friendEdit(sender, args) {
		var sharedes = "你有问题吗？快来问一下吧！";
		/*$wxshare.sendTextandImage({
		 "type" : "friendsCircle",
		 "url" : "http://mobile.yyuap.com/",
		 "title" : "图文测试",
		 "des" : sharedes,
		 "image" : shareimage
		 })*/
		$wxshare.sendText({
			"type" : "friendsCircle",
			"text" : sharedes
		})

		$window.close();
	}

	function com$yonyou$justoask$ShareController$circleEidt(sender, args) {
		var sharedes = "你有问题吗？快来问一下吧！";
		/*$wxshare.sendTextandImage({
		 "type" : "friend",
		 "url" : "http://mobile.yyuap.com/",
		 "title" : "图文测试",
		 "des" : sharedes,
		 "image" : shareimage
		 });*/
		$wxshare.sendText({
			"type" : "friend",
			"text" : sharedes
		})

		$window.close();
	}

	function choseShareDialog(sender, args) {
		$window.close();
	}


	com.yonyou.justoask.ShareController.prototype = {
		loadShare : com$yonyou$justoask$ShareController$loadShare,
		circleEidt : com$yonyou$justoask$ShareController$circleEidt,
		friendEdit : com$yonyou$justoask$ShareController$friendEdit,
		initialize : com$yonyou$justoask$ShareController$initialize,
		evaljs : com$yonyou$justoask$ShareController$evaljs
	};
	com.yonyou.justoask.ShareController.registerClass('com.yonyou.justoask.ShareController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
