KISSY.add("brix/gallery/inplaceeditor/index",function(t,e){function n(){n.superclass.constructor.apply(this,arguments),this._v=null,this._x=0,this._y=0}return n.ATTRS={autoRender:{value:!0},tmpl:{value:'<div class="inplaceeditor-popup"><input class="input" type="text" value=""></div>'}},n.EVENTS={input:{focusout:function(){this.hide()},keydown:function(t){if(13==t.keyCode)try{t.target.blur()}catch(t){}}}},n.FIRES={show:"show",hide:"hide",valueChange:"valueChange"},n.METHODS={show:function(t,e,r,i){var a=this.get("el"),o=a.one("input");a.css({visibility:"visible"}),void 0!==t&&(this._x=t),void 0!==e&&(this._y=e),a.css({left:this._x,top:this._y}),i&&o.css(i),o[0].focus(),void 0!==r&&(this._v=r,o.val(r)),this.fire(n.FIRES.show)},hide:function(){var e=this.getValue(),r=this.get("el");return this._v!=e&&this.fire(n.FIRES.valueChange,{value:e})===!1?(this._v=e,t.later(function(){try{r.one("input")[0].focus()}catch(t){}},50),void 0):(r.css({visibility:"hidden",left:"-9999px",top:"-9999px"}),this.fire(n.FIRES.hide),void 0)},getValue:function(){var t=this.get("el");return t.one("input").val()}},t.extend(n,e,{}),t.augment(n,n.METHODS),n},{requires:["brix/core/brick"]});