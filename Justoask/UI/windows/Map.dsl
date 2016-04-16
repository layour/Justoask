<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="Map" canvaswidth="320" canvasheight="460" orientation="vertical" controller="MapController" namespace="com.yonyou.justoask">
    <import ref="Map.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="地图">
            <input id="button0" class="ngbbuttonclass" onclick="this.closeMap()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <mapView id="gaodemapview0" address="" posY="" posX="" auto="true" city=""/> 
    </div> 
</window>
