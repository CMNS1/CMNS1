(self.webpackChunk=self.webpackChunk||[]).push([[5967],{69287:function(e,t,n){"use strict";n.r(t),n(63238),n(61418),n(5769),n(71848);var o=n(6594),i=n(53754),r=(n(78066),n(76543)),c=n(61642);function a(){o.ZP.show();var e=this;return ApiClient.getNamedConfiguration("livetv").then((function(t){t.GuideDays=$("#selectGuideDays",e).val()||null;var n=e.querySelector("#txtRecordingPath").value||null,o=e.querySelector("#txtMovieRecordingPath").value||null,a=e.querySelector("#txtSeriesRecordingPath").value||null,s=n!=t.RecordingPath||o!=t.MovieRecordingPath||a!=t.SeriesRecordingPath;t.RecordingPath=n,t.MovieRecordingPath=o,t.SeriesRecordingPath=a,t.RecordingEncodingFormat="mkv",t.PrePaddingSeconds=60*$("#txtPrePaddingMinutes",e).val(),t.PostPaddingSeconds=60*$("#txtPostPaddingMinutes",e).val(),t.RecordingPostProcessor=$("#txtPostProcessor",e).val(),t.RecordingPostProcessorArguments=$("#txtPostProcessorArguments",e).val(),ApiClient.updateNamedConfiguration("livetv",t).then((function(){r.ZP.processServerConfigurationUpdateResult(),function(e){var t="";e&&(t+=i.ZP.translate("MessageChangeRecordingPath")),t&&(0,c.Z)(t)}(s)}))})),!1}$(document).on("pageinit","#liveTvSettingsPage",(function(){var e=this;$(".liveTvSettingsForm").off("submit",a).on("submit",a),$("#btnSelectRecordingPath",e).on("click.selectDirectory",(function(){n.e(3688).then(n.bind(n,63688)).then((function(t){var n=new(0,t.default);n.show({callback:function(t){t&&$("#txtRecordingPath",e).val(t),n.close()},validateWriteable:!0})}))})),$("#btnSelectMovieRecordingPath",e).on("click.selectDirectory",(function(){n.e(3688).then(n.bind(n,63688)).then((function(t){var n=new(0,t.default);n.show({callback:function(t){t&&$("#txtMovieRecordingPath",e).val(t),n.close()},validateWriteable:!0})}))})),$("#btnSelectSeriesRecordingPath",e).on("click.selectDirectory",(function(){n.e(3688).then(n.bind(n,63688)).then((function(t){var n=new(0,t.default);n.show({callback:function(t){t&&$("#txtSeriesRecordingPath",e).val(t),n.close()},validateWriteable:!0})}))})),$("#btnSelectPostProcessorPath",e).on("click.selectDirectory",(function(){n.e(3688).then(n.bind(n,63688)).then((function(t){var n=new(0,t.default);n.show({includeFiles:!0,callback:function(t){t&&$("#txtPostProcessor",e).val(t),n.close()}})}))}))})).on("pageshow","#liveTvSettingsPage",(function(){o.ZP.show();var e=this;ApiClient.getNamedConfiguration("livetv").then((function(t){!function(e,t){$(".liveTvSettingsForm",e).show(),$(".noLiveTvServices",e).hide(),$("#selectGuideDays",e).val(t.GuideDays||""),$("#txtPrePaddingMinutes",e).val(t.PrePaddingSeconds/60),$("#txtPostPaddingMinutes",e).val(t.PostPaddingSeconds/60),e.querySelector("#txtRecordingPath").value=t.RecordingPath||"",e.querySelector("#txtMovieRecordingPath").value=t.MovieRecordingPath||"",e.querySelector("#txtSeriesRecordingPath").value=t.SeriesRecordingPath||"",e.querySelector("#txtPostProcessor").value=t.RecordingPostProcessor||"",e.querySelector("#txtPostProcessorArguments").value=t.RecordingPostProcessorArguments||"",o.ZP.hide()}(e,t)}))}))}}]);