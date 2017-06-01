(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueMultiselect"] = factory();
	else
		root["VueMultiselect"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function includes(str, query) {
  if (str === undefined) str = 'undefined';
  if (str === null) str = 'null';
  if (str === false) str = 'false';
  var text = str.toString().toLowerCase();
  return text.indexOf(query.trim()) !== -1;
}

function filterOptions(options, search, label) {
  return label ? options.filter(function (option) {
    return includes(option[label], search);
  }) : options.filter(function (option) {
    return includes(option, search);
  });
}

function stripGroups(options) {
  return options.filter(function (option) {
    return !option.$isLabel;
  });
}

function flattenOptions(values, label) {
  return function (options) {
    return options.reduce(function (prev, curr) {
      if (curr[values] && curr[values].length) {
        prev.push({
          $groupLabel: curr[label],
          $isLabel: true
        });
        return prev.concat(curr[values]);
      }
      return prev.concat(curr);
    }, []);
  };
}

function filterGroups(search, label, values, groupLabel) {
  return function (groups) {
    return groups.map(function (group) {
      var _ref;

      var groupOptions = filterOptions(group[values], search, label);

      return groupOptions.length ? (_ref = {}, _defineProperty(_ref, groupLabel, group[groupLabel]), _defineProperty(_ref, values, groupOptions), _ref) : [];
    });
  };
}

var flow = function flow() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduce(function (v, f) {
      return f(v);
    }, x);
  };
};

exports.default = {
  data: function data() {
    return {
      search: '',
      isOpen: false,
      hasEnoughSpace: true,
      internalValue: this.value || this.value === 0 ? (0, _utils2.default)(Array.isArray(this.value) ? this.value : [this.value]) : []
    };
  },

  props: {
    internalSearch: {
      type: Boolean,
      default: true
    },

    options: {
      type: Array,
      required: true
    },

    multiple: {
      type: Boolean,
      default: false
    },

    value: {
      type: null,
      default: function _default() {
        return [];
      }
    },

    trackBy: {
      type: String
    },

    label: {
      type: String
    },

    searchable: {
      type: Boolean,
      default: true
    },

    clearOnSelect: {
      type: Boolean,
      default: true
    },

    hideSelected: {
      type: Boolean,
      default: false
    },

    placeholder: {
      type: String,
      default: 'Select option'
    },

    allowEmpty: {
      type: Boolean,
      default: true
    },

    resetAfter: {
      type: Boolean,
      default: false
    },

    closeOnSelect: {
      type: Boolean,
      default: true
    },

    customLabel: {
      type: Function,
      default: function _default(option, label) {
        return label ? option[label] : option;
      }
    },

    inputClass: {
      default: null
    },

    taggable: {
      type: Boolean,
      default: false
    },

    tagPlaceholder: {
      type: String,
      default: 'Press enter to create a tag'
    },

    max: {
      type: Number
    },

    id: {
      default: null
    },

    optionsLimit: {
      type: Number,
      default: 1000
    },

    groupValues: {
      type: String
    },

    groupLabel: {
      type: String
    },

    blockKeys: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  mounted: function mounted() {
    if (!this.multiple && !this.clearOnSelect) {
      console.warn('[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false.');
    }
  },

  computed: {
    filteredOptions: function filteredOptions() {
      var search = this.search || '';
      var normalizedSearch = search.toLowerCase();

      var options = this.options.concat();

      if (this.internalSearch) {
        options = this.groupValues ? this.filterAndFlat(options, normalizedSearch, this.label) : filterOptions(options, normalizedSearch, this.label);

        options = this.hideSelected ? options.filter(this.isNotSelected) : options;
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options;
      }

      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        options.unshift({ isTag: true, label: search });
      }

      return options.slice(0, this.optionsLimit);
    },
    valueKeys: function valueKeys() {
      var _this = this;

      if (this.trackBy) {
        return this.internalValue.map(function (element) {
          return element[_this.trackBy];
        });
      } else {
        return this.internalValue;
      }
    },
    optionKeys: function optionKeys() {
      var _this2 = this;

      var options = this.groupValues ? this.flatAndStrip(this.options) : this.options;
      return this.label ? options.map(function (element) {
        return element[_this2.label] ? element[_this2.label].toString().toLowerCase() : null;
      }) : options.map(function (element) {
        return element.toString().toLowerCase();
      });
    },
    currentOptionLabel: function currentOptionLabel() {
      return this.multiple ? this.searchable ? '' : this.placeholder : this.internalValue[0] ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? '' : this.placeholder;
    }
  },
  watch: {
    'internalValue': function internalValue(newVal, oldVal) {
      if (this.resetAfter && this.internalValue.length) {
        this.search = '';
        this.internalValue = [];
      }
    },
    'search': function search() {
      this.$emit('search-change', this.search, this.id);
    },
    'value': function value(_value) {
      this.internalValue = this.getInternalValue(_value);
    }
  },
  methods: {
    getValue: function getValue() {
      return this.multiple ? (0, _utils2.default)(this.internalValue) : this.internalValue.length === 0 ? null : (0, _utils2.default)(this.internalValue[0]);
    },
    getInternalValue: function getInternalValue(value) {
      return value === null || value === undefined ? [] : this.multiple ? (0, _utils2.default)(value) : (0, _utils2.default)([value]);
    },
    filterAndFlat: function filterAndFlat(options, search, label) {
      return flow(filterGroups(search, label, this.groupValues, this.groupLabel), flattenOptions(this.groupValues, this.groupLabel))(options);
    },
    flatAndStrip: function flatAndStrip(options) {
      return flow(flattenOptions(this.groupValues, this.groupLabel), stripGroups)(options);
    },
    updateSearch: function updateSearch(query) {
      this.search = query;
    },
    isExistingOption: function isExistingOption(query) {
      return !this.options ? false : this.optionKeys.indexOf(query) > -1;
    },
    isSelected: function isSelected(option) {
      var opt = this.trackBy ? option[this.trackBy] : option;
      return this.valueKeys.indexOf(opt) > -1;
    },
    isNotSelected: function isNotSelected(option) {
      return !this.isSelected(option);
    },
    getOptionLabel: function getOptionLabel(option) {
      if (!option && option !== 0) return '';

      if (option.isTag) return option.label;
      return this.customLabel(option, this.label) || '';
    },
    select: function select(option, key) {
      if (this.blockKeys.indexOf(key) !== -1 || this.disabled || option.$isLabel) return;

      if (this.max && this.multiple && this.internalValue.length === this.max) return;
      if (option.isTag) {
        this.$emit('tag', option.label, this.id);
        this.search = '';
        if (this.closeOnSelect && !this.multiple) this.deactivate();
      } else {
        var isSelected = this.isSelected(option);
        if (isSelected) {
          if (key !== 'Tab') this.removeElement(option);
          return;
        } else if (this.multiple) {
          this.internalValue.push(option);
        } else {
          this.internalValue = [option];
        }
        this.$emit('select', (0, _utils2.default)(option), this.id);
        this.$emit('input', this.getValue(), this.id);

        if (this.clearOnSelect) this.search = '';
      }

      if (this.closeOnSelect) this.deactivate();
    },
    removeElement: function removeElement(option) {
      if (this.disabled) return;

      if (!this.allowEmpty && this.internalValue.length <= 1) return;

      var index = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' ? this.valueKeys.indexOf(option[this.trackBy]) : this.valueKeys.indexOf(option);

      this.internalValue.splice(index, 1);
      this.$emit('remove', (0, _utils2.default)(option), this.id);
      this.$emit('input', this.getValue(), this.id);

      if (this.closeOnSelect) this.deactivate();
    },
    removeLastElement: function removeLastElement() {
      if (this.blockKeys.indexOf('Delete') !== -1) return;

      if (this.search.length === 0 && Array.isArray(this.internalValue)) {
        this.removeElement(this.internalValue[this.internalValue.length - 1]);
      }
    },
    activate: function activate() {
      if (this.isOpen || this.disabled) return;

      this.adjustPosition();

      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1;
      }

      this.isOpen = true;

      if (this.searchable) {
        this.search = '';
        this.$refs.search.focus();
      } else {
        this.$el.focus();
      }
      this.$emit('open', this.id);
    },
    deactivate: function deactivate() {
      if (!this.isOpen) return;

      this.isOpen = false;

      if (this.searchable) {
        this.$refs.search.blur();
      } else {
        this.$el.blur();
      }
      this.search = '';
      this.$emit('close', this.getValue(), this.id);
    },
    toggle: function toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },
    adjustPosition: function adjustPosition() {
      if (typeof window !== 'undefined') {
        this.hasEnoughSpace = this.$el.getBoundingClientRect().top + this.maxHeight < window.innerHeight;
      }
    }
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      pointer: 0,
      visibleElements: this.maxHeight / this.optionHeight
    };
  },

  props: {
    showPointer: {
      type: Boolean,
      default: true
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition: function pointerPosition() {
      return this.pointer * this.optionHeight;
    }
  },
  watch: {
    filteredOptions: function filteredOptions() {
      this.pointerAdjust();
    }
  },
  methods: {
    optionHighlight: function optionHighlight(index, option) {
      return {
        'multiselect__option--highlight': index === this.pointer && this.showPointer,
        'multiselect__option--selected': this.isSelected(option)
      };
    },
    addPointerElement: function addPointerElement() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Enter',
          key = _ref.key;

      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer], key);
      }
      this.pointerReset();
    },
    pointerForward: function pointerForward() {
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++;

        if (this.$refs.list.scrollTop <= this.pointerPosition - this.visibleElements * this.optionHeight) {
          this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight;
        }

        if (this.filteredOptions[this.pointer].$isLabel) this.pointerForward();
      }
    },
    pointerBackward: function pointerBackward() {
      if (this.pointer > 0) {
        this.pointer--;

        if (this.$refs.list.scrollTop >= this.pointerPosition) {
          this.$refs.list.scrollTop = this.pointerPosition;
        }

        if (this.filteredOptions[this.pointer].$isLabel) this.pointerBackward();
      } else {
        if (this.filteredOptions[0].$isLabel) this.pointerForward();
      }
    },
    pointerReset: function pointerReset() {
      if (!this.closeOnSelect) return;
      this.pointer = 0;

      if (this.$refs.list) {
        this.$refs.list.scrollTop = 0;
      }
    },
    pointerAdjust: function pointerAdjust() {
      if (this.pointer >= this.filteredOptions.length - 1) {
        this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0;
      }
    },
    pointerSet: function pointerSet(index) {
      this.pointer = index;
    }
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = deepClone;
function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  } else if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
    var cloned = {};
    var keys = Object.keys(obj);
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      cloned[key] = deepClone(obj[key]);
    }
    return cloned;
  } else {
    return obj;
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(9),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/toilal/idea-projects/vue-multiselect/src/Multiselect.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Multiselect.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d511e8aa", Component.options)
  } else {
    hotAPI.reload("data-v-d511e8aa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepClone = exports.pointerMixin = exports.multiselectMixin = exports.Multiselect = undefined;

var _Multiselect = __webpack_require__(3);

var _Multiselect2 = _interopRequireDefault(_Multiselect);

var _multiselectMixin = __webpack_require__(0);

var _multiselectMixin2 = _interopRequireDefault(_multiselectMixin);

var _pointerMixin = __webpack_require__(1);

var _pointerMixin2 = _interopRequireDefault(_pointerMixin);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Multiselect2.default;
exports.Multiselect = _Multiselect2.default;
exports.multiselectMixin = _multiselectMixin2.default;
exports.pointerMixin = _pointerMixin2.default;
exports.deepClone = _utils2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _multiselectMixin = __webpack_require__(0);

var _multiselectMixin2 = _interopRequireDefault(_multiselectMixin);

var _pointerMixin = __webpack_require__(1);

var _pointerMixin2 = _interopRequireDefault(_pointerMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'vue-multiselect',
  mixins: [_multiselectMixin2.default, _pointerMixin2.default],
  props: {
    inputName: {
      type: String,
      default: ''
    },

    inputId: {
      type: String,
      default: ''
    },

    selectLabel: {
      type: String,
      default: 'Press enter to select'
    },

    selectedLabel: {
      type: String,
      default: 'Selected'
    },

    deselectLabel: {
      type: String,
      default: 'Press enter to remove'
    },

    showLabels: {
      type: Boolean,
      default: true
    },

    limit: {
      type: Number,
      default: 99999
    },

    maxHeight: {
      type: Number,
      default: 300
    },

    limitText: {
      type: Function,
      default: function _default(count) {
        return 'and ' + count + ' more';
      }
    },

    loading: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    visibleValue: function visibleValue() {
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    deselectLabelText: function deselectLabelText() {
      return this.showLabels ? this.deselectLabel : '';
    },
    selectLabelText: function selectLabelText() {
      return this.showLabels ? this.selectLabel : '';
    },
    selectedLabelText: function selectedLabelText() {
      return this.showLabels ? this.selectedLabel : '';
    }
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "\nfieldset[disabled] .multiselect {\n  pointer-events: none;\n}\n.multiselect__spinner {\n  position: absolute;\n  right: 1px;\n  top: 1px;\n  width: 48px;\n  height: 35px;\n  background: #fff;\n  display: block;\n}\n.multiselect__spinner:before,\n.multiselect__spinner:after {\n  position: absolute;\n  content: \"\";\n  top: 50%;\n  left: 50%;\n  margin: -8px 0 0 -8px;\n  width: 16px;\n  height: 16px;\n  border-radius: 100%;\n  border-color: #41B883 transparent transparent;\n  border-style: solid;\n  border-width: 2px;\n  box-shadow: 0 0 0 1px transparent;\n}\n.multiselect__spinner:before {\n  animation: spinning 2.4s cubic-bezier(0.41, 0.26, 0.2, 0.62);\n  animation-iteration-count: infinite;\n}\n.multiselect__spinner:after {\n  animation: spinning 2.4s cubic-bezier(0.51, 0.09, 0.21, 0.8);\n  animation-iteration-count: infinite;\n}\n.multiselect__loading-enter-active,\n.multiselect__loading-leave-active {\n  transition: opacity 0.4s ease-in-out;\n  opacity: 1;\n}\n.multiselect__loading-enter,\n.multiselect__loading-leave-active {\n  opacity: 0;\n}\n.multiselect,\n.multiselect__input,\n.multiselect__single {\n  font-family: inherit;\n  font-size: 14px;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n}\n.multiselect {\n  box-sizing: content-box;\n  display: block;\n  position: relative;\n  width: 100%;\n  min-height: 40px;\n  text-align: left;\n  color: #35495E;\n}\n.multiselect * {\n  box-sizing: border-box;\n}\n.multiselect:focus {\n  outline: none;\n}\n.multiselect--disabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n.multiselect--active {\n  z-index: 50;\n}\n.multiselect--active .multiselect__current,\n.multiselect--active .multiselect__input,\n.multiselect--active .multiselect__tags {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.multiselect--active .multiselect__select {\n  transform: rotateZ(180deg);\n}\n.multiselect--above.multiselect--active .multiselect__current,\n.multiselect--above.multiselect--active .multiselect__input,\n.multiselect--above.multiselect--active .multiselect__tags {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.multiselect__input,\n.multiselect__single {\n  position: relative;\n  display: inline-block;\n  min-height: 20px;\n  line-height: 20px;\n  border: none;\n  border-radius: 5px;\n  background: #fff;\n  padding: 1px 0 0 5px;\n  width: calc(100%);\n  transition: border 0.1s ease;\n  box-sizing: border-box;\n  margin-bottom: 8px;\n}\n.multiselect__tag ~ .multiselect__input,\n.multiselect__tag ~ .multiselect__single {\n  width: auto;\n}\n.multiselect__input:hover,\n.multiselect__single:hover {\n  border-color: #cfcfcf;\n}\n.multiselect__input:focus,\n.multiselect__single:focus {\n  border-color: #a8a8a8;\n  outline: none;\n}\n.multiselect__single {\n  padding-left: 6px;\n  margin-bottom: 8px;\n}\n.multiselect__tags {\n  min-height: 40px;\n  display: block;\n  padding: 8px 40px 0 8px;\n  border-radius: 5px;\n  border: 1px solid #E8E8E8;\n  background: #fff;\n}\n.multiselect__tag {\n  position: relative;\n  display: inline-block;\n  padding: 4px 26px 4px 10px;\n  border-radius: 5px;\n  margin-right: 10px;\n  color: #fff;\n  line-height: 1;\n  background: #41B883;\n  margin-bottom: 8px;\n  white-space: nowrap;\n}\n.multiselect__tag-icon {\n  cursor: pointer;\n  margin-left: 7px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-weight: 700;\n  font-style: initial;\n  width: 22px;\n  text-align: center;\n  line-height: 22px;\n  transition: all 0.2s ease;\n  border-radius: 5px;\n}\n.multiselect__tag-icon:after {\n  content: \"\\D7\";\n  color: #266d4d;\n  font-size: 14px;\n}\n.multiselect__tag-icon:focus,\n.multiselect__tag-icon:hover {\n  background: #369a6e;\n}\n.multiselect__tag-icon:focus:after,\n.multiselect__tag-icon:hover:after {\n  color: white;\n}\n.multiselect__current {\n  line-height: 16px;\n  min-height: 40px;\n  box-sizing: border-box;\n  display: block;\n  overflow: hidden;\n  padding: 8px 12px 0;\n  padding-right: 30px;\n  white-space: nowrap;\n  margin: 0;\n  text-decoration: none;\n  border-radius: 5px;\n  border: 1px solid #E8E8E8;\n  cursor: pointer;\n}\n.multiselect__select {\n  line-height: 16px;\n  display: block;\n  position: absolute;\n  box-sizing: border-box;\n  width: 40px;\n  height: 38px;\n  right: 1px;\n  top: 1px;\n  padding: 4px 8px;\n  margin: 0;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.multiselect__select:before {\n  position: relative;\n  right: 0;\n  top: 65%;\n  color: #999;\n  margin-top: 4px;\n  border-style: solid;\n  border-width: 5px 5px 0 5px;\n  border-color: #999999 transparent transparent transparent;\n  content: \"\";\n}\n.multiselect__placeholder {\n  color: #ADADAD;\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-top: 2px;\n}\n.multiselect--active .multiselect__placeholder {\n  display: none;\n}\n.multiselect__content {\n  position: absolute;\n  list-style: none;\n  display: block;\n  background: #fff;\n  width: 100%;\n  max-height: 240px;\n  overflow: auto;\n  padding: 0;\n  margin: 0;\n  border: 1px solid #E8E8E8;\n  border-top: none;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  z-index: 50;\n}\n.multiselect--above .multiselect__content {\n  bottom: 100%;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom: none;\n  border-top: 1px solid #E8E8E8;\n}\n.multiselect__content::webkit-scrollbar {\n  display: none;\n}\n.multiselect__element {\n  display: block;\n}\n.multiselect__option {\n  display: block;\n  padding: 12px;\n  min-height: 40px;\n  line-height: 16px;\n  text-decoration: none;\n  text-transform: none;\n  vertical-align: middle;\n  position: relative;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.multiselect__option:after {\n  top: 0;\n  right: 0;\n  position: absolute;\n  line-height: 40px;\n  padding-right: 12px;\n  padding-left: 20px;\n}\n.multiselect__option--highlight {\n  background: #41B883;\n  outline: none;\n  color: white;\n}\n.multiselect__option--highlight:after {\n  content: attr(data-select);\n  background: #41B883;\n  color: white;\n}\n.multiselect__option--selected {\n  background: #F3F3F3;\n  color: #35495E;\n  font-weight: bold;\n}\n.multiselect__option--selected:after {\n  content: attr(data-selected);\n  color: silver;\n}\n.multiselect__option--selected.multiselect__option--highlight {\n  background: #FF6A6A;\n  color: #fff;\n}\n.multiselect__option--selected.multiselect__option--highlight:after {\n  background: #FF6A6A;\n  content: attr(data-deselect);\n  color: #fff;\n}\n.multiselect--disabled {\n  background: #ededed;\n  pointer-events: none;\n}\n.multiselect--disabled .multiselect__current,\n.multiselect--disabled .multiselect__select {\n  background: #ededed;\n  color: #a6a6a6;\n}\n.multiselect__option--disabled {\n  background: #ededed;\n  color: #a6a6a6;\n  cursor: text;\n  pointer-events: none;\n}\n.multiselect__option--disabled.multiselect__option--highlight {\n  background: #dedede !important;\n}\n.multiselect-enter-active,\n.multiselect-leave-active {\n  transition: all 0.15s ease;\n}\n.multiselect-enter,\n.multiselect-leave-active {\n  opacity: 0;\n}\n@keyframes spinning {\nfrom { transform:rotate(0)\n}\nto { transform:rotate(2turn)\n}\n}\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "multiselect",
    class: {
      'multiselect--active': _vm.isOpen, 'multiselect--disabled': _vm.disabled, 'multiselect--above': !_vm.hasEnoughSpace
    },
    attrs: {
      "tabindex": _vm.searchable ? -1 : 0
    },
    on: {
      "focus": function($event) {
        _vm.activate()
      },
      "blur": function($event) {
        _vm.searchable ? false : _vm.deactivate()
      },
      "keydown": [function($event) {
        if (_vm._k($event.keyCode, "down", 40)) { return; }
        if ($event.target !== $event.currentTarget) { return; }
        $event.preventDefault();
        _vm.pointerForward()
      }, function($event) {
        if (_vm._k($event.keyCode, "up", 38)) { return; }
        if ($event.target !== $event.currentTarget) { return; }
        $event.preventDefault();
        _vm.pointerBackward()
      }, function($event) {
        if (_vm._k($event.keyCode, "enter", 13) && _vm._k($event.keyCode, "tab", 9)) { return; }
        $event.stopPropagation();
        if ($event.target !== $event.currentTarget) { return; }
        _vm.addPointerElement($event)
      }],
      "keyup": function($event) {
        if (_vm._k($event.keyCode, "esc", 27)) { return; }
        _vm.deactivate()
      }
    }
  }, [_vm._t("carret", [_c('div', {
    staticClass: "multiselect__select",
    on: {
      "mousedown": function($event) {
        $event.preventDefault();
        _vm.toggle()
      }
    }
  })]), _vm._v(" "), _c('div', {
    ref: "tags",
    staticClass: "multiselect__tags"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visibleValue.length > 0),
      expression: "visibleValue.length > 0"
    }],
    staticClass: "multiselect__tags-wrap"
  }, _vm._l((_vm.visibleValue), function(option) {
    return _c('span', {
      staticClass: "multiselect__tag",
      on: {
        "mousedown": function($event) {
          $event.preventDefault();
        }
      }
    }, [_c('span', {
      domProps: {
        "textContent": _vm._s(_vm.getOptionLabel(option))
      }
    }), _vm._v(" "), _c('i', {
      staticClass: "multiselect__tag-icon",
      attrs: {
        "aria-hidden": "true",
        "tabindex": "1"
      },
      on: {
        "keydown": function($event) {
          if (_vm._k($event.keyCode, "enter", 13)) { return; }
          $event.preventDefault();
          _vm.removeElement(option)
        },
        "mousedown": function($event) {
          $event.preventDefault();
          _vm.removeElement(option)
        }
      }
    })])
  })), _vm._v(" "), (_vm.internalValue && _vm.internalValue.length > _vm.limit) ? [_c('strong', {
    domProps: {
      "textContent": _vm._s(_vm.limitText(_vm.internalValue.length - _vm.limit))
    }
  })] : _vm._e(), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "multiselect__loading"
    }
  }, [_vm._t("loading", [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "multiselect__spinner"
  })])], 2), _vm._v(" "), (_vm.searchable) ? _c('input', {
    ref: "search",
    staticClass: "multiselect__input",
    class: _vm.inputClass,
    attrs: {
      "name": _vm.inputName,
      "id": _vm.inputId,
      "type": "text",
      "autocomplete": "off",
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.isOpen ? _vm.search : _vm.currentOptionLabel
    },
    on: {
      "input": function($event) {
        _vm.updateSearch($event.target.value)
      },
      "focus": function($event) {
        $event.preventDefault();
        _vm.activate()
      },
      "blur": function($event) {
        $event.preventDefault();
        _vm.deactivate()
      },
      "keyup": function($event) {
        if (_vm._k($event.keyCode, "esc", 27)) { return; }
        _vm.deactivate()
      },
      "keydown": [function($event) {
        if (_vm._k($event.keyCode, "down", 40)) { return; }
        $event.preventDefault();
        _vm.pointerForward()
      }, function($event) {
        if (_vm._k($event.keyCode, "up", 38)) { return; }
        $event.preventDefault();
        _vm.pointerBackward()
      }, function($event) {
        if (_vm._k($event.keyCode, "enter", 13)) { return; }
        $event.preventDefault();
      }, function($event) {
        if (_vm._k($event.keyCode, "enter", 13) && _vm._k($event.keyCode, "tab", 9)) { return; }
        $event.stopPropagation();
        if ($event.target !== $event.currentTarget) { return; }
        _vm.addPointerElement($event)
      }, function($event) {
        if (_vm._k($event.keyCode, "delete", [8, 46])) { return; }
        _vm.removeLastElement()
      }]
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.searchable) ? _c('span', {
    staticClass: "multiselect__single",
    domProps: {
      "textContent": _vm._s(_vm.currentOptionLabel)
    }
  }) : _vm._e()], 2), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "multiselect"
    }
  }, [_c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isOpen),
      expression: "isOpen"
    }],
    ref: "list",
    staticClass: "multiselect__content",
    style: ({
      maxHeight: _vm.maxHeight + 'px'
    }),
    on: {
      "mousedown": function($event) {
        $event.preventDefault();
      }
    }
  }, [_vm._t("beforeList"), _vm._v(" "), (_vm.multiple && _vm.max === _vm.internalValue.length) ? _c('li', [_c('span', {
    staticClass: "multiselect__option"
  }, [_vm._t("maxElements", [_vm._v("Maximum of " + _vm._s(_vm.max) + " options selected. First remove a selected option to select another.")])], 2)]) : _vm._e(), _vm._v(" "), (!_vm.max || _vm.internalValue.length < _vm.max) ? _vm._l((_vm.filteredOptions), function(option, index) {
    return _c('li', {
      key: index,
      staticClass: "multiselect__element"
    }, [(!(option && option.$isLabel)) ? _c('span', {
      staticClass: "multiselect__option",
      class: _vm.optionHighlight(index, option),
      attrs: {
        "tabindex": "0",
        "data-select": option && option.isTag ? _vm.tagPlaceholder : _vm.selectLabelText,
        "data-selected": _vm.selectedLabelText,
        "data-deselect": _vm.deselectLabelText
      },
      on: {
        "mousedown": function($event) {
          $event.preventDefault();
          _vm.select(option)
        },
        "mouseenter": function($event) {
          _vm.pointerSet(index)
        }
      }
    }, [_vm._t("option", [_c('span', [_vm._v(_vm._s(_vm.getOptionLabel(option)))])], {
      option: option,
      search: _vm.search
    })], 2) : _vm._e(), _vm._v(" "), (option && option.$isLabel) ? _c('span', {
      staticClass: "multiselect__option multiselect__option--disabled",
      class: _vm.optionHighlight(index, option)
    }, [_vm._v("\n              " + _vm._s(option.$groupLabel) + "\n            ")]) : _vm._e()])
  }) : _vm._e(), _vm._v(" "), _c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.filteredOptions.length === 0 && _vm.search && !_vm.loading),
      expression: "filteredOptions.length === 0 && search && !loading"
    }]
  }, [_c('span', {
    staticClass: "multiselect__option"
  }, [_vm._t("noResult", [_vm._v("No elements found. Consider changing the search query.")])], 2)]), _vm._v(" "), _vm._t("afterList")], 2)])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d511e8aa", module.exports)
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("1d70c3e4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d511e8aa\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Multiselect.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d511e8aa\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Multiselect.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(12)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-multiselect.js.map