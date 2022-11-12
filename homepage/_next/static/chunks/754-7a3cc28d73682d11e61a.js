(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[754],{8771:function(e,t,r){"use strict";var n=r(1682);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e,t){var r=s.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=a(a({},n),e));var o=n=a(a({},n),t);if(o.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(o.suspense)return r(o);n.loadableGenerated&&delete(n=a(a({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,l(r,n);delete n.ssr}return r(n)};i(r(7294));var s=i(r(4860));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},1083:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},4860:function(e,t,r){"use strict";var n=r(2553),o=r(2012),a=r(1682);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){i=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(i)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,d=(c=r(7294))&&c.__esModule?c:{default:c},f=r(7161),p=r(1083);var b=[],h=[],y=!1;function v(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var m=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i(i({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function g(e){return function(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=d.default.lazy(r.loader));var n=null;function o(){if(!n){var t=new m(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!y&&"function"===typeof r.webpack&&!r.suspense){var a=r.webpack();h.push((function(e){var t,r=l(a);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(s){r.e(s)}finally{r.f()}}))}var s=r.suspense?function(e,t){return d.default.createElement(r.lazy,i(i({},e),{},{ref:t}))}:function(e,t){o();var a=d.default.useContext(p.LoadableContext),s=f.useSubscription(n);return d.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),d.default.useMemo((function(){return s.loading||s.error?d.default.createElement(r.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:n.retry}):s.loaded?d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(s.loaded),e):null}),[e,s])};return s.preload=function(){return!r.suspense&&o()},s.displayName="LoadableComponent",d.default.forwardRef(s)}(v,e)}function O(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return O(e,t)}))}g.preloadAll=function(){return new Promise((function(e,t){O(b).then(e,t)}))},g.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return y=!0,t()};O(h,e).then(r,r)}))},window.__NEXT_PRELOADREADY=g.preloadReady;var _=g;t.default=_},5022:function(){},5152:function(e,t,r){e.exports=r(8771)},117:function(e,t,r){"use strict";r.r(t),r.d(t,{Tab:function(){return F},TabList:function(){return E},TabPanel:function(){return z},Tabs:function(){return N},resetIdCounter:function(){return h}});var n=r(7294);function o(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var a=o("Tab"),s=o("TabList"),i=o("TabPanel");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){return n.Children.map(e,(function(e){return null===e?null:function(e){return a(e)||s(e)||i(e)}(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children?(0,n.cloneElement)(e,l({},e.props,{children:u(e.props.children,t)})):e}))}function c(e,t){return n.Children.forEach(e,(function(e){null!==e&&(a(e)||i(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children&&(s(e)&&t(e),c(e.props.children,t)))}))}function d(e){var t,r,n="";if("string"===typeof e||"number"===typeof e)n+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=d(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function f(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=d(e))&&(n&&(n+=" "),n+=t);return n}var p=0;function b(){return"react-tabs-"+p++}function h(){p=0}function y(e){var t=0;return c(e,(function(e){a(e)&&t++})),t}var v,m=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys"];function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){return e&&"getAttribute"in e}function T(e){return _(e)&&e.getAttribute("data-rttab")}function C(e){return _(e)&&"true"===e.getAttribute("aria-disabled")}var j=function(e){var t,r;function o(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).tabNodes=[],t.handleKeyDown=function(e){var r=t.props,n=r.direction,o=r.disableUpDownKeys;if(t.isTabFromContainer(e.target)){var a=t.props.selectedIndex,s=!1,i=!1;32!==e.keyCode&&13!==e.keyCode||(s=!0,i=!1,t.handleClick(e)),37===e.keyCode||!o&&38===e.keyCode?(a="rtl"===n?t.getNextTab(a):t.getPrevTab(a),s=!0,i=!0):39===e.keyCode||!o&&40===e.keyCode?(a="rtl"===n?t.getPrevTab(a):t.getNextTab(a),s=!0,i=!0):35===e.keyCode?(a=t.getLastTab(),s=!0,i=!0):36===e.keyCode&&(a=t.getFirstTab(),s=!0,i=!0),s&&e.preventDefault(),i&&t.setSelected(a,e)}},t.handleClick=function(e){var r=e.target;do{if(t.isTabFromContainer(r)){if(C(r))return;var n=[].slice.call(r.parentNode.children).filter(T).indexOf(r);return void t.setSelected(n,e)}}while(null!=(r=r.parentNode))},t}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,O(t,r);var l=o.prototype;return l.setSelected=function(e,t){if(!(e<0||e>=this.getTabsCount())){var r=this.props;(0,r.onSelect)(e,r.selectedIndex,t)}},l.getNextTab=function(e){for(var t=this.getTabsCount(),r=e+1;r<t;r++)if(!C(this.getTab(r)))return r;for(var n=0;n<e;n++)if(!C(this.getTab(n)))return n;return e},l.getPrevTab=function(e){for(var t=e;t--;)if(!C(this.getTab(t)))return t;for(t=this.getTabsCount();t-->e;)if(!C(this.getTab(t)))return t;return e},l.getFirstTab=function(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!C(this.getTab(t)))return t;return null},l.getLastTab=function(){for(var e=this.getTabsCount();e--;)if(!C(this.getTab(e)))return e;return null},l.getTabsCount=function(){return y(this.props.children)},l.getPanelsCount=function(){return function(e){var t=0;return c(e,(function(e){i(e)&&t++})),t}(this.props.children)},l.getTab=function(e){return this.tabNodes["tabs-"+e]},l.getChildren=function(){var e=this,t=0,r=this.props,o=r.children,l=r.disabledTabClassName,c=r.focus,d=r.forceRenderTabPanel,f=r.selectedIndex,p=r.selectedTabClassName,h=r.selectedTabPanelClassName,y=r.environment;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var m=this.tabIds.length-this.getTabsCount();m++<0;)this.tabIds.push(b()),this.panelIds.push(b());return u(o,(function(r){var o=r;if(s(r)){var b=0,m=!1;null==v&&function(e){var t=e||("undefined"!==typeof window?window:void 0);try{v=!("undefined"===typeof t||!t.document||!t.document.activeElement)}catch(r){v=!1}}(y),v&&(m=n.Children.toArray(r.props.children).filter(a).some((function(t,r){var n=y||("undefined"!==typeof window?window:void 0);return n&&n.document.activeElement===e.getTab(r)}))),o=(0,n.cloneElement)(r,{children:u(r.props.children,(function(t){var r="tabs-"+b,o=f===b,a={tabRef:function(t){e.tabNodes[r]=t},id:e.tabIds[b],panelId:e.panelIds[b],selected:o,focus:o&&(c||m)};return p&&(a.selectedClassName=p),l&&(a.disabledClassName=l),b++,(0,n.cloneElement)(t,a)}))})}else if(i(r)){var g={id:e.panelIds[t],tabId:e.tabIds[t],selected:f===t};d&&(g.forceRender=d),h&&(g.selectedClassName=h),t++,o=(0,n.cloneElement)(r,g)}return o}))},l.isTabFromContainer=function(e){if(!T(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1},l.render=function(){var e=this,t=this.props,r=(t.children,t.className),o=(t.disabledTabClassName,t.domRef),a=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,t.environment,t.disableUpDownKeys,function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(t,m));return n.createElement("div",g({},a,{className:f(r),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,o&&o(t)},"data-rttabs":!0}),this.getChildren())},o}(n.Component);j.defaultProps={className:"react-tabs",focus:!1},j.propTypes={};var P=["children","defaultIndex","defaultFocus"];function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=function(e){var t,r;function o(t){var r;return(r=e.call(this,t)||this).handleSelected=function(e,t,n){var o=r.props.onSelect,a=r.state.mode;if("function"!==typeof o||!1!==o(e,t,n)){var s={focus:"keydown"===n.type};1===a&&(s.selectedIndex=e),r.setState(s)}},r.state=o.copyPropsToState(r.props,{},t.defaultFocus),r}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,w(t,r),o.getDerivedStateFromProps=function(e,t){return o.copyPropsToState(e,t)},o.getModeFromProps=function(e){return null===e.selectedIndex?1:0},o.copyPropsToState=function(e,t,r){void 0===r&&(r=!1);var n={focus:r,mode:o.getModeFromProps(e)};if(1===n.mode){var a=Math.max(0,y(e.children)-1),s=null;s=null!=t.selectedIndex?Math.min(t.selectedIndex,a):e.defaultIndex||0,n.selectedIndex=s}return n},o.prototype.render=function(){var e=this.props,t=e.children,r=(e.defaultIndex,e.defaultFocus,function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,P)),o=this.state,a=o.focus,s=o.selectedIndex;return r.focus=a,r.onSelect=this.handleSelected,null!=s&&(r.selectedIndex=s),n.createElement(j,r,t)},o}(n.Component);N.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1},N.propTypes={},N.tabsRole="Tabs";var I=["children","className"];function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){var t,r;function o(){return e.apply(this,arguments)||this}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,x(t,r),o.prototype.render=function(){var e=this.props,t=e.children,r=e.className,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,I);return n.createElement("ul",k({},o,{className:f(r),role:"tablist"}),t)},o}(n.Component);E.defaultProps={className:"react-tabs__tab-list"},E.propTypes={},E.tabsRole="TabList";var D=["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"];function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A="react-tabs__tab",F=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,R(t,r);var a=o.prototype;return a.componentDidMount=function(){this.checkFocus()},a.componentDidUpdate=function(){this.checkFocus()},a.checkFocus=function(){var e=this.props,t=e.selected,r=e.focus;t&&r&&this.node.focus()},a.render=function(){var e,t=this,r=this.props,o=r.children,a=r.className,s=r.disabled,i=r.disabledClassName,l=(r.focus,r.id),u=r.panelId,c=r.selected,d=r.selectedClassName,p=r.tabIndex,b=r.tabRef,h=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(r,D);return n.createElement("li",S({},h,{className:f(a,(e={},e[d]=c,e[i]=s,e)),ref:function(e){t.node=e,b&&b(e)},role:"tab",id:l,"aria-selected":c?"true":"false","aria-disabled":s?"true":"false","aria-controls":u,tabIndex:p||(c?"0":null),"data-rttab":!0}),o)},o}(n.Component);F.defaultProps={className:A,disabledClassName:A+"--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:A+"--selected"},F.propTypes={},F.tabsRole="Tab";var M=["children","className","forceRender","id","selected","selectedClassName","tabId"];function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var U="react-tabs__tab-panel",z=function(e){var t,r;function o(){return e.apply(this,arguments)||this}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,K(t,r),o.prototype.render=function(){var e,t=this.props,r=t.children,o=t.className,a=t.forceRender,s=t.id,i=t.selected,l=t.selectedClassName,u=t.tabId,c=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(t,M);return n.createElement("div",L({},c,{className:f(o,(e={},e[l]=i,e)),role:"tabpanel",id:s,"aria-labelledby":u}),a||i?r:null)},o}(n.Component);z.defaultProps={className:U,forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},z.propTypes={},z.tabsRole="TabPanel"}}]);