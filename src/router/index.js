import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
	  {
	  	path:"",
	  	redirect:"/login"
	  },
  {
    path: '/home',
    name: "Home",
    component: ()=>import("../views/Home")
  },
  {
	  path:"/login",
	  name:"Login",
	  component: () => import("../views/Login")
  },
  {
  	  path:"/reg",
  	  name:"Reg",
  	  component: () => import("../views/Reg")
  },
  {
  	  path:"/personal",
  	  name:"Personal",
  	  component: () => import("../components/Personal")
  },
  {
  	  path:"/channe/:id",
  	  name:"Channe",
  	  component: () => import("../views/Channe")
  }
	
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
