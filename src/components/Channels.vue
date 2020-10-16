<template>
	<div class="news-types" v-if="data.length>0">
		<div class="item" v-for="(item,index) in showChannel" :key="item.id"
		 :class="{
			 'active':current === index
		 }" @click="change(index,item.channelId)">
		<span class="name">{{item.channelName}}</span>
		</div>
		<a href="javascript:;" @click.prevent="handle">{{falg?"展开":"收起"}}</a>
	   </div>

</template>

<script>
	import {mapState} from "vuex"
	export default {
		data(){
			return {
				falg:true,
				current:0
			}
		},
	 created() {
	 	this.$store.dispatch("channels/fetchDate")
	 },
	 computed:{
		 ...mapState("channels",["data"]),
		 showChannel(){
			 if(this.falg){
				return this.data.slice(0,8)
			 }else{
				 return this.data
			 }
		 }
	 },
	 methods:{
		 handle(){
			 this.falg = !this.falg
		 },
		 change(index,id){
			 this.current = index
			 this.$emit("change",id)
		 }
	 }
	}
</script>

<style scoped>
	.news-types{
		margin: 10px 0;
		border-bottom: 1px solid #ccc;
		display: flex;
		flex-wrap: wrap;
		font-size: 14px;
		padding-bottom: 15px;
	}
	
	.item{
		padding: 10px 20px;
		border-radius: 5px;
		border: 1px solid #ccc;
		margin-right: 15px;
		margin: 7px 15px 7px 0;
		cursor: pointer;
		position: relative;
	}
	.item:hover{
		background: #ccc;
	}
	.item.active{
		background: #000;
		color: #fff;
	}
	.news-types a{
		text-decoration: none;
		align-self: flex-end;
		margin-bottom: 10px;
		color: #409eff;
	}
</style>
