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
              lineNumber: 31,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
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
                lineNumber: 42,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "items-center justify-center rounded-lg m-6 colspan-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "home-contactbg rounded-10 shadow-2xl text-white",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "home-brandstext",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: clickHandle,
                  id: "LinkedIn",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faLinkedin"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 19
                  }, _this), " LinkedIn"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: clickHandle,
                  id: "GitHub",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGithub"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 19
                  }, _this), " GitHub"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: clickHandle,
                  id: "Instagram",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faInstagram"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 19
                  }, _this), " Instagram"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: clickHandle,
                  id: "Skype",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSkype"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 19
                  }, _this), " Skype"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: clickHandle,
                  id: "Whatsapp",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faWhatsapp"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 19
                  }, _this), " WhatsApp"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "bg-gray-900 text-white font-medium rounded-lg px-6 py-4 leading-tight",
          children: "Leave a Like!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }, _this);
};

_c = Index;

var clickHandle = function clickHandle(event) {
  switch (event.target.id) {
    case "LinkedIn":
      {
        // Logic to handle `Linkedin` case
        document.location.href = "https://linkedin.com/in/gustavo-morilla";
        break;
      }

    case "GitHub":
      {
        // Logic to handle `Linkedin` case
        document.location.href = "https://github.com/M0rilla";
        break;
      }

    case "Instagram":
      {
        // Logic to handle `Linkedin` case
        document.location.href = "https://www.instagram.com/guuh_morilla/";
        break;
      }

    case "Skype":
      {
        // Logic to handle `Linkedin` case
        document.location.href = "https://join.skype.com/invite/hfiwQSelIWGw";
        break;
      }

    case "Whatsapp":
      {
        // Logic to handle `Linkedin` case
        document.location.href = "https://api.whatsapp.com/send?phone=551999189187&text=Ol%C3%A1%2C%20encontrei%20seu%20contato%20atrav%C3%A9s%20de%20seu%20site!";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0Q29uZmlnIiwic2VydmVyUnVudGltZUNvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJjb25zb2xlIiwibG9nIiwibXlTZWNyZXQiLCJzdGF0aWNGb2xkZXIiLCJJbmRleCIsImNsaWNrSGFuZGxlIiwiZmFMaW5rZWRpbiIsImZhR2l0aHViIiwiZmFJbnN0YWdyYW0iLCJmYVNreXBlIiwiZmFXaGF0c2FwcCIsImV2ZW50IiwidGFyZ2V0IiwiaWQiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0NBRUE7O0NBRUE7O0NBU0E7O2lCQUNxREEsa0RBQVMsRTtJQUF0REMsbUIsY0FBQUEsbUI7SUFBcUJDLG1CLGNBQUFBLG1CLEVBQzdCOzs7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILG1CQUFtQixDQUFDSSxRQUFoQyxFLENBQ0E7O0FBQ0FGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixtQkFBbUIsQ0FBQ0ksWUFBaEM7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxzQkFDWixxRUFBQyw4REFBRDtBQUFBLDJCQUNFO0FBQVMsZUFBUyxFQUFDLHlCQUFuQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyx1Q0FBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQywrREFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyw2QkFBZjtBQUFBLG1DQUNFLHFFQUFDLGlEQUFEO0FBQ0UsdUJBQVMsRUFBQyx3Q0FEWjtBQUVFLGlCQUFHLFlBQUtMLG1CQUFtQixDQUFDSSxZQUF6QixjQUZMO0FBR0UsaUJBQUcsRUFBQyx1QkFITjtBQUlFLG1CQUFLLEVBQUUsR0FKVDtBQUtFLG9CQUFNLEVBQUUsR0FMVjtBQU1FLHFCQUFPLEVBQUU7QUFOWDtBQUFB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Q0FBekI7QUFDQTtBQUNEOztBQUNELFNBQUssT0FBTDtBQUFjO0FBQ1o7QUFDQUYsZ0JBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsSUFBbEIsR0FBeUIsNENBQXpCO0FBQ0E7QUFDRDs7QUFDRCxTQUFLLFVBQUw7QUFBaUI7QUFDZjtBQUNBRixnQkFBUSxDQUFDQyxRQUFULENBQWtCQyxJQUFsQixHQUNFLGlJQURGO0FBRUE7QUFDRDtBQTFCSDtBQTRCRCxDQTdCRDs7QUErQmVaLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIxNDBhYzFjMmM0ZjRjOTlmOTIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2l0ZUxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9TaXRlTGF5b3V0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiO1xyXG5cclxuLy8gaW1wb3J0IHRoZSBsaWJyYXJ5XHJcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCI7XHJcbi8vIGdldCBvdXIgZm9udGF3ZXNvbWUgaW1wb3J0c1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbi8vIGltcG9ydCB5b3VyIGljb25zXHJcbmltcG9ydCB7XHJcbiAgZmFMaW5rZWRpbixcclxuICBmYUdpdGh1YixcclxuICBmYUluc3RhZ3JhbSxcclxuICBmYVNreXBlLFxyXG4gIGZhV2hhdHNhcHAsXHJcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcclxuXHJcbi8vIE9ubHkgaG9sZHMgc2VydmVyUnVudGltZUNvbmZpZyBhbmQgcHVibGljUnVudGltZUNvbmZpZ1xyXG5jb25zdCB7IHNlcnZlclJ1bnRpbWVDb25maWcsIHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG4vLyBXaWxsIG9ubHkgYmUgYXZhaWxhYmxlIG9uIHRoZSBzZXJ2ZXItc2lkZVxyXG5jb25zb2xlLmxvZyhzZXJ2ZXJSdW50aW1lQ29uZmlnLm15U2VjcmV0KTtcclxuLy8gV2lsbCBiZSBhdmFpbGFibGUgb24gYm90aCBzZXJ2ZXItc2lkZSBhbmQgY2xpZW50LXNpZGVcclxuY29uc29sZS5sb2cocHVibGljUnVudGltZUNvbmZpZy5zdGF0aWNGb2xkZXIpO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiAoXHJcbiAgPFNpdGVMYXlvdXQ+XHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtYi0yMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG15LTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaG9tZS1iZ3N0eWxlIGJnLWhvbWUgYmctYXV0byByb3VuZGVkLWxnIGdyaWQgZ3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBoLWF1dG8gbXktNiBteC02XCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBvYmplY3Qtbm9uZSBvYmplY3QtY2VudGVyXCJcclxuICAgICAgICAgICAgICBzcmM9e2Ake3B1YmxpY1J1bnRpbWVDb25maWcuc3RhdGljRm9sZGVyfS9pbWcxLnBuZ2B9XHJcbiAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcclxuICAgICAgICAgICAgICB3aWR0aD17MzAwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NDIwfVxyXG4gICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyBtLTYgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1jb250YWN0Ymcgcm91bmRlZC0xMCBzaGFkb3ctMnhsIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaG9tZS1icmFuZHN0ZXh0XCI+QWJvdXQ8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyBtLTYgY29sc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1jb250YWN0Ymcgcm91bmRlZC0xMCBzaGFkb3ctMnhsIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaG9tZS1icmFuZHN0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NsaWNrSGFuZGxlfSBpZD1cIkxpbmtlZEluXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaW5rZWRpbn0gLz4gTGlua2VkSW5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbGlja0hhbmRsZX0gaWQ9XCJHaXRIdWJcIj5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdpdGh1Yn0gLz4gR2l0SHViXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2xpY2tIYW5kbGV9IGlkPVwiSW5zdGFncmFtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFJbnN0YWdyYW19IC8+IEluc3RhZ3JhbVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NsaWNrSGFuZGxlfSBpZD1cIlNreXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTa3lwZX0gLz4gU2t5cGVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbGlja0hhbmRsZX0gaWQ9XCJXaGF0c2FwcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhV2hhdHNhcHB9IC8+IFdoYXRzQXBwXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSByb3VuZGVkLWxnIHB4LTYgcHktNCBsZWFkaW5nLXRpZ2h0XCI+XHJcbiAgICAgICAgICBMZWF2ZSBhIExpa2UhXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIDwvU2l0ZUxheW91dD5cclxuKTtcclxuXHJcbmNvbnN0IGNsaWNrSGFuZGxlID0gKGV2ZW50KSA9PiB7XHJcbiAgc3dpdGNoIChldmVudC50YXJnZXQuaWQpIHtcclxuICAgIGNhc2UgXCJMaW5rZWRJblwiOiB7XHJcbiAgICAgIC8vIExvZ2ljIHRvIGhhbmRsZSBgTGlua2VkaW5gIGNhc2VcclxuICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vZ3VzdGF2by1tb3JpbGxhXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcIkdpdEh1YlwiOiB7XHJcbiAgICAgIC8vIExvZ2ljIHRvIGhhbmRsZSBgTGlua2VkaW5gIGNhc2VcclxuICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL00wcmlsbGFcIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiSW5zdGFncmFtXCI6IHtcclxuICAgICAgLy8gTG9naWMgdG8gaGFuZGxlIGBMaW5rZWRpbmAgY2FzZVxyXG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2d1dWhfbW9yaWxsYS9cIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiU2t5cGVcIjoge1xyXG4gICAgICAvLyBMb2dpYyB0byBoYW5kbGUgYExpbmtlZGluYCBjYXNlXHJcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vam9pbi5za3lwZS5jb20vaW52aXRlL2hmaXdRU2VsSVdHd1wiO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgXCJXaGF0c2FwcFwiOiB7XHJcbiAgICAgIC8vIExvZ2ljIHRvIGhhbmRsZSBgTGlua2VkaW5gIGNhc2VcclxuICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9XHJcbiAgICAgICAgXCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NTE5OTkxODkxODcmdGV4dD1PbCVDMyVBMSUyQyUyMGVuY29udHJlaSUyMHNldSUyMGNvbnRhdG8lMjBhdHJhdiVDMyVBOXMlMjBkZSUyMHNldSUyMHNpdGUhXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9