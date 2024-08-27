  <template>
      <div>
        <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/simsodep.svg" class="d-block w-100" alt="h1">
          </div>
        </div>
    </div>
    <div class="sim-promotion">
      <div class="container text-center py-5">
        <h1>Vạn sự tùy SIM</h1>
        <div class="underline mx-auto"></div>
        <p class="lead">
          Năm mới Giáp Thin, vận lên như rồng với dàn số đẹp siêu sao chỉ từ 0Đ của mạng di động Local. Hàng vạn số đẹp không chỉ dễ nhớ mà còn hợp với tên tuổi ngày sinh của riêng bạn giúp thu hút năng lượng tích cực, vạn sự may mắn, thăng hạng mọi mặt cuộc sống!
        </p>
        <marquee> ĐẦU SỐ 098 - SIM SIÊU DATA - SIM SỐ ĐẸP - ĐẶC QUYỀN SIM LOCAL</marquee>
        <div class="sim-cards mt-4">
          <img src="/images/simsodep.webp" alt="Sim Cards" class="img-fluid">
          </div>
          <div class="container text-center py-5">
        <h4>Một số gợi ý từ Local</h4>
        </div>
        <div class="phone-list-section py-5">
        <div class="container">
          <table class="phone-list">
            <thead>
              <tr>
                <th>Số Điện Thoại</th>
                <th>Loại Số</th>
                <th>Giá Tiền</th>
              </tr>
            </thead>
            <!-- ------------------ -->
            <tbody>   
            <tr v-for="phone in phoneNumbers" :key="phone.number">
              <td>{{ phone.number }}</td>
              <td>{{ phone.type }}</td>
              <td>{{ phone.price }}</td>
              <td class="action-buttons">
                <button @click="addToCart(phone)" class="btn2 btn-cart1">
                  <img src="/images/shopi1.svg" class="bi-cart1" alt="Cart">
                </button>
                <button class="btn2 btn-buy">Mua Ngay</button>
              </td>
            </tr>
          </tbody>
          <!-- --------------- -->
          </table>
        </div>
      </div>
      </div>
      </div>
    <!-- Thông báo thêm SP thành công -->
    <div v-if="showAlert" class="alert alert-success alert-dismissible fade show" role="alert">
      <img src="/images/tick.webp" alt="Success">
      {{ alertMessage }}
    </div>
  </div>
</template>

  <script>
 export default {
  name: 'simdodep',
  data() {
    return {
      phoneNumbers: [
        { number: '0901234567', type: 'Số Đẹp', price: '0đ' },
        { number: '0902345678', type: 'Số Đẹp', price: '2.000.000đ' },
        { number: '0845445797', type: 'Số Lặp', price: '2.500.000đ' },
        { number: '0396258648', type: 'Số Lặp', price: '3.000.000đ' },
        { number: '0905632638', type: 'Số Lặp', price: '700.000đ' },
        { number: '0386489872', type: 'Số Lặp', price: '900.000đ' },
        { number: '0905905905', type: 'Số Lặp', price: '1.000.000đ' },
      ],
      showAlert: false,
      alertMessage: '',  
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
      packageDetails: "Gói cước: ABC, Chu kỳ: 12 tháng", // Dữ liệu thực tế
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


};
  </script>
  
  <style>
  .sim-promotion {
    background-color: #0056b3;
    color: #fff;
  }

  .container {
    max-width: 960px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .lead {
    font-size: 1.25rem;
    font-weight: 300;
    margin-top: 1rem;
  }

  .sim-cards {
    position: relative;
  }

  .sim-cards img {
    max-width: 100%;
  }

  .labels {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .label {
    background-color: #fff;
    color: #000;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }

  .icon {
    font-size: 1.5rem;
  }
  /* List sdt */
  .phone-list-section {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px; /* Rounded corners for the section */
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1); /* Optional: shadow for better appearance */
}

.phone-list {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
}

.phone-list th,
.phone-list td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  color: #000; 
  text-align: center;
}

.phone-list th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.phone-list tr:not(:last-child) td {
  border-bottom: 2px solid #ddd; /* Horizontal line between rows */
}

.phone-list thead th:first-child {
  border-top-left-radius: 8px;
}
.phone-list thead th:last-child {
  border-top-right-radius: 8px;
}
.phone-list tbody tr:last-child td:first-child {
  border-bottom-left-radius: 8px;
}
.phone-list tbody tr:last-child td:last-child {
  border-bottom-right-radius: 8px;
}


.action-buttons {
  display: flex;
  justify-content: center; 
  gap: 10px; 
  align-items: center;
}

/* Icon Cart and Buy Now Button */
.btn2 {
  display: inline-flex;
  align-items: center;
  border: none;
  border-radius: 70%; 
  padding: 5px; 
  margin: 0 5px;
  cursor: pointer;
}

.btn-cart1 {
  background-color: #f5dada; 
  border: 1px solid #f5dada; 
  color: #000000; 
  width: 40px; 
  height: 40px; 
  border-radius: 50%; 
  display: inline-flex;
  justify-content: center; 
  align-items: center; 
  padding: 0; 
  
}
.btn-cart1 img {
  width: 20px;
  height: 20px;
}

.btn-buy {
  background-color: #dc3545; 
  color: #fff; 
  padding: 0 15px;
  height: 40px; 
  line-height: 40px; 
  border-radius: 20px; 
  border: none;
  margin-left: 10px;
}
.btn-cart1:hover{
  background-color:#f39d9d ;
}
.btn-buy:hover {
  background-color: #c82333;
}
.alert {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1050;
  background-color: #fff;
  color: #000;
  border: 1px solid #28a745;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.alert img {
  width: 20px;
  height: 20px;
}

</style>