<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="Favorite" controller="FavoriteController" namespace="com.yonyou.justoask">
    <import ref="Favorite.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <script src="#{path.controller}/com.yonyou.justoask.GlobalResources.js" type="text/javascript"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="收藏夹">
            <input id="button0" onclick="this.closeFavorite()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <listView id="listviewdefine0" bindfield="list" onload="this.loadList()" onitemclick="this.listitemclick()" collapsed="true">
            <div id="panel0">
                <label id="label1" bindfield="context" type="multiline">收藏内容</label> 
            </div> 
        </listView> 
    </div> 
</window>
