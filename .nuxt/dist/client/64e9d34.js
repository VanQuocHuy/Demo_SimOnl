(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{314:function(t,e,r){var content=r(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(113).default)("2b677a92",content,!0,{sourceMap:!1})},324:function(t,e,r){"use strict";r(314)},325:function(t,e,r){var n=r(112)((function(i){return i[1]}));n.push([t.i,".sim-promotion{background-color:#0056b3;color:#fff}.container{max-width:960px}h1{font-size:2.5rem;font-weight:700}.lead{font-size:1.25rem;font-weight:300;margin-top:1rem}.sim-cards{position:relative}.sim-cards img{max-width:100%}.labels{display:flex;flex-direction:column;gap:1rem;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.label{align-items:center;background-color:#fff;border-radius:1rem;box-shadow:0 .5rem 1rem rgba(0,0,0,.1);color:#000;display:flex;gap:.5rem;padding:.5rem 1rem}.icon{font-size:1.5rem}.phone-list-section{background-color:#fff;border-radius:8px;box-shadow:0 .5rem 1rem rgba(0,0,0,.1);padding:20px}.phone-list{border-collapse:collapse;margin:0 auto;width:100%}.phone-list td,.phone-list th{border:1px solid #ddd;color:#000;padding:10px;text-align:left;text-align:center}.phone-list th{background-color:#f4f4f4;font-weight:700}.phone-list tr:not(:last-child) td{border-bottom:2px solid #ddd}.phone-list thead th:first-child{border-top-left-radius:8px}.phone-list thead th:last-child{border-top-right-radius:8px}.phone-list tbody tr:last-child td:first-child{border-bottom-left-radius:8px}.phone-list tbody tr:last-child td:last-child{border-bottom-right-radius:8px}.action-buttons{align-items:center;display:flex;gap:10px;justify-content:center}.btn2{border:none;border-radius:70%;cursor:pointer;margin:0 5px;padding:5px}.btn-cart1,.btn2{align-items:center;display:inline-flex}.btn-cart1{background-color:#f5dada;border:1px solid #f5dada;border-radius:50%;color:#000;height:40px;justify-content:center;padding:0;width:40px}.btn-cart1 img{height:20px;width:20px}.btn-buy{background-color:#dc3545;border:none;border-radius:20px;color:#fff;height:40px;line-height:40px;margin-left:10px;padding:0 15px}.btn-cart1:hover{background-color:#f39d9d}.btn-buy:hover{background-color:#c82333}.alert{align-items:center;background-color:#fff;border:1px solid #28a745;border-radius:5px;box-shadow:0 .5rem 1rem rgba(0,0,0,.1);color:#000;display:flex;padding:10px 20px;position:fixed;right:10px;top:10px;z-index:1050}.alert img{height:20px;width:20px}",""]),n.locals={},t.exports=n},333:function(t,e,r){"use strict";r.r(e);var n=r(25);r(45),r(34),r(44),r(70),r(71),r(17),r(35),r(87);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={name:"simdodep",data:function(){return{phoneNumbers:[{number:"0901234567",type:"Số Đẹp",price:"0đ"},{number:"0902345678",type:"Số Đẹp",price:"2.000.000đ"},{number:"0845445797",type:"Số Lặp",price:"2.500.000đ"},{number:"0396258648",type:"Số Lặp",price:"3.000.000đ"},{number:"0905632638",type:"Số Lặp",price:"700.000đ"},{number:"0386489872",type:"Số Lặp",price:"900.000đ"},{number:"0905905905",type:"Số Lặp",price:"1.000.000đ"}],showAlert:!1,alertMessage:""}},methods:{addToCart:function(t){var e=JSON.parse(localStorage.getItem("giohang"))||[];e.some((function(e){return e.number===t.number}))?this.showToast("Số điện thoại ".concat(t.number," đã có trong giỏ hàng!")):(e.push(c(c({},t),{},{packageDetails:"Gói cước: ABC, Chu kỳ: 12 tháng"})),localStorage.setItem("giohang",JSON.stringify(e)),this.showToast("Đã thêm ".concat(t.number," vào giỏ hàng!")))},showToast:function(t){var e=this;this.alertMessage=t,this.showAlert=!0,setTimeout((function(){e.showAlert=!1}),3e3)}}},d=(r(324),r(26)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"sim-promotion"},[e("div",{staticClass:"container text-center py-5"},[e("h1",[t._v("Vạn sự tùy SIM")]),t._v(" "),e("div",{staticClass:"underline mx-auto"}),t._v(" "),e("p",{staticClass:"lead"},[t._v("\n        Năm mới Giáp Thin, vận lên như rồng với dàn số đẹp siêu sao chỉ từ 0Đ của mạng di động Local. Hàng vạn số đẹp không chỉ dễ nhớ mà còn hợp với tên tuổi ngày sinh của riêng bạn giúp thu hút năng lượng tích cực, vạn sự may mắn, thăng hạng mọi mặt cuộc sống!\n      ")]),t._v(" "),e("marquee",[t._v(" ĐẦU SỐ 098 - SIM SIÊU DATA - SIM SỐ ĐẸP - ĐẶC QUYỀN SIM LOCAL")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"phone-list-section py-5"},[e("div",{staticClass:"container"},[e("table",{staticClass:"phone-list"},[t._m(3),t._v(" "),e("tbody",t._l(t.phoneNumbers,(function(r){return e("tr",{key:r.number},[e("td",[t._v(t._s(r.number))]),t._v(" "),e("td",[t._v(t._s(r.type))]),t._v(" "),e("td",[t._v(t._s(r.price))]),t._v(" "),e("td",{staticClass:"action-buttons"},[e("button",{staticClass:"btn2 btn-cart1",on:{click:function(e){return t.addToCart(r)}}},[e("img",{staticClass:"bi-cart1",attrs:{src:"/images/shopi1.svg",alt:"Cart"}})]),t._v(" "),e("button",{staticClass:"btn2 btn-buy"},[t._v("Mua Ngay")])])])})),0)])])])],1)]),t._v(" "),t.showAlert?e("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[e("img",{attrs:{src:"/images/tick.webp",alt:"Success"}}),t._v("\n    "+t._s(t.alertMessage)+"\n  ")]):t._e()])}),[function(){var t=this._self._c;return t("div",{staticClass:"carousel slide",attrs:{id:"carouselExample"}},[t("div",{staticClass:"carousel-inner"},[t("div",{staticClass:"carousel-item active"},[t("img",{staticClass:"d-block w-100",attrs:{src:"/images/simsodep.svg",alt:"h1"}})])])])},function(){var t=this._self._c;return t("div",{staticClass:"sim-cards mt-4"},[t("img",{staticClass:"img-fluid",attrs:{src:"/images/simsodep.webp",alt:"Sim Cards"}})])},function(){var t=this._self._c;return t("div",{staticClass:"container text-center py-5"},[t("h4",[this._v("Một số gợi ý từ Local")])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("Số Điện Thoại")]),t._v(" "),e("th",[t._v("Loại Số")]),t._v(" "),e("th",[t._v("Giá Tiền")])])])}],!1,null,null,null);e.default=component.exports}}]);