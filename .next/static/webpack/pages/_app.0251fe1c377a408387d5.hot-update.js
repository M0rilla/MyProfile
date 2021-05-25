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
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --desktop: 1200px;\n  --laptop: 1024px;\n  --tablet: 768px;\n  --phone: 480px;\n  --bg-primary: rgba(55, 65, 81, 1);\n  --bg-secondary: rgba(255, 255, 255, 1);\n  font-size: 16px;\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody::-webkit-scrollbar {\n  width: 0.40rem;\n}\n\nbody::-webkit-scrollbar-track {\n  background: white;\n}\n\nbody::-webkit-scrollbar-thumb {\n  background: black;\n}\n\n.main {\n  margin-top: 8rem;\n  padding: 1rem;\n}\n\n.head {\n  width: 100vw;\n  position:fixed;\n  background: white;\n  z-index: 1;\n}\n\n.nav {\n  position: fixed;\n  color: white;\n  z-index: 1;\n}\n\n.home-color {\n  background: linear-gradient(\r\n    180deg,\r\n    rgba(55, 65, 81, 1) 0%,\r\n    rgba(55, 65, 81, 0.7987570028011204) 50%,\r\n    rgba(255, 255, 255, 1) 100%\r\n  );\n}\n\n.home-bgstyle {\n  min-height: 200px;\n}\n\n.home-textbg {\n  background-color: rgb(0 26 41);\n  font-size: 16px;\n  padding: 10px;\n  line-height: 30px;\n}\n\n.social-media{\n  color: white;\n  text-align: center;\n  border-radius: 0.2rem;\n  background-color: var(--bg-primary);\n  line-height: 2rem;\n}\n\n.photo {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n}\n\n.images {\n  position: relative;\n  padding: 10px !important;\n}\n\n/* PDF */\n\n.Viewer {\n  width: 100%;\n  margin-top: 20px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  flex-direction: column;\n}\n\n.Viewer .header {\n  width: 90vw;\n  height: 55px;\n  align-items: center;\n  align-content: center;\n  padding: 8px 8px 8px 16px;\n  box-sizing: border-box;\n  background: #00709c;\n  font-size: 1.2em;\n  line-height: 44px;\n  color: white;\n}\n\n.Viewer .Webviewer {\n  width: 90vw;\n  height: 800px;\n}\n\n/* END PDF */\n\n/* navbar menu */\n\n.active {\n  background-color:white;\n  font-weight: bold;\n  color: Black;\n}\n\n/* social media btns */\n\nbutton {\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-inline: 1rem;\n  margin-right: 0.5rem;\n}\n\n/* Small Screens */\n\n@media only screen and (max-width: 600px){\n  /* index sm ----- */\n\n  .head{\n    font-size: 2rem;\n    padding: 0.5rem;\n  }\n\n  .nav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    bottom: 0;\n    width: 100vw;\n  }\n\n  .page-content{\n    display:block;\n  }\n\n  .home-textbg {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 20px;\n    margin-bottom: 1.5rem;\n  }\n\n  .photo {\n    padding: 1rem !important;\n  }\n\n  /* experiences sm ----- */\n\n  .page-content-exp{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n}\n\n/* Large Screens */\n\n@media only screen and (min-width: 601px){\n  /* index lg ----- */\n\n  .head{\n    font-size: 3rem;\n    line-height: 1;\n    padding: 1rem;\n  }\n\n  .nav {\n    margin-top: 8rem;\n    width: 100vw;\n    height: 2.3rem;\n  }\n\n  .main {\n    margin-top: 10rem;\n  }\n\n  .home-bgstyle{\n    margin-top: 2rem;\n    max-width: 750px;\n    min-width: 600x;\n  }\n\n  .home-textbg {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 20px;\n    margin-top: 3rem;\n  }\n\n  .page-content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .photo{\n    margin-top: 1rem;\n  }\n\n  .social-media{\n    width: 50rem;\n    height: 2rem;\n  }\n\n  /* experiences lg ----- */\n\n  .page-content-exp {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    grid-template-columns: 1fr 1fr;\n    width: 120vh;\n  }\n}", "",{"version":3,"sources":["webpack://styles/style.css"],"names":[],"mappings":"AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,cAAc;EAEd,iCAAiC;EACjC,sCAAsC;EACtC,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU;EACV,yCAAyC;AAC3C;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE;;;;;GAKC;AACH;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,eAAe;EACf,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA,QAAQ;;AACR;EACE,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EAErB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AACA,YAAY;;AAEZ,gBAAgB;;AAChB;EACE,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;AACd;;AAEA,sBAAsB;;AACtB;EACE,oBAAoB;EACpB,8BAA8B;EAC9B,mBAAmB;EACnB,oBAAoB;EACpB,oBAAoB;AACtB;;AAEA,kBAAkB;;AAClB;EAEE,mBAAmB;;EACrB;IACE,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,YAAY;EACd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,qBAAqB;EACvB;;EAEA;IACE,wBAAwB;EAC1B;;EACE,yBAAyB;;EAC3B;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;EACrB;AAEA;;AAEA,kBAAkB;;AAClB;EAEE,mBAAmB;;EACrB;IACE,eAAe;IACf,cAAc;IACd,aAAa;EACf;;EAEA;IACE,gBAAgB;IAChB,YAAY;IACZ,cAAc;EAChB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,8BAA8B;EAChC;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,YAAY;EACd;;EAEE,yBAAyB;;EAE3B;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,8BAA8B;IAC9B,YAAY;EACd;AAEA","sourcesContent":["\r\n:root {\r\n  --desktop: 1200px;\r\n  --laptop: 1024px;\r\n  --tablet: 768px;\r\n  --phone: 480px;\r\n\r\n  --bg-primary: rgba(55, 65, 81, 1);\r\n  --bg-secondary: rgba(255, 255, 255, 1);\r\n  font-size: 16px;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody::-webkit-scrollbar {\r\n  width: 0.40rem;  \r\n}\r\n\r\nbody::-webkit-scrollbar-track {  \r\n  background: white;\r\n}\r\n\r\nbody::-webkit-scrollbar-thumb {\r\n  background: black;\r\n}\r\n\r\n.main {\r\n  margin-top: 8rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.head {  \r\n  width: 100vw;    \r\n  position:fixed;  \r\n  background: white;\r\n  z-index: 1;\r\n}\r\n\r\n.nav {\r\n  position: fixed;\r\n  color: white;\r\n  z-index: 1;\r\n}\r\n\r\n.home-color {\r\n  background: linear-gradient(\r\n    180deg,\r\n    rgba(55, 65, 81, 1) 0%,\r\n    rgba(55, 65, 81, 0.7987570028011204) 50%,\r\n    rgba(255, 255, 255, 1) 100%\r\n  );\r\n}\r\n\r\n.home-bgstyle { \r\n  min-height: 200px;  \r\n}\r\n\r\n.home-textbg {\r\n  background-color: rgb(0 26 41);\r\n  font-size: 16px;\r\n  padding: 10px;\r\n  line-height: 30px;\r\n}\r\n\r\n.social-media{\r\n  color: white;\r\n  text-align: center;  \r\n  border-radius: 0.2rem;\r\n  background-color: var(--bg-primary); \r\n  line-height: 2rem; \r\n}\r\n\r\n.photo {\r\n  display: flex;  \r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem;\r\n}\r\n\r\n.images {\r\n  position: relative;  \r\n  padding: 10px !important;  \r\n}\r\n\r\n/* PDF */\r\n.Viewer {\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center; \r\n  align-content: center; \r\n \r\n  flex-direction: column;\r\n}\r\n\r\n.Viewer .header {\r\n  width: 90vw;\r\n  height: 55px;\r\n  align-items: center; \r\n  align-content: center; \r\n  padding: 8px 8px 8px 16px;\r\n  box-sizing: border-box;\r\n  background: #00709c;\r\n  font-size: 1.2em;\r\n  line-height: 44px;\r\n  color: white;\r\n}\r\n\r\n.Viewer .Webviewer {\r\n  width: 90vw;\r\n  height: 800px;  \r\n}\r\n/* END PDF */\r\n\r\n/* navbar menu */\r\n.active {   \r\n  background-color:white;\r\n  font-weight: bold;\r\n  color: Black;\r\n}\r\n\r\n/* social media btns */\r\nbutton {\r\n  display: inline-flex;  \r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-inline: 1rem;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n/* Small Screens */\r\n@media only screen and (max-width: 600px){\r\n\r\n  /* index sm ----- */\r\n.head{\r\n  font-size: 2rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  bottom: 0;\r\n  width: 100vw;\r\n}\r\n\r\n.page-content{\r\n  display:block;\r\n}\r\n\r\n.home-textbg {\r\n  display: flex;  \r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;   \r\n  margin-bottom: 1.5rem; \r\n}\r\n\r\n.photo {\r\n  padding: 1rem !important;\r\n}\r\n  /* experiences sm ----- */\r\n.page-content-exp{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n}\r\n\r\n/* Large Screens */\r\n@media only screen and (min-width: 601px){\r\n\r\n  /* index lg ----- */\r\n.head{\r\n  font-size: 3rem; \r\n  line-height: 1;\r\n  padding: 1rem;\r\n}\r\n\r\n.nav {\r\n  margin-top: 8rem;\r\n  width: 100vw;\r\n  height: 2.3rem; \r\n}\r\n\r\n.main {\r\n  margin-top: 10rem;  \r\n}\r\n\r\n.home-bgstyle{\r\n  margin-top: 2rem;\r\n  max-width: 750px;\r\n  min-width: 600x;\r\n}\r\n\r\n.home-textbg {\r\n  display: flex;  \r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;   \r\n  margin-top: 3rem; \r\n}\r\n\r\n.page-content {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.photo{\r\n  margin-top: 1rem;\r\n}\r\n\r\n.social-media{\r\n  width: 50rem;\r\n  height: 2rem; \r\n}\r\n\r\n  /* experiences lg ----- */\r\n\r\n.page-content-exp {    \r\n  display: grid;\r\n  align-items: center;\r\n  justify-content: center;\r\n  grid-template-columns: 1fr 1fr;   \r\n  width: 120vh;\r\n}\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLFVBQVUsc0JBQXNCLHFCQUFxQixvQkFBb0IsbUJBQW1CLHNDQUFzQywyQ0FBMkMsb0JBQW9CLEdBQUcsVUFBVSxnQkFBZ0IsaUJBQWlCLGNBQWMsZUFBZSw4Q0FBOEMsR0FBRyw2QkFBNkIsbUJBQW1CLEdBQUcsbUNBQW1DLHNCQUFzQixHQUFHLG1DQUFtQyxzQkFBc0IsR0FBRyxXQUFXLHFCQUFxQixrQkFBa0IsR0FBRyxXQUFXLGlCQUFpQixtQkFBbUIsc0JBQXNCLGVBQWUsR0FBRyxVQUFVLG9CQUFvQixpQkFBaUIsZUFBZSxHQUFHLGlCQUFpQiwwS0FBMEssR0FBRyxtQkFBbUIsc0JBQXNCLEdBQUcsa0JBQWtCLG1DQUFtQyxvQkFBb0Isa0JBQWtCLHNCQUFzQixHQUFHLGtCQUFrQixpQkFBaUIsdUJBQXVCLDBCQUEwQix3Q0FBd0Msc0JBQXNCLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLG1DQUFtQyx3QkFBd0Isa0JBQWtCLEdBQUcsYUFBYSx1QkFBdUIsNkJBQTZCLEdBQUcsMEJBQTBCLGdCQUFnQixxQkFBcUIsaUJBQWlCLGtCQUFrQix3QkFBd0IsMEJBQTBCLDJCQUEyQixHQUFHLHFCQUFxQixnQkFBZ0IsaUJBQWlCLHdCQUF3QiwwQkFBMEIsOEJBQThCLDJCQUEyQix3QkFBd0IscUJBQXFCLHNCQUFzQixpQkFBaUIsR0FBRyx3QkFBd0IsZ0JBQWdCLGtCQUFrQixHQUFHLG1EQUFtRCwyQkFBMkIsc0JBQXNCLGlCQUFpQixHQUFHLHVDQUF1Qyx5QkFBeUIsbUNBQW1DLHdCQUF3Qix5QkFBeUIseUJBQXlCLEdBQUcscUVBQXFFLG9DQUFvQyxzQkFBc0Isc0JBQXNCLEtBQUssWUFBWSxvQkFBb0IsOEJBQThCLDBCQUEwQixnQkFBZ0IsbUJBQW1CLEtBQUssb0JBQW9CLG9CQUFvQixLQUFLLG9CQUFvQixvQkFBb0IsNkJBQTZCLHFDQUFxQywwQkFBMEIsc0JBQXNCLDRCQUE0QixLQUFLLGNBQWMsK0JBQStCLEtBQUssd0RBQXdELG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixLQUFLLEdBQUcscUVBQXFFLG9DQUFvQyxzQkFBc0IscUJBQXFCLG9CQUFvQixLQUFLLFlBQVksdUJBQXVCLG1CQUFtQixxQkFBcUIsS0FBSyxhQUFhLHdCQUF3QixLQUFLLG9CQUFvQix1QkFBdUIsdUJBQXVCLHNCQUFzQixLQUFLLG9CQUFvQixvQkFBb0IsNkJBQTZCLHFDQUFxQywwQkFBMEIsc0JBQXNCLHVCQUF1QixLQUFLLHFCQUFxQixvQkFBb0IscUNBQXFDLEtBQUssYUFBYSx1QkFBdUIsS0FBSyxvQkFBb0IsbUJBQW1CLG1CQUFtQixLQUFLLHlEQUF5RCxvQkFBb0IsMEJBQTBCLDhCQUE4QixxQ0FBcUMsbUJBQW1CLEtBQUssR0FBRyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFNBQVMsS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxXQUFXLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sYUFBYSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxhQUFhLE1BQU0sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxvQ0FBb0Msd0JBQXdCLHVCQUF1QixzQkFBc0IscUJBQXFCLDRDQUE0Qyw2Q0FBNkMsc0JBQXNCLEtBQUssY0FBYyxrQkFBa0IsbUJBQW1CLGdCQUFnQixpQkFBaUIsZ0RBQWdELEtBQUssaUNBQWlDLHFCQUFxQixPQUFPLHVDQUF1QywwQkFBMEIsS0FBSyx1Q0FBdUMsd0JBQXdCLEtBQUssZUFBZSx1QkFBdUIsb0JBQW9CLEtBQUssZUFBZSxxQkFBcUIseUJBQXlCLDBCQUEwQixpQkFBaUIsS0FBSyxjQUFjLHNCQUFzQixtQkFBbUIsaUJBQWlCLEtBQUsscUJBQXFCLDRLQUE0SyxLQUFLLHVCQUF1Qix5QkFBeUIsT0FBTyxzQkFBc0IscUNBQXFDLHNCQUFzQixvQkFBb0Isd0JBQXdCLEtBQUssc0JBQXNCLG1CQUFtQix5QkFBeUIsOEJBQThCLDBDQUEwQyx5QkFBeUIsTUFBTSxnQkFBZ0Isb0JBQW9CLCtCQUErQixxQ0FBcUMsMEJBQTBCLG9CQUFvQixLQUFLLGlCQUFpQix5QkFBeUIsaUNBQWlDLE9BQU8sOEJBQThCLGtCQUFrQix1QkFBdUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsNkJBQTZCLG1DQUFtQyxLQUFLLHlCQUF5QixrQkFBa0IsbUJBQW1CLDBCQUEwQiw2QkFBNkIsaUNBQWlDLDZCQUE2QiwwQkFBMEIsdUJBQXVCLHdCQUF3QixtQkFBbUIsS0FBSyw0QkFBNEIsa0JBQWtCLG9CQUFvQixPQUFPLHVEQUF1RCxnQ0FBZ0Msd0JBQXdCLG1CQUFtQixLQUFLLDJDQUEyQywyQkFBMkIsdUNBQXVDLDBCQUEwQiwyQkFBMkIsMkJBQTJCLEtBQUsseUVBQXlFLHdDQUF3QyxzQkFBc0Isc0JBQXNCLEtBQUssY0FBYyxvQkFBb0IsOEJBQThCLDBCQUEwQixnQkFBZ0IsbUJBQW1CLEtBQUssc0JBQXNCLG9CQUFvQixLQUFLLHNCQUFzQixvQkFBb0IsK0JBQStCLHFDQUFxQywwQkFBMEIsc0JBQXNCLCtCQUErQixNQUFNLGdCQUFnQiwrQkFBK0IsS0FBSyxzREFBc0Qsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEtBQUssU0FBUyx5RUFBeUUsd0NBQXdDLHNCQUFzQixzQkFBc0Isb0JBQW9CLEtBQUssY0FBYyx1QkFBdUIsbUJBQW1CLHFCQUFxQixNQUFNLGVBQWUsd0JBQXdCLE9BQU8sc0JBQXNCLHVCQUF1Qix1QkFBdUIsc0JBQXNCLEtBQUssc0JBQXNCLG9CQUFvQiwrQkFBK0IscUNBQXFDLDBCQUEwQixzQkFBc0IsMEJBQTBCLE1BQU0sdUJBQXVCLG9CQUFvQixxQ0FBcUMsS0FBSyxlQUFlLHVCQUF1QixLQUFLLHNCQUFzQixtQkFBbUIsbUJBQW1CLE1BQU0sK0RBQStELHdCQUF3QiwwQkFBMEIsOEJBQThCLHFDQUFxQyxzQkFBc0IsS0FBSyxTQUFTLG1CQUFtQjtBQUNqNVQ7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjAyNTFmZTFjMzc3YTQwODM4N2Q1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWRlc2t0b3A6IDEyMDBweDtcXG4gIC0tbGFwdG9wOiAxMDI0cHg7XFxuICAtLXRhYmxldDogNzY4cHg7XFxuICAtLXBob25lOiA0ODBweDtcXG4gIC0tYmctcHJpbWFyeTogcmdiYSg1NSwgNjUsIDgxLCAxKTtcXG4gIC0tYmctc2Vjb25kYXJ5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMC40MHJlbTtcXG59XFxuXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBtYXJnaW4tdG9wOiA4cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmhlYWQge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcG9zaXRpb246Zml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmhvbWUtY29sb3Ige1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAxODBkZWcsXFxyXFxuICAgIHJnYmEoNTUsIDY1LCA4MSwgMSkgMCUsXFxyXFxuICAgIHJnYmEoNTUsIDY1LCA4MSwgMC43OTg3NTcwMDI4MDExMjA0KSA1MCUsXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJVxcclxcbiAgKTtcXG59XFxuXFxuLmhvbWUtYmdzdHlsZSB7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLmhvbWUtdGV4dGJnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDI2IDQxKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYXtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnkpO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcblxcbi5waG90byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaW1hZ2VzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLyogUERGICovXFxuXFxuLlZpZXdlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5WaWV3ZXIgLmhlYWRlciB7XFxuICB3aWR0aDogOTB2dztcXG4gIGhlaWdodDogNTVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAxNnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQ6ICMwMDcwOWM7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5WaWV3ZXIgLldlYnZpZXdlciB7XFxuICB3aWR0aDogOTB2dztcXG4gIGhlaWdodDogODAwcHg7XFxufVxcblxcbi8qIEVORCBQREYgKi9cXG5cXG4vKiBuYXZiYXIgbWVudSAqL1xcblxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IEJsYWNrO1xcbn1cXG5cXG4vKiBzb2NpYWwgbWVkaWEgYnRucyAqL1xcblxcbmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4vKiBTbWFsbCBTY3JlZW5zICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XFxuICAvKiBpbmRleCBzbSAtLS0tLSAqL1xcblxcbiAgLmhlYWR7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgfVxcblxcbiAgLm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG5cXG4gIC5wYWdlLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICB9XFxuXFxuICAuaG9tZS10ZXh0Ymcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgfVxcblxcbiAgLnBob3RvIHtcXG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLyogZXhwZXJpZW5jZXMgc20gLS0tLS0gKi9cXG5cXG4gIC5wYWdlLWNvbnRlbnQtZXhwe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLyogTGFyZ2UgU2NyZWVucyAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpe1xcbiAgLyogaW5kZXggbGcgLS0tLS0gKi9cXG5cXG4gIC5oZWFke1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcblxcbiAgLm5hdiB7XFxuICAgIG1hcmdpbi10b3A6IDhyZW07XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAyLjNyZW07XFxuICB9XFxuXFxuICAubWFpbiB7XFxuICAgIG1hcmdpbi10b3A6IDEwcmVtO1xcbiAgfVxcblxcbiAgLmhvbWUtYmdzdHlsZXtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcXG4gICAgbWluLXdpZHRoOiA2MDB4O1xcbiAgfVxcblxcbiAgLmhvbWUtdGV4dGJnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICB9XFxuXFxuICAucGFnZS1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcblxcbiAgLnBob3Rve1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgfVxcblxcbiAgLnNvY2lhbC1tZWRpYXtcXG4gICAgd2lkdGg6IDUwcmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICB9XFxuXFxuICAvKiBleHBlcmllbmNlcyBsZyAtLS0tLSAqL1xcblxcbiAgLnBhZ2UtY29udGVudC1leHAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB3aWR0aDogMTIwdmg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFt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RSx5QkFBeUI7O0VBRTNCO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLFlBQVk7RUFDZDtBQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbjpyb290IHtcXHJcXG4gIC0tZGVza3RvcDogMTIwMHB4O1xcclxcbiAgLS1sYXB0b3A6IDEwMjRweDtcXHJcXG4gIC0tdGFibGV0OiA3NjhweDtcXHJcXG4gIC0tcGhvbmU6IDQ4MHB4O1xcclxcblxcclxcbiAgLS1iZy1wcmltYXJ5OiByZ2JhKDU1LCA2NSwgODEsIDEpO1xcclxcbiAgLS1iZy1zZWNvbmRhcnk6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAwLjQwcmVtOyAgXFxyXFxufVxcclxcblxcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgIFxcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA4cmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQgeyAgXFxyXFxuICB3aWR0aDogMTAwdnc7ICAgIFxcclxcbiAgcG9zaXRpb246Zml4ZWQ7ICBcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1jb2xvciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDE4MGRlZyxcXHJcXG4gICAgcmdiYSg1NSwgNjUsIDgxLCAxKSAwJSxcXHJcXG4gICAgcmdiYSg1NSwgNjUsIDgxLCAwLjc5ODc1NzAwMjgwMTEyMDQpIDUwJSxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxMDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1iZ3N0eWxlIHsgXFxyXFxuICBtaW4taGVpZ2h0OiAyMDBweDsgIFxcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS10ZXh0Ymcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMjYgNDEpO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLW1lZGlhe1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAgXFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1wcmltYXJ5KTsgXFxyXFxuICBsaW5lLWhlaWdodDogMnJlbTsgXFxyXFxufVxcclxcblxcclxcbi5waG90byB7XFxyXFxuICBkaXNwbGF5OiBmbGV4OyAgXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5pbWFnZXMge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAgXFxyXFxuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7ICBcXHJcXG59XFxyXFxuXFxyXFxuLyogUERGICovXFxyXFxuLlZpZXdlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7IFxcclxcbiBcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5WaWV3ZXIgLmhlYWRlciB7XFxyXFxuICB3aWR0aDogOTB2dztcXHJcXG4gIGhlaWdodDogNTVweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyOyBcXHJcXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDE2cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYmFja2dyb3VuZDogIzAwNzA5YztcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBsaW5lLWhlaWdodDogNDRweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLlZpZXdlciAuV2Vidmlld2VyIHtcXHJcXG4gIHdpZHRoOiA5MHZ3O1xcclxcbiAgaGVpZ2h0OiA4MDBweDsgIFxcclxcbn1cXHJcXG4vKiBFTkQgUERGICovXFxyXFxuXFxyXFxuLyogbmF2YmFyIG1lbnUgKi9cXHJcXG4uYWN0aXZlIHsgICBcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiBCbGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLyogc29jaWFsIG1lZGlhIGJ0bnMgKi9cXHJcXG5idXR0b24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7ICBcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTbWFsbCBTY3JlZW5zICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XFxyXFxuXFxyXFxuICAvKiBpbmRleCBzbSAtLS0tLSAqL1xcclxcbi5oZWFke1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWNvbnRlbnR7XFxyXFxuICBkaXNwbGF5OmJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS10ZXh0Ymcge1xcclxcbiAgZGlzcGxheTogZmxleDsgIFxcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIwcHg7ICAgXFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07IFxcclxcbn1cXHJcXG5cXHJcXG4ucGhvdG8ge1xcclxcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4gIC8qIGV4cGVyaWVuY2VzIHNtIC0tLS0tICovXFxyXFxuLnBhZ2UtY29udGVudC1leHB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIExhcmdlIFNjcmVlbnMgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KXtcXHJcXG5cXHJcXG4gIC8qIGluZGV4IGxnIC0tLS0tICovXFxyXFxuLmhlYWR7XFxyXFxuICBmb250LXNpemU6IDNyZW07IFxcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIG1hcmdpbi10b3A6IDhyZW07XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDIuM3JlbTsgXFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcmVtOyAgXFxyXFxufVxcclxcblxcclxcbi5ob21lLWJnc3R5bGV7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgbWF4LXdpZHRoOiA3NTBweDtcXHJcXG4gIG1pbi13aWR0aDogNjAweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtdGV4dGJnIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7ICBcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyMHB4OyAgIFxcclxcbiAgbWFyZ2luLXRvcDogM3JlbTsgXFxyXFxufVxcclxcblxcclxcbi5wYWdlLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBob3Rve1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1tZWRpYXtcXHJcXG4gIHdpZHRoOiA1MHJlbTtcXHJcXG4gIGhlaWdodDogMnJlbTsgXFxyXFxufVxcclxcblxcclxcbiAgLyogZXhwZXJpZW5jZXMgbGcgLS0tLS0gKi9cXHJcXG5cXHJcXG4ucGFnZS1jb250ZW50LWV4cCB7ICAgIFxcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgICBcXHJcXG4gIHdpZHRoOiAxMjB2aDtcXHJcXG59XFxyXFxuXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9