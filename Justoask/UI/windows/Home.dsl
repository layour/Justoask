<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="Home" controller="HomeController" namespace="com.yonyou.justoask">
    <import ref="Home.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0" onload="this.homeLoad()">
        <navigatorbar id="navigatorbar0" title="问一下">
            <input id="button0" class="ngbbuttonclass" type="button"/>
            <label id="label0"/>
            <input id="button1" class="ngbbuttonclass" onclick="this.openPopMenu()" type="button"/> 
        </navigatorbar>
        <div id="panel0"/>
        <div id="panel1">
            <input id="button2" class="textbtnclass" type="button"/>
            <image id="image0" scaletype="fitxy" src="microphone_active.gif"/> 
        </div> 
    </div> 
</window>
