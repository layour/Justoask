//JavaScript Framework 2.0 Code
try {
	//声明命名空间
	Type.registerNamespace('com.yonyou.justoask.GlobalResources');
	
	//声明变量
	com.yonyou.justoask.GlobalResources.SettingObj = new Object();
	
	com.yonyou.justoask.GlobalResources.SettingObj.THEME = "THEME";
	com.yonyou.justoask.GlobalResources.SettingObj.SPEECH = "SPEECH";
	com.yonyou.justoask.GlobalResources.SettingObj.TYPE = "TYPE";
	
	//声明方法
	com.yonyou.justoask.GlobalResources.isEmptyString = function(param){
		if(param == null || typeof(param) == 'undefined' || param == ''){
			return true;
		}
		return false;
	}
} catch(e) {
	$e(e);
}