/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2014 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 3.0.15
*/
(function(e){if(void 0===e.fn.inputmask){var S=function(c){var d=document.createElement("input");c="on"+c;var e=c in d;e||(d.setAttribute(c,"return;"),e="function"==typeof d[c]);return e},I=function(c,d,f){return(c=f.aliases[c])?(c.alias&&I(c.alias,void 0,f),e.extend(!0,f,c),e.extend(!0,f,d),!0):!1},J=function(c){function d(d){function e(d,c,b,h){this.matches=[];this.isGroup=d||!1;this.isOptional=c||!1;this.isQuantifier=b||!1;this.isAlternator=h||!1;this.quantifier={min:1,max:1}}function f(d,e,b){var h=
c.definitions[e],l=0==d.matches.length;b=void 0!=b?b:d.matches.length;if(h&&!z){for(var n=h.prevalidator,g=n?n.length:0,m=1;m<h.cardinality;m++){var y=g>=m?n[m-1]:[],s=y.validator,y=y.cardinality;d.matches.splice(b++,0,{fn:s?"string"==typeof s?RegExp(s):new function(){this.test=s}:/./,cardinality:y?y:1,optionality:d.isOptional,newBlockMarker:l,casing:h.casing,def:h.definitionSymbol||e})}d.matches.splice(b++,0,{fn:h.validator?"string"==typeof h.validator?RegExp(h.validator):new function(){this.test=
h.validator}:/./,cardinality:h.cardinality,optionality:d.isOptional,newBlockMarker:l,casing:h.casing,def:h.definitionSymbol||e})}else d.matches.splice(b++,0,{fn:null,cardinality:0,optionality:d.isOptional,newBlockMarker:l,casing:null,def:e}),z=!1}for(var g=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,z=!1,q=new e,b,h=[],n=[];b=g.exec(d);)switch(b=b[0],b.charAt(0)){case c.optionalmarker.end:case c.groupmarker.end:var m=h.pop();0<h.length?h[h.length-1].matches.push(m):q.matches.push(m);
break;case c.optionalmarker.start:h.push(new e(!1,!0));break;case c.groupmarker.start:h.push(new e(!0));break;case c.quantifiermarker.start:m=new e(!1,!1,!0);b=b.replace(/[{}]/g,"");var x=b.split(",");b=isNaN(x[0])?x[0]:parseInt(x[0]);x=1==x.length?b:isNaN(x[1])?x[1]:parseInt(x[1]);if("*"==x||"+"==x)b="*"==b?0:1,c.greedy=!1;m.quantifier={min:b,max:x};if(0<h.length){x=h[h.length-1].matches;b=x.pop();if(!b.isGroup){var p=new e(!0);p.matches.push(b);b=p}x.push(b);x.push(m)}else b=q.matches.pop(),b.isGroup||
(p=new e(!0),p.matches.push(b),b=p),q.matches.push(b),q.matches.push(m);break;case c.escapeChar:z=!0;break;case c.alternatormarker:break;default:0<h.length?f(h[h.length-1],b):(0<q.matches.length&&(m=q.matches[q.matches.length-1],m.isGroup&&(m.isGroup=!1,f(m,c.groupmarker.start,0),f(m,c.groupmarker.end))),f(q,b))}0<q.matches.length&&n.push(q);return n}function f(l,f){if(c.numericInput){l=l.split("").reverse();for(var g in l)l[g]==c.optionalmarker.start?l[g]=c.optionalmarker.end:l[g]==c.optionalmarker.end?
l[g]=c.optionalmarker.start:l[g]==c.groupmarker.start?l[g]=c.groupmarker.end:l[g]==c.groupmarker.end&&(l[g]=c.groupmarker.start);l=l.join("")}if(void 0!=l&&""!=l){if(0<c.repeat||"*"==c.repeat||"+"==c.repeat)l=c.groupmarker.start+l+c.groupmarker.end+c.quantifiermarker.start+("*"==c.repeat?0:"+"==c.repeat?1:c.repeat)+","+c.repeat+c.quantifiermarker.end;void 0==e.inputmask.masksCache[l]&&(e.inputmask.masksCache[l]={mask:l,maskToken:d(l),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:f});
return e.extend(!0,{},e.inputmask.masksCache[l])}}var g=[];e.isFunction(c.mask)&&(c.mask=c.mask.call(this,c));e.isArray(c.mask)?e.each(c.mask,function(d,c){void 0!=c.mask?g.push(f(c.mask.toString(),c)):g.push(f(c.toString()))}):(1==c.mask.length&&!1==c.greedy&&0!=c.repeat&&(c.placeholder=""),g=void 0!=c.mask.mask?f(c.mask.mask.toString(),c.mask):f(c.mask.toString()));return g},ea="function"===typeof ScriptEngineMajorVersion?ScriptEngineMajorVersion():10<=(new Function("/*@cc_on return @_jscript_version; @*/"))(),
w=navigator.userAgent,fa=null!==w.match(/iphone/i),ga=null!==w.match(/android.*safari.*/i),ha=null!==w.match(/android.*chrome.*/i),Z=null!==w.match(/android.*firefox.*/i),$=/Kindle/i.test(w)||/Silk/i.test(w)||/KFTT/i.test(w)||/KFOT/i.test(w)||/KFJWA/i.test(w)||/KFJWI/i.test(w)||/KFSOWI/i.test(w)||/KFTHWA/i.test(w)||/KFTHWI/i.test(w)||/KFAPWA/i.test(w)||/KFAPWI/i.test(w),T=S("paste")?"paste":S("input")?"input":"propertychange",H=function(c,d,f){function g(a,k,A){k=k||0;var e=[],b,h=0,v;do{if(!0===
a&&c.validPositions[h]){var f=c.validPositions[h];v=f.match;b=f.locator.slice();e.push(null==v.fn?v.def:!0===A?f.input:d.placeholder.charAt(h%d.placeholder.length))}else b=k>h?q(h,b,h-1)[0]:V(h,b,h-1),v=b.match,b=b.locator.slice(),e.push(null==v.fn?v.def:d.placeholder.charAt(h%d.placeholder.length));h++}while((void 0==K||h-1<K)&&null!=v.fn||null==v.fn&&""!=v.def||k>=h);e.pop();return e}function l(a){var k=c;k.buffer=void 0;k.tests={};!0!==a&&(k._buffer=void 0,k.validPositions={},k.p=-1)}function s(a){a=
-1;var k=c.validPositions,d;for(d in k)k=parseInt(d),k>a&&(a=k);return a}function y(a,k,A){if(d.insertMode&&void 0!=c.validPositions[a]&&void 0==A){A=e.extend(!0,{},c.validPositions);var h=s(),b;for(b=a;b<=h;b++)delete c.validPositions[b];c.validPositions[a]=k;k=!0;for(b=a;b<=h;){a=D(b);b==a&&(k=!1);b=A[b];if(void 0!=b){var C=z(a);if(null==C.fn&&""==C.def)k=!1;else if(null==b.match.fn||b.match.def==C.def)k=k&&!1!==x(a,b.input,!0,!0)}if(!k)break;b=a}if(!k)return c.validPositions=e.extend(!0,{},A),
!1}else c.validPositions[a]=k;return!0}function V(a,k,c){a=q(a,k,c);var e,b;for(b in a)if(e=a[b],d.greedy||(!1===e.match.optionality||!1===e.match.newBlockMarker)&&!0!==e.match.optionalQuantifier)break;return e}function z(a){return c.validPositions[a]?c.validPositions[a].match:q(a)[0].match}function q(a,k,d){function e(k,d,c,b){function A(c,b,n){if(h==a&&void 0==c.matches)return f.push({match:c,locator:b.reverse()}),!0;if(void 0!=c.matches)if(c.isGroup&&!0!==n){if(c=A(k.matches[g+1],b))return!0}else if(c.isOptional){var F=
c;if(c=e(c,d,b,n))c=f[f.length-1].match,(c=0==F.matches.indexOf(c))&&(l=!0),h=a}else{if(!c.isAlternator)if(c.isQuantifier&&!0!==n)for(F=c,n=0<d.length&&!0!==n?d.shift():0;n<(isNaN(F.quantifier.max)?n+1:F.quantifier.max)&&h<=a;n++){var m=k.matches[k.matches.indexOf(F)-1];if(c=A(m,[n].concat(b),!0))if(c=f[f.length-1].match,c.optionalQuantifier=n>F.quantifier.min-1,c=0==m.matches.indexOf(c))if(n>F.quantifier.min-1){l=!0;h=a;break}else return!0;else return!0}else if(c=e(c,d,b,n))return!0}else h++}for(var g=
0<d.length?d.shift():0;g<k.matches.length;g++)if(!0!==k.matches[g].isQuantifier){var n=A(k.matches[g],[g].concat(c),b);if(n&&h==a)return n;if(h>a)break}}var b=c.maskToken,h=k?d:0;d=k||[0];var f=[],l=!1;if(void 0==k){k=a-1;for(var g;void 0==(g=c.validPositions[k])&&-1<k;)k--;if(void 0!=g&&-1<k)h=k,d=g.locator.slice();else{for(k=a-1;void 0==(g=c.tests[k])&&-1<k;)k--;void 0!=g&&-1<k&&(h=k,d=g[0].locator.slice())}}for(k=d.shift();k<b.length&&!(e(b[k],d,[k])&&h==a||h>a);k++);(0==f.length||l)&&f.push({match:{fn:null,
cardinality:0,optionality:!0,casing:null,def:""},locator:[]});return c.tests[a]=f}function b(){void 0==c._buffer&&(c._buffer=g(!1,1));return c._buffer}function h(){void 0==c.buffer&&(c.buffer=g(!0,s(),!0));return c.buffer}function n(a,c){for(var e=h().slice(),b=a;b<c;b++)e[b]!=Q(b)&&e[b]!=d.skipOptionalPartCharacter&&x(b,e[b],!0,!0)}function m(a,c){switch(c.casing){case "upper":a=a.toUpperCase();break;case "lower":a=a.toLowerCase()}return a}function x(a,k,b,t){function f(a,k,b,A){var t=!1;e.each(q(a),
function(f,g){for(var C=g.match,F=k?1:0,v="",u=h(),x=C.cardinality;x>F;x--)v+=void 0==c.validPositions[a-(x-1)]?Q(a-(x-1)):c.validPositions[a-(x-1)].input;k&&(v+=k);t=null!=C.fn?C.fn.test(v,u,a,b,d):k!=C.def&&k!=d.skipOptionalPartCharacter||""==C.def?!1:{c:C.def,pos:a};if(!1!==t){F=void 0!=t.c?t.c:k;F=F==d.skipOptionalPartCharacter&&null===C.fn?C.def:F;v=a;if(t.refreshFromBuffer){v=t.refreshFromBuffer;b=!0;!0===v?(c.validPositions={},c.tests={},n(0,h().length)):n(v.start,v.end);if(void 0==t.pos&&
void 0==t.c)return t.pos=s(),!1;v=void 0!=t.pos?t.pos:a;g=q(v)[0]}else!0!==t&&t.pos!=a&&(v=t.pos,n(a,v),g=q(v)[0]);0<f&&l(!0);y(v,e.extend({},g,{input:m(F,C)}),A)||(t=!1);return!1}});return t}b=!0===b;var C=f(a,k,b,t);if(!b&&(d.insertMode||void 0==c.validPositions[D(a)])&&!1===C&&!p(a))for(var g=a+1,u=D(a);g<=u;g++)if(C=f(g,k,b,t),!1!==C){a=g;break}!0===C&&(C={pos:a});return C}function p(a){a=z(a);return null!=a.fn?a.fn:!1}function w(){var a;K=r.prop("maxLength");-1==K&&(K=void 0);if(!1==d.greedy){var k;
k=s();a=c.validPositions[k];var b=void 0!=a?a.locator.slice():void 0;for(k+=1;void 0==a||null!=a.match.fn||null==a.match.fn&&""!=a.match.def;k++)a=V(k,b,k-1),b=a.locator.slice();a=k}else a=h().length;return void 0==K||a<K?a:K}function D(a){var c=w();if(a>=c)return c;for(;++a<c&&!p(a)&&(!0!==d.nojumps||d.nojumpsThreshold>a););return a}function O(a){if(0>=a)return 0;for(;0<--a&&!p(a););return a}function G(a,c,d){a._valueSet(c.join(""));void 0!=d&&B(a,d)}function Q(a,c){c=c||z(a);return null==c.fn?c.def:
d.placeholder.charAt(a%d.placeholder.length)}function N(a,d,A,t,f){t=void 0!=t?t.slice():I(a._valueGet()).split("");l();d&&a._valueSet("");e.each(t,function(d,k){if(!0===f){var h=c.p,h=-1==h?h:O(h),t=-1==h?d:D(h);-1==e.inArray(k,b().slice(h+1,t))&&U.call(a,void 0,!0,k.charCodeAt(0),!1,A,d)}else U.call(a,void 0,!0,k.charCodeAt(0),!1,A,d),A=A||0<d&&d>c.p});d&&G(a,h(),D(s()))}function H(a){return e.inputmask.escapeRegex.call(this,a)}function I(a){return a.replace(RegExp("("+H(b().join(""))+")*$"),"")}
function J(a){var d=h().slice(),b,e=s(),f={},g=c.validPositions[e].locator.slice(),n;for(b=e+1;b<d.length;b++)n=V(b,g,b-1),g=n.locator.slice(),f[b]=n;for(b=d.length-1;b>e;b--)if(n=f[b].match,n.optionality&&d[b]==Q(b,n))d.pop();else break;G(a,d)}function R(a,b){if(!a.data("_inputmask")||!0!==b&&a.hasClass("hasDatepicker"))return a[0]._valueGet();var A=[],t=c.validPositions,f;for(f in t)null!=t[f].match.fn&&A.push(t[f].input);A=(E?A.reverse():A).join("");t=(E?h().reverse():h()).join("");return e.isFunction(d.onUnMask)?
d.onUnMask.call(a,t,A,d):A}function L(a){!E||"number"!=typeof a||d.greedy&&""==d.placeholder||(a=h().length-a);return a}function B(a,c,b){a=a.jquery&&0<a.length?a[0]:a;if("number"==typeof c){c=L(c);b=L(b);b="number"==typeof b?b:c;var h=e(a).data("_inputmask")||{};h.caret={begin:c,end:b};e(a).data("_inputmask",h);e(a).is(":visible")&&(a.scrollLeft=a.scrollWidth,!1==d.insertMode&&c==b&&b++,a.setSelectionRange?(a.selectionStart=c,a.selectionEnd=b):a.createTextRange&&(a=a.createTextRange(),a.collapse(!0),
a.moveEnd("character",b),a.moveStart("character",c),a.select()))}else return h=e(a).data("_inputmask"),!e(a).is(":visible")&&h&&void 0!=h.caret?(c=h.caret.begin,b=h.caret.end):a.setSelectionRange?(c=a.selectionStart,b=a.selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),c=0-a.duplicate().moveStart("character",-1E5),b=c+a.text.length),c=L(c),b=L(b),{begin:c,end:b}}function P(a){if(e.isFunction(d.isComplete))return d.isComplete.call(r,a,d);if("*"!=
d.repeat){var c=!1,b=O(w());if(s()==b)for(var c=!0,h=0;h<=b;h++){var f=p(h);if(f&&(void 0==a[h]||a[h]==Q(h))||!f&&a[h]!=Q(h)){c=!1;break}}return c}}function S(a){a=e._data(a).events;e.each(a,function(a,c){e.each(c,function(a,c){if("inputmask"==c.namespace&&"setvalue"!=c.type){var b=c.handler;c.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return b.apply(this,arguments)}}})})}function ia(a){function c(a){if(void 0==e.valHooks[a]||!0!=e.valHooks[a].inputmaskpatch){var b=
e.valHooks[a]&&e.valHooks[a].get?e.valHooks[a].get:function(a){return a.value},d=e.valHooks[a]&&e.valHooks[a].set?e.valHooks[a].set:function(a,c){a.value=c;return a};e.valHooks[a]={get:function(a){var c=e(a);if(c.data("_inputmask")){if(c.data("_inputmask").opts.autoUnmask)return c.inputmask("unmaskedvalue");a=b(a);c=(c=c.data("_inputmask").maskset._buffer)?c.join(""):"";return a!=c?a:""}return b(a)},set:function(a,c){var b=e(a),h=d(a,c);b.data("_inputmask")&&b.triggerHandler("setvalue.inputmask");
return h},inputmaskpatch:!0}}}var b;Object.getOwnPropertyDescriptor&&(b=Object.getOwnPropertyDescriptor(a,"value"));if(b&&b.get){if(!a._valueGet){var d=b.get,h=b.set;a._valueGet=function(){return E?d.call(this).split("").reverse().join(""):d.call(this)};a._valueSet=function(a){h.call(this,E?a.split("").reverse().join(""):a)};Object.defineProperty(a,"value",{get:function(){var a=e(this),c=e(this).data("_inputmask"),b=c.maskset;return c&&c.opts.autoUnmask?a.inputmask("unmaskedvalue"):d.call(this)!=
b._buffer.join("")?d.call(this):""},set:function(a){h.call(this,a);e(this).triggerHandler("setvalue.inputmask")}})}}else document.__lookupGetter__&&a.__lookupGetter__("value")?a._valueGet||(d=a.__lookupGetter__("value"),h=a.__lookupSetter__("value"),a._valueGet=function(){return E?d.call(this).split("").reverse().join(""):d.call(this)},a._valueSet=function(a){h.call(this,E?a.split("").reverse().join(""):a)},a.__defineGetter__("value",function(){var a=e(this),c=e(this).data("_inputmask"),b=c.maskset;
return c&&c.opts.autoUnmask?a.inputmask("unmaskedvalue"):d.call(this)!=b._buffer.join("")?d.call(this):""}),a.__defineSetter__("value",function(a){h.call(this,a);e(this).triggerHandler("setvalue.inputmask")})):(a._valueGet||(a._valueGet=function(){return E?this.value.split("").reverse().join(""):this.value},a._valueSet=function(a){this.value=E?a.split("").reverse().join(""):a}),c(a.type))}function aa(a,b,e){if(d.numericInput||E){switch(b){case d.keyCode.BACKSPACE:b=d.keyCode.DELETE;break;case d.keyCode.DELETE:b=
d.keyCode.BACKSPACE}E&&(a=e.end,e.end=e.begin,e.begin=a)}e.begin==e.end?(a=b==d.keyCode.BACKSPACE?e.begin-1:e.begin,d.isNumeric&&""!=d.radixPoint&&h()[a]==d.radixPoint&&(e.begin=h().length-1==a?e.begin:b==d.keyCode.BACKSPACE?a:D(a),e.end=e.begin),b==d.keyCode.BACKSPACE?e.begin=O(e.begin):b==d.keyCode.DELETE&&e.end++):1!=e.end-e.begin||d.insertMode||b==d.keyCode.BACKSPACE&&e.begin--;a=e.begin;var f=e.end;for(b=D(a-1);a<f;a++)delete c.validPositions[a];for(a=D(f-1);a<=s();a=D(a)){var f=c.validPositions[a],
g=c.validPositions[b];void 0!=f&&void 0==g&&(z(b).def==f.match.def&&!1!==x(b,f.input,!0)&&delete c.validPositions[a],b=D(b))}for(b=s();0<b&&(void 0==c.validPositions[b]||null==c.validPositions[b].match.fn);)delete c.validPositions[b],b--;l(!0);b=D(-1);s()<b?c.p=b:c.p=e.begin}function W(a){X=!1;var k=this,f=e(k),g=a.keyCode,m=B(k);g==d.keyCode.BACKSPACE||g==d.keyCode.DELETE||fa&&127==g||a.ctrlKey&&88==g?(a.preventDefault(),88==g&&(M=h().join("")),aa(k,g,m),G(k,h(),c.p),k._valueGet()==b().join("")&&
f.trigger("cleared"),d.showTooltip&&f.prop("title",c.mask)):g==d.keyCode.END||g==d.keyCode.PAGE_DOWN?setTimeout(function(){var b=D(s());d.insertMode||b!=w()||a.shiftKey||b--;B(k,a.shiftKey?m.begin:b,b)},0):g==d.keyCode.HOME&&!a.shiftKey||g==d.keyCode.PAGE_UP?B(k,0,a.shiftKey?m.begin:0):g==d.keyCode.ESCAPE||90==g&&a.ctrlKey?(N(k,!0,!1,M.split("")),f.click()):g!=d.keyCode.INSERT||a.shiftKey||a.ctrlKey?!1!=d.insertMode||a.shiftKey||(g==d.keyCode.RIGHT?setTimeout(function(){var a=B(k);B(k,a.begin)},0):
g==d.keyCode.LEFT&&setTimeout(function(){var a=B(k);B(k,a.begin-1)},0)):(d.insertMode=!d.insertMode,B(k,d.insertMode||m.begin!=w()?m.begin:m.begin-1));var f=B(k),C=d.onKeyDown.call(this,a,h(),d);C&&!0===C.refreshFromBuffer&&(c.validPositions={},c.tests={},n(0,h().length),l(!0),G(k,h()),B(k,f.begin,f.end));ba=-1!=e.inArray(g,d.ignorables)}function U(a,b,f,g,n,m){if(void 0==f&&X)return!1;X=!0;var v=e(this);a=a||window.event;f=b?f:a.which||a.charCode||a.keyCode;if(!(!0===b||a.ctrlKey&&a.altKey)&&(a.ctrlKey||
a.metaKey||ba))return!0;if(f){!0!==b&&46==f&&!1==a.shiftKey&&","==d.radixPoint&&(f=44);var u,q;f=String.fromCharCode(f);b?(m=n?m:s()+1,u={begin:m,end:m}):u=B(this);if(m=E?1<u.begin-u.end||1==u.begin-u.end&&d.insertMode:1<u.end-u.begin||1==u.end-u.begin&&d.insertMode)c.undoPositions=e.extend(!0,{},c.validPositions),aa(this,d.keyCode.DELETE,u),d.insertMode||(d.insertMode=!d.insertMode,y(u.begin,n),d.insertMode=!d.insertMode),m=!d.multi;var r=h().join("").indexOf(d.radixPoint);d.isNumeric&&!0!==b&&-1!=
r&&(d.greedy&&u.begin<=r?(u.begin=O(u.begin),u.end=u.begin):f==d.radixPoint&&(u.begin=r,u.end=u.begin));c.writeOutBuffer=!0;u=u.begin;var p=x(u,f,n);!1!==p&&(!0!==p&&(u=void 0!=p.pos?p.pos:u,f=void 0!=p.c?p.c:f),l(!0),q=void 0!=p.caret?p.caret:D(u),c.p=q);if(!1!==g){var z=this;setTimeout(function(){d.onKeyValidation.call(z,p,d)},0);if(c.writeOutBuffer&&!1!==p){var w=h();g=b?void 0:d.numericInput?u>r?O(q):f==d.radixPoint?q-1:O(q-1):q;G(this,w,g);!0!==b&&setTimeout(function(){!0===P(w)&&v.trigger("complete");
Y=!0;v.trigger("input")},0)}else m&&(c.buffer=void 0,c.validPositions=c.undoPositions)}else m&&(c.buffer=void 0,c.validPositions=c.undoPositions);d.showTooltip&&v.prop("title",c.mask);a&&!0!=b&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}}function ca(a){var f=e(this),g=a.keyCode,m=h();(a=d.onKeyUp.call(this,a,m,d))&&!0===a.refreshFromBuffer&&(c.validPositions={},c.tests={},n(0,h().length),l(!0),G(this,h()));g==d.keyCode.TAB&&d.showMaskOnFocus&&(f.hasClass("focus.inputmask")&&0==this._valueGet().length?
(l(),m=h(),G(this,m),B(this,0),M=h().join("")):(G(this,m),m.join("")==b().join("")&&-1!=e.inArray(d.radixPoint,m)?(B(this,L(0)),f.click()):B(this,L(0),L(w()))))}function da(a){if(!0===Y&&"input"==a.type)return Y=!1,!0;var b=this,c=e(b);if("propertychange"==a.type&&b._valueGet().length<=w())return!0;setTimeout(function(){var a=e.isFunction(d.onBeforePaste)?d.onBeforePaste.call(b,b._valueGet(),d):b._valueGet();N(b,!0,!1,a.split(""),!0);!0===P(h())&&c.trigger("complete");c.click()},0)}function ja(a){var c=
e(this),f=B(this),g=this._valueGet(),g=g.replace(RegExp("("+H(b().join(""))+")*"),"");f.begin>g.length&&(B(this,g.length),f=B(this));1!=h().length-g.length||g.charAt(f.begin)==h()[f.begin]||g.charAt(f.begin+1)==h()[f.begin]||p(f.begin)?(N(this,!0,!1,g.split("")),!0===P(h())&&c.trigger("complete"),c.click()):(a.keyCode=d.keyCode.BACKSPACE,W.call(this,a));a.preventDefault()}function ka(a){r=e(a);if(r.is(":input")){r.data("_inputmask",{maskset:c,opts:d,isRTL:!1});d.showTooltip&&r.prop("title",c.mask);
ia(a);d.numericInput&&(d.isNumeric=d.numericInput);("rtl"==a.dir||d.numericInput&&d.rightAlignNumerics||d.isNumeric&&d.rightAlignNumerics)&&r.css("text-align","right");if("rtl"==a.dir||d.numericInput){a.dir="ltr";r.removeAttr("dir");var f=r.data("_inputmask");f.isRTL=!0;r.data("_inputmask",f);E=!0}r.unbind(".inputmask");r.removeClass("focus.inputmask");r.closest("form").bind("submit",function(){M!=h().join("")&&r.change()}).bind("reset",function(){setTimeout(function(){r.trigger("setvalue")},0)});
r.bind("mouseenter.inputmask",function(){!e(this).hasClass("focus.inputmask")&&d.showMaskOnHover&&this._valueGet()!=h().join("")&&G(this,h())}).bind("blur.inputmask",function(){var a=e(this);if(a.data("_inputmask")){var c=this._valueGet(),f=h();a.removeClass("focus.inputmask");M!=h().join("")&&a.change();d.clearMaskOnLostFocus&&""!=c&&(c==b().join("")?this._valueSet(""):J(this));!1===P(f)&&(a.trigger("incomplete"),d.clearIncomplete&&(l(),d.clearMaskOnLostFocus?this._valueSet(""):(f=b().slice(),G(this,
f))))}}).bind("focus.inputmask",function(){var a=e(this),b=this._valueGet();d.showMaskOnFocus&&!a.hasClass("focus.inputmask")&&(!d.showMaskOnHover||d.showMaskOnHover&&""==b)&&this._valueGet()!=h().join("")&&G(this,h(),D(s()));a.addClass("focus.inputmask");M=h().join("")}).bind("mouseleave.inputmask",function(){var a=e(this);d.clearMaskOnLostFocus&&(a.hasClass("focus.inputmask")||this._valueGet()==a.attr("placeholder")||(this._valueGet()==b().join("")||""==this._valueGet()?this._valueSet(""):J(this)))}).bind("click.inputmask",
function(){var a=this;setTimeout(function(){var b=B(a),c=h();if(b.begin==b.end){var b=E?L(b.begin):b.begin,f=s(b),c=d.isNumeric?!1===d.skipRadixDance&&""!=d.radixPoint&&-1!=e.inArray(d.radixPoint,c)?d.numericInput?D(e.inArray(d.radixPoint,c)):e.inArray(d.radixPoint,c):D(f):D(f);b<c?p(b)?B(a,b):B(a,D(b)):B(a,c)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){B(a,0,D(s()))},0)}).bind(T+".inputmask dragdrop.inputmask drop.inputmask",da).bind("setvalue.inputmask",function(){N(this,
!0);M=h().join("");this._valueGet()==b().join("")&&this._valueSet("")}).bind("complete.inputmask",d.oncomplete).bind("incomplete.inputmask",d.onincomplete).bind("cleared.inputmask",d.oncleared);r.bind("keydown.inputmask",W).bind("keypress.inputmask",U).bind("keyup.inputmask",ca);if(ga||Z||ha||$)if(r.attr("autocomplete","off").attr("autocorrect","off").attr("autocapitalize","off").attr("spellcheck",!1),Z||$)r.unbind("keydown.inputmask",W).unbind("keypress.inputmask",U).unbind("keyup.inputmask",ca),
"input"==T&&r.unbind(T+".inputmask"),r.bind("input.inputmask",ja);ea&&r.bind("input.inputmask",da);f=e.isFunction(d.onBeforeMask)?d.onBeforeMask.call(a,a._valueGet(),d):a._valueGet();N(a,!0,!1,f.split(""),!0);M=h().join("");var g;try{g=document.activeElement}catch(n){}g===a?(r.addClass("focus.inputmask"),B(a,D(s()))):d.clearMaskOnLostFocus?h().join("")==b().join("")?a._valueSet(""):J(a):G(a,h());S(a)}}var E=!1,M=h().join(""),r,X=!1,Y=!1,ba=!1,K;if(void 0!=f)switch(f.action){case "isComplete":return r=
e(f.el),P(f.buffer);case "unmaskedvalue":return r=f.$input,E=f.$input.data("_inputmask").isRTL,R(f.$input,f.skipDatepickerCheck);case "mask":ka(f.el);break;case "format":return r=e({}),r.data("_inputmask",{maskset:c,opts:d,isRTL:d.numericInput}),d.numericInput&&(d.isNumeric=d.numericInput,E=!0),f=f.value.split(""),N(r,!1,!1,E?f.reverse():f,!0),E?h().reverse().join(""):h().join("");case "isValid":return r=e({}),r.data("_inputmask",{maskset:c,opts:d,isRTL:d.numericInput}),d.numericInput&&(d.isNumeric=
d.numericInput,E=!0),f=f.value.split(""),N(r,!1,!0,E?f.reverse():f),P(h())}},R=function(c,d,f){function g(b,d,g){b=b.jquery&&0<b.length?b[0]:b;if("number"==typeof d){d=l(d);g=l(g);g="number"==typeof g?g:d;if(b!=c){var m=e(b).data("_inputmask")||{};m.caret={begin:d,end:g};e(b).data("_inputmask",m)}e(b).is(":visible")&&(b.scrollLeft=b.scrollWidth,!1==f.insertMode&&d==g&&g++,b.setSelectionRange?(b.selectionStart=d,b.selectionEnd=g):b.createTextRange&&(b=b.createTextRange(),b.collapse(!0),b.moveEnd("character",
g),b.moveStart("character",d),b.select()))}else return e(b).is(":visible")||void 0==e(b).data("_inputmask").caret?b.setSelectionRange?(d=b.selectionStart,g=b.selectionEnd):document.selection&&document.selection.createRange&&(b=document.selection.createRange(),d=0-b.duplicate().moveStart("character",-1E5),g=d+b.text.length):(m=e(b).data("_inputmask"),d=m.caret.begin,g=m.caret.end),d=l(d),g=l(g),{begin:d,end:g}}function l(b){!w||"number"!=typeof b||f.greedy&&""==f.placeholder||(b=c.value.length-b);
return b}function s(b,d){if("multiMaskScope"!=b){if(e.isFunction(f.determineActiveMasksetIndex))z=f.determineActiveMasksetIndex.call(y,b,d);else{var l=-1,m=-1,q=-1;e.each(d,function(b,c){var d=e(c).data("_inputmask").maskset,h=-1,f=0,p=g(c).begin,y;for(y in d.validPositions)d=parseInt(y),d>h&&(h=d),f++;if(f>l||f==l&&m>p&&q>h||f==l&&m==p&&q<h)l=f,m=p,z=b,q=h})}var p=y.data("_inputmask-multi")||{activeMasksetIndex:0,elmasks:d};p.activeMasksetIndex=z;y.data("_inputmask-multi",p)}-1==["focus"].indexOf(b)&&
c.value!=d[z]._valueGet()&&(p=""==e(d[z]).val()?d[z]._valueGet():e(d[z]).val(),c.value=p);-1==["blur","focus"].indexOf(b)&&e(d[z]).hasClass("focus.inputmask")&&(p=g(d[z]),g(c,p.begin,p.end))}f.multi=!0;var y=e(c),w="rtl"==c.dir||f.numericInput,z=0,q=e.map(d,function(b,c){var d='<input type="text" ';y.attr("value")&&(d+='value="'+y.attr("value")+'" ');y.attr("dir")&&(d+='dir="'+y.attr("dir")+'" ');d=e(d+"/>")[0];H(e.extend(!0,{},b),f,{action:"mask",el:d});return d});y.data("_inputmask-multi",{activeMasksetIndex:0,
elmasks:q});("rtl"==c.dir||f.numericInput&&f.rightAlignNumerics||f.isNumeric&&f.rightAlignNumerics)&&y.css("text-align","right");c.dir="ltr";y.removeAttr("dir");""!=y.attr("value")&&s("init",q);y.bind("mouseenter blur focus mouseleave click dblclick keydown keypress keypress",function(b){var d=g(c),n,m=!0;if("keydown"==b.type){n=b.keyCode;if(n==f.keyCode.DOWN&&z<q.length-1)return z++,s("multiMaskScope",q),!1;if(n==f.keyCode.UP&&0<z)return z--,s("multiMaskScope",q),!1;if(b.ctrlKey||b.shiftKey||b.altKey)return!0}else if("keypress"==
b.type&&(b.ctrlKey||b.shiftKey||b.altKey))return!0;e.each(q,function(c,p){if("keydown"==b.type){n=b.keyCode;if(n==f.keyCode.BACKSPACE&&p._valueGet().length<d.begin)return;if(n==f.keyCode.TAB)m=!1;else{if(n==f.keyCode.RIGHT){g(p,d.begin+1,d.end+1);m=!1;return}if(n==f.keyCode.LEFT){g(p,d.begin-1,d.end-1);m=!1;return}}}if(-1!=["click"].indexOf(b.type)&&(g(p,l(d.begin),l(d.end)),d.begin!=d.end)){m=!1;return}-1!=["keydown"].indexOf(b.type)&&d.begin!=d.end&&g(p,d.begin,d.end);e(p).triggerHandler(b)});m&&
setTimeout(function(){s(b.type,q)},0)});y.bind(T+" dragdrop drop setvalue",function(b){g(c);setTimeout(function(){e.each(q,function(d,f){f._valueSet(c.value);e(f).triggerHandler(b)});setTimeout(function(){s(b.type,q)},0)},0)});(function(b){if(void 0==e.valHooks[b]||!0!=e.valHooks[b].inputmaskmultipatch){var c=e.valHooks[b]&&e.valHooks[b].get?e.valHooks[b].get:function(b){return b.value},d=e.valHooks[b]&&e.valHooks[b].set?e.valHooks[b].set:function(b,c){b.value=c;return b};e.valHooks[b]={get:function(b){var d=
e(b);return d.data("_inputmask-multi")?(b=d.data("_inputmask-multi"),c(b.elmasks[b.activeMasksetIndex])):c(b)},set:function(b,c){var f=e(b),h=d(b,c);f.data("_inputmask-multi")&&f.triggerHandler("setvalue");return h},inputmaskmultipatch:!0}}})(c.type)};e.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,
greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:e.noop,onKeyDown:e.noop,onBeforeMask:void 0,onBeforePaste:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,isNumeric:!1,radixPoint:"",skipRadixDance:!1,rightAlignNumerics:!0,definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1,
definitionSymbol:"*"},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,
35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0,multi:!1,nojumps:!1,nojumpsThreshold:0,determineActiveMasksetIndex:void 0},masksCache:{},escapeRegex:function(c){return c.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")},format:function(c,d){var f=e.extend(!0,{},e.inputmask.defaults,d);I(f.alias,d,f);return H(J(f),f,{action:"format",value:c})},isValid:function(c,d){var f=e.extend(!0,{},e.inputmask.defaults,d);I(f.alias,
d,f);return H(J(f),f,{action:"isValid",value:c})}};e.fn.inputmask=function(c,d){function f(c,d){var f=e(c),g;for(g in d){var b=f.data("inputmask-"+g.toLowerCase());void 0!=b&&(d[g]=b)}return d}var g=e.extend(!0,{},e.inputmask.defaults,d),l;if("string"===typeof c)switch(c){case "mask":return I(g.alias,d,g),l=J(g),0==l.length?this:this.each(function(){e.isArray(l)?R(this,l,f(this,g)):H(e.extend(!0,{},l),f(this,g),{action:"mask",el:this})});case "unmaskedvalue":var s=e(this);return s.data("_inputmask")?
(l=s.data("_inputmask").maskset,g=s.data("_inputmask").opts,H(l,g,{action:"unmaskedvalue",$input:s})):s.val();case "remove":return this.each(function(){var c=e(this);if(c.data("_inputmask")){l=c.data("_inputmask").maskset;g=c.data("_inputmask").opts;this._valueSet(H(l,g,{action:"unmaskedvalue",$input:c,skipDatepickerCheck:!0}));c.unbind(".inputmask");c.removeClass("focus.inputmask");c.removeData("_inputmask");var d;Object.getOwnPropertyDescriptor&&(d=Object.getOwnPropertyDescriptor(this,"value"));
d&&d.get?this._valueGet&&Object.defineProperty(this,"value",{get:this._valueGet,set:this._valueSet}):document.__lookupGetter__&&this.__lookupGetter__("value")&&this._valueGet&&(this.__defineGetter__("value",this._valueGet),this.__defineSetter__("value",this._valueSet));try{delete this._valueGet,delete this._valueSet}catch(f){this._valueSet=this._valueGet=void 0}}});case "getemptymask":return this.data("_inputmask")?(l=this.data("_inputmask").maskset,l._buffer.join("")):"";case "hasMaskedValue":return this.data("_inputmask")?
!this.data("_inputmask").opts.autoUnmask:!1;case "isComplete":return this.data("_inputmask")?(l=this.data("_inputmask").maskset,g=this.data("_inputmask").opts,H(l,g,{action:"isComplete",buffer:this[0]._valueGet().split(""),el:this})):!0;case "getmetadata":if(this.data("_inputmask"))return l=this.data("_inputmask").maskset,l.metadata;break;default:return I(c,d,g)||(g.mask=c),l=J(g),void 0==l?this:this.each(function(){e.isArray(l)?R(this,l,f(this,g)):H(e.extend(!0,{},l),f(this,g),{action:"mask",el:this})})}else{if("object"==
typeof c)return g=e.extend(!0,{},e.inputmask.defaults,c),I(g.alias,c,g),l=J(g),void 0==l?this:this.each(function(){e.isArray(l)?R(this,l,f(this,g)):H(e.extend(!0,{},l),f(this,g),{action:"mask",el:this})});if(void 0==c)return this.each(function(){var c=e(this).attr("data-inputmask");if(c&&""!=c)try{var c=c.replace(RegExp("'","g"),'"'),f=e.parseJSON("{"+c+"}");e.extend(!0,f,d);g=e.extend(!0,{},e.inputmask.defaults,f);I(g.alias,f,g);g.alias=void 0;e(this).inputmask(g)}catch(l){}})}}}})(jQuery);
