(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.vue-lazyload"],{caf9:function(t,n,r){"use strict";function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e){return null==e||"function"!=typeof e&&"object"!==(void 0===e?"undefined":o(e))}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e=function(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e},h=function(e,t){if(null==e)throw new TypeError("expected first argument to be an object.");if(void 0===t||"undefined"==typeof Symbol)return e;if("function"!=typeof Object.getOwnPropertySymbols)return e;for(var n=Object.prototype.propertyIsEnumerable,r=Object(e),d=arguments.length,i=0;++i<d;)for(var o=Object(arguments[i]),s=Object.getOwnPropertySymbols(o),a=0;a<s.length;a++){var u=s[a];n.call(o,u)&&(r[u]=o[u])}return r},i=Object.prototype.toString,u=function(e){var t=void 0===e?"undefined":o(e);return"undefined"===t?"undefined":null===e?"null":!0===e||!1===e||e instanceof Boolean?"boolean":"string"===t||e instanceof String?"string":"number"===t||e instanceof Number?"number":"function"===t||e instanceof Function?void 0!==e.constructor.name&&"Generator"===e.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(e)?"array":e instanceof RegExp?"regexp":e instanceof Date?"date":"[object RegExp]"===(t=i.call(e))?"regexp":"[object Date]"===t?"date":"[object Arguments]"===t?"arguments":"[object Error]"===t?"error":"[object Promise]"===t?"promise":(e=e).constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)?"buffer":"[object Set]"===t?"set":"[object WeakSet]"===t?"weakset":"[object Map]"===t?"map":"[object WeakMap]"===t?"weakmap":"[object Symbol]"===t?"symbol":"[object Map Iterator]"===t?"mapiterator":"[object Set Iterator]"===t?"setiterator":"[object String Iterator]"===t?"stringiterator":"[object Array Iterator]"===t?"arrayiterator":"[object Int8Array]"===t?"int8array":"[object Uint8Array]"===t?"uint8array":"[object Uint8ClampedArray]"===t?"uint8clampedarray":"[object Int16Array]"===t?"int16array":"[object Uint16Array]"===t?"uint16array":"[object Int32Array]"===t?"int32array":"[object Uint32Array]"===t?"uint32array":"[object Float32Array]"===t?"float32array":"[object Float64Array]"===t?"float64array":"object"};function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){e=e||{};var t=arguments.length,n=0;if(1===t)return e;for(;++n<t;){var r,i=arguments[n];if(c(e)&&(e=i),v(i)){o=void 0;s=void 0;a=void 0;r=void 0;var o=e;var s=i;for(var a in h(o,s),s)"__proto__"!==a&&function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(s,a)&&(v(r=s[a])?("undefined"===u(o[a])&&"function"===u(r)&&(o[a]=r),o[a]=p(o[a]||{},r)):o[a]=r)}}return e}function v(e){return"object"===u(e)||"function"===u(e)}var a=p,w="undefined"!=typeof window,b=!!(w&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)&&("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}}),!0);var L="event",_="observer",y=function(){if(w)return"function"==typeof window.CustomEvent?window.CustomEvent:(e.prototype=window.Event.prototype,e);function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}}();function s(e,t){if(e.length)return-1<(t=e.indexOf(t))&&e.splice(t,1)}function k(e,l){if("IMG"===e.tagName&&e.getAttribute("data-srcset")){var t,n=e.getAttribute("data-srcset"),r=[],c=e.parentNode.offsetWidth*l,i=void 0,o=void 0;(n=n.trim().split(",")).map(function(e){e=e.trim(),t=e.lastIndexOf(" "),o=-1===t?(i=e,999998):(i=e.substr(0,t),parseInt(e.substr(t+1,e.length-t-2),10)),r.push([o,i])}),r.sort(function(e,t){if(e[0]<t[0])return 1;if(e[0]>t[0])return-1;if(e[0]===t[0]){if(-1!==t[1].indexOf(".webp",t[1].length-5))return 1;if(-1!==e[1].indexOf(".webp",e[1].length-5))return-1}return 0});for(var s="",a=0;a<r.length;a++){var u,s=(u=r[a])[1],d=r[a+1];if(d&&d[0]<c){s=u[1];break}if(!d){s=u[1];break}}return s}}function l(e,t){for(var n=void 0,r=0,i=e.length;r<i;r++)if(t(e[r])){n=e[r];break}return n}function d(e,t,n){var r,i=new Image;if(!e||!e.src)return r=new Error("image src is required"),n(r);i.src=e.src,i.onload=function(){t({naturalHeight:i.naturalHeight,naturalWidth:i.naturalWidth,src:i.src})},i.onerror=function(e){n(e)}}function g(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]}var E=function(){if(w){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}}(),A={on:function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]&&arguments[3];E?e.addEventListener(t,n,{capture:r,passive:!0}):e.addEventListener(t,n,r)},off:function(e,t,n){e.removeEventListener(t,n,3<arguments.length&&void 0!==arguments[3]&&arguments[3])}},j=function(e){return g(e,"overflow")+g(e,"overflow-y")+g(e,"overflow-x")};function z(){}function I(d){return e(g,[{key:"config",value:function(){a(this.options,0<arguments.length&&void 0!==arguments[0]?arguments[0]:{})}},{key:"performance",value:function(){var t=[];return this.ListenerQueue.map(function(e){t.push(e.performance())}),t}},{key:"addLazyBox",value:function(e){this.ListenerQueue.push(e),w&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}},{key:"add",value:function(n,r,i){var o=this;if(function(e,t){for(var n=!1,r=0,i=e.length;r<i;r++)if(t(e[r])){n=!0;break}return n}(this.ListenerQueue,function(e){return e.el===n}))return this.update(n,r),d.nextTick(this.lazyLoadHandler);var e=this._valueFormatter(r.value),s=e.src,a=e.loading,u=e.error;d.nextTick(function(){s=k(n,o.options.scale)||s,o._observer&&o._observer.observe(n);var e=Object.keys(r.modifiers)[0],t=void 0,e=(t=(t=e?(t=i.context.$refs[e])?t.$el||t:document.getElementById(e):t)||function(e){if(w){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(j(t)))return t;t=t.parentNode}return window}}(n),new O({bindType:r.arg,$parent:t,el:n,loading:a,error:u,src:s,elRenderer:o._elRenderer.bind(o),options:o.options,imageCache:o._imageCache}));o.ListenerQueue.push(e),w&&(o._addListenerTarget(window),o._addListenerTarget(t)),o.lazyLoadHandler(),d.nextTick(function(){return o.lazyLoadHandler()})})}},{key:"update",value:function(t,e,n){var r=this,i=this._valueFormatter(e.value),o=i.src,s=i.loading,i=i.error,o=k(t,this.options.scale)||o,a=l(this.ListenerQueue,function(e){return e.el===t});a?a.update({src:o,loading:s,error:i}):this.add(t,e,n),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),this.lazyLoadHandler(),d.nextTick(function(){return r.lazyLoadHandler()})}},{key:"remove",value:function(t){var e;t&&(this._observer&&this._observer.unobserve(t),(e=l(this.ListenerQueue,function(e){return e.el===t}))&&(this._removeListenerTarget(e.$parent),this._removeListenerTarget(window),s(this.ListenerQueue,e),e.$destroy()))}},{key:"removeComponent",value:function(e){e&&(s(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(e){var t=this;b||e!==_||(e=L),(this.mode=e)===L?(this._observer&&(this.ListenerQueue.forEach(function(e){t._observer.unobserve(e.el)}),this._observer=null),this.TargetQueue.forEach(function(e){t._initListen(e.el,!0)})):(this.TargetQueue.forEach(function(e){t._initListen(e.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(t){var e;if(t)return(e=l(this.TargetQueue,function(e){return e.el===t}))?e.childrenCount++:(e={el:t,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===L&&this._initListen(e.el,!0),this.TargetQueue.push(e)),this.TargetIndex}},{key:"_removeListenerTarget",value:function(n){var r=this;this.TargetQueue.forEach(function(e,t){e.el===n&&(e.childrenCount--,e.childrenCount||(r._initListen(e.el,!1),r.TargetQueue.splice(t,1)))})}},{key:"_initListen",value:function(t,n){var r=this;this.options.ListenEvents.forEach(function(e){return A[n?"on":"off"](t,e,r.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var i=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(e,t){i.Event.listeners[e]||(i.Event.listeners[e]=[]),i.Event.listeners[e].push(t)},this.$once=function(t,n){var r=i;i.$on(t,function e(){r.$off(t,e),n.apply(r,arguments)})},this.$off=function(e,t){t?s(i.Event.listeners[e],t):i.Event.listeners[e]&&(i.Event.listeners[e].length=0)},this.$emit=function(e,t,n){i.Event.listeners[e]&&i.Event.listeners[e].forEach(function(e){return e(t,n)})}}},{key:"_lazyLoadHandler",value:function(){var t=this,n=[];this.ListenerQueue.forEach(function(e,t){e.el&&e.el.parentNode||n.push(e),e.checkInView()&&e.load()}),n.forEach(function(e){s(t.ListenerQueue,e),e.$destroy()})}},{key:"_initIntersectionObserver",value:function(){var t=this;b&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(e){t._observer.observe(e.el)}))}},{key:"_observerHandler",value:function(e,t){var n=this;e.forEach(function(t){t.isIntersecting&&n.ListenerQueue.forEach(function(e){if(e.el===t.target){if(e.state.loaded)return n._observer.unobserve(e.el);e.load()}})})}},{key:"_elRenderer",value:function(e,t,n){if(e.el){var r=e.el,i=e.bindType,o=void 0;switch(t){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src}i?r.style[i]='url("'+o+'")':r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent&&(i=new y(t,{detail:e}),r.dispatchEvent(i))}}},{key:"_valueFormatter",value:function(e){var t,n=e,r=this.options.loading,i=this.options.error;return null!==(t=e)&&"object"===(void 0===t?"undefined":o(t))&&(e.src||this.options.silent,n=e.src,r=e.loading||this.options.loading,i=e.error||this.options.error),{src:n,loading:r,error:i}}}]),g;function g(e){var i,o,s,a,t=e.preLoad,n=e.error,r=e.throttleWait,l=e.preLoadTop,c=e.dispatchEvent,h=e.loading,f=e.attempt,u=e.silent,u=void 0===u||u,d=e.scale,p=e.listenEvents,v=(e.hasbind,e.filter),b=e.adapter,y=e.observer,e=e.observerOptions;m(this,g),this.version="1.3.3",this.mode=L,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:u,dispatchEvent:!!c,throttleWait:r||200,preLoad:t||1.3,preLoadTop:l||0,error:n||S,loading:h||S,attempt:f||3,scale:d||function(){return w&&window.devicePixelRatio||(0<arguments.length&&void 0!==arguments[0]?arguments[0]:1)}(d),ListenEvents:p||$,hasbind:!1,supportWebp:function(){if(!w)return!1;var t=!0,e=document;try{var n=e.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",e.body.appendChild(n),t=!n.offsetWidth,e.body.removeChild(n)}catch(e){t=!1}return t}(),filter:v||{},adapter:b||{},observer:!!y,observerOptions:e||x},this._initEvent(),this._imageCache=new T({max:200}),this.lazyLoadHandler=(i=this._lazyLoadHandler.bind(this),o=this.options.throttleWait,s=null,a=0,function(){var e,t,n,r;s||(e=Date.now()-a,t=this,n=arguments,r=function(){a=Date.now(),s=!1,i.apply(t,n)},o<=e?r():s=setTimeout(r,o))}),this.setMode(this.options.observer?_:L)}}e(D,[{key:"has",value:function(e){return-1<this._caches.indexOf(e)}},{key:"add",value:function(e){this.has(e)||(this._caches.push(e),this._caches.length>this.options.max&&this.free())}},{key:"free",value:function(){this._caches.shift()}}]);var T=D,O=(e(B,[{key:"initState",value:function(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(e){this.performanceData[e]=Date.now()}},{key:"update",value:function(e){var t=e.src,n=e.loading,e=e.error,r=this.src;this.src=t,this.loading=n,this.error=e,this.filter(),r!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&0<this.rect.right}},{key:"filter",value:function(){var t=this;!function(e){if(!(e instanceof Object))return[];if(Object.keys)return Object.keys(e);var t,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(t);return n}(this.options.filter).map(function(e){t.options.filter[e](t,t.options)})}},{key:"renderLoading",value:function(t){var n=this;this.state.loading=!0,d({src:this.loading},function(e){n.render("loading",!1),n.state.loading=!1,t()},function(){t(),n.state.loading=!1,n.options.silent})}},{key:"load",value:function(){var t=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:z;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent,void n()):this.state.rendered&&this.state.loaded?void 0:this._imageCache.has(this.src)?(this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,n()):void this.renderLoading(function(){t.attempt++,t.options.adapter.beforeLoad&&t.options.adapter.beforeLoad(t,t.options),t.record("loadStart"),d({src:t.src},function(e){t.naturalHeight=e.naturalHeight,t.naturalWidth=e.naturalWidth,t.state.loaded=!0,t.state.error=!1,t.record("loadEnd"),t.render("loaded",!1),t.state.rendered=!0,t._imageCache.add(t.src),n()},function(e){t.options.silent,t.state.error=!0,t.state.loaded=!1,t.render("error",!1)})})}},{key:"render",value:function(e,t){this.elRenderer(this,e,t)}},{key:"performance",value:function(){var e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}},{key:"$destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),B),S="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",$=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],x={rootMargin:"0px",threshold:0},C=(e(W,[{key:"bind",value:function(e,t,n){e=new Q({el:e,binding:t,vnode:n,lazy:this.lazy});this._queue.push(e)}},{key:"update",value:function(t,e,n){var r=l(this._queue,function(e){return e.el===t});r&&r.update({el:t,binding:e,vnode:n})}},{key:"unbind",value:function(t,e,n){var r=l(this._queue,function(e){return e.el===t});r&&(r.clear(),s(this._queue,r))}}]),W),H={selector:"img"},Q=(e(R,[{key:"update",value:function(e){var t=this,n=e.el,e=e.binding;this.el=n,this.options=a({},H,e.value),this.getImgs().forEach(function(e){t.lazy.add(e,a({},t.binding,{value:{src:"dataset"in e?e.dataset.src:e.getAttribute("data-src"),error:("dataset"in e?e.dataset.error:e.getAttribute("data-error"))||t.options.error,loading:("dataset"in e?e.dataset.loading:e.getAttribute("data-loading"))||t.options.loading}}),t.vnode)})}},{key:"getImgs",value:function(){for(var e=this.el.querySelectorAll(this.options.selector),t=e.length,n=[],r=0;r<t;r++)n.push(e[r]);return n}},{key:"clear",value:function(){var t=this;this.getImgs().forEach(function(e){return t.lazy.remove(e)}),this.vnode=null,this.binding=null,this.lazy=null}}]),R);function R(e){var t=e.el,n=e.binding,r=e.vnode,e=e.lazy;m(this,R),this.el=null,this.vnode=r,this.binding=n,this.options={},this.lazy=e,this._queue=[],this.update({el:t,binding:n})}function W(e){e=e.lazy;m(this,W),((this.lazy=e).lazyContainerMananger=this)._queue=[]}function B(e){var t=e.el,n=e.src,r=e.error,i=e.loading,o=e.bindType,s=e.$parent,a=e.options,u=e.elRenderer,e=e.imageCache;m(this,B),this.el=t,this.src=n,this.error=r,this.loading=i,this.bindType=o,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=a,this.rect=null,this.$parent=s,this.elRenderer=u,this._imageCache=e,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}function D(e){e=e.max;m(this,D),this.options={max:e||100},this._caches=[]}n.a={install:function(e){var r,t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=new(I(e))(n),o=new C({lazy:i}),s="2"===e.version.split(".")[0];e.prototype.$Lazyload=i,n.lazyComponent&&e.component("lazy-component",(t=i,{props:{tag:{type:String,default:"div"}},render:function(e){return!1===this.show?e(this.tag):e(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,t.addLazyBox(this),t.lazyLoadHandler()},beforeDestroy:function(){t.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),w&&this.rect.top<window.innerHeight*t.options.preLoad&&0<this.rect.bottom&&this.rect.left<window.innerWidth*t.options.preLoad&&0<this.rect.right},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)},destroy:function(){return this.$destroy}}})),n.lazyImage&&e.component("lazy-image",(r=i,{props:{src:[String,Object],tag:{type:String,default:"img"}},render:function(e){return e(this.tag,{attrs:{src:this.renderSrc}},this.$slots.default)},data:function(){return{el:null,options:{src:"",error:"",loading:"",attempt:r.options.attempt},state:{loaded:!1,error:!1,attempt:0},rect:{},renderSrc:""}},watch:{src:function(){this.init(),r.addLazyBox(this),r.lazyLoadHandler()}},created:function(){this.init(),this.renderSrc=this.options.loading},mounted:function(){this.el=this.$el,r.addLazyBox(this),r.lazyLoadHandler()},beforeDestroy:function(){r.removeComponent(this)},methods:{init:function(){var e=r._valueFormatter(this.src),t=e.src,n=e.loading,e=e.error;this.state.loaded=!1,this.options.src=t,this.options.error=e,this.options.loading=n,this.renderSrc=this.options.loading},getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),w&&this.rect.top<window.innerHeight*r.options.preLoad&&0<this.rect.bottom&&this.rect.left<window.innerWidth*r.options.preLoad&&0<this.rect.right},load:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:z;if(this.state.attempt>this.options.attempt-1&&this.state.error)return r.options.silent,void e();e=this.options.src;d({src:e},function(e){e=e.src;t.renderSrc=e,t.state.loaded=!0},function(e){t.state.attempt++,t.renderSrc=t.options.error,t.state.error=!0})}}})),s?(e.directive("lazy",{bind:i.add.bind(i),update:i.update.bind(i),componentUpdated:i.lazyLoadHandler.bind(i),unbind:i.remove.bind(i)}),e.directive("lazy-container",{bind:o.bind.bind(o),componentUpdated:o.update.bind(o),unbind:o.unbind.bind(o)})):(e.directive("lazy",{bind:i.lazyLoadHandler.bind(i),update:function(e,t){a(this.vm.$refs,this.vm.$els),i.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){i.remove(this.el)}}),e.directive("lazy-container",{update:function(e,t){o.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){o.unbind(this.el)}}))}}}}]);