!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.mpdb=e():t.mpdb=e()}(self,(()=>(()=>{var t={10:(t,e,r)=>{const n=r(791).Z,o=r(621).B,i=r(469).B,s=r(822).B,a=r(590).P,u=new n({key:"702d8269-6579-42b0-81d0-f3b022fff43d"});u.use(o({})),u.use(i({})),u.use(s({})),u.hookVue=function(t){t.config.errorHandler=a(u,t)},t.exports=u},339:(t,e,r)=>{"use strict";r.d(e,{iV:()=>l,qC:()=>o,Rf:()=>p,oY:()=>u,VZ:()=>a,KV:()=>f,Bj:()=>s,bj:()=>i,_j:()=>c});var n=r(655);function o(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?function(t){return t}:1===t.length?t[0]:t.reduce((function(t,e){return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return t(e.apply(void 0,(0,n.ev)([],(0,n.CR)(r),!1)))}}))}function i(t){if(t)return Object.keys(t).forEach((function(e){"object"==typeof t[e]&&(t[e]=JSON.stringify(t[e])),t[e]=String(t[e])})),t}function s(t){if(t)return Object.keys(t).forEach((function(e){"string"!=typeof t[e]&&"boolean"!=typeof t[e]&&"number"!=typeof t[e]&&(t[e]=JSON.stringify(t[e]))})),t}function a(t){return"object"==typeof t&&void 0!==t.message}function u(t){if(void 0!==t.stacktrace||void 0!==t["opera#sourceloc"]){var e=t.stacktrace;return(void 0===e?"":e).split("\n").filter((function(t){return""!==t}))}if(t.stack){var r=t.stack;return(void 0===r?"":r).split("\n").filter((function(t){return""!==t}))}return["No stacktrace available"]}function c(t){return Object.keys(t).map((function(e){return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t[e]))})).join("&")}function f(){return"[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0)}function p(){return f()?r.g:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}}r(204);var l=function(){function t(t){this._data=t}return t.prototype.toJSON=function(){return JSON.stringify(this._data)},t.prototype.serialize=function(){return this._data},t}()},791:(t,e,r)=>{"use strict";r.d(e,{Z:()=>v});var n=r(655),o=r(339),i=function(){function t(){}return t.serialize=function(){return{transport:this.transport(),origin:this.origin()}},t.origin=function(){var t=(0,o.Rf)();return t.location?t.location.origin||"".concat(t.location.protocol,"//").concat(t.location.hostname):""},t.transport=function(){var t=(0,o.Rf)();return(0,o.KV)()&&"undefined"==typeof jest?"NodeHTTP":t.XDomainRequest?"XDomainRequest":t.XMLHttpRequest&&!t.fetch?"XMLHttpRequest":"fetch"},t.supportsPromises=function(){var t,e=(0,o.Rf)();return"Promise"in e&&"resolve"in e.Promise&&"reject"in e.Promise&&"all"in e.Promise&&"race"in e.Promise&&(new e.Promise((function(e){t=e})),"function"==typeof t)},t}(),s=function(){function t(t){this.url=t}return t.prototype.send=function(t){var e=this;return new Promise((function(r,n){var o,i=new XDomainRequest,s=new RegExp("^https?:");i.onload=function(){return r({})},i.open("POST",e.url.replace(s,null===(o=null===window||void 0===window?void 0:window.location)||void 0===o?void 0:o.protocol)),setTimeout((function(){try{i.send(t)}catch(t){n(t)}}),0)}))},t}(),a=function(){function t(t){this.url=t}return t.prototype.send=function(t){var e=this;return new Promise((function(r,n){try{var o=new XMLHttpRequest;o.onreadystatechange=function(){o.readyState===XMLHttpRequest.DONE&&r({})},o.open("POST",e.url),o.send(t)}catch(t){n(t)}}))},t}(),u=function(){function t(t,e){this.url=t}return t.prototype.send=function(t){return(0,n.mG)(this,void 0,void 0,(function(){var e,r;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return[4,fetch(this.url,{method:"POST",body:t})];case 1:return e=n.sent(),r=e.statusText,[2,e.ok?Promise.resolve({}):Promise.reject({statusText:r})]}}))}))},t}(),c=r(57),f=r.n(c),p=function(){function t(t){this.url=t}return t.prototype.send=function(t){var e=this,r={method:"POST",headers:{"Content-Type":"application/json","Content-Length":t.length}};return new Promise((function(n,o){var i=f().request(e.url,r,(function(){})).on("error",(function(t){return o(t)}));i.write(t),i.end(),n({})}))},t}(),l=function(){function t(t){this._uri=t.uri||"https://appsignal-endpoint.net/collect",this._apiKey=t.key,this._clientVersion=t.version,this._transport=this._createTransport(this._url())}return t.prototype.push=function(t){return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(e){switch(e.label){case 0:return[4,this._transport.send(t.toJSON())];case 1:return e.sent(),[2,t]}}))}))},t.prototype._createTransport=function(t){switch(i.transport()){case"XDomainRequest":return new s(t);case"XMLHttpRequest":return new a(t);case"NodeHTTP":return new p(t);default:return new u(t)}},t.prototype._url=function(){var t=this._authorization();return"".concat(this._uri,"?").concat((0,o._j)(t))},t.prototype._authorization=function(){return{api_key:this._apiKey,version:this._clientVersion}},t}(),d=function(t){function e(e){return t.call(this,(0,n.pi)({timestamp:Math.round((new Date).getTime()/1e3),namespace:"frontend",error:{name:"NullError",message:"No error has been set",backtrace:[]}},e))||this}return(0,n.ZT)(e,t),e.prototype.setAction=function(t){return t&&"string"==typeof t?(this._data.action=t,this):this},e.prototype.setNamespace=function(t){return t&&"string"==typeof t?(this._data.namespace=t,this):this},e.prototype.setError=function(t){return t&&(0,o.VZ)(t)?(this._data.error={name:t.name||"[unknown]",message:t.message,backtrace:(0,o.oY)(t)},this):this},e.prototype.setTags=function(t){return this._data.tags=(0,n.pi)((0,n.pi)({},this._data.tags),(0,o.bj)(t)),this},e.prototype.setParams=function(t){return this._data.params=(0,n.pi)((0,n.pi)({},this._data.params),t),this},e.prototype.setBreadcrumbs=function(t){return this._data.breadcrumbs=t,this},e}(o.iV),h=function(){function t(t){this._data=t||[]}return t.prototype.clear=function(){this._data=[]},t.prototype.values=function(){return this._data},t.prototype.push=function(t){var e;return Array.isArray(t)?(e=this._data).push.apply(e,(0,n.ev)([],(0,n.CR)(t),!1)):this._data.push(t)},t.prototype.drain=function(){return(0,n.Jh)(this,(function(t){switch(t.label){case 0:return this._data.length>0?[4,this._data.shift()]:[3,2];case 1:return t.sent(),[3,0];case 2:return[2]}}))},t}(),y=function(){function t(t,e,r){this._retries=0,this._timerID=0,this._duration=0,this._api=e,this._queue=t,this.options=(0,n.pi)({limit:5,initialDuration:1e3},r),this.reset()}return t.prototype.schedule=function(t){var e=this;return void 0===t&&(t=this._duration),(0,o.Rf)().setTimeout((function(){return(0,n.mG)(e,void 0,void 0,(function(){var e,r,o,i,s,a,u;return(0,n.Jh)(this,(function(c){switch(c.label){case 0:c.trys.push([0,7,8,9]),e=(0,n.XA)(this._queue.drain()),r=e.next(),c.label=1;case 1:if(r.done)return[3,6];if(!(o=r.value))return[2];c.label=2;case 2:return c.trys.push([2,4,,5]),[4,this._api.push(o)];case 3:return c.sent(),[3,5];case 4:return c.sent(),i=Math.floor(Math.pow(t,1.3)),this._retries=this._retries-1,0===this._retries?this.reset():(this._queue.push(o),this._timerID=this.schedule(i)),[2];case 5:return r=e.next(),[3,1];case 6:return[3,9];case 7:return s=c.sent(),a={error:s},[3,9];case 8:try{r&&!r.done&&(u=e.return)&&u.call(e)}finally{if(a)throw a.error}return[7];case 9:return this.reset(),[2]}}))}))}),t)},t.prototype.reset=function(){var t=this.options,e=t.limit,r=t.initialDuration;this._retries=e,this._duration=r},t}();const v=function(){function t(t){this.VERSION="1.3.25",this.ignored=[],this._breadcrumbs=[],this._hooks={decorators:Array(),overrides:Array()},this._env=i.serialize(),this._queue=new h([]);var e=t.key,r=void 0===e?"":e,n=t.uri,o=t.revision,s=t.ignoreErrors;o&&"string"!=typeof o&&(t.revision=String(o)),""===r&&console.info("[APPSIGNAL]: Started in development mode."),this._api=new l({key:r,uri:n,version:this.VERSION}),s&&Array.isArray(s)&&(this.ignored=s),this._dispatcher=new y(this._queue,this._api),this._options=t}return t.prototype.send=function(t,e,r){var s=this;if(t instanceof Error||t instanceof d){if(0!==this.ignored.length){if(t instanceof Error&&this.ignored.some((function(e){return e.test(t.message)})))return void console.warn("[APPSIGNAL]: Ignored an error: ".concat(t.message));if(t instanceof d){var a=t.serialize().error;if(a.message&&this.ignored.some((function(t){return t.test(a.message)})))return void console.warn("[APPSIGNAL]: Ignored a span: ".concat(a.message))}}var u=t instanceof d?t:this._createSpanFromError(t);if(this._hooks.decorators.length>0&&o.qC.apply(void 0,(0,n.ev)([],(0,n.CR)(this._hooks.decorators),!1))(u),e)if("function"==typeof e)e(u);else{console.warn("[APPSIGNAL]: DEPRECATED: Calling the `send`/`sendError` function with a tags object is deprecated. Use the callback argument instead.");var c=(0,o.Bj)(e)||{};u.setTags(c)}if(r&&(console.warn("[APPSIGNAL]: DEPRECATED: Calling the `send`/`sendError` function with a namespace is deprecated. Use the callback argument instead."),u.setNamespace(r)),this._breadcrumbs.length>0&&u.setBreadcrumbs(this._breadcrumbs),this._hooks.overrides.length>0&&o.qC.apply(void 0,(0,n.ev)([],(0,n.CR)(this._hooks.overrides),!1))(u),i.supportsPromises()){if(this._breadcrumbs=[],this._options.key)return this._api.push(u).catch((function(){s._queue.push(u),setTimeout((function(){return s._dispatcher.schedule()}),0)}));if(console.warn("[APPSIGNAL]: Span not sent because we're in development mode:",u),t instanceof Error)throw t}else console.error("[APPSIGNAL]: Error not sent. A Promise polyfill is required.")}else console.error("[APPSIGNAL]: Can't send error, given error is not a valid type")},t.prototype.sendError=function(t,e,r){return this.send(t,e,r)},t.prototype.use=function(t){t.call(this)},t.prototype.createSpan=function(t){var e=this._options,r=e.revision,n=void 0===r?"":r,o=e.namespace,i=new d({environment:this._env,revision:n});return o&&i.setNamespace(o),t&&"function"==typeof t&&t(i),i},t.prototype.wrap=function(t,e,r){return(0,n.mG)(this,void 0,void 0,(function(){var o;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,4]),[4,t()];case 1:return[2,n.sent()];case 2:return o=n.sent(),[4,this.sendError(o,e,r)];case 3:return n.sent(),[2,Promise.reject(o)];case 4:return[2]}}))}))},t.prototype.addDecorator=function(t){this._hooks.decorators.push(t)},t.prototype.addOverride=function(t){this._hooks.overrides.push(t)},t.prototype.demo=function(){var t=this._createSpanFromError(new Error("Hello world! This is an error used for demonstration purposes."));t.setAction("TestAction").setParams({path:"/hello",method:"GET"}).setTags({demo_sample:"true"}),this.send(t)},t.prototype.addBreadcrumb=function(t){var e=(0,n.pi)((0,n.pi)({timestamp:Math.round((new Date).getTime()/1e3)},t),{metadata:(0,o.Bj)(t.metadata)});e.category?e.action?(20===this._breadcrumbs.length&&this._breadcrumbs.pop(),this._breadcrumbs.unshift(e)):console.warn("[APPSIGNAL]: Breadcrumb not added. `action` is missing."):console.warn("[APPSIGNAL]: Breadcrumb not added. `category` is missing.")},t.prototype._createSpanFromError=function(t){var e=this.createSpan();return e.setError(t),e},t}()},469:(t,e,r)=>{"use strict";r.d(e,{B:()=>o});var n=["log","debug","info","warn","error"],o=function(t){var e=n.filter((function(t){return"undefined"!=typeof console&&"function"==typeof console[t]}));return function(){var t=this;e.forEach((function(e){var r=console[e];console[e]=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var i={action:n.length>1?"Console logged some values":"Console logged a value",category:"console.".concat(e),metadata:{}};n.forEach((function(t,e){return i.metadata["argument".concat(e)]=function(t,e){switch(typeof t){case"string":return t;case"undefined":return"undefined";default:return JSON.stringify(t,(r=[],n=[],function(t,e){if("object"==typeof e&&null!==e){var o=r.indexOf(e);if(-1!==o)return"[cyclic value: ".concat(n[o]||"root object","]");r.push(e),n.push(t)}return e}))}var r,n}(t)})),t.addBreadcrumb(i),r.apply(console,n)}}))}}},822:(t,e,r)=>{"use strict";r.d(e,{B:()=>i});var n=function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)},o={xhrEnabled:!0,fetchEnabled:!0,ignoreUrls:[]},i=function(t){var e=n(n({},o),t),r=e.xhrEnabled,i=e.fetchEnabled,s=e.ignoreUrls,a=!!r&&"XMLHttpRequest"in window,u=!!i&&"fetch"in window;return function(){var t,e,r=this;a&&(t=XMLHttpRequest.prototype.open,XMLHttpRequest.prototype.open=function(e,n){var o={method:e,url:n};this.addEventListener("load",(function(){s.some((function(t){return t.test(n)}))||r.addBreadcrumb({action:this.status>=400?"Request failed with code "+this.status:"Received a response with code "+this.status,category:"XMLHttpRequest",metadata:o})})),this.addEventListener("error",(function(){s.some((function(t){return t.test(n)}))||r.addBreadcrumb({action:"Request failed",category:"XMLHttpRequest",metadata:o})})),t.apply(this,arguments)}),u&&(e=window.fetch,window.fetch=function(t,n){var o="string"==typeof t?t:t.url,i={method:"string"!=typeof t&&t.method||n&&n.method||"GET",url:o};return s.some((function(t){return t.test(o)}))?e.apply(window,arguments):e.apply(window,arguments).then((function(t){var e=t.status;return r.addBreadcrumb({action:"Received a response with code "+e,category:"Fetch",metadata:i}),t})).catch((function(t){throw r.addBreadcrumb({action:"Request failed",category:"Fetch",metadata:i}),t}))})}}},621:(t,e,r)=>{"use strict";r.d(e,{B:()=>i});var n=r(339),o=function(){return o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},o.apply(this,arguments)},i=function(t){var e=window,r=o({onerror:!0,onunhandledrejection:!0},t);return function(){var t=this,o={onError:e.onerror,unhandledRejection:e.onunhandledrejection};r.onerror&&(e.onerror=function(e,r,n,i,s){var a=t.createSpan();"string"==typeof e&&0===n&&/Script error\.?/.test(e)?console.warn("[APPSIGNAL]: Cross-domain or eval script error detected, error ignored"):(s?a.setError(s):a.setError({name:"Error",message:"string"==typeof e?e:'An HTML onerror="" handler failed to execute',stack:"at ".concat(r,":").concat(n).concat(i?":".concat(i):"")}),t.send(a)),"function"==typeof o.onError&&o.onError.apply(this,arguments)}),r.onunhandledrejection&&(e.onunhandledrejection=function(e){var r,s=t.createSpan();r=e&&e.reason&&(0,n.VZ)(e.reason)?e.reason:{name:"UnhandledPromiseRejectionError",message:i(e)},s.setError(r),t.send(s),"function"==typeof o.unhandledRejection&&o.unhandledRejection.apply(this,arguments)})};function i(t){return t&&t.reason?"string"==typeof t.reason?t.reason:JSON.stringify(t.reason,(e=[],r=[],function(t,n){if("object"==typeof n&&null!==n){var o=e.indexOf(n);if(-1!==o)return"[cyclic value: ".concat(r[o]||"root object","]");e.push(n),r.push(t)}return n})):"";var e,r}}},590:(t,e,r)=>{"use strict";function n(t,e){var r,n=null!==(r=null==e?void 0:e.version)&&void 0!==r?r:"";return function(e,r,o){var i=r.$vnode?r.$vnode.componentOptions.tag:r.$options.name,s=t.createSpan();s.setAction(i||"[unknown Vue component]").setTags({framework:"Vue",info:o,version:n}).setError(e),t.send(s),"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e)}}r.d(e,{P:()=>n})},204:(t,e,r)=>{t.exports=self.fetch||(self.fetch=r(869).default||r(869))},655:(t,e,r)=>{"use strict";r.d(e,{CR:()=>c,Jh:()=>a,XA:()=>u,ZT:()=>o,ev:()=>f,mG:()=>s,pi:()=>i});var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)};function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var i=function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function s(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))}function a(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}function u(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s}function f(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}Object.create,Object.create},869:(t,e,r)=>{"use strict";function n(t,e){return e=e||{},new Promise((function(r,n){var o=new XMLHttpRequest,i=[],s=[],a={},u=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:u,headers:{keys:function(){return i},entries:function(){return s},get:function(t){return a[t.toLowerCase()]},has:function(t){return t.toLowerCase()in a}}}};for(var c in o.open(e.method||"get",t,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(t,e,r){i.push(e=e.toLowerCase()),s.push([e,r]),a[e]=a[e]?a[e]+","+r:r})),r(u())},o.onerror=n,o.withCredentials="include"==e.credentials,e.headers)o.setRequestHeader(c,e.headers[c]);o.send(e.body||null)}))}r.r(e),r.d(e,{default:()=>n})},57:()=>{}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}return r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r(10)})()));