(this["webpackJsonpzen-positive"]=this["webpackJsonpzen-positive"]||[]).push([[0],[,,,,,,,,,,,function(e,n,t){e.exports=t(22)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(7),o=t.n(r),i=(t(16),t(2)),u=t(10),s=Boolean(document.exitFullscreen&&document.documentElement&&document.documentElement.requestFullscreen),l=function(e){return Math.floor(Math.random()*e)},m=(t(17),t(18),t(8)),d=t.n(m)()(["\u0412\u0441\u0451 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f","\u0422\u044b \u0432\u0441\u0451 \u0443\u0441\u043f\u0435\u0435\u0448\u044c","\u0422\u044b \u0441\u043f\u0440\u0430\u0432\u0438\u0448\u044c\u0441\u044f","\u0423\u043b\u044b\u0431\u043d\u0438\u0441\u044c \u0441\u0435\u0431\u0435","\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438 \u0432 \u043e\u043a\u043d\u043e","\u0412\u0441\u0451 \u0431\u0443\u0434\u0435\u0442 \u0445\u043e\u0440\u043e\u0448\u043e"]),v=d.reduce((function(e,n){return n.length>e?n.length:e}),0);v%2!==0&&(v+=1);var f=d.reduce((function(e,n){n.length%2!==0&&(n+="_");var t="_".repeat(Math.ceil((v-n.length)/2));return e.push((t+n+t).replace(/\s/g,"_")),e}),[]),b=f[l(f.length)],E=function(e){var n=e.children,t=e.index,r=e.onAnimationIteration,o=Object(a.useMemo)((function(){return{animationDuration:"".concat(3e3+3e3*Math.random(),"ms"),visibility:"_"===n?"hidden":void 0}}),[]);return c.a.createElement("span",{onAnimationIteration:function(){return r(t)},style:o},n)},h=t(1),p=t.n(h),j=(t(19),function(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}),O=function(e){var n=e.className,t=e.onReload;return Object(a.useEffect)((function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.code;return"KeyF"===n&&j()};return document.addEventListener("keydown",e,{passive:!0}),function(){document.removeEventListener("keydown",e,{passive:!0})}}),[]),c.a.createElement("div",{className:p()("controls",n)},s&&c.a.createElement("button",{onClick:j},c.a.createElement("span",null,"f"),"ullscreen"),c.a.createElement("button",{onClick:t},"next"))},g=(t(20),function(e){var n=e.className;return c.a.createElement("div",{className:p()("top",n)},"Zen Positive")}),_=function(){var e=Object(a.useState)(Object(u.a)(f)),n=Object(i.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(b),s=Object(i.a)(o,2),m=s[0],d=s[1],v=Object(a.useState)(m),h=Object(i.a)(v,2),j=h[0],_=h[1],k=m!==j,y=Object(a.useCallback)((function(){if(!k){var e=(t.length>1?t:f).filter((function(e){return e!==m}));r(e);var n=e[l(e.length)];_(n)}}),[t,r,m,j,_]);Object(a.useEffect)((function(){var e=setTimeout(y,1e4);return function(){clearTimeout(e)}}),[m]);var N=Object(a.useCallback)((function(e){if(m[e]!==j[e]){var n=m.substring(0,e)+j[e]+m.substring(e+1);d(n)}}),[m,d,j]),x=Object(a.useContext)(w).visible;return c.a.createElement("div",{className:"main"},c.a.createElement(g,{className:p()("main__bar",{main__bar_hidden:!x})}),c.a.createElement("div",{className:"lines"},c.a.createElement("code",{className:"line"},m.split("").map((function(e,n){return c.a.createElement(E,{key:"".concat(n,"-").concat(e),index:n,onAnimationIteration:N},e)})))),c.a.createElement(O,{className:p()("main__bar",{main__bar_hidden:!x}),onReload:y}))},k=(t(21),t(9)),y=t.n(k),w=c.a.createContext({hidden:!0});var N=function(){var e=Object(a.useState)(!1),n=Object(i.a)(e,2),t=n[0],r=n[1],o=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=y()((function(e){var n=e.visible,t=void 0!==n&&n,a=e.delay;clearTimeout(o.current),r(t),t&&(o.current=setTimeout((function(){return r(!1)}),a))}),200),n=function(){return e({visible:!0,delay:1500})},a=function(){return e({visible:!t,delay:2500})};return document.addEventListener("mousemove",n,{passive:!0}),document.addEventListener("click",a,{passive:!0}),function(){document.removeEventListener("mousemove",n,{passive:!0}),document.removeEventListener("click",a,{passive:!0})}}),[t,r]);var u=Object(a.useMemo)((function(){return{visible:t}}),[t]);return c.a.createElement(w.Provider,{value:u},c.a.createElement("div",{className:p()("app",{app_noControls:!t})},c.a.createElement(_,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.48a6e26c.chunk.js.map