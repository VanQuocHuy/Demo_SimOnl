<template>
  <div class="buy-now">
    <div class="wallpaper-container">
      <div class="wallpaper">
        <div class="container py-5 custom-container">
          <div class="row">
            <div class="col-12 text-center mb-4 position-relative">
              <div class="icon-back" @click="goBack">
                  <img src="/images/back.svg" alt="icon-back" class="back">
              </div>
              <NuxtLink to="/" class="logo">
                <img src="/images/mylocal.png" alt="logo" class="logo">
              </NuxtLink>
              <hr class="lane">
            </div>
          </div>
<!-- ------------------Phần chọn gói cước------------------- -->
          <div class="tab-container" v-if="currentSection < 4">
            <div class="tabs">
              <div :class="['tab', { 'active-tab': currentSection === 1 }]" @click="setSection(1)">
                <span :class="['active-number', { tick: currentSection > 1 }]">1</span> Chọn gói cước
              </div>
              <div :class="['tab', { 'active-tab': currentSection === 2 }]" @click="setSection(2)">
                <span :class="['active-number', { tick: currentSection > 2 }]">2</span> Thông tin giao hàng
              </div>
              <div :class="['tab', { 'active-tab': currentSection === 3 }]" @click="setSection(3)">
                <span :class="['active-number', { tick: currentSection === 3 }]">3</span> Thanh toán
              </div>
            </div>
          </div>

          <div class="sections"> 
            <div v-if="currentSection === 1" class="section">
              <div class="package-boxes-container">
          <div class="package-box">
      <div class="boxbox">
        <h6>A68</h6>
      </div>
      <h3>A68</h3>
      <h5>90Gb/tháng</h5>
      <p>3Gb/ngày</p>
      <p>68.000đ/tháng</p>
      <h4>180.000đ/SIM</h4>
      <div class="quantity-controls">
        <button class="btn-control decrement" @click="decrementQuantity('A68')">
          <img src="/images/tru.svg" alt="tru" class="icon-tru">
        </button>
        <div class="quantity-display">{{ quantities.A68 }}</div>
        <button class="btn-control increment" @click="incrementQuantity('A68')">
          <img src="/images/cong.svg" alt="cong" class="icon-cong">
        </button>
      </div>
          </div>
          <div class="package-box">
      <div class="boxbox">
        <h6>A78</h6>
      </div>
      <h3>A78</h3>
      <h5>70Gb/tháng</h5>
      <p>3Gb/ngày</p>
      <p>78.000đ/tháng</p>
      <h4>150.000đ/SIM</h4>
      <div class="quantity-controls">
        <button class="btn-control decrement" @click="decrementQuantity('A78')">
          <img src="/images/tru.svg" alt="tru" class="icon-tru">
        </button>
        <div class="quantity-display">{{ quantities.A78 }}</div>
        <button class="btn-control increment" @click="incrementQuantity('A78')">
          <img src="/images/cong.svg" alt="cong" class="icon-cong">
        </button>
      </div>
          </div>
          <div class="package-box">
      <div class="boxbox">
        <h6>A89</h6>
      </div>
      <h3>A89</h3>
      <h5>120Gb/tháng</h5>
      <p>4Gb/ngày</p>
      <p>89.000đ/tháng</p>
      <h4>200.000đ/SIM</h4>
      <div class="quantity-controls">
        <button class="btn-control decrement" @click="decrementQuantity('A89')">
          <img src="/images/tru.svg" alt="tru" class="icon-tru">
        </button>
        <div class="quantity-display">{{ quantities.A89 }}</div>
        <button class="btn-control increment" @click="incrementQuantity('A89')">
          <img src="/images/cong.svg" alt="cong" class="icon-cong">
        </button>
      </div>
          </div>
          <div class="package-box">
      <div class="boxbox">
        <h6>A99</h6>
      </div>
      <h3>A99</h3>
      <h5>120Gb/tháng</h5>
      <p>5Gb/ngày</p>
      <p>99.000đ/tháng</p>
      <h4>220.000đ/SIM</h4>
      <div class="quantity-controls">
        <button class="btn-control decrement" @click="decrementQuantity('A99')">
          <img src="/images/tru.svg" alt="tru" class="icon-tru">
        </button>
        <div class="quantity-display">{{ quantities.A99 }}</div>
        <button class="btn-control increment" @click="incrementQuantity('A99')">
          <img src="/images/cong.svg" alt="cong" class="icon-cong">
        </button>
      </div>
    </div>
    <!-- <p v-if="showError" class="error-message">Vui lòng chọn gói cước.</p> -->
  </div>
</div>
        <!-- -------------Thông tin giao hàng--------------- -->
            <div v-if="currentSection === 2" class="section">
              <div class="shipping-info">
                <h3 class="infor">Thông tin cá nhân</h3>
                <label for="full-name">Họ và tên</label>
                <div class="input-container">
                  <input 
                    type="text" 
                    id="full-name"  
                    name="full-name" 
                    placeholder=""
                    v-model="shippingInfo.name"
                    @input="updateShippingInfo"/>
              </div>
              <label for="numberphone">Số điện thoại</label>
              <div class="input-container">
                <input 
                  type="text" 
                  id="numberphone" 
                  name="numberphone" 
                  v-model="shippingInfo.phone" 
                  @blur="validatePhoneNumber" 
                  placeholder=""/>
               </div>
              <p v-if="phoneError" class="error-message">{{ phoneError }}</p>

              <label for="mail">Địa chỉ Email</label>
              <div class="input-container">
                <input 
                type="text" 
                id="mail" 
                name="mail" 
                v-model="shippingInfo.email" 
                @blur="validateEmail" 
                placeholder=""/>
              </div>
              <p v-if="emailError" class="error-message">{{ emailError }}</p>

              <h3 class="address">Địa chỉ giao hàng</h3>
              <label for="cty">Tỉnh/Thành phố</label>
              <div class="input-container">
                <select
                    v-if="province"
                    v-model="selectedProvinceId"
                    class="select"
                    id="province"
                    name="province"
                    title="Chọn Tỉnh Thành"
                    @change="handleSelectChangeProvince"
                  >
                    <option value="0">Tỉnh Thành</option>
                    <option
                      v-for="item in province"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.full_name }}
                    </option>
                  </select>
                </div>

              <label for="district">Quận/Huyện</label>
              <div class="input-container">
                <select
                    v-if="pistrict"
                    v-model="selectedPistrictId"
                    class="select"
                    id="pistrict"
                    name="pistrict"
                    title="Chọn Quận Huyện"
                    @change="handleSelectChangePistrict"
                  >
                    <option value="0">Quận Huyện</option>
                    <option
                      v-for="item in pistrict"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.full_name }}
                    </option>
                  </select>
                </div>

              <label for="commune">Phường/Xã</label>
              <div class="input-container">
                <select
                    v-if="commune"
                    v-model="selectedCommuneId"
                    class="select"
                    id="commune"
                    name="commune"
                    title="Chọn Phường Xã"
                    @change="handleSelectChangeCommune"
                  >
                    <option value="0">Phường Xã</option>
                    <option
                      v-for="item in commune"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.full_name }}
                    </option>
                  </select>
                </div>

              <label for="address1">Địa chỉ</label>
              <div class="input-container">
                <input 
                  type="text" 
                  id="address1" 
                  name="address1" 
                  placeholder=""
                  v-model="shippingInfo.address1"
                  @input="updateShippingInfo"/>
              </div>

              <label for="note">Ghi chú</label>
              <div class="note-container">
                <textarea 
                  id="note" 
                  v-model="shippingInfo.note" 
                  @input="updateShippingInfo"
                  rows="4" 
                  placeholder=""></textarea>
              </div>
            </div>
          </div>
<!-- ---------------Phần thanh toán------------------- -->
            <div v-if="currentSection === 3" class="section">
              <div class="shipping-info">
                <h3 class="infor">Thông tin cá nhân</h3>
                <label for="full-name">Họ và tên</label>
                <div class="input-container">
                  <!-- <p>{{ phoneNumber }}</p> -->
                  <input 
                    type="text" 
                    id="full-name" 
                    name="full-name" 
                    placeholder=""
                    v-model="shippingInfo.name"
                    @input="updateShippingInfo"/> 
              </div>

              <label for="numberphone">Số điện thoại</label>
              <div class="input-container">
                <input
                    type="text"
                    id="numberphone"
                    name="numberphone"
                    v-model="shippingInfo.phone"
                    @input="updateShippingInfo"
                    @blur="validatePhoneNumber"
                    placeholder=""/>
                </div>
              <p v-if="phoneError" class="error-message">{{ phoneError }}</p>

              <label for="mail">Địa chỉ Email</label>
              <div class="input-container">
                <input
                    type="text"
                    id="mail"
                    name="mail"
                    v-model="shippingInfo.email"
                    @input="updateShippingInfo"
                    @blur="validateEmail"
                    placeholder=""/>
                </div>
              <p v-if="emailError" class="error-message">{{ emailError }}</p>

              <h3 class="address">Địa chỉ giao hàng</h3>
              <label for="cty">Tỉnh/Thành phố</label>
              <div class="input-container">
                <input 
                  type="text" 
                  id="cty" 
                  name="cty" 
                  placeholder="" 
                  v-model="shippingInfo.fullAddress[0].full_name" @input="updateShippingInfo"/>
                </div>

              <label for="district">Quận/Huyện</label>
              <div class="input-container">
                <input
                    type="text"
                    id="district"
                    name="district"
                    placeholder=""
                    v-model="shippingInfo.fullAddress[1].full_name"
                    @input="updateShippingInfo"/>
                </div>

              <label for="commune">Phường/Xã</label>
              <div class="input-container">
                <input
                    type="text"
                    id="commune"
                    name="commune"
                    placeholder=""
                    v-model="shippingInfo.fullAddress[2].full_name"
                    @input="updateShippingInfo"/>
                </div>

              <label for="address1">Địa chỉ</label>
              <div class="input-container">
                 <input
                    type="text"
                    id="address1"
                    name="commune"
                    placeholder=""
                    v-model="shippingInfo.address1"
                    @input="updateShippingInfo"/>
                </div>

              <label for="note">Ghi chú</label>
              <div class="note-container">
                <textarea
                    id="note"
                    rows="4"
                    placeholder=""
                    v-model="shippingInfo.note"
                    @input="updateShippingInfo"></textarea>
                </div>
            </div>

              <div class="payment-methods">
                <h4>Phương thức thanh toán</h4>
                <div class="payment-options">
                  <div class="payment-option" :class="{ 'active': selectedPayment === 'credit-card' }" @click="selectPayment('credit-card')">
                   <label for="payment1">Thẻ ngân hàng nội địa</label>
              <input 
                 type="radio" 
                 id="payment1" 
                 name="payment-method" 
                 value="credit-card" 
                 v-model="selectedPayment"/>
                </div>

            <div class="payment-option" :class="{ 'active': selectedPayment === 'cash-on-delivery' }" @click="selectPayment('cash-on-delivery')">
              <label for="payment2">Thanh toán khi nhận hàng (COD)</label>
              <input 
                type="radio" 
                id="payment2" 
                name="payment-method" 
                value="cash-on-delivery" 
                v-model="selectedPayment"/>
            </div>
          </div>
          <p v-if="selectedPayment === 'cash-on-delivery'" class="fee-notice">
            Phí thu hộ: 0đ.
          </p>

          <p class="dieukien">Tôi đã đọc và đồng ý với việc chia sẻ những thông 
            tin trên theo <span style="font-weight: 700;">Chính sách bảo mật</span> của myLocal.vn
          </p>

          <button class="dathang" @click="handleOrder">Tiến hành đặt hàng</button>
          <div v-if="showPaymentWarning" class="warning">
                Vui lòng chọn phương thức thanh toán trước khi đặt hàng.
            </div>
          </div>
        </div>
        

        <!-- Phần thông tin đơn hàng -->
          <div v-if="currentSection === 4" class="OrderIn4">
            <div class="order-info-container">
                <h3>Thông tin đơn hàng</h3>
                <div class="personal-info-box">
                    <img src="/images/address.svg" alt="adress" class="adress">
                    <div class="info-text">
                      <p class="hoten">{{ shippingInfo.name }}</p>
                      <p>{{ shippingInfo.phone }}</p>
                      <p>{{ shippingInfo.email }}</p>
                      <p>{{ combinedInfo }}</p>
                      <p> Ghi chú: {{ shippingInfo.note }}</p>
                  </div>  
            </div>
            <div class="personal_infobox">
                    <img src="/images/address.svg" alt="adress" class="adress">
                    <div class="info-text">
                    <h5>Phương thức thanh toán</h5>
                    <p>{{ selectedPayment=== 'cod' ? 'Thẻ ngân hàng nội địa' : 'Thanh toán khi nhận hàng (COD)' }}</p>
                  </div>  
             </div>
             <hr class="laneee">
             <div class="csbaomat">
              <p>Bằng việc tiến hành đặt hàng, tôi đồng ý với 
              <span style="font-weight: 700;">Điều khoản mua hàng</span>, cũng như đã hiểu và đồng ý
              chia sẻ thông tin cho mục đích mua hàng theo 
              <span style="font-weight: 700;">Chính sách bảo mật</span> tại myLocal.vn</p>
            </div>
              <button class="confirm" @click="confirmOrder">
                Xác nhận đơn hàng
              </button>
           </div>
          </div>
              <!-- Phần Xác nhận thông tin đặt hàng thành công  -->
          <div v-if="currentSection === 5 && transaction" class="OrderConfirm">
            <div class="confirm-info-container">
              <h3>Thông tin đơn hàng</h3>
              <div class="compelete-order">
                <img src="/images/done.png" alt="done" class="done">
                <div class="info-text">
                  <h5>Đặt hàng thành công!</h5>
                  <p class="orderCode"> Mã đơn hàng: {{ orderCode }}</p>
                  <p>Chúng tôi sẽ liên hệ khi đơn hàng của bạn đã sẵn sàng.</p>
                </div>
              </div>
                <div class="personal-info-box">
                    <img src="/images/address.svg" alt="adress" class="adress">
                    <div class="info-text">
                      <p class="hoten">{{ shippingInfo.name }}</p>
                      <p>{{ shippingInfo.phone }}</p>
                      <p>{{ shippingInfo.email }}</p>
                      <p>{{ combinedInfo }}</p>
                      <p> Ghi chú: {{ shippingInfo.note }}</p>
                  </div>  
            </div>
            <div class="personal_infobox">
                    <img src="/images/address.svg" alt="adress" class="adress">
                    <div class="info-text">
                    <h5>Phương thức thanh toán</h5>
                    <p>{{ selectedPayment=== 'cod' ? 'Thẻ ngân hàng nội địa' : 'Thanh toán khi nhận hàng (COD)' }}</p>
                  </div>  
             </div>
             <button @click="goHome" class="come_home">
                 Quay trở về trang chính
             </button>
           </div>
          </div>
          <!-- Đặt hàng không thành công-->
          <div v-if="currentSection === 5 && !transaction" class="OrderFail">
            <div class="fail-container">
              <h3>Thông tin đơn hàng</h3>
              <div class="fail-order">
                <img src="/images/notdone.png" alt="done" class="done">
                <div class="info-text">
                  <h5>Đặt hàng không thành công!</h5>
                  <p class="orderCode"> Mã đơn hàng: {{ orderCode }}</p>
                  <p>Có lỗi xảy ra khiến đơn hàng không thể thực hiện được.</p>
                  <p class="contact">Vui lòng liên hệ 19001900 để được hỗ trợ</p>
                </div>
              </div>
                <div class="personal-info-box">
                    <img src="/images/address.svg" alt="adress" class="adress">
                    <div class="info-text">
                      <p class="hoten">{{ shippingInfo.name }}</p>
                      <p>{{ shippingInfo.phone }}</p>
                      <p>{{ shippingInfo.email }}</p>
                      <p>{{ combinedInfo }}</p>
                      <p> Ghi chú: {{ shippingInfo.note }}</p>
                  </div>  
            </div>
            <div class="personal_infobox">
                    <img src="/images/address.svg" alt="adress" class="adress">
                    <div class="info-text">
                    <h5>Phương thức thanh toán</h5>
                    <p>{{ selectedPayment=== 'cod' ? 'Thẻ ngân hàng nội địa' : 'Thanh toán khi nhận hàng (COD)' }}</p>
                  </div>  
             </div>
             <button @click="goHome" class="comehome">
                 Quay trở về trang chính
             </button>
             <button @click="resetOrder" class="reset-order">
              Thử đặt lại
             </button>
           </div>
          </div>


        </div>
<!-- ------------------------------------------- -->
          <button v-if="currentSection < 3" class="icon-button" @click="goToNextSection" >Tiếp tục
            <img src="/images/down.svg" alt="icon"> 
          </button>
        </div>
      </div>
<!-- Phần giỏ hàng -->
      <div class="side-box">
        <h1>Giỏ hàng</h1>
        <hr class="lane1">
        <div v-if="cartItems.length === 0">
          <p>Chưa có sản phẩm</p>
        </div>
        <div v-for="item in cartItems" :key="item.name" class="cart-item">
          <p><strong>SIM Local - </strong> {{ item.name }}</p>
          <div class="quantity-price">
            <p><strong>Số lượng:</strong> {{ item.quantity }}</p>
            <p><strong></strong> {{ (item.quantity * item.price).toLocaleString('vi-VN') }}đ</p>
          </div>
          <hr class="item-divider">
        </div>
        <hr class="bottom-divider">

        <div class="subtotal-section" v-if="paymentMethod">
          <div style="display: flex; justify-content: space-between;">
            <span>{{ totalItems }} sản phẩm</span>
            <span>{{ (totalPrice).toLocaleString('vi-VN') }}đ</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 17px;">
            <span>Phí vận chuyển:</span>
            <span>30.000đ</span>
          </div>
          <div style="display: flex; justify-content: space-between; font-weight: bold;">
            <span>Tổng cộng:</span>
            <span class="subtotal-amount">{{ (totalPrice + 30000).toLocaleString('vi-VN') }}đ</span>
          </div>
            <p>Đã bao gồm VAT</p>
        </div>
        <div class="subtotal-section"  v-else>
          <div style="display: flex; justify-content: space-between; font-weight: bold;">
            <span>Tạm tính:</span>
            <span class="subtotal-amount">{{ totalPrice.toLocaleString('vi-VN') }}đ</span>
        </div>
            <p>Đã bao gồm VAT</p> 
        </div>
        </div>
      </div>
    </div>
</template>
 
<script>
import axios from 'axios'
export default {
  name: 'BuyNow',
  data() {
    return {
      showPaymentWarning: false,
      selectedPayment: null,
      previousSection: 1,
      note: "",
      quantities: {
        A68: 0,
        A78: 0,
        A89: 0,
        A99: 0,
      },
      prices: {
        A68: 180000,
        A78: 150000,
        A89: 200000,
        A99: 220000,
      },
      currentSection: 1,
      transaction: false,
      orderCode: '',
      shippingInfo: {
        name: '',
        phone: '',
        email: '',
        address1: '',
        fullAddress: [
          {
            title: 'Tỉnh',
            full_name: '',
          },
          {
            title: 'Quận/Huyện',
            full_name: '',
        },
        {
           title: 'Phường/Xã',
           full_name: '',
        }
      ], //Lưu địa chỉ cụ thể để gửi đi khi chọn xong
      city: '',
        zip: '',
        note: ''
      },
      phoneError: '',
      emailError: '',
      paymentMethod: false,
      selectedProvinceId: null,
      selectedPistrictId: null,
      selectedCommuneId: null,
      province: [], //Lưu danh sách của tỉnh
      pistrict: [], //Lưu danh sách của quận/huyện
      commune: [], //Lưu danh sách của phường/xã
      // showError: false,
    }
  },
  computed: {
    combinedInfo() {
      // Kết hợp các giá trị thông tin thành một chuỗi
      return `${this.shippingInfo.address1}, ${this.shippingInfo.fullAddress[2].full_name}, ${this.shippingInfo.fullAddress[1].full_name}, ${this.shippingInfo.fullAddress[0].full_name}`;
    },
    totalItems() {
      return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    },
    totalPrice() {
      return this.cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
    },
    cartItems() {
      return Object.keys(this.quantities).map(packageName => ({
        name: packageName,
        quantity: this.quantities[packageName],
        price: this.prices[packageName]
      })).filter(item => item.quantity > 0);
    },
  },

  methods: {
    goHome() {
      this.$router.push('/'); // Điều hướng đến trang chủ
    },
    resetOrder() {
      this.currentSection = 1; // Quay lại phần "Chọn gói cước"
    },
    confirmOrder() {
      // Tạo hoặc lấy mã đơn hàng
      this.orderCode = 'ABC123456';
      
      // Chuyển sang giao diện xác nhận đặt hàng thành công
      this.currentSection = 5;
      this.transaction = true //false là thất bại, true là thành công, đó set dựa trên api trả về
    },
    
    handleOrder() {
      if (!this.selectedPayment) {
        this.showPaymentWarning = true; // Hiển thị cảnh báo
        setTimeout(() => {
          this.showPaymentWarning = false;
        }, 3000);
      }else {
        this.showPaymentWarning = false;
        // Chuyển sang giao diện Thông tin đơn hàng
        this.currentSection = 4;
        this.shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"))
        
      }
    },

    goBack() {
    if (this.currentSection > 1) {
      this.previousSection = this.currentSection; // Lưu lại mục hiện tại
      this.currentSection--; // Quay lại mục trước đó
    }
  },
  setSection(section) {
    this.previousSection = this.currentSection; // Cập nhật mục trước đó
    this.currentSection = section; // Cập nhật mục hiện tại
  },
    proceedToOrderDetails() {
    this.currentSection = 4; // Hiển thị thông tin đơn hàng-----------

  },
    incrementQuantity(packageName) {
      this.quantities[packageName]++;
      this.saveCart();
      this.updateCart(packageName);
    },
    decrementQuantity(packageName) {
      if (this.quantities[packageName] > 0) {
        this.quantities[packageName]--;
        this.saveCart();
        this.updateCart(packageName); 
      }
    },
    updateCart(packageName) {
      const packageDetails = this.getPackageDetails(packageName);
      const existingItem = this.cartItems.find(item => item.name === packageName);
      if (existingItem) {
        existingItem.quantity = this.quantities[packageName];
        if (existingItem.quantity === 0) {
          this.cartItems = this.cartItems.filter(item => item.name !== packageName);
        }
      } else if (this.quantities[packageName] > 0) {
        this.cartItems.push({ name: packageName, quantity: this.quantities[packageName], price: packageDetails.price });
      }
    },
    getPackageDetails(packageName) {
      const packagePrices = {
        A68: 180000,
        A78: 150000,
        A89: 200000,
        A99: 220000,
      };
      return { price: packagePrices[packageName] };
    },
    saveCart() {
      try {
        localStorage.setItem('cart', JSON.stringify(this.quantities));
      } catch (e) {
        console.error('Error saving cart to localStorage:', e);
      }
    },
    loadCart() {
      try {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
          this.quantities = JSON.parse(savedCart);
        }
      } catch (e) {
        console.error('Error loading cart from localStorage:', e);
      }
    },
    updateShippingInfo() {
      localStorage.setItem('shippingInfo', JSON.stringify(this.shippingInfo))      

    },
    goToNextSection() {
      if (this.currentSection < 3) {
        this.currentSection++
      }
      if(this.currentSection === 3) {
        const dataInfo = JSON.parse(localStorage.getItem("shippingInfo"))
        if(dataInfo) {
          this.shippingInfo = dataInfo
          console.log("đúng rồi nè: ",this.shippingInfo)
        }
      }
      // if(!this.quantities){
      //   // Nếu chưa chọn gói cước, hiển thị thông báo lỗi
      //   this.showError = true;
      // }else {
      //   // Nếu đã chọn gói cước, chuyển sang bước tiếp theo
      //   this.showError = false;
      //   // Thực hiện logic chuyển sang phần "Thông tin giao hàng"
      // }
    },

    setSection(section) {
      this.currentSection = section;
    },
    selectPayment(method) {
      this.selectedPayment = method;
      this.paymentMethod = true
    },

    validatePhoneNumber() {
      const phonePattern = /^0[3-9][0-9]{8}$/; // Ví dụ định dạng số điện thoại ở Việt Nam
      if (!phonePattern.test(this.shippingInfo.phone)) {
        this.phoneError = 'Số điện thoại không đúng định dạng';
      } else {
        this.phoneError = '';
      }
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Định dạng email đơn giản
      if (!emailPattern.test(this.shippingInfo.email)) {
        this.emailError = 'Địa chỉ email không hợp lệ';
      } else {
        this.emailError = '';
      }
    },
    //API Lấy danh sách tất cả tỉnh thành
    async getAddress() {
         try {
           const res_province = await axios.get(
             'https://esgoo.net/api-tinhthanh/1/0.htm'
           )
   
           // Lưu dữ liệu vào province
           this.province = res_province.data.data
   
           return this.province
         } catch (error) {
           console.error('Boc shit roi', error)
         }
       },

    // Gọi tất cả các quận/huyện khi giá trị của Tỉnh thay đổi
    async handleSelectChangeProvince(event) {
      try {
        const res_pistrict = await axios.get(
          `https://esgoo.net/api-tinhthanh/2/${this.selectedProvinceId}.htm`
        )

        // Lưu dữ liệu vào pistrict
        this.pistrict = res_pistrict.data.data

        //Lưu tỉnh vào fullAdress sau khi chọn tỉnh
        const selectedOption = event.target.options[event.target.selectedIndex]
        this.shippingInfo.fullAddress[0].full_name = selectedOption.text
        this.shippingInfo.fullAddress[1].full_name = ''
        this.shippingInfo.fullAddress[2].full_name = ''

        return this.pistrict
      } catch (error) {
        console.error('Boc shit tap 2', error)
      }
    },

       // Gọi tất cả các phường/xã khi giá trị của Quận/huyện thay đổi
    async handleSelectChangePistrict(event) {
      try {
        const res_commune = await axios.get(
          `https://esgoo.net/api-tinhthanh/3/${this.selectedPistrictId}.htm`
        )

        // Lưu dữ liệu vào commune
        this.commune = res_commune.data.data

        //Lưu quận/huyện vào fullAdress sau khi chọn
        const selectedOption = event.target.options[event.target.selectedIndex]
        this.shippingInfo.fullAddress[1].full_name = selectedOption.text
        this.shippingInfo.fullAddress[2].full_name = ''

        return this.commune
      } catch (error) {
        console.error('Boc shit tap 3', error)
      }
    },
    // Xử lý sự kiện khi giá trị của <select> Phường/Xã thay đổi
      async handleSelectChangeCommune(event) {
      //Lưu phường/xã vào fullAdress sau khi chọn
      const selectedOption = event.target.options[event.target.selectedIndex]
      this.shippingInfo.fullAddress[2].full_name = selectedOption.text

      //<<<-------- chỉ để test lại data có đúng chưa thôi, nhé!
      // if (this.shippingInfo.fullAddress[0].full_name === '') {
      //   alert('ERROR: Không được để trống Tỉnh!!!')
      // } else if (this.shippingInfo.fullAddress[1].full_name === '') {
      //   alert('ERROR: Không được để trống Quận/Huyện!!!')
      // } else if (this.shippingInfo.fullAddress[2].full_name === '') {
      //   alert('ERROR: Không được để trống Phường/Xã!!!')
      // } else {
      //   alert(
      //     `ĐỊA CHỈ GIAO HÀNG: ${this.shippingInfo.fullAddress[0].full_name}, ${this.shippingInfo.fullAddress[1].full_name}, ${this.shippingInfo.fullAddress[2].full_name}`
      //   )
      // }
      //đây đây đây, tới đây chỉ để test lại data có đúng chưa thôi --------->>>
    },
  },
  mounted() {
    this.getAddress() // Gọi API khi component được mount
  },  

  created() {
    this.loadCart();
  }
}
</script>
 
<style scoped>
/* Đặt hàng không thành công */
.fail-container{
  margin-top: 20px;
}
.comehome{
  border: none;
  background-color: white;
  color: red;
  margin-top: 20px;
  font-weight: bold;
  width: 260px;
  margin-left: 30px;

}
.reset-order{
  border: none;
  background-color: red;
  color: white;
  border-radius: 5px;
  text-align: center;
  width: 260px;
}
.contact{
  margin-top: 5px;
}
.fail-order{
  font-size: 13px;
  border:none ;
  padding: 15px;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;
  width: 580px;
  height: 160px;
}
/* Xác nhận đặt hàng  */
.confirm-info-container{
  margin-top: 20px;
}
.confirm-info-container h3{
  font-size: 20px;
  margin-left: 20px;
}
.orderCode{
 color: #30dcd9;
}
.compelete-order{
  font-size: 13px;
border:none ;
padding: 15px;
background-color: #fff;
border-radius: 4px;
display: flex;
align-items: center;
justify-content: flex-start;
margin-top: 15px;
width: 580px;
height: 160px;
}
.come_home{
  border: none;
  background-color: white;
  color: red;
  margin-top: 20px;
  font-weight: bold;
  margin-left: 200px;
}
/* Thông tin đơn hàng */
.hoten{
  color: black; 
  font-weight: bold;  
}
.warning {
  color: red;
  margin-top: 10px;
  margin-left: 85px;
}
.order-info-container {
margin-top: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
} 
.order-info-container h3 {
margin-left: 20px;
} 
.laneee {
border-top: 1px solid #767575;
margin-top: 20px;
}
.csbaomat{
font-size: 10px;
}
.csbaomat>p {
  width: 550px;
  padding: 0 24px;
  text-align: center;
}
.confirm{
border-radius: 5px;
color: white;
text-align: center;
background-color: red;
border: 1px solid red;
width: 480px;
height: 35px;
margin-left: 30px;
}
.personal-info-box {
border: 1px solid #ccc; /* Viền xám */
padding: 15px;
background-color: #fff;
border-radius: 4px;
display: flex;
align-items: center;
justify-content: flex-start;
margin-top: 15px;
width: 550px;
height: 160px;
margin-left: 20px;
}
.info-text{
margin-left: 18px;
}
.personal-info-box p {
margin: 5px 0; /* Khoảng cách giữa các dòng */
font-size: 13px;
}
.personal_infobox {
border: 1px solid #ccc; /* Viền xám */
padding: 15px;
background-color: #fff;
border-radius: 4px;
display: flex;
align-items: center;
justify-content: flex-start;
margin-top: 15px;
width: 550px;
height: 80px;
margin-left: 20px;
font-size: 13px;
}
.personal_infobox h5{
margin-top: 10px;
}


/* --------------- */
.order-details {
  background-color: #ffffff;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 500px;
  
}
/* Thanh toán */
.fee-notice {
  margin-top: 5px;
  font-size: 11px;
  color: #333;
  margin-left: 315px;
}
.dieukien{
  font-size: 12px;
  margin-top: 40px;
  margin-left: 30px;
}
.dathang{
  border: 1px red;
  color: white;
  border-radius:5px;
  background-color: rgb(232, 59, 59);
  width: 530px;
  margin-left: 30px;
  height: 35px;
}
.payment-methods h4{
  margin-top: 40px;
  font-size: 20px;
  text-align: left;
}
.payment-methods {
  margin-top: 20px;
  font-size: 16px;
  text-align: left;
}
.payment-option input[type="radio"] {
  margin-left: auto;
  cursor: pointer;
}
.payment-option {
  border: 1px solid #d3d3d3; /* Màu viền mặc định */
  padding: 5px; /* Khoảng cách bên trong khung */
  border-radius: 5px;
  width: 270px;
  transition: border-color 0.3s;
  justify-content: space-between;
  display: flex;
}
.payment-option.active {
  border-color: red; /* Màu viền khi được chọn */
}
.payment-option label {
  font-size: 14px;
}
.payment-options {
  display: flex; /* Sử dụng flexbox để căn chỉnh ngang */
  gap: 40px; /* Khoảng cách giữa các phương thức thanh toán */
}
/* Thông tin giao hàng */
.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
.address{
  margin-top: 60px;
  font-size: 20px;
}
.infor{
  margin-top: 50px;
  font-size: 20px;
}
.note-container {
  width: 600px;
  max-width: 600px; /* Đặt chiều rộng tối đa cho khung ghi chú */
}
textarea {
  background-color: #f0f0f0;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  resize: none; /* Ngăn không cho người dùng thay đổi kích thước của khung */
  box-sizing: border-box;
  overflow-wrap: break-word; /* Đảm bảo văn bản tự động xuống dòng */
}
.shipping-info {
  text-align: left;
  margin: 20px 0;
}
.input-container {
  background-color: #f0f0f0; /* Màu nền xám */
  border-radius: 5px;
  width: 600px;
  margin-top: 10px;
}

.select{
  width: 100%;
  border: none ;
  background: transparent;
  padding: 8px;
  font-size: 16px;width: 100%;
  border: none ;
  background: transparent;
  padding: 8px;
  font-size: 16px;
}
input[type="text"] {
  width: 100%;
  border: none ;
  background: transparent;
  padding: 8px;
  font-size: 16px;
}
input[type="text1"] {
  width: 100%;
  border: none ;
  background: transparent;
  padding: 8px;
  font-size: 16px;
  height: 150px;
  
}

/* ------------------ */
.package-boxes-container {
  display: flex;
  flex-wrap: wrap; /* Cho phép các gói cước xuống dòng */
  gap: 50px; /* Khoảng cách giữa các gói cước */
  justify-content: space-around; /* Canh giữa các gói cước */
}
/* --------- */
  .side-box {
    width: 300px; 
    background-color: #e0e0e08d; 
    margin-top: 30px;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 1px;
    border: 1px ;
    position: sticky; 
  }
  .side-box h1{
    font-size: 14px ;
    margin-top: 50px;
  }
  .side-box p{
    color: #a3a3a3;
    text-align: center;
    margin-top: 80px;
  }
  .lane1{
    border-top: 1px solid #767575;
  }
  .side-box .cart-item {
    margin-bottom: 20px;
  }
  
  .side-box .cart-item p {
    margin: 0;
    color: #333;
    font-size: 14px;
    text-align: left;
  }
  .quantity-price {
    display: flex;
    justify-content: space-between; 
    align-items: center; 
  }
  .quantity-price p {
    margin: 0;
    color: #333;
    font-size: 14px;
  }
  .item-divider {
    border-top: 1px solid #ddd;
    margin-top: 10px;
  }
  .side-box .bottom-divider {
    border-top: 1px solid #767575; 
    position: absolute; 
    bottom: 10px; 
    left: 0; 
    right: 0;
    margin-bottom: 60px;
  }
  
  .subtotal-section {
    position: absolute;
    bottom: 10px;
    left: 20px;
    right: 20px;
    text-align: left;
    color: #333;
    font-size: 16px;
    display: flex;
    flex-direction: column;
  }
  .subtotal-section h3{
    text-align: left;
    font-size: 15px;
    margin-top: auto;
  }
  
  .subtotal-section p {
    text-align: left;
    margin: 0;
    font-size: 10px;
    margin-bottom: 10px;
  }
  .subtotal-section .subtotal-amount {
    color: red; /* Đổi màu số tiền thành đỏ */
    text-align: right;
    margin-left: 90px;
  }
  /*wallpaper  */
  .wallpaper-container{
    display: flex;
  }
  .wallpaper {
    border: 1px solid #edeaea ; /* */
    padding: 20px; 
    border-radius: 1px;
    background-color: #ffffff; 
    width: 900px;
    margin-bottom: 20px;
    margin-top: 30px;
    margin-left: 10px;
  }
  .custom-container {
    margin-left: 20px; 
    padding-right: 15px; 
  }
  .icon-back {
    position: absolute;
    background-color: rgb(255, 255, 255);
    border: none;
    cursor: pointer;
    height: 30px;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    margin-top: -5px;
  }
  
  .logo {
    max-height: 30px;
  }
  
  .sections {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
  
  .section {
    flex: 1;
    text-align: center;
    padding: 10px;
  }
  
  .lane {
    border-top: 1px solid #767575;
    margin-top: 5px;
  }
  
  .package-box {
    margin-top: 20px;
    margin-left: -30px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f3eaea;
    text-align: left;
    position: relative; 
    width: 230px;
  }
  
  .package-box h5 {
    margin-top: 0;
    font-size: 14px;
    color: #333;
  }
  
  .package-box h3 {
    margin-top: 0;
    font-size: 25px;
    color: #333;
  }
  
  .package-box p {
    margin: 0;
    font-size: 13px;
    color: #666;
  }
  
  .package-box h4 {
    margin-top: 20px;
    font-size: 15px;
    color: red;
  }
  
  .boxbox {
    background-color: #d11f31; 
    color: rgb(255, 255, 255); 
    padding: 20px;
    border-radius: 0.75rem;
    width: 90px; 
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute; 
    top: 10px; 
    right: 10px; 
  }
  .boxbox h6{
    font-size: 30px;
  }
  /* BTN cộng trừ */
  .quantity-controls {
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-top: 10px;
  }
  .btn-control {
    background-color: #dc3545;
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-control.decrement {
    margin-right: 10px;
    background-color: #cdcaca;
  }
  
  .btn-control.increment {
    margin-left: 10px;
    background-color: red;
  }
  .quantity-display {
    border: 1px solid #ffffff;
    border-radius: 8px;
    padding: 5px 10px;
    text-align: center;
    width: 120px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    background-color: #fff;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    margin: 0 10px;
  }
  /* Btn tiếp tục */
  .icon-button {
    
  background-color: rgb(236, 117, 117);
  color: white;
  border: red;
  border-radius: 8px;
  margin-top: 13px;
  margin-left: 710px;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 90px;
  
  }
  .icon-button:hover{
    background-color: red;
  }
  /* Tabb */
.tabs {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex: 1;
  text-align: center;
  cursor: pointer;
}

.active-number {
  border: 1px solid black;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.tick {
  background-color: rgb(56, 232, 56);
  color: white;
}
  </style>


