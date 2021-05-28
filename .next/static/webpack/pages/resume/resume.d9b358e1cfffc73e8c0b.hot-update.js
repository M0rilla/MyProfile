webpackHotUpdate_N_E("pages/resume/resume",{

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
/* harmony import */ var _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pdftron/webviewer */ "./node_modules/@pdftron/webviewer/webviewer.min.js");
/* harmony import */ var _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pdftron_webviewer__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Gustavo Morilla\\MyProfile\\pages\\resume\\viewer.js",
    _this = undefined,
    _s = $RefreshSig$();




var Viewer = function Viewer() {
  _s();

  var viewer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "text-sm",
          children: "You can download the file on \"Settings\" button"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "Webviewer",
        ref: viewer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzdW1lL3ZpZXdlci5qcyJdLCJuYW1lcyI6WyJWaWV3ZXIiLCJ2aWV3ZXIiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJXZWJWaWV3ZXIiLCJwYXRoIiwiaW5pdGlhbERvYyIsImN1cnJlbnQiLCJ0aGVuIiwiaW5zdGFuY2UiLCJzZXRUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDbkIsTUFBTUMsTUFBTSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBckI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLDZEQUFTLENBQ1A7QUFDRUMsVUFBSSxFQUFFLE1BRFI7QUFFRUMsZ0JBQVUsRUFBRTtBQUZkLEtBRE8sRUFLUEwsTUFBTSxDQUFDTSxPQUxBLENBQVQsQ0FNRUMsSUFORixDQU1PLFVBQVVDLFFBQVYsRUFBb0I7QUFDekJBLGNBQVEsQ0FBQ0MsUUFBVCxDQUFrQixNQUFsQjtBQUNELEtBUkQ7QUFTRCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUEsc0JBQ0U7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsOEJBQ0E7QUFBSyxpQkFBUyxFQUFDLDZCQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFHLG1CQUFTLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUtBO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQTJCLFdBQUcsRUFBRVQ7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBMUJEOztHQUFNRCxNOztLQUFBQSxNO0FBNEJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXN1bWUvcmVzdW1lLmQ5YjM1OGUxY2ZmZmM3M2U4YzBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdlYlZpZXdlciBmcm9tIFwiQHBkZnRyb24vd2Vidmlld2VyXCI7XHJcblxyXG5jb25zdCBWaWV3ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgdmlld2VyID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4geyAgIFxyXG4gICAgV2ViVmlld2VyKFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy9saWInLFxyXG4gICAgICAgIGluaXRpYWxEb2M6IFwiL3BkZi9HdXN0YXZvTW9yaWxsYS5wZGZcIixcclxuICAgICAgfSxcclxuICAgICAgdmlld2VyLmN1cnJlbnRcclxuICAgICkudGhlbihmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgaW5zdGFuY2Uuc2V0VGhlbWUoXCJkYXJrXCIpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj4gICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlZpZXdlclwiPiAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj4gICAgICAgICAgXHJcbiAgICAgICAgICA8YT5SZXN1bWU8L2E+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+WW91IGNhbiBkb3dubG9hZCB0aGUgZmlsZSBvbiBcIlNldHRpbmdzXCIgYnV0dG9uPC9hPiAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIldlYnZpZXdlclwiIHJlZj17dmlld2VyfT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlld2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9