KISSY.add("brix/gallery/charts/as/case",function(e,t){function a(){var e=this;a.superclass.constructor.apply(e,arguments),e.init()}return a.ATTRS={_id:{value:"_SWF"}},e.extend(a,t,{init:function(){var e=this;e.set("_id",e.get("parent_id")+e.get("_id")),KISSY.use("dom, event, flash",function(t){t.Flash.add("#"+e.get("parent_id"),{src:e.get("path"),id:e.get("_id"),version:10,params:{flashvars:{configData:e.get("config").configData,chartData:e.get("config").chartData},wmode:"transparent",allowScriptAccess:"always"},attrs:{width:"100%",height:"100%"}})})},actions:function(e,t){"reset"==e&&this._getFlash(this.get("_id")).toAS(e,this._objectToString(t))},_getFlash:function(t){return e.one("#"+t)[0]},_objectToString:function(e){var t="";for(var a in e)t+=a+"="+encodeURIComponent(e[a])+"&";return t=t.substr(0,t.length-1)}}),a},{requires:["base","node"]});