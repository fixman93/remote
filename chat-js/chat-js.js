window.addEventListener("load", function(){
	if(localStorage.getItem("username") == undefined || localStorage.getItem("password") == undefined || localStorage.getItem("username") == null || localStorage.getItem("password") == null) {
		window.location = "index.html";
	}
}, false)