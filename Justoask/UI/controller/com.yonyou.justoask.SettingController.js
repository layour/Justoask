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

	function com$yonyou$justoask$SettingController$oladList(sender, args) {
		var json = {
			rows : [{
				ListViewSelector : "0"
			},{
				ListViewSelector : "1",
				id : "1",
				rowkey : "主题切换",
				rowvalue : "商务"
			},{
				ListViewSelector : "1",
				id : "2",
				rowkey : "语速设置",
				rowvalue : "标准"
			},{
				ListViewSelector : "1",
				id : "3",
				rowkey : "语音播报选择",
				rowvalue : "青年女声"
			},{
				ListViewSelector : "0"
			},{
				ListViewSelector : "1",
				id : "4",
				rowkey : "检测新版本",
				rowvalue : "V1.0"
			},{
				ListViewSelector : "1",
				id : "5",
				rowkey : "意见反馈",
				rowvalue : ""
			}]
		}
		$ctx.push(json);
	}


	com.yonyou.justoask.SettingController.prototype = {
		oladList : com$yonyou$justoask$SettingController$oladList,
		closeSetting : com$yonyou$justoask$SettingController$closeSetting,
		initialize : com$yonyou$justoask$SettingController$initialize,
		evaljs : com$yonyou$justoask$SettingController$evaljs
	};
	com.yonyou.justoask.SettingController.registerClass('com.yonyou.justoask.SettingController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
