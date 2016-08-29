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
		$view.open({
			"viewid" : "com.yonyou.justoask.Setting", //目标页面（首字母大写）全名，
			"isKeep" : "true",
			"animation-direction":"left",                             
			"animation-time":"500",                             
			"animation-type":"Push"
		});
	}

	function com$yonyou$justoask$HomeController$homeLoad(sender, args) {
		//$js.backConfirm();

		//初始化URL
		$cache.write("url", "http://115.28.91.199:8080");

		//初始化语音
		$service.call("SpeechService.init", {}, false);
		
		//初始化分享
		$wxshare.init({
			"appid" : "wx853ca6a405d3947d"
		});
		//签名a74ab91cf78a537e8a0266875b1d340d

		//延时提示
		setTimeout(initSpeech, 1000);
	}

	function initSpeech() {
		//语音提示
		$service.call("SpeechService.openStringBackSpeech", {
			"text" : "主人您有什么问题吗？",
			"voiceName" : $cache.read(com.yonyou.justoask.GlobalResources.settingObj.TYPE),
			"speed" : $cache.read(com.yonyou.justoask.GlobalResources.settingObj.SPEECH),
			"callback" : "initSpeechCallback()",
			"error" : "initSpeechCallback()"
		}, false);
	}

	function initSpeechCallback() {
	}

	var count=0;
	var splitSearchResult;
	function com$yonyou$justoask$HomeController$microphone(sender, args) {
		count = 0;
		$id("audio0").setAttribute("play", true);
		//说话
		$service.call("SpeechService.openSpeechBackString", {
			"bindfield" : "text",
			"callback" : "microPhoneCallback()",
			"error" : "microPhoneCallback()"
		}, false);
	}

	function microPhoneCallback(sender, args) {
		var keyword = $stringToJSON(args).text;
		if (CurrentEnvironment.DeviceType == CurrentEnvironment.DeviceIOS) {
			keyword = keyword.result;
		}
		$ctx.put("keyword", keyword);

		if(keyword){
			//问地点
			if (keyword.indexOf("位置") > -1 || keyword.indexOf("地点") > -1 || keyword.indexOf("在哪儿") > -1 || keyword.indexOf("地址") > -1) {
				$device.getLocation({
					"bindfield" : "location", //位置信息回写的绑定字段
					"callback" : "getLocationCallBack()", //回调执行的JS方法
					"single" : "true", //是否只获取1次
					"isgetaddress" : "true", //是否需要获取地址
					"network" : "true" //是否使用wifi定位
				});
			} else if (keyword.indexOf("地图") > -1 || keyword.indexOf("导航") > -1) {
				$view.open({
					"viewid" : "com.yonyou.justoask.Map", //目标页面（首字母大写）全名，
					"isKeep" : "true"
				});
			} else if (keyword.indexOf("电话") > -1) {
				execContacts(keyword);
			} else {
				//百度问题搜索
				var url = $cache.read("url");
				$service.post({
					"url" : url + "/JustoaskServer/problem/search",
					"data" : {
						"keyword" : keyword
					},
					"callback" : "baiduSearchCallBack()",
					"timeout" : "5"//可选参数，超时时间，单位为秒
				});
			}
		}
	}

	function getLocationCallBack() {
		var location = $ctx.getString("location");
		location = $stringToJSON(location);
		//将字符串转换成JSON对象
		if (location) {
			speechTimeOrAddr("当前位置是：" + location.address);
		} else {
			speechTimeOrAddr("您还在地球上！");
		}
	}

	function execContacts(keyword) {
		$js.showLoadingBar();
		var contactsArray = $device.getContacts();
		$js.hideLoadingBar();
		contactsArray = $stringToJSON(contactsArray);
		for (var i = 0; i < contactsArray.length; i++) {
			var name = contactsArray[i].name;
			var phones = contactsArray[i].phones;
			if (phones) {
				var phone = phones[0].phone;
				if (keyword.indexOf(name) > -1) {
					$tel.call(phone);
					return;
				}
			}
		}
		speechTimeOrAddr("对不起，没有找到联系人！");
	}

	function speechTimeOrAddr(resultStr) {
		$service.call("SpeechService.openStringBackSpeech", {
			"text" : resultStr,
			"voiceName" : $cache.read(com.yonyou.justoask.GlobalResources.settingObj.TYPE),
			"speed" : $cache.read(com.yonyou.justoask.GlobalResources.settingObj.SPEECH)
		}, false);
	}
	
		
	var baiduResultJson;
	function baiduSearchCallBack(){
		var result = $ctx.param("result");
		if (com.yonyou.justoask.GlobalResources.isEmptyString(result)) {
			$alert("搜索超时,检查网络！");
			return;
		}
		//将字符串转换成JSON对象
		baiduResultJson = $stringToJSON(result);
		
		//图灵机器人搜索
		$service.post({
			"url" : "http://www.tuling123.com/openapi/api",
			"data" : {
				"key" : "707fde02c577b0bb391c0fcc1b2a16f6",
				"info" : $ctx.getString("keyword")
			},
			"callback" : "searchCallBack()",
			"timeout" : "5"//可选参数，超时时间，单位为秒
		})
	}

	function searchCallBack() {
		var result = $ctx.param("result");
		if (com.yonyou.justoask.GlobalResources.isEmptyString(result)) {
			$alert("搜索超时,检查网络！");
			return;
		}
		//将字符串转换成JSON对象
		result = $stringToJSON(result);
		var baiduResultStr = baiduResultJson.result;
		baiduResultStr = baiduResultStr + "结果" + (baiduResultJson.conut + 1) + "：";
		baiduResultStr = baiduResultStr + result.text;
		
		$ctx.put("searchResult", baiduResultStr);

		//复读问题是否收藏
		$service.call("SpeechService.openStringBackSpeech", {
			"text" : "您的问题是" + $ctx.getString("keyword") + "问题是否正确?请说是或否。",
			"voiceName" : $cache.read(com.yonyou.justoask.GlobalResources.settingObj.TYPE),
			"speed" : $cache.read(com.yonyou.justoask.GlobalResources.settingObj.SPEECH),
			"callback" : "selectCallback()",
			"error" : "speechErrorCallback()"
		}, false);
	}
	
	function selectCallback(){
		//说话
		$service.call("SpeechService.openSpeechBackString", {
			"bindfield" : "text",
			"callback" : "selectOkCallback()",
			"error" : "selectOkCallback()"
		}, false);
	}
	
	function selectOkCallback(sender, args) {
		var searchResult = $ctx.getString("searchResult");
		if(searchResult){
			splitSearchResult = searchResult.split("&&");
		}
	
		var yesOrNo = $stringToJSON(args).text;
		if (CurrentEnvironment.DeviceType == CurrentEnvironment.DeviceIOS) {
			yesOrNo = yesOrNo.result;
		} else if(yesOrNo.indexOf("是") > -1){
			//是
			$service.call("SpeechService.openStringBackSpeech", {
				"text" : splitSearchResult[count] + "。第" + (count+1) + "条答案阅读完了，请说下一条、停止或再见。",
				"voiceName" : $cache.read(com.yonyou.justoask.GlobalResources.settingObj.TYPE),
				"speed" : $cache.read(com.yonyou.justoask.GlobalResources.settingObj.SPEECH),
				"callback" : "selectCallback()",
				"error" : "speechErrorCallback()"
			}, false);
			count++;
		} else if(yesOrNo.indexOf("下一条") > -1){
			var oneItemResult = "";
			var callbackValue = "selectCallback()";
			if(splitSearchResult[count]){
				oneItemResult = splitSearchResult[count] + "。第" + (count+1) + "条答案阅读完了，请说下一条、停止或再见。";
			} else {
				oneItemResult = "没有更多答案了,您是否收藏这个问题？";
				callbackValue = "speechCallback()";
			}
			//下一条
			$service.call("SpeechService.openStringBackSpeech", {
				"text" : oneItemResult,
				"voiceName" : $cache.read(com.yonyou.justoask.GlobalResources.settingObj.TYPE),
				"speed" : $cache.read(com.yonyou.justoask.GlobalResources.settingObj.SPEECH),
				"callback" : callbackValue,
				"error" : "speechErrorCallback()"
			}, false);
			count++;
		} else if(yesOrNo.indexOf("停止") > -1){
			//停止
			$service.call("SpeechService.openStringBackSpeech", {
				"text" : "您是否收藏这个问题？",
				"voiceName" : $cache.read(com.yonyou.justoask.GlobalResources.settingObj.TYPE),
				"speed" : $cache.read(com.yonyou.justoask.GlobalResources.settingObj.SPEECH),
				"callback" : "speechCallback()",
				"error" : "speechErrorCallback()"
			}, false);
		} else if(yesOrNo.indexOf("再见") > -1){
			//再见
			$view.close();
		} else{
			//其它
			$service.call("SpeechService.openStringBackSpeech", {
				"text" : "没有听明白您的意思，请说下一条、停止或再见。",
				"voiceName" : $cache.read(com.yonyou.justoask.GlobalResources.settingObj.TYPE),
				"speed" : $cache.read(com.yonyou.justoask.GlobalResources.settingObj.SPEECH),
				"callback" : "selectCallback()",
				"error" : "speechErrorCallback()"
			}, false);
		}
	}
	
	function speechErrorCallback() {
		$alert("语音合成失败！");
	}

	function speechCallback() {
		$window.showModalDialog({
			"dialogId" : "com.yonyou.justoask.FavoriteChange", //Dialog的唯一标识（包名+ID），ID要求首字母大写
			"arguments" : {}, //arguments为传递至Dialog的自定义JSON参数
			"features" : {
				//"dialogLeft" : "100",//Dialog距离屏幕左侧的位置
				//"dialogTop" : "150",//Dialog距离屏幕顶端的位置
				"dialogWidth" : "250",
				"dialogHeight" : "180"
			},
			"animation-type" : "center", //弹出Dialog的起始位置，取值范围为top|bottom|left|right|center
			"callback" : "closeFavoriteCallback()"//回调的JS方法
		});
	}

	function closeFavoriteCallback() {
		var changeParam = $param.getString("changeResult");

		if (changeParam == "yes") {
			var autoLogin = $cache.read(com.yonyou.justoask.GlobalResources.userObj.AUTOLOGIN);
			if (autoLogin == "true") {
				openLogincallback();
			} else {
				//先登录
				$view.open({
					"viewid" : "com.yonyou.justoask.Login", //目标页面（首字母大写）全名，
					"isKeep" : "true", //保留当前页面不关闭
					"callback" : "openLogincallback()"//回调的JS方法
				});
			}
		}
	}

	function openLogincallback() {
		var userId = $cache.read(com.yonyou.justoask.GlobalResources.userObj.USERID);
		//再收藏一个问题
		var url = $cache.read("url");
		$service.post({
			"url" : url + "/JustoaskServer/collect/save",
			"data" : {
				"userId" : userId,
				"problemDesc" : $ctx.getString("keyword"),
				"answer" : $ctx.getString("searchResult")
			},
			"callback" : "collectCallBack()",
			"timeout" : "5"//可选参数，超时时间，单位为秒
		});
		/*$service.get({
		 "url" : url + "/JustoaskServer/collect/save?userId=" + userId + "&problemDesc=" + $ctx.getString("keyword") + "&answer=" + $ctx.getString("searchResult"),
		 "callback" : "collectCallBack()",
		 "timeout" : "5"//可选参数，超时时间，单位为秒
		 })*/
	}

	function collectCallBack() {
		var result = $ctx.param("result");
		if (com.yonyou.justoask.GlobalResources.isEmptyString(result)) {
			$alert("收藏超时");
			return;
		}
		result = $stringToJSON(result);
		if (result.code == 0) {
			$toast("收藏成功！");
		}
	}

	function com$yonyou$justoask$HomeController$openShare(sender, args) {
		$window.showModalDialog({
			"dialogId" : "com.yonyou.justoask.Share", //Dialog的唯一标识（包名+ID），ID要求首字母大写
			"arguments" : {}, //arguments为传递至Dialog的自定义JSON参数
			"features" : {
				//"dialogLeft" : "100",//Dialog距离屏幕左侧的位置
				//"dialogTop" : "150",//Dialog距离屏幕顶端的位置
				"dialogWidth" : "250",
				"dialogHeight" : "180"
			},
			"animation-type" : "right"//弹出Dialog的起始位置，取值范围为top|bottom|left|right|center
		});
	}

	function com$yonyou$justoask$HomeController$loadList(sender, args) {
		var json = {
			list : [{
				image : "website.png",
				title : "如何问地点",
				content : "\"我的位置？\""
			},{
				image : "event.png",
				title : "如何问时间",
				content : "\"现在几点了？\""
			},{
				image : "map.png",
				title : "如何打开导航",
				content : "\"打开地图\""
			},{
				image : "call.png",
				title : "如何拨打电话",
				content : "\"打电话给庞统\""
			},{
				image : "help.png",
				title : "如何问问题",
				content : "\"糖尿病的早期症状是什么？\""
			}]
		}
		$ctx.push(json);
	}


	com.yonyou.justoask.HomeController.prototype = {
		loadList : com$yonyou$justoask$HomeController$loadList,
		openShare : com$yonyou$justoask$HomeController$openShare,
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
