<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="WeixinTest" controller="WeixinTestController" namespace="com.yyuap.demo">
    <import ref="WeixinTest.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="微信分享" class="navigatorbarclass">
            <input id="button0" value="返回" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
            <label id="label0"/>
            <image id="image0" onclick="openShare()" scaletype="fitcenter" src="icon_share.png"/> 
        </navigatorbar>
        <div id="panel0">
            <image id="image1" scaletype="fitcenter" src="bz1.png"/>
            <div id="panel1">
                <label id="label1" type="multiline">新马泰十日游 - 一场说走就走的旅行</label>
                <label id="label2">￥1080/人</label>
                <label id="label3">环境:9.2</label> 
            </div> 
        </div>
        <div id="panel2">
            <image id="image2" scaletype="fitcenter" src="tab_position.png"/>
            <label id="label4" type="multiline">集合地址-北京市海淀区北清路68号</label>
            <image id="image3" scaletype="fitcenter" src="arrow.png"/> 
        </div> 
    </div> 
</window>
