(self.webpackChunk=self.webpackChunk||[]).push([[6021],{16021:function(e,t,i){"use strict";i.r(t),i.d(t,{loadSections:function(){return p}}),i(98010),i(27471),i(5769),i(63238),i(61418),i(17460),i(14078);var r=i(6594),o=i(61097),a=i(83094),n=i(38102),s=i(17146),l=i(53754),c=i(78695);function d(){return!c.Z.desktop}function u(){return d()?"overflowBackdrop":"backdrop"}function v(){return d()?"overflowPortrait":"portrait"}function h(){return d()?"overflowSquare":"square"}function m(e,t,i,r,u){var v,h=a.ZP.getWindowSize().innerWidth,m={SortBy:"SortName",SortOrder:"Ascending",Filters:"IsFavorite",Recursive:!0,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",CollapseBoxSetItems:!1,ExcludeLocationTypes:"Virtual",EnableTotalRecordCount:!1};return i&&(m.ParentId=i),u||(m.Limit=h>=1920?10:h>=1440?8:6,d()&&(m.Limit=20)),"MusicArtist"===r.types?v=ApiClient.getArtists(t,m):(m.IncludeItemTypes=r.types,v=ApiClient.getItems(t,m)),v.then((function(t){var i="";if(t.Items.length){if(i+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',!c.Z.tv&&m.Limit&&t.Items.length>=m.Limit?(i+='<a is="emby-linkbutton" href="#!/list.html?serverId='+ApiClient.serverId()+"&type="+r.types+'&IsFavorite=true" class="more button-flat button-flat-mini sectionTitleTextButton">',i+='<h2 class="sectionTitle sectionTitle-cards">',i+=l.ZP.translate(r.name),i+="</h2>",i+='<span class="material-icons chevron_right"></span>',i+="</a>"):i+='<h2 class="sectionTitle sectionTitle-cards">'+l.ZP.translate(r.name)+"</h2>",i+="</div>",d()){var a="scrollX hiddenScrollX";c.Z.tv&&(a+=" smoothScrollX"),i+='<div is="emby-itemscontainer" class="itemsContainer '+a+' padded-left padded-right">'}else i+='<div is="emby-itemscontainer" class="itemsContainer vertical-wrap padded-left padded-right">';n.M.preferVisualCards&&r.autoCardLayout&&r.showTitle;!1,i+=o.default.getCardsHtml(t.Items,{preferThumb:r.preferThumb,shape:r.shape,centerText:r.centerText&&!0,overlayText:!1!==r.overlayText,showTitle:r.showTitle,showParentTitle:r.showParentTitle,scalable:!0,coverImage:r.coverImage,overlayPlayButton:r.overlayPlayButton,overlayMoreButton:r.overlayMoreButton&&!0,action:r.action,allowBottomPadding:!d(),cardLayout:false}),i+="</div>"}e.innerHTML=i,s.default.lazyChildren(e)}))}function p(e,t,i,o){r.ZP.show();var a=[{name:"Movies",types:"Movie",id:"favoriteMovies",shape:v(),showTitle:!1,overlayPlayButton:!0},{name:"Shows",types:"Series",id:"favoriteShows",shape:v(),showTitle:!1,overlayPlayButton:!0},{name:"Episodes",types:"Episode",id:"favoriteEpisode",shape:u(),preferThumb:!1,showTitle:!0,showParentTitle:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0},{name:"Videos",types:"Video,MusicVideo",id:"favoriteVideos",shape:u(),preferThumb:!0,showTitle:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0},{name:"Artists",types:"MusicArtist",id:"favoriteArtists",shape:h(),preferThumb:!1,showTitle:!0,overlayText:!1,showParentTitle:!1,centerText:!0,overlayPlayButton:!0,coverImage:!0},{name:"Albums",types:"MusicAlbum",id:"favoriteAlbums",shape:h(),preferThumb:!1,showTitle:!0,overlayText:!1,showParentTitle:!0,centerText:!0,overlayPlayButton:!0,coverImage:!0},{name:"Songs",types:"Audio",id:"favoriteSongs",shape:h(),preferThumb:!1,showTitle:!0,overlayText:!1,showParentTitle:!0,centerText:!0,overlayMoreButton:!0,action:"instantmix",coverImage:!0}],n=getParameterByName("sectionid");n&&(a=a.filter((function(e){return e.id===n}))),o&&(a=a.filter((function(e){return-1!==o.indexOf(e.id)})));var s=e.querySelector(".favoriteSections");if(!s.innerHTML){for(var l="",c=0,d=a.length;c<d;c++)l+='<div class="verticalSection section'+a[c].id+'"></div>';s.innerHTML=l}for(var p=[],f=0,y=a.length;f<y;f++){var T=a[f];s=e.querySelector(".section"+T.id),p.push(m(s,t,i,T,1===a.length))}Promise.all(p).then((function(){r.ZP.hide()}))}i(2553),i(51547),t.default={render:p}}}]);