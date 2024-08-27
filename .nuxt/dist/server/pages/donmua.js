exports.ids = [4];
exports.modules = {

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("35ceaa59", content, true, context)
};

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_donmua_vue_vue_type_style_index_0_id_bae1ad32_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_donmua_vue_vue_type_style_index_0_id_bae1ad32_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_donmua_vue_vue_type_style_index_0_id_bae1ad32_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_donmua_vue_vue_type_style_index_0_id_bae1ad32_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_donmua_vue_vue_type_style_index_0_id_bae1ad32_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-bae1ad32]{padding:20px}.search-box[data-v-bae1ad32]{align-items:center;display:flex;justify-content:center;margin:0 auto;max-width:500px}.search-input[data-v-bae1ad32]{border-radius:25px;flex:1;padding:10px}.search-button[data-v-bae1ad32]{align-items:center;border-radius:25px;display:flex;justify-content:center;margin-left:20px;padding:10px 20px}.search-icon[data-v-bae1ad32]{height:20px;margin-right:8px;width:20px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/donmua.vue?vue&type=template&id=bae1ad32&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "tracuudonhang"
  }, [_vm._ssrNode("<div class=\"container text-center py-5\" data-v-bae1ad32><div class=\"sim-cards mt-4\" data-v-bae1ad32><img src=\"/images/tracuu.svg\" alt=\"Sim Cards\" class=\"img-fluid\" data-v-bae1ad32></div> <h1 data-v-bae1ad32>Tra cứu đơn hàng</h1> <div class=\"underline mx-auto\" data-v-bae1ad32></div> <p class=\"lead\" data-v-bae1ad32>Mã đơn hàng đã được gửi đến email của bạn.</p> <p class=\"lead\" data-v-bae1ad32>Bạn có thể nhập mã đơn hàng xuống dưới đây để theo dõi trạng thái đơn hàng.</p> <div class=\"search-box mt-4\" data-v-bae1ad32><input type=\"text\" placeholder=\"Nhập mã đơn hàng...\" class=\"form-control search-input\" data-v-bae1ad32> <button class=\"btn btn-primary search-button\" data-v-bae1ad32><img src=\"/images/search.svg\" alt=\"Tìm kiếm\" class=\"search-icon\" data-v-bae1ad32>\n          Tra cứu\n        </button></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/donmua.vue?vue&type=template&id=bae1ad32&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/donmua.vue?vue&type=script&lang=js
/* harmony default export */ var donmuavue_type_script_lang_js = ({
  name: 'DonMua'
});
// CONCATENATED MODULE: ./pages/donmua.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_donmuavue_type_script_lang_js = (donmuavue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/donmua.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_donmuavue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bae1ad32",
  "2057186a"
  
)

/* harmony default export */ var donmua = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=donmua.js.map