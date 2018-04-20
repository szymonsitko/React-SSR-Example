/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Summary = exports.About = exports.Header = exports.JobCard = exports.AboutText = exports.Container = exports.SearchResults = undefined;

var _SearchResults = __webpack_require__(9);

var _SearchResults2 = _interopRequireDefault(_SearchResults);

var _Container = __webpack_require__(11);

var _Container2 = _interopRequireDefault(_Container);

var _AboutText = __webpack_require__(19);

var _AboutText2 = _interopRequireDefault(_AboutText);

var _JobCard = __webpack_require__(21);

var _JobCard2 = _interopRequireDefault(_JobCard);

var _Header = __webpack_require__(12);

var _Header2 = _interopRequireDefault(_Header);

var _About = __webpack_require__(18);

var _About2 = _interopRequireDefault(_About);

var _Summary = __webpack_require__(20);

var _Summary2 = _interopRequireDefault(_Summary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SearchResults = _SearchResults2.default;
exports.Container = _Container2.default;
exports.AboutText = _AboutText2.default;
exports.JobCard = _JobCard2.default;
exports.Header = _Header2.default;
exports.About = _About2.default;
exports.Summary = _Summary2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(5);

var _cors2 = _interopRequireDefault(_cors);

var _routes = __webpack_require__(22);

var _routes2 = _interopRequireDefault(_routes);

var _constants = __webpack_require__(17);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());

app.use(_express2.default.static('dist'));

app.get('*', _routes2.default);

app.listen(3000, function () {
    console.log('Server is listening on port: ' + constants.PORT);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'App' },
                _react2.default.createElement(
                    'p',
                    { className: 'title' },
                    'React SSR and Router v4 example.'
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/about', render: function render() {
                            return _react2.default.createElement(_components.About, null);
                        } }),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/summary', render: function render() {
                            return _react2.default.createElement(_components.Summary, { queryData: _this2.props.data });
                        } }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/', render: function render() {
                            return _react2.default.createElement(_components.SearchResults, { queryData: _this2.props.data });
                        } })
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHtmlParser = __webpack_require__(10);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchResults = function SearchResults(props) {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      _components.Header,
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Search results'
      )
    ),
    props.queryData.map(function (each) {
      return _react2.default.createElement(
        'div',
        { key: each.id, className: 'parent-container' },
        _react2.default.createElement(
          _components.Container,
          null,
          _react2.default.createElement(
            'div',
            { className: 'search-result' },
            _react2.default.createElement(
              _components.Header,
              null,
              _react2.default.createElement(
                'h2',
                { className: 'title' },
                each.title
              )
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'p',
              { className: 'date' },
              each.created_at
            ),
            _react2.default.createElement(
              'p',
              { className: 'type' },
              'Type: ',
              each.type
            ),
            _react2.default.createElement(
              'div',
              { className: 'description' },
              'Job description: ',
              (0, _reactHtmlParser2.default)(each.description)
            )
          )
        )
      );
    })
  );
};

exports.default = SearchResults;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    padding: 24px;\n    width: 100%;\n    height: 100%;\n    background-color: #fff2e6;\n'], ['\n    display: flex;\n    padding: 24px;\n    width: 100%;\n    height: 100%;\n    background-color: #fff2e6;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

exports.default = Container;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    font-family: \'Helvetica\';\n'], ['\n    font-family: \'Helvetica\';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents2.default.div(_templateObject);

exports.default = Header;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Html = undefined;

var _html = __webpack_require__(15);

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Html = _html2.default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _serializeJavascript = __webpack_require__(16);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function Html(title, bundle, data, styles, body) {
    return '\n    <!DOCTYPE html>\n    <html>\n        <head>\n            <title>' + title + '</title>\n            ' + styles + '\n            <script src="' + bundle + '" defer></script>\n            <script>window.__INITIAL_DATA__ = ' + (0, _serializeJavascript2.default)(data) + '</script>\n        </head>\n\n        <body>\n            <div id="app">' + body + '</div>\n        </body>\n    </html>\n';
};

exports.default = Html;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PORT = exports.PORT = process.env.PORT || 3000;
var APP_TITLE = exports.APP_TITLE = "React SSR & Router v4 Example";
var BUNDLE_PATH = exports.BUNDLE_PATH = "./bundle.js";
var DEFAULT_LOCATION = exports.DEFAULT_LOCATION = "London";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      _components.Header,
      null,
      _react2.default.createElement(
        'h1',
        null,
        'About us'
      )
    ),
    _react2.default.createElement(
      _components.AboutText,
      null,
      _react2.default.createElement(
        'p',
        null,
        'Just some static content with information on how the company has a long tradition and is trustworthy.'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel viverra ante. Nam porttitor turpis ornare, sodales turpis vel, pulvinar ante. Maecenas hendrerit ipsum arcu, congue consectetur dolor posuere eu. Nullam sem justo, vulputate sed mauris eget, molestie aliquet eros. Aliquam quis augue nibh. Nam eu augue vitae mi accumsan aliquam ac molestie sapien. Integer iaculis metus eu leo aliquam, vel aliquam arcu vehicula. Nam ut justo non arcu rutrum hendrerit ac aliquet dolor. Nulla tellus augue, condimentum in elit eu, rutrum tincidunt diam. Duis et felis interdum, sollicitudin tellus quis, condimentum magna. Nam luctus risus non urna eleifend, non imperdiet justo porttitor. Curabitur consectetur ac eros sit amet maximus. Aliquam eu vestibulum mauris.'
      )
    )
  );
};

exports.default = About;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: block;\n    padding: 24px;\n    width: 100%;\n    height: 100%;\n    background-color: #eeeeee;\n'], ['\n    display: block;\n    padding: 24px;\n    width: 100%;\n    height: 100%;\n    background-color: #eeeeee;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AboutText = _styledComponents2.default.div(_templateObject);

exports.default = AboutText;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHtmlParser = __webpack_require__(10);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Summary = function Summary(props) {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      _components.Header,
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Search summary'
      )
    ),
    props.queryData.map(function (each) {
      return _react2.default.createElement(
        'div',
        { key: each.id, className: 'parent-container' },
        _react2.default.createElement(
          _components.JobCard,
          null,
          _react2.default.createElement(
            'div',
            { className: 'search-result' },
            _react2.default.createElement(
              'h2',
              { className: 'title' },
              each.title
            ),
            _react2.default.createElement(
              'p',
              { className: 'date' },
              each.created_at
            ),
            _react2.default.createElement(
              'p',
              { className: 'type' },
              'Type: ',
              each.type
            )
          )
        )
      );
    })
  );
};

exports.default = Summary;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: block;\n    padding: 24px;\n    margin: 2px;\n    width: 100%;\n    background-color: #2e899b;\n'], ['\n    display: block;\n    padding: 24px;\n    margin: 2px;\n    width: 100%;\n    background-color: #2e899b;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var JobCard = _styledComponents2.default.div(_templateObject);

exports.default = JobCard;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

var _styledComponents = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(13);

__webpack_require__(7);

var _App = __webpack_require__(8);

var _App2 = _interopRequireDefault(_App);

var _constants = __webpack_require__(17);

var constants = _interopRequireWildcard(_constants);

var _lib = __webpack_require__(14);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Here is the homework part:
    --------------------------
    
    1) Add two new components:

        a. Summary
        b. About

    Which will act as a routes for the application. Under "Summary",
    we should get overview of our search results made on initial page visit.
    The data returned is up to you!

    The "About" component should render some static data about the application.

    BOTH components should be styled by applying some StyledComponents, with
    css rendered server side.

    2) Add a simple router to the app, which will work as follows:

        a. When visiting http://localhost:3000/summary the "Summary" will be rendered
        with proper content

        b. Similarly, when hitting the http://localhost:3000/about, we should get
        "About" component rednered with the static content.

    USEFUL LINKS:

        Medium:
            https://medium.com/@phoebe.greig/headache-free-isomorphic-app-tutorial-react-js-react-router-node-js-ssr-with-state-and-es6-797a8d8e493a
            https://crypt.codemancers.com/posts/2017-06-03-reactjs-server-side-rendering-with-router-v4-and-redux/
        
        React Training:
            https://reacttraining.com/react-router/web/guides/server-rendering

        YouTube:
            https://www.youtube.com/watch?v=duhudXkHRf4
            https://www.youtube.com/watch?v=mZEv4mHsU5E

    I encourage you to take the full liberty on how it might be done. The only requirement
    is simple: it must work!

    Good luck!
*/

exports.default = function (req, res) {
    var APP_TITLE = constants.APP_TITLE,
        BUNDLE_PATH = constants.BUNDLE_PATH,
        DEFAULT_LOCATION = constants.DEFAULT_LOCATION;

    var sheet = new _styledComponents.ServerStyleSheet();

    var render = function render(jsonData) {
        var markup = (0, _server.renderToString)(sheet.collectStyles(_react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { context: {}, location: req.url },
            _react2.default.createElement(_App2.default, { data: jsonData })
        )));
        var styles = sheet.getStyleTags();
        res.send((0, _lib.Html)(APP_TITLE, BUNDLE_PATH, jsonData, styles, markup));
    };

    switch (true) {
        case /^\/about$/.test(req.url):
            render();
            break;
        default:
            fetch('https://jobs.github.com/positions.json?description=javascript&location=' + DEFAULT_LOCATION).then(function (response) {
                return response.json();
            }).then(function (jsonData) {
                render(jsonData);
            });
    }
};

/***/ })
/******/ ]);