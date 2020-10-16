<template>
	<div class="Banner">
		<ul class="image" :style="{
			width:banners.length*100 +'%',
			marginLeft:-((current * 100)+4) +'%'
		}" @mouseenter="this.autoStop" @mouseleave="this.autoStra">
		<li v-for="(item,index) in banners" :key="index" >
			<a><img :src="item.url"></a>
		</li>
		</ul>
		<ul class="dost">
			<li  v-for="(item,index) in banners.length" :key="index"
			:class="{active:index===current}" @click="current=index"></li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:{
			banners:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				current:0,
				tirme:null
			}
		},
		methods:{
			autoStra(){
				if(this.timers){
					return
				}
				this.tirme = setInterval(()=>{
					this.current = (this.current+1) % this.banners.length
				},2000)
			},
			autoStop(){
				clearInterval(this.tirme)
				this.tirme=null
			}
		},
		mounted(){
			this.autoStra()
		},
		destroyed(){
			this.autoStop()
		}
	}
</script>

<style scoped>
	.Banner{
	height: 300px;
	width: 1000px;
	position: relative;
	overflow: hidden;
	margin: 20px auto;
	}
	.Banner .image{
		height: 100%;
	    margin-left: -204%;
	}
	.Banner li{
	display: block;
	width: 1000px;
	height: 100%;
	float: left;
	}
	.Banner li a img{
		width: 1000px;
		height: 100%;
	}
	
		.dost{
		position: absolute;
		bottom: 10px;
		right: 10px;
		display: flex;
		}
		 .dost li{
		width: 10px;
		height: 10px;
		cursor: pointer;
		margin: 0 3px;
		border-radius: 50%;
		border: 1px solid;
		color: red;
		}
		.dost li.active{
			color: #333;
		}
</style>
