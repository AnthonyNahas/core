"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TranslateFakeCompiler = exports.TranslateCompiler = undefined;

var _core = require("@angular/core");

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

var TranslateCompiler = function () {
    function TranslateCompiler() {}
    return TranslateCompiler;
}();
exports.TranslateCompiler = TranslateCompiler;
/**
 * This compiler is just a placeholder that does nothing, in case you don't need a compiler at all
 */

var TranslateFakeCompiler = function (_super) {
    __extends(TranslateFakeCompiler, _super);
    function TranslateFakeCompiler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TranslateFakeCompiler.prototype.compile = function (value, lang) {
        return value;
    };
    TranslateFakeCompiler.prototype.compileTranslations = function (translations, lang) {
        return translations;
    };
    return TranslateFakeCompiler;
}(TranslateCompiler);
exports.TranslateFakeCompiler = TranslateFakeCompiler;

TranslateFakeCompiler.decorators = [{ type: _core.Injectable }];
/** @nocollapse */
TranslateFakeCompiler.ctorParameters = function () {
    return [];
};