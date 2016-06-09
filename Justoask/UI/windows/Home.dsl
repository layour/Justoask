<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="Home" controller="HomeController" namespace="com.yonyou.justoask">
    <import ref="Home.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <script src="#{path.controller}/com.yonyou.justoask.GlobalResources.js" type="text/javascript"/>
    <div id="viewPage0" onload="this.homeLoad()">
        <div id="panel0">
            <label id="label0">说唐诗宋词试试？</label>
            <listView id="listviewdefine0" collapsed="true">
                <div id="panel2">
                    <image id="image1" scaletype="fitcenter" src="picture"/>
                    <div id="panel3">
                        <label id="label1">如何拨打电话</label>
                        <label id="label2">"打电话给庞统"</label> 
                    </div> 
                </div> 
            </listView> 
        </div>
        <div id="panel1">
            <input id="button1" class="ngbbuttonclass" onclick="this.openPopMenu()" type="button"/>
            <div id="panel4"/>
            <image id="image0" onclick="this.microphone()" scaletype="fitxy" src="microphone_active.gif"/>
            <div id="panel5"/>
            <input id="button0" class="ngbbuttonclass" onclick="this.openShare()" type="button"/> 
        </div> 
    </div> 
</window>
