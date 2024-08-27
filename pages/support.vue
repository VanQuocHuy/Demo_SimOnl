<template>
    <div class="support-page">
    <div class="container py-5">
      <div class="row">
        <div class="col-12 text-center mb-4">
          <h1>Hỗ Trợ</h1>
          <div class="underline mx-auto"></div>
          <p class="lead">Chúng tôi ở đây để giúp đỡ bạn</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h2>Liên hệ với chúng tôi</h2>
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Họ và tên</label>
              <input type="text" class="form-control" id="name" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Tin nhắn</label>
              <textarea class="form-control" id="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Gửi</button>
          </form>
        </div>
        
        <div class="col-md-6">
          <h2>Thông tin liên hệ</h2>
          <p>Email: support@simonl.com</p>
          <p>Điện thoại: 0845445797</p>
          <p>Địa chỉ: 200 Xuân Thủy, Quận Cẩm Lệ, TP.Đà Nẵng</p>
          <img src="/images/hotro.svg" class="hotro" alt="Contact Info">
        </div>
      </div>
      <div class="support-page">
    <div class="container py-5">
      <div class="row">
        <div class="col-12 text-center mb-4">
          <h1>Các kênh hỗ trợ</h1>
          <p class="lead">Liên hệ ngay để giải đáp các thắc mắc</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-3">
          <div class="support-button">
            <a href="https://www.facebook.com/kuxuys" class="btn btn-danger" target="_blank">
              <i class="bi bi-facebook"></i> Facebook Local
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="support-button">
            <a href="https://zalo.me/0845445797" class="btn btn-danger" target="_blank">
              <i class="bi bi-facebook"></i> Zalo
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="support-button">
            <a href="https://www.instagram.com/wuyzz_06/" class="btn btn-danger" target="_blank">
              <i class="bi bi-facebook"></i> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
  
</template>

<script>
export default {
    name: 'support',
    head() {
      return {
        title: 'Hỗ Trợ',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'SimOnl - Hỗ Trợ'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'SimOnl - Hỗ Trợ'
          }
        ]
      }
    }

}
</script>
<style>
.support-page {
  background-color: #f8f9fa;
  color: #343a40;
}

.container {
  max-width: 800px;
}

h1 {
  margin-bottom: 1rem;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

form {
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}
.hotro{
  height: 350px;

}
.support-button {
  text-align: center;
  margin: 1rem 0;
  
}

.btn-danger {
  border-color: #3c2ca6;
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn-danger i {
  margin-right: 0.5rem;
}

.btn-danger:hover {
  background-color: #242dd5;
  color: #fff;
}
</style>