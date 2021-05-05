webpackHotUpdate_N_E("pages/resume/resume",{

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
  name: 'Experience',
  href: '/exp',
  current: false
}, {
  name: 'Skills',
  href: '/skills',
  current: false
}, {
  name: 'Resume',
  href: '/resume',
  current: false
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
                      lineNumber: 51,
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
                  lineNumber: 68,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["BellIcon"], {
                  className: "h-6 w-6",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
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
                          lineNumber: 78,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "h-8 w-8 rounded-full",
                          src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 79,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
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
                              lineNumber: 102,
                              columnNumber: 31
                            }, _this);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 100,
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
                              lineNumber: 115,
                              columnNumber: 31
                            }, _this);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 113,
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
                              lineNumber: 128,
                              columnNumber: 31
                            }, _this);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 126,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 96,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
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
                lineNumber: 151,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsibmF2aWdhdGlvbiIsIm5hbWUiLCJocmVmIiwiY3VycmVudCIsImNsYXNzTmFtZXMiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJOYXZiYXIiLCJvcGVuIiwibWFwIiwiaXRlbSIsInVuZGVmaW5lZCIsIkZyYWdtZW50IiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFBRUMsTUFBSSxFQUFFLE1BQVI7QUFBZ0JDLE1BQUksRUFBRSxHQUF0QjtBQUEyQkMsU0FBTyxFQUFFO0FBQXBDLENBRGlCLEVBRWpCO0FBQUVGLE1BQUksRUFBRSxZQUFSO0FBQXNCQyxNQUFJLEVBQUUsTUFBNUI7QUFBb0NDLFNBQU8sRUFBRTtBQUE3QyxDQUZpQixFQUdqQjtBQUFFRixNQUFJLEVBQUUsUUFBUjtBQUFrQkMsTUFBSSxFQUFFLFNBQXhCO0FBQW1DQyxTQUFPLEVBQUU7QUFBNUMsQ0FIaUIsRUFJakI7QUFBRUYsTUFBSSxFQUFFLFFBQVI7QUFBa0JDLE1BQUksRUFBRSxTQUF4QjtBQUFtQ0MsU0FBTyxFQUFFO0FBQTVDLENBSmlCLENBQW5COztBQU9BLFNBQVNDLFVBQVQsR0FBZ0M7QUFBQSxvQ0FBVEMsT0FBUztBQUFUQSxXQUFTO0FBQUE7O0FBQzlCLFNBQU9BLE9BQU8sQ0FBQ0MsTUFBUixDQUFlQyxPQUFmLEVBQXdCQyxJQUF4QixDQUE2QixHQUE3QixDQUFQO0FBQ0Q7O0FBRWMsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUMvQixzQkFDRSxxRUFBQyw0REFBRDtBQUFZLE1BQUUsRUFBQyxLQUFmO0FBQXFCLGFBQVMsRUFBQyxhQUEvQjtBQUFBLGNBQ0c7QUFBQSxVQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSwwQkFDQztBQUFBLGdD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LmViZjAwYjZmNDJlNWI3YWFiMzBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGlzIGV4YW1wbGUgcmVxdWlyZXMgVGFpbHdpbmQgQ1NTIHYyLjArICovXHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERpc2Nsb3N1cmUsIE1lbnUsIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcclxuaW1wb3J0IHsgQmVsbEljb24sIE1lbnVJY29uLCBYSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSdcclxuXHJcbmNvbnN0IG5hdmlnYXRpb24gPSBbXHJcbiAgeyBuYW1lOiAnSG9tZScsIGhyZWY6ICcvJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gIHsgbmFtZTogJ0V4cGVyaWVuY2UnLCBocmVmOiAnL2V4cCcsIGN1cnJlbnQ6IGZhbHNlIH0sXHJcbiAgeyBuYW1lOiAnU2tpbGxzJywgaHJlZjogJy9za2lsbHMnLCBjdXJyZW50OiBmYWxzZSB9LFxyXG4gIHsgbmFtZTogJ1Jlc3VtZScsIGhyZWY6ICcvcmVzdW1lJywgY3VycmVudDogZmFsc2UgfSxcclxuXVxyXG5cclxuZnVuY3Rpb24gY2xhc3NOYW1lcyguLi5jbGFzc2VzKSB7XHJcbiAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEaXNjbG9zdXJlIGFzPVwibmF2XCIgY2xhc3NOYW1lPVwiYmctZ3JheS04MDBcIj5cclxuICAgICAgeyh7IG9wZW4gfSkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTIgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgc206aGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogTW9iaWxlIG1lbnUgYnV0dG9uKi99XHJcbiAgICAgICAgICAgICAgICA8RGlzY2xvc3VyZS5CdXR0b24gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMiByb3VuZGVkLW1kIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIHtvcGVuID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxYSWNvbiBjbGFzc05hbWU9XCJibG9jayBoLTYgdy02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPVwiYmxvY2sgaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0Rpc2Nsb3N1cmUuQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNtOml0ZW1zLXN0cmV0Y2ggc206anVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBsZzpoaWRkZW4gaC04IHctYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvbG9nb3Mvd29ya2Zsb3ctbWFyay1pbmRpZ28tNTAwLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiV29ya2Zsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIGgtOCB3LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2xvZ29zL3dvcmtmbG93LWxvZ28taW5kaWdvLTUwMC1tYXJrLXdoaXRlLXRleHQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJXb3JrZmxvd1wiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmJsb2NrIHNtOm1sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9uLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY3VycmVudCA/ICdiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlJyA6ICd0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9e2l0ZW0uY3VycmVudCA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCByaWdodC0wIGZsZXggaXRlbXMtY2VudGVyIHByLTIgc206c3RhdGljIHNtOmluc2V0LWF1dG8gc206bWwtNiBzbTpwci0wXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHAtMSByb3VuZGVkLWZ1bGwgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1ncmF5LTgwMCBmb2N1czpyaW5nLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5WaWV3IG5vdGlmaWNhdGlvbnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxCZWxsSWNvbiBjbGFzc05hbWU9XCJoLTYgdy02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBQcm9maWxlIGRyb3Bkb3duICovfVxyXG4gICAgICAgICAgICAgICAgPE1lbnUgYXM9XCJkaXZcIiBjbGFzc05hbWU9XCJtbC0zIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsoeyBvcGVuIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuQnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIGZsZXggdGV4dC1zbSByb3VuZGVkLWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktODAwIGZvY3VzOnJpbmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiB1c2VyIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC04IHctOCByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NzIwOTk2NDU3ODUtNTY1OGFiZjRmZjRlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9MiZ3PTI1NiZoPTI1NiZxPTgwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51LkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJ0cmFuc2Zvcm0gb3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tNzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJ0cmFuc2Zvcm0gb3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yaWdpbi10b3AtcmlnaHQgYWJzb2x1dGUgcmlnaHQtMCBtdC0yIHctNDggcm91bmRlZC1tZCBzaGFkb3ctbGcgcHktMSBiZy13aGl0ZSByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBhY3RpdmUgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPyAnYmctZ3JheS0xMDAnIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBhY3RpdmUgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPyAnYmctZ3JheS0xMDAnIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGFjdGl2ZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA/ICdiZy1ncmF5LTEwMCcgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIG91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPERpc2Nsb3N1cmUuUGFuZWwgY2xhc3NOYW1lPVwic206aGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBwdC0yIHBiLTMgc3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jdXJyZW50ID8gJ2JnLWdyYXktOTAwIHRleHQtd2hpdGUnIDogJ3RleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Jsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bSdcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtpdGVtLmN1cnJlbnQgPyAncGFnZScgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9EaXNjbG9zdXJlLlBhbmVsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9EaXNjbG9zdXJlPlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=