"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TranslateModule = undefined;

var _translate = require("./src/translate.loader");

Object.keys(_translate).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _translate[key];
        }
    });
});

var _translate2 = require("./src/translate.service");

Object.keys(_translate2).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _translate2[key];
        }
    });
});

var _missingTranslationHandler = require("./src/missing-translation-handler");

Object.keys(_missingTranslationHandler).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _missingTranslationHandler[key];
        }
    });
});

var _translate3 = require("./src/translate.parser");

Object.keys(_translate3).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _translate3[key];
        }
    });
});

var _translate4 = require("./src/translate.compiler");

Object.keys(_translate4).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _translate4[key];
        }
    });
});

var _translate5 = require("./src/translate.directive");

Object.keys(_translate5).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _translate5[key];
        }
    });
});

var _translate6 = require("./src/translate.pipe");

Object.keys(_translate6).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _translate6[key];
        }
    });
});

var _core = require("@angular/core");

var _translate7 = require("./src/translate.store");

var TranslateModule = function () {
    function TranslateModule() {}
    /**
     * Use this method in your root module to provide the TranslateService
     * @param {TranslateModuleConfig} config
     * @returns {ModuleWithProviders}
     */
    TranslateModule.forRoot = function (config) {
        if (config === void 0) {
            config = {};
        }
        return {
            ngModule: TranslateModule,
            providers: [config.loader || { provide: _translate.TranslateLoader, useClass: _translate.TranslateFakeLoader }, config.compiler || { provide: _translate4.TranslateCompiler, useClass: _translate4.TranslateFakeCompiler }, config.parser || { provide: _translate3.TranslateParser, useClass: _translate3.TranslateDefaultParser }, config.missingTranslationHandler || { provide: _missingTranslationHandler.MissingTranslationHandler, useClass: _missingTranslationHandler.FakeMissingTranslationHandler }, _translate7.TranslateStore, { provide: _translate2.USE_STORE, useValue: config.isolate }, { provide: _translate2.USE_DEFAULT_LANG, useValue: config.useDefaultLang }, _translate2.TranslateService]
        };
    };
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {TranslateModuleConfig} config
     * @returns {ModuleWithProviders}
     */
    TranslateModule.forChild = function (config) {
        if (config === void 0) {
            config = {};
        }
        return {
            ngModule: TranslateModule,
            providers: [config.loader || { provide: _translate.TranslateLoader, useClass: _translate.TranslateFakeLoader }, config.compiler || { provide: _translate4.TranslateCompiler, useClass: _translate4.TranslateFakeCompiler }, config.parser || { provide: _translate3.TranslateParser, useClass: _translate3.TranslateDefaultParser }, config.missingTranslationHandler || { provide: _missingTranslationHandler.MissingTranslationHandler, useClass: _missingTranslationHandler.FakeMissingTranslationHandler }, { provide: _translate2.USE_STORE, useValue: config.isolate }, { provide: _translate2.USE_DEFAULT_LANG, useValue: config.useDefaultLang }, _translate2.TranslateService]
        };
    };
    return TranslateModule;
}();
exports.TranslateModule = TranslateModule;

TranslateModule.decorators = [{ type: _core.NgModule, args: [{
        declarations: [_translate6.TranslatePipe, _translate5.TranslateDirective],
        exports: [_translate6.TranslatePipe, _translate5.TranslateDirective]
    }] }];
/** @nocollapse */
TranslateModule.ctorParameters = function () {
    return [];
};
