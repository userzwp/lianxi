<template>
	<form action="" class="login-container">
		<div class="form-item" 	>
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
			<div class="input" autocomplete="new-password"><label>重复密码</label>
			<input type="password" v-model="userInfo.pwsAgain" 
			@input="validatePwdAgain">
			</div>
				<form-error :msg="error.pwsAgain"></form-error>
		</div>
		<div class="form-item">
			<div class="input" autocomplete="new-password"><label>昵称</label>
			<input type="text" v-model="userInfo.nickname" 
			@input="validateEmpty('nickname','请输入昵称')">
			  </div>
              	<form-error :msg="error.nickname"></form-error>
		</div>
		<div class="form-item">
			<div class="input" autocomplete="new-password"><label></label>
			<button @click.prevent="handleSubmit">注册</button>
			</div>
         	<form-error :msg="error.server"></form-error>
		</div>
	</form>
</template>

<script>
 import FormError from "../components/FromError.vue"
 import {reg} from "../services/userService.js"
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
					this.error[field] = ""
					return true
				}else{
					this.error[field] = msg 
					return false
				}
			},
			validatePwdAgain(){
				var result = this.validateEmpty("pwsAgain","重复密码不能为空")
				if(result){
					if(this.userInfo.loginPwd !== this.userInfo.pwsAgain){
						this.error.pwsAgain= "两次密码不一致"
					}else{
					 this.error.pwsAgain =""
					}
					return true
				}
			},
		async handleSubmit(){
				if(this.validateEmpty('loginId','账号不能为空') &
				   this.validateEmpty('loginPwd','密码不能为空') &
				this.validatePwdAgain() & 
				this.validateEmpty('nickname','请输入昵称')
				){
					var res = await reg(this.userInfo)
				    if(res.data){
						this.$router.push({
							name:"Login"
						})
					}else{
						this.error.server =res.msg
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
