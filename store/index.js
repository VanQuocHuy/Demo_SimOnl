
export const state = () => ({
    shippingInfo: {
      fullName: '',
      address1: '',
      // Các trường khác
    }
  })
  
  export const mutations = {
    SET_SHIPPING_INFO(state, info) {
      state.shippingInfo = info
    }
  }
  
  export const actions = {
    updateShippingInfo({ commit }, info) {
      commit('SET_SHIPPING_INFO', info)
    }
  }
  