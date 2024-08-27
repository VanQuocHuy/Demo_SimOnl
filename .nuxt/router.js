import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _44f8d9c8 = () => interopDefault(import('..\\pages\\buy_now.vue' /* webpackChunkName: "pages/buy_now" */))
const _28e2d4e7 = () => interopDefault(import('..\\pages\\donmua.vue' /* webpackChunkName: "pages/donmua" */))
const _7c80ae3e = () => interopDefault(import('..\\pages\\giohang.vue' /* webpackChunkName: "pages/giohang" */))
const _8dd7f700 = () => interopDefault(import('..\\pages\\simdata.vue' /* webpackChunkName: "pages/simdata" */))
const _f89eec66 = () => interopDefault(import('..\\pages\\simsodep.vue' /* webpackChunkName: "pages/simsodep" */))
const _abcbf764 = () => interopDefault(import('..\\pages\\support.vue' /* webpackChunkName: "pages/support" */))
const _57f3a191 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/buy_now",
    component: _44f8d9c8,
    name: "buy_now"
  }, {
    path: "/donmua",
    component: _28e2d4e7,
    name: "donmua"
  }, {
    path: "/giohang",
    component: _7c80ae3e,
    name: "giohang"
  }, {
    path: "/simdata",
    component: _8dd7f700,
    name: "simdata"
  }, {
    path: "/simsodep",
    component: _f89eec66,
    name: "simsodep"
  }, {
    path: "/support",
    component: _abcbf764,
    name: "support"
  }, {
    path: "/",
    component: _57f3a191,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
