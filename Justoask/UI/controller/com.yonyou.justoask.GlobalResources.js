//JavaScript Framework 2.0 Code
try {
	//声明命名空间
	Type.registerNamespace('com.yonyou.justoask.GlobalResources');

	//声明Setting变量
	com.yonyou.justoask.GlobalResources.settingObj = new Object();

	com.yonyou.justoask.GlobalResources.settingObj.SPEECH = "SPEECH";
	com.yonyou.justoask.GlobalResources.settingObj.TYPE = "TYPE";

	//声明User变量
	com.yonyou.justoask.GlobalResources.userObj = new Object();

	com.yonyou.justoask.GlobalResources.userObj.USERID = "USERID";
	com.yonyou.justoask.GlobalResources.userObj.USERNAME = "USERNAME";
	com.yonyou.justoask.GlobalResources.userObj.PASSWORD = "PASSWORD";
	com.yonyou.justoask.GlobalResources.userObj.AUTOLOGIN = "AUTOLOGIN";

	//声明方法
	com.yonyou.justoask.GlobalResources.isEmptyString = function(param) {
		if (param == null || typeof (param) == 'undefined' || param == '') {
			return true;
		}
		return false;
	}

} catch(e) {
	$e(e);
}