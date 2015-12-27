<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="Login" controller="LoginController" namespace="com.yonyou.justoask">
    <import ref="Login.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <div id="panel0">
            <label id="label0">问一下</label> 
        </div>
        <div id="panel1">
            <div id="panel2">
                <image id="image0" scaletype="fitcenter" src="user.png"/>
                <input bindfield="" id="textbox0" maxlength="256" placeholder="用户名" value="user01" type="text"/> 
            </div>
            <div id="panel3">
                <image id="image1" scaletype="fitcenter" src="password.png"/>
                <input bindfield="" id="textbox1" maxlength="256" placeholder="密码" value="a1234567" type="password"/> 
            </div> 
        </div>
        <div id="panel4">
            <label id="label1">自动登录</label>
            <input id="checkbox0" type="checkbox"/>
            <label id="label2" onclick="this.openregister()">立即注册</label> 
        </div>
        <input id="button0" value="登录" class="textbtnclass" type="button"/>
        <div id="panel5"/> 
    </div> 
</window>
