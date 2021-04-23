const routes = [
  { path: '/qrcode-vue', component: home }, //set path '/' if you want
  {
      path: "*",
      redirect: "/"
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

const app = new Vue({
  router
}).$mount('#app')
