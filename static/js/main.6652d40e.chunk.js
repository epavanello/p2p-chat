(window.webpackJsonpexample=window.webpackJsonpexample||[]).push([[0],{122:function(e,n,t){e.exports=t(204)},127:function(e,n,t){},204:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),c=t.n(o),i=(t(127),t(106)),u=t(47),s=t.n(u),l=t(79),f=t(87),p=t(28),d=t(18),h=t(209),g=(t(62),t(207)),v=(t(205),t(86)),b=(t(89),t(208));t(206);function m(e,n,t,a){return new(t||(t=Promise))((function(r,o){function c(e){try{u(a.next(e))}catch(n){o(n)}}function i(e){try{u(a.throw(e))}catch(n){o(n)}}function u(e){e.done?r(e.value):new t((function(n){n(e.value)})).then(c,i)}u((a=a.apply(e,n||[])).next())}))}function y(e,n){var t,a,r,o,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,a=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){c.label=o[1];break}if(6===o[0]&&c.label<r[1]){c.label=r[1],r=o;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(o);break}r[2]&&c.ops.pop(),c.trys.pop();continue}o=n.call(e,c)}catch(i){o=[6,i],a=0}finally{t=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}}var E="test";function O(e){var n,t=e.remoteDescription,a=e.onChannelOpen,r=e.onMessageReceived,o=new RTCPeerConnection;function c(e){o.setRemoteDescription(JSON.parse(e))}function i(e){n&&n.send(e)}return o.onicecandidate=function(e){null===e.candidate&&(console.log("onicecandidate 1",e),console.log("onicecandidate 2",JSON.stringify(o.localDescription)))},o.ondatachannel=function(e){console.log("ondatachannel",e)},o.onconnectionstatechange=function(e){console.log("onconnectionstatechange",e)},o.onicecandidateerror=function(e){console.log("onicecandidateerror",e)},o.oniceconnectionstatechange=function(e){console.log("oniceconnectionstatechange",e)},o.onicegatheringstatechange=function(e){console.log("onicegatheringstatechange",e)},o.onnegotiationneeded=function(e){console.log("onnegotiationneeded",e)},o.onsignalingstatechange=function(e){console.log("onsignalingstatechange",e)},o.onstatsended=function(e){console.log("onstatsended",e)},o.ontrack=function(e){console.log("ontrack",e)},new Promise((function(e){o.onicecandidate=function(n){null===n.candidate&&e({localDescription:JSON.stringify(o.localDescription),setAnswerDescription:c,sendMessage:i})},t?(o.ondatachannel=function(e){var t=e.channel;(n=t).onopen=function(){a()},n.onmessage=function(e){r(e.data)}},function(e){m(this,void 0,void 0,(function(){var n;return y(this,(function(t){switch(t.label){case 0:return[4,o.setRemoteDescription(JSON.parse(e))];case 1:return t.sent(),[4,o.createAnswer()];case 2:return n=t.sent(),o.setLocalDescription(n),[2]}}))}))}(t)):(function(){try{(n=o.createDataChannel(E)).onopen=function(){a()},n.onmessage=function(e){r(e.data)}}catch(e){console.warn("No data channel (peerConnection)",e)}}(),function(){m(this,void 0,void 0,(function(){var e;return y(this,(function(n){switch(n.label){case 0:return[4,o.createOffer()];case 1:return e=n.sent(),console.log("description",e),o.setLocalDescription(e),[2]}}))}))}())}))}var w,S=t(19);function x(){var e=Object(d.a)([""]);return x=function(){return e},e}function j(){var e=Object(d.a)([""]);return j=function(){return e},e}function T(){var e=Object(d.a)(["\n    text-align: right;\n  "]);return T=function(){return e},e}function D(){var e=Object(d.a)(["\n  ",";\n"]);return D=function(){return e},e}function k(){var e=Object(d.a)([""]);return k=function(){return e},e}!function(e){e.ME="ME",e.STRANGER="STRANGER"}(w||(w={}));var C,P=S.b.form(k()),M=S.b.div(D(),(function(e){return e.sender===w.ME?Object(S.a)(T()):""})),R=S.b.div(j()),A=S.b.div(x()),N=function(e){var n=e.messages,t=e.sendMessage,a=r.a.useState(""),o=Object(p.a)(a,2),c=o[0],i=o[1];return r.a.createElement(A,null,r.a.createElement(R,null,n.map((function(e){return r.a.createElement(M,{key:e.id,sender:e.sender},e.payload)}))),r.a.createElement(P,{onSubmit:function(e){e.preventDefault(),e.stopPropagation(),t(c),i("")}},r.a.createElement(h.a,{type:"text",placeholder:"Message...",value:c,onChange:function(e){e.preventDefault(),e.stopPropagation(),i(e.target.value)}})))};function B(){var e=Object(d.a)(["\n  padding-top: ",";\n"]);return B=function(){return e},e}!function(e){e.TEXT="TEXT"}(C||(C={}));var J,z=S.b.div(B(),(function(e){var n=e.size;return"".concat(n,"px")})),L=t(48),G=t(57),H=t.n(G);function V(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function X(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?V(t,!0).forEach((function(n){Object(i.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function W(){var e=Object(d.a)(["\n  padding: 12px;\n  max-width: 400px;\n  margin: 0 auto;\n"]);return W=function(){return e},e}function F(){var e=Object(d.a)(["\n  text-align: center;\n  font-size: 10px;\n"]);return F=function(){return e},e}!function(e){e.HOST="HOST",e.SLAVE="SLAVE"}(J||(J={}));var I=S.b.div(F()),$=S.b.div(W()),q=function(){var e=r.a.useState(),n=Object(p.a)(e,2),t=n[0],a=n[1],o=r.a.useState(!1),c=Object(p.a)(o,2),i=c[0],u=c[1],d=r.a.useState(),m=Object(p.a)(d,2),y=m[0],E=m[1],S=r.a.useState(""),x=Object(p.a)(S,2),j=x[0],T=x[1],D=r.a.useState([]),k=Object(p.a)(D,2),P=k[0],M=k[1],R=r.a.useRef(),A=r.a.useRef(),B=function(e){try{var n=JSON.parse(e);M((function(e){return[].concat(Object(f.a)(e),[n])}))}catch(t){}},G=function(){return u(!0)},V=function(){var e=Object(l.a)(s.a.mark((function e(){var n,t,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(J.HOST),e.next=3,O({onMessageReceived:B,onChannelOpen:G});case 3:n=e.sent,t=n.localDescription,r=n.setAnswerDescription,o=n.sendMessage,A.current=o,R.current=r,E(L.Base64.encode(t));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(e){T(e.target.value)},F=function(){var e=Object(l.a)(s.a.mark((function e(){var n,t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j){e.next=9;break}return a(J.SLAVE),e.next=4,O({remoteDescription:L.Base64.decode(j),onMessageReceived:B,onChannelOpen:G});case 4:n=e.sent,t=n.localDescription,r=n.sendMessage,A.current=r,E(L.Base64.encode(t));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){y&&H()(y)},K=P.filter((function(e){return e.type===C.TEXT}));return r.a.createElement($,null,r.a.createElement(b.a.Title,{style:{textAlign:"center"}},"p2p chat"),!t&&r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement(v.a,{onClick:V,type:"primary",block:!0},"New chat")),r.a.createElement(z,{size:24}),r.a.createElement(g.a,null,r.a.createElement(h.a,{type:"text",value:j,onChange:W,placeholder:"Paste connection code here..."}),r.a.createElement(z,{size:12}),r.a.createElement(v.a,{onClick:F,type:"primary",block:!0},"Join a chat"))),t===J.HOST&&!i&&r.a.createElement("div",null,r.a.createElement(b.a.Text,null,"Send this code to other person:"),r.a.createElement(z,{size:4}),r.a.createElement(h.a.Search,{type:"text",value:y||"preparing connection...",enterButton:"Copy to clipboard",onSearch:q}),r.a.createElement(z,{size:24}),r.a.createElement(b.a.Text,null,"Code from your buddy:"),r.a.createElement(z,{size:4}),r.a.createElement(h.a.Search,{type:"text",value:j,onChange:W,placeholder:"Paste an answer code",enterButton:"Connect",onSearch:function(){j&&R.current&&R.current(L.Base64.decode(j))}})),t===J.SLAVE&&!i&&r.a.createElement("div",null,r.a.createElement(b.a.Text,null,"Send this code to other person:"),r.a.createElement(z,{size:4}),r.a.createElement(h.a.Search,{type:"text",value:y||"preparing connection...",enterButton:"Copy to clipboard",onSearch:q})),t&&i&&r.a.createElement(N,{messages:K,sendMessage:function(e){if(A.current){var n={id:Math.random().toFixed(10),sender:w.STRANGER,type:C.TEXT,payload:e};A.current(JSON.stringify(n)),M((function(e){return[].concat(Object(f.a)(e),[X({},n,{sender:w.ME})])}))}}}),r.a.createElement(I,null,"v0.0.2"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[122,1,2]]]);
//# sourceMappingURL=main.6652d40e.chunk.js.map