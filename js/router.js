const routes = [
  { path: '/', component: home },
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
