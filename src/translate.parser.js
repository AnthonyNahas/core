"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TranslateDefaultParser = exports.TranslateParser = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _util = require("./util");

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var TranslateParser = function () {
    function TranslateParser() {}
    return TranslateParser;
}();
exports.TranslateParser = TranslateParser;

var TranslateDefaultParser = function (_super) {
    __extends(TranslateDefaultParser, _super);
    function TranslateDefaultParser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
        return _this;
    }
    TranslateDefaultParser.prototype.interpolate = function (expr, params) {
        var result;
        if (typeof expr === 'string') {
            result = this.interpolateString(expr, params);
        } else if (typeof expr === 'function') {
            result = this.interpolateFunction(expr, params);
        } else {
            // this should not happen, but an unrelated TranslateService test depends on it
            result = expr;
        }
        return result;
    };
    TranslateDefaultParser.prototype.getValue = function (target, key) {
        var keys = key.split('.');
        key = '';
        do {
            key += keys.shift();
            if ((0, _util.isDefined)(target) && (0, _util.isDefined)(target[key]) && (_typeof(target[key]) === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            } else if (!keys.length) {
                target = undefined;
            } else {
                key += '.';
            }
        } while (keys.length);
        return target;
    };
    TranslateDefaultParser.prototype.interpolateFunction = function (fn, params) {
        return fn(params);
    };
    TranslateDefaultParser.prototype.interpolateString = function (expr, params) {
        var _this = this;
        if (!params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, function (substring, b) {
            var r = _this.getValue(params, b);
            return (0, _util.isDefined)(r) ? r : substring;
        });
    };
    return TranslateDefaultParser;
}(TranslateParser);
exports.TranslateDefaultParser = TranslateDefaultParser;

TranslateDefaultParser.decorators = [{ type: _core.Injectable }];
/** @nocollapse */
TranslateDefaultParser.ctorParameters = function () {
    return [];
};