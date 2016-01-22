'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isObject2 = require('lodash/isObject');

var _isObject3 = _interopRequireDefault(_isObject2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _makeConfiguration = require('./makeConfiguration');

var _makeConfiguration2 = _interopRequireDefault(_makeConfiguration);

var _isIterable = require('./isIterable');

var _isIterable2 = _interopRequireDefault(_isIterable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateAppendClassName = undefined,
    _linkClass = undefined,
    parseStyleName = undefined;

parseStyleName = function parseStyleName(styleNamePropertyValue, allowMultiple) {
    var styleNames = undefined;

    styleNames = styleNamePropertyValue.split(' ');
    styleNames = (0, _filter3.default)(styleNames);

    if (allowMultiple === false && styleNames.length > 1) {
        throw new Error('ReactElement styleName property defines multiple module names ("' + styleNamePropertyValue + '").');
    }

    return styleNames;
};

generateAppendClassName = function generateAppendClassName(styles, styleNames, errorWhenNotFound) {
    var appendClassName = undefined;

    appendClassName = '';

    appendClassName = (0, _map3.default)(styleNames, function (styleName) {
        if (styles[styleName]) {
            return styles[styleName];
        } else {
            if (errorWhenNotFound === true) {
                throw new Error('"' + styleName + '" CSS module is undefined.');
            }

            return '';
        }
    });

    appendClassName = (0, _filter3.default)(appendClassName, 'length');

    appendClassName = appendClassName.join(' ');

    return appendClassName;
};

/**
 * @param {ReactElement} element
 * @param {Object} styles CSS modules class map.
 * @param {CSSModules~Options} userConfiguration
 * @returns {ReactElement}
 */
_linkClass = function linkClass(element) {
    var styles = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var userConfiguration = arguments[2];

    var appendClassName = undefined,
        children = undefined,
        clonedElement = undefined,
        configuration = undefined,
        newChildren = undefined,
        newProps = undefined,
        styleNames = undefined;

    // @see https://github.com/gajus/react-css-modules/pull/30
    if (!(0, _isObject3.default)(element)) {
        return element;
    }

    configuration = (0, _makeConfiguration2.default)(userConfiguration);

    styleNames = parseStyleName(element.props.styleName || '', configuration.allowMultiple);

    if (styleNames.length) {
        appendClassName = generateAppendClassName(styles, styleNames, configuration.errorWhenNotFound);
    }

    // element.props.children can be one of the following:
    // 'text'
    // ['text']
    // [ReactElement, 'text']
    // ReactElement

    children = element.props.children;

    if (_react2.default.isValidElement(children)) {
        newChildren = _linkClass(_react2.default.Children.only(children), styles, configuration);
    } else if ((0, _isArray3.default)(children) || (0, _isIterable2.default)(children)) {
        /* eslint-disable lodash3/prefer-lodash-method */
        newChildren = _react2.default.Children.map(children, function (node) {
            /* eslint-enable lodash3/prefer-lodash-method */
            if (_react2.default.isValidElement(node)) {
                return _linkClass(node, styles, configuration);
            } else {
                return node;
            }
        });

        // https://github.com/facebook/react/issues/4723#issuecomment-135555277
        // Forcing children into an array produces the following error:
        // Warning: A ReactFragment is an opaque type. Accessing any of its properties is deprecated. Pass it to one of the React.Children helpers.
        // newChildren = _.values(newChildren);
    }

    if (appendClassName) {
        if (element.props.className) {
            appendClassName = element.props.className + ' ' + appendClassName;
        }

        newProps = {
            className: appendClassName,
            styleName: null
        };
    }

    if (newChildren) {
        clonedElement = _react2.default.cloneElement(element, newProps, newChildren);
    } else {
        clonedElement = _react2.default.cloneElement(element, newProps);
    }

    return clonedElement;
};

exports.default = _linkClass;
module.exports = exports['default'];
//# sourceMappingURL=linkClass.js.map
