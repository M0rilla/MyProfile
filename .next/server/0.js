exports.ids = [0];
exports.modules = {

/***/ "./components/viewer.js":
/*!******************************!*\
  !*** ./components/viewer.js ***!
  \******************************/
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

var _jsxFileName = "C:\\Users\\Gustavo Morilla\\MyProfile\\components\\viewer.js";



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ZpZXdlci5qcyJdLCJuYW1lcyI6WyJWaWV3ZXIiLCJ2aWV3ZXIiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJXZWJWaWV3ZXIiLCJwYXRoIiwiaW5pdGlhbERvYyIsImN1cnJlbnQiLCJ0aGVuIiwiaW5zdGFuY2UiLCJzZXRUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ25CLFFBQU1DLE1BQU0sR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXJCO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNaQyw2REFBUyxDQUNUO0FBQ0VDLFVBQUksRUFBRSxNQURSO0FBRUVDLGdCQUFVLEVBQUU7QUFGZCxLQURTLEVBS1hMLE1BQU0sQ0FBQ00sT0FMSSxDQUFULENBTURDLElBTkMsQ0FNSSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3hCQSxjQUFRLENBQUNDLFFBQVQsQ0FBa0IsTUFBbEI7QUFDRCxLQVJDO0FBU0gsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBLHNCQUNFO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDhCQUNBO0FBQUssaUJBQVMsRUFBQyw2QkFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBRyxtQkFBUyxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBS0E7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBMkIsV0FBRyxFQUFFVDtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELENBMUJEOztBQTRCZUQscUVBQWYsRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBXZWJWaWV3ZXIgZnJvbSBcIkBwZGZ0cm9uL3dlYnZpZXdlclwiO1xyXG5cclxuY29uc3QgVmlld2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHZpZXdlciA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgICAgIFxyXG4gICAgICBXZWJWaWV3ZXIoXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnL2xpYicsXHJcbiAgICAgICAgaW5pdGlhbERvYzogXCIvcGRmL0d1c3Rhdm9Nb3JpbGxhLnBkZlwiLFxyXG4gICAgICB9LCAgICAgICAgICAgICAgXHJcbiAgICB2aWV3ZXIuY3VycmVudClcclxuICAgIC50aGVuKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgICBpbnN0YW5jZS5zZXRUaGVtZShcImRhcmtcIik7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PiAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVmlld2VyXCI+ICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBmbGV4IGp1c3RpZnktYmV0d2VlblwiPiAgICAgICAgICBcclxuICAgICAgICAgIDxhPlJlc3VtZTwvYT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtc21cIj5Zb3UgY2FuIGRvd25sb2FkIHRoZSBmaWxlIG9uIFwiU2V0dGluZ3NcIiBidXR0b248L2E+ICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiV2Vidmlld2VyXCIgcmVmPXt2aWV3ZXJ9PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWV3ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=