(self.webpackChunk=self.webpackChunk||[]).push([[9425],{38319:function(t,e,n){"use strict";n.r(e),n.d(e,{authorize:function(){return a},activate:function(){return u}});var r=n(53754),c=n(38440),i=n(76543),a=function(t){var e=ApiClient.getUrl("/QuickConnect/Authorize?Code="+t);return ApiClient.ajax({type:"POST",url:e},!0).then((function(){(0,c.Z)(r.ZP.translate("QuickConnectAuthorizeSuccess"))})).catch((function(){(0,c.Z)(r.ZP.translate("QuickConnectAuthorizeFail"))})),!1},u=function(){var t=ApiClient.getUrl("/QuickConnect/Activate");return ApiClient.ajax({type:"POST",url:t}).then((function(){return(0,c.Z)(r.ZP.translate("QuickConnectActivationSuccessful")),!0})).catch((function(t){throw console.error("Error activating quick connect. Error:",t),i.ZP.alert({title:r.ZP.translate("HeaderError"),message:r.ZP.translate("DefaultErrorMessage")}),t}))}}}]);