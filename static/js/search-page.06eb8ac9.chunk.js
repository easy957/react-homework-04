(self.webpackChunkreact_homework_04=self.webpackChunkreact_homework_04||[]).push([[855],{308:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return L}});var r=o(885),s=o(718),n=o(791),i=o(131),a=o.n(i),l=o(933),u=o(501),c=o(871),p=o(502),h="SearchPage_Form__jaHC9",d="SearchPage_Input__L6-sw",f="SearchPage_Button__O6UmO",v="SearchPage_List__ksOmQ",m="SearchPage_Link__-TnH0",g="SearchPage_Placeholder__-bpst",y=o(184);function L(e){var t=e.setPrevLocation,o=(0,u.lr)(),i=(0,r.Z)(o,2),L=i[0],b=i[1],_=L.get("query"),P=(0,l.useInfiniteQuery)(["search",_],p.ld,{getNextPageParam:function(e,t){return t.length<t[0].total_pages&&(null===e||void 0===e?void 0:e.page)+1},enabled:!!_}),w=P.data,S=P.fetchNextPage,O=P.hasNextPage,k=P.isLoading,C=(0,c.TH)();(0,n.useEffect)((function(){t(C)}),[C,t]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("form",{className:h,onSubmit:function(e){e.preventDefault(),b({query:e.target.elements.query.value})},children:[(0,y.jsx)("input",{className:d,type:"text",name:"query"}),(0,y.jsx)("button",{className:f,type:"submit",children:"Search"})]}),(0,y.jsxs)(a(),{pageStart:0,loadMore:S,hasMore:O,initialLoad:!1,children:[0===(null===w||void 0===w?void 0:w.pages[0].results.length)&&(0,y.jsx)("div",{className:g,children:"Nothing found."}),(null===w||void 0===w?void 0:w.pages)&&(0,y.jsx)("ul",{className:v,children:w.pages.map((function(e){return null===e||void 0===e?void 0:e.results.map((function(e){var t,o;return(0,y.jsx)("li",{children:(0,y.jsxs)(u.rU,{className:m,to:"/movie/".concat(e.id),children:[e.original_title," ",(0,y.jsxs)("i",{children:["(",(o=null!==(t=e.first_air_date)&&void 0!==t?t:e.release_date,new Date(o).getFullYear()),")"]})]})},e.id)}))}))})||(0,y.jsx)("div",{className:g,children:"Your results will be here..."}),k&&(0,y.jsx)(s.Z,{})]})]})}},888:function(e,t,o){"use strict";var r=o(47);function s(){}function n(){}n.resetWarningCache=s,e.exports=function(){function e(e,t,o,s,n,i){if(i!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:s};return o.PropTypes=o,o}},7:function(e,t,o){e.exports=o(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},566:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),s=o(791),n=a(s),i=a(o(7));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.scrollListener=o.scrollListener.bind(o),o.eventListenerOptions=o.eventListenerOptions.bind(o),o.mousewheelListener=o.mousewheelListener.bind(o),o}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}},{key:"componentDidUpdate",value:function(){if(this.props.isReverse&&this.loadMore){var e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}},{key:"componentWillUnmount",value:function(){this.detachScrollListener(),this.detachMousewheelListener()}},{key:"isPassiveSupported",value:function(){var e=!1,t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch(o){}return e}},{key:"eventListenerOptions",value:function(){this.props.useCapture;return this.isPassiveSupported()?{useCapture:this.props.useCapture,passive:!0}:{passive:!1}}},{key:"setDefaultLoader",value:function(e){this.defaultLoader=e}},{key:"detachMousewheelListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}},{key:"detachScrollListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}},{key:"getParentElement",value:function(e){var t=this.props.getScrollParent&&this.props.getScrollParent();return null!=t?t:e&&e.parentNode}},{key:"filterProps",value:function(e){return e}},{key:"attachScrollListener",value:function(){var e=this.getParentElement(this.scrollComponent);if(this.props.hasMore&&e){var t=window;!1===this.props.useWindow&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}}},{key:"mousewheelListener",value:function(e){1!==e.deltaY||this.isPassiveSupported()||e.preventDefault()}},{key:"scrollListener",value:function(){var e=this.scrollComponent,t=window,o=this.getParentElement(e),r=void 0;if(this.props.useWindow){var s=document.documentElement||document.body.parentNode||document.body,n=void 0!==t.pageYOffset?t.pageYOffset:s.scrollTop;r=this.props.isReverse?n:this.calculateOffset(e,n)}else r=this.props.isReverse?o.scrollTop:e.scrollHeight-o.scrollTop-o.clientHeight;r<Number(this.props.threshold)&&e&&null!==e.offsetParent&&(this.detachScrollListener(),this.beforeScrollHeight=o.scrollHeight,this.beforeScrollTop=o.scrollTop,"function"===typeof this.props.loadMore&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}},{key:"calculateOffset",value:function(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}},{key:"calculateTopPosition",value:function(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}},{key:"render",value:function(){var e=this,t=this.filterProps(this.props),o=t.children,r=t.element,s=t.hasMore,i=(t.initialLoad,t.isReverse),a=t.loader,l=(t.loadMore,t.pageStart,t.ref),u=(t.threshold,t.useCapture,t.useWindow,t.getScrollParent,function(e,t){var o={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o}(t,["children","element","hasMore","initialLoad","isReverse","loader","loadMore","pageStart","ref","threshold","useCapture","useWindow","getScrollParent"]));u.ref=function(t){e.scrollComponent=t,l&&l(t)};var c=[o];return s&&(a?i?c.unshift(a):c.push(a):this.defaultLoader&&(i?c.unshift(this.defaultLoader):c.push(this.defaultLoader))),n.default.createElement(r,u,c)}}]),t}(s.Component);l.propTypes={children:i.default.node.isRequired,element:i.default.node,hasMore:i.default.bool,initialLoad:i.default.bool,isReverse:i.default.bool,loader:i.default.node,loadMore:i.default.func.isRequired,pageStart:i.default.number,ref:i.default.func,getScrollParent:i.default.func,threshold:i.default.number,useCapture:i.default.bool,useWindow:i.default.bool},l.defaultProps={element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null},t.default=l,e.exports=t.default},131:function(e,t,o){e.exports=o(566)}}]);
//# sourceMappingURL=search-page.06eb8ac9.chunk.js.map