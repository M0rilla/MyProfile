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
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --desktop: 1200px;\n  --laptop: 1024px;\n  --tablet: 768px;\n  --phone: 480px;\n  --bg-primary: rgba(55, 65, 81, 1);\n  --bg-secondary: rgba(255, 255, 255, 1);\n  font-size: 16px;\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody::-webkit-scrollbar {\n  width: 0.40rem;\n}\n\nbody::-webkit-scrollbar-track {\n  background: white;\n}\n\nbody::-webkit-scrollbar-thumb {\n  background: black;\n}\n\n.main {\n  margin-top: 8rem;\n}\n\n.head {\n  width: 100vw;\n  position:fixed;\n  background: white;\n  z-index: 1;\n}\n\n.nav {\n  position: fixed;\n  color: white;\n  z-index: 1;\n}\n\n.home-color {\n  background: linear-gradient(\r\n    180deg,\r\n    rgba(55, 65, 81, 1) 0%,\r\n    rgba(55, 65, 81, 0.7987570028011204) 50%,\r\n    rgba(255, 255, 255, 1) 100%\r\n  );\n}\n\n.home-bgstyle {\n  min-height: 200px;\n}\n\n.home-textbg {\n  background-color: rgb(0 26 41);\n  font-size: 16px;\n  padding: 10px;\n  line-height: 30px;\n}\n\n.social-media{\n  color: white;\n  text-align: center;\n  border-radius: 0.2rem;\n  background-color: var(--bg-primary);\n  line-height: 2rem;\n}\n\n.photo {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n}\n\n/* PDF */\n\n.Viewer {\n  width: 100%;\n  margin-top: 20px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  flex-direction: column;\n}\n\n.Viewer .header {\n  width: 90vw;\n  height: 55px;\n  align-items: center;\n  align-content: center;\n  padding: 8px 8px 8px 16px;\n  box-sizing: border-box;\n  background: #00709c;\n  font-size: 1.2em;\n  line-height: 44px;\n  color: white;\n}\n\n.Viewer .Webviewer {\n  width: 90vw;\n  height: 800px;\n}\n\n/* END PDF */\n\n/* navbar menu */\n\n.active {\n  background-color:white;\n  font-weight: bold;\n  color: Black;\n}\n\n/* social media btns */\n\nbutton {\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-inline: 1rem;\n  margin-right: 0.5rem;\n}\n\n/* Small Screens */\n\n@media only screen and (max-width: 600px){\n  /* index sm ----- */\n\n  .head{\n    font-size: 1.2rem;\n    padding: 1rem;\n  }\n\n  .nav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    bottom: 0;\n    width: 100vw;\n  }\n\n  .main {\n    margin-top: 5.0rem;\n  }\n\n  .page-content{\n    display:block;\n  }\n\n  .home-textbg {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 20px;\n    margin-bottom: 1.5rem;\n  }\n\n  .photo {\n    padding: 1rem !important;\n  }\n\n  /* skills sm ----- */\n\n  .images {\n    position: static;\n    padding: 10px !important;\n  }\n}\n\n/* Large Screens */\n\n@media only screen and (min-width: 600px){\n  /* index lg ----- */\n\n  .head{\n    font-size: 3rem;\n    line-height: 1;\n    padding: 1rem;\n  }\n\n  .nav {\n    margin-top: 8rem;\n    width: 100vw;\n    height: 2.3rem;\n  }\n\n  .main {\n    margin-top: 10rem;\n  }\n\n  .home-bgstyle{\n    margin-top: 2rem;\n    max-width: 750px;\n    min-width: 600x;\n  }\n\n  .home-textbg {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 20px;\n    margin-top: 3rem;\n  }\n\n  .page-content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .photo{\n    margin-top: 1rem;\n  }\n\n  .social-media{\n    width: 50rem;\n    height: 2rem;\n  }\n\n  /* experiences lg ----- */\n\n  .page-content-exp {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    grid-template-columns: 1fr 1fr;\n    margin-top: 2rem;\n    margin-left: 5rem;\n    margin-right: 5rem;\n    width: 120vh;\n  }\n\n  /* skills lg ----- */\n\n  .images {\n    position:relative;\n    padding: 1rem !important;\n  }\n}\n\n/* Medium screen */\n\n@media only screen and (max-width: 900px){\n  /* experiences sm ----- */\n\n  .page-content-exp{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n}", "",{"version":3,"sources":["webpack://styles/style.css"],"names":[],"mappings":"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","sourcesContent":["\r\n:root {\r\n  --desktop: 1200px;\r\n  --laptop: 1024px;\r\n  --tablet: 768px;\r\n  --phone: 480px;\r\n\r\n  --bg-primary: rgba(55, 65, 81, 1);\r\n  --bg-secondary: rgba(255, 255, 255, 1);\r\n  font-size: 16px;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody::-webkit-scrollbar {\r\n  width: 0.40rem;  \r\n}\r\n\r\nbody::-webkit-scrollbar-track {  \r\n  background: white;\r\n}\r\n\r\nbody::-webkit-scrollbar-thumb {\r\n  background: black;\r\n}\r\n\r\n.main {\r\n  margin-top: 8rem; \r\n}\r\n\r\n.head {  \r\n  width: 100vw;    \r\n  position:fixed;  \r\n  background: white;\r\n  z-index: 1;\r\n}\r\n\r\n.nav {\r\n  position: fixed;\r\n  color: white;\r\n  z-index: 1;\r\n}\r\n\r\n.home-color {\r\n  background: linear-gradient(\r\n    180deg,\r\n    rgba(55, 65, 81, 1) 0%,\r\n    rgba(55, 65, 81, 0.7987570028011204) 50%,\r\n    rgba(255, 255, 255, 1) 100%\r\n  );\r\n}\r\n\r\n.home-bgstyle { \r\n  min-height: 200px;  \r\n}\r\n\r\n.home-textbg {\r\n  background-color: rgb(0 26 41);\r\n  font-size: 16px;\r\n  padding: 10px;\r\n  line-height: 30px;\r\n}\r\n\r\n.social-media{\r\n  color: white;\r\n  text-align: center;  \r\n  border-radius: 0.2rem;\r\n  background-color: var(--bg-primary); \r\n  line-height: 2rem; \r\n}\r\n\r\n.photo {\r\n  display: flex;  \r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem;\r\n}\r\n\r\n/* PDF */\r\n.Viewer {\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center; \r\n  align-content: center; \r\n \r\n  flex-direction: column;\r\n}\r\n\r\n.Viewer .header {\r\n  width: 90vw;\r\n  height: 55px;\r\n  align-items: center; \r\n  align-content: center; \r\n  padding: 8px 8px 8px 16px;\r\n  box-sizing: border-box;\r\n  background: #00709c;\r\n  font-size: 1.2em;\r\n  line-height: 44px;\r\n  color: white;\r\n}\r\n\r\n.Viewer .Webviewer {\r\n  width: 90vw;\r\n  height: 800px;  \r\n}\r\n/* END PDF */\r\n\r\n/* navbar menu */\r\n.active {   \r\n  background-color:white;\r\n  font-weight: bold;\r\n  color: Black;\r\n}\r\n\r\n/* social media btns */\r\nbutton {\r\n  display: inline-flex;  \r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-inline: 1rem;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n/* Small Screens */\r\n@media only screen and (max-width: 600px){\r\n\r\n  /* index sm ----- */\r\n.head{\r\n  font-size: 1.2rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  bottom: 0;\r\n  width: 100vw;\r\n}\r\n\r\n.main {\r\n  margin-top: 5.0rem; \r\n}\r\n\r\n.page-content{\r\n  display:block;\r\n}\r\n\r\n.home-textbg {\r\n  display: flex;  \r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;   \r\n  margin-bottom: 1.5rem; \r\n}\r\n\r\n.photo {\r\n  padding: 1rem !important;\r\n}\r\n\r\n/* skills sm ----- */\r\n.images {\r\n position: static;\r\n padding: 10px !important;\r\n}\r\n}\r\n\r\n/* Large Screens */\r\n@media only screen and (min-width: 600px){\r\n\r\n  /* index lg ----- */\r\n.head{\r\n  font-size: 3rem; \r\n  line-height: 1;\r\n  padding: 1rem;\r\n}\r\n\r\n.nav {\r\n  margin-top: 8rem;\r\n  width: 100vw;\r\n  height: 2.3rem; \r\n}\r\n\r\n.main {\r\n  margin-top: 10rem;  \r\n}\r\n\r\n.home-bgstyle{\r\n  margin-top: 2rem;\r\n  max-width: 750px;\r\n  min-width: 600x;\r\n}\r\n\r\n.home-textbg {\r\n  display: flex;  \r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;   \r\n  margin-top: 3rem; \r\n}\r\n\r\n.page-content {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.photo{\r\n  margin-top: 1rem;\r\n}\r\n\r\n.social-media{\r\n  width: 50rem;\r\n  height: 2rem; \r\n}\r\n\r\n/* experiences lg ----- */\r\n.page-content-exp {    \r\n  display: grid;\r\n  align-items: center;\r\n  justify-content: center;\r\n  grid-template-columns: 1fr 1fr;   \r\n  margin-top: 2rem;\r\n  margin-left: 5rem;\r\n  margin-right: 5rem;\r\n  width: 120vh;\r\n}\r\n\r\n/* skills lg ----- */\r\n.images {\r\n  position:relative;\r\n  padding: 1rem !important;\r\n}\r\n}\r\n\r\n/* Medium screen */\r\n@media only screen and (max-width: 900px){\r\n  /* experiences sm ----- */\r\n  .page-content-exp{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLFVBQVUsc0JBQXNCLHFCQUFxQixvQkFBb0IsbUJBQW1CLHNDQUFzQywyQ0FBMkMsb0JBQW9CLEdBQUcsVUFBVSxnQkFBZ0IsaUJBQWlCLGNBQWMsZUFBZSw4Q0FBOEMsR0FBRyw2QkFBNkIsbUJBQW1CLEdBQUcsbUNBQW1DLHNCQUFzQixHQUFHLG1DQUFtQyxzQkFBc0IsR0FBRyxXQUFXLHFCQUFxQixHQUFHLFdBQVcsaUJBQWlCLG1CQUFtQixzQkFBc0IsZUFBZSxHQUFHLFVBQVUsb0JBQW9CLGlCQUFpQixlQUFlLEdBQUcsaUJBQWlCLDBLQUEwSyxHQUFHLG1CQUFtQixzQkFBc0IsR0FBRyxrQkFBa0IsbUNBQW1DLG9CQUFvQixrQkFBa0Isc0JBQXNCLEdBQUcsa0JBQWtCLGlCQUFpQix1QkFBdUIsMEJBQTBCLHdDQUF3QyxzQkFBc0IsR0FBRyxZQUFZLGtCQUFrQiwyQkFBMkIsbUNBQW1DLHdCQUF3QixrQkFBa0IsR0FBRywwQkFBMEIsZ0JBQWdCLHFCQUFxQixpQkFBaUIsa0JBQWtCLHdCQUF3QiwwQkFBMEIsMkJBQTJCLEdBQUcscUJBQXFCLGdCQUFnQixpQkFBaUIsd0JBQXdCLDBCQUEwQiw4QkFBOEIsMkJBQTJCLHdCQUF3QixxQkFBcUIsc0JBQXNCLGlCQUFpQixHQUFHLHdCQUF3QixnQkFBZ0Isa0JBQWtCLEdBQUcsbURBQW1ELDJCQUEyQixzQkFBc0IsaUJBQWlCLEdBQUcsdUNBQXVDLHlCQUF5QixtQ0FBbUMsd0JBQXdCLHlCQUF5Qix5QkFBeUIsR0FBRyxxRUFBcUUsb0NBQW9DLHdCQUF3QixvQkFBb0IsS0FBSyxZQUFZLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGdCQUFnQixtQkFBbUIsS0FBSyxh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QixtQkFBbUIsbUJBQW1CLE1BQU0seURBQXlELHdCQUF3QiwwQkFBMEIsOEJBQThCLHFDQUFxQywwQkFBMEIsd0JBQXdCLHlCQUF5QixtQkFBbUIsS0FBSywwQ0FBMEMsd0JBQXdCLCtCQUErQixLQUFLLEtBQUsseUVBQXlFLHdEQUF3RCxzQkFBc0IsK0JBQStCLGdDQUFnQyw0QkFBNEIsT0FBTyxLQUFLLG1CQUFtQjtBQUNyblY7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjY3ZjM5MjhlNDBjZWM0NWFkZWVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWRlc2t0b3A6IDEyMDBweDtcXG4gIC0tbGFwdG9wOiAxMDI0cHg7XFxuICAtLXRhYmxldDogNzY4cHg7XFxuICAtLXBob25lOiA0ODBweDtcXG4gIC0tYmctcHJpbWFyeTogcmdiYSg1NSwgNjUsIDgxLCAxKTtcXG4gIC0tYmctc2Vjb25kYXJ5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMC40MHJlbTtcXG59XFxuXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBtYXJnaW4tdG9wOiA4cmVtO1xcbn1cXG5cXG4uaGVhZCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLm5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uaG9tZS1jb2xvciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDE4MGRlZyxcXHJcXG4gICAgcmdiYSg1NSwgNjUsIDgxLCAxKSAwJSxcXHJcXG4gICAgcmdiYSg1NSwgNjUsIDgxLCAwLjc5ODc1NzAwMjgwMTEyMDQpIDUwJSxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxMDAlXFxyXFxuICApO1xcbn1cXG5cXG4uaG9tZS1iZ3N0eWxlIHtcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4uaG9tZS10ZXh0Ymcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMjYgNDEpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhe1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuXFxuLnBob3RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi8qIFBERiAqL1xcblxcbi5WaWV3ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uVmlld2VyIC5oZWFkZXIge1xcbiAgd2lkdGg6IDkwdnc7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMTZweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiAjMDA3MDljO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uVmlld2VyIC5XZWJ2aWV3ZXIge1xcbiAgd2lkdGg6IDkwdnc7XFxuICBoZWlnaHQ6IDgwMHB4O1xcbn1cXG5cXG4vKiBFTkQgUERGICovXFxuXFxuLyogbmF2YmFyIG1lbnUgKi9cXG5cXG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiBCbGFjaztcXG59XFxuXFxuLyogc29jaWFsIG1lZGlhIGJ0bnMgKi9cXG5cXG5idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLyogU21hbGwgU2NyZWVucyAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xcbiAgLyogaW5kZXggc20gLS0tLS0gKi9cXG5cXG4gIC5oZWFke1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG5cXG4gIC5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICB9XFxuXFxuICAubWFpbiB7XFxuICAgIG1hcmdpbi10b3A6IDUuMHJlbTtcXG4gIH1cXG5cXG4gIC5wYWdlLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICB9XFxuXFxuICAuaG9tZS10ZXh0Ymcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgfVxcblxcbiAgLnBob3RvIHtcXG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLyogc2tpbGxzIHNtIC0tLS0tICovXFxuXFxuICAuaW1hZ2VzIHtcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4vKiBMYXJnZSBTY3JlZW5zICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCl7XFxuICAvKiBpbmRleCBsZyAtLS0tLSAqL1xcblxcbiAgLmhlYWR7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuXFxuICAubmF2IHtcXG4gICAgbWFyZ2luLXRvcDogOHJlbTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDIuM3JlbTtcXG4gIH1cXG5cXG4gIC5tYWluIHtcXG4gICAgbWFyZ2luLXRvcDogMTByZW07XFxuICB9XFxuXFxuICAuaG9tZS1iZ3N0eWxle1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xcbiAgICBtaW4td2lkdGg6IDYwMHg7XFxuICB9XFxuXFxuICAuaG9tZS10ZXh0Ymcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIH1cXG5cXG4gIC5wYWdlLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxuXFxuICAucGhvdG97XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICB9XFxuXFxuICAuc29jaWFsLW1lZGlhe1xcbiAgICB3aWR0aDogNTByZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gIH1cXG5cXG4gIC8qIGV4cGVyaWVuY2VzIGxnIC0tLS0tICovXFxuXFxuICAucGFnZS1jb250ZW50LWV4cCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxuICAgIHdpZHRoOiAxMjB2aDtcXG4gIH1cXG5cXG4gIC8qIHNraWxscyBsZyAtLS0tLSAqL1xcblxcbiAgLmltYWdlcyB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblxcbi8qIE1lZGl1bSBzY3JlZW4gKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcXG4gIC8qIGV4cGVyaWVuY2VzIHNtIC0tLS0tICovXFxuXFxuICAucGFnZS1jb250ZW50LWV4cHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUVkLGlDQUFpQztFQUNqQyxzQ0FBc0M7RUFDdEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRTs7Ozs7R0FLQztBQUNIOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUEsUUFBUTs7QUFDUjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBRXJCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBQ0EsWUFBWTs7QUFFWixnQkFBZ0I7O0FBQ2hCO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUEsc0JBQXNCOztBQUN0QjtFQUNFLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixvQkFBb0I7QUFDdEI7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUVFLG1CQUFtQjs7RUFDckI7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBLG9CQUFvQjs7RUFDcEI7SUFDQyxnQkFBZ0I7SUFDaEIsd0JBQXdCO0VBQ3pCO0FBQ0E7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUVFLG1CQUFtQjs7RUFDckI7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUEseUJBQXlCOztFQUN6QjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0VBRUEsb0JBQW9COztFQUNwQjtJQUNFLGlCQUFpQjtJQUNqQix3QkFBd0I7RUFDMUI7QUFDQTs7QUFFQSxrQkFBa0I7O0FBQ2xCO0VBQ0UseUJBQXlCOztFQUN6QjtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbjpyb290IHtcXHJcXG4gIC0tZGVza3RvcDogMTIwMHB4O1xcclxcbiAgLS1sYXB0b3A6IDEwMjRweDtcXHJcXG4gIC0tdGFibGV0OiA3NjhweDtcXHJcXG4gIC0tcGhvbmU6IDQ4MHB4O1xcclxcblxcclxcbiAgLS1iZy1wcmltYXJ5OiByZ2JhKDU1LCA2NSwgODEsIDEpO1xcclxcbiAgLS1iZy1zZWNvbmRhcnk6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAwLjQwcmVtOyAgXFxyXFxufVxcclxcblxcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgIFxcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA4cmVtOyBcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQgeyAgXFxyXFxuICB3aWR0aDogMTAwdnc7ICAgIFxcclxcbiAgcG9zaXRpb246Zml4ZWQ7ICBcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1jb2xvciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDE4MGRlZyxcXHJcXG4gICAgcmdiYSg1NSwgNjUsIDgxLCAxKSAwJSxcXHJcXG4gICAgcmdiYSg1NSwgNjUsIDgxLCAwLjc5ODc1NzAwMjgwMTEyMDQpIDUwJSxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxMDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1iZ3N0eWxlIHsgXFxyXFxuICBtaW4taGVpZ2h0OiAyMDBweDsgIFxcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS10ZXh0Ymcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMjYgNDEpO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLW1lZGlhe1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAgXFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1wcmltYXJ5KTsgXFxyXFxuICBsaW5lLWhlaWdodDogMnJlbTsgXFxyXFxufVxcclxcblxcclxcbi5waG90byB7XFxyXFxuICBkaXNwbGF5OiBmbGV4OyAgXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qIFBERiAqL1xcclxcbi5WaWV3ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyOyBcXHJcXG4gXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uVmlld2VyIC5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDkwdnc7XFxyXFxuICBoZWlnaHQ6IDU1cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgXFxyXFxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAxNnB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDcwOWM7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5WaWV3ZXIgLldlYnZpZXdlciB7XFxyXFxuICB3aWR0aDogOTB2dztcXHJcXG4gIGhlaWdodDogODAwcHg7ICBcXHJcXG59XFxyXFxuLyogRU5EIFBERiAqL1xcclxcblxcclxcbi8qIG5hdmJhciBtZW51ICovXFxyXFxuLmFjdGl2ZSB7ICAgXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogQmxhY2s7XFxyXFxufVxcclxcblxcclxcbi8qIHNvY2lhbCBtZWRpYSBidG5zICovXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyAgXFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU21hbGwgU2NyZWVucyAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xcclxcblxcclxcbiAgLyogaW5kZXggc20gLS0tLS0gKi9cXHJcXG4uaGVhZHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA1LjByZW07IFxcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1jb250ZW50e1xcclxcbiAgZGlzcGxheTpibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtdGV4dGJnIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7ICBcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyMHB4OyAgIFxcclxcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtOyBcXHJcXG59XFxyXFxuXFxyXFxuLnBob3RvIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2tpbGxzIHNtIC0tLS0tICovXFxyXFxuLmltYWdlcyB7XFxyXFxuIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxufVxcclxcblxcclxcbi8qIExhcmdlIFNjcmVlbnMgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KXtcXHJcXG5cXHJcXG4gIC8qIGluZGV4IGxnIC0tLS0tICovXFxyXFxuLmhlYWR7XFxyXFxuICBmb250LXNpemU6IDNyZW07IFxcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIG1hcmdpbi10b3A6IDhyZW07XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDIuM3JlbTsgXFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcmVtOyAgXFxyXFxufVxcclxcblxcclxcbi5ob21lLWJnc3R5bGV7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgbWF4LXdpZHRoOiA3NTBweDtcXHJcXG4gIG1pbi13aWR0aDogNjAweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtdGV4dGJnIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7ICBcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyMHB4OyAgIFxcclxcbiAgbWFyZ2luLXRvcDogM3JlbTsgXFxyXFxufVxcclxcblxcclxcbi5wYWdlLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBob3Rve1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1tZWRpYXtcXHJcXG4gIHdpZHRoOiA1MHJlbTtcXHJcXG4gIGhlaWdodDogMnJlbTsgXFxyXFxufVxcclxcblxcclxcbi8qIGV4cGVyaWVuY2VzIGxnIC0tLS0tICovXFxyXFxuLnBhZ2UtY29udGVudC1leHAgeyAgICBcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7ICAgXFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxyXFxuICB3aWR0aDogMTIwdmg7XFxyXFxufVxcclxcblxcclxcbi8qIHNraWxscyBsZyAtLS0tLSAqL1xcclxcbi5pbWFnZXMge1xcclxcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbn1cXHJcXG5cXHJcXG4vKiBNZWRpdW0gc2NyZWVuICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XFxyXFxuICAvKiBleHBlcmllbmNlcyBzbSAtLS0tLSAqL1xcclxcbiAgLnBhZ2UtY29udGVudC1leHB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==