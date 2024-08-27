exports.ids = [5];
exports.modules = {

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("655dce16", content, true, context)
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_giohang_vue_vue_type_style_index_0_id_264d134d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_giohang_vue_vue_type_style_index_0_id_264d134d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_giohang_vue_vue_type_style_index_0_id_264d134d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_giohang_vue_vue_type_style_index_0_id_264d134d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_giohang_vue_vue_type_style_index_0_id_264d134d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-264d134d]{padding:20px}.cart-title[data-v-264d134d]{font-size:30px;margin-top:-40px}.box-1[data-v-264d134d]{background-color:#f9f9f9;border:1px solid #ccc;border-radius:.75rem;display:flex;flex-direction:column;height:400px;margin-left:20px;margin-top:-30px;overflow-y:auto;padding-bottom:20px;position:relative;width:650px}.button-group[data-v-264d134d]{display:flex;left:20px;position:absolute;top:20px}.btn[data-v-264d134d]{background-color:#dc3545;border-color:#dc3545;color:#fff;margin-right:10px}.btn[data-v-264d134d]:hover{background-color:#2a2dca;border-color:#2a2eae}.content[data-v-264d134d]{left:50%;position:absolute;text-align:center;top:100px;transform:translateX(-50%)}.content img[data-v-264d134d]{height:auto;max-width:100%}.sim1[data-v-264d134d]{font-size:15px}.phone-box[data-v-264d134d]{background-color:#fff;border-radius:8px;box-shadow:0 .5rem 1rem rgba(239,10,10,.1);box-sizing:border-box;margin-bottom:15px;padding:20px;text-align:left;width:550px}.phone-number[data-v-264d134d]{align-items:center;color:red;display:flex;font-size:25px;justify-content:space-between;margin-bottom:10px}.phone-divider[data-v-264d134d]{border-top:1px solid #8f8b8b;margin-top:5px}.phone-package[data-v-264d134d]{color:#666;font-size:15px}.btn-clear[data-v-264d134d]{background:none;border:none;cursor:pointer;font-size:20px}.phone-divider[data-v-264d134d]{border-top:1px solid #ccc;margin:10px 0}.package-details[data-v-264d134d]{display:flex;flex-direction:column}.package-change[data-v-264d134d]{align-items:center;display:flex;justify-content:space-between}.reload-icon[data-v-264d134d]{height:16px;margin-right:5px;width:16px}.btn-reload[data-v-264d134d]{align-items:center;background:none;border:none;border-radius:8px;color:blue;cursor:pointer;display:flex;padding:5px 10px;transition:background-color .3s,border-color .3s}.btn-reload[data-v-264d134d]:hover{background-color:#e0e0ff;border-color:#2a2eae}.modal[data-v-264d134d]{align-items:center;background:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:9999}.modal-dialog[data-v-264d134d]{background:#fff;border-radius:8px;max-width:500px;padding:20px;width:100%}.modal-title[data-v-264d134d]{margin-bottom:10px}.modal-body[data-v-264d134d]{max-height:400px;overflow-y:auto}.package-option[data-v-264d134d]{border-bottom:1px solid #ccc;cursor:pointer;padding:10px}.package-option[data-v-264d134d]:hover{background-color:#f1f1f1}.modal-footer[data-v-264d134d]{display:flex;justify-content:flex-end}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/giohang.vue?vue&type=template&id=264d134d&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cart"
  }, [_vm._ssrNode("<div class=\"container text-center py-5\" data-v-264d134d><div class=\"sim-cards mt-4\" data-v-264d134d></div> <h1 class=\"cart-title\" data-v-264d134d>Giỏ hàng</h1> <div class=\"underline mx-auto\" data-v-264d134d></div></div> "), _vm._ssrNode("<div class=\"col-md-6\" data-v-264d134d>", "</div>", [_vm._ssrNode("<div class=\"box-1 p-4 mb-4\" data-v-264d134d>", "</div>", [_vm._ssrNode("<div class=\"button-group d-flex align-items-start\" data-v-264d134d><button class=\"btn btn-outline-primary btn-small\" data-v-264d134d>Sim Data</button> <button class=\"btn btn-outline-primary btn-small\" data-v-264d134d>Sim Số Đẹp</button></div> "), _vm.activeContent === 'data' ? _vm._ssrNode("<div class=\"content mt-4\" data-v-264d134d>", "</div>", [_vm._ssrNode("<img src=\"/images/box.svg\" alt=\"Sim Data\" class=\"img-fluid\" data-v-264d134d> <h3 class=\"sim1\" data-v-264d134d>Giỏ hàng SIM Data của bạn đang trống</h3> "), _c('NuxtLink', {
    staticClass: "px-5 py-2 btn btn-primary",
    attrs: {
      "to": "/simdata"
    }
  }, [_vm._v("Khám Phá Ngay")])], 2) : _vm._e(), _vm._ssrNode(" "), _vm.activeContent === 'sodep' ? _vm._ssrNode("<div class=\"content mt-4\" data-v-264d134d>", "</div>", [_vm.cart.length === 0 ? _vm._ssrNode("<div class=\"empty-cart\" data-v-264d134d>", "</div>", [_vm._ssrNode("<img src=\"/images/box.svg\" alt=\"simsodep\" class=\"img-fluid\" data-v-264d134d> <h3 class=\"sim1\" data-v-264d134d>Giỏ hàng SIM Số Đẹp của bạn đang trống</h3> "), _c('NuxtLink', {
    staticClass: "px-5 py-2 btn btn-primary",
    attrs: {
      "to": "/simsodep"
    }
  }, [_vm._v("Khám Phá Ngay")])], 2) : _vm._ssrNode("<div data-v-264d134d>" + _vm._ssrList(_vm.cart, function (phone, index) {
    return "<div class=\"phone-box\" data-v-264d134d><div class=\"phone-number\" data-v-264d134d>" + _vm._ssrEscape("\n              " + _vm._s(phone.number) + "\n              ") + "<button class=\"btn-clear\" data-v-264d134d><img src=\"/images/clear.svg\" alt=\"Clear\" data-v-264d134d></button></div> <hr class=\"phone-divider\" data-v-264d134d> <div class=\"package-details\" data-v-264d134d><p data-v-264d134d>Phí tư vấn:</p> <h4 data-v-264d134d>" + _vm._ssrEscape(_vm._s(phone.consultingFee)) + "</h4> <p data-v-264d134d>Gói cước đi kèm:</p> <div class=\"package-change\" data-v-264d134d><h4 data-v-264d134d>" + _vm._ssrEscape(_vm._s(phone.package)) + "</h4> <button class=\"btn-reload\" data-v-264d134d><img src=\"/images/reload.svg\" alt=\"Reload\" class=\"reload-icon\" data-v-264d134d> Đổi gói\n                </button></div> <p data-v-264d134d>Giá cước:</p> <p data-v-264d134d>" + _vm._ssrEscape(_vm._s(phone.cycle)) + "</p></div></div>";
  }) + "</div>")]) : _vm._e()], 2)]), _vm._ssrNode(" " + (_vm.showModal ? "<div tabindex=\"-1\" class=\"modal\" data-v-264d134d><div class=\"modal-dialog\" data-v-264d134d><div class=\"modal-content\" data-v-264d134d><div class=\"modal-header\" data-v-264d134d><h5 class=\"modal-title\" data-v-264d134d>Chọn Gói Cước Mới</h5></div> <div class=\"modal-body\" data-v-264d134d>" + _vm._ssrList(_vm.availablePackages, function (pkg, idx) {
    return "<div class=\"package-option\" data-v-264d134d><h5 data-v-264d134d>" + _vm._ssrEscape(_vm._s(pkg.name)) + "</h5> <p data-v-264d134d>" + _vm._ssrEscape(_vm._s(pkg.details)) + "</p></div>";
  }) + "</div> <div class=\"modal-footer\" data-v-264d134d><button type=\"button\" class=\"btn btn-secondary\" data-v-264d134d>Đóng</button></div></div></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/giohang.vue?vue&type=template&id=264d134d&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/giohang.vue?vue&type=script&lang=js
/* harmony default export */ var giohangvue_type_script_lang_js = ({
  name: 'GioHang',
  data() {
    return {
      activeContent: null,
      cart: [],
      showModal: false,
      selectedPhone: null,
      availablePackages: [{
        name: '6A99P - 4GB/ngày',
        details: 'Tặng thêm 30 ngày sử dụng - Miễn phí data tốc độ cao (120GB/tháng)'
      }, {
        name: '12A99 - 4GB/ngày',
        details: 'Tặng thêm 60 ngày sử dụng - Miễn phí data tốc độ cao (120GB/tháng)'
      }, {
        name: '6A89F - 3GB/ngày',
        details: 'Tặng thêm 30 ngày sử dụng - Miễn phí data tốc độ cao (90GB/tháng)'
      }, {
        name: '12A89F - 3GB/ngày',
        details: 'Miễn phí gọi nội mạng (Local và MobiFone) - Miễn phí 30 ngày đầu tiên sử dụng'
      }, {
        name: '6A68S - 2GB/ngày',
        details: 'Miễn phí 30 ngày đầu tiên sử dụng - Miễn phí data tốc độ cao (60GB/tháng)'
      }, {
        name: '12A69S - 2GB/ngày',
        details: 'Tặng thêm 60 ngày sử dụng - Miễn phí data tốc độ cao (60GB/tháng)'
      }, {
        name: '6A79S - 3GB/ngày',
        details: 'Miễn phí data tốc độ cao (90GB/tháng) - Lướt TikTok, Facebook, YouTube,... - Nghe, gọi, nhắn tin: Zalo, Telegram, Viber,...'
      }, {
        name: '12A79S - 3GB/ngày',
        details: 'Miễn phí data tốc độ cao (90GB/tháng) 8GB tốc độ cao/ngày'
      }, {
        name: '6A119S - 6GB/ngày',
        details: '8GB tốc độ cao/ngày - Miễn phí gọi nội mạng (Local và MobiFone) - Miễn phí 30 ngày đầu tiên sử dụng'
      }, {
        name: '12A119S - 6GB/ngày',
        details: 'Miễn phí data tốc độ cao (180GB/tháng) - Miễn phí gọi nội mạng (Local và MobiFone) - Miễn phí 30 ngày đầu tiên sử dụng'
      }]
    };
  },
  methods: {
    showContent(type) {
      this.activeContent = type;
      if (type === 'sodep') {
        this.cart = JSON.parse(localStorage.getItem('giohang')) || [];
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
      localStorage.setItem('giohang', JSON.stringify(this.cart));
    },
    addToCart(phone) {
      const existingPhone = this.cart.find(item => item.number === phone.number);
      if (!existingPhone) {
        this.cart.push(phone);
        localStorage.setItem('giohang', JSON.stringify(this.cart));
      }
    },
    openPackageModal(phone) {
      this.selectedPhone = phone;
      this.showModal = true;
    },
    closePackageModal() {
      this.showModal = false;
      this.selectedPhone = null;
    },
    selectPackage(pkg) {
      if (this.selectedPhone) {
        this.selectedPhone.package = pkg.name;
        // Cập nhật localStorage để duy trì các thay đổi
        localStorage.setItem('giohang', JSON.stringify(this.cart));
        this.closePackageModal();
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/giohang.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_giohangvue_type_script_lang_js = (giohangvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/giohang.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_giohangvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "264d134d",
  "d87a284c"
  
)

/* harmony default export */ var giohang = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=giohang.js.map