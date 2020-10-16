import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import {getNewChannels,getNews} from "./services/newsService.js"
import {login,whoAmI,loginOut,reg,regs,logins} from "./services/userService.js"

store.dispatch("loginUser/whoAmI")

logins({
	limit:20,
	order:"hot"
}).then(res=>{
	console.log(res)
})


// login({
// 	loginId:"user",
// 	loginPwd:"123123",
// }).then(res=>{
// 	console.log(res)
// })

// whoAmI().then(res=>{
// 	console.log(res)
// })

// loginOut()

// reg({
// 	loginId:"user998",
// 	loginPwd:"123123",
// 	nickname:"我的哦"
// }).then(res=>{
// 	console.log(res)
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
