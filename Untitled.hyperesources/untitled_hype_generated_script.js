//	HYPE.documents["Untitled"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="Untitled.hyperesources",c="Untitled",e="untitled_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("untitled_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d-1);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_578","HYPE_dtl_578",!0==(null!=a&&10>a||false==!0)?"HYPE-578.full.min.js":"HYPE-578.thin.min.js"),false==!0&&(a=a||l("HYPE_w_578","HYPE_wdtl_578","HYPE-578.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"onLoad",source:"function(hypeDocument, element, event) {\n\t//var url = location.href;\n\t//alert(url);\n\t//var items = url.split('/');\n\t//var username = \"\";\n\t//if(items.length > 1)\n\t//{\n//\t\tusername = items[items.length-1];\n\t//}\n\t\n\t//username = \"Oh\";\n\n\t//window.ws.onmessage = function(e){\n\t//\twindow.data = JSON.parse(e.data);\n\t//\talert(e.data);\n\t//\twindow.isQuestion = true;\n\t//\twindow.isChange = false;\n\t//\twindow.questionList = new Array();\n\t//};\n\t//var senddata = {command: 'gettable', \"username\" : username, 'index' : window.table.index };\n\t//window.ws.send( JSON.stringify(senddata) );\n}",identifier:"10"},{name:"onTextClicked",source:"function(hypeDocument, element, event) {\tvar s = hypeDocument.getElementById('mainTextBox');\n\n\ts.innerHTML = 'SSS';\n\talert('asdf');\n}",identifier:"11"},{name:"onNewQuestion",source:"function(hypeDocument, element, event) {//alert('onnewq');\n\twindow.questionList = new Array();\n\twindow.total = window.data.length;\n\twindow.score = 0;\n\tfor(var i = 0; i < window.data.length; i++)\n\t{\n\t\tif(window.data[i].weight > 0)\n\t\t{\n\t\t\tfor(var j = 0; j < window.data[i].weight; j++)\n\t\t\t{\n\t\t\t\twindow.questionList.push(i);\n\t\t\t}\n\t\t\twindow.score ++;\n\t\t}\n\t}\n\tif(window.questionList.length == 0)\n\t{\n\t\talert('\ubaa8\ub450 \uc554\uae30\ud558\uc168\uc2b5\ub2c8\ub2e4.\uc218\uace0\ud558\uc167\uc2b5\ub2c8\ub2e4');\n\t\thypeDocument.showPreviousScene();\n//\t\t\thypeDocument.goToTimeInTimelineNamed(0, 'Main Timeline');\n\t//\t\thypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionForward, false);\n\t\treturn;\n\t\t\n\t}\n\t\n\tvar num = Math.ceil(Math.random() * (window.questionList.length) - 1);\n\twindow.randomNum = window.questionList[num];\n\t\n\tif(!window.isChange)\n\t\thypeDocument.getElementById('mainTextBox').innerHTML = 'Q : ' + window.data[window.randomNum].question;\n\telse\n\t\thypeDocument.getElementById('mainTextBox').innerHTML = 'Q : ' + window.data[window.randomNum].answer;\n\twindow.isQuestion = true;\n\t\n\t//window.score = questionList.length;\n\t\n\thypeDocument.getElementById('scoreText').innerHTML = window.score + '/' + window.total;\n\t\n\t\n\t//element.innerHTML = data[randomNum];\n}",identifier:"13"},{name:"onButton1Click",source:"function(hypeDocument, element, event) {\n\tif(window.randomNum >= 0 && window.randomNum < window.data.length)\n\t{\n\t\twindow.ws.onmessage = function(e){\n\t\t\thypeDocument.goToTimeInTimelineNamed(0, 'Main Timeline');\n\t\t\thypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionForward, false);\n\t\t};\n\t\twindow.data[window.randomNum].weight = 0;\n\t\tvar senddata = { command:'setweight', username:window.username, id:window.data[window.randomNum]._id, weight: 0 };\n\t\twindow.ws.send(JSON.stringify(senddata));\n\t}\n}",identifier:"15"},{name:"onSwipedMiddle",source:"function(hypeDocument, element, event) {\tif(isQuestion)\n\t{\n\t\tif(!window.isChange){\n\t\t\thypeDocument.getElementById('mainTextBox').innerHTML = 'A : ' + window.data[randomNum].answer;\n\t\t}\n\t\telse{\n\t\t\thypeDocument.getElementById('mainTextBox').innerHTML = 'A : ' + window.data[randomNum].question;\n\t\t}\n\t\twindow.isQuestion = false;\n\t}\n\telse\n\t{\n\t\tif(!window.isChange){\n\t\t\thypeDocument.getElementById('mainTextBox').innerHTML = 'Q : ' + window.data[randomNum].question;\n\t\t}\n\t\telse {\n\t\t\thypeDocument.getElementById('mainTextBox').innerHTML = 'Q : ' + window.data[randomNum].answer;\n\t\t}\n\t\twindow.isQuestion = true;\n\t}\n}",identifier:"17"},{name:"onButton2Click",source:"function(hypeDocument, element, event) {\tif(window.randomNum >= 0 && window.randomNum < window.data.length)\n\t{\n\t\twindow.data[window.randomNum].weight = 1;\n\t\tvar senddata = { command:'setweight', username:window.username, id:window.data[window.randomNum]._id, weight: 1 };\n\t\twindow.ws.send(JSON.stringify(senddata));\n\t}\n\thypeDocument.goToTimeInTimelineNamed(0, 'Main Timeline');\n\thypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionForward, false);\n\t\n}",identifier:"19"},{name:"onButton3Click",source:"function(hypeDocument, element, event) {\n\tif(window.randomNum >= 0 && window.randomNum < window.data.length)\n\t{\n\t\twindow.data[window.randomNum].weight = 3;\n\t\tvar senddata = { command:'setweight', username:window.username, id:window.data[window.randomNum]._id, weight: 3 };\n\t\twindow.ws.send(JSON.stringify(senddata));\n\t}\n\thypeDocument.goToTimeInTimelineNamed(0, 'Main Timeline');\n\thypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionForward, false);\n}",identifier:"20"},{name:"onButton4Click",source:"function(hypeDocument, element, event) {\n\tif(window.randomNum >= 0 && window.randomNum < window.data.length)\n\t{\n\t\twindow.data[window.randomNum].weight = 4;\n\t\tvar senddata = { command:'setweight', username:window.username, id:window.data[window.randomNum]._id, weight: 4 };\n\t\twindow.ws.send(JSON.stringify(senddata));\n\t}\n\n\thypeDocument.goToTimeInTimelineNamed(0, 'Main Timeline');\n\t//hypeDocument.continueTimelineNamed('timelineName', hypeDocument.kDirectionForward, false)\n\thypeDocument.startTimelineNamed('Main Timeline', hypeDocument.kDirectionForward);\n\t\n}",identifier:"21"},{name:"onNoteClicked",source:"function(hypeDocument, element, event) {\tif(!element) {\n\t//alert('ss');\n\t\treturn;\n\t}\n\tvar buttonid = element.id.toString();\n\tvar index = buttonid.replace(\"button\", \"\");\n\tindex--; // 0 base\ub85c \ub9de\ucd98\ub2e4.\n\twindow.pageindex = index;\n\tvar buttonname = element.innerHTML;\n\n\tvar empty = (buttonname.indexOf('0/0') != -1);\n\tvar remain0 = (buttonname.indexOf(\"0/\") != -1);\n\tvar newnote = (buttonname.slice(-1) == '*');\n\n\tif(window.settingmode == 0)\n\t{\n\t\tif(empty){\n\t\t\tif(confirm(\"\ub178\ud2b8\uac00 \ube44\uc5b4\uc788\uc2b5\ub2c8\ub2e4. \ub4f1\ub85d\ud558\uc2dc\uac9f\uc2b5\ub2c8\uae4c?\")){\n\t\t\t\tlocation.assign(\"http://localhost:3000/settings/\"+index);\n\t\t\t}\n\t\t\treturn;\n\t\t}\n\t\tif(remain0){\n\t\t\tif(confirm('\uc554\uae30\uac00 \ub05d\ub0ac\uc2b5\ub2c8\ub2e4. \ud14c\uc2a4\ud2b8\ub0b4\uc5ed\uc744 \uc9c0\uc6b0\uace0 \ucc98\uc74c\ubd80\ud130 \ub2e4\uc2dc \uc2dc\uc791\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?')){\n\t\t\t\twindow.ws.onmessage = function(e){\n\t\t\t\t\tlocation.reload();\n\t\t\t\t};\n\t\t\t\tvar senddata = {command: 'clearTable', 'username': username, 'index' : index };\n\t\t\t\tws.send( JSON.stringify(senddata) );\n\t\t\t}\n\t\t\treturn;\n\t\t}\n\t\n\t\n\t\t//username = \"Oh\";\n\n\t\twindow.ws.onmessage = function(e){\n\t\t\twindow.data = JSON.parse(e.data);\n\t\t\twindow.isQuestion = true;\n\t\t\twindow.isChange = false;\n\t\t\twindow.questionList = new Array();\n\t\t\thypeDocument.showNextScene();\n\t\t\t//for(var i = 0; i < window.tableData.length; i++) {\n\t\t\t//\tif(window.tableData[i].index == (index)){\n\t\t\t//\t\twindow.table = window.tableData[i];\n\t\t\t//\t\thypeDocument.showNextScene();\n\t\t\t//\t\tbreak;\n\t\t\t//\t}\n\t\t\t//}\n\t\t};\n\t\tvar senddata = {command: 'gettable', \"username\" : window.username, 'index' : index };\n\t\twindow.ws.send( JSON.stringify(senddata) );\n\t}\n\telse {\n\t\tif(!empty && !newnote){\n\t\t\tif(confirm('\ud14c\uc2a4\ud2b8\ub0b4\uc5ed\uc744 \uc9c0\uc6b0\uace0 \ucc98\uc74c\ubd80\ud130 \ub2e4\uc2dc \uc2dc\uc791\ud569\ub2c8\ub2e4.')){\n\t\t\t\twindow.ws.onmessage = function(e){\n\t\t\t\t\tlocation.reload();\n\t\t\t\t};\n\t\t\t\tvar senddata = {command: 'clearTable', 'username': username, 'index' : index };\n\t\t\t\tws.send( JSON.stringify(senddata) );\n\t\t\t}\n\t\t\treturn;\n\t\t}\n\t\tlocation.assign(\"http://localhost:3000/settings/\"+index);\n\t}\n}",identifier:"40"},{name:"onChangeClicked",source:"function(hypeDocument, element, event) {\tif(window.isChange == true){\n\t\twindow.isChange = false;\n\t\telement.style.backgroundColor = '#F0F0F0';\n\t}\n\telse {\n\t\twindow.isChange = true;\n\t\telement.style.backgroundColor = '#C0C0C0';\n\t}\n\t\n\n\thypeDocument.goToTimeInTimelineNamed(0, 'Main Timeline');\n\thypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionForward, false);\n}",identifier:"45"},{name:"OnNoteListPageLoaded",source:"function(hypeDocument, element, event) {\n\t//var url = location.href;\n\t//alert(url);\n\t//var items = url.split('/');\n\t//var username = \"\";\n\t//if(items.length > 1)\n\t//{\n//\t\tusername = items[items.length-1];\n\t//}\n\t\n\twindow.username = \"Oh\";\n\n\twindow.ws.onmessage = function(e) {\n\t\twindow.tableData = JSON.parse(e.data);\n\t\tfor(var inote = 0; inote < 8; inote++)\n\t\t{\n\t\t\tvar find = false;\n\t\t\tfor(var i = 0; i < window.tableData.length; i++)\n\t\t\t{\n\t\t\t\tif(window.tableData[i].index == inote)\n\t\t\t\t{\n\t\t\t\t\tfind = true;\n\t\t\t\t\tvar isnew = (window.tableData[i].remain == window.tableData[i].total);\n\t\t\t\t\tvar buttonname = window.tableData[i].title + ' ['+ window.tableData[i].remain + '/' + window.tableData[i].total + ']';\n\t\t\t\t\tif(isnew)\n\t\t\t\t\t\tbuttonname += '*';\n\t\t\t\t\thypeDocument.getElementById('button'+(inote+1).toString()).innerHTML = buttonname;\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t\tif(find == false)\n\t\t\t{\n\t\t\t\thypeDocument.getElementById('button'+(inote+1).toString()).innerHTML = 'empty [0/0]';\n\t\t\t}\n\t\t}\n\t};\n\t\n\tsetTimeout(function() {\n\t\tvar senddata = {'command': 'getnotelist', 'id' : window.username };\n\t\twindow.ws.send(JSON.stringify(senddata));\n\t}, 100); // 100 ms \uac00 \uacbd\uacfc\ud558\uba74 \uc774 \ud568\uc218\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4.\n\t\n\thypeDocument.pauseTimelineNamed(\"Main Timeline\");\n\twindow.settingmode = 0;\n}",identifier:"46"},{name:"button1SettingClicked",source:"function(hypeDocument, element, event) {\t\n\t//location.assign(\"http://localhost:3000/settings\");\n\tif(window.settingmode == 0)\n\t{\n\t\thypeDocument.startTimelineNamed(\"Main Timeline\");\n\t\twindow.settingmode = 1;\n\t}\n\telse\n\t{\n\t\twindow.settingmode = 0;\n\t\thypeDocument.goToTimeInTimelineNamed(0, \"Main Timeline\");\n\t\thypeDocument.pauseTimelineNamed(\"Main Timeline\");\n\t\t//for(var i = 0; i < window.tableData.length; i++)\n\t\t//{\n\t\t//\thypeDocument.getElementById('button'+(i+1).toString()).innerHTML = window.tableData[i].title + ' ('+ window.tableData[i].remain + '/' + window.tableData[i].total + ')';\n\t\t//}\n\t}\n}",identifier:"48"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_578(c,e,{"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},h,[],d,[{n:"Untitled Scene 2",o:"23",X:[0]},{n:"Untitled Scene",o:"1",X:[1]}],[{A:{a:[{p:4,h:"46"}]},o:"25",p:"600px",cA:false,Y:414,Z:736,c:"#D6D6D6",L:[],bY:1,d:414,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0.12,b:[],a:[{f:"c",y:0,z:0.12,i:"w",e:"Settings<br><br>",s:"Note<br><br>",o:"58"},{f:"c",y:0,z:0.12,i:"G",e:"#FFFFFF",s:"#797979",o:"58"},{f:"c",y:0,z:0.11,i:"g",e:"#FFFFFF",s:"#F0F0F0",o:"66"},{f:"c",y:0,z:0.12,i:"G",e:"#D6D6D6",s:"#424242",o:"66"},{f:"c",y:0,z:0.12,i:"G",e:"#D6D6D6",s:"#424242",o:"62"},{f:"c",y:0,z:0.12,i:"G",e:"#D6D6D6",s:"#424242",o:"59"},{f:"c",y:0,z:0.12,i:"G",e:"#D6D6D6",s:"#424242",o:"65"},{f:"c",y:0,z:0.12,i:"G",e:"#D6D6D6",s:"#424242",o:"61"},{f:"c",y:0,z:0.12,i:"G",e:"#D6D6D6",s:"#424242",o:"68"},{f:"c",y:0,z:0.12,i:"G",e:"#D6D6D6",s:"#424242",o:"63"},{f:"c",y:0,z:0.12,i:"G",e:"#D6D6D6",s:"#424242",o:"60"},{f:"c",y:0,z:0.11,i:"g",e:"#FFFFFF",s:"#F0F0F0",o:"60"},{f:"c",y:0,z:0.11,i:"g",e:"#FFFFFF",s:"#F0F0F0",o:"63"},{f:"c",y:0,z:0.11,i:"g",e:"#FFFFFF",s:"#F0F0F0",o:"68"},{f:"c",y:0,z:0.11,i:"g",e:"#FFFFFF",s:"#F0F0F0",o:"59"},{f:"c",y:0,z:0.11,i:"g",e:"#FFFFFF",s:"#F0F0F0",o:"61"},{f:"c",y:0,z:0.11,i:"g",e:"#FFFFFF",s:"#F0F0F0",o:"65"},{f:"c",y:0,z:0.11,i:"g",e:"#FFFFFF",s:"#F0F0F0",o:"62"},{y:0.11,i:"g",s:"#FFFFFF",z:0,o:"66",f:"c"},{y:0.11,i:"g",s:"#FFFFFF",z:0,o:"60",f:"c"},{y:0.11,i:"g",s:"#FFFFFF",z:0,o:"63",f:"c"},{y:0.11,i:"g",s:"#FFFFFF",z:0,o:"68",f:"c"},{y:0.11,i:"g",s:"#FFFFFF",z:0,o:"59",f:"c"},{y:0.11,i:"g",s:"#FFFFFF",z:0,o:"61",f:"c"},{y:0.11,i:"g",s:"#FFFFFF",z:0,o:"65",f:"c"},{y:0.11,i:"g",s:"#FFFFFF",z:0,o:"62",f:"c"},{y:0.12,i:"G",s:"#FFFFFF",z:0,o:"58",f:"c"},{y:0.12,i:"w",s:"Settings<br><br>",z:0,o:"58",f:"c"},{y:0.12,i:"G",s:"#D6D6D6",z:0,o:"66",f:"c"},{y:0.12,i:"G",s:"#D6D6D6",z:0,o:"62",f:"c"},{y:0.12,i:"G",s:"#D6D6D6",z:0,o:"59",f:"c"},{y:0.12,i:"G",s:"#D6D6D6",z:0,o:"65",f:"c"},{y:0.12,i:"G",s:"#D6D6D6",z:0,o:"61",f:"c"},{y:0.12,i:"G",s:"#D6D6D6",z:0,o:"68",f:"c"},{y:0.12,i:"G",s:"#D6D6D6",z:0,o:"63",f:"c"},{y:0.12,i:"G",s:"#D6D6D6",z:0,o:"60",f:"c"}],f:30}},bZ:180,O:["58","67","66","60","63","64","68","61","65","59","62"],n:"Untitled Layout","_":0,v:{"65":{b:469,z:9,K:"Solid",c:368,L:"Solid",d:50,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"button6",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"40"}]},F:"center",G:"#424242",aP:"pointer",w:"{5}<br>",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"60":{b:218,z:5,K:"Solid",c:368,L:"Solid",d:50,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"button2",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"40"}]},F:"center",G:"#424242",aP:"pointer",w:"{1}",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"68":{b:344,z:7,K:"Solid",c:368,L:"Solid",d:49,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"button4",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"40"}]},F:"center",G:"#424242",aP:"pointer",w:"{3}<br>",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"63":{b:281,z:6,K:"Solid",c:368,L:"Solid",d:50,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"button3",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"40"}]},F:"center",G:"#424242",aP:"pointer",w:"{2}<br>",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"58":{G:"#797979",aU:8,c:287,d:69,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:57,Z:"break-word",w:"Note<br><br>",A:"#000000",x:"visible",j:"absolute",B:"#000000",y:"preserve",k:"div",C:"#000000",z:1,aS:8,D:"#000000",aT:8,a:16,F:"center",b:40},"66":{b:156,z:3,K:"Solid",c:368,L:"Solid",d:49,aS:6,M:1,bD:"none",N:1,f:0,dB:"button",O:1,g:"#F0F0F0",aU:6,aT:6,P:1,i:"button1",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"40"}]},F:"center",G:"#424242",aP:"pointer",w:"{0}<br>",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"61":{b:407,z:8,K:"Solid",c:368,L:"Solid",d:49,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"button5",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"40"}]},F:"center",G:"#424242",aP:"pointer",w:"{4}<br>",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"64":{c:100,d:100,I:"Solid",J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:"50%",A:"#D8DDE4",x:"visible",j:"absolute",O:1,aJ:"50%",k:"div",C:"#D8DDE4",z:2,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",P:1,a:156,aL:"50%",b:317},"59":{b:532,z:10,K:"Solid",c:368,L:"Solid",d:50,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"button7",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"40"}]},F:"center",G:"#424242",aP:"pointer",w:"{6}<br>",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"67":{b:50,z:12,K:"Solid",c:65,L:"Solid",d:50,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:44,aA:{a:[{p:4,h:"48"}]},F:"center",G:"#000000",aP:"pointer",w:"\u2699",x:"visible",I:"Solid",a:319,y:"preserve",J:"Solid"},"62":{b:595,z:11,K:"Solid",c:368,L:"Solid",d:49,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"button8",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"40"}]},F:"center",G:"#424242",aP:"pointer",w:"{7}<br>",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"}}},{A:{a:[{p:4,h:"10"}]},o:"3",p:"600px",cA:false,Y:414,Z:736,c:"#E0E0E0",L:[],bY:1,d:414,U:{},T:{"16":{i:"16",n:"Switch",z:0.13,b:[],a:[{f:"c",y:0,z:0.07,i:"bR",e:180,s:0,o:"75"},{f:"c",y:0,z:0.07,i:"e",e:0,s:1,o:"75"},{f:"c",p:2,y:0.07,z:0,i:"ActionHandler",s:{a:[{p:4,h:"17"}]},o:"16"},{f:"c",y:0.07,z:0.06,i:"bR",e:360,s:180,o:"75"},{f:"c",y:0.07,z:0.06,i:"e",e:1,s:0,o:"75"},{y:0.13,i:"bR",s:360,z:0,o:"75",f:"c"},{y:0.13,i:"e",s:1,z:0,o:"75",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0.25,b:[],a:[{f:"c",p:2,y:0.05,z:0,i:"ActionHandler",s:{a:[{p:4,h:"13"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:0.05,z:0.2,i:"e",e:1,s:0,o:"75"},{y:0.25,i:"e",s:1,z:0,o:"75",f:"c"}],f:30}},bZ:180,O:["70","76","75","72","74","69","71","73"],n:"Untitled Layout","_":1,v:{"73":{b:634,z:4,K:"Solid",c:380,L:"Solid",d:49,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#A9A9A9",aU:6,P:1,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:45,aA:{a:[{p:4,h:"21"}]},F:"center",G:"#5E5E5E",aP:"pointer",w:"What???<br>",x:"visible",I:"Solid",a:10,y:"preserve",J:"Solid"},"76":{b:51,z:8,K:"Solid",c:214,L:"Solid",d:28,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:24,aA:{a:[{p:4,h:"45"}]},F:"center",G:"#5E5E5E",aP:"pointer",w:"\uc9c8\ubb38/\ub2f5 \ubc14\uafb8\uae30",x:"visible",I:"Solid",a:176,y:"preserve",J:"Solid"},"71":{b:568,z:3,K:"Solid",c:380,L:"Solid",d:51,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#C0C0C0",aU:6,P:1,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#C9C9C9",B:"#C9C9C9",Z:"break-word",r:"inline",C:"#C9C9C9",D:"#C9C9C9",t:45,aA:{a:[{p:4,h:"20"}]},F:"center",G:"#5E5E5E",aP:"pointer",w:"Hmm...<br>",x:"visible",I:"Solid",a:10,y:"preserve",J:"Solid"},"74":{b:439,z:1,K:"Solid",c:380,L:"Solid",d:49,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#EBEBEB",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:45,aA:{a:[{p:4,h:"15"}]},F:"center",G:"#5E5E5E",aP:"pointer",w:"Absolutely<br>",x:"visible",I:"Solid",a:10,y:"preserve",J:"Solid"},"69":{b:502,z:2,K:"Solid",c:380,L:"Solid",d:51,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#D6D6D6",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:45,aA:{a:[{p:4,h:"19"}]},F:"center",G:"#5E5E5E",aP:"pointer",w:"I know<br>",x:"visible",I:"Solid",a:10,y:"preserve",J:"Solid"},"72":{G:"#5E5E5E",aU:8,c:366,aV:8,d:10,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",i:"scoreText",w:"New Text",j:"absolute",x:"visible",k:"div",y:"preserve",z:6,aS:8,aT:8,a:16,b:402},"75":{b:104,z:5,K:"Solid",c:376,L:"Solid",d:270,aS:8,bR:0,e:0,bD:"auto",M:1,N:1,dB:"button",O:1,g:"#EBEBEB",aU:8,aT:8,P:1,i:"mainTextBox",aV:8,j:"absolute",k:"div",A:"#000000",B:"#000000",Z:"break-word",r:"inline",C:"#000000",s:"Helvetica,Arial,Sans-Serif",D:"#000000",t:27,aA:{a:[{b:"16",p:8,z:false,symbolOid:"2",J:true}]},F:"center",G:"#212121",aP:"pointer",w:"This is the story what you looking for",x:"visible",I:"Solid",a:10,y:"preserve",J:"Solid"},"70":{b:52,z:7,K:"Solid",c:137,L:"Solid",d:28,aE:{a:[{p:0},{p:0}]},M:1,bD:"none",aS:6,N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:20,aA:{a:[{d:0.29999999999999999,p:1,g:2,f:2}]},F:"center",G:"#5E5E5E",aP:"pointer",w:"&lt;&lt;&lt; \ub4a4\ub85c\uac00\uae30",aB:{a:[{p:0},{p:0}]},x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"}}}],{},g,{},null,false,true,-1,true,true,true,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();