<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="Setting" controller="SettingController" namespace="com.yonyou.justoask">
    <import ref="Setting.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="设置">
            <input id="button0" class="ngbbuttonclass" onclick="this.closeSetting()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel2">
            <listView id="listviewdefine1" bindfield="rows" onload="this.oladList()" adaptiveheight="true">
                <div id="panel0"/>
                <div id="panel1">
                    <label id="label1" bindfield="rowkey">主题切换</label>
                    <label id="label2" bindfield="rowvalue">商务</label>
                    <label id="label3"/> 
                </div> 
            </listView> 
        </div> 
    </div> 
</window>
