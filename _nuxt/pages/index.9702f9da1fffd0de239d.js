webpackJsonp([0],{"+ptz":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("section",{staticClass:"container"},[a("div",{staticClass:"columns"}),a("div",{staticClass:"columns is-centered",staticStyle:{padding:"2rem"}},[a("div",{staticClass:"column"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-48x48"},[a("b-icon",{attrs:{icon:"cloud-download"}})],1)]),t._m(0)]),a("div",{staticClass:"content"},[a("p",[t._v("You can find lorum ipsum GitHub.")]),a("a",{staticClass:"button is-primary is-large"},[t._v("Download for MacOS")]),a("br"),a("a",{attrs:{href:"#"}},[t._v("Download for Windows or Linux")]),a("br"),a("br"),a("p",[t._v("Install via homebrew on MacOS:")]),a("code",[t._v("brew tap phrase/brewed")]),a("br"),a("code",[t._v("brew install phraseapp")]),a("br"),a("br"),a("a",{staticClass:"button"},[a("span",[t._v("Learn more")]),a("b-icon",{attrs:{icon:"play"}})],1)])])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-48x48"},[a("b-icon",{attrs:{icon:"settings"}})],1)]),t._m(1)]),a("div",{staticClass:"content"},[t._m(2),a("br"),a("a",{staticClass:"button"},[a("span",[t._v("Learn more")]),a("b-icon",{attrs:{icon:"play"}})],1)])])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-48x48"},[a("b-icon",{attrs:{icon:"cloud-upload"}})],1)]),t._m(3)]),a("div",{staticClass:"content"},[a("p",[t._v("Use the phraseapp push command\n                to upload your existing locale files\n                to PhraseApp. Done.")]),a("br"),a("a",{staticClass:"button"},[a("span",[t._v("Learn more")]),a("b-icon",{attrs:{icon:"play"}})],1)])])])])])]),t.posts?a("PostList",{attrs:{posts:t.posts.data}}):t._e()],1)};i._withStripped=!0;var e={render:i,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[this._v("Download and Install")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[this._v("Initialize")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Use the "),s("code",[this._v("phraseapp init")]),this._v(" command to initialize and configure your project.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[this._v("Upload")])])}]};s.a=e},"/TYz":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("X+9r"),e=a("+ptz"),n=!1;var r=function(t){n||a("793G")},c=a("VU/8")(i.a,e.a,!1,r,null,null);c.options.__file="pages/index.vue",s.default=c.exports},"793G":function(t,s,a){var i=a("ZTtD");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a("rjj0").default)("c059de1e",i,!1,{sourceMap:!1})},"X+9r":function(t,s,a){"use strict";var i=a("Xxa5"),e=a.n(i),n=a("exGp"),r=a.n(n),c=a("mtWM"),o=a.n(c);s.a={data:function(){return{posts:null}},asyncData:function(){var t=r()(e.a.mark(function t(s){var a,i;s.params;return e.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("https://phraseapp.com/blog/wp-json/wp/v2/posts/?per_page=3&_embed");case 2:return a=t.sent,i=a.posts,t.abrupt("return",i);case 5:case"end":return t.stop()}},t,this)}));return function(s){return t.apply(this,arguments)}}(),mounted:function(){var t=r()(e.a.mark(function t(){return e.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.temp){t.next=4;break}return t.next=3,o.a.get("https://phraseapp.com/blog/wp-json/wp/v2/posts/?per_page=3&_embed");case 3:this.posts=t.sent;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},ZTtD:function(t,s,a){(t.exports=a("FZ+f")(!1)).push([t.i,".title.is-regular{font-weight:400}",""])}});