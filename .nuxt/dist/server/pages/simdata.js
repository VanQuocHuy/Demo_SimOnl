exports.ids = [7];
exports.modules = {

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("65b5f074", content, true, context)
};

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simdata_vue_vue_type_style_index_0_id_549d728b_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simdata_vue_vue_type_style_index_0_id_549d728b_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simdata_vue_vue_type_style_index_0_id_549d728b_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simdata_vue_vue_type_style_index_0_id_549d728b_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simdata_vue_vue_type_style_index_0_id_549d728b_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container{padding:20px}.button_group{display:flex;gap:10px;justify-content:center;margin-bottom:30px;margin-top:10px}.btn-outline{background-color:#fff;border-color:#f40505;border-radius:1rem;color:#ff0101;font-size:1rem;padding:10px 20px;transition:background-color .3s ease,color .3s ease}.btn-outline:hover{background-color:#dc3545;color:#fff}.contents{margin-top:40px}.card-content{background-color:hsla(0,57%,90%,.702);border-radius:.75rem;box-shadow:0 4px 6px rgba(0,0,0,.1);margin-bottom:30px;padding:20px;text-align:left}.card-content p{line-height:1.2;margin:5px 0;padding:0}.card-content p:last-of-type{margin-bottom:20px}.card-content h4{color:red;font-size:18px}.card-content-inner{display:flex;width:100%}.highlight-box{align-items:center;background-color:#dc3545;border-radius:.75rem;color:#fff;display:flex;flex-direction:column;justify-content:center;max-height:130px;min-width:100px;padding:20px;text-align:center}.text-content{flex:1;padding-right:20px}.card-buttons{display:flex;justify-content:space-between;margin-top:20px}.btn1{align-items:center;border:none;border-radius:.75rem;cursor:pointer;display:flex;font-size:1rem;gap:10px;padding:10px 20px;transition:background-color .3s ease,color .3s ease}.btn-cart{background-color:#d94f5c;color:#fff}.btn-cart:hover{background-color:#ef071e}.btn-buy-now{background-color:#28a745;color:#fff}.btn-buy-now:hover{background-color:#176327}.fas{margin-right:5px}.scroll-container{display:flex;gap:20px;overflow-x:auto;padding:10px 0}.scroll-item{background-color:hsla(0,57%,90%,.702);border-radius:.75rem;box-shadow:0 4px 6px rgba(0,0,0,.1);min-width:200px;padding:20px;text-align:center}.scroll-item img{border-radius:.75rem;height:auto;max-width:100%}.scroll-item h3{font-size:1.2rem;margin-top:10px}.scroll-item p{font-size:1rem;margin-top:5px}.btn-register-now{background-color:red;color:#fff;display:inline-block;transition:background-color .3s ease}.btn-register-now:hover{background-color:green}.sim-data{color:#fff;padding-top:10px}.image-card,.sim-data{background-color:#00b35c}.image-card{border:1px solid #ccc;border-radius:.75rem;padding:20px;transition:box-shadow .3s ease}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/simdata.vue?vue&type=template&id=549d728b
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div id=\"carouselExample\" class=\"carousel slide\">", "</div>", [_vm._ssrNode("<div class=\"carousel-inner\">", "</div>", [_vm._ssrNode("<div class=\"carousel-item active\"><img src=\"/images/vn1.png\" alt=\"h1\" class=\"d-block w-100\"></div> "), _c('marquee', [_vm._v(" ĐẦU SỐ 098 - SIM SIÊU DATA - SIM SỐ ĐẸP - ĐẶC QUYỀN SIM LOCAL")])], 2)]), _vm._ssrNode(" <div class=\"container text-center py-5\"><h1>Danh Sách Gói Cước Của Local</h1> <div class=\"underline mx-auto\"></div></div> <div class=\"button_group mt-1\"><button class=\"btn btn-outline\">Data</button> <button class=\"btn btn-outline\">Data - Thoại</button> <button class=\"btn btn-outline\">Topping</button></div> "), _vm.activeContent === 'data' ? _vm._ssrNode("<div class=\"contents mt-4\">", "</div>", [_vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", [_vm._ssrNode("<div class=\"col-md-3\">", "</div>", [_vm._ssrNode("<div class=\"card-content\">", "</div>", [_vm._ssrNode("<div class=\"card-content-inner\"><div class=\"text-content\"><h3>A68</h3> <p>90Gb/tháng</p> <p>3Gb/ngày</p> <p>68.000đ/tháng</p> <h4>180.000đ/SIM</h4></div> <div class=\"highlight-box\"><h3>A68</h3></div></div> "), _vm._ssrNode("<div class=\"card-buttons mt-3\">", "</div>", [_vm._ssrNode("<button class=\"btn1 btn-cart\"><img src=\"/images/shopi.svg\" alt class=\"bi-cart\"></button> "), _c('NuxtLink', {
    staticClass: "btn btn-buy-now",
    attrs: {
      "to": "/buy_now"
    }
  }, [_vm._v("Mua ngay")])], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-3\">", "</div>", [_vm._ssrNode("<div class=\"card-content\">", "</div>", [_vm._ssrNode("<div class=\"card-content-inner\"><div class=\"text-content\"><h3>A89</h3> <p>90Gb/tháng</p> <p>4Gb/ngày</p> <p>69.000đ/tháng</p> <h4>200.000đ/SIM</h4></div> <div class=\"highlight-box\"><h3>A89</h3></div></div> "), _vm._ssrNode("<div class=\"card-buttons mt-3\">", "</div>", [_vm._ssrNode("<button class=\"btn1 btn-cart\"><img src=\"/images/shopi.svg\" alt class=\"bi-cart\"></button> "), _c('NuxtLink', {
    staticClass: "btn btn-buy-now",
    attrs: {
      "to": "/buy_now"
    }
  }, [_vm._v("Mua ngay")])], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-3\">", "</div>", [_vm._ssrNode("<div class=\"card-content\">", "</div>", [_vm._ssrNode("<div class=\"card-content-inner\"><div class=\"text-content\"><h3>A99</h3> <p>150Gb/tháng</p> <p>5Gb/ngày</p> <p>99.000đ/tháng</p> <h4>220.000đ/SIM</h4></div> <div class=\"highlight-box\"><h3>A70</h3></div></div> "), _vm._ssrNode("<div class=\"card-buttons mt-3\">", "</div>", [_vm._ssrNode("<button class=\"btn1 btn-cart\"><img src=\"/images/shopi.svg\" alt class=\"bi-cart\"></button> "), _c('NuxtLink', {
    staticClass: "btn btn-buy-now",
    attrs: {
      "to": "/buy_now"
    }
  }, [_vm._v("Mua ngay")])], 2)], 2)])], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.activeContent === 'thoai' ? "<div class=\"contents mt-4\"><div class=\"row justify-content-center\"><div class=\"col-md-3\"><div class=\"card-content\"><div class=\"card-content-inner\"><div class=\"text-content\"><h3>A89F</h3> <p>90Gb/tháng </p> <p>3Gb/ngày</p> <p> Miễn phí gọi nội mạng</p> <h4>89.000đ/tháng</h4></div> <div class=\"highlight-box\"><h3>A89F</h3></div></div> <div class=\"card-buttons mt-3\"><button class=\"btn1 btn-cart\"><img src=\"/images/shopi.svg\" alt class=\"bi-cart\"></button> <button class=\"btn1 btn-buy-now\">Mua Ngay</button></div></div></div> <div class=\"col-md-3\"><div class=\"card-content\"><div class=\"card-content-inner\"><div class=\"text-content\"><h3>A99P</h3> <p>120Gb/tháng</p> <p>4Gb/ngày</p> <p>Miễn phí gọi nội mạng</p> <h4>99.000đ/tháng</h4></div> <div class=\"highlight-box\"><h3>A99P</h3></div></div> <div class=\"card-buttons mt-3\"><button class=\"btn1 btn-cart\"><img src=\"/images/shopi.svg\" alt class=\"bi-cart\"></button> <button class=\"btn1 btn-buy-now\">Mua Ngay</button></div></div></div> <div class=\"col-md-3\"><div class=\"card-content\"><div class=\"card-content-inner\"><div class=\"text-content\"><h3>A199S</h3> <p>180Gb/tháng</p> <p>6Gb/ngày</p> <p>Miễn phí 30 ngày đầu tiên sử dụng</p> <h4>119.000đ/tháng</h4></div> <div class=\"highlight-box\"><h3>A68</h3></div></div> <div class=\"card-buttons mt-3\"><button class=\"btn1 btn-cart\"><img src=\"/images/shopi.svg\" alt class=\"bi-cart\"></button> <button class=\"btn1 btn-buy-now\">Mua Ngay</button></div></div></div></div></div>" : "<!---->") + " " + (_vm.activeContent === 'topping' ? "<div class=\"contents mt-4\"><div class=\"scroll-container\"><div class=\"scroll-item\"><img src=\"/images/tp1.png\" alt=\"logo5\" class=\"w-100\"> <h3>YT7E</h3> <p>30 ngày xem Youtube không giới hạn Data tốc độ cao</p> <h5> 10.000đ/30 ngày</h5> <button class=\"btn1 btn-register-now\">Đăng Kí Ngay</button></div> <div class=\"scroll-item\"><img src=\"/images/tp3.png\" alt=\"logo5\" class=\"w-100\"> <h3>FB7E</h3> <p>30 ngày lướt Facebook không giới hạn Data tốc độ cao </p> <h5> 10.000đ/3 ngày</h5> <button class=\"btn1 btn-register-now\">Đăng Kí Ngay</button></div> <div class=\"scroll-item\"><img src=\"/images/simdt1.jpg\" alt=\"logo5\" class=\"w-100\"> <h3>A5D </h3> <p>Miễn phí dung lượng 1Gb tốc độ cao sử dụng trong 24h </p> <h5> 20.000đ/7 ngày</h5> <button class=\"btn1 btn-register-now\">Đăng Kí Ngay</button></div> <div class=\"scroll-item\"><img src=\"/images/tp2.png\" alt=\"logo5\" class=\"w-100\"> <h3>A30C</h3> <p>Miễn phí dung lượng 4Gb tốc độ cao sử dụng trong 24h </p> <h5> 30.000đ/3 ngày</h5> <button class=\"btn1 btn-register-now\">Đăng Kí Ngay</button></div> <div class=\"scroll-item\"><img src=\"/images/tp4.png\" alt=\"logo5\" class=\"w-100\"> <h3>A10</h3> <p>Miễn phí dung lượng 8Gb tốc độ cao sử dụng trong 24h</p> <h5> 10.000đ/1 ngày</h5> <button class=\"btn1 btn-register-now\">Đăng Kí Ngay</button></div> <div class=\"scroll-item\"><img src=\"/images/banner3.png\" alt=\"logo5\" class=\"w-100\"> <h3>D10</h3> <p>Đang cập nhật...</p></div> <div class=\"scroll-item\"><img src=\"/images/logo5.webp\" alt=\"logo5\" class=\"w-100\"> <h3>D7</h3> <p>Đang cập nhật...</p></div> <div class=\"scroll-item\"><img src=\"/images/logo6.webp\" alt=\"logo5\" class=\"w-100\"> <h3>D20A</h3> <p>Đang cập nhật...</p></div></div></div>" : "<!---->") + " <div class=\"sim-data\"><div class=\"container text-center py-5\"><h1>Nhà Mạng Siêu Cuốn</h1> <div class=\"underline mx-auto\"></div> <div class=\"row mt-5\"><div class=\"col-md-4\"><div class=\"image-card\"><img src=\"/images/sieudata.svg\" alt=\"Sim Data\" class=\"img-fluid\"> <h3 class=\"mt-3\">Siêu Data Xài Thả Ga</h3> <p>Với chi phí cực kỳ hợp ví, chỉ bằng một cốc trà đá mỗi ngày, Local mang đến những gói cước 4G siêu data, tốc độ cao với đa dạng lựa chọn. Có Local tha hồ lướt mạng!</p></div></div> <div class=\"col-md-4\"><div class=\"image-card\"><img src=\"/images/sieusong.svg\" alt=\"Sim Số Đẹp\" class=\"img-fluid\"> <h3 class=\"mt-3\">Siêu Sóng Phủ Mọi Nơi</h3> <p>Local sử dụng chung hạ tầng với MobiFone - 1 trong 3 nhà mạng lớn nhất Việt Nam, phủ sóng 63 tỉnh thành khắp cả nước. Có Local lướt mạng mượt mà, không lo về sóng!</p></div></div> <div class=\"col-md-4\"><div class=\"image-card\"><img src=\"/images/sieudeal.svg\" alt=\"Đặc Quyền\" class=\"img-fluid\"> <h3 class=\"mt-3\">Siêu Deal Free Thỏa Thích</h3> <p>Không chỉ có dàn deal đỉnh cho dân săn SIM Local tậu SIM siêu data giá hời, mà chúng tôi còn có kho bí kíp cho dân chơi Local kiếm data FREE mỗi ngày. Có Local ưu đãi trầm trồ!</p></div></div></div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/simdata.vue?vue&type=template&id=549d728b

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/simdata.vue?vue&type=script&lang=js
/* harmony default export */ var simdatavue_type_script_lang_js = ({
  name: 'simdata',
  data() {
    return {
      activeContent: null // Quản lý trạng thái của nội dung hiển thị
    };
  },
  methods: {
    showContent(type) {
      this.activeContent = type; // Cập nhật trạng thái khi người dùng nhấp vào nút
    }
  }
});
// CONCATENATED MODULE: ./pages/simdata.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_simdatavue_type_script_lang_js = (simdatavue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/simdata.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_simdatavue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5f537bc8"
  
)

/* harmony default export */ var simdata = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=simdata.js.map