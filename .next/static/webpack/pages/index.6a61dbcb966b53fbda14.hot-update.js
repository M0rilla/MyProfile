webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SiteLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SiteLayout */ "./components/SiteLayout.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ "./node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");


var _jsxFileName = "C:\\Users\\Gustavo Morilla\\MyProfile\\pages\\index.js",
    _this = undefined;



 // import the library

 // get our fontawesome imports

 // import your icons

 // Only holds serverRuntimeConfig and publicRuntimeConfig

var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_3___default()(),
    serverRuntimeConfig = _getConfig.serverRuntimeConfig,
    publicRuntimeConfig = _getConfig.publicRuntimeConfig; // Will only be available on the server-side


console.log(serverRuntimeConfig.mySecret); // Will be available on both server-side and client-side

console.log(publicRuntimeConfig.staticFolder);

var Index = function Index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SiteLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "container mx-auto mb-20",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center justify-center my-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex home-bgstyle bg-home bg-auto rounded-lg grid grid-cols-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "rounded-lg h-auto my-6 mx-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
              className: "rounded-full object-none object-center",
              src: "".concat(publicRuntimeConfig.staticFolder, "/img1.png"),
              alt: "Picture of the author",
              width: 300,
              height: 420,
              quality: 100
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "items-center justify-center rounded-lg m-6 ",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "home-contactbg rounded-10 shadow-2xl text-white",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "home-brandstext",
                children: "About"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "bg-gray-900 text-white font-medium rounded-lg px-6 py-4 leading-tight",
          children: "Leave a Like!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }, _this);
};

_c = Index;

var clickHandle = function clickHandle(event) {
  switch (event.target.id) {
    case 'LinkedIn':
      {
        // Logic to handle `Linkedin` case
        document.location.href = 'https://linkedin.com/in/gustavo-morilla';
        break;
      }

    case 'GitHub':
      {
        // Logic to handle `Linkedin` case
        document.location.href = 'https://github.com/M0rilla';
        break;
      }

    case 'Instagram':
      {
        // Logic to handle `Linkedin` case
        document.location.href = 'https://www.instagram.com/guuh_morilla/';
        break;
      }

    case 'Skype':
      {
        // Logic to handle `Linkedin` case
        document.location.href = 'https://join.skype.com/invite/hfiwQSelIWGw';
        break;
      }

    case 'Whatsapp':
      {
        // Logic to handle `Linkedin` case
        document.location.href = 'https://api.whatsapp.com/send?phone=551999189187&text=Ol%C3%A1%2C%20encontrei%20seu%20contato%20atrav%C3%A9s%20de%20seu%20site!';
        break;
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0Q29uZmlnIiwic2VydmVyUnVudGltZUNvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJjb25zb2xlIiwibG9nIiwibXlTZWNyZXQiLCJzdGF0aWNGb2xkZXIiLCJJbmRleCIsImNsaWNrSGFuZGxlIiwiZXZlbnQiLCJ0YXJnZXQiLCJpZCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7Q0FFQTs7Q0FFQTs7Q0FHQTs7aUJBQ3FEQSxrREFBUyxFO0lBQXREQyxtQixjQUFBQSxtQjtJQUFxQkMsbUIsY0FBQUEsbUIsRUFDN0I7OztBQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsbUJBQW1CLENBQUNJLFFBQWhDLEUsQ0FDQTs7QUFDQUYsT0FBTyxDQUFDQyxHQUFSLENBQVlGLG1CQUFtQixDQUFDSSxZQUFoQzs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLHNCQUNaLHFFQUFDLDhEQUFEO0FBQUEsMkJBQ0U7QUFBUyxlQUFTLEVBQUMseUJBQW5CO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLHVDQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLCtEQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLDZCQUFmO0FBQUEsbUNBQ0UscUVBQUMsaURBQUQ7QUFDRSx1QkFBUyxFQUFDLHdDQURaO0FBRUUsaUJBQUcsWUFBS0wsbUJBQW1CLENBQUNJLFlBQXpCLGNBRkw7QUFHRSxpQkFBRyxFQUFDLHVCQUhOO0FBSUUsbUJBQUssRUFBRSxHQUpUO0FBS0Usb0JBQU0sRUFBRSxHQUxWO0FBTUUscUJBQU8sRUFBRTtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBWUU7QUFBSyxxQkFBUyxFQUFDLDZDQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLGlEQUFmO0FBQUEscUNBQ0U7QUFBSSx5QkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBMEJFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsK0JBQ0U7QUFBUSxtQkFBUyxFQUFDLHVFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURZO0FBQUEsQ0FBZDs7S0FBTUMsSzs7QUFxQ04sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCLFVBQU9BLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxFQUFwQjtBQUNJLFNBQUssVUFBTDtBQUFrQjtBQUNsQjtBQUNJQyxnQkFBUSxDQUFDQyxRQUFULENBQWtCQyxJQUFsQixHQUF5Qix5Q0FBekI7QUFDQTtBQUNIOztBQUNELFNBQUssUUFBTDtBQUFnQjtBQUNsQjtBQUNJRixnQkFBUSxDQUFDQyxRQUFULENBQWtCQyxJQUFsQixHQUF5Qiw0QkFBekI7QUFDQTtBQUNEOztBQUNELFNBQUssV0FBTDtBQUFtQjtBQUNyQjtBQUNJRixnQkFBUSxDQUFDQyxRQUFULENBQWtCQyxJQUFsQixHQUF5Qix5Q0FBekI7QUFDQTtBQUNEOztBQUNELFNBQUssT0FBTDtBQUFlO0FBQ25CO0FBQ0lGLGdCQUFRLENBQUNDLFFBQVQsQ0FBa0JDLElBQWxCLEdBQXlCLDRDQUF6QjtBQUNBO0FBQ0M7O0FBQ0QsU0FBSyxVQUFMO0FBQWtCO0FBQ3RCO0FBQ0lGLGdCQUFRLENBQUNDLFFBQVQsQ0FBa0JDLElBQWxCLEdBQXlCLGlJQUF6QjtBQUNBO0FBQ0M7QUF6Qkw7QUEyQkgsQ0E1QkQ7O0FBOEJlUCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YTYxZGJjYjk2NmI1M2ZiZGExNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpdGVMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2l0ZUxheW91dFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwibmV4dC9jb25maWdcIjtcclxuXHJcbi8vIGltcG9ydCB0aGUgbGlicmFyeVxyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuLy8gZ2V0IG91ciBmb250YXdlc29tZSBpbXBvcnRzXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuLy8gaW1wb3J0IHlvdXIgaWNvbnNcclxuaW1wb3J0IHsgZmFMaW5rZWRpbiwgZmFHaXRodWIsIGZhSW5zdGFncmFtLCBmYVNreXBlLCBmYVdoYXRzYXBwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcblxyXG4vLyBPbmx5IGhvbGRzIHNlcnZlclJ1bnRpbWVDb25maWcgYW5kIHB1YmxpY1J1bnRpbWVDb25maWdcclxuY29uc3QgeyBzZXJ2ZXJSdW50aW1lQ29uZmlnLCBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuLy8gV2lsbCBvbmx5IGJlIGF2YWlsYWJsZSBvbiB0aGUgc2VydmVyLXNpZGVcclxuY29uc29sZS5sb2coc2VydmVyUnVudGltZUNvbmZpZy5teVNlY3JldCk7XHJcbi8vIFdpbGwgYmUgYXZhaWxhYmxlIG9uIGJvdGggc2VydmVyLXNpZGUgYW5kIGNsaWVudC1zaWRlXHJcbmNvbnNvbGUubG9nKHB1YmxpY1J1bnRpbWVDb25maWcuc3RhdGljRm9sZGVyKTtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxyXG4gIDxTaXRlTGF5b3V0PlxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWItMjBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteS02XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGhvbWUtYmdzdHlsZSBiZy1ob21lIGJnLWF1dG8gcm91bmRlZC1sZyBncmlkIGdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgaC1hdXRvIG15LTYgbXgtNlwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgb2JqZWN0LW5vbmUgb2JqZWN0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgc3JjPXtgJHtwdWJsaWNSdW50aW1lQ29uZmlnLnN0YXRpY0ZvbGRlcn0vaW1nMS5wbmdgfVxyXG4gICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezQyMH1cclxuICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnIG0tNiBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWNvbnRhY3RiZyByb3VuZGVkLTEwIHNoYWRvdy0yeGwgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJob21lLWJyYW5kc3RleHRcIj5cclxuICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSByb3VuZGVkLWxnIHB4LTYgcHktNCBsZWFkaW5nLXRpZ2h0XCI+XHJcbiAgICAgICAgICBMZWF2ZSBhIExpa2UhXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIDwvU2l0ZUxheW91dD5cclxuKTtcclxuXHJcbmNvbnN0IGNsaWNrSGFuZGxlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzd2l0Y2goZXZlbnQudGFyZ2V0LmlkKSB7XHJcbiAgICAgICAgY2FzZSAnTGlua2VkSW4nIDoge1xyXG4gICAgICAgIC8vIExvZ2ljIHRvIGhhbmRsZSBgTGlua2VkaW5gIGNhc2VcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICdodHRwczovL2xpbmtlZGluLmNvbS9pbi9ndXN0YXZvLW1vcmlsbGEnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9ICBcclxuICAgICAgICBjYXNlICdHaXRIdWInIDoge1xyXG4gICAgICAvLyBMb2dpYyB0byBoYW5kbGUgYExpbmtlZGluYCBjYXNlXHJcbiAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9NMHJpbGxhJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgY2FzZSAnSW5zdGFncmFtJyA6IHtcclxuICAgICAgLy8gTG9naWMgdG8gaGFuZGxlIGBMaW5rZWRpbmAgY2FzZVxyXG4gICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2d1dWhfbW9yaWxsYS8nO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBjYXNlICdTa3lwZScgOiB7XHJcbiAgICAvLyBMb2dpYyB0byBoYW5kbGUgYExpbmtlZGluYCBjYXNlXHJcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICdodHRwczovL2pvaW4uc2t5cGUuY29tL2ludml0ZS9oZml3UVNlbElXR3cnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgY2FzZSAnV2hhdHNhcHAnIDoge1xyXG4gICAgLy8gTG9naWMgdG8gaGFuZGxlIGBMaW5rZWRpbmAgY2FzZVxyXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NTUxOTk5MTg5MTg3JnRleHQ9T2wlQzMlQTElMkMlMjBlbmNvbnRyZWklMjBzZXUlMjBjb250YXRvJTIwYXRyYXYlQzMlQTlzJTIwZGUlMjBzZXUlMjBzaXRlISc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSAgICBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9