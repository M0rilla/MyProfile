exports.ids = [0];
exports.modules = {

/***/ "./pages/resume/viewer.js":
/*!********************************!*\
  !*** ./pages/resume/viewer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pdftron/webviewer */ "@pdftron/webviewer");
/* harmony import */ var _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pdftron_webviewer__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Gustavo Morilla\\MyProfile\\pages\\resume\\viewer.js";



const Viewer = () => {
  const viewer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_2___default()({
      path: '/lib',
      initialDoc: "/pdf/GustavoMorilla.pdf"
    }, viewer.current).then(function (instance) {
      instance.setTheme("dark");
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "Viewer",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "header flex justify-between",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "Resume"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "text-sm",
          children: "You can download the file on \"Settings\" button"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "Webviewer",
        ref: viewer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Viewer);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXN1bWUvdmlld2VyLmpzIl0sIm5hbWVzIjpbIlZpZXdlciIsInZpZXdlciIsInVzZVJlZiIsInVzZUVmZmVjdCIsIldlYlZpZXdlciIsInBhdGgiLCJpbml0aWFsRG9jIiwiY3VycmVudCIsInRoZW4iLCJpbnN0YW5jZSIsInNldFRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDbkIsUUFBTUMsTUFBTSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBckI7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLDZEQUFTLENBQ1A7QUFDRUMsVUFBSSxFQUFFLE1BRFI7QUFFRUMsZ0JBQVUsRUFBRTtBQUZkLEtBRE8sRUFLUEwsTUFBTSxDQUFDTSxPQUxBLENBQVQsQ0FNRUMsSUFORixDQU1PLFVBQVVDLFFBQVYsRUFBb0I7QUFDekJBLGNBQVEsQ0FBQ0MsUUFBVCxDQUFrQixNQUFsQjtBQUNELEtBUkQ7QUFTRCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUEsc0JBQ0U7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsOEJBQ0E7QUFBSyxpQkFBUyxFQUFDLDZCQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFHLG1CQUFTLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFLQTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUEyQixXQUFHLEVBQUVUO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBV0QsQ0ExQkQ7O0FBNEJlRCxxRUFBZixFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdlYlZpZXdlciBmcm9tIFwiQHBkZnRyb24vd2Vidmlld2VyXCI7XHJcblxyXG5jb25zdCBWaWV3ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgdmlld2VyID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4geyAgIFxyXG4gICAgV2ViVmlld2VyKFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy9saWInLFxyXG4gICAgICAgIGluaXRpYWxEb2M6IFwiL3BkZi9HdXN0YXZvTW9yaWxsYS5wZGZcIixcclxuICAgICAgfSxcclxuICAgICAgdmlld2VyLmN1cnJlbnRcclxuICAgICkudGhlbihmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgaW5zdGFuY2Uuc2V0VGhlbWUoXCJkYXJrXCIpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj4gICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlZpZXdlclwiPiAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj4gICAgICAgICAgXHJcbiAgICAgICAgICA8YT5SZXN1bWU8L2E+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+WW91IGNhbiBkb3dubG9hZCB0aGUgZmlsZSBvbiBcIlNldHRpbmdzXCIgYnV0dG9uPC9hPiAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIldlYnZpZXdlclwiIHJlZj17dmlld2VyfT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlld2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9