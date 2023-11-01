(()=>{"use strict";var t={28:(t,e,n)=>{n.d(e,{Z:()=>o});var i=n(81),s=n.n(i),r=n(645),a=n.n(r)()(s());a.push([t.id,"* {\n    box-sizing: border-box;\n}\n\nbody {\n    width: 100vw;\n    background-color: wheat;\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n}\n\n#totalListOptionBar {\n    background-color: aliceblue;\n}\n\n#listArea {\n    background-color: aqua;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n}\n\n.list {\n    background-color: violet;\n    width: 400px;\n    height: 600px;\n    margin: 20px;\n    display: flex;\n    flex-direction: column;\n}\n\n.newListName {\n    text-align: center;\n    cursor: pointer;\n}\n\n#listName {\n    background-color: transparent;\n}\n\n#submitListName {\n}",""]);const o=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);i&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},a=[],o=0;o<t.length;o++){var l=t[o],c=i.base?l[0]+i.base:l[0],d=r[c]||0,u="".concat(c," ").concat(d);r[c]=d+1;var p=n(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var m=s(h,i);i.byIndex=o,e.splice(o,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var o=n(r[a]);e[o].references--}for(var l=i(t,s),c=0;c<r.length;c++){var d=n(r[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=l}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),i=n(795),s=n.n(i),r=n(569),a=n.n(r),o=n(565),l=n.n(o),c=n(216),d=n.n(c),u=n(589),p=n.n(u),h=n(28),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=d(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;class f{constructor(){this.listArea=document.getElementById("listArea"),this.list=document.createElement("div"),this.list.classList.add("list"),this.listArea.appendChild(this.list),this.createTitle("list","listHeader"),this.inputTask=this.createInput("Enter your task...","text","taskValue","block"),this.list.appendChild(this.inputTask),this.submitTask=this.createButton("Add","submitTask"),this.submitTask.addEventListener("click",this.addTask),this.list.appendChild(this.submitTask),this.deleteList()}createInput(t,e,n,i){const s=document.createElement("input");return s.placeholder=t,s.type=e,s.id=n,s.style.display=i,this.list.appendChild(s),s}createButton(t,e){const n=document.createElement("button");return n.textContent=t,n.id=e,n}createTitle(t,e){const n=document.createElement("p");n.classList.add("newListName"),n.textContent="default list name",this.list.appendChild(n);const i=document.createElement("p");i.classList.add("newListName"),i.textContent="want to change list name?",this.list.appendChild(i);const s=this.createInput("write your list name","text","listName","none");this.list.appendChild(s);const r=this.createButton("submit list name","submitListName");r.style.display="none",this.list.appendChild(r),i.addEventListener("click",(()=>{r.style.display="block",s.style.display="block"})),r.addEventListener("click",(()=>{const t=this.list.querySelector("#listName");n.textContent=t.value,t.value="",r.style.display="none",s.style.display="none"}))}addTask=()=>{const t=this.inputTask.value;if(""!==t){const e=document.createElement("li");e.textContent=t;const n=this.createButton("Delete","deleteButton");n.addEventListener("click",(()=>this.list.removeChild(e)));const i=this.createButton("completed?","completeButton");i.addEventListener("click",(()=>e.style.color="red"));const s=this.createButton("important","importantButton");s.addEventListener("click",(()=>e.style.fontWeight="bold")),e.appendChild(n),e.appendChild(i),e.appendChild(s),this.list.appendChild(e),this.inputTask.value=""}else alert("Please enter a task.")};deleteList(){const t=this.createButton("delete list?","deleteList");t.addEventListener("click",(()=>this.listArea.removeChild(this.list))),this.list.appendChild(t)}}const v=document.createElement("button");v.classList.add("createList"),v.textContent="create list",totalListOptionBar.appendChild(v),v.addEventListener("click",(()=>{new f}))})()})();