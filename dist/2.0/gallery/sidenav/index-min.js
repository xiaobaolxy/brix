KISSY.add("brix/gallery/sidenav/index",function(t,e){var n=t.all,r=function(){r.superclass.constructor.apply(this,arguments)};return r.ATTRS={sidebar:{value:"#sidebar"},inmain:{value:"#inmain"},nav:{value:"#nav"},subNav:{value:"#subNav"},subNavWrap:{value:"#subNavWrap"},subNavHandle:{value:"#subNavHandle"},index:{value:"#!/home/"},duration:{value:.25},pathMap:{value:{}}},t.extend(r,e,{initialize:function(){this.sidebar=n(this.get("sidebar")),this.main=n(this.get("inmain")),this.allLinks=this.sidebar.all("a"),this.nav=n(this.get("nav")),this.subNav=n(this.get("subNav")),this.subNavWrap=n(this.get("subNavWrap")),this.subNavHandle=n(this.get("subNavHandle")),this.pathMap=this.get("pathMap"),this.subNavView=n('<div class="sub-nav-view"></div>').appendTo("body"),this.localStorage=window.localStorage,this.isFullSubNav=this.localStorage&&this.localStorage.isFullSubNav||"1","0"===this.isFullSubNav&&this.subNavHandle.replaceClass("icon-expand","icon-collapse"),this.index=this.get("index"),this.duration=this.get("duration"),this.isHandleClick=!1,this.navTop=this.nav.offset().top,this._bindUI(),this._pathname2sidebar()},_getPathname:function(){var t,e=/^#!(\/.+)\/.*$/.exec(location.hash);return t=e&&e[1]||""},_pathname2sidebar:function(){var e=this,n=this._getPathname(),r=n&&"#!"+n+"/"||this.index;return t.each(this.pathMap,function(t,e){return r===e?(r=t,!1):void 0}),""===r?(this._setNoSelectedNav(),void 0):(this.sidebar.all("a").each(function(t){var n=t.attr("href");n=n.replace(/^.*?#/g,"#");var i=n.match(/.*\//);if(!i)return!1;var a=i[0];return a.slice(a.indexOf("#"))===r?(e.navclick(t,r),!1):void 0}),this.isNavClick=!1,void 0)},_setNoSelectedNav:function(){this.sidebar.all("a").removeClass("on"),this._collapseNav()},navclick:function(t,e,r){var i=this,a=this._getPathname();e=e||a&&"#!"+a+"/"||this.index;var o,s=!1;if(this.nav.all("a").each(function(t){o=t.attr("href"),o=o.slice(o.indexOf("#")),o===e&&(s=!0)}),r&&(s=!1),s)i._expandCollapseNav(t);else{var u=t.parent("ul[data-sub]");if(!u)return;var l=i.nav.all("a[data-sub="+u.attr("data-sub")+"]");i._expandCollapseNav(l),i.subNav.all("a").removeClass("on"),r?i.subNav.all('a[href="#!/board/list/board.archivestatus=1"]').addClass("on"):i.subNav.all("a").each(function(t){return t.attr("href")===e?(t.addClass("on"),!1):void 0})}i.isHandleClick=!1,i.nowNav=t,i.isNavClick=!0,n(window).scrollTop(0)},_bindUI:function(){var e=this;n(window).on("scroll",function(){e._timer(function(){e._fixedStatic()},10)}).on("hashchange",function(){e.isNavClick||e._pathname2sidebar(),e.isNavClick=!1}),e.nav.delegate("click","a",function(n){var r=t.one(n.target);e.navclick(r)}),e.subNav.delegate("click","a",function(r){var i=t.one(r.target).closest("a"),a=i.closest(".sub-nav-ul"),o=a.attr("data-sub");e.isHandleClick=!1,e.nowNav=e.nav.all("a[data-sub="+o+"]"),e.navclick(e.nowNav),e.currentSubNav=i.closest(".sub"),e._setSubNavOn(i),e.isNavClick=!0,n(window).scrollTop(0)}),e.subNav.delegate("click",".sub-title",function(t){var r=n(t.currentTarget),i=r.next(".sub-nav-third");if("0px"===i.css("height")){var a=i.css("height","auto").height();i.css("height",0),i.animate({height:a},e.duration,"easeOut")}else i.animate({height:0},e.duration,"easeOut")}),e.subNavHandle.on("click",function(){e.isHandleClick=!0,e._expandCollapseSubNav()}),e.subNav.delegate("mouseenter",".sub",function(n){if("0"===e.isFullSubNav){var r=t.one(n.target).closest(".sub"),i=r.offset();e.currentLi=r,e.subNavView.html(r.html()),e.subNavView.one(".sub-nav-third").css("height","auto"),e.subNavView.css(i)}}),e.subNavView.on("mouseleave",function(){e.subNavView.css("left","-10000px"),e.subNavView.one(".sub-nav-third").css("height",0),e.currentLi.html(e.subNavView.html())}),e.subNavView.delegate("click","a",function(n){var r=t.one(n.target).closest("a");e._setSubNavOn(r),e.currentSubNav=e.currentLi,e.isNavClick=!0})},_fixedStatic:function(){var e=this,n=Math.max(document.body.scrollTop,document.documentElement.scrollTop),r=n>e.navTop;r?(e.sidebar.addClass("sidebar-fixed"),6===t.UA.ie&&e.sidebar.css({position:"absolute",top:n+10})):(e.sidebar.removeClass("sidebar-fixed"),6===t.UA.ie&&e.sidebar.css({position:"static"}))},_timer:function(t,e){clearTimeout(this.itv),this.itv=setTimeout(t,e)},_setSubNavOn:function(t){var e=t.closest(".sub-nav-third");this.subNav.all("a, .icon-font").removeClass("on"),this.subNavView.all("a, .icon-font").removeClass("on"),t.addClass("on"),"0"===this.isFullSubNav&&e&&e.prev().addClass("on")},_expandCollapseNav:function(t){var e,n=this,r=t.attr("data-sub"),i=t.attr("href");if(i=i.slice(i.indexOf("#")),r){if(n.currentNav&&n.currentNav.hide(),n.currentNav=n.subNav.one('[data-sub="'+r+'"]'),n.currentNav.all("a").each(function(t){var n=t.attr("href");return n.slice(n.indexOf("#"))===i?(e=t,!1):void 0}),!e)return;n.currentSubNav=e,n._setSubNavOn(e),n.currentNav.show(),n._expandNav()}else n._collapseNav();n.nav.all("a").removeClass("on"),t.addClass("on")},_switchTrigger:function(){"1"===this.isFullSubNav?this.subNavHandle.replaceClass("icon-collapse","icon-expand"):"0"===this.isFullSubNav&&this.subNavHandle.replaceClass("icon-expand","icon-collapse")},_expandCollapseSubNav:function(){function t(){var t="1"===this.isFullSubNav;this.isFullSubNav=t?"0":"1",this.localStorage&&(this.localStorage.isFullSubNav=t?"0":"1")}var e=this,n=e.currentSubNav,r=n&&("LI"===n.prop("nodeName")?n.one("ul"):n.closest("ul")),i=r&&r.hasClass("sub-nav-third");"0"===e.isFullSubNav?(t.call(e),e._expandSubNav(),e._switchTrigger(),i&&r.prev()&&r.prev().removeClass("on")):"1"===e.isFullSubNav&&(e._collapseSubNav(function(){t.call(e),e._switchTrigger()}),i&&r.prev()&&r.prev().addClass("on"))},_collapseSubNav:function(t){this.subNav.animate({width:"16px","padding-top":"42px"},this.duration,"easeOut",t),this.main.animate({"margin-left":"116px"},this.duration,"easeOut"),this._collapseThirdNav()},_expandSubNav:function(t){this.subNav.animate({width:"140px","padding-top":"0px"},this.duration,"easeOut",t),this.main.animate({"margin-left":"240px"},this.duration,"easeOut"),this._expandThirdNav(),this.subNavView.css("left","-10000px")},_expandThirdNav:function(e){var n=this;n.nowNav&&(n.nowNav.attr("data-sub")!==n.currentNav.attr("data-sub")||n.isHandleClick?t.all(".sub-nav-third").each(function(t){var r=t.css("height","auto").height();t.css("height",0),t.animate({height:r},n.duration,"easeOut",e)}):t.all(".sub-nav-third").css("height","auto"))},_collapseThirdNav:function(e){t.all(".sub-nav-third").animate({height:0},this.duration,"easeOut",e)},_expandNav:function(t,e){this.subNav.show(),this.subNav.animate({width:"1"===this.isFullSubNav?"140px":"16px","padding-top":"1"===this.isFullSubNav?"0":"42px"},this.duration,"easeOut",e),this.subNavWrap.animate({"margin-left":"0"},this.duration,"easeOut",e),this.main.animate({"margin-left":"1"===this.isFullSubNav?"240px":"116px"},this.duration,"easeOut"),"1"===this.isFullSubNav?this._expandThirdNav():this._collapseThirdNav()},_collapseNav:function(t,e){var n=this;this.subNav.animate({width:"1px"},this.duration,"easeOut",function(){n.subNav.hide()}),this.subNavWrap.animate({"margin-left":"1"===this.isFullSubNav?"-140px":"-16px"},this.duration,"easeOut",e),this.main.animate({"margin-left":"100px"},this.duration,"easeOut")}}),r},{requires:["brix/core/brick"]});