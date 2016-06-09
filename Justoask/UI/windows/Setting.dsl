<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="Setting" canvaswidth="320" canvasheight="460" orientation="vertical" controller="SettingController" namespace="com.yonyou.justoask">
    <import ref="Setting.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <script src="#{path.controller}/com.yonyou.justoask.GlobalResources.js" type="text/javascript"/>
    <div id="viewPage0" onload="this.loadsetting()">
        <div id="panel5">
            <input id="button1" class="ngbbuttonclass" onclick="this.closeSetting()" type="button"/>
            <label id="label4">设置</label> 
        </div>
        <div id="panel7" onclick="this.userLogin()">
            <image id="image0" scaletype="fitcenter" src="headpic.png"/>
            <div id="panel8">
                <label id="label5">帐户名</label>
                <label id="label6">请登录</label> 
            </div>
            <label id="label18"/> 
        </div>
        <label id="label14">收藏</label>
        <div id="panel3" onclick="this.askoption()">
            <label id="label16">收藏夹</label>
            <label id="label17"/> 
        </div>
        <label id="label0">语音播报</label>
        <div id="panel0" onclick="this.speechchange()">
            <label id="label1">语速设置</label>
            <label id="label2">标准</label>
            <label id="label3"/> 
        </div>
        <div id="panel1" onclick="this.typechange()">
            <label id="label7">语音播报选择</label>
            <label id="label8">青年女声</label>
            <label id="label9"/> 
        </div>
        <label id="label12">版本</label>
        <div id="panel2">
            <label id="label10">版本</label>
            <label id="label11">V1.0</label> 
        </div>
        <div id="panel6" onclick="this.updateVersion()">
            <label id="label13">检测新版本</label>
            <label id="label15"/> 
        </div> 
    </div> 
</window>
