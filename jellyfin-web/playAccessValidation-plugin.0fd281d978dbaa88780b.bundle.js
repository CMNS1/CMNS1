(self.webpackChunk=self.webpackChunk||[]).push([[1844],{86052:function(e,r,t){"use strict";t.r(r),t(63238),t(61418),t(61370);var n=t(53754),a=t(53913),i=t(61642);function s(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.name="Playback validation",this.type="preplayintercept",this.id="playaccessvalidation",this.order=-2}var r,t;return r=e,(t=[{key:"intercept",value:function(e){var r=e.item;if(!r)return Promise.resolve();var t=r.ServerId;return t?a.Z.getApiClient(t).getCurrentUser().then((function(r){return r.Policy.EnableMediaPlayback?Promise.resolve():e.fullscreen?(0,i.Z)(n.ZP.translate("MessagePlayAccessRestricted")).finally(Promise.reject):Promise.reject()})):Promise.resolve()}}])&&s(r.prototype,t),e}();r.default=l}}]);