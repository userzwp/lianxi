<template>
	<div class="Home">
	<!-- 	<banner :banners="banners"></banner>
		<channels @change="changeHandle"></channels>
		<news-list :news="news"></news-list> -->
	</div>
</template>

<script>
	import Banner from "../components/Banner.vue"
	import Channels from "../components/Channels.vue"
	import NewsList from "../components/NewsList.vue"
	import {getNews} from "../services/newsService.js"
	
	export default{
		data(){
			return {
				banners:[
					{url:require("../assets/img/1.jpg")},
					{url:require("../assets/img/2.jpg")},
					{url:require("../assets/img/4.jpg")},
					{url:require("../assets/img/3.jpg")},
					{url:require("../assets/img/5.jpg")}

				],
				news:[]
			}
		},
		components:{
			Banner,
			Channels,
			NewsList,
		},
         created() {
         	this.changeHandle("5572a109b3cdc86cf39001e6")
         },
		methods:{
			async changeHandle(id){
				var res = await getNews(id)
				this.news = res
				console.log(res)
			}
		}
	}
</script>

<style>
</style>
