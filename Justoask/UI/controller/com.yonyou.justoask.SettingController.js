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

	function com$yonyou$justoask$SettingController$themechange(sender, args) {
		$view.openPicker({
			"okaction" : "themechangeok()", //确定后执行的JS方法
			"title" : "主题切换",
			"pickercount" : "1",
			"datasource" : {
				picker : [{
					select : [{
						value : 1,
						content : "简约"
					}, {
						value : 2,
						content : "商务"
					}, {
						value : 3,
						content : "卡通"
					}]
				}]
			},
			"picker1binder" : "theme" //Context字段名，存放选中项的value
		})
	}

	function themechangeok() {
		var changeData = $ctx.getString("theme");
		var changeValue = $stringToJSON(changeData).content;
		var oldValue = $id("label5").get("value");
		if (oldValue != changeValue) {
			$id("label5").set("value", changeValue);
			$cache.write(com.yonyou.justoask.GlobalResources.SettingObj.THEME, changeValue);
		}
	}

	function com$yonyou$justoask$SettingController$speechchange(sender, args) {
		$view.openPicker({
			"okaction" : "speechchangeok()", //确定后执行的JS方法
			"title" : "语速设置",
			"pickercount" : "1",
			"datasource" : {
				picker : [{
					select : [{
						value : 1,
						content : "简约"
					}, {
						value : 2,
						content : "商务"
					}, {
						value : 3,
						content : "卡通"
					}]
				}]
			},
			"picker1binder" : "speech" //Context字段名，存放选中项的value
		})
	}

	function speechchangeok() {
		var changeData = $ctx.getString("speech");
		var changeValue = $stringToJSON(changeData).content;
		var oldValue = $id("label2").get("value");
		if (oldValue != changeValue) {
			$id("label2").set("value", changeValue);
			$cache.write(com.yonyou.justoask.GlobalResources.SettingObj.SPEECH, changeValue);
		}
	}

	function com$yonyou$justoask$SettingController$typechange(sender, args) {
		$view.openPicker({
			"okaction" : "typechangeok()", //确定后执行的JS方法
			"title" : "语音播报选择",
			"pickercount" : "1",
			"datasource" : {
				picker : [{
					select : [{
						value : 1,
						content : "青年女声"
					}, {
						value : 2,
						content : "青年男声"
					}, {
						value : 3,
						content : "儿童声"
					}]
				}]
			},
			"picker1binder" : "type" //Context字段名，存放选中项的value
		})
	}

	function typechangeok() {
		var changeData = $ctx.getString("type");
		var changeValue = $stringToJSON(changeData).content;
		var oldValue = $id("label8").get("value");
		if (oldValue != changeValue) {
			$id("label8").set("value", changeValue);
			$cache.write(com.yonyou.justoask.GlobalResources.SettingObj.TYPE, changeValue);
		}
	}

	function com$yonyou$justoask$SettingController$checkversion(sender, args) {
		$alert("检测新版本");
	}

	function com$yonyou$justoask$SettingController$askoption(sender, args) {
		$alert("意见反馈");
	}

	function com$yonyou$justoask$SettingController$loadsetting(sender, args) {
		var theme = $cache.read(com.yonyou.justoask.GlobalResources.SettingObj.THEME);
		var speech = $cache.read(com.yonyou.justoask.GlobalResources.SettingObj.SPEECH);
		var type = $cache.read(com.yonyou.justoask.GlobalResources.SettingObj.TYPE);
		if(theme){
			$id("label5").set("value", theme);
		}
		if(speech){
			$id("label2").set("value", speech);
		}
		if(type){
			$id("label8").set("value", type);
		}
	}


	com.yonyou.justoask.SettingController.prototype = {
		loadsetting : com$yonyou$justoask$SettingController$loadsetting,
		askoption : com$yonyou$justoask$SettingController$askoption,
		checkversion : com$yonyou$justoask$SettingController$checkversion,
		typechange : com$yonyou$justoask$SettingController$typechange,
		speechchange : com$yonyou$justoask$SettingController$speechchange,
		themechange : com$yonyou$justoask$SettingController$themechange,
		closeSetting : com$yonyou$justoask$SettingController$closeSetting,
		initialize : com$yonyou$justoask$SettingController$initialize,
		evaljs : com$yonyou$justoask$SettingController$evaljs
	};
	com.yonyou.justoask.SettingController.registerClass('com.yonyou.justoask.SettingController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
