(()=>{"use strict";var r={426:(r,n,e)=>{e.d(n,{Z:()=>u});var t=e(81),o=e.n(t),a=e(645),i=e.n(a),s=e(667),c=e.n(s),d=new URL(e(275),e.b),l=i()(o()),p=c()(d);l.push([r.id,"* {\r\n    font-family: Helvetica, Arial, sans-serif;\r\n}\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n\r\n\r\nbody {\r\n    display: grid;\r\n    grid-template-rows: 6fr 10fr 1fr;\r\n}\r\n\r\nheader {\r\n    grid-row: 1;\r\n    display: grid;\r\n    grid-template-rows: 1fr 5fr;\r\n}\r\n\r\nnav {\r\n    grid-row: 1;\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    background-color: #361500;\r\n}\r\n\r\nnav ul {\r\n    display: flex;\r\n    list-style: none;\r\n    font-size: 1.5rem;\r\n    padding: 15px 0;\r\n}\r\n\r\nnav ul li {\r\n    border-right: 1px solid #603601;\r\n    padding: 5px 25px;\r\n}\r\n\r\nnav ul a {\r\n    text-decoration: none;\r\n    color: #CC9544;\r\n}\r\n\r\nnav ul li:last-child {\r\n    border: none;\r\n}\r\n\r\nnav ul a:hover {\r\n    color: #e4bc80;\r\n}\r\n\r\n#header-image {\r\n    grid-row: 2;\r\n    background-color: #CC9544;\r\n    background: linear-gradient(\r\n        rgba(0,0,0,0.4),\r\n        rgba(0,0,0,0.4)\r\n    ),url("+p+");\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    width: 100%;\r\n    display: grid;\r\n    align-items: center;\r\n    justify-items: center;\r\n}\r\n\r\n#headline {\r\n    display: grid;\r\n    justify-items: center;\r\n    color: #fff;\r\n    font-size: 1.4rem;\r\n}\r\n\r\n#headline h2 {\r\n    font-size: 4rem;\r\n}\r\n\r\nmain {\r\n    grid-row: 2;\r\n    background-color: #181106;\r\n    display: grid;\r\n    justify-items: center;\r\n}\r\n\r\n#content {\r\n    background-color: #181106;\r\n    color: #CC9544;\r\n    width: 40%;\r\n    margin: 40px 0 40px 0;\r\n    border-radius: 20px;\r\n}\r\n\r\n.home-content {\r\n    display: grid;\r\n    width: 100%;\r\n    gap: 40px;\r\n}\r\n\r\n.opening-hours {\r\n    justify-self: center;\r\n    padding: 10px 20px 20px 20px;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-template-columns: repeat(3, minmax(200px, 1fr));\r\n    gap: 15px;\r\n    justify-items: center;\r\n    border: 1px solid #e4bc80;\r\n    border-radius: 15px;\r\n}\r\n\r\n.opening-hours h2 {\r\n    font-size: 2rem;\r\n    grid-column: 1 / span 3;\r\n    align-self: start;\r\n}\r\n\r\n.opening-hours h3 {\r\n    font-size: 1.2rem;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.opening-hours div {\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.about {\r\n    justify-self: center;\r\n    padding: 15px 40px;\r\n    display: grid;\r\n    grid-template-rows: 1fr minmax(150px, 3fr);\r\n    gap: 15px;\r\n    justify-items: center;\r\n    border: 1px solid #e4bc80;\r\n    border-radius: 15px;\r\n}\r\n\r\n.about h2 {\r\n    font-size: 2rem;\r\n    grid-column: 1 / span 3;\r\n    align-self: start;\r\n}\r\n\r\nfooter {\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    grid-row: 3;\r\n    font-size: .9rem;\r\n    background-color: #361500;\r\n    color: #CC9544;\r\n}",""]);const u=l},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<r.length;d++){var l=[].concat(r[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:r=>{r.exports=function(r,n){return n||(n={}),r?(r=String(r.__esModule?r.default:r),/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]|(%20)/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r):r}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],s=0;s<r.length;s++){var c=r[s],d=t.base?c[0]+t.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=e(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,t);t.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var s=e(a[i]);n[s].references--}for(var c=t(r,o),d=0;d<a.length;d++){var l=e(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},275:(r,n,e)=>{r.exports=e.p+"87072337c70a212ad1c9.jpg"}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.m=r,e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var n=e.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var t=n.getElementsByTagName("script");t.length&&(r=t[t.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var r={};e.r(r);var n=e(379),t=e.n(n),o=e(795),a=e.n(o),i=e(569),s=e.n(i),c=e(565),d=e.n(c),l=e(216),p=e.n(l),u=e(589),f=e.n(u),m=e(426),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),t()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const h=document.createElement("header");h.appendChild(function(){const r=document.createElement("nav"),n=document.createElement("ul");for(let r of v){const r=document.createElement("li"),e=document.createElement("a");e.textContent=e,r.appendChild(e),n.appendChild(r)}return r.appendChild(n),r}()),h.appendChild(function(){const r=document.createElement("div");r.id="header-image";const n=document.createElement("div");n.id="headline",r.appendChild(n);const e=document.createElement("h2");e.textContent="Odin Restaurant",n.appendChild(e);const t=document.createElement("span");return t.textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit.",n.appendChild(t),r}());const v=["Home","Menu","Contacts"];console.log("Restaurant app loaded!"),document.querySelector("body").appendChild(r.default)})()})();