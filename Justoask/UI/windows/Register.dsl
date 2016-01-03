<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="Register" controller="RegisterController" namespace="com.yonyou.justoask">
    <import ref="Register.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar1">
            <input id="button2" onclick="this.closeRegister()" type="button"/>
            <label id="label4"/>
            <input id="button0" value="注册" class="textbtnclass" onclick="this.userRegister()" type="button"/> 
        </navigatorbar>
        <div id="panel3">
            <div id="panel0">
                <label id="label0" bindfield="rowkey">用户名</label>
                <input id="textbox0" maxlength="256" placeholder="请输入用户名" type="text"/> 
            </div>
            <div id="panel1">
                <label id="label1" bindfield="rowkey">密码</label>
                <input id="textbox1" maxlength="256" placeholder="请输入密码" type="password"/> 
            </div>
            <div id="panel2">
                <label id="label2" bindfield="rowkey">确认密码</label>
                <input id="textbox2" maxlength="256" placeholder="请再次输入密码" type="password"/> 
            </div> 
        </div> 
    </div> 
</window>
