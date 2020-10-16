
import {getNewChannels} from "../services/newsService.js"
export default {
	namespaced:true,//开启命名空间
	state:{
		data:[],
		isLoading:false
	},
	mutations:{
		setIsLoading(state,payload){
			state.isLoading = payload
		},
		setDate(state,payload){
			state.data = payload
		}
	},
	actions:{
		async fetchDate(context){
         var res = await getNewChannels();
		 context.commit("setDate",res)
		}
	}
	
}