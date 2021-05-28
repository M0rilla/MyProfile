webpackHotUpdate_N_E("pages/resume/resume",{

/***/ "./node_modules/@pdftron/webviewer/webviewer.min.js":
false,

/***/ "./pages/resume/viewer.js":
/*!********************************!*\
  !*** ./pages/resume/viewer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\Gustavo Morilla\\MyProfile\\pages\\resume\\viewer.js",
    _this = undefined,
    _s = $RefreshSig$();

 // import WebViewer from "@pdftron/webviewer";

var Viewer = function Viewer() {
  _s();

  var viewer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! @pdftron/webviewer */ "./node_modules/@pdftron/webviewer/webviewer.min.js", 7));
    WebViewer({
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
          lineNumber: 24,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "text-sm",
          children: "You can download the file on \"Settings\" button"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "Webviewer",
        ref: viewer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_s(Viewer, "y8sMazzoTWk8lnu56NnIw9A+doY=");

_c = Viewer;
/* harmony default export */ __webpack_exports__["default"] = (Viewer);

var _c;

$RefreshReg$(_c, "Viewer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzdW1lL3ZpZXdlci5qcyJdLCJuYW1lcyI6WyJWaWV3ZXIiLCJ2aWV3ZXIiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJXZWJWaWV3ZXIiLCJwYXRoIiwiaW5pdGlhbERvYyIsImN1cnJlbnQiLCJ0aGVuIiwiaW5zdGFuY2UiLCJzZXRUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxNQUFNLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFyQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBQyxhQUFTLENBQ1A7QUFDRUMsVUFBSSxFQUFFLE1BRFI7QUFFRUMsZ0JBQVUsRUFBRTtBQUZkLEtBRE8sRUFLUEwsTUFBTSxDQUFDTSxPQUxBLENBQVQsQ0FNRUMsSUFORixDQU1PLFVBQVVDLFFBQVYsRUFBb0I7QUFDekJBLGNBQVEsQ0FBQ0MsUUFBVCxDQUFrQixNQUFsQjtBQUNELEtBUkQ7QUFTRCxHQVhRLEVBV04sRUFYTSxDQUFUO0FBYUEsc0JBQ0U7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsOEJBQ0E7QUFBSyxpQkFBUyxFQUFDLDZCQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFHLG1CQUFTLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUtBO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQTJCLFdBQUcsRUFBRVQ7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBM0JEOztHQUFNRCxNOztLQUFBQSxNO0FBNkJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXN1bWUvcmVzdW1lLmVlMTFhYjMwYWQ2MjIxYjQ3ZDE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IFdlYlZpZXdlciBmcm9tIFwiQHBkZnRyb24vd2Vidmlld2VyXCI7XHJcblxyXG5jb25zdCBWaWV3ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgdmlld2VyID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW1wb3J0KFwiQHBkZnRyb24vd2Vidmlld2VyXCIpXHJcbiAgICBXZWJWaWV3ZXIoXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnL2xpYicsXHJcbiAgICAgICAgaW5pdGlhbERvYzogXCIvcGRmL0d1c3Rhdm9Nb3JpbGxhLnBkZlwiLFxyXG4gICAgICB9LFxyXG4gICAgICB2aWV3ZXIuY3VycmVudFxyXG4gICAgKS50aGVuKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgICBpbnN0YW5jZS5zZXRUaGVtZShcImRhcmtcIik7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PiAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVmlld2VyXCI+ICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBmbGV4IGp1c3RpZnktYmV0d2VlblwiPiAgICAgICAgICBcclxuICAgICAgICAgIDxhPlJlc3VtZTwvYT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtc21cIj5Zb3UgY2FuIGRvd25sb2FkIHRoZSBmaWxlIG9uIFwiU2V0dGluZ3NcIiBidXR0b248L2E+ICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiV2Vidmlld2VyXCIgcmVmPXt2aWV3ZXJ9PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWV3ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=