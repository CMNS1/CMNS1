(self.webpackChunk=self.webpackChunk||[]).push([[6408],{21767:function(e,t,i){"use strict";i.r(t),i(98010),i(27471),i(5769),i(61013),i(63238),i(61418),i(17460),i(14078),i(71848),i(65219);var n=i(76543);function s(e,t,i,n,s,r){var o='<div class="checkboxList paperList" style="padding: .5em 1em;">';o+=t.map((function(e){var t=(r?-1!=s.indexOf(e.Id):-1==s.indexOf(e.Id))?' checked="checked"':"";return'<label><input is="emby-checkbox" class="'+i+'" type="checkbox" data-itemid="'+e.Id+'"'+t+"/><span>"+e.Name+"</span></label>"})).join(""),o+="</div>",e.html(o).trigger("create")}function r(){var e,t,i,s;return e=$(this).parents(".page"),t=getParameterByName("type"),i=ApiClient.getNamedConfiguration(o),s=ApiClient.getJSON(ApiClient.getUrl("Notifications/Types")),Promise.all([i,s]).then((function(i){var s=i[0],r=s.Options.filter((function(e){return e.Type==t}))[0];r||(r={Type:t},s.Options.push(r)),r.Enabled=$("#chkEnabled",e).is(":checked"),r.SendToUserMode=$("#selectUsers",e).val(),r.DisabledMonitorUsers=$(".chkMonitor",e).get().filter((function(e){return!e.checked})).map((function(e){return e.getAttribute("data-itemid")})),r.SendToUsers=$(".chkSendTo",e).get().filter((function(e){return e.checked})).map((function(e){return e.getAttribute("data-itemid")})),r.DisabledServices=$(".chkService",e).get().filter((function(e){return!e.checked})).map((function(e){return e.getAttribute("data-itemid")})),ApiClient.updateNamedConfiguration(o,s).then((function(e){n.ZP.processServerConfigurationUpdateResult(),n.ZP.navigate("notificationsettings.html")}))})),!1}var o="notifications";$(document).on("pageinit","#notificationSettingPage",(function(){var e=this;$("#selectUsers",e).on("change",(function(){"Custom"==this.value?$(".selectCustomUsers",e).show():$(".selectCustomUsers",e).hide()})),$(".notificationSettingForm").off("submit",r).on("submit",r)})).on("pageshow","#notificationSettingPage",(function(){var e,t,i,n,r,a;e=this,t=getParameterByName("type"),i=ApiClient.getUsers(),n=ApiClient.getNamedConfiguration(o),r=ApiClient.getJSON(ApiClient.getUrl("Notifications/Types")),a=ApiClient.getJSON(ApiClient.getUrl("Notifications/Services")),Promise.all([i,n,r,a]).then((function(i){var n=i[0],r=i[1],o=i[2],a=i[3],c=r.Options.filter((function(e){return e.Type==t}))[0],d=o.filter((function(e){return e.Type==t}))[0]||{};d.IsBasedOnUserEvent?$(".monitorUsers",e).show():$(".monitorUsers",e).hide(),$(".notificationType",e).html(d.Name||"Unknown Notification"),c||(c={DisabledMonitorUsers:[],SendToUsers:[],DisabledServices:[],SendToUserMode:"Admins"}),s($(".monitorUsersList",e),n,"chkMonitor",0,c.DisabledMonitorUsers),s($(".sendToUsersList",e),n,"chkSendTo",0,c.SendToUsers,!0),s($(".servicesList",e),a,"chkService",0,c.DisabledServices),$("#chkEnabled",e).prop("checked",c.Enabled||!1),$("#selectUsers",e).val(c.SendToUserMode).trigger("change")}))}))}}]);