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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");


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
              lineNumber: 26,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "items-center justify-center rounded-lg m-6 ",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "home-contactbg rounded-10 shadow-2xl text-white",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "home-brandstext",
                children: ["Contact:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "home-brandstext",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: clickHandle,
                      id: "LinkedIn",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faLinkedin"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 40,
                        columnNumber: 67
                      }, _this), " LinkedIn"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 40,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: clickHandle,
                      id: "GitHub",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGithub"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 41,
                        columnNumber: 65
                      }, _this), " GitHub"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 41,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: clickHandle,
                      id: "Instagram",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faInstagram"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 42,
                        columnNumber: 68
                      }, _this), " Instagram"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 42,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: clickHandle,
                      id: "Skype",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSkype"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 43,
                        columnNumber: 64
                      }, _this), " Skype"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: clickHandle,
                      id: "Whatsapp",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faWhatsapp"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 44,
                        columnNumber: 67
                      }, _this), " WhatsApp"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 44,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 19
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
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
          lineNumber: 24,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "bg-gray-900 text-white font-medium rounded-lg px-6 py-4 leading-tight",
          children: "Leave a Like!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0Q29uZmlnIiwic2VydmVyUnVudGltZUNvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJjb25zb2xlIiwibG9nIiwibXlTZWNyZXQiLCJzdGF0aWNGb2xkZXIiLCJJbmRleCIsImNsaWNrSGFuZGxlIiwiZmFMaW5rZWRpbiIsImZhR2l0aHViIiwiZmFJbnN0YWdyYW0iLCJmYVNreXBlIiwiZmFXaGF0c2FwcCIsImV2ZW50IiwidGFyZ2V0IiwiaWQiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBOztDQUVBOztDQUVBOztDQUdBOztpQkFDcURBLGtEQUFTLEU7SUFBdERDLG1CLGNBQUFBLG1CO0lBQXFCQyxtQixjQUFBQSxtQixFQUM3Qjs7O0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxtQkFBbUIsQ0FBQ0ksUUFBaEMsRSxDQUNBOztBQUNBRixPQUFPLENBQUNDLEdBQVIsQ0FBWUYsbUJBQW1CLENBQUNJLFlBQWhDOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsc0JBQ1oscUVBQUMsOERBQUQ7QUFBQSwyQkFDRTtBQUFTLGVBQVMsRUFBQyx5QkFBbkI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsdUNBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsK0RBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsNkJBQWY7QUFBQSxtQ0FDRSxxRUFBQyxpREFBRDtBQUNFLHVCQUFTLEVBQUMsd0NBRFo7QUFFRSxpQkFBRyxZQUFLTCxtQkFBbUIsQ0FBQ0ksWUFBekIsY0FGTDtBQUdFLGlCQUFHLEVBQUMsdUJBSE47QUFJRSxtQkFBSyxFQUFFLEdBSlQ7QUFLRSxvQkFBTSxFQUFFLEdBTFY7QUFNRSxxQkFBTyxFQUFFO0FB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QjtBQUNBO0FBQ0Q7O0FBQ0QsU0FBSyxXQUFMO0FBQW1CO0FBQ3JCO0FBQ0lGLGdCQUFRLENBQUNDLFFBQVQsQ0FBa0JDLElBQWxCLEdBQXlCLHlDQUF6QjtBQUNBO0FBQ0Q7O0FBQ0QsU0FBSyxPQUFMO0FBQWU7QUFDbkI7QUFDSUYsZ0JBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsSUFBbEIsR0FBeUIsNENBQXpCO0FBQ0E7QUFDQzs7QUFDRCxTQUFLLFVBQUw7QUFBa0I7QUFDdEI7QUFDSUYsZ0JBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsSUFBbEIsR0FBeUIsaUlBQXpCO0FBQ0E7QUFDQztBQXpCTDtBQTJCSCxDQTVCRDs7QUE4QmVaLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQyNzMxOWRlYWY2ZTVhOWEzYTI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2l0ZUxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9TaXRlTGF5b3V0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbi8vIGltcG9ydCB0aGUgbGlicmFyeVxyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuLy8gZ2V0IG91ciBmb250YXdlc29tZSBpbXBvcnRzXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuLy8gaW1wb3J0IHlvdXIgaWNvbnNcclxuaW1wb3J0IHsgZmFMaW5rZWRpbiwgZmFHaXRodWIsIGZhSW5zdGFncmFtLCBmYVNreXBlLCBmYVdoYXRzYXBwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcblxyXG4vLyBPbmx5IGhvbGRzIHNlcnZlclJ1bnRpbWVDb25maWcgYW5kIHB1YmxpY1J1bnRpbWVDb25maWdcclxuY29uc3QgeyBzZXJ2ZXJSdW50aW1lQ29uZmlnLCBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuLy8gV2lsbCBvbmx5IGJlIGF2YWlsYWJsZSBvbiB0aGUgc2VydmVyLXNpZGVcclxuY29uc29sZS5sb2coc2VydmVyUnVudGltZUNvbmZpZy5teVNlY3JldCk7XHJcbi8vIFdpbGwgYmUgYXZhaWxhYmxlIG9uIGJvdGggc2VydmVyLXNpZGUgYW5kIGNsaWVudC1zaWRlXHJcbmNvbnNvbGUubG9nKHB1YmxpY1J1bnRpbWVDb25maWcuc3RhdGljRm9sZGVyKTtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxyXG4gIDxTaXRlTGF5b3V0PlxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWItMjBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteS02XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGhvbWUtYmdzdHlsZSBiZy1ob21lIGJnLWF1dG8gcm91bmRlZC1sZyBncmlkIGdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgaC1hdXRvIG15LTYgbXgtNlwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgb2JqZWN0LW5vbmUgb2JqZWN0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgc3JjPXtgJHtwdWJsaWNSdW50aW1lQ29uZmlnLnN0YXRpY0ZvbGRlcn0vaW1nMS5wbmdgfVxyXG4gICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezQyMH1cclxuICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgICAgIC8+ICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcgbS02IFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtY29udGFjdGJnIHJvdW5kZWQtMTAgc2hhZG93LTJ4bCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhvbWUtYnJhbmRzdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgQ29udGFjdDpcclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJob21lLWJyYW5kc3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxidXR0b24gb25DbGljaz17Y2xpY2tIYW5kbGV9IGlkPVwiTGlua2VkSW5cIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlua2VkaW59Lz4gTGlua2VkSW48L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBvbkNsaWNrPXtjbGlja0hhbmRsZX0gaWQ9XCJHaXRIdWJcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2l0aHVifS8+IEdpdEh1YjwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIG9uQ2xpY2s9e2NsaWNrSGFuZGxlfSBpZD1cIkluc3RhZ3JhbVwiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFJbnN0YWdyYW19Lz4gSW5zdGFncmFtPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxidXR0b24gb25DbGljaz17Y2xpY2tIYW5kbGV9IGlkPVwiU2t5cGVcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2t5cGV9Lz4gU2t5cGU8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBvbkNsaWNrPXtjbGlja0hhbmRsZX0gaWQ9XCJXaGF0c2FwcFwiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFXaGF0c2FwcH0vPiBXaGF0c0FwcDwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgcHgtNiBweS00IGxlYWRpbmctdGlnaHRcIj5cclxuICAgICAgICAgIExlYXZlIGEgTGlrZSFcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgPC9TaXRlTGF5b3V0PlxyXG4pO1xyXG5cclxuY29uc3QgY2xpY2tIYW5kbGUgPSAoZXZlbnQpID0+IHtcclxuICAgIHN3aXRjaChldmVudC50YXJnZXQuaWQpIHtcclxuICAgICAgICBjYXNlICdMaW5rZWRJbicgOiB7XHJcbiAgICAgICAgLy8gTG9naWMgdG8gaGFuZGxlIGBMaW5rZWRpbmAgY2FzZVxyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJ2h0dHBzOi8vbGlua2VkaW4uY29tL2luL2d1c3Rhdm8tbW9yaWxsYSc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIGNhc2UgJ0dpdEh1YicgOiB7XHJcbiAgICAgIC8vIExvZ2ljIHRvIGhhbmRsZSBgTGlua2VkaW5gIGNhc2VcclxuICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL00wcmlsbGEnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBjYXNlICdJbnN0YWdyYW0nIDoge1xyXG4gICAgICAvLyBMb2dpYyB0byBoYW5kbGUgYExpbmtlZGluYCBjYXNlXHJcbiAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZ3V1aF9tb3JpbGxhLyc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IFxyXG4gICAgICAgIGNhc2UgJ1NreXBlJyA6IHtcclxuICAgIC8vIExvZ2ljIHRvIGhhbmRsZSBgTGlua2VkaW5gIGNhc2VcclxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJ2h0dHBzOi8vam9pbi5za3lwZS5jb20vaW52aXRlL2hmaXdRU2VsSVdHdyc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBjYXNlICdXaGF0c2FwcCcgOiB7XHJcbiAgICAvLyBMb2dpYyB0byBoYW5kbGUgYExpbmtlZGluYCBjYXNlXHJcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICdodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NTE5OTkxODkxODcmdGV4dD1PbCVDMyVBMSUyQyUyMGVuY29udHJlaSUyMHNldSUyMGNvbnRhdG8lMjBhdHJhdiVDMyVBOXMlMjBkZSUyMHNldSUyMHNpdGUhJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgICB9ICAgIFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=