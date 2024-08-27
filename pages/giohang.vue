<template>
  <div class="cart">
    <div class="container text-center py-5">
      <div class="sim-cards mt-4"></div>
      <h1 class="cart-title">Giỏ hàng</h1>
      <div class="underline mx-auto"></div>
    </div>
    <div class="col-md-6">
      <div class="box-1 p-4 mb-4">
        <div class="button-group d-flex align-items-start">
          <button class="btn btn-outline-primary btn-small" @click="showContent('data')">Sim Data</button>
          <button class="btn btn-outline-primary btn-small" @click="showContent('sodep')">Sim Số Đẹp</button>
        </div>

        <!-- Nội dung hiển thị khi nhấp vào nút -->
        <div v-if="activeContent === 'data'" class="content mt-4">
          <img src="/images/box.svg" alt="Sim Data" class="img-fluid">
          <h3 class="sim1">Giỏ hàng SIM Data của bạn đang trống</h3>
          <NuxtLink to="/simdata" class="px-5 py-2 btn btn-primary">Khám Phá Ngay</NuxtLink>
        </div>

        <div v-if="activeContent === 'sodep'" class="content mt-4">
          <!-- Check if the cart is empty -->
          <div v-if="cart.length === 0" class="empty-cart">
            <img src="/images/box.svg" alt="simsodep" class="img-fluid">
            <h3 class="sim1">Giỏ hàng SIM Số Đẹp của bạn đang trống</h3>
            <NuxtLink to="/simsodep" class="px-5 py-2 btn btn-primary">Khám Phá Ngay</NuxtLink>
          </div>

          <!-- If cart has items, show them -->
          <div v-else>
            <div v-for="(phone, index) in cart" :key="phone.number" class="phone-box">
              <div class="phone-number">
                {{ phone.number }}
                <button @click="removeFromCart(index)" class="btn-clear">
                  <img src="/images/clear.svg" alt="Clear" />
                </button>
                
              </div>
              <hr class="phone-divider">
              <div class="package-details">
                <p>Phí tư vấn:</p>
                <h4>{{ phone.consultingFee }}</h4>
                <p>Gói cước đi kèm:</p>
                <div class="package-change">
                  <h4>{{ phone.package }}</h4>
                  <button @click="openPackageModal(phone)" class="btn-reload">
                    <img src="/images/reload.svg" alt="Reload" class="reload-icon"> Đổi gói
                  </button>
                </div>
                <p>Giá cước:</p>
                <p>{{ phone.cycle }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    <!-- Bảng Modal -->
    <div class="modal" tabindex="-1" v-if="showModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Chọn Gói Cước Mới</h5>
          </div>
          <div class="modal-body">
            <div v-for="(pkg, idx) in availablePackages" :key="idx" class="package-option" @click="selectPackage(pkg)">
              <h5>{{ pkg.name }}</h5>
              <p>{{ pkg.details }}</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closePackageModal">Đóng</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'GioHang',
  data() {
    return {
      activeContent: null,
      cart: [],
      showModal: false,
      selectedPhone: null,
      availablePackages: [
        { name: '6A99P - 4GB/ngày', details: 'Tặng thêm 30 ngày sử dụng - Miễn phí data tốc độ cao (120GB/tháng)' },
        { name: '12A99 - 4GB/ngày', details: 'Tặng thêm 60 ngày sử dụng - Miễn phí data tốc độ cao (120GB/tháng)' },
        { name: '6A89F - 3GB/ngày', details: 'Tặng thêm 30 ngày sử dụng - Miễn phí data tốc độ cao (90GB/tháng)' },
        { name: '12A89F - 3GB/ngày', details: 'Miễn phí gọi nội mạng (Local và MobiFone) - Miễn phí 30 ngày đầu tiên sử dụng' },
        { name: '6A68S - 2GB/ngày', details: 'Miễn phí 30 ngày đầu tiên sử dụng - Miễn phí data tốc độ cao (60GB/tháng)' },
        { name: '12A69S - 2GB/ngày', details: 'Tặng thêm 60 ngày sử dụng - Miễn phí data tốc độ cao (60GB/tháng)' },
        { name: '6A79S - 3GB/ngày', details: 'Miễn phí data tốc độ cao (90GB/tháng) - Lướt TikTok, Facebook, YouTube,... - Nghe, gọi, nhắn tin: Zalo, Telegram, Viber,...' },
        { name: '12A79S - 3GB/ngày', details: 'Miễn phí data tốc độ cao (90GB/tháng) 8GB tốc độ cao/ngày' },
        { name: '6A119S - 6GB/ngày', details: '8GB tốc độ cao/ngày - Miễn phí gọi nội mạng (Local và MobiFone) - Miễn phí 30 ngày đầu tiên sử dụng' },
        { name: '12A119S - 6GB/ngày', details: 'Miễn phí data tốc độ cao (180GB/tháng) - Miễn phí gọi nội mạng (Local và MobiFone) - Miễn phí 30 ngày đầu tiên sử dụng' },
      ],
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
    },
  },
};
</script>


<style scoped>
.container {
  padding: 20px;
}
.cart-title{ /* Điều chỉnh vị trí của tiêu đề "Giỏ hàng" */
  margin-top: -40px;
  font-size: 30px;
}
.box-1{
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 0.75rem;
  background-color: #f9f9f9;
  margin-left: 20px;
  margin-top: -30px;
  position: relative; /* Để dễ dàng định vị các nút */
  height: 400px; 
  width: 650px;
  overflow-y: auto; 
  padding-bottom: 20px;
}
.button-group {
  display: flex;
  position: absolute;
  top: 20px; /* Đặt vị trí gần góc trên bên trái */
  left: 20px; /* Đặt vị trí gần góc trên bên trái */

}
.btn {
  margin-right: 10px; /* Khoảng cách giữa 2 nút */
  background-color: #dc3545; /* Màu nền đỏ */
  border-color: #dc3545; /* Màu viền đỏ */
  color: white; /* Màu chữ trắng */

}
.btn:hover {
  background-color: #2a2dca; /* Màu xanh khi hover */
  border-color: #2a2eae;
}
.content {
  text-align: center; /* Căn giữa nội dung */
  position: absolute;
  top: 100px; /* Căn giữa theo chiều dọc */
  left: 50%;
  transform: translateX(-50%); /* Căn giữa theo chiều ngang */
}
.content img {
  max-width: 100%;
  height: auto;
}
.sim1{
    font-size: 15px;
}
/* Phone-box */

.phone-box {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px; 
  margin-bottom: 15px;
  box-shadow: 0 0.5rem 1rem rgba(239, 10, 10, 0.1);
  width: 550px;
  box-sizing: border-box;
  text-align: left;
}

.phone-number {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
  margin-bottom: 10px;
  color: red;
}
.phone-divider {
  border-top: 1px solid #8f8b8b;
  margin-top: 5px;
}

.phone-package {
  font-size: 15px;
  color: #666; /* Màu xám cho nội dung gói cước */
}
.btn-clear {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  
}
.phone-divider {
  margin: 10px 0;
  border-top: 1px solid #ccc;
}
.package-details {
  display: flex;
  flex-direction: column;
}
.package-change {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.reload-icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.btn-reload {
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 5px 10px;
  transition: background-color 0.3s, border-color 0.3s;
}
.btn-reload:hover {
  background-color: #e0e0ff; 
  border-color: #2a2eae; 
}


/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.modal-dialog {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
}
.modal-title {
  margin-bottom: 10px;
}
.modal-body {
  max-height: 400px;
  overflow-y: auto;
}
.package-option {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
.package-option:hover {
  background-color: #f1f1f1;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
}
</style>