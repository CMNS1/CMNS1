(self.webpackChunk=self.webpackChunk||[]).push([[9219],{24228:function(e,a,t){"use strict";t.r(a),t(23938),t(61013),t(63238),t(61418),t(5769);var r=t(6594),s=t(83094),n=t(53754),i=t(19502),l=t(9785),c=(t(21865),t(5100),t(78066),t(90834),t(93462),t(76543)),o=t(56346),d=t(61097);function u(e,a){e.querySelector(".localUsers").innerHTML=function(e,a){return e.map((function(e){return function(e,a){var t,r="",s="card squareCard scalableCard squareCard-scalable";e.Policy.IsDisabled&&(s+=" grayscale"),r+="<div data-userid='"+e.Id+"' class='"+s+"'>",r+='<div class="cardBox visualCardBox">',r+='<div class="cardScalable visualCardBox-cardScalable">',r+='<div class="cardPadder cardPadder-square"></div>',r+='<a is="emby-linkbutton" class="cardContent '.concat(t?"":d.default.getDefaultBackgroundClass(),'" href="#!/useredit.html?userId=').concat(e.Id,'">'),e.PrimaryImageTag&&(t=ApiClient.getUserImageUrl(e.Id,{width:300,tag:e.PrimaryImageTag,type:"Primary"}));var c="cardImage";e.Policy.IsDisabled&&(c+=" disabledUser"),t?r+='<div class="'+c+'" style="background-image:url(\''+t+"');\">":(r+='<div class="'.concat(c," ").concat(t?"":d.default.getDefaultBackgroundClass(),' flex align-items-center justify-content-center">'),r+='<span class="material-icons cardImageIcon person"></span>'),r+="</div>",r+="</a>",r+="</div>",r+='<div class="cardFooter visualCardBox-cardFooter">',r+='<div class="cardText flex align-items-center">',r+='<div class="flex-grow" style="overflow:hidden;text-overflow:ellipsis;">',r+=e.Name,r+="</div>",r+='<button type="button" is="paper-icon-button-light" class="btnUserMenu flex-shrink-zero"><span class="material-icons more_vert"></span></button>',r+="</div>",r+='<div class="cardText cardText-secondary">';var o,u=(o=e.LastActivityDate)?n.ZP.translate("LastSeen",(0,i.Z)(Date.parse(o),l.mF)):"";return r+=""!=u?u:"&nbsp;",r+="</div>",r+="</div>",(r+="</div>")+"</div>"}(e)})).join("")}(a)}function Z(e){r.ZP.show(),ApiClient.getUsers().then((function(a){u(e,a),r.ZP.hide()}))}(0,c.Xz)("pageinit","userProfilesPage",(function(){this.querySelector(".btnAddUser").addEventListener("click",(function(){c.ZP.navigate("usernew.html")})),this.querySelector(".localUsers").addEventListener("click",(function(e){var a,i,l,d,u,f=s.ZP.parentWithClass(e.target,"btnUserMenu");f&&(a=f,i=s.ZP.parentWithClass(a,"card"),l=s.ZP.parentWithClass(i,"page"),d=i.getAttribute("data-userid"),(u=[]).push({name:n.ZP.translate("ButtonOpen"),id:"open",icon:"mode_edit"}),u.push({name:n.ZP.translate("ButtonLibraryAccess"),id:"access",icon:"lock"}),u.push({name:n.ZP.translate("ButtonParentalControl"),id:"parentalcontrol",icon:"person"}),u.push({name:n.ZP.translate("Delete"),id:"delete",icon:"delete"}),Promise.resolve().then(t.bind(t,32465)).then((function(e){e.default.show({items:u,positionTo:i,callback:function(e){switch(e){case"open":c.ZP.navigate("useredit.html?userId="+d);break;case"access":c.ZP.navigate("userlibraryaccess.html?userId="+d);break;case"parentalcontrol":c.ZP.navigate("userparentalcontrol.html?userId="+d);break;case"delete":!function(e,a){var t=n.ZP.translate("DeleteUserConfirmation");(0,o.Z)({title:n.ZP.translate("DeleteUser"),text:t,confirmText:n.ZP.translate("Delete"),primary:"delete"}).then((function(){r.ZP.show(),ApiClient.deleteUser(a).then((function(){Z(e)}))}))}(l,d)}}})})))}))})),(0,c.Xz)("pagebeforeshow","userProfilesPage",(function(){Z(this)}))},9785:function(e,a,t){"use strict";t.d(a,{Kd:function(){return Y},mF:function(){return $}});var r=t(77946),s=t(12496),n=t(11401),i=t(84146),l=t(59996),c=t(78210),o=t(9477),d=t(33026),u=t(91814),Z=t(88303),f=t(22410),h=t(35997),v=t(73956),p=t(86496),g=t(6902),b=t(35163),m=t(36749),P=t(89310),k=t(22481),y=t(75710),C=t(11109),x=t(74270),I=t(37159),w=t(27324),U=t(68490),D=t(19046),B=t(81905),L=t(19656),S=t(5905),T=t(64660),A=t(69509),q=t(24770),z=t(84216),F=t(77411),W=t(23282),j=t(60754),M=t(21430),E=t(45614),X=t(83305),_=t(95861),H=t(37405),K=t(6148),N=t(63258),O=t(50281),G=t(67889),J=t(44362),Q=t(69244),R=t(96730),V=t(53754);function Y(){return e=V.ZP.getCurrentLocale(),{af:r.Z,ar:s.Z,"be-by":n.Z,"bg-bg":i.Z,bn:l.Z,ca:c.Z,cs:o.Z,da:d.Z,de:u.Z,el:Z.Z,"en-gb":f.Z,"en-us":h.Z,eo:v.Z,es:p.Z,"es-ar":p.Z,"es-do":p.Z,"es-mx":p.Z,fa:g.Z,fi:b.Z,fr:m.Z,"fr-ca":P.Z,gl:k.Z,gsw:u.Z,he:y.Z,"hi-in":C.Z,hr:x.Z,hu:I.Z,id:w.Z,is:U.Z,it:D.Z,ja:B.Z,kk:L.Z,ko:S.Z,"lt-lt":T.Z,ms:A.Z,nb:q.Z,nl:z.Z,pl:F.Z,pt:W.Z,"pt-br":j.Z,"pt-pt":W.Z,ro:M.Z,ru:E.Z,sk:X.Z,"sl-si":_.Z,sv:H.Z,ta:K.Z,th:N.Z,tr:O.Z,uk:G.Z,vi:J.Z,"zh-cn":Q.Z,"zh-hk":Q.Z,"zh-tw":R.Z}[e]||h.Z;var e}var $={addSuffix:!0,locale:Y()};a.ZP={getLocale:Y,localeWithSuffix:$}}}]);