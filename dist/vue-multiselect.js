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

function isEmpty(opt) {
  if (opt === 0) return false;
  if (Array.isArray(opt) && opt.length === 0) return true;
  return !opt;
}

function includes(str, query) {
  if (str === undefined) str = 'undefined';
  if (str === null) str = 'null';
  if (str === false) str = 'false';
  var text = str.toString().toLowerCase();
  return text.indexOf(query.trim()) !== -1;
}

function filterOptions(options, search, label, customLabel) {
  return options.filter(function (option) {
    return includes(customLabel(option, label), search);
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
      return prev;
    }, []);
  };
}

function filterGroups(search, label, values, groupLabel, customLabel) {
  return function (groups) {
    return groups.map(function (group) {
      var _ref;

      if (!group[values]) {
        console.warn('Options passed to vue-multiselect do not contain groups, despite the config.');
        return [];
      }
      var groupOptions = filterOptions(group[values], search, label, customLabel);

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
      prefferedOpenDirection: 'below',
      optimizedHeight: this.maxHeight,
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
        if (isEmpty(option)) return '';
        return label ? option[label] : option;
      }
    },

    inputClass: {
      default: null
    },

    inputContainerClass: {
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
    },
    preserveSearch: {
      type: Boolean,
      default: false
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
        options = this.groupValues ? this.filterAndFlat(options, normalizedSearch, this.label) : filterOptions(options, normalizedSearch, this.label, this.customLabel);

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
      return options.map(function (element) {
        return _this2.customLabel(element, _this2.label).toString().toLowerCase();
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
      return flow(filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel), flattenOptions(this.groupValues, this.groupLabel))(options);
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
      if (isEmpty(option)) return '';

      if (option.isTag) return option.label;

      if (option.$isLabel) return option.$groupLabel;

      return this.customLabel(option, this.label) || '';
    },
    select: function select(option, key) {
      if (this.blockKeys.indexOf(key) !== -1 || this.disabled || option.$isLabel || option.$isDisabled) return;

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
      var shouldClose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (this.disabled) return;

      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }

      var index = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' ? this.valueKeys.indexOf(option[this.trackBy]) : this.valueKeys.indexOf(option);

      this.internalValue.splice(index, 1);
      this.$emit('remove', (0, _utils2.default)(option), this.id);
      this.$emit('input', this.getValue(), this.id);

      if (this.closeOnSelect && shouldClose) this.deactivate();
    },
    removeLastElement: function removeLastElement() {
      if (this.blockKeys.indexOf('Delete') !== -1) return;

      if (this.search.length === 0 && Array.isArray(this.internalValue)) {
        this.removeElement(this.internalValue[this.internalValue.length - 1], false);
      }
    },
    activate: function activate() {
      var _this3 = this;

      if (this.isOpen || this.disabled) return;

      this.adjustPosition();

      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1;
      }

      this.isOpen = true;

      if (this.searchable) {
        if (!this.preserveSearch) this.search = '';
        this.$nextTick(function () {
          return _this3.$refs.search.focus();
        });
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
      if (!this.preserveSearch) this.search = '';
      this.$emit('close', this.getValue(), this.id);
    },
    toggle: function toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },
    adjustPosition: function adjustPosition() {
      if (typeof window === 'undefined') return;

      var spaceAbove = this.$el.getBoundingClientRect().top;
      var spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      var hasEnoughSpaceBelow = spaceBelow > this.maxHeight;

      if (hasEnoughSpaceBelow || spaceBelow > spaceAbove || this.openDirection === 'below' || this.openDirection === 'bottom') {
        this.prefferedOpenDirection = 'below';
        this.optimizedHeight = Math.min(spaceBelow, this.maxHeight) - 40;
      } else {
        this.prefferedOpenDirection = 'above';
        this.optimizedHeight = Math.min(spaceAbove, this.maxHeight) - 40;
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
__webpack_require__(6)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(8),
  /* scopeId */
  null,
  /* cssModules */
  null
)

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
    name: {
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
    },

    openDirection: {
      type: String,
      default: ''
    },
    showNoResults: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
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
    },
    inputStyle: function inputStyle() {
      if (this.multiple && this.value && this.value.length) {
        return this.isOpen ? { 'width': 'auto' } : { 'display': 'none' };
      }
    },
    contentStyle: function contentStyle() {
      return this.options.length ? { 'display': 'inline-block' } : { 'display': 'block' };
    },
    isAbove: function isAbove() {
      if (this.openDirection === 'above' || this.openDirection === 'top') {
        return true;
      } else if (this.openDirection === 'below' || this.openDirection === 'bottom') {
        return false;
      } else {
        return this.prefferedOpenDirection === 'above';
      }
    }
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "multiselect",
    class: {
      'multiselect--active': _vm.isOpen, 'multiselect--disabled': _vm.disabled, 'multiselect--above': _vm.isAbove
    },
    attrs: {
      "tabindex": _vm.tabindex
    },
    on: {
      "focus": function($event) {
        _vm.activate()
      },
      "blur": function($event) {
        _vm.searchable ? false : _vm.deactivate()
      },
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
        if ($event.target !== $event.currentTarget) { return null; }
        $event.preventDefault();
        _vm.pointerForward()
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
        if ($event.target !== $event.currentTarget) { return null; }
        $event.preventDefault();
        _vm.pointerBackward()
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13) && _vm._k($event.keyCode, "tab", 9)) { return null; }
        $event.stopPropagation();
        if ($event.target !== $event.currentTarget) { return null; }
        _vm.addPointerElement($event)
      }],
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        _vm.deactivate()
      }
    }
  }, [_vm._t("carret", [_c('div', {
    staticClass: "multiselect__select",
    on: {
      "mousedown": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.toggle()
      }
    }
  })]), _vm._v(" "), _vm._t("clear", null, {
    search: _vm.search
  }), _vm._v(" "), _c('div', {
    ref: "tags",
    staticClass: "multiselect__tags",
    class: _vm.inputContainerClass
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visibleValue.length > 0),
      expression: "visibleValue.length > 0"
    }],
    staticClass: "multiselect__tags-wrap"
  }, [_vm._l((_vm.visibleValue), function(option) {
    return [_vm._t("tag", [_c('span', {
      staticClass: "multiselect__tag"
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
          if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
          $event.preventDefault();
          _vm.removeElement(option)
        },
        "mousedown": function($event) {
          $event.preventDefault();
          _vm.removeElement(option)
        }
      }
    })])], {
      option: option,
      search: _vm.search,
      remove: _vm.removeElement
    })]
  })], 2), _vm._v(" "), (_vm.internalValue && _vm.internalValue.length > _vm.limit) ? [_c('strong', {
    staticClass: "multiselect__strong",
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
    style: (_vm.inputStyle),
    attrs: {
      "name": _vm.name,
      "id": _vm.id,
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
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        _vm.deactivate()
      },
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
        $event.preventDefault();
        _vm.pointerForward()
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
        $event.preventDefault();
        _vm.pointerBackward()
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        $event.preventDefault();
        $event.stopPropagation();
        if ($event.target !== $event.currentTarget) { return null; }
        _vm.addPointerElement($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46])) { return null; }
        $event.stopPropagation();
        _vm.removeLastElement()
      }]
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.searchable) ? _c('span', {
    staticClass: "multiselect__single",
    class: _vm.inputClass,
    domProps: {
      "textContent": _vm._s(_vm.currentOptionLabel)
    }
  }) : _vm._e()], 2), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "multiselect"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isOpen),
      expression: "isOpen"
    }],
    ref: "list",
    staticClass: "multiselect__content-wrapper",
    style: ({
      maxHeight: _vm.optimizedHeight + 'px'
    }),
    on: {
      "mousedown": function($event) {
        $event.preventDefault();
      }
    }
  }, [_c('ul', {
    staticClass: "multiselect__content",
    style: (_vm.contentStyle)
  }, [_vm._t("beforeList"), _vm._v(" "), (_vm.multiple && _vm.max === _vm.internalValue.length) ? _c('li', [_c('span', {
    staticClass: "multiselect__option"
  }, [_vm._t("maxElements", [_vm._v("Maximum of " + _vm._s(_vm.max) + " options selected. First remove a selected option to select another.")])], 2)]) : _vm._e(), _vm._v(" "), (!_vm.max || _vm.internalValue.length < _vm.max) ? _vm._l((_vm.filteredOptions), function(option, index) {
    return _c('li', {
      key: index,
      staticClass: "multiselect__element"
    }, [(!(option && (option.$isLabel || option.$isDisabled))) ? _c('span', {
      staticClass: "multiselect__option",
      class: _vm.optionHighlight(index, option),
      attrs: {
        "data-select": option && option.isTag ? _vm.tagPlaceholder : _vm.selectLabelText,
        "data-selected": _vm.selectedLabelText,
        "data-deselect": _vm.deselectLabelText
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.select(option)
        },
        "mouseenter": function($event) {
          if ($event.target !== $event.currentTarget) { return null; }
          _vm.pointerSet(index)
        }
      }
    }, [_vm._t("option", [_c('span', [_vm._v(_vm._s(_vm.getOptionLabel(option)))])], {
      option: option,
      search: _vm.search
    })], 2) : _vm._e(), _vm._v(" "), (option && (option.$isLabel || option.$isDisabled)) ? _c('span', {
      staticClass: "multiselect__option multiselect__option--disabled",
      class: _vm.optionHighlight(index, option)
    }, [_vm._t("option", [_c('span', [_vm._v(_vm._s(_vm.getOptionLabel(option)))])], {
      option: option,
      search: _vm.search
    })], 2) : _vm._e()])
  }) : _vm._e(), _vm._v(" "), _c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showNoResults && (_vm.filteredOptions.length === 0 && _vm.search && !_vm.loading)),
      expression: "showNoResults && (filteredOptions.length === 0 && search && !loading)"
    }]
  }, [_c('span', {
    staticClass: "multiselect__option"
  }, [_vm._t("noResult", [_vm._v("No elements found. Consider changing the search query.")])], 2)]), _vm._v(" "), _vm._t("afterList")], 2)])])], 2)
},staticRenderFns: []}

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-multiselect.js.map