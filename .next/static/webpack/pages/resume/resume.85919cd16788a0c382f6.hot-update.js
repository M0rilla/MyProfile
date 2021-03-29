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

  var viewer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null); // if using a class, equivalent of componentDidMount 

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_2___default()({
      path: '/lib',
      initialDoc: '/pdf/GustavoMorilla-Curriculo.pdf'
    }, viewer.current).then(function (instance) {
      var docViewer = instance.docViewer,
          Annotations = instance.Annotations;
      var annotManager = docViewer.getAnnotationManager();
      docViewer.on('documentLoaded', function () {
        var rectangleAnnot = new Annotations.RectangleAnnotation();
        rectangleAnnot.PageNumber = 1; // values are in page coordinates with (0, 0) in the top left

        rectangleAnnot.X = 100;
        rectangleAnnot.Y = 150;
        rectangleAnnot.Width = 200;
        rectangleAnnot.Height = 50;
        rectangleAnnot.Author = annotManager.getCurrentUser();
        annotManager.addAnnotation(rectangleAnnot); // need to draw the annotation otherwise it won't show up until the page is refreshed

        annotManager.redrawAnnotation(rectangleAnnot);
      });
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "header",
    children: "React sample"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, _this) // <div className="Viewer">
  //   <div className="header">React sample</div>
  //   <div className="webviewer" ref={viewer}></div>
  // </div>
  ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzdW1lL3ZpZXdlci5qcyJdLCJuYW1lcyI6WyJWaWV3ZXIiLCJ2aWV3ZXIiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJXZWJWaWV3ZXIiLCJwYXRoIiwiaW5pdGlhbERvYyIsImN1cnJlbnQiLCJ0aGVuIiwiaW5zdGFuY2UiLCJkb2NWaWV3ZXIiLCJBbm5vdGF0aW9ucyIsImFubm90TWFuYWdlciIsImdldEFubm90YXRpb25NYW5hZ2VyIiwib24iLCJyZWN0YW5nbGVBbm5vdCIsIlJlY3RhbmdsZUFubm90YXRpb24iLCJQYWdlTnVtYmVyIiwiWCIsIlkiLCJXaWR0aCIsIkhlaWdodCIsIkF1dGhvciIsImdldEN1cnJlbnRVc2VyIiwiYWRkQW5ub3RhdGlvbiIsInJlZHJhd0Fubm90YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXJCLENBRG1CLENBR25COztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsNkRBQVMsQ0FDUDtBQUNFQyxVQUFJLEVBQUUsTUFEUjtBQUVFQyxnQkFBVSxFQUFFO0FBRmQsS0FETyxFQUtQTCxNQUFNLENBQUNNLE9BTEEsQ0FBVCxDQU1FQyxJQU5GLENBTU8sVUFBQ0MsUUFBRCxFQUFjO0FBQUEsVUFDWEMsU0FEVyxHQUNnQkQsUUFEaEIsQ0FDWEMsU0FEVztBQUFBLFVBQ0FDLFdBREEsR0FDZ0JGLFFBRGhCLENBQ0FFLFdBREE7QUFFbkIsVUFBTUMsWUFBWSxHQUFHRixTQUFTLENBQUNHLG9CQUFWLEVBQXJCO0FBRUFILGVBQVMsQ0FBQ0ksRUFBVixDQUFhLGdCQUFiLEVBQStCLFlBQU07QUFDbkMsWUFBTUMsY0FBYyxHQUFHLElBQUlKLFdBQVcsQ0FBQ0ssbUJBQWhCLEVBQXZCO0FBQ0FELHNCQUFjLENBQUNFLFVBQWYsR0FBNEIsQ0FBNUIsQ0FGbUMsQ0FHbkM7O0FBQ0FGLHNCQUFjLENBQUNHLENBQWYsR0FBbUIsR0FBbkI7QUFDQUgsc0JBQWMsQ0FBQ0ksQ0FBZixHQUFtQixHQUFuQjtBQUNBSixzQkFBYyxDQUFDSyxLQUFmLEdBQXVCLEdBQXZCO0FBQ0FMLHNCQUFjLENBQUNNLE1BQWYsR0FBd0IsRUFBeEI7QUFDQU4sc0JBQWMsQ0FBQ08sTUFBZixHQUF3QlYsWUFBWSxDQUFDVyxjQUFiLEVBQXhCO0FBRUFYLG9CQUFZLENBQUNZLGFBQWIsQ0FBMkJULGNBQTNCLEVBVm1DLENBV25DOztBQUNBSCxvQkFBWSxDQUFDYSxnQkFBYixDQUE4QlYsY0FBOUI7QUFDRCxPQWJEO0FBY0QsS0F4QkQ7QUF5QkQsR0ExQlEsRUEwQk4sRUExQk0sQ0FBVDtBQTRCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREYsQ0FFRTtBQUNBO0FBQ0E7QUFDQTtBQUxGO0FBT0QsQ0F2Q0Q7O0dBQU1mLE07O0tBQUFBLE07QUF5Q1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc3VtZS9yZXN1bWUuODU5MTljZDE2Nzg4YTBjMzgyZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFdlYlZpZXdlciBmcm9tICdAcGRmdHJvbi93ZWJ2aWV3ZXInO1xyXG5cclxuY29uc3QgVmlld2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHZpZXdlciA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgLy8gaWYgdXNpbmcgYSBjbGFzcywgZXF1aXZhbGVudCBvZiBjb21wb25lbnREaWRNb3VudCBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgV2ViVmlld2VyKFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy9saWInLFxyXG4gICAgICAgIGluaXRpYWxEb2M6ICcvcGRmL0d1c3Rhdm9Nb3JpbGxhLUN1cnJpY3Vsby5wZGYnLFxyXG4gICAgICB9LFxyXG4gICAgICB2aWV3ZXIuY3VycmVudCxcclxuICAgICkudGhlbigoaW5zdGFuY2UpID0+IHtcclxuICAgICAgY29uc3QgeyBkb2NWaWV3ZXIsIEFubm90YXRpb25zIH0gPSBpbnN0YW5jZTtcclxuICAgICAgY29uc3QgYW5ub3RNYW5hZ2VyID0gZG9jVmlld2VyLmdldEFubm90YXRpb25NYW5hZ2VyKCk7XHJcblxyXG4gICAgICBkb2NWaWV3ZXIub24oJ2RvY3VtZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlY3RhbmdsZUFubm90ID0gbmV3IEFubm90YXRpb25zLlJlY3RhbmdsZUFubm90YXRpb24oKTtcclxuICAgICAgICByZWN0YW5nbGVBbm5vdC5QYWdlTnVtYmVyID0gMTtcclxuICAgICAgICAvLyB2YWx1ZXMgYXJlIGluIHBhZ2UgY29vcmRpbmF0ZXMgd2l0aCAoMCwgMCkgaW4gdGhlIHRvcCBsZWZ0XHJcbiAgICAgICAgcmVjdGFuZ2xlQW5ub3QuWCA9IDEwMDtcclxuICAgICAgICByZWN0YW5nbGVBbm5vdC5ZID0gMTUwO1xyXG4gICAgICAgIHJlY3RhbmdsZUFubm90LldpZHRoID0gMjAwO1xyXG4gICAgICAgIHJlY3RhbmdsZUFubm90LkhlaWdodCA9IDUwO1xyXG4gICAgICAgIHJlY3RhbmdsZUFubm90LkF1dGhvciA9IGFubm90TWFuYWdlci5nZXRDdXJyZW50VXNlcigpO1xyXG5cclxuICAgICAgICBhbm5vdE1hbmFnZXIuYWRkQW5ub3RhdGlvbihyZWN0YW5nbGVBbm5vdCk7XHJcbiAgICAgICAgLy8gbmVlZCB0byBkcmF3IHRoZSBhbm5vdGF0aW9uIG90aGVyd2lzZSBpdCB3b24ndCBzaG93IHVwIHVudGlsIHRoZSBwYWdlIGlzIHJlZnJlc2hlZFxyXG4gICAgICAgIGFubm90TWFuYWdlci5yZWRyYXdBbm5vdGF0aW9uKHJlY3RhbmdsZUFubm90KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlJlYWN0IHNhbXBsZTwvZGl2PlxyXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9XCJWaWV3ZXJcIj5cclxuICAgIC8vICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5SZWFjdCBzYW1wbGU8L2Rpdj5cclxuICAgIC8vICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWJ2aWV3ZXJcIiByZWY9e3ZpZXdlcn0+PC9kaXY+XHJcbiAgICAvLyA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlld2VyOyJdLCJzb3VyY2VSb290IjoiIn0=