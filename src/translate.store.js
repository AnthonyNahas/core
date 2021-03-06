"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranslateStore = undefined;

var _core = require("@angular/core");

var TranslateStore = function () {
  function TranslateStore() {
    /**
     * The lang currently used
     * @type {string}
     */
    this.currentLang = this.defaultLang;
    /**
     * a list of translations per lang
     * @type {{}}
     */
    this.translations = {};
    /**
     * an array of langs
     * @type {Array}
     */
    this.langs = [];
    /**
     * An EventEmitter to listen to translation change events
     * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
     *     // do something
     * });
     * @type {EventEmitter<TranslationChangeEvent>}
     */
    this.onTranslationChange = new _core.EventEmitter();
    /**
     * An EventEmitter to listen to lang change events
     * onLangChange.subscribe((params: LangChangeEvent) => {
     *     // do something
     * });
     * @type {EventEmitter<LangChangeEvent>}
     */
    this.onLangChange = new _core.EventEmitter();
    /**
     * An EventEmitter to listen to default lang change events
     * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
     *     // do something
     * });
     * @type {EventEmitter<DefaultLangChangeEvent>}
     */
    this.onDefaultLangChange = new _core.EventEmitter();
  }
  return TranslateStore;
}();
exports.TranslateStore = TranslateStore;