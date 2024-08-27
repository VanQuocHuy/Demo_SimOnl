exports.ids = [9];
exports.modules = {

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("4da04408", content, true, context)
};

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_support_vue_vue_type_style_index_0_id_483e961a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_support_vue_vue_type_style_index_0_id_483e961a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_support_vue_vue_type_style_index_0_id_483e961a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_support_vue_vue_type_style_index_0_id_483e961a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_support_vue_vue_type_style_index_0_id_483e961a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".support-page{background-color:#f8f9fa;color:#343a40}.container{max-width:800px}h1{margin-bottom:1rem}.lead{font-size:1.25rem;font-weight:300}form{background-color:#fff;border-radius:.25rem;box-shadow:0 .125rem .25rem rgba(0,0,0,.075);padding:2rem}.btn-primary{background-color:#007bff;border-color:#007bff}.hotro{height:350px}.support-button{margin:1rem 0;text-align:center}.btn-danger{align-items:center;border-color:#3c2ca6;border-radius:.75rem;display:flex;font-size:1rem;justify-content:center;padding:1rem;transition:background-color .3s ease,color .3s ease;width:100%}.btn-danger i{margin-right:.5rem}.btn-danger:hover{background-color:#242dd5;color:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/support.vue?vue&type=template&id=483e961a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "support-page"
  }, [_vm._ssrNode("<div class=\"container py-5\"><div class=\"row\"><div class=\"col-12 text-center mb-4\"><h1>Hỗ Trợ</h1> <div class=\"underline mx-auto\"></div> <p class=\"lead\">Chúng tôi ở đây để giúp đỡ bạn</p></div></div> <div class=\"row\"><div class=\"col-md-6\"><h2>Liên hệ với chúng tôi</h2> <form><div class=\"mb-3\"><label for=\"name\" class=\"form-label\">Họ và tên</label> <input type=\"text\" id=\"name\" required=\"required\" class=\"form-control\"></div> <div class=\"mb-3\"><label for=\"email\" class=\"form-label\">Email</label> <input type=\"email\" id=\"email\" required=\"required\" class=\"form-control\"></div> <div class=\"mb-3\"><label for=\"message\" class=\"form-label\">Tin nhắn</label> <textarea id=\"message\" rows=\"5\" required=\"required\" class=\"form-control\"></textarea></div> <button type=\"submit\" class=\"btn btn-primary\">Gửi</button></form></div> <div class=\"col-md-6\"><h2>Thông tin liên hệ</h2> <p>Email: support@simonl.com</p> <p>Điện thoại: 0845445797</p> <p>Địa chỉ: 200 Xuân Thủy, Quận Cẩm Lệ, TP.Đà Nẵng</p> <img src=\"/images/hotro.svg\" alt=\"Contact Info\" class=\"hotro\"></div></div> <div class=\"support-page\"><div class=\"container py-5\"><div class=\"row\"><div class=\"col-12 text-center mb-4\"><h1>Các kênh hỗ trợ</h1> <p class=\"lead\">Liên hệ ngay để giải đáp các thắc mắc</p></div></div> <div class=\"row justify-content-center\"><div class=\"col-md-3\"><div class=\"support-button\"><a href=\"https://www.facebook.com/kuxuys\" target=\"_blank\" class=\"btn btn-danger\"><i class=\"bi bi-facebook\"></i> Facebook Local\n          </a></div></div> <div class=\"col-md-3\"><div class=\"support-button\"><a href=\"https://zalo.me/0845445797\" target=\"_blank\" class=\"btn btn-danger\"><i class=\"bi bi-facebook\"></i> Zalo\n          </a></div></div> <div class=\"col-md-3\"><div class=\"support-button\"><a href=\"https://www.instagram.com/wuyzz_06/\" target=\"_blank\" class=\"btn btn-danger\"><i class=\"bi bi-facebook\"></i> Instagram\n          </a></div></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/support.vue?vue&type=template&id=483e961a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/support.vue?vue&type=script&lang=js
/* harmony default export */ var supportvue_type_script_lang_js = ({
  name: 'support',
  head() {
    return {
      title: 'Hỗ Trợ',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'SimOnl - Hỗ Trợ'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: 'SimOnl - Hỗ Trợ'
      }]
    };
  }
});
// CONCATENATED MODULE: ./pages/support.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_supportvue_type_script_lang_js = (supportvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/support.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_supportvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7d477c2c"
  
)

/* harmony default export */ var support = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=support.js.map