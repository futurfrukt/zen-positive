(this["webpackJsonpzen-positive"]=this["webpackJsonpzen-positive"]||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports=t(20)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(6),r=t.n(o),i=(t(14),t(1)),u=t(8),l=Boolean(document.exitFullscreen&&document.documentElement&&document.documentElement.requestFullscreen),s=function(e){return Math.floor(Math.random()*e)},m=(t(15),t(16),["\u0412\u0441\u0451 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f","\u0422\u044b \u0432\u0441\u0451 \u0443\u0441\u043f\u0435\u0435\u0448\u044c","\u0422\u044b \u0441\u043f\u0440\u0430\u0432\u0438\u0448\u044c\u0441\u044f","\u0423\u043b\u044b\u0431\u043d\u0438\u0441\u044c \u0441\u0435\u0431\u0435","\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438 \u0432 \u043e\u043a\u043d\u043e","\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438 \u0432 \u043e\u043a\u043d\u043e"]),d=m.reduce((function(e,n){return n.length>e?n.length:e}),0);d%2!==0&&(d+=1);var v=m.reduce((function(e,n){n.length%2!==0&&(n+="_");var t="_".repeat(Math.ceil((d-n.length)/2));return e.push((t+n+t).replace(/\s/g,"_")),e}),[]),f=v[s(v.length)],b=function(e){var n=e.children,t=e.index,o=e.onAnimationIteration,r=Object(a.useMemo)((function(){return{animationDuration:"".concat(2500+5e3*Math.random(),"ms"),visibility:"_"===n?"hidden":void 0}}),[]);return c.a.createElement("span",{onAnimationIteration:function(){return o(t)},style:r},n)},E=t(4),h=t.n(E),p=(t(17),function(e){var n=e.onReload,t=e.isReloading,o=Object(a.useContext)(k).visible,r=Object(a.useCallback)((function(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}),[]);return Object(a.useEffect)((function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.code;return"KeyF"===n&&r()};return document.addEventListener("keydown",e,{passive:!0}),function(){document.removeEventListener("keydown",e,{passive:!0})}}),[r]),c.a.createElement("div",{className:h()("controls",{controls_hidden:!o})},l&&c.a.createElement("button",{onClick:r},c.a.createElement("span",null,"f"),"ullscreen"),c.a.createElement("button",{disabled:t,onClick:n},"next"))}),j=function(){var e=Object(a.useState)(Object(u.a)(v)),n=Object(i.a)(e,2),t=n[0],o=n[1],r=Object(a.useState)(f),l=Object(i.a)(r,2),m=l[0],d=l[1],E=Object(a.useState)(m),h=Object(i.a)(E,2),j=h[0],O=h[1],g=Object(a.useState)(!1),k=Object(i.a)(g,2),y=k[0],w=k[1],x=m!==j,C=Object(a.useCallback)((function(){if(!x){var e=(t.length>1?t:v).filter((function(e){return e!==m}));o(e),O(e[s(e.length)])}}),[t,o,m,y,w,j,O]);Object(a.useEffect)((function(){var e=setTimeout(C,12e3);return function(){clearTimeout(e)}}),[m]);var M=Object(a.useCallback)((function(e){if(m[e]!==j[e]){var n=m.substring(0,e)+j[e]+m.substring(e+1);d(n)}}),[m,d,j]);return c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"head"},""),c.a.createElement("div",{className:"lines"},c.a.createElement("code",{className:"line"},m.split("").map((function(e,n){return c.a.createElement(b,{key:"".concat(n,"-").concat(e,"-").concat(y),index:n,onAnimationIteration:M},e)})))),c.a.createElement(p,{onReload:C,isReloading:x}))},O=(t(18),t(7)),g=t.n(O),k=c.a.createContext({hidden:!0});var y=function(){var e=Object(a.useState)(!1),n=Object(i.a)(e,2),t=n[0],o=n[1],r=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=g()((function(e){var n=e.visible,t=void 0!==n&&n,a=e.delay;clearTimeout(r.current),o(t),t&&(r.current=setTimeout((function(){return o(!1)}),a))}),200),n=function(){return e({visible:!0,delay:1500})},a=function(){return e({visible:!t,delay:2500})};return document.addEventListener("mousemove",n,{passive:!0}),document.addEventListener("click",a,{passive:!0}),function(){document.removeEventListener("mousemove",n,{passive:!0}),document.removeEventListener("click",a,{passive:!0})}}),[t,o]);var u=Object(a.useMemo)((function(){return{visible:t}}),[t]);return c.a.createElement(k.Provider,{value:u},c.a.createElement("div",{className:h()("app",{app_noControls:!t})},c.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.44ec2429.chunk.js.map