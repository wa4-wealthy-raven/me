(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(303)},22:function(e,t,n){},303:function(e,t,n){"use strict";n.r(t);n(22);var a=n(0),r=n.n(a),i=n(5),c=n.n(i),l=n(2),o=n(6),s=r.a.createContext(o),u=n(17),m=n(15),d={breakpoints:{tablet:"769px"},colors:{black:"#0a0a0a",blackBis:"#111111",blackTer:"#232323",greyDarker:"#353535",greyDark:"#494949",grey:"#7a7a7a",greyLight:"#b5b5b5",greyLighter:"#dbdbdb",whiteTer:"#f4f4f4",whiteBis:"#f9f9f9",white:"#ffffff",orange:"#F87D1C",yellow:"#aa8800",green:"#237a6d",turquoise:"#006858",cyan:"#125887",blue:"#274b87",purple:"#5d00b5",red:"#9b001f"},transition:{speed:"400ms"}},h=Object(m.a)({},d,{colors:Object(m.a)({},d.colors,{primary:d.colors.orange,info:d.colors.cyan,success:d.colors.green,warning:d.colors.yellow,danger:d.colors.red,light:d.colors.whiteTer,dark:d.colors.greyDarker})}),p=u,g=p.default,f=p.ThemeProvider,v=(p.css,p.keyframes,g),E=n(3),b=n(7),w=n(8),k=n(10),y=n(9),j=n(11);function O(){var e=Object(l.a)(["\n    overflow: hidden;\n    height: 0px;\n    transition: height ",";\n  "]);return O=function(){return e},e}var x=v.div(O(),function(e){return e.theme.transition.speed}),N=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(k.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(i)))).collapsibleRef=r.a.createRef(),n.transitionEnd=function(e){"0px"!==e.currentTarget.style.height&&(e.currentTarget.style.height="auto")},n}return Object(j.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){this.collapsibleRef.current&&this.props.isActive&&(this.collapsibleRef.current.style.height="auto")}},{key:"render",value:function(){var e=this.props,t=e.isActive,n=Object(E.a)(e,["isActive"]);if(this.collapsibleRef.current){var a=this.collapsibleRef.current;if(t)a.style.height=a.scrollHeight+"px";else{var i=a.style.transition;a.style.transition="",requestAnimationFrame(function(){a.style.height=a.scrollHeight+"px",a.style.transition=i,requestAnimationFrame(function(){a.style.height="0px"})})}}return r.a.createElement("div",n,r.a.createElement(x,{ref:this.collapsibleRef,onTransitionEnd:this.transitionEnd},n.children))}}]),t}(r.a.Component),R=n(4);function C(){var e=Object(l.a)(["\n    margin-top: -1px;\n  "]);return C=function(){return e},e}function D(){var e=Object(l.a)(["\n    margin-left: -8px;\n    transition: transform ",";\n    ","\n  "]);return D=function(){return e},e}function F(){var e=Object(l.a)(["\n    width: 100%;\n  "]);return F=function(){return e},e}function I(){var e=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    padding: 32px 0px;\n    margin-bottom: -1px;\n    border-bottom: 1px solid ",";\n  "]);return I=function(){return e},e}function A(){var e=Object(l.a)(["\n    border-top: 1px solid ",";\n    border-bottom: 1px solid ",";\n  "]);return A=function(){return e},e}var L=h.colors.greyLighter,P=v.div(A(),L,L),S=v.div(I(),L),T=v.div(F()),_=v.div(D(),function(e){return e.theme.transition.speed},function(e){return e.isOpen?"transform: rotate(90deg);":null}),U=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(k.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(i)))).headerRef=r.a.createRef(),n.state={isOpen:!1},n}return Object(j.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.header,a=Object(E.a)(t,["header"]);return r.a.createElement("div",a,r.a.createElement(P,null,r.a.createElement(S,{ref:this.headerRef,onClick:function(){return e.setState({isOpen:!e.state.isOpen})}},r.a.createElement(_,{isOpen:this.state.isOpen},r.a.createElement(R.ChevronRight,{size:"50px",color:L,strokeWidth:"1"})),r.a.createElement(T,null,n)),r.a.createElement(N,{isActive:this.state.isOpen},a.children)))}}]),t}(r.a.Component),B=v.div(C()),q=function(e){return r.a.createElement("div",e,r.a.Children.map(e.children,function(e,t){return t>0?r.a.createElement(B,null,e):e}))};function z(){var e=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    ","\n  "]);return z=function(){return e},e}var H=v.div(z(),function(e){return e.isFullheight?"min-height: 100vh;":null}),J=function(e){var t=e.isFullheight,n=Object(E.a)(e,["isFullheight"]);return r.a.createElement("div",n,r.a.createElement(H,{isFullheight:t},e.children))};function Q(){var e=Object(l.a)(["\n    display: block;\n\n    @media screen and (max-width: calc("," - 1px)) {\n      height: 100vw;\n      width: 100vw;\n      background: linear-gradient(to top, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 1)),\n                  url(/me.jpg);\n      background-size: 100vw;\n    }\n\n    @media screen and (min-width: ",") {\n      height: 100vh;\n      width: 100vh;\n      background: linear-gradient(to left, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 1)),\n                  url(/me.jpg);\n      background-size: 100vh;\n      float: right;\n    }\n  "]);return Q=function(){return e},e}function W(){var e=Object(l.a)(["\n    @media screen and (min-width: ",") {\n      padding-left: 15%;\n      min-width: 100%;\n    }\n  "]);return W=function(){return e},e}var G=v.div(W(),function(e){return e.theme.breakpoints.tablet}),M=v.img(Q(),function(e){return e.theme.breakpoints.tablet},function(e){return e.theme.breakpoints.tablet}),$=function(e){return r.a.createElement(s.Consumer,null,function(t){return r.a.createElement("div",e,r.a.createElement(J,{isFullheight:!0},r.a.createElement(G,null,r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column is-narrow"},r.a.createElement("p",{className:"title"},t.hero.title),r.a.createElement("p",{className:"subtitle"},t.hero.subtitle)),r.a.createElement("div",{className:"column"},r.a.createElement(M,null))))))})};function K(){var e=Object(l.a)(["\n    padding: 32px;\n  "]);return K=function(){return e},e}var V=v.div(K()),X=function(e){var t=e.name,n=e.percentage,a=e.projects,i=Object(E.a)(e,["name","percentage","projects"]);return r.a.createElement("div",i,r.a.createElement(U,{header:r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-3"},r.a.createElement("p",{className:"title"},t)),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"tooltip is-tooltip-right is-tooltip-top-touch","data-tooltip":n+"%"},r.a.createElement("progress",{className:"progress is-large is-primary",value:n,max:"100"}))))},a?a.map(function(e,t){return r.a.createElement(V,{key:t},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-narrow"},"Image"),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"content"},r.a.createElement("strong",null,e.name),r.a.createElement("br",null),e.description)),r.a.createElement("div",{className:"column is-narrow"},r.a.createElement("a",{target:"_blank",href:e.url},r.a.createElement("span",{className:"icon"},r.a.createElement(R.ExternalLink,null))))))}):null))},Y=function(e){return r.a.createElement("div",e,r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(q,null,e.skills.map(function(e,t){return r.a.createElement(X,{key:t,name:e.name,percentage:e.knowledgeInPercentage,projects:e.projects})}))}))},Z=function(e){var t=e.name,n=e.imageUrl,a=e.duration,i=e.url,c=Object(E.a)(e,["name","imageUrl","duration","url"]);return r.a.createElement("div",c,r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column is-narrow"},r.a.createElement("div",{className:"image is-128x128"},r.a.createElement("img",{src:n,alt:t}))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"content"},r.a.createElement("strong",null,t))),r.a.createElement("div",{className:"column"},a.endDate?"".concat(a.startDate," ... ").concat(a.endDate):a.startDate),r.a.createElement("div",{className:"column is-narrow"},r.a.createElement("a",{target:"_blank",href:i},r.a.createElement("span",{className:"icon"},r.a.createElement(R.ExternalLink,null))))))},ee=function(e){return r.a.createElement("div",e,r.a.createElement(s.Consumer,null,function(t){return r.a.createElement("div",e,t.experience.map(function(e,t){return r.a.createElement(Z,{key:t,imageUrl:e.imageUrl,name:e.name,duration:e.duration,url:e.url})}))}))},te=function(e){return r.a.createElement("div",e,r.a.createElement(J,{isFullheight:!0},r.a.createElement("div",{className:"container"},e.children)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(s.Provider,{value:o},r.a.createElement(function(e){return a.createElement(f,{theme:h},a.createElement(a.Fragment,null,e.children))},null,r.a.createElement(function(e){return r.a.createElement("div",e,r.a.createElement($,null),r.a.createElement(te,null,r.a.createElement(Y,null)),r.a.createElement(te,null,r.a.createElement(ee,null)))},null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports={hero:{title:"Hi, I'm Roman",subtitle:"and I'm a developer"},skills:[{name:"Typescript",knowledgeInPercentage:90,projects:[{name:"QuickSearch",description:"A searchsite to increase the speed and privacy of a search.",url:"https://github.com/wa4-fearless-otter/QuickSearch"}]},{name:"C#",knowledgeInPercentage:80},{name:"Java",knowledgeInPercentage:80},{name:"React.js",knowledgeInPercentage:70},{name:"GraphQL",knowledgeInPercentage:50}],experience:[{name:"Strabag",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Strabag_SE_Logo_2008.svg/800px-Strabag_SE_Logo_2008.svg.png",duration:{startDate:"2016-10",endDate:"present"},url:"https://strabag.com"}]}}},[[21,2,1]]]);
//# sourceMappingURL=main.8a4893b8.chunk.js.map