let login = document.querySelector(".login");
let h1 = document.querySelector(".h1");
let btn = document.querySelector(".btn");
let phone = document.querySelector(".hide");
let stren = document.querySelector(".stren");
let forget = document.querySelector(".forget");
let unhide = document.querySelector(".unhide");

login.addEventListener("click",function(){
if (h1.innerHTML == "SignUp"){
	h1.innerHTML = "Login";
	login.innerHTML = "Don't have an account?";
	phone.classList.add("hide");
	stren.classList.add("hide");
	forget.classList.remove("hide");
	unhide.classList.remove("hide");

}else{
	h1.innerHTML = "SignUp";
	login.innerHTML = "Already have an account";
	phone.classList.remove("hide");
	stren.classList.remove("hide");
	forget.classList.add("hide");
	unhide.classList.add("hide");
	btn.innerHTML = "Create Account";
}
h1.innerHTML = m;
})