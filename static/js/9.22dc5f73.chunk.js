(this.webpackJsonpbackoffice=this.webpackJsonpbackoffice||[]).push([[9],{518:function(e,t,n){"use strict";var r=n(0);t.a=function(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},524:function(e,t,n){"use strict";var r=n(9),i=n(13),o=n(470),a=n(485),c=n(487),s=n(488),u=n(245),l=n(112),d=n(542),p=n.n(d),f=n(20),h=n(0),b=n(510),m=n(80),j=n(79),v=n(544),g=n.n(v),O=n(543),x=n.n(O),y=n(1);function k(e){var t=e.images,n=e.onChange,d=e.maxNumber,v=void 0===d?8:d,O=e.multiple,k=void 0===O||O,C=e.title,w=void 0===C?null:C,E=e.titleButton,S=void 0===E?null:E,I=e.renderAvatar,B=void 0!==I&&I,_=e.altImage,R=void 0===_?null:_,L=e.positionButtonHeader,T=void 0===L||L,D=Object(f.a)(),P=Object(o.a)(D.breakpoints.down("md")),M=Object(h.useState)([]),z=Object(i.a)(M,2),N=z[0],A=z[1],U=Object(h.useState)(null),H=Object(i.a)(U,2),F=H[0],V=H[1],W=Object(h.useState)(null),K=Object(i.a)(W,2),G=K[0],q=K[1];function J(e){A(e),n(e)}function Q(e,t,n){return Object(y.jsxs)("div",{className:"image-item__btn-wrapper",children:[Object(y.jsx)(b.a,{sx:{color:m.a[500]},onClick:function(){return t(e)},"aria-label":"Atualizar",children:Object(y.jsx)(x.a,{sx:{fontSize:26}})}),Object(y.jsx)(b.a,{sx:{color:j.a[500]},onClick:function(){return n(e)},"aria-label":"Remover",children:Object(y.jsx)(g.a,{sx:{fontSize:26}})})]})}function X(e,t,n){return B&&!k?Object(y.jsx)(a.a,{container:!0,justifyContent:"center",alignItems:"center",textAlign:"center",sx:{mb:4},children:Object(y.jsx)(a.a,{item:!0,xs:12,sm:12,children:Object(y.jsx)("div",{style:{margin:"auto",border:1,borderWidth:1},children:null!==e&&e.length>0?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(c.a,{alt:R,src:e[0].dataUrl,sx:{width:100,height:100,margin:"auto"}}),Q(0,t,n)]}):Object(y.jsx)(c.a,{alt:R,src:null,sx:{width:100,height:100,margin:"auto"}})})})}):Object(y.jsx)(a.a,{container:!0,direction:"row",marginTop:2,children:null!==e&&(null===e||void 0===e?void 0:e.map((function(e,r){return Object(y.jsxs)(a.a,{item:!0,xs:4,sm:4,textAlign:"center",children:[Object(y.jsx)("img",{src:e.dataUrl,alt:"",width:"300",height:"180"}),Q(r,t,n)]},"iamge_item_".concat(r))})))})}function Y(e,t,n,i){return B&&i.length>0?null:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(a.a,{container:!0,alignItems:"center",justifyContent:"center",spacing:P?0:2,children:Object(y.jsx)(a.a,{item:!0,textAlign:"center",alignItems:"center",justifyContent:"center",xs:12,sm:12,marginBottom:1,style:{paddingTop:0},children:Object(y.jsx)("span",{children:null==F?Object(y.jsxs)("span",{children:["Somente imagens no formato ",Object(y.jsx)("strong",{children:".jpg"})]}):Object(y.jsx)("span",{children:F})})})}),Object(y.jsxs)(a.a,{container:!0,alignItems:"center",justifyContent:"center",spacing:P?0:2,children:[Object(y.jsx)(a.a,{item:!0,xs:12,sm:B&&!k?6:2,children:Object(y.jsx)(l.a,{children:Object(y.jsx)(s.a,Object(r.a)(Object(r.a)({fullWidth:!0,disabled:N.length===v,disableElevation:!0,size:"small",variant:"contained",color:"primary",onClick:e},n),{},{children:null==G?Object(y.jsx)(y.Fragment,{children:"Importar"}):Object(y.jsx)(y.Fragment,{children:G})}))})}),k&&Object(y.jsx)(a.a,{item:!0,xs:12,sm:2,children:Object(y.jsx)(l.a,{children:Object(y.jsx)(s.a,{fullWidth:!0,disableElevation:!0,size:"small",variant:"contained",color:"secondary",onClick:t,children:"Remover todas"})})}),Object(y.jsx)(a.a,{item:!0,xs:12,sm:12,children:Object(y.jsx)(u.a,{sx:{flexGrow:1},orientation:"horizontal"})})]})]})}return Object(h.useEffect)((function(){return V(w),q(S),A(t),function(){return A([])}}),[t]),Object(y.jsx)(p.a,{multiple:k,acceptType:["jpg"],value:N||[],onChange:function(e){return J(e)},maxNumber:v,dataURLKey:"dataUrl",children:function(e){var t=e.imageList,n=e.onImageUpload,r=e.onImageRemoveAll,i=e.onImageUpdate,o=e.onImageRemove,c=e.dragProps;return Object(y.jsxs)(a.a,{children:[T&&Y(n,r,c,t),X(t,i,o),!T&&Y(n,r,c,t)]})}})}k.defaultProps={maxNumber:8},t.a=k},525:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var r=n(39),i=n(58);function o(e){return a.apply(this,arguments)}function a(){return a=Object(i.a)(Object(r.a)().mark((function e(t){var n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],null==t){e.next=4;break}return e.next=4,t.map(function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var i,o,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.linkMedia);case 3:if(!(i=e.sent).ok){e.next=11;break}return e.next=7,i.blob();case 7:o=e.sent,(a=new FileReader).onloadend=function(){n.push({dataUrl:a.result})},a.readAsDataURL(o);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("Error download image: ".concat(e.t0.message," - ").concat(t.linkMedia));case 16:return e.abrupt("return",n);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}());case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))),a.apply(this,arguments)}function c(e,t){return s.apply(this,arguments)}function s(){return s=Object(i.a)(Object(r.a)().mark((function e(t,n){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t){e.next=3;break}return e.next=3,t.map(function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var i,o,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.linkMedia);case 3:if(!(i=e.sent).ok){e.next=11;break}return e.next=7,i.blob();case 7:o=e.sent,(a=new FileReader).onloadend=function(){null!=a.result&&n({dataUrl:a.result})},a.readAsDataURL(o);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("Error download async image: ".concat(e.t0.message," - ").concat(t.linkMedia));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}},527:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var r=n(0),i=n(12),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},a={onActivate:i.func,onAddUndo:i.func,onBeforeAddUndo:i.func,onBeforeExecCommand:i.func,onBeforeGetContent:i.func,onBeforeRenderUI:i.func,onBeforeSetContent:i.func,onBeforePaste:i.func,onBlur:i.func,onChange:i.func,onClearUndos:i.func,onClick:i.func,onContextMenu:i.func,onCopy:i.func,onCut:i.func,onDblclick:i.func,onDeactivate:i.func,onDirty:i.func,onDrag:i.func,onDragDrop:i.func,onDragEnd:i.func,onDragGesture:i.func,onDragOver:i.func,onDrop:i.func,onExecCommand:i.func,onFocus:i.func,onFocusIn:i.func,onFocusOut:i.func,onGetContent:i.func,onHide:i.func,onInit:i.func,onKeyDown:i.func,onKeyPress:i.func,onKeyUp:i.func,onLoadContent:i.func,onMouseDown:i.func,onMouseEnter:i.func,onMouseLeave:i.func,onMouseMove:i.func,onMouseOut:i.func,onMouseOver:i.func,onMouseUp:i.func,onNodeChange:i.func,onObjectResizeStart:i.func,onObjectResized:i.func,onObjectSelected:i.func,onPaste:i.func,onPostProcess:i.func,onPostRender:i.func,onPreProcess:i.func,onProgressState:i.func,onRedo:i.func,onRemove:i.func,onReset:i.func,onSaveContent:i.func,onSelectionChange:i.func,onSetAttrib:i.func,onSetContent:i.func,onShow:i.func,onSubmit:i.func,onUndo:i.func,onVisualAid:i.func,onSkinLoadError:i.func,onThemeLoadError:i.func,onModelLoadError:i.func,onPluginLoadError:i.func,onIconsLoadError:i.func,onLanguageLoadError:i.func},c=o({apiKey:i.string,id:i.string,inline:i.bool,init:i.object,initialValue:i.string,onEditorChange:i.func,value:i.string,tagName:i.string,cloudChannel:i.string,plugins:i.oneOfType([i.string,i.array]),toolbar:i.oneOfType([i.string,i.array]),disabled:i.bool,textareaName:i.string,tinymceScriptSrc:i.string,rollback:i.oneOfType([i.number,i.oneOf([!1])]),scriptLoading:i.shape({async:i.bool,defer:i.bool,delay:i.number})},a),s=function(e){return"function"===typeof e},u=function(e){return e in a},l=function(e){return e.substr(2)},d=function(e,t,n,r,i){return function(e,t,n,r,i,o,a){var c=Object.keys(i).filter(u),s=Object.keys(o).filter(u),d=c.filter((function(e){return void 0===o[e]})),p=s.filter((function(e){return void 0===i[e]}));d.forEach((function(e){var t=l(e),r=a[t];n(t,r),delete a[t]})),p.forEach((function(n){var i=r(e,n),o=l(n);a[o]=i,t(o,i)}))}(i,e.on.bind(e),e.off.bind(e),(function(t,n){return function(r){var i;return null===(i=t(n))||void 0===i?void 0:i(r,e)}}),t,n,r)},p=0,f=function(e){var t=Date.now();return e+"_"+Math.floor(1e9*Math.random())+ ++p+String(t)},h=function(e){return null!==e&&("textarea"===e.tagName.toLowerCase()||"input"===e.tagName.toLowerCase())},b=function(e){return"undefined"===typeof e||""===e?[]:Array.isArray(e)?e:e.split(" ")},m=function(e,t){void 0!==e&&(null!=e.mode&&"object"===typeof e.mode&&"function"===typeof e.mode.set?e.mode.set(t):e.setMode(t))},j=function(){return{listeners:[],scriptId:f("tiny-script"),scriptLoading:!1,scriptLoaded:!1}},v=function(){var e=j();return{load:function(t,n,r,i,o,a){var c=function(){return function(e,t,n,r,i,o){var a=t.createElement("script");a.referrerPolicy="origin",a.type="application/javascript",a.id=e,a.src=n,a.async=r,a.defer=i,a.addEventListener("load",(function e(){a.removeEventListener("load",e),o()})),t.head&&t.head.appendChild(a)}(e.scriptId,t,n,r,i,(function(){e.listeners.forEach((function(e){return e()})),e.scriptLoaded=!0}))};e.scriptLoaded?a():(e.listeners.push(a),e.scriptLoading||(e.scriptLoading=!0,o>0?setTimeout(c,o):c()))},reinitialize:function(){e=j()}}}(),g=n(531),O=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),x=function(){return x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},x.apply(this,arguments)},y=function(){var e,t,n;return(null===(n=null===(t=null===(e=Object(g.a)())||void 0===e?void 0:e.Env)||void 0===t?void 0:t.browser)||void 0===n?void 0:n.isIE())?"change keyup compositionend setcontent":"change input compositionend setcontent"},k=function(){return window.InputEvent&&"function"===typeof InputEvent.prototype.getTargetRanges?"beforeinput SelectionChange":"SelectionChange"},C=function(e){function t(t){var n,i,o,a=this;return(a=e.call(this,t)||this).rollbackTimer=void 0,a.valueCursor=void 0,a.rollbackChange=function(){var e=a.editor,t=a.props.value;e&&t&&t!==a.currentContent&&e.undoManager.ignore((function(){if(e.setContent(t),a.valueCursor&&(!a.inline||e.hasFocus()))try{e.selection.moveToBookmark(a.valueCursor)}catch(n){}})),a.rollbackTimer=void 0},a.handleBeforeInput=function(e){if(void 0!==a.props.value&&a.props.value===a.currentContent&&a.editor&&(!a.inline||a.editor.hasFocus))try{a.valueCursor=a.editor.selection.getBookmark(3)}catch(t){}},a.handleBeforeInputSpecial=function(e){"Enter"!==e.key&&"Backspace"!==e.key&&"Delete"!==e.key||a.handleBeforeInput(e)},a.handleEditorChange=function(e){var t=a.editor;if(t&&t.initialized){var n=t.getContent();void 0!==a.props.value&&a.props.value!==n&&!1!==a.props.rollback&&(a.rollbackTimer||(a.rollbackTimer=window.setTimeout(a.rollbackChange,"number"===typeof a.props.rollback?a.props.rollback:200))),n!==a.currentContent&&(a.currentContent=n,s(a.props.onEditorChange)&&a.props.onEditorChange(n,t))}},a.handleEditorChangeSpecial=function(e){"Backspace"!==e.key&&"Delete"!==e.key||a.handleEditorChange(e)},a.initialise=function(e){var t,n,r;void 0===e&&(e=0);var i=a.elementRef.current;if(i)if(function(e){if(!("isConnected"in Node.prototype)){for(var t=e,n=e.parentNode;null!=n;)n=(t=n).parentNode;return t===e.ownerDocument}return e.isConnected}(i)){var o=Object(g.a)();if(!o)throw new Error("tinymce should have been loaded into global scope");var c,u,l=x(x({},a.props.init),{selector:void 0,target:i,readonly:a.props.disabled,inline:a.inline,plugins:(c=null===(t=a.props.init)||void 0===t?void 0:t.plugins,u=a.props.plugins,b(c).concat(b(u))),toolbar:null!==(n=a.props.toolbar)&&void 0!==n?n:null===(r=a.props.init)||void 0===r?void 0:r.toolbar,setup:function(e){a.editor=e,a.bindHandlers({}),a.inline&&!h(i)&&e.once("PostRender",(function(t){e.setContent(a.getInitialValue(),{no_events:!0})})),a.props.init&&s(a.props.init.setup)&&a.props.init.setup(e)},init_instance_callback:function(e){var t,n,r=a.getInitialValue();a.currentContent=null!==(t=a.currentContent)&&void 0!==t?t:e.getContent(),a.currentContent!==r&&(a.currentContent=r,e.setContent(r),e.undoManager.clear(),e.undoManager.add(),e.setDirty(!1));var i=null!==(n=a.props.disabled)&&void 0!==n&&n;m(a.editor,i?"readonly":"design"),a.props.init&&s(a.props.init.init_instance_callback)&&a.props.init.init_instance_callback(e)}});a.inline||(i.style.visibility=""),h(i)&&(i.value=a.getInitialValue()),o.init(l)}else if(0===e)setTimeout((function(){return a.initialise(1)}),1);else{if(!(e<100))throw new Error("tinymce can only be initialised when in a document");setTimeout((function(){return a.initialise(e+1)}),100)}},a.id=a.props.id||f("tiny-react"),a.elementRef=r.createRef(),a.inline=null!==(o=null!==(n=a.props.inline)&&void 0!==n?n:null===(i=a.props.init)||void 0===i?void 0:i.inline)&&void 0!==o&&o,a.boundHandlers={},a}return O(t,e),t.prototype.componentDidUpdate=function(e){var t,n,r=this;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(e),this.editor.initialized)){if(this.currentContent=null!==(t=this.currentContent)&&void 0!==t?t:this.editor.getContent(),"string"===typeof this.props.initialValue&&this.props.initialValue!==e.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if("string"===typeof this.props.value&&this.props.value!==this.currentContent){var i=this.editor;i.undoManager.transact((function(){var e;if(!r.inline||i.hasFocus())try{e=i.selection.getBookmark(3)}catch(c){}var t=r.valueCursor;if(i.setContent(r.props.value),!r.inline||i.hasFocus())for(var n=0,o=[e,t];n<o.length;n++){var a=o[n];if(a)try{i.selection.moveToBookmark(a),r.valueCursor=a;break}catch(c){}}}))}if(this.props.disabled!==e.disabled){var o=null!==(n=this.props.disabled)&&void 0!==n&&n;m(this.editor,o?"readonly":"design")}}},t.prototype.componentDidMount=function(){var e,t,n,r,i,o;null!==Object(g.a)()?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&v.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),null!==(t=null===(e=this.props.scriptLoading)||void 0===e?void 0:e.async)&&void 0!==t&&t,null!==(r=null===(n=this.props.scriptLoading)||void 0===n?void 0:n.defer)&&void 0!==r&&r,null!==(o=null===(i=this.props.scriptLoading)||void 0===i?void 0:i.delay)&&void 0!==o?o:0,this.initialise)},t.prototype.componentWillUnmount=function(){var e=this,t=this.editor;t&&(t.off(y(),this.handleEditorChange),t.off(k(),this.handleBeforeInput),t.off("keypress",this.handleEditorChangeSpecial),t.off("keydown",this.handleBeforeInputSpecial),t.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach((function(n){t.off(n,e.boundHandlers[n])})),this.boundHandlers={},t.remove(),this.editor=void 0)},t.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},t.prototype.renderInline=function(){var e=this.props.tagName,t=void 0===e?"div":e;return r.createElement(t,{ref:this.elementRef,id:this.id})},t.prototype.renderIframe=function(){return r.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},t.prototype.getScriptSrc=function(){if("string"===typeof this.props.tinymceScriptSrc)return this.props.tinymceScriptSrc;var e=this.props.cloudChannel,t=this.props.apiKey?this.props.apiKey:"no-api-key";return"https://cdn.tiny.cloud/1/".concat(t,"/tinymce/").concat(e,"/tinymce.min.js")},t.prototype.getInitialValue=function(){return"string"===typeof this.props.initialValue?this.props.initialValue:"string"===typeof this.props.value?this.props.value:""},t.prototype.bindHandlers=function(e){var t=this;if(void 0!==this.editor){d(this.editor,e,this.props,this.boundHandlers,(function(e){return t.props[e]}));var n=function(e){return void 0!==e.onEditorChange||void 0!==e.value},r=n(e),i=n(this.props);!r&&i?(this.editor.on(y(),this.handleEditorChange),this.editor.on(k(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):r&&!i&&(this.editor.off(y(),this.handleEditorChange),this.editor.off(k(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},t.propTypes=c,t.defaultProps={cloudChannel:"6"},t}(r.Component)},530:function(e,t,n){"use strict";var r=n(527),i=n(1);t.a=function(e){var t=e.textValue,n=e.loadBody,o=e.setTextEditor;return Object(i.jsx)(r.a,{value:t,onInit:function(e,t){return n(t)},onEditorChange:function(e){o(e)},apiKey:"hhqwqyzhc36g4i368okwxv0e2jhljh0gah9zjz4py90hpynw",init:{height:500,plugins:"print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons visualblocks",imagetools_cors_hosts:["picsum.photos"],toolbar:"bold italic underline strikethrough | fontselect fontsizeselect forecolor formatselect | alignleft aligncenter alignright alignjustify lineheight| outdent indent | numlist bullist | insertfile image media link | fullscreen  preview print |emoticons",fontsize_formats:"8pt 10pt 11pt 12pt 14pt 18pt 24pt",block_formats:"Bloco=div;Paragrafo=p;Header 1=h1;Header 2=h2;Header 3=h3;Preformatted=pre",content_style:"body { font-family:Arial,Helvetica,sans-serif; font-size:14pt }",image_caption:!0,image_advtab:!0,contextmenu:"link image imagetools table configurepermanentpen",a11y_advanced_options:!0,convert_urls:!0,preview_styles:!1,textcolor_rows:"4",line_height_formats:"1 1.1 1.2 1.5"}})}},531:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var r=function(){return"undefined"!==typeof window?window:e},i=function(){var e=r();return e&&e.tinymce?e.tinymce:null}}).call(this,n(114))},566:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(39),i=n(58),o=n(113),a=n(122),c="/api/v1/notice";function s(e){var t=e.page,n=void 0===t?1:t,s=e.pageSize,u=void 0===s?50:s,l=e.useCache,d=void 0!==l&&l;return function(){var e=Object(i.a)(Object(r.a)().mark((function e(t,i){var s,l,p;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="&useCache=".concat(d),e.prev=1,l="".concat(c,"/filter?pageSize=").concat(u,"&page=").concat(n).concat(s),e.next=5,Object(o.a)(i()).get(l);case 5:return p=e.sent,e.next=8,t(Object(a.c)(p));case 8:return e.abrupt("return",p);case 11:return e.prev=11,e.t0=e.catch(1),console.error("Error Fetch Notice",e.t0.message),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()}function u(e){return function(){var t=Object(i.a)(Object(r.a)().mark((function t(n,i){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(o.a)(i()).post(c,e).then((function(e){return null===e||void 0===e?void 0:e.data}));case 3:return t.abrupt("return",!0);case 6:throw t.prev=6,t.t0=t.catch(0),console.error("Error Post Notice: ",t.t0.message),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e,n){return t.apply(this,arguments)}}()}},654:function(e,t,n){"use strict";n.r(t);var r=n(39),i=n(3),o=n(9),a=n(58),c=n(13),s=n(0),u=n(526),l=n(470),d=n(485),p=n(511),f=n(633),h=n(71),b=n(503),m=n(500),j=n(505),v=n(245),g=n(492),O=n(488),x=n(675),y=n(648),k=n(662),C=n(664),w=n(19),E=n(112),S=n(20),I=n(518),B=n(21),_=n(176),R=n(525),L=n(73),T=n(524),D=n(566),P=n(530),M=n(1);t.default=function(){var e=Object(S.a)(),t=Object(I.a)(),n=Object(s.useRef)(null),z=Object(l.a)(e.breakpoints.down("md")),N=Object(B.b)(),A=Object(w.e)(),U=Object(w.f)(),H=Object(B.c)((function(e){return e.notice})).items,F=Object(s.useState)({}),V=Object(c.a)(F,2),W=V[0],K=V[1],G=Object(s.useState)("1"),q=Object(c.a)(G,2),J=q[0],Q=q[1],X=Object(s.useState)(!1),Y=Object(c.a)(X,2),Z=Y[0],$=Y[1],ee=Object(s.useState)([]),te=Object(c.a)(ee,2),ne=te[0],re=te[1],ie=Object(s.useState)(""),oe=Object(c.a)(ie,2),ae=oe[0],ce=oe[1],se=Object(s.useState)(null),ue=Object(c.a)(se,2),le=ue[0],de=ue[1];function pe(e){re((function(t){return t.concat(e)}))}function fe(){return(fe=Object(a.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.b)(t,pe);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(e,t){K(Object(o.a)(Object(o.a)({},W),{},Object(i.a)({},e,t)))}function be(){return me.apply(this,arguments)}function me(){return(me=Object(a.a)(Object(r.a)().mark((function e(){var t,n,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=["title","resume"],de(null),n={},i=!0,t.map((function(e){["",null].includes(W[e])&&(n[e]="Preenchimento obrigat\xf3rio",de(Object(o.a)({},n)),N(Object(L.c)({message:"Os campos marcados com ( * ) s\xe3o de preenchimento obrigat\xf3rios"})),i=!1)})),!1!==i){e.next=7;break}return e.abrupt("return",!1);case 7:if(0!==ne.length){e.next=11;break}return i=!1,N(Object(L.c)({message:"\xc9 obrigat\xf3rio adicionar uma imagem!"})),e.abrupt("return",i);case 11:if(0!==ae.replace(/(<([^>]+)>)/g,"").trim().length){e.next=15;break}return i=!1,N(Object(L.c)({message:"\xc9 obrigat\xf3rio adicionar uma descri\xe7\xe3o para a campanha!"})),e.abrupt("return",i);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(s.useEffect)((function(){var e,t=null===(e=A.state)||void 0===e?void 0:e.code;if(null!=t){var n=H.find((function(e){return e.code===t}));if(null!=n){var r=[{linkMedia:n.linkImageEmphasis}];$(n.active);var i=Object(o.a)(Object(o.a)(Object(o.a)({},W),n),{},{multimedias:r});K(i),function(e){return fe.apply(this,arguments)}(r).catch()}}}),[H]);var je=function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var t,i,a,c,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=W,n.current&&(i=Object(o.a)(Object(o.a)({},i),{},{linkHtml:n.current.getContent()})),a=[],ne.map((function(e){return a.push(e.dataUrl)})),i=Object(o.a)(Object(o.a)({},i),{},{active:Z,images:a}),c=null===(t=A.state)||void 0===t?void 0:t.code,e.prev=6,e.next=9,N(Object(D.b)(i));case 9:s=[{title:"Ok",actionButton:U("/notice"),closeDialog:!0}],N(Object(L.c)({message:"Registro ".concat(c?"editado":"inserido"," com sucesso!"),buttons:s})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(6),N(Object(L.c)({message:"Erro ao ".concat(c?"editar":"inserir"," o registro")})),console.error("Error Post Notice",e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(){return e.apply(this,arguments)}}();return Object(M.jsx)(g.a,{xs:12,sm:12,sx:{bgcolor:"white",borderColor:"divider"},children:Object(M.jsxs)(y.a,{value:J,children:[Object(M.jsx)(g.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(M.jsx)(k.a,{textColor:"secondary",indicatorColor:"secondary",onChange:function(e,t){Q(t)},variant:"scrollable",scrollButtons:"auto","aria-label":"Tabs Notice",children:Object(M.jsx)(x.a,{label:"Detalhes",value:"1"})})}),Object(M.jsx)(C.a,{value:"1",children:Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("span",{children:"Os campos marcados com ( * ) s\xe3o de preenchimento obrigat\xf3rios"}),Object(M.jsx)("br",{}),Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(u.a,{initialValues:{currentNotice:W},onSubmit:function(){var e=Object(a.a)(Object(r.a)().mark((function e(n,i){var o,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=i.setStatus,a=i.setSubmitting,e.prev=1,!t.current){e.next=10;break}return e.next=5,be();case 5:if(!e.sent){e.next=10;break}return e.next=8,je();case 8:o({success:!0}),a(!1);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),t.current&&(o({success:!1}),a(!1),N(Object(L.c)({message:e.t0.message})));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(t){var r=t.handleSubmit,i=t.isSubmitting;return Object(M.jsxs)("form",{noValidate:!0,onSubmit:r,children:[Object(M.jsx)(d.a,{container:!0,alignItems:"center",children:Object(M.jsx)(d.a,{item:!0,xs:12,sm:2,children:Object(M.jsx)(p.a,{control:Object(M.jsx)(f.a,{checked:Z,onChange:function(e){return $(e.target.checked)},name:"checked",color:"primary"}),label:Object(M.jsx)(h.a,{variant:"subtitle1",children:"Ativa"})})})}),Object(M.jsx)(d.a,{container:!0,spacing:z?0:2,children:Object(M.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(M.jsxs)(b.a,{fullWidth:!0,error:Boolean(le&&le.title),sx:Object(o.a)({},e.typography.customInput),children:[Object(M.jsx)(m.a,{fullWidth:!0,required:!0,inputProps:{maxLength:30},label:"T\xedtulo",margin:"normal",name:"title",type:"text",value:null===W||void 0===W?void 0:W.title,onChange:function(e){return he("title",e.target.value)},sx:Object(o.a)({},e.typography.customInput)}),le&&le.title&&Object(M.jsx)(j.a,{error:!0,id:"standard-weight-helper-text-email-login",children:le.title})]})})}),Object(M.jsx)(d.a,{container:!0,spacing:z?0:2,children:Object(M.jsx)(d.a,{item:!0,xs:12,sm:12,children:Object(M.jsxs)(b.a,{fullWidth:!0,error:Boolean(le&&le.resume),sx:Object(o.a)({},e.typography.customInput),children:[Object(M.jsx)(m.a,{fullWidth:!0,required:!0,label:"Resumo",margin:"normal",name:"resume",type:"text",multiline:!0,rows:2,value:null===W||void 0===W?void 0:W.resume,onChange:function(e){return he("resume",e.target.value)},inputProps:{maxLength:212},sx:Object(o.a)({},e.typography.customInput)}),le&&le.resume&&Object(M.jsx)(j.a,{error:!0,id:"standard-weight-helper-text-email-login",children:le.resume})]})})}),Object(M.jsx)(d.a,{container:!0,spacing:z?0:2,children:Object(M.jsx)(d.a,{item:!0,xs:12,sm:12,children:Object(M.jsx)(P.a,{textValue:ae,loadBody:function(e){return function(e){n.current=e,["",null].includes(ae)&&W&&null!==W&&void 0!==W&&W.linkHtml&&null!==W&&void 0!==W&&W.linkHtml.startsWith("http")&&Object(_.get)(null===W||void 0===W?void 0:W.linkHtml).then((function(e){ce(e.data)})).catch((function(e){return console.error("Error download html from notice ".concat(e.message))}))}(e)},setTextEditor:function(e){return ce(e)}})})}),Object(M.jsxs)(d.a,{container:!0,spacing:z?0:2,sx:{mt:2},children:[Object(M.jsx)(d.a,{item:!0,xs:12,sm:12,children:Object(M.jsx)(v.a,{sx:{flexGrow:1},orientation:"horizontal"})}),Object(M.jsx)(d.a,{item:!0,xs:12,sm:12,textAlign:"center",alignItems:"center",justifyContent:"center",children:Object(M.jsx)("strong",{children:"Imagem de capa"})}),Object(M.jsx)(d.a,{item:!0,xs:12,sm:12,children:Object(M.jsx)(v.a,{sx:{flexGrow:1},orientation:"horizontal"})}),Object(M.jsx)(d.a,{item:!0,xs:12,sm:12,textAlign:"center",alignItems:"center",justifyContent:"center",children:Object(M.jsx)(T.a,{images:ne,onChange:function(e){return re(e)},maxNumber:1,multiple:!1})}),Object(M.jsx)(d.a,{item:!0,xs:12,sm:12,children:Object(M.jsx)(v.a,{sx:{flexGrow:1},orientation:"horizontal"})})]}),Object(M.jsx)(g.a,{sx:{mt:2},children:Object(M.jsx)(E.a,{children:Object(M.jsx)(O.a,{disableElevation:!0,disabled:i,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Salvar"})})})]})}})})]})})]})})}}}]);
//# sourceMappingURL=9.22dc5f73.chunk.js.map