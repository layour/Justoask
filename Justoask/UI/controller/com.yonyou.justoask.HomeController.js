//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.justoask.HomeController');
	com.yonyou.justoask.HomeController = function() {
		com.yonyou.justoask.HomeController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$justoask$HomeController$initialize() {
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

	function com$yonyou$justoask$HomeController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$justoask$HomeController$openPopMenu(sender, args) {
		$menu.openDropDownList({
			"controlid" : "button1",
			"dropDownListWidth" : "120",
			"background" : "#858586",
			"panelstyle" : "round-div",
			"font-size" : "15",
			"color" : "#f1f4f5",
			"split-color" : "#f1f4f5",
			"showtype" : "right",
			"dropItemsArray" : [{
				"name" : "收藏夹", //菜单项名称
				"action" : "favoriteAction()" //点击该菜单项时执行的JS方法
			}, {
				"name" : "设置", //菜单项名称
				"action" : "settingAction()" //点击该菜单项时执行的JS方法
			}]
		});
	}

	function favoriteAction() {
		$view.open({
			"viewid" : "com.yonyou.justoask.Favorite", //目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}

	function settingAction() {
		$view.open({
			"viewid" : "com.yonyou.justoask.Setting", //目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}

	function com$yonyou$justoask$HomeController$homeLoad(sender, args) {
		$js.backConfirm();
	}

	function com$yonyou$justoask$HomeController$microphone(sender, args) {
		microphoneChange();
	}
	
	function microphoneChange(){
		var imageSrc = $id("image0").get("src");
		if(imageSrc == "microphone.png"){
			$id("image0").set("src", "microphone_active.gif");
		} else {
			$id("image0").set("src", "microphone.png");
		}
	}


	com.yonyou.justoask.HomeController.prototype = {
		microphone : com$yonyou$justoask$HomeController$microphone,
		homeLoad : com$yonyou$justoask$HomeController$homeLoad,
		openPopMenu : com$yonyou$justoask$HomeController$openPopMenu,
		initialize : com$yonyou$justoask$HomeController$initialize,
		evaljs : com$yonyou$justoask$HomeController$evaljs
	};
	com.yonyou.justoask.HomeController.registerClass('com.yonyou.justoask.HomeController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}