// ==UserScript==
// @name         elec tracer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       sher
// @match        http://elec.xmu.edu.cn/PdmlWebSetup/Pages/SMSMain.aspx
// @grant        none
// ==/UserScript==

//window.addEventListener ("load", get, false);
if(document.getElementById("drlou").value!="2号楼"){
        document.getElementById("drxiaoqu").value = "09";
        javascript: setTimeout('__doPostBack(\'drxiaoqu\',\'\')', 0);
        //alert("hello, master");
        document.getElementById("drlou").value = "2号楼";
        document.getElementById("txtRoomid").value = "0621";
        document.getElementById("dxbtnQuery_B").click();
}