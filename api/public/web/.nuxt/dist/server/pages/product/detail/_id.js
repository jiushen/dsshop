exports.ids = [51,3,4,5,6,7,8,9,14,27,29,31,32,52];
exports.modules = {

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("cf86f00a", content, true, context)
};

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./plugins/scrollTo.js
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;

  if (t < 1) {
    return c / 2 * t * t + b;
  }

  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}; // requestAnimationFrame for Smart Animating http://goo.gl/sx5sts


var requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}(); // because it's so fucking difficult to detect the scrolling element, just move them all


function move(amount) {
  document.documentElement.scrollTop = amount;
  document.body.parentNode.scrollTop = amount;
  document.body.scrollTop = amount;
}

function position() {
  return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
}

function scrollTo(to, duration, callback) {
  const start = position();
  const change = to - start;
  const increment = 20;
  let currentTime = 0;
  duration = typeof duration === 'undefined' ? 500 : duration;

  var animateScroll = function () {
    // increment the time
    currentTime += increment; // find the value with the quadratic in-out easing function

    var val = Math.easeInOutQuad(currentTime, start, change, duration); // move the document.body

    move(val); // do the animation unless its over

    if (currentTime < duration) {
      requestAnimFrame(animateScroll);
    } else {
      if (callback && typeof callback === 'function') {
        // the animation is done so lets callback
        callback();
      }
    }
  };

  animateScroll();
}
// CONCATENATED MODULE: ./components/Pagination/js/index.js

/* harmony default export */ var js = __webpack_exports__["default"] = ({
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 20
    },
    pageSizes: {
      type: Array,

      default() {
        return [10, 20, 30, 50];
      }

    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      },

      set(val) {
        this.$emit('update:page', val);
      }

    },
    pageSize: {
      get() {
        return this.limit;
      },

      set(val) {
        this.$emit('update:limit', val);
      }

    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('pagination', {
        page: this.currentPage,
        limit: val
      });

      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },

    handleCurrentChange(val) {
      this.$emit('pagination', {
        page: val,
        limit: this.pageSize
      });

      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    }

  }
});

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c339c37e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c339c37e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c339c37e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c339c37e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c339c37e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pagination-container[data-v-c339c37e]{background:#fff;padding:32px 16px}.pagination-container.hidden[data-v-c339c37e]{display:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination/index.vue?vue&type=template&id=c339c37e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pagination-container",class:{'hidden':_vm.hidden}},[_c('el-pagination',_vm._b({attrs:{"background":_vm.background,"current-page":_vm.currentPage,"page-size":_vm.pageSize,"layout":_vm.layout,"page-sizes":_vm.pageSizes,"total":_vm.total},on:{"update:currentPage":function($event){_vm.currentPage=$event},"update:current-page":function($event){_vm.currentPage=$event},"update:pageSize":function($event){_vm.pageSize=$event},"update:page-size":function($event){_vm.pageSize=$event},"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}},'el-pagination',_vm.$attrs,false))],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Pagination/index.vue?vue&type=template&id=c339c37e&scoped=true&

// EXTERNAL MODULE: ./components/Pagination/js/index.js + 1 modules
var js = __webpack_require__(171);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Paginationvue_type_script_lang_js_ = (js["default"]);
// CONCATENATED MODULE: ./components/Pagination/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Pagination/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(172)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Paginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c339c37e",
  "2233290d"
  
)

/* harmony default export */ var Pagination = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUserList; });
/* unused harmony export count */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);


function getList(query) {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: 'coupon',
    method: 'GET',
    params: query
  });
}
function getUserList(query) {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: 'coupon/user',
    method: 'GET',
    params: query
  });
}
function count() {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: 'coupon/user/count',
    method: 'GET'
  });
}
function create(data) {
  data = qs__WEBPACK_IMPORTED_MODULE_1___default.a.parse(data);
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: 'coupon',
    method: 'POST',
    data
  });
}

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return detail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return goodCategory; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

function getList(query) {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: 'good',
    method: 'GET',
    params: query
  });
}
function detail(id) {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: 'good/' + id,
    method: 'GET'
  });
}
function goodCategory(query) {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: 'goodCategory',
    method: 'GET',
    params: query
  });
}

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return detail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return good; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);


function detail(id) {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: 'comment/detail/' + id,
    method: 'GET'
  });
}
function good(query) {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: 'comment/good',
    method: 'GET',
    params: query
  });
}
function create(id, data) {
  data = qs__WEBPACK_IMPORTED_MODULE_1___default.a.parse(data);
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: 'comment/' + id,
    method: 'POST',
    data
  });
}

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creatIds", function() { return creatIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLevels", function() { return getLevels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combInArray", function() { return combInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCombFlags", function() { return getCombFlags; });
// skus: [{"k_id":1,"k":"颜色","v_id":11,"v":"红色"},{"k_id":2,"k":"尺寸","v_id":22,"v":"小"}],
// output：1-11_2-22
const creatIds = skus => skus.reduce((total, prev, index) => `${total}${prev.k_id}-${prev.v_id}${index === skus.length - 1 ? '' : '_'}`, ''); // 计算每个sku后面有多少项

function getLevels(tree) {
  const level = [];

  for (let i = tree.length - 1; i >= 0; i--) {
    if (tree[i + 1] && tree[i + 1].leaf) {
      level[i] = tree[i + 1].leaf.length * level[i + 1] || 1;
    } else {
      level[i] = 1;
    }
  }

  return level;
}
/**
 * 笛卡尔积运算
 * @param  {[type]} tree   [description]
 * @param  {Array}  stocks [description]
 * @return {[type]}        [description]
 */

function flatten(tree, stocks = [], options) {
  const {
    optionValue = 'id',
    optionText = 'value'
  } = options || {};
  const result = [];
  let skuLen = 0;
  const stockMap = {}; // 记录已存在的stock的数据

  const level = getLevels(tree);
  if (tree.length === 0) return result;
  tree.forEach(sku => {
    const {
      leaf
    } = sku;
    if (!leaf || leaf.length === 0) return true;
    skuLen = (skuLen || 1) * leaf.length;
  }); // 根据已有的stocks生成一个map

  stocks.forEach(stock => {
    const {
      skus,
      ...attr
    } = stock;
    stockMap[skus.map(item => `${item.k_id}_${item.v_id}`).join('|')] = attr;
  });

  for (let i = 0; i < skuLen; i++) {
    const skus = [];
    const mapKey = [];
    tree.forEach((sku, column) => {
      const {
        leaf
      } = sku;
      let item = {};
      if (!leaf || leaf.length === 0) return true;

      if (leaf.length > 1) {
        const row = parseInt(i / level[column], 10) % leaf.length;
        item = tree[column].leaf[row];
      } else {
        item = tree[column].leaf[0];
      }

      if (!sku[optionValue] || !item[optionValue]) return;
      mapKey.push(`${sku[optionValue]}_${item[optionValue]}`);
      skus.push({
        k_id: sku[optionValue],
        k: sku[optionText],
        v_id: item[optionValue],
        v: item[optionText]
      });
    });
    const { ...data
    } = stockMap[mapKey.join('|')] || {}; // 从map中找出存在的sku并保留其值

    result.push({ ...data,
      skus
    });
  }

  return result;
}
/**
 * 判断两个sku是否相同
 * @param  {[type]}  prevSKU [description]
 * @param  {[type]}  nextSKU [description]
 * @return {Boolean}         [description]
 */

function isEqual(prevSKU, nextSKU, options) {
  const {
    optionValue = 'id'
  } = options || {};
  return nextSKU.length === prevSKU.length && nextSKU.every(({
    leaf = []
  }, index) => {
    const prevLeaf = prevSKU[index].leaf || [];
    return prevSKU[index][optionValue] === nextSKU[index][optionValue] && leaf.length === prevLeaf.length && leaf.map(item => item[optionValue]).join(',') === prevLeaf.map(item => item[optionValue]).join(',');
  });
}
/**
 * 从数组中生成指定长度的组合
 * 方法: 先生成[0,1...]形式的数组, 然后根据0,1从原数组取元素，得到组合数组
 */

function combInArray(aData) {
  if (!aData || !aData.length) {
    return [];
  }

  var len = aData.length;
  var aResult = [];
  var ids = [];

  for (var n = 1; n < len; n++) {
    var aaFlags = getCombFlags(len, n);

    while (aaFlags.length) {
      var aFlag = aaFlags.shift();
      var aComb = [];

      for (var i = 0; i < len; i++) {
        aFlag[i] && aComb.push(aData[i]['v_id']);
      }

      aResult.push(aComb);
    }
  }

  for (var n = 0; n < len; n++) {
    ids.push(aData[n].v_id);
  }

  aResult.push(ids);
  return aResult;
}
/**
 * 得到从 m 元素中取 n 元素的所有组合
 * 结果为[0,1...]形式的数组, 1表示选中，0表示不选
 */

function getCombFlags(m, n) {
  if (!n || n < 1) {
    return [];
  }

  var aResult = [];
  var aFlag = [];
  var bNext = true;
  var i, j, iCnt1;

  for (i = 0; i < m; i++) {
    aFlag[i] = i < n ? 1 : 0;
  }

  aResult.push(aFlag.concat());

  while (bNext) {
    iCnt1 = 0;

    for (i = 0; i < m - 1; i++) {
      if (aFlag[i] == 1 && aFlag[i + 1] == 0) {
        for (j = 0; j < i; j++) {
          aFlag[j] = j < iCnt1 ? 1 : 0;
        }

        aFlag[i] = 0;
        aFlag[i + 1] = 1;
        var aTmp = aFlag.concat();
        aResult.push(aTmp);

        if (aTmp.slice(-n).join("").indexOf('0') == -1) {
          bNext = false;
        }

        break;
      }

      aFlag[i] == 1 && iCnt1++;
    }
  }

  return aResult;
}

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(212);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0bde2f34", content, true, context)
};

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("23dd895b", content, true, context)
};

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(231);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("b20cdc80", content, true, context)
};

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(233);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5ca45718", content, true, context)
};

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "param2Data", function() { return /* binding */ param2Data; });

// CONCATENATED MODULE: ./plugins/index.js
/**
 * @returns {string}
 */
function createUniqueString() {
  const randomNum = parseInt((1 + Math.random()) * 65536) + '';
  return randomNum + new Date().getMilliseconds();
}
// EXTERNAL MODULE: ./components/Sku/utils.js
var utils = __webpack_require__(191);

// CONCATENATED MODULE: ./components/Sku/sku2param.js



function objectValues(obj) {
  var res = [];

  for (var i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      res.push(obj[i]);
    }
  }

  return res;
}

function param2Data(product_skus_data) {
  // product_skus_data 数据结构请参考 `/src/components/mock.js`
  if (!product_skus_data || !product_skus_data.length) return;
  const specificationObj = {}; // 储存所有 spec 的随机生成的 id

  const spec_id_dict = {// '颜色': 'xxxid',
    // '皮质': 'xxxid',
  }; // 储存所有 option 的随机生成的 id

  const option_id_dict = {// '红色': 'xxxid',
    // '绿色': 'xxxid',
    // '蓝色': 'xxxid',
    // '一级皮': 'xxxid',
    // '二级皮': 'xxxid',
    // '三级皮': 'xxxid',
  };
  const productSkus = product_skus_data.map(item => {
    const skusObj = { ...item,
      product_sku_id: item.id,
      skus: item.product_sku.map((sku, index) => {
        // const spec_random_id = createUniqueString() + '_id'
        // const option_random_id = createUniqueString() + '_id'
        const spec_random_id = 'sku' + createUniqueString();
        const option_random_id = 'sku' + createUniqueString(); // 加上 if ，防止 dict 里的 id 被覆盖，每次只记录第一次生成的 id

        if (!spec_id_dict[sku.key]) spec_id_dict[sku.key] = spec_random_id;
        if (!option_id_dict[sku.value]) option_id_dict[sku.value] = option_random_id;
        const sepc_id = spec_id_dict[sku.key];
        const option_id = option_id_dict[sku.value];
        specificationObj[sku.key] = {
          value: sku.key,
          id: sepc_id,
          leaf: { ...(specificationObj[sku.key] ? specificationObj[sku.key].leaf : {}),
            [sku.value]: {
              value: sku.value,
              id: option_id,
              selected: false,
              disabled: false
            }
          }
        };
        return {
          k_id: sepc_id,
          k: sku.key,
          v_id: option_id,
          v: sku.value
        };
      })
    };
    return { ...skusObj,
      ids: Object(utils["creatIds"])(skusObj.skus),
      data: Object(utils["combInArray"])(skusObj.skus)
    };
  });
  const specification = objectValues(specificationObj).map(item => ({ ...item,
    leaf: objectValues(item.leaf)
  }));
  return {
    productSkus,
    specification
  };
}

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return detail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return destroy; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);


function getList(query) {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: 'collect',
    method: 'GET',
    params: query
  });
}
function detail(id) {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: 'collect/' + id,
    method: 'GET'
  });
}
function create(data) {
  data = qs__WEBPACK_IMPORTED_MODULE_1___default.a.parse(data);
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: 'collect',
    method: 'POST',
    data
  });
}
function destroy(id) {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: 'collect/destroy/' + id,
    method: 'POST'
  });
}

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(205);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("64ca229e", content, true)

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".vjs-custom-skin>.video-js{width:100%;font-family:\"PingFang SC\",\"Helvetica Neue\",\"Hiragino Sans GB\",\"Segoe UI\",\"Microsoft YaHei\",\"微软雅黑\",sans-serif}.video-js.vjs-no-flex .vjs-menu-button-inline,.vjs-custom-skin>.video-js .vjs-menu-button-inline.vjs-slider-active,.vjs-custom-skin>.video-js .vjs-menu-button-inline:focus,.vjs-custom-skin>.video-js .vjs-menu-button-inline:hover{width:10em}.vjs-custom-skin>.video-js .vjs-controls-disabled .vjs-big-play-button{display:none!important}.vjs-custom-skin>.video-js .vjs-control{width:3em}.vjs-custom-skin>.video-js .vjs-control.vjs-live-control{width:auto;padding-left:.5em;letter-spacing:.1em}.vjs-custom-skin>.video-js .vjs-menu-button-inline:before{width:1.5em}.vjs-menu-button-inline .vjs-menu{left:3em}.vjs-custom-skin>.video-js .vjs-load-progress div,.vjs-seeking .vjs-big-play-button,.vjs-waiting .vjs-big-play-button{display:none!important}.vjs-custom-skin>.video-js .vjs-mouse-display:after,.vjs-custom-skin>.video-js .vjs-play-progress:after{padding:0 .4em .3em}.video-js.vjs-ended .vjs-loading-spinner{display:none}.video-js.vjs-ended .vjs-big-play-button{display:block!important}.video-js.vjs-ended .vjs-big-play-button,.video-js.vjs-paused .vjs-big-play-button,.vjs-paused.vjs-has-started.vjs-custom-skin>.video-js .vjs-big-play-button{display:block}.vjs-custom-skin>.video-js .vjs-big-play-button{top:50%;left:50%;margin-left:-1.5em;margin-top:-1em;background-color:rgba(0,0,0,.45);font-size:3.5em;height:2em!important;line-height:2em!important;margin-top:-1em!important}.video-js:hover .vjs-big-play-button,.vjs-custom-skin>.video-js .vjs-big-play-button:active,.vjs-custom-skin>.video-js .vjs-big-play-button:focus{background-color:rgba(36,131,213,.9)}.vjs-custom-skin>.video-js .vjs-loading-spinner{border-color:rgba(36,131,213,.8)}.vjs-custom-skin>.video-js .vjs-control-bar2{background-color:#000}.vjs-custom-skin>.video-js .vjs-control-bar{color:#fff;font-size:14px}.vjs-custom-skin>.video-js .vjs-play-progress,.vjs-custom-skin>.video-js .vjs-volume-level{background-color:#2483d5}.vjs-custom-skin>.video-js .vjs-play-progress:before{top:-.3em}.vjs-custom-skin>.video-js .vjs-progress-control:hover .vjs-progress-holder{font-size:1.3em}.vjs-menu-button-popup.vjs-volume-menu-button-vertical .vjs-menu{left:0}.vjs-custom-skin>.video-js .vjs-menu li{padding:0;line-height:2em;font-size:1.1em;font-family:\"PingFang SC\",\"Helvetica Neue\",\"Hiragino Sans GB\",\"Segoe UI\",\"Microsoft YaHei\",\"微软雅黑\",sans-serif}.vjs-custom-skin>.video-js .vjs-mouse-display:after,.vjs-custom-skin>.video-js .vjs-play-progress:after,.vjs-custom-skin>.video-js .vjs-time-tooltip{border-radius:0;font-size:1em;padding:0;width:3em;height:1.5em;line-height:1.5em;top:-3em}.vjs-custom-skin>.video-js .vjs-menu-button-popup .vjs-menu{width:5em;left:-1em}.vjs-custom-skin>.video-js .vjs-menu-button-popup.vjs-volume-menu-button-vertical .vjs-menu{left:0}.vjs-custom-skin>.video-js .vjs-control-bar .vjs-play-control{order:0}.vjs-custom-skin>.video-js .vjs-control-bar .vjs-time-control{min-width:1em;padding:0;margin:0 .1em;text-align:center;display:block;order:1}.vjs-custom-skin>.video-js .vjs-control-bar .vjs-playback-rate .vjs-playback-rate-value{font-size:1.2em;line-height:2.4}.vjs-custom-skin>.video-js .vjs-progress-control.vjs-control{order:2}.vjs-custom-skin>.video-js .vjs-control-bar .vjs-volume-menu-button{order:3}.vjs-custom-skin>.video-js .vjs-control-bar .vjs-resolution-button{order:4}.vjs-custom-skin>.video-js .vjs-control-bar .vjs-resolution-button .vjs-resolution-button-label{display:block;line-height:3em}.vjs-custom-skin>.video-js .vjs-control-bar .vjs-playback-rate{order:5}.vjs-custom-skin>.video-js .vjs-control-bar .vjs-fullscreen-control{order:6}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(182);

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      list: [],
      imgList: [],
      listQuery: {
        limit: 10,
        page: 1,
        good_id: 0,
        sort: '-created_at'
      },
      loading: false,
      total: 0
    };
  },

  mounted() {
    if (!$nuxt.$route.params.id) {
      this.$message.error('参数有误');
      $nuxt.$router.go(-1);
      return false;
    }

    this.listQuery.good_id = $nuxt.$route.params.id;
    this.getList();
  },

  methods: {
    getList() {
      this.loading = true;
      Promise.all([Object(_api_comment__WEBPACK_IMPORTED_MODULE_0__[/* good */ "c"])(this.listQuery)]).then(([data]) => {
        this.list = data.data;
        this.total = data.total;
        this.loading = false;
      }).catch(error => {
        this.loading = false;
      });
    }

  }
});

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_coupon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CouponIndex',

  data() {
    return {
      tableLoading: false,
      checkboxAll: false,
      loading: true,
      buttonLoading: false,
      list: [],
      total: 0,
      listQuery: {
        limit: 10,
        page: 1,
        sort: '-created_at'
      }
    };
  },

  mounted() {
    if ($nuxt.$store.state.hasLogin) {
      this.getList();
    }
  },

  methods: {
    async getList() {
      this.loading = true;
      await Promise.all([Object(_api_coupon__WEBPACK_IMPORTED_MODULE_0__[/* getList */ "b"])(this.listQuery)]).then(([data]) => {
        this.list = data.data;
        this.total = data.total;
        this.loading = false;
      }).catch(error => {
        this.loading = false;
      });
    },

    popover() {
      if (!$nuxt.$store.state.hasLogin) {
        $nuxt.$store.commit('loginCheck');
        return false;
      }
    },

    // 领取
    getCreate(item) {
      this.buttonLoading = true;
      Object(_api_coupon__WEBPACK_IMPORTED_MODULE_0__[/* create */ "a"])(item).then(() => {
        this.getList();
        this.buttonLoading = false;
        this.$message({
          message: '领取成功',
          type: 'success'
        });
      });
    }

  }
});

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(156);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(157);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(158);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(159);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(160);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(161);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(162);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(163);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(164);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(165);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(166);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(167);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Sku_sku2param__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(201);
/* harmony import */ var _api_goodIndent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22);














const store = __webpack_require__(15);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'sku',
  props: {
    getList: {
      type: Object,
      default: function () {
        return {};
      }
    },
    cartDetails: {
      type: Object,
      default: function () {
        return {};
      }
    },
    update: {
      type: Boolean,
      default: false
    },
    order: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      cartGood: {
        number: 1,
        price: ''
      },
      specSelected: [],
      SKUResult: {},
      good_sku: {},
      //原sku属性
      selectedSku: [],
      //记录当前所有可以选择的项
      selectedSkuIndex: [[]],
      //获取可选项对应的坐标
      specSelectedIndex: [],
      //记录选中的坐标
      productSkus: [],
      selectedName: [],
      //已选属性
      noSelectedName: [],
      //未选属性
      specificationDefaultDisplay: {},
      // 规格默认显示
      specification: [],
      shoppingAttributes: [],
      //购物属性
      getLists: this.getList
    };
  },

  watch: {
    getList(newVal) {
      this.$emit('getList', newVal);
      this.getLists = this.getList;

      if (!this.update) {
        this.loadData();
      }
    },

    getLists(newVal) {
      this.$emit('getLists', newVal);
    },

    cartDetails(newVal) {
      this.getLists = newVal.good;
      this.initSelectSpec(newVal);
    }

  },

  mounted() {
    this.loadData();
  },

  methods: {
    //获取详情
    loadData() {
      this.selectedSku = []; // Sku

      if (this.getLists.good_sku.length > 0) {
        const {
          productSkus,
          specification
        } = Object(_components_Sku_sku2param__WEBPACK_IMPORTED_MODULE_13__["param2Data"])(this.getLists.good_sku);
        this.specification = specification;
        specification.forEach((item, index) => {
          this.specSelectedIndex.push(null);
          this.noSelectedName.push(item.value);
          item.leaf.forEach((item2, index2) => {
            this.selectedSku.push(item2.id);
            this.selectedSkuIndex[item2.id] = {
              index: index,
              leaf: index2
            };
          });
        }); // return false

        this.productSkus = productSkus; // 获取可选集成

        productSkus.forEach((item, ind) => {
          item.data.forEach(item2 => {
            item2.sort(function (value1, value2) {
              return parseInt(value1.replace("sku", "")) - parseInt(value2.replace("sku", ""));
            });
            this.SKUResult[item2.join("_")] = true;
          });
        }); // 规格默认属性

        this.specificationDefaultDisplay = {
          img: this.getLists.resources_many[0].img,
          price_show: this.getLists.price_show,
          inventory_show: this.getLists.inventory_show,
          selected: '选择 ' + this.noSelectedName
        };
        this.$emit('purchasePattern', this.specificationDefaultDisplay);
      } else {
        this.specificationDefaultDisplay = {
          img: this.getLists.resources_many[0].img,
          price_show: this.getLists.price_show,
          inventory_show: this.getLists.inventory_show
        };
        this.cartGood.price = this.getLists.price;
      } //自动选择默认第一项规格


      if (typeof this.specification[0].leaf[0] != 'undefined') {
        for (var i = 0; i < this.specification.length; i++) {
          this.selectSpec(i, 0, this.specification[i].leaf[0]);
        }
      }
    },

    //初始化选中项
    initSelectSpec(newVal) {
      this.selectedSku = [];
      this.SKUResult = [];
      this.cartGood.price = newVal.price;
      this.cartGood.number = newVal.number;
      this.shoppingAttributes = newVal.good_sku;
      this.good_sku = newVal.good_sku;
      let checkedId = []; //选中的ID

      let checkedBrother = []; //兄弟列表
      // Sku

      if (newVal.good_sku) {
        const {
          productSkus,
          specification
        } = Object(_components_Sku_sku2param__WEBPACK_IMPORTED_MODULE_13__["param2Data"])(this.getLists.good_sku);
        this.specification = specification;
        specification.forEach((item, index) => {
          item.leaf.forEach((item2, index2) => {
            // 设置选中的值
            for (var i = 0; i < newVal.good_sku.product_sku.length; i++) {
              if (item2.value === newVal.good_sku.product_sku[i].value) {
                item.leaf[index2].selected = true;
                this.specSelectedIndex[index] = index2;

                if (index2 !== null) {
                  checkedId.push(specification[index]['leaf'][index2]['id']);
                  checkedBrother.push(index);
                }

                break;
              }
            }

            this.selectedSku.push(item2.id);
            this.selectedSkuIndex[item2.id] = {
              index: index,
              leaf: index2
            };
          });
        });
        this.productSkus = productSkus; // 获取可选集成

        productSkus.forEach((item, ind) => {
          item.data.forEach(item2 => {
            item2.sort(function (value1, value2) {
              return parseInt(value1.replace("sku", "")) - parseInt(value2.replace("sku", ""));
            });
            this.SKUResult[item2.join("_")] = true;
          });
        });
      }

      this.specificationDefaultDisplay = {
        img: newVal.img,
        price_show: [newVal.good_sku.price],
        inventory_show: newVal.good_sku.inventory,
        selected: '已选 ' + newVal.specification
      }; // 处理不可选项

      let selectedSkus = JSON.parse(JSON.stringify(this.selectedSku)); //判断属性是否可选

      let assemblyCache = []; //组合临时存放
      // 去除选中后的可选项

      selectedSkus.forEach(item => {
        //选把未选中的和选中的组合，如果是选中兄弟节点，把选中的值移除
        assemblyCache = JSON.parse(JSON.stringify(checkedId));
        assemblyCache.push(item);
        checkedBrother.forEach((item2, index2) => {
          this.specification[item2].leaf.forEach(item3 => {
            // 和选中行是兄弟关系
            if (item3.id === item) {
              assemblyCache.splice(assemblyCache.indexOf(checkedId[index2]), 1);
            }
          });
        });
        assemblyCache.sort(function (value1, value2) {
          return parseInt(value1.replace("sku", "")) - parseInt(value2.replace("sku", ""));
        }); // assembly.push(assemblyCache.join("_"))
        // 判断选择项是否在可选集合内

        if (!this.SKUResult[assemblyCache.join("_")]) {
          this.specification[this.selectedSkuIndex[item].index].leaf[this.selectedSkuIndex[item].leaf].disabled = true;
        } else {
          this.specification[this.selectedSkuIndex[item].index].leaf[this.selectedSkuIndex[item].leaf].disabled = false;
        }
      });
    },

    //输入价格
    priceInput: function (event) {
      this.cartGood.price = parseFloat(event.target.value);
    },

    //选择规格
    selectSpec(index, childIndex, res) {
      if (res.disabled) {
        //不可选的直接返回
        return false;
      }

      let chooseAll = false; //是否选全

      let specification = this.specification; // 选中的清空

      if (this.specSelectedIndex[index] === childIndex) {
        //选择结果相同处理
        this.$set(specification[index]['leaf'][childIndex], 'selected', specification[index]['leaf'][childIndex]['selected'] ? false : true);
        this.specSelectedIndex[index] = null; // 添加未选择的值

        this.noSelectedName.splice(index, 0, specification[index].value);
      } else {
        //选择不同的处理
        if (this.specSelectedIndex[index] !== null) {
          //不等于null的时候把同个规格的其它参数设为未选中
          this.$set(specification[index]['leaf'][this.specSelectedIndex[index]], 'selected', false);
        }

        this.$set(specification[index]['leaf'][childIndex], 'selected', specification[index]['leaf'][childIndex]['selected'] ? false : true);
        this.specSelectedIndex[index] = childIndex; // this.noSelectedName
        // 删除选中的元素

        this.noSelectedName.forEach((item, indexs) => {
          if (item === specification[index].value) {
            this.noSelectedName.splice(indexs, 1);
          }
        });
      }

      if (this.noSelectedName.length > 0) {
        this.specificationDefaultDisplay = {
          img: this.getLists.resources_many[0].img,
          price_show: this.getLists.price_show,
          inventory_show: this.getLists.inventory_show,
          selected: '选择 ' + this.noSelectedName
        };

        if (!this.update) {
          this.$emit('purchasePattern', this.specificationDefaultDisplay);
        }
      } //保存最新选择的位置
      //存储已选择

      /**
       * 修复选择规格存储错误
       * 将这几行代码替换即可
       * 选择的规格存放在specSelected中
       */


      this.specSelected = [];
      let ids = '';
      let checkedId = []; //选中的ID

      let checkedBrother = []; //兄弟列表

      let selectedSkus = JSON.parse(JSON.stringify(this.selectedSku));
      this.specSelectedIndex.forEach((item, index) => {
        if (item !== null) {
          this.specSelected.push(specification[index]['leaf'][item]);
          ids += specification[index]['id'] + '-' + specification[index]['leaf'][item]['id'] + '_';
          checkedId.push(specification[index]['leaf'][item]['id']);
          selectedSkus.splice(selectedSkus.indexOf(specification[index]['leaf'][item]['id']), 1);
          checkedBrother.push(index);
          chooseAll = true;
        } else {
          chooseAll = false;
        }
      }); //判断属性是否可选

      let assemblyCache = []; //组合临时存放
      // 去除选中后的可选项

      selectedSkus.forEach(item => {
        //选把未选中的和选中的组合，如果是选中兄弟节点，把选中的值移除
        assemblyCache = JSON.parse(JSON.stringify(checkedId));
        assemblyCache.push(item);
        checkedBrother.forEach((item2, index2) => {
          this.specification[item2].leaf.forEach(item3 => {
            // 和选中行是兄弟关系
            if (item3.id === item) {
              assemblyCache.splice(assemblyCache.indexOf(checkedId[index2]), 1);
            }
          });
        });
        assemblyCache.sort(function (value1, value2) {
          return parseInt(value1.replace("sku", "")) - parseInt(value2.replace("sku", ""));
        }); // assembly.push(assemblyCache.join("_"))
        // 判断选择项是否在可选集合内

        if (!this.SKUResult[assemblyCache.join("_")]) {
          specification[this.selectedSkuIndex[item].index].leaf[this.selectedSkuIndex[item].leaf].disabled = true;
        } else {
          specification[this.selectedSkuIndex[item].index].leaf[this.selectedSkuIndex[item].leaf].disabled = false;
        }
      }); // console.log(ids.substr(0, ids.length - 1))
      // 选项已选择

      if (chooseAll === true) {
        this.cartGood.number = 1;
        this.shoppingAttributes = [];

        for (var i = 0; i < this.productSkus.length; i++) {
          if (this.productSkus[i].ids === ids.substr(0, ids.length - 1)) {
            const specificationDefaultDisplay = this.specificationDefaultDisplay;
            const selectedName = [];
            this.productSkus[i].skus.forEach(items => {
              selectedName.push(items.v);
            });
            this.specificationDefaultDisplay = {
              img: this.productSkus[i].resources ? this.productSkus[i].resources.img : this.getLists.resources_many[0].img,
              price_show: [this.productSkus[i].price],
              inventory_show: this.productSkus[i].inventory,
              selected: '已选 ' + selectedName.join(";"),
              cost_price: this.productSkus[i].cost_price
            };

            if (!this.update) {
              this.$emit('purchasePattern', this.specificationDefaultDisplay);
            }

            this.cartGood.price = this.productSkus[i].price;
            this.shoppingAttributes = this.productSkus[i];
            break;
          }
        }
      }
    },

    //数量
    numberChange(data) {
      this.cartGood.number = data;
    },

    //加入购物车
    cart(buyState) {
      // 单品或已选规格
      if (this.shoppingAttributes.id > 0 || this.getLists.good_sku.length === 0) {
        const tmp = /^\d+\.?\d{0,2}$/;

        if (!tmp.test(this.cartGood.price)) {
          this.$message.error('输入的金额有误');
          return false;
        }

        this.$emit('toggleSpec');

        if (this.order) {
          //订单更新，直接返回更新后的数据
          // 非SKU商品不允许订单下修改，故不做处理
          if (this.getLists.good_sku.length > 0) {
            let img = this.getLists.resources_many[0].img;

            if (this.shoppingAttributes.resources) {
              img = this.shoppingAttributes.resources.img;
            }

            let cart = {
              id: this.cartDetails.id ? this.cartDetails.id : 0,
              name: this.getLists.name,
              price: this.cartGood.price,
              number: this.cartGood.number,
              good_sku_id: this.shoppingAttributes.id,
              good_id: this.getLists.id,
              good: this.getLists,
              good_sku: this.shoppingAttributes,
              img: img
            };
            this.$emit('setOrder', cart);
          }
        } else {
          // store.remove(process.env.CACHE_PR + 'CartList')
          let cartList = store.get("DSSHOP-PC-" + 'CartList') || [];
          let cartMap = new Map();

          if (buyState) {
            //直接购买
            cartList = [];
          }

          cartList.forEach(item => {
            cartMap.set(item.good_sku_id, item);
          });
          let img = this.getLists.resources_many[0].img; //Sku

          if (this.getLists.good_sku.length > 0) {
            if (this.shoppingAttributes.resources) {
              img = this.shoppingAttributes.resources.img;
            }

            if (this.update) {
              //更新
              // 判断用户是否更改了SKU
              if (this.good_sku.id !== this.shoppingAttributes.id) {
                cartMap.delete(this.good_sku.id);
              }
            }

            if (cartMap.get(this.shoppingAttributes.id)) {
              //已存在，更新其它属性，增加新添加的数量
              if (this.update) {
                //更新
                cartMap.get(this.shoppingAttributes.id).number = this.cartGood.number;
              } else {
                cartMap.get(this.shoppingAttributes.id).number += this.cartGood.number;
              } //如果购物车商品购买数大于当前库存，将结果改成库存数量


              if (cartMap.get(this.shoppingAttributes.id).number > this.specificationDefaultDisplay.inventory_show) {
                cartMap.get(this.shoppingAttributes.id).number = this.specificationDefaultDisplay.inventory_show;
              }

              cartMap.get(this.shoppingAttributes.id).price = this.cartGood.price;
              cartMap.get(this.shoppingAttributes.id).name = this.getLists.name;
              cartMap.get(this.shoppingAttributes.id).good_id = this.getLists.id;
              const good = JSON.parse(JSON.stringify(this.getLists));
              delete good.details;
              cartMap.get(this.shoppingAttributes.id).good = good;
              cartMap.get(this.shoppingAttributes.id).good_sku_id = this.shoppingAttributes.id;
              cartMap.get(this.shoppingAttributes.id).good_sku = this.shoppingAttributes;
              cartMap.get(this.shoppingAttributes.id).img = img;
            } else {
              cartMap.set(this.shoppingAttributes.id, {
                price: this.cartGood.price,
                number: this.cartGood.number,
                name: this.getLists.name,
                good_id: this.getLists.id,
                good: this.getLists,
                good_sku_id: this.shoppingAttributes.id,
                good_sku: this.shoppingAttributes,
                img: img
              });
            }
          } else {
            // 现只有sku商品，故这里不做处理
            if (cartList['good_' + this.getLists.id]) {
              if (this.update) {
                //更新
                cartList['good_' + this.getLists.id].number = this.cartGood.number;
              } else {
                cartList['good_' + this.getLists.id].number += this.cartGood.number;
              } //如果购物车商品购买数大于当前库存，将结果改成库存数量


              if (cartList['good_' + this.getLists.id].number > this.getLists.inventory_show) {
                cartList['good_' + this.getLists.id].number = this.getLists.inventory_show;
              }

              cartList['good_' + this.getLists.id].price = this.cartGood.price;
              cartList['good_' + this.getLists.id].name = this.getLists.name;
              cartList['good_' + this.getLists.id].good_id = this.getLists.id;
              cartList['good_' + this.getLists.id].good = this.getLists;
              cartList['good_' + this.getLists.id].img = img;
            } else {
              cartList['good_' + this.getLists.id] = {
                price: this.cartGood.price,
                number: this.cartGood.number,
                name: this.getLists.name,
                good_id: this.getLists.id,
                good: this.getLists,
                img: img
              };
            }
          }

          if (buyState) {
            //直接购买
            store.set("DSSHOP-PC-" + 'OrderList', [...cartMap.values()]);
          } else {
            // 发送给后台
            Object(_api_goodIndent__WEBPACK_IMPORTED_MODULE_14__[/* addShoppingCart */ "a"])([...cartMap.values()], function (res) {
              this.$emit('loadCart'); //重载数据
            });
            store.set("DSSHOP-PC-" + 'CartList', [...cartMap.values()]);
            $nuxt.$store.commit('setShoppingCartNumber', cartMap.size);
          }
        }

        this.initList();

        if (this.update) {//更新
        } else {
          if (buyState) {
            //直接购买
            this.$router.replace('/indent/create');
          } else {
            this.$message({
              message: '成功加入购物车',
              type: 'success'
            });
          }
        }
      } else {
        this.$message.error('请选择规格');
      }
    },

    //初始化
    initList() {
      this.cartGood = {
        number: 1,
        price: ''
      };
      this.specification = [];
      this.specificationDefaultDisplay = [];
      this.SKUResult = [];
      this.specSelected = [];
      this.specSelectedIndex = [];
      this.selectedName = [];
      this.noSelectedName = [];
      this.selectedSku = [];
      this.selectedSkuIndex = [[]];
      this.productSkus = [];
      this.shoppingAttributes = [];
      this.loadData();
    }

  }
});

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_video_player_src_custom_theme_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(204);
/* harmony import */ var vue_video_player_src_custom_theme_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_video_player_src_custom_theme_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    poster: {
      type: String,
      default: ''
    },
    sources: {
      type: String,
      default: ''
    },
    aspectRatio: {
      type: String,
      default: '4:4'
    }
  },

  data() {
    return {
      playsinline: true,
      playerOptions: {
        // 播放器配置
        muted: false,
        // 是否静音
        language: 'zh-CN',
        aspectRatio: this.aspectRatio,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        // 播放速度
        controls: true,
        preload: 'auto',
        // 视频预加载
        fluid: true,
        sources: [{
          type: 'video/mp4',
          src: this.sources
        }],
        poster: this.poster,
        // 封面图
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮

        }
      }
    };
  },

  mounted() {},

  methods: {
    // 监听播放
    onPlayerPlay(player) {// console.log('player play!', player)
    },

    // 监听暂停
    onPlayerPause(player) {// console.log('player pause!', player)
    },

    // 监听停止
    onPlayerEnded(player) {// console.log('player ended!', player)
    },

    // 监听加载完成
    onPlayerLoadeddata(player) {// console.log('player Loadeddata!', player)
    },

    // 监听视频缓存等待
    onPlayerWaiting(player) {// console.log('player Waiting!', player)
    },

    // 监听视频暂停后播放
    onPlayerPlaying(player) {// console.log('player Playing!', player)
    },

    // 监听视频播放时长更新
    onPlayerTimeupdate(player) {// console.log('player Timeupdate!', player.currentTime())
    },

    onPlayerCanplay(player) {
      console.log('player Canplay!', player);
    },

    onPlayerCanplaythrough(player) {// console.log('player Canplaythrough!', player)
    },

    // 监听状态改变
    playerStateChanged(playerCurrentState) {// console.log('player current update state', playerCurrentState)
    },

    // 监听播放器准备就绪
    playerReadied(player) {// console.log('example 01: the player is readied', player)
    }

  }
});

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_fe8f2d76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_fe8f2d76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_fe8f2d76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_fe8f2d76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_fe8f2d76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".box[data-v-fe8f2d76]{padding-top:20px}.box .details[data-v-fe8f2d76]{padding-bottom:10px}.box .imgList .img[data-v-fe8f2d76]{border:2px solid #f2f2f2;padding:2px;width:80px;height:80px;margin-right:5px}.box .time[data-v-fe8f2d76]{color:#ccc}.box .reply[data-v-fe8f2d76]{color:#fa524c}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c70d162_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(196);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c70d162_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c70d162_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c70d162_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c70d162_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".tag[data-v-5c70d162]{margin-left:10px;width:80px;height:40px;line-height:40px;text-align:center;font-size:14px;border-style:dashed;cursor:pointer}.ul .li[data-v-5c70d162]{padding:10px;display:flex;align-items:flex-start}.ul .li .money[data-v-5c70d162]{color:#fa524c;width:70px;text-align:center;border:1px dashed #fa524c;line-height:25px;padding:0 10px;margin:5px 10px 5px 0}.ul .li .explain[data-v-5c70d162]{width:220px;padding-right:10px}.ul .li .explain .name[data-v-5c70d162]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ul .li .button[data-v-5c70d162]{margin-top:8px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_99a4d6fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_99a4d6fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_99a4d6fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_99a4d6fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_99a4d6fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".specification-list[data-v-99a4d6fc]{display:flex;margin-top:10px}.specification-list .name[data-v-99a4d6fc]{font-size:12px;line-height:40px;width:80px;text-align:right;color:#999}.specification-list .item-list[data-v-99a4d6fc]{flex:1;display:flex;flex-wrap:wrap}.specification-list .item-list .item[data-v-99a4d6fc]{border:1px solid #e0e0e0;line-height:40px;padding:0 20px;margin-left:10px;margin-bottom:10px;cursor:pointer}.specification-list .item-list .selected[data-v-99a4d6fc]{border:1px solid #fa524c;color:#fa524c}.specification-list .item-list .disabled[data-v-99a4d6fc]{color:#c0c4cc;border:1px solid #c0c4cc}.purchase-quantity[data-v-99a4d6fc]{margin-top:20px;display:flex;line-height:40px}.purchase-quantity .name[data-v-99a4d6fc]{font-size:12px;width:80px;text-align:right;margin-right:10px;color:#999}.purchase-quantity .inventory[data-v-99a4d6fc]{font-size:12px;margin-left:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueVideo_vue_vue_type_style_index_0_id_5eeaa29e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(200);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueVideo_vue_vue_type_style_index_0_id_5eeaa29e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueVideo_vue_vue_type_style_index_0_id_5eeaa29e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueVideo_vue_vue_type_style_index_0_id_5eeaa29e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueVideo_vue_vue_type_style_index_0_id_5eeaa29e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sku/index.vue?vue&type=template&id=99a4d6fc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode((_vm._ssrList((_vm.specification),function(item,index){return ("<div class=\"specification-list\" data-v-99a4d6fc><div class=\"name\" data-v-99a4d6fc>"+_vm._ssrEscape("选择"+_vm._s(item.value))+"</div> <div class=\"item-list\" data-v-99a4d6fc>"+(_vm._ssrList((item.leaf),function(childItem,childIndex){return ("<div"+(_vm._ssrClass("item",{ selected: childItem.selected, disabled: childItem.disabled}))+" data-v-99a4d6fc>"+_vm._ssrEscape("\n          "+_vm._s(childItem.value)+"\n        ")+"</div>")}))+"</div></div>")}))+" "),_vm._ssrNode("<div class=\"purchase-quantity\" data-v-99a4d6fc>","</div>",[_vm._ssrNode("<div class=\"name\" data-v-99a4d6fc>购买数量</div> "),_vm._ssrNode("<div class=\"quantity\" data-v-99a4d6fc>","</div>",[_c('el-input-number',{attrs:{"min":1,"max":_vm.specificationDefaultDisplay.inventory_show},on:{"change":_vm.numberChange},model:{value:(_vm.cartGood.number>_vm.specificationDefaultDisplay.inventory_show?_vm.specificationDefaultDisplay.inventory_show:_vm.cartGood.number),callback:function ($$v) {_vm.$set(_vm.cartGood.number>_vm.specificationDefaultDisplay.inventory_show?_vm.specificationDefaultDisplay.inventory_show:_vm.cartGood, "number", $$v)},expression:"cartGood.number>specificationDefaultDisplay.inventory_show?specificationDefaultDisplay.inventory_show:cartGood.number"}})],1),_vm._ssrNode(" <div class=\"inventory\" data-v-99a4d6fc>"+_vm._ssrEscape("件 (库存："+_vm._s(_vm.specificationDefaultDisplay.inventory_show)+"件)")+"</div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Sku/index.vue?vue&type=template&id=99a4d6fc&scoped=true&

// EXTERNAL MODULE: ./components/Sku/js/index.js
var js = __webpack_require__(209);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sku/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Skuvue_type_script_lang_js_ = (js["default"]);
// CONCATENATED MODULE: ./components/Sku/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Skuvue_type_script_lang_js_ = (Skuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Sku/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(230)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Skuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "99a4d6fc",
  "4cd39da6"
  
)

/* harmony default export */ var Sku = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VueVideo.vue?vue&type=template&id=5eeaa29e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"vueVideo"},[_c('div',{directives:[{name:"video-player",rawName:"v-video-player:myVideoPlayer",value:(_vm.playerOptions),expression:"playerOptions",arg:"myVideoPlayer"}],staticClass:"video-player vjs-custom-skin",attrs:{"playsinline":_vm.playsinline},on:{"play":function($event){return _vm.onPlayerPlay($event)},"pause":function($event){return _vm.onPlayerPause($event)},"ended":function($event){return _vm.onPlayerEnded($event)},"loadeddata":function($event){return _vm.onPlayerLoadeddata($event)},"waiting":function($event){return _vm.onPlayerWaiting($event)},"playing":function($event){return _vm.onPlayerPlaying($event)},"timeupdate":function($event){return _vm.onPlayerTimeupdate($event)},"canplay":function($event){return _vm.onPlayerCanplay($event)},"canplaythrough":function($event){return _vm.onPlayerCanplaythrough($event)},"ready":_vm.playerReadied,"statechanged":function($event){return _vm.playerStateChanged($event)}}},[])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/VueVideo.vue?vue&type=template&id=5eeaa29e&scoped=true&

// EXTERNAL MODULE: ./components/js/VueVideo.js
var VueVideo = __webpack_require__(210);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VueVideo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var VueVideovue_type_script_lang_js_ = (VueVideo["default"]);
// CONCATENATED MODULE: ./components/VueVideo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VueVideovue_type_script_lang_js_ = (VueVideovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/VueVideo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(232)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VueVideovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5eeaa29e",
  "feef57dc"
  
)

/* harmony default export */ var components_VueVideo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/comment/list.vue?vue&type=template&id=fe8f2d76&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"box"},[_vm._ssrNode("<div class=\"container\" data-v-fe8f2d76>","</div>",[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"table",staticClass:"table",attrs:{"data":_vm.list,"empty-text":"暂无评价"}},[_c('el-table-column',{attrs:{"label":"评价"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('div',{staticClass:"details"},[_vm._v(_vm._s(scope.row.comment.details))]),_vm._v(" "),(scope.row.comment.resources_many.length > 0)?_c('div',{staticClass:"imgList"},_vm._l((scope.row.comment.resources_many),function(item,index){return _c('el-image',{key:index,staticClass:"img",attrs:{"fit":"contain","src":_vm._f("smallImage")(item.img,150),"preview-src-list":scope.row.comment.resources_many.map(function (item) { return item.img })}})}),1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"time"},[_vm._v(_vm._s(scope.row.comment.created_at.split(' ')[0]))]),_vm._v(" "),(scope.row.comment.reply)?_c('div',{staticClass:"reply"},[_vm._v("\n            解释："+_vm._s(scope.row.comment.reply.details)+"\n          ")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"购买类型","align":"center","width":"300"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.good_sku)?_c('div',_vm._l((scope.row.good_sku.product_sku),function(item,index){return _c('span',{key:index},[_vm._v("\n              "+_vm._s(item.key)+":"+_vm._s(item.value)+"\n            ")])}),0):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"用户","width":"150","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n          "+_vm._s(scope.row.comment.name)+"\n        ")]}}])})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"operation\" data-v-fe8f2d76>","</div>",[(_vm.total>0)?_c('pagination',{staticClass:"pagination",attrs:{"total":_vm.total,"page":_vm.listQuery.page,"limit":_vm.listQuery.limit,"autoScroll":false},on:{"update:page":function($event){return _vm.$set(_vm.listQuery, "page", $event)},"update:limit":function($event){return _vm.$set(_vm.listQuery, "limit", $event)},"pagination":_vm.getList}}):_vm._e()],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/comment/list.vue?vue&type=template&id=fe8f2d76&scoped=true&

// EXTERNAL MODULE: ./pages/comment/js/list.js
var list = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/comment/list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var listvue_type_script_lang_js_ = (list["default"]);
// CONCATENATED MODULE: ./pages/comment/list.vue?vue&type=script&lang=js&
 /* harmony default export */ var comment_listvue_type_script_lang_js_ = (listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/comment/list.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(211)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  comment_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fe8f2d76",
  "7f5a700c"
  
)

/* harmony default export */ var comment_list = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Pagination: __webpack_require__(174).default})


/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/coupon/components/index.vue?vue&type=template&id=5c70d162&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-popover',{attrs:{"placement":"bottom","width":"400","trigger":"click"},on:{"show":_vm.popover}},[_c('div',{staticClass:"ul"},_vm._l((_vm.list),function(item,index){return _c('div',{key:index,staticClass:"li"},[_c('div',{staticClass:"money"},[(item.type !== 3)?_c('span',[_vm._v("￥")]):_vm._e(),_vm._v(_vm._s(item.cost/100)),(item.type === 3)?_c('span',[_vm._v("%")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"explain"},[_c('div',{staticClass:"name"},[_vm._v(_vm._s(item.explain))]),_vm._v(" "),(item.end_time)?_c('div',{staticClass:"time"},[_vm._v(_vm._s(_vm._f("moment")(item.start_time,'YYYY.MM.DD'))+" - "+_vm._s(_vm._f("moment")(item.end_time,'YYYY.MM.DD')))]):_c('div',{staticClass:"time"},[_vm._v("不限")])]),_vm._v(" "),_c('el-button',{staticClass:"button",attrs:{"type":"primary","size":"mini","loading":_vm.buttonLoading,"disabled":item.limit_get > 0 && item.user_coupon_count >= item.limit_get},on:{"click":function($event){return _vm.getCreate(item)}}},[_vm._v(_vm._s(item.limit_get > 0 && item.user_coupon_count >= item.limit_get ? '已领' : '领取'))])],1)}),0),_vm._v(" "),_c('el-tag',{staticClass:"tag",attrs:{"slot":"reference","type":"danger","effect":"plain"},slot:"reference"},[_vm._v("\n        优惠券\n      ")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/coupon/components/index.vue?vue&type=template&id=5c70d162&scoped=true&

// EXTERNAL MODULE: ./pages/coupon/components/js/index.js
var js = __webpack_require__(207);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/coupon/components/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var componentsvue_type_script_lang_js_ = (js["default"]);
// CONCATENATED MODULE: ./pages/coupon/components/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var coupon_componentsvue_type_script_lang_js_ = (componentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/coupon/components/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(213)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  coupon_componentsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5c70d162",
  "7ef1be81"
  
)

/* harmony default export */ var components = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_good__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(178);
/* harmony import */ var _api_collect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(202);
/* harmony import */ var _components_Sku__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(234);
/* harmony import */ var _components_VueVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(235);
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74);
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_comment_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(239);
/* harmony import */ var _api_comment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(182);
/* harmony import */ var _pages_coupon_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(240);
/* harmony import */ var _api_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39);









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    sku: _components_Sku__WEBPACK_IMPORTED_MODULE_2__["default"],
    VueVideo: _components_VueVideo__WEBPACK_IMPORTED_MODULE_3__["default"],
    Comment: _pages_comment_list__WEBPACK_IMPORTED_MODULE_5__["default"],
    coupon: _pages_coupon_components__WEBPACK_IMPORTED_MODULE_7__["default"]
  },

  data() {
    return {
      tab: 1,
      tabLoading: false,
      goodDetail: {},
      specificationDefaultDisplay: {},
      resources_many: [],
      resources_many_img: [],
      collect: 0,
      poster: '',
      commentTotal: 0,
      isComment: false,
      isCoupon: false
    };
  },

  async asyncData(ctx) {
    try {
      const {
        params
      } = ctx;
      let [goodDetailData, verifyPluginData] = await Promise.all([Object(_api_good__WEBPACK_IMPORTED_MODULE_0__[/* detail */ "a"])(params.id), Object(_api_plugin__WEBPACK_IMPORTED_MODULE_8__[/* verifyPlugin */ "a"])(['coupon', 'comment'])]);
      let resources_many = [];
      let resources_many_img = [];
      let poster;

      if (goodDetailData.resources_many.length > 0) {
        goodDetailData.resources_many.forEach((item, index) => {
          if (item.depict.indexOf('_video') !== -1) {
            item.type = 'video';
            resources_many.unshift(item);
          } else if (item.depict.indexOf('_poster') !== -1) {
            poster = item.img;
          } else {
            item.type = 'img';
            resources_many.push(item);
            resources_many_img.push(item.img);
          }
        });
      }

      return {
        goodDetail: goodDetailData,
        resources_many: resources_many,
        resources_many_img: resources_many_img,
        poster: poster,
        isCoupon: verifyPluginData.coupon,
        isComment: verifyPluginData.comment
      };
    } catch (err) {
      ctx.$errorHandler(err);
    }
  },

  head() {
    return {
      title: this.goodDetail.name + '-' + "DSSHOP商城-跨终端商城解决方案",
      meta: [{
        hid: 'index',
        name: this.goodDetail.name + '-' + "DSSHOP商城-跨终端商城解决方案",
        content: this.goodDetail.keywords ? this.goodDetail.keywords : "商城网店系统,商城,网店,免费商城,免费网店"
      }, {
        hid: 'description',
        name: 'description',
        content: this.goodDetail.short_description ? this.goodDetail.short_description : "免费开源可商用，快速搭建属于自己的独立商城网店系统，一次搭建适配多终端"
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: this.goodDetail.keywords ? this.goodDetail.keywords : "商城网店系统,商城,网店,免费商城,免费网店"
      }]
    };
  },

  mounted() {
    if ($nuxt.$store.state.hasLogin) {
      this.getCollect();
    }

    if (this.isComment) {
      this.getCommentTotal();
    }
  },

  methods: {
    //选择后返回的数据
    purchasePattern(data) {
      this.specificationDefaultDisplay = data;
    },

    buy(state) {
      if (!$nuxt.$store.state.hasLogin) {
        $nuxt.$store.commit('loginCheck');
        return false;
      }

      this.$refs.sku.cart(state);
    },

    getCollect() {
      Object(_api_collect__WEBPACK_IMPORTED_MODULE_1__[/* detail */ "c"])($nuxt.$route.params.id).then(response => {
        this.collect = response;
      });
    },

    // 收藏
    toCollect() {
      if (!$nuxt.$store.state.hasLogin) {
        $nuxt.$store.commit('loginCheck');
        return false;
      }

      if (this.collect) {
        Object(_api_collect__WEBPACK_IMPORTED_MODULE_1__[/* destroy */ "b"])(this.goodDetail.id);
      } else {
        Object(_api_collect__WEBPACK_IMPORTED_MODULE_1__[/* create */ "a"])(this.goodDetail);
      }

      this.collect = !this.collect;
    },

    // 切换栏目
    cutTab(index) {
      this.tabLoading = true;
      this.tab = index;
      setTimeout(() => {
        this.tabLoading = false;
      }, 1000);
    },

    // 获取评价总数
    getCommentTotal() {
      Object(_api_comment__WEBPACK_IMPORTED_MODULE_6__[/* good */ "c"])({
        limit: 1,
        page: 1,
        good_id: $nuxt.$route.params.id,
        sort: '-created_at'
      }).then(response => {
        this.commentTotal = response.total;
      });
    }

  }
});

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(385);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6f9113ea", content, true, context)
};

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(387);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1b8037ea", content, true, context)
};

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(306);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-detail-on .el-icon-star-off{color:#fa524c}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_id_4c98ad64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(307);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_id_4c98ad64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_id_4c98ad64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_id_4c98ad64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_id_4c98ad64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".box[data-v-4c98ad64]{border-top:1px solid #dcdfe6;background-color:#fff}.product-box .tab[data-v-4c98ad64]{text-align:center;padding:10px 0 20px}.product-box .tab span[data-v-4c98ad64]{padding:0 20px;color:#757575;cursor:pointer}.product-box .tab .on[data-v-4c98ad64]{color:#fa524c}.product-box .detail-box[data-v-4c98ad64]{background-color:#f4f4f4}.product-box .detail-box .container[data-v-4c98ad64]{text-align:center;overflow:hidden;width:100%}.product-box .detail-box .container img[data-v-4c98ad64]{display:block}.product-detail .breadcrumb[data-v-4c98ad64]{padding:20px 0}.product-detail .product-box[data-v-4c98ad64]{display:flex}.product-detail .product-box .picture[data-v-4c98ad64]{width:460px;margin-right:20px}.product-detail .product-box .picture .image[data-v-4c98ad64]{width:100%}.product-detail .product-box .parameter[data-v-4c98ad64]{flex:1}.product-detail .product-box .parameter .title[data-v-4c98ad64]{font-size:24px;font-weight:400;color:#212121}.product-detail .product-box .parameter .description[data-v-4c98ad64]{color:#b0b0b0;margin:0;padding-top:8px;line-height:1.5}.product-detail .product-box .parameter .price-box[data-v-4c98ad64]{display:flex;padding-top:8px}.product-detail .product-box .parameter .price-box .price[data-v-4c98ad64]{font-size:28px;color:#fa524c}.product-detail .product-box .parameter .price-box .price .symbol[data-v-4c98ad64]{font-size:14px}.product-detail .product-box .parameter .price-box .m-price[data-v-4c98ad64]{position:relative;top:3px;font-size:14px;margin-left:5px;color:#b0b0b0;text-decoration:line-through}.product-detail .product-box .parameter .operation[data-v-4c98ad64]{display:flex}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/detail/_id.vue?vue&type=template&id=4c98ad64&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"box"},[_vm._ssrNode("<div class=\"container product-detail\" data-v-4c98ad64>","</div>",[_c('el-breadcrumb',{staticClass:"breadcrumb",attrs:{"separator":"/"}},[_c('el-breadcrumb-item',[_c('NuxtLink',{attrs:{"to":{ path: '/' }}},[_vm._v("\n          首页\n        ")])],1),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v(_vm._s(_vm.goodDetail.name))])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product-box\" data-v-4c98ad64>","</div>",[_vm._ssrNode("<div class=\"picture\" data-v-4c98ad64>","</div>",[_c('el-carousel',{attrs:{"autoplay":false,"arrow":"always","height":"450px","indicator-position":"outside"}},_vm._l((_vm.resources_many),function(item,index){return _c('el-carousel-item',{key:index},[(item.type === 'img')?[_c('el-image',{staticClass:"image",attrs:{"fit":"scale-down","src":item.img,"preview-src-list":_vm.resources_many_img}})]:[_c('VueVideo',{attrs:{"sources":item.img,"poster":_vm.poster}})]],2)}),1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"parameter\" data-v-4c98ad64>","</div>",[_vm._ssrNode("<div class=\"title\" data-v-4c98ad64>"+_vm._ssrEscape(_vm._s(_vm.goodDetail.name))+"</div> "+((_vm.goodDetail.short_description)?("<div class=\"description\" data-v-4c98ad64>"+_vm._ssrEscape(_vm._s(_vm.goodDetail.short_description))+"</div>"):"<!---->")+" <div class=\"price-box\" data-v-4c98ad64>"+((_vm.specificationDefaultDisplay.price_show)?(((_vm.goodDetail.price_show && _vm.specificationDefaultDisplay.price_show)?(((_vm.specificationDefaultDisplay.price_show.length > 1)?("<div class=\"price\" data-v-4c98ad64><span class=\"symbol\" data-v-4c98ad64>¥</span>"+_vm._ssrEscape(_vm._s(_vm._f("thousands")(_vm.specificationDefaultDisplay.price_show[0]))+" - "+_vm._s(_vm._f("thousands")(_vm.specificationDefaultDisplay.price_show[1])))+"</div>"):(_vm.specificationDefaultDisplay.price_show.length === 1)?("<div class=\"price\" data-v-4c98ad64><span class=\"symbol\" data-v-4c98ad64>¥</span>"+_vm._ssrEscape(_vm._s(_vm._f("thousands")(_vm.specificationDefaultDisplay.price_show[0])))+"</div>"):"<!---->")):"<!---->")):(((_vm.goodDetail.price_show)?(((_vm.goodDetail.price_show.length > 1)?("<div class=\"price\" data-v-4c98ad64><span class=\"symbol\" data-v-4c98ad64>¥</span>"+_vm._ssrEscape(_vm._s(_vm._f("thousands")(_vm.goodDetail.price_show[0]))+" - "+_vm._s(_vm._f("thousands")(_vm.goodDetail.price_show[1])))+"</div>"):(_vm.goodDetail.price_show.length === 1)?("<div class=\"price\" data-v-4c98ad64><span class=\"symbol\" data-v-4c98ad64>¥</span>"+_vm._ssrEscape(_vm._s(_vm._f("thousands")(_vm.goodDetail.price_show[0])))+"</div>"):"<!---->")):"<!---->")+" "+((_vm.goodDetail.market_price_show)?(((_vm.goodDetail.market_price_show.length > 1)?("<div class=\"m-price\" data-v-4c98ad64><span class=\"symbol\" data-v-4c98ad64>¥</span>"+_vm._ssrEscape(_vm._s(_vm._f("thousands")(_vm.goodDetail.market_price_show[1])))+"</div>"):(_vm.goodDetail.market_price_show.length === 1)?("<div class=\"m-price\" data-v-4c98ad64><span class=\"symbol\" data-v-4c98ad64>¥</span>"+_vm._ssrEscape(_vm._s(_vm._f("thousands")(_vm.goodDetail.market_price_show[0])))+"</div>"):"<!---->")):"<!---->")))+"</div> "),_c('el-divider'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sku\" data-v-4c98ad64>","</div>",[_c('sku',{ref:"sku",attrs:{"getList":_vm.goodDetail},on:{"purchasePattern":_vm.purchasePattern}})],1),_vm._ssrNode(" "),_c('el-divider'),_vm._ssrNode(" <div class=\"shipping-address\" data-v-4c98ad64></div> "),_vm._ssrNode("<div class=\"operation\" data-v-4c98ad64>","</div>",[_c('el-button',{attrs:{"type":"danger","plain":""},on:{"click":function($event){return _vm.buy(true)}}},[_vm._v("立即购买")]),_vm._ssrNode(" "),_c('el-button',{attrs:{"type":"danger"},on:{"click":function($event){return _vm.buy(false)}}},[_vm._v("加入购物车")]),_vm._ssrNode(" "),_c('el-button',{class:{'product-detail-on' : _vm.collect},attrs:{"type":"info","icon":"el-icon-star-off"},on:{"click":_vm.toCollect}},[_vm._v("收藏")]),_vm._ssrNode(" "),(_vm.isCoupon)?_c('coupon'):_vm._e()],2),_vm._ssrNode(" "),(_vm.goodDetail.integral_commodity_count)?_c('el-tag',{staticStyle:{"margin-top":"20px"},attrs:{"type":"warning"}},[_vm._v("可积分抵扣")]):_vm._e()],2)],2)],2),_vm._ssrNode(" "),_c('el-divider'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product-box\" data-v-4c98ad64>","</div>",[_vm._ssrNode("<div class=\"tab\" data-v-4c98ad64>","</div>",[_vm._ssrNode("<span"+(_vm._ssrClass(null,{on:_vm.tab === 1}))+" data-v-4c98ad64>商品详情</span> "),(_vm.isComment)?[_c('el-divider',{attrs:{"direction":"vertical"}}),_vm._ssrNode(" <span"+(_vm._ssrClass(null,{on:_vm.tab === 2}))+" data-v-4c98ad64>"+_vm._ssrEscape("评价("+_vm._s(_vm.commentTotal)+")")+"</span>")]:_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"detail-box\" data-v-4c98ad64>","</div>",[_c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.tabLoading),expression:"tabLoading"}],staticClass:"container"},[_vm._ssrNode(((_vm.tab === 1)?("<div data-v-4c98ad64>"+(_vm._s(_vm.goodDetail.details))+"</div>"):(_vm.tab === 2)?("<div data-v-4c98ad64>"+((_vm.isComment)?("<Comment data-v-4c98ad64></Comment>"):"<!---->")+"</div>"):"<!---->"))])])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/product/detail/_id.vue?vue&type=template&id=4c98ad64&scoped=true&

// EXTERNAL MODULE: ./pages/product/detail/js/_id.js
var _id = __webpack_require__(304);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/detail/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _idvue_type_script_lang_js_ = (_id["default"]);
// CONCATENATED MODULE: ./pages/product/detail/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var detail_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/product/detail/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(384)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(386)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  detail_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4c98ad64",
  "98c1dce6"
  
)

/* harmony default export */ var detail_id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VueVideo: __webpack_require__(235).default,Sku: __webpack_require__(234).default})


/***/ })

};;
//# sourceMappingURL=_id.js.map