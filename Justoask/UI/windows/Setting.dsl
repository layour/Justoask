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
                <label id="label4" bindfield="rowkey">主题切换</label>
                <label id="label5" bindfield="rowvalue">简约</label>
                <label id="label6"/> 
            </div>
            <div id="panel0" onclick="this.speechchange()">
                <label id="label1" bindfield="rowkey">语速设置</label>
                <label id="label2" bindfield="rowvalue">标准</label>
                <label id="label3"/> 
            </div>
            <div id="panel1" onclick="this.typechange()">
                <label id="label7" bindfield="rowkey">语音播报选择</label>
                <label id="label8" bindfield="rowvalue">青年女声</label>
                <label id="label9"/> 
            </div> 
        </div>
        <div id="panel4">
            <div id="panel2" onclick="this.checkversion()">
                <label id="label10" bindfield="rowkey">检测新版本</label>
                <label id="label11" bindfield="rowvalue">V1.0</label>
                <label id="label12"/> 
            </div>
            <div id="panel6" onclick="this.askoption()">
                <label id="label13" bindfield="rowkey">意见反馈</label>
                <label id="label15"/> 
            </div> 
        </div> 
    </div> 
</window>
