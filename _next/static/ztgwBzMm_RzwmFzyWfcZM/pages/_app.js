(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{254:function(t,e,n){t.exports=n(502)},501:function(t,e,n){__NEXT_REGISTER_PAGE("/_app",function(){return t.exports=n(797),{page:t.exports.default}})},502:function(t,e,n){"use strict";var r=n(93),o=n(33);Object.defineProperty(e,"__esModule",{value:!0}),e.createUrl=_,e.Container=e.default=void 0;var u=o(n(139)),a=o(n(140)),i=o(n(503)),c=o(n(115)),f=o(n(47)),l=o(n(48)),p=o(n(82)),s=o(n(83)),y=o(n(84)),d=o(n(74)),h=r(n(0)),b=o(n(3)),v=o(n(282)),m=n(98),w=n(142),O=function(t){function e(){return(0,f.default)(this,e),(0,p.default)(this,(0,s.default)(e).apply(this,arguments))}var n;return(0,y.default)(e,t),(0,l.default)(e,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,w.makePublicRouterInstance)(this.props.router),_containerProps:(0,c.default)({},this.props)}}},{key:"componentDidCatch",value:function(t){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=_(e);return h.default.createElement(g,null,h.default.createElement(n,(0,i.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:(n=(0,a.default)(u.default.mark(function t(e){var n,r,o;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,e.router,r=e.ctx,t.next=3,(0,m.loadGetInitialProps)(n,r);case 3:return o=t.sent,t.abrupt("return",{pageProps:o});case 5:case"end":return t.stop()}},t,this)})),function(t){return n.apply(this,arguments)})}]),e}(h.Component);e.default=O,(0,d.default)(O,"childContextTypes",{_containerProps:b.default.any,headManager:b.default.object,router:b.default.object}),(0,d.default)(O,"displayName","App");var g=function(t){function e(){return(0,f.default)(this,e),(0,p.default)(this,(0,s.default)(e).apply(this,arguments))}return(0,y.default)(e,t),(0,l.default)(e,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"shouldComponentUpdate",value:function(t){return!(0,v.default)(this.props,t)}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var t=this.context._containerProps.hash;if(t){var e=document.getElementById(t);e&&setTimeout(function(){return e.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),e}(h.Component);e.Container=g,(0,d.default)(g,"contextTypes",{_containerProps:b.default.any});var P=(0,m.execOnce)(function(){0});function _(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return P(),r},get pathname(){return P(),e},get asPath(){return P(),n},back:function(){P(),t.back()},push:function(e,n){return P(),t.push(e,n)},pushTo:function(e,n){P();var r=n?e:null,o=n||e;return t.push(r,o)},replace:function(e,n){return P(),t.replace(e,n)},replaceTo:function(e,n){P();var r=n?e:null,o=n||e;return t.replace(r,o)}}}},503:function(t,e,n){var r=n(144);function o(){return t.exports=o=r||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}t.exports=o},797:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),u=n(254),a=n.n(u),i=n(14),c=n(2),f=n.n(c),l=n(163),p=n.n(l),s=n(246),y=n.n(s),d=n(91);function h(t){return function(e){var n=e.dispatch,r=e.getState;return function(e){return function(o){return"function"==typeof o?o(n,r,t):e(o)}}}}var b=h();b.withExtraArgument=h;var v=b,m=n(8),w=n(18),O=n(30),g=n(52),P=n(24),_=n(40),j=n(70),x=Object(d.c)({core:m.e,portfolio:w.a,exchanges:g.a,apiKeys:O.d,priceData:P.d,modals:_.b}),S=d.d,k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(j.e)()||t,n=Object(d.e)(x,e,S(Object(d.a)(v)));return n.subscribe(y()(function(){var t=n.getState(),e=t.portfolio,r=t.core,o=t.apiKeys,u=t.priceData;Object(j.f)({portfolio:e,core:p()(r,["init","quoteSymbol"]),priceData:p()(u,["timeframe"]),apiKeys:o})},500)),n};function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(){return(C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){I(t,e,n[e])})}return t}function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function R(t,e,n,r,o,u,a){try{var i=t[u](a),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function D(t,e){return!e||"object"!==E(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function q(t,e,n){return e&&U(t.prototype,e),n&&U(t,n),t}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var G="undefined"==typeof window,H="__REDUX_STORE__";function K(t){return G?k(t):(window[H]||(window[H]=k(t)),window[H])}n(652);function J(t){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function X(t,e){return!e||"object"!==J(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function B(t){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var z,F=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),X(this,B(e).apply(this,arguments))}var n,r,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(e,a.a),n=e,(r=[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps,r=t.reduxStore;return o.a.createElement(u.Container,null,o.a.createElement(i.a,{store:r},o.a.createElement(e,n)))}}])&&N(n.prototype,r),c&&N(n,c),e}();e.default=(z=F,function(t){var e,n;function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=D(this,M(r).call(this,t))).reduxStore=K(t.initialReduxState),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(r,o.a.Component),q(r,null,[{key:"getInitialProps",value:(e=f.a.mark(function t(e){var n,r;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=K(),e.ctx.reduxStore=n,r={},!z.getInitialProps){t.next=7;break}return t.next=6,z.getInitialProps(e);case 6:r=t.sent;case 7:return t.abrupt("return",T({},r,{initialReduxState:n.getState()}));case 8:case"end":return t.stop()}},t,this)}),n=function(){var t=this,n=arguments;return new Promise(function(r,o){var u=e.apply(t,n);function a(t){R(u,r,o,a,i,"next",t)}function i(t){R(u,r,o,a,i,"throw",t)}a(void 0)})},function(t){return n.apply(this,arguments)})}]),q(r,[{key:"render",value:function(){return o.a.createElement(z,C({},this.props,{reduxStore:this.reduxStore}))}}]),r}())}},[[501,1,0,2]]]);