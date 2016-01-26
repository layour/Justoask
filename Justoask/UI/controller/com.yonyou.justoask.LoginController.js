//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.justoask.LoginController');
	com.yonyou.justoask.LoginController = function() {
		com.yonyou.justoask.LoginController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$justoask$LoginController$initialize() {
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

	function com$yonyou$justoask$LoginController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$justoask$LoginController$openregister(sender, args) {
		$view.open({
			"viewid" : "com.yonyou.justoask.Register", //目标页面（首字母大写）全名，
			"isKeep" : "false"
		});
	}

	function com$yonyou$justoask$LoginController$userLogin(sender, args) {
		$ctx.dataBind();
		var userName = $ctx.getString("userName");
		var password = $ctx.getString("password");
		var autoLogin = $ctx.getString("autoLogin");
		
		if(com.yonyou.justoask.GlobalResources.isEmptyString(userName)){
			$alert("用户名不能为空！");
			return;
		}
		if(com.yonyou.justoask.GlobalResources.isEmptyString(password)){
			$alert("密码不能为空！");
			return;
		}
		//用户名密码登录
		var url = $cache.read("url");
		$service.get({
			"url" : url + "/JustoaskServer/user/login?userName=" + userName + "&password=" + password,
			"callback" : "loginCallBack()",
			"timeout" : "5"//可选参数，超时时间，单位为秒
		});
	}
	
	function loginCallBack(){
		var result = $ctx.param("result");//get和post的CallBack中获取返回结果都从result中获取
		if(com.yonyou.justoask.GlobalResources.isEmptyString(result)){
			$alert("登录超时,检查网络！");
			return;
		}
		result = $stringToJSON(result);//将字符串转换成JSON对象
		if('0' == result.code){
			//成功后写缓存
			$cache.write(com.yonyou.justoask.GlobalResources.userObj.USERID, result.user.userId);
			$cache.write(com.yonyou.justoask.GlobalResources.userObj.USERNAME, result.user.userName);
			$cache.write(com.yonyou.justoask.GlobalResources.userObj.PASSWORD, result.user.password);
			$cache.write(com.yonyou.justoask.GlobalResources.userObj.AUTOLOGIN, $ctx.getString("autoLogin"));
			
			$toast("登录成功！");
			//关闭页面
			$view.closeWithCallBack({ })
		} else if('1' == result.code){
			$alert("无此用户！");
		} else if('2' == result.code){
			$alert("用户名或密码错误！");
		} else {
			$alert("登录失败！");
		}
	}


	com.yonyou.justoask.LoginController.prototype = {
		userLogin : com$yonyou$justoask$LoginController$userLogin,
		openregister : com$yonyou$justoask$LoginController$openregister,
		initialize : com$yonyou$justoask$LoginController$initialize,
		evaljs : com$yonyou$justoask$LoginController$evaljs
	};
	com.yonyou.justoask.LoginController.registerClass('com.yonyou.justoask.LoginController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
