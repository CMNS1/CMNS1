(self.webpackChunk=self.webpackChunk||[]).push([[9008],{19008:function(e,t,n){"use strict";n.r(t),n(15610),n(27471),n(72410),n(63238),n(61418),n(40895),n(17460),n(5769);var i=n(1115),r=n(78695),o=n(53754),a=n(28978),l=(n(65219),n(30983),n(78066),n(21865),n(50447),n(56561),n(16589),n(93462),n(29927)),c=n.n(l);function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw o}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function v(e){return e.preventDefault(),!1}function f(e,t,i){Promise.resolve().then(n.bind(n,74227)).then((function(n){var r=i?"on":"off";n.centerFocus[r](e,t)}))}function h(e,t,n){var i=e.querySelector(t);n&&!i.classList.contains("hiddenFromViewSettings")?i.classList.remove("hide"):i.classList.add("hide")}var m=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"show",value:function(e){return new Promise((function(t,n){var l={removeOnClose:!0,scrollY:!1};r.Z.tv?l.size="fullscreen":l.size="small";var s=i.default.createDialog(l);s.classList.add("formDialog");var d="";d+='<div class="formDialogHeader">',d+='<button is="paper-icon-button-light" class="btnCancel hide-mouse-idle-tv" tabindex="-1"><span class="material-icons arrow_back"></span></button>',d+='<h3 class="formDialogHeaderTitle">${Settings}</h3>',d+="</div>",d+=c(),s.innerHTML=o.ZP.translateHtml(d,"core");var m,y,p=u(s.querySelectorAll(".viewSetting"));try{for(p.s();!(m=p.n()).done;){var g=m.value;-1===e.visibleSettings.indexOf(g.getAttribute("data-settingname"))?(g.classList.add("hide"),g.classList.add("hiddenFromViewSettings")):(g.classList.remove("hide"),g.classList.remove("hiddenFromViewSettings"))}}catch(e){p.e(e)}finally{p.f()}!function(e,t){e.querySelector("form").addEventListener("submit",v);var n,i=u(e.querySelectorAll(".viewSetting-checkboxContainer"));try{for(i.s();!(n=i.n()).done;){var r=n.value;r.querySelector("input").checked=t[r.getAttribute("data-settingname")]||!1}}catch(e){i.e(e)}finally{i.f()}e.querySelector(".selectImageType").value=t.imageType||"primary"}(s,e.settings),s.querySelector(".selectImageType").addEventListener("change",(function(){h(s,".chkTitleContainer","list"!==this.value),h(s,".chkYearContainer","list"!==this.value)})),s.querySelector(".btnCancel").addEventListener("click",(function(){i.default.close(s)})),r.Z.tv&&f(s.querySelector(".formDialogContent"),!1,!0),s.querySelector(".selectImageType").dispatchEvent(new CustomEvent("change",{})),s.querySelector("form").addEventListener("change",(function(){y=!0}),!0),i.default.open(s).then((function(){if(r.Z.tv&&f(s.querySelector(".formDialogContent"),!1,!1),y)return function(e,t,n){var i,r=u(e.querySelectorAll(".viewSetting-checkboxContainer"));try{for(r.s();!(i=r.n()).done;){var o=i.value;a.set(n+"-"+o.getAttribute("data-settingname"),o.querySelector("input").checked)}}catch(e){r.e(e)}finally{r.f()}a.set(n+"-imageType",e.querySelector(".selectImageType").value)}(s,e.settings,e.settingsKey),void t();n()}))}))}}])&&s(t.prototype,n),e}();t.default=m},29927:function(e){e.exports='<div class="formDialogContent smoothScrollY" style="padding-top:2em"> <div class="dialogContentInner dialog-content-centered"> <form style="margin:auto"> <div class="verticalSection"> <div class="selectContainer viewSetting hide" data-settingname="imageType"> <select is="emby-select" label="${LabelImageType}" class="selectImageType"> <option value="primary">${Primary}</option> <option value="banner">${Banner}</option> <option value="disc">${Disc}</option> <option value="logo">${Logo}</option> <option value="thumb">${Thumb}</option> <option value="list">${List}</option> </select> </div> <div class="checkboxContainer viewSetting viewSetting-checkboxContainer hide chkTitleContainer" data-settingname="showTitle"> <label> <input is="emby-checkbox" type="checkbox"/> <span>${ShowTitle}</span> </label> </div> <div class="checkboxContainer viewSetting viewSetting-checkboxContainer hide chkYearContainer" data-settingname="showYear"> <label> <input is="emby-checkbox" type="checkbox"/> <span>${ShowYear}</span> </label> </div> <div class="checkboxContainer viewSetting viewSetting-checkboxContainer hide" data-settingname="groupBySeries"> <label> <input is="emby-checkbox" type="checkbox"/> <span>${GroupBySeries}</span> </label> </div> </div> </form> </div> </div> '}}]);