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
            className: "items-center justify-center rounded-lg m-6 col-span-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "home-contactbg rounded-10 shadow-2xl text-white",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "home-links",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0Q29uZmlnIiwic2VydmVyUnVudGltZUNvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJjb25zb2xlIiwibG9nIiwibXlTZWNyZXQiLCJzdGF0aWNGb2xkZXIiLCJJbmRleCIsImNsaWNrSGFuZGxlIiwiZmFMaW5rZWRpbiIsImZhR2l0aHViIiwiZmFJbnN0YWdyYW0iLCJmYVNreXBlIiwiZmFXaGF0c2FwcCIsImV2ZW50IiwidGFyZ2V0IiwiaWQiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0NBRUE7O0NBRUE7O0NBU0E7O2lCQUNxREEsa0RBQVMsRTtJQUF0REMsbUIsY0FBQUEsbUI7SUFBcUJDLG1CLGNBQUFBLG1CLEVBQzdCOzs7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILG1CQUFtQixDQUFDSSxRQUFoQyxFLENBQ0E7O0FBQ0FGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixtQkFBbUIsQ0FBQ0ksWUFBaEM7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxzQkFDWixxRUFBQyw4REFBRDtBQUFBLDJCQUNFO0FBQVMsZUFBUyxFQUFDLHlCQUFuQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyx1Q0FBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQywrREFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyw2QkFBZjtBQUFBLG1DQUNFLHFFQUFDLGlEQUFEO0FBQ0UsdUJBQVMsRUFBQyx3Q0FEWjtBQUVFLGlCQUFHLFlBQUtMLG1CQUFtQixDQUFDSSxZQUF6QixjQUZMO0FBR0UsaUJBQUcsRUFBQyx1QkFITjtBQUlFLG1CQUFLLEVBQUUsR0FKVDtBQUtFLG9CQUFNLEVBQUUsR0FMVjtBQU1FLHFCQUFPLEVBQUU7QUFOWDtBQUFB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QUF6QjtBQUNBO0FBQ0Q7O0FBQ0QsU0FBSyxPQUFMO0FBQWM7QUFDWjtBQUNBRixnQkFBUSxDQUFDQyxRQUFULENBQWtCQyxJQUFsQixHQUF5Qiw0Q0FBekI7QUFDQTtBQUNEOztBQUNELFNBQUssVUFBTDtBQUFpQjtBQUNmO0FBQ0FGLGdCQUFRLENBQUNDLFFBQVQsQ0FBa0JDLElBQWxCLEdBQ0UsaUlBREY7QUFFQTtBQUNEO0FBMUJIO0FBNEJELENBN0JEOztBQStCZVosb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzA0MjIyZTBhMGZjZDdlMWVlNzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaXRlTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL1NpdGVMYXlvdXRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XHJcblxyXG4vLyBpbXBvcnQgdGhlIGxpYnJhcnlcclxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIjtcclxuLy8gZ2V0IG91ciBmb250YXdlc29tZSBpbXBvcnRzXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuLy8gaW1wb3J0IHlvdXIgaWNvbnNcclxuaW1wb3J0IHtcclxuICBmYUxpbmtlZGluLFxyXG4gIGZhR2l0aHViLFxyXG4gIGZhSW5zdGFncmFtLFxyXG4gIGZhU2t5cGUsXHJcbiAgZmFXaGF0c2FwcCxcclxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiO1xyXG5cclxuLy8gT25seSBob2xkcyBzZXJ2ZXJSdW50aW1lQ29uZmlnIGFuZCBwdWJsaWNSdW50aW1lQ29uZmlnXHJcbmNvbnN0IHsgc2VydmVyUnVudGltZUNvbmZpZywgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcbi8vIFdpbGwgb25seSBiZSBhdmFpbGFibGUgb24gdGhlIHNlcnZlci1zaWRlXHJcbmNvbnNvbGUubG9nKHNlcnZlclJ1bnRpbWVDb25maWcubXlTZWNyZXQpO1xyXG4vLyBXaWxsIGJlIGF2YWlsYWJsZSBvbiBib3RoIHNlcnZlci1zaWRlIGFuZCBjbGllbnQtc2lkZVxyXG5jb25zb2xlLmxvZyhwdWJsaWNSdW50aW1lQ29uZmlnLnN0YXRpY0ZvbGRlcik7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IChcclxuICA8U2l0ZUxheW91dD5cclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG1iLTIwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXktNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBob21lLWJnc3R5bGUgYmctaG9tZSBiZy1hdXRvIHJvdW5kZWQtbGcgZ3JpZCBncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGgtYXV0byBteS02IG14LTZcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIG9iamVjdC1ub25lIG9iamVjdC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgIHNyYz17YCR7cHVibGljUnVudGltZUNvbmZpZy5zdGF0aWNGb2xkZXJ9L2ltZzEucG5nYH1cclxuICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXszMDB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs0MjB9XHJcbiAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnIG0tNiBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWNvbnRhY3RiZyByb3VuZGVkLTEwIHNoYWRvdy0yeGwgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJob21lLWJyYW5kc3RleHRcIj5BYm91dDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnIG0tNiBjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1jb250YWN0Ymcgcm91bmRlZC0xMCBzaGFkb3ctMnhsIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaG9tZS1saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbGlja0hhbmRsZX0gaWQ9XCJMaW5rZWRJblwiPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlua2VkaW59IC8+IExpbmtlZEluXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2xpY2tIYW5kbGV9IGlkPVwiR2l0SHViXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHaXRodWJ9IC8+IEdpdEh1YlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NsaWNrSGFuZGxlfSBpZD1cIkluc3RhZ3JhbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSW5zdGFncmFtfSAvPiBJbnN0YWdyYW1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbGlja0hhbmRsZX0gaWQ9XCJTa3lwZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2t5cGV9IC8+IFNreXBlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2xpY2tIYW5kbGV9IGlkPVwiV2hhdHNhcHBcIj5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVdoYXRzYXBwfSAvPiBXaGF0c0FwcFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktOTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcm91bmRlZC1sZyBweC02IHB5LTQgbGVhZGluZy10aWdodFwiPlxyXG4gICAgICAgICAgTGVhdmUgYSBMaWtlIVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICA8L1NpdGVMYXlvdXQ+XHJcbik7XHJcblxyXG5jb25zdCBjbGlja0hhbmRsZSA9IChldmVudCkgPT4ge1xyXG4gIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmlkKSB7XHJcbiAgICBjYXNlIFwiTGlua2VkSW5cIjoge1xyXG4gICAgICAvLyBMb2dpYyB0byBoYW5kbGUgYExpbmtlZGluYCBjYXNlXHJcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vbGlua2VkaW4uY29tL2luL2d1c3Rhdm8tbW9yaWxsYVwiO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgXCJHaXRIdWJcIjoge1xyXG4gICAgICAvLyBMb2dpYyB0byBoYW5kbGUgYExpbmtlZGluYCBjYXNlXHJcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9NMHJpbGxhXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcIkluc3RhZ3JhbVwiOiB7XHJcbiAgICAgIC8vIExvZ2ljIHRvIGhhbmRsZSBgTGlua2VkaW5gIGNhc2VcclxuICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9ndXVoX21vcmlsbGEvXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcIlNreXBlXCI6IHtcclxuICAgICAgLy8gTG9naWMgdG8gaGFuZGxlIGBMaW5rZWRpbmAgY2FzZVxyXG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL2pvaW4uc2t5cGUuY29tL2ludml0ZS9oZml3UVNlbElXR3dcIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiV2hhdHNhcHBcIjoge1xyXG4gICAgICAvLyBMb2dpYyB0byBoYW5kbGUgYExpbmtlZGluYCBjYXNlXHJcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPVxyXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NTUxOTk5MTg5MTg3JnRleHQ9T2wlQzMlQTElMkMlMjBlbmNvbnRyZWklMjBzZXUlMjBjb250YXRvJTIwYXRyYXYlQzMlQTlzJTIwZGUlMjBzZXUlMjBzaXRlIVwiO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==