webpackHotUpdate_N_E("pages/resume/resume",{

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/dynamic.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.noSSR = noSSR;
exports["default"] = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next/dist/next-server/lib/loadable.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return /*#__PURE__*/_react["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
} // function dynamic<P = {}, O extends DynamicOptions>(options: O):


function dynamic(dynamicOptions, options) {
  var loadableFn = _loadable["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react["default"].createElement("p", null, error.message, /*#__PURE__*/_react["default"].createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);

  if (typeof dynamicOptions === 'object' && !(dynamicOptions instanceof Promise)) {
    // show deprecation warning for `modules` key in development
    if (true) {
      if (dynamicOptions.modules) {
        console.warn('The modules option for next/dynamic has been deprecated. See here for more info https://nextjs.org/docs/messages/next-dynamic-modules');
      }
    } // Support for `render` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.render) {
      loadableOptions.render = function (loaded, props) {
        return dynamicOptions.render(props, loaded);
      };
    } // Support for `modules` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.modules) {
      loadableFn = _loadable["default"].Map;
      var loadModules = {};
      var modules = dynamicOptions.modules();
      Object.keys(modules).forEach(function (key) {
        var value = modules[key];

        if (typeof value.then === 'function') {
          loadModules[key] = function () {
            return value.then(function (mod) {
              return mod["default"] || mod;
            });
          };

          return;
        }

        loadModules[key] = value;
      });
      loadableOptions.loader = loadModules;
    }
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable-context.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.LoadableContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var LoadableContext = /*#__PURE__*/_react["default"].createContext(null);

exports.LoadableContext = LoadableContext;

if (true) {
  LoadableContext.displayName = 'LoadableContext';
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useSubscription = __webpack_require__(/*! use-subscription */ "./node_modules/use-subscription/index.js");

var _loadableContext = __webpack_require__(/*! ./loadable-context */ "./node_modules/next/dist/next-server/lib/loadable-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
MIT License
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js


var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  })["catch"](function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      })["catch"](function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  })["catch"](function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

function render(loaded, props) {
  return /*#__PURE__*/_react["default"].createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _s = $RefreshSig$();

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);
  var subscription = null;

  function init() {
    if (!subscription) {
      var sub = new LoadableSubscription(loadFn, opts);
      subscription = {
        getCurrentValue: sub.getCurrentValue.bind(sub),
        subscribe: sub.subscribe.bind(sub),
        retry: sub.retry.bind(sub),
        promise: sub.promise.bind(sub)
      };
    }

    return subscription.promise();
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iterator = _createForOfIteratorHelper(moduleIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  var LoadableComponent = function LoadableComponent(props, ref) {
    _s();

    init();

    var context = _react["default"].useContext(_loadableContext.LoadableContext);

    var state = (0, _useSubscription.useSubscription)(subscription);

    _react["default"].useImperativeHandle(ref, function () {
      return {
        retry: subscription.retry
      };
    }, []);

    if (context && Array.isArray(opts.modules)) {
      opts.modules.forEach(function (moduleName) {
        context(moduleName);
      });
    }

    return _react["default"].useMemo(function () {
      if (state.loading || state.error) {
        return /*#__PURE__*/_react["default"].createElement(opts.loading, {
          isLoading: state.loading,
          pastDelay: state.pastDelay,
          timedOut: state.timedOut,
          error: state.error,
          retry: subscription.retry
        });
      } else if (state.loaded) {
        return opts.render(state.loaded, props);
      } else {
        return null;
      }
    }, [props, state]);
  };

  _s(LoadableComponent, "Bp87+qHhaUk8bOFGKxqLWPW1xR0=", true);

  LoadableComponent.preload = function () {
    return init();
  };

  LoadableComponent.displayName = 'LoadableComponent';
  return /*#__PURE__*/_react["default"].forwardRef(LoadableComponent);
}

var LoadableSubscription = /*#__PURE__*/function () {
  function LoadableSubscription(loadFn, opts) {
    _classCallCheck(this, LoadableSubscription);

    this._loadFn = loadFn;
    this._opts = opts;
    this._callbacks = new Set();
    this._delay = null;
    this._timeout = null;
    this.retry();
  }

  _createClass(LoadableSubscription, [{
    key: "promise",
    value: function promise() {
      return this._res.promise;
    }
  }, {
    key: "retry",
    value: function retry() {
      var _this = this;

      this._clearTimeouts();

      this._res = this._loadFn(this._opts.loader);
      this._state = {
        pastDelay: false,
        timedOut: false
      };
      var res = this._res,
          opts = this._opts;

      if (res.loading) {
        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this._state.pastDelay = true;
          } else {
            this._delay = setTimeout(function () {
              _this._update({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this._update({
              timedOut: true
            });
          }, opts.timeout);
        }
      }

      this._res.promise.then(function () {
        _this._update({});

        _this._clearTimeouts();
      })["catch"](function (_err) {
        _this._update({});

        _this._clearTimeouts();
      });

      this._update({});
    }
  }, {
    key: "_update",
    value: function _update(partial) {
      this._state = _objectSpread(_objectSpread({}, this._state), {}, {
        error: this._res.error,
        loaded: this._res.loaded,
        loading: this._res.loading
      }, partial);

      this._callbacks.forEach(function (callback) {
        return callback();
      });
    }
  }, {
    key: "_clearTimeouts",
    value: function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue() {
      return this._state;
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      var _this2 = this;

      this._callbacks.add(callback);

      return function () {
        _this2._callbacks["delete"](callback);
      };
    }
  }]);

  return LoadableSubscription;
}();

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

_c = Loadable;

function LoadableMap(opts) {
  if (typeof opts.render !== 'function') {
    throw new Error('LoadableMap requires a `render(loaded, props)` function');
  }

  return createLoadableComponent(loadMap, opts);
}

_c2 = LoadableMap;
Loadable.Map = LoadableMap;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolveInitializers, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject);
  });
};

Loadable.preloadReady = function () {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Promise(function (resolvePreload) {
    var res = function res() {
      initialized = true;
      return resolvePreload();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

var _default = Loadable;
exports["default"] = _default;

var _c, _c2;

$RefreshReg$(_c, "Loadable");
$RefreshReg$(_c2, "LoadableMap");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js")


/***/ }),

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return _assign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "./node_modules/use-subscription/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-subscription/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "./node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ }),

/***/ "./pages/resume/resume.js":
/*!********************************!*\
  !*** ./pages/resume/resume.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resume; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SiteLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SiteLayout */ "./components/SiteLayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _resume_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resume/viewer */ "./pages/resume/viewer.js");

var _jsxFileName = "C:\\Users\\Gustavo Morilla\\MyProfile\\pages\\resume\\resume.js";

 // import dynamic from "next/dynamic";
// const Viewer = dynamic(() => import("../resume/viewer.js"), { ssr: false });


function Resume(_ref) {
  var resume = _ref.resume;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SiteLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "main w-screen",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_resume_viewer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
_c = Resume;

var _c;

$RefreshReg$(_c, "Resume");

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

/***/ }),

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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Gustavo Morilla\\MyProfile\\pages\\resume\\viewer.js",
    _this = undefined,
    _s = $RefreshSig$();



var WebViewer = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! @pdftron/webviewer */ "./node_modules/@pdftron/webviewer/webviewer.min.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! @pdftron/webviewer */ "./node_modules/@pdftron/webviewer/webviewer.min.js")];
    },
    modules: ["resume\\viewer.js -> " + '@pdftron/webviewer']
  }
});
_c2 = WebViewer;

var Viewer = function Viewer() {
  _s();

  var viewer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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

_c3 = Viewer;
/* harmony default export */ __webpack_exports__["default"] = (Viewer);

var _c, _c2, _c3;

$RefreshReg$(_c, "WebViewer$dynamic");
$RefreshReg$(_c2, "WebViewer");
$RefreshReg$(_c3, "Viewer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9keW5hbWljLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9sb2FkYWJsZS1jb250ZXh0LnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2xvYWRhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXNlLXN1YnNjcmlwdGlvbi9janMvdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1zdWJzY3JpcHRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Jlc3VtZS9yZXN1bWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Jlc3VtZS92aWV3ZXIuanMiXSwibmFtZXMiOlsiaXNTZXJ2ZXJTaWRlIiwibG9hZGFibGVPcHRpb25zIiwiTG9hZGFibGVJbml0aWFsaXplciIsIkxvYWRpbmciLCJsb2FkYWJsZUZuIiwiTG9hZGFibGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJkeW5hbWljT3B0aW9ucyIsImNvbnNvbGUiLCJsb2FkTW9kdWxlcyIsIm1vZHVsZXMiLCJPYmplY3QiLCJrZXkiLCJ2YWx1ZSIsIm1vZCIsIm5vU1NSIiwiTG9hZGFibGVDb250ZXh0IiwiUmVhY3QiLCJBTExfSU5JVElBTElaRVJTIiwiUkVBRFlfSU5JVElBTElaRVJTIiwiaW5pdGlhbGl6ZWQiLCJwcm9taXNlIiwibG9hZGVyIiwic3RhdGUiLCJsb2FkZWQiLCJlcnIiLCJwcm9taXNlcyIsInJlc3VsdCIsImxvYWQiLCJvYmoiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9wdHMiLCJkZWxheSIsInRpbWVvdXQiLCJyZW5kZXIiLCJ3ZWJwYWNrIiwic3Vic2NyaXB0aW9uIiwic3ViIiwiZ2V0Q3VycmVudFZhbHVlIiwic3Vic2NyaWJlIiwicmV0cnkiLCJtb2R1bGVJZHMiLCJpZHMiLCJpbml0IiwiTG9hZGFibGVDb21wb25lbnQiLCJjb250ZXh0IiwiQXJyYXkiLCJtb2R1bGVOYW1lIiwiaXNMb2FkaW5nIiwicGFzdERlbGF5IiwidGltZWRPdXQiLCJMb2FkYWJsZVN1YnNjcmlwdGlvbiIsImNvbnN0cnVjdG9yIiwiX3JlcyIsIl9vcHRzIiwic2V0VGltZW91dCIsIl9lcnIiLCJfdXBkYXRlIiwiY2FsbGJhY2siLCJfY2xlYXJUaW1lb3V0cyIsImNsZWFyVGltZW91dCIsImNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50IiwiaW5pdGlhbGl6ZXJzIiwiZmx1c2hJbml0aWFsaXplcnMiLCJyZXNvbHZlUHJlbG9hZCIsIndpbmRvdyIsIlJlc3VtZSIsInJlc3VtZSIsIldlYlZpZXdlciIsImR5bmFtaWMiLCJzc3IiLCJWaWV3ZXIiLCJ2aWV3ZXIiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwYXRoIiwiaW5pdGlhbERvYyIsImN1cnJlbnQiLCJ0aGVuIiwiaW5zdGFuY2UiLCJzZXRUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQTs7QUFBQSxJQUFNQSxZQUFOOztBQWlETyxxREFHbUI7QUFDeEI7QUFDQSxTQUFPQyxlQUFlLENBQXRCO0FBQ0EsU0FBT0EsZUFBZSxDQUF0QixRQUh3QixDQUt4Qjs7QUFDQSxNQUFJLENBQUosY0FBbUI7QUFDakIsV0FBT0MsbUJBQW1CLENBQTFCLGVBQTBCLENBQTFCO0FBR0Y7O0FBQUEsTUFBTUMsT0FBTyxHQUFHRixlQUFlLENBQS9CLFFBVndCLENBV3hCOztBQUNBLFNBQU87QUFBQSx3QkFDTDtBQUFTLFdBQUssRUFBZDtBQUFzQixlQUFTLEVBQS9CO0FBQWdDLGVBQVMsRUFBekM7QUFBa0QsY0FBUSxFQUQ1RDtBQUNFLE1BREs7QUFBQSxHQUFQO0FBS0YsQyxDQUFBOzs7QUFFZSwwQ0FHVztBQUN4QixNQUFJRyxVQUF5QixHQUFHQyxTQUFoQztBQUNBLE1BQUlKLGVBQW1DLEdBQUc7QUFDeEM7QUFDQUssV0FBTyxFQUFFLHVCQUFxQztBQUFBLFVBQXBDLEtBQW9DLFFBQXBDLEtBQW9DO0FBQUEsVUFBcEMsU0FBb0MsUUFBcEMsU0FBb0M7QUFBQSxVQUFyQyxTQUFxQyxRQUFyQyxTQUFxQztBQUM1QyxVQUFJLENBQUosV0FBZ0I7O0FBQ2hCLGdCQUE0QztBQUMxQyx1QkFBZTtBQUNiO0FBRUY7O0FBQUEsbUJBQVc7QUFDVCw4QkFDRSwyQ0FDR0MsS0FBSyxDQURSLHNCQUVFLHNDQUZGLElBRUUsQ0FGRixFQUdHQSxLQUFLLENBSlYsS0FDRSxDQURGO0FBUUg7QUFFRDs7QUFBQTtBQW5CSjtBQUEwQyxHQUExQyxDQUZ3QixDQXlCeEI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBSUMsY0FBYyxZQUFsQixTQUF1QztBQUNyQ1AsbUJBQWUsQ0FBZkEsU0FBeUI7QUFBQSxhQUF6QkEsY0FBeUI7QUFBQSxLQUF6QkEsQ0FEcUMsQ0FFckM7O0FBRkYsU0FHTyxJQUFJLDBCQUFKLFlBQTBDO0FBQy9DQSxtQkFBZSxDQUFmQSx3QkFEK0MsQ0FFL0M7QUFGSyxTQUdBLElBQUksMEJBQUosVUFBd0M7QUFDN0NBLG1CQUFlLG1DQUFHLGVBQUgsR0FBZkEsY0FBZSxDQUFmQTtBQUdGLEdBdkN3QixDQXVDeEI7OztBQUNBQSxpQkFBZSxtQ0FBRyxlQUFILEdBQWZBLE9BQWUsQ0FBZkE7O0FBRUEsTUFDRSxzQ0FDQSxFQUFFTyxjQUFjLFlBRmxCLE9BRUUsQ0FGRixFQUdFO0FBQ0E7QUFDQSxjQUEyQztBQUN6QyxVQUFJQSxjQUFjLENBQWxCLFNBQTRCO0FBQzFCQyxlQUFPLENBQVBBO0FBSUg7QUFDRCxLQVRBLENBU0E7OztBQUNBLFFBQUlELGNBQWMsQ0FBbEIsUUFBMkI7QUFDekJQLHFCQUFlLENBQWZBLFNBQXlCO0FBQUEsZUFDdkJPLGNBQWMsQ0FBZEEsY0FERlAsTUFDRU8sQ0FEdUI7QUFBQSxPQUF6QlA7QUFHRixLQWRBLENBY0E7OztBQUNBLFFBQUlPLGNBQWMsQ0FBbEIsU0FBNEI7QUFDMUJKLGdCQUFVLEdBQUdDLHFCQUFiRDtBQUNBLFVBQU1NLFdBQXNCLEdBQTVCO0FBQ0EsVUFBTUMsT0FBTyxHQUFHSCxjQUFjLENBQTlCLE9BQWdCQSxFQUFoQjtBQUNBSSxZQUFNLENBQU5BLHNCQUE4QkMsYUFBRCxFQUFTO0FBQ3BDLFlBQU1DLEtBQVUsR0FBR0gsT0FBTyxDQUExQixHQUEwQixDQUExQjs7QUFDQSxZQUFJLE9BQU9HLEtBQUssQ0FBWixTQUFKLFlBQXNDO0FBQ3BDSixxQkFBVyxDQUFYQSxHQUFXLENBQVhBLEdBQW1CO0FBQUEsbUJBQU1JLEtBQUssQ0FBTEEsS0FBWUMsYUFBRDtBQUFBLHFCQUFjQSxrQkFBbERMLEdBQW9DO0FBQUEsYUFBWEksQ0FBTjtBQUFBLFdBQW5CSjs7QUFDQTtBQUVGQTs7QUFBQUEsbUJBQVcsQ0FBWEEsR0FBVyxDQUFYQTtBQU5GRTtBQVFBWCxxQkFBZSxDQUFmQTtBQUVIO0FBRUQsR0E1RXdCLENBNEV4Qjs7O0FBQ0EsTUFBSUEsZUFBZSxDQUFuQixtQkFBdUM7QUFDckNBLG1CQUFlLG1DQUFHLGVBQUgsR0FFVkEsZUFBZSxDQUZwQkEsaUJBQWUsQ0FBZkE7QUFJQSxXQUFPQSxlQUFlLENBQXRCO0FBR0YsR0FyRndCLENBcUZ4Qjs7O0FBQ0EsTUFBSSxPQUFPQSxlQUFlLENBQXRCLFFBQUosV0FBOEM7QUFDNUMsUUFBSSxDQUFDQSxlQUFlLENBQXBCLEtBQTBCO0FBQ3hCLGFBQU9BLGVBQWUsQ0FBdEI7QUFDQSxhQUFPZSxLQUFLLGFBQVosZUFBWSxDQUFaO0FBRUY7O0FBQUEsV0FBT2YsZUFBZSxDQUF0QjtBQUdGOztBQUFBLFNBQU9HLFVBQVUsQ0FBakIsZUFBaUIsQ0FBakI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1S0Q7Ozs7OztBQUlPOztBQUFBLElBQU1hLGVBQWUsZ0JBQUdDLGdDQUF4QixJQUF3QkEsQ0FBeEI7Ozs7QUFFUCxVQUEyQztBQUN6Q0QsaUJBQWUsQ0FBZkE7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZUQ7O0FBQ0E7O0FBQ0E7Ozs7OztBQXpCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNQSxJQUFNRSxnQkFBZ0IsR0FBdEI7QUFDQSxJQUFNQyxrQkFBa0IsR0FBeEI7QUFDQSxJQUFJQyxXQUFXLEdBQWY7O0FBRUEsc0JBQXNCO0FBQ3BCLE1BQUlDLE9BQU8sR0FBR0MsTUFBZDtBQUVBLE1BQUlDLEtBQUssR0FBRztBQUNWbEIsV0FBTyxFQURHO0FBRVZtQixVQUFNLEVBRkk7QUFHVmxCLFNBQUssRUFIUDtBQUFZLEdBQVo7QUFNQWlCLE9BQUssQ0FBTEEsVUFBZ0JGLE9BQU8sQ0FBUEEsS0FDUEcsZ0JBQUQsRUFBWTtBQUNoQkQsU0FBSyxDQUFMQTtBQUNBQSxTQUFLLENBQUxBO0FBQ0E7QUFKWUYsY0FNTkksYUFBRCxFQUFTO0FBQ2RGLFNBQUssQ0FBTEE7QUFDQUEsU0FBSyxDQUFMQTtBQUNBO0FBVEpBLEdBQWdCRixDQUFoQkU7QUFZQTtBQUdGOztBQUFBLHNCQUFzQjtBQUNwQixNQUFJQSxLQUFLLEdBQUc7QUFDVmxCLFdBQU8sRUFERztBQUVWbUIsVUFBTSxFQUZJO0FBR1ZsQixTQUFLLEVBSFA7QUFBWSxHQUFaO0FBTUEsTUFBSW9CLFFBQVEsR0FBWjs7QUFFQSxNQUFJO0FBQ0ZmLFVBQU0sQ0FBTkEsa0JBQTBCQyxhQUFELEVBQVM7QUFDaEMsVUFBSWUsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEdBQUcsQ0FBckIsR0FBcUIsQ0FBSixDQUFqQjs7QUFFQSxVQUFJLENBQUNGLE1BQU0sQ0FBWCxTQUFxQjtBQUNuQkosYUFBSyxDQUFMQSxjQUFvQkksTUFBTSxDQUExQko7QUFDQUEsYUFBSyxDQUFMQSxRQUFjSSxNQUFNLENBQXBCSjtBQUZGLGFBR087QUFDTEEsYUFBSyxDQUFMQTtBQUdGRzs7QUFBQUEsY0FBUSxDQUFSQSxLQUFjQyxNQUFNLENBQXBCRDtBQUVBQyxZQUFNLENBQU5BLGFBQ1NHLGFBQUQsRUFBUztBQUNiUCxhQUFLLENBQUxBO0FBRkpJLGtCQUlVRixhQUFELEVBQVM7QUFDZEYsYUFBSyxDQUFMQTtBQUxKSTtBQVpGaEI7QUFvQkEsR0FyQkYsQ0FxQkUsWUFBWTtBQUNaWSxTQUFLLENBQUxBO0FBR0ZBOztBQUFBQSxPQUFLLENBQUxBLFVBQWdCUSxPQUFPLENBQVBBLG1CQUNQRCxhQUFELEVBQVM7QUFDYlAsU0FBSyxDQUFMQTtBQUNBO0FBSFlRLGNBS05OLGFBQUQsRUFBUztBQUNkRixTQUFLLENBQUxBO0FBQ0E7QUFQSkEsR0FBZ0JRLENBQWhCUjtBQVVBO0FBR0Y7O0FBQUEsc0JBQXNCO0FBQ3BCLFNBQU9NLEdBQUcsSUFBSUEsR0FBRyxDQUFWQSxhQUF3QkEsR0FBeEJBLGNBQVA7QUFHRjs7QUFBQSwrQkFBK0I7QUFDN0Isc0JBQU9aLGdDQUFvQmUsT0FBTyxDQUEzQmYsTUFBMkIsQ0FBM0JBLEVBQVAsS0FBT0EsQ0FBUDtBQUdGOztBQUFBLGtEQUFrRDtBQUFBOztBQUNoRCxNQUFJZ0IsSUFBSSxHQUFHdEIsTUFBTSxDQUFOQSxPQUNUO0FBQ0VXLFVBQU0sRUFEUjtBQUVFakIsV0FBTyxFQUZUO0FBR0U2QixTQUFLLEVBSFA7QUFJRUMsV0FBTyxFQUpUO0FBS0VDLFVBQU0sRUFMUjtBQU1FQyxXQUFPLEVBTlQ7QUFPRTNCLFdBQU8sRUFSQUM7QUFDVCxHQURTQSxFQUFYLE9BQVdBLENBQVg7QUFhQSxNQUFJMkIsWUFBWSxHQUFoQjs7QUFFQSxrQkFBZ0I7QUFDZCxRQUFJLENBQUosY0FBbUI7QUFDakIsVUFBTUMsR0FBRyxHQUFHLGlDQUFaLElBQVksQ0FBWjtBQUNBRCxrQkFBWSxHQUFHO0FBQ2JFLHVCQUFlLEVBQUVELEdBQUcsQ0FBSEEscUJBREosR0FDSUEsQ0FESjtBQUViRSxpQkFBUyxFQUFFRixHQUFHLENBQUhBLGVBRkUsR0FFRkEsQ0FGRTtBQUdiRyxhQUFLLEVBQUVILEdBQUcsQ0FBSEEsV0FITSxHQUdOQSxDQUhNO0FBSWJsQixlQUFPLEVBQUVrQixHQUFHLENBQUhBLGFBSlhELEdBSVdDO0FBSkksT0FBZkQ7QUFPRjs7QUFBQSxXQUFPQSxZQUFZLENBQW5CLE9BQU9BLEVBQVA7QUFHRixHQTdCZ0QsQ0E2QmhEOzs7QUFDQSxhQUFtQyxFQTlCYSxDQWtDaEQ7OztBQUNBLE1BQ0Usd0JBRUEsT0FBT0wsSUFBSSxDQUFYLFlBSEYsWUFJRTtBQUNBLFFBQU1VLFNBQVMsR0FBR1YsSUFBSSxDQUF0QixPQUFrQkEsRUFBbEI7QUFDQWQsc0JBQWtCLENBQWxCQSxLQUF5QnlCLGFBQUQsRUFBUztBQUFBLGlEQUMvQixTQUQrQjtBQUFBOztBQUFBO0FBQy9CLDREQUFrQztBQUFBLGNBQWxDLFFBQWtDOztBQUNoQyxjQUFJQSxHQUFHLENBQUhBLHNCQUEwQixDQUE5QixHQUFrQztBQUNoQyxtQkFBT0MsSUFBUDtBQUVIO0FBQ0Y7QUFOZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQzFCO0FBU0Y7O0FBQUEsTUFBTTJCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsYUFBZ0I7QUFBQTs7QUFDeENELFFBQUk7O0FBRUosUUFBTUUsT0FBTyxHQUFHOUIsNkJBQWlCRCxpQkFBakMsZUFBZ0JDLENBQWhCOztBQUNBLFFBQU1NLEtBQUssR0FBRyxzQ0FBZCxZQUFjLENBQWQ7O0FBRUFOLCtDQUVFO0FBQUEsYUFBTztBQUNMeUIsYUFBSyxFQUFFSixZQUFZLENBSHZCckI7QUFFUyxPQUFQO0FBQUEsS0FGRkE7O0FBUUEsUUFBSThCLE9BQU8sSUFBSUMsS0FBSyxDQUFMQSxRQUFjZixJQUFJLENBQWpDLE9BQWVlLENBQWYsRUFBNEM7QUFDMUNmLFVBQUksQ0FBSkEsZ0JBQXNCZ0Isb0JBQUQsRUFBZ0I7QUFDbkNGLGVBQU8sQ0FBUEEsVUFBTyxDQUFQQTtBQURGZDtBQUtGOztBQUFBLFdBQU9oQiwwQkFBYyxZQUFNO0FBQ3pCLFVBQUlNLEtBQUssQ0FBTEEsV0FBaUJBLEtBQUssQ0FBMUIsT0FBa0M7QUFDaEMsNEJBQU9OLGdDQUFvQmdCLElBQUksQ0FBeEJoQixTQUFrQztBQUN2Q2lDLG1CQUFTLEVBQUUzQixLQUFLLENBRHVCO0FBRXZDNEIsbUJBQVMsRUFBRTVCLEtBQUssQ0FGdUI7QUFHdkM2QixrQkFBUSxFQUFFN0IsS0FBSyxDQUh3QjtBQUl2Q2pCLGVBQUssRUFBRWlCLEtBQUssQ0FKMkI7QUFLdkNtQixlQUFLLEVBQUVKLFlBQVksQ0FMckI7QUFBeUMsU0FBbENyQixDQUFQO0FBREYsYUFRTyxJQUFJTSxLQUFLLENBQVQsUUFBa0I7QUFDdkIsZUFBT1UsSUFBSSxDQUFKQSxPQUFZVixLQUFLLENBQWpCVSxRQUFQLEtBQU9BLENBQVA7QUFESyxhQUVBO0FBQ0w7QUFFSDtBQWRNaEIsT0FjSixRQWRILEtBY0csQ0FkSUEsQ0FBUDtBQXBCRjs7QUFsRGdELEtBa0QxQzZCLGlCQWxEMEM7O0FBdUZoREEsbUJBQWlCLENBQWpCQSxVQUE0QjtBQUFBLFdBQU1ELElBQWxDQyxFQUE0QjtBQUFBLEdBQTVCQTs7QUFDQUEsbUJBQWlCLENBQWpCQTtBQUVBLHNCQUFPN0IsNkJBQVAsaUJBQU9BLENBQVA7QUFHRjs7SUFBTW9DLG9CO0FBQ0pDLGdDQUFXLE1BQVhBLEVBQVcsSUFBWEEsRUFBMEI7QUFBQTs7QUFDeEI7QUFDQTtBQUNBLHNCQUFrQixJQUFsQixHQUFrQixFQUFsQjtBQUNBO0FBQ0E7QUFFQTtBQUdGakM7Ozs7OEJBQVU7QUFDUixhQUFPLFVBQVA7QUFHRnFCOzs7NEJBQVE7QUFBQTs7QUFDTjs7QUFDQSxrQkFBWSxhQUFhLFdBQXpCLE1BQVksQ0FBWjtBQUVBLG9CQUFjO0FBQ1pTLGlCQUFTLEVBREc7QUFFWkMsZ0JBQVEsRUFGVjtBQUFjLE9BQWQ7QUFKTSxVQVNBLEdBVEEsR0FTTixJQVRNLENBU0VHLElBVEY7QUFBQSxVQVNBLElBVEEsR0FTTixJQVRNLENBU2FDLEtBVGI7O0FBV04sVUFBSTFCLEdBQUcsQ0FBUCxTQUFpQjtBQUNmLFlBQUksT0FBT0csSUFBSSxDQUFYLFVBQUosVUFBb0M7QUFDbEMsY0FBSUEsSUFBSSxDQUFKQSxVQUFKLEdBQXNCO0FBQ3BCO0FBREYsaUJBRU87QUFDTCwwQkFBY3dCLFVBQVUsQ0FBQyxZQUFNO0FBQzdCLDRCQUFhO0FBQ1hOLHlCQUFTLEVBRFg7QUFBYSxlQUFiO0FBRHNCLGVBSXJCbEIsSUFBSSxDQUpQLEtBQXdCLENBQXhCO0FBTUg7QUFFRDs7QUFBQSxZQUFJLE9BQU9BLElBQUksQ0FBWCxZQUFKLFVBQXNDO0FBQ3BDLDBCQUFnQndCLFVBQVUsQ0FBQyxZQUFNO0FBQy9CLDBCQUFhO0FBQUVMLHNCQUFRLEVBQXZCO0FBQWEsYUFBYjtBQUR3QixhQUV2Qm5CLElBQUksQ0FGUCxPQUEwQixDQUExQjtBQUlIO0FBRUQ7O0FBQUEsNkJBQ1EsWUFBTTtBQUNWOztBQUNBO0FBSEosa0JBS1V5QixjQUFELEVBQVU7QUFDZjs7QUFDQTtBQVBKOztBQVNBO0FBR0ZDOzs7NEJBQU8sTyxFQUFVO0FBQ2Ysb0RBQ0ssS0FEUyxNQUFkO0FBRUVyRCxhQUFLLEVBQUUsVUFGSyxLQUFkO0FBR0VrQixjQUFNLEVBQUUsVUFISSxNQUFkO0FBSUVuQixlQUFPLEVBQUUsVUFKRztBQUFkOztBQU9BLDhCQUF5QnVELGtCQUFEO0FBQUEsZUFBY0EsUUFBdEMsRUFBd0I7QUFBQSxPQUF4QjtBQUdGQzs7O3FDQUFpQjtBQUNmQyxrQkFBWSxDQUFDLEtBQWJBLE1BQVksQ0FBWkE7QUFDQUEsa0JBQVksQ0FBQyxLQUFiQSxRQUFZLENBQVpBO0FBR0Z0Qjs7O3NDQUFrQjtBQUNoQixhQUFPLEtBQVA7QUFHRkM7Ozs4QkFBUyxRLEVBQVc7QUFBQTs7QUFDbEI7O0FBQ0EsYUFBTyxZQUFNO0FBQ1g7QUFERjtBQWhGdUI7Ozs7OztBQXNGM0Isd0JBQXdCO0FBQ3RCLFNBQU9zQix1QkFBdUIsT0FBOUIsSUFBOEIsQ0FBOUI7QUFHRjs7S0FKQSxROztBQUlBLDJCQUEyQjtBQUN6QixNQUFJLE9BQU85QixJQUFJLENBQVgsV0FBSixZQUF1QztBQUNyQyxVQUFNLFVBQU4seURBQU0sQ0FBTjtBQUdGOztBQUFBLFNBQU84Qix1QkFBdUIsVUFBOUIsSUFBOEIsQ0FBOUI7QUFHRjNEOztNQVJBLFc7QUFRQUEsUUFBUSxDQUFSQTs7QUFFQSw4Q0FBOEM7QUFDNUMsTUFBSXNCLFFBQVEsR0FBWjs7QUFFQSxTQUFPc0MsWUFBWSxDQUFuQixRQUE0QjtBQUMxQixRQUFJbkIsSUFBSSxHQUFHbUIsWUFBWSxDQUF2QixHQUFXQSxFQUFYO0FBQ0F0QyxZQUFRLENBQVJBLEtBQWNtQixJQUFJLENBQWxCbkIsR0FBa0IsQ0FBbEJBO0FBR0Y7O0FBQUEsU0FBT0ssT0FBTyxDQUFQQSxtQkFBMkIsWUFBTTtBQUN0QyxRQUFJaUMsWUFBWSxDQUFoQixRQUF5QjtBQUN2QixhQUFPQyxpQkFBaUIsZUFBeEIsR0FBd0IsQ0FBeEI7QUFFSDtBQUpELEdBQU9sQyxDQUFQO0FBT0YzQjs7QUFBQUEsUUFBUSxDQUFSQSxhQUFzQixZQUFNO0FBQzFCLFNBQU8sWUFBWSx1Q0FBaUM7QUFDbEQ2RCxxQkFBaUIsQ0FBakJBLGdCQUFpQixDQUFqQkE7QUFERixHQUFPLENBQVA7QUFERjdEOztBQU1BLFFBQVEsQ0FBUixlQUF3QixZQUFjO0FBQUEsTUFBYndDLEdBQWEsdUVBQWQsRUFBYztBQUNwQyxTQUFPLFlBQWFzQix3QkFBRCxFQUFvQjtBQUNyQyxRQUFNcEMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNoQlYsaUJBQVcsR0FBWEE7QUFDQSxhQUFPOEMsY0FBUDtBQUZGLE1BRHFDLENBS3JDOzs7QUFDQUQscUJBQWlCLHFCQUFqQkEsR0FBaUIsQ0FBakJBO0FBTkYsR0FBTyxDQUFQO0FBREY7O0FBV0EsVUFBbUM7QUFDakNFLFFBQU0sQ0FBTkEsc0JBQTZCL0QsUUFBUSxDQUFyQytEOzs7ZUFHYS9ELFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblZmLGlCQUFpQixtQkFBTyxDQUFDLDJGQUFnQzs7Ozs7Ozs7Ozs7OztBQ0F6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsZ0ZBQWU7QUFDckMsWUFBWSxtQkFBTyxDQUFDLDRDQUFPOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7OztBQUdILHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGdDQUFnQzs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQzFIYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQyxrSEFBdUM7QUFDbEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7Q0FFQTtBQUNBOztBQUNBO0FBRWUsU0FBU2dFLE1BQVQsT0FBNEI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDekMsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyw4REFBRDtBQUFBLDZCQUNBO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsK0JBQ0kscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7S0FWdUJELE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnhCO0FBQ0E7QUFDQSxJQUFNRSxTQUFTLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLGtLQUFOO0FBQUEsQ0FBRCxFQUFxQztBQUFDQyxLQUFHLEVBQUUsS0FBTjtBQUFBO0FBQUE7QUFBQSxrQ0FBdkIsOEVBQXVCO0FBQUE7QUFBQSx3Q0FBdkIsb0JBQXVCO0FBQUE7QUFBQSxDQUFyQyxDQUF6QjtNQUFNRixTOztBQUVOLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDbkIsTUFBTUMsTUFBTSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBckI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2ROLGFBQVMsQ0FDUDtBQUNFTyxVQUFJLEVBQUUsTUFEUjtBQUVFQyxnQkFBVSxFQUFFO0FBRmQsS0FETyxFQUtQSixNQUFNLENBQUNLLE9BTEEsQ0FBVCxDQU1FQyxJQU5GLENBTU8sVUFBVUMsUUFBVixFQUFvQjtBQUN6QkEsY0FBUSxDQUFDQyxRQUFULENBQWtCLE1BQWxCO0FBQ0QsS0FSRDtBQVNELEdBVlEsRUFVTixFQVZNLENBQVQ7QUFZQSxzQkFDRTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDQTtBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUcsbUJBQVMsRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBS0E7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBMkIsV0FBRyxFQUFFUjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0ExQkQ7O0dBQU1ELE07O01BQUFBLE07QUE0QlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc3VtZS9yZXN1bWUuMjY5MjdhYTAyMmI1N2FhOWJkOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMb2FkYWJsZSBmcm9tICcuL2xvYWRhYmxlJ1xuXG5jb25zdCBpc1NlcnZlclNpZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgdHlwZSBMb2FkZXJDb21wb25lbnQ8UCA9IHt9PiA9IFByb21pc2U8XG4gIFJlYWN0LkNvbXBvbmVudFR5cGU8UD4gfCB7IGRlZmF1bHQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8UD4gfVxuPlxuXG5leHBvcnQgdHlwZSBMb2FkZXI8UCA9IHt9PiA9ICgoKSA9PiBMb2FkZXJDb21wb25lbnQ8UD4pIHwgTG9hZGVyQ29tcG9uZW50PFA+XG5cbmV4cG9ydCB0eXBlIExvYWRlck1hcCA9IHsgW21kdWxlOiBzdHJpbmddOiAoKSA9PiBMb2FkZXI8YW55PiB9XG5cbmV4cG9ydCB0eXBlIExvYWRhYmxlR2VuZXJhdGVkT3B0aW9ucyA9IHtcbiAgd2VicGFjaz8oKTogYW55XG4gIG1vZHVsZXM/KCk6IExvYWRlck1hcFxufVxuXG5leHBvcnQgdHlwZSBMb2FkYWJsZUJhc2VPcHRpb25zPFAgPSB7fT4gPSBMb2FkYWJsZUdlbmVyYXRlZE9wdGlvbnMgJiB7XG4gIGxvYWRpbmc/OiAoe1xuICAgIGVycm9yLFxuICAgIGlzTG9hZGluZyxcbiAgICBwYXN0RGVsYXksXG4gIH06IHtcbiAgICBlcnJvcj86IEVycm9yIHwgbnVsbFxuICAgIGlzTG9hZGluZz86IGJvb2xlYW5cbiAgICBwYXN0RGVsYXk/OiBib29sZWFuXG4gICAgcmV0cnk/OiAoKSA9PiB2b2lkXG4gICAgdGltZWRPdXQ/OiBib29sZWFuXG4gIH0pID0+IEpTWC5FbGVtZW50IHwgbnVsbFxuICBsb2FkZXI/OiBMb2FkZXI8UD4gfCBMb2FkZXJNYXBcbiAgbG9hZGFibGVHZW5lcmF0ZWQ/OiBMb2FkYWJsZUdlbmVyYXRlZE9wdGlvbnNcbiAgc3NyPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBMb2FkYWJsZU9wdGlvbnM8UCA9IHt9PiA9IExvYWRhYmxlQmFzZU9wdGlvbnM8UD4gJiB7XG4gIHJlbmRlcj8obG9hZGVyOiBhbnksIHByb3BzOiBhbnkpOiBKU1guRWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBEeW5hbWljT3B0aW9uczxQID0ge30+ID0gTG9hZGFibGVCYXNlT3B0aW9uczxQPiAmIHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHRoZSBtb2R1bGVzIG9wdGlvbiBoYXMgYmVlbiBwbGFubmVkIGZvciByZW1vdmFsXG4gICAqL1xuICByZW5kZXI/KHByb3BzOiBQLCBsb2FkZWQ6IGFueSk6IEpTWC5FbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIExvYWRhYmxlRm48UCA9IHt9PiA9IChcbiAgb3B0czogTG9hZGFibGVPcHRpb25zPFA+XG4pID0+IFJlYWN0LkNvbXBvbmVudFR5cGU8UD5cblxuZXhwb3J0IHR5cGUgTG9hZGFibGVDb21wb25lbnQ8UCA9IHt9PiA9IFJlYWN0LkNvbXBvbmVudFR5cGU8UD5cblxuZXhwb3J0IGZ1bmN0aW9uIG5vU1NSPFAgPSB7fT4oXG4gIExvYWRhYmxlSW5pdGlhbGl6ZXI6IExvYWRhYmxlRm48UD4sXG4gIGxvYWRhYmxlT3B0aW9uczogTG9hZGFibGVPcHRpb25zPFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPFA+IHtcbiAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICBkZWxldGUgbG9hZGFibGVPcHRpb25zLndlYnBhY2tcbiAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzXG5cbiAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gIGlmICghaXNTZXJ2ZXJTaWRlKSB7XG4gICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKVxuICB9XG5cbiAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nIVxuICAvLyBUaGlzIHdpbGwgb25seSBiZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyIHNpZGVcbiAgcmV0dXJuICgpID0+IChcbiAgICA8TG9hZGluZyBlcnJvcj17bnVsbH0gaXNMb2FkaW5nIHBhc3REZWxheT17ZmFsc2V9IHRpbWVkT3V0PXtmYWxzZX0gLz5cbiAgKVxufVxuXG4vLyBmdW5jdGlvbiBkeW5hbWljPFAgPSB7fSwgTyBleHRlbmRzIER5bmFtaWNPcHRpb25zPihvcHRpb25zOiBPKTpcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pYzxQID0ge30+KFxuICBkeW5hbWljT3B0aW9uczogRHluYW1pY09wdGlvbnM8UD4gfCBMb2FkZXI8UD4sXG4gIG9wdGlvbnM/OiBEeW5hbWljT3B0aW9uczxQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxQPiB7XG4gIGxldCBsb2FkYWJsZUZuOiBMb2FkYWJsZUZuPFA+ID0gTG9hZGFibGVcbiAgbGV0IGxvYWRhYmxlT3B0aW9uczogTG9hZGFibGVPcHRpb25zPFA+ID0ge1xuICAgIC8vIEEgbG9hZGluZyBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBkZWZhdWx0IGl0XG4gICAgbG9hZGluZzogKHsgZXJyb3IsIGlzTG9hZGluZywgcGFzdERlbGF5IH0pID0+IHtcbiAgICAgIGlmICghcGFzdERlbGF5KSByZXR1cm4gbnVsbFxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge2Vycm9yLm1lc3NhZ2V9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7ZXJyb3Iuc3RhY2t9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSxcbiAgfVxuXG4gIC8vIFN1cHBvcnQgZm9yIGRpcmVjdCBpbXBvcnQoKSwgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IGtlcHQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgc29tZW9uZSBpcyBwYXNzaW5nIGluIGEgcHJvbWlzZSBhcyBmaXJzdCBhcmd1bWVudFxuICAvLyBUaGUgcmVhY3QtbG9hZGFibGUgYmFiZWwgcGx1Z2luIHdpbGwgdHVybiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSkgaW50byBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgLy8gVG8gbWFrZSBzdXJlIHdlIGRvbid0IGV4ZWN1dGUgdGhlIGltcG9ydCB3aXRob3V0IHJlbmRlcmluZyBmaXJzdFxuICBpZiAoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9ICgpID0+IGR5bmFtaWNPcHRpb25zXG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGltcG9ydCBhcyBhIGZ1bmN0aW9uLCBlZzogZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGR5bmFtaWNPcHRpb25zXG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGZpcnN0IGFyZ3VtZW50IGJlaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKHtsb2FkZXI6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0pXG4gIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHsgLi4ubG9hZGFibGVPcHRpb25zLCAuLi5keW5hbWljT3B0aW9ucyB9XG4gIH1cblxuICAvLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXG4gIGxvYWRhYmxlT3B0aW9ucyA9IHsgLi4ubG9hZGFibGVPcHRpb25zLCAuLi5vcHRpb25zIH1cblxuICBpZiAoXG4gICAgdHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0JyAmJlxuICAgICEoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKVxuICApIHtcbiAgICAvLyBzaG93IGRlcHJlY2F0aW9uIHdhcm5pbmcgZm9yIGBtb2R1bGVzYCBrZXkgaW4gZGV2ZWxvcG1lbnRcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGR5bmFtaWNPcHRpb25zLm1vZHVsZXMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdUaGUgbW9kdWxlcyBvcHRpb24gZm9yIG5leHQvZHluYW1pYyBoYXMgYmVlbiBkZXByZWNhdGVkLiBTZWUgaGVyZSBmb3IgbW9yZSBpbmZvIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtZHluYW1pYy1tb2R1bGVzJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFN1cHBvcnQgZm9yIGByZW5kZXJgIHdoZW4gdXNpbmcgYSBtYXBwaW5nLCBlZzogYGR5bmFtaWMoeyBtb2R1bGVzOiAoKSA9PiB7cmV0dXJuIHtIZWxsb1dvcmxkOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9LCByZW5kZXIocHJvcHMsIGxvYWRlZCkge30gfSB9KVxuICAgIGlmIChkeW5hbWljT3B0aW9ucy5yZW5kZXIpIHtcbiAgICAgIGxvYWRhYmxlT3B0aW9ucy5yZW5kZXIgPSAobG9hZGVkLCBwcm9wcykgPT5cbiAgICAgICAgZHluYW1pY09wdGlvbnMucmVuZGVyIShwcm9wcywgbG9hZGVkKVxuICAgIH1cbiAgICAvLyBTdXBwb3J0IGZvciBgbW9kdWxlc2Agd2hlbiB1c2luZyBhIG1hcHBpbmcsIGVnOiBgZHluYW1pYyh7IG1vZHVsZXM6ICgpID0+IHtyZXR1cm4ge0hlbGxvV29ybGQ6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0sIHJlbmRlcihwcm9wcywgbG9hZGVkKSB7fSB9IH0pXG4gICAgaWYgKGR5bmFtaWNPcHRpb25zLm1vZHVsZXMpIHtcbiAgICAgIGxvYWRhYmxlRm4gPSBMb2FkYWJsZS5NYXBcbiAgICAgIGNvbnN0IGxvYWRNb2R1bGVzOiBMb2FkZXJNYXAgPSB7fVxuICAgICAgY29uc3QgbW9kdWxlcyA9IGR5bmFtaWNPcHRpb25zLm1vZHVsZXMoKVxuICAgICAgT2JqZWN0LmtleXMobW9kdWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlOiBhbnkgPSBtb2R1bGVzW2tleV1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbG9hZE1vZHVsZXNba2V5XSA9ICgpID0+IHZhbHVlLnRoZW4oKG1vZDogYW55KSA9PiBtb2QuZGVmYXVsdCB8fCBtb2QpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbG9hZE1vZHVsZXNba2V5XSA9IHZhbHVlXG4gICAgICB9KVxuICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGxvYWRNb2R1bGVzXG4gICAgfVxuICB9XG5cbiAgLy8gY29taW5nIGZyb20gYnVpbGQvYmFiZWwvcGx1Z2lucy9yZWFjdC1sb2FkYWJsZS1wbHVnaW4uanNcbiAgaWYgKGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCkge1xuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCxcbiAgICB9XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZFxuICB9XG5cbiAgLy8gc3VwcG9ydCBmb3IgZGlzYWJsaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7c3NyOiBmYWxzZX0pXG4gIGlmICh0eXBlb2YgbG9hZGFibGVPcHRpb25zLnNzciA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgaWYgKCFsb2FkYWJsZU9wdGlvbnMuc3NyKSB7XG4gICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzclxuICAgICAgcmV0dXJuIG5vU1NSKGxvYWRhYmxlRm4sIGxvYWRhYmxlT3B0aW9ucylcbiAgICB9XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3JcbiAgfVxuXG4gIHJldHVybiBsb2FkYWJsZUZuKGxvYWRhYmxlT3B0aW9ucylcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxudHlwZSBDYXB0dXJlRm4gPSAobW9kdWxlTmFtZTogc3RyaW5nKSA9PiB2b2lkXG5cbmV4cG9ydCBjb25zdCBMb2FkYWJsZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PENhcHR1cmVGbiB8IG51bGw+KG51bGwpXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIExvYWRhYmxlQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdMb2FkYWJsZUNvbnRleHQnXG59XG4iLCIvKipcbkBjb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCBKYW1lcyBLeWxlIDxtZUB0aGVqYW1lc2t5bGUuY29tPlxuIE1JVCBMaWNlbnNlXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG5hIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcblwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xud2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG5wZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbnRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbkVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbk5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkVcbkxJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cbk9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxuV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkVcbiovXG4vLyBodHRwczovL2dpdGh1Yi5jb20vamFtaWVidWlsZHMvcmVhY3QtbG9hZGFibGUvYmxvYi92NS41LjAvc3JjL2luZGV4LmpzXG4vLyBNb2RpZmllZCB0byBiZSBjb21wYXRpYmxlIHdpdGggd2VicGFjayA0IC8gTmV4dC5qc1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdWJzY3JpcHRpb24gfSBmcm9tICd1c2Utc3Vic2NyaXB0aW9uJ1xuaW1wb3J0IHsgTG9hZGFibGVDb250ZXh0IH0gZnJvbSAnLi9sb2FkYWJsZS1jb250ZXh0J1xuXG5jb25zdCBBTExfSU5JVElBTElaRVJTID0gW11cbmNvbnN0IFJFQURZX0lOSVRJQUxJWkVSUyA9IFtdXG5sZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZVxuXG5mdW5jdGlvbiBsb2FkKGxvYWRlcikge1xuICBsZXQgcHJvbWlzZSA9IGxvYWRlcigpXG5cbiAgbGV0IHN0YXRlID0ge1xuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgbG9hZGVkOiBudWxsLFxuICAgIGVycm9yOiBudWxsLFxuICB9XG5cbiAgc3RhdGUucHJvbWlzZSA9IHByb21pc2VcbiAgICAudGhlbigobG9hZGVkKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHN0YXRlLmxvYWRlZCA9IGxvYWRlZFxuICAgICAgcmV0dXJuIGxvYWRlZFxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgc3RhdGUuZXJyb3IgPSBlcnJcbiAgICAgIHRocm93IGVyclxuICAgIH0pXG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmZ1bmN0aW9uIGxvYWRNYXAob2JqKSB7XG4gIGxldCBzdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBsb2FkZWQ6IHt9LFxuICAgIGVycm9yOiBudWxsLFxuICB9XG5cbiAgbGV0IHByb21pc2VzID0gW11cblxuICB0cnkge1xuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBsZXQgcmVzdWx0ID0gbG9hZChvYmpba2V5XSlcblxuICAgICAgaWYgKCFyZXN1bHQubG9hZGluZykge1xuICAgICAgICBzdGF0ZS5sb2FkZWRba2V5XSA9IHJlc3VsdC5sb2FkZWRcbiAgICAgICAgc3RhdGUuZXJyb3IgPSByZXN1bHQuZXJyb3JcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIHByb21pc2VzLnB1c2gocmVzdWx0LnByb21pc2UpXG5cbiAgICAgIHJlc3VsdC5wcm9taXNlXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBzdGF0ZS5sb2FkZWRba2V5XSA9IHJlc1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHN0YXRlLmVycm9yID0gZXJyXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgc3RhdGUuZXJyb3IgPSBlcnJcbiAgfVxuXG4gIHN0YXRlLnByb21pc2UgPSBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHJldHVybiByZXNcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHRocm93IGVyclxuICAgIH0pXG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmZ1bmN0aW9uIHJlc29sdmUob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmouZGVmYXVsdCA6IG9ialxufVxuXG5mdW5jdGlvbiByZW5kZXIobG9hZGVkLCBwcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChyZXNvbHZlKGxvYWRlZCksIHByb3BzKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkRm4sIG9wdGlvbnMpIHtcbiAgbGV0IG9wdHMgPSBPYmplY3QuYXNzaWduKFxuICAgIHtcbiAgICAgIGxvYWRlcjogbnVsbCxcbiAgICAgIGxvYWRpbmc6IG51bGwsXG4gICAgICBkZWxheTogMjAwLFxuICAgICAgdGltZW91dDogbnVsbCxcbiAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgd2VicGFjazogbnVsbCxcbiAgICAgIG1vZHVsZXM6IG51bGwsXG4gICAgfSxcbiAgICBvcHRpb25zXG4gIClcblxuICBsZXQgc3Vic2NyaXB0aW9uID0gbnVsbFxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgIGNvbnN0IHN1YiA9IG5ldyBMb2FkYWJsZVN1YnNjcmlwdGlvbihsb2FkRm4sIG9wdHMpXG4gICAgICBzdWJzY3JpcHRpb24gPSB7XG4gICAgICAgIGdldEN1cnJlbnRWYWx1ZTogc3ViLmdldEN1cnJlbnRWYWx1ZS5iaW5kKHN1YiksXG4gICAgICAgIHN1YnNjcmliZTogc3ViLnN1YnNjcmliZS5iaW5kKHN1YiksXG4gICAgICAgIHJldHJ5OiBzdWIucmV0cnkuYmluZChzdWIpLFxuICAgICAgICBwcm9taXNlOiBzdWIucHJvbWlzZS5iaW5kKHN1YiksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdWJzY3JpcHRpb24ucHJvbWlzZSgpXG4gIH1cblxuICAvLyBTZXJ2ZXIgb25seVxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBBTExfSU5JVElBTElaRVJTLnB1c2goaW5pdClcbiAgfVxuXG4gIC8vIENsaWVudCBvbmx5XG4gIGlmIChcbiAgICAhaW5pdGlhbGl6ZWQgJiZcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBvcHRzLndlYnBhY2sgPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgY29uc3QgbW9kdWxlSWRzID0gb3B0cy53ZWJwYWNrKClcbiAgICBSRUFEWV9JTklUSUFMSVpFUlMucHVzaCgoaWRzKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG1vZHVsZUlkIG9mIG1vZHVsZUlkcykge1xuICAgICAgICBpZiAoaWRzLmluZGV4T2YobW9kdWxlSWQpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBpbml0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBMb2FkYWJsZUNvbXBvbmVudCA9IChwcm9wcywgcmVmKSA9PiB7XG4gICAgaW5pdCgpXG5cbiAgICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChMb2FkYWJsZUNvbnRleHQpXG4gICAgY29uc3Qgc3RhdGUgPSB1c2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKVxuXG4gICAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShcbiAgICAgIHJlZixcbiAgICAgICgpID0+ICh7XG4gICAgICAgIHJldHJ5OiBzdWJzY3JpcHRpb24ucmV0cnksXG4gICAgICB9KSxcbiAgICAgIFtdXG4gICAgKVxuXG4gICAgaWYgKGNvbnRleHQgJiYgQXJyYXkuaXNBcnJheShvcHRzLm1vZHVsZXMpKSB7XG4gICAgICBvcHRzLm1vZHVsZXMuZm9yRWFjaCgobW9kdWxlTmFtZSkgPT4ge1xuICAgICAgICBjb250ZXh0KG1vZHVsZU5hbWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS5sb2FkaW5nIHx8IHN0YXRlLmVycm9yKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KG9wdHMubG9hZGluZywge1xuICAgICAgICAgIGlzTG9hZGluZzogc3RhdGUubG9hZGluZyxcbiAgICAgICAgICBwYXN0RGVsYXk6IHN0YXRlLnBhc3REZWxheSxcbiAgICAgICAgICB0aW1lZE91dDogc3RhdGUudGltZWRPdXQsXG4gICAgICAgICAgZXJyb3I6IHN0YXRlLmVycm9yLFxuICAgICAgICAgIHJldHJ5OiBzdWJzY3JpcHRpb24ucmV0cnksXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmxvYWRlZCkge1xuICAgICAgICByZXR1cm4gb3B0cy5yZW5kZXIoc3RhdGUubG9hZGVkLCBwcm9wcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgfSwgW3Byb3BzLCBzdGF0ZV0pXG4gIH1cblxuICBMb2FkYWJsZUNvbXBvbmVudC5wcmVsb2FkID0gKCkgPT4gaW5pdCgpXG4gIExvYWRhYmxlQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gJ0xvYWRhYmxlQ29tcG9uZW50J1xuXG4gIHJldHVybiBSZWFjdC5mb3J3YXJkUmVmKExvYWRhYmxlQ29tcG9uZW50KVxufVxuXG5jbGFzcyBMb2FkYWJsZVN1YnNjcmlwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGxvYWRGbiwgb3B0cykge1xuICAgIHRoaXMuX2xvYWRGbiA9IGxvYWRGblxuICAgIHRoaXMuX29wdHMgPSBvcHRzXG4gICAgdGhpcy5fY2FsbGJhY2tzID0gbmV3IFNldCgpXG4gICAgdGhpcy5fZGVsYXkgPSBudWxsXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcblxuICAgIHRoaXMucmV0cnkoKVxuICB9XG5cbiAgcHJvbWlzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzLnByb21pc2VcbiAgfVxuXG4gIHJldHJ5KCkge1xuICAgIHRoaXMuX2NsZWFyVGltZW91dHMoKVxuICAgIHRoaXMuX3JlcyA9IHRoaXMuX2xvYWRGbih0aGlzLl9vcHRzLmxvYWRlcilcblxuICAgIHRoaXMuX3N0YXRlID0ge1xuICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgIHRpbWVkT3V0OiBmYWxzZSxcbiAgICB9XG5cbiAgICBjb25zdCB7IF9yZXM6IHJlcywgX29wdHM6IG9wdHMgfSA9IHRoaXNcblxuICAgIGlmIChyZXMubG9hZGluZykge1xuICAgICAgaWYgKHR5cGVvZiBvcHRzLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAob3B0cy5kZWxheSA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX3N0YXRlLnBhc3REZWxheSA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9kZWxheSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlKHtcbiAgICAgICAgICAgICAgcGFzdERlbGF5OiB0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LCBvcHRzLmRlbGF5KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0cy50aW1lb3V0ID09PSAnbnVtYmVyJykge1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlKHsgdGltZWRPdXQ6IHRydWUgfSlcbiAgICAgICAgfSwgb3B0cy50aW1lb3V0KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3Jlcy5wcm9taXNlXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZSh7fSlcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChfZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZSh7fSlcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpXG4gICAgICB9KVxuICAgIHRoaXMuX3VwZGF0ZSh7fSlcbiAgfVxuXG4gIF91cGRhdGUocGFydGlhbCkge1xuICAgIHRoaXMuX3N0YXRlID0ge1xuICAgICAgLi4udGhpcy5fc3RhdGUsXG4gICAgICBlcnJvcjogdGhpcy5fcmVzLmVycm9yLFxuICAgICAgbG9hZGVkOiB0aGlzLl9yZXMubG9hZGVkLFxuICAgICAgbG9hZGluZzogdGhpcy5fcmVzLmxvYWRpbmcsXG4gICAgICAuLi5wYXJ0aWFsLFxuICAgIH1cbiAgICB0aGlzLl9jYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKCkpXG4gIH1cblxuICBfY2xlYXJUaW1lb3V0cygpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVsYXkpXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gIH1cblxuICBnZXRDdXJyZW50VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlXG4gIH1cblxuICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLl9jYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBMb2FkYWJsZShvcHRzKSB7XG4gIHJldHVybiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkLCBvcHRzKVxufVxuXG5mdW5jdGlvbiBMb2FkYWJsZU1hcChvcHRzKSB7XG4gIGlmICh0eXBlb2Ygb3B0cy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvYWRhYmxlTWFwIHJlcXVpcmVzIGEgYHJlbmRlcihsb2FkZWQsIHByb3BzKWAgZnVuY3Rpb24nKVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50KGxvYWRNYXAsIG9wdHMpXG59XG5cbkxvYWRhYmxlLk1hcCA9IExvYWRhYmxlTWFwXG5cbmZ1bmN0aW9uIGZsdXNoSW5pdGlhbGl6ZXJzKGluaXRpYWxpemVycywgaWRzKSB7XG4gIGxldCBwcm9taXNlcyA9IFtdXG5cbiAgd2hpbGUgKGluaXRpYWxpemVycy5sZW5ndGgpIHtcbiAgICBsZXQgaW5pdCA9IGluaXRpYWxpemVycy5wb3AoKVxuICAgIHByb21pc2VzLnB1c2goaW5pdChpZHMpKVxuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICBpZiAoaW5pdGlhbGl6ZXJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZsdXNoSW5pdGlhbGl6ZXJzKGluaXRpYWxpemVycywgaWRzKVxuICAgIH1cbiAgfSlcbn1cblxuTG9hZGFibGUucHJlbG9hZEFsbCA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlSW5pdGlhbGl6ZXJzLCByZWplY3QpID0+IHtcbiAgICBmbHVzaEluaXRpYWxpemVycyhBTExfSU5JVElBTElaRVJTKS50aGVuKHJlc29sdmVJbml0aWFsaXplcnMsIHJlamVjdClcbiAgfSlcbn1cblxuTG9hZGFibGUucHJlbG9hZFJlYWR5ID0gKGlkcyA9IFtdKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZVByZWxvYWQpID0+IHtcbiAgICBjb25zdCByZXMgPSAoKSA9PiB7XG4gICAgICBpbml0aWFsaXplZCA9IHRydWVcbiAgICAgIHJldHVybiByZXNvbHZlUHJlbG9hZCgpXG4gICAgfVxuICAgIC8vIFdlIGFsd2F5cyB3aWxsIHJlc29sdmUsIGVycm9ycyBzaG91bGQgYmUgaGFuZGxlZCB3aXRoaW4gbG9hZGluZyBVSXMuXG4gICAgZmx1c2hJbml0aWFsaXplcnMoUkVBRFlfSU5JVElBTElaRVJTLCBpZHMpLnRoZW4ocmVzLCByZXMpXG4gIH0pXG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuX19ORVhUX1BSRUxPQURSRUFEWSA9IExvYWRhYmxlLnByZWxvYWRSZWFkeVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkYWJsZVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2R5bmFtaWMnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHZ1bmRlZmluZWRcbiAqIHVzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciByZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vXG4vLyBJbiBvcmRlciB0byBhdm9pZCByZW1vdmluZyBhbmQgcmUtYWRkaW5nIHN1YnNjcmlwdGlvbnMgZWFjaCB0aW1lIHRoaXMgaG9vayBpcyBjYWxsZWQsXG4vLyB0aGUgcGFyYW1ldGVycyBwYXNzZWQgdG8gdGhpcyBob29rIHNob3VsZCBiZSBtZW1vaXplZCBpbiBzb21lIHdheeKAk1xuLy8gZWl0aGVyIGJ5IHdyYXBwaW5nIHRoZSBlbnRpcmUgcGFyYW1zIG9iamVjdCB3aXRoIHVzZU1lbW8oKVxuLy8gb3IgYnkgd3JhcHBpbmcgdGhlIGluZGl2aWR1YWwgY2FsbGJhY2tzIHdpdGggdXNlQ2FsbGJhY2soKS5cblxuZnVuY3Rpb24gdXNlU3Vic2NyaXB0aW9uKF9yZWYpIHtcbiAgdmFyIGdldEN1cnJlbnRWYWx1ZSA9IF9yZWYuZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlID0gX3JlZi5zdWJzY3JpYmU7XG5cbiAgLy8gUmVhZCB0aGUgY3VycmVudCB2YWx1ZSBmcm9tIG91ciBzdWJzY3JpcHRpb24uXG4gIC8vIFdoZW4gdGhpcyB2YWx1ZSBjaGFuZ2VzLCB3ZSdsbCBzY2hlZHVsZSBhbiB1cGRhdGUgd2l0aCBSZWFjdC5cbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gYWxzbyBzdG9yZSB0aGUgaG9vayBwYXJhbXMgc28gdGhhdCB3ZSBjYW4gY2hlY2sgZm9yIHN0YWxlbmVzcy5cbiAgLy8gKFNlZSB0aGUgY29tbWVudCBpbiBjaGVja0ZvclVwZGF0ZXMoKSBiZWxvdyBmb3IgbW9yZSBpbmZvLilcbiAgdmFyIF91c2VTdGF0ZSA9IHJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0Q3VycmVudFZhbHVlOiBnZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICAgIHZhbHVlOiBnZXRDdXJyZW50VmFsdWUoKVxuICAgIH07XG4gIH0pLFxuICAgICAgc3RhdGUgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgdmFsdWVUb1JldHVybiA9IHN0YXRlLnZhbHVlOyAvLyBJZiBwYXJhbWV0ZXJzIGhhdmUgY2hhbmdlZCBzaW5jZSBvdXIgbGFzdCByZW5kZXIsIHNjaGVkdWxlIGFuIHVwZGF0ZSB3aXRoIGl0cyBjdXJyZW50IHZhbHVlLlxuXG4gIGlmIChzdGF0ZS5nZXRDdXJyZW50VmFsdWUgIT09IGdldEN1cnJlbnRWYWx1ZSB8fCBzdGF0ZS5zdWJzY3JpYmUgIT09IHN1YnNjcmliZSkge1xuICAgIC8vIElmIHRoZSBzdWJzY3JpcHRpb24gaGFzIGJlZW4gdXBkYXRlZCwgd2UnbGwgc2NoZWR1bGUgYW5vdGhlciB1cGRhdGUgd2l0aCBSZWFjdC5cbiAgICAvLyBSZWFjdCB3aWxsIHByb2Nlc3MgdGhpcyB1cGRhdGUgaW1tZWRpYXRlbHksIHNvIHRoZSBvbGQgc3Vic2NyaXB0aW9uIHZhbHVlIHdvbid0IGJlIGNvbW1pdHRlZC5cbiAgICAvLyBJdCBpcyBzdGlsbCBuaWNlIHRvIGF2b2lkIHJldHVybmluZyBhIG1pc21hdGNoZWQgdmFsdWUgdGhvdWdoLCBzbyBsZXQncyBvdmVycmlkZSB0aGUgcmV0dXJuIHZhbHVlLlxuICAgIHZhbHVlVG9SZXR1cm4gPSBnZXRDdXJyZW50VmFsdWUoKTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICBnZXRDdXJyZW50VmFsdWU6IGdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgICAgdmFsdWU6IHZhbHVlVG9SZXR1cm5cbiAgICB9KTtcbiAgfSAvLyBEaXNwbGF5IHRoZSBjdXJyZW50IHZhbHVlIGZvciB0aGlzIGhvb2sgaW4gUmVhY3QgRGV2VG9vbHMuXG5cblxuICByZWFjdC51c2VEZWJ1Z1ZhbHVlKHZhbHVlVG9SZXR1cm4pOyAvLyBJdCBpcyBpbXBvcnRhbnQgbm90IHRvIHN1YnNjcmliZSB3aGlsZSByZW5kZXJpbmcgYmVjYXVzZSB0aGlzIGNhbiBsZWFkIHRvIG1lbW9yeSBsZWFrcy5cbiAgLy8gKExlYXJuIG1vcmUgYXQgcmVhY3Rqcy5vcmcvZG9jcy9zdHJpY3QtbW9kZS5odG1sI2RldGVjdGluZy11bmV4cGVjdGVkLXNpZGUtZWZmZWN0cylcbiAgLy8gSW5zdGVhZCwgd2Ugd2FpdCB1bnRpbCB0aGUgY29tbWl0IHBoYXNlIHRvIGF0dGFjaCBvdXIgaGFuZGxlci5cbiAgLy9cbiAgLy8gV2UgaW50ZW50aW9uYWxseSB1c2UgYSBwYXNzaXZlIGVmZmVjdCAodXNlRWZmZWN0KSByYXRoZXIgdGhhbiBhIHN5bmNocm9ub3VzIG9uZSAodXNlTGF5b3V0RWZmZWN0KVxuICAvLyBzbyB0aGF0IHdlIGRvbid0IHN0cmV0Y2ggdGhlIGNvbW1pdCBwaGFzZS5cbiAgLy8gVGhpcyBhbHNvIGhhcyBhbiBhZGRlZCBiZW5lZml0IHdoZW4gbXVsdGlwbGUgY29tcG9uZW50cyBhcmUgc3Vic2NyaWJlZCB0byB0aGUgc2FtZSBzb3VyY2U6XG4gIC8vIEl0IGFsbG93cyBlYWNoIG9mIHRoZSBldmVudCBoYW5kbGVycyB0byBzYWZlbHkgc2NoZWR1bGUgd29yayB3aXRob3V0IHBvdGVudGlhbGx5IHJlbW92aW5nIGFuIGFub3RoZXIgaGFuZGxlci5cbiAgLy8gKExlYXJuIG1vcmUgYXQgaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL2sweXZyNTk3MG8pXG5cbiAgcmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcblxuICAgIHZhciBjaGVja0ZvclVwZGF0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgdGhpcyBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgZXZlbiBhZnRlciBiZWluZyB1bnN1YnNjcmliZWQsXG4gICAgICAvLyBpZiBpdCdzIHJlbW92ZWQgYXMgYSByZXN1bHQgb2YgYSBzdWJzY3JpcHRpb24gZXZlbnQvdXBkYXRlLlxuICAgICAgLy8gSW4gdGhpcyBjYXNlLCBSZWFjdCB3aWxsIGxvZyBhIERFViB3YXJuaW5nIGFib3V0IGFuIHVwZGF0ZSBmcm9tIGFuIHVubW91bnRlZCBjb21wb25lbnQuXG4gICAgICAvLyBXZSBjYW4gYXZvaWQgdHJpZ2dlcmluZyB0aGF0IHdhcm5pbmcgd2l0aCB0aGlzIGNoZWNrLlxuICAgICAgaWYgKGRpZFVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gV2UgdXNlIGEgc3RhdGUgdXBkYXRlciBmdW5jdGlvbiB0byBhdm9pZCBzY2hlZHVsaW5nIHdvcmsgZm9yIGEgc3RhbGUgc291cmNlLlxuICAgICAgLy8gSG93ZXZlciBpdCdzIGltcG9ydGFudCB0byBlYWdlcmx5IHJlYWQgdGhlIGN1cnJlbnRseSB2YWx1ZSxcbiAgICAgIC8vIHNvIHRoYXQgYWxsIHNjaGVkdWxlZCB3b3JrIHNoYXJlcyB0aGUgc2FtZSB2YWx1ZSAoaW4gdGhlIGV2ZW50IG9mIG11bHRpcGxlIHN1YnNjcmlwdGlvbnMpLlxuICAgICAgLy8gVGhpcyBhdm9pZHMgdmlzdWFsIFwidGVhcmluZ1wiIHdoZW4gYSBtdXRhdGlvbiBoYXBwZW5zIGR1cmluZyBhIChjb25jdXJyZW50KSByZW5kZXIuXG5cblxuICAgICAgdmFyIHZhbHVlID0gZ2V0Q3VycmVudFZhbHVlKCk7XG4gICAgICBzZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIC8vIElnbm9yZSB2YWx1ZXMgZnJvbSBzdGFsZSBzb3VyY2VzIVxuICAgICAgICAvLyBTaW5jZSB3ZSBzdWJzY3JpYmUgYW4gdW5zdWJzY3JpYmUgaW4gYSBwYXNzaXZlIGVmZmVjdCxcbiAgICAgICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IHRoaXMgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIGZvciBhIHN0YWxlIChwcmV2aW91cykgc3Vic2NyaXB0aW9uLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGF2b2lkcyBzY2hlZHVsaW5nIGFuIHVwZGF0ZSBmb3IgdGhhdCBzdGFsZSBzdWJzY3JpcHRpb24uXG4gICAgICAgIGlmIChwcmV2U3RhdGUuZ2V0Q3VycmVudFZhbHVlICE9PSBnZXRDdXJyZW50VmFsdWUgfHwgcHJldlN0YXRlLnN1YnNjcmliZSAhPT0gc3Vic2NyaWJlKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgICAgfSAvLyBTb21lIHN1YnNjcmlwdGlvbnMgd2lsbCBhdXRvLWludm9rZSB0aGUgaGFuZGxlciwgZXZlbiBpZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQuXG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBoYXNuJ3QgY2hhbmdlZCwgbm8gdXBkYXRlIGlzIG5lZWRlZC5cbiAgICAgICAgLy8gUmV0dXJuIHN0YXRlIGFzLWlzIHNvIFJlYWN0IGNhbiBiYWlsIG91dCBhbmQgYXZvaWQgYW4gdW5uZWNlc3NhcnkgcmVuZGVyLlxuXG5cbiAgICAgICAgaWYgKHByZXZTdGF0ZS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoY2hlY2tGb3JVcGRhdGVzKTsgLy8gQmVjYXVzZSB3ZSdyZSBzdWJzY3JpYmluZyBpbiBhIHBhc3NpdmUgZWZmZWN0LFxuICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCBhbiB1cGRhdGUgaGFzIG9jY3VycmVkIGJldHdlZW4gcmVuZGVyIGFuZCBvdXIgZWZmZWN0IGhhbmRsZXIuXG4gICAgLy8gQ2hlY2sgZm9yIHRoaXMgYW5kIHNjaGVkdWxlIGFuIHVwZGF0ZSBpZiB3b3JrIGhhcyBvY2N1cnJlZC5cblxuICAgIGNoZWNrRm9yVXBkYXRlcygpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBkaWRVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtnZXRDdXJyZW50VmFsdWUsIHN1YnNjcmliZV0pOyAvLyBSZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUgZm9yIG91ciBjYWxsZXIgdG8gdXNlIHdoaWxlIHJlbmRlcmluZy5cblxuICByZXR1cm4gdmFsdWVUb1JldHVybjtcbn1cblxuZXhwb3J0cy51c2VTdWJzY3JpcHRpb24gPSB1c2VTdWJzY3JpcHRpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN1YnNjcmlwdGlvbi5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgU2l0ZUxheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TaXRlTGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG4vLyBjb25zdCBWaWV3ZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL3Jlc3VtZS92aWV3ZXIuanNcIiksIHsgc3NyOiBmYWxzZSB9KTtcclxuaW1wb3J0IFZpZXdlciBmcm9tICcuLi9yZXN1bWUvdmlld2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdW1lKHsgcmVzdW1lIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFNpdGVMYXlvdXQ+ICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4gdy1zY3JlZW5cIj4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICA8Vmlld2VyIC8+ICAgICBcclxuICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICBcclxuICAgICAgPC9TaXRlTGF5b3V0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IFdlYlZpZXdlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdAcGRmdHJvbi93ZWJ2aWV3ZXInKSwge3NzcjogZmFsc2V9KTtcclxuXHJcbmNvbnN0IFZpZXdlciA9ICgpID0+IHtcclxuICBjb25zdCB2aWV3ZXIgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBXZWJWaWV3ZXIoXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnL2xpYicsXHJcbiAgICAgICAgaW5pdGlhbERvYzogXCIvcGRmL0d1c3Rhdm9Nb3JpbGxhLnBkZlwiLFxyXG4gICAgICB9LFxyXG4gICAgICB2aWV3ZXIuY3VycmVudFxyXG4gICAgKS50aGVuKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgICBpbnN0YW5jZS5zZXRUaGVtZShcImRhcmtcIik7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PiAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVmlld2VyXCI+ICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBmbGV4IGp1c3RpZnktYmV0d2VlblwiPiAgICAgICAgICBcclxuICAgICAgICAgIDxhPlJlc3VtZTwvYT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtc21cIj5Zb3UgY2FuIGRvd25sb2FkIHRoZSBmaWxlIG9uIFwiU2V0dGluZ3NcIiBidXR0b248L2E+ICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiV2Vidmlld2VyXCIgcmVmPXt2aWV3ZXJ9PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWV3ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=