<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" canvaswidth="320" orientation="vertical" controller="SettingController" canvasheight="460" namespace="com.yonyou.justoask" id="Setting">
    <import ref="Setting.css" type="css"/>
    <link href="sys/theme.css" type="text/css"/>
    <script src="#{path.controller}/com.yonyou.justoask.GlobalResources.js" type="text/javascript"/>
    <div id="viewPage0" onload="this.loadsetting()">
        <div id="panel5">
            <input onclick="this.closeSetting()" id="button1" type="button" class="ngbbuttonclass"/>
            <label id="label4">设置</label> 
        </div>
        <div onclick="this.userLogin()" id="panel7">
            <image src="headpic.png" id="image0" scaletype="fitcenter"/>
            <div id="panel8">
                <label id="label5">帐户名</label>
                <label id="label6">请登录</label> 
            </div>
            <label id="label18"/> 
        </div>
        <label id="label14">收藏</label>
        <div onclick="this.askoption()" id="panel3">
            <label id="label16">收藏夹</label>
            <label id="label17"/> 
        </div>
        <label id="label0">语音播报</label>
        <div onclick="this.speechchange()" id="panel0">
            <label id="label1">语速设置</label>
            <label id="label2">标准</label>
            <label id="label3"/> 
        </div>
        <div onclick="this.typechange()" id="panel1">
            <label id="label7">语音播报选择</label>
            <label id="label8">青年女声</label>
            <label id="label9"/> 
        </div>
        <label id="label12">版本</label>
        <div id="panel2">
            <label id="label10">版本</label>
            <label id="label11">V1.0</label> 
        </div> 
    </div> 
</window>
