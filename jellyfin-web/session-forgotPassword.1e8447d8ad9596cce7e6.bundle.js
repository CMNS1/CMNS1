(self.webpackChunk=self.webpackChunk||[]).push([[3347],{26312:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var a=r(53754),n=r(76543);function s(e){if("ContactAdmin"!=e.Action)if("InNetworkRequired"!=e.Action){if("PinCode"==e.Action){var t=a.ZP.translate("MessageForgotPasswordFileCreated");return t+="<br/>",t+="<br/>",t+="Enter PIN here to finish Password Reset<br/>",t+="<br/>",t+=e.PinFile,t+="<br/>",void n.ZP.alert({message:t,title:a.ZP.translate("ButtonForgotPassword"),callback:function(){n.ZP.navigate("forgotpasswordpin.html")}})}}else n.ZP.alert({message:a.ZP.translate("MessageForgotPasswordInNetworkRequired"),title:a.ZP.translate("ButtonForgotPassword")});else n.ZP.alert({message:a.ZP.translate("MessageContactAdminToResetPassword"),title:a.ZP.translate("ButtonForgotPassword")})}function o(e,t){e.querySelector("form").addEventListener("submit",(function(t){return ApiClient.ajax({type:"POST",url:ApiClient.getUrl("Users/ForgotPassword"),dataType:"json",contentType:"application/json",data:JSON.stringify({EnteredUsername:e.querySelector("#txtName").value})}).then(s),t.preventDefault(),!1}))}}}]);