//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.justoask.RegisterController');
	com.yonyou.justoask.RegisterController = function() {
		com.yonyou.justoask.RegisterController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$justoask$RegisterController$initialize() {
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

	function com$yonyou$justoask$RegisterController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$justoask$RegisterController$closeRegister(sender, args) {
		$view.close();
	}

	function com$yonyou$justoask$RegisterController$userRegister(sender, args) {
		$ctx.dataBind();
		var userName = $ctx.getString("userName");
		var password = $ctx.getString("password");
		var repassword = $ctx.getString("repassword");
		
		if(com.yonyou.justoask.GlobalResources.isEmptyString(userName)){
			$alert("用户名不能为空！");
			return;
		}
		if(com.yonyou.justoask.GlobalResources.isEmptyString(password)){
			$alert("密码不能为空！");
			return;
		}
		if(password != repassword){
			$alert("用户名和密码不一致！");
			return;
		}
		//注册用户
		//var url = $cache.read("url");
		var url = "http://192.168.1.105:8080";
		$service.get({
			"url" : url + "/JustoaskServer/user/save?userName=" + userName + "&password=" + password,
			"callback" : "registerCallBack()",
			"timeout" : "5"//可选参数，超时时间，单位为秒
		});
	}
	
	function registerCallBack(){
		var result = $ctx.param("result");//get和post的CallBack中获取返回结果都从result中获取
		if(com.yonyou.justoask.GlobalResources.isEmptyString(result)){
			$alert("注册超时");
			return;
		}
		result = $stringToJSON(result);//将字符串转换成JSON对象
		if('0' == result.code){
			//成功后写缓存
			$cache.write(com.yonyou.justoask.GlobalResources.userObj.USERID, result.user.userId);
			$cache.write(com.yonyou.justoask.GlobalResources.userObj.USERNAME, result.user.userName);
			$cache.write(com.yonyou.justoask.GlobalResources.userObj.PASSWORD, result.user.password);
			$cache.write(com.yonyou.justoask.GlobalResources.userObj.AUTOLOGIN, "true");
			
			$toast("注册成功");
			//关闭页面
			$view.close();
		}
	}


	com.yonyou.justoask.RegisterController.prototype = {
		userRegister : com$yonyou$justoask$RegisterController$userRegister,
		closeRegister : com$yonyou$justoask$RegisterController$closeRegister,
		initialize : com$yonyou$justoask$RegisterController$initialize,
		evaljs : com$yonyou$justoask$RegisterController$evaljs
	};
	com.yonyou.justoask.RegisterController.registerClass('com.yonyou.justoask.RegisterController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
