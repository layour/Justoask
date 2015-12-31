<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="WeiXinShareResult" controller="WeiXinShareResultController" namespace="com.yyuap.demo">
    <import ref="WeiXinShareResult.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="微信分享" class="navigatorbarclass">
            <input id="button0" value="取消" onclick="this.button0_onclick()" class="ngbbuttonclass" type="button"/>
            <label id="label0"/>
            <input id="button1" value="发送" class="textbtnclass" onclick="this.button1_onclick()" type="button"/> 
        </navigatorbar>
        <div id="panel3">
            <textArea id="textarea0" placeholder="这一刻的想法..."/>
            <div id="panel0">
                <image id="image1" scaletype="fitcenter" src="bz1.png"/>
                <div id="panel1">
                    <label id="label1" type="multiline">新马泰十日游 - 一场说走就走的旅行，￥1080/人</label> 
                </div> 
            </div>
            <div id="panel4"/>
            <div id="panel2">
                <image id="image2" scaletype="fitcenter" src="tab_position.png"/>
                <label id="label4" type="multiline">所在位置</label>
                <image id="image3" scaletype="fitcenter" src="arrow.png"/> 
            </div> 
        </div> 
    </div> 
</window>
