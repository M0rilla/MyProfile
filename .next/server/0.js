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



const Viewer = props => {
  const viewer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_2___default()({
      path: "/lib",
      initialDoc: "/pdf/GustavoMorilla.pdf"
    }, viewer.current).then(function (instance) {
      instance.setTheme("dark");
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "Viewer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header",
      children: "My Resume"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "webviewer",
      ref: viewer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Viewer);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXN1bWUvdmlld2VyLmpzIl0sIm5hbWVzIjpbIlZpZXdlciIsInByb3BzIiwidmlld2VyIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiV2ViVmlld2VyIiwicGF0aCIsImluaXRpYWxEb2MiLCJjdXJyZW50IiwidGhlbiIsImluc3RhbmNlIiwic2V0VGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUlDLEtBQUQsSUFBVztBQUN4QixRQUFNQyxNQUFNLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFyQjtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZEMsNkRBQVMsQ0FDUDtBQUNFQyxVQUFJLEVBQUUsTUFEUjtBQUVFQyxnQkFBVSxFQUFFO0FBRmQsS0FETyxFQUtQTCxNQUFNLENBQUNNLE9BTEEsQ0FBVCxDQU1FQyxJQU5GLENBTU8sVUFBVUMsUUFBVixFQUFvQjtBQUN6QkEsY0FBUSxDQUFDQyxRQUFULENBQWtCLE1BQWxCO0FBQ0QsS0FSRDtBQVNELEdBVlEsRUFVTixFQVZNLENBQVQ7QUFZQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBMkIsU0FBRyxFQUFFVDtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBTUQsQ0FyQkQ7O0FBdUJlRixxRUFBZixFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdlYlZpZXdlciBmcm9tIFwiQHBkZnRyb24vd2Vidmlld2VyXCI7XHJcblxyXG5jb25zdCBWaWV3ZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB2aWV3ZXIgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBXZWJWaWV3ZXIoXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9saWJcIixcclxuICAgICAgICBpbml0aWFsRG9jOiBcIi9wZGYvR3VzdGF2b01vcmlsbGEucGRmXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHZpZXdlci5jdXJyZW50XHJcbiAgICApLnRoZW4oZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICAgIGluc3RhbmNlLnNldFRoZW1lKFwiZGFya1wiKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiVmlld2VyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+TXkgUmVzdW1lPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2Vidmlld2VyXCIgcmVmPXt2aWV3ZXJ9PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZXdlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==