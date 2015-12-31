//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yyuap.demo.WeiXinDlgController');
	com.yyuap.demo.WeiXinDlgController = function() {
		com.yyuap.demo.WeiXinDlgController.initializeBase(this);
		this.initialize();
	}
	function com$yyuap$demo$WeiXinDlgController$initialize() {
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

	function com$yyuap$demo$WeiXinDlgController$evaljs(js) {
		eval(js)
	}

	function com$yyuap$demo$WeiXinDlgController$imagebutton0_onclick(sender, args) {
		$window.close();
		$view.open({
			"viewid" : "com.yyuap.demo.WeiXinShareResult", //目标页面（首字母大写）全名，
			"isKeep" : "false",
			"sharetype" : "friend"
		});

		/*$service.call("UMWXShare.init", {
		 "appid" : "wx9a0d87487fd9bfa0"
		 }, false);
		 $service.call("UMWXShare.sendTextandImage", {
		 "url" : "http://mobile.yyuap.com/",
		 "title" : "图文测试",
		 "des" : "文字+图片微信分享到朋友圈",
		 "image" : "app.png",
		 "type" : "friend"
		 }, false);*/
	}

	function com$yyuap$demo$WeiXinDlgController$imagebutton1_onclick(sender, args) {
		$window.close();
		$view.open({
			"viewid" : "com.yyuap.demo.WeiXinShareResult", //目标页面（首字母大写）全名，
			"isKeep" : "false",
			"sharetype" : "chat"
		});
		/*$service.call("UMWXShare.init", {
		 "appid" : "wx9a0d87487fd9bfa0"
		 }, false);
		 $service.call("UMWXShare.sendTextandImage", {
		 "url" : "http://mobile.yyuap.com/",
		 "title" : "图文测试",
		 "des" : "文字+图片微信分享到朋友圈",
		 "image" : "app.png",
		 "type" : "chat"
		 }, false);*/
	}



function com$yyuap$demo$WeiXinDlgController$label1_onclick(sender, args){
$window.close()
}
function choseDlg(sender, args){
	$window.close()
}	com.yyuap.demo.WeiXinDlgController.prototype = {
    label1_onclick : com$yyuap$demo$WeiXinDlgController$label1_onclick,
		imagebutton1_onclick : com$yyuap$demo$WeiXinDlgController$imagebutton1_onclick,
		imagebutton0_onclick : com$yyuap$demo$WeiXinDlgController$imagebutton0_onclick,
		initialize : com$yyuap$demo$WeiXinDlgController$initialize,
		evaljs : com$yyuap$demo$WeiXinDlgController$evaljs
	};
	com.yyuap.demo.WeiXinDlgController.registerClass('com.yyuap.demo.WeiXinDlgController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
