(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.docsearch=e():t.docsearch=e()})(this,function(){return function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=37)}([function(t,e){var r=Object.prototype.hasOwnProperty,o=Object.prototype.toString;t.exports=function(t,e,n){if("[object Function]"!==o.call(e))throw new TypeError("iterator must be a function");var s=t.length;if(s===+s)for(var i=0;i<s;i++)e.call(n,t[i],i,t);else for(var a in t)r.call(t,a)&&e.call(n,t[a],a,t)}},function(t,e){t.exports=function(t){return JSON.parse(JSON.stringify(t))}},function(t,e,r){"use strict";function o(t,e){var o=r(0),n=this;"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):n.stack=(new Error).stack||"Cannot get a stacktrace, browser is too old",this.name="AlgoliaSearchError",this.message=t||"Unknown error",e&&o(e,function(t,e){n[e]=t})}function n(t,e){function r(){var r=Array.prototype.slice.call(arguments,0);"string"!=typeof r[0]&&r.unshift(e),o.apply(this,r),this.name="AlgoliaSearch"+t+"Error"}return s(r,o),r}var s=r(8);s(o,Error),t.exports={AlgoliaSearchError:o,UnparsableJSON:n("UnparsableJSON","Could not parse the incoming response as JSON, see err.more for details"),RequestTimeout:n("RequestTimeout","Request timedout before getting a response"),Network:n("Network","Network issue, see err.more for details"),JSONPScriptFail:n("JSONPScriptFail","<script> was loaded but did not call our provided callback"),JSONPScriptError:n("JSONPScriptError","<script> unable to load due to an `error` event on it"),Unknown:n("Unknown","Unknown error occured")}},function(t,e,r){function o(){return"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function n(){var t=arguments,r=this.useColors;if(t[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+t[0]+(r?"%c ":" ")+"+"+e.humanize(this.diff),!r)return t;var o="color: "+this.color;t=[t[0],o,"color: inherit"].concat(Array.prototype.slice.call(t,1));var n=0,s=0;return t[0].replace(/%[a-z%]/g,function(t){"%%"!==t&&(n++,"%c"===t&&(s=n))}),t.splice(s,0,o),t}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function i(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}}function a(){try{return e.storage.debug}catch(t){}if("env"in r.i({env:r.i({NODE_ENV:"production"})}))return r.i({NODE_ENV:"production"}).DEBUG}e=t.exports=r(26),e.log=s,e.formatArgs=n,e.save=i,e.load=a,e.useColors=o,e.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(t){}}(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},e.enable(a())},function(t,e,r){var o=r(0);t.exports=function(t,e){var r=[];return o(t,function(o,n){r.push(e(o,n,t))}),r}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){function o(t,e){return function(r,o,s){if("function"==typeof r&&"object"==typeof o||"object"==typeof s)throw new n.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");0===arguments.length||"function"==typeof r?(s=r,r=""):1!==arguments.length&&"function"!=typeof o||(s=o,o=void 0),"object"==typeof r&&null!==r?(o=r,r=void 0):void 0!==r&&null!==r||(r="");var i="";void 0!==r&&(i+=t+"="+encodeURIComponent(r));var a;return void 0!==o&&(o.additionalUA&&(a=o.additionalUA,delete o.additionalUA),i=this.as._getSearchParams(o,i)),this._search(i,e,s,a)}}t.exports=o;var n=r(2)},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e,r){var o=r(12),n=r(33);t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.apiKey,r=t.indexName,s=t.url;return function(t){var i=t.store,a=t.registerComponent,c=s||i.state.config.url;if(!c)return console.error("docsearch requires a `url` option");if(/^http:\/\/localhost/.test(c))return console.error("`url` option cannot be localhost");"/"===c.slice(-1)&&(c=c.replace(/\/$/,""));var u=new RegExp("^"+c+"(/#)?");a("sidebar:start",n),i.registerModule("pluginSearch",{actions:{search:function(t,n){var s=(t.commit,t.dispatch),i=(t.rootState,t.getters);if(s("updateSearchKeyword",n),!n)return void s("stopSearching",null);s("startSearching");var a=i.currentTags;o("BH4D9OD16A",e).search([{indexName:r,query:n,params:{filters:a.length>0?"("+a.map(function(t){return t=/^.+:.+$/.test(t)?t:"tags:"+t,t=t.replace(/\\:/g,":")}).join(" OR ")+")":""}}]).then(function(t){var e=t.results[0];s("stopSearching",e.hits.map(function(t){var e=t.url.replace(u,"").replace(/#([\s\S]+)$/,""),r=Object.keys(t.hierarchy).sort();return r.length>3&&r.shift(),r=r.filter(function(e){return Boolean(t.hierarchy[e])}).map(function(e){return t.hierarchy[e]}).join(" > "),{title:r,path:e,id:t.anchor,content:t.content}}))})}}})}}},function(t,e,r){function o(t,e,o){var s=r(3)("algoliasearch"),i=r(1),a=r(5),u=r(4),l="Usage: algoliasearch(applicationID, apiKey, opts)";if(!0!==o._allowEmptyCredentials&&!t)throw new c.AlgoliaSearchError("Please provide an application ID. "+l);if(!0!==o._allowEmptyCredentials&&!e)throw new c.AlgoliaSearchError("Please provide an API key. "+l);this.applicationID=t,this.apiKey=e,this.hosts={read:[],write:[]},o=o||{};var p=o.protocol||"https:";if(this._timeouts=o.timeouts||{connect:1e3,read:2e3,write:3e4},o.timeout&&(this._timeouts.connect=this._timeouts.read=this._timeouts.write=o.timeout),/:$/.test(p)||(p+=":"),"http:"!==o.protocol&&"https:"!==o.protocol)throw new c.AlgoliaSearchError("protocol must be `http:` or `https:` (was `"+o.protocol+"`)");if(this._checkAppIdData(),o.hosts)a(o.hosts)?(this.hosts.read=i(o.hosts),this.hosts.write=i(o.hosts)):(this.hosts.read=i(o.hosts.read),this.hosts.write=i(o.hosts.write));else{var f=u(this._shuffleResult,function(e){return t+"-"+e+".algolianet.com"});this.hosts.read=[this.applicationID+"-dsn.algolia.net"].concat(f),this.hosts.write=[this.applicationID+".algolia.net"].concat(f)}this.hosts.read=u(this.hosts.read,n(p)),this.hosts.write=u(this.hosts.write,n(p)),this.extraHeaders=[],this.cache=o._cache||{},this._ua=o._ua,this._useCache=!(void 0!==o._useCache&&!o._cache)||o._useCache,this._useFallback=void 0===o.useFallback||o.useFallback,this._setTimeout=o._setTimeout,s("init done, %j",this)}function n(t){return function(e){return t+"//"+e.toLowerCase()}}function s(t){if(void 0===Array.prototype.toJSON)return JSON.stringify(t);var e=Array.prototype.toJSON;delete Array.prototype.toJSON;var r=JSON.stringify(t);return Array.prototype.toJSON=e,r}function i(t){for(var e,r,o=t.length;0!==o;)r=Math.floor(Math.random()*o),o-=1,e=t[o],t[o]=t[r],t[r]=e;return t}function a(t){var e={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var o;o="x-algolia-api-key"===r||"x-algolia-application-id"===r?"**hidden for security purposes**":t[r],e[r]=o}return e}t.exports=o;var c=r(2),u=r(19),l=r(11),p=r(23),f=r.i({NODE_ENV:"production"}).RESET_APP_DATA_TIMER&&parseInt(r.i({NODE_ENV:"production"}).RESET_APP_DATA_TIMER,10)||12e4;o.prototype.initIndex=function(t){return new l(this,t)},o.prototype.setExtraHeader=function(t,e){this.extraHeaders.push({name:t.toLowerCase(),value:e})},o.prototype.addAlgoliaAgent=function(t){-1===this._ua.indexOf(";"+t)&&(this._ua+=";"+t)},o.prototype._jsonRequest=function(t){function e(r,u){function g(t){var e=t&&t.body&&t.body.message&&t.body.status||t.statusCode||t&&t.body&&200;i("received response: statusCode: %s, computed statusCode: %d, headers: %j",t.statusCode,e,t.headers);var r=2===Math.floor(e/100),s=new Date;if(m.push({currentHost:S,headers:a(n),content:o||null,contentLength:void 0!==o?o.length:null,method:u.method,timeouts:u.timeouts,url:u.url,startTime:x,endTime:s,duration:s-x,statusCode:e}),r)return f._useCache&&p&&(p[w]=t.responseText),t.body;if(4!==Math.floor(e/100))return h+=1,b();i("unrecoverable error");var l=new c.AlgoliaSearchError(t.body&&t.body.message,{debugData:m,statusCode:e});return f._promise.reject(l)}function v(e){i("error: %s, stack: %s",e.message,e.stack);var r=new Date;return m.push({currentHost:S,headers:a(n),content:o||null,contentLength:void 0!==o?o.length:null,method:u.method,timeouts:u.timeouts,url:u.url,startTime:x,endTime:r,duration:r-x}),e instanceof c.AlgoliaSearchError||(e=new c.Unknown(e&&e.message,e)),h+=1,e instanceof c.Unknown||e instanceof c.UnparsableJSON||h>=f.hosts[t.hostType].length&&(d||!y)?(e.debugData=m,f._promise.reject(e)):e instanceof c.RequestTimeout?_():b()}function b(){return i("retrying request"),f._incrementHostIndex(t.hostType),e(r,u)}function _(){return i("retrying request with higher timeout"),f._incrementHostIndex(t.hostType),f._incrementTimeoutMultipler(),u.timeouts=f._getTimeoutsForRequest(t.hostType),e(r,u)}f._checkAppIdData();var w,x=new Date;if(f._useCache&&(w=t.url),f._useCache&&o&&(w+="_body_"+u.body),f._useCache&&p&&void 0!==p[w])return i("serving response from cache"),f._promise.resolve(JSON.parse(p[w]));if(h>=f.hosts[t.hostType].length)return!y||d?(i("could not get any response"),f._promise.reject(new c.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: "+f.applicationID,{debugData:m}))):(i("switching to fallback"),h=0,u.method=t.fallback.method,u.url=t.fallback.url,u.jsonBody=t.fallback.body,u.jsonBody&&(u.body=s(u.jsonBody)),n=f._computeRequestHeaders(l),u.timeouts=f._getTimeoutsForRequest(t.hostType),f._setHostIndexByType(0,t.hostType),d=!0,e(f._request.fallback,u));var S=f._getHostByType(t.hostType),j=S+u.url,O={body:u.body,jsonBody:u.jsonBody,method:u.method,headers:n,timeouts:u.timeouts,debug:i};return i("method: %s, url: %s, headers: %j, timeouts: %d",O.method,j,O.headers,O.timeouts),r===f._request.fallback&&i("using fallback"),r.call(f,j,O).then(g,v)}this._checkAppIdData();var o,n,i=r(3)("algoliasearch:"+t.url),l=t.additionalUA||"",p=t.cache,f=this,h=0,d=!1,y=f._useFallback&&f._request.fallback&&t.fallback;this.apiKey.length>500&&void 0!==t.body&&(void 0!==t.body.params||void 0!==t.body.requests)?(t.body.apiKey=this.apiKey,n=this._computeRequestHeaders(l,!1)):n=this._computeRequestHeaders(l),void 0!==t.body&&(o=s(t.body)),i("request start");var m=[],g=e(f._request,{url:t.url,method:t.method,body:o,jsonBody:t.body,timeouts:f._getTimeoutsForRequest(t.hostType)});if(!t.callback)return g;g.then(function(e){u(function(){t.callback(null,e)},f._setTimeout||setTimeout)},function(e){u(function(){t.callback(e)},f._setTimeout||setTimeout)})},o.prototype._getSearchParams=function(t,e){if(void 0===t||null===t)return e;for(var r in t)null!==r&&void 0!==t[r]&&t.hasOwnProperty(r)&&(e+=""===e?"":"&",e+=r+"="+encodeURIComponent("[object Array]"===Object.prototype.toString.call(t[r])?s(t[r]):t[r]));return e},o.prototype._computeRequestHeaders=function(t,e){var o=r(0),n=t?this._ua+";"+t:this._ua,s={"x-algolia-agent":n,"x-algolia-application-id":this.applicationID};return!1!==e&&(s["x-algolia-api-key"]=this.apiKey),this.userToken&&(s["x-algolia-usertoken"]=this.userToken),this.securityTags&&(s["x-algolia-tagfilters"]=this.securityTags),this.extraHeaders&&o(this.extraHeaders,function(t){s[t.name]=t.value}),s},o.prototype.search=function(t,e,o){var n=r(5),s=r(4);if(!n(t))throw new Error("Usage: client.search(arrayOfQueries[, callback])");"function"==typeof e?(o=e,e={}):void 0===e&&(e={});var i=this,a={requests:s(t,function(t){var e="";return void 0!==t.query&&(e+="query="+encodeURIComponent(t.query)),{indexName:t.indexName,params:i._getSearchParams(t.params,e)}})},c=s(a.requests,function(t,e){return e+"="+encodeURIComponent("/1/indexes/"+encodeURIComponent(t.indexName)+"?"+t.params)}).join("&"),u="/1/indexes/*/queries";return void 0!==e.strategy&&(u+="?strategy="+e.strategy),this._jsonRequest({cache:this.cache,method:"POST",url:u,body:a,hostType:"read",fallback:{method:"GET",url:"/1/indexes/*",body:{params:c}},callback:o})},o.prototype.setSecurityTags=function(t){if("[object Array]"===Object.prototype.toString.call(t)){for(var e=[],r=0;r<t.length;++r)if("[object Array]"===Object.prototype.toString.call(t[r])){for(var o=[],n=0;n<t[r].length;++n)o.push(t[r][n]);e.push("("+o.join(",")+")")}else e.push(t[r]);t=e.join(",")}this.securityTags=t},o.prototype.setUserToken=function(t){this.userToken=t},o.prototype.clearCache=function(){this.cache={}},o.prototype.setRequestTimeout=function(t){t&&(this._timeouts.connect=this._timeouts.read=this._timeouts.write=t)},o.prototype.setTimeouts=function(t){this._timeouts=t},o.prototype.getTimeouts=function(){return this._timeouts},o.prototype._getAppIdData=function(){var t=p.get(this.applicationID);return null!==t&&this._cacheAppIdData(t),t},o.prototype._setAppIdData=function(t){return t.lastChange=(new Date).getTime(),this._cacheAppIdData(t),p.set(this.applicationID,t)},o.prototype._checkAppIdData=function(){var t=this._getAppIdData(),e=(new Date).getTime();return null===t||e-t.lastChange>f?this._resetInitialAppIdData(t):t},o.prototype._resetInitialAppIdData=function(t){var e=t||{};return e.hostIndexes={read:0,write:0},e.timeoutMultiplier=1,e.shuffleResult=e.shuffleResult||i([1,2,3]),this._setAppIdData(e)},o.prototype._cacheAppIdData=function(t){this._hostIndexes=t.hostIndexes,this._timeoutMultiplier=t.timeoutMultiplier,this._shuffleResult=t.shuffleResult},o.prototype._partialAppIdDataUpdate=function(t){var e=r(0),o=this._getAppIdData();return e(t,function(t,e){o[e]=t}),this._setAppIdData(o)},o.prototype._getHostByType=function(t){return this.hosts[t][this._getHostIndexByType(t)]},o.prototype._getTimeoutMultiplier=function(){return this._timeoutMultiplier},o.prototype._getHostIndexByType=function(t){return this._hostIndexes[t]},o.prototype._setHostIndexByType=function(t,e){var o=r(1),n=o(this._hostIndexes);return n[e]=t,this._partialAppIdDataUpdate({hostIndexes:n}),t},o.prototype._incrementHostIndex=function(t){return this._setHostIndexByType((this._getHostIndexByType(t)+1)%this.hosts[t].length,t)},o.prototype._incrementTimeoutMultipler=function(){var t=Math.max(this._timeoutMultiplier+1,4);return this._partialAppIdDataUpdate({timeoutMultiplier:t})},o.prototype._getTimeoutsForRequest=function(t){return{connect:this._timeouts.connect*this._timeoutMultiplier,complete:this._timeouts[t]*this._timeoutMultiplier}}},function(t,e,r){function o(t,e){this.indexName=e,this.as=t,this.typeAheadArgs=null,this.typeAheadValueOption=null,this.cache={}}var n=r(7),s=r(17),i=r(18);t.exports=o,o.prototype.clearCache=function(){this.cache={}},o.prototype.search=n("query"),o.prototype.similarSearch=n("similarQuery"),o.prototype.browse=function(t,e,o){var n,s,i=r(20),a=this;0===arguments.length||1===arguments.length&&"function"==typeof arguments[0]?(n=0,o=arguments[0],t=void 0):"number"==typeof arguments[0]?(n=arguments[0],"number"==typeof arguments[1]?s=arguments[1]:"function"==typeof arguments[1]&&(o=arguments[1],s=void 0),t=void 0,e=void 0):"object"==typeof arguments[0]?("function"==typeof arguments[1]&&(o=arguments[1]),e=arguments[0],t=void 0):"string"==typeof arguments[0]&&"function"==typeof arguments[1]&&(o=arguments[1],e=void 0),e=i({},e||{},{page:n,hitsPerPage:s,query:t});var c=this.as._getSearchParams(e,"");return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(a.indexName)+"/browse",body:{params:c},hostType:"read",callback:o})},o.prototype.browseFrom=function(t,e){return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/browse",body:{cursor:t},hostType:"read",callback:e})},o.prototype.searchForFacetValues=function(t,e){var o=r(1),n=r(21);if(void 0===t.facetName||void 0===t.facetQuery)throw new Error("Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])");var s=t.facetName,i=n(o(t),function(t){return"facetName"===t}),a=this.as._getSearchParams(i,"");return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/facets/"+encodeURIComponent(s)+"/query",hostType:"read",body:{params:a},callback:e})},o.prototype.searchFacet=s(function(t,e){return this.searchForFacetValues(t,e)},i("index.searchFacet(params[, callback])","index.searchForFacetValues(params[, callback])")),o.prototype._search=function(t,e,r,o){return this.as._jsonRequest({cache:this.cache,method:"POST",url:e||"/1/indexes/"+encodeURIComponent(this.indexName)+"/query",body:{params:t},hostType:"read",fallback:{method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName),body:{params:t}},callback:r,additionalUA:o})},o.prototype.getObject=function(t,e,r){var o=this;1!==arguments.length&&"function"!=typeof e||(r=e,e=void 0);var n="";if(void 0!==e){n="?attributes=";for(var s=0;s<e.length;++s)0!==s&&(n+=","),n+=e[s]}return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(o.indexName)+"/"+encodeURIComponent(t)+n,hostType:"read",callback:r})},o.prototype.getObjects=function(t,e,o){var n=r(5),s=r(4);if(!n(t))throw new Error("Usage: index.getObjects(arrayOfObjectIDs[, callback])");var i=this;1!==arguments.length&&"function"!=typeof e||(o=e,e=void 0);var a={requests:s(t,function(t){var r={indexName:i.indexName,objectID:t};return e&&(r.attributesToRetrieve=e.join(",")),r})};return this.as._jsonRequest({method:"POST",url:"/1/indexes/*/objects",hostType:"read",body:a,callback:o})},o.prototype.as=null,o.prototype.indexName=null,o.prototype.typeAheadArgs=null,o.prototype.typeAheadValueOption=null},function(t,e,r){"use strict";var o=r(10),n=r(13);t.exports=n(o,"(lite) ")},function(t,e,r){"use strict";var o=r(28),n=o.Promise||r(27).Promise;t.exports=function(t,e){function s(t,e,o){var n=r(1),a=r(14);return o=n(o||{}),void 0===o.protocol&&(o.protocol=a()),o._ua=o._ua||s.ua,new i(t,e,o)}function i(){t.apply(this,arguments)}var a=r(8),c=r(2),u=r(15),l=r(16),p=r(22);e=e||"",s.version=r(24),s.ua="Algolia for vanilla JavaScript "+e+s.version,s.initPlaces=p(s),o.__algolia={debug:r(3),algoliasearch:s};var f={hasXMLHttpRequest:"XMLHttpRequest"in o,hasXDomainRequest:"XDomainRequest"in o};return f.hasXMLHttpRequest&&(f.cors="withCredentials"in new XMLHttpRequest),a(i,t),i.prototype._request=function(t,e){return new n(function(r,o){function n(){if(!d){clearTimeout(h);var t;try{t={body:JSON.parse(m.responseText),responseText:m.responseText,statusCode:m.status,headers:m.getAllResponseHeaders&&m.getAllResponseHeaders()||{}}}catch(e){t=new c.UnparsableJSON({more:m.responseText})}t instanceof c.UnparsableJSON?o(t):r(t)}}function s(t){d||(clearTimeout(h),o(new c.Network({more:t})))}function i(){d=!0,m.abort(),o(new c.RequestTimeout)}function a(){g=!0,clearTimeout(h),h=setTimeout(i,e.timeouts.complete)}function l(){g||a()}function p(){!g&&m.readyState>1&&a()}if(!f.cors&&!f.hasXDomainRequest)return void o(new c.Network("CORS not supported"));t=u(t,e.headers);var h,d,y=e.body,m=f.cors?new XMLHttpRequest:new XDomainRequest,g=!1;h=setTimeout(i,e.timeouts.connect),m.onprogress=l,"onreadystatechange"in m&&(m.onreadystatechange=p),m.onload=n,m.onerror=s,m instanceof XMLHttpRequest?m.open(e.method,t,!0):m.open(e.method,t),f.cors&&(y&&("POST"===e.method?m.setRequestHeader("content-type","application/x-www-form-urlencoded"):m.setRequestHeader("content-type","application/json")),m.setRequestHeader("accept","application/json")),m.send(y)})},i.prototype._request.fallback=function(t,e){return t=u(t,e.headers),new n(function(r,o){l(t,e,function(t,e){if(t)return void o(t);r(e)})})},i.prototype._promise={reject:function(t){return n.reject(t)},resolve:function(t){return n.resolve(t)},delay:function(t){return new n(function(e){setTimeout(e,t)})}},s}},function(t,e,r){"use strict";function o(){var t=window.document.location.protocol;return"http:"!==t&&"https:"!==t&&(t="http:"),t}t.exports=o},function(t,e,r){"use strict";function o(t,e){return/\?/.test(t)?t+="&":t+="?",t+n(e)}t.exports=o;var n=r(32)},function(t,e,r){"use strict";function o(t,e,r){function o(){e.debug("JSONP: success"),m||f||(m=!0,p||(e.debug("JSONP: Fail. Script loaded but did not call the callback"),a(),r(new n.JSONPScriptFail)))}function i(){"loaded"!==this.readyState&&"complete"!==this.readyState||o()}function a(){clearTimeout(g),d.onload=null,d.onreadystatechange=null,d.onerror=null,h.removeChild(d)}function c(){try{delete window[y],delete window[y+"_loaded"]}catch(t){window[y]=window[y+"_loaded"]=void 0}}function u(){e.debug("JSONP: Script timeout"),f=!0,a(),r(new n.RequestTimeout)}function l(){e.debug("JSONP: Script error"),m||f||(a(),r(new n.JSONPScriptError))}if("GET"!==e.method)return void r(new Error("Method "+e.method+" "+t+" is not supported by JSONP."));e.debug("JSONP: start");var p=!1,f=!1;s+=1;var h=document.getElementsByTagName("head")[0],d=document.createElement("script"),y="algoliaJSONP_"+s,m=!1;window[y]=function(t){if(c(),f)return void e.debug("JSONP: Late answer, ignoring");p=!0,a(),r(null,{body:t})},t+="&callback="+y,e.jsonBody&&e.jsonBody.params&&(t+="&"+e.jsonBody.params);var g=setTimeout(u,e.timeouts.complete);d.onreadystatechange=i,d.onload=o,d.onerror=l,d.async=!0,d.defer=!0,d.src=t,h.appendChild(d)}t.exports=o;var n=r(2),s=0},function(t,e){t.exports=function(t,e){function r(){return o||(console.log(e),o=!0),t.apply(this,arguments)}var o=!1;return r}},function(t,e){t.exports=function(t,e){return"algoliasearch: `"+t+"` was replaced by `"+e+"`. Please see https://github.com/algolia/algoliasearch-client-js/wiki/Deprecated#"+t.toLowerCase().replace(".","").replace("()","")}},function(t,e){t.exports=function(t,e){e(t,0)}},function(t,e,r){var o=r(0);t.exports=function t(e){var r=Array.prototype.slice.call(arguments);return o(r,function(r){for(var o in r)r.hasOwnProperty(o)&&("object"==typeof e[o]&&"object"==typeof r[o]?e[o]=t({},e[o],r[o]):void 0!==r[o]&&(e[o]=r[o]))}),e}},function(t,e,r){t.exports=function(t,e){var o=r(30),n=r(0),s={};return n(o(t),function(r){!0!==e(r)&&(s[r]=t[r])}),s}},function(t,e,r){function o(t){return function(e,o,s){var i=r(1);s=s&&i(s)||{},s.hosts=s.hosts||["places-dsn.algolia.net","places-1.algolianet.com","places-2.algolianet.com","places-3.algolianet.com"],0!==arguments.length&&"object"!=typeof e&&void 0!==e||(e="",o="",s._allowEmptyCredentials=!0);var a=t(e,o,s),c=a.initIndex("places");return c.search=n("query","/1/places/query"),c}}t.exports=o;var n=r(7)},function(t,e,r){(function(e){function o(t,e){return c("localStorage failed with",e),i(),a=l,a.get(t)}function n(t,e){return 1===arguments.length?a.get(t):a.set(t,e)}function s(){try{return"localStorage"in e&&null!==e.localStorage&&(e.localStorage[u]||e.localStorage.setItem(u,JSON.stringify({})),!0)}catch(t){return!1}}function i(){try{e.localStorage.removeItem(u)}catch(t){}}var a,c=r(3)("algoliasearch:src/hostIndexState.js"),u="algoliasearch-client-js",l={state:{},set:function(t,e){return this.state[t]=e,this.state[t]},get:function(t){return this.state[t]||null}},p={set:function(t,r){l.set(t,r);try{var n=JSON.parse(e.localStorage[u]);return n[t]=r,e.localStorage[u]=JSON.stringify(n),n[t]}catch(e){return o(t,e)}},get:function(t){try{return JSON.parse(e.localStorage[u])[t]||null}catch(e){return o(t,e)}}};a=s()?p:l,t.exports={get:n,set:n,supportsLocalStorage:s}}).call(e,r(6))},function(t,e,r){"use strict";t.exports="3.22.1"},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{showLogo:function(){return Boolean(this.$store.state.searchResult)}}}},function(t,e,r){function o(){return e.colors[l++%e.colors.length]}function n(t){function r(){}function n(){var t=n,r=+new Date,s=r-(u||r);t.diff=s,t.prev=u,t.curr=r,u=r,null==t.useColors&&(t.useColors=e.useColors()),null==t.color&&t.useColors&&(t.color=o());for(var i=new Array(arguments.length),a=0;a<i.length;a++)i[a]=arguments[a];i[0]=e.coerce(i[0]),"string"!=typeof i[0]&&(i=["%o"].concat(i));var c=0;i[0]=i[0].replace(/%([a-z%])/g,function(r,o){if("%%"===r)return r;c++;var n=e.formatters[o];if("function"==typeof n){var s=i[c];r=n.call(t,s),i.splice(c,1),c--}return r}),i=e.formatArgs.apply(t,i),(n.log||e.log||console.log.bind(console)).apply(t,i)}r.enabled=!1,n.enabled=!0;var s=e.enabled(t)?n:r;return s.namespace=t,s}function s(t){e.save(t);for(var r=(t||"").split(/[\s,]+/),o=r.length,n=0;n<o;n++)r[n]&&(t=r[n].replace(/[\\^$+?.()|[\]{}]/g,"\\$&").replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function i(){e.enable("")}function a(t){var r,o;for(r=0,o=e.skips.length;r<o;r++)if(e.skips[r].test(t))return!1;for(r=0,o=e.names.length;r<o;r++)if(e.names[r].test(t))return!0;return!1}function c(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=n.debug=n,e.coerce=c,e.disable=i,e.enable=s,e.enabled=a,e.humanize=r(29),e.names=[],e.skips=[],e.formatters={};var u,l=0},function(t,e,r){(function(e){(function(e,r){t.exports=r()})(0,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function o(t){return"function"==typeof t}function n(t){L=t}function s(t){V=t}function i(){return void 0!==B?function(){B(c)}:a()}function a(){var t=setTimeout;return function(){return t(c,1)}}function c(){for(var t=0;t<F;t+=2){(0,Q[t])(Q[t+1]),Q[t]=void 0,Q[t+1]=void 0}F=0}function u(t,e){var r=arguments,o=this,n=new this.constructor(p);void 0===n[Z]&&N(n);var s=o._state;return s?function(){var t=r[s-1];V(function(){return A(s,n,t,o._result)})}():S(o,n,t,e),n}function l(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var r=new e(p);return b(r,t),r}function p(){}function f(){return new TypeError("You cannot resolve a promise with itself")}function h(){return new TypeError("A promises callback cannot return that same promise.")}function d(t){try{return t.then}catch(t){return ot.error=t,ot}}function y(t,e,r,o){try{t.call(e,r,o)}catch(t){return t}}function m(t,e,r){V(function(t){var o=!1,n=y(r,e,function(r){o||(o=!0,e!==r?b(t,r):w(t,r))},function(e){o||(o=!0,x(t,e))},"Settle: "+(t._label||" unknown promise"));!o&&n&&(o=!0,x(t,n))},t)}function g(t,e){e._state===et?w(t,e._result):e._state===rt?x(t,e._result):S(e,void 0,function(e){return b(t,e)},function(e){return x(t,e)})}function v(t,e,r){e.constructor===t.constructor&&r===u&&e.constructor.resolve===l?g(t,e):r===ot?(x(t,ot.error),ot.error=null):void 0===r?w(t,e):o(r)?m(t,e,r):w(t,e)}function b(e,r){e===r?x(e,f()):t(r)?v(e,r,d(r)):w(e,r)}function _(t){t._onerror&&t._onerror(t._result),j(t)}function w(t,e){t._state===tt&&(t._result=e,t._state=et,0!==t._subscribers.length&&V(j,t))}function x(t,e){t._state===tt&&(t._state=rt,t._result=e,V(_,t))}function S(t,e,r,o){var n=t._subscribers,s=n.length;t._onerror=null,n[s]=e,n[s+et]=r,n[s+rt]=o,0===s&&t._state&&V(j,t)}function j(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var o=void 0,n=void 0,s=t._result,i=0;i<e.length;i+=3)o=e[i],n=e[i+r],o?A(r,o,n,s):n(s);t._subscribers.length=0}}function O(){this.error=null}function T(t,e){try{return t(e)}catch(t){return nt.error=t,nt}}function A(t,e,r,n){var s=o(r),i=void 0,a=void 0,c=void 0,u=void 0;if(s){if(i=T(r,n),i===nt?(u=!0,a=i.error,i.error=null):c=!0,e===i)return void x(e,h())}else i=n,c=!0;e._state!==tt||(s&&c?b(e,i):u?x(e,a):t===et?w(e,i):t===rt&&x(e,i))}function k(t,e){try{e(function(e){b(t,e)},function(e){x(t,e)})}catch(e){x(t,e)}}function I(){return st++}function N(t){t[Z]=st++,t._state=void 0,t._result=void 0,t._subscribers=[]}function R(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[Z]||N(this.promise),H(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?w(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&w(this.promise,this._result))):x(this.promise,E())}function E(){return new Error("Array Methods must be provided an Array")}function C(t){return new R(this,t).promise}function q(t){var e=this;return new e(H(t)?function(r,o){for(var n=t.length,s=0;s<n;s++)e.resolve(t[s]).then(r,o)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function P(t){var e=this,r=new e(p);return x(r,t),r}function D(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function U(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function M(t){this[Z]=I(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&D(),this instanceof M?k(this,t):U())}function J(){var t=void 0;if(void 0!==e)t=e;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var r=t.Promise;if(r){var o=null;try{o=Object.prototype.toString.call(r.resolve())}catch(t){}if("[object Promise]"===o&&!r.cast)return}t.Promise=M}var $=void 0;$=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var H=$,F=0,B=void 0,L=void 0,V=function(t,e){Q[F]=t,Q[F+1]=e,2===(F+=2)&&(L?L(c):W())},X="undefined"!=typeof window?window:void 0,K=X||{},G=K.MutationObserver||K.WebKitMutationObserver,Y="undefined"==typeof self&&!0&&"[object process]"==={}.toString.call(r.i({env:r.i({NODE_ENV:"production"})})),z="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Q=new Array(1e3),W=void 0;W=Y?function(){return function(){return r.i({env:r.i({NODE_ENV:"production"})}).nextTick(c)}}():G?function(){var t=0,e=new G(c),r=document.createTextNode("");return e.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}():z?function(){var t=new MessageChannel;return t.port1.onmessage=c,function(){return t.port2.postMessage(0)}}():void 0===X?function(){try{var t=r(36);return B=t.runOnLoop||t.runOnContext,i()}catch(t){return a()}}():a();var Z=Math.random().toString(36).substring(16),tt=void 0,et=1,rt=2,ot=new O,nt=new O,st=0;return R.prototype._enumerate=function(){for(var t=this.length,e=this._input,r=0;this._state===tt&&r<t;r++)this._eachEntry(e[r],r)},R.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,o=r.resolve;if(o===l){var n=d(t);if(n===u&&t._state!==tt)this._settledAt(t._state,e,t._result);else if("function"!=typeof n)this._remaining--,this._result[e]=t;else if(r===M){var s=new r(p);v(s,t,n),this._willSettleAt(s,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(o(t),e)},R.prototype._settledAt=function(t,e,r){var o=this.promise;o._state===tt&&(this._remaining--,t===rt?x(o,r):this._result[e]=r),0===this._remaining&&w(o,this._result)},R.prototype._willSettleAt=function(t,e){var r=this;S(t,void 0,function(t){return r._settledAt(et,e,t)},function(t){return r._settledAt(rt,e,t)})},M.all=C,M.race=q,M.resolve=l,M.reject=P,M._setScheduler=n,M._setAsap=s,M._asap=V,M.prototype={constructor:M,then:u,catch:function(t){return this.then(null,t)}},M.polyfill=J,M.Promise=M,M})}).call(e,r(6))},function(t,e,r){(function(e){var r;r="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},t.exports=r}).call(e,r(6))},function(t,e){function r(t){if(t=String(t),!(t.length>1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var r=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return r*l;case"days":case"day":case"d":return r*u;case"hours":case"hour":case"hrs":case"hr":case"h":return r*c;case"minutes":case"minute":case"mins":case"min":case"m":return r*a;case"seconds":case"second":case"secs":case"sec":case"s":return r*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function o(t){return t>=u?Math.round(t/u)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=i?Math.round(t/i)+"s":t+"ms"}function n(t){return s(t,u,"day")||s(t,c,"hour")||s(t,a,"minute")||s(t,i,"second")||t+" ms"}function s(t,e,r){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}var i=1e3,a=60*i,c=60*a,u=24*c,l=365.25*u;t.exports=function(t,e){e=e||{};var s=typeof t;if("string"===s&&t.length>0)return r(t);if("number"===s&&!1===isNaN(t))return e.long?n(t):o(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,r){"use strict";var o=Object.prototype.hasOwnProperty,n=Object.prototype.toString,s=Array.prototype.slice,i=r(31),a=Object.prototype.propertyIsEnumerable,c=!a.call({toString:null},"toString"),u=a.call(function(){},"prototype"),l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],p=function(t){var e=t.constructor;return e&&e.prototype===t},f={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},h=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!f["$"+t]&&o.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{p(window[t])}catch(t){return!0}}catch(t){return!0}return!1}(),d=function(t){if("undefined"==typeof window||!h)return p(t);try{return p(t)}catch(t){return!1}},y=function(t){var e=null!==t&&"object"==typeof t,r="[object Function]"===n.call(t),s=i(t),a=e&&"[object String]"===n.call(t),p=[];if(!e&&!r&&!s)throw new TypeError("Object.keys called on a non-object");var f=u&&r;if(a&&t.length>0&&!o.call(t,0))for(var h=0;h<t.length;++h)p.push(String(h));if(s&&t.length>0)for(var y=0;y<t.length;++y)p.push(String(y));else for(var m in t)f&&"prototype"===m||!o.call(t,m)||p.push(String(m));if(c)for(var g=d(t),v=0;v<l.length;++v)g&&"constructor"===l[v]||!o.call(t,l[v])||p.push(l[v]);return p};y.shim=function(){if(Object.keys){if(!function(){return 2===(Object.keys(arguments)||"").length}(1,2)){var t=Object.keys;Object.keys=function(e){return t(i(e)?s.call(e):e)}}}else Object.keys=y;return Object.keys||y},t.exports=y},function(t,e,r){"use strict";var o=Object.prototype.toString;t.exports=function(t){var e=o.call(t),r="[object Arguments]"===e;return r||(r="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===o.call(t.callee)),r}},function(t,e,r){"use strict";function o(t,e){if(t.map)return t.map(e);for(var r=[],o=0;o<t.length;o++)r.push(e(t[o],o));return r}var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,a){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?o(i(t),function(i){var a=encodeURIComponent(n(i))+r;return s(t[i])?o(t[i],function(t){return a+encodeURIComponent(n(t))}).join(e):a+encodeURIComponent(n(t[i]))}).join(e):a?encodeURIComponent(n(a))+r+encodeURIComponent(n(t)):""};var s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},i=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},function(t,e,r){var o=r(34)(r(25),r(35),null,null,null);o.options.__file="/Users/egoist/dev/docute3/src/plugins/docsearch/Logo.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] Logo.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},function(t,e){t.exports=function(t,e,r,o,n){var s,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,i=t.default);var c="function"==typeof i?i.options:i;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),o&&(c._scopeId=o);var u;if(n?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=u):r&&(u=r),u){var l=c.functional,p=l?c.render:c.beforeCreate;l?c.render=function(t,e){return u.call(e),p(t,e)}:c.beforeCreate=p?[].concat(p,u):[u]}return{esModule:s,exports:i,options:c}}},function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.showLogo?r("div",{staticClass:"dosearch-logo inner-x"},[t._m(0)]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{attrs:{href:"https://www.algolia.com/docsearch",target:"_blank"}},[r("img",{attrs:{src:"https://www.algolia.com/static_assets/images/press/downloads/search-by-algolia.svg",alt:"algolia",width:"100"}})])}]},t.exports.render._withStripped=!0},function(t,e){},function(t,e,r){t.exports=r(9)}])});
//# sourceMappingURL=docsearch.js.map