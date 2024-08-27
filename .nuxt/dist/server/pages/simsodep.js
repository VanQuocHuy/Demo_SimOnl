exports.ids = [8];
exports.modules = {

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2b677a92", content, true, context)
};

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simsodep_vue_vue_type_style_index_0_id_e1ff5752_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simsodep_vue_vue_type_style_index_0_id_e1ff5752_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simsodep_vue_vue_type_style_index_0_id_e1ff5752_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simsodep_vue_vue_type_style_index_0_id_e1ff5752_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simsodep_vue_vue_type_style_index_0_id_e1ff5752_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sim-promotion{background-color:#0056b3;color:#fff}.container{max-width:960px}h1{font-size:2.5rem;font-weight:700}.lead{font-size:1.25rem;font-weight:300;margin-top:1rem}.sim-cards{position:relative}.sim-cards img{max-width:100%}.labels{display:flex;flex-direction:column;gap:1rem;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.label{align-items:center;background-color:#fff;border-radius:1rem;box-shadow:0 .5rem 1rem rgba(0,0,0,.1);color:#000;display:flex;gap:.5rem;padding:.5rem 1rem}.icon{font-size:1.5rem}.phone-list-section{background-color:#fff;border-radius:8px;box-shadow:0 .5rem 1rem rgba(0,0,0,.1);padding:20px}.phone-list{border-collapse:collapse;margin:0 auto;width:100%}.phone-list td,.phone-list th{border:1px solid #ddd;color:#000;padding:10px;text-align:left;text-align:center}.phone-list th{background-color:#f4f4f4;font-weight:700}.phone-list tr:not(:last-child) td{border-bottom:2px solid #ddd}.phone-list thead th:first-child{border-top-left-radius:8px}.phone-list thead th:last-child{border-top-right-radius:8px}.phone-list tbody tr:last-child td:first-child{border-bottom-left-radius:8px}.phone-list tbody tr:last-child td:last-child{border-bottom-right-radius:8px}.action-buttons{align-items:center;display:flex;gap:10px;justify-content:center}.btn2{border:none;border-radius:70%;cursor:pointer;margin:0 5px;padding:5px}.btn-cart1,.btn2{align-items:center;display:inline-flex}.btn-cart1{background-color:#f5dada;border:1px solid #f5dada;border-radius:50%;color:#000;height:40px;justify-content:center;padding:0;width:40px}.btn-cart1 img{height:20px;width:20px}.btn-buy{background-color:#dc3545;border:none;border-radius:20px;color:#fff;height:40px;line-height:40px;margin-left:10px;padding:0 15px}.btn-cart1:hover{background-color:#f39d9d}.btn-buy:hover{background-color:#c82333}.alert{align-items:center;background-color:#fff;border:1px solid #28a745;border-radius:5px;box-shadow:0 .5rem 1rem rgba(0,0,0,.1);color:#000;display:flex;padding:10px 20px;position:fixed;right:10px;top:10px;z-index:1050}.alert img{height:20px;width:20px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/simsodep.vue?vue&type=template&id=e1ff5752
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div id=\"carouselExample\" class=\"carousel slide\"><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"/images/simsodep.svg\" alt=\"h1\" class=\"d-block w-100\"></div></div></div> "), _vm._ssrNode("<div class=\"sim-promotion\">", "</div>", [_vm._ssrNode("<div class=\"container text-center py-5\">", "</div>", [_vm._ssrNode("<h1>Vạn sự tùy SIM</h1> <div class=\"underline mx-auto\"></div> <p class=\"lead\">\n        Năm mới Giáp Thin, vận lên như rồng với dàn số đẹp siêu sao chỉ từ 0Đ của mạng di động Local. Hàng vạn số đẹp không chỉ dễ nhớ mà còn hợp với tên tuổi ngày sinh của riêng bạn giúp thu hút năng lượng tích cực, vạn sự may mắn, thăng hạng mọi mặt cuộc sống!\n      </p> "), _c('marquee', [_vm._v(" ĐẦU SỐ 098 - SIM SIÊU DATA - SIM SỐ ĐẸP - ĐẶC QUYỀN SIM LOCAL")]), _vm._ssrNode(" <div class=\"sim-cards mt-4\"><img src=\"/images/simsodep.webp\" alt=\"Sim Cards\" class=\"img-fluid\"></div> <div class=\"container text-center py-5\"><h4>Một số gợi ý từ Local</h4></div> <div class=\"phone-list-section py-5\"><div class=\"container\"><table class=\"phone-list\"><thead><tr><th>Số Điện Thoại</th> <th>Loại Số</th> <th>Giá Tiền</th></tr></thead> <tbody>" + _vm._ssrList(_vm.phoneNumbers, function (phone) {
    return "<tr><td>" + _vm._ssrEscape(_vm._s(phone.number)) + "</td> <td>" + _vm._ssrEscape(_vm._s(phone.type)) + "</td> <td>" + _vm._ssrEscape(_vm._s(phone.price)) + "</td> <td class=\"action-buttons\"><button class=\"btn2 btn-cart1\"><img src=\"/images/shopi1.svg\" alt=\"Cart\" class=\"bi-cart1\"></button> <button class=\"btn2 btn-buy\">Mua Ngay</button></td></tr>";
  }) + "</tbody></table></div></div>")], 2)]), _vm._ssrNode(" " + (_vm.showAlert ? "<div role=\"alert\" class=\"alert alert-success alert-dismissible fade show\"><img src=\"/images/tick.webp\" alt=\"Success\">" + _vm._ssrEscape("\n    " + _vm._s(_vm.alertMessage) + "\n  ") + "</div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/simsodep.vue?vue&type=template&id=e1ff5752

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/simsodep.vue?vue&type=script&lang=js
/* harmony default export */ var simsodepvue_type_script_lang_js = ({
  name: 'simdodep',
  data() {
    return {
      phoneNumbers: [{
        number: '0901234567',
        type: 'Số Đẹp',
        price: '0đ'
      }, {
        number: '0902345678',
        type: 'Số Đẹp',
        price: '2.000.000đ'
      }, {
        number: '0845445797',
        type: 'Số Lặp',
        price: '2.500.000đ'
      }, {
        number: '0396258648',
        type: 'Số Lặp',
        price: '3.000.000đ'
      }, {
        number: '0905632638',
        type: 'Số Lặp',
        price: '700.000đ'
      }, {
        number: '0386489872',
        type: 'Số Lặp',
        price: '900.000đ'
      }, {
        number: '0905905905',
        type: 'Số Lặp',
        price: '1.000.000đ'
      }],
      showAlert: false,
      alertMessage: ''
    };
  },
  methods: {
    addToCart(phone) {
      // Lấy giỏ hàng từ localStorage
      let cart = JSON.parse(localStorage.getItem('giohang')) || [];

      // Kiểm tra xem số điện thoại đã có trong giỏ hàng chưa
      const isPhoneInCart = cart.some(item => item.number === phone.number);
      if (isPhoneInCart) {
        // Hiển thị thông báo rằng số điện thoại đã có trong giỏ hàng
        this.showToast(`Số điện thoại ${phone.number} đã có trong giỏ hàng!`);
        return;
      }

      // Thêm số điện thoại vào giỏ hàng
      cart.push({
        ...phone,
        packageDetails: "Gói cước: ABC, Chu kỳ: 12 tháng" // Dữ liệu thực tế
      });
      localStorage.setItem('giohang', JSON.stringify(cart));

      // Hiển thị thông báo đẩy thành công
      this.showToast(`Đã thêm ${phone.number} vào giỏ hàng!`);
    },
    showToast(message) {
      this.alertMessage = message;
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
    }
  }
});
// CONCATENATED MODULE: ./pages/simsodep.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_simsodepvue_type_script_lang_js = (simsodepvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/simsodep.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_simsodepvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "54b5ffb1"
  
)

/* harmony default export */ var simsodep = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=simsodep.js.map