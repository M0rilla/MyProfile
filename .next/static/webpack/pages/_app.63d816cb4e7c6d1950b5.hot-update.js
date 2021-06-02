webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/style.css":
/*!**************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/style.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --desktop: 1200px;\n  --laptop: 1024px;\n  --tablet: 768px;\n  --phone: 480px;\n  --bg-primary: rgba(55, 65, 81, 1);\n  --bg-secondary: rgba(255, 255, 255, 1);\n  font-size: 16px;\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody::-webkit-scrollbar {\n  width: 0.40rem;\n}\n\nbody::-webkit-scrollbar-track {\n  background: white;\n}\n\nbody::-webkit-scrollbar-thumb {\n  background: black;\n}\n\n.main {\n  margin-top: 8rem;\n}\n\n.head {\n  width: 100vw;\n  position:fixed;\n  background: white;\n  z-index: 1;\n}\n\n.nav {\n  position: fixed;\n  color: white;\n  z-index: 1;\n}\n\n.home-color {\n  background: linear-gradient(\r\n    180deg,\r\n    rgba(55, 65, 81, 1) 0%,\r\n    rgba(55, 65, 81, 0.7987570028011204) 50%,\r\n    rgba(255, 255, 255, 1) 100%\r\n  );\n}\n\n.home-bgstyle {\n  min-height: 200px;\n}\n\n.home-textbg {\n  background-color: rgb(0 26 41);\n  font-size: 16px;\n  padding: 10px;\n  line-height: 30px;\n}\n\n.social-media{\n  color: white;\n  text-align: center;\n  border-radius: 0.2rem;\n  background-color: var(--bg-primary);\n  line-height: 2rem;\n}\n\n.photo {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n}\n\n/* PDF */\n\n.Viewer {\n  width: 100%;\n  margin-top: 20px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  flex-direction: column;\n}\n\n.Viewer .header {\n  width: 90vw;\n  height: 55px;\n  align-items: center;\n  align-content: center;\n  padding: 8px 8px 8px 16px;\n  box-sizing: border-box;\n  background: #00709c;\n  font-size: 1.2em;\n  line-height: 44px;\n  color: white;\n}\n\n.Viewer .Webviewer {\n  width: 90vw;\n  height: 800px;\n}\n\n/* END PDF */\n\n/* navbar menu */\n\n.active {\n  background-color:white;\n  font-weight: bold;\n  color: Black;\n}\n\n/* social media btns */\n\nbutton {\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-inline: 1rem;\n  margin-right: 0.5rem;\n}\n\n/* Small Screens */\n\n@media only screen and (max-width: 600px){\n  /* index sm ----- */\n\n  .head{\n    font-size: 1.2rem;\n    padding: 1rem;\n  }\n\n  .nav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    bottom: 0;\n    width: 100vw;\n  }\n\n  .main {\n    margin-top: 5rem;\n  }\n\n  .page-content{\n    display:block;\n  }\n\n  .home-textbg {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 20px;\n    margin-bottom: 1.5rem;\n  }\n\n  .photo {\n    padding: 1rem !important;\n  }\n\n  /* skills sm ----- */\n\n  .images {\n    position: static;\n  }\n}\n\n/* Large Screens */\n\n@media only screen and (min-width: 600px){\n  /* index lg ----- */\n\n  .head{\n    font-size: 3rem;\n    line-height: 1;\n    padding: 1rem;\n  }\n\n  .nav {\n    margin-top: 8rem;\n    width: 100vw;\n    height: 2.3rem;\n  }\n\n  .main {\n    margin-top: 10rem;\n  }\n\n  .home-bgstyle{\n    margin-top: 2rem;\n    max-width: 750px;\n    min-width: 600x;\n  }\n\n  .home-textbg {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 20px;\n    margin-top: 3rem;\n  }\n\n  .page-content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .photo{\n    margin-top: 1rem;\n  }\n\n  .social-media{\n    width: 50rem;\n    height: 2rem;\n  }\n\n  /* experiences lg ----- */\n\n  .page-content-exp {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    grid-template-columns: 1fr 1fr;\n    margin-top: 2rem;\n    margin-left: 5rem;\n    margin-right: 5rem;\n    width: 120vh;\n  }\n\n  /* skills lg ----- */\n\n  .images {\n    position:relative;\n  }\n}\n\n/* Medium screen */\n\n@media only screen and (max-width: 900px){\n  /* experiences sm ----- */\n\n  .page-content-exp{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n}", "",{"version":3,"sources":["webpack://styles/style.css"],"names":[],"mappings":"AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,cAAc;EAEd,iCAAiC;EACjC,sCAAsC;EACtC,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU;EACV,yCAAyC;AAC3C;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE;;;;;GAKC;AACH;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,eAAe;EACf,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;AACf;;AAEA,QAAQ;;AACR;EACE,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EAErB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AACA,YAAY;;AAEZ,gBAAgB;;AAChB;EACE,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;AACd;;AAEA,sBAAsB;;AACtB;EACE,oBAAoB;EACpB,8BAA8B;EAC9B,mBAAmB;EACnB,oBAAoB;EACpB,oBAAoB;AACtB;;AAEA,kBAAkB;;AAClB;EAEE,mBAAmB;;EACrB;IACE,iBAAiB;IACjB,aAAa;EACf;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,YAAY;EACd;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,qBAAqB;EACvB;;EAEA;IACE,wBAAwB;EAC1B;;EAEA,oBAAoB;;EACpB;IACC,gBAAgB;EACjB;AACA;;AAEA,kBAAkB;;AAClB;EAEE,mBAAmB;;EACrB;IACE,eAAe;IACf,cAAc;IACd,aAAa;EACf;;EAEA;IACE,gBAAgB;IAChB,YAAY;IACZ,cAAc;EAChB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,8BAA8B;EAChC;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,YAAY;EACd;;EAEA,yBAAyB;;EACzB;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,8BAA8B;IAC9B,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;EACd;;EAEA,oBAAoB;;EACpB;IACE,iBAAiB;EACnB;AACA;;AAEA,kBAAkB;;AAClB;EACE,yBAAyB;;EACzB;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;EACrB;AACF","sourcesContent":["\r\n:root {\r\n  --desktop: 1200px;\r\n  --laptop: 1024px;\r\n  --tablet: 768px;\r\n  --phone: 480px;\r\n\r\n  --bg-primary: rgba(55, 65, 81, 1);\r\n  --bg-secondary: rgba(255, 255, 255, 1);\r\n  font-size: 16px;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody::-webkit-scrollbar {\r\n  width: 0.40rem;  \r\n}\r\n\r\nbody::-webkit-scrollbar-track {  \r\n  background: white;\r\n}\r\n\r\nbody::-webkit-scrollbar-thumb {\r\n  background: black;\r\n}\r\n\r\n.main {\r\n  margin-top: 8rem; \r\n}\r\n\r\n.head {  \r\n  width: 100vw;    \r\n  position:fixed;  \r\n  background: white;\r\n  z-index: 1;\r\n}\r\n\r\n.nav {\r\n  position: fixed;\r\n  color: white;\r\n  z-index: 1;\r\n}\r\n\r\n.home-color {\r\n  background: linear-gradient(\r\n    180deg,\r\n    rgba(55, 65, 81, 1) 0%,\r\n    rgba(55, 65, 81, 0.7987570028011204) 50%,\r\n    rgba(255, 255, 255, 1) 100%\r\n  );\r\n}\r\n\r\n.home-bgstyle { \r\n  min-height: 200px;  \r\n}\r\n\r\n.home-textbg {\r\n  background-color: rgb(0 26 41);\r\n  font-size: 16px;\r\n  padding: 10px;\r\n  line-height: 30px;\r\n}\r\n\r\n.social-media{\r\n  color: white;\r\n  text-align: center;  \r\n  border-radius: 0.2rem;\r\n  background-color: var(--bg-primary); \r\n  line-height: 2rem; \r\n}\r\n\r\n.photo {\r\n  display: flex;  \r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem;\r\n}\r\n\r\n/* PDF */\r\n.Viewer {\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center; \r\n  align-content: center; \r\n \r\n  flex-direction: column;\r\n}\r\n\r\n.Viewer .header {\r\n  width: 90vw;\r\n  height: 55px;\r\n  align-items: center; \r\n  align-content: center; \r\n  padding: 8px 8px 8px 16px;\r\n  box-sizing: border-box;\r\n  background: #00709c;\r\n  font-size: 1.2em;\r\n  line-height: 44px;\r\n  color: white;\r\n}\r\n\r\n.Viewer .Webviewer {\r\n  width: 90vw;\r\n  height: 800px;  \r\n}\r\n/* END PDF */\r\n\r\n/* navbar menu */\r\n.active {   \r\n  background-color:white;\r\n  font-weight: bold;\r\n  color: Black;\r\n}\r\n\r\n/* social media btns */\r\nbutton {\r\n  display: inline-flex;  \r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-inline: 1rem;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n/* Small Screens */\r\n@media only screen and (max-width: 600px){\r\n\r\n  /* index sm ----- */\r\n.head{\r\n  font-size: 1.2rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  bottom: 0;\r\n  width: 100vw;\r\n}\r\n\r\n.main {\r\n  margin-top: 5rem; \r\n}\r\n\r\n.page-content{\r\n  display:block;\r\n}\r\n\r\n.home-textbg {\r\n  display: flex;  \r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;   \r\n  margin-bottom: 1.5rem; \r\n}\r\n\r\n.photo {\r\n  padding: 1rem !important;\r\n}\r\n\r\n/* skills sm ----- */\r\n.images {\r\n position: static;\r\n}\r\n}\r\n\r\n/* Large Screens */\r\n@media only screen and (min-width: 600px){\r\n\r\n  /* index lg ----- */\r\n.head{\r\n  font-size: 3rem; \r\n  line-height: 1;\r\n  padding: 1rem;\r\n}\r\n\r\n.nav {\r\n  margin-top: 8rem;\r\n  width: 100vw;\r\n  height: 2.3rem; \r\n}\r\n\r\n.main {\r\n  margin-top: 10rem;  \r\n}\r\n\r\n.home-bgstyle{\r\n  margin-top: 2rem;\r\n  max-width: 750px;\r\n  min-width: 600x;\r\n}\r\n\r\n.home-textbg {\r\n  display: flex;  \r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;   \r\n  margin-top: 3rem; \r\n}\r\n\r\n.page-content {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.photo{\r\n  margin-top: 1rem;\r\n}\r\n\r\n.social-media{\r\n  width: 50rem;\r\n  height: 2rem; \r\n}\r\n\r\n/* experiences lg ----- */\r\n.page-content-exp {    \r\n  display: grid;\r\n  align-items: center;\r\n  justify-content: center;\r\n  grid-template-columns: 1fr 1fr;   \r\n  margin-top: 2rem;\r\n  margin-left: 5rem;\r\n  margin-right: 5rem;\r\n  width: 120vh;\r\n}\r\n\r\n/* skills lg ----- */\r\n.images {\r\n  position:relative;\r\n}\r\n}\r\n\r\n/* Medium screen */\r\n@media only screen and (max-width: 900px){\r\n  /* experiences sm ----- */\r\n  .page-content-exp{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLFVBQVUsc0JBQXNCLHFCQUFxQixvQkFBb0IsbUJBQW1CLHNDQUFzQywyQ0FBMkMsb0JBQW9CLEdBQUcsVUFBVSxnQkFBZ0IsaUJBQWlCLGNBQWMsZUFBZSw4Q0FBOEMsR0FBRyw2QkFBNkIsbUJBQW1CLEdBQUcsbUNBQW1DLHNCQUFzQixHQUFHLG1DQUFtQyxzQkFBc0IsR0FBRyxXQUFXLHFCQUFxQixHQUFHLFdBQVcsaUJBQWlCLG1CQUFtQixzQkFBc0IsZUFBZSxHQUFHLFVBQVUsb0JBQW9CLGlCQUFpQixlQUFlLEdBQUcsaUJBQWlCLDBLQUEwSyxHQUFHLG1CQUFtQixzQkFBc0IsR0FBRyxrQkFBa0IsbUNBQW1DLG9CQUFvQixrQkFBa0Isc0JBQXNCLEdBQUcsa0JBQWtCLGlCQUFpQix1QkFBdUIsMEJBQTBCLHdDQUF3QyxzQkFBc0IsR0FBRyxZQUFZLGtCQUFrQiwyQkFBMkIsbUNBQW1DLHdCQUF3QixrQkFBa0IsR0FBRywwQkFBMEIsZ0JBQWdCLHFCQUFxQixpQkFBaUIsa0JBQWtCLHdCQUF3QiwwQkFBMEIsMkJBQTJCLEdBQUcscUJBQXFCLGdCQUFnQixpQkFBaUIsd0JBQXdCLDBCQUEwQiw4QkFBOEIsMkJBQTJCLHdCQUF3QixxQkFBcUIsc0JBQXNCLGlCQUFpQixHQUFHLHdCQUF3QixnQkFBZ0Isa0JBQWtCLEdBQUcsbURBQW1ELDJCQUEyQixzQkFBc0IsaUJBQWlCLEdBQUcsdUNBQXVDLHlCQUF5QixtQ0FBbUMsd0JBQXdCLHlCQUF5Qix5QkFBeUIsR0FBRyxxRUFBcUUsb0NBQW9DLHdCQUF3QixvQkFBb0IsS0FBSyxZQUFZLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGdCQUFnQixtQkFBbUIsS0FBSyxh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QXdCLDBCQUEwQiw4QkFBOEIscUNBQXFDLDBCQUEwQix3QkFBd0IseUJBQXlCLG1CQUFtQixLQUFLLDBDQUEwQyx3QkFBd0IsS0FBSyxLQUFLLHlFQUF5RSx3REFBd0Qsc0JBQXNCLCtCQUErQixnQ0FBZ0MsNEJBQTRCLE9BQU8sS0FBSyxtQkFBbUI7QUFDNTlVO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42M2Q4MTZjYjRlN2M2ZDE5NTBiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1kZXNrdG9wOiAxMjAwcHg7XFxuICAtLWxhcHRvcDogMTAyNHB4O1xcbiAgLS10YWJsZXQ6IDc2OHB4O1xcbiAgLS1waG9uZTogNDgwcHg7XFxuICAtLWJnLXByaW1hcnk6IHJnYmEoNTUsIDY1LCA4MSwgMSk7XFxuICAtLWJnLXNlY29uZGFyeTogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDAuNDByZW07XFxufVxcblxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuLm1haW4ge1xcbiAgbWFyZ2luLXRvcDogOHJlbTtcXG59XFxuXFxuLmhlYWQge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcG9zaXRpb246Zml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmhvbWUtY29sb3Ige1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAxODBkZWcsXFxyXFxuICAgIHJnYmEoNTUsIDY1LCA4MSwgMSkgMCUsXFxyXFxuICAgIHJnYmEoNTUsIDY1LCA4MSwgMC43OTg3NTcwMDI4MDExMjA0KSA1MCUsXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJVxcclxcbiAgKTtcXG59XFxuXFxuLmhvbWUtYmdzdHlsZSB7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLmhvbWUtdGV4dGJnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDI2IDQxKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYXtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnkpO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcblxcbi5waG90byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4vKiBQREYgKi9cXG5cXG4uVmlld2VyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLlZpZXdlciAuaGVhZGVyIHtcXG4gIHdpZHRoOiA5MHZ3O1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDE2cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogIzAwNzA5YztcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBsaW5lLWhlaWdodDogNDRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLlZpZXdlciAuV2Vidmlld2VyIHtcXG4gIHdpZHRoOiA5MHZ3O1xcbiAgaGVpZ2h0OiA4MDBweDtcXG59XFxuXFxuLyogRU5EIFBERiAqL1xcblxcbi8qIG5hdmJhciBtZW51ICovXFxuXFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogQmxhY2s7XFxufVxcblxcbi8qIHNvY2lhbCBtZWRpYSBidG5zICovXFxuXFxuYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi8qIFNtYWxsIFNjcmVlbnMgKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcXG4gIC8qIGluZGV4IHNtIC0tLS0tICovXFxuXFxuICAuaGVhZHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuXFxuICAubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgfVxcblxcbiAgLm1haW4ge1xcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgfVxcblxcbiAgLnBhZ2UtY29udGVudHtcXG4gICAgZGlzcGxheTpibG9jaztcXG4gIH1cXG5cXG4gIC5ob21lLXRleHRiZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICB9XFxuXFxuICAucGhvdG8ge1xcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAvKiBza2lsbHMgc20gLS0tLS0gKi9cXG5cXG4gIC5pbWFnZXMge1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgfVxcbn1cXG5cXG4vKiBMYXJnZSBTY3JlZW5zICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCl7XFxuICAvKiBpbmRleCBsZyAtLS0tLSAqL1xcblxcbiAgLmhlYWR7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuXFxuICAubmF2IHtcXG4gICAgbWFyZ2luLXRvcDogOHJlbTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDIuM3JlbTtcXG4gIH1cXG5cXG4gIC5tYWluIHtcXG4gICAgbWFyZ2luLXRvcDogMTByZW07XFxuICB9XFxuXFxuICAuaG9tZS1iZ3N0eWxle1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xcbiAgICBtaW4td2lkdGg6IDYwMHg7XFxuICB9XFxuXFxuICAuaG9tZS10ZXh0Ymcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIH1cXG5cXG4gIC5wYWdlLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxuXFxuICAucGhvdG97XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICB9XFxuXFxuICAuc29jaWFsLW1lZGlhe1xcbiAgICB3aWR0aDogNTByZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gIH1cXG5cXG4gIC8qIGV4cGVyaWVuY2VzIGxnIC0tLS0tICovXFxuXFxuICAucGFnZS1jb250ZW50LWV4cCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxuICAgIHdpZHRoOiAxMjB2aDtcXG4gIH1cXG5cXG4gIC8qIHNraWxscyBsZyAtLS0tLSAqL1xcblxcbiAgLmltYWdlcyB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgfVxcbn1cXG5cXG4vKiBNZWRpdW0gc2NyZWVuICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XFxuICAvKiBleHBlcmllbmNlcyBzbSAtLS0tLSAqL1xcblxcbiAgLnBhZ2UtY29udGVudC1leHB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFFZCxpQ0FBaUM7RUFDakMsc0NBQXNDO0VBQ3RDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0U7Ozs7O0dBS0M7QUFDSDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBLFFBQVE7O0FBQ1I7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUVyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUNBLFlBQVk7O0FBRVosZ0JBQWdCOztBQUNoQjtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBLHNCQUFzQjs7QUFDdEI7RUFDRSxvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsb0JBQW9CO0FBQ3RCOztBQUVBLGtCQUFrQjs7QUFDbEI7RUFFRSxtQkFBbUI7O0VBQ3JCO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQSxvQkFBb0I7O0VBQ3BCO0lBQ0MsZ0JBQWdCO0VBQ2pCO0FBQ0E7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUVFLG1CQUFtQjs7RUFDckI7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUEseUJBQXlCOztFQUN6QjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0VBRUEsb0JBQW9COztFQUNwQjtJQUNFLGlCQUFpQjtFQUNuQjtBQUNBOztBQUVBLGtCQUFrQjs7QUFDbEI7RUFDRSx5QkFBeUI7O0VBQ3pCO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1kZXNrdG9wOiAxMjAwcHg7XFxyXFxuICAtLWxhcHRvcDogMTAyNHB4O1xcclxcbiAgLS10YWJsZXQ6IDc2OHB4O1xcclxcbiAgLS1waG9uZTogNDgwcHg7XFxyXFxuXFxyXFxuICAtLWJnLXByaW1hcnk6IHJnYmEoNTUsIDY1LCA4MSwgMSk7XFxyXFxuICAtLWJnLXNlY29uZGFyeTogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDAuNDByZW07ICBcXHJcXG59XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgeyAgXFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIG1hcmdpbi10b3A6IDhyZW07IFxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZCB7ICBcXHJcXG4gIHdpZHRoOiAxMDB2dzsgICAgXFxyXFxuICBwb3NpdGlvbjpmaXhlZDsgIFxcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWNvbG9yIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgMTgwZGVnLFxcclxcbiAgICByZ2JhKDU1LCA2NSwgODEsIDEpIDAlLFxcclxcbiAgICByZ2JhKDU1LCA2NSwgODEsIDAuNzk4NzU3MDAyODAxMTIwNCkgNTAlLFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCVcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWJnc3R5bGUgeyBcXHJcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4OyAgXFxyXFxufVxcclxcblxcclxcbi5ob21lLXRleHRiZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAyNiA0MSk7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWF7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnkpOyBcXHJcXG4gIGxpbmUtaGVpZ2h0OiAycmVtOyBcXHJcXG59XFxyXFxuXFxyXFxuLnBob3RvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7ICBcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUERGICovXFxyXFxuLlZpZXdlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7IFxcclxcbiBcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5WaWV3ZXIgLmhlYWRlciB7XFxyXFxuICB3aWR0aDogOTB2dztcXHJcXG4gIGhlaWdodDogNTVweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyOyBcXHJcXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDE2cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYmFja2dyb3VuZDogIzAwNzA5YztcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBsaW5lLWhlaWdodDogNDRweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLlZpZXdlciAuV2Vidmlld2VyIHtcXHJcXG4gIHdpZHRoOiA5MHZ3O1xcclxcbiAgaGVpZ2h0OiA4MDBweDsgIFxcclxcbn1cXHJcXG4vKiBFTkQgUERGICovXFxyXFxuXFxyXFxuLyogbmF2YmFyIG1lbnUgKi9cXHJcXG4uYWN0aXZlIHsgICBcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiBCbGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLyogc29jaWFsIG1lZGlhIGJ0bnMgKi9cXHJcXG5idXR0b24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7ICBcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTbWFsbCBTY3JlZW5zICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XFxyXFxuXFxyXFxuICAvKiBpbmRleCBzbSAtLS0tLSAqL1xcclxcbi5oZWFke1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVyZW07IFxcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1jb250ZW50e1xcclxcbiAgZGlzcGxheTpibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtdGV4dGJnIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7ICBcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyMHB4OyAgIFxcclxcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtOyBcXHJcXG59XFxyXFxuXFxyXFxuLnBob3RvIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2tpbGxzIHNtIC0tLS0tICovXFxyXFxuLmltYWdlcyB7XFxyXFxuIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxufVxcclxcbn1cXHJcXG5cXHJcXG4vKiBMYXJnZSBTY3JlZW5zICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCl7XFxyXFxuXFxyXFxuICAvKiBpbmRleCBsZyAtLS0tLSAqL1xcclxcbi5oZWFke1xcclxcbiAgZm9udC1zaXplOiAzcmVtOyBcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBtYXJnaW4tdG9wOiA4cmVtO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAyLjNyZW07IFxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHJlbTsgIFxcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1iZ3N0eWxle1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIG1heC13aWR0aDogNzUwcHg7XFxyXFxuICBtaW4td2lkdGg6IDYwMHg7XFxyXFxufVxcclxcblxcclxcbi5ob21lLXRleHRiZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4OyAgXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDsgICBcXHJcXG4gIG1hcmdpbi10b3A6IDNyZW07IFxcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi5waG90b3tcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWF7XFxyXFxuICB3aWR0aDogNTByZW07XFxyXFxuICBoZWlnaHQ6IDJyZW07IFxcclxcbn1cXHJcXG5cXHJcXG4vKiBleHBlcmllbmNlcyBsZyAtLS0tLSAqL1xcclxcbi5wYWdlLWNvbnRlbnQtZXhwIHsgICAgXFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyAgIFxcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcclxcbiAgd2lkdGg6IDEyMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBza2lsbHMgbGcgLS0tLS0gKi9cXHJcXG4uaW1hZ2VzIHtcXHJcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbn1cXHJcXG59XFxyXFxuXFxyXFxuLyogTWVkaXVtIHNjcmVlbiAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xcclxcbiAgLyogZXhwZXJpZW5jZXMgc20gLS0tLS0gKi9cXHJcXG4gIC5wYWdlLWNvbnRlbnQtZXhwe1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=