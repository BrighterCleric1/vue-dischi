(function(t){function e(e){for(var r,u,i=e[0],l=e[1],o=e[2],f=0,p=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&p.push(a[u][0]),a[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},s=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var o=0;o<i.length;o++)e(i[o]);var c=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"101e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main",{attrs:{albums:t.albums}})],1)},s=[],u=n("bc3a"),i=n.n(u),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header")},o=[],c={name:"Header"},f=c,p=(n("a52f"),n("2877")),b=Object(p["a"])(f,l,o,!1,null,"6e6af9e2",null),d=b.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"container"},[n("div",{staticClass:"row row-cols-5"},t._l(t.albums,(function(t,e){return n("Album",{key:e,staticClass:"col",attrs:{album:t}})})),1)])])},v=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"album"},[n("div",{staticClass:"inner"},[n("div",{staticClass:"album-img"},[n("img",{attrs:{src:t.album.poster,alt:"pic"}})]),n("div",{staticClass:"details"},[n("div",{staticClass:"title"},[t._v(t._s(t.album.title))]),n("div",{staticClass:"author"},[t._v(t._s(t.album.author))]),n("div",{staticClass:"year"},[t._v(t._s(t.album.year))])])])])},y=[],_={name:"Album",props:{album:Object}},O=_,g=(n("cb9e"),Object(p["a"])(O,h,y,!1,null,"81dd13fa",null)),j=g.exports,w={name:"Main",components:{Album:j},props:{albums:Array}},x=w,C=(n("e177e"),Object(p["a"])(x,m,v,!1,null,"5b8d545b",null)),M=C.exports,P={name:"App",components:{Main:M,Header:d},data:function(){return{albums:[]}},created:function(){var t=this;i.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){t.albums=e.data.response}))}},A=P,S=Object(p["a"])(A,a,s,!1,null,null,null),$=S.exports;n("7b17"),n("ab8b");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t($)}}).$mount("#app")},"8a46":function(t,e,n){},"944f":function(t,e,n){},a52f:function(t,e,n){"use strict";n("8a46")},cb9e:function(t,e,n){"use strict";n("101e")},e177e:function(t,e,n){"use strict";n("944f")}});
//# sourceMappingURL=app.8cc08eaa.js.map