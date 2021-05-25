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
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --desktop: 1200px;\n  --laptop: 1024px;\n  --tablet: 768px;\n  --phone: 480px;\n  --bg-primary: rgba(55, 65, 81, 1);\n  --bg-secondary: rgba(255, 255, 255, 1);\n  font-size: 16px;\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody::-webkit-scrollbar {\n  width: 0.40rem;\n}\n\nbody::-webkit-scrollbar-track {\n  background: white;\n}\n\nbody::-webkit-scrollbar-thumb {\n  background: black;\n}\n\n.main {\n  margin-top: 8rem;\n  padding: 1rem;\n}\n\n.head {\n  width: 100vw;\n  position:fixed;\n  background: white;\n  z-index: 1;\n}\n\n.nav {\n  position: fixed;\n  color: white;\n  z-index: 1;\n}\n\n.home-color {\n  background: linear-gradient(\r\n    180deg,\r\n    rgba(55, 65, 81, 1) 0%,\r\n    rgba(55, 65, 81, 0.7987570028011204) 50%,\r\n    rgba(255, 255, 255, 1) 100%\r\n  );\n}\n\n.home-bgstyle {\n  min-height: 200px;\n}\n\n.home-textbg {\n  background-color: rgb(0 26 41);\n  font-size: 16px;\n  padding: 10px;\n  line-height: 30px;\n}\n\n.social-media{\n  color: white;\n  text-align: center;\n  border-radius: 0.2rem;\n  background-color: var(--bg-primary);\n  line-height: 2rem;\n}\n\n.photo {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n}\n\n.images {\n  position: relative;\n  padding: 10px !important;\n}\n\n/* PDF */\n\n.Viewer {\n  width: 100%;\n  margin-top: 20px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  flex-direction: column;\n}\n\n.Viewer .header {\n  width: 90vw;\n  height: 55px;\n  align-items: center;\n  align-content: center;\n  padding: 8px 8px 8px 16px;\n  box-sizing: border-box;\n  background: #00709c;\n  font-size: 1.2em;\n  line-height: 44px;\n  color: white;\n}\n\n.Viewer .Webviewer {\n  width: 90vw;\n  height: 800px;\n}\n\n/* END PDF */\n\n/* navbar menu */\n\n.active {\n  background-color:white;\n  font-weight: bold;\n  color: Black;\n}\n\n/* social media btns */\n\nbutton {\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-inline: 1rem;\n  margin-right: 0.5rem;\n}\n\n/* Small Screens */\n\n@media only screen and (max-width: 600px){\n  /* index sm ----- */\n\n  .head{\n    font-size: 2rem;\n    padding: 0.5rem;\n  }\n\n  .nav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    bottom: 0;\n    width: 100vw;\n  }\n\n  .page-content{\n    display:block;\n  }\n\n  .home-textbg {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 20px;\n    margin-bottom: 1.5rem;\n  }\n\n  .photo {\n    padding: 1rem !important;\n  }\n\n  /* experiences sm ----- */\n\n  .page-content-exp{\n    display: flex;\n    grid-template-columns: 1fr;\n    flex-direction: column;\n  }\n}\n\n/* Large Screens */\n\n@media only screen and (min-width: 601px){\n  /* index lg ----- */\n\n  .head{\n    font-size: 3rem;\n    line-height: 1;\n    padding: 1rem;\n  }\n\n  .nav {\n    margin-top: 8rem;\n    width: 100vw;\n    height: 2.3rem;\n  }\n\n  .main {\n    margin-top: 10rem;\n  }\n\n  .home-bgstyle{\n    margin-top: 2rem;\n    max-width: 750px;\n    min-width: 600x;\n  }\n\n  .home-textbg {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 20px;\n    margin-top: 3rem;\n  }\n\n  .page-content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .photo{\n    margin-top: 1rem;\n  }\n\n  .social-media{\n    width: 50rem;\n    height: 2rem;\n  }\n\n  /* experiences lg ----- */\n\n  .page-content-exp {\n    display: grid;\n    align-self: center;\n    justify-self: center;\n    grid-template-columns: 1fr 1fr;\n    width: 120vh;\n  }\n}", "",{"version":3,"sources":["webpack://styles/style.css"],"names":[],"mappings":"AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,cAAc;EAEd,iCAAiC;EACjC,sCAAsC;EACtC,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU;EACV,yCAAyC;AAC3C;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE;;;;;GAKC;AACH;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,eAAe;EACf,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA,QAAQ;;AACR;EACE,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EAErB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AACA,YAAY;;AAEZ,gBAAgB;;AAChB;EACE,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;AACd;;AAEA,sBAAsB;;AACtB;EACE,oBAAoB;EACpB,8BAA8B;EAC9B,mBAAmB;EACnB,oBAAoB;EACpB,oBAAoB;AACtB;;AAEA,kBAAkB;;AAClB;EAEE,mBAAmB;;EACrB;IACE,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,YAAY;EACd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,qBAAqB;EACvB;;EAEA;IACE,wBAAwB;EAC1B;;EACE,yBAAyB;;EAC3B;IACE,aAAa;IACb,0BAA0B;IAC1B,sBAAsB;EACxB;AAEA;;AAEA,kBAAkB;;AAClB;EAEE,mBAAmB;;EACrB;IACE,eAAe;IACf,cAAc;IACd,aAAa;EACf;;EAEA;IACE,gBAAgB;IAChB,YAAY;IACZ,cAAc;EAChB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,8BAA8B;EAChC;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,YAAY;EACd;;EAEE,yBAAyB;;EAE3B;IACE,aAAa;IACb,kBAAkB;IAClB,oBAAoB;IACpB,8BAA8B;IAC9B,YAAY;EACd;AAEA","sourcesContent":["\r\n:root {\r\n  --desktop: 1200px;\r\n  --laptop: 1024px;\r\n  --tablet: 768px;\r\n  --phone: 480px;\r\n\r\n  --bg-primary: rgba(55, 65, 81, 1);\r\n  --bg-secondary: rgba(255, 255, 255, 1);\r\n  font-size: 16px;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody::-webkit-scrollbar {\r\n  width: 0.40rem;  \r\n}\r\n\r\nbody::-webkit-scrollbar-track {  \r\n  background: white;\r\n}\r\n\r\nbody::-webkit-scrollbar-thumb {\r\n  background: black;\r\n}\r\n\r\n.main {\r\n  margin-top: 8rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.head {  \r\n  width: 100vw;    \r\n  position:fixed;  \r\n  background: white;\r\n  z-index: 1;\r\n}\r\n\r\n.nav {\r\n  position: fixed;\r\n  color: white;\r\n  z-index: 1;\r\n}\r\n\r\n.home-color {\r\n  background: linear-gradient(\r\n    180deg,\r\n    rgba(55, 65, 81, 1) 0%,\r\n    rgba(55, 65, 81, 0.7987570028011204) 50%,\r\n    rgba(255, 255, 255, 1) 100%\r\n  );\r\n}\r\n\r\n.home-bgstyle { \r\n  min-height: 200px;  \r\n}\r\n\r\n.home-textbg {\r\n  background-color: rgb(0 26 41);\r\n  font-size: 16px;\r\n  padding: 10px;\r\n  line-height: 30px;\r\n}\r\n\r\n.social-media{\r\n  color: white;\r\n  text-align: center;  \r\n  border-radius: 0.2rem;\r\n  background-color: var(--bg-primary); \r\n  line-height: 2rem; \r\n}\r\n\r\n.photo {\r\n  display: flex;  \r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem;\r\n}\r\n\r\n.images {\r\n  position: relative;  \r\n  padding: 10px !important;  \r\n}\r\n\r\n/* PDF */\r\n.Viewer {\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center; \r\n  align-content: center; \r\n \r\n  flex-direction: column;\r\n}\r\n\r\n.Viewer .header {\r\n  width: 90vw;\r\n  height: 55px;\r\n  align-items: center; \r\n  align-content: center; \r\n  padding: 8px 8px 8px 16px;\r\n  box-sizing: border-box;\r\n  background: #00709c;\r\n  font-size: 1.2em;\r\n  line-height: 44px;\r\n  color: white;\r\n}\r\n\r\n.Viewer .Webviewer {\r\n  width: 90vw;\r\n  height: 800px;  \r\n}\r\n/* END PDF */\r\n\r\n/* navbar menu */\r\n.active {   \r\n  background-color:white;\r\n  font-weight: bold;\r\n  color: Black;\r\n}\r\n\r\n/* social media btns */\r\nbutton {\r\n  display: inline-flex;  \r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-inline: 1rem;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n/* Small Screens */\r\n@media only screen and (max-width: 600px){\r\n\r\n  /* index sm ----- */\r\n.head{\r\n  font-size: 2rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  bottom: 0;\r\n  width: 100vw;\r\n}\r\n\r\n.page-content{\r\n  display:block;\r\n}\r\n\r\n.home-textbg {\r\n  display: flex;  \r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;   \r\n  margin-bottom: 1.5rem; \r\n}\r\n\r\n.photo {\r\n  padding: 1rem !important;\r\n}\r\n  /* experiences sm ----- */\r\n.page-content-exp{\r\n  display: flex;\r\n  grid-template-columns: 1fr;\r\n  flex-direction: column;\r\n}\r\n\r\n}\r\n\r\n/* Large Screens */\r\n@media only screen and (min-width: 601px){\r\n\r\n  /* index lg ----- */\r\n.head{\r\n  font-size: 3rem; \r\n  line-height: 1;\r\n  padding: 1rem;\r\n}\r\n\r\n.nav {\r\n  margin-top: 8rem;\r\n  width: 100vw;\r\n  height: 2.3rem; \r\n}\r\n\r\n.main {\r\n  margin-top: 10rem;  \r\n}\r\n\r\n.home-bgstyle{\r\n  margin-top: 2rem;\r\n  max-width: 750px;\r\n  min-width: 600x;\r\n}\r\n\r\n.home-textbg {\r\n  display: flex;  \r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;   \r\n  margin-top: 3rem; \r\n}\r\n\r\n.page-content {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.photo{\r\n  margin-top: 1rem;\r\n}\r\n\r\n.social-media{\r\n  width: 50rem;\r\n  height: 2rem; \r\n}\r\n\r\n  /* experiences lg ----- */\r\n\r\n.page-content-exp {    \r\n  display: grid;\r\n  align-self: center;\r\n  justify-self: center;\r\n  grid-template-columns: 1fr 1fr;   \r\n  width: 120vh;\r\n}\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLFVBQVUsc0JBQXNCLHFCQUFxQixvQkFBb0IsbUJBQW1CLHNDQUFzQywyQ0FBMkMsb0JBQW9CLEdBQUcsVUFBVSxnQkFBZ0IsaUJBQWlCLGNBQWMsZUFBZSw4Q0FBOEMsR0FBRyw2QkFBNkIsbUJBQW1CLEdBQUcsbUNBQW1DLHNCQUFzQixHQUFHLG1DQUFtQyxzQkFBc0IsR0FBRyxXQUFXLHFCQUFxQixrQkFBa0IsR0FBRyxXQUFXLGlCQUFpQixtQkFBbUIsc0JBQXNCLGVBQWUsR0FBRyxVQUFVLG9CQUFvQixpQkFBaUIsZUFBZSxHQUFHLGlCQUFpQiwwS0FBMEssR0FBRyxtQkFBbUIsc0JBQXNCLEdBQUcsa0JBQWtCLG1DQUFtQyxvQkFBb0Isa0JBQWtCLHNCQUFzQixHQUFHLGtCQUFrQixpQkFBaUIsdUJBQXVCLDBCQUEwQix3Q0FBd0Msc0JBQXNCLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLG1DQUFtQyx3QkFBd0Isa0JBQWtCLEdBQUcsYUFBYSx1QkFBdUIsNkJBQTZCLEdBQUcsMEJBQTBCLGdCQUFnQixxQkFBcUIsaUJBQWlCLGtCQUFrQix3QkFBd0IsMEJBQTBCLDJCQUEyQixHQUFHLHFCQUFxQixnQkFBZ0IsaUJBQWlCLHdCQUF3QiwwQkFBMEIsOEJBQThCLDJCQUEyQix3QkFBd0IscUJBQXFCLHNCQUFzQixpQkFBaUIsR0FBRyx3QkFBd0IsZ0JBQWdCLGtCQUFrQixHQUFHLG1EQUFtRCwyQkFBMkIsc0JBQXNCLGlCQUFpQixHQUFHLHVDQUF1Qyx5QkFBeUIsbUNBQW1DLHdCQUF3Qix5QkFBeUIseUJBQXlCLEdBQUcscUVBQXFFLG9DQUFvQyxzQkFBc0Isc0JBQXNCLEtBQUssWUFBWSxvQkFBb0IsOEJB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Z2VzL19hcHAuMmYyOWY2ODFlYTRjMGQ4M2Y2MWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZGVza3RvcDogMTIwMHB4O1xcbiAgLS1sYXB0b3A6IDEwMjRweDtcXG4gIC0tdGFibGV0OiA3NjhweDtcXG4gIC0tcGhvbmU6IDQ4MHB4O1xcbiAgLS1iZy1wcmltYXJ5OiByZ2JhKDU1LCA2NSwgODEsIDEpO1xcbiAgLS1iZy1zZWNvbmRhcnk6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAwLjQwcmVtO1xcbn1cXG5cXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbi5tYWluIHtcXG4gIG1hcmdpbi10b3A6IDhyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaGVhZCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLm5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uaG9tZS1jb2xvciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDE4MGRlZyxcXHJcXG4gICAgcmdiYSg1NSwgNjUsIDgxLCAxKSAwJSxcXHJcXG4gICAgcmdiYSg1NSwgNjUsIDgxLCAwLjc5ODc1NzAwMjgwMTEyMDQpIDUwJSxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxMDAlXFxyXFxuICApO1xcbn1cXG5cXG4uaG9tZS1iZ3N0eWxlIHtcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4uaG9tZS10ZXh0Ymcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMjYgNDEpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhe1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuXFxuLnBob3RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5pbWFnZXMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBQREYgKi9cXG5cXG4uVmlld2VyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLlZpZXdlciAuaGVhZGVyIHtcXG4gIHdpZHRoOiA5MHZ3O1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDE2cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogIzAwNzA5YztcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBsaW5lLWhlaWdodDogNDRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLlZpZXdlciAuV2Vidmlld2VyIHtcXG4gIHdpZHRoOiA5MHZ3O1xcbiAgaGVpZ2h0OiA4MDBweDtcXG59XFxuXFxuLyogRU5EIFBERiAqL1xcblxcbi8qIG5hdmJhciBtZW51ICovXFxuXFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogQmxhY2s7XFxufVxcblxcbi8qIHNvY2lhbCBtZWRpYSBidG5zICovXFxuXFxuYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi8qIFNtYWxsIFNjcmVlbnMgKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcXG4gIC8qIGluZGV4IHNtIC0tLS0tICovXFxuXFxuICAuaGVhZHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICB9XFxuXFxuICAubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgfVxcblxcbiAgLnBhZ2UtY29udGVudHtcXG4gICAgZGlzcGxheTpibG9jaztcXG4gIH1cXG5cXG4gIC5ob21lLXRleHRiZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICB9XFxuXFxuICAucGhvdG8ge1xcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAvKiBleHBlcmllbmNlcyBzbSAtLS0tLSAqL1xcblxcbiAgLnBhZ2UtY29udGVudC1leHB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG4vKiBMYXJnZSBTY3JlZW5zICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCl7XFxuICAvKiBpbmRleCBsZyAtLS0tLSAqL1xcblxcbiAgLmhlYWR7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuXFxuICAubmF2IHtcXG4gICAgbWFyZ2luLXRvcDogOHJlbTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDIuM3JlbTtcXG4gIH1cXG5cXG4gIC5tYWluIHtcXG4gICAgbWFyZ2luLXRvcDogMTByZW07XFxuICB9XFxuXFxuICAuaG9tZS1iZ3N0eWxle1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xcbiAgICBtaW4td2lkdGg6IDYwMHg7XFxuICB9XFxuXFxuICAuaG9tZS10ZXh0Ymcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIH1cXG5cXG4gIC5wYWdlLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxuXFxuICAucGhvdG97XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICB9XFxuXFxuICAuc29jaWFsLW1lZGlhe1xcbiAgICB3aWR0aDogNTByZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gIH1cXG5cXG4gIC8qIGV4cGVyaWVuY2VzIGxnIC0tLS0tICovXFxuXFxuICAucGFnZS1jb250ZW50LWV4cCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgd2lkdGg6IDEyMHZoO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGlCQUFpQjtFQUNqQixn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QThCO0lBQzlCLFlBQVk7RUFDZDtBQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbjpyb290IHtcXHJcXG4gIC0tZGVza3RvcDogMTIwMHB4O1xcclxcbiAgLS1sYXB0b3A6IDEwMjRweDtcXHJcXG4gIC0tdGFibGV0OiA3NjhweDtcXHJcXG4gIC0tcGhvbmU6IDQ4MHB4O1xcclxcblxcclxcbiAgLS1iZy1wcmltYXJ5OiByZ2JhKDU1LCA2NSwgODEsIDEpO1xcclxcbiAgLS1iZy1zZWNvbmRhcnk6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAwLjQwcmVtOyAgXFxyXFxufVxcclxcblxcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgIFxcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA4cmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQgeyAgXFxyXFxuICB3aWR0aDogMTAwdnc7ICAgIFxcclxcbiAgcG9zaXRpb246Zml4ZWQ7ICBcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1jb2xvciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDE4MGRlZyxcXHJcXG4gICAgcmdiYSg1NSwgNjUsIDgxLCAxKSAwJSxcXHJcXG4gICAgcmdiYSg1NSwgNjUsIDgxLCAwLjc5ODc1NzAwMjgwMTEyMDQpIDUwJSxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxMDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1iZ3N0eWxlIHsgXFxyXFxuICBtaW4taGVpZ2h0OiAyMDBweDsgIFxcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS10ZXh0Ymcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMjYgNDEpO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLW1lZGlhe1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAgXFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1wcmltYXJ5KTsgXFxyXFxuICBsaW5lLWhlaWdodDogMnJlbTsgXFxyXFxufVxcclxcblxcclxcbi5waG90byB7XFxyXFxuICBkaXNwbGF5OiBmbGV4OyAgXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5pbWFnZXMge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAgXFxyXFxuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7ICBcXHJcXG59XFxyXFxuXFxyXFxuLyogUERGICovXFxyXFxuLlZpZXdlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7IFxcclxcbiBcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5WaWV3ZXIgLmhlYWRlciB7XFxyXFxuICB3aWR0aDogOTB2dztcXHJcXG4gIGhlaWdodDogNTVweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyOyBcXHJcXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDE2cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYmFja2dyb3VuZDogIzAwNzA5YztcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBsaW5lLWhlaWdodDogNDRweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLlZpZXdlciAuV2Vidmlld2VyIHtcXHJcXG4gIHdpZHRoOiA5MHZ3O1xcclxcbiAgaGVpZ2h0OiA4MDBweDsgIFxcclxcbn1cXHJcXG4vKiBFTkQgUERGICovXFxyXFxuXFxyXFxuLyogbmF2YmFyIG1lbnUgKi9cXHJcXG4uYWN0aXZlIHsgICBcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiBCbGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLyogc29jaWFsIG1lZGlhIGJ0bnMgKi9cXHJcXG5idXR0b24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7ICBcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTbWFsbCBTY3JlZW5zICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XFxyXFxuXFxyXFxuICAvKiBpbmRleCBzbSAtLS0tLSAqL1xcclxcbi5oZWFke1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWNvbnRlbnR7XFxyXFxuICBkaXNwbGF5OmJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS10ZXh0Ymcge1xcclxcbiAgZGlzcGxheTogZmxleDsgIFxcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIwcHg7ICAgXFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07IFxcclxcbn1cXHJcXG5cXHJcXG4ucGhvdG8ge1xcclxcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4gIC8qIGV4cGVyaWVuY2VzIHNtIC0tLS0tICovXFxyXFxuLnBhZ2UtY29udGVudC1leHB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogTGFyZ2UgU2NyZWVucyAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpe1xcclxcblxcclxcbiAgLyogaW5kZXggbGcgLS0tLS0gKi9cXHJcXG4uaGVhZHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTsgXFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgbWFyZ2luLXRvcDogOHJlbTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMi4zcmVtOyBcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgbWFyZ2luLXRvcDogMTByZW07ICBcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtYmdzdHlsZXtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBtYXgtd2lkdGg6IDc1MHB4O1xcclxcbiAgbWluLXdpZHRoOiA2MDB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS10ZXh0Ymcge1xcclxcbiAgZGlzcGxheTogZmxleDsgIFxcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIwcHg7ICAgXFxyXFxuICBtYXJnaW4tdG9wOiAzcmVtOyBcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvdG97XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLW1lZGlhe1xcclxcbiAgd2lkdGg6IDUwcmVtO1xcclxcbiAgaGVpZ2h0OiAycmVtOyBcXHJcXG59XFxyXFxuXFxyXFxuICAvKiBleHBlcmllbmNlcyBsZyAtLS0tLSAqL1xcclxcblxcclxcbi5wYWdlLWNvbnRlbnQtZXhwIHsgICAgXFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7ICAgXFxyXFxuICB3aWR0aDogMTIwdmg7XFxyXFxufVxcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==