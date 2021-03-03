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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "items-center justify-center rounded-lg m-6 ",
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
                    lineNumber: 47,
                    columnNumber: 63
                  }, _this), " LinkedIn"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: clickHandle,
                  id: "GitHub",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGithub"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 61
                  }, _this), " GitHub"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: clickHandle,
                  id: "Instagram",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faInstagram"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 64
                  }, _this), " Instagram"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: clickHandle,
                  id: "Skype",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSkype"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 60
                  }, _this), " Skype"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: clickHandle,
                  id: "Whatsapp",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faWhatsapp"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 63
                  }, _this), " WhatsApp"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 1
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
          lineNumber: 58,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0Q29uZmlnIiwic2VydmVyUnVudGltZUNvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJjb25zb2xlIiwibG9nIiwibXlTZWNyZXQiLCJzdGF0aWNGb2xkZXIiLCJJbmRleCIsImNsaWNrSGFuZGxlIiwiZmFMaW5rZWRpbiIsImZhR2l0aHViIiwiZmFJbnN0YWdyYW0iLCJmYVNreXBlIiwiZmFXaGF0c2FwcCIsImV2ZW50IiwidGFyZ2V0IiwiaWQiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0NBRUE7O0NBRUE7O0NBR0E7O2lCQUNxREEsa0RBQVMsRTtJQUF0REMsbUIsY0FBQUEsbUI7SUFBcUJDLG1CLGNBQUFBLG1CLEVBQzdCOzs7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILG1CQUFtQixDQUFDSSxRQUFoQyxFLENBQ0E7O0FBQ0FGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixtQkFBbUIsQ0FBQ0ksWUFBaEM7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxzQkFDWixxRUFBQyw4REFBRDtBQUFBLDJCQUNFO0FBQVMsZUFBUyxFQUFDLHlCQUFuQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyx1Q0FBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQywrREFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyw2QkFBZjtBQUFBLG1DQUNFLHFFQUFDLGlEQUFEO0FBQ0UsdUJBQVMsRUFBQyx3Q0FEWjtBQUVFLGlCQUFHLFlBQUtMLG1CQUFtQixDQUFDSSxZQUF6QixjQUZMO0FBR0UsaUJBQUcsRUFBQyx1QkFITjtBQUlFLG1CQUFLLEVBQUUsR0FKVDtBQUtFLG9CQUFNLEVBQUUsR0FMVjtBQU1FLHFCQUFPLEVBQUU7QUFOWDtBQUFB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SUFBbEIsR0FBeUIseUNBQXpCO0FBQ0E7QUFDRDs7QUFDRCxTQUFLLE9BQUw7QUFBZTtBQUNuQjtBQUNJRixnQkFBUSxDQUFDQyxRQUFULENBQWtCQyxJQUFsQixHQUF5Qiw0Q0FBekI7QUFDQTtBQUNDOztBQUNELFNBQUssVUFBTDtBQUFrQjtBQUN0QjtBQUNJRixnQkFBUSxDQUFDQyxRQUFULENBQWtCQyxJQUFsQixHQUF5QixpSUFBekI7QUFDQTtBQUNDO0FBekJMO0FBMkJILENBNUJEOztBQThCZVosb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzE3NDNhNDBiNjJmMDdkYWYxNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaXRlTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL1NpdGVMYXlvdXRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XHJcblxyXG4vLyBpbXBvcnQgdGhlIGxpYnJhcnlcclxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XHJcbi8vIGdldCBvdXIgZm9udGF3ZXNvbWUgaW1wb3J0c1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbi8vIGltcG9ydCB5b3VyIGljb25zXHJcbmltcG9ydCB7IGZhTGlua2VkaW4sIGZhR2l0aHViLCBmYUluc3RhZ3JhbSwgZmFTa3lwZSwgZmFXaGF0c2FwcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5cclxuLy8gT25seSBob2xkcyBzZXJ2ZXJSdW50aW1lQ29uZmlnIGFuZCBwdWJsaWNSdW50aW1lQ29uZmlnXHJcbmNvbnN0IHsgc2VydmVyUnVudGltZUNvbmZpZywgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcbi8vIFdpbGwgb25seSBiZSBhdmFpbGFibGUgb24gdGhlIHNlcnZlci1zaWRlXHJcbmNvbnNvbGUubG9nKHNlcnZlclJ1bnRpbWVDb25maWcubXlTZWNyZXQpO1xyXG4vLyBXaWxsIGJlIGF2YWlsYWJsZSBvbiBib3RoIHNlcnZlci1zaWRlIGFuZCBjbGllbnQtc2lkZVxyXG5jb25zb2xlLmxvZyhwdWJsaWNSdW50aW1lQ29uZmlnLnN0YXRpY0ZvbGRlcik7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IChcclxuICA8U2l0ZUxheW91dD5cclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG1iLTIwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXktNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBob21lLWJnc3R5bGUgYmctaG9tZSBiZy1hdXRvIHJvdW5kZWQtbGcgZ3JpZCBncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGgtYXV0byBteS02IG14LTZcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIG9iamVjdC1ub25lIG9iamVjdC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgIHNyYz17YCR7cHVibGljUnVudGltZUNvbmZpZy5zdGF0aWNGb2xkZXJ9L2ltZzEucG5nYH1cclxuICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXszMDB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs0MjB9XHJcbiAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyBtLTYgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1jb250YWN0Ymcgcm91bmRlZC0xMCBzaGFkb3ctMnhsIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaG9tZS1icmFuZHN0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyBtLTYgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1jb250YWN0Ymcgcm91bmRlZC0xMCBzaGFkb3ctMnhsIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaG9tZS1icmFuZHN0ZXh0XCI+ICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbGlja0hhbmRsZX0gaWQ9XCJMaW5rZWRJblwiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaW5rZWRpbn0vPiBMaW5rZWRJbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NsaWNrSGFuZGxlfSBpZD1cIkdpdEh1YlwiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFHaXRodWJ9Lz4gR2l0SHViPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2xpY2tIYW5kbGV9IGlkPVwiSW5zdGFncmFtXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUluc3RhZ3JhbX0vPiBJbnN0YWdyYW08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbGlja0hhbmRsZX0gaWQ9XCJTa3lwZVwiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFTa3lwZX0vPiBTa3lwZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NsaWNrSGFuZGxlfSBpZD1cIldoYXRzYXBwXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVdoYXRzYXBwfS8+IFdoYXRzQXBwPC9idXR0b24+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktOTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcm91bmRlZC1sZyBweC02IHB5LTQgbGVhZGluZy10aWdodFwiPlxyXG4gICAgICAgICAgTGVhdmUgYSBMaWtlIVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICA8L1NpdGVMYXlvdXQ+XHJcbik7XHJcblxyXG5jb25zdCBjbGlja0hhbmRsZSA9IChldmVudCkgPT4ge1xyXG4gICAgc3dpdGNoKGV2ZW50LnRhcmdldC5pZCkge1xyXG4gICAgICAgIGNhc2UgJ0xpbmtlZEluJyA6IHtcclxuICAgICAgICAvLyBMb2dpYyB0byBoYW5kbGUgYExpbmtlZGluYCBjYXNlXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vZ3VzdGF2by1tb3JpbGxhJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgY2FzZSAnR2l0SHViJyA6IHtcclxuICAgICAgLy8gTG9naWMgdG8gaGFuZGxlIGBMaW5rZWRpbmAgY2FzZVxyXG4gICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vTTByaWxsYSc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IFxyXG4gICAgICAgIGNhc2UgJ0luc3RhZ3JhbScgOiB7XHJcbiAgICAgIC8vIExvZ2ljIHRvIGhhbmRsZSBgTGlua2VkaW5gIGNhc2VcclxuICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9ndXVoX21vcmlsbGEvJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgY2FzZSAnU2t5cGUnIDoge1xyXG4gICAgLy8gTG9naWMgdG8gaGFuZGxlIGBMaW5rZWRpbmAgY2FzZVxyXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnaHR0cHM6Ly9qb2luLnNreXBlLmNvbS9pbnZpdGUvaGZpd1FTZWxJV0d3JztcclxuICAgICAgICBicmVhaztcclxuICAgICAgICB9IFxyXG4gICAgICAgIGNhc2UgJ1doYXRzYXBwJyA6IHtcclxuICAgIC8vIExvZ2ljIHRvIGhhbmRsZSBgTGlua2VkaW5gIGNhc2VcclxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJ2h0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU1MTk5OTE4OTE4NyZ0ZXh0PU9sJUMzJUExJTJDJTIwZW5jb250cmVpJTIwc2V1JTIwY29udGF0byUyMGF0cmF2JUMzJUE5cyUyMGRlJTIwc2V1JTIwc2l0ZSEnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gICAgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==