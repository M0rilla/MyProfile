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
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --desktop: 1200px;\n  --laptop: 1024px;\n  --tablet: 768px;\n  --phone: 480px;\n  --bg-primary: rgba(55, 65, 81, 1);\n  --bg-secondary: rgba(255, 255, 255, 1);\n  font-size: 16px;\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody::-webkit-scrollbar {\n  width: 0.40rem;\n}\n\nbody::-webkit-scrollbar-track {\n  background: white;\n}\n\nbody::-webkit-scrollbar-thumb {\n  background: black;\n}\n\n.main {\n  margin-top: 8rem;\n  padding: 1rem;\n}\n\n.head {\n  width: 100vw;\n  position:fixed;\n  background: white;\n  z-index: 1;\n}\n\n.nav {\n  position: fixed;\n  color: white;\n  z-index: 1;\n}\n\n.home-color {\n  background: linear-gradient(\r\n    180deg,\r\n    rgba(55, 65, 81, 1) 0%,\r\n    rgba(55, 65, 81, 0.7987570028011204) 50%,\r\n    rgba(255, 255, 255, 1) 100%\r\n  );\n}\n\n.home-bgstyle {\n  min-height: 200px;\n}\n\n.home-textbg {\n  background-color: rgb(0 26 41);\n  font-size: 16px;\n  padding: 10px;\n  line-height: 30px;\n}\n\n.social-media{\n  color: white;\n  text-align: center;\n  border-radius: 0.2rem;\n  background-color: var(--bg-primary);\n  line-height: 2rem;\n}\n\n.photo {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n}\n\n.images {\n  position: relative;\n  padding: 10px !important;\n}\n\n/* PDF */\n\n.Viewer {\n  width: 100%;\n  margin-top: 20px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  flex-direction: column;\n}\n\n.Viewer .header {\n  width: 90vw;\n  height: 55px;\n  align-items: center;\n  align-content: center;\n  padding: 8px 8px 8px 16px;\n  box-sizing: border-box;\n  background: #00709c;\n  font-size: 1.2em;\n  line-height: 44px;\n  color: white;\n}\n\n.Viewer .Webviewer {\n  width: 90vw;\n  height: 800px;\n}\n\n/* END PDF */\n\n/* navbar menu */\n\n.active {\n  background-color:white;\n  font-weight: bold;\n  color: Black;\n}\n\n/* social media btns */\n\nbutton {\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-inline: 1rem;\n  margin-right: 0.5rem;\n}\n\n/* Small Screens */\n\n@media only screen and (max-width: 600px){\n  /* index sm ----- */\n\n  .head{\n    font-size: 2rem;\n    padding: 0.5rem;\n  }\n\n  .nav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    bottom: 0;\n    width: 100vw;\n  }\n\n  .page-content{\n    display:block;\n  }\n\n  .home-textbg {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 20px;\n    margin-bottom: 1.5rem;\n  }\n\n  .photo {\n    padding: 1rem !important;\n  }\n\n  /* experiences sm ----- */\n\n  .page-content-exp{\n    display: flex;\n    grid-template-columns: 1fr;\n    flex-direction: column;\n  }\n}\n\n/* Large Screens */\n\n@media only screen and (min-width: 601px){\n  /* index lg ----- */\n\n  .head{\n    font-size: 3rem;\n    line-height: 1;\n    padding: 1rem;\n  }\n\n  .nav {\n    margin-top: 8rem;\n    width: 100vw;\n    height: 2.3rem;\n  }\n\n  .main {\n    margin-top: 10rem;\n  }\n\n  .home-bgstyle{\n    margin-top: 2rem;\n    max-width: 750px;\n    min-width: 600x;\n  }\n\n  .home-textbg {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 20px;\n    margin-top: 3rem;\n  }\n\n  .page-content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .photo{\n    margin-top: 1rem;\n  }\n\n  .social-media{\n    width: 50rem;\n    height: 2rem;\n  }\n\n  /* experiences lg ----- */\n\n  .page-content-exp {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    width: 120vh;\n  }\n}", "",{"version":3,"sources":["webpack://styles/style.css"],"names":[],"mappings":"AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,cAAc;EAEd,iCAAiC;EACjC,sCAAsC;EACtC,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU;EACV,yCAAyC;AAC3C;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE;;;;;GAKC;AACH;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,eAAe;EACf,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA,QAAQ;;AACR;EACE,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EAErB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AACA,YAAY;;AAEZ,gBAAgB;;AAChB;EACE,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;AACd;;AAEA,sBAAsB;;AACtB;EACE,oBAAoB;EACpB,8BAA8B;EAC9B,mBAAmB;EACnB,oBAAoB;EACpB,oBAAoB;AACtB;;AAEA,kBAAkB;;AAClB;EAEE,mBAAmB;;EACrB;IACE,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,YAAY;EACd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,qBAAqB;EACvB;;EAEA;IACE,wBAAwB;EAC1B;;EACE,yBAAyB;;EAC3B;IACE,aAAa;IACb,0BAA0B;IAC1B,sBAAsB;EACxB;AAEA;;AAEA,kBAAkB;;AAClB;EAEE,mBAAmB;;EACrB;IACE,eAAe;IACf,cAAc;IACd,aAAa;EACf;;EAEA;IACE,gBAAgB;IAChB,YAAY;IACZ,cAAc;EAChB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,8BAA8B;EAChC;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,YAAY;EACd;;EAEE,yBAAyB;;EAE3B;IACE,aAAa;IACb,8BAA8B;IAC9B,YAAY;EACd;AAEA","sourcesContent":["\r\n:root {\r\n  --desktop: 1200px;\r\n  --laptop: 1024px;\r\n  --tablet: 768px;\r\n  --phone: 480px;\r\n\r\n  --bg-primary: rgba(55, 65, 81, 1);\r\n  --bg-secondary: rgba(255, 255, 255, 1);\r\n  font-size: 16px;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody::-webkit-scrollbar {\r\n  width: 0.40rem;  \r\n}\r\n\r\nbody::-webkit-scrollbar-track {  \r\n  background: white;\r\n}\r\n\r\nbody::-webkit-scrollbar-thumb {\r\n  background: black;\r\n}\r\n\r\n.main {\r\n  margin-top: 8rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.head {  \r\n  width: 100vw;    \r\n  position:fixed;  \r\n  background: white;\r\n  z-index: 1;\r\n}\r\n\r\n.nav {\r\n  position: fixed;\r\n  color: white;\r\n  z-index: 1;\r\n}\r\n\r\n.home-color {\r\n  background: linear-gradient(\r\n    180deg,\r\n    rgba(55, 65, 81, 1) 0%,\r\n    rgba(55, 65, 81, 0.7987570028011204) 50%,\r\n    rgba(255, 255, 255, 1) 100%\r\n  );\r\n}\r\n\r\n.home-bgstyle { \r\n  min-height: 200px;  \r\n}\r\n\r\n.home-textbg {\r\n  background-color: rgb(0 26 41);\r\n  font-size: 16px;\r\n  padding: 10px;\r\n  line-height: 30px;\r\n}\r\n\r\n.social-media{\r\n  color: white;\r\n  text-align: center;  \r\n  border-radius: 0.2rem;\r\n  background-color: var(--bg-primary); \r\n  line-height: 2rem; \r\n}\r\n\r\n.photo {\r\n  display: flex;  \r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem;\r\n}\r\n\r\n.images {\r\n  position: relative;  \r\n  padding: 10px !important;  \r\n}\r\n\r\n/* PDF */\r\n.Viewer {\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center; \r\n  align-content: center; \r\n \r\n  flex-direction: column;\r\n}\r\n\r\n.Viewer .header {\r\n  width: 90vw;\r\n  height: 55px;\r\n  align-items: center; \r\n  align-content: center; \r\n  padding: 8px 8px 8px 16px;\r\n  box-sizing: border-box;\r\n  background: #00709c;\r\n  font-size: 1.2em;\r\n  line-height: 44px;\r\n  color: white;\r\n}\r\n\r\n.Viewer .Webviewer {\r\n  width: 90vw;\r\n  height: 800px;  \r\n}\r\n/* END PDF */\r\n\r\n/* navbar menu */\r\n.active {   \r\n  background-color:white;\r\n  font-weight: bold;\r\n  color: Black;\r\n}\r\n\r\n/* social media btns */\r\nbutton {\r\n  display: inline-flex;  \r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-inline: 1rem;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n/* Small Screens */\r\n@media only screen and (max-width: 600px){\r\n\r\n  /* index sm ----- */\r\n.head{\r\n  font-size: 2rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  bottom: 0;\r\n  width: 100vw;\r\n}\r\n\r\n.page-content{\r\n  display:block;\r\n}\r\n\r\n.home-textbg {\r\n  display: flex;  \r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;   \r\n  margin-bottom: 1.5rem; \r\n}\r\n\r\n.photo {\r\n  padding: 1rem !important;\r\n}\r\n  /* experiences sm ----- */\r\n.page-content-exp{\r\n  display: flex;\r\n  grid-template-columns: 1fr;\r\n  flex-direction: column;\r\n}\r\n\r\n}\r\n\r\n/* Large Screens */\r\n@media only screen and (min-width: 601px){\r\n\r\n  /* index lg ----- */\r\n.head{\r\n  font-size: 3rem; \r\n  line-height: 1;\r\n  padding: 1rem;\r\n}\r\n\r\n.nav {\r\n  margin-top: 8rem;\r\n  width: 100vw;\r\n  height: 2.3rem; \r\n}\r\n\r\n.main {\r\n  margin-top: 10rem;  \r\n}\r\n\r\n.home-bgstyle{\r\n  margin-top: 2rem;\r\n  max-width: 750px;\r\n  min-width: 600x;\r\n}\r\n\r\n.home-textbg {\r\n  display: flex;  \r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;   \r\n  margin-top: 3rem; \r\n}\r\n\r\n.page-content {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.photo{\r\n  margin-top: 1rem;\r\n}\r\n\r\n.social-media{\r\n  width: 50rem;\r\n  height: 2rem; \r\n}\r\n\r\n  /* experiences lg ----- */\r\n\r\n.page-content-exp {    \r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;   \r\n  width: 120vh;\r\n}\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLFVBQVUsc0JBQXNCLHFCQUFxQixvQkFBb0IsbUJBQW1CLHNDQUFzQywyQ0FBMkMsb0JBQW9CLEdBQUcsVUFBVSxnQkFBZ0IsaUJBQWlCLGNBQWMsZUFBZSw4Q0FBOEMsR0FBRyw2QkFBNkIsbUJBQW1CLEdBQUcsbUNBQW1DLHNCQUFzQixHQUFHLG1DQUFtQyxzQkFBc0IsR0FBRyxXQUFXLHFCQUFxQixrQkFBa0IsR0FBRyxXQUFXLGlCQUFpQixtQkFBbUIsc0JBQXNCLGVBQWUsR0FBRyxVQUFVLG9CQUFvQixpQkFBaUIsZUFBZSxHQUFHLGlCQUFpQiwwS0FBMEssR0FBRyxtQkFBbUIsc0JBQXNCLEdBQUcsa0JBQWtCLG1DQUFtQyxvQkFBb0Isa0JBQWtCLHNCQUFzQixHQUFHLGtCQUFrQixpQkFBaUIsdUJBQXVCLDBCQUEwQix3Q0FBd0Msc0JBQXNCLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLG1DQUFtQyx3QkFBd0Isa0JBQWtCLEdBQUcsYUFBYSx1QkFBdUIsNkJBQTZCLEdBQUcsMEJBQTBCLGdCQUFnQixxQkFBcUIsaUJBQWlCLGtCQUFrQix3QkFBd0IsMEJBQTBCLDJCQUEyQixHQUFHLHFCQUFxQixnQkFBZ0IsaUJBQWlCLHdCQUF3QiwwQkFBMEIsOEJBQThCLDJCQUEyQix3QkFBd0IscUJBQXFCLHNCQUFzQixpQkFBaUIsR0FBRyx3QkFBd0IsZ0JBQWdCLGtCQUFrQixHQUFHLG1EQUFtRCwyQkFBMkIsc0JBQXNCLGlCQUFpQixHQUFHLHVDQUF1Qyx5QkFBeUIsbUNBQW1DLHdCQUF3Qix5QkFBeUIseUJBQXlCLEdBQUcscUVBQXFFLG9DQUFvQyxzQkFBc0Isc0JBQXNCLEtBQUssWUFBWSxvQkFBb0IsOEJB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dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWRlc2t0b3A6IDEyMDBweDtcXG4gIC0tbGFwdG9wOiAxMDI0cHg7XFxuICAtLXRhYmxldDogNzY4cHg7XFxuICAtLXBob25lOiA0ODBweDtcXG4gIC0tYmctcHJpbWFyeTogcmdiYSg1NSwgNjUsIDgxLCAxKTtcXG4gIC0tYmctc2Vjb25kYXJ5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMC40MHJlbTtcXG59XFxuXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBtYXJnaW4tdG9wOiA4cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmhlYWQge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcG9zaXRpb246Zml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmhvbWUtY29sb3Ige1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAxODBkZWcsXFxyXFxuICAgIHJnYmEoNTUsIDY1LCA4MSwgMSkgMCUsXFxyXFxuICAgIHJnYmEoNTUsIDY1LCA4MSwgMC43OTg3NTcwMDI4MDExMjA0KSA1MCUsXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJVxcclxcbiAgKTtcXG59XFxuXFxuLmhvbWUtYmdzdHlsZSB7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLmhvbWUtdGV4dGJnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDI2IDQxKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYXtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnkpO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcblxcbi5waG90byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaW1hZ2VzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLyogUERGICovXFxuXFxuLlZpZXdlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5WaWV3ZXIgLmhlYWRlciB7XFxuICB3aWR0aDogOTB2dztcXG4gIGhlaWdodDogNTVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAxNnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQ6ICMwMDcwOWM7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5WaWV3ZXIgLldlYnZpZXdlciB7XFxuICB3aWR0aDogOTB2dztcXG4gIGhlaWdodDogODAwcHg7XFxufVxcblxcbi8qIEVORCBQREYgKi9cXG5cXG4vKiBuYXZiYXIgbWVudSAqL1xcblxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IEJsYWNrO1xcbn1cXG5cXG4vKiBzb2NpYWwgbWVkaWEgYnRucyAqL1xcblxcbmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4vKiBTbWFsbCBTY3JlZW5zICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XFxuICAvKiBpbmRleCBzbSAtLS0tLSAqL1xcblxcbiAgLmhlYWR7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgfVxcblxcbiAgLm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG5cXG4gIC5wYWdlLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICB9XFxuXFxuICAuaG9tZS10ZXh0Ymcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgfVxcblxcbiAgLnBob3RvIHtcXG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLyogZXhwZXJpZW5jZXMgc20gLS0tLS0gKi9cXG5cXG4gIC5wYWdlLWNvbnRlbnQtZXhwe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuLyogTGFyZ2UgU2NyZWVucyAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpe1xcbiAgLyogaW5kZXggbGcgLS0tLS0gKi9cXG5cXG4gIC5oZWFke1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcblxcbiAgLm5hdiB7XFxuICAgIG1hcmdpbi10b3A6IDhyZW07XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAyLjNyZW07XFxuICB9XFxuXFxuICAubWFpbiB7XFxuICAgIG1hcmdpbi10b3A6IDEwcmVtO1xcbiAgfVxcblxcbiAgLmhvbWUtYmdzdHlsZXtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcXG4gICAgbWluLXdpZHRoOiA2MDB4O1xcbiAgfVxcblxcbiAgLmhvbWUtdGV4dGJnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICB9XFxuXFxuICAucGFnZS1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcblxcbiAgLnBob3Rve1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgfVxcblxcbiAgLnNvY2lhbC1tZWRpYXtcXG4gICAgd2lkdGg6IDUwcmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICB9XFxuXFxuICAvKiBleHBlcmllbmNlcyBsZyAtLS0tLSAqL1xcblxcbiAgLnBhZ2UtY29udGVudC1leHAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIHdpZHRoOiAxMjB2aDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBRWQsaUNBQWlDO0VBQ2pDLHNDQUFzQztFQUN0QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRTs7Ozs7R0FLQztBQUNIOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBLFFBQVE7O0FBQ1I7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUVyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUNBLFlBQVk7O0FBRVosZ0JBQWdCOztBQUNoQjtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBLHNCQUFzQjs7QUFDdEI7RUFDRSxvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsb0JBQW9CO0FBQ3RCOztBQUVBLGtCQUFrQjs7QUFDbEI7RUFFRSxtQkFBbUI7O0VBQ3JCO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBQ0UseUJBQXlCOztFQUMzQjtJQUNFLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsc0JBQXNCO0VBQ3hCO0FBRUE7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUVFLG1CQUFtQjs7RUFDckI7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUUseUJBQXlCOztFQUUzQjtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtFQUNkO0FBRUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1kZXNrdG9wOiAxMjAwcHg7XFxyXFxuICAtLWxhcHRvcDogMTAyNHB4O1xcclxcbiAgLS10YWJsZXQ6IDc2OHB4O1xcclxcbiAgLS1waG9uZTogNDgwcHg7XFxyXFxuXFxyXFxuICAtLWJnLXByaW1hcnk6IHJnYmEoNTUsIDY1LCA4MSwgMSk7XFxyXFxuICAtLWJnLXNlY29uZGFyeTogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDAuNDByZW07ICBcXHJcXG59XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgeyAgXFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIG1hcmdpbi10b3A6IDhyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZCB7ICBcXHJcXG4gIHdpZHRoOiAxMDB2dzsgICAgXFxyXFxuICBwb3NpdGlvbjpmaXhlZDsgIFxcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWNvbG9yIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgMTgwZGVnLFxcclxcbiAgICByZ2JhKDU1LCA2NSwgODEsIDEpIDAlLFxcclxcbiAgICByZ2JhKDU1LCA2NSwgODEsIDAuNzk4NzU3MDAyODAxMTIwNCkgNTAlLFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCVcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWJnc3R5bGUgeyBcXHJcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4OyAgXFxyXFxufVxcclxcblxcclxcbi5ob21lLXRleHRiZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAyNiA0MSk7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWF7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnkpOyBcXHJcXG4gIGxpbmUtaGVpZ2h0OiAycmVtOyBcXHJcXG59XFxyXFxuXFxyXFxuLnBob3RvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7ICBcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlcyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcXHJcXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDsgIFxcclxcbn1cXHJcXG5cXHJcXG4vKiBQREYgKi9cXHJcXG4uVmlld2VyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgXFxyXFxuIFxcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLlZpZXdlciAuaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiA5MHZ3O1xcclxcbiAgaGVpZ2h0OiA1NXB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7IFxcclxcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMTZweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDA3MDljO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uVmlld2VyIC5XZWJ2aWV3ZXIge1xcclxcbiAgd2lkdGg6IDkwdnc7XFxyXFxuICBoZWlnaHQ6IDgwMHB4OyAgXFxyXFxufVxcclxcbi8qIEVORCBQREYgKi9cXHJcXG5cXHJcXG4vKiBuYXZiYXIgbWVudSAqL1xcclxcbi5hY3RpdmUgeyAgIFxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6IEJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzb2NpYWwgbWVkaWEgYnRucyAqL1xcclxcbmJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgIFxcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qIFNtYWxsIFNjcmVlbnMgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcXHJcXG5cXHJcXG4gIC8qIGluZGV4IHNtIC0tLS0tICovXFxyXFxuLmhlYWR7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtY29udGVudHtcXHJcXG4gIGRpc3BsYXk6YmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5ob21lLXRleHRiZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4OyAgXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDsgICBcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTsgXFxyXFxufVxcclxcblxcclxcbi5waG90byB7XFxyXFxuICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbiAgLyogZXhwZXJpZW5jZXMgc20gLS0tLS0gKi9cXHJcXG4ucGFnZS1jb250ZW50LWV4cHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vKiBMYXJnZSBTY3JlZW5zICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCl7XFxyXFxuXFxyXFxuICAvKiBpbmRleCBsZyAtLS0tLSAqL1xcclxcbi5oZWFke1xcclxcbiAgZm9udC1zaXplOiAzcmVtOyBcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBtYXJnaW4tdG9wOiA4cmVtO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAyLjNyZW07IFxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHJlbTsgIFxcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1iZ3N0eWxle1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIG1heC13aWR0aDogNzUwcHg7XFxyXFxuICBtaW4td2lkdGg6IDYwMHg7XFxyXFxufVxcclxcblxcclxcbi5ob21lLXRleHRiZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4OyAgXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDsgICBcXHJcXG4gIG1hcmdpbi10b3A6IDNyZW07IFxcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi5waG90b3tcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWF7XFxyXFxuICB3aWR0aDogNTByZW07XFxyXFxuICBoZWlnaHQ6IDJyZW07IFxcclxcbn1cXHJcXG5cXHJcXG4gIC8qIGV4cGVyaWVuY2VzIGxnIC0tLS0tICovXFxyXFxuXFxyXFxuLnBhZ2UtY29udGVudC1leHAgeyAgICBcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7ICAgXFxyXFxuICB3aWR0aDogMTIwdmg7XFxyXFxufVxcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==