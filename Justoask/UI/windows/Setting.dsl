<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="Setting" controller="SettingController" namespace="com.yonyou.justoask">
    <import ref="Setting.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <script src="#{path.controller}/com.yonyou.justoask.GlobalResources.js" type="text/javascript"/>
    <div id="viewPage0" onload="this.loadsetting()">
        <navigatorbar id="navigatorbar0" title="设置">
            <input id="button0" class="ngbbuttonclass" onclick="this.closeSetting()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel3">
            <div id="panel5" onclick="this.themechange()">
                <label id="label4">主题切换</label>
                <label id="label5">简约</label>
                <label id="label6"/> 
            </div>
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
        </div>
        <div id="panel4">
            <div id="panel2">
                <label id="label10">版本</label>
                <label id="label11">V1.0</label> 
            </div>
            <div id="panel6" onclick="this.askoption()">
                <label id="label13">检测新版本</label>
                <label id="label15"/> 
            </div> 
        </div> 
    </div> 
</window>
