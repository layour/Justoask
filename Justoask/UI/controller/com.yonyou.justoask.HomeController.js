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
			"font-size" : "16",
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
		
		//初始化语音
		$service.call("SpeechService.init", {}, false);
		//初始化分享
		$wxshare.init({"appid" : "wx9aaa6c47f70709e3"});//签名a74ab91cf78a537e8a0266875b1d340d
		
		//延时提示
		setTimeout(initSpeech, 1000);
	}
	
	function initSpeech(){
		//语音提示
		$service.call("SpeechService.openStringBackSpeech", {
			"text" : "您有什么问题吗？"
		}, false);
	}

	function com$yonyou$justoask$HomeController$microphone(sender, args) {
		//切换图片状态
		microphoneChange();

		//说话
		$service.call("SpeechService.openSpeechBackString", {
			"callback" : "microphonecallback()"
		}, false);
	}

	function microphoneChange() {
		var imageSrc = $id("image0").get("src");
		if (imageSrc == "microphone.png") {
			$id("image0").set("src", "microphone_active.gif");
		} else {
			$id("image0").set("src", "microphone.png");
		}
	}

	function microphonecallback(sender, args) {
		var askStr = $stringToJSON(args).text;
		
		//延时播报
		setTimeout(askTimeout(askStr), 3000);
	}
	
	function askTimeout(askStr){
		//搜索答案
		var result = "123";
		
		//复读问题是否收藏
		$service.call("SpeechService.openStringBackSpeech", {
			"text" : "您的问题是：" + askStr + result + "是否收藏这个问题？",
			"callback" : "askcallback()"
		}, false);
	}
	
	function askcallback(){
		$service.call("SpeechService.openSpeechBackString", {
			"callback" : "favoritecallback()"
		}, false);
	}
	
	function favoritecallback(sender, args){
		var favoriteStr = $stringToJSON(args).text;
		
		if(favoriteStr.indexOf("是") > -1 || favoriteStr.indexOf("收藏") > -1){
			var autoLogin = $cache.read(com.yonyou.justoask.GlobalResources.userObj.AUTOLOGIN);
			if(autoLogin == true){
				//收藏一个问题
				
				$toast("收藏成功！");
			} else {
				//先登录
				$view.open({
					"viewid" : "com.yonyou.justoask.Login",//目标页面（首字母大写）全名，
					"isKeep" : "true"
				});
				
				//再收藏一个问题
				
				$toast("收藏成功！");
			}
		}
	}

	function com$yonyou$justoask$HomeController$button2_onclick(sender, args) {
		$view.open({
			"viewid" : "com.yonyou.justoask.Login", //目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}

	function com$yonyou$justoask$HomeController$openShare(sender, args) {
		$window.showModalDialog({
		    "dialogId" : "com.yonyou.justoask.Share",//Dialog的唯一标识（包名+ID），ID要求首字母大写
		    "arguments" : {},//arguments为传递至Dialog的自定义JSON参数
		    "features" : {
		        //"dialogLeft" : "100",//Dialog距离屏幕左侧的位置
		        //"dialogTop" : "150",//Dialog距离屏幕顶端的位置
		        "dialogWidth" : "250",
		        "dialogHeight" : "180"
		    },
		    "animation-type" : "center"//弹出Dialog的起始位置，取值范围为top|bottom|left|right|center
		});
	}


	com.yonyou.justoask.HomeController.prototype = {
		openShare : com$yonyou$justoask$HomeController$openShare,
		button2_onclick : com$yonyou$justoask$HomeController$button2_onclick,
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
