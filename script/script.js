let toggle = document.getElementById("nav-toggle");
let mobileBackdrop = document.getElementsByClassName("mobilenav-backdrop")[0];

console.log(toggle.checked);

toggle.onclick = function() {
	if (toggle.checked) {
		// console.log("Now is checked");
		mobileBackdrop.style = "filter: blur(10px)";
	} else {
		// console.log("Not anymore!");
		mobileBackdrop.style = "filter: blur(0px)";
	}
};
