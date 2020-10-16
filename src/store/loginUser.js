import {login,loginOut,whoAmI} from "../services/userService.js"
export default {
	namespaced:true,
	state:{
		data:null,
		isLoading:false
	},
	mutations:{
		setData(state,payload){
			state.data = payload
		},
		setIsLoading(state,payload){
			state.isLoading = payload
		}
	},
	actions:{
	  async	login(context,payload){
		  context.commit("setIsLoading",true)
		  var result = false
		 var res = await login(payload);
			if(res.code === 0){
				context.commit("setData",res.data)
				result = true }
			context.commit("setIsLoading",false)
			return result
		},
		async whoAmI(context){
			context.commit("setIsLoading",true)
		 var res =	await whoAmI();
		 context.commit("setData",res)
		 context.commit("setIsLoading",false)
		},
		 loginOut(context){
			loginOut();
			context.commit("setData",null)
		}
	}
}