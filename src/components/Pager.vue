<template>
	<div class="pager">
		<a href="javascript:;" class="pager-item"
		:class="{
			disabled:page === 1
		}" @click.prevent="handleChange(1)">首页</a>
		<a href="javascript:;" class="pager-item" 
		:class="{
			disabled:page === 1
		}" @click.prevent="handleChange(page-1)">上一页</a>
		
           <a href="javascript:;" v-for="n in numbers" class="pager-item"
           @click="handleChange(n)" :key="n" :class="{
           	active:n===page
           }">{{n}}</a>
		
		<a href="javascript:;" class="pager-item"
		:class="{
			disabled:page === pageNumber
		}" @click.prevent="handleChange(page+1)">下一页</a>
		<a href="javascript:;" class="pager-item" 
		:class="{
			disabled:page === pageNumber
		}" @click.prevent="handleChange(pageNumber)">尾页</a>
		<span class="pager-text">
			<i>{{page}}</i>
			     /
		    <i>{{pageNumber}}</i>
		</span>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		props:{
			page:{
				type:Number,
				default:1
			},
			total:{
				default:1110,
				type:Number
			},
			limit:{
				default:10,
				type:Number
			},
			pannelNumber:{
				default:10,
				type:Number
			}
		},
		computed:{
			pageNumber(){
				return Math.ceil(this.total / this.limit)
			},
			numbers(){
				var arrs=[];
				for(var i=this.minNumber;i<=this.maxNumber;i++){
					arrs.push(i);
				}
				return arrs;
			
			},
			minNumber(){
				var n = this.page - this.pannelNumber/2
				if(n<1){
					n =1
				}
				return n;
			},
			maxNumber(){
				var n = this.minNumber + this.pannelNumber -1
				if(n>this.pageNumber){
					n===this.pageNumber
				}
				return n;
			},
		
		},
	methods:{
		handleChange(newPage){
			if(newPage<1){
				newPage =1
			}else if(newPage>this.pageNumber){
				newPage=this.pageNumber
			}
			
			this.$emit("pageChange",newPage)
		}
	},
	
	}
</script>

<style scoped>
	.pager{
		text-align: center;
		margin: 20px 0;
	}
	.pager a{
		text-decoration: none;
	}
	.pager .pager-item{
		display: inline-block;
		padding: 5px 7px;
		border: 1px solid #ccc;
		margin: 8px;
		cursor: pointer;
		color: rgb(96,96,224);
	}
	.pager .pager-item.disabled{
		color: #ccc;
		cursor: not-allowed;
	}
	.pager .pager-item.active{
		color: #f40;
		border: none;
		cursor: autoauto;
	}
</style>
