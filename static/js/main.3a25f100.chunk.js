(window.webpackJsonpdmed256=window.webpackJsonpdmed256||[]).push([[0],{136:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),l=a(51),c=a(25),m=a(2),s=a(184),d={width:"93%",maxWidth:1200,headerHeight:100,headerGap:75,media:{mobile:"@media(max-width: 700px)",print:"@media print"},mobile:{headerHeight:65}},u=Object(s.a)((function(e){return{root:Object(m.a)({flex:1,marginTop:d.headerHeight+d.headerGap,backgroundColor:e.palette.grey[100],zIndex:2},d.media.mobile,{marginTop:d.mobile.headerHeight,backgroundColor:e.palette.background.paper})}})),p=function(e){var t=e.children,a=u();return r.a.createElement("div",{className:a.root},t)},g=a(190),h=a(187),b=a(9),f=Object(h.a)({root:{}}),E=Object(b.a)(f)((function(e){var t=e.classes,a=e.href,n=e.children;return r.a.createElement("a",{className:t.root,href:a,target:"_blank",rel:"noopener noreferrer"},n)})),v=a(29),y=Object(s.a)((function(e){return{root:{color:"inherit",transition:"color 500ms !important",transitionDelay:"100ms !important","&:hover, .glow:hover > &":{color:"var(".concat("--glow-color",", ").concat(e.palette.primary.main,")"),transition:"color 300ms",transitionDelay:"0ms !important"}}}})),O=function(e){var t,a=e.Icon,n=e.glowColor,o=Object(v.a)(e,["Icon","glowColor"]),i=y();return n&&(t=Object(m.a)({},"--glow-color",n)),r.a.createElement(a,Object.assign({style:t,classes:{root:i.root}},o))},w={github:{username:"dmed256",link:"https://github.com/dmed256",color:"#1b1f23"},twitter:{username:"dmed256",link:"https://twitter.com/dmed256",color:"#34a1f2"},linkedin:{link:"https://linkedin.com/in/dmed256",color:"#2478b5"},getEmail:function(){return"".concat("dmed256","@").concat("gmail",".").concat("com")}},j=a(50),C=a.n(j),x=a(79),S=a(80),k=a(91),T=a(81),P=a(92),D=a(82),A=a.n(D),N=a(193),I=a(194),F=a(196),M=a(195),z=a(83),W=a.n(z),H=Object(h.a)({root:{display:"inherit",cursor:"pointer"},snackbarIcon:{color:"white"}}),G=function(e){function t(){var e,a;Object(x.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(k.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(o)))).state={snackbarOpened:!1},a.ref=r.a.createRef(),a.clipboard=null,a.openSnackbar=function(){a.setState({snackbarOpened:!0})},a.closeSnackbar=function(){a.setState({snackbarOpened:!1})},a}return Object(P.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.clipboard=new A.a(this.ref.current,{text:function(){return e.props.clipboardText}})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.tooltip,n=e.snackbarMessage,o=e.children,i=this.state.snackbarOpened,l=r.a.createElement(N.a,{className:t.snackbarIcon,onClick:this.closeSnackbar},r.a.createElement(W.a,null));return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{title:a,placement:"bottom"},r.a.createElement("div",{ref:this.ref,className:t.root,onClick:this.openSnackbar},o)),r.a.createElement(I.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:i,message:n,action:l,TransitionComponent:F.a,TransitionProps:{direction:"up"},onClose:this.closeSnackbar}))}}]),t}(r.a.Component),L=Object(b.a)(H)(G),U=function(e){return r.a.createElement(L,{clipboardText:"mailto:".concat(w.getEmail()),tooltip:"Click to copy email to clipboard",snackbarMessage:"Email copied to clipboard"},r.a.createElement(O,Object.assign({Icon:C.a},e)))},R=a(69);function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var V,_=function(e){var t=e.d,a=Object(v.a)(e,["d"]);return function(e){return r.a.createElement(R.a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,{},e),r.a.createElement("path",{d:t,fill:"currentColor"}))}},J=_({d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"}),$=_({d:"M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"}),Z=_({d:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"}),q=Object(s.a)((function(e){return{root:Object(m.a)({},d.media.print,{display:"none"}),divider:{marginTop:d.headerGap},icons:Object(m.a)({display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",padding:"40px 0","& > *":{color:e.palette.grey[600]},"& > *:not(:first-child)":{marginLeft:"2em"}},d.media.mobile,{padding:"20px 0 0"})}})),K=function(){var e=q();return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{className:e.divider}),r.a.createElement("div",{className:e.icons},r.a.createElement(U,null),r.a.createElement(E,{href:w.github.link},r.a.createElement(O,{Icon:J,glowColor:w.github.color})),r.a.createElement(E,{href:w.linkedin.link},r.a.createElement(O,{Icon:$,glowColor:w.linkedin.color})),r.a.createElement(E,{href:w.twitter.link},r.a.createElement(O,{Icon:Z,glowColor:w.twitter.color}))))},Y=a(24),Q=a.n(Y),X=a(54),ee=Object(s.a)((function(e){return{root:Object(m.a)({padding:"0.5em 1.0em",transition:"background-color 300ms, border-color 300ms, box-shadow 100ms",borderBottom:"1px solid transparent","&$active":{borderBottom:"1px solid ".concat(e.palette.secondary.main),"&:hover, &:active":{borderBottom:"1px solid ".concat(e.palette.secondary.light)}},"&:hover":{backgroundColor:"rgba(255, 255, 255, 0.18)",boxShadow:"0 5px 20px 0 rgba(0, 0, 0, 0.15)"},"&:active":{backgroundColor:"rgba(255, 255, 255, 0.07)",boxShadow:"0 2px 5px 0 rgba(0, 0, 0, 0.15)"},"@media (pointer: coarse)":{"&:hover":{backgroundColor:"transparent",boxShadow:"none"},"&:active":{backgroundColor:"rgba(255, 255, 255, 0.18) !important",boxShadow:"0 5px 20px 0 rgba(0, 0, 0, 0.15) !important"}}},d.media.mobile,{padding:"1em"}),active:{}}})),te=Object(c.f)((function(e){var t=e.location,a=e.label,n=e.href,o=ee(),i=t.pathname===n||t.pathname.startsWith(n+"/");return r.a.createElement(X.a,{className:Q()(o.root,i&&o.active),to:n},a)})),ae=Object(l.b)((function(e){return{language:e.cache.language}}))((function(e){var t=e.language;return Object(v.a)(e,["language"])[t]})),ne=Object(s.a)((function(e){var t;return{root:(t={position:"fixed",left:0,top:0,width:"100%",height:d.headerHeight+d.headerGap,zIndex:1,backgroundColor:e.palette.primary.light},Object(m.a)(t,d.media.mobile,{height:d.mobile.headerHeight}),Object(m.a)(t,d.media.print,{display:"none"}),t),header:Object(m.a)({display:"flex",height:d.headerHeight,alignItems:"center",width:d.width,maxWidth:d.maxWidth,margin:"auto",letterSpacing:2,"& > a, & > div":{color:"white !important",textTransform:"uppercase",textDecoration:"none !important",fontWeight:"300 !important"}},d.media.mobile,{height:d.mobile.headerHeight}),name:{fontSize:"1.6em","@media(max-width: 425px)":{fontSize:"1.3em"}},spacing:{flex:1}}})),re=function(){var e=ne();return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.header},r.a.createElement("div",{className:e.name},"David Medina"),r.a.createElement("div",{className:e.spacing}),r.a.createElement(te,{label:r.a.createElement(ae,{en:"Blog",zh:"\u7f51\u5fd7"}),href:"/"}),r.a.createElement(te,{label:r.a.createElement(ae,{en:"About",zh:"\u5173\u4e8e\u6211"}),href:"/about"}),r.a.createElement(te,{label:r.a.createElement(ae,{en:"Resume",zh:"\u7b80\u5386"}),href:"/resume"})))},oe=Object(s.a)((function(e){var t,a;return{root:(t={position:"relative",width:d.width,maxWidth:d.maxWidth,padding:"".concat(d.headerGap,"px 0 0 0"),margin:"-".concat(d.headerGap,"px auto ").concat(d.headerHeight,"px"),backgroundColor:e.palette.background.paper,boxShadow:"0 7px 15px 0 rgba(1, 1, 1, 0.25)"},Object(m.a)(t,d.media.mobile,{width:"100%",margin:0,padding:"2em 0",boxShadow:"none",overflow:"auto"}),Object(m.a)(t,d.media.print,{position:"absolute",left:0,top:0,width:"100vw",margin:0,padding:0,boxShadow:"none"}),t),content:(a={padding:"0 ".concat(d.headerGap,"px")},Object(m.a)(a,d.media.mobile,{padding:"0 20px"}),Object(m.a)(a,d.media.print,{padding:0}),a)}})),ie=function(e){var t=e.children,a=oe();return r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.content},t))},le=a(90),ce=a(89),me=a(93),se=a(186),de=a(191),ue=a(10),pe=a(86),ge=Object(b.a)((function(e){var t;return{"@global":{"html, body, #root":(t={width:"100vw",height:"100vh",margin:0,color:"#34495e",fontFamily:"Source Sans Pro, Helvetica Neue, Arial, sans-serif",backgroundColor:e.palette.grey[100]},Object(m.a)(t,d.media.mobile,{fontSize:12,backgroundColor:e.palette.background.paper}),Object(m.a)(t,d.media.print,{margin:0,backgroundColor:"white",overflowY:"hidden"}),t),"#root":{display:"flex",flexDirection:"column"},a:{color:"inherit",textDecoration:"inherit"},":focus":{outline:"none"},":root":{"--theme-primary-color":e.palette.primary.main,"--theme-secondary-color":e.palette.secondary.main}}}}))((function(){return null})),he=Object(ce.a)({palette:{primary:{main:"#2991b9"},secondary:{main:"#f9a753"}},typography:{fontFamily:"Source Sans Pro, Helvetica Neue, Arial, sans-serif"},overrides:{MuiTooltip:{popper:{marginTop:"-0.5em"},tooltip:{padding:"0.5em 1em",fontSize:13}},MuiTypography:{h4:{fontWeight:600,marginBottom:50},body1:{lineHeight:1.6,wordSpacing:".05em",margin:"1em 0"}}}}),be=Object(ue.c)({plugins:[Object(pe.a)()].concat(Object(le.a)(Object(me.a)().plugins))}),fe=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(se.b,{jss:be},r.a.createElement(de.a,{theme:he},r.a.createElement(ge,null),t)))},Ee=function(e){var t=e.children;return r.a.createElement(fe,null,r.a.createElement(re,null),r.a.createElement(p,null,r.a.createElement(ie,null,t,r.a.createElement(K,null))))},ve=a(34),ye=a(59),Oe=a.n(ye),we=a(43),je=a(87);function Ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function xe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ce(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ce(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Se,ke,Te=xe({language:"en",postView:"detailed"},Oe.a.get("redux-cache-state")||{}),Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we.redux.cache.SET_LANGUAGE:return xe({},e,{language:t.language});case we.redux.cache.SET_POST_VIEW:return xe({},e,{postView:t.postView});default:return e}},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0,a=Pe(e,t);return e!==a&&Oe.a.set("redux-cache-state",a),a},Ae=ve.combineReducers({cache:De});Se=Ae,ke={cache:Te},V=ve.createStore(Se,ke,Object(je.composeWithDevTools)());var Ne=a(189),Ie=a(192),Fe=Object(Ie.a)("span")(Object(m.a)({color:"#19a98a",fontWeight:400},d.media.print,{color:"inherit"})),Me=(Object(Ie.a)("span")({fontStyle:"italic"}),Object(Ie.a)("span")((function(e){var t=e.theme;return Object(m.a)({margin:"0 0.08em",padding:0,color:t.palette.secondary.main,backgroundColor:"transparent",fontSize:"0.9em",fontFamily:"'Ubuntu Mono', monospace",fontWeight:300},d.media.print,{color:"inherit"})})));function ze(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function We(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ze(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ze(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var He,Ge,Le,Ue=Object(s.a)((function(e){return{root:Object(m.a)({"&, &:visited":{cursor:"pointer",color:e.palette.primary.main,fontWeight:600,textDecoration:"none"},"&$normal":{color:"inherit",fontWeight:300},"&:hover":{color:e.palette.primary.main,textDecoration:"underline",textDecorationColor:"".concat(e.palette.secondary.main,"88")}},d.media.print,{"&, &:visited":{color:"inherit",fontWeight:"inherit",textDecoration:"none !important"}}),normal:{}}})),Re=function(e){var t=e.variant,a=Object(v.a)(e,["variant"]),n=Ue(),o=a.classes||{};return r.a.createElement(E,We({},a,{classes:We({},o,{root:Q()(o.root,n.root,"normal"===t&&n.normal)})}))},Be=Object(s.a)({title:Object(m.a)({marginBottom:30},d.media.mobile,{marginBottom:20}),container:Object(m.a)({display:"flex",flexDirection:"row",alignItems:"center"},d.media.mobile,{flexDirection:"column"}),image:Object(m.a)({width:150,borderRadius:150,marginRight:40},d.media.mobile,{width:130,marginRight:0,marginBottom:20})}),Ve=function(){var e=Be();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne.a,{className:e.title,variant:"h4"},"About"),r.a.createElement("div",{className:e.container},r.a.createElement("img",{className:e.image,src:"/images/me.jpg",alt:"David Medina"}),r.a.createElement("div",null,r.a.createElement(Ne.a,{variant:"body1"},"Howdy, my name is David Medina!"),r.a.createElement(Ne.a,{variant:"body1"},"I currently work at ",r.a.createElement(Fe,null,"Harvest Exchange")," as a Software Engineer, where I lead the Infrastructure team. At night I work as a contractor with ",r.a.createElement(Fe,null,"Lawrence Livermore National Laboratory")," through the\xa0",r.a.createElement(Re,{href:"http://ceed.exascaleproject.org/"},"Center for Efficient Exascale Discretizations"),"."),r.a.createElement(Ne.a,{variant:"body1"},"When not spending time with family, I'm usually coding up some project\xa0 :)"),r.a.createElement(Ne.a,{variant:"body1"},"Feel free to reach out if you're interested in chatting!"))))},_e=a(44),Je=a.n(_e),$e=(a(118),a(119),a(120),a(121),a(122),a(123),a(124),a(125),a(126),a(127),a(128),a(129),a(130),a(131),a(132),a(133),a(134),a(135),function(e,t,a){Je.a.languages[e]=Je.a.languages.extend(t,a)}),Ze=(a(136),function(e){var t=e.source,a=e.lang;return r.a.createElement("pre",{"data-lang":a||""},r.a.createElement("code",{className:a?"lang-".concat(a):void 0},function(e,t){var a=t&&Je.a.languages[t];return t&&a?r.a.createElement("div",{dangerouslySetInnerHTML:{__html:Je.a.highlight(e,a,t)}}):e}(t,a)))}),qe=function(){return r.a.createElement("div",null,r.a.createElement(Ze,{source:"404: File not found",lang:"html"}),r.a.createElement(Ze,{source:'\nTraceback (most recent call last):\n  File "'.concat(window.location.pathname,"\", line 1, in <module>\n    raise NotImplementedError('File not found')\nNotImplementedError: File not found\n      ").trim(),lang:"python"}),r.a.createElement(Ze,{source:"Segmentation fault (core dumped)",lang:"cpp"}),r.a.createElement(Ze,{source:"[Object object]",lang:"js"}))},Ke=Object(s.a)((function(e){var t,a;return{root:Object(m.a)({flex:1,position:"relative",marginTop:50,borderTop:"1px solid ".concat(e.palette.background.paper)},d.media.mobile,{marginTop:30}),innerRoot:(t={display:"flex",borderTop:"1px solid #c2c8ce",paddingTop:20},Object(m.a)(t,d.media.mobile,{flexDirection:"column",paddingTop:28}),Object(m.a)(t,d.media.print,{flexDirection:"row !important"}),t),titleContainer:(a={width:140,marginRight:20,fontSize:20,fontWeight:600,textTransform:"uppercase",lineHeight:"1.1em"},Object(m.a)(a,d.media.mobile,{width:"100%",fontSize:16,marginBottom:20}),Object(m.a)(a,d.media.print,{width:"110px !important",fontSize:"15px !important",marginBottom:"0 !important"}),a),title:Object(m.a)({display:"inline-block",borderTop:"3px solid #34495e",paddingTop:20,marginTop:-22},d.media.mobile,{borderTop:"none"}),content:Object(m.a)({flex:1,"& > div:first-child .subsection-date":{marginTop:0,paddingTop:0,"& .subsection-dot":{top:7}},"& > ul":{margin:0},"& > p":{margin:0,letterSpacing:0,"&:not(:first-child)":{marginTop:8}}},d.media.mobile,{"& > div:first-child  .subsection-date .subsection-dot":{top:"4px !important"}})}})),Ye=function(e){var t=e.title,a=e.children,n=Ke();return r.a.createElement("div",{className:n.root},r.a.createElement("div",{className:n.innerRoot},r.a.createElement("div",{className:n.titleContainer},r.a.createElement("span",{className:n.title},t)),r.a.createElement("div",{className:n.content},a)))},Qe=function(){return r.a.createElement(Ye,{title:"About"},r.a.createElement(Ne.a,{variant:"body1"},r.a.createElement(Fe,null,"I really enjoy programming!")),r.a.createElement(Ne.a,{variant:"body1"},"From high performance computing applications running on thousands of hybrid architecture nodes, to building web apps with great user experiences."),r.a.createElement(Ne.a,{variant:"body1"},"I'm lucky to have worked in various environments, including a startup\xa0",r.a.createElement(Re,{href:"https://www.hvst.com"},"@Harvest"),","," finance industry\xa0",r.a.createElement(Re,{href:"https://www.twosigma.com"},"@TwoSigma"),","," and an HPC contractor for\xa0",r.a.createElement(Re,{href:"http://ceed.exascaleproject.org"},"@CEED"),","," an exascale initiative at a government national laboratory\xa0",r.a.createElement(Re,{href:"https://www.llnl.gov"},"@LLNL")),r.a.createElement(Ne.a,{variant:"body1"},"The influx of projects seen from both domains along with personal side-projects require me to work with a high variety of technologies, frameworks, libraries, and languages."))},Xe=Object(s.a)((function(e){var t;return{root:Object(m.a)({display:"flex",lineHeight:"1.5em","&:first-child":{"& $divider":Object(m.a)({marginTop:20},d.media.mobile,{marginTop:12}),"& $dividerDot":{top:-1}}},d.media.mobile,{fontSize:12}),date:Object(m.a)({position:"relative",width:100,marginBottom:-20,fontSize:14,fontWeight:300,textAlign:"right"},d.media.mobile,{width:80,fontSize:11}),start:Object(m.a)({marginTop:12},d.media.mobile,{marginTop:6}),end:Object(m.a)({"&$present":{color:e.palette.primary.main,fontWeight:400}},d.media.mobile,{"&$present":{color:"inherit"}}),dateless:{width:0,"& $dot":{borderRadius:0}},divider:{position:"relative",width:1,margin:"-".concat(20,"px 20px"),backgroundColor:e.palette.grey[300]},dividerDot:(t={position:"absolute",width:9,height:9,top:40,left:-5,borderRadius:100,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:"white","&$present":{borderColor:e.palette.primary.main,backgroundColor:e.palette.primary.main}},Object(m.a)(t,d.media.mobile,{width:5,height:5,left:-3,top:31}),Object(m.a)(t,d.media.print,{"&$present":{borderColor:"".concat(e.palette.grey[400]," !important"),backgroundColor:"".concat(e.palette.grey[300]," !important")}}),t),content:Object(m.a)({flex:1,"& p":{margin:"0.5em 0",fontWeight:300}},d.media.mobile,{"& p":{margin:0}}),titleContainer:Object(m.a)({margin:"".concat(12,"px 0")},d.media.mobile,{marginTop:6}),title:{fontWeight:600},location:Object(m.a)({marginTop:"-0.2em",fontSize:14,fontWeight:300,fontStyle:"italic"},d.media.mobile,{fontSize:11,marginBottom:"0.2em"}),description:{fontWeight:300},present:{}}})),et=function(e){var t=e.title,a=e.link,n=e.date,o=e.start,i=e.end,l=e.location,c=e.children,m=Xe(),s="Present"===i,d=!n&&!o&&!i,u=t;return a&&(u=r.a.createElement(Re,{href:a},t)),r.a.createElement("div",{className:m.root},r.a.createElement("div",{className:Q()(m.date,d&&m.dateless)},r.a.createElement("div",{className:m.start},n||o),r.a.createElement("div",{className:Q()(m.end,s&&m.present)},i)),r.a.createElement("div",{className:m.divider},r.a.createElement("div",{className:Q()(m.dividerDot,s&&m.present)})),r.a.createElement("div",{className:m.content},r.a.createElement("div",{className:m.titleContainer},r.a.createElement("div",{className:m.title},u),r.a.createElement("div",{className:m.location},l)),c&&r.a.createElement("div",{className:m.description},c)))},tt=function(){return r.a.createElement(Ye,{title:"Education"},r.a.createElement(et,{title:"Ph.D. in Computational and Applied Mathematics",date:"May 2015",location:"Rice University"}),r.a.createElement(et,{title:"Masters in Computational and Applied Mathematics",date:"April 2014",location:"Rice University"}),r.a.createElement(et,{title:"Bachelor of Science in Mathematics",date:"May 2011",location:"University of Texas Pan-American"},"Double major in Computer Science"))},at=function(){return r.a.createElement(Re,{href:"https://libocca.org"},"OCCA")},nt=function(){return r.a.createElement(Re,{href:"https://libocca.org/#/guide/okl/introduction"},"OKL")},rt=Object(s.a)({root:Object(m.a)({paddingLeft:18,margin:"0.5em 0"},d.media.print,{margin:0})}),ot=function(e){var t=e.children,a=rt();return r.a.createElement("ul",{className:a.root},r.a.Children.map(t,(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(Ne.a,{variant:"body1"},e))})))},it=function(){return r.a.createElement(Ye,{title:"Experience"},r.a.createElement(et,{title:"Senior Software Engineer",start:"April 2019",end:"Present",location:"Harvest Exchange Corp"},r.a.createElement(ot,null,r.a.createElement(r.a.Fragment,null,"Led the Infrastructure team and laid out best practices for software development, including formatting and linting of ",r.a.createElement(Fe,null,"Python")," and ",r.a.createElement(Fe,null,"Javascript")),r.a.createElement(r.a.Fragment,null,"Migrated deployment from three static servers to ",r.a.createElement(Fe,null,"AWS"),", using ",r.a.createElement(Fe,null,"Docker"),", ",r.a.createElement(Fe,null,"Pulumi"),", and ",r.a.createElement(Fe,null,"Hashicorp tools")),r.a.createElement(r.a.Fragment,null,"Improved testing process by switching to xdist-pytest for faster and simpler Travis CI and local testing"))),r.a.createElement(et,{title:"HPC Contractor",start:"December 2016",end:"Present",location:"Lawrence Livermore National Laboratory"},r.a.createElement(ot,null,r.a.createElement(r.a.Fragment,null,"Maintainer of ",r.a.createElement(at,null),", ","an open source library enabling JIT compilation for multiple architectures:\xa0",r.a.createElement(Fe,null,"C++"),", ",r.a.createElement(Fe,null,"OpenMP"),", ",r.a.createElement(Fe,null,"CUDA"),", ",r.a.createElement(Fe,null,"HIP"),", ",r.a.createElement(Fe,null,"OpenCL"),", ",r.a.createElement(Fe,null,"Metal")),r.a.createElement(r.a.Fragment,null,"Consultant on high performance computing for numerical simulation codes"),r.a.createElement(r.a.Fragment,null,"Implemented an ",r.a.createElement(at,null),"-backed solution in ",r.a.createElement(Re,{href:"http://mfem.org"},"MFEM"),", providing a ",r.a.createElement(Fe,null,"GPU")," solution"),r.a.createElement(r.a.Fragment,null,"Developed algorithms targeting ",r.a.createElement(Fe,null,"CPUs")," and ",r.a.createElement(Fe,null,"GPUs")," in parallel for high-order finite element methods"))),r.a.createElement(et,{title:"Software Engineer",start:"August 2015",end:"April 2019",location:"Two Sigma"},r.a.createElement(ot,null,r.a.createElement(r.a.Fragment,null,"Led internal ",r.a.createElement(Fe,null,"Javascript")," environment modernization, including package publishing and the use of ",r.a.createElement(Fe,null,"React")," and ",r.a.createElement(Fe,null,"Typescript")),r.a.createElement(r.a.Fragment,null,"Led development of an interactive webapp for searching and viewing foundational data, used by over 10% of the company"),r.a.createElement(r.a.Fragment,null,"Developed a real-time dashboard for creating, viewing, and editing services in Waiter, used by over 20% of engineers"),r.a.createElement(r.a.Fragment,null,"Used ",r.a.createElement(Fe,null,"Spark")," internals to create an efficient ",r.a.createElement(Fe,null,"Python")," wrapper to the Open Sourced Two Sigma Flint library"),r.a.createElement(r.a.Fragment,null,"Developed and maintained big data pipelines using ",r.a.createElement(Fe,null,"Pyspark")),r.a.createElement(r.a.Fragment,null,"Onboarded external applications using ",r.a.createElement(Fe,null,"Docker")," and ",r.a.createElement(Fe,null,"Kubernetes")))),r.a.createElement(et,{title:"HPC Contractor",start:"Spring 2014",end:"Fall 2014",location:"Shell"},r.a.createElement(ot,null,r.a.createElement(r.a.Fragment,null,"Optimized existing finite difference codes for parallel ",r.a.createElement(Fe,null,"CPUs")," and ",r.a.createElement(Fe,null,"GPUs")),r.a.createElement(r.a.Fragment,null,"Implemented numerical methods for parallel architectures through ",r.a.createElement(Fe,null,"OpenMP"),", ",r.a.createElement(Fe,null,"OpenCL"),", and ",r.a.createElement(Fe,null,"CUDA")))),r.a.createElement(et,{title:"Intern",date:"Summer 2014",location:"Shell"},r.a.createElement(ot,null,r.a.createElement(r.a.Fragment,null,"Optimized existing finite difference codes for parallel ",r.a.createElement(Fe,null,"CPUs")," and ",r.a.createElement(Fe,null,"GPUs")),r.a.createElement(r.a.Fragment,null,"Investigated hybrid kernels that would achieve portable performance across varying architectures."))),r.a.createElement(et,{title:"Intern",date:"Summer 2013",location:"Shell"},r.a.createElement(ot,null,r.a.createElement(r.a.Fragment,null,"Worked on Discontinuous Galerkin implementations for wave equations"),r.a.createElement(r.a.Fragment,null,"Begin work on a portability layer to enable ",r.a.createElement(Fe,null,"OpenMP"),", ",r.a.createElement(Fe,null,"OpenCL"),", and ",r.a.createElement(Fe,null,"CUDA"),"."))))},lt=a(88),ct=a.n(lt),mt={root:{display:"flex",alignItems:"center"},profile:(He={flex:1,"& .name":{fontSize:40,fontWeight:600,letterSpacing:2,textTransform:"uppercase",marginLeft:-2},"& .title":{fontSize:20,fontWeight:300,letterSpacing:2,textTransform:"uppercase"}},Object(m.a)(He,d.media.mobile,{textAlign:"center","& .name":{fontSize:20},"& .title":{marginTop:10,fontSize:14}}),Object(m.a)(He,d.media.print,{textAlign:"left !important","& .name":{fontSize:"30px !important"},"& .title":{marginTop:"0 !important",fontSize:"18px !important"}}),He),info:{paddingLeft:30},infoItem:(Ge={display:"flex",alignItems:"center",marginTop:8,"&:first-child":{marginTop:0},"& > svg":{marginRight:14,fontSize:18},"& > a":{fontSize:14}},Object(m.a)(Ge,d.media.mobile,{"& .svg":{fontSize:16,marginRight:12},"& > a":{fontSize:12}}),Object(m.a)(Ge,d.media.print,{"& .svg":{fontSize:"12px !important",marginRight:12},"& > a":{fontSize:12}}),Ge)},st=function(e){return 0===e.search(/https?:/)?e:"mailto:".concat(e)},dt=ct()(mt)((function(e){var t=e.classes,a=[{Icon:C.a,label:w.getEmail()},{Icon:J,label:w.github.link,color:w.github.color},{Icon:Z,label:w.twitter.link,color:w.twitter.color},{Icon:$,label:w.linkedin.link,color:w.linkedin.color}];return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.profile},r.a.createElement("div",{className:"name"},"David Medina"),r.a.createElement("div",{className:"title"},"Software Engineer")),r.a.createElement("div",{className:t.info},a.map((function(e){var a=e.Icon,n=e.label,o=e.color;return r.a.createElement("div",{key:n,className:Q()(t.infoItem,"glow")},r.a.createElement(O,{Icon:a,glowColor:o}),r.a.createElement(Re,{href:st(n),variant:"normal"},n))}))))})),ut=function(){return r.a.createElement(Ye,{title:"Open-Source Projects"},r.a.createElement(et,{title:"OCCA",link:"https://libocca.org"},r.a.createElement(ot,null,r.a.createElement(r.a.Fragment,null,"C++ library that enables JIT compilation for parallel architecture kernels (",r.a.createElement(Fe,null,"CPU"),", ",r.a.createElement(Fe,null,"GPU"),", ",r.a.createElement(Fe,null,"FPGA"),")"),r.a.createElement(r.a.Fragment,null,"Unified API to program heterogeneous architectures"),r.a.createElement(r.a.Fragment,null,"A C parser for the ",r.a.createElement(nt,null)," language, introducing ",r.a.createElement(Me,null,"@attributes")," for ast-manipuation"),r.a.createElement(r.a.Fragment,null,r.a.createElement(nt,null)," was designed to expose enough parallelism to directly convert kernels into ",r.a.createElement(Fe,null,"OpenMP"),", ",r.a.createElement(Fe,null,"CUDA"),", ",r.a.createElement(Fe,null,"OpenCL"),", or ",r.a.createElement(Fe,null,"HIP")))),r.a.createElement(et,{title:"occa.py",link:"https://nbviewer.jupyter.org/github/libocca/occa.py/blob/master/notebooks/Tutorial.ipynb"},"A Cython-based package, integrating ",r.a.createElement(Fe,null,"numpy")," objects with ",r.a.createElement(at,null)," to provide JIT compiation for parallel architecture kernels (",r.a.createElement(Fe,null,"CPU"),", ",r.a.createElement(Fe,null,"GPU"),", ",r.a.createElement(Fe,null,"FPGA"),")"))},pt=Object(s.a)({root:(Le={margin:0,marginTop:"0.5em",fontSize:14,fontStyle:"italic",lineHeight:"1.5em"},Object(m.a)(Le,d.media.mobile,{fontSize:12}),Object(m.a)(Le,d.media.print,{marginTop:0,fontSize:12}),Le)}),gt=function(e){var t,a=e.me,n=e.authors,o=pt(),i=n.trim(),l=r.a.createElement(Fe,{key:"me"},a),c=i.startsWith(a);if(c||i.endsWith(a)){var m=r.a.createElement("span",{key:"a1"},i.replace(a,""));t=[],c?(t.push(l),t.push(m)):(t.push(m),t.push(l))}else{var s=i.split(a);t=r.a.createElement("span",{key:"a1"},s[0],l,s[1])}return r.a.createElement("div",{className:o.root},t)},ht=function(){return r.a.createElement(Ye,{title:"Publications"},r.a.createElement(et,{title:"A model evaluation study for treatment planning of laser-induced thermal therapy",date:"October 2015"},r.a.createElement(gt,{me:"Medina, D.",authors:"Fahrenholtz, S. J., Moon, T., Franco, M., Medina, D., Danish, S., Gowda, A.,\n        Shetty, A., Maier, F., Hazle, J., Stafford, R. J., Warburton, T. and Fuentes, D"})),r.a.createElement(et,{title:"Portability and performance of nuclear reactor simulations on many-core architectures",date:"May 2015"},r.a.createElement(gt,{me:"Medina, D.",authors:"Rahaman, R., Medina, D., Lund, A., Tramm, J., Warburton, T. and Seigel, A."})),r.a.createElement(et,{title:"GPU accelerated discontinuous Galerkin methods for shallow water equations",date:"May 2015"},r.a.createElement(gt,{me:"Medina, D.",authors:"Gandham, R., Medina, D. and Warburton, T."})),r.a.createElement(et,{title:"High-Order Finite-differences on multi-threaded architectures using OCCA",date:"October 2014"},r.a.createElement(gt,{me:"Medina, D. S.",authors:"Medina, D. S., St-Cyr, A. and Warburton T."})),r.a.createElement(et,{title:"OCCA: A united approach to multi-threading languages",date:"February 2014"},r.a.createElement(gt,{me:"Medina, D. S.",authors:"Medina, D. S., St-Cyr, A. and Warburton T."})))},bt=Object(s.a)({root:{letterSpacing:"0.05em"}}),ft=function(){var e=bt();return r.a.createElement("div",{className:e.root},r.a.createElement(dt,null),r.a.createElement(Qe,null),r.a.createElement(ut,null),r.a.createElement(it,null),r.a.createElement(tt,null),r.a.createElement(ht,null))},Et=function(){return r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/about",exact:!0,component:Ve}),r.a.createElement(c.a,{path:"/resume",exact:!0,component:ft}),r.a.createElement(c.a,{component:qe}))},vt=a(18),yt=function(){},Ot=a(156);Ot.initialize("UA-126720450-2"),yt=function(e){var t=e.pathname+e.search+e.hash;Ot.set({page:t}),Ot.pageview(t)};var wt=Object(vt.a)();yt(window.location),wt.listen(yt);var jt=wt,Ct=function(){return r.a.createElement(l.a,{store:V},r.a.createElement(c.b,{history:jt},r.a.createElement(Ee,null,r.a.createElement(Et,null))))},xt=function(){$e("okl","cpp",{annotation:{pattern:/@[a-zA-Z][a-zA-Z0-9_]*/,greedy:!0}}),$e("bibtex","latex")};(function(){xt()})(),i.a.render(r.a.createElement(Ct,null),document.getElementById("root"))},43:function(e,t,a){"use strict";var n=a(77);a.d(t,"redux",(function(){return n}));a(70),a(71),a(72),a(73),a(74),a(75)},70:function(e,t){},71:function(e,t){},72:function(e,t){},73:function(e,t){},74:function(e,t){},75:function(e,t){},77:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"SET_LANGUAGE",(function(){return r})),a.d(n,"SET_POST_VIEW",(function(){return o}));var r="SET_LANGUAGE",o="SET_POST_VIEW";a.d(t,"cache",(function(){return n}))},98:function(e,t,a){e.exports=a(155)}},[[98,1,2]]]);
//# sourceMappingURL=main.3a25f100.chunk.js.map