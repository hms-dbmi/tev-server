/*! phovea_core - v0.0.1-20161023-19347 - 2016
* https://phovea.caleydo.org
* Copyright (c) 2016 The Caleydo Team; Licensed BSD-3-Clause*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["core"] = factory();
	else
		root["phovea"] = root["phovea"] || {}, root["phovea"]["core"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(exports, "offline", function() { return offline; });
/* harmony export (binding) */ __webpack_require__.d(exports, "server_url", function() { return server_url; });
/* harmony export (binding) */ __webpack_require__.d(exports, "server_json_suffix", function() { return server_json_suffix; });
/* harmony export (immutable) */ exports["init"] = init;
/* harmony export (immutable) */ exports["mixin"] = mixin;
/* harmony export (immutable) */ exports["isUndefined"] = isUndefined;
/* harmony export (immutable) */ exports["mod"] = mod;
/* harmony export (immutable) */ exports["bind"] = bind;
/* harmony export (immutable) */ exports["getter"] = getter;
/* harmony export (immutable) */ exports["isFunction"] = isFunction;
/* harmony export (immutable) */ exports["identity"] = identity;
/* harmony export (immutable) */ exports["noop"] = noop;
/* harmony export (immutable) */ exports["constant"] = constant;
/* harmony export (immutable) */ exports["constantTrue"] = constantTrue;
/* harmony export (immutable) */ exports["constantFalse"] = constantFalse;
/* harmony export (immutable) */ exports["callable"] = callable;
/* harmony export (immutable) */ exports["search"] = search;
/* harmony export (immutable) */ exports["indexOf"] = indexOf;
/* harmony export (immutable) */ exports["argList"] = argList;
/* harmony export (immutable) */ exports["argSort"] = argSort;
/* harmony export (immutable) */ exports["argFilter"] = argFilter;
/* harmony export (immutable) */ exports["randomId"] = randomId;
/* harmony export (binding) */ __webpack_require__.d(exports, "random_id", function() { return random_id; });
/* harmony export (immutable) */ exports["fixId"] = fixId;
/* harmony export (binding) */ __webpack_require__.d(exports, "fix_id", function() { return fix_id; });
/* harmony export (immutable) */ exports["onDOMNodeRemoved"] = onDOMNodeRemoved;
/* harmony export (immutable) */ exports["uniqueId"] = uniqueId;
/* harmony export (immutable) */ exports["flagId"] = flagId;
/* harmony export (immutable) */ exports["uniqueString"] = uniqueString;
/* harmony export (immutable) */ exports["extendClass"] = extendClass;
/* harmony export (binding) */ __webpack_require__.d(exports, "IdPool", function() { return IdPool; });
/* harmony export (binding) */ __webpack_require__.d(exports, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(exports, "param", function() { return param; });
/* harmony export (immutable) */ exports["delayedCall"] = delayedCall;
/* harmony export (immutable) */ exports["offset"] = offset;
/* harmony export (immutable) */ exports["bounds"] = bounds;
/* harmony export (immutable) */ exports["hasDnDType"] = hasDnDType;
/* harmony export (immutable) */ exports["copyDnD"] = copyDnD;
/* harmony export (immutable) */ exports["updateDropEffect"] = updateDropEffect;
/* harmony export (immutable) */ exports["resolveIn"] = resolveIn;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var version = "0.0.1-20161023-19347";
/**
 * whether the standard api calls should be prevented
 * @type {boolean}
 */
var offline = false;
/**
 * server prefix ofr api calls
 * @type {string}
 */
var server_url = '/api';
/**
 * server suffix for api calls
 * @type {string}
 */
var server_json_suffix = '';
/**
 * initializes certain properties of the core
 * @param config
 */
function init(config) {
    if (config === void 0) { config = {}; }
    config = mixin({
        offline: offline,
        server_url: server_url,
        server_json_suffix: server_json_suffix
    }, config);
    offline = config.offline;
    server_url = config.server_url;
    server_json_suffix = config.server_json_suffix;
}
/**
 * initializes itself based on script data attributes
 * @private
 */
function _init() {
    function find(name, camelCaseName) {
        if (camelCaseName === void 0) { camelCaseName = name.slice(0, 1).toUpperCase() + name.slice(1); }
        var node = document.currentScript || document.querySelector("script[data-phovea-" + name + "]");
        if (!node) {
            return undefined;
        }
        return node.dataset['phovea' + camelCaseName];
    }
    var config = {};
    if ('true' === find('offline')) {
        config.offline = true;
    }
    var v;
    if ((v = find('server-url', 'ServerUrl')) !== undefined) {
        config.server_url = v;
    }
    if ((v = find('server-json-suffix', 'ServerJsonSuffix')) !== undefined) {
        config.server_json_suffix = v;
    }
    //init myself
    init(config);
}
_init();
/**
 * integrate b into a and override all duplicates
 * @param {Object} a
 * @param {Object} b
 * @returns {Object} a with extended b
 */
function mixin(a) {
    var bs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bs[_i - 1] = arguments[_i];
    }
    function extend(r, b) {
        Object.keys(b).forEach(function (key) {
            var v = b[key];
            if (Object.prototype.toString.call(v) === '[object Object]') {
                r[key] = (r[key] != null) ? extend(r[key], v) : v;
            }
            else {
                r[key] = v;
            }
        });
        return r;
    }
    bs.forEach(function (b) {
        if (b) {
            a = extend(a, b);
        }
    });
    return a;
}
/**
 * @deprecated use obj === undefined directly
 * @param obj
 * @return {boolean}
 */
function isUndefined(obj) {
    return typeof obj === 'undefined';
}
//fixes a javascript bug on using "%" with negative numbers
function mod(n, m) {
    return ((n % m) + m) % m;
}
/**
 * binds the given function to the given context / this arg
 * @deprecated use Function.prototype.bind directly
 * @param f
 * @param thisArg
 * @returns {function(): any}
 */
function bind(f, thisArg) {
    var _this = this;
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return function () {
        var largs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            largs[_i - 0] = arguments[_i];
        }
        return f.apply(thisArg ? thisArg : _this, args.concat(largs));
    };
}
function getter() {
    var attr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        attr[_i - 0] = arguments[_i];
    }
    if (attr.length === 1) {
        return function (obj) { return obj[attr[0]]; };
    }
    return function (obj) { return attr.map(function (a) { return obj[a]; }); };
}
/**
 * @deprecated use `typeof(f) === 'function`
 * @param f
 * @return {boolean}
 */
function isFunction(f) {
    return typeof (f) === 'function';
}
/**
 * @deprecated use `(d) => d`
 * identity function
 */
function identity(d) {
    return d;
}
/**
 * a dummy function, which does exactly nothing, i.e. used as default
 * @deprecated use `()=>undefined`
 */
function noop() {
    //no op
}
/**
 * just returns the argument in any case
 * @deprecated use `() => x`
 * @param r - the value to return
 * @returns {*}
 */
function constant(r) {
    if (typeof r === 'boolean' && r === true) {
        return constantTrue;
    }
    if (typeof r === 'boolean' && r === false) {
        return constantFalse;
    }
    return function () { return r; };
}
/**
 * special constant function which returns always true, i.e., as a default for a filter function
 * @deprecated use ()=>true
 * @returns {boolean}
 */
function constantTrue() {
    return true;
}
/**
 * special constant function which returns always false, i.e., as a default for a filter function
 * @deprecated use ()=>false
 * @returns {boolean}
 */
function constantFalse() {
    return false;
}
/**
 * copies a plain object into a function and call a specific method onto direct call
 * @param obj - the
 * @param f
 * @deprecated
 */
function callable(obj, f) {
    //assert this.isPlainObject(obj);
    function CallAbleFactory() {
        var that;
        function CallAble() {
            that[f].apply(that, argList(arguments));
        }
        that = CallAble;
        mixin(CallAble, obj);
        return CallAble;
    }
    return CallAbleFactory;
}
/**
 * search item in array by function
 * @param arr
 * @param f
 * @deprecated use Array.prototype.find
 * @return {T}
 */
function search(arr, f) {
    var r = undefined;
    arr.some(function (v) {
        if (f(v)) {
            r = v;
            return true;
        }
        return false;
    });
    return r;
}
/**
 *
 * @deprecated use Array.prototype.findIndex
 * @param arr
 * @param f
 * @return {number}
 */
function indexOf(arr, f) {
    var r = -1;
    arr.some(function (v, i) {
        if (f(v)) {
            r = i;
            return true;
        }
        return false;
    });
    return r;
}
/**
 * converts the given arguments object into an array
 * @param args
 * @deprecated use Array.from(arguments) instead
 * @returns {*|Array}
 */
function argList(args) {
    if (arguments.length > 1) {
        return Array.prototype.slice.call(arguments);
    }
    else {
        return Array.prototype.slice.call(args);
    }
}
/**
 * array with indices of 0...n-1
 * @param n
 * @returns {any[]}
 */
function indexRange(n) {
    //http://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n
    return Array.apply(null, { length: n }).map(Number.call, Number);
}
/**
 * returns the sorted indices of this array, when sorting by the given function
 * @param arr
 * @param compareFn
 * @param thisArg
 */
function argSort(arr, compareFn, thisArg) {
    var indices = indexRange(arr.length);
    return indices.sort(function (a, b) {
        return compareFn.call(thisArg, arr[a], arr[b]);
    });
}
/**
 * returns the indices, which remain when filtering the given array
 * @param arr
 * @param callbackfn
 * @param thisArg
 */
function argFilter(arr, callbackfn, thisArg) {
    var indices = indexRange(arr.length);
    return indices.filter(function (value, index) {
        return callbackfn.call(thisArg, arr[value], index);
    });
}
/**
 * generates a random id of the given length
 * @param length length of the id
 * @returns {string}
 */
function randomId(length) {
    if (length === void 0) { length = 8; }
    var id = '';
    while (id.length < length) {
        id += Math.random().toString(36).slice(-8);
    }
    return id.substr(0, length);
}
var random_id = randomId;
/**
 * fixes a given name by converting it to plain camelcase
 * @param name
 * @return {string}
 */
function fixId(name) {
    var clean = name.replace(/[\s!#$%&'()*+,.\/:;<=>?@\[\\\]\^`{|}~_-]/g, ' ');
    var words = clean.trim().split(/\s+/); //remove heading and trailing spaces and combine multiple one during split
    return words.map(function (w, i) { return (i === 0 ? w[0].toLowerCase() : w[0].toUpperCase()) + w.slice(1); }).join('');
}
var fix_id = fixId;
/**
 * utility function to get notified, when the given dom element is removed from its parent
 * @param node
 * @param callback
 */
function onDOMNodeRemoved(node, callback, thisArg) {
    var arr;
    var body = document.getElementsByTagName('body')[0];
    if (!Array.isArray(node)) {
        arr = [node];
    }
    else {
        arr = node;
    }
    arr.forEach(function (n) {
        function l(evt) {
            //since this event bubbles check if it the right node
            var act = n;
            while (act) {
                if (evt.target === act) {
                    node = null;
                    n.removeEventListener('DOMNodeRemoved', l);
                    body.removeEventListener('DOMNodeRemoved', l);
                    callback.call(thisArg, n);
                    return;
                }
                act = act.parentNode;
            }
        }
        n.addEventListener('DOMNodeRemoved', l);
        body.addEventListener('DOMNodeRemoved', l);
    });
}
// TODO convert to Map
/**
 * unique id container
 * @type {{}}
 */
var idCounter = {};
/**
 * returns a unique id for the given domain
 * @param domain
 * @return {number}
 */
function uniqueId(domain) {
    if (domain === void 0) { domain = '_default'; }
    if (!idCounter.hasOwnProperty(domain)) {
        idCounter[domain] = 0;
    }
    return idCounter[domain]++;
}
function flagId(domain, id) {
    if (isNaN(id) || id < 0) {
        return id;
    }
    if (!idCounter.hasOwnProperty(domain)) {
        idCounter[domain] = id + 1;
    }
    else {
        idCounter[domain] = Math.max(idCounter[domain], id + 1); //use the next one afterwars
    }
    return id;
}
/**
 * returns a string, which is a unique id for the given domain
 * @param domain
 * @return {string}
 */
function uniqueString(domain) {
    if (domain === void 0) { domain = '_default'; }
    return domain + uniqueId(domain);
}
/**
 * extends class copied from TypeScript compiler
 * @param subClass
 * @param baseClass
 */
function extendClass(subClass, baseClass) {
    for (var p in baseClass) {
        if (baseClass.hasOwnProperty(p)) {
            subClass[p] = baseClass[p];
        }
    }
    /* tslint:disable:no-unused-variable */
    function __() {
        this.constructor = subClass;
    }
    __.prototype = baseClass.prototype;
    subClass.prototype = new __();
    /* tslint:enable:no-unused-variable */
}
/**
 * utility class for handling a bunch of reuseable ids
 */
var IdPool = (function () {
    function IdPool() {
        this.counter = 0;
        this.free = [];
    }
    /**
     * check out a new id
     * @return {*}
     */
    IdPool.prototype.checkOut = function () {
        if (this.free.length === 0) {
            return this.counter++;
        }
        else {
            return this.free.shift();
        }
    };
    /**
     * returns an id again
     * @param id
     */
    IdPool.prototype.checkIn = function (id) {
        //returned the last one, can decrease the counter
        if (id === this.counter - 1) {
            this.counter--;
        }
        else {
            this.free.push(id);
        }
    };
    /**
     * whether the given id is used
     * @param id
     * @return {boolean}
     */
    IdPool.prototype.isCheckedOut = function (id) {
        //smaller than counter and not a free one
        return id < this.counter && this.free.indexOf(id) < 0;
    };
    Object.defineProperty(IdPool.prototype, "size", {
        /**
         * return the number of checked out ids
         * @return {number}
         */
        get: function () {
            return this.counter - this.free.length;
        },
        enumerable: true,
        configurable: true
    });
    return IdPool;
}());
var PropertyHandler = (function () {
    function PropertyHandler(code) {
        // TODO convert to Map
        this.map = {};
        if (code) {
            this.parse(code);
        }
    }
    /**
     * returns the contained keys of this property handler
     * @returns {string[]}
     */
    PropertyHandler.prototype.keys = function () {
        return Object.keys(this.map);
    };
    /**
     * iterate over each entry in the map
     * @param f
     */
    PropertyHandler.prototype.forEach = function (f) {
        var _this = this;
        return Object.keys(this.map).forEach(function (k) { return f(k, _this.map[k]); });
    };
    /**
     * whether the given name is defined i.e., not null
     * @param name
     * @returns {boolean}
     */
    PropertyHandler.prototype.is = function (name) {
        return this.getProp(name, null) != null;
    };
    /**
     * returns the given value with optional default value
     * @param name
     * @param default_
     * @returns {any}
     */
    PropertyHandler.prototype.getProp = function (name, default_) {
        if (default_ === void 0) { default_ = null; }
        if (this.map.hasOwnProperty(name)) {
            return this.map[name];
        }
        return default_;
    };
    /**
     * returns the given integer value with optinal default, the value itself might be encoded to safe space
     * @param name
     * @param default_
     * @returns {number}
     */
    PropertyHandler.prototype.getInt = function (name, default_) {
        if (default_ === void 0) { default_ = NaN; }
        var l = this.getProp(name, null);
        if (l === null) {
            return default_;
        }
        if (l.match(/[0-9-.]/) != null) {
            return parseInt(l, 10);
        }
        return parseInt(l, 36);
    };
    /**
     * removes the property from the map
     * @param name
     * @returns {boolean}
     */
    PropertyHandler.prototype.removeProp = function (name) {
        if (this.map.hasOwnProperty(name)) {
            delete this.map[name];
            return true;
        }
        return false;
    };
    PropertyHandler.prototype.toString = function () {
        var _this = this;
        var r = [];
        Object.keys(this.map).forEach(function (key) {
            r.push(encodeURIComponent(key) + '=' + encodeURIComponent(_this.map[key]));
        });
        return r.join('&');
    };
    PropertyHandler.prototype.parse = function (code) {
        var _this = this;
        if (code === void 0) { code = ''; }
        //if available use https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
        this.map = {};
        if (code.length <= 1) {
            return;
        }
        //http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript/21152762#21152762
        code.substr(1).split('&').forEach(function (item) {
            var s = item.split('='), k = decodeURIComponent(s[0]), v = s[1] && decodeURIComponent(s[1]);
            if (k in _this.map) {
                var old = _this.map[k];
                if (!Array.isArray(old)) {
                    _this.map[k] = [old, v];
                }
                else {
                    _this.map[k].push(v);
                }
            }
            else {
                _this.map[k] = v;
            }
        });
    };
    return PropertyHandler;
}());
/**
 * manages the hash location property helper
 */
var HashProperties = (function (_super) {
    __extends(HashProperties, _super);
    function HashProperties() {
        var _this = this;
        _super.call(this);
        this.updated = function () {
            _this.parse(location.hash);
        };
        this.map = history.state;
        if (!this.map) {
            this.parse(location.hash);
        }
        window.addEventListener('hashchange', this.updated, false);
    }
    HashProperties.prototype.setInt = function (name, value, update) {
        if (update === void 0) { update = true; }
        var v = String(value);
        if (value > 100) {
            //idea encode the the using a different radix
            v = value.toString(36);
        }
        this.setProp(name, String(value), update);
    };
    HashProperties.prototype.setProp = function (name, value, update) {
        if (update === void 0) { update = true; }
        this.map[name] = value;
        if (update) {
            this.update();
        }
    };
    HashProperties.prototype.removeProp = function (name, update) {
        if (update === void 0) { update = true; }
        if (this.map.hasOwnProperty(name)) {
            delete this.map[name];
            if (update) {
                this.update();
            }
            return true;
        }
        return false;
    };
    HashProperties.prototype.update = function () {
        window.removeEventListener('hashchange', this.updated, false);
        history.pushState(this.map, 'State ' + Date.now(), '#' + this.toString());
        window.addEventListener('hashchange', this.updated, false);
    };
    return HashProperties;
}(PropertyHandler));
/**
 * access to hash parameters and set them, too
 * @type {HashProperties}
 */
var hash = new HashProperties();
/**
 * access to get parameters
 * @type {PropertyHandler}
 */
var param = new PropertyHandler(location.search);
/**
 * create a delayed call, can be called multiple times but only the last one at most delayed by timeToDelay will be executed
 * @param callback
 * @param thisCallback
 * @param timeToDelay
 * @return {function(...[any]): undefined}
 */
function delayedCall(callback, timeToDelay, thisCallback) {
    if (timeToDelay === void 0) { timeToDelay = 100; }
    if (thisCallback === void 0) { thisCallback = this; }
    var tm = -1;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (tm >= 0) {
            clearTimeout(tm);
            tm = -1;
        }
        args.unshift(thisCallback);
        tm = setTimeout(callback.bind.apply(callback, args), timeToDelay);
    };
}
/**
 * computes the absolute offset of the given element
 * @param element
 * @return {{left: number, top: number, width: number, height: number}}
 */
function offset(element) {
    if (!element) {
        return { left: 0, top: 0, width: 0, height: 0 };
    }
    var obj = element.getBoundingClientRect();
    return {
        left: obj.left + window.pageXOffset,
        top: obj.top + window.pageYOffset,
        width: obj.width,
        height: obj.height
    };
}
/**
 * returns the bounding box of a given element similar to offset
 * @param element
 * @returns {{x: number, y: number, w: number, h: number}}
 */
function bounds(element) {
    if (!element) {
        return { x: 0, y: 0, w: 0, h: 0 };
    }
    var obj = element.getBoundingClientRect();
    return {
        x: obj.left,
        y: obj.top,
        w: obj.width,
        h: obj.height
    };
}
/**
 * utility for drag-n-drop support
 * @param e
 * @param type
 * @returns {any}
 */
function hasDnDType(e, type) {
    var types = e.dataTransfer.types;
    /*
     * In Chrome datatransfer.types is an Array,
     * while in Firefox it is a DOMStringList
     * that only implements a contains-method!
     */
    if (isFunction(types.indexOf)) {
        return types.indexOf(type) >= 0;
    }
    if (isFunction(types.includes)) {
        return types.includes(type);
    }
    if (isFunction(types.contains)) {
        return types.contains(type);
    }
    return false;
}
/**
 * checks whether it is a copy operation
 * @param e
 * @returns {boolean|RegExpMatchArray}
 */
function copyDnD(e) {
    var dT = e.dataTransfer;
    return (e.ctrlKey && dT.effectAllowed.match(/copy/gi)) || (!dT.effectAllowed.match(/move/gi));
}
/**
 * updates the drop effect accoriding to the current copyDnD state
 * @param e
 */
function updateDropEffect(e) {
    var dT = e.dataTransfer;
    if (copyDnD(e)) {
        dT.dropEffect = 'copy';
    }
    else {
        dT.dropEffect = 'move';
    }
}
/**
 * returns a promise that resolves in the given number of milliseconds
 * @param milliseconds the number of milliseconds to resolve
 */
function resolveIn(milliseconds) {
    if (milliseconds <= 0) {
        return Promise.resolve(null);
    }
    return new Promise(function (resolve) {
        setTimeout(resolve, milliseconds);
    });
}


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iterator__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(exports, "RangeElem", function() { return RangeElem; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SingleRangeElem", function() { return SingleRangeElem; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Range1D", function() { return Range1D; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Range1DGroup", function() { return Range1DGroup; });
/* harmony export (immutable) */ exports["asUngrouped"] = asUngrouped;
/* harmony export (immutable) */ exports["composite"] = composite;
/* harmony export (binding) */ __webpack_require__.d(exports, "CompositeRange1D", function() { return CompositeRange1D; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Range", function() { return Range; });
/* harmony export (immutable) */ exports["all"] = all;
/* harmony export (immutable) */ exports["none"] = none;
/* harmony export (immutable) */ exports["is"] = is;
/* harmony export (immutable) */ exports["range"] = range;
/* harmony export (immutable) */ exports["join"] = join;
/* harmony export (immutable) */ exports["list"] = list;
/* harmony export (immutable) */ exports["parse"] = parse;
/* harmony export (immutable) */ exports["cell"] = cell;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * fix negative indices given the total size
 * @param v
 * @param size
 * @returns {number}
 */
function fix(v, size) {
    return v < 0 ? (size + 1 + v) : v;
}
var RangeElem = (function () {
    function RangeElem(from, to, step) {
        if (to === void 0) { to = -1; }
        if (step === void 0) { step = 1; }
        this.from = from;
        this.to = to;
        this.step = step;
        /*if (step !== 1 && step !== -1) {
          throw new Error('currently just +1 and -1 are valid steps');
        }*/
    }
    Object.defineProperty(RangeElem.prototype, "isAll", {
        get: function () {
            return this.from === 0 && this.to === -1 && this.step === 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeElem.prototype, "isSingle", {
        get: function () {
            return (this.from + this.step) === this.to;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeElem.prototype, "isUnbound", {
        get: function () {
            return this.from < 0 || this.to < 0;
        },
        enumerable: true,
        configurable: true
    });
    RangeElem.all = function () {
        return new RangeElem(0, -1, 1);
    };
    RangeElem.none = function () {
        return new RangeElem(0, 0, 1);
    };
    RangeElem.single = function (val) {
        return new SingleRangeElem(val);
    };
    RangeElem.range = function (from, to, step) {
        if (to === void 0) { to = -1; }
        if (step === void 0) { step = 1; }
        if ((from + step) === to) {
            return RangeElem.single(from);
        }
        return new RangeElem(from, to, step);
    };
    RangeElem.prototype.size = function (size) {
        var t = fix(this.to, size), f = fix(this.from, size);
        if (this.step === 1) {
            return Math.max(t - f, 0);
        }
        else if (this.step === -1) {
            return Math.max(f - t, 0);
        }
        var d = this.step > 0 ? (t - f + 1) : (f - t + 1);
        var s = Math.abs(this.step);
        if (d <= 0) {
            return 0;
        }
        return Math.floor(d / s);
    };
    RangeElem.prototype.clone = function () {
        return new RangeElem(this.from, this.to, this.step);
    };
    RangeElem.prototype.reverse = function () {
        var t = this.from < 0 ? this.from : this.from + 1;
        var f = this.to < 0 ? this.to : this.to - 1;
        return new RangeElem(f, t, -this.step);
    };
    RangeElem.prototype.invert = function (index, size) {
        if (this.isAll) {
            return index;
        }
        return fix(this.from, size) + index * this.step;
    };
    /**
     * creates an iterator of this range
     * @param size the underlying size for negative indices
     */
    RangeElem.prototype.iter = function (size) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__iterator__["range"])(fix(this.from, size), fix(this.to, size), this.step);
    };
    Object.defineProperty(RangeElem.prototype, "__iterator__", {
        get: function () {
            return this.iter();
        },
        enumerable: true,
        configurable: true
    });
    RangeElem.prototype.contains = function (value, size) {
        var f = fix(this.from, size);
        var t = fix(this.to, size);
        if (this.step === -1) {
            return (value <= f) && (value > t);
        }
        else {
            return (value >= f) && (value < t);
        }
    };
    RangeElem.prototype.toString = function () {
        if (this.isAll) {
            return '';
        }
        if (this.isSingle) {
            return this.from.toString();
        }
        var r = this.from + ':' + this.to;
        if (this.step !== 1) {
            r += ':' + this.step;
        }
        return r;
    };
    RangeElem.parse = function (code) {
        if (code.length === 0) {
            return RangeElem.all();
        }
        var parts = code.split(':');
        if (parts.length === 1) {
            return RangeElem.single(parseFloat(parts[0]));
        }
        else if (parts.length === 2) {
            return new RangeElem(parseFloat(parts[0]), parseFloat(parts[1]));
        }
        return new RangeElem(parseFloat(parts[0]), parseFloat(parts[1]), parseFloat(parts[2]));
    };
    return RangeElem;
}());
var SingleRangeElem = (function () {
    function SingleRangeElem(from) {
        this.from = from;
    }
    Object.defineProperty(SingleRangeElem.prototype, "step", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleRangeElem.prototype, "to", {
        get: function () {
            return this.from + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleRangeElem.prototype, "isAll", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleRangeElem.prototype, "isSingle", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleRangeElem.prototype, "isUnbound", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    SingleRangeElem.prototype.size = function (size) {
        return 1;
    };
    SingleRangeElem.prototype.clone = function () {
        return new SingleRangeElem(this.from);
    };
    SingleRangeElem.prototype.contains = function (value, size) {
        return fix(this.from, size) === value;
    };
    SingleRangeElem.prototype.reverse = function () {
        return this.clone();
    };
    SingleRangeElem.prototype.invert = function (index, size) {
        return fix(this.from, size) + index;
    };
    SingleRangeElem.prototype.iter = function (size) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__iterator__["single"])(fix(this.from, size));
    };
    Object.defineProperty(SingleRangeElem.prototype, "__iterator__", {
        get: function () {
            return this.iter();
        },
        enumerable: true,
        configurable: true
    });
    SingleRangeElem.prototype.toString = function () {
        return this.from.toString();
    };
    return SingleRangeElem;
}());
var Range1D = (function () {
    function Range1D(arg) {
        if (arg instanceof Range1D) {
            this.arr = arg.arr;
        }
        else if (Array.isArray(arg)) {
            this.arr = arg;
        }
        else {
            this.arr = [];
        }
    }
    Object.defineProperty(Range1D.prototype, "length", {
        get: function () {
            return this.size();
        },
        enumerable: true,
        configurable: true
    });
    Range1D.all = function () {
        return new Range1D([RangeElem.all()]);
    };
    Range1D.single = function (item) {
        return new Range1D([RangeElem.single(item)]);
    };
    Range1D.none = function () {
        return new Range1D();
    };
    Range1D.from = function (indices) {
        return new Range1D(Range1D.compress(indices));
    };
    Range1D.compress = function (indices) {
        if (indices.length === 0) {
            return [];
        }
        else if (indices.length === 1) {
            return [RangeElem.single(indices[0])];
        }
        //return indices.map(RangeElem.single);
        var r = new Array(), deltas = indices.slice(1).map(function (e, i) { return e - indices[i]; }), start = 0, act = 1, i = 0;
        while (act < indices.length) {
            while (deltas[start] === deltas[act - 1] && act < indices.length) {
                act++;
            }
            if (act === start + 1) {
                r.push(RangeElem.single(indices[start]));
            }
            else {
                //+1 since end is excluded
                //fix while just +1 -1 is allowed
                if (Math.abs(deltas[start]) === 1) {
                    r.push(RangeElem.range(indices[start], indices[act - 1] + deltas[start], deltas[start]));
                }
                else {
                    for (i = start; i < act; i++) {
                        r.push(RangeElem.single(indices[i]));
                    }
                }
            }
            start = act;
            act += 1;
        }
        while (start < indices.length) {
            r.push(RangeElem.single(indices[start++]));
        }
        return r;
    };
    Object.defineProperty(Range1D.prototype, "isAll", {
        get: function () {
            return this.arr.length === 1 && this.at(0).isAll;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range1D.prototype, "isNone", {
        get: function () {
            return this.arr.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range1D.prototype, "isUnbound", {
        get: function () {
            return this.arr.some(function (d) { return d.isUnbound; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range1D.prototype, "isList", {
        get: function () {
            return this.arr.every(function (d) { return d.isSingle; });
        },
        enumerable: true,
        configurable: true
    });
    Range1D.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i - 0] = arguments[_i];
        }
        function p(item) {
            if (typeof item === 'string') {
                return RangeElem.parse(item.toString());
            }
            else if (typeof item === 'number') {
                return RangeElem.single(item);
            }
            else if (Array.isArray(item)) {
                return new RangeElem(item[0], item[1], item[2]);
            }
            return item;
        }
        return this.arr.push.apply(this.arr, items.map(p));
    };
    Range1D.prototype.pushSlice = function (from, to, step) {
        if (to === void 0) { to = -1; }
        if (step === void 0) { step = 1; }
        this.arr.push(new RangeElem(from, to, step));
    };
    Range1D.prototype.pushList = function (indices) {
        this.arr.push.apply(this.arr, Range1D.compress(indices));
    };
    Range1D.prototype.setSlice = function (from, to, step) {
        if (to === void 0) { to = -1; }
        if (step === void 0) { step = 1; }
        this.arr.length = 0;
        this.pushSlice(from, to, step);
    };
    Range1D.prototype.setList = function (indices) {
        this.arr.length = 0;
        this.pushList(indices);
    };
    Range1D.prototype.at = function (index) {
        if (index < 0) {
            index += this.length;
        }
        if (index < 0 || index >= this.arr.length) {
            return RangeElem.none();
        }
        return this.arr[index];
    };
    Range1D.prototype.size = function (size) {
        var t = this.arr.map(function (d) { return d.size(size); });
        return t.reduce(function (a, b) { return a + b; }, 0);
    };
    Object.defineProperty(Range1D.prototype, "isIdentityRange", {
        /**
         * whether this range is the identity, i.e. the first natural numbers starting with 0
         * @return {boolean}
         */
        get: function () {
            return this.arr.length === 1 && this.arr[0].from === 0 && this.arr[0].step === 1;
        },
        enumerable: true,
        configurable: true
    });
    Range1D.prototype.repeat = function (ntimes) {
        if (ntimes === void 0) { ntimes = 1; }
        if (ntimes === 1) {
            return this;
        }
        var r = this.arr.slice();
        //push n times
        for (var i = 1; i < ntimes; ++i) {
            r.push.apply(r, this.arr);
        }
        return new Range1D(r);
    };
    /**
     * combines this range with another and returns a new one
     * this = (1,3,5,7), sub = (1,2) -> (1,2)(1,3,5,7) = (3,5)
     * @param other
     * @returns {*}
     */
    Range1D.prototype.preMultiply = function (sub, size) {
        if (this.isAll) {
            return sub.clone();
        }
        if (sub.isAll) {
            return this.clone();
        }
        if (sub.isNone || this.isNone) {
            return Range1D.none();
        }
        if (this.isIdentityRange) {
            return sub.clone();
        }
        //TODO optimize
        var l = this.iter(size).asList();
        var mapImpl = function (sub) {
            var s = sub.iter(l.length);
            var r = [];
            s.forEach(function (i) {
                if (i >= 0 && i < l.length) {
                    r.push(l[i]);
                }
            });
            return sub.fromLike(r);
        };
        if (sub instanceof CompositeRange1D) {
            return composite(sub.name, sub.groups.map(mapImpl));
        }
        else {
            return mapImpl(sub);
        }
    };
    /**
     * logical union between two ranges
     * @param other
     * @returns {RangeDim}
     */
    Range1D.prototype.union = function (other, size) {
        if (this.isAll || other.isNone) {
            return this.clone();
        }
        if (other.isAll || this.isNone) {
            return other.clone();
        }
        var r = this.iter(size).asList();
        var it2 = other.iter(size);
        it2.forEach(function (i) {
            if (r.indexOf(i) < 0) {
                r.push(i);
            }
        });
        return other.fromLike(r.sort());
    };
    /**
     * logical intersection between two ranges
     * @param other
     * @returns {RangeDim}
     */
    Range1D.prototype.intersect = function (other, size) {
        if (this.isNone || other.isNone) {
            return Range1D.none();
        }
        if (this.isAll) {
            return other.clone();
        }
        if (other.isAll) {
            return this.clone();
        }
        var it1 = this.iter(size).asList();
        var it2 = other.iter(size);
        var r = [];
        it2.forEach(function (i) {
            if (it1.indexOf(i) >= 0) {
                r.push(i);
            }
        });
        return other.fromLike(r.sort());
    };
    Range1D.prototype.toSet = function (size) {
        return this.removeDuplicates(size);
    };
    /**
     * logical difference between two ranges
     * @param without
     * @returns {RangeDim}
     */
    Range1D.prototype.without = function (without, size) {
        if (this.isNone || without.isNone) {
            return this.clone();
        }
        if (without.isAll) {
            return Range1D.none();
        }
        var it1 = this.iter(size);
        var it2 = without.iter(size).asList();
        var r = [];
        it1.forEach(function (i) {
            if (it2.indexOf(i) < 0) {
                r.push(i);
            }
        });
        return Range1D.from(r.sort());
    };
    /**
     * clones this range
     * @returns {RangeDim}
     */
    Range1D.prototype.clone = function () {
        return new Range1D(this.arr.map(function (d) { return d.clone(); }));
    };
    /**
     * inverts the given index to the original range
     * @param index
     * @param size the underlying size for negative indices
     * @returns {*}
     */
    Range1D.prototype.invert = function (index, size) {
        if (this.isAll) {
            return index;
        }
        if (this.isNone) {
            return -1; //not mapped
        }
        var act = 0, s = this.arr[0].size(size), total = s;
        while (total > index && act < this.length) {
            act++;
            s = this.arr[act].size(size);
            total += s;
        }
        if (act >= this.arr.length) {
            return -1; //not mapped
        }
        return this.arr[act - 1].invert(index - total + s, size);
    };
    /**
     * returns the index(ices) of the given elements
     * @return {*}
     */
    Range1D.prototype.indexOf = function () {
        if (arguments[0] instanceof Range) {
            return this.indexRangeOf(arguments[0], arguments[1]);
        }
        var arr;
        var base = this.iter().asList();
        if (arguments.length === 1) {
            if (typeof arguments[0] === 'number') {
                return base.indexOf(arguments[0]);
            }
            arr = arguments[0];
        }
        else {
            arr = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments);
        }
        if (arr.length === 0) {
            return [];
        }
        return arr.map(function (index, i) { return base.indexOf(index); });
    };
    /**
     * returns the range representing the indices of the given range within the current data
     * @param r
     * @param size
     * @return {Range1D}
     */
    Range1D.prototype.indexRangeOf = function (r, size) {
        if (r.isNone || this.isNone) {
            return r.fromLike([]);
        }
        if (r.isAll) {
            return Range1D.all();
        }
        //
        var mapImpl;
        if (this.isIdentityRange) {
            var end_1 = this.arr[0].to;
            mapImpl = function (d, result) {
                if (d >= 0 && d < end_1) {
                    result.push(d);
                }
            };
        }
        else {
            var arr = this.iter().asList();
            mapImpl = function (d, result) {
                var i = arr.indexOf(d);
                if (i >= 0) {
                    result.push(i);
                }
            };
        }
        if (r instanceof CompositeRange1D) {
            return composite(r.name, r.groups.map(function (g) {
                var result = [];
                g.forEach(function (d) { return mapImpl(d, result); });
                return g.fromLike(result);
            }));
        }
        else {
            var result = [];
            r.forEach(function (d) { return mapImpl(d, result); });
            return r.fromLike(result);
        }
    };
    /**
     * filters the given data according to this range
     * @param data
     * @param size the total size for resolving negative indices
     * @returns {*}
     */
    Range1D.prototype.filter = function (data, size, transform) {
        if (transform === void 0) { transform = __WEBPACK_IMPORTED_MODULE_0__index__["identity"]; }
        if (this.isAll) {
            return data.map(transform);
        }
        var it = this.iter(size);
        //optimization
        if (it.byOne && it instanceof __WEBPACK_IMPORTED_MODULE_1__iterator__["Iterator"]) {
            return data.slice(it.from, it.to).map(transform);
        }
        else {
            var r = [];
            while (it.hasNext()) {
                r.push(transform(data[it.next()]));
            }
            return r;
        }
    };
    /**
     * creates an iterator of this range
     * @param size the underlying size for negative indices
     */
    Range1D.prototype.iter = function (size) {
        if (this.isList) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__iterator__["forList"])(this.arr.map(function (d) { return d.from; }));
        }
        var its = this.arr.map(function (d) { return d.iter(size); });
        return __WEBPACK_IMPORTED_MODULE_1__iterator__["concat"].apply(null, its);
    };
    Object.defineProperty(Range1D.prototype, "__iterator__", {
        get: function () {
            return this.iter();
        },
        enumerable: true,
        configurable: true
    });
    Range1D.prototype.asList = function (size) {
        return this.iter(size).asList();
    };
    Object.defineProperty(Range1D.prototype, "first", {
        get: function () {
            if (this.isNone) {
                return null;
            }
            return this.arr[0].from;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range1D.prototype, "last", {
        get: function () {
            if (this.isNone) {
                return null;
            }
            return this.arr[this.arr.length - 1].from;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * for each element
     * @param callbackfn
     * @param thisArg
     */
    Range1D.prototype.forEach = function (callbackfn, thisArg) {
        return this.iter().forEach(callbackfn, thisArg);
    };
    Range1D.prototype.contains = function (value, size) {
        return this.arr.some(function (elem) { return elem.contains(value, size); });
    };
    /**
     * sort
     * @param cmp
     * @return {Range1D}
     */
    Range1D.prototype.sort = function (cmp) {
        if (cmp === void 0) { cmp = function (a, b) { return a - b; }; }
        var arr = this.iter().asList();
        var r = arr.sort(cmp);
        return this.fromLike(r);
    };
    Range1D.prototype.removeDuplicates = function (size) {
        var arr = this.iter().asList();
        arr = arr.sort();
        arr = arr.filter(function (di, i) { return di !== arr[i - 1]; }); //same value as before, remove
        return Range1D.from(arr);
    };
    /**
     * reverts the order of this range
     */
    Range1D.prototype.reverse = function () {
        var a = this.arr.map(function (r) { return r.reverse(); });
        a.reverse();
        return new Range1D(a);
    };
    Range1D.prototype.toString = function () {
        if (this.isAll) {
            return '';
        }
        if (this.length === 1) {
            return this.arr[0].toString();
        }
        return '(' + this.arr.join(',') + ')';
    };
    Range1D.prototype.eq = function (other) {
        if (this === other || (this.isAll && other.isAll) || (this.isNone && other.isNone)) {
            return true;
        }
        //TODO more performant comparison
        return this.toString() === other.toString();
    };
    Range1D.prototype.fromLike = function (indices) {
        return Range1D.from(indices);
    };
    return Range1D;
}());
var Range1DGroup = (function (_super) {
    __extends(Range1DGroup, _super);
    function Range1DGroup(name, color, base) {
        _super.call(this, base);
        this.name = name;
        this.color = color;
    }
    Range1DGroup.prototype.preMultiply = function (sub, size) {
        var r = _super.prototype.preMultiply.call(this, sub, size);
        return new Range1DGroup(this.name, this.color, r);
    };
    Range1DGroup.prototype.union = function (other, size) {
        var r = _super.prototype.union.call(this, other, size);
        return new Range1DGroup(this.name, this.color, r);
    };
    Range1DGroup.prototype.intersect = function (other, size) {
        var r = _super.prototype.intersect.call(this, other, size);
        return new Range1DGroup(this.name, this.color, r);
    };
    Range1DGroup.prototype.without = function (without, size) {
        var r = _super.prototype.without.call(this, without, size);
        return new Range1DGroup(this.name, this.color, r);
    };
    Range1DGroup.prototype.clone = function () {
        return new Range1DGroup(this.name, this.color, _super.prototype.clone.call(this));
    };
    Range1DGroup.prototype.toString = function () {
        return '"' + this.name + '""' + this.color + '"' + _super.prototype.toString.call(this);
    };
    Range1DGroup.prototype.toSet = function (size) {
        return new Range1DGroup(this.name, this.color, _super.prototype.toSet.call(this, size));
    };
    Range1DGroup.prototype.fromLike = function (indices) {
        return new Range1DGroup(this.name, this.color, _super.prototype.fromLike.call(this, indices));
    };
    return Range1DGroup;
}(Range1D));
function asUngrouped(range) {
    return new Range1DGroup('unnamed', 'gray', range);
}
function composite(name, groups) {
    return new CompositeRange1D(name, groups);
}
function toBase(groups) {
    if (groups.length === 1) {
        return groups[0];
    }
    var r = groups[0].iter().asList();
    groups.slice(1).forEach(function (g) {
        g.iter().forEach(function (i) {
            if (r.indexOf(i) < 0) {
                r.push(i);
            }
        });
    });
    return Range1D.from(r);
}
var CompositeRange1D = (function (_super) {
    __extends(CompositeRange1D, _super);
    function CompositeRange1D(name, groups, base) {
        _super.call(this, base ? base : toBase(groups));
        this.name = name;
        this.groups = groups;
    }
    CompositeRange1D.prototype.preMultiply = function (sub, size) {
        var r = this.groups.length > 1 ? _super.prototype.preMultiply.call(this, sub, size) : undefined;
        return new CompositeRange1D(this.name, this.groups.map(function (g) { return g.preMultiply(sub, size); }), r);
    };
    CompositeRange1D.prototype.union = function (other, size) {
        var r = this.groups.length > 1 ? _super.prototype.union.call(this, other, size) : undefined;
        return new CompositeRange1D(this.name, this.groups.map(function (g) { return g.union(other, size); }), r);
    };
    CompositeRange1D.prototype.intersect = function (other, size) {
        var r = this.groups.length > 1 ? _super.prototype.intersect.call(this, other, size) : undefined;
        return new CompositeRange1D(this.name, this.groups.map(function (g) { return g.intersect(other, size); }), r);
    };
    CompositeRange1D.prototype.without = function (without, size) {
        var r = this.groups.length > 1 ? _super.prototype.without.call(this, without, size) : undefined;
        return new CompositeRange1D(this.name, this.groups.map(function (g) { return g.without(without, size); }), r);
    };
    CompositeRange1D.prototype.clone = function () {
        var r = this.groups.length > 1 ? _super.prototype.clone.call(this) : undefined;
        return new CompositeRange1D(name, this.groups.map(function (g) { return g.clone(); }), r);
    };
    CompositeRange1D.prototype.sort = function (cmp) {
        var r = this.groups.length > 1 ? _super.prototype.sort.call(this, cmp) : undefined;
        return new CompositeRange1D(this.name, this.groups.map(function (g) { return g.sort(cmp); }), r);
    };
    CompositeRange1D.prototype.toSet = function (size) {
        var r = this.groups.length > 1 ? _super.prototype.toSet.call(this, size) : undefined;
        return new CompositeRange1D(this.name, this.groups.map(function (g) { return g.toSet(size); }), r);
    };
    CompositeRange1D.prototype.toString = function () {
        return '"' + this.name + '"{' + this.groups.join(',') + '}';
    };
    return CompositeRange1D;
}(Range1D));
/**
 * multi dimensional version of a RangeDim
 */
var Range = (function () {
    function Range(dims) {
        if (dims === void 0) { dims = new Array(); }
        this.dims = dims;
    }
    Object.defineProperty(Range.prototype, "isAll", {
        /**
         * checks if this range is all
         * @returns {boolean}
         */
        get: function () {
            return this.dims.every(function (dim) { return dim.isAll; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "isNone", {
        get: function () {
            return this.dims.every(function (dim) { return dim.isNone; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "isUnbound", {
        /**
         * checks whether there are any wildcards
         */
        get: function () {
            return this.dims.some(function (dim) { return dim.isUnbound; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "first", {
        get: function () {
            return this.dim(0).first;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "last", {
        get: function () {
            return this.dim(0).last;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "ndim", {
        /**
         * number of defined dimensions
         * @returns {number}
         */
        get: function () {
            return this.dims.length;
        },
        enumerable: true,
        configurable: true
    });
    Range.prototype.eq = function (other) {
        if (this === other || (this.isAll && other.isAll) || (this.isNone && other.isNone)) {
            return true;
        }
        //TODO more performant comparison
        return this.toString() === other.toString();
    };
    /**
     * combines this range with another and returns a new one
     * this = (1,3,5,7), other = (1,2) -> (1,2)(1,3,5,7) = (3,5)
     * @param other
     * @returns {*}
     */
    Range.prototype.preMultiply = function (other, size) {
        if (this.isAll) {
            return other.clone();
        }
        if (other.isAll) {
            return this.clone();
        }
        var r = new Range();
        this.dims.forEach(function (d, i) {
            r.dims[i] = d.preMultiply(other.dim(i), size ? size[i] : undefined);
        });
        return r;
    };
    Range.prototype.union = function (other, size) {
        if (this.isAll || other.isNone) {
            return this.clone();
        }
        if (other.isAll || this.isNone) {
            return other.clone();
        }
        var r = new Range();
        this.dims.forEach(function (d, i) {
            r.dims[i] = d.union(other.dim(i), size ? size[i] : undefined);
        });
        return r;
    };
    /**
     * logical intersection between two ranges
     * @param other
     * @returns {RangeDim}
     */
    Range.prototype.intersect = function (other, size) {
        if (this.isNone || other.isNone) {
            return none();
        }
        if (this.isAll) {
            return other.clone();
        }
        if (other.isAll) {
            return this.clone();
        }
        var r = new Range();
        this.dims.forEach(function (d, i) {
            r.dims[i] = d.intersect(other.dim(i), size ? size[i] : undefined);
        });
        return r;
    };
    /**
     * logical difference between two ranges
     * @param other
     * @returns {RangeDim}
     */
    Range.prototype.without = function (without, size) {
        if (this.isNone || without.isNone) {
            return this.clone();
        }
        if (without.isAll) {
            return none();
        }
        var r = new Range();
        this.dims.forEach(function (d, i) {
            r.dims[i] = d.without(without.dim(i), size ? size[i] : undefined);
        });
        return r;
    };
    /**
     * clones this range
     * @returns {*}
     */
    Range.prototype.clone = function () {
        var r = new Range();
        this.dims.forEach(function (d, i) {
            r.dims[i] = d.clone();
        });
        return r;
    };
    /**
     * create a new range and reverse the dimensions
     */
    Range.prototype.swap = function () {
        var r = new Range();
        r.dims = this.dims.map(function (d) { return d.clone(); }).reverse();
        return r;
    };
    /**
     * filter the given multi dimensional data according to the current range
     * @param data
     * @param size the underlying size for negative indices
     * @returns {*}
     */
    Range.prototype.filter = function (data, size) {
        if (this.isAll) {
            return data;
        }
        var ndim = this.ndim;
        var that = this;
        //recursive variant for just filtering the needed rows
        function filterDim(i) {
            if (i >= ndim) {
                return __WEBPACK_IMPORTED_MODULE_0__index__["identity"];
            }
            var d = that.dim(i);
            var next = filterDim(i + 1); //compute next transform
            var s = size ? size[i] : undefined;
            return function (elem) {
                return Array.isArray(elem) ? d.filter(elem, s, next) : elem;
            };
        }
        var f = filterDim(0);
        return f(data);
    };
    /**
     * return a specific dimension
     * @param dimension
     * @returns {r}
     */
    Range.prototype.dim = function (dimension) {
        var r = this.dims[dimension];
        if (r) {
            return r;
        }
        //not yet existing create one
        this.dims[dimension] = Range1D.all();
        return this.dims[dimension];
    };
    /**
     * transforms the given multi dimensional indices to their parent notation
     * @param indices
     * @param size the underlying size for negative indices
     */
    Range.prototype.invert = function (indices, size) {
        var _this = this;
        if (this.isAll) {
            return indices;
        }
        return indices.map(function (index, i) {
            return _this.dim(i).invert(index, size ? size[i] : undefined);
        });
    };
    Range.prototype.indexRangeOf = function (r, size) {
        if (r.isNone || this.isNone) {
            return none();
        }
        if (this.isNone || r.isAll) {
            return this.clone();
        }
        return new Range(this.dims.map(function (d, i) { return d.indexRangeOf(r.dim(i), size ? size[i] : undefined); }));
    };
    Range.prototype.indexOf = function () {
        var _this = this;
        if (arguments[0] instanceof Range) {
            return this.indexRangeOf(arguments[0], arguments[1]);
        }
        var arr;
        if (arguments.length === 1) {
            if (typeof arguments[0] === 'number') {
                return this.dim(0).indexOf(arguments[0]);
            }
            arr = arguments[0];
        }
        else {
            arr = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments);
        }
        if (arr.length === 0) {
            return [];
        }
        return arr.map(function (index, i) { return _this.dim(i).indexOf(index); });
    };
    /**
     * returns the range size
     * @param size the underlying size for negative indices
     * @returns {*}
     */
    Range.prototype.size = function (size) {
        if (this.isAll) {
            return size;
        }
        return this.dims.map(function (r, i) {
            return r.size(size ? size[i] : undefined);
        });
    };
    Range.prototype.split = function () {
        return this.dims.map(function (dim) {
            return new Range([dim]);
        });
    };
    /**
     * iterates over the product of this range, e.g. (0,1,2),(3) => (0,3),(1,3),(2,3)
     * @param callback
     * @param size
     */
    Range.prototype.product = function (callback, size) {
        var _this = this;
        var ndim = this.ndim;
        var iter = function (ids) {
            var act = ids.length;
            if (act < ndim) {
                var dim = _this.dims[act];
                dim.iter(size ? size[act] : null).forEach(function (id) {
                    ids.push(id);
                    iter(ids);
                    ids.pop();
                });
            }
            else {
                callback(ids.slice());
            }
        };
        iter([]);
    };
    /**
     * encoded the given range in a string
     */
    Range.prototype.toString = function () {
        return this.dims.map(function (d) {
            return d.toString();
        }).join(',');
    };
    return Range;
}());
/**
 * creates a new range including everything
 * @returns {Range}
 */
function all() {
    return new Range();
}
function none() {
    var r = new Range();
    r.dims = [Range1D.none(), Range1D.none()];
    return r;
}
/**
 * test if the given object is a range
 */
function is(obj) {
    return obj instanceof Range;
}
function range() {
    if (arguments.length === 0) {
        return all();
    }
    var r = new Range();
    if (Array.isArray(arguments[0])) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments).forEach(function (arr, i) {
            if (arr.length === 0) {
                return;
            }
            r.dim(i).setSlice(arr[0], arr[1], arr[2]);
        });
    }
    if (typeof arguments[0] === 'number') {
        r.dim(0).setSlice(arguments[0], arguments[1], arguments[2]);
    }
    return r;
}
function join() {
    if (arguments.length === 0) {
        return all();
    }
    var r = new Range();
    var ranges = arguments[0];
    if (!Array.isArray(ranges)) {
        ranges = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments);
    }
    r.dims = ranges.map(function (r) { return r.dim(0); });
    return r;
}
function list() {
    if (arguments.length === 0) {
        return all();
    }
    var r = new Range();
    if (Array.isArray(arguments[0]) && arguments[0][0] instanceof Range1D) {
        r.dims = arguments[0];
    }
    else if (Array.isArray(arguments[0])) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments).forEach(function (arr, i) {
            if (arr instanceof Range1D) {
                r.dims[i] = arr;
            }
            else {
                r.dim(i).setList(arr);
            }
        });
    }
    else if (typeof arguments[0] === 'number') {
        r.dim(0).setList(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments));
    }
    else if (arguments[0] instanceof Range1D) {
        r.dims = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments);
    }
    return r;
}
//Range EBNF grammar
//R   = Dim { ',' Dim }
//Dim = '' | SR | '(' SR { ',' SR ' } ')'
//SR  = N [ ':' N [ ':' N ] ]
//N   = '0'...'9'
//Str =  '"' literal '"'
//Name= Str
//Col = Str
//GDim= Name Col Dim
//CDim= Name '{' GDim { ',' GDim } '}'
/**
 * parse the give code created toString
 * @param code
 * @returns {Range}
 */
function parseRange(code) {
    var act = 0, c;
    var dims = new Array(), t;
    code = code.trim();
    while (act < code.length) {
        c = code.charAt(act);
        switch (c) {
            case '"':
                t = parseNamedRange1D(code, act);
                act = t.act + 1; //skip ,
                dims.push(t.dim);
                break;
            case ',':
                act++;
                dims.push(Range1D.all());
                break;
            default:
                if (c.match(/\s/)) {
                    act++;
                }
                else {
                    t = parseRange1D(code, act);
                    act = t.act + 1; //skip ,
                    dims.push(t.dim);
                }
                break;
        }
    }
    if (code.charAt(code.length - 1) === ',') {
        dims.push(Range1D.all());
    }
    var r = new Range(dims);
    return r;
}
function parseNamedRange1D(code, act) {
    act += 1; //skip "
    var end = code.indexOf('"', act);
    var name = code.slice(act, end);
    var r;
    act = end + 1;
    switch (code.charAt(act)) {
        case '"':
            end = code.indexOf('"', act + 1);
            r = parseRange1D(code, end + 1);
            return {
                dim: new Range1DGroup(name, code.slice(act + 1, end), r.dim),
                act: r.act
            };
        case '{':
            var groups = [];
            while (code.charAt(act) !== '}') {
                r = parseNamedRange1D(code, act + 1);
                groups.push(r.dim);
                act = r.act;
            }
            return {
                dim: new CompositeRange1D(name, groups),
                act: r.act + 1
            };
        default:
            return {
                dim: Range1D.all(),
                act: act
            };
    }
}
function parseRange1D(code, act) {
    var next, r = new Range1D();
    switch (code.charAt(act)) {
        case ',':
        case '}':
            next = act;
            r = Range1D.all();
            break;
        case '(':
            next = code.indexOf(')', act);
            if (next > act + 1) {
                r.push.apply(r, code.slice(act + 1, next).split(',').map(RangeElem.parse));
            }
            next += 1; //skip )
            break;
        default:
            next = code.indexOf('}', act);
            var n2 = code.indexOf(',', act);
            if (next >= 0 && n2 >= 0) {
                next = Math.min(next, n2);
            }
            else if (next < 0) {
                next = n2;
            }
            if (next < 0) {
                next = code.length;
            }
            r = new Range1D([RangeElem.parse(code.slice(act, next))]);
            break;
    }
    return {
        act: next,
        dim: r
    };
}
/**
 * parses the given encoded string created by toString to a range object
 * @param arange something like a range
 * @returns {Range}
 */
function parse(arange) {
    if (arange === void 0) { arange = null; }
    if (arange === null) {
        return all();
    }
    if (arange instanceof Range) {
        return arange;
    }
    if (Array.isArray(arange)) {
        if (Array.isArray(arange[0])) {
            return list.apply(void 0, (arange));
        }
        return list(arange);
    }
    return parseRange(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments).map(String).join(','));
}
function cell() {
    var dim_indices = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        dim_indices[_i - 0] = arguments[_i];
    }
    return new Range(dim_indices.map(Range1D.single));
}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajax__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "defaultSelectionType", function() { return defaultSelectionType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "hoverSelectionType", function() { return hoverSelectionType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SelectOperation", function() { return SelectOperation; });
/* harmony export (immutable) */ exports["toSelectOperation"] = toSelectOperation;
/* harmony export (binding) */ __webpack_require__.d(exports, "IDType", function() { return IDType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ProductIDType", function() { return ProductIDType; });
/* harmony export (immutable) */ exports["toId"] = toId;
/* harmony export (immutable) */ exports["isId"] = isId;
/* harmony export (binding) */ __webpack_require__.d(exports, "ObjectManager", function() { return ObjectManager; });
/* harmony export (binding) */ __webpack_require__.d(exports, "LocalIDAssigner", function() { return LocalIDAssigner; });
/* harmony export (immutable) */ exports["createLocalAssigner"] = createLocalAssigner;
/* harmony export (binding) */ __webpack_require__.d(exports, "SelectAble", function() { return SelectAble; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ProductSelectAble", function() { return ProductSelectAble; });
/* harmony export (immutable) */ exports["resolve"] = resolve;
/* harmony export (immutable) */ exports["resolveProduct"] = resolveProduct;
/* harmony export (immutable) */ exports["list"] = list;
/* harmony export (immutable) */ exports["register"] = register;
/* harmony export (immutable) */ exports["persist"] = persist;
/* harmony export (immutable) */ exports["restore"] = restore;
/* harmony export (immutable) */ exports["clearSelection"] = clearSelection;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




// TODO convert to Map
var cache = {};
var filledUp = false;
var defaultSelectionType = 'selected';
var hoverSelectionType = 'hovered';
var SelectOperation;
(function (SelectOperation) {
    SelectOperation[SelectOperation["SET"] = 0] = "SET";
    SelectOperation[SelectOperation["ADD"] = 1] = "ADD";
    SelectOperation[SelectOperation["REMOVE"] = 2] = "REMOVE";
})(SelectOperation || (SelectOperation = {}));
function toSelectOperation(event) {
    var ctryKeyDown, shiftDown, altDown, metaDown;
    if (typeof event === 'boolean') {
        ctryKeyDown = event;
        altDown = arguments[1] || false;
        shiftDown = arguments[2] || false;
        metaDown = arguments[3] || false;
    }
    else {
        ctryKeyDown = event.ctrlKey || false;
        altDown = event.altKey || false;
        shiftDown = event.shiftKey || false;
        metaDown = event.metaKey || false;
    }
    if (ctryKeyDown || shiftDown) {
        return SelectOperation.ADD;
    }
    else if (altDown || metaDown) {
        return SelectOperation.REMOVE;
    }
    return SelectOperation.SET;
}
/**
 * An IDType is a semantic aggregation of an entity type, like Patient and Gene.
 *
 * An entity is tracked by a unique identifier (integer) within the system,
 * which is mapped to a common, external identifier or name (string) as well.
 */
var IDType = (function (_super) {
    __extends(IDType, _super);
    /**
     * @param id the system identifier of this IDType
     * @param name the name of this IDType for external presentation
     * @param names the plural form of above name
     * @param internal whether this is an internal type or not
     */
    function IDType(id, name, names, internal) {
        if (internal === void 0) { internal = false; }
        _super.call(this);
        this.id = id;
        this.name = name;
        this.names = names;
        this.internal = internal;
        /**
         * the current selections
         * @type {{}}
         */
        // TODO convert to Map
        this.sel = {};
        // TODO: is this cache ever emptied, or do we assume a reasonable upper bound on the entities in IDType?
        // TODO convert to Map
        this.name2id_cache = {};
        // TODO convert to Map
        this.id2name_cache = {};
        this.canBeMappedTo = null;
    }
    IDType.prototype.persist = function () {
        var _this = this;
        var s = {};
        Object.keys(this.sel).forEach(function (type) { return s[type] = _this.sel[type].toString(); });
        return {
            sel: s,
            name: this.name,
            names: this.names
        };
    };
    IDType.prototype.restore = function (persisted) {
        var _this = this;
        this.name = persisted.name;
        this.names = persisted.names;
        Object.keys(persisted.sel).forEach(function (type) { return _this.sel[type] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["parse"])(persisted.sel[type]); });
        return this;
    };
    IDType.prototype.toString = function () {
        return this.name;
    };
    IDType.prototype.selectionTypes = function () {
        return Object.keys(this.sel);
    };
    /**
     * return the current selections of the given type
     * @param type optional the selection type
     * @returns {Range}
     */
    IDType.prototype.selections = function (type) {
        if (type === void 0) { type = defaultSelectionType; }
        if (this.sel.hasOwnProperty(type)) {
            return this.sel[type];
        }
        return this.sel[type] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["none"])();
    };
    IDType.prototype.select = function () {
        var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments);
        var type = (typeof a[0] === 'string') ? a.shift() : defaultSelectionType, range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["parse"])(a[0]), op = asSelectOperation(a[1]);
        return this.selectImpl(range, op, type);
    };
    IDType.prototype.selectImpl = function (range, op, type) {
        if (op === void 0) { op = SelectOperation.SET; }
        if (type === void 0) { type = defaultSelectionType; }
        var b = this.selections(type);
        var new_ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["none"])();
        switch (op) {
            case SelectOperation.SET:
                new_ = range;
                break;
            case SelectOperation.ADD:
                new_ = b.union(range);
                break;
            case SelectOperation.REMOVE:
                new_ = b.without(range);
                break;
        }
        if (b.eq(new_)) {
            return b;
        }
        this.sel[type] = new_;
        var added = op !== SelectOperation.REMOVE ? range : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["none"])();
        var removed = (op === SelectOperation.ADD ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["none"])() : (op === SelectOperation.SET ? b : range));
        this.fire('select', type, new_, added, removed, b);
        this.fire('select-' + type, new_, added, removed, b);
        return b;
    };
    IDType.prototype.clear = function (type) {
        if (type === void 0) { type = defaultSelectionType; }
        return this.selectImpl(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["none"])(), SelectOperation.SET, type);
    };
    /**
     * Cache identifier <-> name mapping in bulk.
     * @param ids the entity identifiers to cache
     * @param names the matching entity names to cache
     */
    IDType.prototype.fillMapCache = function (ids, names) {
        var _this = this;
        ids.forEach(function (id, i) {
            var name = names[i];
            _this.name2id_cache[name] = id;
            _this.id2name_cache[id] = name;
        });
    };
    /**
     * returns the list of idtypes that this type can be mapped to
     * @returns {Promise<IDType[]>}
     */
    IDType.prototype.getCanBeMappedTo = function () {
        if (this.canBeMappedTo === null) {
            this.canBeMappedTo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/idtype/' + this.id + '/').then(function (list) { return list.map(resolve); });
        }
        return this.canBeMappedTo;
    };
    IDType.prototype.mapToFirstName = function (ids_, to_idtype) {
        var target = resolve(to_idtype);
        var ids = ids_ instanceof __WEBPACK_IMPORTED_MODULE_3__range__["Range"] ? ids_ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["list"])(ids_);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])("/idtype/" + this.id + "/" + target.id, { ids: ids.toString(), mode: 'first' });
    };
    IDType.prototype.mapToName = function (ids_, to_idtype) {
        var target = resolve(to_idtype);
        var ids = ids_ instanceof __WEBPACK_IMPORTED_MODULE_3__range__["Range"] ? ids_ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["list"])(ids_);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])("/idtype/" + this.id + "/" + target.id, { ids: ids.toString() });
    };
    IDType.prototype.mapToFirstID = function (ids_, to_idtype) {
        var target = resolve(to_idtype);
        var ids = ids_ instanceof __WEBPACK_IMPORTED_MODULE_3__range__["Range"] ? ids_ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["list"])(ids_);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])("/idtype/" + this.id + "/" + target.id + "/map", { ids: ids.toString(), mode: 'first' });
    };
    IDType.prototype.mapToID = function (ids_, to_idtype) {
        var target = resolve(to_idtype);
        var ids = ids_ instanceof __WEBPACK_IMPORTED_MODULE_3__range__["Range"] ? ids_ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["list"])(ids_);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])("/idtype/" + this.id + "/" + target.id + "/map", { ids: ids.toString() });
    };
    /**
     * Request the system identifiers for the given entity names.
     * @param names the entity names to resolve
     * @returns a promise of system identifiers that match the input names
     */
    IDType.prototype.map = function (names) {
        var _this = this;
        var to_resolve = names.filter(function (name) { return !(name in _this.name2id_cache); });
        if (to_resolve.length === 0) {
            return Promise.resolve(names.map(function (name) { return _this.name2id_cache[name]; }));
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])("/idtype/" + this.id + "/map", { ids: to_resolve }).then(function (ids) {
            to_resolve.forEach(function (name, i) {
                _this.name2id_cache[name] = ids[i];
            });
            return names.map(function (name) { return _this.name2id_cache[name]; });
        });
    };
    /**
     * Request the names for the given entity system identifiers.
     * @param ids the entity names to resolve
     * @returns a promise of system identifiers that match the input names
     */
    IDType.prototype.unmap = function (ids_) {
        var _this = this;
        var ids = ids_ instanceof __WEBPACK_IMPORTED_MODULE_3__range__["Range"] ? ids_ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["list"])(ids_);
        var to_resolve = [];
        ids.dim(0).forEach(function (name) { return !(name in _this.id2name_cache) ? to_resolve.push(name) : null; });
        if (to_resolve.length === 0) {
            var r = [];
            ids.dim(0).forEach(function (name) { return r.push(_this.id2name_cache[name]); });
            return Promise.resolve(r);
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])("/idtype/" + this.id + "/unmap", { ids: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["list"])(to_resolve).toString() }).then(function (result) {
            to_resolve.forEach(function (name, i) {
                _this.id2name_cache[name] = result[i];
            });
            var r = [];
            ids.dim(0).forEach(function (name) { return r.push(_this.id2name_cache[name]); });
            return r;
        });
    };
    return IDType;
}(__WEBPACK_IMPORTED_MODULE_2__event__["EventHandler"]));
//function indicesCompare(a: number[], b: number[]) {
//  //assert a.length = b.length
//  for(let i = 0; i < a.length; ++i) {
//    if (a[i] !== b[i]) {
//      return a[i] - b[i];
//    }
//  }
//  return 0;
//}
//
//function compressPairs(pairs: number[][]): Range[] {
//  return pairs.map((a) => rlist(...a));
//}
function overlaps(r, with_, ndim) {
    if (with_.ndim === 0) {
        return true; //catch all
    }
    for (var i = 0; i < Math.min(r.ndim, ndim); ++i) {
        var ri = r.dim(i);
        var wi = with_.dim(i);
        if (wi.isAll || ri.isAll) {
            return true;
        }
        if (!ri.isUnbound && ri.asList().every(function (rii) { return !wi.contains(rii); })) {
            //it the ids at dimension i are not overlapping can't overlap in others
            return false;
        }
    }
    return false;
}
function removeCells(b, without, ndim) {
    if (without.length === 0) {
        return b;
    }
    var r = [];
    b.forEach(function (bi) {
        if (without.some(function (w) { return w.eq(bi); })) {
        }
        else if (without.some(function (w) { return overlaps(bi, w, ndim); })) {
        }
        else {
            r.push(bi);
        }
    });
    return r;
}
/**
 * a product idtype is a product of multiple underlying ones, e.g. patient x gene.
 */
var ProductIDType = (function (_super) {
    __extends(ProductIDType, _super);
    function ProductIDType(elems, internal) {
        var _this = this;
        if (internal === void 0) { internal = false; }
        _super.call(this);
        this.elems = elems;
        this.internal = internal;
        // TODO convert to Map
        this.sel = {};
        this.isOn = false;
        this.selectionListener = function (event, type, act, added, removed) {
            _this.fire('selectDim,selectProduct', _this.elems.indexOf(event.currentTarget), type, act, added, removed);
            _this.fire('selectDim-' + type + ',selectProduct-' + type, _this.elems.indexOf(event.currentTarget), act, added, removed);
        };
    }
    ProductIDType.prototype.on = function (events, listener) {
        if (!this.isOn) {
            this.enable();
            this.isOn = true;
        }
        return _super.prototype.on.call(this, events, listener);
    };
    Object.defineProperty(ProductIDType.prototype, "id", {
        get: function () {
            return this.elems.map(function (e) { return e.id; }).join('X');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductIDType.prototype, "name", {
        get: function () {
            return this.elems.map(function (e) { return e.name; }).join(' x ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductIDType.prototype, "names", {
        get: function () {
            return this.elems.map(function (e) { return e.names; }).join(' x ');
        },
        enumerable: true,
        configurable: true
    });
    ProductIDType.prototype.enable = function () {
        var _this = this;
        this.elems.forEach(function (elem) { return elem.on('select', _this.selectionListener); });
    };
    ProductIDType.prototype.disable = function () {
        var _this = this;
        this.elems.forEach(function (elem) { return elem.off('select', _this.selectionListener); });
    };
    ProductIDType.prototype.persist = function () {
        var _this = this;
        var s = {};
        Object.keys(this.sel).forEach(function (type) { return s[type] = _this.sel[type].map(function (r) { return r.toString(); }); });
        return {
            sel: s
        };
    };
    ProductIDType.prototype.restore = function (persisted) {
        var _this = this;
        Object.keys(persisted.sel).forEach(function (type) { return _this.sel[type] = persisted.sel[type].map(__WEBPACK_IMPORTED_MODULE_3__range__["parse"]); });
        return this;
    };
    ProductIDType.prototype.toString = function () {
        return this.name;
    };
    ProductIDType.prototype.selectionTypes = function () {
        return Object.keys(this.sel);
    };
    /**
     * return the current selections of the given type
     * @param type optional the selection type
     * @returns {Range[]}
     */
    ProductIDType.prototype.selections = function (type) {
        if (type === void 0) { type = defaultSelectionType; }
        if (this.sel.hasOwnProperty(type)) {
            return this.sel[type].slice();
        }
        this.sel[type] = [];
        return [];
    };
    ProductIDType.prototype.productSelections = function (type /*, wildcardLookup: (idtype: IDType) => Promise<number> */) {
        var _this = this;
        if (type === void 0) { type = defaultSelectionType; }
        var cells = this.selections(type);
        var usedCells = this.toPerDim(cells);
        this.elems.forEach(function (e, i) {
            var s = e.selections(type);
            //remove all already used rows / columns as part of the cells
            var wildcard = s.without(usedCells[i]);
            if (!wildcard.isNone) {
                //create wildcard cells, e.g., the remaining ones are row/column selections
                cells.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["list"])(_this.elems.map(function (e2) { return e === e2 ? wildcard.dim(0) : __WEBPACK_IMPORTED_MODULE_3__range__["Range1D"].all(); })));
            }
        });
        return cells;
        /* TODO no duplicates
         if (cells.every((c) => !c.isUnbound)) {
         //all cells are bound, just cells
         return Promise.resolve(cells);
         }
         //we need to resolve some wildcards
         return Promise.all(this.elems.map((elem, i) => {
         if (cells.some((c) => c.dim(i).isUnbound)) {
         return wildcardLookup(elem);
         } else {
         return Promise.resolve(0);
         }
         })).then((size: number[]) => {
         const fullCells : any = {};
         cells.forEach((cell) => {
         cell.product((indices: number[]) => {
         const id = indices.join('_');
         fullCells[id] = indices;
         });
         }, size);
         //fullCells contains all cells that we have to take care of
         const pairs = Object.keys(fullCells).map((k) => fullCells[k]).sort(indicesCompare);
         return compressPairs(pairs);
         });
         */
    };
    ProductIDType.prototype.select = function () {
        var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments);
        var type = (typeof a[0] === 'string') ? a.shift() : defaultSelectionType, range = a[0].map(__WEBPACK_IMPORTED_MODULE_3__range__["parse"]), op = asSelectOperation(a[1]);
        return this.selectImpl(range, op, type);
    };
    ProductIDType.prototype.selectImpl = function (cells, op, type) {
        if (op === void 0) { op = SelectOperation.SET; }
        if (type === void 0) { type = defaultSelectionType; }
        var rcells = cells.map(__WEBPACK_IMPORTED_MODULE_3__range__["parse"]);
        var b = this.selections(type);
        var new_ = [];
        switch (op) {
            case SelectOperation.SET:
                new_ = rcells;
                break;
            case SelectOperation.ADD:
                new_ = b.concat(rcells);
                break;
            case SelectOperation.REMOVE:
                new_ = removeCells(b, rcells, this.elems.length);
                break;
        }
        //if (b.eq(new_)) {
        //  return b;
        //}
        this.sel[type] = new_;
        //individual selection per dimension
        var perDimSelections = this.toPerDim(new_);
        this.disable();
        this.elems.forEach(function (e, i) { return e.select(type, perDimSelections[i]); });
        this.enable();
        var added = op !== SelectOperation.REMOVE ? rcells : [];
        var removed = (op === SelectOperation.ADD ? [] : (op === SelectOperation.SET ? b : rcells));
        this.fire('select', type, new_, added, removed, b);
        this.fire('selectProduct', -1, type, new_, added, removed, b);
        this.fire('select-' + type, new_, added, removed, b);
        this.fire('selectProduct-' + type, -1, new_, added, removed, b);
        return b;
    };
    ProductIDType.prototype.toPerDim = function (sel) {
        return this.elems.map(function (elem, i) {
            if (sel.length === 0) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["none"])();
            }
            var dimselections = sel.map(function (r) { return r.dim(i); });
            var selection = dimselections.reduce(function (p, a) { return p ? p.union(a) : a; }, null);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["list"])(selection);
        });
    };
    ProductIDType.prototype.clear = function (type) {
        if (type === void 0) { type = defaultSelectionType; }
        return this.selectImpl([], SelectOperation.SET, type);
    };
    return ProductIDType;
}(__WEBPACK_IMPORTED_MODULE_2__event__["EventHandler"]));
function toId(elem) {
    return elem.id;
}
function isId(id) {
    return function (elem) { return elem && elem.id === id; };
}
/**
 * IDType with an actual collection of entities.
 * Supports selections.
 */
var ObjectManager = (function (_super) {
    __extends(ObjectManager, _super);
    function ObjectManager(id, name) {
        _super.call(this, id, name, name + 's', true);
        this.instances = [];
        this.pool = new __WEBPACK_IMPORTED_MODULE_0__index__["IdPool"]();
    }
    ObjectManager.prototype.nextId = function (item) {
        var n = this.pool.checkOut();
        if (item) {
            item.id = n;
            this.instances[n] = item;
            this.fire('add', n, item);
        }
        return n;
    };
    ObjectManager.prototype.push = function () {
        var _this = this;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i - 0] = arguments[_i];
        }
        items.forEach(function (item) {
            _this.instances[item.id] = item;
            _this.fire('add', item.id, item);
        });
    };
    ObjectManager.prototype.byId = function (id) {
        return this.instances[id];
    };
    ObjectManager.prototype.forEach = function (callbackfn, thisArg) {
        var _this = this;
        this.instances.forEach(function (item, i) { return _this.pool.isCheckedOut(i) ? callbackfn.call(thisArg, item) : null; });
    };
    Object.defineProperty(ObjectManager.prototype, "entries", {
        get: function () {
            var _this = this;
            return this.instances.filter(function (item, i) { return _this.pool.isCheckedOut(i); });
        },
        enumerable: true,
        configurable: true
    });
    ObjectManager.prototype.remove = function (item) {
        var _this = this;
        var old = null;
        if (typeof item.id === 'number') {
            item = item.id;
        }
        if (typeof item === 'number') {
            old = this.instances[item];
            delete this.instances[item];
            this.fire('remove', item, old);
        }
        //clear from selections
        this.selectionTypes().forEach(function (type) {
            _this.select(type, [item], SelectOperation.REMOVE);
        });
        this.pool.checkIn(item);
        return old;
    };
    ObjectManager.prototype.selectedObjects = function (type) {
        if (type === void 0) { type = defaultSelectionType; }
        var s = this.selections(type);
        return s.filter(this.instances);
    };
    return ObjectManager;
}(IDType));
var LocalIDAssigner = (function () {
    function LocalIDAssigner() {
        this.pool = new __WEBPACK_IMPORTED_MODULE_0__index__["IdPool"]();
        this.lookup = {};
    }
    LocalIDAssigner.prototype.unmapOne = function (id) {
        return this.unmap([id])[0];
    };
    LocalIDAssigner.prototype.unmap = function (ids) {
        var _this = this;
        var keys = Object.keys(this.lookup);
        return ids.map(function (id) {
            for (var k in keys) {
                if (_this.lookup[k] === id) {
                    return k;
                }
            }
            return null;
        });
    };
    LocalIDAssigner.prototype.mapOne = function (id) {
        if (id in this.lookup) {
            return this.lookup[id];
        }
        this.lookup[id] = this.pool.checkOut();
        return this.lookup[id];
    };
    LocalIDAssigner.prototype.map = function (ids) {
        var _this = this;
        var numbers = ids.map(function (d) { return _this.mapOne(d); });
        return __WEBPACK_IMPORTED_MODULE_3__range__["list"].apply(void 0, numbers);
    };
    return LocalIDAssigner;
}());
function createLocalAssigner() {
    var pool = new __WEBPACK_IMPORTED_MODULE_0__index__["IdPool"]();
    var lookup = {};
    function mapOne(id) {
        if (id in lookup) {
            return lookup[id];
        }
        lookup[id] = pool.checkOut();
        return lookup[id];
    }
    return function (ids) { return __WEBPACK_IMPORTED_MODULE_3__range__["list"].apply(void 0, ids.map(mapOne)); };
}
function asSelectOperation(v) {
    if (!v) {
        return SelectOperation.SET;
    }
    if (typeof v === 'string') {
        switch (v.toLowerCase()) {
            case 'add':
                return SelectOperation.ADD;
            case 'remove':
                return SelectOperation.REMOVE;
            default:
                return SelectOperation.SET;
        }
    }
    return +v;
}
function fillWithNone(r, ndim) {
    while (r.ndim < ndim) {
        r.dims[r.ndim] = __WEBPACK_IMPORTED_MODULE_3__range__["Range1D"].none();
    }
    return r;
}
var SelectAble = (function (_super) {
    __extends(SelectAble, _super);
    function SelectAble() {
        var _this = this;
        _super.apply(this, arguments);
        this.numSelectListeners = 0;
        this.selectionListeners = [];
        this.singleSelectionListener = function (event, type, act, added, removed) {
            _this.ids().then(function (ids) {
                //filter to the right ids and convert to indices format
                //given all ids convert the selected ids to the indices in the data type
                act = ids.indexOf(act);
                added = ids.indexOf(added);
                removed = ids.indexOf(removed);
                if (act.isNone && added.isNone && removed.isNone) {
                    return;
                }
                //ensure the right number of dimensions
                fillWithNone(act, ids.ndim);
                fillWithNone(added, ids.ndim);
                fillWithNone(removed, ids.ndim);
                _this.fire('select', type, act, added, removed);
                _this.fire('select-' + type, act, added, removed);
            });
        };
        this.selectionCache = [];
        this.accumulateEvents = -1;
    }
    SelectAble.prototype.ids = function (range) {
        throw new Error('not implemented');
    };
    SelectAble.prototype.fromIdRange = function (idRange) {
        if (idRange === void 0) { idRange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["all"])(); }
        return this.ids().then(function (ids) {
            return ids.indexOf(idRange);
        });
    };
    Object.defineProperty(SelectAble.prototype, "idtypes", {
        get: function () {
            throw new Error('not implemented');
        },
        enumerable: true,
        configurable: true
    });
    SelectAble.prototype.selectionListener = function (idtype, index, total) {
        var _this = this;
        var selectionListener = function (event, type, act, added, removed) {
            _this.selectionCache[index] = {
                act: act, added: added, removed: removed
            };
            if (_this.accumulateEvents < 0 || (++_this.accumulateEvents) === total) {
                _this.fillAndSend(type, index);
            }
        };
        return selectionListener;
    };
    SelectAble.prototype.fillAndSend = function (type, trigger) {
        var _this = this;
        var ids = this.idtypes;
        var full = ids.map(function (id, i) {
            var entry = _this.selectionCache[i];
            if (entry) {
                return entry;
            }
            return {
                act: id.selections(type),
                added: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["none"])(),
                removed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["none"])()
            };
        });
        var act = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["join"])(full.map(function (entry) { return entry.act; }));
        var added = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["join"])(full.map(function (entry) { return entry.added; }));
        var removed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["join"])(full.map(function (entry) { return entry.removed; }));
        this.selectionCache = [];
        this.accumulateEvents = -1; //reset
        this.ids().then(function (ids) {
            //filter to the right ids and convert to indices format
            act = ids.indexOf(act);
            added = ids.indexOf(added);
            removed = ids.indexOf(removed);
            if (act.isNone && added.isNone && removed.isNone) {
                return;
            }
            //ensure the right number of dimensions
            fillWithNone(act, ids.ndim);
            fillWithNone(added, ids.ndim);
            fillWithNone(removed, ids.ndim);
            _this.fire('select', type, act, added, removed);
            _this.fire('select-' + type, act, added, removed);
        });
    };
    SelectAble.prototype.on = function (events, handler) {
        var _this = this;
        if (typeof events === 'string' && (events === 'select' || events.slice(0, 'select-'.length) === 'select-')) {
            this.numSelectListeners++;
            if (this.numSelectListeners === 1) {
                var idt_1 = this.idtypes;
                if (idt_1.length === 1) {
                    this.selectionListeners.push(this.singleSelectionListener);
                    idt_1[0].on('select', this.singleSelectionListener);
                }
                else {
                    idt_1.forEach(function (idtype, i) {
                        var s = _this.selectionListener(idtype, i, idt_1.length);
                        _this.selectionListeners.push(s);
                        idtype.on('select', s);
                    });
                }
            }
        }
        return _super.prototype.on.call(this, events, handler);
    };
    SelectAble.prototype.off = function (events, handler) {
        var _this = this;
        if (typeof events === 'string' && events === 'select' || events.match('^select-') === 'select-') {
            this.numSelectListeners--;
            if (this.numSelectListeners === 0) {
                this.idtypes.forEach(function (idtype, i) { return idtype.off('select', _this.selectionListeners[i]); });
                this.selectionListeners = [];
            }
        }
        return _super.prototype.off.call(this, events, handler);
    };
    SelectAble.prototype.selections = function (type) {
        var _this = this;
        if (type === void 0) { type = defaultSelectionType; }
        return this.ids().then(function (ids) {
            var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["join"])(_this.idtypes.map(function (idtype) { return idtype.selections(type); }));
            return ids.indexRangeOf(r);
        });
    };
    SelectAble.prototype.select = function () {
        var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments);
        var dim = (typeof a[0] === 'number') ? +a.shift() : -1, type = (typeof a[0] === 'string') ? a.shift() : defaultSelectionType, range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["parse"])(a[0]), op = asSelectOperation(a[1]);
        return this.selectImpl(range, op, type, dim);
    };
    SelectAble.prototype.selectImpl = function (range, op, type, dim) {
        var _this = this;
        if (op === void 0) { op = SelectOperation.SET; }
        if (type === void 0) { type = defaultSelectionType; }
        if (dim === void 0) { dim = -1; }
        return this.ids().then(function (ids) {
            var types = _this.idtypes;
            if (dim === -1) {
                range = ids.preMultiply(range);
                _this.accumulateEvents = 0;
                var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["join"])(range.split().map(function (r, i) { return types[i].select(type, r, op); }));
                if (_this.accumulateEvents > 0) {
                    _this.fillAndSend(type, -1);
                }
                while (r.ndim < types.length) {
                    r.dim(r.ndim); //create intermediate ones
                }
                return ids.indexRangeOf(r);
            }
            else {
                //just a single dimension
                ids = ids.split()[dim];
                range = ids.preMultiply(range);
                types[dim].select(type, range, op);
                return ids.indexRangeOf(range);
            }
        });
    };
    SelectAble.prototype.clear = function () {
        var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments);
        var dim = (typeof a[0] === 'number') ? +a.shift() : -1;
        var type = (typeof a[0] === 'string') ? a[0] : defaultSelectionType;
        return this.selectImpl(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range__["none"])(), SelectOperation.SET, type, dim);
    };
    return SelectAble;
}(__WEBPACK_IMPORTED_MODULE_2__event__["EventHandler"]));
var ProductSelectAble = (function (_super) {
    __extends(ProductSelectAble, _super);
    function ProductSelectAble() {
        var _this = this;
        _super.apply(this, arguments);
        this.numProductSelectListeners = 0;
        this.productSelectionListener = function (event, index, type) {
            var cells = _this.producttype.productSelections(type);
            if (cells.length === 0) {
                _this.fire('selectProduct', type, []);
                _this.fire('selectProduct-' + type, []);
                return;
            }
            _this.ids().then(function (ids) {
                var act = cells.map(function (c) { return ids.indexOf(c); }).filter(function (c) { return !c.isNone; });
                if (act.length === 0) {
                    return;
                }
                //ensure the right number of dimensions
                act.forEach(function (a) { return fillWithNone(a, ids.ndim); });
                _this.fire('selectProduct', type, act);
                _this.fire('selectProduct-' + type, act);
            });
        };
    }
    Object.defineProperty(ProductSelectAble.prototype, "producttype", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    ProductSelectAble.prototype.on = function (events, handler) {
        if (typeof events === 'string' && (events === 'select' || events === 'selectProduct' || events.slice(0, 'select-'.length) === 'select-')) {
            this.numProductSelectListeners++;
            if (this.numProductSelectListeners === 1) {
                this.producttype.on('selectProduct', this.productSelectionListener);
            }
        }
        return _super.prototype.on.call(this, events, handler);
    };
    ProductSelectAble.prototype.off = function (events, handler) {
        if (typeof events === 'string' && (events === 'select' || events === 'selectProduct' || events.slice(0, 'select-'.length) === 'select-')) {
            this.numProductSelectListeners--;
            if (this.numProductSelectListeners === 0) {
                this.producttype.off('selectProduct', this.productSelectionListener);
            }
        }
        return _super.prototype.off.call(this, events, handler);
    };
    ProductSelectAble.prototype.productSelections = function (type) {
        var _this = this;
        if (type === void 0) { type = defaultSelectionType; }
        return this.ids().then(function (ids) {
            var cells = _this.producttype.productSelections(type);
            var act = cells.map(function (c) { return ids.indexRangeOf(c); }).filter(function (c) { return !c.isNone; });
            //ensure the right number of dimensions
            act.forEach(function (a) { return fillWithNone(a, ids.ndim); });
            return act;
        });
    };
    ProductSelectAble.prototype.selectProduct = function () {
        var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments);
        var type = (typeof a[0] === 'string') ? a.shift() : defaultSelectionType, range = a[0].map(__WEBPACK_IMPORTED_MODULE_3__range__["parse"]), op = asSelectOperation(a[1]);
        return this.selectProductImpl(range, op, type);
    };
    ProductSelectAble.prototype.selectProductImpl = function (cells, op, type) {
        var _this = this;
        if (op === void 0) { op = SelectOperation.SET; }
        if (type === void 0) { type = defaultSelectionType; }
        return this.ids().then(function (ids) {
            cells = cells.map(function (c) { return ids.preMultiply(c); });
            _this.producttype.select(type, cells, op);
        });
    };
    ProductSelectAble.prototype.clear = function () {
        var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments);
        if (typeof a[0] === 'number') {
            a.shift();
        }
        var type = (typeof a[0] === 'string') ? a[0] : defaultSelectionType;
        return this.selectProductImpl([], SelectOperation.SET, type || defaultSelectionType);
    };
    return ProductSelectAble;
}(SelectAble));
function fillUpData(entries) {
    entries.forEach(function (row) {
        var entry = cache[row.id];
        var new_ = false;
        if (entry) {
            if (entry instanceof IDType) {
                entry.name = row.name;
                entry.names = row.names;
            }
        }
        else {
            entry = new IDType(row.id, row.name, row.names);
            new_ = true;
        }
        cache[row.id] = entry;
        if (new_) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__event__["fire"])('register.idtype', entry);
        }
    });
}
function fillUp() {
    if (filledUp) {
        return;
    }
    filledUp = true;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/idtype', {}, []).then(function (c) {
        fillUpData(c);
        return cache;
    });
}
function toPlural(name) {
    if (name[name.length - 1] === 'y') {
        return name.slice(0, name.length - 1) + 'ies';
    }
    return name + 's';
}
function resolve(id) {
    if (id instanceof IDType) {
        return id;
    }
    else {
        return register(id, new IDType(id, id, toPlural(id)));
    }
}
function resolveProduct() {
    var idtypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        idtypes[_i - 0] = arguments[_i];
    }
    var p = new ProductIDType(idtypes);
    return register(p.id, p);
}
/**
 * list all known
 * @returns {{}|HTTPCache|xm.http.HTTPCache|boolean}
 */
function list() {
    fillUp(); //trigger loading of the meta data
    return Object.keys(cache).map(function (d) { return cache[d]; });
}
function register(id, idtype) {
    fillUp(); //trigger loading of the meta data
    if (cache.hasOwnProperty(id)) {
        return cache[id];
    }
    cache[id] = idtype;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__event__["fire"])('register.idtype', idtype);
    return idtype;
}
function persist() {
    var r = {};
    Object.keys(cache).forEach(function (id) {
        r[id] = cache[id].persist();
    });
    return r;
}
function restore(persisted) {
    Object.keys(persisted).forEach(function (id) {
        resolve(id).restore(persisted[id]);
    });
}
function clearSelection(type) {
    if (type === void 0) { type = defaultSelectionType; }
    Object.keys(cache).forEach(function (id) { return cache[id].clear(type); });
}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(0);
/* harmony export (immutable) */ exports["send"] = send;
/* harmony export (immutable) */ exports["getJSON"] = getJSON;
/* harmony export (immutable) */ exports["getData"] = getData;
/* harmony export (immutable) */ exports["api2absURL"] = api2absURL;
/* harmony export (immutable) */ exports["encodeParams"] = encodeParams;
/* harmony export (immutable) */ exports["sendAPI"] = sendAPI;
/* harmony export (immutable) */ exports["getAPIJSON"] = getAPIJSON;
/* harmony export (immutable) */ exports["getAPIData"] = getAPIData;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var AjaxError = (function (_super) {
    __extends(AjaxError, _super);
    function AjaxError(response, message) {
        _super.call(this, message ? message : response.statusText);
        this.response = response;
    }
    return AjaxError;
}(Error));
function checkStatus(response) {
    if (response.ok) {
        return response;
    }
    else {
        throw new AjaxError(response);
    }
}
function parseType(expectedDataType, response) {
    switch (expectedDataType.trim().toLowerCase()) {
        case 'json':
        case 'application/json':
            return response.json();
        case 'text':
        case 'text/plain':
            return response.text();
        case 'blob':
            return response.blob();
        case 'formdata':
            return response.formData();
        case 'arraybuffer':
            return response.arrayBuffer();
        default:
            throw new AjaxError(response, "unknown expected data type: \"" + expectedDataType + "\"");
    }
}
/**
 * sends an XML http request to the server
 * @param url url
 * @param data arguments
 * @param method the http method
 * @param expectedDataType expected data type to return, in case of JSON it will be parsed using JSON.parse
 * @returns {Promise<any>}
 */
function send(url, data, method, expectedDataType) {
    if (data === void 0) { data = {}; }
    if (method === void 0) { method = 'GET'; }
    if (expectedDataType === void 0) { expectedDataType = 'json'; }
    // for compatibility
    method = method.toUpperCase();
    // need to encode the body in the url in case of GET and HEAD
    if (method === 'GET' || method === 'HEAD') {
        data = encodeParams(data); //encode in url
        if (data) {
            url += (/\?/.test(url) ? '&' : '?') + data;
            data = null;
        }
    }
    var options = {
        credentials: 'same-origin',
        method: method,
        headers: {
            'Accept': 'application/json'
        },
    };
    if (data && !(data instanceof FormData)) {
        options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        options.body = encodeParams(data);
    }
    else if (data) {
        options.body = data;
    }
    // there are no typings for fetch so far
    return self.fetch(url, options)
        .then(checkStatus)
        .then(parseType.bind(null, expectedDataType));
}
/**
 * to get some ajax json file
 * @param url
 * @param data
 * @returns {any}
 */
function getJSON(url, data) {
    if (data === void 0) { data = {}; }
    return send(url, data);
}
/**
 * get some generic data via ajax
 * @param url
 * @param data
 * @param expectedDataType
 * @returns {any}
 */
function getData(url, data, expectedDataType) {
    if (data === void 0) { data = {}; }
    if (expectedDataType === void 0) { expectedDataType = 'json'; }
    return send(url, data, 'get', expectedDataType);
}
/**
 * converts the given api url to an absolute with optional get parameters
 * @param url
 * @param data
 * @returns {string}
 */
function api2absURL(url, data) {
    if (data === void 0) { data = null; }
    url = "" + __WEBPACK_IMPORTED_MODULE_0____["server_url"] + url + __WEBPACK_IMPORTED_MODULE_0____["server_json_suffix"];
    data = encodeParams(data);
    if (data) {
        url += (/\?/.test(url) ? '&' : '?') + data;
    }
    return url;
}
/**
 * convert a given object to url data similar to JQuery
 * @param url
 * @param data
 * @returns {any}
 */
function encodeParams(data) {
    if (data === void 0) { data = null; }
    if (data === null) {
        return null;
    }
    if (typeof data === 'string') {
        return encodeURIComponent(data);
    }
    var keys = Object.keys(data);
    if (keys.length === 0) {
        return null;
    }
    var s = [];
    function add(prefix, key, value) {
        if (Array.isArray(value)) {
            value.forEach(function (v, i) {
                if (typeof v === 'object') {
                    add(prefix, key + '[' + i + ']', v);
                }
                else {
                    //primitive values uses the same key
                    add(prefix, key + '[]', v);
                }
            });
        }
        else if (typeof value === 'object') {
            Object.keys(value).forEach(function (v) {
                add(prefix, key + '[' + v + ']', value[v]);
            });
        }
        else {
            s.push(encodeURIComponent(prefix + key) + '=' + encodeURIComponent(value));
        }
    }
    keys.forEach(function (key) {
        add('', key, data[key]);
    });
    // Return the resulting serialization
    return s.join('&').replace(/%20/g, '+');
}
function defaultOfflineGenerator() {
    return Promise.reject('offline');
}
function offline(generator, data) {
    if (data === void 0) { data = {}; }
    return Promise.resolve(typeof generator === 'function' ? generator(data) : generator);
}
/**
 * api version of send
 * @param url api relative url
 * @param data arguments
 * @param method http method
 * @param expectedDataType expected data type to return, in case of JSON it will be parsed using JSON.parse
 * @returns {Promise<any>}
 */
function sendAPI(url, data, method, expectedDataType, offlineGenerator) {
    if (data === void 0) { data = {}; }
    if (method === void 0) { method = 'get'; }
    if (expectedDataType === void 0) { expectedDataType = 'json'; }
    if (offlineGenerator === void 0) { offlineGenerator = defaultOfflineGenerator; }
    if (__WEBPACK_IMPORTED_MODULE_0____["offline"]) {
        return offline(offlineGenerator, data);
    }
    return send(api2absURL(url), data, method, expectedDataType);
}
/**
 * api version of getJSON
 * @param url api relative url
 * @param data arguments
 * @returns {Promise<any>}
 */
function getAPIJSON(url, data, offlineGenerator) {
    if (data === void 0) { data = {}; }
    if (offlineGenerator === void 0) { offlineGenerator = defaultOfflineGenerator; }
    if (__WEBPACK_IMPORTED_MODULE_0____["offline"]) {
        return offline(offlineGenerator, data);
    }
    return getJSON(api2absURL(url), data);
}
/**
 * api version of getData
 * @param url api relative url
 * @param data arguments
 * @param expectedDataType expected data type to return, in case of JSON it will be parsed using JSON.parse
 * @returns {Promise<any>}
 */
function getAPIData(url, data, expectedDataType, offlineGenerator) {
    if (data === void 0) { data = {}; }
    if (expectedDataType === void 0) { expectedDataType = 'json'; }
    if (offlineGenerator === void 0) { offlineGenerator = function () { return defaultOfflineGenerator; }; }
    if (__WEBPACK_IMPORTED_MODULE_0____["offline"]) {
        return offline(offlineGenerator, data);
    }
    return getData(api2absURL(url), data, expectedDataType);
}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__idtype__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony export (immutable) */ exports["isDataType"] = isDataType;
/* harmony export (immutable) */ exports["assignData"] = assignData;
/* harmony export (binding) */ __webpack_require__.d(exports, "DataTypeBase", function() { return DataTypeBase; });
/* harmony export (immutable) */ exports["transpose"] = transpose;
/* harmony export (immutable) */ exports["mask"] = mask;
/* harmony export (immutable) */ exports["categorical2partitioning"] = categorical2partitioning;
/* harmony export (immutable) */ exports["defineDataType"] = defineDataType;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



function isDataType(v) {
    if (v instanceof DataTypeBase) {
        return true;
    }
    //sounds good
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(v.idView) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(v.persist) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(v.restore) && v instanceof __WEBPACK_IMPORTED_MODULE_1__idtype__["SelectAble"] && ('desc' in v) && ('dim' in v));
}
/**
 * utility to assign a dataset to an html element, similar to d3
 * @param node
 * @param data
 */
function assignData(node, data) {
    node.__data__ = data;
}
/**
 * dummy data type just holding the description
 */
var DataTypeBase = (function (_super) {
    __extends(DataTypeBase, _super);
    function DataTypeBase(desc) {
        _super.call(this);
        this.desc = desc;
    }
    Object.defineProperty(DataTypeBase.prototype, "dim", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    DataTypeBase.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return Promise.resolve(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["none"])());
    };
    DataTypeBase.prototype.idView = function (idRange) {
        return Promise.resolve(this);
    };
    Object.defineProperty(DataTypeBase.prototype, "idtypes", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    DataTypeBase.prototype.persist = function () {
        return this.desc.id;
    };
    DataTypeBase.prototype.restore = function (persisted) {
        return this;
    };
    DataTypeBase.prototype.toString = function () {
        return this.persist();
    };
    return DataTypeBase;
}(__WEBPACK_IMPORTED_MODULE_1__idtype__["SelectAble"]));
/**
 * transpose the given matrix
 * @param m
 * @returns {*}
 */
function transpose(m) {
    if (m.length === 0 || m[0].length === 0) {
        return [];
    }
    var r = m[0].map(function (i) { return [i]; });
    for (var i = 1; i < m.length; ++i) {
        m[i].forEach(function (v, i) { return r[i].push(v); });
    }
    return r;
}
function maskImpl(arr, missing) {
    if (Array.isArray(arr)) {
        var vs = arr;
        if (vs.indexOf(missing) >= 0) {
            return vs.map(function (v) { return v === missing ? NaN : v; });
        }
    }
    return arr === missing ? NaN : arr;
}
function mask(arr, desc) {
    if (desc.type === 'int' && 'missing' in desc) {
        return maskImpl(arr, desc.missing);
    }
    return arr;
}
/**
 * converts the given categorical data to a grouped range
 * @param data
 * @param categories
 * @param options
 * @return {any}
 */
function categorical2partitioning(data, categories, options) {
    if (options === void 0) { options = {}; }
    var m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["mixin"])({
        skipEmptyCategories: true,
        colors: ['gray'],
        labels: null,
        name: 'Partitioning'
    }, options);
    var groups = categories.map(function (d, i) {
        return {
            name: m.labels ? m.labels[i] : d,
            color: m.colors[Math.min(i, m.colors.length - 1)],
            indices: []
        };
    });
    data.forEach(function (d, j) {
        var i = categories.indexOf(d);
        if (i >= 0) {
            groups[i].indices.push(j);
        }
    });
    if (m.skipEmptyCategories) {
        groups = groups.filter(function (g) { return g.indices.length > 0; });
    }
    var granges = groups.map(function (g) {
        return new __WEBPACK_IMPORTED_MODULE_2__range__["Range1DGroup"](g.name, g.color, __WEBPACK_IMPORTED_MODULE_2__range__["Range1D"].from(g.indices));
    });
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["composite"])(m.name, granges);
}
/**
 * utility function to create a datatype, designed for JavaScript usage
 * @param name
 * @param functions the functions to add
 * @return {function(IDataDescription): undefined}
 */
function defineDataType(name, functions) {
    function DataType(desc) {
        DataTypeBase.call(this, desc);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(this.init)) {
            this.init.apply(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments));
        }
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["extendClass"])(DataType, DataTypeBase);
    DataType.prototype.toString = function () { return name; };
    DataType.prototype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["mixin"])(DataType.prototype, functions);
    return DataType;
}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "EventHandler", function() { return EventHandler; });
/* harmony export (binding) */ __webpack_require__.d(exports, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(exports, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(exports, "fire", function() { return fire; });
/* harmony export (binding) */ __webpack_require__.d(exports, "list", function() { return list; });
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */
var Event = (function () {
    function Event(type, args, target, delegateTarget) {
        this.type = type;
        this.args = args;
        this.target = target;
        this.delegateTarget = delegateTarget;
        this.timeStamp = new Date();
        this.stopped = false;
        this.stopedPropagation = false;
    }
    Object.defineProperty(Event.prototype, "currentTarget", {
        get: function () {
            return this.target;
        },
        enumerable: true,
        configurable: true
    });
    Event.prototype.isImmediatePropagationStopped = function () {
        return this.stopped;
    };
    Event.prototype.stopImmediatePropagation = function () {
        this.stopped = true;
    };
    Event.prototype.isPropagationStopped = function () {
        return this.stopedPropagation;
    };
    Event.prototype.stopPropagation = function () {
        this.stopedPropagation = true;
    };
    return Event;
}());
var SingleEventHandler = (function () {
    function SingleEventHandler(type) {
        this.type = type;
        this.listeners = [];
        //nothing else to do
    }
    SingleEventHandler.prototype.push = function (listener) {
        this.listeners.push(listener);
    };
    SingleEventHandler.prototype.remove = function (listener) {
        var i = this.listeners.indexOf(listener);
        if (i >= 0) {
            this.listeners.splice(i, 1);
            return true;
        }
        return false;
    };
    SingleEventHandler.prototype.fire = function (event) {
        if (this.listeners.length === 0) {
            return false;
        }
        var largs = [event].concat(event.args);
        if (this.listeners.length === 1) {
            this.listeners[0].apply(event, largs);
        }
        else {
            //work on a copy in case the number changes
            var l = this.listeners.slice(), ll = l.length;
            for (var i = 0; i < ll && !event.isImmediatePropagationStopped(); ++i) {
                l[i].apply(event, largs);
            }
        }
        return true;
    };
    Object.defineProperty(SingleEventHandler.prototype, "length", {
        get: function () {
            return this.listeners.length;
        },
        enumerable: true,
        configurable: true
    });
    return SingleEventHandler;
}());
function createEvent(event, args, target) {
    return new Event(event, args, target, target);
}
function propagateEvent(event, target) {
    return new Event(event.type, event.args, target, event.target);
}
/**
 * EventHandler base class, in the backend JQuery is used
 */
var EventHandler = (function () {
    function EventHandler() {
        // TODO convert to Map
        this.handlers = {};
    }
    EventHandler.prototype.on = function (events, handler) {
        var _this = this;
        if (typeof events === 'string') {
            events.split(',').forEach(function (event) {
                if (!_this.handlers.hasOwnProperty(event)) {
                    _this.handlers[event] = new SingleEventHandler(event);
                }
                _this.handlers[event].push(handler);
            });
        }
        else {
            Object.keys(events).forEach(function (event) {
                var h = events[event];
                _this.on(event, h);
            });
        }
        return this;
    };
    EventHandler.prototype.off = function (events, handler) {
        var _this = this;
        if (typeof events === 'string') {
            events.split(',').forEach(function (event) {
                if (_this.handlers.hasOwnProperty(event)) {
                    var h = _this.handlers[event];
                    h.remove(handler);
                    if (h.length === 0) {
                        delete _this.handlers[event];
                    }
                }
            });
        }
        else {
            Object.keys(events).forEach(function (event) {
                var h = events[event];
                _this.off(event, h);
            });
        }
        return this;
    };
    /**
     * list all registered Events
     */
    EventHandler.prototype.list = function () {
        var _this = this;
        var r = {};
        Object.keys(this.handlers).forEach(function (type) {
            r[type] = _this.handlers[type].length;
        });
        return r;
    };
    /**
     * fires an event
     * @param event
     * @param args
     */
    EventHandler.prototype.fire = function (events) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        events.split(',').forEach(function (event) {
            _this.fireEvent(createEvent(event, args, _this));
        });
        return this;
    };
    EventHandler.prototype.fireEvent = function (event) {
        if (this.handlers.hasOwnProperty(event.type)) {
            var h = this.handlers[event.type];
            return h.fire(event);
        }
        return false;
    };
    /**
     * registers on the given event handler and propagates the given events to itself
     * @param progatee
     * @param events
     */
    EventHandler.prototype.propagate = function (progatee) {
        var _this = this;
        var events = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            events[_i - 1] = arguments[_i];
        }
        progatee.on(events.join(','), function (event) {
            if (!event.isPropagationStopped()) {
                _this.fireEvent(propagateEvent(event, _this));
            }
        });
    };
    return EventHandler;
}());
var global = new EventHandler();
/**
 * register a global event handler
 * @param events
 * @param handler
 */
var on = global.on.bind(global);
/**
 * unregister a global event handler
 * @param events
 * @param handler
 */
var off = global.off.bind(global);
/**
 * fires an event
 * @param event
 * @param extraArguments
 */
var fire = global.fire.bind(global);
/**
 * list all events
 */
var list = global.list.bind(global);


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony export (immutable) */ exports["register"] = register;
/* harmony export (immutable) */ exports["list"] = list;
/* harmony export (immutable) */ exports["get"] = get;
/* harmony export (immutable) */ exports["load"] = load;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */

var registry = [];
//TODO convert to Map
var knownPlugins = {};
function push(type, id_or_loader, desc_or_loader, desc) {
    var id = typeof id_or_loader === 'string' ? id_or_loader : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["uniqueString"])(type);
    var loader = typeof id_or_loader === 'string' ? desc_or_loader : desc_or_loader;
    var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["mixin"])({
        type: type,
        id: id,
        name: id,
        factory: 'create',
        description: '',
        version: '1.0.0',
        load: function () { return Promise.resolve(loader()).then(function (instance) { return ({ desc: p, factory: instance[p.factory] }); }); }
    }, typeof desc_or_loader === 'function' ? desc : desc_or_loader);
    registry.push(p);
}
function register(plugin, generator) {
    if (typeof generator !== 'function') {
        //wrong type - not a function, maybe a dummy inline
        return;
    }
    if (plugin in knownPlugins) {
        return; // don't call it twice
    }
    knownPlugins[plugin] = true;
    generator({
        push: push
    });
}
/**
 * returns a list of matching plugin descs
 * @param filter
 * @returns {IPluginDesc[]}
 */
function list(filter) {
    if (filter === void 0) { filter = __WEBPACK_IMPORTED_MODULE_0__index__["constantTrue"]; }
    if (typeof filter === 'string') {
        var v_1 = filter;
        filter = function (desc) { return desc.type === v_1; };
    }
    if (filter === __WEBPACK_IMPORTED_MODULE_0__index__["constantTrue"]) {
        return registry.slice();
    }
    return registry.filter(filter);
}
/**
 * returns an extension identified by type and id
 * @param type
 * @param id
 * @returns {IPluginDesc}
 */
function get(type, id) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["search"])(registry, function (d) { return d.type === type && d.id === id; });
}
function load(desc) {
    return Promise.all(desc.map(function (d) { return d.load(); }));
}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2D__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "CORNER", function() { return CORNER; });
/* harmony export (immutable) */ exports["vec"] = vec;
/* harmony export (binding) */ __webpack_require__.d(exports, "AShape", function() { return AShape; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Rect", function() { return Rect; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Ellipse", function() { return Ellipse; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Polygon", function() { return Polygon; });
/* harmony export (immutable) */ exports["vec2"] = vec2;
/* harmony export (immutable) */ exports["rect"] = rect;
/* harmony export (immutable) */ exports["circle"] = circle;
/* harmony export (immutable) */ exports["ellipse"] = ellipse;
/* harmony export (immutable) */ exports["line"] = line;
/* harmony export (immutable) */ exports["polygon"] = polygon;
/* harmony export (immutable) */ exports["wrap"] = wrap;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 08.10.2014.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var CORNER = [];
CORNER.N = CORNER[0] = 'n';
CORNER.NE = CORNER[1] = 'ne';
CORNER.E = CORNER[2] = 'e';
CORNER.SE = CORNER[3] = 'se';
CORNER.S = CORNER[4] = 's';
CORNER.SW = CORNER[5] = 'sw';
CORNER.W = CORNER[6] = 'w';
CORNER.NW = CORNER[7] = 'nw';
function vec(x, y) {
    if (y === void 0) { y = Number.NaN; }
    return new __WEBPACK_IMPORTED_MODULE_1__2D__["Vector2D"](x, y);
}
/**
 * a simple basic shape
 */
var AShape = (function () {
    function AShape() {
    }
    AShape.prototype.shift = function () {
        if (typeof arguments[0] === 'number') {
            this.shiftImpl(arguments[0], arguments[1]);
        }
        else if (Array.isArray(arguments[0])) {
            this.shiftImpl(arguments[0][0], arguments[0][1]);
        }
        else {
            this.shiftImpl(arguments[0].x, arguments[0].y);
        }
        return this;
    };
    Object.defineProperty(AShape.prototype, "center", {
        /**
         * center of this shape
         * @returns {Circle}
         */
        get: function () {
            return this.bs().xy;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * axis aligned bounding box (ro)
     */
    AShape.prototype.aabb = function () {
        throw new Error('not implemented');
    };
    /**
     * a specific corner of th axis aligned bounding box
     * @param corner
     * @returns {Vector2D}
     */
    AShape.prototype.corner = function (corner) {
        var r = this.aabb();
        switch (corner) {
            case CORNER.N:
                return vec2(r.cx, r.y);
            case CORNER.S:
                return vec2(r.cx, r.y2);
            case CORNER.W:
                return vec2(r.x, r.cy);
            case CORNER.E:
                return vec2(r.x2, r.cy);
            case CORNER.NE:
                return vec2(r.x2, r.y);
            case CORNER.NW:
                return r.xy;
            case CORNER.SE:
                return vec2(r.x2, r.y2);
            case CORNER.SW:
                return vec2(r.x, r.y2);
        }
        return this.center;
    };
    /**
     * bounding sphere (ro)
     */
    AShape.prototype.bs = function () {
        throw new Error('not implemented');
    };
    AShape.prototype.shiftImpl = function (x, y) {
        throw new Error('Not Implemented');
    };
    AShape.prototype.asIntersectionParams = function () {
        throw new Error('Not Implemented');
    };
    AShape.prototype.intersects = function (other) {
        return __WEBPACK_IMPORTED_MODULE_1__2D__["Intersection"].intersectShapes(this, other);
    };
    return AShape;
}());
/**
 * a simple bounding rect
 */
var Rect = (function (_super) {
    __extends(Rect, _super);
    function Rect(x, y, w, h) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (w === void 0) { w = 0; }
        if (h === void 0) { h = 0; }
        _super.call(this);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    Rect.prototype.eq = function (that) {
        return this.x === that.x && this.y === that.y && this.w === that.w && this.h === that.h;
    };
    Rect.prototype.toString = function () {
        return 'Rect(x=' + this.x + ',y=' + this.y + ',w=' + this.w + ',h=' + this.h + ')';
    };
    Object.defineProperty(Rect.prototype, "xy", {
        get: function () {
            return vec(this.x, this.y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "x2y2", {
        get: function () {
            return vec(this.x2, this.y2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "size", {
        get: function () {
            return vec(this.w, this.h);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "cx", {
        get: function () {
            return this.x + this.w / 2;
        },
        set: function (val) {
            this.x = val - this.w / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "cy", {
        get: function () {
            return this.y + this.h / 2;
        },
        set: function (val) {
            this.y = val - this.y / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "x2", {
        get: function () {
            return this.x + this.w;
        },
        set: function (val) {
            this.w = val - this.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "y2", {
        get: function () {
            return this.y + this.h;
        },
        set: function (val) {
            this.h = val - this.y;
        },
        enumerable: true,
        configurable: true
    });
    Rect.prototype.shiftImpl = function (x, y) {
        this.x += x;
        this.y += y;
    };
    Rect.prototype.aabb = function () {
        return this;
    };
    Rect.prototype.bs = function () {
        return circle(this.cx, this.cy, Math.sqrt(this.w * 2 + this.h * 2));
    };
    Rect.prototype.transform = function (scale, rotate) {
        //TODO rotate
        return rect(this.x * scale[0], this.y * scale[1], this.w * scale[0], this.h * scale[1]);
    };
    Rect.prototype.asIntersectionParams = function () {
        return {
            name: 'Rectangle',
            params: [this.xy, this.x2y2]
        };
    };
    return Rect;
}(AShape));
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, radius) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (radius === void 0) { radius = 0; }
        _super.call(this);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    Object.defineProperty(Circle.prototype, "xy", {
        get: function () {
            return vec(this.x, this.y);
        },
        enumerable: true,
        configurable: true
    });
    Circle.prototype.toString = function () {
        return 'Circle(x=' + this.x + ',y=' + this.y + ',radius=' + this.radius + ')';
    };
    Circle.prototype.shiftImpl = function (x, y) {
        this.x += x;
        this.y += y;
    };
    Circle.prototype.aabb = function () {
        return rect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    };
    Circle.prototype.bs = function () {
        return this;
    };
    Circle.prototype.transform = function (scale, rotate) {
        //TODO rotate
        return circle(this.x * scale[0], this.y * scale[1], this.radius * (scale[0] + scale[1]) / 2);
    };
    Circle.prototype.asIntersectionParams = function () {
        return {
            name: 'Circle',
            params: [this.xy, this.radius]
        };
    };
    return Circle;
}(AShape));
var Ellipse = (function (_super) {
    __extends(Ellipse, _super);
    function Ellipse(x, y, radiusX, radiusY) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (radiusX === void 0) { radiusX = 0; }
        if (radiusY === void 0) { radiusY = 0; }
        _super.call(this);
        this.x = x;
        this.y = y;
        this.radiusX = radiusX;
        this.radiusY = radiusY;
    }
    Object.defineProperty(Ellipse.prototype, "xy", {
        get: function () {
            return vec(this.x, this.y);
        },
        enumerable: true,
        configurable: true
    });
    Ellipse.prototype.toString = function () {
        return 'Ellipse(x=' + this.x + ',y=' + this.y + ',radiusX=' + this.radiusX + +',radiusY=' + this.radiusY + ')';
    };
    Ellipse.prototype.shiftImpl = function (x, y) {
        this.x += x;
        this.y += y;
    };
    Ellipse.prototype.aabb = function () {
        return rect(this.x - this.radiusX, this.y - this.radiusY, this.radiusX * 2, this.radiusY * 2);
    };
    Ellipse.prototype.bs = function () {
        return circle(this.x, this.y, Math.max(this.radiusX, this.radiusY));
    };
    Ellipse.prototype.transform = function (scale, rotate) {
        //TODO rotate
        return new Ellipse(this.x * scale[0], this.y * scale[1], this.radiusX * scale[0], this.radiusX * scale[1]);
    };
    Ellipse.prototype.asIntersectionParams = function () {
        return {
            name: 'Ellipse',
            params: [this.xy, this.radiusX, this.radiusY]
        };
    };
    return Ellipse;
}(AShape));
var Line = (function (_super) {
    __extends(Line, _super);
    function Line(x1, y1, x2, y2) {
        if (x1 === void 0) { x1 = 0; }
        if (y1 === void 0) { y1 = 0; }
        if (x2 === void 0) { x2 = 0; }
        if (y2 === void 0) { y2 = 0; }
        _super.call(this);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    Object.defineProperty(Line.prototype, "xy", {
        get: function () {
            return vec(this.x1, this.y1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "x1y1", {
        get: function () {
            return this.xy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "x2y2", {
        get: function () {
            return vec(this.x2, this.y2);
        },
        enumerable: true,
        configurable: true
    });
    Line.prototype.toString = function () {
        return 'Line(x1=' + this.x1 + ',y1=' + this.y1 + ',x2=' + this.x2 + +',y2=' + this.y2 + ')';
    };
    Line.prototype.shiftImpl = function (x, y) {
        this.x1 += x;
        this.y1 += y;
        this.x2 += x;
        this.y2 += y;
    };
    Line.prototype.aabb = function () {
        return rect(Math.min(this.x1, this.x2), Math.min(this.y1, this.y2), Math.abs(this.x1 - this.x2), Math.abs(this.y1 - this.y2));
    };
    Line.prototype.bs = function () {
        var x = 0.5 * (this.x1 + this.x2);
        var y = 0.5 * (this.y1 + this.y2);
        return circle(x, y, Math.max(Math.abs(this.x1 - this.x2), Math.abs(this.y1 - this.y2)) / 2);
    };
    Line.prototype.transform = function (scale, rotate) {
        //TODO rotate
        return new Line(this.x1 * scale[0], this.y1 * scale[1], this.x2 * scale[0], this.y2 * scale[1]);
    };
    Line.prototype.asIntersectionParams = function () {
        return {
            name: 'Line',
            params: [this.xy, this.x2y2]
        };
    };
    return Line;
}(AShape));
var Polygon = (function (_super) {
    __extends(Polygon, _super);
    function Polygon(points) {
        if (points === void 0) { points = []; }
        _super.call(this);
        this.points = points;
    }
    Polygon.prototype.push = function () {
        if (arguments.length === 2 && typeof arguments[0] === 'number') {
            this.points.push(vec2(arguments[0], arguments[1]));
        }
        else {
            (_a = this.points).push.apply(_a, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments));
        }
        var _a;
    };
    Polygon.prototype.toString = function () {
        return 'Polygon(' + this.points.join(',') + ')';
    };
    Polygon.prototype.shiftImpl = function (x, y) {
        this.points.forEach(function (p) {
            p.x += x;
            p.y += y;
        });
    };
    Object.defineProperty(Polygon.prototype, "length", {
        get: function () {
            return this.points.length;
        },
        enumerable: true,
        configurable: true
    });
    Polygon.prototype.aabb = function () {
        var min_x = Number.POSITIVE_INFINITY, min_y = Number.POSITIVE_INFINITY, max_x = Number.NEGATIVE_INFINITY, max_y = Number.NEGATIVE_INFINITY;
        this.points.forEach(function (p) {
            if (p.x < min_x) {
                min_x = p.x;
            }
            if (p.y < min_y) {
                min_y = p.y;
            }
            if (p.x > max_x) {
                max_x = p.x;
            }
            if (p.y > max_y) {
                max_y = p.y;
            }
        });
        return rect(min_x, min_y, max_x - min_x, max_y - min_y);
    };
    Polygon.prototype.bs = function () {
        var mean_x = 0, mean_y = 0;
        this.points.forEach(function (p) {
            mean_x += p.x;
            mean_y += p.y;
        });
        mean_x /= this.length;
        mean_y /= this.length;
        //TODO better polygon center
        var radius = 0;
        this.points.forEach(function (p) {
            var dx = p.x - mean_x;
            var dy = p.y - mean_y;
            var d = dx * dx + dy * dy;
            if (d > radius) {
                radius = d;
            }
        });
        return circle(mean_x, mean_y, Math.sqrt(radius));
    };
    Polygon.prototype.transform = function (scale, rotate) {
        //TODO rotate
        return polygon(this.points.map(function (p) { return vec2(p.x * scale[0], p.y * scale[1]); }));
    };
    Polygon.prototype.pointInPolygon = function (point) {
        var length = this.points.length;
        var counter = 0;
        var x_inter;
        var p1 = this.points[0];
        for (var i = 1; i <= length; i++) {
            var p2 = this.points[i % length];
            if (point.y > Math.min(p1.y, p2.y)) {
                if (point.y <= Math.max(p1.y, p2.y)) {
                    if (point.x <= Math.max(p1.x, p2.x)) {
                        if (p1.y !== p2.y) {
                            x_inter = (point.y - p1.y) * (p2.x - p1.x) / (p2.y - p1.y) + p1.x;
                            if (p1.x === p2.x || point.x <= x_inter) {
                                counter++;
                            }
                        }
                    }
                }
            }
            p1 = p2;
        }
        return (counter % 2 === 1);
    };
    Object.defineProperty(Polygon.prototype, "area", {
        get: function () {
            var area = 0;
            var length = this.points.length;
            for (var i = 0; i < length; i++) {
                var h1 = this.points[i];
                var h2 = this.points[(i + 1) % length];
                area += (h1.x * h2.y - h2.x * h1.y);
            }
            return area / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "centroid", {
        get: function () {
            var length = this.points.length;
            var area6x = 6 * this.area;
            var x_sum = 0;
            var y_sum = 0;
            for (var i = 0; i < length; i++) {
                var p1 = this.points[i];
                var p2 = this.points[(i + 1) % length];
                var cross = (p1.x * p2.y - p2.x * p1.y);
                x_sum += (p1.x + p2.x) * cross;
                y_sum += (p1.y + p2.y) * cross;
            }
            return vec2(x_sum / area6x, y_sum / area6x);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "isClockwise", {
        get: function () {
            return this.area < 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "isCounterClockwise", {
        get: function () {
            return this.area > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "isConcave", {
        get: function () {
            var positive = 0;
            var negative = 0;
            var length = this.points.length;
            for (var i = 0; i < length; i++) {
                var p0 = this.points[i];
                var p1 = this.points[(i + 1) % length];
                var p2 = this.points[(i + 2) % length];
                var v0 = __WEBPACK_IMPORTED_MODULE_1__2D__["Vector2D"].fromPoints(p0, p1);
                var v1 = __WEBPACK_IMPORTED_MODULE_1__2D__["Vector2D"].fromPoints(p1, p2);
                var cross = v0.cross(v1);
                if (cross < 0) {
                    negative++;
                }
                else {
                    positive++;
                }
            }
            return (negative !== 0 && positive !== 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "isConvex", {
        get: function () {
            return !this.isConcave;
        },
        enumerable: true,
        configurable: true
    });
    Polygon.prototype.asIntersectionParams = function () {
        return {
            name: 'Polygon',
            params: [this.points.slice()]
        };
    };
    return Polygon;
}(AShape));
function vec2(x, y) {
    return vec(x, y);
}
function rect(x, y, w, h) {
    return new Rect(x, y, w, h);
}
function circle(x, y, radius) {
    return new Circle(x, y, radius);
}
function ellipse(x, y, radiusX, radiusY) {
    return new Ellipse(x, y, radiusX, radiusY);
}
function line(x1, y1, x2, y2) {
    return new Line(x1, y1, x2, y2);
}
function polygon() {
    if (Array.isArray(arguments[0])) {
        return new Polygon(arguments[0]);
    }
    return new Polygon(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments));
}
function wrap(obj) {
    if (!obj) {
        return obj;
    }
    if (obj instanceof AShape) {
        return obj;
    }
    if (obj.hasOwnProperty('x') && obj.hasOwnProperty('y')) {
        if (obj.hasOwnProperty('radius') || obj.hasOwnProperty('r')) {
            return circle(obj.x, obj.y, obj.hasOwnProperty('radius') ? obj.radius : obj.r);
        }
        if ((obj.hasOwnProperty('radiusX') || obj.hasOwnProperty('rx')) && (obj.hasOwnProperty('radiusY') || obj.hasOwnProperty('ry'))) {
            return ellipse(obj.x, obj.y, obj.hasOwnProperty('radiusX') ? obj.radiusX : obj.rx, obj.hasOwnProperty('radiusY') ? obj.radiusY : obj.ry);
        }
        if (obj.hasOwnProperty('w') && obj.hasOwnProperty('h')) {
            return rect(obj.x, obj.y, obj.w, obj.h);
        }
        if (obj.hasOwnProperty('width') && obj.hasOwnProperty('height')) {
            return rect(obj.x, obj.y, obj.width, obj.height);
        }
    }
    if (obj.hasOwnProperty('x1') && obj.hasOwnProperty('y1') && obj.hasOwnProperty('x2') && obj.hasOwnProperty('y2')) {
        return line(obj.x1, obj.y1, obj.x2, obj.y2);
    }
    if (Array.isArray(obj) && obj.length > 0 && obj[0].hasOwnProperty('x') && obj[0].hasOwnProperty('y')) {
        return polygon(obj);
    }
    return obj; //can't derive it, yet
}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(0);
/* harmony export (immutable) */ exports["computeStats"] = computeStats;
/* harmony export (immutable) */ exports["hist"] = hist;
/* harmony export (immutable) */ exports["categoricalHist"] = categoricalHist;
/* harmony export (immutable) */ exports["rangeHist"] = rangeHist;
/* harmony export (immutable) */ exports["wrapHist"] = wrapHist;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 29.08.2014.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var Statistics = (function () {
    function Statistics() {
        this.min = NaN;
        this.max = NaN;
        this.sum = 0;
        this.mean = 0;
        this._var = 0;
        this.n = 0;
        this.nans = 0;
        this.moment2 = NaN;
        this.moment3 = NaN;
        this.moment4 = NaN;
    }
    Object.defineProperty(Statistics.prototype, "var", {
        get: function () {
            return this.n > 1 ? this._var / (this.n - 1) : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Statistics.prototype, "sd", {
        /** Returns the standard deviation */
        get: function () {
            return Math.sqrt(this.var);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Statistics.prototype, "kurtosis", {
        get: function () {
            if (this.n === 0) {
                return 0;
            }
            return (this.n * this.moment4) / (this.moment2 * this.moment2) - 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Statistics.prototype, "skewness", {
        get: function () {
            if (this.n === 0) {
                return 0;
            }
            return Math.sqrt(this.n) * this.moment3 / (Math.pow(this.moment2, 3. / 2.));
        },
        enumerable: true,
        configurable: true
    });
    Statistics.prototype.push = function (x) {
        x = +x;
        if (isNaN(x)) {
            this.nans++;
            return;
        }
        this.n++;
        this.sum += x;
        if (x < this.min || isNaN(this.min)) {
            this.min = x;
        }
        if (this.max < x || isNaN(this.max)) {
            this.max = x;
        }
        // http://www.johndcook.com/standard_deviation.html
        // See Knuth TAOCP vol 2, 3rd edition, page 232
        // http://en.wikipedia.org/wiki/Algorithms_for_calculating_variance#Higher-order_statistics
        if (this.n === 1) {
            this.mean = x;
            this._var = 0;
            this.moment2 = this.moment3 = this.moment4 = 0;
        }
        else {
            var mean_m1 = this.mean;
            this.mean = mean_m1 + (x - mean_m1) / this.n;
            this._var = this._var + (x - mean_m1) * (x - this.mean);
            var delta = x - mean_m1;
            var delta_n = delta / this.n;
            var delta_n2 = delta_n * delta_n;
            var term1 = delta * delta_n * (this.n - 1);
            this.moment4 += term1 * delta_n2 * (this.n * this.n - 3 * this.n + 3) + 6 * delta_n2 * this.moment2 - 4 * delta_n * this.moment3;
            this.moment3 += term1 * delta_n * (this.n - 2) - 3 * delta_n * this.moment2;
            this.moment2 += term1;
        }
    };
    return Statistics;
}());
function computeStats() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i - 0] = arguments[_i];
    }
    var r = new Statistics();
    arr.forEach(function (a) { return a.forEach(r.push, r); });
    return r;
}
function hist(arr, indices, size, bins, range) {
    var r = new Histogram(bins, range);
    r.pushAll(arr, indices, size);
    return r;
}
function categoricalHist(arr, indices, size, categories, labels, colors) {
    var r = new CatHistogram(categories, labels, colors);
    r.pushAll(arr, indices, size);
    return r;
}
function rangeHist(range) {
    return new RangeHistogram(range);
}
function wrapHist(hist, value_range) {
    return new Histogram(hist.length, value_range, hist);
}
var AHistogram = (function () {
    function AHistogram(bins, hist) {
        this.missing_ = 0;
        this.missingRange_ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__range__["none"])();
        this.bins_ = [];
        for (var i = 0; i < bins; ++i) {
            this.bins_.push(hist && hist.length > i ? hist[i] : 0);
        }
    }
    Object.defineProperty(AHistogram.prototype, "largestFrequency", {
        get: function () {
            return Math.max(Math.max.apply(Math, this.bins_), this.missing_);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AHistogram.prototype, "largestBin", {
        get: function () {
            return Math.max.apply(Math, this.bins_);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AHistogram.prototype, "count", {
        get: function () {
            return this.validCount + this.missing_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AHistogram.prototype, "validCount", {
        get: function () {
            return this.bins_.reduce(function (p, s) { return p + s; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AHistogram.prototype, "bins", {
        get: function () {
            return this.bins_.length;
        },
        enumerable: true,
        configurable: true
    });
    AHistogram.prototype.binOf = function (value) {
        return -1;
    };
    AHistogram.prototype.frequency = function (bin) {
        return this.bins_[bin];
    };
    AHistogram.prototype.range = function (bin) {
        return this.ranges_ ? this.ranges_[bin] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__range__["none"])();
    };
    Object.defineProperty(AHistogram.prototype, "missing", {
        get: function () {
            return this.missing_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AHistogram.prototype, "missingRange", {
        get: function () {
            return this.missingRange_;
        },
        enumerable: true,
        configurable: true
    });
    AHistogram.prototype.pushAll = function (arr, indices, size) {
        var _this = this;
        var binindex = [], missingindex = [];
        for (var i = this.bins - 1; i >= 0; --i) {
            binindex.push([]);
        }
        if (indices) {
            var it_1 = indices.iter(size);
            arr.forEach(function (x) {
                var index = it_1.next();
                var bin = _this.binOf(x);
                if (bin < 0) {
                    _this.missing_++;
                    missingindex.push(index);
                }
                else {
                    _this.bins_[bin]++;
                    binindex[bin].push(index);
                }
            });
            //build range and remove duplicates
            this.ranges_ = binindex.map(function (d) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__range__["list"])(d.sort().filter(function (di, i, a) { return di !== a[i - 1]; })); });
            this.missingRange_ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__range__["list"])(missingindex.sort().filter(function (di, i, a) { return di !== a[i - 1]; }));
        }
        else {
            arr.forEach(function (x) {
                var bin = _this.binOf(x);
                if (bin < 0) {
                    _this.missing_++;
                }
                else {
                    _this.bins_[bin]++;
                }
            });
            this.ranges_ = null;
            this.missingRange_ = null;
        }
    };
    AHistogram.prototype.forEach = function (callbackfn, thisArg) {
        return this.bins_.forEach(callbackfn, thisArg);
    };
    return AHistogram;
}());
var Histogram = (function (_super) {
    __extends(Histogram, _super);
    function Histogram(bins, value_range, hist) {
        _super.call(this, bins, hist);
        this.value_range = value_range;
    }
    Histogram.prototype.binOf = function (value) {
        if (typeof value === 'number') {
            return this.binOfImpl(value);
        }
        return -1;
    };
    Histogram.prototype.binOfImpl = function (value) {
        if (isNaN(value)) {
            return -1;
        }
        var n = (value - this.value_range[0]) / (this.value_range[1] - this.value_range[0]);
        var bin = Math.round(n * (this.bins - 1));
        if (bin < 0) {
            bin = 0;
        }
        if (bin >= this.bins) {
            bin = this.bins - 1;
        }
        return isNaN(bin) ? -1 : bin;
    };
    return Histogram;
}(AHistogram));
var CatHistogram = (function (_super) {
    __extends(CatHistogram, _super);
    function CatHistogram(values, categories, colors) {
        _super.call(this, values.length);
        this.values = values;
        this.categories = categories;
        this.colors = colors;
    }
    CatHistogram.prototype.binOf = function (value) {
        return this.values.indexOf(value);
    };
    return CatHistogram;
}(AHistogram));
var RangeHistogram = (function () {
    function RangeHistogram(range_) {
        this.range_ = range_;
    }
    Object.defineProperty(RangeHistogram.prototype, "categories", {
        get: function () {
            return this.range_.groups.map(function (g) { return g.name; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeHistogram.prototype, "colors", {
        get: function () {
            return this.range_.groups.map(function (g) { return g.color; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeHistogram.prototype, "largestFrequency", {
        get: function () {
            return Math.max.apply(Math, this.range_.groups.map(function (g) { return g.length; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeHistogram.prototype, "largestBin", {
        get: function () {
            return this.largestFrequency;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeHistogram.prototype, "count", {
        get: function () {
            return this.range_.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeHistogram.prototype, "validCount", {
        get: function () {
            return this.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeHistogram.prototype, "bins", {
        get: function () {
            return this.range_.groups.length;
        },
        enumerable: true,
        configurable: true
    });
    RangeHistogram.prototype.binOf = function (value) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["indexOf"])(this.range_.groups, function (g) { return g.name === value; });
    };
    RangeHistogram.prototype.frequency = function (bin) {
        return this.range_.groups[bin].length;
    };
    RangeHistogram.prototype.range = function (bin) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__range__["list"])(this.range_.groups[bin]);
    };
    Object.defineProperty(RangeHistogram.prototype, "missing", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeHistogram.prototype, "missingRange", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__range__["none"])();
        },
        enumerable: true,
        configurable: true
    });
    RangeHistogram.prototype.forEach = function (callbackfn, thisArg) {
        return this.range_.groups.forEach(function (g, i) { return callbackfn.call(thisArg, g.length, i); });
    };
    return RangeHistogram;
}());


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajax__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__idtype__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stratification__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(exports, "VectorBase", function() { return VectorBase; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Vector", function() { return Vector; });
/* harmony export (binding) */ __webpack_require__.d(exports, "StratificationVector", function() { return StratificationVector; });
/* harmony export (immutable) */ exports["create"] = create;
/* harmony export (immutable) */ exports["wrap"] = wrap;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};







/**
 * base class for different Vector implementations, views, transposed,...
 */
var VectorBase = (function (_super) {
    __extends(VectorBase, _super);
    function VectorBase(_root) {
        _super.call(this);
        this._root = _root;
    }
    Object.defineProperty(VectorBase.prototype, "dim", {
        get: function () {
            return [this.length];
        },
        enumerable: true,
        configurable: true
    });
    VectorBase.prototype.data = function (range) {
        throw new Error('not implemented');
    };
    VectorBase.prototype.size = function () {
        throw new Error('not implemented');
    };
    Object.defineProperty(VectorBase.prototype, "length", {
        get: function () {
            return this.size();
        },
        enumerable: true,
        configurable: true
    });
    VectorBase.prototype.view = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return new VectorView(this._root, range);
    };
    VectorBase.prototype.idView = function (idRange) {
        var _this = this;
        if (idRange === void 0) { idRange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.ids().then(function (ids) { return _this.view(ids.indexOf(idRange)); });
    };
    VectorBase.prototype.stats = function () {
        return this.data().then(function (d) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__math__["computeStats"])(d); });
    };
    Object.defineProperty(VectorBase.prototype, "indices", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["range"])(0, this.length);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * return the range of this vector as a grouped range, depending on the type this might be a single group or multiple ones
     */
    VectorBase.prototype.groups = function () {
        var _this = this;
        var v = this._root.valuetype;
        if (v.type === 'categorical') {
            return this.data().then(function (d) {
                var options = {
                    name: _this._root.desc.id
                };
                if (v.categories[0].color) {
                    options.colors = v.categories.map(function (d) { return d.color; });
                }
                if (v.categories[0].label) {
                    options.labels = v.categories.map(function (d) { return d.label; });
                }
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__datatype__["categorical2partitioning"])(d, v.categories.map(function (d) { return typeof d === 'string' ? d : d.name; }), options);
            });
        }
        else {
            return Promise.resolve(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["composite"])(this._root.desc.id, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["asUngrouped"])(this.indices.dim(0))]));
        }
    };
    VectorBase.prototype.stratification = function () {
        var _this = this;
        return this.groups().then(function (range) {
            return new StratificationVector(_this, range);
        });
    };
    VectorBase.prototype.hist = function (bins, range) {
        var _this = this;
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        var v = this._root.valuetype;
        return this.data(range).then(function (d) {
            switch (v.type) {
                case 'categorical':
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__math__["categoricalHist"])(d, _this.indices.dim(0), d.length, v.categories.map(function (d) { return typeof d === 'string' ? d : d.name; }), v.categories.map(function (d) { return typeof d === 'string' ? d : d.name || d.label; }), v.categories.map(function (d) { return typeof d === 'string' ? 'gray' : d.color || 'gray'; }));
                case 'real':
                case 'int':
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__math__["hist"])(d, _this.indices.dim(0), d.length, bins ? bins : Math.round(Math.sqrt(_this.length)), v.range);
                default:
                    return null; //cant create hist for unique objects or other ones
            }
        });
    };
    VectorBase.prototype.every = function (callbackfn, thisArg) {
        return this.data().then(function (d) { return d.every(callbackfn, thisArg); });
    };
    VectorBase.prototype.some = function (callbackfn, thisArg) {
        return this.data().then(function (d) { return d.some(callbackfn, thisArg); });
    };
    VectorBase.prototype.forEach = function (callbackfn, thisArg) {
        this.data().then(function (d) { return d.forEach(callbackfn, thisArg); });
    };
    VectorBase.prototype.reduce = function (callbackfn, initialValue, thisArg) {
        function helper() {
            return callbackfn.apply(thisArg, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments));
        }
        return this.data().then(function (d) { return d.reduce(helper, initialValue); });
    };
    VectorBase.prototype.reduceRight = function (callbackfn, initialValue, thisArg) {
        function helper() {
            return callbackfn.apply(thisArg, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments));
        }
        return this.data().then(function (d) { return d.reduceRight(helper, initialValue); });
    };
    VectorBase.prototype.restore = function (persisted) {
        var r = this;
        if (persisted && persisted.range) {
            r = r.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(persisted.range));
        }
        return r;
    };
    return VectorBase;
}(__WEBPACK_IMPORTED_MODULE_3__idtype__["SelectAble"]));
function viaAPILoader() {
    var _loader = undefined;
    return function (desc) {
        if (_loader) {
            return _loader;
        }
        return _loader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/dataset/' + desc.id).then(function (data) {
            data.rowIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(data.rowIds);
            return data;
        });
    };
}
function viaDataLoader(rows, rowIds, data) {
    var _data = undefined;
    return function (desc) {
        if (_data) {
            return Promise.resolve(_data);
        }
        _data = {
            rowIds: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(rowIds),
            rows: rows,
            data: data
        };
        return Promise.resolve(_data);
    };
}
/**
 * root matrix implementation holding the data
 */
var Vector = (function (_super) {
    __extends(Vector, _super);
    function Vector(desc, loader) {
        _super.call(this, null);
        this.desc = desc;
        this.loader = loader;
        this._root = this;
        var d = desc;
        this.valuetype = d.value;
        this._idtype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__idtype__["resolve"])(d.idtype);
    }
    Object.defineProperty(Vector.prototype, "idtype", {
        get: function () {
            return this._idtype;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * loads all the underlying data in json format
     * TODO: load just needed data and not everything given by the requested range
     * @returns {*}
     */
    Vector.prototype.load = function () {
        return this.loader(this.desc);
    };
    /**
     * access at a specific position
     * @param i
     * @param j
     * @returns {*}
     */
    Vector.prototype.at = function (i) {
        return this.load().then(function (d) {
            return d.data[i];
        });
    };
    Vector.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        var that = this;
        return this.load().then(function (data) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__datatype__["mask"])(range.filter(data.data, that.dim), that.valuetype);
        });
    };
    Vector.prototype.names = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        var that = this;
        return this.load().then(function (data) {
            return range.filter(data.rows, that.dim);
        });
    };
    Vector.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        var that = this;
        return this.load().then(function (data) {
            return data.rowIds.preMultiply(range, that.dim);
        });
    };
    Object.defineProperty(Vector.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    Vector.prototype.size = function () {
        return this.desc.size;
    };
    Vector.prototype.sort = function (compareFn, thisArg) {
        var _this = this;
        return this.data().then(function (d) {
            var indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argSort"])(d, compareFn, thisArg);
            return _this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices));
        });
    };
    Vector.prototype.map = function (callbackfn, thisArg) {
        //FIXME
        return null;
    };
    Vector.prototype.filter = function (callbackfn, thisArg) {
        var _this = this;
        return this.data().then(function (d) {
            var indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argFilter"])(d, callbackfn, thisArg);
            return _this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices));
        });
    };
    Vector.prototype.persist = function () {
        return this.desc.id;
    };
    return Vector;
}(VectorBase));
/**
 * view on the vector restricted by a range
 * @param root underlying matrix
 * @param range range selection
 * @param t optional its transposed version
 * @constructor
 */
var VectorView = (function (_super) {
    __extends(VectorView, _super);
    function VectorView(root, range) {
        _super.call(this, root);
        this.range = range;
    }
    Object.defineProperty(VectorView.prototype, "desc", {
        get: function () {
            return this._root.desc;
        },
        enumerable: true,
        configurable: true
    });
    VectorView.prototype.persist = function () {
        return {
            root: this._root.persist(),
            range: this.range.toString()
        };
    };
    VectorView.prototype.size = function () {
        return this.range.size(this._root.dim)[0];
    };
    VectorView.prototype.at = function (i) {
        var inverted = this.range.invert([i], this._root.dim);
        return this._root.at(inverted[0]);
    };
    VectorView.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this._root.data(this.range.preMultiply(range, this._root.dim));
    };
    VectorView.prototype.names = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this._root.names(this.range.preMultiply(range, this._root.dim));
    };
    VectorView.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this._root.ids(this.range.preMultiply(range, this._root.dim));
    };
    VectorView.prototype.view = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        if (range.isAll) {
            return this;
        }
        return new VectorView(this._root, this.range.preMultiply(range, this.dim));
    };
    Object.defineProperty(VectorView.prototype, "valuetype", {
        get: function () {
            return this._root.valuetype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VectorView.prototype, "idtype", {
        get: function () {
            return this._root.idtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VectorView.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    /*get indices() {
      return this.range;
    }*/
    VectorView.prototype.sort = function (compareFn, thisArg) {
        var _this = this;
        return this.data().then(function (d) {
            var indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argSort"])(d, compareFn, thisArg);
            return _this.view(_this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices)));
        });
    };
    VectorView.prototype.map = function (callbackfn, thisArg) {
        //FIXME
        return null;
    };
    VectorView.prototype.filter = function (callbackfn, thisArg) {
        var _this = this;
        return this.data().then(function (d) {
            var indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argFilter"])(d, callbackfn, thisArg);
            return _this.view(_this.range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices)));
        });
    };
    return VectorView;
}(VectorBase));
/**
 * root matrix implementation holding the data
 */
var StratificationVector = (function (_super) {
    __extends(StratificationVector, _super);
    function StratificationVector(v, r) {
        _super.call(this, {
            id: v.desc.id + '-s',
            name: v.desc.name,
            fqname: v.desc.fqname,
            type: 'stratification',
            size: v.dim,
            ngroups: r.groups.length,
            groups: r.groups.map(function (ri) { return ({ name: ri.name, color: ri.color, size: ri.length }); })
        });
        this.v = v;
        this.r = r;
    }
    Object.defineProperty(StratificationVector.prototype, "idtype", {
        get: function () {
            return this.v.idtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StratificationVector.prototype, "groups", {
        get: function () {
            return this.desc.groups;
        },
        enumerable: true,
        configurable: true
    });
    StratificationVector.prototype.group = function (group) {
        return new __WEBPACK_IMPORTED_MODULE_6__stratification__["StratificationGroup"](this, group, this.groups[group]);
    };
    StratificationVector.prototype.hist = function (bins, range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.range().then(function (r) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__math__["rangeHist"])(r);
        });
    };
    StratificationVector.prototype.vector = function () {
        return Promise.resolve(this.v);
    };
    StratificationVector.prototype.origin = function () {
        return this.vector();
    };
    StratificationVector.prototype.range = function () {
        return Promise.resolve(this.r);
    };
    StratificationVector.prototype.idRange = function () {
        var _this = this;
        var that = this;
        return this.ids().then(function (ids) {
            var range = _this.r;
            return ids.dim(0).preMultiply(range, that.dim[0]);
        });
    };
    StratificationVector.prototype.names = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.v.names(range);
    };
    StratificationVector.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.v.ids(range);
    };
    Object.defineProperty(StratificationVector.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    StratificationVector.prototype.size = function () {
        return this.desc.size;
    };
    Object.defineProperty(StratificationVector.prototype, "length", {
        get: function () {
            return this.size()[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StratificationVector.prototype, "ngroups", {
        get: function () {
            return this.desc.ngroups;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StratificationVector.prototype, "dim", {
        get: function () {
            return this.size();
        },
        enumerable: true,
        configurable: true
    });
    StratificationVector.prototype.persist = function () {
        return {
            root: this.v.persist(),
            asstrat: true
        };
    };
    return StratificationVector;
}(__WEBPACK_IMPORTED_MODULE_4__datatype__["DataTypeBase"]));
/**
 * module entry point for creating a datatype
 * @param desc
 * @returns {IVector}
 */
function create(desc) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(desc.loader)) {
        return new Vector(desc, desc.loader);
    }
    return new Vector(desc, viaAPILoader());
}
function wrap(desc, rows, rowIds, data) {
    return new Vector(desc, viaDataLoader(rows, rowIds, data));
}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajax__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugin__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datatype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__table_impl__ = __webpack_require__(13);
/* harmony export (immutable) */ exports["clearCache"] = clearCache;
/* harmony export (immutable) */ exports["fixId"] = fixId;
/* harmony export (binding) */ __webpack_require__.d(exports, "random_id", function() { return random_id; });
/* harmony export (immutable) */ exports["list"] = list;
/* harmony export (immutable) */ exports["convertToTree"] = convertToTree;
/* harmony export (immutable) */ exports["tree"] = tree;
/* harmony export (immutable) */ exports["getFirst"] = getFirst;
/* harmony export (immutable) */ exports["getFirstByName"] = getFirstByName;
/* harmony export (immutable) */ exports["getFirstByFQName"] = getFirstByFQName;
/* harmony export (immutable) */ exports["get"] = get;
/* harmony export (immutable) */ exports["create"] = create;
/* harmony export (immutable) */ exports["upload"] = upload;
/* harmony export (immutable) */ exports["update"] = update;
/* harmony export (immutable) */ exports["modify"] = modify;
/* harmony export (immutable) */ exports["remove"] = remove;
/* harmony export (immutable) */ exports["convertToTable"] = convertToTable;
/* harmony export (immutable) */ exports["convertTableToVectors"] = convertTableToVectors;
/* harmony export (immutable) */ exports["listAsTable"] = listAsTable;





//find all datatype plugins
var available = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__plugin__["list"])('datatype');
// TODO convert to Map
var cacheById = {};
var cacheByName = {};
var cacheByFQName = {};
function clearCache(dataset) {
    if (dataset) {
        var desc = dataset.desc || dataset;
        delete cacheById[desc.id];
        delete cacheByName[desc.name];
        delete cacheByFQName[desc.fqname];
    }
    else {
        cacheById = {};
        cacheByName = {};
        cacheByFQName = {};
    }
}
function getCachedEntries() {
    return Promise.all(Object.keys(cacheById).map(function (k) { return cacheById[k]; }));
}
function cached(desc, result) {
    cacheById[desc.id] = result;
    cacheByFQName[desc.fqname] = result;
    cacheByName[desc.name] = result;
    return result;
}
/**
 * fix an given id to be used as an HTML id
 * @param id
 * @returns {string|void}
 */
function fixId(id) {
    var r = id.replace(/[!#$%&'\(\)\*\+,\.\/:;<=>\?@\[\\\]\^`\{\|}~_]/g, ' ');
    //title
    r = r.toLowerCase();
    r = r.split(/\s/).map(function (s, i) { return i === 0 ? s : s[0].toUpperCase() + s.substr(1); }).join('');
    return r;
}
var random_id = __WEBPACK_IMPORTED_MODULE_0__index__["random_id"];
/**
 * create an object out of a description
 * @param desc
 * @returns {*}
 */
function transformEntry(desc) {
    if (desc === undefined) {
        return null;
    }
    desc.id = desc.id || fixId(desc.name + random_id(5));
    desc.fqname = desc.fqname || desc.name;
    if (desc.id in cacheById) {
        return cacheById[desc.id];
    }
    //find matching type
    var plugin = available.filter(function (p) { return p.id === desc.type; });
    //no type there create a dummy one
    if (plugin.length === 0) {
        return cached(desc, Promise.resolve(new __WEBPACK_IMPORTED_MODULE_3__datatype__["DataTypeBase"](desc)));
    }
    //take the first matching one
    return cached(desc, plugin[0].load().then(function (p) {
        return p.factory(desc);
    }));
}
function list(query) {
    var f = (typeof query === 'function') ? query : __WEBPACK_IMPORTED_MODULE_0__index__["constantTrue"];
    var q = (typeof query !== 'undefined' && typeof query !== 'function') ? query : {};
    var r = __WEBPACK_IMPORTED_MODULE_0__index__["offline"] ? getCachedEntries() : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/dataset/', q).then(function (descs) {
        //load descriptions and create data out of them
        return Promise.all(descs.map(function (desc) { return transformEntry(desc); }));
    });
    if (f !== __WEBPACK_IMPORTED_MODULE_0__index__["constantTrue"]) {
        r = r.then(function (arr) { return arr.filter(f); });
    }
    return r;
}
/**
 * converts a given list of datasets to a tree
 * @param list
 * @returns {{children: Array, name: string, data: null}}
 */
function convertToTree(list) {
    //create a tree out of the list by the fqname
    var root = { children: [], name: '/', data: null };
    list.forEach(function (entry) {
        var path = entry.desc.fqname.split('/');
        var act = root;
        path.forEach(function (node) {
            var next = act.children.filter(function (d) { return d.name === node; })[0];
            if (!next) {
                next = { children: [], name: node, data: null };
                act.children.push(next);
            }
            act = next;
        });
        act.data = entry;
    });
    return root;
}
function tree(query) {
    return list(query).then(convertToTree);
}
/**
 * returns the first dataset matching the given query
 * @param query
 * @returns {any}
 */
function getFirst(query) {
    if (typeof query === 'string' || query instanceof RegExp) {
        return getFirstByName(query);
    }
    query.limit = 1;
    return list(query).then(function (result) {
        if (result.length === 0) {
            return Promise.reject({ error: 'nothing found, matching', args: query });
        }
        return Promise.resolve(result[0]);
    });
}
/*function escapeRegExp(string){
 return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
 }*/
function getFirstByName(name) {
    return getFirstWithCache(name, cacheByName, 'name');
}
function getFirstByFQName(name) {
    return getFirstWithCache(name, cacheByFQName, 'fqname');
}
function getFirstWithCache(name, cache, attr) {
    if (attr === void 0) { attr = 'name'; }
    var r = null, inCache = Object.keys(cache).some(function (n) {
        if (n.match(name) != null) {
            r = cache[n];
            return true;
        }
        return false;
    });
    if (inCache) {
        return r;
    }
    return getFirst((_a = {},
        _a[attr] = typeof name === 'string' ? name : name.source,
        _a
    ));
    var _a;
}
function getById(id) {
    if (id in cacheById) {
        return cacheById[id];
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/dataset/' + id + '/desc', {}).then(transformEntry);
}
/**
 * returns a promise for getting a specific dataset
 * @param persisted an id or peristed object containing the id
 * @returns {Promise<IDataType>}
 */
function get(persisted) {
    if (typeof persisted === 'string') {
        return getById(persisted);
    }
    //resolve parent and then resolve it using restore item
    if (persisted.root) {
        return get(persisted.root).then(function (parent) {
            return parent ? parent.restore(persisted) : null;
        });
    }
    else {
        //can't restore non root and non data id
        return Promise.reject('cant restore non root and non data id');
    }
}
/**
 * creates a new dataset for the given description
 * @param desc
 * @returns {Promise<IDataType>}
 */
function create(desc) {
    return transformEntry(desc);
}
function prepareData(desc, file) {
    var data = new FormData();
    data.append('desc', JSON.stringify(desc));
    if (file) {
        data.append('file', file);
    }
    return data;
}
/**
 * uploads a given dataset description with optional file attachment ot the server
 * @param desc
 * @param file
 * @returns {Promise<*>}
 */
function upload(desc, file) {
    var data = prepareData(desc, file);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])('/dataset/', data, 'post').then(transformEntry);
}
/**
 * updates an existing dataset with a new description and optional file
 * @param desc
 * @param file
 * @returns {Promise<*>} returns the update dataset
 */
function update(entry, desc, file) {
    var data = prepareData(desc, file);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])('/dataset/' + entry.desc.id, data, 'put').then(function (desc) {
        clearCache(entry);
        return transformEntry(desc);
    });
}
/**
 * modifies an existing dataset with a new description and optional file, the difference to update is that this should be used for partial changes
 * @param desc
 * @param file
 * @returns {Promise<*>} returns the update dataset
 */
function modify(entry, desc, file) {
    var data = prepareData(desc, file);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])('/dataset/' + entry.desc.id, data, 'post').then(function (desc) {
        clearCache(entry);
        return transformEntry(desc);
    });
}
/**
 * removes a given dataset
 * @param entry
 * @returns {Promise<boolean>}
 */
function remove(entry) {
    var desc = entry.desc || entry;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])('/dataset/' + desc.id, {}, 'delete').then(function (result) {
        clearCache(desc);
        return true;
    });
}
/**
 * utility to convert a list of datatypes to a table compatible datatype object
 * @param list
 * @returns {any}
 */
function convertToTable(list) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__table_impl__["wrapObjects"])({
        id: '_data',
        name: 'data',
        fqname: 'custom/data',
        type: 'table',
        idtype: '_data',
        size: [list.length, 4],
        columns: [
            {
                name: 'Name',
                value: {
                    type: 'string'
                },
                getter: function (d) { return d.desc.name; }
            },
            {
                name: 'Type',
                value: {
                    type: 'string'
                },
                getter: function (d) { return d.desc.type; }
            },
            {
                name: 'Dimensions',
                value: {
                    type: 'string'
                },
                getter: function (d) { return d.dim.join(' x '); }
            },
            {
                name: 'ID Types',
                value: {
                    type: 'string'
                },
                getter: function (d) { return d.idtypes.join(' x '); }
            },
        ]
    }, list, function (d) { return d.desc.name; });
}
/**
 * utilility function converting all contained tables in their vectors of individual columns
 * @param list
 * @returns {IDataType[]}
 */
function convertTableToVectors(list) {
    var r = [];
    list.forEach(function (d) {
        if (d.desc.type === 'table') {
            r.push.apply(r, d.cols());
        }
        else {
            r.push(d);
        }
    });
    return r;
}
/**
 * lists all datasets and converts them to a table
 * @param tablesAsVectors whether tables should be converted to individual vectors
 * @returns {Promise<*>}
 */
function listAsTable(tablesAsVectors) {
    if (tablesAsVectors === void 0) { tablesAsVectors = false; }
    var l = list();
    if (tablesAsVectors) {
        l = l.then(convertTableToVectors);
    }
    return l.then(convertToTable);
}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajax__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idtype__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datatype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "AttributeContainer", function() { return AttributeContainer; });
/* harmony export (binding) */ __webpack_require__.d(exports, "GraphNode", function() { return GraphNode; });
/* harmony export (binding) */ __webpack_require__.d(exports, "GraphEdge", function() { return GraphEdge; });
/* harmony export (immutable) */ exports["isType"] = isType;
/* harmony export (binding) */ __webpack_require__.d(exports, "AGraph", function() { return AGraph; });
/* harmony export (binding) */ __webpack_require__.d(exports, "GraphProxy", function() { return GraphProxy; });
/* harmony export (immutable) */ exports["create"] = create;
/* harmony export (binding) */ __webpack_require__.d(exports, "GraphBase", function() { return GraphBase; });
/* harmony export (binding) */ __webpack_require__.d(exports, "MemoryGraph", function() { return MemoryGraph; });
/* harmony export (binding) */ __webpack_require__.d(exports, "RemoteStoreGraph", function() { return RemoteStoreGraph; });
/* harmony export (binding) */ __webpack_require__.d(exports, "LocalStorageGraph", function() { return LocalStorageGraph; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






var AttributeContainer = (function (_super) {
    __extends(AttributeContainer, _super);
    function AttributeContainer() {
        _super.apply(this, arguments);
        // TODO convert to Map
        this._attrs = {};
    }
    AttributeContainer.prototype.persist = function () {
        if (Object.keys(this._attrs).length > 0) {
            return {
                attrs: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["mixin"])({}, this._attrs) //copy
            };
        }
        return {};
    };
    AttributeContainer.prototype.setAttr = function (attr, value) {
        var bak = this._attrs[attr];
        if (bak === value && !Array.isArray(bak)) {
            return;
        }
        this._attrs[attr] = value;
        this.fire('attr-' + attr, value, bak);
        this.fire('setAttr', attr, value, bak);
    };
    AttributeContainer.prototype.hasAttr = function (attr) {
        return attr in this._attrs;
    };
    AttributeContainer.prototype.getAttr = function (attr, default_) {
        if (default_ === void 0) { default_ = null; }
        if (attr in this._attrs) {
            return this._attrs[attr];
        }
        return default_;
    };
    Object.defineProperty(AttributeContainer.prototype, "attrs", {
        get: function () {
            return Object.keys(this._attrs);
        },
        enumerable: true,
        configurable: true
    });
    AttributeContainer.prototype.restore = function (persisted) {
        if (persisted.attrs) {
            this._attrs = persisted.attrs;
        }
        return this;
    };
    return AttributeContainer;
}(__WEBPACK_IMPORTED_MODULE_5__event__["EventHandler"]));
/**
 * a simple graph none
 */
var GraphNode = (function (_super) {
    __extends(GraphNode, _super);
    function GraphNode(type, id) {
        if (type === void 0) { type = 'node'; }
        if (id === void 0) { id = NaN; }
        _super.call(this);
        this.type = type;
        this.outgoing = [];
        this.incoming = [];
        this._id = NaN;
        this._id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["flagId"])('graph_node', id);
    }
    Object.defineProperty(GraphNode.prototype, "id", {
        get: function () {
            if (isNaN(this._id)) {
                this._id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["uniqueId"])('graph_node');
            }
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    GraphNode.prototype.persist = function () {
        var r = _super.prototype.persist.call(this);
        r.type = this.type;
        r.id = this.id;
        return r;
    };
    GraphNode.prototype.restore = function (persisted) {
        _super.prototype.restore.call(this, persisted);
        this.type = persisted.type;
        this._id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["flagId"])('graph_node', persisted.id);
        return this;
    };
    return GraphNode;
}(AttributeContainer));
var GraphEdge = (function (_super) {
    __extends(GraphEdge, _super);
    function GraphEdge(type, source, target, id) {
        if (type === void 0) { type = 'edge'; }
        if (source === void 0) { source = null; }
        if (target === void 0) { target = null; }
        if (id === void 0) { id = NaN; }
        _super.call(this);
        this.type = type;
        this.source = source;
        this.target = target;
        this._id = NaN;
        this._id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["flagId"])('graph_edge', id);
        if (source && target) {
            this.init();
        }
    }
    Object.defineProperty(GraphEdge.prototype, "id", {
        get: function () {
            if (isNaN(this._id)) {
                this._id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["uniqueId"])('graph_edge');
            }
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    GraphEdge.prototype.init = function () {
        this.source.outgoing.push(this);
        this.target.incoming.push(this);
    };
    GraphEdge.prototype.takeDown = function () {
        if (this.source) {
            this.source.outgoing.splice(this.source.outgoing.indexOf(this), 1);
        }
        if (this.target) {
            this.target.incoming.splice(this.target.incoming.indexOf(this), 1);
        }
    };
    GraphEdge.prototype.toString = function () {
        return this.source + ' ' + this.type + ' ' + this.target;
    };
    GraphEdge.prototype.persist = function () {
        var r = _super.prototype.persist.call(this);
        r.type = this.type;
        r.id = this.id;
        r.source = this.source.id;
        r.target = this.target.id;
        return r;
    };
    GraphEdge.prototype.restore = function (p, nodes) {
        _super.prototype.restore.call(this, p);
        this.type = p.type;
        this._id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["flagId"])('graph_edge', p.id);
        this.source = nodes(p.source);
        this.target = nodes(p.target);
        this.init();
        return this;
    };
    return GraphEdge;
}(AttributeContainer));
function isType(type) {
    return function (edge) { return type instanceof RegExp ? type.test(edge.type) : edge.type === type; };
}
var AGraph = (function (_super) {
    __extends(AGraph, _super);
    function AGraph() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(AGraph.prototype, "nodes", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AGraph.prototype, "nnodes", {
        get: function () {
            return this.nodes.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AGraph.prototype, "edges", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AGraph.prototype, "nedges", {
        get: function () {
            return this.edges.length;
        },
        enumerable: true,
        configurable: true
    });
    return AGraph;
}(__WEBPACK_IMPORTED_MODULE_2__idtype__["SelectAble"]));
var defaultGraphFactory = {
    makeNode: function (p) { return ((new GraphNode()).restore(p)); },
    makeEdge: function (p, lookup) { return ((new GraphEdge()).restore(p, lookup)); }
};
var GraphProxy = (function (_super) {
    __extends(GraphProxy, _super);
    function GraphProxy(desc) {
        _super.call(this, desc);
        this._impl = null;
        this._loaded = null;
    }
    Object.defineProperty(GraphProxy.prototype, "nnodes", {
        get: function () {
            if (this._loaded) {
                return this._loaded.nnodes;
            }
            var size = this.desc.size;
            return size[0] || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphProxy.prototype, "nedges", {
        get: function () {
            if (this._loaded) {
                return this._loaded.nedges;
            }
            var size = this.desc.size;
            return size[1] || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphProxy.prototype, "dim", {
        get: function () {
            return [this.nnodes, this.nedges];
        },
        enumerable: true,
        configurable: true
    });
    GraphProxy.prototype.impl = function (factory) {
        var _this = this;
        if (factory === void 0) { factory = defaultGraphFactory; }
        if (this._impl) {
            return this._impl;
        }
        var type = this.desc.storage || 'remote';
        if (type === 'memory') {
            //memory only
            this._loaded = new MemoryGraph(this.desc, [], [], factory);
            this._impl = Promise.resolve(this._loaded);
        }
        else if (type === 'local') {
            this._loaded = LocalStorageGraph.load(this.desc, factory, localStorage);
            this._impl = Promise.resolve(this._loaded);
        }
        else if (type === 'session') {
            this._loaded = LocalStorageGraph.load(this.desc, factory, sessionStorage);
            this._impl = Promise.resolve(this._loaded);
        }
        else if (type === 'given' && this.desc.graph instanceof GraphBase) {
            this._loaded = this.desc.graph;
            this._impl = Promise.resolve(this._loaded);
        }
        else {
            this._impl = RemoteStoreGraph.load(this.desc, factory).then(function (graph) {
                return _this._loaded = graph;
            });
        }
        return this._impl;
    };
    GraphProxy.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__range__["all"])(); }
        if (this._impl) {
            return this._impl.then(function (i) { return i.ids(range); });
        }
        return Promise.resolve(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__range__["none"])());
    };
    Object.defineProperty(GraphProxy.prototype, "idtypes", {
        get: function () {
            return ['_nodes', '_edges'].map(__WEBPACK_IMPORTED_MODULE_2__idtype__["resolve"]);
        },
        enumerable: true,
        configurable: true
    });
    return GraphProxy;
}(__WEBPACK_IMPORTED_MODULE_3__datatype__["DataTypeBase"]));
/**
 * module entry point for creating a datatype
 * @param desc
 * @returns {IMatrix}
 */
function create(desc) {
    return new GraphProxy(desc);
}
var GraphBase = (function (_super) {
    __extends(GraphBase, _super);
    function GraphBase(desc, _nodes, _edges) {
        if (_nodes === void 0) { _nodes = []; }
        if (_edges === void 0) { _edges = []; }
        _super.call(this);
        this.desc = desc;
        this._nodes = _nodes;
        this._edges = _edges;
    }
    Object.defineProperty(GraphBase.prototype, "nodes", {
        get: function () {
            return this._nodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphBase.prototype, "edges", {
        get: function () {
            return this._edges;
        },
        enumerable: true,
        configurable: true
    });
    GraphBase.prototype.addNode = function (n) {
        this._nodes.push(n);
        this.fire('add_node', n);
        return this;
    };
    GraphBase.prototype.updateNode = function (n) {
        //since we store a reference we don't need to do anything
        this.fire('update_node', n);
        return this;
    };
    GraphBase.prototype.updateEdge = function (e) {
        //since we store a reference we don't need to do anything
        this.fire('update_edge', e);
        return this;
    };
    GraphBase.prototype.removeNode = function (n) {
        var i = this._nodes.indexOf(n);
        if (i < 0) {
            return null;
        }
        this._nodes.splice(i, 1);
        this.fire('remove_node', n);
        return this;
    };
    GraphBase.prototype.addEdge = function (e_or_s, type, t) {
        if (e_or_s instanceof GraphEdge) {
            var e = e_or_s;
            this._edges.push(e);
            this.fire('add_edge', e, e.type, e.source, e.target);
            return;
        }
        return this.addEdge(new GraphEdge(type, e_or_s, t));
    };
    GraphBase.prototype.removeEdge = function (e) {
        var i = this._edges.indexOf(e);
        if (i < 0) {
            return null;
        }
        e.takeDown();
        this._edges.splice(i, 1);
        this.fire('remove_edge', e);
        return this;
    };
    Object.defineProperty(GraphBase.prototype, "dim", {
        get: function () {
            return [this._nodes.length, this._edges.length];
        },
        enumerable: true,
        configurable: true
    });
    GraphBase.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__range__["all"])(); }
        return Promise.resolve(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__range__["list"])(this._nodes.map(function (n) { return n.id; }), this._edges.map(function (n) { return n.id; })));
    };
    GraphBase.prototype.selectNode = function (node, op) {
        if (op === void 0) { op = __WEBPACK_IMPORTED_MODULE_2__idtype__["SelectOperation"].SET; }
        this.select(0, [this._nodes.indexOf(node)], op);
    };
    GraphBase.prototype.selectedNodes = function () {
        var _this = this;
        return this.selections().then(function (r) {
            var nodes = [];
            r.dim(0).forEach(function (index) { return nodes.push(_this._nodes[index]); });
            return nodes;
        });
    };
    GraphBase.prototype.selectEdge = function (edge, op) {
        if (op === void 0) { op = __WEBPACK_IMPORTED_MODULE_2__idtype__["SelectOperation"].SET; }
        this.select(1, [this._edges.indexOf(edge)], op);
    };
    GraphBase.prototype.selectedEdges = function () {
        var _this = this;
        return this.selections().then(function (r) {
            var edges = [];
            r.dim(1).forEach(function (index) { return edges.push(_this._edges[index]); });
            return edges;
        });
    };
    Object.defineProperty(GraphBase.prototype, "idtypes", {
        get: function () {
            return ['_nodes', '_edges'].map(__WEBPACK_IMPORTED_MODULE_2__idtype__["resolve"]);
        },
        enumerable: true,
        configurable: true
    });
    GraphBase.prototype.clear = function () {
        this._nodes = [];
        this._edges = [];
        return this;
    };
    GraphBase.prototype.persist = function () {
        var r = {
            root: this.desc.id
        };
        r.nodes = this.nodes.map(function (s) { return s.persist(); });
        r.edges = this.edges.map(function (l) { return l.persist(); });
        return r;
    };
    return GraphBase;
}(AGraph));
var MemoryGraph = (function (_super) {
    __extends(MemoryGraph, _super);
    function MemoryGraph(desc, _nodes, _edges, factory) {
        if (_nodes === void 0) { _nodes = []; }
        if (_edges === void 0) { _edges = []; }
        if (factory === void 0) { factory = defaultGraphFactory; }
        _super.call(this, desc, _nodes, _edges);
        this.factory = factory;
    }
    MemoryGraph.prototype.restore = function (persisted) {
        var _this = this;
        var lookup = {}, lookupFun = function (id) { return lookup[id]; };
        persisted.nodes.forEach(function (p) {
            var n = _this.factory.makeNode(p);
            lookup[n.id] = n;
            _this.addNode(n);
        });
        persisted.edges.forEach(function (p) {
            var n = _this.factory.makeEdge(p, lookupFun);
            _this.addEdge(n);
        });
        return this;
    };
    return MemoryGraph;
}(GraphBase));
var RemoteStoreGraph = (function (_super) {
    __extends(RemoteStoreGraph, _super);
    function RemoteStoreGraph(desc, _nodes, _edges) {
        var _this = this;
        if (_nodes === void 0) { _nodes = []; }
        if (_edges === void 0) { _edges = []; }
        _super.call(this, desc, _nodes, _edges);
        this.updateHandler = function (event) {
            var s = event.target;
            if (s instanceof GraphNode) {
                _this.updateNode(s);
            }
            if (s instanceof GraphEdge) {
                _this.updateEdge(s);
            }
        };
        this._wait_for_synced = 0;
    }
    RemoteStoreGraph.load = function (desc, factory) {
        var r = new RemoteStoreGraph(desc, [], []);
        return r.load(factory);
    };
    RemoteStoreGraph.prototype.load = function (factory) {
        var _this = this;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])('/dataset/graph/' + this.desc.id + '/data').then(function (r) {
            _this.loadImpl(r.nodes, r.edges, factory);
            _this.fire('sync_load,sync', --_this._wait_for_synced);
            return _this;
        });
    };
    RemoteStoreGraph.prototype.loadImpl = function (nodes, edges, factory) {
        var _this = this;
        var lookup = {}, lookupFun = function (id) { return lookup[id]; };
        nodes.forEach(function (n) {
            var nn = factory.makeNode(n);
            lookup[nn.id] = nn;
            nn.on('setAttr', _this.updateHandler);
            _super.prototype.addNode.call(_this, nn);
        });
        edges.forEach(function (n) {
            var nn = factory.makeEdge(n, lookupFun);
            nn.on('setAttr', _this.updateHandler);
            _super.prototype.addEdge.call(_this, nn);
        });
        this.fire('loaded');
    };
    Object.defineProperty(RemoteStoreGraph.prototype, "activeSyncOperations", {
        get: function () {
            return this._wait_for_synced;
        },
        enumerable: true,
        configurable: true
    });
    RemoteStoreGraph.prototype.addNode = function (n) {
        var _this = this;
        _super.prototype.addNode.call(this, n);
        n.on('setAttr', this.updateHandler);
        this.fire('sync_start_node,sync_start', ++this._wait_for_synced, 'add_node', n);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])('/dataset/graph/' + this.desc.id + '/node', {
            desc: JSON.stringify(n.persist())
        }, 'post').then(function (r) {
            _this.fire('sync_node,sync', --_this._wait_for_synced, n);
            return _this;
        });
    };
    RemoteStoreGraph.prototype.updateNode = function (n) {
        var _this = this;
        _super.prototype.updateNode.call(this, n);
        this.fire('sync_start_node,sync_start', ++this._wait_for_synced, 'update_node', n);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])('/dataset/graph/' + this.desc.id + '/node/' + n.id, {
            desc: JSON.stringify(n.persist())
        }, 'put').then(function (r) {
            _this.fire('sync_node,sync', --_this._wait_for_synced, n);
            return _this;
        });
    };
    RemoteStoreGraph.prototype.removeNode = function (n) {
        var _this = this;
        if (!_super.prototype.removeNode.call(this, n)) {
            return Promise.reject('invalid node');
        }
        n.off('setAttr', this.updateHandler);
        this.fire('sync_start_node,sync_start', ++this._wait_for_synced, 'remove_node', n);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])('/dataset/graph/' + this.desc.id + '/node/' + n.id, {}, 'delete').then(function (r) {
            _this.fire('sync_node,sync', --_this._wait_for_synced, n);
            return _this;
        });
    };
    RemoteStoreGraph.prototype.addEdge = function (e_or_s, type, t) {
        var _this = this;
        if (e_or_s instanceof GraphEdge) {
            _super.prototype.addEdge.call(this, e_or_s);
            var e_1 = e_or_s;
            e_1.on('setAttr', this.updateHandler);
            this.fire('sync_start_edge,sync_start', ++this._wait_for_synced, 'add_edge', e_1);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])('/dataset/graph/' + this.desc.id + '/edge', {
                desc: JSON.stringify(e_1.persist())
            }, 'post').then(function (r) {
                _this.fire('sync_edge,sync', --_this._wait_for_synced, e_1);
                return _this;
            });
        }
        return _super.prototype.addEdge.call(this, e_or_s, type, t);
    };
    RemoteStoreGraph.prototype.removeEdge = function (e) {
        var _this = this;
        if (!_super.prototype.removeEdge.call(this, e)) {
            return Promise.reject('invalid edge');
        }
        e.off('setAttr', this.updateHandler);
        this.fire('sync_start_edge,sync_start', ++this._wait_for_synced, 'remove_edge', e);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])('/dataset/graph/' + this.desc.id + '/edge/' + e.id, {}, 'delete').then(function (r) {
            _this.fire('sync_edge,sync', --_this._wait_for_synced, e);
            return _this;
        });
    };
    RemoteStoreGraph.prototype.updateEdge = function (e) {
        var _this = this;
        _super.prototype.updateEdge.call(this, e);
        this.fire('sync_start_edge,sync_start', ++this._wait_for_synced, 'update_edge', e);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])('/dataset/graph/' + this.desc.id + '/edge/' + e.id, {
            desc: JSON.stringify(e.persist())
        }, 'put').then(function (r) {
            _this.fire('sync_edge,sync', --_this._wait_for_synced, e);
            return _this;
        });
    };
    RemoteStoreGraph.prototype.clear = function () {
        var _this = this;
        if (this.nnodes === 0 && this.nedges === 0) {
            return Promise.resolve(this);
        }
        this.nodes.forEach(function (n) { return n.off('setAttr', _this.updateHandler); });
        this.edges.forEach(function (n) { return n.off('setAttr', _this.updateHandler); });
        _super.prototype.clear.call(this);
        this.fire('sync_start', ++this._wait_for_synced, 'clear');
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["sendAPI"])('/dataset/graph/' + this.desc.id + '/node', {}, 'delete').then(function (r) {
            _this.fire('sync');
            return _this;
        });
    };
    return RemoteStoreGraph;
}(GraphBase));
var LocalStorageGraph = (function (_super) {
    __extends(LocalStorageGraph, _super);
    function LocalStorageGraph(desc, _nodes, _edges, storage) {
        var _this = this;
        if (_nodes === void 0) { _nodes = []; }
        if (_edges === void 0) { _edges = []; }
        if (storage === void 0) { storage = sessionStorage; }
        _super.call(this, desc, _nodes, _edges);
        this.storage = storage;
        this.updateHandler = function (event) {
            var s = event.target;
            if (s instanceof GraphNode) {
                _this.updateNode(s);
            }
            if (s instanceof GraphEdge) {
                _this.updateEdge(s);
            }
        };
    }
    LocalStorageGraph.load = function (desc, factory, storage, reset) {
        if (storage === void 0) { storage = sessionStorage; }
        if (reset === void 0) { reset = false; }
        var r = new LocalStorageGraph(desc, [], [], storage);
        if (!reset) {
            r.load(factory);
        }
        return r;
    };
    LocalStorageGraph.clone = function (graph, factory, storage) {
        if (storage === void 0) { storage = sessionStorage; }
        var r = new LocalStorageGraph(graph.desc, [], [], storage);
        r.restoreDump(graph.persist(), factory);
        return r;
    };
    Object.defineProperty(LocalStorageGraph.prototype, "uid", {
        get: function () {
            return 'graph' + this.desc.id;
        },
        enumerable: true,
        configurable: true
    });
    LocalStorageGraph.prototype.load = function (factory) {
        var _this = this;
        var uid = this.uid;
        if (!this.storage.hasOwnProperty(uid + '.nodes')) {
            return;
        }
        var node_ids = JSON.parse(this.storage.getItem(uid + '.nodes'));
        var lookup = {}, lookupFun = function (id) { return lookup[id]; };
        node_ids.forEach(function (id) {
            var n = JSON.parse(_this.storage.getItem(uid + '.node.' + id));
            var nn = factory.makeNode(n);
            lookup[nn.id] = nn;
            nn.on('setAttr', _this.updateHandler);
            _super.prototype.addNode.call(_this, nn);
        });
        var edges_ids = JSON.parse(this.storage.getItem(uid + '.edges'));
        edges_ids.forEach(function (id) {
            var n = JSON.parse(_this.storage.getItem(uid + '.edge.' + id));
            var nn = factory.makeEdge(n, lookupFun);
            nn.on('setAttr', _this.updateHandler);
            _super.prototype.addEdge.call(_this, nn);
        });
        this.fire('loaded');
    };
    LocalStorageGraph.delete = function (desc, storage) {
        if (storage === void 0) { storage = sessionStorage; }
        var uid = 'graph' + desc.id;
        JSON.parse(storage.getItem(uid + '.nodes')).forEach(function (id) {
            storage.removeItem(uid + '.node.' + id);
        });
        storage.removeItem(uid + '.nodes');
        JSON.parse(storage.getItem(uid + '.edges')).forEach(function (id) {
            storage.removeItem(uid + '.edge.' + id);
        });
        storage.removeItem(uid + '.edges');
        return true;
    };
    LocalStorageGraph.prototype.restoreDump = function (persisted, factory) {
        var _this = this;
        var lookup = {}, lookupFun = function (id) { return lookup[id]; };
        persisted.nodes.forEach(function (p) {
            var n = factory.makeNode(p);
            lookup[n.id] = n;
            _this.addNode(n);
        });
        persisted.edges.forEach(function (p) {
            var n = factory.makeEdge(p, lookupFun);
            _this.addEdge(n);
        });
        return this;
    };
    LocalStorageGraph.prototype.addNode = function (n) {
        _super.prototype.addNode.call(this, n);
        var uid = this.uid;
        this.storage.setItem(uid + '.node.' + n.id, JSON.stringify(n.persist()));
        this.storage.setItem(uid + '.nodes', JSON.stringify(this.nodes.map(function (d) { return d.id; })));
        n.on('setAttr', this.updateHandler);
        return this;
    };
    LocalStorageGraph.prototype.updateNode = function (n) {
        _super.prototype.updateNode.call(this, n);
        var uid = this.uid;
        this.storage.setItem(uid + '.node.' + n.id, JSON.stringify(n.persist()));
        return this;
    };
    LocalStorageGraph.prototype.removeNode = function (n) {
        if (!_super.prototype.removeNode.call(this, n)) {
            return null;
        }
        var uid = this.uid;
        this.storage.setItem(uid + '.nodes', JSON.stringify(this.nodes.map(function (d) { return d.id; })));
        this.storage.removeItem(uid + '.node.' + n.id);
        n.off('setAttr', this.updateHandler);
        return this;
    };
    LocalStorageGraph.prototype.addEdge = function (e_or_s, type, t) {
        if (e_or_s instanceof GraphEdge) {
            _super.prototype.addEdge.call(this, e_or_s);
            var e = e_or_s;
            var uid = this.uid;
            this.storage.setItem(uid + '.edges', JSON.stringify(this.edges.map(function (d) { return d.id; })));
            this.storage.setItem(uid + '.edge.' + e.id, JSON.stringify(e.persist()));
            e.on('setAttr', this.updateHandler);
            return this;
        }
        return _super.prototype.addEdge.call(this, e_or_s, type, t);
    };
    LocalStorageGraph.prototype.removeEdge = function (e) {
        if (!_super.prototype.removeEdge.call(this, e)) {
            return null;
        }
        //need to shift all
        var uid = this.uid;
        this.storage.setItem(uid + '.edges', JSON.stringify(this.edges.map(function (d) { return d.id; })));
        this.storage.removeItem(uid + '.edge.' + e.id);
        e.off('setAttr', this.updateHandler);
        return this;
    };
    LocalStorageGraph.prototype.updateEdge = function (e) {
        _super.prototype.updateEdge.call(this, e);
        var uid = this.uid;
        this.storage.setItem(uid + '.edge.' + e.id, JSON.stringify(e.persist()));
        return this;
    };
    LocalStorageGraph.prototype.clear = function () {
        var _this = this;
        var nnodes = this.nnodes, nedges = this.nedges;
        if (nnodes === 0 && nedges === 0) {
            return this;
        }
        this.nodes.forEach(function (n) { return n.off('setAttr', _this.updateHandler); });
        this.edges.forEach(function (n) { return n.off('setAttr', _this.updateHandler); });
        _super.prototype.clear.call(this);
        var uid = this.uid;
        JSON.parse(this.storage.getItem(uid + '.nodes')).forEach(function (id) {
            _this.storage.removeItem(uid + '.node.' + id);
        });
        this.storage.removeItem(uid + '.nodes');
        JSON.parse(this.storage.getItem(uid + '.edges')).forEach(function (id) {
            _this.storage.removeItem(uid + '.edge.' + id);
        });
        this.storage.removeItem(uid + '.edges');
    };
    LocalStorageGraph.prototype.persist = function () {
        var r = {
            root: this.desc.id
        };
        r.nodes = this.nodes.map(function (s) { return s.persist(); });
        r.edges = this.edges.map(function (l) { return l.persist(); });
        return r;
    };
    return LocalStorageGraph;
}(GraphBase));


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__idtype__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["guessColor"] = guessColor;
/* harmony export (binding) */ __webpack_require__.d(exports, "StratificationGroup", function() { return StratificationGroup; });
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



function guessColor(stratification, group) {
    switch (group.toLowerCase()) {
        case 'male': return 'blue';
        case 'female': return 'red';
        case 'deceased': return '#e41a1b';
        case 'living': return '#377eb8';
    }
    return 'gray';
}
/**
 * root matrix implementation holding the data
 */
var StratificationGroup = (function (_super) {
    __extends(StratificationGroup, _super);
    function StratificationGroup(root, groupIndex, groupDesc) {
        _super.call(this);
        this.root = root;
        this.groupIndex = groupIndex;
        this.groupDesc = groupDesc;
    }
    Object.defineProperty(StratificationGroup.prototype, "desc", {
        get: function () {
            return this.root.desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StratificationGroup.prototype, "groups", {
        get: function () {
            return [this.groupDesc];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StratificationGroup.prototype, "ngroups", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    StratificationGroup.prototype.group = function (groupIndex) {
        if (groupIndex === 0) {
            return this;
        }
        return null; //can't sub a single group
    };
    Object.defineProperty(StratificationGroup.prototype, "idtype", {
        get: function () {
            return this.root.idtype;
        },
        enumerable: true,
        configurable: true
    });
    StratificationGroup.prototype.hist = function (bins, range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__range__["all"])(); }
        //TODO
        return this.range().then(function (r) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["rangeHist"])(r);
        });
    };
    StratificationGroup.prototype.vector = function () {
        return Promise.all([this.root.vector(), this.rangeGroup()]).then(function (arr) { return arr[0].view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__range__["list"])(arr[1])); });
    };
    StratificationGroup.prototype.origin = function () {
        return this.root.origin();
    };
    StratificationGroup.prototype.range = function () {
        return this.rangeGroup().then(function (g) {
            return new __WEBPACK_IMPORTED_MODULE_0__range__["CompositeRange1D"](g.name, [g]);
        });
    };
    StratificationGroup.prototype.idRange = function () {
        var _this = this;
        return this.root.idRange().then(function (r) {
            var g = r.groups[_this.groupIndex];
            return new __WEBPACK_IMPORTED_MODULE_0__range__["CompositeRange1D"](g.name, [g]);
        });
    };
    StratificationGroup.prototype.rangeGroup = function () {
        var _this = this;
        return this.root.range().then(function (r) {
            return r.groups[_this.groupIndex];
        });
    };
    StratificationGroup.prototype.names = function (range) {
        var _this = this;
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__range__["all"])(); }
        return this.rangeGroup().then(function (g) {
            var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__range__["list"])(g).preMultiply(range);
            return _this.root.names(r);
        });
    };
    StratificationGroup.prototype.ids = function (range) {
        var _this = this;
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__range__["all"])(); }
        return this.rangeGroup().then(function (g) {
            var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__range__["list"])(g).preMultiply(range);
            return _this.root.ids(r);
        });
    };
    StratificationGroup.prototype.idView = function (idRange) {
        if (idRange === void 0) { idRange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__range__["all"])(); }
        return Promise.reject('not implemented');
    };
    StratificationGroup.prototype.toString = function () {
        return this.persist();
    };
    Object.defineProperty(StratificationGroup.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    StratificationGroup.prototype.size = function () {
        return [this.length];
    };
    Object.defineProperty(StratificationGroup.prototype, "length", {
        get: function () {
            return this.groupDesc.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StratificationGroup.prototype, "dim", {
        get: function () {
            return this.size();
        },
        enumerable: true,
        configurable: true
    });
    StratificationGroup.prototype.persist = function () {
        return {
            root: this.root.persist(),
            group: this.groupIndex
        };
    };
    StratificationGroup.prototype.restore = function (persisted) {
        return this;
    };
    return StratificationGroup;
}(__WEBPACK_IMPORTED_MODULE_1__idtype__["SelectAble"]));


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajax__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__idtype__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vector_impl__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(exports, "TableBase", function() { return TableBase; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(exports, "TableVector", function() { return TableVector; });
/* harmony export (immutable) */ exports["create"] = create;
/* harmony export (immutable) */ exports["wrapObjects"] = wrapObjects;
/* harmony export (binding) */ __webpack_require__.d(exports, "VectorTable", function() { return VectorTable; });
/* harmony export (immutable) */ exports["fromVectors"] = fromVectors;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






/**
 * base class for different Table implementations, views, transposed,...
 */
var TableBase = (function (_super) {
    __extends(TableBase, _super);
    function TableBase(_root) {
        _super.call(this);
        this._root = _root;
    }
    Object.defineProperty(TableBase.prototype, "dim", {
        get: function () {
            return this.size();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableBase.prototype, "nrow", {
        get: function () {
            return this.dim[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableBase.prototype, "ncol", {
        get: function () {
            return this.dim[1];
        },
        enumerable: true,
        configurable: true
    });
    TableBase.prototype.size = function () {
        throw new Error('not implemented');
    };
    TableBase.prototype.view = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return new TableView(this._root, range);
    };
    TableBase.prototype.queryView = function (name, args) {
        throw new Error('not implemented');
    };
    TableBase.prototype.idView = function (idRange) {
        var _this = this;
        if (idRange === void 0) { idRange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.ids().then(function (ids) { return _this.view(ids.indexOf(idRange)); });
    };
    TableBase.prototype.reduce = function (f, this_f, valuetype, idtype) {
        return new MultITableVector(this, f, this_f, valuetype, idtype);
    };
    TableBase.prototype.restore = function (persisted) {
        if (persisted && persisted.f) {
            /* tslint:disable:no-eval */
            return this.reduce(eval(persisted.f), this, persisted.valuetype, persisted.idtype ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__idtype__["resolve"])(persisted.idtype) : undefined);
        }
        else if (persisted && persisted.range) {
            return this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(persisted.range));
        }
        else {
            return this;
        }
    };
    return TableBase;
}(__WEBPACK_IMPORTED_MODULE_3__idtype__["SelectAble"]));
function adapterOne2Two(loader) {
    return {
        rowIds: function (desc, range) { return loader(desc).then(function (d) { return range.preMultiply(d.rowIds, desc.size); }); },
        rows: function (desc, range) { return loader(desc).then(function (d) { return range.dim(0).filter(d.rows, desc.size[0]); }); },
        col: function (desc, column, range) { return loader(desc).then(function (d) { return range.filter(d.objs.map(function (d) { return d[column]; }), desc.size); }); },
        objs: function (desc, range) { return loader(desc).then(function (d) { return range.filter(d.objs, desc.size); }); },
        data: function (desc, range) { return loader(desc).then(function (d) { return range.filter(toFlat(d.objs, desc.columns), desc.size); }); },
        view: function (desc, name, args) { return null; }
    };
}
function viaAPIViewLoader(name, args) {
    var _loader = undefined;
    return function (desc) {
        if (_loader) {
            return _loader;
        }
        return _loader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/dataset/table/' + desc.id + '/view/' + name, args).then(function (data) {
            data.rowIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(data.rowIds);
            data.objs = maskObjects(data.data, desc);
            //mask the data
            return data;
        });
    };
}
function maskCol(arr, col) {
    //mask data
    if (col.value && 'missing' in col.value) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__datatype__["mask"])(arr, col.value);
    }
    return arr;
}
function maskObjects(arr, desc) {
    //mask data
    if (desc.columns.some(function (col) { return col.value && 'missing' in col.value; })) {
        arr.forEach(function (row) {
            desc.columns.forEach(function (col) { return row[col.name] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__datatype__["mask"])(row[col.name], col.value); });
        });
    }
    return arr;
}
function viaAPI2Loader() {
    var rowIds = null, rows = null, cols = {}, objs = null, data = null;
    var r = {
        rowIds: function (desc, range) {
            if (rowIds == null) {
                rowIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/dataset/table/' + desc.id + '/rowIds').then(function (ids) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(ids);
                });
            }
            return rowIds.then(function (d) {
                return d.preMultiply(range, desc.size);
            });
        },
        rows: function (desc, range) {
            if (rows == null) {
                rows = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/dataset/table/' + desc.id + '/rows');
            }
            return rows.then(function (d) { return range.dim(0).filter(d, desc.size[0]); });
        },
        objs: function (desc, range) {
            if (range.isAll) {
                if (objs == null) {
                    objs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/dataset/table/' + desc.id + '/raw').then(function (data) { return maskObjects(data, desc); });
                }
                return objs;
            }
            if (objs != null) {
                return objs.then(function (d) { return range.filter(d, desc.size); });
            }
            //server side slicing
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIData"])('/dataset/table/' + desc.id + '/raw', {
                range: range.toString()
            }).then(function (data) { return maskObjects(data, desc); });
        },
        data: function (desc, range) {
            if (range.isAll) {
                if (data == null) {
                    data = r.objs(desc, range).then(function (objs) { return toFlat(objs, desc.columns); });
                }
                return data;
            }
            if (data != null) {
                return data.then(function (d) { return range.filter(d, desc.size); });
            }
            //server side slicing
            return r.objs(desc, range).then(function (objs) { return toFlat(objs, desc.columns); });
        },
        col: function (desc, column, range) {
            var colDesc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["search"])(desc.columns, function (c) { return c.name === column; });
            if (range.isAll) {
                if (cols[column] == null) {
                    if (objs === null) {
                        cols[column] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/dataset/table/' + desc.id + '/col/' + column).then(function (data) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__datatype__["mask"])(data, colDesc); });
                    }
                    else {
                        cols[column] = objs.then(function (objs) { return objs.map(function (row) { return row[column]; }); });
                    }
                }
                return cols[column];
            }
            if (cols[column] != null) {
                return cols[column].then(function (d) { return range.filter(d, desc.size); });
            }
            //server side slicing
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIData"])('/dataset/table/' + desc.id + '/col/' + column, {
                range: range.toString()
            }).then(function (data) { return maskCol(data, colDesc); });
        },
        view: function (desc, name, args) { return viaAPIViewLoader(name, args); }
    };
    return r;
}
function toFlat(data, vecs) {
    return data.map(function (row) { return vecs.map(function (col) { return row[col.name]; }); });
}
function viaDataLoader(data, nameProperty) {
    var _data = undefined;
    return function (desc) {
        if (_data) {
            return Promise.resolve(_data);
        }
        var name = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(nameProperty) ? nameProperty : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["getter"])(nameProperty.toString());
        function toGetter(col) {
            if (col.getter) {
                return col.getter;
            }
            return function (d) { return d[col.column || col.name]; };
        }
        var getters = desc.columns.map(toGetter);
        var objs = data.map(function (row) {
            var r = { _: row };
            desc.columns.forEach(function (col, i) {
                r[col.name] = getters[i](row);
            });
            return r;
        });
        var rows = data.map(name);
        _data = {
            rowIds: desc.rowassigner ? desc.rowassigner.map(rows) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["range"])(0, data.length),
            rows: rows,
            objs: objs,
            data: getters.map(function (getter) { return data.map(getter); })
        };
        return Promise.resolve(_data);
    };
}
/**
 * root matrix implementation holding the data
 */
var Table = (function (_super) {
    __extends(Table, _super);
    function Table(desc, loader) {
        var _this = this;
        _super.call(this, null);
        this.desc = desc;
        this.loader = loader;
        this._root = this;
        var d = desc;
        this.rowtype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__idtype__["resolve"])(d.idtype || d.rowtype);
        this.vectors = d.columns.map(function (cdesc, i) { return new TableVector(_this, i, cdesc); });
    }
    Object.defineProperty(Table.prototype, "idtypes", {
        get: function () {
            return [this.rowtype];
        },
        enumerable: true,
        configurable: true
    });
    Table.prototype.col = function (i) {
        return this.vectors[i];
    };
    Table.prototype.cols = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return range.filter(this.vectors, [this.ncol]);
    };
    /**
     * access at a specific position
     * @param i
     * @param j
     * @returns {*}
     */
    Table.prototype.at = function (i, j) {
        return this.colData(this.col(j).column, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(i)).then(function (arr) { return arr[0]; });
    };
    Table.prototype.queryView = function (name, args) {
        return new Table(this.desc, adapterOne2Two(this.loader.view(this.desc, name, args)));
    };
    Table.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.loader.data(this.desc, range);
    };
    Table.prototype.colData = function (column, range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.loader.col(this.desc, column, range);
    };
    Table.prototype.objects = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.loader.objs(this.desc, range);
    };
    /**
     * return the row ids of the matrix
     * @returns {*}
     */
    Table.prototype.rows = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.loader.rows(this.desc, range);
    };
    Table.prototype.rowIds = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.loader.rowIds(this.desc, range);
    };
    Table.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.rowIds(range);
    };
    Table.prototype.size = function () {
        return this.desc.size;
    };
    Table.prototype.persist = function () {
        return this.desc.id;
    };
    Table.prototype.restore = function (persisted) {
        if (persisted && typeof persisted.col === 'number') {
            return this.col(persisted.col);
        }
        return _super.prototype.restore.call(this, persisted);
    };
    return Table;
}(TableBase));
/**
 * view on the vector restricted by a range
 * @param root underlying matrix
 * @param range range selection
 * @param t optional its transposed version
 * @constructor
 */
var TableView = (function (_super) {
    __extends(TableView, _super);
    function TableView(root, range) {
        _super.call(this, root);
        this.range = range;
        this.range = range;
    }
    Object.defineProperty(TableView.prototype, "desc", {
        get: function () {
            return this._root.desc;
        },
        enumerable: true,
        configurable: true
    });
    TableView.prototype.persist = function () {
        return {
            root: this._root.persist(),
            range: this.range.toString()
        };
    };
    TableView.prototype.restore = function (persisted) {
        var r = this;
        if (persisted && persisted.range) {
            r = r.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(persisted.range));
        }
        return r;
    };
    TableView.prototype.size = function () {
        return this.range.size(this._root.dim);
    };
    TableView.prototype.at = function (i, j) {
        var inverted = this.range.invert([i, j], this._root.dim);
        return this._root.at(inverted[0], inverted[1]);
    };
    TableView.prototype.col = function (i) {
        var inverted = this.range.invert([0, i], this._root.dim);
        return this._root.col(inverted[1]);
    };
    TableView.prototype.cols = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this._root.cols(this.range.swap().preMultiply(range, this._root.dim));
    };
    TableView.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this._root.data(this.range.preMultiply(range, this._root.dim));
    };
    TableView.prototype.objects = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this._root.objects(this.range.preMultiply(range, this._root.dim));
    };
    TableView.prototype.rows = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this._root.rows(this.range.preMultiply(range, this._root.dim));
    };
    TableView.prototype.rowIds = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this._root.rowIds(this.range.preMultiply(range, this._root.dim));
    };
    TableView.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.rowIds(range);
    };
    TableView.prototype.view = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        if (range.isAll) {
            return this;
        }
        return new TableView(this._root, this.range.preMultiply(range, this.dim));
    };
    Object.defineProperty(TableView.prototype, "rowtype", {
        get: function () {
            return this._root.rowtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableView.prototype, "idtypes", {
        get: function () {
            return [this.rowtype];
        },
        enumerable: true,
        configurable: true
    });
    return TableView;
}(TableBase));
/**
 * root matrix implementation holding the data
 */
var TableVector = (function (_super) {
    __extends(TableVector, _super);
    function TableVector(table, index, desc) {
        _super.call(this, null);
        this.table = table;
        this.index = index;
        this.desc = desc;
        this._root = this;
        this.valuetype = desc.value;
        this.desc.fqname = table.desc.fqname + '/' + this.desc.name;
        this.desc.type = 'vector';
    }
    Object.defineProperty(TableVector.prototype, "column", {
        get: function () {
            return this.desc.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableVector.prototype, "idtype", {
        get: function () {
            return this.table.rowtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableVector.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    TableVector.prototype.persist = function () {
        return {
            root: this.table.persist(),
            col: this.index
        };
    };
    TableVector.prototype.restore = function (persisted) {
        var r = this;
        if (persisted && persisted.range) {
            r = r.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(persisted.range));
        }
        return r;
    };
    /**
     * access at a specific position
     * @param i
     * @param j
     * @returns {*}
     */
    TableVector.prototype.at = function (i) {
        return this.table.at(i, this.index);
    };
    TableVector.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.table.colData(this.column, range);
    };
    TableVector.prototype.names = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.table.rows(range);
    };
    TableVector.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.table.rowIds(range);
    };
    TableVector.prototype.size = function () {
        return this.table.nrow;
    };
    TableVector.prototype.sort = function (compareFn, thisArg) {
        var _this = this;
        return this.data().then(function (d) {
            var indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argSort"])(d, compareFn, thisArg);
            return _this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices));
        });
    };
    TableVector.prototype.map = function (callbackfn, thisArg) {
        //FIXME
        return null;
    };
    TableVector.prototype.filter = function (callbackfn, thisArg) {
        var _this = this;
        return this.data().then(function (d) {
            var indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argFilter"])(d, callbackfn, thisArg);
            return _this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices));
        });
    };
    return TableVector;
}(__WEBPACK_IMPORTED_MODULE_5__vector_impl__["VectorBase"]));
/**
 * a simple projection of a matrix columns to a vector
 */
var MultITableVector = (function (_super) {
    __extends(MultITableVector, _super);
    function MultITableVector(table, f, this_f, valuetype, _idtype) {
        if (this_f === void 0) { this_f = table; }
        if (valuetype === void 0) { valuetype = null; }
        if (_idtype === void 0) { _idtype = table.rowtype; }
        _super.call(this, null);
        this.table = table;
        this.f = f;
        this.this_f = this_f;
        this.valuetype = valuetype;
        this._idtype = _idtype;
        this.desc = {
            name: table.desc.name + '-p',
            fqname: table.desc.fqname + '-p',
            type: 'vector',
            id: table.desc.id + '-p'
        };
        this._root = this;
    }
    Object.defineProperty(MultITableVector.prototype, "idtype", {
        get: function () {
            return this._idtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultITableVector.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    MultITableVector.prototype.persist = function () {
        return {
            root: this.table.persist(),
            f: this.f.toString(),
            valuetype: this.valuetype ? this.valuetype : undefined,
            idtype: this.idtype === this.table.rowtype ? undefined : this.idtype.name
        };
    };
    MultITableVector.prototype.restore = function (persisted) {
        var r = this;
        if (persisted && persisted.range) {
            r = r.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(persisted.range));
        }
        return r;
    };
    MultITableVector.prototype.size = function () {
        return this.table.nrow;
    };
    /**
     * return the associated ids of this vector
     */
    MultITableVector.prototype.names = function (range) {
        return this.table.rows(range);
    };
    MultITableVector.prototype.ids = function (range) {
        return this.table.rowIds(range);
    };
    /**
     * returns a promise for getting one cell
     * @param i
     * @param j
     */
    MultITableVector.prototype.at = function (i) {
        var _this = this;
        return this.table.data(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(i)).then(function (d) {
            return _this.f.call(_this.this_f, d[0]);
        });
    };
    /**
     * returns a promise for getting the data as two dimensional array
     * @param range
     */
    MultITableVector.prototype.data = function (range) {
        var _this = this;
        return this.table.data(range).then(function (d) {
            return d.map(_this.f, _this.this_f);
        });
    };
    MultITableVector.prototype.sort = function (compareFn, thisArg) {
        var _this = this;
        return this.data().then(function (d) {
            var indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argSort"])(d, compareFn, thisArg);
            return _this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices));
        });
    };
    MultITableVector.prototype.map = function (callbackfn, thisArg) {
        //FIXME
        return null;
    };
    MultITableVector.prototype.filter = function (callbackfn, thisArg) {
        var _this = this;
        return this.data().then(function (d) {
            var indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argFilter"])(d, callbackfn, thisArg);
            return _this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices));
        });
    };
    return MultITableVector;
}(__WEBPACK_IMPORTED_MODULE_5__vector_impl__["VectorBase"]));
/**
 * module entry point for creating a datatype
 * @param desc
 * @returns {ITable}
 */
function create(desc) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(desc.loader)) {
        return new Table(desc, adapterOne2Two(desc.loader));
    }
    return new Table(desc, viaAPI2Loader());
}
function wrapObjects(desc, data, nameProperty) {
    return new Table(desc, adapterOne2Two(viaDataLoader(data, nameProperty)));
}
var VectorTable = (function (_super) {
    __extends(VectorTable, _super);
    function VectorTable(desc, vectors) {
        _super.call(this, null);
        this.desc = desc;
        this.vectors = vectors;
        this._root = this;
        var d = desc;
        var ref = (vectors[0].desc);
        d.idtype = ref.idtype;
        d.size = [vectors[0].length, vectors.length];
        d.columns = vectors.map(function (v) { return v.desc; });
        this.rowtype = vectors[0].idtype;
    }
    Object.defineProperty(VectorTable.prototype, "idtypes", {
        get: function () {
            return [this.rowtype];
        },
        enumerable: true,
        configurable: true
    });
    VectorTable.prototype.col = function (i) {
        return this.vectors[i];
    };
    VectorTable.prototype.cols = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return range.filter(this.vectors, [this.ncol]);
    };
    VectorTable.prototype.at = function (i, j) {
        return this.col(i).at(j);
    };
    VectorTable.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return Promise.all(this.vectors.map(function (v) { return v.data(range); })).then(function (arr) {
            var r = arr[0].map(function (i) { return ([i]); });
            arr.slice(1).forEach(function (ai) { return ai.forEach(function (d, i) { return r[i].push(d); }); });
            return r;
        });
    };
    VectorTable.prototype.objects = function (range) {
        var _this = this;
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return Promise.all(this.vectors.map(function (v) { return v.data(range); })).then(function (arr) {
            var names = _this.vectors.map(function (d) { return d.desc.name; });
            var r = arr[0].map(function (i) { return ((_a = {}, _a[names[0]] = i, _a)); var _a; });
            arr.slice(1).forEach(function (ai, j) {
                var name = names[j + 1];
                ai.forEach(function (d, i) { return r[i][name] = d; });
            });
            return r;
        });
    };
    /**
     * return the row ids of the matrix
     * @returns {*}
     */
    VectorTable.prototype.rows = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.col(0).names(range);
    };
    VectorTable.prototype.rowIds = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.col(0).ids(range);
    };
    VectorTable.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.rowIds(range);
    };
    VectorTable.prototype.size = function () {
        return [this.col(0).length, this.vectors.length];
    };
    VectorTable.prototype.persist = function () {
        return this.desc.id;
    };
    VectorTable.prototype.restore = function (persisted) {
        if (persisted && typeof persisted.col === 'number') {
            return this.col(persisted.col);
        }
        return _super.prototype.restore.call(this, persisted);
    };
    return VectorTable;
}(TableBase));
function fromVectors(desc, vecs) {
    return new VectorTable(desc, vecs);
}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "Intersection", function() { return Intersection; });
/* harmony export (immutable) */ exports["vec"] = vec;
/* harmony export (binding) */ __webpack_require__.d(exports, "Vector2D", function() { return Vector2D; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Path", function() { return Path; });
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IntersectionParams = (function () {
    function IntersectionParams(name, params) {
        this.name = name;
        this.params = params;
    }
    return IntersectionParams;
}());
var Intersection = (function () {
    /**
     *  'Outside',
     *  'Inside',
     *  'Tangent'
     *  'Coincident'
     *  'Parallel'
     *  'Intersection'
     *  'No Intersection'
     */
    function Intersection(status) {
        if (status === void 0) { status = 'No Intersection'; }
        this.status = status;
        this.points = [];
    }
    Object.defineProperty(Intersection.prototype, "intersects", {
        get: function () {
            return this.status === 'Intersection';
        },
        enumerable: true,
        configurable: true
    });
    Intersection.prototype.appendPoint = function (point) {
        this.status = 'Intersection';
        this.points.push(point);
    };
    Intersection.prototype.appendPoints = function (points) {
        if (points.length > 0) {
            this.status = 'Intersection';
        }
        this.points.push.apply(this.points, points);
    };
    Object.defineProperty(Intersection.prototype, "length", {
        get: function () {
            return this.points.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Performs the specified action for each element in an array.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    Intersection.prototype.forEach = function (callbackfn, thisArg) {
        this.points.forEach(callbackfn, thisArg);
    };
    /**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    Intersection.prototype.map = function (callbackfn, thisArg) {
        return this.points.map(callbackfn, thisArg);
    };
    Intersection.intersectShapes = function (shape1, shape2) {
        var ip1 = shape1.asIntersectionParams();
        var ip2 = shape2.asIntersectionParams();
        var result;
        if (ip1 != null && ip2 != null) {
            if (shape1 instanceof Path) {
                result = Intersection.intersectPathShape(shape1, shape2);
            }
            else if (shape2 instanceof Path) {
                result = Intersection.intersectPathShape(shape2, shape1);
            }
            else {
                var method;
                var params;
                if (ip1.name < ip2.name) {
                    method = 'intersect' + ip1.name + ip2.name;
                    params = ip1.params.concat(ip2.params);
                }
                else {
                    method = 'intersect' + ip2.name + ip1.name;
                    params = ip2.params.concat(ip1.params);
                }
                if (typeof Intersection[method] !== 'function') {
                    throw new Error('Intersection not available: ' + method);
                }
                result = Intersection[method].apply(null, params);
            }
        }
        else {
            result = new Intersection();
        }
        return result;
    };
    Intersection.intersectPathShape = function (path, shape) {
        return path.intersectShape(shape);
    };
    Intersection.intersectBezier2Bezier2 = function (a1, a2, a3, b1, b2, b3) {
        var a, b;
        var c12, c11, c10;
        var c22, c21, c20;
        var TOLERANCE = 1e-4;
        var result = new Intersection();
        a = a2.multiply(-2);
        c12 = a1.add(a.add(a3));
        a = a1.multiply(-2);
        b = a2.multiply(2);
        c11 = a.add(b);
        c10 = new Vector2D(a1.x, a1.y);
        a = b2.multiply(-2);
        c22 = b1.add(a.add(b3));
        a = b1.multiply(-2);
        b = b2.multiply(2);
        c21 = a.add(b);
        c20 = new Vector2D(b1.x, b1.y);
        a = c12.x * c11.y - c11.x * c12.y;
        b = c22.x * c11.y - c11.x * c22.y;
        var c = c21.x * c11.y - c11.x * c21.y;
        var d = c11.x * (c10.y - c20.y) + c11.y * (-c10.x + c20.x);
        var e = c22.x * c12.y - c12.x * c22.y;
        var f = c21.x * c12.y - c12.x * c21.y;
        var g = c12.x * (c10.y - c20.y) + c12.y * (-c10.x + c20.x);
        var poly = new Polynomial(-e * e, -2 * e * f, a * b - f * f - 2 * e * g, a * c - 2 * f * g, a * d - g * g);
        var roots = poly.getRoots();
        for (var i = 0; i < roots.length; i++) {
            var s = roots[i];
            if (0 <= s && s <= 1) {
                var xRoots = new Polynomial(-c12.x, -c11.x, -c10.x + c20.x + s * c21.x + s * s * c22.x).getRoots();
                var yRoots = new Polynomial(-c12.y, -c11.y, -c10.y + c20.y + s * c21.y + s * s * c22.y).getRoots();
                if (xRoots.length > 0 && yRoots.length > 0) {
                    checkRoots: for (var j = 0; j < xRoots.length; j++) {
                        var xRoot = xRoots[j];
                        if (0 <= xRoot && xRoot <= 1) {
                            for (var k = 0; k < yRoots.length; k++) {
                                if (Math.abs(xRoot - yRoots[k]) < TOLERANCE) {
                                    result.points.push(c22.multiply(s * s).add(c21.multiply(s).add(c20)));
                                    break checkRoots;
                                }
                            }
                        }
                    }
                }
            }
        }
        return result;
    };
    Intersection.intersectBezier2Bezier3 = function (a1, a2, a3, b1, b2, b3, b4) {
        var a, b, c, d;
        var c12, c11, c10;
        var c23, c22, c21, c20;
        var result = new Intersection();
        a = a2.multiply(-2);
        c12 = a1.add(a.add(a3));
        a = a1.multiply(-2);
        b = a2.multiply(2);
        c11 = a.add(b);
        c10 = new Vector2D(a1.x, a1.y);
        a = b1.multiply(-1);
        b = b2.multiply(3);
        c = b3.multiply(-3);
        d = a.add(b.add(c.add(b4)));
        c23 = new Vector2D(d.x, d.y);
        a = b1.multiply(3);
        b = b2.multiply(-6);
        c = b3.multiply(3);
        d = a.add(b.add(c));
        c22 = new Vector2D(d.x, d.y);
        a = b1.multiply(-3);
        b = b2.multiply(3);
        c = a.add(b);
        c21 = new Vector2D(c.x, c.y);
        c20 = new Vector2D(b1.x, b1.y);
        var c10x2 = c10.x * c10.x;
        var c10y2 = c10.y * c10.y;
        var c11x2 = c11.x * c11.x;
        var c11y2 = c11.y * c11.y;
        var c12x2 = c12.x * c12.x;
        var c12y2 = c12.y * c12.y;
        var c20x2 = c20.x * c20.x;
        var c20y2 = c20.y * c20.y;
        var c21x2 = c21.x * c21.x;
        var c21y2 = c21.y * c21.y;
        var c22x2 = c22.x * c22.x;
        var c22y2 = c22.y * c22.y;
        var c23x2 = c23.x * c23.x;
        var c23y2 = c23.y * c23.y;
        var poly = new Polynomial(-2 * c12.x * c12.y * c23.x * c23.y + c12x2 * c23y2 + c12y2 * c23x2, -2 * c12.x * c12.y * c22.x * c23.y - 2 * c12.x * c12.y * c22.y * c23.x + 2 * c12y2 * c22.x * c23.x + 2 * c12x2 * c22.y * c23.y, -2 * c12.x * c21.x * c12.y * c23.y - 2 * c12.x * c12.y * c21.y * c23.x - 2 * c12.x * c12.y * c22.x * c22.y + 2 * c21.x * c12y2 * c23.x + c12y2 * c22x2 + c12x2 * (2 * c21.y * c23.y + c22y2), 2 * c10.x * c12.x * c12.y * c23.y + 2 * c10.y * c12.x * c12.y * c23.x + c11.x * c11.y * c12.x * c23.y + c11.x * c11.y * c12.y * c23.x - 2 * c20.x * c12.x * c12.y * c23.y - 2 * c12.x * c20.y * c12.y * c23.x - 2 * c12.x * c21.x * c12.y * c22.y - 2 * c12.x * c12.y * c21.y * c22.x - 2 * c10.x * c12y2 * c23.x - 2 * c10.y * c12x2 * c23.y + 2 * c20.x * c12y2 * c23.x + 2 * c21.x * c12y2 * c22.x - c11y2 * c12.x * c23.x - c11x2 * c12.y * c23.y + c12x2 * (2 * c20.y * c23.y + 2 * c21.y * c22.y), 2 * c10.x * c12.x * c12.y * c22.y + 2 * c10.y * c12.x * c12.y * c22.x + c11.x * c11.y * c12.x * c22.y + c11.x * c11.y * c12.y * c22.x - 2 * c20.x * c12.x * c12.y * c22.y - 2 * c12.x * c20.y * c12.y * c22.x - 2 * c12.x * c21.x * c12.y * c21.y - 2 * c10.x * c12y2 * c22.x - 2 * c10.y * c12x2 * c22.y + 2 * c20.x * c12y2 * c22.x - c11y2 * c12.x * c22.x - c11x2 * c12.y * c22.y + c21x2 * c12y2 + c12x2 * (2 * c20.y * c22.y + c21y2), 2 * c10.x * c12.x * c12.y * c21.y + 2 * c10.y * c12.x * c21.x * c12.y + c11.x * c11.y * c12.x * c21.y + c11.x * c11.y * c21.x * c12.y - 2 * c20.x * c12.x * c12.y * c21.y - 2 * c12.x * c20.y * c21.x * c12.y - 2 * c10.x * c21.x * c12y2 - 2 * c10.y * c12x2 * c21.y + 2 * c20.x * c21.x * c12y2 - c11y2 * c12.x * c21.x - c11x2 * c12.y * c21.y + 2 * c12x2 * c20.y * c21.y, -2 * c10.x * c10.y * c12.x * c12.y - c10.x * c11.x * c11.y * c12.y - c10.y * c11.x * c11.y * c12.x + 2 * c10.x * c12.x * c20.y * c12.y + 2 * c10.y * c20.x * c12.x * c12.y + c11.x * c20.x * c11.y * c12.y + c11.x * c11.y * c12.x * c20.y - 2 * c20.x * c12.x * c20.y * c12.y - 2 * c10.x * c20.x * c12y2 + c10.x * c11y2 * c12.x + c10.y * c11x2 * c12.y - 2 * c10.y * c12x2 * c20.y - c20.x * c11y2 * c12.x - c11x2 * c20.y * c12.y + c10x2 * c12y2 + c10y2 * c12x2 + c20x2 * c12y2 + c12x2 * c20y2);
        var roots = poly.getRootsInInterval(0, 1);
        for (var i = 0; i < roots.length; i++) {
            var s = roots[i];
            var xRoots = new Polynomial(c12.x, c11.x, c10.x - c20.x - s * c21.x - s * s * c22.x - s * s * s * c23.x).getRoots();
            var yRoots = new Polynomial(c12.y, c11.y, c10.y - c20.y - s * c21.y - s * s * c22.y - s * s * s * c23.y).getRoots();
            if (xRoots.length > 0 && yRoots.length > 0) {
                var TOLERANCE = 1e-4;
                checkRoots: for (var j = 0; j < xRoots.length; j++) {
                    var xRoot = xRoots[j];
                    if (0 <= xRoot && xRoot <= 1) {
                        for (var k = 0; k < yRoots.length; k++) {
                            if (Math.abs(xRoot - yRoots[k]) < TOLERANCE) {
                                result.points.push(c23.multiply(s * s * s).add(c22.multiply(s * s).add(c21.multiply(s).add(c20))));
                                break checkRoots;
                            }
                        }
                    }
                }
            }
        }
        return result;
    };
    Intersection.intersectBezier2Circle = function (p1, p2, p3, c, r) {
        return Intersection.intersectBezier2Ellipse(p1, p2, p3, c, r, r);
    };
    Intersection.intersectBezier2Ellipse = function (p1, p2, p3, ec, rx, ry) {
        var a, b;
        var c2, c1, c0;
        var result = new Intersection();
        a = p2.multiply(-2);
        c2 = p1.add(a.add(p3));
        a = p1.multiply(-2);
        b = p2.multiply(2);
        c1 = a.add(b);
        c0 = new Vector2D(p1.x, p1.y);
        var rxrx = rx * rx;
        var ryry = ry * ry;
        var roots = new Polynomial(ryry * c2.x * c2.x + rxrx * c2.y * c2.y, 2 * (ryry * c2.x * c1.x + rxrx * c2.y * c1.y), ryry * (2 * c2.x * c0.x + c1.x * c1.x) + rxrx * (2 * c2.y * c0.y + c1.y * c1.y) - 2 * (ryry * ec.x * c2.x + rxrx * ec.y * c2.y), 2 * (ryry * c1.x * (c0.x - ec.x) + rxrx * c1.y * (c0.y - ec.y)), ryry * (c0.x * c0.x + ec.x * ec.x) + rxrx * (c0.y * c0.y + ec.y * ec.y) - 2 * (ryry * ec.x * c0.x + rxrx * ec.y * c0.y) - rxrx * ryry).getRoots();
        for (var i = 0; i < roots.length; i++) {
            var t = roots[i];
            if (0 <= t && t <= 1) {
                result.points.push(c2.multiply(t * t).add(c1.multiply(t).add(c0)));
            }
        }
        return result;
    };
    Intersection.intersectBezier2Line = function (p1, p2, p3, a1, a2) {
        var a, b;
        var c2, c1, c0;
        var cl;
        var n;
        var min = a1.min(a2);
        var max = a1.max(a2);
        var result = new Intersection();
        a = p2.multiply(-2);
        c2 = p1.add(a.add(p3));
        a = p1.multiply(-2);
        b = p2.multiply(2);
        c1 = a.add(b);
        c0 = new Vector2D(p1.x, p1.y);
        n = new Vector2D(a1.y - a2.y, a2.x - a1.x);
        cl = a1.x * a2.y - a2.x * a1.y;
        var roots = new Polynomial(n.dot(c2), n.dot(c1), n.dot(c0) + cl).getRoots();
        for (var i = 0; i < roots.length; i++) {
            var t = roots[i];
            if (0 <= t && t <= 1) {
                var p4 = p1.lerp(p2, t);
                var p5 = p2.lerp(p3, t);
                var p6 = p4.lerp(p5, t);
                if (a1.x === a2.x) {
                    if (min.y <= p6.y && p6.y <= max.y) {
                        result.appendPoint(p6);
                    }
                }
                else if (a1.y === a2.y) {
                    if (min.x <= p6.x && p6.x <= max.x) {
                        result.appendPoint(p6);
                    }
                }
                else if (p6.gte(min) && p6.lte(max)) {
                    result.appendPoint(p6);
                }
            }
        }
        return result;
    };
    Intersection.prototype.intersectBezier2Polygon = function (p1, p2, p3, points) {
        var result = new Intersection();
        var length = points.length;
        for (var i = 0; i < length; i++) {
            var a1 = points[i];
            var a2 = points[(i + 1) % length];
            var inter = Intersection.intersectBezier2Line(p1, p2, p3, a1, a2);
            result.appendPoints(inter.points);
        }
        return result;
    };
    Intersection.intersectBezier2Rectangle = function (p1, p2, p3, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Vector2D(max.x, min.y);
        var bottomLeft = new Vector2D(min.x, max.y);
        var inter1 = Intersection.intersectBezier2Line(p1, p2, p3, min, topRight);
        var inter2 = Intersection.intersectBezier2Line(p1, p2, p3, topRight, max);
        var inter3 = Intersection.intersectBezier2Line(p1, p2, p3, max, bottomLeft);
        var inter4 = Intersection.intersectBezier2Line(p1, p2, p3, bottomLeft, min);
        var result = new Intersection();
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);
        return result;
    };
    Intersection.intersectBezier3Bezier3 = function (a1, a2, a3, a4, b1, b2, b3, b4) {
        var a, b, c, d;
        var c13, c12, c11, c10;
        var c23, c22, c21, c20;
        var result = new Intersection();
        a = a1.multiply(-1);
        b = a2.multiply(3);
        c = a3.multiply(-3);
        d = a.add(b.add(c.add(a4)));
        c13 = new Vector2D(d.x, d.y);
        a = a1.multiply(3);
        b = a2.multiply(-6);
        c = a3.multiply(3);
        d = a.add(b.add(c));
        c12 = new Vector2D(d.x, d.y);
        a = a1.multiply(-3);
        b = a2.multiply(3);
        c = a.add(b);
        c11 = new Vector2D(c.x, c.y);
        c10 = new Vector2D(a1.x, a1.y);
        a = b1.multiply(-1);
        b = b2.multiply(3);
        c = b3.multiply(-3);
        d = a.add(b.add(c.add(b4)));
        c23 = new Vector2D(d.x, d.y);
        a = b1.multiply(3);
        b = b2.multiply(-6);
        c = b3.multiply(3);
        d = a.add(b.add(c));
        c22 = new Vector2D(d.x, d.y);
        a = b1.multiply(-3);
        b = b2.multiply(3);
        c = a.add(b);
        c21 = new Vector2D(c.x, c.y);
        c20 = new Vector2D(b1.x, b1.y);
        var c10x2 = c10.x * c10.x;
        var c10x3 = c10.x * c10.x * c10.x;
        var c10y2 = c10.y * c10.y;
        var c10y3 = c10.y * c10.y * c10.y;
        var c11x2 = c11.x * c11.x;
        var c11x3 = c11.x * c11.x * c11.x;
        var c11y2 = c11.y * c11.y;
        var c11y3 = c11.y * c11.y * c11.y;
        var c12x2 = c12.x * c12.x;
        var c12x3 = c12.x * c12.x * c12.x;
        var c12y2 = c12.y * c12.y;
        var c12y3 = c12.y * c12.y * c12.y;
        var c13x2 = c13.x * c13.x;
        var c13x3 = c13.x * c13.x * c13.x;
        var c13y2 = c13.y * c13.y;
        var c13y3 = c13.y * c13.y * c13.y;
        var c20x2 = c20.x * c20.x;
        var c20x3 = c20.x * c20.x * c20.x;
        var c20y2 = c20.y * c20.y;
        var c20y3 = c20.y * c20.y * c20.y;
        var c21x2 = c21.x * c21.x;
        var c21x3 = c21.x * c21.x * c21.x;
        var c21y2 = c21.y * c21.y;
        var c22x2 = c22.x * c22.x;
        var c22x3 = c22.x * c22.x * c22.x;
        var c22y2 = c22.y * c22.y;
        var c23x2 = c23.x * c23.x;
        var c23x3 = c23.x * c23.x * c23.x;
        var c23y2 = c23.y * c23.y;
        var c23y3 = c23.y * c23.y * c23.y;
        var poly = new Polynomial(-c13x3 * c23y3 + c13y3 * c23x3 - 3 * c13.x * c13y2 * c23x2 * c23.y + 3 * c13x2 * c13.y * c23.x * c23y2, -6 * c13.x * c22.x * c13y2 * c23.x * c23.y + 6 * c13x2 * c13.y * c22.y * c23.x * c23.y + 3 * c22.x * c13y3 * c23x2 - 3 * c13x3 * c22.y * c23y2 - 3 * c13.x * c13y2 * c22.y * c23x2 + 3 * c13x2 * c22.x * c13.y * c23y2, -6 * c21.x * c13.x * c13y2 * c23.x * c23.y - 6 * c13.x * c22.x * c13y2 * c22.y * c23.x + 6 * c13x2 * c22.x * c13.y * c22.y * c23.y + 3 * c21.x * c13y3 * c23x2 + 3 * c22x2 * c13y3 * c23.x + 3 * c21.x * c13x2 * c13.y * c23y2 - 3 * c13.x * c21.y * c13y2 * c23x2 - 3 * c13.x * c22x2 * c13y2 * c23.y + c13x2 * c13.y * c23.x * (6 * c21.y * c23.y + 3 * c22y2) + c13x3 * (-c21.y * c23y2 - 2 * c22y2 * c23.y - c23.y * (2 * c21.y * c23.y + c22y2)), c11.x * c12.y * c13.x * c13.y * c23.x * c23.y - c11.y * c12.x * c13.x * c13.y * c23.x * c23.y + 6 * c21.x * c22.x * c13y3 * c23.x + 3 * c11.x * c12.x * c13.x * c13.y * c23y2 + 6 * c10.x * c13.x * c13y2 * c23.x * c23.y - 3 * c11.x * c12.x * c13y2 * c23.x * c23.y - 3 * c11.y * c12.y * c13.x * c13.y * c23x2 - 6 * c10.y * c13x2 * c13.y * c23.x * c23.y - 6 * c20.x * c13.x * c13y2 * c23.x * c23.y + 3 * c11.y * c12.y * c13x2 * c23.x * c23.y - 2 * c12.x * c12y2 * c13.x * c23.x * c23.y - 6 * c21.x * c13.x * c22.x * c13y2 * c23.y - 6 * c21.x * c13.x * c13y2 * c22.y * c23.x - 6 * c13.x * c21.y * c22.x * c13y2 * c23.x + 6 * c21.x * c13x2 * c13.y * c22.y * c23.y + 2 * c12x2 * c12.y * c13.y * c23.x * c23.y + c22x3 * c13y3 - 3 * c10.x * c13y3 * c23x2 + 3 * c10.y * c13x3 * c23y2 + 3 * c20.x * c13y3 * c23x2 + c12y3 * c13.x * c23x2 - c12x3 * c13.y * c23y2 - 3 * c10.x * c13x2 * c13.y * c23y2 + 3 * c10.y * c13.x * c13y2 * c23x2 - 2 * c11.x * c12.y * c13x2 * c23y2 + c11.x * c12.y * c13y2 * c23x2 - c11.y * c12.x * c13x2 * c23y2 + 2 * c11.y * c12.x * c13y2 * c23x2 + 3 * c20.x * c13x2 * c13.y * c23y2 - c12.x * c12y2 * c13.y * c23x2 - 3 * c20.y * c13.x * c13y2 * c23x2 + c12x2 * c12.y * c13.x * c23y2 - 3 * c13.x * c22x2 * c13y2 * c22.y + c13x2 * c13.y * c23.x * (6 * c20.y * c23.y + 6 * c21.y * c22.y) + c13x2 * c22.x * c13.y * (6 * c21.y * c23.y + 3 * c22y2) + c13x3 * (-2 * c21.y * c22.y * c23.y - c20.y * c23y2 - c22.y * (2 * c21.y * c23.y + c22y2) - c23.y * (2 * c20.y * c23.y + 2 * c21.y * c22.y)), 6 * c11.x * c12.x * c13.x * c13.y * c22.y * c23.y + c11.x * c12.y * c13.x * c22.x * c13.y * c23.y + c11.x * c12.y * c13.x * c13.y * c22.y * c23.x - c11.y * c12.x * c13.x * c22.x * c13.y * c23.y - c11.y * c12.x * c13.x * c13.y * c22.y * c23.x - 6 * c11.y * c12.y * c13.x * c22.x * c13.y * c23.x - 6 * c10.x * c22.x * c13y3 * c23.x + 6 * c20.x * c22.x * c13y3 * c23.x + 6 * c10.y * c13x3 * c22.y * c23.y + 2 * c12y3 * c13.x * c22.x * c23.x - 2 * c12x3 * c13.y * c22.y * c23.y + 6 * c10.x * c13.x * c22.x * c13y2 * c23.y + 6 * c10.x * c13.x * c13y2 * c22.y * c23.x + 6 * c10.y * c13.x * c22.x * c13y2 * c23.x - 3 * c11.x * c12.x * c22.x * c13y2 * c23.y - 3 * c11.x * c12.x * c13y2 * c22.y * c23.x + 2 * c11.x * c12.y * c22.x * c13y2 * c23.x + 4 * c11.y * c12.x * c22.x * c13y2 * c23.x - 6 * c10.x * c13x2 * c13.y * c22.y * c23.y - 6 * c10.y * c13x2 * c22.x * c13.y * c23.y - 6 * c10.y * c13x2 * c13.y * c22.y * c23.x - 4 * c11.x * c12.y * c13x2 * c22.y * c23.y - 6 * c20.x * c13.x * c22.x * c13y2 * c23.y - 6 * c20.x * c13.x * c13y2 * c22.y * c23.x - 2 * c11.y * c12.x * c13x2 * c22.y * c23.y + 3 * c11.y * c12.y * c13x2 * c22.x * c23.y + 3 * c11.y * c12.y * c13x2 * c22.y * c23.x - 2 * c12.x * c12y2 * c13.x * c22.x * c23.y - 2 * c12.x * c12y2 * c13.x * c22.y * c23.x - 2 * c12.x * c12y2 * c22.x * c13.y * c23.x - 6 * c20.y * c13.x * c22.x * c13y2 * c23.x - 6 * c21.x * c13.x * c21.y * c13y2 * c23.x - 6 * c21.x * c13.x * c22.x * c13y2 * c22.y + 6 * c20.x * c13x2 * c13.y * c22.y * c23.y + 2 * c12x2 * c12.y * c13.x * c22.y * c23.y + 2 * c12x2 * c12.y * c22.x * c13.y * c23.y + 2 * c12x2 * c12.y * c13.y * c22.y * c23.x + 3 * c21.x * c22x2 * c13y3 + 3 * c21x2 * c13y3 * c23.x - 3 * c13.x * c21.y * c22x2 * c13y2 - 3 * c21x2 * c13.x * c13y2 * c23.y + c13x2 * c22.x * c13.y * (6 * c20.y * c23.y + 6 * c21.y * c22.y) + c13x2 * c13.y * c23.x * (6 * c20.y * c22.y + 3 * c21y2) + c21.x * c13x2 * c13.y * (6 * c21.y * c23.y + 3 * c22y2) + c13x3 * (-2 * c20.y * c22.y * c23.y - c23.y * (2 * c20.y * c22.y + c21y2) - c21.y * (2 * c21.y * c23.y + c22y2) - c22.y * (2 * c20.y * c23.y + 2 * c21.y * c22.y)), c11.x * c21.x * c12.y * c13.x * c13.y * c23.y + c11.x * c12.y * c13.x * c21.y * c13.y * c23.x + c11.x * c12.y * c13.x * c22.x * c13.y * c22.y - c11.y * c12.x * c21.x * c13.x * c13.y * c23.y - c11.y * c12.x * c13.x * c21.y * c13.y * c23.x - c11.y * c12.x * c13.x * c22.x * c13.y * c22.y - 6 * c11.y * c21.x * c12.y * c13.x * c13.y * c23.x - 6 * c10.x * c21.x * c13y3 * c23.x + 6 * c20.x * c21.x * c13y3 * c23.x + 2 * c21.x * c12y3 * c13.x * c23.x + 6 * c10.x * c21.x * c13.x * c13y2 * c23.y + 6 * c10.x * c13.x * c21.y * c13y2 * c23.x + 6 * c10.x * c13.x * c22.x * c13y2 * c22.y + 6 * c10.y * c21.x * c13.x * c13y2 * c23.x - 3 * c11.x * c12.x * c21.x * c13y2 * c23.y - 3 * c11.x * c12.x * c21.y * c13y2 * c23.x - 3 * c11.x * c12.x * c22.x * c13y2 * c22.y + 2 * c11.x * c21.x * c12.y * c13y2 * c23.x + 4 * c11.y * c12.x * c21.x * c13y2 * c23.x - 6 * c10.y * c21.x * c13x2 * c13.y * c23.y - 6 * c10.y * c13x2 * c21.y * c13.y * c23.x - 6 * c10.y * c13x2 * c22.x * c13.y * c22.y - 6 * c20.x * c21.x * c13.x * c13y2 * c23.y - 6 * c20.x * c13.x * c21.y * c13y2 * c23.x - 6 * c20.x * c13.x * c22.x * c13y2 * c22.y + 3 * c11.y * c21.x * c12.y * c13x2 * c23.y - 3 * c11.y * c12.y * c13.x * c22x2 * c13.y + 3 * c11.y * c12.y * c13x2 * c21.y * c23.x + 3 * c11.y * c12.y * c13x2 * c22.x * c22.y - 2 * c12.x * c21.x * c12y2 * c13.x * c23.y - 2 * c12.x * c21.x * c12y2 * c13.y * c23.x - 2 * c12.x * c12y2 * c13.x * c21.y * c23.x - 2 * c12.x * c12y2 * c13.x * c22.x * c22.y - 6 * c20.y * c21.x * c13.x * c13y2 * c23.x - 6 * c21.x * c13.x * c21.y * c22.x * c13y2 + 6 * c20.y * c13x2 * c21.y * c13.y * c23.x + 2 * c12x2 * c21.x * c12.y * c13.y * c23.y + 2 * c12x2 * c12.y * c21.y * c13.y * c23.x + 2 * c12x2 * c12.y * c22.x * c13.y * c22.y - 3 * c10.x * c22x2 * c13y3 + 3 * c20.x * c22x2 * c13y3 + 3 * c21x2 * c22.x * c13y3 + c12y3 * c13.x * c22x2 + 3 * c10.y * c13.x * c22x2 * c13y2 + c11.x * c12.y * c22x2 * c13y2 + 2 * c11.y * c12.x * c22x2 * c13y2 - c12.x * c12y2 * c22x2 * c13.y - 3 * c20.y * c13.x * c22x2 * c13y2 - 3 * c21x2 * c13.x * c13y2 * c22.y + c12x2 * c12.y * c13.x * (2 * c21.y * c23.y + c22y2) + c11.x * c12.x * c13.x * c13.y * (6 * c21.y * c23.y + 3 * c22y2) + c21.x * c13x2 * c13.y * (6 * c20.y * c23.y + 6 * c21.y * c22.y) + c12x3 * c13.y * (-2 * c21.y * c23.y - c22y2) + c10.y * c13x3 * (6 * c21.y * c23.y + 3 * c22y2) + c11.y * c12.x * c13x2 * (-2 * c21.y * c23.y - c22y2) + c11.x * c12.y * c13x2 * (-4 * c21.y * c23.y - 2 * c22y2) + c10.x * c13x2 * c13.y * (-6 * c21.y * c23.y - 3 * c22y2) + c13x2 * c22.x * c13.y * (6 * c20.y * c22.y + 3 * c21y2) + c20.x * c13x2 * c13.y * (6 * c21.y * c23.y + 3 * c22y2) + c13x3 * (-2 * c20.y * c21.y * c23.y - c22.y * (2 * c20.y * c22.y + c21y2) - c20.y * (2 * c21.y * c23.y + c22y2) - c21.y * (2 * c20.y * c23.y + 2 * c21.y * c22.y)), -c10.x * c11.x * c12.y * c13.x * c13.y * c23.y + c10.x * c11.y * c12.x * c13.x * c13.y * c23.y + 6 * c10.x * c11.y * c12.y * c13.x * c13.y * c23.x - 6 * c10.y * c11.x * c12.x * c13.x * c13.y * c23.y - c10.y * c11.x * c12.y * c13.x * c13.y * c23.x + c10.y * c11.y * c12.x * c13.x * c13.y * c23.x + c11.x * c11.y * c12.x * c12.y * c13.x * c23.y - c11.x * c11.y * c12.x * c12.y * c13.y * c23.x + c11.x * c20.x * c12.y * c13.x * c13.y * c23.y + c11.x * c20.y * c12.y * c13.x * c13.y * c23.x + c11.x * c21.x * c12.y * c13.x * c13.y * c22.y + c11.x * c12.y * c13.x * c21.y * c22.x * c13.y - c20.x * c11.y * c12.x * c13.x * c13.y * c23.y - 6 * c20.x * c11.y * c12.y * c13.x * c13.y * c23.x - c11.y * c12.x * c20.y * c13.x * c13.y * c23.x - c11.y * c12.x * c21.x * c13.x * c13.y * c22.y - c11.y * c12.x * c13.x * c21.y * c22.x * c13.y - 6 * c11.y * c21.x * c12.y * c13.x * c22.x * c13.y - 6 * c10.x * c20.x * c13y3 * c23.x - 6 * c10.x * c21.x * c22.x * c13y3 - 2 * c10.x * c12y3 * c13.x * c23.x + 6 * c20.x * c21.x * c22.x * c13y3 + 2 * c20.x * c12y3 * c13.x * c23.x + 2 * c21.x * c12y3 * c13.x * c22.x + 2 * c10.y * c12x3 * c13.y * c23.y - 6 * c10.x * c10.y * c13.x * c13y2 * c23.x + 3 * c10.x * c11.x * c12.x * c13y2 * c23.y - 2 * c10.x * c11.x * c12.y * c13y2 * c23.x - 4 * c10.x * c11.y * c12.x * c13y2 * c23.x + 3 * c10.y * c11.x * c12.x * c13y2 * c23.x + 6 * c10.x * c10.y * c13x2 * c13.y * c23.y + 6 * c10.x * c20.x * c13.x * c13y2 * c23.y - 3 * c10.x * c11.y * c12.y * c13x2 * c23.y + 2 * c10.x * c12.x * c12y2 * c13.x * c23.y + 2 * c10.x * c12.x * c12y2 * c13.y * c23.x + 6 * c10.x * c20.y * c13.x * c13y2 * c23.x + 6 * c10.x * c21.x * c13.x * c13y2 * c22.y + 6 * c10.x * c13.x * c21.y * c22.x * c13y2 + 4 * c10.y * c11.x * c12.y * c13x2 * c23.y + 6 * c10.y * c20.x * c13.x * c13y2 * c23.x + 2 * c10.y * c11.y * c12.x * c13x2 * c23.y - 3 * c10.y * c11.y * c12.y * c13x2 * c23.x + 2 * c10.y * c12.x * c12y2 * c13.x * c23.x + 6 * c10.y * c21.x * c13.x * c22.x * c13y2 - 3 * c11.x * c20.x * c12.x * c13y2 * c23.y + 2 * c11.x * c20.x * c12.y * c13y2 * c23.x + c11.x * c11.y * c12y2 * c13.x * c23.x - 3 * c11.x * c12.x * c20.y * c13y2 * c23.x - 3 * c11.x * c12.x * c21.x * c13y2 * c22.y - 3 * c11.x * c12.x * c21.y * c22.x * c13y2 + 2 * c11.x * c21.x * c12.y * c22.x * c13y2 + 4 * c20.x * c11.y * c12.x * c13y2 * c23.x + 4 * c11.y * c12.x * c21.x * c22.x * c13y2 - 2 * c10.x * c12x2 * c12.y * c13.y * c23.y - 6 * c10.y * c20.x * c13x2 * c13.y * c23.y - 6 * c10.y * c20.y * c13x2 * c13.y * c23.x - 6 * c10.y * c21.x * c13x2 * c13.y * c22.y - 2 * c10.y * c12x2 * c12.y * c13.x * c23.y - 2 * c10.y * c12x2 * c12.y * c13.y * c23.x - 6 * c10.y * c13x2 * c21.y * c22.x * c13.y - c11.x * c11.y * c12x2 * c13.y * c23.y - 2 * c11.x * c11y2 * c13.x * c13.y * c23.x + 3 * c20.x * c11.y * c12.y * c13x2 * c23.y - 2 * c20.x * c12.x * c12y2 * c13.x * c23.y - 2 * c20.x * c12.x * c12y2 * c13.y * c23.x - 6 * c20.x * c20.y * c13.x * c13y2 * c23.x - 6 * c20.x * c21.x * c13.x * c13y2 * c22.y - 6 * c20.x * c13.x * c21.y * c22.x * c13y2 + 3 * c11.y * c20.y * c12.y * c13x2 * c23.x + 3 * c11.y * c21.x * c12.y * c13x2 * c22.y + 3 * c11.y * c12.y * c13x2 * c21.y * c22.x - 2 * c12.x * c20.y * c12y2 * c13.x * c23.x - 2 * c12.x * c21.x * c12y2 * c13.x * c22.y - 2 * c12.x * c21.x * c12y2 * c22.x * c13.y - 2 * c12.x * c12y2 * c13.x * c21.y * c22.x - 6 * c20.y * c21.x * c13.x * c22.x * c13y2 - c11y2 * c12.x * c12.y * c13.x * c23.x + 2 * c20.x * c12x2 * c12.y * c13.y * c23.y + 6 * c20.y * c13x2 * c21.y * c22.x * c13.y + 2 * c11x2 * c11.y * c13.x * c13.y * c23.y + c11x2 * c12.x * c12.y * c13.y * c23.y + 2 * c12x2 * c20.y * c12.y * c13.y * c23.x + 2 * c12x2 * c21.x * c12.y * c13.y * c22.y + 2 * c12x2 * c12.y * c21.y * c22.x * c13.y + c21x3 * c13y3 + 3 * c10x2 * c13y3 * c23.x - 3 * c10y2 * c13x3 * c23.y + 3 * c20x2 * c13y3 * c23.x + c11y3 * c13x2 * c23.x - c11x3 * c13y2 * c23.y - c11.x * c11y2 * c13x2 * c23.y + c11x2 * c11.y * c13y2 * c23.x - 3 * c10x2 * c13.x * c13y2 * c23.y + 3 * c10y2 * c13x2 * c13.y * c23.x - c11x2 * c12y2 * c13.x * c23.y + c11y2 * c12x2 * c13.y * c23.x - 3 * c21x2 * c13.x * c21.y * c13y2 - 3 * c20x2 * c13.x * c13y2 * c23.y + 3 * c20y2 * c13x2 * c13.y * c23.x + c11.x * c12.x * c13.x * c13.y * (6 * c20.y * c23.y + 6 * c21.y * c22.y) + c12x3 * c13.y * (-2 * c20.y * c23.y - 2 * c21.y * c22.y) + c10.y * c13x3 * (6 * c20.y * c23.y + 6 * c21.y * c22.y) + c11.y * c12.x * c13x2 * (-2 * c20.y * c23.y - 2 * c21.y * c22.y) + c12x2 * c12.y * c13.x * (2 * c20.y * c23.y + 2 * c21.y * c22.y) + c11.x * c12.y * c13x2 * (-4 * c20.y * c23.y - 4 * c21.y * c22.y) + c10.x * c13x2 * c13.y * (-6 * c20.y * c23.y - 6 * c21.y * c22.y) + c20.x * c13x2 * c13.y * (6 * c20.y * c23.y + 6 * c21.y * c22.y) + c21.x * c13x2 * c13.y * (6 * c20.y * c22.y + 3 * c21y2) + c13x3 * (-2 * c20.y * c21.y * c22.y - c20y2 * c23.y - c21.y * (2 * c20.y * c22.y + c21y2) - c20.y * (2 * c20.y * c23.y + 2 * c21.y * c22.y)), -c10.x * c11.x * c12.y * c13.x * c13.y * c22.y + c10.x * c11.y * c12.x * c13.x * c13.y * c22.y + 6 * c10.x * c11.y * c12.y * c13.x * c22.x * c13.y - 6 * c10.y * c11.x * c12.x * c13.x * c13.y * c22.y - c10.y * c11.x * c12.y * c13.x * c22.x * c13.y + c10.y * c11.y * c12.x * c13.x * c22.x * c13.y + c11.x * c11.y * c12.x * c12.y * c13.x * c22.y - c11.x * c11.y * c12.x * c12.y * c22.x * c13.y + c11.x * c20.x * c12.y * c13.x * c13.y * c22.y + c11.x * c20.y * c12.y * c13.x * c22.x * c13.y + c11.x * c21.x * c12.y * c13.x * c21.y * c13.y - c20.x * c11.y * c12.x * c13.x * c13.y * c22.y - 6 * c20.x * c11.y * c12.y * c13.x * c22.x * c13.y - c11.y * c12.x * c20.y * c13.x * c22.x * c13.y - c11.y * c12.x * c21.x * c13.x * c21.y * c13.y - 6 * c10.x * c20.x * c22.x * c13y3 - 2 * c10.x * c12y3 * c13.x * c22.x + 2 * c20.x * c12y3 * c13.x * c22.x + 2 * c10.y * c12x3 * c13.y * c22.y - 6 * c10.x * c10.y * c13.x * c22.x * c13y2 + 3 * c10.x * c11.x * c12.x * c13y2 * c22.y - 2 * c10.x * c11.x * c12.y * c22.x * c13y2 - 4 * c10.x * c11.y * c12.x * c22.x * c13y2 + 3 * c10.y * c11.x * c12.x * c22.x * c13y2 + 6 * c10.x * c10.y * c13x2 * c13.y * c22.y + 6 * c10.x * c20.x * c13.x * c13y2 * c22.y - 3 * c10.x * c11.y * c12.y * c13x2 * c22.y + 2 * c10.x * c12.x * c12y2 * c13.x * c22.y + 2 * c10.x * c12.x * c12y2 * c22.x * c13.y + 6 * c10.x * c20.y * c13.x * c22.x * c13y2 + 6 * c10.x * c21.x * c13.x * c21.y * c13y2 + 4 * c10.y * c11.x * c12.y * c13x2 * c22.y + 6 * c10.y * c20.x * c13.x * c22.x * c13y2 + 2 * c10.y * c11.y * c12.x * c13x2 * c22.y - 3 * c10.y * c11.y * c12.y * c13x2 * c22.x + 2 * c10.y * c12.x * c12y2 * c13.x * c22.x - 3 * c11.x * c20.x * c12.x * c13y2 * c22.y + 2 * c11.x * c20.x * c12.y * c22.x * c13y2 + c11.x * c11.y * c12y2 * c13.x * c22.x - 3 * c11.x * c12.x * c20.y * c22.x * c13y2 - 3 * c11.x * c12.x * c21.x * c21.y * c13y2 + 4 * c20.x * c11.y * c12.x * c22.x * c13y2 - 2 * c10.x * c12x2 * c12.y * c13.y * c22.y - 6 * c10.y * c20.x * c13x2 * c13.y * c22.y - 6 * c10.y * c20.y * c13x2 * c22.x * c13.y - 6 * c10.y * c21.x * c13x2 * c21.y * c13.y - 2 * c10.y * c12x2 * c12.y * c13.x * c22.y - 2 * c10.y * c12x2 * c12.y * c22.x * c13.y - c11.x * c11.y * c12x2 * c13.y * c22.y - 2 * c11.x * c11y2 * c13.x * c22.x * c13.y + 3 * c20.x * c11.y * c12.y * c13x2 * c22.y - 2 * c20.x * c12.x * c12y2 * c13.x * c22.y - 2 * c20.x * c12.x * c12y2 * c22.x * c13.y - 6 * c20.x * c20.y * c13.x * c22.x * c13y2 - 6 * c20.x * c21.x * c13.x * c21.y * c13y2 + 3 * c11.y * c20.y * c12.y * c13x2 * c22.x + 3 * c11.y * c21.x * c12.y * c13x2 * c21.y - 2 * c12.x * c20.y * c12y2 * c13.x * c22.x - 2 * c12.x * c21.x * c12y2 * c13.x * c21.y - c11y2 * c12.x * c12.y * c13.x * c22.x + 2 * c20.x * c12x2 * c12.y * c13.y * c22.y - 3 * c11.y * c21x2 * c12.y * c13.x * c13.y + 6 * c20.y * c21.x * c13x2 * c21.y * c13.y + 2 * c11x2 * c11.y * c13.x * c13.y * c22.y + c11x2 * c12.x * c12.y * c13.y * c22.y + 2 * c12x2 * c20.y * c12.y * c22.x * c13.y + 2 * c12x2 * c21.x * c12.y * c21.y * c13.y - 3 * c10.x * c21x2 * c13y3 + 3 * c20.x * c21x2 * c13y3 + 3 * c10x2 * c22.x * c13y3 - 3 * c10y2 * c13x3 * c22.y + 3 * c20x2 * c22.x * c13y3 + c21x2 * c12y3 * c13.x + c11y3 * c13x2 * c22.x - c11x3 * c13y2 * c22.y + 3 * c10.y * c21x2 * c13.x * c13y2 - c11.x * c11y2 * c13x2 * c22.y + c11.x * c21x2 * c12.y * c13y2 + 2 * c11.y * c12.x * c21x2 * c13y2 + c11x2 * c11.y * c22.x * c13y2 - c12.x * c21x2 * c12y2 * c13.y - 3 * c20.y * c21x2 * c13.x * c13y2 - 3 * c10x2 * c13.x * c13y2 * c22.y + 3 * c10y2 * c13x2 * c22.x * c13.y - c11x2 * c12y2 * c13.x * c22.y + c11y2 * c12x2 * c22.x * c13.y - 3 * c20x2 * c13.x * c13y2 * c22.y + 3 * c20y2 * c13x2 * c22.x * c13.y + c12x2 * c12.y * c13.x * (2 * c20.y * c22.y + c21y2) + c11.x * c12.x * c13.x * c13.y * (6 * c20.y * c22.y + 3 * c21y2) + c12x3 * c13.y * (-2 * c20.y * c22.y - c21y2) + c10.y * c13x3 * (6 * c20.y * c22.y + 3 * c21y2) + c11.y * c12.x * c13x2 * (-2 * c20.y * c22.y - c21y2) + c11.x * c12.y * c13x2 * (-4 * c20.y * c22.y - 2 * c21y2) + c10.x * c13x2 * c13.y * (-6 * c20.y * c22.y - 3 * c21y2) + c20.x * c13x2 * c13.y * (6 * c20.y * c22.y + 3 * c21y2) + c13x3 * (-2 * c20.y * c21y2 - c20y2 * c22.y - c20.y * (2 * c20.y * c22.y + c21y2)), -c10.x * c11.x * c12.y * c13.x * c21.y * c13.y + c10.x * c11.y * c12.x * c13.x * c21.y * c13.y + 6 * c10.x * c11.y * c21.x * c12.y * c13.x * c13.y - 6 * c10.y * c11.x * c12.x * c13.x * c21.y * c13.y - c10.y * c11.x * c21.x * c12.y * c13.x * c13.y + c10.y * c11.y * c12.x * c21.x * c13.x * c13.y - c11.x * c11.y * c12.x * c21.x * c12.y * c13.y + c11.x * c11.y * c12.x * c12.y * c13.x * c21.y + c11.x * c20.x * c12.y * c13.x * c21.y * c13.y + 6 * c11.x * c12.x * c20.y * c13.x * c21.y * c13.y + c11.x * c20.y * c21.x * c12.y * c13.x * c13.y - c20.x * c11.y * c12.x * c13.x * c21.y * c13.y - 6 * c20.x * c11.y * c21.x * c12.y * c13.x * c13.y - c11.y * c12.x * c20.y * c21.x * c13.x * c13.y - 6 * c10.x * c20.x * c21.x * c13y3 - 2 * c10.x * c21.x * c12y3 * c13.x + 6 * c10.y * c20.y * c13x3 * c21.y + 2 * c20.x * c21.x * c12y3 * c13.x + 2 * c10.y * c12x3 * c21.y * c13.y - 2 * c12x3 * c20.y * c21.y * c13.y - 6 * c10.x * c10.y * c21.x * c13.x * c13y2 + 3 * c10.x * c11.x * c12.x * c21.y * c13y2 - 2 * c10.x * c11.x * c21.x * c12.y * c13y2 - 4 * c10.x * c11.y * c12.x * c21.x * c13y2 + 3 * c10.y * c11.x * c12.x * c21.x * c13y2 + 6 * c10.x * c10.y * c13x2 * c21.y * c13.y + 6 * c10.x * c20.x * c13.x * c21.y * c13y2 - 3 * c10.x * c11.y * c12.y * c13x2 * c21.y + 2 * c10.x * c12.x * c21.x * c12y2 * c13.y + 2 * c10.x * c12.x * c12y2 * c13.x * c21.y + 6 * c10.x * c20.y * c21.x * c13.x * c13y2 + 4 * c10.y * c11.x * c12.y * c13x2 * c21.y + 6 * c10.y * c20.x * c21.x * c13.x * c13y2 + 2 * c10.y * c11.y * c12.x * c13x2 * c21.y - 3 * c10.y * c11.y * c21.x * c12.y * c13x2 + 2 * c10.y * c12.x * c21.x * c12y2 * c13.x - 3 * c11.x * c20.x * c12.x * c21.y * c13y2 + 2 * c11.x * c20.x * c21.x * c12.y * c13y2 + c11.x * c11.y * c21.x * c12y2 * c13.x - 3 * c11.x * c12.x * c20.y * c21.x * c13y2 + 4 * c20.x * c11.y * c12.x * c21.x * c13y2 - 6 * c10.x * c20.y * c13x2 * c21.y * c13.y - 2 * c10.x * c12x2 * c12.y * c21.y * c13.y - 6 * c10.y * c20.x * c13x2 * c21.y * c13.y - 6 * c10.y * c20.y * c21.x * c13x2 * c13.y - 2 * c10.y * c12x2 * c21.x * c12.y * c13.y - 2 * c10.y * c12x2 * c12.y * c13.x * c21.y - c11.x * c11.y * c12x2 * c21.y * c13.y - 4 * c11.x * c20.y * c12.y * c13x2 * c21.y - 2 * c11.x * c11y2 * c21.x * c13.x * c13.y + 3 * c20.x * c11.y * c12.y * c13x2 * c21.y - 2 * c20.x * c12.x * c21.x * c12y2 * c13.y - 2 * c20.x * c12.x * c12y2 * c13.x * c21.y - 6 * c20.x * c20.y * c21.x * c13.x * c13y2 - 2 * c11.y * c12.x * c20.y * c13x2 * c21.y + 3 * c11.y * c20.y * c21.x * c12.y * c13x2 - 2 * c12.x * c20.y * c21.x * c12y2 * c13.x - c11y2 * c12.x * c21.x * c12.y * c13.x + 6 * c20.x * c20.y * c13x2 * c21.y * c13.y + 2 * c20.x * c12x2 * c12.y * c21.y * c13.y + 2 * c11x2 * c11.y * c13.x * c21.y * c13.y + c11x2 * c12.x * c12.y * c21.y * c13.y + 2 * c12x2 * c20.y * c21.x * c12.y * c13.y + 2 * c12x2 * c20.y * c12.y * c13.x * c21.y + 3 * c10x2 * c21.x * c13y3 - 3 * c10y2 * c13x3 * c21.y + 3 * c20x2 * c21.x * c13y3 + c11y3 * c21.x * c13x2 - c11x3 * c21.y * c13y2 - 3 * c20y2 * c13x3 * c21.y - c11.x * c11y2 * c13x2 * c21.y + c11x2 * c11.y * c21.x * c13y2 - 3 * c10x2 * c13.x * c21.y * c13y2 + 3 * c10y2 * c21.x * c13x2 * c13.y - c11x2 * c12y2 * c13.x * c21.y + c11y2 * c12x2 * c21.x * c13.y - 3 * c20x2 * c13.x * c21.y * c13y2 + 3 * c20y2 * c21.x * c13x2 * c13.y, c10.x * c10.y * c11.x * c12.y * c13.x * c13.y - c10.x * c10.y * c11.y * c12.x * c13.x * c13.y + c10.x * c11.x * c11.y * c12.x * c12.y * c13.y - c10.y * c11.x * c11.y * c12.x * c12.y * c13.x - c10.x * c11.x * c20.y * c12.y * c13.x * c13.y + 6 * c10.x * c20.x * c11.y * c12.y * c13.x * c13.y + c10.x * c11.y * c12.x * c20.y * c13.x * c13.y - c10.y * c11.x * c20.x * c12.y * c13.x * c13.y - 6 * c10.y * c11.x * c12.x * c20.y * c13.x * c13.y + c10.y * c20.x * c11.y * c12.x * c13.x * c13.y - c11.x * c20.x * c11.y * c12.x * c12.y * c13.y + c11.x * c11.y * c12.x * c20.y * c12.y * c13.x + c11.x * c20.x * c20.y * c12.y * c13.x * c13.y - c20.x * c11.y * c12.x * c20.y * c13.x * c13.y - 2 * c10.x * c20.x * c12y3 * c13.x + 2 * c10.y * c12x3 * c20.y * c13.y - 3 * c10.x * c10.y * c11.x * c12.x * c13y2 - 6 * c10.x * c10.y * c20.x * c13.x * c13y2 + 3 * c10.x * c10.y * c11.y * c12.y * c13x2 - 2 * c10.x * c10.y * c12.x * c12y2 * c13.x - 2 * c10.x * c11.x * c20.x * c12.y * c13y2 - c10.x * c11.x * c11.y * c12y2 * c13.x + 3 * c10.x * c11.x * c12.x * c20.y * c13y2 - 4 * c10.x * c20.x * c11.y * c12.x * c13y2 + 3 * c10.y * c11.x * c20.x * c12.x * c13y2 + 6 * c10.x * c10.y * c20.y * c13x2 * c13.y + 2 * c10.x * c10.y * c12x2 * c12.y * c13.y + 2 * c10.x * c11.x * c11y2 * c13.x * c13.y + 2 * c10.x * c20.x * c12.x * c12y2 * c13.y + 6 * c10.x * c20.x * c20.y * c13.x * c13y2 - 3 * c10.x * c11.y * c20.y * c12.y * c13x2 + 2 * c10.x * c12.x * c20.y * c12y2 * c13.x + c10.x * c11y2 * c12.x * c12.y * c13.x + c10.y * c11.x * c11.y * c12x2 * c13.y + 4 * c10.y * c11.x * c20.y * c12.y * c13x2 - 3 * c10.y * c20.x * c11.y * c12.y * c13x2 + 2 * c10.y * c20.x * c12.x * c12y2 * c13.x + 2 * c10.y * c11.y * c12.x * c20.y * c13x2 + c11.x * c20.x * c11.y * c12y2 * c13.x - 3 * c11.x * c20.x * c12.x * c20.y * c13y2 - 2 * c10.x * c12x2 * c20.y * c12.y * c13.y - 6 * c10.y * c20.x * c20.y * c13x2 * c13.y - 2 * c10.y * c20.x * c12x2 * c12.y * c13.y - 2 * c10.y * c11x2 * c11.y * c13.x * c13.y - c10.y * c11x2 * c12.x * c12.y * c13.y - 2 * c10.y * c12x2 * c20.y * c12.y * c13.x - 2 * c11.x * c20.x * c11y2 * c13.x * c13.y - c11.x * c11.y * c12x2 * c20.y * c13.y + 3 * c20.x * c11.y * c20.y * c12.y * c13x2 - 2 * c20.x * c12.x * c20.y * c12y2 * c13.x - c20.x * c11y2 * c12.x * c12.y * c13.x + 3 * c10y2 * c11.x * c12.x * c13.x * c13.y + 3 * c11.x * c12.x * c20y2 * c13.x * c13.y + 2 * c20.x * c12x2 * c20.y * c12.y * c13.y - 3 * c10x2 * c11.y * c12.y * c13.x * c13.y + 2 * c11x2 * c11.y * c20.y * c13.x * c13.y + c11x2 * c12.x * c20.y * c12.y * c13.y - 3 * c20x2 * c11.y * c12.y * c13.x * c13.y - c10x3 * c13y3 + c10y3 * c13x3 + c20x3 * c13y3 - c20y3 * c13x3 - 3 * c10.x * c20x2 * c13y3 - c10.x * c11y3 * c13x2 + 3 * c10x2 * c20.x * c13y3 + c10.y * c11x3 * c13y2 + 3 * c10.y * c20y2 * c13x3 + c20.x * c11y3 * c13x2 + c10x2 * c12y3 * c13.x - 3 * c10y2 * c20.y * c13x3 - c10y2 * c12x3 * c13.y + c20x2 * c12y3 * c13.x - c11x3 * c20.y * c13y2 - c12x3 * c20y2 * c13.y - c10.x * c11x2 * c11.y * c13y2 + c10.y * c11.x * c11y2 * c13x2 - 3 * c10.x * c10y2 * c13x2 * c13.y - c10.x * c11y2 * c12x2 * c13.y + c10.y * c11x2 * c12y2 * c13.x - c11.x * c11y2 * c20.y * c13x2 + 3 * c10x2 * c10.y * c13.x * c13y2 + c10x2 * c11.x * c12.y * c13y2 + 2 * c10x2 * c11.y * c12.x * c13y2 - 2 * c10y2 * c11.x * c12.y * c13x2 - c10y2 * c11.y * c12.x * c13x2 + c11x2 * c20.x * c11.y * c13y2 - 3 * c10.x * c20y2 * c13x2 * c13.y + 3 * c10.y * c20x2 * c13.x * c13y2 + c11.x * c20x2 * c12.y * c13y2 - 2 * c11.x * c20y2 * c12.y * c13x2 + c20.x * c11y2 * c12x2 * c13.y - c11.y * c12.x * c20y2 * c13x2 - c10x2 * c12.x * c12y2 * c13.y - 3 * c10x2 * c20.y * c13.x * c13y2 + 3 * c10y2 * c20.x * c13x2 * c13.y + c10y2 * c12x2 * c12.y * c13.x - c11x2 * c20.y * c12y2 * c13.x + 2 * c20x2 * c11.y * c12.x * c13y2 + 3 * c20.x * c20y2 * c13x2 * c13.y - c20x2 * c12.x * c12y2 * c13.y - 3 * c20x2 * c20.y * c13.x * c13y2 + c12x2 * c20y2 * c12.y * c13.x);
        var roots = poly.getRootsInInterval(0, 1);
        for (var i = 0; i < roots.length; i++) {
            var s = roots[i];
            var xRoots = new Polynomial(c13.x, c12.x, c11.x, c10.x - c20.x - s * c21.x - s * s * c22.x - s * s * s * c23.x).getRoots();
            var yRoots = new Polynomial(c13.y, c12.y, c11.y, c10.y - c20.y - s * c21.y - s * s * c22.y - s * s * s * c23.y).getRoots();
            if (xRoots.length > 0 && yRoots.length > 0) {
                var TOLERANCE = 1e-4;
                checkRoots: for (var j = 0; j < xRoots.length; j++) {
                    var xRoot = xRoots[j];
                    if (0 <= xRoot && xRoot <= 1) {
                        for (var k = 0; k < yRoots.length; k++) {
                            if (Math.abs(xRoot - yRoots[k]) < TOLERANCE) {
                                result.points.push(c23.multiply(s * s * s).add(c22.multiply(s * s).add(c21.multiply(s).add(c20))));
                                break checkRoots;
                            }
                        }
                    }
                }
            }
        }
        return result;
    };
    Intersection.intersectBezier3Circle = function (p1, p2, p3, p4, c, r) {
        return Intersection.intersectBezier3Ellipse(p1, p2, p3, p4, c, r, r);
    };
    Intersection.intersectBezier3Ellipse = function (p1, p2, p3, p4, ec, rx, ry) {
        var a, b, c, d;
        var c3, c2, c1, c0;
        var result = new Intersection();
        a = p1.multiply(-1);
        b = p2.multiply(3);
        c = p3.multiply(-3);
        d = a.add(b.add(c.add(p4)));
        c3 = new Vector2D(d.x, d.y);
        a = p1.multiply(3);
        b = p2.multiply(-6);
        c = p3.multiply(3);
        d = a.add(b.add(c));
        c2 = new Vector2D(d.x, d.y);
        a = p1.multiply(-3);
        b = p2.multiply(3);
        c = a.add(b);
        c1 = new Vector2D(c.x, c.y);
        c0 = new Vector2D(p1.x, p1.y);
        var rxrx = rx * rx;
        var ryry = ry * ry;
        var poly = new Polynomial(c3.x * c3.x * ryry + c3.y * c3.y * rxrx, 2 * (c3.x * c2.x * ryry + c3.y * c2.y * rxrx), 2 * (c3.x * c1.x * ryry + c3.y * c1.y * rxrx) + c2.x * c2.x * ryry + c2.y * c2.y * rxrx, 2 * c3.x * ryry * (c0.x - ec.x) + 2 * c3.y * rxrx * (c0.y - ec.y) + 2 * (c2.x * c1.x * ryry + c2.y * c1.y * rxrx), 2 * c2.x * ryry * (c0.x - ec.x) + 2 * c2.y * rxrx * (c0.y - ec.y) + c1.x * c1.x * ryry + c1.y * c1.y * rxrx, 2 * c1.x * ryry * (c0.x - ec.x) + 2 * c1.y * rxrx * (c0.y - ec.y), c0.x * c0.x * ryry - 2 * c0.y * ec.y * rxrx - 2 * c0.x * ec.x * ryry + c0.y * c0.y * rxrx + ec.x * ec.x * ryry + ec.y * ec.y * rxrx - rxrx * ryry);
        var roots = poly.getRootsInInterval(0, 1);
        for (var i = 0; i < roots.length; i++) {
            var t = roots[i];
            result.points.push(c3.multiply(t * t * t).add(c2.multiply(t * t).add(c1.multiply(t).add(c0))));
        }
        return result;
    };
    Intersection.intersectBezier3Line = function (p1, p2, p3, p4, a1, a2) {
        var a, b, c, d;
        var c3, c2, c1, c0;
        var cl;
        var n;
        var min = a1.min(a2);
        var max = a1.max(a2);
        var result = new Intersection();
        a = p1.multiply(-1);
        b = p2.multiply(3);
        c = p3.multiply(-3);
        d = a.add(b.add(c.add(p4)));
        c3 = new Vector2D(d.x, d.y);
        a = p1.multiply(3);
        b = p2.multiply(-6);
        c = p3.multiply(3);
        d = a.add(b.add(c));
        c2 = new Vector2D(d.x, d.y);
        a = p1.multiply(-3);
        b = p2.multiply(3);
        c = a.add(b);
        c1 = new Vector2D(c.x, c.y);
        c0 = new Vector2D(p1.x, p1.y);
        n = new Vector2D(a1.y - a2.y, a2.x - a1.x);
        cl = a1.x * a2.y - a2.x * a1.y;
        var roots = new Polynomial(n.dot(c3), n.dot(c2), n.dot(c1), n.dot(c0) + cl).getRoots();
        for (var i = 0; i < roots.length; i++) {
            var t = roots[i];
            if (0 <= t && t <= 1) {
                var p5 = p1.lerp(p2, t);
                var p6 = p2.lerp(p3, t);
                var p7 = p3.lerp(p4, t);
                var p8 = p5.lerp(p6, t);
                var p9 = p6.lerp(p7, t);
                var p10 = p8.lerp(p9, t);
                if (a1.x === a2.x) {
                    if (min.y <= p10.y && p10.y <= max.y) {
                        result.appendPoint(p10);
                    }
                }
                else if (a1.y === a2.y) {
                    if (min.x <= p10.x && p10.x <= max.x) {
                        result.appendPoint(p10);
                    }
                }
                else if (p10.gte(min) && p10.lte(max)) {
                    result.appendPoint(p10);
                }
            }
        }
        return result;
    };
    Intersection.intersectBezier3Polygon = function (p1, p2, p3, p4, points) {
        var result = new Intersection();
        var length = points.length;
        for (var i = 0; i < length; i++) {
            var a1 = points[i];
            var a2 = points[(i + 1) % length];
            var inter = Intersection.intersectBezier3Line(p1, p2, p3, p4, a1, a2);
            result.appendPoints(inter.points);
        }
        return result;
    };
    Intersection.intersectBezier3Rectangle = function (p1, p2, p3, p4, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Vector2D(max.x, min.y);
        var bottomLeft = new Vector2D(min.x, max.y);
        var inter1 = Intersection.intersectBezier3Line(p1, p2, p3, p4, min, topRight);
        var inter2 = Intersection.intersectBezier3Line(p1, p2, p3, p4, topRight, max);
        var inter3 = Intersection.intersectBezier3Line(p1, p2, p3, p4, max, bottomLeft);
        var inter4 = Intersection.intersectBezier3Line(p1, p2, p3, p4, bottomLeft, min);
        var result = new Intersection();
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);
        return result;
    };
    Intersection.intersectCircleCircle = function (c1, r1, c2, r2) {
        var result;
        var r_max = r1 + r2;
        var r_min = Math.abs(r1 - r2);
        var c_dist = c1.distanceFrom(c2);
        if (c_dist > r_max) {
            result = new Intersection('Outside');
        }
        else if (c_dist < r_min) {
            result = new Intersection('Inside');
        }
        else {
            result = new Intersection('Intersection');
            var a = (r1 * r1 - r2 * r2 + c_dist * c_dist) / (2 * c_dist);
            var h = Math.sqrt(r1 * r1 - a * a);
            var p = c1.lerp(c2, a / c_dist);
            var b = h / c_dist;
            result.points.push(new Vector2D(p.x - b * (c2.y - c1.y), p.y + b * (c2.x - c1.x)));
            result.points.push(new Vector2D(p.x + b * (c2.y - c1.y), p.y - b * (c2.x - c1.x)));
        }
        return result;
    };
    Intersection.intersectCircleEllipse = function (cc, r, ec, rx, ry) {
        return Intersection.intersectEllipseEllipse(cc, r, r, ec, rx, ry);
    };
    Intersection.intersectCircleLine = function (c, r, a1, a2) {
        var result;
        var a = (a2.x - a1.x) * (a2.x - a1.x) + (a2.y - a1.y) * (a2.y - a1.y);
        var b = 2 * ((a2.x - a1.x) * (a1.x - c.x) + (a2.y - a1.y) * (a1.y - c.y));
        var cc = c.x * c.x + c.y * c.y + a1.x * a1.x + a1.y * a1.y - 2 * (c.x * a1.x + c.y * a1.y) - r * r;
        var deter = b * b - 4 * a * cc;
        if (deter < 0) {
            result = new Intersection('Outside');
        }
        else if (deter === 0) {
            result = new Intersection('Tangent');
        }
        else {
            var e = Math.sqrt(deter);
            var u1 = (-b + e) / (2 * a);
            var u2 = (-b - e) / (2 * a);
            if ((u1 < 0 || u1 > 1) && (u2 < 0 || u2 > 1)) {
                if ((u1 < 0 && u2 < 0) || (u1 > 1 && u2 > 1)) {
                    result = new Intersection('Outside');
                }
                else {
                    result = new Intersection('Inside');
                }
            }
            else {
                result = new Intersection('Intersection');
                if (0 <= u1 && u1 <= 1) {
                    result.points.push(a1.lerp(a2, u1));
                }
                if (0 <= u2 && u2 <= 1) {
                    result.points.push(a1.lerp(a2, u2));
                }
            }
        }
        return result;
    };
    Intersection.intersectCirclePolygon = function (c, r, points) {
        var result = new Intersection();
        var length = points.length;
        var inter;
        for (var i = 0; i < length; i++) {
            var a1 = points[i];
            var a2 = points[(i + 1) % length];
            inter = Intersection.intersectCircleLine(c, r, a1, a2);
            result.appendPoints(inter.points);
        }
        if (result.points.length > 0) {
            result.status = 'Intersection';
        }
        else {
            result.status = inter.status;
        }
        return result;
    };
    Intersection.intersectCircleRectangle = function (c, r, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Vector2D(max.x, min.y);
        var bottomLeft = new Vector2D(min.x, max.y);
        var inter1 = Intersection.intersectCircleLine(c, r, min, topRight);
        var inter2 = Intersection.intersectCircleLine(c, r, topRight, max);
        var inter3 = Intersection.intersectCircleLine(c, r, max, bottomLeft);
        var inter4 = Intersection.intersectCircleLine(c, r, bottomLeft, min);
        var result = new Intersection();
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);
        if (result.points.length > 0) {
            result.status = 'Intersection';
        }
        else {
            result.status = inter1.status;
        }
        return result;
    };
    Intersection.intersectEllipseEllipse = function (c1, rx1, ry1, c2, rx2, ry2) {
        var a = [ry1 * ry1, 0, rx1 * rx1, -2 * ry1 * ry1 * c1.x, -2 * rx1 * rx1 * c1.y, ry1 * ry1 * c1.x * c1.x + rx1 * rx1 * c1.y * c1.y - rx1 * rx1 * ry1 * ry1];
        var b = [ry2 * ry2, 0, rx2 * rx2, -2 * ry2 * ry2 * c2.x, -2 * rx2 * rx2 * c2.y, ry2 * ry2 * c2.x * c2.x + rx2 * rx2 * c2.y * c2.y - rx2 * rx2 * ry2 * ry2];
        var yPoly = Intersection.bezout(a, b);
        var yRoots = yPoly.getRoots();
        var epsilon = 1e-3;
        var norm0 = (a[0] * a[0] + 2 * a[1] * a[1] + a[2] * a[2]) * epsilon;
        var norm1 = (b[0] * b[0] + 2 * b[1] * b[1] + b[2] * b[2]) * epsilon;
        var result = new Intersection();
        for (var y = 0; y < yRoots.length; y++) {
            var xPoly = new Polynomial(a[0], a[3] + yRoots[y] * a[1], a[5] + yRoots[y] * (a[4] + yRoots[y] * a[2]));
            var xRoots = xPoly.getRoots();
            for (var x = 0; x < xRoots.length; x++) {
                var test = (a[0] * xRoots[x] + a[1] * yRoots[y] + a[3]) * xRoots[x] + (a[2] * yRoots[y] + a[4]) * yRoots[y] + a[5];
                if (Math.abs(test) < norm0) {
                    test = (b[0] * xRoots[x] + b[1] * yRoots[y] + b[3]) * xRoots[x] + (b[2] * yRoots[y] + b[4]) * yRoots[y] + b[5];
                    if (Math.abs(test) < norm1) {
                        result.appendPoint(new Vector2D(xRoots[x], yRoots[y]));
                    }
                }
            }
        }
        return result;
    };
    Intersection.intersectEllipseLine = function (c, rx, ry, a1, a2) {
        var result;
        var origin = new Vector2D(a1.x, a1.y);
        var dir = Vector2D.fromPoints(a1, a2);
        var center = new Vector2D(c.x, c.y);
        var diff = origin.subtract(center);
        var mDir = new Vector2D(dir.x / (rx * rx), dir.y / (ry * ry));
        var mDiff = new Vector2D(diff.x / (rx * rx), diff.y / (ry * ry));
        var a = dir.dot(mDir);
        var b = dir.dot(mDiff);
        c = diff.dot(mDiff) - 1.0;
        var d = b * b - a * c;
        if (d < 0) {
            result = new Intersection('Outside');
        }
        else if (d > 0) {
            var root = Math.sqrt(d);
            var t_a = (-b - root) / a;
            var t_b = (-b + root) / a;
            if ((t_a < 0 || 1 < t_a) && (t_b < 0 || 1 < t_b)) {
                if ((t_a < 0 && t_b < 0) || (t_a > 1 && t_b > 1)) {
                    result = new Intersection('Outside');
                }
                else {
                    result = new Intersection('Inside');
                }
            }
            else {
                result = new Intersection('Intersection');
                if (0 <= t_a && t_a <= 1) {
                    result.appendPoint(a1.lerp(a2, t_a));
                }
                if (0 <= t_b && t_b <= 1) {
                    result.appendPoint(a1.lerp(a2, t_b));
                }
            }
        }
        else {
            var t = -b / a;
            if (0 <= t && t <= 1) {
                result = new Intersection('Intersection');
                result.appendPoint(a1.lerp(a2, t));
            }
            else {
                result = new Intersection('Outside');
            }
        }
        return result;
    };
    Intersection.intersectEllipsePolygon = function (c, rx, ry, points) {
        var result = new Intersection();
        var length = points.length;
        for (var i = 0; i < length; i++) {
            var b1 = points[i];
            var b2 = points[(i + 1) % length];
            var inter = Intersection.intersectEllipseLine(c, rx, ry, b1, b2);
            result.appendPoints(inter.points);
        }
        return result;
    };
    Intersection.intersectEllipseRectangle = function (c, rx, ry, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Vector2D(max.x, min.y);
        var bottomLeft = new Vector2D(min.x, max.y);
        var inter1 = Intersection.intersectEllipseLine(c, rx, ry, min, topRight);
        var inter2 = Intersection.intersectEllipseLine(c, rx, ry, topRight, max);
        var inter3 = Intersection.intersectEllipseLine(c, rx, ry, max, bottomLeft);
        var inter4 = Intersection.intersectEllipseLine(c, rx, ry, bottomLeft, min);
        var result = new Intersection();
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);
        return result;
    };
    Intersection.intersectLineLine = function (a1, a2, b1, b2) {
        var result;
        var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
        var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
        var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
        if (u_b !== 0) {
            var ua = ua_t / u_b;
            var ub = ub_t / u_b;
            if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
                result = new Intersection('Intersection');
                result.points.push(new Vector2D(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
            }
            else {
                result = new Intersection();
            }
        }
        else {
            if (ua_t === 0 || ub_t === 0) {
                result = new Intersection('Coincident');
            }
            else {
                result = new Intersection('Parallel');
            }
        }
        return result;
    };
    Intersection.intersectLinePolygon = function (a1, a2, points) {
        var result = new Intersection();
        var length = points.length;
        for (var i = 0; i < length; i++) {
            var b1 = points[i];
            var b2 = points[(i + 1) % length];
            var inter = Intersection.intersectLineLine(a1, a2, b1, b2);
            result.appendPoints(inter.points);
        }
        return result;
    };
    Intersection.intersectLineRectangle = function (a1, a2, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Vector2D(max.x, min.y);
        var bottomLeft = new Vector2D(min.x, max.y);
        var inter1 = Intersection.intersectLineLine(min, topRight, a1, a2);
        var inter2 = Intersection.intersectLineLine(topRight, max, a1, a2);
        var inter3 = Intersection.intersectLineLine(max, bottomLeft, a1, a2);
        var inter4 = Intersection.intersectLineLine(bottomLeft, min, a1, a2);
        var result = new Intersection();
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);
        return result;
    };
    Intersection.intersectPolygonPolygon = function (points1, points2) {
        var result = new Intersection();
        var length = points1.length;
        for (var i = 0; i < length; i++) {
            var a1 = points1[i];
            var a2 = points1[(i + 1) % length];
            var inter = Intersection.intersectLinePolygon(a1, a2, points2);
            result.appendPoints(inter.points);
        }
        return result;
    };
    Intersection.intersectPolygonRectangle = function (points, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Vector2D(max.x, min.y);
        var bottomLeft = new Vector2D(min.x, max.y);
        var inter1 = Intersection.intersectLinePolygon(min, topRight, points);
        var inter2 = Intersection.intersectLinePolygon(topRight, max, points);
        var inter3 = Intersection.intersectLinePolygon(max, bottomLeft, points);
        var inter4 = Intersection.intersectLinePolygon(bottomLeft, min, points);
        var result = new Intersection();
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);
        return result;
    };
    Intersection.intersectRayRay = function (a1, a2, b1, b2) {
        var result;
        var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
        var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
        var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
        if (u_b !== 0) {
            var ua = ua_t / u_b;
            result = new Intersection('Intersection');
            result.points.push(new Vector2D(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
        }
        else {
            if (ua_t === 0 || ub_t === 0) {
                result = new Intersection('Coincident');
            }
            else {
                result = new Intersection('Parallel');
            }
        }
        return result;
    };
    Intersection.intersectRectangleRectangle = function (a1, a2, b1, b2) {
        var min = a1.min(a2);
        var max = a1.max(a2);
        var topRight = new Vector2D(max.x, min.y);
        var bottomLeft = new Vector2D(min.x, max.y);
        var inter1 = Intersection.intersectLineRectangle(min, topRight, b1, b2);
        var inter2 = Intersection.intersectLineRectangle(topRight, max, b1, b2);
        var inter3 = Intersection.intersectLineRectangle(max, bottomLeft, b1, b2);
        var inter4 = Intersection.intersectLineRectangle(bottomLeft, min, b1, b2);
        var result = new Intersection();
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);
        return result;
    };
    Intersection.bezout = function (e1, e2) {
        var AB = e1[0] * e2[1] - e2[0] * e1[1];
        var AC = e1[0] * e2[2] - e2[0] * e1[2];
        var AD = e1[0] * e2[3] - e2[0] * e1[3];
        var AE = e1[0] * e2[4] - e2[0] * e1[4];
        var AF = e1[0] * e2[5] - e2[0] * e1[5];
        var BC = e1[1] * e2[2] - e2[1] * e1[2];
        var BE = e1[1] * e2[4] - e2[1] * e1[4];
        var BF = e1[1] * e2[5] - e2[1] * e1[5];
        var CD = e1[2] * e2[3] - e2[2] * e1[3];
        var DE = e1[3] * e2[4] - e2[3] * e1[4];
        var DF = e1[3] * e2[5] - e2[3] * e1[5];
        var BFpDE = BF + DE;
        var BEmCD = BE - CD;
        return new Polynomial(AB * BC - AC * AC, AB * BEmCD + AD * BC - 2 * AC * AE, AB * BFpDE + AD * BEmCD - AE * AE - 2 * AC * AF, AB * DF + AD * BFpDE - 2 * AE * AF, AD * DF - AF * AF);
    };
    return Intersection;
}());
function vec(x, y) {
    if (y === void 0) { y = Number.NaN; }
    if (typeof x === 'number') {
        return new Vector2D(x, y);
    }
    else {
        return new Vector2D(x.x, x.y);
    }
}
var Vector2D = (function () {
    function Vector2D(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Vector2D.prototype.add = function (that) {
        return new Vector2D(this.x + that.x, this.y + that.y);
    };
    Vector2D.prototype.addEquals = function (that) {
        this.x += that.x;
        this.y += that.y;
        return this;
    };
    Vector2D.prototype.scalarAdd = function (scalar) {
        return new Vector2D(this.x + scalar, this.y + scalar);
    };
    Vector2D.prototype.scalarAddEquals = function (scalar) {
        this.x += scalar;
        this.y += scalar;
        return this;
    };
    Vector2D.prototype.subtract = function (that) {
        return new Vector2D(this.x - that.x, this.y - that.y);
    };
    Vector2D.prototype.subtractEquals = function (that) {
        this.x -= that.x;
        this.y -= that.y;
        return this;
    };
    Vector2D.prototype.scalarSubtract = function (scalar) {
        return new Vector2D(this.x - scalar, this.y - scalar);
    };
    Vector2D.prototype.scalarSubtractEquals = function (scalar) {
        this.x -= scalar;
        this.y -= scalar;
        return this;
    };
    Vector2D.prototype.multiply = function (scalar) {
        return new Vector2D(this.x * scalar, this.y * scalar);
    };
    Vector2D.prototype.multiplyEquals = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    };
    Vector2D.prototype.divide = function (scalar) {
        return new Vector2D(this.x / scalar, this.y / scalar);
    };
    Vector2D.prototype.divideEquals = function (scalar) {
        this.x /= scalar;
        this.y /= scalar;
        return this;
    };
    Vector2D.prototype.eq = function (that) {
        return (this.x === that.x && this.y === that.y);
    };
    Vector2D.prototype.lt = function (that) {
        return (this.x < that.x && this.y < that.y);
    };
    Vector2D.prototype.lte = function (that) {
        return (this.x <= that.x && this.y <= that.y);
    };
    Vector2D.prototype.gt = function (that) {
        return (this.x > that.x && this.y > that.y);
    };
    Vector2D.prototype.gte = function (that) {
        return (this.x >= that.x && this.y >= that.y);
    };
    Vector2D.prototype.lerp = function (that, t) {
        return new Vector2D(this.x + (that.x - this.x) * t, this.y + (that.y - this.y) * t);
    };
    Vector2D.prototype.distanceFrom = function (that) {
        var dx = this.x - that.x;
        var dy = this.y - that.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Vector2D.prototype.min = function (that) {
        return new Vector2D(Math.min(this.x, that.x), Math.min(this.y, that.y));
    };
    Vector2D.prototype.max = function (that) {
        return new Vector2D(Math.max(this.x, that.x), Math.max(this.y, that.y));
    };
    Vector2D.prototype.toString = function () {
        return this.x + ',' + this.y;
    };
    Vector2D.prototype.setXY = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Vector2D.prototype.setFromPoint = function (that) {
        this.x = that.x;
        this.y = that.y;
    };
    Vector2D.prototype.swap = function (that) {
        var x = this.x;
        var y = this.y;
        this.x = that.x;
        this.y = that.y;
        that.x = x;
        that.y = y;
    };
    Vector2D.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector2D.prototype.dot = function (that) {
        return this.x * that.x + this.y * that.y;
    };
    Vector2D.prototype.cross = function (that) {
        return this.x * that.y - this.y * that.x;
    };
    Vector2D.prototype.unit = function () {
        return this.divide(this.length());
    };
    Vector2D.prototype.unitEquals = function () {
        this.divideEquals(this.length());
        return this;
    };
    Vector2D.prototype.perp = function () {
        return new Vector2D(-this.y, this.x);
    };
    Vector2D.fromPoints = function (p1, p2) {
        return new Vector2D(p2.x - p1.x, p2.y - p1.y);
    };
    return Vector2D;
}());
var Polynomial = (function () {
    function Polynomial() {
        var coefs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            coefs[_i - 0] = arguments[_i];
        }
        this.coefs = [];
        for (var i = coefs.length - 1; i >= 0; i--) {
            this.coefs.push(coefs[i]);
        }
    }
    Polynomial.prototype.eval = function (x) {
        var result = 0;
        for (var i = this.coefs.length - 1; i >= 0; i--) {
            result = result * x + this.coefs[i];
        }
        return result;
    };
    Polynomial.prototype.multiply = function (that) {
        var result = new Polynomial();
        var i;
        for (i = 0; i <= this.getDegree() + that.getDegree(); i++) {
            result.coefs.push(0);
        }
        for (i = 0; i <= this.getDegree(); i++) {
            for (var j = 0; j <= that.getDegree(); j++) {
                result.coefs[i + j] += this.coefs[i] * that.coefs[j];
            }
        }
        return result;
    };
    Polynomial.prototype.divide_scalar = function (scalar) {
        for (var i = 0; i < this.coefs.length; i++) {
            this.coefs[i] /= scalar;
        }
    };
    Polynomial.prototype.simplify = function () {
        for (var i = this.getDegree(); i >= 0; i--) {
            if (Math.abs(this.coefs[i]) <= Polynomial.TOLERANCE) {
                this.coefs.pop();
            }
            else {
                break;
            }
        }
    };
    Polynomial.prototype.bisection = function (min, max) {
        var minValue = this.eval(min);
        var maxValue = this.eval(max);
        var result;
        if (Math.abs(minValue) <= Polynomial.TOLERANCE) {
            result = min;
        }
        else if (Math.abs(maxValue) <= Polynomial.TOLERANCE) {
            result = max;
        }
        else if (minValue * maxValue <= 0) {
            var tmp1 = Math.log(max - min);
            var tmp2 = Math.log(10) * Polynomial.ACCURACY;
            var iters = Math.ceil((tmp1 + tmp2) / Math.log(2));
            for (var i = 0; i < iters; i++) {
                result = 0.5 * (min + max);
                var value = this.eval(result);
                if (Math.abs(value) <= Polynomial.TOLERANCE) {
                    break;
                }
                if (value * minValue < 0) {
                    max = result;
                    maxValue = value;
                }
                else {
                    min = result;
                    minValue = value;
                }
            }
        }
        return result;
    };
    Polynomial.prototype.toString = function () {
        var coefs = new Array();
        var signs = new Array();
        var i;
        for (i = this.coefs.length - 1; i >= 0; i--) {
            var value = this.coefs[i];
            if (value !== 0) {
                var sign = (value < 0) ? ' - ' : ' + ';
                value = Math.abs(value);
                if (i > 0 && value === 1) {
                    value = 'x';
                }
                else {
                    value += 'x';
                }
                if (i > 1) {
                    value += '^' + i;
                }
                signs.push(sign);
                coefs.push(value);
            }
        }
        signs[0] = (signs[0] === ' + ') ? '' : '-';
        var result = '';
        for (i = 0; i < coefs.length; i++) {
            result += signs[i] + coefs[i];
        }
        return result;
    };
    Polynomial.prototype.getDegree = function () {
        return this.coefs.length - 1;
    };
    Polynomial.prototype.getDerivative = function () {
        var derivative = new Polynomial();
        for (var i = 1; i < this.coefs.length; i++) {
            derivative.coefs.push(i * this.coefs[i]);
        }
        return derivative;
    };
    Polynomial.prototype.getRoots = function () {
        var result;
        this.simplify();
        switch (this.getDegree()) {
            case 0:
                result = new Array();
                break;
            case 1:
                result = this.getLinearRoot();
                break;
            case 2:
                result = this.getQuadraticRoots();
                break;
            case 3:
                result = this.getCubicRoots();
                break;
            case 4:
                result = this.getQuarticRoots();
                break;
            default:
                result = new Array();
        }
        return result;
    };
    Polynomial.prototype.getRootsInInterval = function (min, max) {
        var roots = new Array(), i;
        var root;
        if (this.getDegree() === 1) {
            root = this.bisection(min, max);
            if (root != null) {
                roots.push(root);
            }
        }
        else {
            var deriv = this.getDerivative();
            var droots = deriv.getRootsInInterval(min, max);
            if (droots.length > 0) {
                root = this.bisection(min, droots[0]);
                if (root != null) {
                    roots.push(root);
                }
                for (i = 0; i <= droots.length - 2; i++) {
                    root = this.bisection(droots[i], droots[i + 1]);
                    if (root != null) {
                        roots.push(root);
                    }
                }
                root = this.bisection(droots[droots.length - 1], max);
                if (root != null) {
                    roots.push(root);
                }
            }
            else {
                root = this.bisection(min, max);
                if (root != null) {
                    roots.push(root);
                }
            }
        }
        return roots;
    };
    Polynomial.prototype.getLinearRoot = function () {
        var result = new Array();
        var a = this.coefs[1];
        if (a !== 0) {
            result.push(-this.coefs[0] / a);
        }
        return result;
    };
    Polynomial.prototype.getQuadraticRoots = function () {
        var results = new Array();
        if (this.getDegree() === 2) {
            var a = this.coefs[2];
            var b = this.coefs[1] / a;
            var c = this.coefs[0] / a;
            var d = b * b - 4 * c;
            if (d > 0) {
                var e = Math.sqrt(d);
                results.push(0.5 * (-b + e));
                results.push(0.5 * (-b - e));
            }
            else if (d === 0) {
                results.push(0.5 * -b);
            }
        }
        return results;
    };
    Polynomial.prototype.getCubicRoots = function () {
        var results = new Array(), disrim;
        if (this.getDegree() === 3) {
            var c3 = this.coefs[3];
            var c2 = this.coefs[2] / c3;
            var c1 = this.coefs[1] / c3;
            var c0 = this.coefs[0] / c3;
            var a = (3 * c1 - c2 * c2) / 3;
            var b = (2 * c2 * c2 * c2 - 9 * c1 * c2 + 27 * c0) / 27;
            var offset = c2 / 3;
            var discrim = b * b / 4 + a * a * a / 27;
            var halfB = b / 2;
            if (Math.abs(discrim) <= Polynomial.TOLERANCE) {
                disrim = 0;
            }
            var tmp;
            if (discrim > 0) {
                var e = Math.sqrt(discrim);
                var root;
                tmp = -halfB + e;
                if (tmp >= 0) {
                    root = Math.pow(tmp, 1 / 3);
                }
                else {
                    root = -Math.pow(-tmp, 1 / 3);
                }
                tmp = -halfB - e;
                if (tmp >= 0) {
                    root += Math.pow(tmp, 1 / 3);
                }
                else {
                    root -= Math.pow(-tmp, 1 / 3);
                }
                results.push(root - offset);
            }
            else if (discrim < 0) {
                var distance = Math.sqrt(-a / 3);
                var angle = Math.atan2(Math.sqrt(-discrim), -halfB) / 3;
                var cos = Math.cos(angle);
                var sin = Math.sin(angle);
                var sqrt3 = Math.sqrt(3);
                results.push(2 * distance * cos - offset);
                results.push(-distance * (cos + sqrt3 * sin) - offset);
                results.push(-distance * (cos - sqrt3 * sin) - offset);
            }
            else {
                if (halfB >= 0) {
                    tmp = -Math.pow(halfB, 1 / 3);
                }
                else {
                    tmp = Math.pow(-halfB, 1 / 3);
                }
                results.push(2 * tmp - offset);
                results.push(-tmp - offset);
            }
        }
        return results;
    };
    Polynomial.prototype.getQuarticRoots = function () {
        var results = new Array();
        if (this.getDegree() === 4) {
            var c4 = this.coefs[4];
            var c3 = this.coefs[3] / c4;
            var c2 = this.coefs[2] / c4;
            var c1 = this.coefs[1] / c4;
            var c0 = this.coefs[0] / c4;
            var resolveRoots = new Polynomial(1, -c2, c3 * c1 - 4 * c0, -c3 * c3 * c0 + 4 * c2 * c0 - c1 * c1).getCubicRoots();
            var y = resolveRoots[0];
            var discrim = c3 * c3 / 4 - c2 + y;
            if (Math.abs(discrim) <= Polynomial.TOLERANCE) {
                discrim = 0;
            }
            var t2;
            var d;
            if (discrim > 0) {
                var e = Math.sqrt(discrim);
                var t1 = 3 * c3 * c3 / 4 - e * e - 2 * c2;
                t2 = (4 * c3 * c2 - 8 * c1 - c3 * c3 * c3) / (4 * e);
                var plus = t1 + t2;
                var minus = t1 - t2;
                var f;
                if (Math.abs(plus) <= Polynomial.TOLERANCE) {
                    plus = 0;
                }
                if (Math.abs(minus) <= Polynomial.TOLERANCE) {
                    minus = 0;
                }
                if (plus >= 0) {
                    f = Math.sqrt(plus);
                    results.push(-c3 / 4 + (e + f) / 2);
                    results.push(-c3 / 4 + (e - f) / 2);
                }
                if (minus >= 0) {
                    f = Math.sqrt(minus);
                    results.push(-c3 / 4 + (f - e) / 2);
                    results.push(-c3 / 4 - (f + e) / 2);
                }
            }
            else if (discrim >= 0) {
                t2 = y * y - 4 * c0;
                if (t2 >= -Polynomial.TOLERANCE) {
                    if (t2 < 0) {
                        t2 = 0;
                    }
                    t2 = 2 * Math.sqrt(t2);
                    t1 = 3 * c3 * c3 / 4 - 2 * c2;
                    if (t1 + t2 >= Polynomial.TOLERANCE) {
                        d = Math.sqrt(t1 + t2);
                        results.push(-c3 / 4 + d / 2);
                        results.push(-c3 / 4 - d / 2);
                    }
                    if (t1 - t2 >= Polynomial.TOLERANCE) {
                        d = Math.sqrt(t1 - t2);
                        results.push(-c3 / 4 + d / 2);
                        results.push(-c3 / 4 - d / 2);
                    }
                }
            }
        }
        return results;
    };
    Polynomial.TOLERANCE = 1e-6;
    Polynomial.ACCURACY = 6;
    return Polynomial;
}());
var Token = (function () {
    function Token(type, text) {
        this.type = type;
        this.text = text;
    }
    Token.prototype.typeis = function (t) {
        return this.type === t;
    };
    return Token;
}());
var Path = (function () {
    function Path(path) {
        this.segments = null;
        this.parseData(path);
    }
    Path.prototype.appendPathSegment = function (segment) {
        segment.previous = this.segments[this.segments.length - 1];
        this.segments.push(segment);
    };
    Path.prototype.parseData = function (d) {
        var tokens = this.tokenize(d);
        var index = 0;
        var token = tokens[index];
        var mode = 'BOD';
        this.segments = new Array();
        while (!token.typeis(Path.EOD)) {
            var param_length;
            var params = new Array();
            if (mode === 'BOD') {
                if (token.text === 'M' || token.text === 'm') {
                    index++;
                    param_length = Path.PARAMS[token.text].length;
                    mode = token.text;
                }
                else {
                    throw new Error('Path data must begin with a moveto command');
                }
            }
            else {
                if (token.typeis(Path.NUMBER)) {
                    param_length = Path.PARAMS[mode].length;
                }
                else {
                    index++;
                    param_length = Path.PARAMS[token.text].length;
                    mode = token.text;
                }
            }
            if ((index + param_length) < tokens.length) {
                for (var i = index; i < index + param_length; i++) {
                    var n = tokens[i];
                    if (n.typeis(Path.NUMBER)) {
                        params[params.length] = n.text;
                    }
                    else {
                        throw new Error('Parameter type is not a number: ' + mode + ',' + n.text);
                    }
                }
                var segment;
                var length = this.segments.length;
                var previous = (length === 0) ? null : this.segments[length - 1];
                switch (mode) {
                    case 'A':
                        segment = new AbsoluteArcPath(params, this, previous);
                        break;
                    case 'C':
                        segment = new AbsoluteCurveto3(params, this, previous);
                        break;
                    case 'c':
                        segment = new RelativeCurveto3(params, this, previous);
                        break;
                    case 'H':
                        segment = new AbsoluteHLineto(params, this, previous);
                        break;
                    case 'L':
                        segment = new AbsoluteLineto(params, this, previous);
                        break;
                    case 'l':
                        segment = new RelativeLineto(params, this, previous);
                        break;
                    case 'M':
                        segment = new AbsoluteMoveto(params, this, previous);
                        break;
                    case 'm':
                        segment = new RelativeMoveto(params, this, previous);
                        break;
                    case 'Q':
                        segment = new AbsoluteCurveto2(params, this, previous);
                        break;
                    case 'q':
                        segment = new RelativeCurveto2(params, this, previous);
                        break;
                    case 'S':
                        segment = new AbsoluteSmoothCurveto3(params, this, previous);
                        break;
                    case 's':
                        segment = new RelativeSmoothCurveto3(params, this, previous);
                        break;
                    case 'T':
                        segment = new AbsoluteSmoothCurveto2(params, this, previous);
                        break;
                    case 't':
                        segment = new RelativeSmoothCurveto2(params, this, previous);
                        break;
                    case 'Z':
                        segment = new RelativeClosePath(params, this, previous);
                        break;
                    case 'z':
                        segment = new RelativeClosePath(params, this, previous);
                        break;
                    default:
                        throw new Error('Unsupported segment type: ' + mode);
                }
                this.segments.push(segment);
                index += param_length;
                token = tokens[index];
                if (mode === 'M') {
                    mode = 'L';
                }
                if (mode === 'm') {
                    mode = 'l';
                }
            }
            else {
                throw new Error('Path data ended before all parameters were found');
            }
        }
    };
    Path.prototype.tokenize = function (d) {
        var tokens = new Array();
        while (d !== '') {
            if (d.match(/^([ \t\r\n,]+)/)) {
                d = d.substr(RegExp.$1.length);
            }
            else if (d.match(/^([aAcChHlLmMqQsStTvVzZ])/)) {
                tokens[tokens.length] = new Token(Path.COMMAND, RegExp.$1);
                d = d.substr(RegExp.$1.length);
            }
            else if (d.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) {
                tokens[tokens.length] = new Token(Path.NUMBER, parseFloat(RegExp.$1));
                d = d.substr(RegExp.$1.length);
            }
            else {
                throw new Error('Unrecognized segment command: ' + d);
            }
        }
        tokens[tokens.length] = new Token(Path.EOD, null);
        return tokens;
    };
    Path.prototype.intersectShape = function (shape) {
        var result = new Intersection();
        for (var i = 0; i < this.segments.length; i++) {
            var inter = Intersection.intersectShapes(this.segments[i], shape);
            result.appendPoints(inter.points);
        }
        return result;
    };
    Path.prototype.asIntersectionParams = function () {
        return new IntersectionParams('Path', []);
    };
    Path.COMMAND = 0;
    Path.NUMBER = 1;
    Path.EOD = 2;
    Path.PARAMS = {
        A: ['rx', 'ry', 'x-axis-rotation', 'large-arc-flag', 'sweep-flag', 'x', 'y'],
        a: ['rx', 'ry', 'x-axis-rotation', 'large-arc-flag', 'sweep-flag', 'x', 'y'],
        C: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
        c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
        H: ['x'],
        h: ['x'],
        L: ['x', 'y'],
        l: ['x', 'y'],
        M: ['x', 'y'],
        m: ['x', 'y'],
        Q: ['x1', 'y1', 'x', 'y'],
        q: ['x1', 'y1', 'x', 'y'],
        S: ['x2', 'y2', 'x', 'y'],
        s: ['x2', 'y2', 'x', 'y'],
        T: ['x', 'y'],
        t: ['x', 'y'],
        V: ['y'],
        v: ['y'],
        Z: [],
        z: []
    };
    return Path;
}());
var AbsolutePathSegment = (function () {
    function AbsolutePathSegment(command, params, owner, previous) {
        this.command = command;
        this.owner = owner;
        this.previous = previous;
        this.points = [];
        var index = 0;
        while (index < params.length) {
            this.points.push(new Vector2D(parseFloat(params[index]), parseFloat(params[index + 1])));
            index += 2;
        }
    }
    AbsolutePathSegment.prototype.toString = function () {
        var points = this.points.map(function (v) { return v.toString(); });
        var command = '';
        if (this.previous.command !== this.command) {
            command = this.command;
        }
        return command + points.join(' ');
    };
    Object.defineProperty(AbsolutePathSegment.prototype, "lastPoint", {
        get: function () {
            return this.points[this.points.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    AbsolutePathSegment.prototype.asIntersectionParams = function () {
        return null;
    };
    return AbsolutePathSegment;
}());
var AbsoluteArcPath = (function (_super) {
    __extends(AbsoluteArcPath, _super);
    function AbsoluteArcPath(params, owner, previous) {
        _super.call(this, 'A', params.slice(params.length - 2), owner, previous);
        this.rx = parseFloat(params.shift());
        this.ry = parseFloat(params.shift());
        this.angle = parseFloat(params.shift());
        this.arcFlag = parseFloat(params.shift());
        this.sweepFlag = parseFloat(params.shift());
    }
    AbsoluteArcPath.prototype.toString = function () {
        var command = '';
        if (this.previous.command !== this.command) {
            command = this.command;
        }
        return command + [this.rx, this.ry, this.angle, this.arcFlag, this.sweepFlag, this.points[0].toString()].join(',');
    };
    AbsoluteArcPath.prototype.asIntersectionParams = function () {
        return new IntersectionParams('Ellipse', [this.center, this.rx, this.ry]);
    };
    Object.defineProperty(AbsoluteArcPath.prototype, "center", {
        get: function () {
            var startPoint = this.previous.lastPoint;
            var endPoint = this.points[0];
            var rx = this.rx;
            var ry = this.ry;
            var angle = this.angle * Math.PI / 180;
            var c = Math.cos(angle);
            var s = Math.sin(angle);
            var TOLERANCE = 1e-6;
            var halfDiff = startPoint.subtract(endPoint).divide(2);
            var x1p = halfDiff.x * c + halfDiff.y * s;
            var y1p = halfDiff.x * -s + halfDiff.y * c;
            var x1px1p = x1p * x1p;
            var y1py1p = y1p * y1p;
            var lambda = (x1px1p / (rx * rx)) + (y1py1p / (ry * ry));
            var factor;
            if (lambda > 1) {
                factor = Math.sqrt(lambda);
                rx *= factor;
                ry *= factor;
            }
            var rxrx = rx * rx;
            var ryry = ry * ry;
            var rxy1 = rxrx * y1py1p;
            var ryx1 = ryry * x1px1p;
            factor = (rxrx * ryry - rxy1 - ryx1) / (rxy1 + ryx1);
            if (Math.abs(factor) < TOLERANCE) {
                factor = 0;
            }
            var sq = Math.sqrt(factor);
            if (this.arcFlag === this.sweepFlag) {
                sq = -sq;
            }
            var mid = startPoint.add(endPoint).divide(2);
            var cxp = sq * rx * y1p / ry;
            var cyp = sq * -ry * x1p / rx;
            return new Vector2D(cxp * c - cyp * s + mid.x, cxp * s + cyp * c + mid.y);
        },
        enumerable: true,
        configurable: true
    });
    return AbsoluteArcPath;
}(AbsolutePathSegment));
var AbsoluteCurveto2 = (function (_super) {
    __extends(AbsoluteCurveto2, _super);
    function AbsoluteCurveto2(params, owner, previous) {
        _super.call(this, 'Q', params, owner, previous);
    }
    Object.defineProperty(AbsoluteCurveto2.prototype, "controlPoint", {
        get: function () {
            return this.points[0];
        },
        enumerable: true,
        configurable: true
    });
    AbsoluteCurveto2.prototype.asIntersectionParams = function () {
        return new IntersectionParams('Bezier2', [this.previous.lastPoint, this.points[0], this.points[1]]);
    };
    return AbsoluteCurveto2;
}(AbsolutePathSegment));
var AbsoluteCurveto3 = (function (_super) {
    __extends(AbsoluteCurveto3, _super);
    function AbsoluteCurveto3(params, owner, previous) {
        _super.call(this, 'C', params, owner, previous);
    }
    Object.defineProperty(AbsoluteCurveto3.prototype, "lastControlPoint", {
        get: function () {
            return this.points[1];
        },
        enumerable: true,
        configurable: true
    });
    AbsoluteCurveto3.prototype.asIntersectionParams = function () {
        return new IntersectionParams('Bezier3', [this.previous.lastPoint, this.points[0], this.points[1], this.points[2]]);
    };
    return AbsoluteCurveto3;
}(AbsolutePathSegment));
var AbsoluteHLineto = (function (_super) {
    __extends(AbsoluteHLineto, _super);
    function AbsoluteHLineto(params, owner, previous) {
        _super.call(this, 'H', [params.pop(), previous.lastPoint.y], owner, previous);
    }
    AbsoluteHLineto.prototype.toString = function () {
        var command = '';
        if (this.previous.command !== this.command) {
            command = this.command;
        }
        return command + this.points[0].x;
    };
    return AbsoluteHLineto;
}(AbsolutePathSegment));
var AbsoluteLineto = (function (_super) {
    __extends(AbsoluteLineto, _super);
    function AbsoluteLineto(params, owner, previous) {
        _super.call(this, 'L', params, owner, previous);
    }
    AbsoluteLineto.prototype.toString = function () {
        var command = '';
        if (this.previous.command !== this.command && this.previous.command !== 'M') {
            command = this.command;
        }
        return command + this.points[0].toString();
    };
    AbsoluteLineto.prototype.asIntersectionParams = function () {
        return new IntersectionParams('Line', [this.previous.lastPoint, this.points[0]]);
    };
    return AbsoluteLineto;
}(AbsolutePathSegment));
var AbsoluteMoveto = (function (_super) {
    __extends(AbsoluteMoveto, _super);
    function AbsoluteMoveto(params, owner, previous) {
        _super.call(this, 'M', params, owner, previous);
    }
    AbsoluteMoveto.prototype.toString = function () {
        return 'M' + this.points[0].toString();
    };
    return AbsoluteMoveto;
}(AbsolutePathSegment));
var AbsoluteSmoothCurveto2 = (function (_super) {
    __extends(AbsoluteSmoothCurveto2, _super);
    function AbsoluteSmoothCurveto2(params, owner, previous) {
        _super.call(this, 'T', params, owner, previous);
    }
    Object.defineProperty(AbsoluteSmoothCurveto2.prototype, "controlPoint", {
        get: function () {
            var lastPoint = this.previous.lastPoint;
            var point;
            if (this.previous.command.match(/^[QqTt]$/)) {
                var ctrlPoint = this.previous.controlPoint;
                var diff = ctrlPoint.subtract(lastPoint);
                point = lastPoint.subtract(diff);
            }
            else {
                point = lastPoint;
            }
            return point;
        },
        enumerable: true,
        configurable: true
    });
    AbsoluteSmoothCurveto2.prototype.asIntersectionParams = function () {
        return new IntersectionParams('Bezier2', [this.previous.lastPoint, this.controlPoint, this.points[0]]);
    };
    return AbsoluteSmoothCurveto2;
}(AbsolutePathSegment));
var AbsoluteSmoothCurveto3 = (function (_super) {
    __extends(AbsoluteSmoothCurveto3, _super);
    function AbsoluteSmoothCurveto3(params, owner, previous) {
        _super.call(this, 'S', params, owner, previous);
    }
    Object.defineProperty(AbsoluteSmoothCurveto3.prototype, "firstControlPoint", {
        get: function () {
            var lastPoint = this.previous.lastPoint;
            var point;
            if (this.previous.command.match(/^[SsCc]$/)) {
                var lastControl = this.previous.lastControlPoint;
                var diff = lastControl.subtract(lastPoint);
                point = lastPoint.subtract(diff);
            }
            else {
                point = lastPoint;
            }
            return point;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbsoluteSmoothCurveto3.prototype, "lastControlPoint", {
        get: function () {
            return this.points[0];
        },
        enumerable: true,
        configurable: true
    });
    AbsoluteSmoothCurveto3.prototype.asIntersectionParams = function () {
        return new IntersectionParams('Bezier3', [this.previous.lastPoint, this.firstControlPoint, this.points[0], this.points[1]]);
    };
    return AbsoluteSmoothCurveto3;
}(AbsolutePathSegment));
var RelativePathSegment = (function () {
    function RelativePathSegment(command, params, owner, previous) {
        this.command = command;
        this.owner = owner;
        this.previous = previous;
        this.points = [];
        var lastPoint = this.previous ? this.previous.lastPoint : new Vector2D(0, 0);
        var index = 0;
        while (index < params.length) {
            var handle = new Vector2D(lastPoint.x + parseFloat(params[index]), lastPoint.y + parseFloat(params[index + 1]));
            this.points.push(handle);
            index += 2;
        }
    }
    RelativePathSegment.prototype.toString = function () {
        var points = new Array();
        var command = '';
        var lastPoint = this.previous ? this.previous.lastPoint : new Vector2D(0, 0);
        if (this.previous == null || this.previous.command !== this.command) {
            command = this.command;
        }
        for (var i = 0; i < this.points.length; i++) {
            var point = this.points[i].subtract(lastPoint);
            points.push(point.toString());
        }
        return command + points.join(' ');
    };
    Object.defineProperty(RelativePathSegment.prototype, "lastPoint", {
        get: function () {
            return this.points[this.points.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    RelativePathSegment.prototype.asIntersectionParams = function () {
        return null;
    };
    return RelativePathSegment;
}());
var RelativeClosePath = (function (_super) {
    __extends(RelativeClosePath, _super);
    function RelativeClosePath(params, owner, previous) {
        _super.call(this, 'z', params, owner, previous);
    }
    Object.defineProperty(RelativeClosePath.prototype, "lastPoint", {
        get: function () {
            var current = this.previous;
            var point;
            while (current) {
                if (current.command.match(/^[mMzZ]$/)) {
                    point = current.lastPoint;
                    break;
                }
                current = current.previous;
            }
            return point;
        },
        enumerable: true,
        configurable: true
    });
    RelativeClosePath.prototype.asIntersectionParams = function () {
        return new IntersectionParams('Line', [this.previous.lastPoint, this.lastPoint]);
    };
    return RelativeClosePath;
}(RelativePathSegment));
var RelativeCurveto2 = (function (_super) {
    __extends(RelativeCurveto2, _super);
    function RelativeCurveto2(params, owner, previous) {
        _super.call(this, 'q', params, owner, previous);
    }
    Object.defineProperty(RelativeCurveto2.prototype, "controlPoint", {
        get: function () {
            return this.points[0];
        },
        enumerable: true,
        configurable: true
    });
    RelativeCurveto2.prototype.asIntersectionParams = function () {
        return new IntersectionParams('Bezier2', [this.previous.lastPoint, this.points[0], this.points[1]]);
    };
    return RelativeCurveto2;
}(RelativePathSegment));
var RelativeCurveto3 = (function (_super) {
    __extends(RelativeCurveto3, _super);
    function RelativeCurveto3(params, owner, previous) {
        _super.call(this, 'c', params, owner, previous);
    }
    Object.defineProperty(RelativeCurveto3.prototype, "lastControlPoint", {
        get: function () {
            return this.points[1];
        },
        enumerable: true,
        configurable: true
    });
    RelativeCurveto3.prototype.asIntersectionParams = function () {
        return new IntersectionParams('Bezier3', [this.previous.lastPoint, this.points[0], this.points[1], this.points[2]]);
    };
    return RelativeCurveto3;
}(RelativePathSegment));
var RelativeLineto = (function (_super) {
    __extends(RelativeLineto, _super);
    function RelativeLineto(params, owner, previous) {
        _super.call(this, 'l', params, owner, previous);
    }
    RelativeLineto.prototype.toString = function () {
        var lastPoint = this.previous ? this.previous.lastPoint : new Vector2D(0, 0);
        var point = this.points[0].subtract(lastPoint);
        var command = '';
        if (this.previous.command !== this.command && this.previous.command !== 'm') {
            command = this.command;
        }
        return command + point.toString();
    };
    RelativeLineto.prototype.asIntersectionParams = function () {
        return new IntersectionParams('Line', [this.previous.lastPoint, this.points[0]]);
    };
    return RelativeLineto;
}(RelativePathSegment));
var RelativeMoveto = (function (_super) {
    __extends(RelativeMoveto, _super);
    function RelativeMoveto(params, owner, previous) {
        _super.call(this, 'm', params, owner, previous);
    }
    RelativeMoveto.prototype.toString = function () {
        return 'm' + this.points[0].toString();
    };
    return RelativeMoveto;
}(RelativePathSegment));
var RelativeSmoothCurveto2 = (function (_super) {
    __extends(RelativeSmoothCurveto2, _super);
    function RelativeSmoothCurveto2(params, owner, previous) {
        _super.call(this, 't', params, owner, previous);
    }
    Object.defineProperty(RelativeSmoothCurveto2.prototype, "controlPoint", {
        get: function () {
            var lastPoint = this.previous.lastPoint;
            var point;
            if (this.previous.command.match(/^[QqTt]$/)) {
                var ctrlPoint = this.previous.controlPoint;
                var diff = ctrlPoint.subtract(lastPoint);
                point = lastPoint.subtract(diff);
            }
            else {
                point = lastPoint;
            }
            return point;
        },
        enumerable: true,
        configurable: true
    });
    RelativeSmoothCurveto2.prototype.asIntersectionParams = function () {
        return new IntersectionParams('Bezier2', [this.previous.lastPoint, this.controlPoint, this.points[0]]);
    };
    return RelativeSmoothCurveto2;
}(RelativePathSegment));
var RelativeSmoothCurveto3 = (function (_super) {
    __extends(RelativeSmoothCurveto3, _super);
    function RelativeSmoothCurveto3(params, owner, previous) {
        _super.call(this, 's', params, owner, previous);
    }
    Object.defineProperty(RelativeSmoothCurveto3.prototype, "firstControlPoint", {
        get: function () {
            var lastPoint = this.previous.lastPoint;
            var point;
            if (this.previous.command.match(/^[SsCc]$/)) {
                var lastControl = this.previous.lastControlPoint;
                var diff = lastControl.subtract(lastPoint);
                point = lastPoint.subtract(diff);
            }
            else {
                point = lastPoint;
            }
            return point;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeSmoothCurveto3.prototype, "lastControlPoint", {
        get: function () {
            return this.points[0];
        },
        enumerable: true,
        configurable: true
    });
    RelativeSmoothCurveto3.prototype.asIntersectionParams = function () {
        return new IntersectionParams('Bezier3', [this.previous.lastPoint, this.firstControlPoint, this.points[0], this.points[1]]);
    };
    return RelativeSmoothCurveto3;
}(RelativePathSegment));


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "AIterator", function() { return AIterator; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Iterator", function() { return Iterator; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ListIterator", function() { return ListIterator; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SingleIterator", function() { return SingleIterator; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ConcatIterator", function() { return ConcatIterator; });
/* harmony export (binding) */ __webpack_require__.d(exports, "EmptyIterator", function() { return EmptyIterator; });
/* harmony export (immutable) */ exports["empty"] = empty;
/* harmony export (immutable) */ exports["concat"] = concat;
/* harmony export (immutable) */ exports["range"] = range;
/* harmony export (immutable) */ exports["single"] = single;
/* harmony export (immutable) */ exports["forList"] = forList;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AIterator = (function () {
    function AIterator() {
    }
    AIterator.prototype.hasNext = function () {
        return false;
    };
    AIterator.prototype.next = function () {
        return null;
    };
    AIterator.prototype.forEach = function (callbackfn, thisArg) {
        var i = 0;
        while (this.hasNext()) {
            callbackfn.call(thisArg, this.next(), i++);
        }
    };
    /**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    AIterator.prototype.map = function (callbackfn, thisArg) {
        return new TransformIterator(this, callbackfn, thisArg);
    };
    /**
     * converts the remaining of this iterator to a list
     * @returns {Array}
     */
    AIterator.prototype.asList = function () {
        var r = [];
        while (this.hasNext()) {
            r.push(this.next());
        }
        return r;
    };
    Object.defineProperty(AIterator.prototype, "isIncreasing", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AIterator.prototype, "isDecreasing", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AIterator.prototype, "byOne", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AIterator.prototype, "byMinusOne", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return AIterator;
}());
/**
 * iterator for a given range
 */
var Iterator = (function (_super) {
    __extends(Iterator, _super);
    function Iterator(from, to, step) {
        _super.call(this);
        this.from = from;
        this.to = to;
        this.step = step;
        this.act = this.from;
    }
    /**
     * whether more items are available
     */
    Iterator.prototype.hasNext = function () {
        return this.act !== this.to && ((this.step > 0 && this.act < this.to) || (this.step < 0 && this.act > this.to));
    };
    /**
     * returns the next item
     */
    Iterator.prototype.next = function () {
        if (!this.hasNext()) {
            throw new RangeError('end of iterator');
        }
        var r = this.act;
        this.act += this.step;
        if (this.step < 0 && this.act < this.to) {
            this.act = this.to;
        }
        else if (this.step > 0 && this.act > this.to) {
            this.act = this.to;
        }
        return r;
    };
    Object.defineProperty(Iterator.prototype, "isIncreasing", {
        get: function () {
            return this.step > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterator.prototype, "isDecreasing", {
        get: function () {
            return this.step < 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterator.prototype, "byOne", {
        get: function () {
            return this.step === 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterator.prototype, "byMinusOne", {
        get: function () {
            return this.step === -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterator.prototype, "size", {
        get: function () {
            if (this.byOne) {
                return Math.max(this.to - this.from, 0);
            }
            else if (this.byMinusOne) {
                return Math.max(this.from - this.to, 0);
            }
            var d = this.isIncreasing ? (this.to - this.from + 1) : (this.from - this.to + 1);
            var s = Math.abs(this.step);
            if (d <= 0) {
                return 0;
            }
            return Math.floor(d / s);
        },
        enumerable: true,
        configurable: true
    });
    return Iterator;
}(AIterator));
var ListIterator = (function (_super) {
    __extends(ListIterator, _super);
    function ListIterator(arr) {
        _super.call(this);
        this.arr = arr;
        this.it = new Iterator(0, arr.length, 1);
    }
    /**
     * whether more items are available
     */
    ListIterator.prototype.hasNext = function () {
        return this.it.hasNext();
    };
    /**
     * returns the next item
     */
    ListIterator.prototype.next = function () {
        if (!this.hasNext()) {
            throw new RangeError('end of iterator');
        }
        return this.arr[this.it.next()];
    };
    ListIterator.prototype.asList = function () {
        return this.arr.slice();
    };
    return ListIterator;
}(AIterator));
var SingleIterator = (function (_super) {
    __extends(SingleIterator, _super);
    function SingleIterator(value) {
        _super.call(this);
        this.value = value;
        this.delivered = false;
    }
    SingleIterator.prototype.hasNext = function () {
        return !this.delivered;
    };
    SingleIterator.prototype.next = function () {
        if (!this.hasNext()) {
            throw new RangeError('end of iterator');
        }
        this.delivered = true;
        return this.value;
    };
    SingleIterator.prototype.asList = function () {
        return [this.value];
    };
    Object.defineProperty(SingleIterator.prototype, "isIncreasing", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleIterator.prototype, "isDecreasing", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleIterator.prototype, "byOne", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleIterator.prototype, "byMinusOne", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return SingleIterator;
}(AIterator));
var ConcatIterator = (function (_super) {
    __extends(ConcatIterator, _super);
    function ConcatIterator(its) {
        _super.call(this);
        this.its = its;
        this.act = its.shift();
    }
    /**
     * whether more items are available
     */
    ConcatIterator.prototype.hasNext = function () {
        //based on http://grepcode.com/file/repo1.maven.org/maven2/com.google.guava/guava/r08/com/google/common/collect/Iterators.java#Iterators.concat%28java.util.Iterator%29
        var currentHasNext = false;
        while (!(currentHasNext = this.act.hasNext()) && this.its.length > 0) {
            this.act = this.its.shift();
        }
        return currentHasNext;
    };
    /**
     * returns the next item
     */
    ConcatIterator.prototype.next = function () {
        if (!this.hasNext()) {
            throw new RangeError('end of iterator');
        }
        return this.act.next();
    };
    /**
     * converts the remaining of this iterator to a list
     * @returns {Array}
     */
    ConcatIterator.prototype.asList = function () {
        var r = [];
        while (this.hasNext()) {
            r.push(this.next());
        }
        return r;
    };
    Object.defineProperty(ConcatIterator.prototype, "isIncreasing", {
        get: function () {
            return this.its.every((function (it) { return it.isIncreasing; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcatIterator.prototype, "isDecreasing", {
        get: function () {
            return this.its.every((function (it) { return it.isDecreasing; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcatIterator.prototype, "byOne", {
        get: function () {
            return this.its.every((function (it) { return it.byOne; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcatIterator.prototype, "byMinusOne", {
        get: function () {
            return this.its.every((function (it) { return it.byMinusOne; }));
        },
        enumerable: true,
        configurable: true
    });
    return ConcatIterator;
}(AIterator));
var EmptyIterator = (function (_super) {
    __extends(EmptyIterator, _super);
    function EmptyIterator() {
        _super.apply(this, arguments);
        this.isIncreasing = false;
        this.isDecreasing = false;
        this.byOne = false;
        this.byMinusOne = false;
    }
    /**
     * whether more items are available
     */
    EmptyIterator.prototype.hasNext = function () {
        return false;
    };
    /**
     * returns the next item
     */
    EmptyIterator.prototype.next = function () {
        throw new RangeError('end of iterator');
    };
    /**
     * converts the remaining of this iterator to a list
     * @returns {Array}
     */
    EmptyIterator.prototype.asList = function () {
        return [];
    };
    return EmptyIterator;
}(AIterator));
var TransformIterator = (function (_super) {
    __extends(TransformIterator, _super);
    function TransformIterator(it, f, thisArg) {
        _super.call(this);
        this.it = it;
        this.f = f;
        this.thisArg = thisArg;
    }
    /**
     * whether more items are available
     */
    TransformIterator.prototype.hasNext = function () {
        return this.it.hasNext();
    };
    /**
     * returns the next item
     */
    TransformIterator.prototype.next = function () {
        if (!this.hasNext()) {
            throw new RangeError('end of iterator');
        }
        return this.f.call(this.thisArg, this.it.next());
    };
    Object.defineProperty(TransformIterator.prototype, "isIncreasing", {
        get: function () {
            return this.it.isIncreasing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransformIterator.prototype, "isDecreasing", {
        get: function () {
            return this.it.isDecreasing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransformIterator.prototype, "byOne", {
        get: function () {
            return this.it.byOne;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransformIterator.prototype, "byMinusOne", {
        get: function () {
            return this.it.byMinusOne;
        },
        enumerable: true,
        configurable: true
    });
    return TransformIterator;
}(AIterator));
function empty() {
    return new EmptyIterator();
}
function concat() {
    var its = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        its[_i - 0] = arguments[_i];
    }
    if (its.length === 0) {
        return empty();
    }
    else if (its.length === 1) {
        return its[0];
    }
    return new ConcatIterator(its);
}
/**
 * creates a new iterator for the given range
 * @param from
 * @param to
 * @param step
 * @returns {Iterator}
 */
function range(from, to, step) {
    return new Iterator(from, to, step);
}
function single(value) {
    return new SingleIterator(value);
}
/**
 * creates a new iterator for the given list
 * @param arr
 * @returns {ListIterator}
 */
function forList(arr) {
    return new ListIterator(arr);
}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajax__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__idtype__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vector_impl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__math__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(exports, "MatrixBase", function() { return MatrixBase; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Matrix", function() { return Matrix; });
/* harmony export (immutable) */ exports["create"] = create;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};







function flatten(arr, indices, select) {
    if (select === void 0) { select = 0; }
    var r = [], dim = [arr.length, arr[0].length];
    if (select === 0) {
        r = r.concat.apply(r, arr);
    }
    else {
        //stupid slicing
        for (var i = 0; i < dim[1]; ++i) {
            arr.forEach(function (ai) {
                r.push(ai[i]);
            });
        }
    }
    return {
        data: r,
        indices: indices.dim(select).repeat(dim[1 - select])
    };
}
/**
 * base class for different Matrix implementations, views, transposed,...
 */
var MatrixBase = (function (_super) {
    __extends(MatrixBase, _super);
    function MatrixBase(_root) {
        _super.call(this);
        this._root = _root;
    }
    MatrixBase.prototype.size = function () {
        throw new Error('not implemented');
    };
    Object.defineProperty(MatrixBase.prototype, "dim", {
        get: function () {
            return this.size();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixBase.prototype, "length", {
        get: function () {
            return this.nrow * this.ncol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixBase.prototype, "nrow", {
        get: function () {
            return this.dim[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixBase.prototype, "ncol", {
        get: function () {
            return this.dim[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixBase.prototype, "indices", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["range"])([0, this.nrow], [0, this.ncol]);
        },
        enumerable: true,
        configurable: true
    });
    MatrixBase.prototype.data = function () {
        throw new Error('not implemented');
    };
    //view(filter: string): Promise<IMatrix>;
    MatrixBase.prototype.view = function () {
        if (typeof arguments[0] === 'string') {
            return this.dynview(arguments[0]);
        }
        var range = arguments.length === 0 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])() : arguments[0];
        if (range.isAll) {
            return this._root;
        }
        return new MatrixView(this._root, range);
    };
    MatrixBase.prototype.dynview = function (filter) {
        return null;
    };
    MatrixBase.prototype.slice = function (col) {
        return new SliceColVector(this, col);
    };
    MatrixBase.prototype.stats = function () {
        return this.data().then(function (d) { return __WEBPACK_IMPORTED_MODULE_6__math__["computeStats"].apply(void 0, d); });
    };
    MatrixBase.prototype.hist = function (bins, range, containedIds) {
        var _this = this;
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        if (containedIds === void 0) { containedIds = 0; }
        var v = this._root.valuetype;
        return this.data().then(function (d) {
            var flat = flatten(d, _this.indices, containedIds);
            switch (v.type) {
                case 'categorical':
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__math__["categoricalHist"])(flat.data, flat.indices, flat.data.length, v.categories.map(function (d) { return typeof d === 'string' ? d : d.name; }), v.categories.map(function (d) { return typeof d === 'string' ? d : d.name || d.label; }), v.categories.map(function (d) { return typeof d === 'string' ? 'gray' : d.color || 'gray'; }));
                case 'real':
                case 'int':
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__math__["hist"])(flat.data, flat.indices, flat.data.length, bins ? bins : Math.round(Math.sqrt(_this.length)), v.range);
                default:
                    return null; //cant create hist for unique objects or other ones
            }
        });
    };
    MatrixBase.prototype.idView = function (idRange) {
        var _this = this;
        if (idRange === void 0) { idRange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        if (idRange.isAll) {
            return Promise.resolve(this._root);
        }
        return this.ids().then(function (ids) { return _this.view(ids.indexOf(idRange)); });
    };
    MatrixBase.prototype.reduce = function (f, this_f, valuetype, idtype) {
        return new ProjectedVector(this, f, this_f, valuetype, idtype);
    };
    MatrixBase.prototype.restore = function (persisted) {
        if (persisted && persisted.f) {
            /* tslint:disable:no-eval */
            return this.reduce(eval(persisted.f), this, persisted.valuetype, persisted.idtype ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__idtype__["resolve"])(persisted.idtype) : undefined);
        }
        else if (persisted && persisted.range) {
            return this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(persisted.range));
        }
        else if (persisted && persisted.transposed) {
            return this.t;
        }
        else if (persisted && persisted.col) {
            return this.slice(+persisted.col);
        }
        else if (persisted && persisted.row) {
            return this.t.slice(+persisted.row);
        }
        else {
            return this;
        }
    };
    return MatrixBase;
}(__WEBPACK_IMPORTED_MODULE_3__idtype__["ProductSelectAble"]));
function adapterOne2Two(loader) {
    return {
        rowIds: function (desc, range) { return loader(desc).then(function (d) { return range.preMultiply(d.rowIds, desc.size); }); },
        rows: function (desc, range) { return loader(desc).then(function (d) { return range.dim(0).filter(d.rows, desc.size[0]); }); },
        colIds: function (desc, range) { return loader(desc).then(function (d) { return range.preMultiply(d.colIds, desc.size); }); },
        cols: function (desc, range) { return loader(desc).then(function (d) { return range.dim(1).filter(d.cols, desc.size[1]); }); },
        ids: function (desc, range) { return loader(desc).then(function (data) { return range.preMultiply(data.ids, desc.size); }); },
        at: function (desc, i, j) { return loader(desc).then(function (data) { return data[i][j]; }); },
        data: function (desc, range) { return loader(desc).then(function (d) { return range.filter(d.data, desc.size); }); }
    };
}
function maskIt(desc) {
    return function (v) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__datatype__["mask"])(v, desc); };
}
function viaAPI2Loader() {
    var rowIds = null, rows = null, colIds = null, cols = null, data = null, hist = null;
    var r = {
        rowIds: function (desc, range) {
            if (rowIds == null) {
                rowIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/dataset/matrix/' + desc.id + '/rowIds').then(function (ids) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(ids);
                });
            }
            return rowIds.then(function (d) {
                return d.preMultiply(range, desc.size);
            });
        },
        rows: function (desc, range) {
            if (rows == null) {
                rows = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/dataset/matrix/' + desc.id + '/rows');
            }
            return rows.then(function (d) { return range.dim(0).filter(d, desc.size[0]); });
        },
        colIds: function (desc, range) {
            if (colIds == null) {
                colIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/dataset/matrix/' + desc.id + '/colIds').then(function (ids) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(ids); });
            }
            return colIds.then(function (d) { return d.preMultiply(range, desc.size); });
        },
        cols: function (desc, range) {
            if (cols == null) {
                cols = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/dataset/matrix/' + desc.id + '/cols');
            }
            return cols.then(function (d) { return range.dim(1).filter(d, desc.size[1]); });
        },
        ids: function (desc, range) {
            if (range.ndim === 1) {
                return r.rowIds(desc, range);
            }
            range.dim(0); //ensure two dim
            range.dim(1); //ensure two dim
            var split = range.split();
            return Promise.all([r.rowIds(desc, split[0] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])()), r.colIds(desc, split[1] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])())]).then(function (idsA) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["join"])(idsA);
            });
        },
        hist: function (desc, range, bins) {
            if (bins === void 0) { bins = NaN; }
            if (range.isAll && isNaN(bins)) {
                if (hist == null) {
                    hist = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/dataset/matrix/' + desc.id + '/hist').then(function (hist) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__math__["wrapHist"])(hist, desc.value.range); });
                }
                return hist;
            }
            var args = {
                range: range.toString()
            };
            if (!isNaN(bins)) {
                args.bins = bins;
            }
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/dataset/matrix/' + desc.id + '/hist', args).then(function (hist) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__math__["wrapHist"])(hist, desc.value.range);
            });
        },
        at: function (desc, i, j) { return r.data(desc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])([i], [j])).then(function (data) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__datatype__["mask"])(data[0][0], desc); }); },
        data: function (desc, range) {
            if (range.isAll) {
                if (data == null) {
                    data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/dataset/matrix/' + desc.id + '/raw').then(maskIt(desc));
                }
                return data;
            }
            if (data != null) {
                return data.then(function (d) { return range.filter(d, desc.size); });
            }
            var size = desc.size;
            if (size[0] * size[1] < 1000 || desc.loadAtOnce) {
                data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/dataset/matrix/' + desc.id + '/raw').then(maskIt(desc));
                return data.then(function (d) { return range.filter(d, desc.size); });
            }
            //server side slicing
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIData"])('/dataset/matrix/' + desc.id + '/raw', {
                range: range.toString()
            }).then(maskIt(desc));
        },
        heatmapUrl: function (desc, range, options) {
            var args = {
                format: options.format || 'png',
                range: range.toString()
            };
            if (options.transpose === true) {
                args.format_transpose = true;
            }
            if (options.range) {
                args.format_min = options.range[0];
                args.format_max = options.range[1];
            }
            if (options.palette) {
                args.format_palette = options.palette;
            }
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["api2absURL"])("/dataset/matrix/" + desc.id + "/data", args);
        }
    };
    return r;
}
/**
 * root matrix implementation holding the data
 */
var Matrix = (function (_super) {
    __extends(Matrix, _super);
    function Matrix(desc, loader) {
        _super.call(this, null);
        this.desc = desc;
        this.loader = loader;
        this._root = this;
        var d = desc;
        this.valuetype = d.value;
        this.rowtype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__idtype__["resolve"])(d.rowtype);
        this.coltype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__idtype__["resolve"])(d.coltype);
        this.producttype_ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__idtype__["resolveProduct"])(this.rowtype, this.coltype);
        this.t = new TransposedMatrix(this);
    }
    Object.defineProperty(Matrix.prototype, "producttype", {
        get: function () {
            return this.producttype_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "idtypes", {
        get: function () {
            return [this.rowtype, this.coltype];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * access at a specific position
     * @param i
     * @param j
     * @returns {*}
     */
    Matrix.prototype.at = function (i, j) {
        return this.loader.at(this.desc, i, j);
    };
    Matrix.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.loader.data(this.desc, range);
    };
    Matrix.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.loader.ids(this.desc, range);
    };
    /**
     * return the column ids of the matrix
     * @returns {*}
     */
    Matrix.prototype.cols = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.loader.cols(this.desc, range);
    };
    Matrix.prototype.colIds = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.loader.colIds(this.desc, range);
    };
    /**
     * return the row ids of the matrix
     * @returns {*}
     */
    Matrix.prototype.rows = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.loader.rows(this.desc, range);
    };
    Matrix.prototype.rowIds = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.loader.rowIds(this.desc, range);
    };
    Matrix.prototype.hist = function (bins, range, containedIds) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        if (containedIds === void 0) { containedIds = 0; }
        if (this.loader.hist) {
            return this.loader.hist(this.desc, range, bins);
        }
        return _super.prototype.hist.call(this, bins, range, containedIds);
    };
    Matrix.prototype.size = function () {
        return this.desc.size;
    };
    Matrix.prototype.persist = function () {
        return this.desc.id;
    };
    Matrix.prototype.heatmapUrl = function (range, options) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        if (options === void 0) { options = {}; }
        if (this.loader.heatmapUrl) {
            return this.loader.heatmapUrl(this.desc, range, options);
        }
        return null;
    };
    return Matrix;
}(MatrixBase));
/**
 * view on the underlying matrix as transposed version
 * @param base
 * @constructor
 */
var TransposedMatrix = (function (_super) {
    __extends(TransposedMatrix, _super);
    function TransposedMatrix(base) {
        _super.call(this, base);
        this.t = base;
    }
    Object.defineProperty(TransposedMatrix.prototype, "desc", {
        get: function () {
            return this._root.desc;
        },
        enumerable: true,
        configurable: true
    });
    TransposedMatrix.prototype.persist = function () {
        return {
            root: this._root.persist(),
            transposed: true
        };
    };
    Object.defineProperty(TransposedMatrix.prototype, "valuetype", {
        get: function () {
            return this._root.valuetype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransposedMatrix.prototype, "rowtype", {
        get: function () {
            return this._root.coltype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransposedMatrix.prototype, "coltype", {
        get: function () {
            return this._root.rowtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransposedMatrix.prototype, "producttype", {
        get: function () {
            return this._root.producttype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransposedMatrix.prototype, "idtypes", {
        get: function () {
            return [this.rowtype, this.coltype];
        },
        enumerable: true,
        configurable: true
    });
    TransposedMatrix.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.t.ids(range ? range.swap() : undefined).then(function (ids) { return ids.swap(); });
    };
    TransposedMatrix.prototype.cols = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.t.rows(range ? range.swap() : undefined);
    };
    TransposedMatrix.prototype.colIds = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.t.rowIds(range ? range.swap() : undefined);
    };
    TransposedMatrix.prototype.rows = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.t.cols(range ? range.swap() : undefined);
    };
    TransposedMatrix.prototype.rowIds = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.t.colIds(range ? range.swap() : undefined);
    };
    TransposedMatrix.prototype.view = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        if (range.isAll) {
            return this;
        }
        return new MatrixView(this._root, range.swap()).t;
    };
    TransposedMatrix.prototype.slice = function (col) {
        return new SliceRowVector(this._root, col);
    };
    TransposedMatrix.prototype.size = function () {
        var s = this.t.dim;
        return [s[1], s[0]]; //swap dimension
    };
    TransposedMatrix.prototype.at = function (i, j) {
        return this.t.at(j, i);
    };
    TransposedMatrix.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.t.data(range ? range.swap() : undefined).then(function (data) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__datatype__["transpose"])(data); });
    };
    TransposedMatrix.prototype.hist = function (bins, range, containedIds) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        if (containedIds === void 0) { containedIds = 0; }
        return this.t.hist(bins, range ? range.swap() : undefined, 1 - containedIds);
    };
    TransposedMatrix.prototype.heatmapUrl = function (range, options) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        if (options === void 0) { options = {}; }
        options.transpose = options.transpose !== true;
        return this.t.heatmapUrl(range ? range.swap() : undefined, options);
    };
    return TransposedMatrix;
}(MatrixBase));
/**
 * view on the matrix restricted by a range
 * @param root underlying matrix
 * @param range range selection
 * @param t optional its transposed version
 * @constructor
 */
var MatrixView = (function (_super) {
    __extends(MatrixView, _super);
    function MatrixView(root, range, t) {
        if (t === void 0) { t = null; }
        _super.call(this, root);
        this.range = range;
        this.t = t;
        this.range = range;
        //ensure that there are two dimensions
        range.dim(0);
        range.dim(1);
        if (!t) {
            this.t = new MatrixView(root.t, range.swap(), this);
        }
    }
    Object.defineProperty(MatrixView.prototype, "desc", {
        get: function () {
            return this._root.desc;
        },
        enumerable: true,
        configurable: true
    });
    MatrixView.prototype.persist = function () {
        return {
            root: this._root.persist(),
            range: this.range.toString()
        };
    };
    MatrixView.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this._root.ids(this.range.preMultiply(range, this._root.dim));
    };
    MatrixView.prototype.cols = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this._root.cols(this.range.preMultiply(range, this._root.dim));
    };
    MatrixView.prototype.colIds = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this._root.colIds(this.range.preMultiply(range, this._root.dim));
    };
    MatrixView.prototype.rows = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this._root.rows(this.range.preMultiply(range, this._root.dim));
    };
    MatrixView.prototype.rowIds = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this._root.rowIds(this.range.preMultiply(range, this._root.dim));
    };
    MatrixView.prototype.size = function () {
        return this.range.size(this._root.dim);
    };
    MatrixView.prototype.at = function (i, j) {
        var inverted = this.range.invert([i, j], this._root.dim);
        return this._root.at(inverted[0], inverted[1]);
    };
    MatrixView.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this._root.data(this.range.preMultiply(range, this._root.dim));
    };
    MatrixView.prototype.hist = function (bins, range, containedIds) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        if (containedIds === void 0) { containedIds = 0; }
        return this._root.hist(bins, this.range.preMultiply(range, this._root.dim), containedIds);
    };
    MatrixView.prototype.heatmapUrl = function (range, options) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        if (options === void 0) { options = {}; }
        return this._root.heatmapUrl(this.range.preMultiply(range, this._root.dim), options);
    };
    MatrixView.prototype.view = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        if (range.isAll) {
            return this;
        }
        return new MatrixView(this._root, this.range.preMultiply(range, this.dim));
    };
    Object.defineProperty(MatrixView.prototype, "valuetype", {
        get: function () {
            return this._root.valuetype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixView.prototype, "rowtype", {
        get: function () {
            return this._root.rowtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixView.prototype, "coltype", {
        get: function () {
            return this._root.coltype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixView.prototype, "producttype", {
        get: function () {
            return this._root.producttype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixView.prototype, "idtypes", {
        get: function () {
            return this._root.idtypes;
        },
        enumerable: true,
        configurable: true
    });
    return MatrixView;
}(MatrixBase));
/**
 * a simple projection of a matrix columns to a vector
 */
var SliceColVector = (function (_super) {
    __extends(SliceColVector, _super);
    function SliceColVector(m, col) {
        _super.call(this, null);
        this.m = m;
        this.col = col;
        this.colRange = __WEBPACK_IMPORTED_MODULE_2__range__["Range1D"].from([this.col]);
        this.desc = {
            name: m.desc.name + '-c' + col,
            fqname: m.desc.fqname + '-c' + col,
            id: m.desc.id + '-c' + col,
            type: 'vector',
            size: this.dim,
            value: this.valuetype
        };
        this._root = this;
    }
    SliceColVector.prototype.persist = function () {
        return {
            root: this.m.persist(),
            col: this.col
        };
    };
    SliceColVector.prototype.restore = function (persisted) {
        var r = this;
        if (persisted && persisted.range) {
            r = r.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(persisted.range));
        }
        return r;
    };
    Object.defineProperty(SliceColVector.prototype, "valuetype", {
        get: function () {
            return this.m.valuetype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliceColVector.prototype, "idtype", {
        get: function () {
            return this.m.rowtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliceColVector.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    SliceColVector.prototype.size = function () {
        return this.m.nrow;
    };
    /**
     * return the associated ids of this vector
     */
    SliceColVector.prototype.names = function (range) {
        return this.m.rows(range);
    };
    SliceColVector.prototype.ids = function (range) {
        return this.m.rowIds(range);
    };
    /**
     * returns a promise for getting one cell
     * @param i
     */
    SliceColVector.prototype.at = function (i) {
        return this.m.at(i, this.col);
    };
    /**
     * returns a promise for getting the data as two dimensional array
     * @param range
     */
    SliceColVector.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(range.dim(0), this.colRange);
        return this.m.data(r).then(function (d) {
            if (d.length > 0 && Array.isArray(d[0])) {
                return d.map(function (di) { return di[0]; });
            }
            return d;
        });
    };
    SliceColVector.prototype.sort = function (compareFn, thisArg) {
        var _this = this;
        return this.data().then(function (d) {
            var indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argSort"])(d, compareFn, thisArg);
            return _this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices));
        });
    };
    SliceColVector.prototype.map = function (callbackfn, thisArg) {
        //FIXME
        return null;
    };
    SliceColVector.prototype.filter = function (callbackfn, thisArg) {
        var _this = this;
        return this.data().then(function (d) {
            var indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argFilter"])(d, callbackfn, thisArg);
            return _this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices));
        });
    };
    return SliceColVector;
}(__WEBPACK_IMPORTED_MODULE_5__vector_impl__["VectorBase"]));
/**
 * a simple projection of a matrix columns to a vector
 */
var SliceRowVector = (function (_super) {
    __extends(SliceRowVector, _super);
    function SliceRowVector(m, row) {
        _super.call(this, null);
        this.m = m;
        this.row = row;
        this.rowRange = __WEBPACK_IMPORTED_MODULE_2__range__["Range1D"].from([this.row]);
        this.desc = {
            name: m.desc.name + '-r' + row,
            fqname: m.desc.fqname + '-r' + row,
            id: m.desc.id + '-r' + row,
            type: 'vector',
            size: this.dim,
            value: this.valuetype
        };
        this._root = this;
    }
    SliceRowVector.prototype.persist = function () {
        return {
            root: this.m.persist(),
            row: this.row
        };
    };
    SliceRowVector.prototype.restore = function (persisted) {
        var r = this;
        if (persisted && persisted.range) {
            r = r.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(persisted.range));
        }
        return r;
    };
    Object.defineProperty(SliceRowVector.prototype, "valuetype", {
        get: function () {
            return this.m.valuetype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliceRowVector.prototype, "idtype", {
        get: function () {
            return this.m.coltype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliceRowVector.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    SliceRowVector.prototype.size = function () {
        return this.m.ncol;
    };
    /**
     * return the associated ids of this vector
     */
    SliceRowVector.prototype.names = function (range) {
        return this.m.cols(range);
    };
    SliceRowVector.prototype.ids = function (range) {
        return this.m.colIds(range);
    };
    /**
     * returns a promise for getting one cell
     * @param i
     */
    SliceRowVector.prototype.at = function (i) {
        return this.m.at(this.row, i);
    };
    /**
     * returns a promise for getting the data as two dimensional array
     * @param range
     */
    SliceRowVector.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(this.rowRange, range.dim(0));
        return this.m.data(r).then(function (d) {
            return d[0];
        });
    };
    SliceRowVector.prototype.sort = function (compareFn, thisArg) {
        var _this = this;
        return this.data().then(function (d) {
            var indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argSort"])(d, compareFn, thisArg);
            return _this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices));
        });
    };
    SliceRowVector.prototype.map = function (callbackfn, thisArg) {
        //FIXME
        return null;
    };
    SliceRowVector.prototype.filter = function (callbackfn, thisArg) {
        var _this = this;
        return this.data().then(function (d) {
            var indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argFilter"])(d, callbackfn, thisArg);
            return _this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices));
        });
    };
    return SliceRowVector;
}(__WEBPACK_IMPORTED_MODULE_5__vector_impl__["VectorBase"]));
/**
 * a simple projection of a matrix columns to a vector
 */
var ProjectedVector = (function (_super) {
    __extends(ProjectedVector, _super);
    function ProjectedVector(m, f, this_f, valuetype, _idtype) {
        if (this_f === void 0) { this_f = m; }
        if (valuetype === void 0) { valuetype = m.valuetype; }
        if (_idtype === void 0) { _idtype = m.rowtype; }
        _super.call(this, null);
        this.m = m;
        this.f = f;
        this.this_f = this_f;
        this.valuetype = valuetype;
        this._idtype = _idtype;
        this.desc = {
            name: m.desc.name + '-p',
            fqname: m.desc.fqname + '-p',
            type: 'vector',
            id: m.desc.id + '-p',
            size: this.dim,
            value: this.valuetype
        };
        this._root = this;
    }
    ProjectedVector.prototype.persist = function () {
        return {
            root: this.m.persist(),
            f: this.f.toString(),
            valuetype: this.valuetype === this.m.valuetype ? undefined : this.valuetype,
            idtype: this.idtype === this.m.rowtype ? undefined : this.idtype.name
        };
    };
    ProjectedVector.prototype.restore = function (persisted) {
        var r = this;
        if (persisted && persisted.range) {
            r = r.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(persisted.range));
        }
        return r;
    };
    Object.defineProperty(ProjectedVector.prototype, "idtype", {
        get: function () {
            return this._idtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectedVector.prototype, "idtypes", {
        get: function () {
            return [this._idtype];
        },
        enumerable: true,
        configurable: true
    });
    ProjectedVector.prototype.size = function () {
        return this.m.nrow;
    };
    /**
     * return the associated ids of this vector
     */
    ProjectedVector.prototype.names = function (range) {
        return this.m.rows(range);
    };
    ProjectedVector.prototype.ids = function (range) {
        return this.m.rowIds(range);
    };
    /**
     * returns a promise for getting one cell
     * @param i
     * @param j
     */
    ProjectedVector.prototype.at = function (i) {
        var _this = this;
        return this.m.data(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(i)).then(function (d) {
            return _this.f.call(_this.this_f, d[0]);
        });
    };
    /**
     * returns a promise for getting the data as two dimensional array
     * @param range
     */
    ProjectedVector.prototype.data = function (range) {
        var _this = this;
        return this.m.data(range).then(function (d) {
            return d.map(_this.f, _this.this_f);
        });
    };
    ProjectedVector.prototype.sort = function (compareFn, thisArg) {
        var _this = this;
        return this.data().then(function (d) {
            var indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argSort"])(d, compareFn, thisArg);
            return _this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices));
        });
    };
    ProjectedVector.prototype.map = function (callbackfn, thisArg) {
        //FIXME
        return null;
    };
    ProjectedVector.prototype.filter = function (callbackfn, thisArg) {
        var _this = this;
        return this.data().then(function (d) {
            var indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argFilter"])(d, callbackfn, thisArg);
            return _this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices));
        });
    };
    return ProjectedVector;
}(__WEBPACK_IMPORTED_MODULE_5__vector_impl__["VectorBase"]));
/**
 * module entry point for creating a datatype
 * @param desc
 * @returns {IMatrix}
 */
function create(desc, loader) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(desc.loader)) {
        return new Matrix(desc, adapterOne2Two(desc.loader));
    }
    return new Matrix(desc, loader ? loader : viaAPI2Loader());
}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["store"] = store;
/* harmony export (immutable) */ exports["remove"] = remove;
/* harmony export (immutable) */ exports["has"] = has;
/* harmony export (immutable) */ exports["retrieve"] = retrieve;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by sam on 10.02.2015.
 */
/**
 * Use the browser's sessionStorage
 * @type {Storage}
 */
var context = sessionStorage;
/**
 * Store any value for a given key and returns the previous stored value.
 * Returns `null` if no previous value was found.
 * @param key
 * @param value
 * @returns {any}
 */
function store(key, value) {
    var bak = context.getItem(key);
    context.setItem(key, JSON.stringify(value));
    return bak;
}
/**
 * Removes the key-value pair from the session
 * @param key
 */
function remove(key) {
    context.removeItem(key);
}
/**
 * Returns true if the key exists in the session. Otherwise returns false.
 * @param key
 * @returns {boolean}
 */
function has(key) {
    return (context.getItem(key) !== null);
}
/**
 * Returns the value for the given key if it exists in the session.
 * Otherwise returns the `default_` parameter, which is by default `null`.
 * @param key
 * @param default_
 * @returns {T}
 */
function retrieve(key, default_) {
    if (default_ === void 0) { default_ = null; }
    return has(key) ? JSON.parse(context.getItem(key)) : default_;
}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajax__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__idtype__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vector_impl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__math__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stratification__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(exports, "Stratification", function() { return Stratification; });
/* harmony export (binding) */ __webpack_require__.d(exports, "StratificationVector", function() { return StratificationVector; });
/* harmony export (immutable) */ exports["create"] = create;
/* harmony export (immutable) */ exports["wrap"] = wrap;
/* harmony export (immutable) */ exports["wrapCategoricalVector"] = wrapCategoricalVector;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};









function createRangeFromGroups(name, groups) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["composite"])(name, groups.map(function (g) {
        var r = new __WEBPACK_IMPORTED_MODULE_2__range__["Range1DGroup"](g.name, g.color || 'gray', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(g.range).dim(0));
        return r;
    }));
}
function viaAPILoader() {
    var _data = undefined;
    return function (desc) {
        if (_data) {
            return _data;
        }
        _data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/dataset/' + desc.id).then(function (data) {
            var d = {
                rowIds: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(data.rowIds),
                rows: data.rows,
                range: createRangeFromGroups(desc.name, data.groups)
            };
            return d;
        });
        return _data;
    };
}
function viaDataLoader(rows, rowIds, range) {
    var _data = undefined;
    return function (desc) {
        if (_data) {
            return Promise.resolve(_data);
        }
        _data = {
            rowIds: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(rowIds),
            rows: rows,
            range: range
        };
        return Promise.resolve(_data);
    };
}
/**
 * root matrix implementation holding the data
 */
var Stratification = (function (_super) {
    __extends(Stratification, _super);
    function Stratification(desc, loader) {
        _super.call(this, desc);
        this.desc = desc;
        this.loader = loader;
        var d = desc;
        this._idtype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__idtype__["resolve"])(d.idtype);
    }
    Object.defineProperty(Stratification.prototype, "idtype", {
        get: function () {
            return this._idtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stratification.prototype, "groups", {
        get: function () {
            return this.desc.groups;
        },
        enumerable: true,
        configurable: true
    });
    Stratification.prototype.group = function (group) {
        return new __WEBPACK_IMPORTED_MODULE_8__stratification__["StratificationGroup"](this, group, this.groups[group]);
    };
    /**
     * loads all the underlying data in json format
     * TODO: load just needed data and not everything given by the requested range
     * @returns {*}
     */
    Stratification.prototype.load = function () {
        return this.loader(this.desc);
    };
    Stratification.prototype.hist = function (bins, range) {
        //TODO
        return this.range().then(function (r) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__math__["rangeHist"])(r);
        });
    };
    Stratification.prototype.vector = function () {
        var _this = this;
        if (this._v) {
            return this._v;
        }
        this._v = this.load().then(function (data) { return new StratificationVector(_this, data.range, _this.desc); });
        return this._v;
    };
    Stratification.prototype.origin = function () {
        if ('origin' in this.desc) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__data__["getFirstByFQName"])(this.desc.origin);
        }
        return Promise.reject('no origin specified');
    };
    Stratification.prototype.range = function () {
        return this.load().then(function (data) {
            return data.range;
        });
    };
    Stratification.prototype.idRange = function () {
        var that = this;
        return this.load().then(function (data) {
            var ids = data.rowIds.dim(0);
            var range = data.range;
            return ids.preMultiply(range, that.dim[0]);
        });
    };
    Stratification.prototype.names = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        var that = this;
        return this.load().then(function (data) {
            return range.filter(data.rows, that.dim);
        });
    };
    Stratification.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        var that = this;
        return this.load().then(function (data) {
            return data.rowIds.preMultiply(range, that.dim);
        });
    };
    Object.defineProperty(Stratification.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    Stratification.prototype.size = function () {
        return this.desc.size;
    };
    Object.defineProperty(Stratification.prototype, "length", {
        get: function () {
            return this.size()[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stratification.prototype, "ngroups", {
        get: function () {
            return this.desc.ngroups;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stratification.prototype, "dim", {
        get: function () {
            return this.size();
        },
        enumerable: true,
        configurable: true
    });
    Stratification.prototype.persist = function () {
        return this.desc.id;
    };
    return Stratification;
}(__WEBPACK_IMPORTED_MODULE_4__datatype__["DataTypeBase"]));
/**
 * root matrix implementation holding the data
 */
var StratificationVector = (function (_super) {
    __extends(StratificationVector, _super);
    function StratificationVector(strat, range, desc) {
        _super.call(this, null);
        this.strat = strat;
        this.range = range;
        this._cache = null;
        this._root = this;
        this.valuetype = {
            type: 'categorical',
            categories: range.groups.map(function (g) {
                return { name: g.name, label: g.name, color: g.color };
            })
        };
        this.desc = {
            name: desc.name,
            fqname: desc.fqname,
            id: desc.id,
            type: 'vector',
            value: this.valuetype
        };
    }
    Object.defineProperty(StratificationVector.prototype, "idtype", {
        get: function () {
            return this.strat.idtype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StratificationVector.prototype, "idtypes", {
        get: function () {
            return [this.idtype];
        },
        enumerable: true,
        configurable: true
    });
    StratificationVector.prototype.persist = function () {
        return {
            root: this.strat.persist()
        };
    };
    StratificationVector.prototype.restore = function (persisted) {
        var r = this;
        if (persisted && persisted.range) {
            r = r.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(persisted.range));
        }
        return r;
    };
    StratificationVector.prototype.load = function () {
        if (this._cache !== null) {
            return this._cache;
        }
        var r = [];
        this.range.groups.forEach(function (g) {
            g.forEach(function () { return r.push(g.name); });
        });
        return this._cache = Promise.resolve(r);
    };
    /**
     * access at a specific position
     * @param i
     * @returns {*}
     */
    StratificationVector.prototype.at = function (i) {
        return this.load().then(function (d) {
            return d[i];
        });
    };
    StratificationVector.prototype.data = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        var that = this;
        return this.load().then(function (data) {
            return range.filter(data, that.dim);
        });
    };
    StratificationVector.prototype.names = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.strat.names(range);
    };
    StratificationVector.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["all"])(); }
        return this.strat.ids(range);
    };
    StratificationVector.prototype.size = function () {
        return this.strat.size();
    };
    StratificationVector.prototype.sort = function (compareFn, thisArg) {
        var _this = this;
        return this.data().then(function (d) {
            var indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argSort"])(d, compareFn, thisArg);
            return _this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices));
        });
    };
    StratificationVector.prototype.map = function (callbackfn, thisArg) {
        //FIXME
        return null;
    };
    StratificationVector.prototype.filter = function (callbackfn, thisArg) {
        var _this = this;
        return this.data().then(function (d) {
            var indices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argFilter"])(d, callbackfn, thisArg);
            return _this.view(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(indices));
        });
    };
    return StratificationVector;
}(__WEBPACK_IMPORTED_MODULE_6__vector_impl__["VectorBase"]));
/**
 * module entry point for creating a datatype
 * @param desc
 * @returns {IVector}
 */
function create(desc) {
    return new Stratification(desc, viaAPILoader());
}
function wrap(desc, rows, rowIds, range) {
    return new Stratification(desc, viaDataLoader(rows, rowIds, range));
}
function wrapCategoricalVector(v) {
    var desc = {
        id: v.desc.id + '-s',
        type: 'stratification',
        name: v.desc.name + '-s',
        fqname: v.desc.fqname + '-s',
        ngroups: v.desc.value.categories.length,
        size: v.dim
    };
    function loader() {
        return Promise.all([v.groups(), v.ids(), v.names()]).then(function (args) {
            return {
                range: args[0],
                rowIds: args[1],
                rows: args[2]
            };
        });
    }
    return new Stratification(desc, loader);
}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugin__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event__ = __webpack_require__(5);
/* harmony export (immutable) */ exports["assignVis"] = assignVis;
/* harmony export (binding) */ __webpack_require__.d(exports, "AVisInstance", function() { return AVisInstance; });
/* harmony export (immutable) */ exports["list"] = list;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



function assignVis(node, vis) {
    node.__vis__ = vis;
}
/**
 * base class for an visualization
 */
var AVisInstance = (function (_super) {
    __extends(AVisInstance, _super);
    function AVisInstance() {
        _super.apply(this, arguments);
        this.id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["uniqueId"])('vis');
        this._built = false;
    }
    AVisInstance.prototype.option = function (name, value) {
        //dummy
        //if (value) {
        //  this.fire('option', name, value, null);
        //}
        return null;
    };
    AVisInstance.prototype.persist = function () {
        return null;
    };
    Object.defineProperty(AVisInstance.prototype, "isBuilt", {
        get: function () {
            return this._built;
        },
        enumerable: true,
        configurable: true
    });
    AVisInstance.prototype.markReady = function (built) {
        if (built === void 0) { built = true; }
        this._built = built;
        if (built) {
            this.fire('ready');
        }
    };
    AVisInstance.prototype.locate = function () {
        var range = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            range[_i - 0] = arguments[_i];
        }
        if (range.length === 1) {
            return this.locateImpl(range[0]);
        }
        return Promise.all(range.map(this.locateImpl, this));
    };
    AVisInstance.prototype.locateById = function () {
        var _this = this;
        var range = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            range[_i - 0] = arguments[_i];
        }
        return this.data.ids().then(function (ids) {
            if (range.length === 1) {
                return _this.locateImpl(ids.indexOf(range[0]));
            }
            return Promise.all(range.map(function (r) { return _this.locateImpl(ids.indexOf(r)); }));
        });
    };
    AVisInstance.prototype.locateImpl = function (range) {
        //no resolution by default
        return Promise.resolve(null);
    };
    AVisInstance.prototype.restore = function (persisted) {
        return Promise.resolve(this);
    };
    AVisInstance.prototype.update = function () {
        //do nothing
    };
    AVisInstance.prototype.destroy = function () {
        // nothing to destroy
        var n = this.node;
        if (n && n.parentNode && !(window.event && window.event.type === 'DOMNodeRemoved' && window.event.target === n)) {
            n.parentNode.removeChild(n);
        }
        this.fire('destroyed');
    };
    AVisInstance.prototype.transform = function () {
        return {
            scale: [1, 1],
            rotate: 0
        };
    };
    Object.defineProperty(AVisInstance.prototype, "rawSize", {
        get: function () {
            return [100, 100];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AVisInstance.prototype, "size", {
        get: function () {
            var t = this.transform();
            var r = this.rawSize;
            //TODO rotation
            return [r[0] * t.scale[0], r[1] * t.scale[1]];
        },
        enumerable: true,
        configurable: true
    });
    return AVisInstance;
}(__WEBPACK_IMPORTED_MODULE_2__event__["EventHandler"]));
function extrapolateFilter(r) {
    var v = r.filter;
    if (typeof v === 'undefined') {
        r.filter = __WEBPACK_IMPORTED_MODULE_0__index__["constantTrue"];
    }
    else if (typeof v === 'string') {
        r.filter = function (data) { return data && data.desc.type && data.desc.type.match(v); };
    }
    else if (Array.isArray(v)) {
        r.filter = function (data) { return data && data && (data.desc.type && data.desc.type.match(v[0])) && (!data.desc.value || data.desc.value.type.match(v[1])); };
    }
}
function extrapolateIconify(r) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(r.iconify)) {
        return;
    }
    r.iconify = function iconfiy(node) {
        node.title = this.name;
        if (this.iconcss) {
            node.classList.add('phovea-vis-icon');
            node.classList.add(this.iconcss);
        }
        else if (this.icon) {
            node.classList.add('phovea-vis-icon');
            node.style.width = '1em';
            node.style.display = 'inline-block';
            node.style.textAlign = 'center';
            node.style.backgroundSize = '100%';
            node.style.backgroundRepeat = 'no-repeat';
            //lazy load icon
            this.icon().then(function (iconData) {
                node.style.backgroundImage = "url(" + iconData + ")";
            });
            node.innerHTML = '&nbsp';
        }
        else {
            node.innerText = this.name.substr(0, 1).toUpperCase();
        }
    };
}
function extrapolateSize(r) {
    r.scaling = r.scaling || 'free';
    if (Array.isArray(r.sizeDependsOnDataDimension) && typeof r.sizeDependsOnDataDimension[0] === 'boolean') {
    }
    else if (typeof r.sizeDependsOnDataDimension === 'boolean') {
        r.sizeDependsOnDataDimension = [r.sizeDependsOnDataDimension, r.sizeDependsOnDataDimension];
    }
    else {
        r.sizeDependsOnDataDimension = [false, false];
    }
}
function extrapolateRotation(r) {
    var m = {
        free: NaN,
        no: 0,
        transpose: 90,
        swap: 180
    };
    if (typeof r.rotation === 'string' && r.rotation in m) {
        r.rotation = m[r.rotation];
    }
    else if (typeof r.rotation === 'number') {
        r.rotation = +r.rotation;
    }
    else if (r.rotation === null) {
        r.rotation = NaN;
    }
    else {
        r.rotation = 0;
    }
}
function toVisPlugin(plugin) {
    var r = plugin;
    extrapolateFilter(r);
    extrapolateIconify(r);
    extrapolateSize(r);
    extrapolateRotation(r);
    return r;
}
/**
 * list a vis plugins and check in addition whether the match the given data type
 * @param data the data type to visualize
 * @returns {IPluginDesc[]}
 */
function list(data) {
    //filter additionally with the filter attribute, which can be a function or the expected data type
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__plugin__["list"])('vis').map(toVisPlugin).filter(function (desc) { return desc.filter(data); });
}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */

/**
 * generates and object that contain all modules in the src folder accessible as properties
 */

/***
 * magic file name for the pseudo root file
 * @type {string}
 */
var INDEX_FILE = './index.ts';
/**
 * sorts the given filename by name ensuring INDEX is the first one
 * @param a
 * @param b
 * @returns {number}
 */
function byName(a, b) {
    if (a === INDEX_FILE) {
        return a === b ? 0 : -1;
    }
    if (b === INDEX_FILE) {
        return 1;
    }
    return a.toLowerCase().localeCompare(b.toLowerCase());
}
//list all modules in the src folder excluding the one starting with _
var req = __webpack_require__(34);

var files = req.keys().sort(byName);

//root file exists? else use anonymous root object
if (files[0] === INDEX_FILE) {
    module.exports = req(files.shift());
} else {
    module.exports = {};
}

//generate getter for all modules
files.forEach(function (f) {
    Object.defineProperty(module.exports, f.substring(2, f.length - 3), {
        get: function () { return req(f); },
        enumerable: true
    });
});


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "buildInfo.json";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_plugin__ = __webpack_require__(6);
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */



/**
 * build a registry by registering all phovea modules
 */
//other modules

//self
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_plugin__["register"])('phovea_core',__webpack_require__(33));


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "ZoomLogic", function() { return ZoomLogic; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ZoomBehavior", function() { return ZoomBehavior; });
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 16.12.2014.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * utility logic for zooming a vis instance
 */
var ZoomLogic = (function (_super) {
    __extends(ZoomLogic, _super);
    function ZoomLogic(v, meta) {
        _super.call(this);
        this.v = v;
        this.meta = meta;
    }
    ZoomLogic.prototype.zoomIn = function () {
        return this.zoom(1, 1);
    };
    ZoomLogic.prototype.zoomOut = function () {
        return this.zoom(-1, -1);
    };
    /**
     * zooms in/out, -1 = zoom out, +1 zoom in, 0 no zoom operation
     * @param zoomX
     * @param zoomY
     * @returns {any}
     */
    ZoomLogic.prototype.zoom = function (zoomX, zoomY) {
        if (!this.v) {
            return null;
        }
        function toDelta(x) {
            return x > 0 ? 0.2 : (x < 0 ? -0.2 : 0);
        }
        var old = this.v.transform();
        var deltaX = toDelta(zoomX);
        var deltaY = toDelta(zoomY);
        return this.zoomSet(old.scale[0] + deltaX, old.scale[1] + deltaY);
    };
    Object.defineProperty(ZoomLogic.prototype, "isWidthFixed", {
        get: function () {
            return (this.meta && this.meta.scaling === 'height-only');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomLogic.prototype, "isHeightFixed", {
        get: function () {
            return (this.meta && this.meta.scaling === 'width-only');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomLogic.prototype, "isFixedAspectRatio", {
        get: function () {
            return (this.meta && this.meta.scaling === 'aspect');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * set specific zoom factors
     * @param zoomX
     * @param zoomY
     * @returns {any}
     */
    ZoomLogic.prototype.zoomSet = function (zoomX, zoomY) {
        if (!this.v) {
            return null;
        }
        var old = this.v.transform();
        var s = [zoomX, zoomY];
        switch ((this.meta ? this.meta.scaling : 'free')) {
            case 'width-only':
                s[1] = old.scale[1];
                break;
            case 'height-only':
                s[0] = old.scale[0];
                break;
        }
        if (s[0] <= 0) {
            s[0] = 0.001;
        }
        if (s[1] <= 0) {
            s[1] = 0.001;
        }
        if ((this.meta && this.meta.scaling === 'aspect')) {
            s[0] = s[1] = Math.min.apply(Math, s);
        }
        this.fire('zoom', {
            scale: s,
            rotate: old.rotate
        }, old);
        return this.v.transform(s, old.rotate);
    };
    /**
     * zooms to a given width and height based on the rawSize of the visualization
     * @param w
     * @param h
     * @returns {any}
     */
    ZoomLogic.prototype.zoomTo = function (w, h) {
        if (!this.v) {
            return null;
        }
        var ori = this.v.rawSize;
        return this.zoomSet(w / ori[0], h / ori[1]);
    };
    return ZoomLogic;
}(__WEBPACK_IMPORTED_MODULE_0__event__["EventHandler"]));
/**
 * addition to ZoomLogic taking care of mouse wheel operations on the vis instance
 */
var ZoomBehavior = (function (_super) {
    __extends(ZoomBehavior, _super);
    function ZoomBehavior(node, v, meta) {
        var _this = this;
        _super.call(this, v, meta);
        this.node = node;
        node.addEventListener('mousewheel', function (event) {
            if (!_this.v) {
                return;
            }
            var ctrlKey = event.ctrlKey; //both
            var shiftKey = event.shiftKey; //y
            var altKey = event.altKey; //x
            var m = event.wheelDelta;
            _this.zoom(m * (ctrlKey || altKey ? 1 : 0), m * (ctrlKey || shiftKey ? 1 : 0));
            if (ctrlKey || shiftKey || altKey) {
                event.preventDefault();
            }
        });
    }
    return ZoomBehavior;
}(ZoomLogic));


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geom__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(exports, "ALayoutElem", function() { return ALayoutElem; });
/* harmony export (immutable) */ exports["wrapDOM"] = wrapDOM;
/* harmony export (binding) */ __webpack_require__.d(exports, "no_padding", function() { return no_padding; });
/* harmony export (immutable) */ exports["layers"] = layers;
/* harmony export (immutable) */ exports["flowLayout"] = flowLayout;
/* harmony export (immutable) */ exports["distributeLayout"] = distributeLayout;
/* harmony export (immutable) */ exports["borderLayout"] = borderLayout;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var ALayoutElem = (function () {
    function ALayoutElem(options) {
        if (options === void 0) { options = {}; }
        this.options = options;
    }
    ALayoutElem.prototype.getBounds = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__geom__["rect"])(0, 0, 0, 0);
    };
    ALayoutElem.prototype.getLocation = function () {
        return this.getBounds().xy;
    };
    ALayoutElem.prototype.getSize = function () {
        return this.getBounds().size;
    };
    ALayoutElem.prototype.layoutOption = function (name, default_) {
        if (default_ === void 0) { default_ = null; }
        if (this.options.hasOwnProperty(name)) {
            return this.options[name];
        }
        return default_;
    };
    return ALayoutElem;
}());
var HTMLLayoutElem = (function (_super) {
    __extends(HTMLLayoutElem, _super);
    function HTMLLayoutElem(node, options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.node = node;
    }
    HTMLLayoutElem.prototype.setBounds = function (x, y, w, h) {
        var unit = this.layoutOption('unit', 'px'), style = this.node.style;
        style.left = x + unit;
        style.top = y + unit;
        style.width = w + unit;
        style.height = h + unit;
        return null;
    };
    HTMLLayoutElem.prototype.getBounds = function () {
        var unit = this.layoutOption('unit', 'px'), style = this.node.style;
        function v(f) {
            if (f.length >= unit.length && f.substring(f.length - unit.length) === unit) {
                f = f.substring(0, f.length - unit.length);
                return parseFloat(f);
            }
            return 0;
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__geom__["rect"])(v(style.left), v(style.top), v(style.width), v(style.height));
    };
    return HTMLLayoutElem;
}(ALayoutElem));
function wrapDOM(node, options) {
    if (options === void 0) { options = {}; }
    return new HTMLLayoutElem(node, options);
}
//TODO rename to camelCase
var no_padding = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
};
function isDefault(v) {
    return v < 0 || isNaN(v);
}
function grab(v_def, v) {
    return isDefault(v_def) ? v : v_def;
}
function waitFor(promises, redo) {
    if (redo === void 0) { redo = false; }
    promises = promises.filter(function (p) { return p != null; });
    if (promises.length === 0) {
        return Promise.resolve(redo);
    }
    else if (promises.length === 1) {
        return promises[0].then(function () { return redo; });
    }
    return Promise.all(promises).then(function () { return redo; });
}
function layers(elems, w, h, parent) {
    return waitFor(elems.map(function (elem) {
        var x = grab(elem.layoutOption('prefX', Number.NaN), 0);
        var y = grab(elem.layoutOption('prefY', Number.NaN), 0);
        return elem.setBounds(x, y, w - x, h - y);
    }));
}
function flowLayout(horizontal, gap, padding) {
    if (padding === void 0) { padding = { top: 0, left: 0, right: 0, bottom: 0 }; }
    function getSize(w, h, child, value) {
        if (horizontal) {
            return [value, grab(child.layoutOption('prefHeight', Number.NaN), h)];
        }
        else {
            return [grab(child.layoutOption('prefWidth', Number.NaN), w), value];
        }
    }
    function FlowLayout(elems, w, h, parent) {
        w -= padding.left + padding.right;
        h -= padding.top + padding.bottom;
        var freeSpace = (horizontal ? w : h) - gap * (elems.length - 1);
        var unbound = 0, fixUsed = 0, ratioSum = 0;
        // count statistics
        elems.forEach(function (elem) {
            var fix = elem.layoutOption(horizontal ? 'prefWidth' : 'prefHeight', Number.NaN);
            var ratio = elem.layoutOption('ratio', Number.NaN);
            if (isDefault(fix) && isDefault(ratio)) {
                unbound++;
            }
            else if (fix >= 0) {
                fixUsed += fix;
            }
            else {
                ratioSum += ratio;
            }
        });
        var ratioMax = (ratioSum < 1) ? 1 : ratioSum;
        var unboundedSpace = (freeSpace - fixUsed - freeSpace * ratioSum / ratioMax) / unbound;
        // set all sizes
        var sizes = elems.map(function (elem) {
            var fix = elem.layoutOption(horizontal ? 'prefWidth' : 'prefHeight', Number.NaN);
            var ratio = elem.layoutOption('ratio', Number.NaN);
            if (isDefault(fix) && isDefault(ratio)) {
                return getSize(w, h, elem, unboundedSpace);
            }
            else if (fix >= 0) {
                return getSize(w, h, elem, fix);
            }
            else {
                var value = (ratio / ratioMax) * freeSpace;
                return getSize(w, h, elem, value);
            }
        });
        // set all locations
        var x_acc = padding.left;
        var y_acc = padding.top;
        var promises = [];
        elems.forEach(function (elem, i) {
            var s = sizes[i];
            promises.push(elem.setBounds(x_acc, y_acc, s[0], s[1]));
            if (horizontal) {
                x_acc += s[0] + gap;
            }
            else {
                y_acc += s[1] + gap;
            }
        });
        return waitFor(promises);
    }
    return FlowLayout;
}
function distributeLayout(horizontal, defaultValue, padding) {
    if (padding === void 0) { padding = no_padding; }
    function setBounds(x, y, w, h, child, value) {
        if (horizontal) {
            return child.setBounds(x, y, value, grab(child.layoutOption('prefHeight', Number.NaN), h));
        }
        else {
            return child.setBounds(x, y, grab(child.layoutOption('prefWidth', Number.NaN), w), value);
        }
    }
    function DistributeLayout(elems, w, h, parent) {
        w -= padding.left + padding.right;
        h -= padding.top + padding.bottom;
        var freeSpace = (horizontal ? w : h);
        var fixUsed = 0;
        // count statistics
        elems.forEach(function (elem) {
            var fix = elem.layoutOption(horizontal ? 'prefWidth' : 'prefHeight', Number.NaN);
            if (isDefault(fix)) {
                fix = defaultValue;
            }
            fixUsed += fix;
        });
        var gap = (freeSpace - fixUsed) / (elems.length - 1);
        var x_acc = padding.left;
        var y_acc = padding.top;
        if (elems.length === 1) {
            if (horizontal) {
                x_acc += (freeSpace - fixUsed) / 2;
            }
            else {
                y_acc += (freeSpace - fixUsed) / 2;
            }
        }
        var promises = [];
        elems.forEach(function (elem) {
            var fix = elem.layoutOption(horizontal ? 'prefWidth' : 'prefHeight', Number.NaN);
            if (isDefault(fix)) {
                fix = defaultValue;
            }
            promises.push(setBounds(x_acc, y_acc, w, h, elem, fix));
            if (horizontal) {
                x_acc += fix + gap;
            }
            else {
                y_acc += fix + gap;
            }
        });
        return waitFor(promises);
    }
    return DistributeLayout;
}
//     top
//------------
// l |      | r
// e |      | i
// f |center| g
// t |      | h
//   |      | t
//-------------
//   bottom
function borderLayout(horizontal, gap, percentages, padding) {
    if (percentages === void 0) { percentages = {
        top: 0.2,
        left: 0.2,
        right: 0.2,
        bottom: 0.2
    }; }
    if (padding === void 0) { padding = no_padding; }
    function BorderLayout(elems, w, h, parent) {
        w -= padding.left + padding.right;
        h -= padding.top + padding.bottom;
        var x = padding.top, y = padding.left, wc = w, hc = h;
        var pos = {
            top: [],
            center: [],
            left: [],
            right: [],
            bottom: []
        };
        elems.forEach(function (elem) {
            var border = elem.layoutOption('border', 'center');
            if (!pos.hasOwnProperty(border)) {
                border = 'center'; //invalid one
            }
            pos[border].push(pos);
        });
        var promises = [];
        if (pos.top.length > 0) {
            y += h * percentages.top;
            hc -= h * percentages.top;
            promises.push(flowLayout(true, gap)(pos.top, w, h * percentages.top, parent));
        }
        if (pos.bottom.length > 0) {
            hc -= h * percentages.bottom;
            promises.push(flowLayout(true, gap)(pos.bottom, w, h * percentages.bottom, parent));
        }
        if (pos.left.length > 0) {
            x += w * percentages.left;
            wc -= w * percentages.left;
            promises.push(flowLayout(false, gap)(pos.left, w * percentages.left, hc, parent));
        }
        if (pos.right.length > 0) {
            wc -= w * percentages.right;
            promises.push(flowLayout(false, gap)(pos.right, w * percentages.right, hc, parent));
        }
        if (pos.center.length > 0) {
            promises.push(flowLayout(true, gap)(pos.center, wc, hc, parent));
        }
        return waitFor(promises);
    }
    return BorderLayout;
}


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geom__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(exports, "AView", function() { return AView; });
/* harmony export (immutable) */ exports["list"] = list;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by sam on 25.02.2015.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var AView = (function (_super) {
    __extends(AView, _super);
    function AView() {
        _super.call(this);
        this._layoutOptions = {};
    }
    Object.defineProperty(AView.prototype, "data", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AView.prototype, "idtypes", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    AView.prototype.setBounds = function (x, y, w, h) {
        //implement
        return null;
    };
    AView.prototype.getBounds = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__geom__["rect"])(0, 0, 0, 0);
    };
    AView.prototype.setLayoutOption = function (name, value) {
        this._layoutOptions[name] = value;
    };
    AView.prototype.layoutOption = function (name, default_) {
        if (default_ === void 0) { default_ = null; }
        if (this._layoutOptions.hasOwnProperty(name)) {
            return this._layoutOptions[name];
        }
        return default_;
    };
    return AView;
}(__WEBPACK_IMPORTED_MODULE_1__event__["EventHandler"]));
function convertDesc(desc) {
    var d = desc;
    d.type = d.type || 'main';
    d.location = d.location || 'center';
    return d;
}
function list() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin__["list"])('view').map(convertDesc);
}


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajax__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony export (immutable) */ exports["map"] = map;



function map(source, target) {
    var that = this;
    if (arguments.length === 2) {
        //return a mapper
        return function () {
            var args = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments);
            args.unshift(target);
            args.unshift(source);
            return map.apply(that, args);
        };
    }
    var args = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments);
    args.shift(); //source
    args.shift(); //target
    var id = args.shift(), range;
    //check type and create a range out of it
    if (Array.isArray(id)) {
        range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(id);
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["is"])(id)) {
        range = id;
    }
    else {
        args.unshift(id);
        range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["list"])(args);
    }
    return mapImpl(source, target, range);
}
//TODO convert to Map
var cache = {};
function mapImpl(source, target, range) {
    var key = source.toString() + '->' + target.toString() + ':' + range.toString();
    if (cache.hasOwnProperty(key)) {
        return cache[key];
    }
    //TODO clear old cache entries
    var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ajax__["getAPIJSON"])('/mapper/map', {
        source: source.toString(),
        target: target.toString(),
        range: range.toString()
    }).then(function (data) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__range__["parse"])(data.range);
    });
    cache[key] = r;
    return r;
}


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "IDTYPE_ROW", function() { return IDTYPE_ROW; });
/* harmony export (binding) */ __webpack_require__.d(exports, "IDTYPE_COLUMN", function() { return IDTYPE_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(exports, "IDTYPE_CELL", function() { return IDTYPE_CELL; });
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */
var IDTYPE_ROW = 0;
var IDTYPE_COLUMN = 1;
var IDTYPE_CELL = 2;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vis__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(exports, "MultiForm", function() { return MultiForm; });
/* harmony export (binding) */ __webpack_require__.d(exports, "MultiFormGrid", function() { return MultiFormGrid; });
/* harmony export (immutable) */ exports["toAvailableVisses"] = toAvailableVisses;
/* harmony export (immutable) */ exports["addIconVisChooser"] = addIconVisChooser;
/* harmony export (immutable) */ exports["addSelectVisChooser"] = addSelectVisChooser;
/* harmony export (immutable) */ exports["create"] = create;
/* harmony export (immutable) */ exports["createGrid"] = createGrid;
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 27.08.2014.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




var ProxyMetaData = (function () {
    function ProxyMetaData(proxy) {
        this.proxy = proxy;
    }
    Object.defineProperty(ProxyMetaData.prototype, "scaling", {
        get: function () {
            var p = this.proxy();
            return p ? p.scaling : 'free';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProxyMetaData.prototype, "rotation", {
        get: function () {
            var p = this.proxy();
            return p ? p.rotation : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProxyMetaData.prototype, "sizeDependsOnDataDimension", {
        get: function () {
            var p = this.proxy();
            return p ? p.sizeDependsOnDataDimension : [false, false];
        },
        enumerable: true,
        configurable: true
    });
    return ProxyMetaData;
}());
function selectVis(initial, visses) {
    switch (typeof initial) {
        case 'number':
            return visses[Math.max(0, Math.min(initial, visses.length - 1))];
        case 'string':
            return visses[Math.max(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["indexOf"])(visses, function (v) { return v.id === initial; }))];
        default:
            return visses[Math.max(0, visses.indexOf(initial))];
    }
}
function clearNode(parent) {
    var node = parent.firstChild;
    while ((node = parent.firstChild) != null) {
        parent.removeChild(node);
    }
}
function createNode(parent, type, clazz) {
    if (type === void 0) { type = 'div'; }
    var node = document.createElement(type);
    if (clazz) {
        clazz.split(' ').forEach(function (c) { return node.classList.add(c); });
    }
    parent.appendChild(node);
    return node;
}
/**
 * a simple multi form class using a select to switch
 */
var MultiForm = (function (_super) {
    __extends(MultiForm, _super);
    function MultiForm(data, parent, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        _super.call(this);
        this.data = data;
        this.options = options;
        this.metaData_ = new ProxyMetaData(function () { return _this.actDesc; });
        this.options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["mixin"])({
            initialVis: 0,
            all: {}
        }, options);
        this.node = createNode(parent, 'div', 'multiform');
        parent.__data__ = data;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__vis__["assignVis"])(this.node, this);
        //find all suitable plugins
        this.visses = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__vis__["list"])(data);
        this.build();
    }
    Object.defineProperty(MultiForm.prototype, "asMetaData", {
        /**
         * converts this multiform to a vis metadata
         * @return {IVisMetaData}
         */
        get: function () {
            return this.metaData_;
        },
        enumerable: true,
        configurable: true
    });
    MultiForm.prototype.build = function () {
        //create select option field
        //create content
        this.content = createNode(this.node, 'div', 'content');
        //switch to first
        this.switchTo(this.options.initialVis);
    };
    MultiForm.prototype.destroy = function () {
        if (this.actVis && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(this.actVis.destroy)) {
            this.actVis.destroy();
        }
        _super.prototype.destroy.call(this);
    };
    MultiForm.prototype.persist = function () {
        return {
            id: this.actDesc ? this.actDesc.id : null,
            content: this.actVis && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(this.actVis.persist) ? this.actVis.persist() : null
        };
    };
    MultiForm.prototype.restore = function (persisted) {
        var that = this;
        if (persisted.id) {
            var selected = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["search"])(this.visses, function (e) { return e.id === persisted.id; });
            if (selected) {
                return this.switchTo(selected).then(function (vis) {
                    if (vis && persisted.content && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(vis.restore)) {
                        return Promise.resolve(vis.restore(persisted.content)).then(function () { return that; });
                    }
                    return that;
                });
            }
        }
        return Promise.resolve(that);
    };
    MultiForm.prototype.locate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var p = this.actVisPromise || Promise.resolve(null);
        return p.then(function () {
            var aa = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                aa[_i - 0] = arguments[_i];
            }
            var vis = aa.length > 0 ? aa[0] : undefined;
            if (vis && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(vis.locate)) {
                return vis.locate.apply(vis, args);
            }
            else {
                return Promise.resolve((aa.length === 1 ? undefined : new Array(args.length)));
            }
        });
    };
    MultiForm.prototype.locateById = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var p = this.actVisPromise || Promise.resolve(null);
        return p.then(function () {
            var aa = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                aa[_i - 0] = arguments[_i];
            }
            var vis = aa.length > 0 ? aa[0] : undefined;
            if (vis && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(vis.locateById)) {
                return vis.locateById.apply(vis, args);
            }
            else {
                return Promise.resolve((aa.length === 1 ? undefined : new Array(args.length)));
            }
        });
    };
    MultiForm.prototype.transform = function (scale, rotate) {
        var _this = this;
        if (this.actVis) {
            if (arguments.length === 0) {
                return this.actVis.transform();
            }
            else {
                var t = function (event, new_, old) {
                    _this.fire('transform', new_, old);
                };
                this.actVis.on('transform', t);
                var r = this.actVis.transform(scale, rotate);
                this.actVis.off('transform', t);
                return r;
            }
        }
        if (this.actVisPromise && arguments.length > 0) {
            //2nd try
            this.actVisPromise.then(function (v) { return _this.transform(scale, rotate); });
            return;
        }
        return {
            scale: [1, 1],
            rotate: 0
        };
    };
    Object.defineProperty(MultiForm.prototype, "act", {
        /**
         * returns the current selected vis technique description
         * @returns {plugins.IPluginDesc}
         */
        get: function () {
            return this.actDesc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiForm.prototype, "actLoader", {
        get: function () {
            return this.actVisPromise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiForm.prototype, "size", {
        get: function () {
            if (this.actVis) {
                return this.actVis.size;
            }
            return [100, 100];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiForm.prototype, "rawSize", {
        get: function () {
            if (this.actVis) {
                return this.actVis.rawSize;
            }
            return [100, 100];
        },
        enumerable: true,
        configurable: true
    });
    MultiForm.prototype.switchTo = function (param) {
        var _this = this;
        var vis = selectVis(param, this.visses);
        if (vis === this.actDesc) {
            return this.actVisPromise; //already selected
        }
        //gracefully destroy
        if (this.actVis) {
            this.actVis.destroy();
            this.actVis = null;
            this.actVisPromise = null;
        }
        //remove content dom side
        clearNode(this.content);
        //switch and trigger event
        var bak = this.actDesc;
        this.actDesc = vis;
        this.markReady(false);
        this.fire('change', vis, bak);
        this.actVis = null;
        this.actVisPromise = null;
        if (vis) {
            //load the plugin and create the instance
            return this.actVisPromise = vis.load().then(function (plugin) {
                if (_this.actDesc !== vis) {
                    return null;
                }
                _this.actVis = plugin.factory(_this.data, _this.content, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["mixin"])({}, _this.options.all, _this.options[vis.id] || {}));
                _this.actVis.on('ready', function () { return _this.markReady(); });
                _this.fire('changed', vis, bak);
                return _this.actVis;
            });
        }
        else {
            return Promise.resolve(null);
        }
    };
    return MultiForm;
}(__WEBPACK_IMPORTED_MODULE_2__vis__["AVisInstance"]));
var GridElem = (function () {
    function GridElem(range, pos, data) {
        this.range = range;
        this.pos = pos;
        this.data = data;
    }
    GridElem.prototype.setContent = function (c) {
        this.content = c;
        this.content.__data__ = this.data;
    };
    GridElem.prototype.subrange = function (r) {
        var ri = this.range.intersect(r);
        return this.range.indexOf(ri);
    };
    Object.defineProperty(GridElem.prototype, "hasOne", {
        get: function () {
            return this.actVis != null;
        },
        enumerable: true,
        configurable: true
    });
    GridElem.prototype.destroy = function () {
        if (this.actVis && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(this.actVis.destroy)) {
            this.actVis.destroy();
        }
    };
    Object.defineProperty(GridElem.prototype, "size", {
        get: function () {
            return this.actVis ? this.actVis.size : [100, 100];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridElem.prototype, "rawSize", {
        get: function () {
            return this.actVis ? this.actVis.rawSize : [100, 100];
        },
        enumerable: true,
        configurable: true
    });
    GridElem.prototype.persist = function () {
        return {
            range: this.range.toString(),
            content: this.actVis && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(this.actVis.persist) ? this.actVis.persist() : null
        };
    };
    GridElem.prototype.restore = function (persisted) {
        //FIXME
        /*if (persisted.id) {
         var selected = search(this.visses, (e) => e.id === persisted.id);
         if (selected) {
         this.switchTo(selected).then((vis) => {
         if (vis && persisted.content && isFunction(restore)) {
         restore(persisted.content);
         }
         });
         }
         }*/
        return null;
    };
    GridElem.prototype.switchDestroy = function () {
        //remove content dom side
        clearNode(this.content);
        if (this.actVis && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(this.actVis.destroy)) {
            this.actVis.destroy();
        }
        this.actVis = null;
    };
    GridElem.prototype.build = function (plugin, options) {
        this.actVis = plugin.factory(this.data, this.content, options);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__vis__["assignVis"])(this.content, this.actVis);
        return this.actVis;
    };
    Object.defineProperty(GridElem.prototype, "location", {
        get: function () {
            var o = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["offset"])(this.content);
            return {
                x: o.left,
                y: o.top
            };
        },
        enumerable: true,
        configurable: true
    });
    GridElem.prototype.transform = function (scale, rotate) {
        if (this.actVis) {
            if (arguments.length > 0) {
                return this.actVis.transform(scale, rotate);
            }
            else {
                return this.actVis.transform();
            }
        }
        return {
            scale: [1, 1],
            rotate: 0
        };
    };
    return GridElem;
}());
function sum(arr) {
    return arr.reduce(function (v, x) { return v + x; }, 0);
}
function max(arr, acc) {
    if (arr.length === 0) {
        return NaN;
    }
    return arr.reduce(function (p, act) { return Math.max(p, acc(act)); }, -Infinity);
}
/**
 * a simple multi form class using a select to switch
 */
var MultiFormGrid = (function (_super) {
    __extends(MultiFormGrid, _super);
    function MultiFormGrid(data, range, parent, viewFactory, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        _super.call(this);
        this.data = data;
        this.range = range;
        this.options = options;
        this.metaData_ = new ProxyMetaData(function () { return _this.actDesc; });
        this.options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["mixin"])({
            initialVis: 0,
            singleRowOptimization: true
        }, options);
        this.node = createNode(parent, 'div', 'multiformgrid');
        parent.__data__ = data;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__vis__["assignVis"])(this.node, this);
        //find all suitable plugins
        this.visses = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__vis__["list"])(data);
        //compute the dimensions and build the grid
        var dims = this.dims = range.dims.map(function (dim) {
            if (dim instanceof __WEBPACK_IMPORTED_MODULE_1__range__["CompositeRange1D"]) {
                return dim.groups;
            }
            else if (dim instanceof __WEBPACK_IMPORTED_MODULE_1__range__["Range1DGroup"]) {
                return [dim];
            }
            else {
                return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["asUngrouped"])(dim)];
            }
        });
        var grid = this.grid = [];
        function product(level, range, pos) {
            if (level === dims.length) {
                var r = range.length === 0 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["all"])() : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__range__["list"])(range.slice()); //work on a copy for safety reason
                grid.push(new GridElem(r, pos.slice(), viewFactory(data, r, pos.slice())));
            }
            else {
                dims[level].forEach(function (group, i) {
                    range.push(group);
                    pos.push(i);
                    product(level + 1, range, pos);
                    range.pop();
                    pos.pop();
                });
            }
        }
        product(0, [], []);
        this.build();
    }
    Object.defineProperty(MultiFormGrid.prototype, "dimSizes", {
        get: function () {
            return this.dims.map(function (d) { return d.length; });
        },
        enumerable: true,
        configurable: true
    });
    MultiFormGrid.prototype.toElem = function (pos) {
        var s = this.dimSizes;
        if (s.length === 1) {
            return this.grid[pos[0]];
        }
        return this.grid[pos[0] * s[1] + (pos[1] || 0)];
    };
    MultiFormGrid.prototype.getRange = function () {
        var indices = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indices[_i - 0] = arguments[_i];
        }
        var elem = this.toElem(indices);
        return elem.range;
    };
    MultiFormGrid.prototype.getData = function () {
        var indices = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indices[_i - 0] = arguments[_i];
        }
        var elem = this.toElem(indices);
        return elem.data;
    };
    MultiFormGrid.prototype.getBounds = function () {
        var indices = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indices[_i - 0] = arguments[_i];
        }
        var elem = this.toElem(indices);
        var absloc = elem.location;
        var size = elem.size;
        var parentLoc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["offset"])(this.content);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__geom__["rect"])(absloc.x - parentLoc.left, absloc.y - parentLoc.top, size[0], size[1]);
    };
    Object.defineProperty(MultiFormGrid.prototype, "asMetaData", {
        /**
         * converts this multiform to a vis metadata
         * @return {IVisMetaData}
         */
        get: function () {
            return this.metaData_;
        },
        enumerable: true,
        configurable: true
    });
    MultiFormGrid.prototype.build = function () {
        //create select option field
        var _this = this;
        //create content
        this.content = this.node;
        var wrap = this.options.wrap || __WEBPACK_IMPORTED_MODULE_0__index__["identity"];
        //create groups for all grid elems
        //TODO how to layout as a grid
        if (this.dims.length === 1) {
            if (this.options.singleRowOptimization) {
                this.grid.forEach(function (elem) { return elem.setContent(wrap(createNode(_this.node, 'div', 'content gridrow'), elem.data, elem.range, elem.pos)); });
            }
            else {
                this.grid.forEach(function (elem) {
                    var n = createNode(_this.node, 'div', 'gridrow');
                    var nn = createNode(n, 'div', 'content');
                    nn.style.display = 'inline-block';
                    elem.setContent(wrap(nn, elem.data, elem.range, elem.pos));
                });
            }
        }
        else {
            var ndim = this.dimSizes;
            for (var i = 0; i < ndim[0]; ++i) {
                var row = createNode(this.node, 'div', 'gridrow');
                for (var j = 0; j < ndim[1]; ++j) {
                    var elem = this.grid[i * ndim[1] + j];
                    var nn = createNode(row, 'div', 'content');
                    nn.style.display = 'inline-block';
                    elem.setContent(wrap(nn, elem.data, elem.range, elem.pos));
                }
            }
        }
        //switch to first
        this.switchTo(this.options.initialVis);
    };
    MultiFormGrid.prototype.destroy = function () {
        this.grid.forEach(function (elem) {
            elem.destroy();
        });
        _super.prototype.destroy.call(this);
    };
    MultiFormGrid.prototype.transform = function (scale, rotate) {
        if (this.grid[0].hasOne) {
            var bak = this.grid[0].transform();
            if (arguments.length > 0) {
                this.grid.forEach(function (g) { return g.transform(scale, rotate); });
                this.fire('transform', {
                    scale: scale,
                    rotate: rotate
                }, bak);
            }
            return bak;
        }
        return {
            scale: [1, 1],
            rotate: 0
        };
    };
    MultiFormGrid.prototype.persist = function () {
        return {
            id: this.actDesc ? this.actDesc.id : null,
            contents: this.grid.map(function (elem) { return elem.persist(); })
        };
    };
    MultiFormGrid.prototype.restore = function (persisted) {
        var that = this;
        if (persisted.id) {
            var selected = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["search"])(this.visses, function (e) { return e.id === persisted.id; });
            if (selected) {
                return this.switchTo(selected).then(function (vis) {
                    //FIXME
                    if (vis && persisted.content && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(vis.restore)) {
                        return Promise.resolve(vis.restore(persisted.content)).then(function () { return that; });
                    }
                    return Promise.resolve(that);
                });
            }
        }
        return Promise.resolve(that);
    };
    MultiFormGrid.prototype.locateGroup = function (range) {
        if (range.isAll || range.isNone) {
            var s = this.size;
            return Promise.resolve(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__geom__["rect"])(0, 0, s[0], s[1]));
        }
        var parentLoc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["offset"])(this.content);
        function relativePos(pos) {
            return {
                x: pos.x - parentLoc.left,
                y: pos.y - parentLoc.top
            };
        }
        function filterTo() {
            var inElems = [], i, matched, g;
            for (i = 0; i < this.grid.length; ++i) {
                g = this.grid[i];
                matched = g.subrange(range);
                if (!matched.isNone) {
                    inElems.push({
                        g: g,
                        pos: relativePos(g.location),
                        r: matched
                    });
                }
            }
            return inElems;
        }
        var inElems = filterTo.call(this);
        if (inElems.length === 1) {
            return inElems[0].g.actVis.locate(inElems[0].r).then(function (loc) {
                return loc ? loc.shift(inElems[0].pos) : loc;
            });
        }
        return Promise.all(inElems.map(function (elem) { return elem.g.actVis.locate(elem.r); })).then(function (locations) {
            //shift the locations according to grid position
            locations = locations.map(function (loc, i) { return loc ? loc.shift(inElems[i].pos) : loc; }).filter(function (loc) { return loc != null; });
            //merge into a single one
            var base = locations[0].aabb(), x = base.x, y = base.y, x2 = base.x2, y2 = base.y2;
            locations.forEach(function (loc) {
                var aab = loc.aabb();
                x = Math.min(x, aab.x);
                y = Math.min(y, aab.y);
                x2 = Math.min(x2, aab.x2);
                y2 = Math.min(y2, aab.y2);
            });
            return Promise.resolve(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__geom__["rect"])(x, y, x2 - x, y2 - y));
        });
    };
    MultiFormGrid.prototype.locateGroupById = function (range) {
        var _this = this;
        return this.data.ids().then(function (ids) {
            return _this.locateGroup(ids.indexOf(range));
        });
    };
    MultiFormGrid.prototype.locate = function () {
        var p = this.actVisPromise || Promise.resolve(null), args = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments);
        return p.then(function (visses) {
            var _this = this;
            if (!visses) {
                return Promise.resolve((arguments.length === 1 ? undefined : new Array(args.length)));
            }
            if (visses.length === 1) {
                return visses[0].locate.apply(visses[0], args);
            }
            else {
                //multiple groups
                if (arguments.length === 1) {
                    return this.locateGroup(arguments[0]);
                }
                else {
                    return Promise.all(args.map(function (arg) { return _this.locateGroup(arg); }));
                }
            }
        });
    };
    MultiFormGrid.prototype.locateById = function () {
        var range = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            range[_i - 0] = arguments[_i];
        }
        var p = this.actVisPromise || Promise.resolve(null), args = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments);
        return p.then(function (visses) {
            var _this = this;
            if (!visses) {
                return Promise.resolve((arguments.length === 1 ? undefined : new Array(args.length)));
            }
            if (visses.length === 1) {
                return visses[0].locateById.apply(visses[0], args);
            }
            else {
                //multiple groups
                if (args.length === 1) {
                    return this.locateGroupById(args[0]);
                }
                else {
                    return Promise.all(args.map(function (arg) { return _this.locateGroupById(arg); }));
                }
            }
        });
    };
    Object.defineProperty(MultiFormGrid.prototype, "act", {
        /**
         * returns the current selected vis technique description
         * @returns {plugins.IPluginDesc}
         */
        get: function () {
            return this.actDesc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiFormGrid.prototype, "actLoader", {
        get: function () {
            return this.actVisPromise;
        },
        enumerable: true,
        configurable: true
    });
    MultiFormGrid.prototype.gridSize = function (raw) {
        if (raw === void 0) { raw = false; }
        var sizes = this.grid.map(raw ? function (elem) { return elem.rawSize; } : function (elem) { return elem.size; });
        if (this.dims.length === 1) {
            //vertically groups only
            return {
                cols: [max(sizes, function (s) { return s[0]; })],
                rows: sizes.map(function (s) { return s[1]; }),
                grid: sizes.map(function (s) { return [s]; })
            };
        }
        else {
            var cols_1 = this.dims[1].length;
            var grid_1 = this.dims[0].map(function (row, i) { return sizes.slice(i * cols_1, (i + 1) * cols_1); });
            return {
                cols: this.dims[1].map(function (d, i) { return max(grid_1, function (row) { return row[i][0]; }); }),
                rows: grid_1.map(function (row) { return max(row, function (s) { return s[1]; }); }),
                grid: grid_1
            };
        }
    };
    Object.defineProperty(MultiFormGrid.prototype, "size", {
        get: function () {
            var gridSize = this.gridSize();
            return [sum(gridSize.cols), sum(gridSize.rows)];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiFormGrid.prototype, "rawSize", {
        get: function () {
            var gridSize = this.gridSize(true);
            return [sum(gridSize.cols), sum(gridSize.rows)];
        },
        enumerable: true,
        configurable: true
    });
    MultiFormGrid.prototype.switchTo = function (param) {
        var _this = this;
        var vis = selectVis(param, this.visses);
        if (vis === this.actDesc) {
            return this.actVisPromise; //already selected
        }
        //gracefully destroy
        this.grid.forEach(function (elem) { return elem.switchDestroy(); });
        //switch and trigger event
        var bak = this.actDesc;
        this.actDesc = vis;
        this.markReady(false);
        this.fire('change', vis, bak);
        this.actVisPromise = null;
        if (vis) {
            //load the plugin and create the instance
            return this.actVisPromise = vis.load().then(function (plugin) {
                if (_this.actDesc !== vis) {
                    return null;
                }
                var options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["mixin"])({}, _this.options.all, _this.options[vis.id] || {});
                var r = _this.grid.map(function (elem) {
                    return elem.build(plugin, options);
                });
                var c = r.length;
                r.forEach(function (ri) {
                    ri.on('ready', function () {
                        c--;
                        if (c === 0) {
                            _this.markReady();
                        }
                    });
                });
                _this.fire('changed', vis, bak);
                return r;
            });
        }
        else {
            return Promise.resolve([]);
        }
    };
    return MultiFormGrid;
}(__WEBPACK_IMPORTED_MODULE_2__vis__["AVisInstance"]));
/**
 * computes the selectable vis techniques for a given set of multi form objects
 * @param forms
 * @return {*}
 */
function toAvailableVisses(forms) {
    if (forms.length === 0) {
        return [];
    }
    if (forms.length === 1) {
        return forms[0].visses;
    }
    //intersection of all
    return forms[0].visses.filter(function (vis) { return forms.every(function (f) { return f.visses.indexOf(vis) >= 0; }); });
}
function addIconVisChooser(toolbar) {
    var forms = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        forms[_i - 1] = arguments[_i];
    }
    var s = document.createElement('div');
    toolbar.insertBefore(s, toolbar.firstChild);
    var visses = toAvailableVisses(forms);
    visses.forEach(function (v) {
        var child = createNode(s, 'i');
        v.iconify(child);
        child.__data__ = v;
        child.onclick = function () { return forms.forEach(function (f) { return f.switchTo(v); }); };
    });
}
function addSelectVisChooser(toolbar) {
    var forms = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        forms[_i - 1] = arguments[_i];
    }
    var s = document.createElement('select');
    toolbar.insertBefore(s, toolbar.firstChild);
    var visses = toAvailableVisses(forms);
    visses.forEach(function (v, i) {
        var child = createNode(s, 'option');
        child.__data__ = v;
        child.setAttribute('value', String(i));
        child.textContent = v.name;
    });
    // use only the current selection of the first form
    if (forms[0]) {
        s.selectedIndex = visses.indexOf(forms[0].act);
    }
    s.onchange = function () { return forms.forEach(function (f) { return f.switchTo(visses[s.selectedIndex]); }); };
}
function create(data, parent, options) {
    return new MultiForm(data, parent, options);
}
function createGrid(data, range, parent, viewFactory, options) {
    return new MultiFormGrid(data, range, parent, viewFactory, options);
}


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graph__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__idtype__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datatype__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plugin__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__session__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(exports, "graphModule", function() { return graphModule; });
/* harmony export (binding) */ __webpack_require__.d(exports, "cat", function() { return cat; });
/* harmony export (binding) */ __webpack_require__.d(exports, "op", function() { return op; });
/* harmony export (immutable) */ exports["ref"] = ref;
/* harmony export (binding) */ __webpack_require__.d(exports, "ObjectNode", function() { return ObjectNode; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ActionMetaData", function() { return ActionMetaData; });
/* harmony export (immutable) */ exports["meta"] = meta;
/* harmony export (immutable) */ exports["action"] = action;
/* harmony export (binding) */ __webpack_require__.d(exports, "ActionNode", function() { return ActionNode; });
/* harmony export (binding) */ __webpack_require__.d(exports, "StateNode", function() { return StateNode; });
/* harmony export (binding) */ __webpack_require__.d(exports, "DEFAULT_DURATION", function() { return DEFAULT_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(exports, "DEFAULT_TRANSITION", function() { return DEFAULT_TRANSITION; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SlideNode", function() { return SlideNode; });
/* harmony export (immutable) */ exports["compress"] = compress;
/* harmony export (binding) */ __webpack_require__.d(exports, "ProvenanceGraphDim", function() { return ProvenanceGraphDim; });
/* harmony export (binding) */ __webpack_require__.d(exports, "LocalStorageProvenanceGraphManager", function() { return LocalStorageProvenanceGraphManager; });
/* harmony export (immutable) */ exports["toSlidePath"] = toSlidePath;
/* harmony export (binding) */ __webpack_require__.d(exports, "RemoteStorageProvenanceGraphManager", function() { return RemoteStorageProvenanceGraphManager; });
/* harmony export (binding) */ __webpack_require__.d(exports, "MixedStorageProvenanceGraphManager", function() { return MixedStorageProvenanceGraphManager; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ProvenanceGraph", function() { return ProvenanceGraph; });
/* harmony export (immutable) */ exports["findLatestPath"] = findLatestPath;
/* harmony export (immutable) */ exports["createDummy"] = createDummy;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};








var graphModule = __WEBPACK_IMPORTED_MODULE_2__graph__;
/**
 * list of categories for actions and objects
 */
var cat = {
    data: 'data',
    selection: 'selection',
    visual: 'visual',
    layout: 'layout',
    logic: 'logic',
    custom: 'custom',
    annotation: 'annotation'
};
/**
 * list of operations
 */
var op = {
    create: 'create',
    update: 'update',
    remove: 'remove'
};
/**
 * creates an object reference to the given object
 * @param v
 * @param name
 * @param category
 * @param hash
 * @returns {{v: T, name: string, category: string}}
 */
function ref(v, name, category, hash) {
    if (category === void 0) { category = cat.data; }
    if (hash === void 0) { hash = name + '_' + category; }
    return {
        v: Promise.resolve(v),
        value: v,
        name: name,
        category: category,
        hash: hash
    };
}
/**
 * tries to persist an object value supporting datatypes and DOM elements having an id
 * @param v
 * @returns {any}
 */
function persistData(v) {
    if (v instanceof Element) {
        var e = v, id = e.getAttribute('id');
        return { type: 'element', id: id };
    }
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__datatype__["isDataType"])(v)) {
        var e = v;
        return { type: 'dataset', id: e.desc.id, persist: e.persist() };
    }
    if (typeof v === 'string' || typeof v === 'number') {
        return { type: 'primitive', v: v };
    }
    return null;
}
function restoreData(v) {
    if (!v) {
        return null;
    }
    switch (v.type) {
        case 'element':
            if (v.id) {
                return Promise.resolve(document.getElementById(v.id));
            }
            return null;
        case 'dataset':
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__data__["get"])(v.persist);
        case 'primitive':
            return Promise.resolve(v.v);
    }
    return null;
}
/**
 * a graph node of type object
 */
var ObjectNode = (function (_super) {
    __extends(ObjectNode, _super);
    function ObjectNode(_v, name, category, hash, description) {
        if (category === void 0) { category = cat.data; }
        if (hash === void 0) { hash = name + '_' + category; }
        if (description === void 0) { description = ''; }
        _super.call(this, 'object');
        this._v = _v;
        this._persisted = null;
        if (_v != null) {
            this._promise = Promise.resolve(_v);
        }
        _super.prototype.setAttr.call(this, 'name', name);
        _super.prototype.setAttr.call(this, 'category', category);
        _super.prototype.setAttr.call(this, 'hash', hash);
        _super.prototype.setAttr.call(this, 'description', description);
    }
    Object.defineProperty(ObjectNode.prototype, "value", {
        get: function () {
            this.checkPersisted();
            return this._v;
        },
        set: function (v) {
            this._v = v;
            this._promise = v == null ? null : Promise.resolve(v);
            this._persisted = null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * checks whether the persisted value was already restored
     */
    ObjectNode.prototype.checkPersisted = function () {
        var _this = this;
        if (this._persisted != null) {
            this._promise = restoreData(this._persisted);
            if (this._promise) {
                this._promise.then(function (v) {
                    _this._v = v;
                });
            }
            this._persisted = null;
        }
    };
    Object.defineProperty(ObjectNode.prototype, "v", {
        get: function () {
            this.checkPersisted();
            return this._promise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectNode.prototype, "name", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'name', '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectNode.prototype, "category", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'category', '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectNode.prototype, "hash", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'hash', '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectNode.prototype, "description", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'description', '');
        },
        enumerable: true,
        configurable: true
    });
    ObjectNode.prototype.persist = function () {
        var r = _super.prototype.persist.call(this);
        if (!r.attrs) {
            r.attrs = {};
        }
        r.attrs.v = this._persisted ? this._persisted : persistData(this.value);
        return r;
    };
    ObjectNode.prototype.restore = function (p) {
        this._persisted = p.attrs.v;
        delete p.attrs.v;
        _super.prototype.restore.call(this, p);
        return this;
    };
    ObjectNode.restore = function (p) {
        var r = new ObjectNode(null, p.attrs.name, p.attrs.category, p.attrs.hash || p.attrs.name + '_' + p.attrs.category);
        return r.restore(p);
    };
    Object.defineProperty(ObjectNode.prototype, "createdBy", {
        get: function () {
            var r = this.incoming.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('creates'))[0];
            return r ? r.source : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectNode.prototype, "removedBy", {
        get: function () {
            var r = this.incoming.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('removes'))[0];
            return r ? r.source : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectNode.prototype, "requiredBy", {
        get: function () {
            return this.incoming.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('requires')).map(function (e) { return e.source; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectNode.prototype, "partOf", {
        get: function () {
            return this.incoming.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('consistsOf')).map(function (e) { return e.source; });
        },
        enumerable: true,
        configurable: true
    });
    ObjectNode.prototype.toString = function () {
        return this.name;
    };
    return ObjectNode;
}(__WEBPACK_IMPORTED_MODULE_2__graph__["GraphNode"]));
function getCurrentUser() {
    return __WEBPACK_IMPORTED_MODULE_7__session__["retrieve"]('username', 'Anonymous');
}
/**
 * additional data about a performed action
 */
var ActionMetaData = (function () {
    function ActionMetaData(category, operation, name, timestamp, user) {
        if (timestamp === void 0) { timestamp = Date.now(); }
        if (user === void 0) { user = getCurrentUser(); }
        this.category = category;
        this.operation = operation;
        this.name = name;
        this.timestamp = timestamp;
        this.user = user;
    }
    ActionMetaData.restore = function (p) {
        return new ActionMetaData(p.category, p.operation, p.name, p.timestamp, p.user);
    };
    ActionMetaData.prototype.eq = function (that) {
        return this.category === that.category && this.operation === that.operation && this.name === that.name;
    };
    /**
     * checks whether this metadata are the inverse of the given one in terms of category and operation
     * @param that
     * @returns {boolean}
     */
    ActionMetaData.prototype.inv = function (that) {
        if (this.category !== that.category) {
            return false;
        }
        if (this.operation === op.update) {
            return that.operation === op.update;
        }
        return this.operation === op.create ? that.operation === op.remove : that.operation === op.create;
    };
    ActionMetaData.prototype.toString = function () {
        return this.category + ":" + this.operation + " " + this.name;
    };
    return ActionMetaData;
}());
function meta(name, category, operation, timestamp, user) {
    if (category === void 0) { category = cat.data; }
    if (operation === void 0) { operation = op.update; }
    if (timestamp === void 0) { timestamp = Date.now(); }
    if (user === void 0) { user = getCurrentUser(); }
    return new ActionMetaData(category, operation, name, timestamp, user);
}
/**
 * creates an action given the data
 * @param meta
 * @param id
 * @param f
 * @param inputs
 * @param parameter
 * @returns {{meta: ActionMetaData, id: string, f: (function(IObjectRef<any>[], any, ProvenanceGraph): ICmdResult), inputs: IObjectRef<any>[], parameter: any}}
 */
function action(meta, id, f, inputs, parameter) {
    if (inputs === void 0) { inputs = []; }
    if (parameter === void 0) { parameter = {}; }
    return {
        meta: meta,
        id: id,
        f: f,
        inputs: inputs,
        parameter: parameter
    };
}
/**
 * comparator by index
 * @param a
 * @param b
 * @returns {number}
 */
function byIndex(a, b) {
    var ai = +a.getAttr('index', 0);
    var bi = +b.getAttr('index', 0);
    return ai - bi;
}
var ActionNode = (function (_super) {
    __extends(ActionNode, _super);
    function ActionNode(meta, f_id, f, parameter) {
        if (parameter === void 0) { parameter = {}; }
        _super.call(this, 'action');
        this.f = f;
        _super.prototype.setAttr.call(this, 'meta', meta);
        _super.prototype.setAttr.call(this, 'f_id', f_id);
        _super.prototype.setAttr.call(this, 'parameter', parameter);
    }
    ActionNode.prototype.clone = function () {
        return new ActionNode(this.meta, this.f_id, this.f, this.parameter);
    };
    Object.defineProperty(ActionNode.prototype, "name", {
        get: function () {
            return this.meta.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "meta", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'meta');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "f_id", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'f_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "parameter", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'parameter');
        },
        set: function (value) {
            _super.prototype.setAttr.call(this, 'parameter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "onceExecuted", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'onceExecuted', false);
        },
        set: function (value) {
            if (this.onceExecuted !== value) {
                _super.prototype.setAttr.call(this, 'onceExecuted', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ActionNode.restore = function (r, factory) {
        var a = new ActionNode(ActionMetaData.restore(r.attrs.meta), r.attrs.f_id, factory(r.attrs.f_id), r.attrs.parameter);
        return a.restore(r);
    };
    ActionNode.prototype.toString = function () {
        return this.meta.name;
    };
    Object.defineProperty(ActionNode.prototype, "inversedBy", {
        get: function () {
            var r = this.incoming.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('inverses'))[0];
            return r ? r.source : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "inverses", {
        /**
         * inverses another action
         * @returns {ActionNode}
         */
        get: function () {
            var r = this.outgoing.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('inverses'))[0];
            return r ? r.target : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "isInverse", {
        get: function () {
            return this.outgoing.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('inverses'))[0] != null;
        },
        enumerable: true,
        configurable: true
    });
    ActionNode.prototype.getOrCreateInverse = function (graph) {
        var i = this.inversedBy;
        if (i) {
            return i;
        }
        if (this.inverter) {
            return graph.createInverse(this, this.inverter);
        }
        this.inverter = null; //not needed anymore
        return null;
    };
    ActionNode.prototype.updateInverse = function (graph, inverter) {
        var i = this.inversedBy;
        if (i) {
            var c = inverter.call(this, this.requires, this.creates, this.removes);
            i.parameter = c.parameter;
            this.inverter = null;
        }
        else if (!this.isInverse) {
            //create inverse action immediatelly
            graph.createInverse(this, inverter);
            this.inverter = null;
        }
        else {
            this.inverter = inverter;
        }
    };
    ActionNode.prototype.execute = function (graph, withinMilliseconds) {
        var r = this.f.call(this, this.requires, this.parameter, graph, withinMilliseconds);
        return Promise.resolve(r);
    };
    ActionNode.prototype.equals = function (that) {
        if (!(this.meta.category === that.meta.category && that.meta.operation === that.meta.operation)) {
            return false;
        }
        if (this.f_id !== that.f_id) {
            return false;
        }
        //TODO check parameters if they are the same
        return true;
    };
    Object.defineProperty(ActionNode.prototype, "uses", {
        get: function () {
            return this.outgoing.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"](/(creates|removes|requires)/)).map(function (e) { return e.target; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "creates", {
        get: function () {
            return this.outgoing.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('creates')).map(function (e) { return e.target; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "removes", {
        get: function () {
            return this.outgoing.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('removes')).sort(byIndex).map(function (e) { return e.target; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "requires", {
        get: function () {
            return this.outgoing.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('requires')).sort(byIndex).map(function (e) { return e.target; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "resultsIn", {
        get: function () {
            var r = this.outgoing.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('resultsIn'))[0];
            return r ? r.target : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionNode.prototype, "previous", {
        get: function () {
            var r = this.incoming.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('next'))[0];
            return r ? r.source : null;
        },
        enumerable: true,
        configurable: true
    });
    return ActionNode;
}(__WEBPACK_IMPORTED_MODULE_2__graph__["GraphNode"]));
/**
 * a state node is one state in the visual exploration consisting of an action creating it and one or more following ones.
 * In addition, a state is characterized by the set of active object nodes
 */
var StateNode = (function (_super) {
    __extends(StateNode, _super);
    function StateNode(name, description) {
        if (description === void 0) { description = ''; }
        _super.call(this, 'state');
        _super.prototype.setAttr.call(this, 'name', name);
        _super.prototype.setAttr.call(this, 'description', description);
    }
    Object.defineProperty(StateNode.prototype, "name", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'name');
        },
        set: function (value) {
            _super.prototype.setAttr.call(this, 'name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "description", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'description', '');
        },
        set: function (value) {
            _super.prototype.setAttr.call(this, 'description', value);
        },
        enumerable: true,
        configurable: true
    });
    StateNode.restore = function (p) {
        var r = new StateNode(p.attrs.name);
        return r.restore(p);
    };
    Object.defineProperty(StateNode.prototype, "consistsOf", {
        /**
         * this state consists of the following objects
         * @returns {ObjectNode<any>[]}
         */
        get: function () {
            return this.outgoing.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('consistsOf')).map(function (e) { return e.target; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "resultsFrom", {
        /**
         * returns the actions leading to this state
         * @returns {ActionNode[]}
         */
        get: function () {
            return this.incoming.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('resultsIn')).map(function (e) { return e.source; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "creator", {
        /**
         *
         * @returns {any}
         */
        get: function () {
            //results and not a inversed actions
            var from = this.incoming.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('resultsIn')).map(function (e) { return e.source; }).filter(function (s) { return !s.isInverse; });
            if (from.length === 0) {
                return null;
            }
            return from[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "next", {
        get: function () {
            return this.outgoing.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('next')).map(function (e) { return e.target; }).filter(function (s) { return !s.isInverse; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "previousState", {
        get: function () {
            var a = this.creator;
            if (a) {
                return a.previous;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "previousStates", {
        get: function () {
            return this.resultsFrom.map(function (n) { return n.previous; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "nextStates", {
        get: function () {
            return this.next.map(function (n) { return n.resultsIn; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "nextState", {
        get: function () {
            var r = this.next[0];
            return r ? r.resultsIn : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "path", {
        get: function () {
            var p = this.previousState, r = [];
            r.unshift(this);
            if (p) {
                p.pathImpl(r);
            }
            return r;
        },
        enumerable: true,
        configurable: true
    });
    StateNode.prototype.pathImpl = function (r) {
        var p = this.previousState;
        r.unshift(this);
        if (p && r.indexOf(p) < 0) {
            //console.log(p.toString() + ' path '+ r.join(','));
            p.pathImpl(r);
        }
    };
    StateNode.prototype.toString = function () {
        return this.name;
    };
    return StateNode;
}(__WEBPACK_IMPORTED_MODULE_2__graph__["GraphNode"]));
var DEFAULT_DURATION = 1500; //ms
var DEFAULT_TRANSITION = 0; //ms
var SlideNode = (function (_super) {
    __extends(SlideNode, _super);
    function SlideNode() {
        _super.call(this, 'story');
    }
    Object.defineProperty(SlideNode.prototype, "name", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'name', '');
        },
        set: function (value) {
            _super.prototype.setAttr.call(this, 'name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideNode.prototype, "description", {
        get: function () {
            return _super.prototype.getAttr.call(this, 'description', '');
        },
        set: function (value) {
            _super.prototype.setAttr.call(this, 'description', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideNode.prototype, "isTextOnly", {
        get: function () {
            return !this.outgoing.some(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('jumpTo'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideNode.prototype, "state", {
        get: function () {
            var edge = this.outgoing.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('jumpTo'))[0];
            return edge ? edge.target : null;
        },
        enumerable: true,
        configurable: true
    });
    SlideNode.restore = function (dump) {
        return new SlideNode().restore(dump);
    };
    Object.defineProperty(SlideNode.prototype, "next", {
        get: function () {
            var n = this.outgoing.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('next'))[0];
            return n ? n.target : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideNode.prototype, "nexts", {
        get: function () {
            return this.outgoing.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('next')).map(function (n) { return n.target; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideNode.prototype, "previous", {
        get: function () {
            var n = this.incoming.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('next'))[0];
            return n ? n.source : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideNode.prototype, "slideIndex", {
        get: function () {
            var p = this.previous;
            return 1 + (p ? p.slideIndex : 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideNode.prototype, "duration", {
        get: function () {
            return this.getAttr('duration', DEFAULT_DURATION);
        },
        set: function (value) {
            this.setAttr('duration', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideNode.prototype, "transition", {
        /**
         * the number of milliseconds for the transitions
         * @returns {number}
         */
        get: function () {
            return this.getAttr('transition', DEFAULT_TRANSITION);
        },
        set: function (value) {
            this.setAttr('transition', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideNode.prototype, "annotations", {
        get: function () {
            return this.getAttr('annotations', []);
        },
        enumerable: true,
        configurable: true
    });
    SlideNode.prototype.setAnnotation = function (index, ann) {
        var old = this.annotations;
        old[index] = ann;
        this.setAttr('annotations', old);
    };
    SlideNode.prototype.updateAnnotation = function (ann) {
        //since it is a reference just updated
        this.setAttr('annotations', this.annotations);
    };
    SlideNode.prototype.removeAnnotation = function (index) {
        var old = this.annotations;
        old.splice(index, 1);
        this.setAttr('annotations', old);
    };
    SlideNode.prototype.removeAnnotationElem = function (elem) {
        var old = this.annotations;
        old.splice(old.indexOf(elem), 1);
        this.setAttr('annotations', old);
    };
    SlideNode.prototype.pushAnnotation = function (ann) {
        var old = this.annotations;
        old.push(ann);
        this.setAttr('annotations', old);
        this.fire('push-annotations', ann, old);
    };
    Object.defineProperty(SlideNode.prototype, "isStart", {
        get: function () {
            return this.previous == null;
        },
        enumerable: true,
        configurable: true
    });
    SlideNode.makeText = function (title) {
        var s = new SlideNode();
        if (title) {
            s.pushAnnotation({
                type: 'text',
                pos: [25, 25],
                text: '# ${name}'
            });
            s.name = title;
        }
        return s;
    };
    return SlideNode;
}(__WEBPACK_IMPORTED_MODULE_2__graph__["GraphNode"]));
function removeNoops(path) {
    return path.filter(function (a) { return a.f_id !== 'noop'; });
}
function compositeCompressor(cs) {
    return function (path) {
        path = removeNoops(path);
        var before;
        do {
            before = path.length;
            cs.forEach(function (c) { return path = c(path); });
        } while (before > path.length);
        return path;
    };
}
function createCompressor(path) {
    var toload = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__plugin__["list"])('actionCompressor').filter(function (plugin) {
        return path.some(function (action) { return action.f_id.match(plugin.matches) != null; });
    });
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__plugin__["load"])(toload).then(function (loaded) {
        return compositeCompressor(loaded.map(function (l) { return l.factory; }));
    });
}
/**
 * returns a compressed version of the paths where just the last selection operation remains
 * @param path
 */
function compress(path) {
    //return Promise.resolve(path);
    //TODO find a strategy how to compress but also invert skipped actions
    return createCompressor(path).then(function (compressor) {
        //return path;
        var before;
        do {
            before = path.length;
            path = compressor(path);
        } while (before > path.length);
        return path;
    });
}
/**
 * find common element in the list of two elements returning the indices of the first same item
 * @param a
 * @param b
 * @returns {any}
 */
function findCommon(a, b) {
    var c = 0;
    while (c < a.length && c < b.length && a[c] === b[c]) {
        c++;
    }
    if (c === 0) {
        return null;
    }
    return {
        i: c - 1,
        j: c - 1
    };
}
function asFunction(i) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(i)) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["constant"])(i);
    }
    return i;
}
function noop(inputs, parameter) {
    return {
        inverse: createNoop()
    };
}
function createNoop() {
    return {
        meta: meta('noop', cat.custom),
        id: 'noop',
        f: noop,
        inputs: [],
        parameter: {}
    };
}
function createLazyCmdFunctionFactory() {
    var facts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__plugin__["list"])('actionFactory');
    function resolveFun(id) {
        if (id === 'noop') {
            return Promise.resolve(noop);
        }
        var factory = facts.filter(function (f) { return id.match(f.creates) != null; })[0];
        if (factory == null) {
            return Promise.reject('no factory found for ' + id);
        }
        return factory.load().then(function (f) { return f.factory(id); });
    }
    var lazyFunction = function (id) {
        var _resolved = null;
        return function (inputs, parameters) {
            var that = this, args = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["argList"])(arguments);
            if (_resolved == null) {
                _resolved = resolveFun(id);
            }
            return _resolved.then(function (f) { return f.apply(that, args); });
        };
    };
    return function (id) { return lazyFunction(id); };
}
function provenanceGraphFactory() {
    var factory = createLazyCmdFunctionFactory();
    var types = {
        action: ActionNode,
        state: StateNode,
        object: ObjectNode,
        story: SlideNode
    };
    return {
        makeNode: function (n) { return types[n.type].restore(n, factory); },
        makeEdge: function (n, lookup) { return ((new __WEBPACK_IMPORTED_MODULE_2__graph__["GraphEdge"]()).restore(n, lookup)); }
    };
}
var ProvenanceGraphDim;
(function (ProvenanceGraphDim) {
    ProvenanceGraphDim[ProvenanceGraphDim["Action"] = 0] = "Action";
    ProvenanceGraphDim[ProvenanceGraphDim["Object"] = 1] = "Object";
    ProvenanceGraphDim[ProvenanceGraphDim["State"] = 2] = "State";
    ProvenanceGraphDim[ProvenanceGraphDim["Slide"] = 3] = "Slide";
})(ProvenanceGraphDim || (ProvenanceGraphDim = {}));
var LocalStorageProvenanceGraphManager = (function () {
    function LocalStorageProvenanceGraphManager(options) {
        if (options === void 0) { options = {}; }
        this.options = {
            storage: localStorage,
            prefix: 'clue',
            application: 'unknown'
        };
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["mixin"])(this.options, options);
    }
    LocalStorageProvenanceGraphManager.prototype.list = function () {
        var _this = this;
        var lists = JSON.parse(this.options.storage.getItem(this.options.prefix + '_provenance_graphs') || '[]');
        var l = lists.map(function (id) { return JSON.parse(_this.options.storage.getItem(_this.options.prefix + '_provenance_graph.' + id)); });
        return Promise.resolve(l);
    };
    LocalStorageProvenanceGraphManager.prototype.getGraph = function (desc) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__graph__["LocalStorageGraph"].load(desc, provenanceGraphFactory(), this.options.storage));
    };
    LocalStorageProvenanceGraphManager.prototype.get = function (desc) {
        return this.getGraph(desc).then(function (impl) { return new ProvenanceGraph(desc, impl); });
    };
    LocalStorageProvenanceGraphManager.prototype.clone = function (graph) {
        var desc = this.createDesc();
        return this.getGraph(desc).then(function (new_) {
            new_.restoreDump(graph.persist(), provenanceGraphFactory());
            return new ProvenanceGraph(desc, new_);
        });
    };
    LocalStorageProvenanceGraphManager.prototype.import = function (json) {
        var desc = this.createDesc();
        return this.getGraph(desc).then(function (new_) {
            new_.restoreDump(json, provenanceGraphFactory());
            return new ProvenanceGraph(desc, new_);
        });
    };
    LocalStorageProvenanceGraphManager.prototype.delete = function (desc) {
        var lists = JSON.parse(this.options.storage.getItem(this.options.prefix + '_provenance_graphs') || '[]');
        lists.splice(lists.indexOf(desc.id), 1);
        __WEBPACK_IMPORTED_MODULE_2__graph__["LocalStorageGraph"].delete(desc);
        //just remove from the list
        this.options.storage.setItem(this.options.prefix + '_provenance_graphs', JSON.stringify(lists));
        return Promise.resolve(true);
    };
    LocalStorageProvenanceGraphManager.prototype.createDesc = function () {
        var _this = this;
        var lists = JSON.parse(this.options.storage.getItem(this.options.prefix + '_provenance_graphs') || '[]');
        var id = this.options.prefix + (lists.length > 0 ? String(1 + Math.max.apply(Math, lists.map(function (d) { return parseInt(d.slice(_this.options.prefix.length), 10); }))) : '0');
        var desc = {
            type: 'provenance_graph',
            name: 'Local Workspace#' + id,
            fqname: this.options.prefix + '.Provenance Graph #' + id,
            id: id,
            local: true,
            size: [0, 0],
            attrs: {
                graphtype: 'provenance_graph',
                of: this.options.application
            },
            creator: getCurrentUser(),
            ts: Date.now(),
            description: ''
        };
        lists.push(id);
        this.options.storage.setItem(this.options.prefix + '_provenance_graphs', JSON.stringify(lists));
        this.options.storage.setItem(this.options.prefix + '_provenance_graph.' + id, JSON.stringify(desc));
        return desc;
    };
    LocalStorageProvenanceGraphManager.prototype.create = function () {
        var desc = this.createDesc();
        return this.get(desc);
    };
    return LocalStorageProvenanceGraphManager;
}());
function toSlidePath(s) {
    var r = [];
    while (s) {
        if (r.indexOf(s) >= 0) {
            return r;
        }
        r.push(s);
        s = s.next;
    }
    return r;
}
var RemoteStorageProvenanceGraphManager = (function () {
    function RemoteStorageProvenanceGraphManager(options) {
        if (options === void 0) { options = {}; }
        this.options = {
            application: 'unknown'
        };
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["mixin"])(this.options, options);
    }
    RemoteStorageProvenanceGraphManager.prototype.list = function () {
        var _this = this;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__data__["list"])(function (d) { return d.desc.type === 'graph' && d.desc.attrs.graphtype === 'provenance_graph' && d.desc.attrs.of === _this.options.application; }).then(function (d) { return d.map(function (di) { return di.desc; }); });
    };
    RemoteStorageProvenanceGraphManager.prototype.getGraph = function (desc) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__data__["get"])(desc.id)
            .then(function (graph) { return graph.impl(provenanceGraphFactory()); });
    };
    RemoteStorageProvenanceGraphManager.prototype.get = function (desc) {
        return this.getGraph(desc).then(function (impl) { return new ProvenanceGraph(desc, impl); });
    };
    RemoteStorageProvenanceGraphManager.prototype.delete = function (desc) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__data__["remove"])(desc);
    };
    RemoteStorageProvenanceGraphManager.prototype.import = function (json) {
        var desc = {
            type: 'graph',
            attrs: {
                graphtype: 'provenance_graph',
                of: this.options.application
            },
            name: 'Workspace for ' + this.options.application,
            creator: getCurrentUser(),
            ts: Date.now(),
            description: '',
            nodes: json.nodes,
            edges: json.edges
        };
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__data__["upload"])(desc)
            .then(function (graph) { return graph.impl(provenanceGraphFactory()); })
            .then(function (impl) { return new ProvenanceGraph(impl.desc, impl); });
    };
    RemoteStorageProvenanceGraphManager.prototype.create = function () {
        var desc = {
            type: 'graph',
            attrs: {
                graphtype: 'provenance_graph',
                of: this.options.application
            },
            name: 'Workspace for ' + this.options.application,
            creator: getCurrentUser(),
            ts: Date.now(),
            description: ''
        };
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__data__["upload"])(desc)
            .then(function (graph) { return graph.impl(provenanceGraphFactory()); })
            .then(function (impl) { return new ProvenanceGraph(impl.desc, impl); });
    };
    return RemoteStorageProvenanceGraphManager;
}());
var MixedStorageProvenanceGraphManager = (function () {
    function MixedStorageProvenanceGraphManager(options) {
        if (options === void 0) { options = {}; }
        this.remote = new RemoteStorageProvenanceGraphManager(options);
        this.local = new LocalStorageProvenanceGraphManager(options);
    }
    MixedStorageProvenanceGraphManager.prototype.listRemote = function () {
        return this.remote.list();
    };
    MixedStorageProvenanceGraphManager.prototype.listLocal = function () {
        return this.local.list();
    };
    MixedStorageProvenanceGraphManager.prototype.list = function () {
        return Promise.all([this.listLocal(), this.listRemote()]).then(function (arr) { return arr[0].concat(arr[1]); });
    };
    MixedStorageProvenanceGraphManager.prototype.delete = function (desc) {
        if (desc.local) {
            return this.local.delete(desc);
        }
        else {
            return this.remote.delete(desc);
        }
    };
    MixedStorageProvenanceGraphManager.prototype.get = function (desc) {
        if (desc.local) {
            return this.local.get(desc);
        }
        else {
            return this.remote.get(desc);
        }
    };
    MixedStorageProvenanceGraphManager.prototype.getGraph = function (desc) {
        if (desc.local) {
            return this.local.getGraph(desc);
        }
        else {
            return this.remote.getGraph(desc);
        }
    };
    MixedStorageProvenanceGraphManager.prototype.cloneLocal = function (desc) {
        return this.getGraph(desc).then(this.local.clone.bind(this.local));
    };
    MixedStorageProvenanceGraphManager.prototype.importLocal = function (json) {
        return this.local.import(json);
    };
    MixedStorageProvenanceGraphManager.prototype.importRemote = function (json) {
        return this.remote.import(json);
    };
    MixedStorageProvenanceGraphManager.prototype.import = function (json) {
        return this.importLocal(json);
    };
    MixedStorageProvenanceGraphManager.prototype.createLocal = function () {
        return this.local.create();
    };
    MixedStorageProvenanceGraphManager.prototype.createRemote = function () {
        return this.remote.create();
    };
    MixedStorageProvenanceGraphManager.prototype.create = function () {
        return this.createLocal();
    };
    return MixedStorageProvenanceGraphManager;
}());
function findMetaObject(find) {
    return function (obj) { return find === obj || ((obj.value === null || obj.value === find.value) && (find.hash === obj.hash)); };
}
var ProvenanceGraph = (function (_super) {
    __extends(ProvenanceGraph, _super);
    function ProvenanceGraph(desc, backend) {
        _super.call(this, desc);
        this.backend = backend;
        this._actions = [];
        this._objects = [];
        this._states = [];
        this._slides = [];
        this.act = null;
        this.lastAction = null;
        //currently executing promise
        this.currentlyRunning = false;
        this.executeCurrentActionWithin = -1;
        this.nextQueue = [];
        this.propagate(this.backend, 'sync', 'add_edge', 'add_node', 'sync_node', 'sync_edge', 'sync_start');
        if (this.backend.nnodes === 0) {
            this.act = new StateNode('Start');
            this._states.push(this.act);
            this.backend.addNode(this.act);
        }
        else {
            var act = desc.act;
            this._actions = this.backend.nodes.filter(function (n) { return (n instanceof ActionNode); });
            this._objects = this.backend.nodes.filter(function (n) { return (n instanceof ObjectNode); });
            this._states = this.backend.nodes.filter(function (n) { return (n instanceof StateNode); });
            this._slides = this.backend.nodes.filter(function (n) { return (n instanceof SlideNode); });
            this.act = (act >= 0 ? this.getStateById(act) : this._states[0]);
        }
    }
    Object.defineProperty(ProvenanceGraph.prototype, "isEmpty", {
        get: function () {
            return this._states.length <= 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProvenanceGraph.prototype, "dim", {
        get: function () {
            return [this._actions.length, this._objects.length, this._states.length, this._slides.length];
        },
        enumerable: true,
        configurable: true
    });
    ProvenanceGraph.prototype.ids = function (range) {
        if (range === void 0) { range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__range__["all"])(); }
        var to_id = function (a) { return a.id; };
        var actions = __WEBPACK_IMPORTED_MODULE_4__range__["Range1D"].from(this._actions.map(to_id));
        var objects = __WEBPACK_IMPORTED_MODULE_4__range__["Range1D"].from(this._objects.map(to_id));
        var states = __WEBPACK_IMPORTED_MODULE_4__range__["Range1D"].from(this._states.map(to_id));
        var stories = __WEBPACK_IMPORTED_MODULE_4__range__["Range1D"].from(this._slides.map(to_id));
        return Promise.resolve(range.preMultiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__range__["list"])(actions, objects, states, stories)));
    };
    ProvenanceGraph.prototype.selectState = function (state, op, type, extras) {
        if (op === void 0) { op = __WEBPACK_IMPORTED_MODULE_3__idtype__["SelectOperation"].SET; }
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_3__idtype__["defaultSelectionType"]; }
        if (extras === void 0) { extras = {}; }
        this.fire('select_state,select_state_' + type, state, type, op, extras);
        this.select(ProvenanceGraphDim.State, type, state ? [this._states.indexOf(state)] : [], op);
    };
    ProvenanceGraph.prototype.selectSlide = function (state, op, type, extras) {
        if (op === void 0) { op = __WEBPACK_IMPORTED_MODULE_3__idtype__["SelectOperation"].SET; }
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_3__idtype__["defaultSelectionType"]; }
        if (extras === void 0) { extras = {}; }
        this.fire('select_slide,select_slide_' + type, state, type, op, extras);
        this.select(ProvenanceGraphDim.Slide, type, state ? [this._slides.indexOf(state)] : [], op);
    };
    ProvenanceGraph.prototype.selectAction = function (action, op, type) {
        if (op === void 0) { op = __WEBPACK_IMPORTED_MODULE_3__idtype__["SelectOperation"].SET; }
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_3__idtype__["defaultSelectionType"]; }
        this.fire('select_action,select_action_' + type, action, type, op);
        this.select(ProvenanceGraphDim.Action, type, action ? [this._actions.indexOf(action)] : [], op);
    };
    ProvenanceGraph.prototype.selectedStates = function (type) {
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_3__idtype__["defaultSelectionType"]; }
        var sel = this.idtypes[ProvenanceGraphDim.State].selections(type);
        if (sel.isNone) {
            return [];
        }
        var lookup = {};
        this._states.forEach(function (s) { return lookup[s.id] = s; });
        var nodes = [];
        sel.dim(0).forEach(function (id) {
            var n = lookup[id];
            if (n) {
                nodes.push(n);
            }
        });
        return nodes;
    };
    ProvenanceGraph.prototype.selectedSlides = function (type) {
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_3__idtype__["defaultSelectionType"]; }
        var sel = this.idtypes[ProvenanceGraphDim.Slide].selections(type);
        if (sel.isNone) {
            return [];
        }
        var lookup = {};
        this._slides.forEach(function (s) { return lookup[s.id] = s; });
        var nodes = [];
        sel.dim(0).forEach(function (id) {
            var n = lookup[id];
            if (n) {
                nodes.push(n);
            }
        });
        return nodes;
    };
    Object.defineProperty(ProvenanceGraph.prototype, "idtypes", {
        get: function () {
            return ['_provenance_actions', '_provenance_objects', '_provenance_states', '_provenance_stories'].map(__WEBPACK_IMPORTED_MODULE_3__idtype__["resolve"]);
        },
        enumerable: true,
        configurable: true
    });
    ProvenanceGraph.prototype.clear = function () {
        this.backend.clear();
        this._states = [];
        this._actions = [];
        this._objects = [];
        this._slides = [];
        this.act = null;
        this.lastAction = null;
        this.act = new StateNode('start');
        this._states.push(this.act);
        this.backend.addNode(this.act);
        this.fire('clear');
    };
    Object.defineProperty(ProvenanceGraph.prototype, "states", {
        get: function () {
            return this._states;
        },
        enumerable: true,
        configurable: true
    });
    ProvenanceGraph.prototype.getStateById = function (id) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["search"])(this._states, function (s) { return s.id === id; });
    };
    Object.defineProperty(ProvenanceGraph.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        enumerable: true,
        configurable: true
    });
    ProvenanceGraph.prototype.getActionById = function (id) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["search"])(this._actions, function (s) { return s.id === id; });
    };
    Object.defineProperty(ProvenanceGraph.prototype, "objects", {
        get: function () {
            return this._objects;
        },
        enumerable: true,
        configurable: true
    });
    ProvenanceGraph.prototype.getObjectById = function (id) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["search"])(this._objects, function (s) { return s.id === id; });
    };
    Object.defineProperty(ProvenanceGraph.prototype, "stories", {
        get: function () {
            return this._slides;
        },
        enumerable: true,
        configurable: true
    });
    ProvenanceGraph.prototype.getSlideById = function (id) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["search"])(this._slides, function (s) { return s.id === id; });
    };
    ProvenanceGraph.prototype.getSlideChains = function () {
        return this.stories.filter(function (n) { return n.isStart; });
    };
    ProvenanceGraph.prototype.getSlides = function () {
        return this.getSlideChains().map(toSlidePath);
    };
    Object.defineProperty(ProvenanceGraph.prototype, "edges", {
        get: function () {
            return this.backend.edges;
        },
        enumerable: true,
        configurable: true
    });
    ProvenanceGraph.prototype.addEdge = function (s, type, t, attrs) {
        if (attrs === void 0) { attrs = {}; }
        var l = new __WEBPACK_IMPORTED_MODULE_2__graph__["GraphEdge"](type, s, t);
        Object.keys(attrs).forEach(function (attr) { return l.setAttr(attr, attrs[attr]); });
        this.backend.addEdge(l);
        return l;
    };
    ProvenanceGraph.prototype.createAction = function (meta, f_id, f, inputs, parameter) {
        if (inputs === void 0) { inputs = []; }
        if (parameter === void 0) { parameter = {}; }
        var r = new ActionNode(meta, f_id, f, parameter);
        return this.initAction(r, inputs);
    };
    ProvenanceGraph.prototype.initAction = function (r, inputs) {
        var _this = this;
        if (inputs === void 0) { inputs = []; }
        var inobjects = inputs.map(function (i) { return _this.findInArray(_this._objects, i); });
        this._actions.push(r);
        this.backend.addNode(r);
        this.fire('add_action', r);
        inobjects.forEach(function (obj, i) {
            _this.addEdge(r, 'requires', obj, { index: i });
        });
        return r;
    };
    ProvenanceGraph.prototype.createInverse = function (action, inverter) {
        var _this = this;
        var creates = action.creates, removes = action.removes;
        var i = inverter.call(action, action.requires, creates, removes);
        var inverted = this.createAction(i.meta, i.id, i.f, i.inputs, i.parameter);
        inverted.onceExecuted = true;
        this.addEdge(inverted, 'inverses', action);
        //the inverted action should create the removed ones and removes the crated ones
        removes.forEach(function (c, i) {
            _this.addEdge(inverted, 'creates', c, { index: i });
        });
        creates.forEach(function (c) {
            _this.addEdge(inverted, 'removes', c);
        });
        //create the loop in the states
        this.addEdge(action.resultsIn, 'next', inverted);
        this.addEdge(inverted, 'resultsIn', action.previous);
        return inverted;
    };
    ProvenanceGraph.prototype.push = function (arg, f_id, f, inputs, parameter) {
        var _this = this;
        if (f_id === void 0) { f_id = ''; }
        if (f === void 0) { f = null; }
        if (inputs === void 0) { inputs = []; }
        if (parameter === void 0) { parameter = {}; }
        return this.inOrder(function () {
            if (arg instanceof ActionMetaData) {
                return _this.run(_this.createAction(arg, f_id, f, inputs, parameter), null);
            }
            else {
                var a = arg;
                return _this.run(_this.createAction(a.meta, a.id, a.f, a.inputs || [], a.parameter || {}), null);
            }
        });
    };
    ProvenanceGraph.prototype.pushWithResult = function (action, result) {
        var _this = this;
        return this.inOrder(function () {
            var a = _this.createAction(action.meta, action.id, action.f, action.inputs || [], action.parameter || {});
            return _this.run(a, result);
        });
    };
    ProvenanceGraph.prototype.findObject = function (value) {
        var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["search"])(this._objects, function (obj) { return obj.value === value; });
        if (r) {
            return r;
        }
        return null;
    };
    ProvenanceGraph.prototype.addObject = function (value, name, category, hash) {
        if (name === void 0) { name = value ? value.toString() : 'Null'; }
        if (category === void 0) { category = cat.data; }
        if (hash === void 0) { hash = name + '_' + category; }
        return this.addObjectImpl(value, name, category, hash, true);
    };
    ProvenanceGraph.prototype.addJustObject = function (value, name, category, hash) {
        if (name === void 0) { name = value ? value.toString() : 'Null'; }
        if (category === void 0) { category = cat.data; }
        if (hash === void 0) { hash = name + '_' + category; }
        return this.addObjectImpl(value, name, category, hash, false);
    };
    ProvenanceGraph.prototype.addObjectImpl = function (value, name, category, hash, createEdge) {
        if (name === void 0) { name = value ? value.toString() : 'Null'; }
        if (category === void 0) { category = cat.data; }
        if (hash === void 0) { hash = name + '_' + category; }
        if (createEdge === void 0) { createEdge = false; }
        var r = new ObjectNode(value, name, category, hash);
        this._objects.push(r);
        this.backend.addNode(r);
        if (createEdge) {
            this.addEdge(this.act, 'consistsOf', r);
        }
        this.fire('add_object', r);
        return r;
    };
    ProvenanceGraph.prototype.resolve = function (arr) {
        var _this = this;
        return arr.map(function (r) {
            if (r instanceof ObjectNode) {
                return r;
            }
            if (r._resolvesTo instanceof ObjectNode) {
                return r._resolvesTo;
            }
            //else create a new instance
            var result = _this.addJustObject(r.value, r.name, r.category, r.hash);
            r._resolvesTo = result;
            return result;
        });
    };
    ProvenanceGraph.prototype.findInArray = function (arr, r) {
        if (r instanceof ObjectNode) {
            return r;
        }
        if (r._resolvesTo instanceof ObjectNode) {
            return r._resolvesTo;
        }
        //else create a new instance
        var result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["search"])(arr, findMetaObject(r));
        r._resolvesTo = result;
        return result;
    };
    ProvenanceGraph.prototype.findOrAddObject = function (i, name, type) {
        return this.findOrAddObjectImpl(i, name, type, true);
    };
    ProvenanceGraph.prototype.findOrAddJustObject = function (i, name, type) {
        return this.findOrAddObjectImpl(i, name, type, false);
    };
    ProvenanceGraph.prototype.findOrAddObjectImpl = function (i, name, type, createEdge) {
        if (createEdge === void 0) { createEdge = false; }
        var r, j = i;
        if (i instanceof ObjectNode) {
            return i;
        }
        if (j._resolvesTo instanceof ObjectNode) {
            return j._resolvesTo;
        }
        if (j.hasOwnProperty('value') && j.hasOwnProperty('name')) {
            j.category = j.category || cat.data;
            r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["search"])(this._objects, findMetaObject(j));
            if (r) {
                if (r.value === null) {
                    r.value = j.value;
                }
                //cache result
                j._resolvesTo = r;
                return r;
            }
            return this.addObjectImpl(j.value, j.name, j.category, j.hash, createEdge);
        }
        else {
            r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["search"])(this._objects, function (obj) { return (obj.value === null || obj.value === i) && (name === null || obj.name === name) && (type === null || type === obj.category); });
            if (r) {
                if (r.value === null) {
                    r.value = i;
                }
                return r;
            }
            return this.addObjectImpl(i, name, type, name + '_' + type, createEdge);
        }
    };
    ProvenanceGraph.prototype.inOrder = function (f) {
        var _this = this;
        if (this.currentlyRunning) {
            var helper;
            var r = new Promise(function (resolve) {
                helper = resolve.bind(_this);
            });
            this.nextQueue.push(helper);
            return r.then(f);
        }
        else {
            return f();
        }
    };
    ProvenanceGraph.prototype.executedAction = function (action, newState, result) {
        var _this = this;
        var current = this.act;
        var next = action.resultsIn;
        result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["mixin"])({ created: [], removed: [], inverse: null, consumed: 0 }, result);
        this.fire('executed', action, result);
        var firstTime = !action.onceExecuted;
        action.onceExecuted = true;
        if (firstTime) {
            //create an link outputs
            //
            var created = this.resolve(result.created);
            created.forEach(function (c, i) {
                _this.addEdge(action, 'creates', c, { index: i });
            });
            // a removed one should be part of the inputs
            var requires_1 = action.requires;
            var removed = result.removed.map(function (r) { return _this.findInArray(requires_1, r); });
            removed.forEach(function (c) {
                c.value = null; //free reference
                _this.addEdge(action, 'removes', c);
            });
            //update new state
            if (newState) {
                var objs = current.consistsOf;
                objs.push.apply(objs, created);
                removed.forEach(function (r) {
                    var i = objs.indexOf(r);
                    objs.splice(i, 1);
                });
                objs.forEach(function (obj) { return _this.addEdge(next, 'consistsOf', obj); });
            }
            this.fire('executed_first', action, next);
        }
        else {
            //update creates reference values
            action.creates.forEach(function (c, i) {
                c.value = result.created[i].value;
            });
            action.removes.forEach(function (c) { return c.value = null; });
        }
        result.inverse = asFunction(result.inverse);
        action.updateInverse(this, result.inverse);
        this.switchToImpl(action, next);
        return {
            action: action,
            state: next,
            created: created,
            removed: removed,
            consumed: result.consumed
        };
    };
    ProvenanceGraph.prototype.run = function (action, result, withinMilliseconds) {
        var _this = this;
        if (withinMilliseconds === void 0) { withinMilliseconds = -1; }
        var next = action.resultsIn, newState = false;
        if (!next) {
            newState = true;
            this.addEdge(this.act, 'next', action);
            next = this.makeState(action.meta.name);
            this.addEdge(action, 'resultsIn', next);
        }
        this.fire('execute', action);
        if (__WEBPACK_IMPORTED_MODULE_0__index__["hash"].is('debug')) {
            console.log('execute ' + action.meta + ' ' + action.f_id);
        }
        this.currentlyRunning = true;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(withinMilliseconds)) {
            withinMilliseconds = withinMilliseconds();
        }
        this.executeCurrentActionWithin = withinMilliseconds;
        var runningAction = (result ? Promise.resolve(result) : action.execute(this, this.executeCurrentActionWithin)).then(this.executedAction.bind(this, action, newState));
        runningAction.then(function (result) {
            var q = _this.nextQueue.shift();
            if (q) {
                q();
            }
            else {
                _this.currentlyRunning = false;
            }
        });
        return runningAction;
    };
    ProvenanceGraph.prototype.switchToImpl = function (action, state) {
        var bak = this.act;
        this.act = state;
        this.fire('switch_state', state, bak);
        bak = this.lastAction;
        this.lastAction = action;
        this.fire('switch_action', action, bak);
    };
    /**
     * execute a bunch of already executed actions
     * @param actions
     */
    ProvenanceGraph.prototype.runChain = function (actions, withinMilliseconds) {
        var _this = this;
        if (withinMilliseconds === void 0) { withinMilliseconds = -1; }
        if (actions.length === 0) {
            if (withinMilliseconds > 0) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["resolveIn"])(withinMilliseconds).then(function () { return []; });
            }
            return Promise.resolve([]);
        }
        //actions = compress(actions, null);
        var last = actions[actions.length - 1];
        return compress(actions).then(function (torun) {
            var r = Promise.resolve([]);
            var remaining = withinMilliseconds;
            function guessTime(index) {
                var left = torun.length - index;
                return function () { return remaining < 0 ? -1 : remaining / left; }; //uniformly distribute
            }
            function updateTime(consumed) {
                remaining -= consumed;
            }
            torun.forEach(function (action, i) {
                r = r.then(function (results) { return _this.run(action, null, withinMilliseconds < 0 ? -1 : guessTime(i)).then(function (result) {
                    results.push(result);
                    updateTime(result.consumed);
                    return results;
                }); });
            });
            return r.then(function (results) {
                if (_this.act !== last.resultsIn) {
                    _this.switchToImpl(last, last.resultsIn);
                }
                return results;
            });
        });
    };
    ProvenanceGraph.prototype.undo = function () {
        var _this = this;
        if (!this.lastAction) {
            return Promise.resolve(null);
        }
        //create and store the inverse
        if (this.lastAction.inverses != null) {
            //undo and undoing should still go one up
            return this.jumpTo(this.act.previousState);
        }
        else {
            return this.inOrder(function () { return _this.run(_this.lastAction.getOrCreateInverse(_this), null); });
        }
    };
    ProvenanceGraph.prototype.jumpTo = function (state, withinMilliseconds) {
        var _this = this;
        if (withinMilliseconds === void 0) { withinMilliseconds = -1; }
        return this.inOrder(function () {
            var actions = [], act = _this.act;
            if (act === state) {
                return withinMilliseconds >= 0 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["resolveIn"])(withinMilliseconds).then(function () { return []; }) : Promise.resolve([]);
            }
            //lets look at the simple past
            var act_path = act.path, target_path = state.path;
            var common = findCommon(act_path, target_path);
            if (common) {
                var to_revert = act_path.slice(common.i + 1).reverse(), to_forward = target_path.slice(common.j + 1);
                actions = actions.concat(to_revert.map(function (r) { return r.resultsFrom[0].getOrCreateInverse(_this); }));
                actions = actions.concat(to_forward.map(function (r) { return r.resultsFrom[0]; }));
            }
            //no in the direct branches maybe in different loop instances?
            //TODO
            return _this.runChain(actions, withinMilliseconds);
        });
    };
    /**
     *
     * @param action the action to fork and attach to target
     * @param target the state to attach the given action and all of the rest
     * @param objectReplacements mappings of object replacements
     * @returns {boolean}
     */
    ProvenanceGraph.prototype.fork = function (action, target, objectReplacements) {
        var _this = this;
        if (objectReplacements === void 0) { objectReplacements = []; }
        //sanity check if target is a child of target ... bad
        //collect all states
        var all = [];
        var queue = [action.resultsIn];
        while (queue.length > 0) {
            var next = queue.shift();
            if (all.indexOf(next) >= 0) {
                continue;
            }
            all.push(next);
            queue.push.apply(queue, next.nextStates);
        }
        if (all.indexOf(target) >= 0) {
            return false; //target is a child of state
        }
        var targetObjects = target.consistsOf;
        var sourceObjects = action.previous.consistsOf;
        //function isSame(a: any[], b : any[]) {
        //  return a.length === b.length && a.every((ai, i) => ai === b[i]);
        //}
        //if (isSame(targetObjects, sourceObjects)) {
        //no state change ~ similar state, just create a link
        //we can copy the action and point to the same target
        //  const clone = this.initAction(action.clone(), action.requires);
        //  this.addEdge(target, 'next', clone);
        //  this.addEdge(clone, 'resultsIn', action.resultsIn);
        //} else {
        var removedObjects = sourceObjects.filter(function (o) { return targetObjects.indexOf(o) < 0; });
        var replacements = {};
        objectReplacements.forEach(function (d) { return replacements[_this.findOrAddObject(d.from).id] = d.to; });
        //need to copy all the states and actions
        this.copyBranch(action, target, removedObjects, replacements);
        //}
        this.fire('forked_branch', action, target);
        return true;
    };
    ProvenanceGraph.prototype.copyAction = function (action, appendTo, objectReplacements) {
        var clone = this.initAction(action.clone(), action.requires.map(function (a) { return objectReplacements[String(a.id)] || a; }));
        this.addEdge(appendTo, 'next', clone);
        var s = this.makeState(action.resultsIn.name, action.resultsIn.description);
        this.addEdge(clone, 'resultsIn', s);
        return s;
    };
    ProvenanceGraph.prototype.copyBranch = function (action, target, removedObject, objectReplacements) {
        var queue = [{ a: action, b: target }];
        while (queue.length > 0) {
            var next = queue.shift();
            var b = next.b;
            var a = next.a;
            var someRemovedObjectRequired = a.requires.some(function (ai) { return removedObject.indexOf(ai) >= 0 && !(String(ai.id) in objectReplacements); });
            if (!someRemovedObjectRequired) {
                //copy it and create a new pair to execute
                b = this.copyAction(a, next.b, objectReplacements);
            }
            queue.push.apply(queue, a.resultsIn.next.map(function (aa) { return ({ a: aa, b: b }); }));
        }
    };
    ProvenanceGraph.prototype.makeState = function (name, description) {
        if (description === void 0) { description = ''; }
        var s = new StateNode(name, description);
        this._states.push(s);
        this.backend.addNode(s);
        this.fire('add_state', s);
        return s;
    };
    ProvenanceGraph.prototype.persist = function () {
        var r = this.backend.persist();
        r.act = this.act ? this.act.id : null;
        r.lastAction = this.lastAction ? this.lastAction.id : null;
        return r;
    };
    /*
     restore(persisted: any) {
     const lookup = {},
     lookupFun = (id) => lookup[id];
     const types = {
     action: ActionNode,
     state: StateNode,
     object: ObjectNode
     };
     this.clear();
     persisted.nodes.forEach((p) => {
     var n = types[p.type].restore(p, factory);
     lookup[n.id] = n;
     if (n instanceof ActionNode) {
     this._actions.push(n);
     } else if (n instanceof StateNode) {
     this._states.push(n);
     } else if (n instanceof ObjectNode) {
     this._objects.push(n);
     }
     this.backend.addNode(n);
     });
     if (persisted.act) {
     this.act = lookup[persisted.id];
     }
     if (persisted.lastAction) {
     this.lastAction = lookup[persisted.lastAction];
     }
  
     persisted.edges.forEach((p) => {
     var n = (new graph.GraphEdge()).restore(p, lookupFun);
     this.backend.addEdge(n);
     });
     return this;
     }*/
    ProvenanceGraph.prototype.wrapAsSlide = function (state) {
        var node = new SlideNode();
        node.name = state.name;
        this.addEdge(node, 'jumpTo', state);
        this._slides.push(node);
        this.backend.addNode(node);
        this.fire('add_slide', node);
        return node;
    };
    ProvenanceGraph.prototype.cloneSingleSlideNode = function (state) {
        var clone = state.state != null ? this.wrapAsSlide(state.state) : this.makeTextSlide();
        state.attrs.forEach(function (attr) {
            if (attr !== 'annotations') {
                clone.setAttr(attr, state.getAttr(attr, null));
            }
        });
        clone.setAttr('annotations', state.annotations.map(function (a) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["mixin"])({}, a); }));
        return clone;
    };
    /**
     * creates a new slide of the given StateNode by jumping to them
     * @param states
     */
    ProvenanceGraph.prototype.extractSlide = function (states, addStartEnd) {
        var _this = this;
        if (addStartEnd === void 0) { addStartEnd = true; }
        var addSlide = function (node) {
            _this._slides.push(node);
            _this.backend.addNode(node);
            _this.fire('add_slide', node);
            return node;
        };
        var slide = addStartEnd ? addSlide(SlideNode.makeText('Unnamed Story')) : null, prev = slide;
        states.forEach(function (s, i) {
            var node = addSlide(new SlideNode());
            node.name = s.name;
            _this.addEdge(node, 'jumpTo', s);
            if (prev) {
                _this.addEdge(prev, 'next', node);
            }
            else {
                slide = node;
            }
            prev = node;
        });
        if (addStartEnd) {
            var last = SlideNode.makeText('Thanks');
            addSlide(last);
            this.addEdge(prev, 'next', last);
        }
        this.fire('extract_slide', slide);
        this.selectSlide(slide);
        return slide;
    };
    ProvenanceGraph.prototype.startNewSlide = function (title, states) {
        if (states === void 0) { states = []; }
        var s = this.makeTextSlide(title);
        if (states.length > 0) {
            var s2 = this.extractSlide(states, false);
            this.addEdge(s, 'next', s2);
        }
        this.fire('start_slide', s);
        return s;
    };
    ProvenanceGraph.prototype.makeTextSlide = function (title) {
        var s = SlideNode.makeText(title);
        this._slides.push(s);
        this.backend.addNode(s);
        this.fire('add_slide', s);
        return s;
    };
    ProvenanceGraph.prototype.insertIntoSlide = function (toInsert, slide, beforeIt) {
        if (beforeIt === void 0) { beforeIt = false; }
        this.moveSlide(toInsert, slide, beforeIt);
    };
    ProvenanceGraph.prototype.appendToSlide = function (slide, elem) {
        var s = toSlidePath(slide);
        return this.moveSlide(elem, s[s.length - 1], false);
    };
    ProvenanceGraph.prototype.moveSlide = function (node, to, beforeIt) {
        var _this = this;
        if (beforeIt === void 0) { beforeIt = false; }
        if ((beforeIt && node.next === to) || (!beforeIt && node.previous === to)) {
            return; //already matches
        }
        //1. extract the node
        //create other links
        var prev = node.previous;
        if (prev) {
            node.nexts.forEach(function (n) {
                _this.addEdge(prev, 'next', n);
            });
        }
        //remove links
        this.edges.filter(function (e) { return (e.source === node || e.target === node) && e.type === 'next'; }).forEach(function (e) {
            _this.backend.removeEdge(e);
        });
        //insert into the new place
        if (beforeIt) {
            var tprev = to.previous;
            if (tprev) {
                this.edges.filter(function (e) { return (e.target === to) && e.type === 'next'; }).forEach(function (e) {
                    _this.backend.removeEdge(e);
                });
                this.addEdge(tprev, 'next', node);
                this.addEdge(node, 'next', to);
            }
            this.addEdge(node, 'next', to);
        }
        else {
            var tnexts = to.nexts;
            if (tnexts.length > 0) {
                this.edges.filter(function (e) { return (e.source === to) && e.type === 'next'; }).forEach(function (e) {
                    _this.backend.removeEdge(e);
                });
                tnexts.forEach(function (next) {
                    _this.addEdge(node, 'next', next);
                });
            }
            this.addEdge(to, 'next', node);
        }
        this.fire('move_slide', node, to, beforeIt);
    };
    ProvenanceGraph.prototype.removeSlideNode = function (node) {
        var _this = this;
        var prev = node.previous;
        if (prev) {
            node.nexts.forEach(function (n) {
                _this.addEdge(prev, 'next', n);
            });
        }
        this.edges.filter(function (e) { return e.source === node || e.target === node; }).forEach(function (e) {
            _this.backend.removeEdge(e);
        });
        this._slides.splice(this._slides.indexOf(node), 1);
        this.backend.removeNode(node);
        this.fire('remove_slide', node);
    };
    ProvenanceGraph.prototype.removeFullSlide = function (node) {
        //go to the beginning
        while (node.previous) {
            node = node.previous;
        }
        var bak = node;
        while (node) {
            var next = node.next;
            this.removeSlideNode(node);
            node = next;
        }
        this.fire('destroy_slide', bak);
    };
    ProvenanceGraph.prototype.setSlideJumpToTarget = function (node, state) {
        var old = node.outgoing.filter(__WEBPACK_IMPORTED_MODULE_2__graph__["isType"]('jumpTo'))[0];
        if (old) {
            this.backend.removeEdge(old);
        }
        if (state) {
            this.addEdge(node, 'jumpTo', state);
        }
        this.fire('set_jump_target', node, old ? old.target : null, state);
    };
    return ProvenanceGraph;
}(__WEBPACK_IMPORTED_MODULE_5__datatype__["DataTypeBase"]));
function findLatestPath(state) {
    var path = state.path.slice();
    //compute the first path to the end
    while ((state = state.nextState) != null && (path.indexOf(state) < 0)) {
        path.push(state);
    }
    return path;
}
function createDummy() {
    var desc = {
        type: 'provenance_graph',
        id: 'dummy',
        name: 'dummy',
        fqname: 'dummy'
    };
    return new ProvenanceGraph(desc, new __WEBPACK_IMPORTED_MODULE_2__graph__["MemoryGraph"](desc, [], [], provenanceGraphFactory()));
}


/***/ },
/* 30 */
/***/ function(module, exports) {

/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */


/***/ },
/* 31 */
/***/ function(module, exports) {

/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 04.08.2014.
 */


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__idtype__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(exports, "C", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(exports, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ranges", function() { return ranges; });
/* harmony export (binding) */ __webpack_require__.d(exports, "idtypes", function() { return idtypes; });
/* harmony export (binding) */ __webpack_require__.d(exports, "geom", function() { return geom; });
/* harmony export (binding) */ __webpack_require__.d(exports, "events", function() { return events; });
/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
/**
 * Created by Samuel Gratzl on 29.12.2014.
 * @deprecated use direct imports
 */






var C = __WEBPACK_IMPORTED_MODULE_0__index__;
var data = __WEBPACK_IMPORTED_MODULE_1__data__;
var ranges = __WEBPACK_IMPORTED_MODULE_2__range__;
var idtypes = __WEBPACK_IMPORTED_MODULE_3__idtype__;
var geom = __WEBPACK_IMPORTED_MODULE_5__geom__;
var events = __WEBPACK_IMPORTED_MODULE_4__event__;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */

//register all extensions in the registry following the given pattern
module.exports = function(registry) {
  //registry.push('extension-type', 'extension-id', function() { return System.import('./src/extension_impl'); }, {});
  registry.push('datatype', 'matrix', function() { return Promise.resolve().then(__webpack_require__.bind(null, 16)); }, {});

  registry.push('datatype', 'table', function() { return Promise.resolve().then(__webpack_require__.bind(null, 13)); }, {});

  registry.push('datatype', 'vector', function() { return Promise.resolve().then(__webpack_require__.bind(null, 9)); }, {});

  registry.push('datatype', 'stratification', function() { return Promise.resolve().then(__webpack_require__.bind(null, 18)); }, {});

  registry.push('datatype', 'graph', function() { return Promise.resolve().then(__webpack_require__.bind(null, 11)); }, {});
};



/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./2D.ts": 14,
	"./ajax.ts": 3,
	"./behavior.ts": 23,
	"./data.ts": 10,
	"./datatype.ts": 4,
	"./event.ts": 5,
	"./geom.ts": 7,
	"./graph.ts": 11,
	"./idtype.ts": 2,
	"./index.ts": 0,
	"./iterator.ts": 15,
	"./layout.ts": 24,
	"./layout_view.ts": 25,
	"./mapper.ts": 26,
	"./math.ts": 8,
	"./matrix.ts": 27,
	"./matrix_impl.ts": 16,
	"./multiform.ts": 28,
	"./plugin.ts": 6,
	"./provenance.ts": 29,
	"./range.ts": 1,
	"./session.ts": 17,
	"./stratification.ts": 12,
	"./stratification_impl.ts": 18,
	"./table.ts": 30,
	"./table_impl.ts": 13,
	"./vector.ts": 31,
	"./vector_impl.ts": 9,
	"./vis.ts": 19,
	"./wrapper.ts": 32
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 34;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(22);
__webpack_require__(21);
module.exports = __webpack_require__(20);


/***/ }
/******/ ]);
});
//# sourceMappingURL=phovea_core.js.map