import Vue from 'vue'
import Vuex from 'vuex'

import channels from "./channels.js"
import loginUser from "./loginUser.js"

Vue.use(Vuex)

export default new Vuex.Store({
     modules:{
		 channels,
		 loginUser
	 }
})
