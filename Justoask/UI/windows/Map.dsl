<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="Map" canvaswidth="320" canvasheight="460" orientation="vertical" controller="MapController" namespace="com.yonyou.justoask">
    <import ref="Map.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <div id="panel0">
            <input id="button1" class="ngbbuttonclass" onclick="this.closeMap()" type="button"/>
            <label id="label1">地图</label> 
        </div>
        <mapView id="gaodemapview0" address="" posY="" posX="" auto="true" city=""/> 
    </div> 
</window>
