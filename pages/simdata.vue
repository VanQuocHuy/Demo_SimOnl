<template>
  <div>
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/images/vn1.png" class="d-block w-100" alt="h1">
        </div>
        <marquee> ĐẦU SỐ 098 - SIM SIÊU DATA - SIM SỐ ĐẸP - ĐẶC QUYỀN SIM LOCAL</marquee>
      </div>
   </div>
   <div class="container text-center py-5">
      <h1>Danh Sách Gói Cước Của Local</h1>
      <div class="underline mx-auto"></div>
  </div> 
    <!-- Button Group -->
    <div class="button_group mt-1">
        <button class="btn btn-outline" @click="showContent('data')">Data</button>
        <button class="btn btn-outline" @click="showContent('thoai')">Data - Thoại</button>
        <button class="btn btn-outline" @click="showContent('topping')">Topping</button>
      </div>      
      <!-- Nội dung hiển thị -->
      <div v-if="activeContent === 'data'" class="contents mt-4">
        <div class="row justify-content-center">
          <div class="col-md-3">
          <div class="card-content">
            <div class="card-content-inner">
              <div class="text-content">
                <h3>A68</h3>
                <p>90Gb/tháng</p>
                <p>3Gb/ngày</p>
                <p>68.000đ/tháng</p>
                <h4>180.000đ/SIM</h4>
              </div>
              <div class="highlight-box">
                <h3>A68</h3>
              </div>
            </div>
            <!-- Thêm các nút với biểu tượng -->
            <div class="card-buttons mt-3">
              <button class="btn1 btn-cart">
                <img src="/images/shopi.svg" class="bi-cart" alt=""></button>
              <!-- <button class="btn1 btn-buy-now">Mua Ngay</button> -->
              <NuxtLink to="/buy_now" class="btn btn-buy-now">Mua ngay</NuxtLink>
           </div>
          </div>
        </div>
        
        <div class="col-md-3">
          <div class="card-content">
            <div class="card-content-inner">
              <div class="text-content">
                <h3>A89</h3>
                <p>90Gb/tháng</p>
                <p>4Gb/ngày</p>
                <p>69.000đ/tháng</p>
                <h4>200.000đ/SIM</h4>
              </div>
              <div class="highlight-box">
                <h3>A89</h3>
              </div>
            </div>
            <div class="card-buttons mt-3">
          <button class="btn1 btn-cart">
             <img src="/images/shopi.svg" class="bi-cart" alt=""></button>
             <NuxtLink to="/buy_now" class="btn btn-buy-now">Mua ngay</NuxtLink>
          
           </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card-content">
            <div class="card-content-inner">
              <div class="text-content">
                <h3>A99</h3>
                <p>150Gb/tháng</p>
                <p>5Gb/ngày</p>
                <p>99.000đ/tháng</p>
                <h4>220.000đ/SIM</h4>
              </div>
              <div class="highlight-box">
                <h3>A70</h3>
              </div>
            </div>
            <div class="card-buttons mt-3">
             <button class="btn1 btn-cart">
               <img src="/images/shopi.svg" class="bi-cart" alt=""></button>
               <NuxtLink to="/buy_now" class="btn btn-buy-now">Mua ngay</NuxtLink>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div v-if="activeContent === 'thoai'" class="contents mt-4">
        <div class="row justify-content-center">
          <div class="col-md-3">
          <div class="card-content">
            <div class="card-content-inner">
              <div class="text-content">
                <h3>A89F</h3>
                <p>90Gb/tháng </p>
                <p>3Gb/ngày</p>
                <p> Miễn phí gọi nội mạng</p>
                <h4>89.000đ/tháng</h4>
              </div>
              <div class="highlight-box">
                <h3>A89F</h3>
              </div>
            </div>
            <div class="card-buttons mt-3">
          <button class="btn1 btn-cart">
             <img src="/images/shopi.svg" class="bi-cart" alt=""></button>
          <button class="btn1 btn-buy-now">Mua Ngay</button>
           </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card-content">
            <div class="card-content-inner">
              <div class="text-content">
                <h3>A99P</h3>
                <p>120Gb/tháng</p>
                <p>4Gb/ngày</p>
                <p>Miễn phí gọi nội mạng</p>
                <h4>99.000đ/tháng</h4>
              </div>
              <div class="highlight-box">
                <h3>A99P</h3>
              </div>
            </div>
            <div class="card-buttons mt-3">
          <button class="btn1 btn-cart">
             <img src="/images/shopi.svg" class="bi-cart" alt=""></button>
          <button class="btn1 btn-buy-now">Mua Ngay</button>
           </div>
          </div>
        </div>

          <div class="col-md-3">
          <div class="card-content">
            <div class="card-content-inner">
              <div class="text-content">
                <h3>A199S</h3>
                <p>180Gb/tháng</p>
                <p>6Gb/ngày</p>
                <p>Miễn phí 30 ngày đầu tiên sử dụng</p>
                <h4>119.000đ/tháng</h4>
              </div>
              <div class="highlight-box">
                <h3>A68</h3>
              </div>
            </div>
            <div class="card-buttons mt-3">
          <button class="btn1 btn-cart">
             <img src="/images/shopi.svg" class="bi-cart" alt=""></button>
          <button class="btn1 btn-buy-now">Mua Ngay</button>
           </div>
          </div>
        </div>
      </div>
    </div>

      <div v-if="activeContent === 'topping'" class="contents mt-4">
        <div class="scroll-container">
      <div class="scroll-item">
        <img src="/images/tp1.png" class="w-100" alt="logo5">
        <h3>YT7E</h3>
        <p>30 ngày xem Youtube không giới hạn Data tốc độ cao</p>
        <h5> 10.000đ/30 ngày</h5>
        <button class="btn1 btn-register-now">Đăng Kí Ngay</button>
      </div>

      <div class="scroll-item">
        <img src="/images/tp3.png" class="w-100" alt="logo5">
        <h3>FB7E</h3>
        <p>30 ngày lướt Facebook không giới hạn Data tốc độ cao </p>
        <h5> 10.000đ/3 ngày</h5>
        <button class="btn1 btn-register-now">Đăng Kí Ngay</button>
      </div>

      <div class="scroll-item">
        <img src="/images/simdt1.jpg" class="w-100" alt="logo5">
        <h3>A5D </h3>
        <p>Miễn phí dung lượng 1Gb tốc độ cao sử dụng trong 24h </p>
        <h5> 20.000đ/7 ngày</h5>
        <button class="btn1 btn-register-now">Đăng Kí Ngay</button>
      </div>

      <div class="scroll-item">
        <img src="/images/tp2.png" class="w-100" alt="logo5">
        <h3>A30C</h3>
        <p>Miễn phí dung lượng 4Gb tốc độ cao sử dụng trong 24h </p>
        <h5> 30.000đ/3 ngày</h5>
        <button class="btn1 btn-register-now">Đăng Kí Ngay</button>
      </div>

      <div class="scroll-item">
        <img src="/images/tp4.png" class="w-100" alt="logo5">
        <h3>A10</h3>
        <p>Miễn phí dung lượng 8Gb tốc độ cao sử dụng trong 24h</p>
        <h5> 10.000đ/1 ngày</h5>
        <button class="btn1 btn-register-now">Đăng Kí Ngay</button>
      </div>

      <div class="scroll-item">
        <img src="/images/banner3.png" class="w-100" alt="logo5">
        <h3>D10</h3>
        <p>Đang cập nhật...</p>
      </div>
      <div class="scroll-item">
        <img src="/images/logo5.webp" class="w-100" alt="logo5">
        <h3>D7</h3>
        <p>Đang cập nhật...</p>
      </div>
      <div class="scroll-item">
        <img src="/images/logo6.webp" class="w-100" alt="logo5">
        <h3>D20A</h3>
        <p>Đang cập nhật...</p>
      </div>
      </div>  
    </div>
      
      
<!-- Footer -->
<div class="sim-data">
    <div class="container text-center py-5">
      <h1>Nhà Mạng Siêu Cuốn</h1>
      <div class="underline mx-auto"></div>
      <div class="row mt-5">
            <div class="col-md-4">
                <div class="image-card">
                    <img src="/images/sieudata.svg" class="img-fluid" alt="Sim Data">
                    <h3 class="mt-3">Siêu Data Xài Thả Ga</h3>
                    <p>Với chi phí cực kỳ hợp ví, chỉ bằng một cốc trà đá mỗi ngày, Local mang đến những gói cước 4G siêu data, tốc độ cao với đa dạng lựa chọn. Có Local tha hồ lướt mạng!</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="image-card">
                    <img src="/images/sieusong.svg" class="img-fluid" alt="Sim Số Đẹp">
                    <h3 class="mt-3">Siêu Sóng Phủ Mọi Nơi</h3>
                    <p>Local sử dụng chung hạ tầng với MobiFone - 1 trong 3 nhà mạng lớn nhất Việt Nam, phủ sóng 63 tỉnh thành khắp cả nước. Có Local lướt mạng mượt mà, không lo về sóng!</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="image-card">
                    <img src="/images/sieudeal.svg" class="img-fluid" alt="Đặc Quyền">
                    <h3 class="mt-3">Siêu Deal Free Thỏa Thích</h3>
                    <p>Không chỉ có dàn deal đỉnh cho dân săn SIM Local tậu SIM siêu data giá hời, mà chúng tôi còn có kho bí kíp cho dân chơi Local kiếm data FREE mỗi ngày. Có Local ưu đãi trầm trồ!</p>
                </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'simdata',
  data() {
    return {
      activeContent: null, // Quản lý trạng thái của nội dung hiển thị
    };
  },
  methods: {
    showContent(type) {
      this.activeContent = type; // Cập nhật trạng thái khi người dùng nhấp vào nút
    }
  }
};
</script>


   
<style>
.container {
  padding: 20px;
}

.button_group {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
}

.btn-outline {
  background-color: #ffffff;
  border-color: #f40505;
  color: #ff0101;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  
}

.btn-outline:hover {
  background-color: #dc3545;
  color: white;
}

.contents {
  margin-top: 40px;
}
.card-content {
  background-color: #f4d7d7b3;
  padding: 20px;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  margin-bottom: 30px;
}
.card-content p {
  margin: 5px 0; /* Giảm khoảng cách trên và dưới của mỗi thẻ p */
  padding: 0;    /* Loại bỏ padding nếu có */
  line-height: 1.2; /* Điều chỉnh chiều cao dòng nếu cần để thu hẹp khoảng cách */
}
.card-content p:last-of-type {
  margin-bottom: 20px; /* Tạo khoảng cách giữa thẻ p cuối cùng và thẻ h3 */
}
.card-content h4{
  font-size: 18px;
  color: red;
}
.card-content-inner {
  display: flex;
  width: 100%;
}
.highlight-box {
  background-color: #dc3545; 
  color: white; 
  padding: 20px;
  border-radius: 0.75rem;
  min-width: 100px; 
  max-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.text-content {
  flex: 1; 
  padding-right: 20px; 
}
.card-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn1 {
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-cart {
  background-color: #d94f5c;
  color: white;
}

.btn-cart:hover {
  background-color: #ef071e;
}

.btn-buy-now {
  background-color: #28a745;
  color: white;
}

.btn-buy-now:hover {
  background-color: #176327;
}

.fas {
  margin-right: 5px; /* Khoảng cách giữa biểu tượng và văn bản */
}
/* topping */

.scroll-container {
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
  gap: 20px;
}

.scroll-item {
  min-width: 200px;
  background-color: #f4d7d7b3;
  padding: 20px;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.scroll-item img {
  max-width: 100%;
  height: auto;
  border-radius: 0.75rem;
}

.scroll-item h3 {
  margin-top: 10px;
  font-size: 1.2rem;
}

.scroll-item p {
  margin-top: 5px;
  font-size: 1rem;
}
.btn-register-now {
  background-color: red; 
  color: white; 
  transition: background-color 0.3s ease; /* Thêm hiệu ứng chuyển đổi */
  display: inline-block;
}

.btn-register-now:hover {
  background-color: green; 
}




/* Footer */
.sim-data {
  background-color: #00b35c;
  color: #fff;
  padding-top: 10px;
}
.image-card {
    border: 1px solid #ccc;
    border-radius: 0.75rem;
    background-color: #00b35c;
    padding: 20px;
    transition: box-shadow 0.3s ease;
}
</style>