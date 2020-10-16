<template>
  <div id="app">
 <headers></headers>
 <div class="container">
	 <router-view></router-view>
 </div>
  
  </div>

</template>
<script>
   import Headers from "./components/Headers.vue"
	export default{
		components:{
	      Headers
		}
	}
</script>
<style scoped>
.container{
	margin: 60px auto;
}
</style>
