<template>
    <div class="tracuudonhang">
    <div class="container text-center py-5">
        <div class="sim-cards mt-4">
        <img src="/images/tracuu.svg" alt="Sim Cards" class="img-fluid">
        </div>
      <h1>Tra cứu đơn hàng</h1>
      <div class="underline mx-auto"></div>
      <p class="lead">Mã đơn hàng đã được gửi đến email của bạn.</p>
      <p class="lead">Bạn có thể nhập mã đơn hàng xuống dưới đây để theo dõi trạng thái đơn hàng.</p>
        <div class="search-box mt-4">
        <input type="text" class="form-control search-input" placeholder="Nhập mã đơn hàng...">
        <button class="btn btn-primary search-button">
          <img src="/images/search.svg" alt="Tìm kiếm" class="search-icon">
          Tra cứu
        </button>
      </div>
    </div>
</div>
  </template>
  
  <script>
  export default {
    name: 'DonMua'
  }
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  .search-box {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
}
.search-input {
  flex: 1;
  padding: 10px;
  border-radius: 25px;
}
.search-button {
  padding: 10px 20px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}

.search-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
  </style>
  