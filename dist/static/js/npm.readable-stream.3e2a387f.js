(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.readable-stream"],{"27bf":function(e,t,n){"use strict";e.exports=i;var r=n("b19a"),e=Object.create(n("3a7c"));function i(e){if(!(this instanceof i))return new i(e);r.call(this,e),this._transformState={afterTransform:function(e,t){var n=this._transformState,r=(n.transforming=!1,n.writecb);if(!r)return this.emit("error",new Error("write callback called multiple times"));n.writechunk=null,(n.writecb=null)!=t&&this.push(t),r(e),(n=this._readableState).reading=!1,(n.needReadable||n.length<n.highWaterMark)&&this._read(n.highWaterMark)}.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),this.on("prefinish",a)}function a(){var n=this;"function"==typeof this._flush?this._flush(function(e,t){o(n,e,t)}):o(this,null,null)}function o(e,t,n){if(t)return e.emit("error",t);if(null!=n&&e.push(n),e._writableState.length)throw new Error("Calling transform done when ws.length != 0");if(e._transformState.transforming)throw new Error("Calling transform done when still transforming");return e.push(null)}e.inherits=n("3fb5"),e.inherits(i,r),i.prototype.push=function(e,t){return this._transformState.needTransform=!1,r.prototype.push.call(this,e,t)},i.prototype._transform=function(e,t,n){throw new Error("_transform() is not implemented")},i.prototype._write=function(e,t,n){var r=this._transformState;r.writecb=n,r.writechunk=e,r.writeencoding=t,r.transforming||(n=this._readableState,(r.needTransform||n.needReadable||n.length<n.highWaterMark)&&this._read(n.highWaterMark))},i.prototype._read=function(e){var t=this._transformState;null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0},i.prototype._destroy=function(e,t){var n=this;r.prototype._destroy.call(this,e,function(e){t(e),n.emit("close")})}},"429b":function(e,t,n){e.exports=n("faa1").EventEmitter},4681:function(e,t,n){"use strict";var a=n("966d");function o(e,t){e.emit("error",t)}e.exports={destroy:function(e,t){var n=this,r=this._readableState&&this._readableState.destroyed,i=this._writableState&&this._writableState.destroyed;return r||i?t?t(e):!e||this._writableState&&this._writableState.errorEmitted||a.nextTick(o,this,e):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,function(e){!t&&e?(a.nextTick(o,n,e),n._writableState&&(n._writableState.errorEmitted=!0)):t&&t(e)})),this},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}}},"5e1a":function(e,t,n){"use strict";var o=n("a8f0").Buffer,r=n(2);function i(){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function");this.head=null,this.tail=null,this.length=0}e.exports=(i.prototype.push=function(e){e={data:e,next:null};0<this.length?this.tail.next=e:this.head=e,this.tail=e,++this.length},i.prototype.unshift=function(e){e={data:e,next:this.head};0===this.length&&(this.tail=e),this.head=e,++this.length},i.prototype.shift=function(){var e;if(0!==this.length)return e=this.head.data,1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e},i.prototype.clear=function(){this.head=this.tail=null,this.length=0},i.prototype.join=function(e){if(0===this.length)return"";for(var t=this.head,n=""+t.data;t=t.next;)n+=e+t.data;return n},i.prototype.concat=function(e){if(0===this.length)return o.alloc(0);if(1===this.length)return this.head.data;for(var t,n,r=o.allocUnsafe(e>>>0),i=this.head,a=0;i;)t=i.data,n=a,t.copy(r,n),a+=i.data.length,i=i.next;return r},i),r&&r.inspect&&r.inspect.custom&&(e.exports.prototype[r.inspect.custom]=function(){var e=r.inspect({length:this.length});return this.constructor.name+" "+e})},"780f":function(e,t,n){"use strict";e.exports=i;var r=n("27bf"),e=Object.create(n("3a7c"));function i(e){if(!(this instanceof i))return new i(e);r.call(this,e)}e.inherits=n("3fb5"),e.inherits(i,r),i.prototype._transform=function(e,t,n){n(null,e)}},a8f0:function(e,t,n){var r=n("b639"),i=r.Buffer;function a(e,t){for(var n in e)t[n]=e[n]}function o(e,t,n){return i(e,t,n)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?e.exports=r:(a(r,t),t.Buffer=o),a(i,o),o.from=function(e,t,n){if("number"==typeof e)throw new TypeError("Argument must not be a number");return i(e,t,n)},o.alloc=function(e,t,n){if("number"!=typeof e)throw new TypeError("Argument must be a number");e=i(e);return void 0!==t?"string"==typeof n?e.fill(t,n):e.fill(t):e.fill(0),e},o.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return i(e)},o.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return r.SlowBuffer(e)}},ad71:function(q,e,C){"use strict";!function(e,w){var b=C("966d");q.exports=r;function y(e,t){return e.listeners(t).length}var a,m=C("e3db"),n=(r.ReadableState=i,C("faa1").EventEmitter,C("429b")),f=C("a8f0").Buffer,c=e.Uint8Array||function(){};var o,e=Object.create(C("3a7c")),t=(e.inherits=C("3fb5"),C(1)),g=void 0,g=t&&t.debuglog?t.debuglog("stream"):function(){},s=C("5e1a"),t=C("4681"),d=(e.inherits(r,n),["error","close","destroy","pause","resume"]);function i(e,t){var t=t instanceof(a=a||C("b19a")),n=(this.objectMode=!!(e=e||{}).objectMode,t&&(this.objectMode=this.objectMode||!!e.readableObjectMode),e.highWaterMark),r=e.readableHighWaterMark,i=this.objectMode?16:16384;this.highWaterMark=n||0===n?n:t&&(r||0===r)?r:i,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new s,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(o=o||C("7d72").StringDecoder,this.decoder=new o(e.encoding),this.encoding=e.encoding)}function r(e){if(a=a||C("b19a"),!(this instanceof r))return new r(e);this._readableState=new i(e,this),this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),n.call(this)}function l(e,t,h,n,r){var i,a,o,s=e._readableState;{var d,l;null===t?(s.reading=!1,d=e,(l=s).ended||(!l.decoder||(a=l.decoder.end())&&a.length&&(l.buffer.push(a),l.length+=l.objectMode?1:a.length),l.ended=!0,u(d))):(r||(a=s,i=o=function(e){return f.isBuffer(e)||e instanceof c}(l=t)||"string"==typeof l||void 0===l||a.objectMode?o:new TypeError("Invalid non-string/buffer chunk")),i?e.emit("error",i):s.objectMode||t&&0<t.length?("string"==typeof t||s.objectMode||Object.getPrototypeOf(t)===f.prototype||(d=t,t=f.from(d)),n?s.endEmitted?e.emit("error",new Error("stream.unshift() after end event")):p(e,s,t,!0):s.ended?e.emit("error",new Error("stream.push() after EOF")):(s.reading=!1,s.decoder&&!h?(t=s.decoder.write(t),s.objectMode||0!==t.length?p(e,s,t,!1):S(e,s)):p(e,s,t,!1))):n||(s.reading=!1))}return!(r=s).ended&&(r.needReadable||r.length<r.highWaterMark||0===r.length)}function p(e,t,n,r){t.flowing&&0===t.length&&!t.sync?(e.emit("data",n),e.read(0)):(t.length+=t.objectMode?1:n.length,r?t.buffer.unshift(n):t.buffer.push(n),t.needReadable&&u(e)),S(e,t)}Object.defineProperty(r.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}}),r.prototype.destroy=t.destroy,r.prototype._undestroy=t.undestroy,r.prototype._destroy=function(e,t){this.push(null),t(e)},r.prototype.push=function(e,t){var n,r=this._readableState;return r.objectMode?n=!0:"string"==typeof e&&((t=t||r.defaultEncoding)!==r.encoding&&(e=f.from(e,t),t=""),n=!0),l(this,e,t,!1,n)},r.prototype.unshift=function(e){return l(this,e,null,!0,!1)},r.prototype.isPaused=function(){return!1===this._readableState.flowing},r.prototype.setEncoding=function(e){return o=o||C("7d72").StringDecoder,this._readableState.decoder=new o(e),this._readableState.encoding=e,this};var h=8388608;function _(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!=e?(t.flowing&&t.length?t.buffer.head.data:t).length:(e>t.highWaterMark&&(t.highWaterMark=(h<=(n=e)?n=h:(n--,n=(n=(n=(n=(n|=n>>>1)|n>>>2)|n>>>4)|n>>>8)|n>>>16,n++),n)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0));var n}function u(e){var t=e._readableState;t.needReadable=!1,t.emittedReadable||(g("emitReadable",t.flowing),t.emittedReadable=!0,t.sync?b.nextTick(v,e):v(e))}function v(e){g("emit readable"),e.emit("readable"),R(e)}function S(e,t){t.readingMore||(t.readingMore=!0,b.nextTick(k,e,t))}function k(e,t){for(var n=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(g("maybeReadMore read 0"),e.read(0),n!==t.length);)n=t.length;t.readingMore=!1}function M(e){g("readable nexttick read 0"),e.read(0)}function x(e,t){t.reading||(g("resume read 0"),e.read(0)),t.resumeScheduled=!1,t.awaitDrain=0,e.emit("resume"),R(e),t.flowing&&!t.reading&&e.read(0)}function R(e){var t=e._readableState;for(g("flow",t.flowing);t.flowing&&null!==e.read(););}function E(e,t){return 0===t.length?null:(t.objectMode?i=t.buffer.shift():!e||e>=t.length?(i=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.head.data:t.buffer.concat(t.length),t.buffer.clear()):(e=e,n=t.buffer,t=t.decoder,e<n.head.data.length?(r=n.head.data.slice(0,e),n.head.data=n.head.data.slice(e)):r=e===n.head.data.length?n.shift():(t?function(e,t){var n=t.head,r=1,i=n.data;e-=i.length;for(;n=n.next;){var a=n.data,o=e>a.length?a.length:e;if(o===a.length?i+=a:i+=a.slice(0,e),0===(e-=o)){o===a.length?(++r,n.next?t.head=n.next:t.head=t.tail=null):(t.head=n).data=a.slice(o);break}++r}return t.length-=r,i}:function(e,t){var n=f.allocUnsafe(e),r=t.head,i=1;r.data.copy(n),e-=r.data.length;for(;r=r.next;){var a=r.data,o=e>a.length?a.length:e;if(a.copy(n,n.length-e,0,o),0===(e-=o)){o===a.length?(++i,r.next?t.head=r.next:t.head=t.tail=null):(t.head=r).data=a.slice(o);break}++i}return t.length-=i,n})(e,n),i=r),i);var n,r,i}function j(e){var t=e._readableState;if(0<t.length)throw new Error('"endReadable()" called on non-empty stream');t.endEmitted||(t.ended=!0,b.nextTick(T,t,e))}function T(e,t){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}function W(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}r.prototype.read=function(e){g("read",e),e=parseInt(e,10);var t=this._readableState,n=e;if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return g("read: emitReadable",t.length,t.ended),(0===t.length&&t.ended?j:u)(this),null;if(0===(e=_(e,t))&&t.ended)return 0===t.length&&j(this),null;var r=t.needReadable;return g("need readable",r),(0===t.length||t.length-e<t.highWaterMark)&&g("length less than watermark",r=!0),t.ended||t.reading?g("reading or ended",r=!1):r&&(g("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=_(n,t))),null===(r=0<e?E(e,t):null)?(t.needReadable=!0,e=0):t.length-=e,0===t.length&&(t.ended||(t.needReadable=!0),n!==e&&t.ended&&j(this)),null!==r&&this.emit("data",r),r},r.prototype._read=function(e){this.emit("error",new Error("_read() is not implemented"))},r.prototype.pipe=function(n,e){var r=this,i=this._readableState;switch(i.pipesCount){case 0:i.pipes=n;break;case 1:i.pipes=[i.pipes,n];break;default:i.pipes.push(n)}i.pipesCount+=1,g("pipe count=%d opts=%j",i.pipesCount,e);e=(!e||!1!==e.end)&&n!==w.stdout&&n!==w.stderr?f:l;function h(e,t){g("onunpipe"),e===r&&t&&!1===t.hasUnpiped&&(t.hasUnpiped=!0,g("cleanup"),n.removeListener("close",d),n.removeListener("finish",p),n.removeListener("drain",a),n.removeListener("error",s),n.removeListener("unpipe",h),r.removeListener("end",f),r.removeListener("end",l),r.removeListener("data",c),u=!0,!i.awaitDrain||n._writableState&&!n._writableState.needDrain||a())}function f(){g("onend"),n.end()}i.endEmitted?b.nextTick(e):r.once("end",e),n.on("unpipe",h);t=r;var t,a=function(){var e=t._readableState;g("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&y(t,"data")&&(e.flowing=!0,R(t))},u=(n.on("drain",a),!1);var o=!1;function c(e){g("ondata"),(o=!1)!==n.write(e)||o||((1===i.pipesCount&&i.pipes===n||1<i.pipesCount&&-1!==W(i.pipes,n))&&!u&&(g("false write response, pause",r._readableState.awaitDrain),r._readableState.awaitDrain++,o=!0),r.pause())}function s(e){g("onerror",e),l(),n.removeListener("error",s),0===y(n,"error")&&n.emit("error",e)}function d(){n.removeListener("finish",p),l()}function p(){g("onfinish"),n.removeListener("close",d),l()}function l(){g("unpipe"),r.unpipe(n)}return r.on("data",c),function(e,t,n){if("function"==typeof e.prependListener)return e.prependListener(t,n);e._events&&e._events[t]?m(e._events[t])?e._events[t].unshift(n):e._events[t]=[n,e._events[t]]:e.on(t,n)}(n,"error",s),n.once("close",d),n.once("finish",p),n.emit("pipe",r),i.flowing||(g("pipe resume"),r.resume()),n},r.prototype.unpipe=function(e){var t=this._readableState,n={hasUnpiped:!1};if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes||(e=e||t.pipes,t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,n)),this;if(!e){var r=t.pipes,i=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var a=0;a<i;a++)r[a].emit("unpipe",this,n);return this}var o=W(t.pipes,e);return-1===o||(t.pipes.splice(o,1),--t.pipesCount,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,n)),this},r.prototype.addListener=r.prototype.on=function(e,t){t=n.prototype.on.call(this,e,t);return"data"===e?!1!==this._readableState.flowing&&this.resume():"readable"===e&&((e=this._readableState).endEmitted||e.readableListening||(e.readableListening=e.needReadable=!0,e.emittedReadable=!1,e.reading?e.length&&u(this):b.nextTick(M,this))),t},r.prototype.resume=function(){var e,t=this._readableState;return t.flowing||(g("resume"),t.flowing=!0,e=this,(t=t).resumeScheduled||(t.resumeScheduled=!0,b.nextTick(x,e,t))),this},r.prototype.pause=function(){return g("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(g("pause"),this._readableState.flowing=!1,this.emit("pause")),this},r.prototype.wrap=function(t){var e,n=this,r=this._readableState,i=!1;for(e in t.on("end",function(){var e;g("wrapped end"),r.decoder&&!r.ended&&(e=r.decoder.end())&&e.length&&n.push(e),n.push(null)}),t.on("data",function(e){g("wrapped data"),r.decoder&&(e=r.decoder.write(e)),r.objectMode&&null==e||!(r.objectMode||e&&e.length)||n.push(e)||(i=!0,t.pause())}),t)void 0===this[e]&&"function"==typeof t[e]&&(this[e]=function(e){return function(){return t[e].apply(t,arguments)}}(e));for(var a=0;a<d.length;a++)t.on(d[a],this.emit.bind(this,d[a]));return this._read=function(e){g("wrapped _read",e),i&&(i=!1,t.resume())},this},Object.defineProperty(r.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),r._fromList=E}.call(this,C("c8ba"),C("4362"))},b19a:function(e,h,t){"use strict";var n=t("966d"),r=Object.keys||function(e){var t,n=[];for(t in e)n.push(t);return n},e=(e.exports=l,Object.create(t("3a7c"))),i=(e.inherits=t("3fb5"),t("ad71")),a=t("dc14");e.inherits(l,i);for(var o=r(a.prototype),s=0;s<o.length;s++){var d=o[s];l.prototype[d]||(l.prototype[d]=a.prototype[d])}function l(e){if(!(this instanceof l))return new l(e);i.call(this,e),a.call(this,e),e&&!1===e.readable&&(this.readable=!1),e&&!1===e.writable&&(this.writable=!1),this.allowHalfOpen=!0,e&&!1===e.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",f)}function f(){this.allowHalfOpen||this._writableState.ended||n.nextTick(u,this)}function u(e){e.end()}Object.defineProperty(l.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(l.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&this._readableState.destroyed&&this._writableState.destroyed},set:function(e){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e)}}),l.prototype._destroy=function(e,t){this.push(null),this.end(),n.nextTick(t,e)}},dc14:function(l,e,S){"use strict";!function(e,t){var c=S("966d");function u(a){var o=this;this.next=null,this.entry=null,this.finish=function(){var e=o,t=a,n=void 0,r=e.entry;for(e.entry=null;r;){var i=r.callback;t.pendingcb--,i(n),r=r.next}t.corkedRequestsFree?t.corkedRequestsFree.next=e:t.corkedRequestsFree=e}}l.exports=i;var a,b=!e.browser&&-1<["v0.10","v0.9."].indexOf(e.version.slice(0,5))?setImmediate:c.nextTick,e=(i.WritableState=r,Object.create(S("3a7c"))),o=(e.inherits=S("3fb5"),{deprecate:S("b7d1")}),s=S("429b"),p=S("a8f0").Buffer,g=t.Uint8Array||function(){};var n,t=S("4681");function w(){}function r(e,h){a=a||S("b19a");var t=h instanceof a,n=(this.objectMode=!!(e=e||{}).objectMode,t&&(this.objectMode=this.objectMode||!!e.writableObjectMode),e.highWaterMark),r=e.writableHighWaterMark,i=this.objectMode?16:16384,n=(this.highWaterMark=n||0===n?n:t&&(r||0===r)?r:i,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,(this.destroyed=!1)===e.decodeStrings);this.decodeStrings=!n,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){e=e,n=(t=h)._writableState,r=n.sync,i=n.writecb;var t,n,r,i,a=n;{var o,s,d,l;(a.writing=!1,a.writecb=null,a.length-=a.writelen,a.writelen=0,e)?(a=t,s=r,d=e,l=i,--(o=n).pendingcb,s?(c.nextTick(l,d),c.nextTick(f,a,o),a._writableState.errorEmitted=!0,a.emit("error",d)):(l(d),a._writableState.errorEmitted=!0,a.emit("error",d),f(a,o))):((e=v(n))||n.corked||n.bufferProcessing||!n.bufferedRequest||_(t,n),r?b(m,t,n,e,i):m(t,n,e,i))}},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new u(this)}function i(e){if(a=a||S("b19a"),!(n.call(i,this)||this instanceof a))return new i(e);this._writableState=new r(e,this),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),s.call(this)}function y(e,t,n,r,i,a){n||(o=r,d=i,o=(s=t).objectMode||!1===s.decodeStrings||"string"!=typeof o?o:p.from(o,d),r!==o&&(n=!0,i="buffer",r=o));var o,s=t.objectMode?1:r.length,d=(t.length+=s,t.length<t.highWaterMark);return d||(t.needDrain=!0),t.writing||t.corked?(o=t.lastBufferedRequest,t.lastBufferedRequest={chunk:r,encoding:i,isBuf:n,callback:a,next:null},o?o.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1):h(e,t,!1,s,r,i,a),d}function h(e,t,n,r,i,a,o){t.writelen=r,t.writecb=o,t.writing=!0,t.sync=!0,n?e._writev(i,t.onwrite):e._write(i,a,t.onwrite),t.sync=!1}function m(e,t,n,r){var i;n||(n=e,0===(i=t).length&&i.needDrain&&(i.needDrain=!1,n.emit("drain"))),t.pendingcb--,r(),f(e,t)}function _(e,t){t.bufferProcessing=!0;var n=t.bufferedRequest;if(e._writev&&n&&n.next){for(var r=t.bufferedRequestCount,i=new Array(r),r=t.corkedRequestsFree,a=(r.entry=n,0),o=!0;n;)(i[a]=n).isBuf||(o=!1),n=n.next,a+=1;i.allBuffers=o,h(e,t,!0,t.length,i,"",r.finish),t.pendingcb++,t.lastBufferedRequest=null,r.next?(t.corkedRequestsFree=r.next,r.next=null):t.corkedRequestsFree=new u(t),t.bufferedRequestCount=0}else{for(;n;){var s=n.chunk,d=n.encoding,l=n.callback;if(h(e,t,!1,t.objectMode?1:s.length,s,d,l),n=n.next,t.bufferedRequestCount--,t.writing)break}null===n&&(t.lastBufferedRequest=null)}t.bufferedRequest=n,t.bufferProcessing=!1}function v(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function d(t,n){t._final(function(e){n.pendingcb--,e&&t.emit("error",e),n.prefinished=!0,t.emit("prefinish"),f(t,n)})}function f(e,t){var n,r,i=v(t);return i&&(n=e,(r=t).prefinished||r.finalCalled||("function"==typeof n._final?(r.pendingcb++,r.finalCalled=!0,c.nextTick(d,n,r)):(r.prefinished=!0,n.emit("prefinish"))),0===t.pendingcb&&(t.finished=!0,e.emit("finish"))),i}e.inherits(i,s),r.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t};try{Object.defineProperty(r.prototype,"buffer",{get:o.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(n=Function.prototype[Symbol.hasInstance],Object.defineProperty(i,Symbol.hasInstance,{value:function(e){return!!n.call(this,e)||this===i&&e&&e._writableState instanceof r}})):n=function(e){return e instanceof this},i.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},i.prototype.write=function(e,t,n){var r,h,f,i,a,o,s,d=this._writableState,u=!1,l=!d.objectMode&&(l=e,p.isBuffer(l)||l instanceof g);return l&&!p.isBuffer(e)&&(s=e,e=p.from(s)),"function"==typeof t&&(n=t,t=null),t=l?"buffer":t||d.defaultEncoding,"function"!=typeof n&&(n=w),d.ended?(s=this,a=n,o=new Error("write after end"),s.emit("error",o),c.nextTick(a,o)):(l||(a=this,o=d,h=n,i=!(f=!0),null===(r=e)?i=new TypeError("May not write null values to stream"):"string"==typeof r||void 0===r||o.objectMode||(i=new TypeError("Invalid non-string/buffer chunk")),i&&(a.emit("error",i),c.nextTick(h,i),f=!1),f))&&(d.pendingcb++,u=y(this,d,l,e,t,n)),u},i.prototype.cork=function(){this._writableState.corked++},i.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.finished||e.bufferProcessing||!e.bufferedRequest||_(this,e))},i.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(-1<["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())))throw new TypeError("Unknown encoding: "+e);return this._writableState.defaultEncoding=e,this},Object.defineProperty(i.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),i.prototype._write=function(e,t,n){n(new Error("_write() is not implemented"))},i.prototype._writev=null,i.prototype.end=function(e,t,n){var r=this._writableState;"function"==typeof e?(n=e,t=e=null):"function"==typeof t&&(n=t,t=null),null!=e&&this.write(e,t),r.corked&&(r.corked=1,this.uncork()),r.ending||r.finished||(e=this,t=n,(n=r).ending=!0,f(e,n),t&&(n.finished?c.nextTick(t):e.once("finish",t)),n.ended=!0,e.writable=!1)},Object.defineProperty(i.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}}),i.prototype.destroy=t.destroy,i.prototype._undestroy=t.undestroy,i.prototype._destroy=function(e,t){this.end(),t(e)}}.call(this,S("4362"),S("c8ba"))},e372:function(e,t,n){(((t=e.exports=n("ad71")).Stream=t).Readable=t).Writable=n("dc14"),t.Duplex=n("b19a"),t.Transform=n("27bf"),t.PassThrough=n("780f")}}]);