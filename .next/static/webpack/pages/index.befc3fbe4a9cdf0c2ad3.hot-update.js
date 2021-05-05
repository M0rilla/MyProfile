webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");


var _jsxFileName = "C:\\Users\\Gustavo Morilla\\MyProfile\\components\\Navbar.js";

/* This example requires Tailwind CSS v2.0+ */



var navigation = [{
  name: 'Home',
  href: '/',
  current: true
}, {
  name: 'Experiences',
  href: '/experiences.js',
  current: false
}, {
  name: 'Skills',
  href: 'skills',
  current: false
}, {
  name: 'Resume',
  href: 'resume',
  current: false,
  link: link
}];

function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

function Navbar() {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Disclosure"], {
    as: "nav",
    className: "bg-gray-800",
    children: function children(_ref) {
      var open = _ref.open;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "relative flex items-center justify-between h-16",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Disclosure"].Button, {
                className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "sr-only",
                  children: "Open main menu"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 19
                }, _this), open ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["XIcon"], {
                  className: "block h-6 w-6",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 21
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["MenuIcon"], {
                  className: "block h-6 w-6",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex-shrink-0 flex items-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  className: "block lg:hidden h-8 w-auto",
                  src: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
                  alt: "Workflow"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  className: "hidden lg:block h-8 w-auto",
                  src: "https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg",
                  alt: "Workflow"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hidden sm:block sm:ml-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex space-x-4",
                  children: navigation.map(function (item) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: item.href,
                      className: classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium'),
                      "aria-current": item.current ? 'page' : undefined,
                      children: item.name
                    }, item.name, false, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 23
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "sr-only",
                  children: "View notifications"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["BellIcon"], {
                  className: "h-6 w-6",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
                as: "div",
                className: "ml-3 relative",
                children: function children(_ref2) {
                  var open = _ref2.open;
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Button, {
                        className: "bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "sr-only",
                          children: "Open user menu"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 80,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "h-8 w-8 rounded-full",
                          src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 81,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 79,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 78,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Transition"], {
                      show: open,
                      as: react__WEBPACK_IMPORTED_MODULE_1__["Fragment"],
                      enter: "transition ease-out duration-100",
                      enterFrom: "transform opacity-0 scale-95",
                      enterTo: "transform opacity-100 scale-100",
                      leave: "transition ease-in duration-75",
                      leaveFrom: "transform opacity-100 scale-100",
                      leaveTo: "transform opacity-0 scale-95",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Items, {
                        "static": true,
                        className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
                          children: function children(_ref3) {
                            var active = _ref3.active;
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              href: "#",
                              className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700'),
                              children: "Your Profile"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 104,
                              columnNumber: 31
                            }, _this);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 102,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
                          children: function children(_ref4) {
                            var active = _ref4.active;
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              href: "#",
                              className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700'),
                              children: "Settings"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 117,
                              columnNumber: 31
                            }, _this);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 115,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
                          children: function children(_ref5) {
                            var active = _ref5.active;
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              href: "#",
                              className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700'),
                              children: "Sign out"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 130,
                              columnNumber: 31
                            }, _this);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 128,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Disclosure"].Panel, {
          className: "sm:hidden",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "px-2 pt-2 pb-3 space-y-1",
            children: navigation.map(function (item) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: item.href,
                className: classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium'),
                "aria-current": item.current ? 'page' : undefined,
                children: item.name
              }, item.name, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
_c = Navbar;

var _c;

$RefreshReg$(_c, "Navbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsibmF2aWdhdGlvbiIsIm5hbWUiLCJocmVmIiwiY3VycmVudCIsImxpbmsiLCJjbGFzc05hbWVzIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiTmF2YmFyIiwib3BlbiIsIm1hcCIsIml0ZW0iLCJ1bmRlZmluZWQiLCJGcmFnbWVudCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCO0FBQUVDLE1BQUksRUFBRSxNQUFSO0FBQWdCQyxNQUFJLEVBQUUsR0FBdEI7QUFBMkJDLFNBQU8sRUFBRTtBQUFwQyxDQURpQixFQUVqQjtBQUFFRixNQUFJLEVBQUUsYUFBUjtBQUF1QkMsTUFBSSxFQUFFLGlCQUE3QjtBQUFnREMsU0FBTyxFQUFFO0FBQXpELENBRmlCLEVBR2pCO0FBQUVGLE1BQUksRUFBRSxRQUFSO0FBQWtCQyxNQUFJLEVBQUUsUUFBeEI7QUFBa0NDLFNBQU8sRUFBRTtBQUEzQyxDQUhpQixFQUlqQjtBQUFFRixNQUFJLEVBQUUsUUFBUjtBQUFrQkMsTUFBSSxFQUFFLFFBQXhCO0FBQWtDQyxTQUFPLEVBQUUsS0FBM0M7QUFBa0RDLE1BQUksRUFBSkE7QUFBbEQsQ0FKaUIsQ0FBbkI7O0FBT0EsU0FBU0MsVUFBVCxHQUFnQztBQUFBLG9DQUFUQyxPQUFTO0FBQVRBLFdBQVM7QUFBQTs7QUFDOUIsU0FBT0EsT0FBTyxDQUFDQyxNQUFSLENBQWVDLE9BQWYsRUFBd0JDLElBQXhCLENBQTZCLEdBQTdCLENBQVA7QUFDRDs7QUFFYyxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLHNCQUNFLHFFQUFDLDREQUFEO0FBQVksTUFBRSxFQUFDLEtBQWY7QUFBcUIsYUFBUyxFQUFDLGFBQS9CO0FBQUEsY0FDRztBQUFBLFVBQUdDLElB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dGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZWZjM2ZiZTRhOWNkZjBjMmFkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBleGFtcGxlIHJlcXVpcmVzIFRhaWx3aW5kIENTUyB2Mi4wKyAqL1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBEaXNjbG9zdXJlLCBNZW51LCBUcmFuc2l0aW9uIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXHJcbmltcG9ydCB7IEJlbGxJY29uLCBNZW51SWNvbiwgWEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnXHJcblxyXG5jb25zdCBuYXZpZ2F0aW9uID0gW1xyXG4gIHsgbmFtZTogJ0hvbWUnLCBocmVmOiAnLycsIGN1cnJlbnQ6IHRydWUgfSxcclxuICB7IG5hbWU6ICdFeHBlcmllbmNlcycsIGhyZWY6ICcvZXhwZXJpZW5jZXMuanMnLCBjdXJyZW50OiBmYWxzZSB9LFxyXG4gIHsgbmFtZTogJ1NraWxscycsIGhyZWY6ICdza2lsbHMnLCBjdXJyZW50OiBmYWxzZSB9LFxyXG4gIHsgbmFtZTogJ1Jlc3VtZScsIGhyZWY6ICdyZXN1bWUnLCBjdXJyZW50OiBmYWxzZSwgbGluayB9LFxyXG5dXHJcblxyXG5mdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXMpIHtcclxuICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERpc2Nsb3N1cmUgYXM9XCJuYXZcIiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMFwiPlxyXG4gICAgICB7KHsgb3BlbiB9KSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtMiBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC0xNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciBzbTpoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIHsvKiBNb2JpbGUgbWVudSBidXR0b24qL31cclxuICAgICAgICAgICAgICAgIDxEaXNjbG9zdXJlLkJ1dHRvbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0yIHJvdW5kZWQtbWQgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAge29wZW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFhJY29uIGNsYXNzTmFtZT1cImJsb2NrIGgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiBjbGFzc05hbWU9XCJibG9jayBoLTYgdy02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvRGlzY2xvc3VyZS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc206aXRlbXMtc3RyZXRjaCBzbTpqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGxnOmhpZGRlbiBoLTggdy1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9sb2dvcy93b3JrZmxvdy1tYXJrLWluZGlnby01MDAuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJXb3JrZmxvd1wiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgaC04IHctYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvbG9nb3Mvd29ya2Zsb3ctbG9nby1pbmRpZ28tNTAwLW1hcmstd2hpdGUtdGV4dC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIldvcmtmbG93XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc206YmxvY2sgc206bWwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmN1cnJlbnQgPyAnYmctZ3JheS05MDAgdGV4dC13aGl0ZScgOiAndGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAncHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX0gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtpdGVtLmN1cnJlbnQgPyAncGFnZScgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHItMiBzbTpzdGF0aWMgc206aW5zZXQtYXV0byBzbTptbC02IHNtOnByLTBcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgcC0xIHJvdW5kZWQtZnVsbCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktODAwIGZvY3VzOnJpbmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlZpZXcgbm90aWZpY2F0aW9uczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPEJlbGxJY29uIGNsYXNzTmFtZT1cImgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFByb2ZpbGUgZHJvcGRvd24gKi99XHJcbiAgICAgICAgICAgICAgICA8TWVudSBhcz1cImRpdlwiIGNsYXNzTmFtZT1cIm1sLTMgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgeyh7IG9wZW4gfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5CdXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgZmxleCB0ZXh0LXNtIHJvdW5kZWQtZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtZ3JheS04MDAgZm9jdXM6cmluZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIHVzZXIgbWVudTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggdy04IHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MjA5OTY0NTc4NS01NjU4YWJmNGZmNGU/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyPVwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRlckZyb209XCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi03NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JpZ2luLXRvcC1yaWdodCBhYnNvbHV0ZSByaWdodC0wIG10LTIgdy00OCByb3VuZGVkLW1kIHNoYWRvdy1sZyBweS0xIGJnLXdoaXRlIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGFjdGl2ZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA/ICdiZy1ncmF5LTEwMCcgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIFByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGFjdGl2ZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA/ICdiZy1ncmF5LTEwMCcgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgYWN0aXZlIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlID8gJ2JnLWdyYXktMTAwJyA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Jsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtcz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8RGlzY2xvc3VyZS5QYW5lbCBjbGFzc05hbWU9XCJzbTpoaWRkZW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHB0LTIgcGItMyBzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICB7bmF2aWdhdGlvbi5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmN1cnJlbnQgPyAnYmctZ3JheS05MDAgdGV4dC13aGl0ZScgOiAndGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAnYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtJ1xyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9e2l0ZW0uY3VycmVudCA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Rpc2Nsb3N1cmUuUGFuZWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0Rpc2Nsb3N1cmU+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==