//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.justoask.FavoriteController');
	com.yonyou.justoask.FavoriteController = function() {
		com.yonyou.justoask.FavoriteController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$justoask$FavoriteController$initialize() {
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

	function com$yonyou$justoask$FavoriteController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$justoask$FavoriteController$loadList(sender, args) {
		var userId = $cache.write(com.yonyou.justoask.GlobalResources.userObj.USERID);
		//查询收藏列表
		var url = $cache.read("url");
		$service.post({
			"url" : url + "/JustoaskServer/collect/list",
			"data" : {
				"page.size" : 20,
				"search_userId" : "123"
			},
			"callback" : "listCollectCallBack()",
			"timeout" : "5"//可选参数，超时时间，单位为秒
		});
	}
	
	function listCollectCallBack(){
		var result = $ctx.param("result");
		if (com.yonyou.justoask.GlobalResources.isEmptyString(result)) {
			$alert("查询超时,检查网络！");
			return;
		}
		result = $stringToJSON(result);
		var list = [];
		for (var i=0; i < result.rows.length; i++) {
			var itemObj = {
				"problemDesc" : result.rows[i].problem.problemDesc,
				"answer" : result.rows[i].problem.answer,
				"collectTime" : result.rows[i].collectTime 
			}
		  	list[i] = itemObj;
		};
		$ctx.push({"list" : list});
	}

	function com$yonyou$justoask$FavoriteController$closeFavorite(sender, args) {
		$view.close();
	}

	function com$yonyou$justoask$FavoriteController$listitemclick(sender, args) {
		var rowData = $id("listviewdefine0").get("row");
		rowData = $stringToJSON(rowData);
		var context = rowData.problemDesc + rowData.answer;
		$service.call("SpeechService.openStringBackSpeech", {
			"text" : context
		}, false);
	}


	com.yonyou.justoask.FavoriteController.prototype = {
		listitemclick : com$yonyou$justoask$FavoriteController$listitemclick,
		closeFavorite : com$yonyou$justoask$FavoriteController$closeFavorite,
		loadList : com$yonyou$justoask$FavoriteController$loadList,
		initialize : com$yonyou$justoask$FavoriteController$initialize,
		evaljs : com$yonyou$justoask$FavoriteController$evaljs
	};
	com.yonyou.justoask.FavoriteController.registerClass('com.yonyou.justoask.FavoriteController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
