<template>
	<div class="header">
		<div class="container">
			<ul class="nav">
				<li><router-link :to="{name:'Home'}">首页</router-link></li>
			   <li v-for="item in change" :key="item.id">
					 <router-link :to="{
						 name:'Channe',
						 params:{
							 id:item.channelId
						 }
					 }">
					 
						 {{item.channelName}}
					 </router-link>
				 </li>
			</ul>
		<div class="user">
				<span v-if="isLogging">loading...</span>
				<template v-else-if="loginUser">
					<router-link :to="{name:'Personal'}">
						{{loginUser.nickname}}
					</router-link>
					<a href="" @click.prevent="handleLoginOut">退出登录</a>
				</template>
				<template v-else>
				<router-link :to="{name:'Login'}">登录</router-link>
				<router-link :to="{name:'Reg'}">注册</router-link> 
				</template>
			</div> 
		
		</div>
	</div>
</template>

<script>
	import {mapState} from "vuex"
	export default{
		computed:{
			...mapState("channels",["data"]),
			...mapState("loginUser",{
				loginUser:"data",
				isLogging:"isLoading"
			}),
			change(){
				return this.data.slice(0,5)
			}
		},
		methods:{
			handleLoginOut(){
				this.$store.dispatch("loginUser/loginOut");
				this.$router.push({
					name:"Login"
				})
			}
		}
	}
</script>

<style scoped>
	.header{
		height: 60px;
		background: #000;
	    color: #fff;
		line-height: 60px;
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		
	}
	
	 .container{
	   display: flex;
	   }
	   .container ul{
		   list-style: none;
	   }
	   .container ul a{
	   		text-decoration: none;
	   }
	.nav{
		margin: 0 60px;
		display: flex;
		flex-grow: 1;
	}
	.nav a{
		display: block;
		padding: 0 30px;
	}
	.nav .router-link-exact-active{
		color: #fcb85f;
	}
	.user{
		font-size: 16px;
	}
		.user a{
			text-decoration: none;
		}
	.user * {
		margin-left: 10px;
	}
	.header a{
		color: #fff;
	}
</style>
