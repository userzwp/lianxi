<template>
	<div class="error" :style="{
	visibility: msg?'visible' : 'hidden'
	}">
		{{msg}}
	</div>
</template>

<script>
	export default{
		props:{
			msg:{
				default:"",
				type:String
			}
		}
	}
</script>

<style scoped>
	.error{
		font-size: 14px;
		color: #a44242;
		padding-left:100px;
		height: 30px;
		line-height: 30px;
	}
	.error.center{
		text-align: center;
	}
</style>
