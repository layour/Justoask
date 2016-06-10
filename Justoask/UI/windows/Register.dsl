<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="Register" controller="RegisterController" namespace="com.yonyou.justoask">
    <import ref="Register.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <script src="#{path.controller}/com.yonyou.justoask.GlobalResources.js" type="text/javascript"/>
    <div id="viewPage0">
        <div id="panel4">
            <input id="button1" class="ngbbuttonclass" onclick="this.closeRegister()" type="button"/>
            <label id="label3">注册</label>
            <input id="button3" value="注册" class="textbtnclass" onclick="this.userRegister()" type="button"/> 
        </div>
        <div id="panel0">
            <label id="label0">用户名</label>
            <input id="textbox0" bindfield="" maxlength="256" placeholder="请输入用户名" type="text"/> 
        </div>
        <div id="panel1">
            <label id="label1">密码</label>
            <input id="textbox1" bindfield="" maxlength="256" placeholder="请输入密码" type="password"/> 
        </div>
        <div id="panel2">
            <label id="label2">确认密码</label>
            <input id="textbox2" bindfield="" maxlength="256" placeholder="请再次输入密码" type="password"/> 
        </div> 
    </div> 
</window>
