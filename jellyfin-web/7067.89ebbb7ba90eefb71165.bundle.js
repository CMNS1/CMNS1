(self.webpackChunk=self.webpackChunk||[]).push([[7067],{87067:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return z},show:function(){return L}}),a(98010),a(69217),a(63238),a(32081),a(61418),a(5769);var n,i=a(1115),s=a(6594),r=a(83094),o=a(78695),d=a(27515),l=a(53754),c=a(74227),u=a(17146),m=a(47518),g=a(38102),p=(a(5100),a(16589),a(78066),a(21865),a(1892)),b=a.n(p),h=a(47807),v=(b()(h.Z,{insert:"head",singleton:!1}),h.Z.locals,a(53913)),f=a(61642),I=a(56346),y=a(9158),C=a.n(y),Z=!m.Z.slow&&!m.Z.edge,S=!1;function x(e,t,a){var i;s.ZP.show(),t?(i=v.Z.getApiClient(t.ServerId),T(e,t,i,a)):(i=v.Z.getApiClient(n.ServerId)).getItem(i.getCurrentUserId(),n.Id).then((function(t){T(e,t,i,a)}))}function k(e,t,a,n){e.addEventListener(a,(function(e){var a=r.ZP.parentWithClass(e.target,t);a&&n.call(a,e)}))}function T(e,t,a,i){n=t,a.getRemoteImageProviders(function(){var e={};return e.itemId=n.Id,e}()).then((function(t){for(var r=e.querySelectorAll(".btnBrowseAllImages"),l=0,c=r.length;l<c;l++)t.length?r[l].classList.remove("hide"):r[l].classList.add("hide");a.getItemImageInfos(n.Id).then((function(n){!function(e,t,a,n,i){B(0,0,t,n.filter((function(e){return"Screenshot"!==e.ImageType&&"Backdrop"!==e.ImageType&&"Chapter"!==e.ImageType})),i,e.querySelector("#images"))}(e,a,0,n,t),function(e,t,a,n,i){var s=n.filter((function(e){return"Backdrop"===e.ImageType})).sort((function(e,t){return e.ImageIndex-t.ImageIndex}));s.length?(e.querySelector("#backdropsContainer",e).classList.remove("hide"),B(0,0,t,s,i,e.querySelector("#backdrops"))):e.querySelector("#backdropsContainer",e).classList.add("hide")}(e,a,0,n,t),function(e,t,a,n,i){var s=n.filter((function(e){return"Screenshot"===e.ImageType})).sort((function(e,t){return e.ImageIndex-t.ImageIndex}));s.length?(e.querySelector("#screenshotsContainer",e).classList.remove("hide"),B(0,0,t,s,i,e.querySelector("#screenshots"))):e.querySelector("#screenshotsContainer",e).classList.add("hide")}(e,a,0,n,t),s.ZP.hide(),o.Z.tv&&d.Z.autoFocus(i||e)}))}))}function P(e,t,a,i,s,r,d,c){var u="",m="card scalableCard imageEditorCard";return m+=" backdropCard backdropCard-scalable","button"===d?(m+=" btnImageCard",o.Z.tv&&(m+=" show-focus",Z&&(m+=" show-animation")),u+='<button type="button" class="'+m+'"'):u+='<div class="'+m+'"',u+=' data-id="'+n.Id+'" data-serverid="'+i.serverId()+'" data-index="'+t+'" data-numimages="'+a+'" data-imagetype="'+e.ImageType+'" data-providers="'+s.length+'"',u+=">",u+='<div class="cardBox visualCardBox">',u+='<div class="cardScalable visualCardBox-cardScalable" style="background-color:transparent;">',u+='<div class="cardPadder-backdrop"></div>',u+='<div class="cardContent">',u+='<div class="cardImageContainer" style="background-image:url(\''+function(e,t,a,n,i){return(i=i||{}).type=a,i.index=n,i.tag="Backdrop"===a?e.BackdropImageTags[n]:"Screenshot"===a?e.ScreenshotImageTags[n]:"Primary"===a&&e.PrimaryImageTag||e.ImageTags[a],t.getScaledImageUrl(e.Id||e.ItemId,i)}(n,i,e.ImageType,e.ImageIndex,{maxWidth:r})+"');background-position:center center;background-size:contain;\"></div>",u+="</div>",u+="</div>",u+='<div class="cardFooter visualCardBox-cardFooter">',u+='<h3 class="cardText cardTextCentered" style="margin:0;">'+l.ZP.translate(""+e.ImageType)+"</h3>",u+='<div class="cardText cardText-secondary cardTextCentered">',e.Width&&e.Height?u+=e.Width+" X "+e.Height:u+="&nbsp;",u+="</div>",c&&(u+='<div class="cardText cardTextCentered">',"Backdrop"===e.ImageType||"Screenshot"===e.ImageType?(u+=t>0?'<button type="button" is="paper-icon-button-light" class="btnMoveImage autoSize" data-imagetype="'+e.ImageType+'" data-index="'+e.ImageIndex+'" data-newindex="'+(e.ImageIndex-1)+'" title="'+l.ZP.translate("MoveLeft")+'"><span class="material-icons chevron_left"></span></button>':'<button type="button" is="paper-icon-button-light" class="autoSize" disabled title="'+l.ZP.translate("MoveLeft")+'"><span class="material-icons chevron_left"></span></button>',u+=t<a-1?'<button type="button" is="paper-icon-button-light" class="btnMoveImage autoSize" data-imagetype="'+e.ImageType+'" data-index="'+e.ImageIndex+'" data-newindex="'+(e.ImageIndex+1)+'" title="'+l.ZP.translate("MoveRight")+'"><span class="material-icons chevron_right"></span></button>':'<button type="button" is="paper-icon-button-light" class="autoSize" disabled title="'+l.ZP.translate("MoveRight")+'"><span class="material-icons chevron_right"></span></button>'):s.length&&(u+='<button type="button" is="paper-icon-button-light" data-imagetype="'+e.ImageType+'" class="btnSearchImages autoSize" title="'+l.ZP.translate("Search")+'"><span class="material-icons search"></span></button>'),u+='<button type="button" is="paper-icon-button-light" data-imagetype="'+e.ImageType+'" data-index="'+(null!=e.ImageIndex?e.ImageIndex:"null")+'" class="btnDeleteImage autoSize" title="'+l.ZP.translate("Delete")+'"><span class="material-icons delete"></span></button>',u+="</div>"),u+="</div>",(u+="</div>")+"</"+d+">"}function w(e,t,a,n,i,s){var r=function(){i.deleteItemImage(t,a,n).then((function(){S=!0,x(e)}))};s?(0,I.Z)({text:l.ZP.translate("ConfirmDeleteImage"),confirmText:l.ZP.translate("Delete"),primary:"delete"}).then(r):r()}function A(e,t,a,n,i,s,r){t.updateItemImageIndex(a,n,i,s).then((function(){S=!0,x(e,null,r)}),(function(){(0,f.Z)(l.ZP.translate("ErrorDefault"))}))}function B(e,t,a,n,i,s){var d="",l=300,c=r.ZP.getWindowSize();c.innerWidth>=1280&&(l=Math.round(c.innerWidth/4));for(var m=o.Z.tv?"button":"div",g=!o.Z.tv,p=0,b=n.length;p<b;p++)d+=P(n[p],p,b,a,i,l,m,g);s.innerHTML=d,u.default.lazyChildren(s)}function M(e,t){a.e(7038).then(a.bind(a,27038)).then((function(a){a.show(n.Id,n.ServerId,n.Type,t).then((function(){S=!0,x(e)}))}))}function L(e){return new Promise((function(t,d){S=!1,function(e,t,d){var u=e.itemId,m=e.serverId;s.ZP.show();var p=v.Z.getApiClient(m);p.getItem(p.getCurrentUserId(),u).then((function(u){var m={removeOnClose:!0};o.Z.tv?m.size="fullscreen":m.size="small";var p=i.default.createDialog(m);p.classList.add("formDialog"),p.innerHTML=l.ZP.translateHtml(C(),"core"),o.Z.tv&&c.default.centerFocus.on(p,!1),function(e,t){for(var i=e.querySelectorAll(".btnOpenUploadMenu"),s=g.M.supports("fileinput"),o=0,d=i.length;o<d;o++)s?i[o].classList.remove("hide"):i[o].classList.add("hide");k(e,"btnOpenUploadMenu","click",(function(){var i=this.getAttribute("data-imagetype");a.e(1218).then(a.bind(a,51218)).then((function(a){a.default.show({theme:t.theme,imageType:i,itemId:n.Id,serverId:n.ServerId}).then((function(t){t&&(S=!0,x(e))}))}))})),k(e,"btnSearchImages","click",(function(){M(e,this.getAttribute("data-imagetype"))})),k(e,"btnBrowseAllImages","click",(function(){M(e,this.getAttribute("data-imagetype")||"Primary")})),k(e,"btnImageCard","click",(function(){!function(e,t){var n=t.getAttribute("data-id"),i=t.getAttribute("data-serverid"),s=v.Z.getApiClient(i),o=t.getAttribute("data-imagetype"),d=parseInt(t.getAttribute("data-index")),c=parseInt(t.getAttribute("data-providers")),u=parseInt(t.getAttribute("data-numimages"));Promise.resolve().then(a.bind(a,32465)).then((function(a){var i=a.default,m=[];m.push({name:l.ZP.translate("Delete"),id:"delete"}),"Backdrop"!==o&&"Screenshot"!==o||(d>0&&m.push({name:l.ZP.translate("MoveLeft"),id:"moveleft"}),d<u-1&&m.push({name:l.ZP.translate("MoveRight"),id:"moveright"})),c&&m.push({name:l.ZP.translate("Search"),id:"search"}),i.show({items:m,positionTo:t}).then((function(a){switch(a){case"delete":w(e,n,o,d,s,!1);break;case"search":M(e,o);break;case"moveleft":A(e,s,n,o,d,d-1,r.ZP.parentWithClass(t,"itemsContainer"));break;case"moveright":A(e,s,n,o,d,d+1,r.ZP.parentWithClass(t,"itemsContainer"))}}))}))}(e,this)})),k(e,"btnDeleteImage","click",(function(){var t=this.getAttribute("data-imagetype"),a=this.getAttribute("data-index");a="null"===a?null:parseInt(a);var i=v.Z.getApiClient(n.ServerId);w(e,n.Id,t,a,i,!0)})),k(e,"btnMoveImage","click",(function(){var t=this.getAttribute("data-imagetype"),a=this.getAttribute("data-index"),i=this.getAttribute("data-newindex"),s=v.Z.getApiClient(n.ServerId);A(e,s,n.Id,t,a,i,r.ZP.parentWithClass(this,"itemsContainer"))}))}(p,e),p.addEventListener("close",(function(){o.Z.tv&&c.default.centerFocus.off(p,!1),s.ZP.hide(),S?t():d()})),i.default.open(p),x(p,u),p.querySelector(".btnCancel").addEventListener("click",(function(){i.default.close(p)}))}))}(e,t,d)}))}var z={show:L}},47807:function(e,t,a){"use strict";var n=a(93476),i=a.n(n)()((function(e){return e[1]}));i.push([e.id,".imageEditor-buttons{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;margin:1em 0}.first-imageEditor-buttons{margin-top:2em}",""]),t.Z=i},9158:function(e){e.exports='<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1"><span class="material-icons arrow_back"></span></button> <h3 class="formDialogHeaderTitle"> ${HeaderEditImages} </h3> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner"> <div id="imagesContainer"> <div class="imageEditor-buttons first-imageEditor-buttons"> <h2 style="margin:0">${Images}</h2> <button type="button" is="emby-button" class="btnBrowseAllImages fab mini autoSize" style="margin-left:1em"> <span class="material-icons search"></span> </button> <button type="button" is="emby-button" class="btnOpenUploadMenu fab mini hide" style="margin-left:.5em"> <span class="material-icons add"></span> </button> </div> <div id="images" class="itemsContainer vertical-wrap"> </div> <br/> </div> <div id="backdropsContainer" class="hide"> <div class="imageEditor-buttons"> <h2 style="margin:0">${Backdrops}</h2> <button type="button" is="emby-button" class="btnBrowseAllImages fab mini autoSize" style="margin-left:1em" data-imagetype="Backdrop"> <span class="material-icons search"></span> </button> <button type="button" is="emby-button" class="btnOpenUploadMenu fab mini hide" style="margin-left:.5em" data-imagetype="Backdrop"> <span class="material-icons add"></span> </button> </div> <div id="backdrops" class="itemsContainer vertical-wrap"> </div> <br/> </div> <div id="screenshotsContainer" class="hide"> <div class="imageEditor-buttons"> <h2 style="margin:0">${Screenshots}</h2> <button type="button" is="emby-button" class="btnBrowseAllImages fab mini autoSize" style="margin-left:1em" data-imagetype="Screenshot"> <span class="material-icons search"></span> </button> <button type="button" is="emby-button" class="btnOpenUploadMenu fab mini hide" style="margin-left:.5em" data-imagetype="Screenshot"> <span class="material-icons add"></span> </button> </div> <div id="screenshots" class="itemsContainer vertical-wrap"> </div> </div> </div> </div> '}}]);