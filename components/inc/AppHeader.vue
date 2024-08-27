<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
        <NuxtLink to="/" class="navbar-brand">
          <img src="/images/logo.svg" class="logo-img" alt="Logo">
        </NuxtLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link nav-text"> Trang Chủ </NuxtLink>
        </li> 
        <li class="nav-item">
          <NuxtLink to="/simdata" class="nav-link nav-text"> SIM Siêu Data </NuxtLink>
        </li>
        <li class="nav-item"> 
          <NuxtLink to="/simsodep" class="nav-link nav-text"> SIM Số Đẹp </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/support" class="nav-link nav-text"> Liên Hệ</NuxtLink>
        </li>
      </ul>
      <div class="d-flex align-items-center">
        <NuxtLink to="/giohang" class="btn btn-outline-light" id="gio-hang">
          <img src="/images/shopi.svg" alt="Giỏ hàng" class="giohang">
        </NuxtLink>
        <NuxtLink to="/donmua" class="btn btn-outline-light" id="don-mua">
          <img src="/images/logo1.svg" alt="Đơn mua" class="donmua">
        </NuxtLink>
      </div>
    </div>
  </div>  
</nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style>
.logo-img{
  width: 100px;
  height: 70px;
  margin-left: 0px;
}
.navbar{
	background-color: rgb(255 47 72) !important;
  width: 100% ;
  height: 77px;
  display: flex;
  justify-content: space-between; /* Căn đều phần tử con */
  align-items: center;
}
.nav-text{
  font-size: 1rem;
  color: white;
 
}
.nav-item {
  margin-right: 1rem; /* Giãn khoảng cách giữa các mục */
}
.nav-item:last-child {
  margin-right: 0; /* Loại bỏ khoảng cách cho mục cuối cùng nếu cần */
}
#gio-hang {
  margin-right: 10px; /* Đẩy nút giỏ hàng sang bên trái */
  display: flex;
  align-items: center;
  justify-content: center; /* Căn giữa hình ảnh trong nút */
  width: 32px; /* Đặt kích thước cho nút */
  height: 32px; /* Đặt kích thước cho nút */
  border-radius: 50%; /* Làm cho nút thành hình tròn */
  padding: 0; /* Loại bỏ padding nếu có */
}
.giohang {
  width: 20px; 
  height: 20px; 
}
#don-mua {
  margin-right: -70px; 
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 32px; 
  height: 32px; 
  border-radius: 50%; 
  padding: 0; 
}
.donmua {
  width: 20px; 
  height: 20px; 
}
</style>
