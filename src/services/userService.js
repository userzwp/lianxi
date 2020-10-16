import axios from "axios";
export async function login(loginInfo){
	var res = await axios.post("/api/user/login",loginInfo);
	var token = res.headers.authorization
	if(token){
		localStorage.setItem("token",token)
	}
	return res.data

}

export async function whoAmI(){
	var token = localStorage.getItem("token")
	if(!token){
		return null
	}
	var res = await axios.get("/api/user/whoami",{
		headers:{
			authorization:`bearer ${token}`
		}
	});
	return res
}
export function loginOut(){
	localStorage.removeItem("token")
}

export async function reg(userInfo){
	var res = await axios.post("/api/user/reg",userInfo)
		return res.data
}

export async function regs(userInfo){
	var res = await axios.post("http://112.74.99.5:3000/web/api/register",userInfo)
	return res
}
