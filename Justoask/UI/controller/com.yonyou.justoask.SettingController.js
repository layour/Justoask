//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.justoask.SettingController');
	com.yonyou.justoask.SettingController = function() {
		com.yonyou.justoask.SettingController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$justoask$SettingController$initialize() {
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

	function com$yonyou$justoask$SettingController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$justoask$SettingController$closeSetting(sender, args) {
		$view.close();
	}

	function com$yonyou$justoask$SettingController$speechchange(sender, args) {
		$view.openPicker({
			"okaction" : "speechChangeOk()", //确定后执行的JS方法
			"title" : "语速设置",
			"pickercount" : "1",
			"datasource" : {
				picker : [{
					select : [{
						value : 75,
						content : "快速"
					}, {
						value : 50,
						content : "标准"
					}, {
						value : 25,
						content : "慢速"
					}]
				}]
			},
			"picker1binder" : "speech" //Context字段名，存放选中项的value
		})
	}

	function speechChangeOk() {
		var changeData = $ctx.getString("speech");
		var changeValue = $stringToJSON(changeData).value;
		var changeContent = $stringToJSON(changeData).content;
		var oldValue = $id("label2").get("value");
		if (oldValue != changeValue) {
			$id("label2").set("value", changeContent);
			$cache.write(com.yonyou.justoask.GlobalResources.settingObj.SPEECH, changeValue);
		}
	}

	function com$yonyou$justoask$SettingController$typechange(sender, args) {
		$view.openPicker({
			"okaction" : "typeChangeOk()", //确定后执行的JS方法
			"title" : "语音播报选择",
			"pickercount" : "1",
			"datasource" : {
				picker : [{
					select : [{
						value : "xiaoyan",
						content : "青年女声"
					}, {
						value : "xiaoyu",
						content : "青年男声"
					}, {
						value : "vinn",
						content : "儿童女声"
					}, {
						value : "vixx",
						content : "儿童男声"
					}]
				}]
			},
			"picker1binder" : "type" //Context字段名，存放选中项的value
		})
	}

	function typeChangeOk() {
		var changeData = $ctx.getString("type");
		var changeValue = $stringToJSON(changeData).value;
		var changeContent = $stringToJSON(changeData).content;
		var oldValue = $id("label8").get("value");
		if (oldValue != changeValue) {
			$id("label8").set("value", changeContent);
			$cache.write(com.yonyou.justoask.GlobalResources.settingObj.TYPE, changeValue);
		}
	}

	function com$yonyou$justoask$SettingController$askoption(sender, args) {
		var autoLogin = $cache.read(com.yonyou.justoask.GlobalResources.userObj.AUTOLOGIN);
		if (autoLogin == "true") {
			fristLoginCallback();
		} else {
			//先登录
			$view.open({
				"viewid" : "com.yonyou.justoask.Login", //目标页面（首字母大写）全名，
				"isKeep" : "true", //保留当前页面不关闭
				"callback" : "fristLoginCallback()"//回调的JS方法
			});
		}
	}
	
	function fristLoginCallback(){
		var userName = $cache.read(com.yonyou.justoask.GlobalResources.userObj.USERNAME);
		$id("label6").set("value", userName);
		
		$view.open({
			"viewid" : "com.yonyou.justoask.Favorite", //目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}
	
	function com$yonyou$justoask$SettingController$loadsetting(sender, args) {
		var autoLogin = $cache.read(com.yonyou.justoask.GlobalResources.userObj.AUTOLOGIN);
		if (autoLogin == "true") {
			var userName = $cache.read(com.yonyou.justoask.GlobalResources.userObj.USERNAME);
			$id("label6").set("value", userName);
		}

		var speech = $cache.read(com.yonyou.justoask.GlobalResources.settingObj.SPEECH);
		var type = $cache.read(com.yonyou.justoask.GlobalResources.settingObj.TYPE);
		if (speech == "75") {
			$id("label2").set("value", "快速");
		} else if (speech == "50") {
			$id("label2").set("value", "标准");
		} else if (speech == "25") {
			$id("label2").set("value", "慢速");
		}
		if (type == "xiaoyan") {
			$id("label8").set("value", "青年女声");
		} else if (type == "xiaoyu") {
			$id("label8").set("value", "青年男声");
		} else if (type == "vinn") {
			$id("label8").set("value", "儿童女声");
		} else if (type == "vixx") {
			$id("label8").set("value", "儿童男声");
		}
	}

	function com$yonyou$justoask$SettingController$userLogin(sender, args) {
		var autoLogin = $cache.read(com.yonyou.justoask.GlobalResources.userObj.AUTOLOGIN);
		if (autoLogin == "true") {
			var flag = $confirm("确定注销登录？");
			if(flag == true || flag == "true"){
				$cache.write(com.yonyou.justoask.GlobalResources.userObj.AUTOLOGIN, false);
				$cache.write(com.yonyou.justoask.GlobalResources.userObj.USERNAME, " ");
				$id("label6").set("value", "请登录");
			}
		} else {
			//先登录
			$view.open({
				"viewid" : "com.yonyou.justoask.Login", //目标页面（首字母大写）全名，
				"isKeep" : "true", //保留当前页面不关闭
				"callback" : "isAutoLoginCallback()"//回调的JS方法
			});
		}
	}
	
	function isAutoLoginCallback(){
		var userName = $cache.read(com.yonyou.justoask.GlobalResources.userObj.USERNAME);
		$id("label6").set("value", userName);
	}


	com.yonyou.justoask.SettingController.prototype = {
		userLogin : com$yonyou$justoask$SettingController$userLogin,
		loadsetting : com$yonyou$justoask$SettingController$loadsetting,
		askoption : com$yonyou$justoask$SettingController$askoption,
		typechange : com$yonyou$justoask$SettingController$typechange,
		speechchange : com$yonyou$justoask$SettingController$speechchange,
		closeSetting : com$yonyou$justoask$SettingController$closeSetting,
		initialize : com$yonyou$justoask$SettingController$initialize,
		evaljs : com$yonyou$justoask$SettingController$evaljs
	};
	com.yonyou.justoask.SettingController.registerClass('com.yonyou.justoask.SettingController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
