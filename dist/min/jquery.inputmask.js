/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2013 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 2.2.35
*/
(function(c){void 0==c.fn.inputmask&&(c.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},escapeChar:"\\",mask:null,oncomplete:c.noop,onincomplete:c.noop,oncleared:c.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:c.noop,onKeyDown:c.noop,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:c.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,radixPoint:"",skipRadixDance:!1,rightAlignNumerics:!0,
definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,
RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(c,J,E){var K=c.length;!J&&1<E&&(K+=c.length*(E-1));return K}},val:c.fn.val,escapeRegex:function(c){return c.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")}},c.fn.inputmask=function(L,J){function E(e,d){var g=b.aliases[e];return g?(g.alias&&E(g.alias),c.extend(!0,b,g),c.extend(!0,b,
d),!0):!1}function K(e){var d=!1,g=0,t=b.greedy,a=b.repeat;1==e.length&&!1==t&&(b.placeholder="");for(var e=c.map(e.split(""),function(a){var c=[];if(a==b.escapeChar)d=true;else if(a!=b.optionalmarker.start&&a!=b.optionalmarker.end||d){var f=b.definitions[a];if(f&&!d)for(a=0;a<f.cardinality;a++)c.push(H(g+a));else{c.push(a);d=false}g=g+c.length;return c}}),w=e.slice(),f=1;f<a&&t;f++)w=w.concat(e.slice());return{mask:w,repeat:a,greedy:t}}function P(e){var d=!1,g=!1,t=!1;return c.map(e.split(""),function(a){var c=
[];if(a==b.escapeChar)g=!0;else if(a==b.optionalmarker.start&&!g)t=d=!0;else if(a==b.optionalmarker.end&&!g)d=!1,t=!0;else{var f=b.definitions[a];if(f&&!g){for(var k=f.prevalidator,e=k?k.length:0,C=1;C<f.cardinality;C++){var u=e>=C?k[C-1]:[],z=u.validator,u=u.cardinality;c.push({fn:z?"string"==typeof z?RegExp(z):new function(){this.test=z}:/./,cardinality:u?u:1,optionality:d,newBlockMarker:!0==d?t:!1,offset:0,casing:f.casing,def:f.definitionSymbol|a});!0==d&&(t=!1)}c.push({fn:f.validator?"string"==
typeof f.validator?RegExp(f.validator):new function(){this.test=f.validator}:/./,cardinality:f.cardinality,optionality:d,newBlockMarker:t,offset:0,casing:f.casing,def:f.definitionSymbol|a})}else c.push({fn:null,cardinality:0,optionality:d,newBlockMarker:t,offset:0,casing:null,def:a}),g=!1;t=!1;return c}})}function Q(){function e(a){var c=a.length;for(i=0;i<c&&a.charAt(i)!=b.optionalmarker.start;i++);var d=[a.substring(0,i)];i<c&&d.push(a.substring(i+1,c));return d}function d(a,w){var f=0,k=0,l=w.length;
for(i=0;i<l&&!(w.charAt(i)==b.optionalmarker.start&&f++,w.charAt(i)==b.optionalmarker.end&&k++,0<f&&f==k);i++);f=[w.substring(0,i)];i<l&&f.push(w.substring(i+1,l));var C=e(f[0]);if(1<C.length){if(l=a+C[0]+(b.optionalmarker.start+C[1]+b.optionalmarker.end)+(1<f.length?f[1]:""),-1==c.inArray(l,t)&&(t.push(l),k=K(l),g.push({mask:l,_buffer:k.mask,buffer:k.mask.slice(),tests:P(l),lastValidPosition:void 0,greedy:k.greedy,repeat:k.repeat})),l=a+C[0]+(1<f.length?f[1]:""),-1==c.inArray(l,t)&&(t.push(l),k=
K(l),g.push({mask:l,_buffer:k.mask,buffer:k.mask.slice(),tests:P(l),lastValidPosition:void 0,greedy:k.greedy,repeat:k.repeat})),1<e(C[1]).length&&d(a+C[0],C[1]+f[1]),1<f.length&&1<e(f[1]).length)d(a+C[0]+(b.optionalmarker.start+C[1]+b.optionalmarker.end),f[1]),d(a+C[0],f[1])}else l=a+f,-1==c.inArray(l,t)&&(t.push(l),k=K(l),g.push({mask:l,_buffer:k.mask,buffer:k.mask.slice(),tests:P(l),lastValidPosition:void 0,greedy:k.greedy,repeat:k.repeat}))}var g=[],t=[];c.isArray(b.mask)?c.each(b.mask,function(a,
b){d("",b.toString())}):d("",b.mask.toString());return g}function H(c){return b.placeholder.charAt(c%b.placeholder.length)}function A(e,d){var g,t;function a(){return e[d]}function w(){return a().tests}function f(){return a()._buffer}function k(){return a().buffer}function l(j,S,f,r){function x(a,j){for(var c=z(a),d=S?1:0,k="",e=j.buffer,x=j.tests[c].cardinality;x>d;x--)k+=y(e,c-(x-1));S&&(k+=S);return null!=j.tests[c].fn?j.tests[c].fn.test(k,e,a,f,b):!1}if(f=!0===f){var g=x(j,a());!0===g&&(g={pos:j});
return g}var l=[],g=!1,p=d;c.each(e,function(a){d=a;if(p!=d&&!u(j)){if(S==this._buffer[j]||S==b.skipOptionalPartCharacter)return l.push({activeMasksetIndex:a,result:{refresh:!0}}),this.lastValidPosition=j,!1;this.lastValidPosition=r?o()+1:-1}if((void 0==this.lastValidPosition&&j==(r?F(o()):s(-1))||r||b.numericInput?this.lastValidPosition<=b.numericInput?o():s(j):this.lastValidPosition>=F(j))&&0<=j&&j<o()){g=x(j,this);if(!1!==g){!0===g&&(g={pos:j});var c=g.pos||j;if(void 0==this.lastValidPosition||
(r?b.greedy?this.lastValidPosition>c:c==k().length-1:this.lastValidPosition<c))this.lastValidPosition=c}else this.lastValidPosition=r?j==o()?void 0:s(j):0==j?void 0:F(j);l.push({activeMasksetIndex:a,result:g})}});d=p;return l}function C(j){var f=d,I={activeMasksetIndex:0,lastValidPosition:j?o()+1:-1};c.each(e,function(a){if(void 0!=this.lastValidPosition&&(j||b.numericInput?this.lastValidPosition<I.lastValidPosition:this.lastValidPosition>I.lastValidPosition))I.activeMasksetIndex=a,I.lastValidPosition=
this.lastValidPosition});d=I.activeMasksetIndex;f!=d&&(j?K(k(),0,F(I.lastValidPosition)):K(k(),s(I.lastValidPosition),o()),a().writeOutBuffer=!0)}function u(a){a=z(a);a=w()[a];return void 0!=a?a.fn:!1}function z(a){return a%w().length}function o(){return b.getMaskLength(f(),a().greedy,a().repeat,k(),b)}function s(a){var b=o();if(a>=b)return b;for(;++a<b&&!u(a););return a}function F(a){if(0>=a)return 0;for(;0<--a&&!u(a););return a}function p(a,b,c,d,f){d&&(b=L(a,b,f));d=w()[z(b)];f=c;if(void 0!=f)switch(d.casing){case "upper":f=
c.toUpperCase();break;case "lower":f=c.toLowerCase()}a[b]=f}function y(a,b,c){c&&(b=L(a,b));return a[b]}function L(a,b,c){if(c)for(;0>b&&a.length<o();){c=f().length-1;for(b=f().length;void 0!==f()[c];)a.unshift(f()[c--])}else for(;void 0==a[b]&&a.length<o();)for(c=0;void 0!==f()[c];)a.push(f()[c++]);return b}function E(a,b,c){a._valueSet(b.join(""));void 0!=c&&B(a,c)}function K(a,b,c){for(var d=o();b<c&&b<d;b++)p(a,b,y(f().slice(),b,!0))}function A(a,b){var c=z(b);p(a,b,y(f(),c))}function R(j,k,g,
r){var x=c(j).data("inputmask").isRTL,r=void 0!=r?r.slice():M(j._valueGet(),x).split("");c.each(e,function(a,b){b.buffer=b._buffer.slice();b.lastValidPosition=void 0;b.p=x?o():0});!0!==g&&(d=0);x&&!b.numericInput&&(r=r.reverse());var l=o();c.each(r,function(a,d){var e=x?b.numericInput?l:l-a-1:a;(u(x?b.numericInput?F(l):l-a-1:a)||!0!==g&&d!=y(f(),e,!0))&&c(j).trigger("keypress",[!0,d.charCodeAt(0),k,g,e])});!0===g&&(a().lastValidPosition=x?s(a().p):F(a().p))}function J(a){return c.inputmask.escapeRegex.call(this,
a)}function M(a,b){return b?a.replace(RegExp("^("+J(f().join(""))+")*"),""):a.replace(RegExp("("+J(f().join(""))+")*$"),"")}function P(a){var b=k(),d=b.slice(),f,e;if(c(a).data("inputmask").isRTL)for(e=0;e<=d.length-1;e++)if(f=z(e),w()[f].optionality)if(!u(e)||!l(e,b[e],!0))d.splice(0,1);else break;else break;else for(e=d.length-1;0<=e;e--)if(f=z(e),w()[f].optionality)if(!u(e)||!l(e,b[e],!0))d.pop();else break;else break;E(a,d)}function Q(a,b){var d=a[0];return w()&&(!0===b||!a.hasClass("hasDatepicker"))?
(R(d,!1,!0),c.map(k(),function(a,b){return u(b)&&l(b,a,!0)?a:null}).join("")):d._valueGet()}function B(a,d,f){var e=a.jquery&&0<a.length?a[0]:a;if("number"==typeof d)c(a).is(":visible")&&(f="number"==typeof f?f:d,!1==b.insertMode&&d==f&&f++,e.setSelectionRange?U?(setTimeout(function(){e.selectionStart=d;e.selectionEnd=U?d:f},10),g=d,t=f):(e.selectionStart=d,e.selectionEnd=f):e.createTextRange&&(a=e.createTextRange(),a.collapse(!0),a.moveEnd("character",f),a.moveStart("character",d),a.select()));else{if(!c(a).is(":visible"))return{begin:0,
end:0};e.setSelectionRange?(d=e.selectionStart,f=e.selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),d=0-a.duplicate().moveStart("character",-1E5),f=d+a.text.length);return{begin:d,end:f}}}function T(a){var b=!1,k=0,g=d;c.each(e,function(c,e){d=c;var g=F(o());if(void 0!=e.lastValidPosition&&e.lastValidPosition>=k&&e.lastValidPosition==g){for(var l=!0,p=0;p<=g;p++){var s=u(p),t=z(p);if(s&&(void 0==a[p]||a[p]==H(p))||!s&&a[p]!=f()[t]){l=!1;break}}if(b=
b||l)return!1}k=e.lastValidPosition});d=g;return b}this.unmaskedvalue=function(a,b){return Q(a,b)};this.isComplete=function(a){return T(a)};this.mask=function(j){function J(a){a=c._data(a).events;c.each(a,function(a,b){c.each(b,function(a,b){if("inputmask"==b.namespace){var c=b.handler;b.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return c.apply(this,arguments)}}})})}function I(a){var b;Object.getOwnPropertyDescriptor&&(b=Object.getOwnPropertyDescriptor(a,"value"));if(b&&
b.get)a._valueGet||(a._valueGet=b.get,a._valueSet=b.set,Object.defineProperty(a,"value",{get:function(){var a=c(this),b=c(this).data("inputmask"),d=b.masksets,f=b.activeMasksetIndex;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=d[f]._buffer.join("")?this._valueGet():""},set:function(a){this._valueSet(a);c(this).triggerHandler("setvalue.inputmask")}}));else if(document.__lookupGetter__&&a.__lookupGetter__("value"))a._valueGet||(a._valueGet=a.__lookupGetter__("value"),a._valueSet=
a.__lookupSetter__("value"),a.__defineGetter__("value",function(){var a=c(this),b=c(this).data("inputmask"),d=b.masksets,f=b.activeMasksetIndex;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=d[f]._buffer.join("")?this._valueGet():""}),a.__defineSetter__("value",function(a){this._valueSet(a);c(this).triggerHandler("setvalue.inputmask")}));else if(a._valueGet||(a._valueGet=function(){return this.value},a._valueSet=function(a){this.value=a}),!0!=c.fn.val.inputmaskpatch)c.fn.val=
function(){if(arguments.length==0){var a=c(this);if(a.data("inputmask")){if(a.data("inputmask").opts.autoUnmask)return a.inputmask("unmaskedvalue");var a=c.inputmask.val.apply(a),b=c(this).data("inputmask");return a!=b.masksets[b.activeMasksetIndex]._buffer.join("")?a:""}return c.inputmask.val.apply(a)}var d=arguments;return this.each(function(){var a=c(this),b=c.inputmask.val.apply(a,d);a.data("inputmask")&&a.triggerHandler("setvalue.inputmask");return b})},c.extend(c.fn.val,{inputmaskpatch:!0})}
function r(a,c){if(b.numericInput&&""!=b.radixPoint&&!1===b.skipRadixDance){var d=a._valueGet().indexOf(b.radixPoint);n=c.begin<=d||c.end<=d||-1==d}}function x(b,c,d){for(var e=k();!u(b)&&0<=b-1;)b--;for(var h=b;h<c&&h<o();h++)if(u(h)){A(e,h);var g=s(h),j=y(e,g);if(j!=H(g))if(g<o()&&!1!==l(h,j,!0,n)&&w()[z(h)].def==w()[z(g)].def)p(e,h,y(e,g),!0,n),g<c&&A(e,g);else if(u(h))break}else A(e,h);void 0!=d&&p(e,n?c:F(c),d);if(!1==a().greedy){c=M(e.join(""),n).split("");e.length=c.length;h=0;for(d=e.length;h<
d;h++)e[h]=c[h];0==e.length&&(a().buffer=f().slice())}return b}function O(b,c,d,e){for(var h=k();b<=c&&b<o();b++)if(u(b)){var g=y(h,b);p(h,b,d,!0,n);if(g!=H(b))if(d=s(b),d<o())if(!1!==l(d,g,!0,n)&&w()[z(b)].def==w()[z(d)].def)d=g;else if(u(d))break;else d=g;else break;else if(d=g,!0!==e)break}else A(h,b);e=h.length;if(!1==a().greedy){d=M(h.join(""),n).split("");h.length=d.length;b=0;for(g=h.length;b<g;b++)h[b]=d[b];0==h.length&&(a().buffer=f().slice())}return c-(e-h.length)}function Q(g){V=!1;var j=
this,m=g.keyCode,q=B(j);r(j,q);if(m==b.keyCode.BACKSPACE||m==b.keyCode.DELETE||aa&&127==m||g.ctrlKey&&88==m){g.preventDefault();var h=q.begin;if(0==q.begin&&q.end==o())K(k(),q.begin,q.end),c.each(e,function(a,b){b.buffer=b._buffer.slice();b.lastValidPosition=void 0;b.p=n?o():0});else if(1<q.end-q.begin||1==q.end-q.begin&&b.insertMode){K(k(),q.begin,q.end);var l=o();if(!1==b.greedy)n?O(0,q.end-1,H(q.end),!0):x(q.begin,l);else for(var p=q.begin;p<q.end;p++)u(p)&&(n?O(0,q.end-1,H(q.end),!0):x(q.begin,
l));R(j,!1,!0,k())}else c.each(e,function(c){d=c;h=Y?q.end:q.begin;var c=k(),e=n?F(o()+1):s(-1),g=o();if(m==b.keyCode.DELETE){if(n?h>e:h<e)h=e;if(h<g&&(b.numericInput&&""!=b.radixPoint&&c[h]==b.radixPoint?(h=c.length-1==h?h:s(h),h=x(h,g)):n?(h=O(0,h,H(h),!0),h=s(h)):h=x(h,g),void 0!=a().lastValidPosition))-1!=a().lastValidPosition&&k()[a().lastValidPosition]==f()[a().lastValidPosition]&&(a().lastValidPosition=n?s(a().lastValidPosition):0==a().lastValidPosition?-1:F(a().lastValidPosition)),(n?a().lastValidPosition>
e:a().lastValidPosition<e)?(a().lastValidPosition=void 0,a().p=e):(a().writeOutBuffer=!0,a().p=h)}else if(m==b.keyCode.BACKSPACE)if(n?h<=e:h>e){if(h-=1,b.numericInput&&""!=b.radixPoint&&c[h]==b.radixPoint?(h=O(0,c.length-1==h?h:h-1,H(h),!0),h++):n?(h=O(0,h,H(h),!0),h=c[h+1]==b.radixPoint?h+1:s(h)):h=x(h,g),void 0!=a().lastValidPosition)-1!=a().lastValidPosition&&k()[a().lastValidPosition]==f()[a().lastValidPosition]&&(a().lastValidPosition=n?s(a().lastValidPosition):0==a().lastValidPosition?-1:F(a().lastValidPosition)),
(n?a().lastValidPosition>e:a().lastValidPosition<e)?(a().lastValidPosition=void 0,a().p=e):(a().writeOutBuffer=!0,a().p=h)}else 0<d&&(a().lastValidPosition=void 0,a().writeOutBuffer=!0,a().p=e,d=0,a().buffer=f().slice(),a().p=n?F(o()+1):s(-1),a().lastValidPosition=void 0)});C(n);E(j,k(),a().p);j._valueGet()==f().join("")&&c(j).trigger("cleared");b.showTooltip&&D.prop("title",a().mask)}else m==b.keyCode.END||m==b.keyCode.PAGE_DOWN?setTimeout(function(){var c=n?a().lastValidPosition:s(a().lastValidPosition);
!b.insertMode&&(c==o()&&!g.shiftKey)&&c--;B(j,g.shiftKey?q.begin:c,c)},0):m==b.keyCode.HOME&&!g.shiftKey||m==b.keyCode.PAGE_UP?B(j,0,g.shiftKey?q.begin:0):m==b.keyCode.ESCAPE?(j._valueSet(a().undoBuffer),R(j,!0,!0)):m==b.keyCode.INSERT?(b.insertMode=!b.insertMode,B(j,!b.insertMode&&q.begin==o()?q.begin-1:q.begin)):!1==b.insertMode&&!g.shiftKey&&(m==b.keyCode.RIGHT?setTimeout(function(){var a=B(j);B(j,a.begin)},0):m==b.keyCode.LEFT&&setTimeout(function(){var a=B(j);B(j,a.begin-1)},0));b.onKeyDown.call(this,
g,k(),b);W=-1!=c.inArray(m,b.ignorables)}function $(f,j,m,q,h,w){if(void 0==m&&V)return!1;V=!0;var z=c(this),f=f||window.event,m=m||f.which||f.charCode||f.keyCode,r=String.fromCharCode(m);if(b.numericInput&&r==b.radixPoint){var D=this._valueGet().indexOf(b.radixPoint);B(this,s(-1!=D?D:o()))}if((f.ctrlKey||f.metaKey||W)&&!0!==j)return!0;if(m){var G,A;j?(m=h?w:b.numericInput?s(a().p):a().p,G={begin:m,end:m}):G=B(this);var m=d,J=!1;c.each(e,function(c){d=c;a().undoBuffer=k().join("");if(G.end-G.begin>
1||G.end-G.begin==1&&b.insertMode){c=G.end<o()?G.end:o();K(k(),G.begin,c);var e=o();if(b.greedy==false)n?O(0,c-1,H(c),true):x(G.begin,e);else for(var f=G.begin;f<c;f++)u(f)&&(n?O(0,c-1,H(c),true):x(G.begin,e));J=true}});d=m;if(n){var v=F(J?G.begin:G.end),m=l(v,r,h,n);!0===h&&(m=[{activeMasksetIndex:d,result:m}]);c.each(m,function(c,e){d=e.activeMasksetIndex;a().writeOutBuffer=true;var f=e.result;if(f!==false){var h=false,g=k();if(f!==true){h=f.refresh;v=f.pos!=void 0?f.pos:v;r=f.c!=void 0?f.c:r}if(h!==
true){var h=o(),j=s(-1),f=j;if(b.insertMode==true){if(a().greedy==true)for(var m=g.slice();y(m,f,true)!=H(f)&&f<=v;)f=f==h?h+1:s(f);if(f<=v&&(a().greedy||g.length<h||y(g,v)==H(v))){if(g[j]!=H(j)&&g.length<h){g=L(g,-1,n);G.end!=0&&(v=v+g)}x(f,v,r)}else a().writeOutBuffer=false}else p(g,v,r,true,n)}a().p=v}});!0!==h&&C(n);if(!1!==q&&(c.each(m,function(a,b){if(b.activeMasksetIndex==d){A=b;return false}}),void 0!=A))if(setTimeout(function(){b.onKeyValidation.call(this,A.result,b)},0),a().writeOutBuffer&&
!1!==A.result){var I=k();E(this,I,j?void 0:b.numericInput?s(a().p):a().p);setTimeout(function(){T(I)&&z.trigger("complete")},0)}else a().buffer=a().undoBuffer.split("")}else v=s(G.begin-1),m=l(v,r,h,n),!0===h&&(m=[{activeMasksetIndex:d,result:m}]),c.each(m,function(c,f){d=f.activeMasksetIndex;a().writeOutBuffer=true;var e=f.result;if(e!==false){var h=false,g=k();if(e!==true){h=e.refresh;v=e.pos!=void 0?e.pos:v;r=e.c!=void 0?e.c:r}if(h!==true)if(b.insertMode==true){e=o();for(h=g.slice();y(h,e,true)!=
H(e)&&e>=v;)e=e==0?-1:F(e);e>=v?O(v,g.length,r):a().writeOutBuffer=false}else p(g,v,r,true,n);a().p=s(v)}}),!0!==h&&C(n),!1!==q&&(c.each(m,function(a,b){if(b.activeMasksetIndex==d){A=b;return false}}),void 0!=A&&(setTimeout(function(){b.onKeyValidation.call(this,A.result,b)},0),a().writeOutBuffer&&!1!==A.result?(v=a().p,I=k(),E(this,I,j?void 0:v),setTimeout(function(){T(I)&&z.trigger("complete")},0)):a().buffer=a().undoBuffer.split("")));U&&!0!==j&&B(this,g,t);b.showTooltip&&z.prop("title",a().mask);
f.preventDefault()}}function Z(e){var d=c(this),g=e.keyCode,j=k();b.onKeyUp.call(this,e,j,b);g==b.keyCode.TAB&&(d.hasClass("focus.inputmask")&&0==this._valueGet().length&&b.showMaskOnFocus)&&(j=f().slice(),E(this,j),n||B(this,0),a().undoBuffer=this._valueGet())}var D=c(j);if(D.is(":input")){D.data("inputmask",{masksets:e,activeMasksetIndex:d,opts:b,isRTL:!1});b.showTooltip&&D.prop("title",a().mask);a().greedy=a().greedy?a().greedy:0==a().repeat;var N=D.prop("maxLength");o()>N&&-1<N&&(N<f().length&&
(f().length=N),!1==a().greedy&&(a().repeat=Math.round(N/f().length)),D.prop("maxLength",2*o()));I(j);a().undoBuffer=j._valueGet();var V=!1,W=!1,n=!1;if("rtl"==j.dir||b.numericInput)("rtl"==j.dir||b.numericInput&&b.rightAlignNumerics)&&D.css("text-align","right"),j.dir="ltr",D.removeAttr("dir"),N=D.data("inputmask"),N.isRTL=!0,D.data("inputmask",N),n=!0;D.unbind(".inputmask");D.removeClass("focus.inputmask");D.bind("mouseenter.inputmask",function(){!c(this).hasClass("focus.inputmask")&&b.showMaskOnHover&&
this._valueGet()!=k().join("")&&E(this,k())}).bind("blur.inputmask",function(){var g=c(this),j=this._valueGet(),m=k();g.removeClass("focus.inputmask");j!=a().undoBuffer&&g.change();b.clearMaskOnLostFocus&&j!=""&&(j==f().join("")?this._valueSet(""):P(this));if(!T(m)){g.trigger("incomplete");if(b.clearIncomplete){c.each(e,function(a,b){b.buffer=b._buffer.slice();b.lastValidPosition=void 0;b.p=n?o():0});d=0;if(b.clearMaskOnLostFocus)this._valueSet("");else{m=f().slice();E(this,m)}}}}).bind("focus.inputmask",
function(){var e=c(this),d=this._valueGet();b.showMaskOnFocus&&!e.hasClass("focus.inputmask")&&(!b.showMaskOnHover||b.showMaskOnHover&&d=="")&&this._valueGet()!=k().join("")&&E(this,k(),a().p);e.addClass("focus.inputmask");a().undoBuffer=this._valueGet()}).bind("mouseleave.inputmask",function(){var a=c(this);b.clearMaskOnLostFocus&&(a.hasClass("focus.inputmask")||(this._valueGet()==f().join("")||this._valueGet()==""?this._valueSet(""):P(this)))}).bind("click.inputmask",function(){var e=this;setTimeout(function(){var d=
B(e),f=k();if(d.begin==d.end){var g=d.begin,h=a().lastValidPosition;r(e,d);if(n){d=b.numericInput?b.skipRadixDance===false&&b.radixPoint!=""&&c.inArray(b.radixPoint,f)!=-1?c.inArray(b.radixPoint,f):o():F((h==void 0?o():h)+1);B(e,g>d&&(l(g,f[g],true,n)!==false||!u(g))?g:d)}else{d=s(h==void 0?-1:h);B(e,g<d&&(l(g,f[g],true,n)!==false||!u(g))?g:d)}}},0)}).bind("dblclick.inputmask",function(){var b=this;a().lastValidPosition!=void 0&&setTimeout(function(){n?B(b,F(a().lastValidPosition),o()):B(b,0,s(a().lastValidPosition))},
0)}).bind("keydown.inputmask",Q).bind("keypress.inputmask",$).bind("keyup.inputmask",Z).bind(ba+".inputmask dragdrop.inputmask drop.inputmask",function(){var a=this,b=k();setTimeout(function(){B(a,R(a,true,false));T(b)&&D.trigger("complete")},0)}).bind("setvalue.inputmask",function(){a().undoBuffer=this._valueGet();R(this,true);this._valueGet()==f().join("")&&this._valueSet("")}).bind("complete.inputmask",b.oncomplete).bind("incomplete.inputmask",b.onincomplete).bind("cleared.inputmask",b.oncleared);
R(j,!0,!1);var X;try{X=document.activeElement}catch(ca){}X===j?(D.addClass("focus.inputmask"),B(j,a().lastValidPosition)):b.clearMaskOnLostFocus&&(k().join("")==f().join("")?j._valueSet(""):P(j));J(j)}};return this}var b=c.extend(!0,{},c.inputmask.defaults,J),ba=function(b){var c=document.createElement("input"),b="on"+b,g=b in c;g||(c.setAttribute(b,"return;"),g="function"==typeof c[b]);return g}("paste")?"paste":"input",aa=null!=navigator.userAgent.match(/iphone/i),U=null!=navigator.userAgent.match(/android.*safari.*/i),
Y,p,y=0;if(U){var M=navigator.userAgent.match(/safari.*/i);Y=533>=parseInt(RegExp(/[0-9]+/).exec(M))}if("string"===typeof L)switch(L){case "mask":return E(b.alias,J),p=Q(),this.each(function(){A(c.extend(!0,{},p),0).mask(this)});case "unmaskedvalue":return M=c(this),p=M.data("inputmask").masksets,y=M.data("inputmask").activeMasksetIndex,b=M.data("inputmask").opts,A(p,y).unmaskedvalue(this);case "remove":return this.each(function(){var e=c(this),d=this;setTimeout(function(){if(e.data("inputmask")){p=
e.data("inputmask").masksets;y=e.data("inputmask").activeMasksetIndex;b=e.data("inputmask").opts;d._valueSet(A(p,y).unmaskedvalue(e,!0));e.removeData("inputmask");e.unbind(".inputmask");e.removeClass("focus.inputmask");var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(d,"value"));c&&c.get?d._valueGet&&Object.defineProperty(d,"value",{get:d._valueGet,set:d._valueSet}):document.__lookupGetter__&&d.__lookupGetter__("value")&&d._valueGet&&(d.__defineGetter__("value",d._valueGet),
d.__defineSetter__("value",d._valueSet));delete d._valueGet;delete d._valueSet}},0)});case "getemptymask":return this.data("inputmask")?(p=this.data("inputmask").masksets,y=this.data("inputmask").activeMasksetIndex,p[y]._buffer.join("")):"";case "hasMaskedValue":return this.data("inputmask")?!this.data("inputmask").opts.autoUnmask:!1;case "isComplete":return p=this.data("inputmask").masksets,y=this.data("inputmask").activeMasksetIndex,b=this.data("inputmask").opts,A(p,y).isComplete(this[0]._valueGet().split(""));
default:return E(L,J)||(b.mask=L),p=Q(),this.each(function(){A(c.extend(true,{},p),y).mask(this)})}else{if("object"==typeof L)return b=c.extend(!0,{},c.inputmask.defaults,L),E(b.alias,L),p=Q(),this.each(function(){A(c.extend(!0,{},p),y).mask(this)});if(void 0==L)return this.each(function(){var e=c(this).attr("data-inputmask");if(e&&""!=e)try{var e=e.replace(RegExp("'","g"),'"'),d=c.parseJSON("{"+e+"}");b=c.extend(!0,{},c.inputmask.defaults,d);E(b.alias,d);b.alias=void 0;c(this).inputmask(b)}catch(g){}})}return this})})(jQuery);
