(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{915:function(e,t,n){Promise.resolve().then(n.bind(n,51164)),Promise.resolve().then(n.bind(n,17240)),Promise.resolve().then(n.t.bind(n,64671,23)),Promise.resolve().then(n.t.bind(n,60419,23)),Promise.resolve().then(n.t.bind(n,53054,23))},16463:function(e,t,n){"use strict";var r=n(71169);n.o(r,"useParams")&&n.d(t,{useParams:function(){return r.useParams}}),n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},60419:function(){},53054:function(){},64671:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}},51164:function(e,t,n){"use strict";n.d(t,{Analytics:function(){return i}});var r=n(2265),a=()=>{window.va||(window.va=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.vaq=window.vaq||[]).push(t)})};function o(){return"undefined"!=typeof window}function s(){return"production"}function c(){return"development"===((o()?window.vam:s())||"production")}function i(e){return(0,r.useEffect)(()=>{!function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debug:!0};if(!o())return;(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";if("auto"===e){window.vam=s();return}window.vam=e})(t.mode),a(),t.beforeSend&&(null==(e=window.va)||e.call(window,"beforeSend",t.beforeSend));let n=t.scriptSrc||(c()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js");if(document.head.querySelector('script[src*="'.concat(n,'"]')))return;let r=document.createElement("script");r.src=n,r.defer=!0,r.dataset.sdkn="@vercel/analytics"+(t.framework?"/".concat(t.framework):""),r.dataset.sdkv="1.3.1",t.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),t.endpoint&&(r.dataset.endpoint=t.endpoint),t.dsn&&(r.dataset.dsn=t.dsn),r.onerror=()=>{let e=c()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log("[Vercel Web Analytics] Failed to load script from ".concat(n,". ").concat(e))},c()&&!1===t.debug&&(r.dataset.debug="false"),document.head.appendChild(r)}({framework:e.framework||"react",...void 0!==e.route&&{disableAutoTrack:!0},...e})},[]),(0,r.useEffect)(()=>{e.route&&e.path&&function(e){var t;let{route:n,path:r}=e;null==(t=window.va)||t.call(window,"pageview",{route:n,path:r})}({route:e.route,path:e.path})},[e.route,e.path]),null}},17240:function(e,t,n){"use strict";n.d(t,{SpeedInsights:function(){return m}});var r=n(2265),a=n(16463),o=()=>{window.si||(window.si=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.siq=window.siq||[]).push(t)})};function s(){return false}function c(e){return new RegExp("/".concat(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"(?=[/?#]|$)"))}var i="https://va.vercel-scripts.com/v1/speed-insights",u="".concat(i,"/script.js"),d="".concat(i,"/script.debug.js");function l(e){let t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(t.current)e.route&&t.current(e.route);else{let n=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!("undefined"!=typeof window)||null===t.route)return null;o();let n=!!t.dsn,r=t.scriptSrc||(n?u:"/_vercel/speed-insights/script.js");if(document.head.querySelector('script[src*="'.concat(r,'"]')))return null;t.beforeSend&&(null==(e=window.si)||e.call(window,"beforeSend",t.beforeSend));let a=document.createElement("script");return a.src=r,a.defer=!0,a.dataset.sdkn="@vercel/speed-insights"+(t.framework?"/".concat(t.framework):""),a.dataset.sdkv="1.0.12",t.sampleRate&&(a.dataset.sampleRate=t.sampleRate.toString()),t.route&&(a.dataset.route=t.route),t.endpoint&&(a.dataset.endpoint=t.endpoint),t.dsn&&(a.dataset.dsn=t.dsn),a.onerror=()=>{console.log("[Vercel Speed Insights] Failed to load script from ".concat(r,". Please check if any content blockers are enabled and try again."))},document.head.appendChild(a),{setRoute:e=>{a.dataset.route=null!=e?e:void 0}}}({framework:e.framework||"react",...e});n&&(t.current=n.setRoute)}},[e.route]),null}var f=()=>{let e=(0,a.useParams)(),t=(0,a.useSearchParams)()||new URLSearchParams,n=(0,a.usePathname)(),r={...Object.fromEntries(t.entries()),...e||{}};return e?function(e,t){if(!e||!t)return e;let n=e;try{let e=Object.entries(t);for(let[t,r]of e)if(!Array.isArray(r)){let e=c(r);e.test(n)&&(n=n.replace(e,"/[".concat(t,"]")))}for(let[t,r]of e)if(Array.isArray(r)){let e=c(r.join("/"));e.test(n)&&(n=n.replace(e,"/[...".concat(t,"]")))}return n}catch(t){return e}}(n,r):null};function p(e){let t=f();return r.createElement(l,{route:t,...e,framework:"next"})}function m(e){return r.createElement(r.Suspense,{fallback:null},r.createElement(p,{...e}))}}},function(e){e.O(0,[3054,9141,2971,7023,1744],function(){return e(e.s=915)}),_N_E=e.O()}]);