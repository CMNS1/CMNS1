(self.webpackChunk=self.webpackChunk||[]).push([[9974],{29974:function(e,a,t){"use strict";t.r(a),t(98010),t(63238),t(61418);var r=t(1115),s=t(83094),n=t(78695),i=t(53754),c=t(6594),d=t(47518),o=t(27515),l=t(74227),u=(t(56561),t(16589),t(78066),t(51547),t(5100),t(53913)),v=!d.Z.slow&&!d.Z.edge;function f(e){var a="",t="card scalableCard backdropCard backdropCard-scalable";return n.Z.tv&&(t+=" show-focus",v&&(t+=" show-animation")),a+='<button type="button" class="'+t+'" data-id="'+e.DeviceId+'" style="min-width:33.3333%;">',a+='<div class="cardBox visualCardBox">',a+='<div class="cardScalable visualCardBox-cardScalable">',a+='<div class="cardPadder-backdrop"></div>',a+='<div class="cardContent searchImage">',a+='<div class="cardImageContainer coveredImage"><span class="cardImageIcon material-icons dvr"></span></div>',a+="</div>",a+="</div>",a+='<div class="cardFooter visualCardBox-cardFooter">',a+='<div class="cardText cardTextCentered">'+function(e){switch(e=e.toLowerCase()){case"m3u":return"M3U";case"hdhomerun":return"HDHomerun";case"hauppauge":return"Hauppauge";case"satip":return"DVB";default:return"Unknown"}}(e.Type)+"</div>",a+='<div class="cardText cardTextCentered cardText-secondary">'+e.FriendlyName+"</div>",a+='<div class="cardText cardText-secondary cardTextCentered">',a+=e.Url||"&nbsp;",a+="</div>",a+="</div>",(a+="</div>")+"</button>"}var h=[];a.default=function(){this.show=function(e){var a={removeOnClose:!0,scrollY:!1};n.Z.tv?a.size="fullscreen":a.size="small";var t=r.default.createDialog(a);t.classList.add("formDialog");var d,v,p="";return p+='<div class="formDialogHeader">',p+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1"><span class="material-icons arrow_back"></span></button>',p+='<h3 class="formDialogHeaderTitle">',p+=i.ZP.translate("HeaderLiveTvTunerSetup"),p+="</h3>",p+="</div>",p+=function(){var e="";return e+='<div class="formDialogContent scrollY">',e+='<div class="dialogContentInner dialog-content-centered">',e+='<div class="loadingContent hide">',e+="<h1>"+i.ZP.translate("DetectingDevices")+"...</h1>",e+="<p>"+i.ZP.translate("MessagePleaseWait")+"</p>",e+="</div>",e+='<h1 style="margin-bottom:.25em;" class="devicesHeader hide">'+i.ZP.translate("HeaderNewDevices")+"</h1>",e+='<div is="emby-itemscontainer" class="results vertical-wrap">',e+="</div>",(e+="</div>")+"</div>"}(),t.innerHTML=p,t.querySelector(".btnCancel").addEventListener("click",(function(){r.default.close(t)})),t.querySelector(".results").addEventListener("click",(function(e){var a=s.ZP.parentWithClass(e.target,"card");if(a){var n=a.getAttribute("data-id");d=h.filter((function(e){return e.DeviceId===n}))[0],r.default.close(t)}})),n.Z.tv&&l.default.centerFocus.on(t.querySelector(".formDialogContent"),!1),u.Z.getApiClient(e.serverId),v=t,c.ZP.show(),v.querySelector(".loadingContent").classList.remove("hide"),ApiClient.getJSON(ApiClient.getUrl("LiveTv/Tuners/Discvover",{NewDevicesOnly:!0})).then((function(e){h=e,function(e,a){for(var t="",r=0,s=a.length;r<s;r++)t+=f(a[r]);a.length?e.querySelector(".devicesHeader").classList.remove("hide"):(t="<p><br/>"+i.ZP.translate("NoNewDevicesFound")+"</p>",e.querySelector(".devicesHeader").classList.add("hide"));var c=e.querySelector(".results");c.innerHTML=t,n.Z.tv&&o.Z.autoFocus(c)}(v,e),v.querySelector(".loadingContent").classList.add("hide"),c.ZP.hide()})),n.Z.tv&&l.default.centerFocus.off(t.querySelector(".formDialogContent"),!1),r.default.open(t).then((function(){return d?Promise.resolve(d):Promise.reject()}))}}}}]);