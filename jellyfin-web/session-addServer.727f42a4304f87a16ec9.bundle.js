(self.webpackChunk=self.webpackChunk||[]).push([[5051],{68993:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}}),t(63238),t(61418),t(5769);var r=t(67469),a=t(6594),i=t(53754),o=(t(78066),t(76543)),l=t(53913);function s(e,n){switch(a.ZP.hide(),n.State){case"SignedIn":var t=n.ApiClient;o.ZP.onServerChanged(t.getCurrentUserId(),t.accessToken(),t),o.ZP.navigate("home.html");break;case"ServerSignIn":o.ZP.navigate("login.html?serverid="+n.Servers[0].Id,!1,"none");break;case"ServerSelection":o.ZP.navigate("selectserver.html",!1,"none");break;case"ServerUpdateNeeded":o.ZP.alert({message:i.ZP.translate("ServerUpdateNeeded",'<a href="https://github.com/jellyfin/jellyfin">https://github.com/jellyfin/jellyfin</a>')});break;case"Unavailable":o.ZP.alert({message:i.ZP.translate("MessageUnableToConnectToServer"),title:i.ZP.translate("HeaderConnectionFailure")})}}function c(e,n){e.querySelector(".addServerForm").addEventListener("submit",(function(n){return function(e){a.ZP.show();var n=e.querySelector("#txtServerHost").value;l.Z.connectToAddress(n,{enableAutoLogin:r.Z.enableAutoLogin()}).then((function(e){s(0,e)}),(function(){s(0,{State:"Unavailable"})}))}(e),n.preventDefault(),!1})),e.querySelector(".btnCancel").addEventListener("click",(function(){Promise.resolve().then(t.bind(t,6383)).then((function(e){e.appRouter.back()}))})),Promise.resolve().then(t.bind(t,6610)).then((function(n){n.default.autoFocus(e)}))}}}]);