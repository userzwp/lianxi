 var APPCODE = "eca7c044d9c64b86928af3255973ec8d";
    import axios from "axios"

  export async function getNewChannels(){
	  var res = await axios.get("http://ali-news.showapi.com/newsList",{
		  headers:{
			  Authorization:`APPCODE ${APPCODE}`,
		  },
         
	  })
	  return res.data.showapi_res_body.pagebean.contentlist
  }
  
  export async function getNews(channelId,page=1,limit=10){
	 var res = await axios.get("http://ali-news.showapi.com/newsList",{
	 		headers:{
	 			Authorization:`APPCODE ${APPCODE}`,
	 		},
	 		params:{
	 			channelId,
	 			page,
	 			maxResult:limit,
	 			needContent:1
	 		}
	 	});
		return res.data.showapi_res_body.pagebean
  }
 