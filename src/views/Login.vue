<template>
	<form action="" class="login-container">
	<div class="form-item">
		<div class="input"><label>账号</label>
		<input type="text" v-model="userInfo.loginId" 
		@input="validateEmpty('loginId','账号不能为空')">
		</div>
		<form-error :msg="error.loginId"></form-error>
	</div>
	<div class="form-item">
		<div class="input" autocomplete="new-password"><label>密码</label>
		<input type="password" v-model="userInfo.loginPwd" 
		 @input="validateEmpty('loginPwd','密码不能为空')">
		</div>
		<form-error :msg="error.loginPwd"></form-error>
	</div>
	<div class="form-item">
		<div class="input"><label> </label>
		<button @click.prevent="handleSubmit()">
			{{$store.state.loginUser.isLoading?"isLoading":"登录"}}</button>
		</div>
		<form-error :msg="error.server"></form-error>
	</div>
		</form>
</template>

<script>
	import FormError from "../components/FromError.vue"
	export default{
		data(){
			return {
				userInfo:{
					loginId:"",
					loginPwd:"",
					pwsAgain:"",
					nickname:""
				},
				error:{
					loginId:"",
					loginPwd:"",
					pwsAgain:"",
					nickname:"",
					server:""
				}
			}
		},
		components:{
			FormError
		},
		methods:{
			validateEmpty(field,msg){
				if(this.userInfo[field]){
					this.error[field]="";
					return true
				}else{
					this.error[field]= msg
					return false
				}
			},

			async handleSubmit(){
				if(this.$store.state.loginUser.isLoading){
					return;
				}
			if(this.validateEmpty('loginId','账号不能为空')&
			  this.validateEmpty('loginPwd','密码不能为空'))
			 {
			var result = await this.$store.dispatch("loginUser/login",this.userInfo)
			   if(result){
				   this.$router.push({
					   name:"Home"
				   })
			   }else{
				   this.error.server = "账号/密码不正确"
			   }
			  }
			
			}
		}
	}
	
</script>

<style scoped>
	.login-container{
		width: 400px;
		
	}
	.form-item{
		margin-top: 10px;
	}
	.form-item .error.center{
		text-align: center;
	}
	.form-item .input{
		display: flex;
	}
	.form-item label{
		width: 100px;
		display: inline-block;
		text-align: right;
		line-height: 41px;
	}
	.form-item .error{
		font-size: 14px;
		color: #a44242;
		padding-left:100px;
		height: 30px;
		line-height: 30px;
	}
	.form-item input,
	.form-item button{
		flex-grow: 1;
	}
</style>
