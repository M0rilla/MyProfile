_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"1ccW":function(e,t){function i(){return e.exports=i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},i.apply(this,arguments)}e.exports=i},"6SVQ":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return s}));var a=i("nKUr"),n=i("I/41"),o=i("Aiso"),r=i.n(o);function s(e){e.skills;return Object(a.jsxs)(n.a,{children:[Object(a.jsx)("div",{className:"w-screen main",children:Object(a.jsx)("div",{className:"flex items-center justify-center",children:Object(a.jsx)("div",{className:"page-container",children:Object(a.jsxs)("div",{className:"text-center m-14",children:["Programming Languages, Frameworks and Tools",Object(a.jsxs)("div",{className:"m-6",children:[Object(a.jsx)(r.a,{className:"images rounded-full",src:"/html.png",alt:"HTML 5",title:"HTML (Structure)",width:200,height:200}),Object(a.jsx)(r.a,{className:"images rounded-full",src:"/css.png",alt:"CSS 3",title:"CSS (Structure)",width:200,height:200}),Object(a.jsx)(r.a,{className:"images rounded-full",src:"/js.png",alt:"Javascript",title:"Javascript",width:200,height:200}),Object(a.jsx)(r.a,{className:"images rounded-full",src:"/JQuery-01.jpg",alt:"JQuery",title:"Jquery",width:200,height:200}),Object(a.jsx)(r.a,{className:"images",src:"/c.png",alt:"CSharp",title:"CSharp",width:200,height:200}),Object(a.jsx)(r.a,{className:"images",src:"/git.png",alt:"Git",title:"Git",width:200,height:200}),Object(a.jsx)(r.a,{className:"images",src:"/mvc.png",alt:".NET MVC",title:".NET MVC",width:210,height:200}),Object(a.jsx)(r.a,{className:"images",src:"/next-js.svg",alt:"Next.js",title:"Next.js",width:200,height:200}),Object(a.jsx)(r.a,{className:"images rounded-full",src:"/npm.png",alt:"NPM",title:"Node Package Manager",width:200,height:200}),Object(a.jsx)(r.a,{className:"images",src:"/bootstrap-4.svg",alt:"Bootstrap",title:"Bootstrap",width:180,height:200}),Object(a.jsx)(r.a,{className:"images",src:"/tailwindcss.svg",alt:"Tailwind",title:"Tailwind",width:200,height:200}),Object(a.jsx)(r.a,{className:"images",src:"/oracle-logo-1.svg",alt:"Oracle",title:"Oracle DB",width:200,height:200}),Object(a.jsx)(r.a,{className:"images rounded-full",src:"/mysql.png",alt:"MySQL",title:"MySQL",width:220,height:220})]})]})})})}),Object(a.jsx)("div",{className:"divide-y divide-gray-100"})]})}},"98FW":function(e,t){e.exports=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}},Aiso:function(e,t,i){e.exports=i("dQHF")},UWYU:function(e,t,i){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],enableBlurryPlaceholder:!1}},dEHY:function(e,t,i){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,i){"use strict";var a=i("zoAU"),n=i("mPvQ"),o=i("AroE");t.__esModule=!0,t.default=function(e){var t=e.src,i=e.sizes,n=e.unoptimized,o=void 0!==n&&n,u=e.priority,h=void 0!==u&&u,m=e.loading,f=e.className,p=e.quality,b=e.width,v=e.height,y=e.objectFit,N=e.objectPosition,z=e.loader,S=void 0===z?A:z,O=e.placeholder,k=void 0===O?"empty":O,_=e.blurDataURL,E=(0,r.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader","placeholder","blurDataURL"]),q=i?"responsive":"intrinsic",M=!1;"unsized"in E?(M=Boolean(E.unsized),delete E.unsized):"layout"in E&&(E.layout&&(q=E.layout),delete E.layout);w||(k="empty");0;var I=!h&&("lazy"===m||"undefined"===typeof m);t&&t.startsWith("data:")&&(o=!0,I=!1);var L,P,B,D=(0,g.useIntersection)({rootMargin:"200px",disabled:!I}),W=a(D,2),C=W[0],Q=W[1],T=!I||Q,U=x(b),H=x(v),R=x(p),F=U&&H&&U*H<5e3,V="blur"===k&&!F,J=(0,s.default)({position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:y,objectPosition:N},V?{backgroundSize:"cover",backgroundImage:'url("'.concat(_,'")')}:void 0);if("undefined"!==typeof U&&"undefined"!==typeof H&&"fill"!==q){var Y=H/U,G=isNaN(Y)?"100%":"".concat(100*Y,"%");"responsive"===q?(L={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},P={display:"block",boxSizing:"border-box",paddingTop:G}):"intrinsic"===q?(L={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},P={boxSizing:"border-box",display:"block",maxWidth:"100%"},B='<svg width="'.concat(U,'" height="').concat(H,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===q&&(L={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:U,height:H})}else"undefined"===typeof U&&"undefined"===typeof H&&"fill"===q&&(L={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var K={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};T&&(K=j({src:t,unoptimized:o,layout:q,width:U,quality:R,sizes:i,loader:S}));M&&(L=void 0,P=void 0,J=void 0);return c.default.createElement("div",{style:L},P?c.default.createElement("div",{style:P},B?c.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,d.toBase64)(B))}):null):null,!T&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},E,j({src:t,unoptimized:o,layout:q,width:U,quality:R,sizes:i,loader:S}),{src:t,decoding:"async",sizes:i,style:J,className:f}))),c.default.createElement("img",Object.assign({},E,K,{decoding:"async",className:f,ref:function(e){C(e),function(e,t){"blur"===t&&e&&(e.complete?e.style.backgroundImage="none":e.onload=function(){e.style.backgroundImage="none"})}(e,k)},style:J})),h?c.default.createElement(l.default,null,c.default.createElement("link",{key:"__nimg-"+K.src+K.srcSet+K.sizes,rel:"preload",as:"image",href:K.srcSet?void 0:K.src,imagesrcset:K.srcSet,imagesizes:K.sizes})):null)};var r=o(i("98FW")),s=o(i("1ccW")),c=o(i("q1tI")),l=o(i("8Kt/")),d=i("dEHY"),u=i("UWYU"),g=i("vNVm");var h=new Map([["imgix",function(e){var t=e.root,i=e.src,a=e.width,n=e.quality,o=["auto=format","fit=max","w="+a],r="";n&&o.push("q="+n);o.length&&(r="?"+o.join("&"));return"".concat(t).concat(N(i)).concat(r)}],["cloudinary",function(e){var t=e.root,i=e.src,a=e.width,n=e.quality,o=["f_auto","c_limit","w_"+a,"q_"+(n||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(N(i))}],["akamai",function(e){var t=e.root,i=e.src,a=e.width;return"".concat(t).concat(N(i),"?imwidth=").concat(a)}],["default",function(e){var t=e.root,i=e.src,a=e.width,n=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(i),"&w=").concat(a,"&q=").concat(n||75)}]]),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",enableBlurryPlaceholder:!1}||u.imageConfigDefault,f=m.deviceSizes,p=m.imageSizes,b=m.loader,v=m.path,w=(m.domains,m.enableBlurryPlaceholder),y=[].concat(n(f),n(p));function j(e){var t=e.src,i=e.unoptimized,a=e.layout,o=e.width,r=e.quality,s=e.sizes,c=e.loader;if(i)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,i){if(i&&("fill"===t||"responsive"===t)){for(var a,o=/(^|\s)(1?\d?\d)vw/g,r=[];a=o.exec(i);a)r.push(parseInt(a[2]));if(r.length){var s=.01*Math.min.apply(Math,r);return{widths:y.filter((function(e){return e>=f[0]*s})),kind:"w"}}return{widths:y,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:f,kind:"w"}:{widths:n(new Set([e,2*e].map((function(e){return y.find((function(t){return t>=e}))||y[y.length-1]})))),kind:"x"}}(o,a,s),d=l.widths,u=l.kind,g=d.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:d.map((function(e,i){return"".concat(c({src:t,quality:r,width:e})," ").concat("w"===u?e:i+1).concat(u)})).join(", "),src:c({src:t,quality:r,width:d[g]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t=h.get(b);if(t)return t((0,s.default)({root:v},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(b))}function N(e){return"/"===e[0]?e.slice(1):e}f.sort((function(e,t){return e-t})),y.sort((function(e,t){return e-t}))},ofEh:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/skills",function(){return i("6SVQ")}])}},[["ofEh",0,2,1,3]]]);