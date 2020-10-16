<template>	
	<div class="channe">
<!-- 		<div class="type-title">{{channelName}}</div>
		<news-list :news="news"></news-list>
		<pager :page="page" :limit="limit" :pannelNumber="pannelNumber" 
		@pageChange="pageChange" :total="total"></pager> -->
	</div>
</template>

<script>
	import Pager from "../components/Pager.vue"
	import NewsList from "../components/NewsList.vue"
	import * as newsServ from "../services/newsServices.js"
	export default {
		components:{
			Pager,
			NewsList
		},
		data(){
			return {
				channelName:"",
				limit:15,
				total:2020,
				news:[],
				pannelNumber:6
			}
		},
		methods:{
			pageChange(newPage){
				// this.$router.push("?page="+ newPage)
				this.$router.push({
					name:"Channe",
					query:{
						page:newPage
					},
					params:{
						id:this.$route.params.id
					}
				})
				this.setDatas()
			},
			async setChannleName(){
				var res = await newsServ.getNewChannels();
			    var channel = res.find(item => item.channelId === this.$route.params.id)
				this.channelName = channel.channelName
			},
			async setDatas(){
				var res = await newsServ.getNews(this.$route.params.id,this.page,
				this.limit)
				console.log(res)
				this.total = res.allNum
				this.news = res.contentlist
			}
		},
		computed:{
			page(){
				return +this.$route.query.page || 1;
			}
		},
		watch:{
			"$route.params.id":{
				immediate:true,
				handler(newId,oldId){
					this.setChannleName();
					this.setDatas()
					console.log(newId,oldId)
				}
			}
		}
	}
</script>

<style scoped>
	.type-title{
		font-size: 2em;
		color: #888;
		border-bottom: 1px solid #ccc;
		padding-bottom: 10px;
	}
</style>
