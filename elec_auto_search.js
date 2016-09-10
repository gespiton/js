// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://elec.xmu.edu.cn/PdmlWebSetup/Pages/SMSMain.aspx
// @grant        none
// ==/UserScript==
window.addEventListener ("load", get, false);
function get(){
        document.getElementById("drxiaoqu").value = "09";
        javascript: setTimeout('__doPostBack(\'drxiaoqu\',\'\')', 0);
        document.getElementById("drlou").value = "2号楼";
        document.getElementById("txtRoomid").value = "0621";
        document.getElementById("dxbtnQuery_B").click();
}