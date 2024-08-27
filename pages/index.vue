<template>
  <div class="bg-red">
    <Slider/>
  <div class="py-5 container" >
  </div>
  <div class="py-5 bg-gray">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6">
          <div class="box-card">
            <img src="/images/logo5.webp" class="w-100" alt="logo5">
            <div class="box-card-body d-flex justify-content-center">
              <NuxtLink to="/simdata" class="px-5 py-2 btn btn-primary">Mua SIM Siêu Data</NuxtLink>
              <!-- <div class="underline"></div> -->
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="box-card">
            <img src="/images/logo6.webp" class="w-100" alt="logo5">
            <div class="box-card-body d-flex justify-content-center">
              <NuxtLink to="/simsodep" class="px-5 py-2 btn btn-primary">Mua SIM Số Đẹp</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  
</template>

<script>
import Slider from '~/components/Slider.vue';

export default {
  name: 'IndexPage',
  components: { Slider},
  head() {
      return {
        title: 'Trang Chủ',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'SimOnl - Trang Chủ'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'SimOnl - Trang Chủ'
          }
        ]
      }
    }
}
</script>
